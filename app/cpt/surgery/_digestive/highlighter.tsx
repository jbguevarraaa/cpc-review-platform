"use client";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";

/**
 * ============================================================================
 * Text-selection highlighter (v2)
 * ============================================================================
 * Select/drag over any text on the page, choose yellow or green from the
 * small popup that appears, and exactly that text gets highlighted — not
 * the whole paragraph/list item it lives in. Click directly on an existing
 * highlight (no drag) to remove it. State is per-browser (localStorage),
 * keyed by the page's path, so it survives reloads but never leaves the
 * device (there's no login system on this site).
 *
 * `<HighlightToolbar />` is the only integration point a page needs — drop
 * it once anywhere in the page (it renders a small fixed pill). It sets up
 * a page-wide selection listener scoped to the nearest <main> ancestor (or
 * document.body if none), so no per-paragraph wrapping is required.
 *
 * `<Highlightable>` is kept as a plain pass-through wrapper for backward
 * compatibility with pages that already wrap content in it — it no longer
 * does its own click-to-highlight (that's what caused whole-block
 * highlighting on a drag); the real mechanism now lives in HighlightToolbar.
 */

export type HLColor = "yellow" | "green";
const COLOR_HEX: Record<HLColor, string> = { yellow: "#fde047", green: "#86efac" };

type HLEntry = { id: string; start: number; end: number; color: HLColor };

const EVENT = "cpc-hl-change";
const TOOLBAR_ATTR = "data-hl-toolbar";
const MARK_ATTR = "data-hl-id";

function storageKeyFor(pathname: string) {
  return `cpc-highlights-v2:${pathname}`;
}
function readEntries(key: string): HLEntry[] {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    // Ignore the older single-color format (a plain array of id strings) — the
    // character-offset scheme below is unrelated, so there's nothing to migrate.
    if (parsed.length && typeof parsed[0] === "string") return [];
    return parsed.filter(
      (e) => e && typeof e.id === "string" && typeof e.start === "number" && typeof e.end === "number" && (e.color === "yellow" || e.color === "green")
    ) as HLEntry[];
  } catch {
    return [];
  }
}
function writeEntries(key: string, entries: HLEntry[]) {
  try {
    localStorage.setItem(key, JSON.stringify(entries));
  } catch {
    /* ignore (private browsing, quota, etc.) */
  }
  try {
    window.dispatchEvent(new CustomEvent(EVENT, { detail: { key } }));
  } catch {
    /* ignore */
  }
}

function getScope(): HTMLElement {
  return (document.querySelector("main") as HTMLElement | null) ?? document.body;
}

/** Skip the toolbar's own subtree (its text changes as highlights are added,
 * which would otherwise corrupt the character-offset math) and non-content
 * elements. */
function acceptNode(node: Node): number {
  const parent = (node as Text).parentElement;
  if (!parent) return NodeFilter.FILTER_REJECT;
  if (parent.closest(`[${TOOLBAR_ATTR}]`)) return NodeFilter.FILTER_REJECT;
  if (parent.closest("script,style,noscript")) return NodeFilter.FILTER_REJECT;
  return NodeFilter.FILTER_ACCEPT;
}

function textWalker(scope: HTMLElement): Text[] {
  const walker = document.createTreeWalker(scope, NodeFilter.SHOW_TEXT, { acceptNode });
  const nodes: Text[] = [];
  let n: Node | null;
  // eslint-disable-next-line no-cond-assign
  while ((n = walker.nextNode())) nodes.push(n as Text);
  return nodes;
}

/** Character offset of a (node, localOffset) point within the scope's flattened text. */
function pointToOffset(scope: HTMLElement, node: Node, localOffset: number): number | null {
  const nodes = textWalker(scope);
  let acc = 0;
  for (const t of nodes) {
    if (t === node) return acc + localOffset;
    acc += t.data.length;
  }
  return null;
}

