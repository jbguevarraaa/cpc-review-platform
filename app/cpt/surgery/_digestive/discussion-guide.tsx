import Link from "next/link";
import type { ReactNode } from "react";
import type { Theme } from "./players";
import { Highlightable, HighlightToolbar } from "./highlighter";

/** One discussion-guide sub-question (the PDF's lettered items, or a single unlettered question). */
export type DGItem = {
  /** The question exactly as asked in the discussion guide (may include the a./b./c. label). */
  q: string;
  /** Optional one-line strategy: what to look for or where to look before answering. */
  approach?: string;
  /** The answer. A string, or JSX for lists/emphasis. */
  answer: ReactNode;
  /** Optional quick-reference codes for this specific sub-question. */
  codes?: [string, string][];
};

/** One numbered topic from the discussion guide (its "1.", "2.", "3." items). */
export type DGTopic = {
  n: number | string;
  title: string;
  /** Optional code-range chip shown next to the title. */
  range?: string;
  /** Optional one- or two-sentence lead-in before the sub-questions. */
  lead?: string;
  items: DGItem[];
};

export function DiscussionGuidePage({
  theme,
  kicker,
  title,
  blurb,
  nav,
  backHref,
  backLabel,
  approach,
  topics,
  sourceNote,
}: {
  theme: Theme;
  kicker: string;
  title: string;
  blurb: ReactNode;
  nav: { href: string; label: string }[];
  backHref: string;
  backLabel: string;
  approach: string[];
  topics: DGTopic[];
  sourceNote?: string;
}) {
  const s = {
    main: { maxWidth: "1120px", margin: "0 auto", padding: "36px clamp(12px, 4vw, 24px) 64px", minHeight: "100vh", background: theme.bg, color: theme.text, fontFamily: "Arial, sans-serif" },
    hero: { background: `linear-gradient(135deg, ${theme.dark}, ${theme.accent})`, color: "white", padding: "44px clamp(20px, 4vw, 40px)", borderRadius: "18px", marginBottom: "26px", boxShadow: `0 12px 28px ${theme.dark}38` },
    kicker: { margin: "0 0 10px", color: theme.light, fontWeight: 800, letterSpacing: "0.08em", fontSize: "13px" },
    navLink: { textDecoration: "none", color: theme.accent, background: "#ffffff", border: `1px solid ${theme.border}`, borderRadius: "999px", padding: "9px 14px", fontWeight: 700, fontSize: "13.5px" },
    intro: { background: theme.soft, border: `1px solid ${theme.light}`, borderLeft: `7px solid ${theme.accent}`, borderRadius: "12px", padding: "20px 22px", marginBottom: "26px", lineHeight: 1.7 },
    topicCard: { background: "#fff", border: `1px solid ${theme.border}`, borderRadius: "14px", padding: "22px clamp(14px, 3.5vw, 26px)", marginBottom: "20px", boxShadow: `0 5px 16px ${theme.dark}0f` },
    topicHeader: { display: "flex", alignItems: "center", gap: "13px", marginBottom: "6px", flexWrap: "wrap" as const },
    num: { background: theme.accent, color: "#fff", width: "34px", height: "34px", minWidth: "34px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "14px" },
    topicTitle: { margin: 0, fontSize: "20px", color: "#111827" },
    range: { background: theme.soft, border: `1px solid ${theme.light}`, color: theme.accent, borderRadius: "999px", padding: "3px 11px", fontWeight: 800, fontSize: "12.5px", fontFamily: "Consolas, monospace" },
    lead: { margin: "8px 0 14px", lineHeight: 1.7, color: theme.muted },
    item: { border: `1px solid ${theme.border}`, borderRadius: "10px", padding: "14px 16px", marginTop: "12px", background: theme.bg },
    q: { margin: "0 0 8px", fontWeight: 800, color: "#111827", lineHeight: 1.55 },
    approachBox: { display: "flex", gap: "8px", alignItems: "flex-start", background: "#fff", border: `1px dashed ${theme.light}`, borderRadius: "8px", padding: "9px 11px", marginBottom: "10px", fontSize: "13.5px", color: theme.muted, lineHeight: 1.6 },
    answerBox: { background: theme.soft, border: `1px solid ${theme.light}`, borderLeft: `4px solid ${theme.accent}`, borderRadius: "8px", padding: "12px 14px", lineHeight: 1.7 },
    answerLabel: { margin: "0 0 5px", fontWeight: 800, color: theme.accent, fontSize: "12.5px", letterSpacing: "0.04em" },
    codeChips: { display: "flex", flexWrap: "wrap" as const, gap: "6px 10px", marginTop: "10px" },
    codeChip: { background: "#fff", border: `1px solid ${theme.border}`, borderRadius: "7px", padding: "5px 9px", fontSize: "12.5px" },
    codeNum: { fontFamily: "Consolas, monospace", fontWeight: 800, color: theme.accent, marginRight: "6px" },
  };

  return (
    <main style={s.main}>
      <HighlightToolbar />
      <header style={s.hero}>
        <p style={s.kicker}>{kicker}</p>
        <h1 style={{ margin: 0, fontSize: "clamp(28px, 5.5vw, 46px)" }}>{title}</h1>
        <p style={{ fontSize: "18px", lineHeight: 1.55, maxWidth: "760px", margin: "12px 0 0", opacity: 0.96 }}>{blurb}</p>
      </header>

      <nav aria-label="Discussion guide navigation" style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "26px" }}>
        {nav.map((l) => <Link key={l.href} href={l.href} style={s.navLink}>{l.label}</Link>)}
      </nav>

      <section style={s.intro}>
        <strong>How to use this discussion guide</strong>
        <ol style={{ margin: "10px 0 0", paddingLeft: "22px", display: "grid", gap: "6px" }}>
          {approach.map((t) => <li key={t}>{t}</li>)}
        </ol>
      </section>

      {topics.map((topic) => (
        <section key={topic.n} style={s.topicCard}>
          <div style={s.topicHeader}>
            <span style={s.num}>{topic.n}</span>
            <h2 style={s.topicTitle}>{topic.title}</h2>
            {topic.range && <span style={s.range}>{topic.range}</span>}
          </div>
          {topic.lead && <p style={s.lead}>{topic.lead}</p>}
          {topic.items.map((it, i) => (
            <div key={i} style={s.item}>
              <Highlightable id={`${topic.n}-item-${i}-q`} as="div" style={s.q}>{it.q}</Highlightable>
              {it.approach && (
                <div style={s.approachBox}>
                  <span>🔎</span>
                  <span><strong>How to approach:</strong> <Highlightable id={`${topic.n}-item-${i}-approach`} as="span">{it.approach}</Highlightable></span>
                </div>
              )}
              <div style={s.answerBox}>
                <p style={s.answerLabel}>ANSWER</p>
                <Highlightable id={`${topic.n}-item-${i}-answer`} as="div">{it.answer}</Highlightable>
                {it.codes && it.codes.length > 0 && (
                  <div style={s.codeChips}>
                    {it.codes.map(([code, desc]) => (
                      <span key={code} style={s.codeChip}><span style={s.codeNum}>{code}</span>{desc}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </section>
      ))}

      {sourceNote && <p style={{ fontSize: "13px", color: theme.muted, lineHeight: 1.6, marginBottom: "18px" }}>{sourceNote}</p>}

      <Link href={backHref} style={{ textDecoration: "none", color: theme.accent, fontWeight: 700 }}>{backLabel}</Link>
    </main>
  );
}

/** Helper for an answer that is a short bullet list. */
export function DGList({ items }: { items: ReactNode[] }) {
  return (
    <ul style={{ margin: "4px 0 0", paddingLeft: "20px", display: "grid", gap: "6px" }}>
      {items.map((t, i) => <li key={i}>{t}</li>)}
    </ul>
  );
}

/** Helper for an answer that is a short numbered list (for ordered/sequential answers). */
export function DGSteps({ items }: { items: ReactNode[] }) {
  return (
    <ol style={{ margin: "4px 0 0", paddingLeft: "20px", display: "grid", gap: "6px" }}>
      {items.map((t, i) => <li key={i}>{t}</li>)}
    </ol>
  );
}
