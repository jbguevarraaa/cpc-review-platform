"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode, type CSSProperties } from "react";

const EVENT = "cpc-hl-change";

function storageKeyFor(pathname: string) {
  return `cpc-highlights:${pathname}`;
}
function readSet(key: string): Set<string> {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return new Set();
    return new Set(JSON.parse(raw) as string[]);
  } catch {
    return new Set();
  }
}
function writeSet(key: string, s: Set<string>) {
  try {
    localStorage.setItem(key, JSON.stringify([...s]));
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
 * step, a quiz explanation...) to make it click-to-highlight. State is per-browser
 * (localStorage), keyed by the page's path, so it survives reloads but never leaves the device.
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
  const [on, setOn] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setOn(readSet(key).has(id));
    const onChange = (e: Event) => {
      const detail = (e as CustomEvent).detail as { key: string } | undefined;
      if (detail?.key === key) setOn(readSet(key).has(id));
    };
    window.addEventListener(EVENT, onChange);
    return () => window.removeEventListener(EVENT, onChange);
  }, [key, id]);

  const toggle = () => {
    const s = readSet(key);
    if (s.has(id)) s.delete(id);
    else s.add(id);
    writeSet(key, s);
  };

  const Tag = as as any;
  return (
    <Tag
      onClick={toggle}
      title={on ? "Click to unhighlight" : "Click to highlight — tracks your place on this page"}
      style={{
        cursor: "pointer",
        borderRadius: "4px",
        transition: "background-color 120ms ease",
        background: mounted && on ? "#fde047" : "transparent",
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}

/**
 * Small floating pill (bottom-right) showing how many blocks are highlighted on THIS page,
 * with a one-click "Clear all". Renders nothing until mounted or when the count is 0, so it
 * never shows during server render / before localStorage has been read.
 */
export function HighlightToolbar() {
  const pathname = usePathname() || "";
  const key = storageKeyFor(pathname);
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const update = () => setCount(readSet(key).size);
    update();
    const onChange = (e: Event) => {
      const detail = (e as CustomEvent).detail as { key: string } | undefined;
      if (!detail || detail.key === key) update();
    };
    window.addEventListener(EVENT, onChange);
    return () => window.removeEventListener(EVENT, onChange);
  }, [key]);

  if (!mounted || count === 0) return null;

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
      <span>🖍 {count} highlighted</span>
      <button
        onClick={() => writeSet(key, new Set())}
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