/** Convert the current window selection (if fully inside scope) to [start, end] offsets. */
function selectionToOffsets(scope: HTMLElement): { start: number; end: number; rect: DOMRect } | null {
  const sel = window.getSelection();
  if (!sel || sel.isCollapsed || sel.rangeCount === 0) return null;
  const range = sel.getRangeAt(0);
  if (!scope.contains(range.commonAncestorContainer)) return null;
  const start = pointToOffset(scope, range.startContainer, range.startOffset);
  const end = pointToOffset(scope, range.endContainer, range.endOffset);
  if (start === null || end === null || end <= start) return null;
  const rect = range.getBoundingClientRect();
  return { start, end, rect };
}

/** Wrap the [start, end) slice of the scope's flattened text in a <mark>, one
 * per underlying text node the range touches (so it works across element
 * boundaries like a bold span in the middle of a sentence). */
function applyHighlight(scope: HTMLElement, id: string, start: number, end: number, color: HLColor) {
  const nodes = textWalker(scope);
  let acc = 0;
  // Collect targets first — surroundContents() splits text nodes, which would
  // invalidate a still-in-progress walk if we mutated while iterating it.
  const targets: { node: Text; from: number; to: number }[] = [];
  for (const t of nodes) {
    const nodeStart = acc;
    const nodeEnd = acc + t.data.length;
    acc = nodeEnd;
    const from = Math.max(start, nodeStart);
    const to = Math.min(end, nodeEnd);
    if (from < to) targets.push({ node: t, from: from - nodeStart, to: to - nodeStart });
  }
  for (const { node, from, to } of targets) {
    try {
      const r = document.createRange();
      r.setStart(node, from);
      r.setEnd(node, to);
      const mark = document.createElement("mark");
      mark.setAttribute(MARK_ATTR, id);
      mark.style.backgroundColor = COLOR_HEX[color];
      mark.style.borderRadius = "3px";
      mark.style.cursor = "pointer";
      mark.title = "Click to remove this highlight";
      r.surroundContents(mark);
    } catch {
      /* a boundary that can't be wrapped cleanly (rare) — skip that fragment */
    }
  }
}

function removeHighlight(id: string) {
  const marks = document.querySelectorAll(`mark[${MARK_ATTR}="${id}"]`);
  marks.forEach((mark) => {
    const parent = mark.parentNode;
    if (!parent) return;
    while (mark.firstChild) parent.insertBefore(mark.firstChild, mark);
    parent.removeChild(mark);
    parent.normalize();
  });
}

function clearAllHighlights(scope: HTMLElement) {
  const marks = scope.querySelectorAll(`mark[${MARK_ATTR}]`);
  marks.forEach((mark) => {
    const parent = mark.parentNode;
    if (!parent) return;
    while (mark.firstChild) parent.insertBefore(mark.firstChild, mark);
    parent.removeChild(mark);
    parent.normalize();
  });
}

/**
 * Backward-compatible pass-through. Older pages wrap individual paragraphs/
 * list items in this — it no longer adds its own click behavior (that's what
 * made a drag highlight the whole surrounding block); real highlighting now
 * happens at the page level via HighlightToolbar, so this simply renders its
 * children in the requested tag.
 */
export function Highlightable({
  as = "span",
  style,
  children,
}: {
  id?: string;
  as?: "span" | "div" | "li" | "td";
  style?: CSSProperties;
  children: ReactNode;
}) {
  const Tag = as as any;
  return <Tag style={style}>{children}</Tag>;
}

/**
 * Drop once anywhere in a page. Renders a small floating "N highlighted /
 * Clear all" pill, and sets up the page-wide select-to-highlight behavior
 * (scoped to the nearest <main>, or the whole page if there isn't one).
 */
