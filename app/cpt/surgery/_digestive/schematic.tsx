import Link from "next/link";
import type { ReactNode } from "react";
import type { Theme } from "./players";

/** One node on the visual roadmap — a topic/category with a few skimmable highlight points. */
export type SchematicNode = {
  n: number | string;
  title: string;
  /** Optional code-range chip shown next to the title. */
  range?: string;
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
    main: { maxWidth: "1020px", margin: "0 auto", padding: "36px clamp(12px, 4vw, 24px) 64px", minHeight: "100vh", background: theme.bg, color: theme.text, fontFamily: "Arial, sans-serif" },
    hero: { background: `linear-gradient(135deg, ${theme.dark}, ${theme.accent})`, color: "white", padding: "44px clamp(20px, 4vw, 40px)", borderRadius: "18px", marginBottom: "26px", boxShadow: `0 12px 28px ${theme.dark}38` },
    kicker: { margin: "0 0 10px", color: theme.light, fontWeight: 800, letterSpacing: "0.08em", fontSize: "13px" },
    navLink: { textDecoration: "none", color: theme.accent, background: "#ffffff", border: `1px solid ${theme.border}`, borderRadius: "999px", padding: "9px 14px", fontWeight: 700, fontSize: "13.5px" },
    intro: { background: theme.soft, border: `1px solid ${theme.light}`, borderLeft: `7px solid ${theme.accent}`, borderRadius: "12px", padding: "18px 22px", marginBottom: "34px", lineHeight: 1.7 },
    railWrap: { position: "relative" as const, marginBottom: "30px" },
    railLine: { position: "absolute" as const, left: "21px", top: "26px", bottom: "26px", width: "3px", background: theme.light, borderRadius: "2px" },
    row: { position: "relative" as const, display: "flex", gap: "16px", marginBottom: "18px", alignItems: "flex-start" },
    circleCol: { width: "44px", minWidth: "44px", display: "flex", justifyContent: "center" },
    circle: { width: "44px", height: "44px", borderRadius: "50%", background: theme.accent, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "15px", boxShadow: `0 3px 8px ${theme.dark}33`, flexShrink: 0 },
    card: { flex: 1, background: "#fff", border: `1px solid ${theme.border}`, borderRadius: "14px", padding: "16px 20px", boxShadow: `0 4px 14px ${theme.dark}0d`, minWidth: 0 },
    cardHeader: { display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px", flexWrap: "wrap" as const },
    cardTitle: { margin: 0, fontSize: "17.5px", color: "#111827" },
    range: { background: theme.soft, border: `1px solid ${theme.light}`, color: theme.accent, borderRadius: "999px", padding: "2px 10px", fontWeight: 800, fontSize: "12px", fontFamily: "Consolas, monospace" },
    points: { margin: "0 0 0", paddingLeft: "20px", display: "grid", gap: "4px", lineHeight: 1.6, fontSize: "14.5px", color: "#374151" },
    callout: { marginTop: "10px", fontSize: "13.5px", color: theme.accent, fontWeight: 700, lineHeight: 1.5 },
    strategyBox: { background: `linear-gradient(135deg, ${theme.dark}, ${theme.accent})`, color: "white", borderRadius: "16px", padding: "26px 28px", marginTop: "10px", lineHeight: 1.75, boxShadow: `0 12px 28px ${theme.dark}30` },
    strategyTitle: { margin: "0 0 10px", fontSize: "19px" },
  };

  return (
    <main style={s.main}>
      <header style={s.hero}>
        <p style={s.kicker}>{kicker}</p>
        <h1 style={{ margin: 0, fontSize: "clamp(26px, 5vw, 42px)" }}>{title}</h1>
        <p style={{ fontSize: "17px", lineHeight: 1.55, maxWidth: "740px", margin: "12px 0 0", opacity: 0.96 }}>{blurb}</p>
      </header>

      <nav aria-label="Schematic navigation" style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "22px" }}>
        {nav.map((l) => <Link key={l.href} href={l.href} style={s.navLink}>{l.label}</Link>)}
      </nav>

      <section style={s.intro}>
        <strong>How to use this schematic:</strong> this is a one-glance map of the series, not a substitute for the full reviewer — scan the flow top to bottom to see how the topics connect, then jump into the reviewer for the depth on any node.
      </section>

      <div style={s.railWrap}>
        <div style={s.railLine} />
        {nodes.map((node) => (
          <div key={node.n} style={s.row}>
            <div style={s.circleCol}>
              <div style={s.circle}>{node.n}</div>
            </div>
            <div style={s.card}>
              <div style={s.cardHeader}>
                <h2 style={s.cardTitle}>{node.title}</h2>
                {node.range && <span style={s.range}>{node.range}</span>}
              </div>
              <ul style={s.points}>
                {node.points.map((p, i) => <li key={i}>{p}</li>)}
              </ul>
              {node.callout && <p style={s.callout}>→ {node.callout}</p>}
            </div>
          </div>
        ))}
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
