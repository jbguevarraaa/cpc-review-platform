import Link from "next/link";
import type { ReactNode } from "react";
import type { Theme } from "./players";

/** One node on the visual roadmap — a topic/category with a few skimmable highlight points. */
export type SchematicNode = {
  n: number | string;
  title: string;
  /** Optional code-range chip shown next to the title. */
  range?: string;
  /** Optional single emoji shown on the node's badge instead of the number — keep it to one glyph. */
  icon?: string;
  /** Short, skimmable phrases — not full sentences. 2–5 per node works best. */
  points: (string | ReactNode)[];
  /** Optional one-line "why this matters" callout under the points. */
  callout?: string;
};

const FALLBACK_HEX = "#64748b";

/** Mixes two hex colors; t=0 → a, t=1 → b. Falls back gracefully if either input isn't a valid hex string. */
function mixHex(a: string | undefined, b: string | undefined, t: number): string {
  const safeHex = (v: string | undefined) => (typeof v === "string" && /^#?[0-9a-fA-F]{6}$/.test(v) ? v : FALLBACK_HEX);
  const pa = safeHex(a).replace("#", "");
  const pb = safeHex(b).replace("#", "");
  const ar = parseInt(pa.slice(0, 2), 16), ag = parseInt(pa.slice(2, 4), 16), ab = parseInt(pa.slice(4, 6), 16);
  const br = parseInt(pb.slice(0, 2), 16), bg = parseInt(pb.slice(2, 4), 16), bb = parseInt(pb.slice(4, 6), 16);
  const r = Math.round(ar + (br - ar) * t);
  const g = Math.round(ag + (bg - ag) * t);
  const bl = Math.round(ab + (bb - ab) * t);
  return `#${[r, g, bl].map((v) => Math.max(0, Math.min(255, v)).toString(16).padStart(2, "0")).join("")}`;
}

/** A small on-brand palette: cycles light→accent→dark so boxes are visibly distinct but still match the series' own theme. */
function paletteFor(theme: Theme, count: number): string[] {
  const stops = [theme?.light, theme?.accent, theme?.dark];
  const out: string[] = [];
  for (let i = 0; i < count; i++) {
    const t = count <= 1 ? 0.5 : i / (count - 1);
    const seg = t * (stops.length - 1);
    const idx = Math.min(stops.length - 2, Math.floor(seg));
    out.push(mixHex(stops[idx], stops[idx + 1], seg - idx));
  }
  return out;
}

function readableText(bgHex: string): string {
  const p = bgHex.replace("#", "");
  const r = parseInt(p.slice(0, 2), 16), g = parseInt(p.slice(2, 4), 16), b = parseInt(p.slice(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.58 ? "#1a1a1a" : "#ffffff";
}

function DownArrow({ color }: { color: string }) {
  return (
    <svg width="28" height="34" viewBox="0 0 28 34" style={{ display: "block" }}>
      <line x1="14" y1="0" x2="14" y2="22" stroke={color} strokeWidth="3" />
      <polygon points="14,34 4,18 24,18" fill={color} />
    </svg>
  );
}

function RightArrow({ color }: { color: string }) {
  return (
    <svg width="30" height="18" viewBox="0 0 30 18" style={{ display: "block", flexShrink: 0 }}>
      <line x1="0" y1="9" x2="20" y2="9" stroke={color} strokeWidth="3" />
      <polygon points="30,9 16,2 16,16" fill={color} />
    </svg>
  );
}

export function SeriesSchematicPage({
  theme,
  kicker,
  title,
  blurb,
  nav,
  backHref,
  backLabel,
  nodes,
  strategyTitle,
  strategyText,
}: {
  theme: Theme;
  kicker: string;
  title: string;
  blurb: ReactNode;
  nav: { href: string; label: string }[];
  backHref: string;
  backLabel: string;
  nodes: SchematicNode[];
  strategyTitle?: string;
  strategyText?: ReactNode;
}) {
  const colors = paletteFor(theme, nodes.length);

  const s = {
    main: { maxWidth: "1060px", margin: "0 auto", padding: "36px clamp(12px, 4vw, 24px) 64px", minHeight: "100vh", background: theme.bg, color: theme.text, fontFamily: "Arial, sans-serif" },
    hero: { background: `linear-gradient(135deg, ${theme.dark}, ${theme.accent})`, color: "white", padding: "44px clamp(20px, 4vw, 40px)", borderRadius: "18px", marginBottom: "26px", boxShadow: `0 12px 28px ${theme.dark}38`, position: "relative" as const, overflow: "hidden" as const },
    heroDecoRing: { position: "absolute" as const, top: "-60px", right: "-60px", width: "220px", height: "220px", borderRadius: "50%", border: `2px solid ${theme.light}55`, pointerEvents: "none" as const },
    heroDecoRing2: { position: "absolute" as const, bottom: "-80px", right: "40px", width: "160px", height: "160px", borderRadius: "50%", border: `2px solid ${theme.light}33`, pointerEvents: "none" as const },
    kicker: { margin: "0 0 10px", color: theme.light, fontWeight: 800, letterSpacing: "0.08em", fontSize: "13px" },
    navLink: { textDecoration: "none", color: theme.accent, background: "#ffffff", border: `1px solid ${theme.border}`, borderRadius: "999px", padding: "9px 14px", fontWeight: 700, fontSize: "13.5px" },
    intro: { background: theme.soft, border: `1px solid ${theme.light}`, borderLeft: `7px solid ${theme.accent}`, borderRadius: "12px", padding: "18px 22px", marginBottom: "22px", lineHeight: 1.7 },
    mapWrap: { background: "#fff", border: `1px solid ${theme.border}`, borderRadius: "16px", padding: "22px clamp(14px, 3vw, 26px)", marginBottom: "34px", boxShadow: `0 6px 18px ${theme.dark}0d` },
    mapLabel: { margin: "0 0 16px", fontSize: "12.5px", fontWeight: 800, letterSpacing: "0.08em", color: theme.accent, textTransform: "uppercase" as const },
    mapGrid: { display: "flex", flexWrap: "wrap" as const, alignItems: "stretch", gap: "4px 2px", justifyContent: "center" },
    mapBox: { minWidth: "120px", maxWidth: "168px", borderRadius: "10px", padding: "10px 12px", fontSize: "12.5px", fontWeight: 800, lineHeight: 1.3, display: "flex", flexDirection: "column" as const, gap: "4px", boxShadow: "0 3px 8px rgba(0,0,0,0.12)" },
    mapBadge: { fontSize: "10.5px", fontWeight: 800, opacity: 0.85, letterSpacing: "0.04em" },
    flowWrap: { display: "flex", flexDirection: "column" as const, alignItems: "center", marginBottom: "30px" },
    box: { width: "100%", maxWidth: "640px", borderRadius: "16px", overflow: "hidden" as const, boxShadow: "0 6px 18px rgba(0,0,0,0.12)", border: "1px solid rgba(0,0,0,0.06)" },
    boxHeader: { display: "flex", alignItems: "center", gap: "12px", padding: "14px 20px" },
    boxBadge: { width: "40px", height: "40px", minWidth: "40px", borderRadius: "10px", background: "rgba(255,255,255,0.28)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "18px" },
    boxTitle: { margin: 0, fontSize: "17.5px", fontWeight: 800, lineHeight: 1.3 },
    boxRange: { fontSize: "12px", fontWeight: 700, opacity: 0.9, fontFamily: "Consolas, monospace", marginTop: "2px" },
    boxBody: { background: "#fff", padding: "16px 20px" },
    points: { margin: 0, paddingLeft: "20px", display: "grid", gap: "5px", lineHeight: 1.6, fontSize: "14.5px", color: "#374151" },
    callout: { marginTop: "10px", fontSize: "13.5px", fontWeight: 700, lineHeight: 1.5 },
    cloudWrap: { background: theme.soft, border: `1px dashed ${theme.light}`, borderRadius: "16px", padding: "24px clamp(14px, 3vw, 28px)", marginBottom: "22px", textAlign: "center" as const },
    cloudLabel: { margin: "0 0 16px", fontSize: "12.5px", fontWeight: 800, letterSpacing: "0.08em", color: theme.accent, textTransform: "uppercase" as const },
    cloudRow: { display: "flex", flexWrap: "wrap" as const, justifyContent: "center", gap: "10px" },
    strategyBox: { background: `linear-gradient(135deg, ${theme.dark}, ${theme.accent})`, color: "white", borderRadius: "16px", padding: "26px 28px", marginTop: "10px", lineHeight: 1.75, boxShadow: `0 12px 28px ${theme.dark}30` },
    strategyTitle: { margin: "0 0 10px", fontSize: "19px" },
  };

  return (
    <main style={s.main}>
      <header style={s.hero}>
        <div style={s.heroDecoRing} />
        <div style={s.heroDecoRing2} />
        <p style={s.kicker}>{kicker}</p>
        <h1 style={{ margin: 0, fontSize: "clamp(26px, 5vw, 42px)" }}>{title}</h1>
        <p style={{ fontSize: "17px", lineHeight: 1.55, maxWidth: "740px", margin: "12px 0 0", opacity: 0.96 }}>{blurb}</p>
      </header>

      <nav aria-label="Schematic navigation" style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "22px" }}>
        {nav.map((l) => <Link key={l.href} href={l.href} style={s.navLink}>{l.label}</Link>)}
      </nav>

      <section style={s.intro}>
        <strong>How to use this schematic:</strong> this is a one-glance map of the series, not a substitute for the full reviewer — scan the flowchart below first, then walk the detailed boxes, and jump into the reviewer for depth on any one of them.
      </section>

      <div style={s.mapWrap}>
        <p style={s.mapLabel}>🗺️ The Flow, At a Glance</p>
        <div style={s.mapGrid}>
          {nodes.map((node, i) => {
            const bg = colors[i];
            const fg = readableText(bg);
            return (
              <span key={node.n} style={{ display: "flex", alignItems: "center" }}>
                {i > 0 && <RightArrow color={theme.muted} />}
                <span style={{ ...s.mapBox, background: bg, color: fg }}>
                  <span style={s.mapBadge}>{node.icon ?? `STEP ${node.n}`}</span>
                  <span>{node.title}</span>
                </span>
              </span>
            );
          })}
        </div>
      </div>

      <div style={s.flowWrap}>
        {nodes.map((node, i) => {
          const bg = colors[i];
          const fg = readableText(bg);
          return (
            <div key={node.n} style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
              {i > 0 && <DownArrow color={theme.muted} />}
              <div style={s.box}>
                <div style={{ ...s.boxHeader, background: bg, color: fg }}>
                  <div style={{ ...s.boxBadge, color: fg }}>{node.icon ?? node.n}</div>
                  <div>
                    <h2 style={s.boxTitle}>{node.title}</h2>
                    {node.range && <div style={s.boxRange}>{node.range}</div>}
                  </div>
                </div>
                <div style={s.boxBody}>
                  <ul style={s.points}>
                    {node.points.map((p, j) => <li key={j}>{p}</li>)}
                  </ul>
                  {node.callout && <p style={{ ...s.callout, color: bg }}>→ {node.callout}</p>}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div style={s.cloudWrap}>
        <p style={s.cloudLabel}>🧩 The Whole Map, One More Time</p>
        <div style={s.cloudRow}>
          {nodes.map((node, i) => {
            const bg = colors[i];
            const fg = readableText(bg);
            return <span key={node.n} style={{ background: bg, color: fg, borderRadius: "10px", padding: "9px 14px", fontSize: "13px", fontWeight: 800, boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}>{node.icon ?? "•"} {node.title}</span>;
          })}
        </div>
      </div>

      {strategyText && (
        <div style={s.strategyBox}>
          <h2 style={s.strategyTitle}>🧭 {strategyTitle ?? "Strategic Wrap-Up"}</h2>
          <div style={{ opacity: 0.97 }}>{strategyText}</div>
        </div>
      )}

      <div style={{ marginTop: "30px" }}>
        <Link href={backHref} style={{ textDecoration: "none", color: theme.accent, fontWeight: 700 }}>{backLabel}</Link>
      </div>
    </main>
  );
}