export function HighlightToolbar() {
  const pathname = usePathname() || "";
  const key = storageKeyFor(pathname);
  const [counts, setCounts] = useState({ yellow: 0, green: 0 });
  const [mounted, setMounted] = useState(false);
  const [popup, setPopup] = useState<{ top: number; left: number; start: number; end: number } | null>(null);
  const popupRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMounted(true);
    const scope = getScope();

    const recount = () => {
      const entries = readEntries(key);
      let yellow = 0;
      let green = 0;
      for (const e of entries) if (e.color === "yellow") yellow++; else green++;
      setCounts({ yellow, green });
    };

    const restore = () => {
      clearAllHighlights(scope);
      for (const e of readEntries(key)) applyHighlight(scope, e.id, e.start, e.end, e.color);
      recount();
    };

    restore();

    const onChange = (e: Event) => {
      const detail = (e as CustomEvent).detail as { key: string } | undefined;
      if (!detail || detail.key === key) recount();
    };
    window.addEventListener(EVENT, onChange);

    const onMouseUp = (ev: MouseEvent) => {
      // Clicking (not dragging) directly on an existing highlight removes it.
      const target = ev.target as HTMLElement | null;
      const sel = window.getSelection();
      const clickedMark = target?.closest?.(`mark[${MARK_ATTR}]`) as HTMLElement | null;
      if (clickedMark && (!sel || sel.isCollapsed)) {
        const id = clickedMark.getAttribute(MARK_ATTR);
        if (id) {
          const entries = readEntries(key).filter((e) => e.id !== id);
          writeEntries(key, entries);
          removeHighlight(id);
          recount();
        }
        setPopup(null);
        return;
      }
      // Ignore clicks inside the toolbar/popup itself.
      if (target?.closest?.(`[${TOOLBAR_ATTR}]`)) return;

      const picked = selectionToOffsets(scope);
      if (!picked) {
        setPopup(null);
        return;
      }
      setPopup({ top: picked.rect.top - 44, left: Math.max(8, picked.rect.left), start: picked.start, end: picked.end });
    };
    document.addEventListener("mouseup", onMouseUp);

    return () => {
      window.removeEventListener(EVENT, onChange);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, [key]);

  const choose = (color: HLColor) => {
    if (!popup) return;
    const scope = getScope();
    const id = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
    const entries = readEntries(key);
    entries.push({ id, start: popup.start, end: popup.end, color });
    writeEntries(key, entries);
    applyHighlight(scope, id, popup.start, popup.end, color);
    window.getSelection()?.removeAllRanges();
    setPopup(null);
  };

  const total = counts.yellow + counts.green;

  return (
    <>
      {popup && (
        <div
          ref={popupRef}
          {...{ [TOOLBAR_ATTR]: "true" }}
          style={{
            position: "fixed",
            top: Math.max(8, popup.top),
            left: popup.left,
            zIndex: 50,
            background: "#111827",
            borderRadius: "10px",
            padding: "6px",
            display: "flex",
            gap: "6px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
          }}
        >
          <button
            onClick={() => choose("yellow")}
            title="Highlight yellow"
            style={{ width: "26px", height: "26px", borderRadius: "50%", background: COLOR_HEX.yellow, border: "2px solid #fff", cursor: "pointer" }}
          />
          <button
            onClick={() => choose("green")}
            title="Highlight green"
            style={{ width: "26px", height: "26px", borderRadius: "50%", background: COLOR_HEX.green, border: "2px solid #fff", cursor: "pointer" }}
          />
        </div>
      )}
      {mounted && total > 0 && (
        <div
          {...{ [TOOLBAR_ATTR]: "true" }}
          style={{
            position: "fixed",
            right: "18px",
            bottom: "18px",
            zIndex: 40,
            background: "#111827",
            color: "#fff",
            borderRadius: "999px",
            padding: "10px 16px",
            fontSize: "13px",
            fontWeight: 700,
            boxShadow: "0 8px 20px rgba(0,0,0,0.28)",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontFamily: "Arial, sans-serif",
          }}
        >
          <span>
            🟡 {counts.yellow} · 🟢 {counts.green}
          </span>
          <button
            onClick={() => {
              writeEntries(key, []);
              clearAllHighlights(getScope());
            }}
            style={{
              background: "rgba(255,255,255,0.15)",
              border: "none",
              color: "#fff",
              borderRadius: "999px",
              padding: "4px 10px",
              fontWeight: 700,
              cursor: "pointer",
              fontSize: "12px",
            }}
          >
            Clear all
          </button>
        </div>
      )}
    </>
  );
}
