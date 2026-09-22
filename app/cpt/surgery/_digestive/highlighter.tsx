"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode, type CSSProperties } from "react";

const EVENT = "cpc-hl-change";

export type HLColor = "yellow" | "green";
const COLOR_HEX: Record<HLColor, string> = { yellow: "#fde047", green: "#86efac" };
/** Click order: off → yellow → green → off. */
const NEXT: Record<"off" | HLColor, "off" | HLColor> = { off: "yellow", yellow: "green", green: "off" };

function storageKeyFor(pathname: string) {
  return `cpc-highlights:${pathname}`;
}

function readMap(key: string): Record<string, HLColor> {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      // Migrate the older single-color (yellow-only) format: a plain array of ids.
      const map: Record<string, HLColor> = {};
      for (const id of parsed as string[]) map[id] = "yellow";
      return map;
    }
    return (parsed ?? {}) as Record<string, HLColor>;
  } catch {
    return {};
  }
}
function writeMap(key: string, map: Record<string, HLColor>) {
  try {
    localStorage.setItem(key, JSON.stringify(map));
  } catch {
    /* ignore (private browsing, quota, etc.) */
  }
  try {
    window.dispatchEvent(new CustomEvent(EVENT, { detail: { key } }));
  } catch {
    /* ignore */
  }
}

/**
 * Wrap one reviewable "chunk" (a paragraph, a rule, a tip, a definition row, a solved-case
 * step, a quiz explanation...) to make it click-to-highlight, in yellow or green. State is
 * per-browser (localStorage), keyed by the page's path, so it survives reloads but never
 * leaves the device.
 *
 * Click cycles: no highlight → yellow → green → no highlight.
 *
 * `id` must be stable and unique within the page — a short deterministic string built from the
 * section/topic id plus the item's index in its array is enough (content order doesn't change).
 */
export function Highlightable({
  id,
  as = "span",
  style,
  children,
}: {
  id: string;
  as?: "span" | "div" | "li" | "td";
  style?: CSSProperties;
  children: ReactNode;
}) {
  const pathname = usePathname() || "";
  const key = storageKeyFor(pathname);
  const [color, setColor] = useState<HLColor | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setColor(readMap(key)[id] ?? null);
    const onChange = (e: Event) => {
      const detail = (e as CustomEvent).detail as { key: string } | undefined;
      if (detail?.key === key) setColor(readMap(key)[id] ?? null);
    };
    window.addEventListener(EVENT, onChange);
    return () => window.removeEventListener(EVENT, onChange);
  }, [key, id]);

  const cycle = () => {
    const map = readMap(key);
    const next = NEXT[map[id] ?? "off"];
    if (next === "off") delete map[id];
    else map[id] = next;
    writeMap(key, map);
  };

  const title =
    color === "yellow" ? "Click to change to green" : color === "green" ? "Click to remove highlight" : "Click to highlight — tracks your place on this page";

  const Tag = as as any;
  return (
    <Tag
      onClick={cycle}
      title={title}
      style={{
        cursor: "pointer",
        borderRadius: "4px",
        transition: "background-color 120ms ease",
        background: mounted && color ? COLOR_HEX[color] : "transparent",
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}

/**
 * Small floating pill (bottom-right) showing how many blocks are highlighted on THIS page
 * (broken down by color), with a one-click "Clear all". Renders nothing until mounted or when
 * the count is 0, so it never shows during server render / before localStorage has been read.
 */
export function HighlightToolbar() {
  const pathname = usePathname() || "";
  const key = storageKeyFor(pathname);
  const [counts, setCounts] = useState({ yellow: 0, green: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const update = () => {
      const map = readMap(key);
      let yellow = 0;
      let green = 0;
      for (const c of Object.values(map)) {
        if (c === "yellow") yellow++;
        else if (c === "green") green++;
      }
      setCounts({ yellow, green });
    };
    update();
    const onChange = (e: Event) => {
      const detail = (e as CustomEvent).detail as { key: string } | undefined;
      if (!detail || detail.key === key) update();
    };
    window.addEventListener(EVENT, onChange);
    return () => window.removeEventListener(EVENT, onChange);
  }, [key]);

  const total = counts.yellow + counts.green;
  if (!mounted || total === 0) return null;

  return (
    <div
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
        onClick={() => writeMap(key, {})}
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
  );
}
