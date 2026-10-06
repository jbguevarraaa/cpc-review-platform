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
  const s = {
    main: { maxWidth: "1040px", margin: "0 auto", padding: "36px clamp(12px, 4vw, 24px) 64px", minHeight: "100vh", background: theme.bg, color: theme.text, fontFamily: "Arial, sans-serif" },
    hero: { background: `linear-gradient(135deg, ${theme.dark}, ${theme.accent})`, color: "white", padding: "44px clamp(20px, 4vw, 40px)", borderRadius: "18px", marginBottom: "26px", boxShadow: `0 12px 28px ${theme.dark}38`, position: "relative" as const, overflow: "hidden" as const },
    heroDecoRing: { position: "absolute" as const, top: "-60px", right: "-60px", width: "220px", height: "220px", borderRadius: "50%", border: `2px solid ${theme.light}55`, pointerEvents: "none" as const },
    heroDecoRing2: { position: "absolute" as const, bottom: "-80px", right: "40px", width: "160px", height: "160px", borderRadius: "50%", border: `2px solid ${theme.light}33`, pointerEvents: "none" as const },
    kicker: { margin: "0 0 10px", color: theme.light, fontWeight: 800, letterSpacing: "0.08em", fontSize: "13px" },
    navLink: { textDecoration: "none", color: theme.accent, background: "#ffffff", border: `1px solid ${theme.border}`, borderRadius: "999px", padding: "9px 14px", fontWeight: 700, fontSize: "13.5px" },
    intro: { background: theme.soft, border: `1px solid ${theme.light}`, borderLeft: `7px solid ${theme.accent}`, borderRadius: "12px", padding: "18px 22px", marginBottom: "22px", lineHeight: 1.7 },
    mapWrap: { background: "#fff", border: `1px solid ${theme.border}`, borderRadius: "16px", padding: "20px clamp(14px, 3vw, 24px)", marginBottom: "34px", boxShadow: `0 6px 18px ${theme.dark}0d` },
    mapLabel: { margin: "0 0 14px", fontSize: "12.5px", fontWeight: 800, letterSpacing: "0.08em", color: theme.accent, textTransform: "uppercase" as const },
    mapRow: { display: "flex", flexWrap: "wrap" as const, alignItems: "center", gap: "0px" },
    mapChip: { display: "flex", alignItems: "center", gap: "7px", background: theme.soft, border: `1.5px solid ${theme.light}`, borderRadius: "999px", padding: "7px 13px 7px 8px", fontSize: "12.5px", fontWeight: 700, color: theme.dark, whiteSpace: "nowrap" as const },
    mapChipBadge: { width: "20px", height: "20px", minWidth: "20px", borderRadius: "50%", background: theme.accent, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: 800 },
    mapArrow: { margin: "0 6px", color: theme.light, fontSize: "16px", fontWeight: 800 },
    railWrap: { position: "relative" as const, marginBottom: "30px" },
    railLine: { position: "absolute" as const, left: "27px", top: "6px", bottom: "6px", width: "4px", borderRadius: "3px", background: `linear-gradient(${theme.accent}, ${theme.light})` },
    row: { position: "relative" as const, display: "flex", gap: "18px", marginBottom: "14px", alignItems: "flex-start" },
    arrowDown: { display: "flex", justifyContent: "center", width: "56px", minWidth: "56px", margin: "-6px 0 -2px", color: theme.light, fontSize: "15px", fontWeight: 800 },
    circleCol: { width: "56px", minWidth: "56px", display: "flex", justifyContent: "center" },
    circle: { width: "56px", height: "56px", borderRadius: "50%", background: `linear-gradient(145deg, ${theme.accent}, ${theme.dark})`, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "19px", boxShadow: `0 4px 12px ${theme.dark}44, 0 0 0 5px ${theme.soft}`, flexShrink: 0, border: `2px solid #fff` },
    card: { flex: 1, background: "#fff", border: `1px solid ${theme.border}`, borderRadius: "14px", padding: "16px 20px", boxShadow: `0 4px 14px ${theme.dark}0d`, minWidth: 0 },
    cardHeader: { display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px", flexWrap: "wrap" as const },
    cardTitle: { margin: 0, fontSize: "17.5px", color: "#111827" },
    range: { background: theme.soft, border: `1px solid ${theme.light}`, color: theme.accent, borderRadius: "999px", padding: "2px 10px", fontWeight: 800, fontSize: "12px", fontFamily: "Consolas, monospace" },
    points: { margin: "0 0 0", paddingLeft: "20px", display: "grid", gap: "4px", lineHeight: 1.6, fontSize: "14.5px", color: "#374151" },
    callout: { marginTop: "10px", fontSize: "13.5px", color: theme.accent, fontWeight: 700, lineHeight: 1.5 },
    cloudWrap: { background: theme.soft, border: `1px dashed ${theme.light}`, borderRadius: "16px", padding: "24px clamp(14px, 3vw, 28px)", marginBottom: "22px", textAlign: "center" as const },
    cloudLabel: { margin: "0 0 16px", fontSize: "12.5px", fontWeight: 800, letterSpacing: "0.08em", color: theme.accent, textTransform: "uppercase" as const },
    cloudRow: { display: "flex", flexWrap: "wrap" as const, justifyContent: "center", gap: "10px" },
    cloudChip: { background: "#fff", border: `1px solid ${theme.light}`, borderRadius: "10px", padding: "9px 14px", fontSize: "13px", fontWeight: 700, color: theme.dark, boxShadow: `0 2px 6px ${theme.dark}0a` },
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
        <strong>How to use this schematic:</strong> this is a one-glance map of the series, not a substitute for the full reviewer — scan the flow map below first, then walk the detailed stops, and jump into the reviewer for depth on any one of them.
      </section>

      <div style={s.mapWrap}>
        <p style={s.mapLabel}>🗺️ The Flow, At a Glance</p>
        <div style={s.mapRow}>
          {nodes.map((node, i) => (
            <span key={node.n} style={{ display: "flex", alignItems: "center" }}>
              {i > 0 && <span style={s.mapArrow}>→</span>}
              <span style={s.mapChip}>
                <span style={s.mapChipBadge}>{node.icon ?? node.n}</span>
                {node.title}
              </span>
            </span>
          ))}
        </div>
      </div>

      <div style={s.railWrap}>
        <div style={s.railLine} />
        {nodes.map((node, i) => (
          <div key={node.n}>
            {i > 0 && <div style={s.arrowDown}>▼</div>}
            <div style={s.row}>
              <div style={s.circleCol}>
                <div style={s.circle}>{node.icon ?? node.n}</div>
              </div>
              <div style={s.card}>
                <div style={s.cardHeader}>
                  <h2 style={s.cardTitle}>{node.title}</h2>
                  {node.range && <span style={s.range}>{node.range}</span>}
                </div>
                <ul style={s.points}>
                  {node.points.map((p, j) => <li key={j}>{p}</li>)}
                </ul>
                {node.callout && <p style={s.callout}>→ {node.callout}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={s.cloudWrap}>
        <p style={s.cloudLabel}>🧩 The Whole Map, One More Time</p>
        <div style={s.cloudRow}>
          {nodes.map((node) => <span key={node.n} style={s.cloudChip}>{node.icon ?? "•"} {node.title}</span>)}
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
