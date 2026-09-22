import Link from "next/link";
import type { ReactNode } from "react";
import { Highlightable, HighlightToolbar } from "../_digestive/highlighter";

export type CodeEntry = [string, string];
export type Category = { name: string; codes: CodeEntry[] };
export type SolvedCase = { title: string; scenario: string; steps: string[]; answer: string; label?: string };
export type Subsection = {
  id: string;
  n: number;
  title: string;
  range: string;
  intro?: string[];
  diagram?: ReactNode;
  definitions?: [string, string][];
  steps?: string[];
  categories: Category[];
  rules: string[];
  tips: string[];
  traps?: string[];
  cases?: SolvedCase[];
};

const s = {
  main: { maxWidth: "1160px", margin: "0 auto", padding: "36px clamp(12px, 4vw, 24px) 64px", minHeight: "100vh", background: "#f6f7ff", color: "#1c1b33", fontFamily: "Arial, sans-serif" },
  hero: { background: "linear-gradient(135deg, #1e1b4b, #4338ca)", color: "white", padding: "48px clamp(20px, 4vw, 44px)", borderRadius: "18px", marginBottom: "26px", boxShadow: "0 12px 28px rgba(30,27,75,0.22)" },
  kicker: { margin: "0 0 10px", color: "#c7d2fe", fontWeight: 800, letterSpacing: "0.08em" },
  nav: { display: "flex", flexWrap: "wrap" as const, gap: "10px", marginBottom: "22px" },
  navLink: { textDecoration: "none", color: "#4338ca", background: "#ffffff", border: "1px solid #dcdff5", borderRadius: "999px", padding: "10px 15px", fontWeight: 700, fontSize: "14px" },
  pagerLink: { textDecoration: "none", color: "#4338ca", background: "#eef0ff", border: "1px solid #c7d2fe", borderRadius: "999px", padding: "8px 16px", fontWeight: 700, fontSize: "14px" },
  pagerActive: { textDecoration: "none", color: "#fff", background: "#4338ca", border: "1px solid #4338ca", borderRadius: "999px", padding: "8px 16px", fontWeight: 700, fontSize: "14px" },
  intro: { background: "#eef0ff", border: "1px solid #c7d2fe", borderLeft: "7px solid #4338ca", borderRadius: "12px", padding: "22px 24px", marginBottom: "26px", lineHeight: 1.7 },
  section: { background: "#ffffff", border: "1px solid #dcdff5", borderRadius: "14px", padding: "24px clamp(14px, 3.5vw, 28px)", marginBottom: "22px", boxShadow: "0 5px 16px rgba(30,27,75,0.06)" },
  sectionHeader: { display: "flex", alignItems: "center", gap: "14px", marginBottom: "10px", flexWrap: "wrap" as const },
  num: { background: "#4338ca", color: "#fff", width: "36px", height: "36px", minWidth: "36px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "15px" },
  title: { margin: 0, fontSize: "22px", color: "#111827" },
  range: { background: "#eef0ff", border: "1px solid #c7d2fe", color: "#4338ca", borderRadius: "999px", padding: "4px 12px", fontWeight: 800, fontSize: "13px", fontFamily: "Consolas, monospace" },
  p: { lineHeight: 1.75, margin: "0 0 10px" },
  catTitle: { margin: "18px 0 8px", fontSize: "16px", color: "#4338ca", fontWeight: 800 },
  codeList: { listStyle: "none", padding: 0, margin: "0 0 4px", display: "grid", gap: "7px" },
  codeItem: { display: "flex", flexWrap: "wrap" as const, gap: "6px 12px", alignItems: "baseline", background: "#f8f9ff", border: "1px solid #dcdff5", borderRadius: "8px", padding: "8px 13px" },
  codeChip: { fontWeight: 800, color: "#4338ca", minWidth: "120px", fontFamily: "Consolas, monospace", fontSize: "13.5px" },
  ul: { margin: 0, paddingLeft: "20px", display: "grid", gap: "8px" },
  diagramBox: { background: "#f8f9ff", border: "1px solid #dcdff5", borderRadius: "14px", padding: "18px", margin: "16px 0", textAlign: "center" as const, overflowX: "auto" as const },
};

function Box({ bg, border, left, titleColor, title, children }: { bg: string; border: string; left: string; titleColor: string; title: string; children: ReactNode }) {
  return (
    <div style={{ background: bg, border: `1px solid ${border}`, borderLeft: `5px solid ${left}`, borderRadius: "10px", padding: "16px 18px", margin: "14px 0 0", lineHeight: 1.7 }}>
      <p style={{ margin: "0 0 8px", color: titleColor, fontWeight: 800, fontSize: "14px", letterSpacing: "0.03em" }}>{title}</p>
      {children}
    </div>
  );
}

export function DiagramFrame({ caption, children }: { caption: string; children: ReactNode }) {
  return (
    <div style={s.diagramBox}>
      {children}
      <p style={{ margin: "10px 0 0", fontSize: "13px", color: "#4a4a7c", fontWeight: 700 }}>{caption}</p>
    </div>
  );
}

export function SectionView({ sub }: { sub: Subsection }) {
  return (
    <section id={sub.id} style={s.section}>
      <div style={s.sectionHeader}>
        <span style={s.num}>{sub.n}</span>
        <h2 style={s.title}>{sub.title}</h2>
        <span style={s.range}>{sub.range}</span>
      </div>
      {sub.intro?.map((t, i) => (
        <Highlightable key={t} id={`${sub.id}-intro-${i}`} as="div" style={s.p}>{t}</Highlightable>
      ))}
      {sub.diagram}

      {sub.definitions && (
        <Box bg="#f0f9ff" border="#bae6fd" left="#0284c7" titleColor="#075985" title="📖 DEFINITIONS">
          <ul style={s.ul}>
            {sub.definitions.map(([term, def], i) => (
              <li key={term}>
                <Highlightable id={`${sub.id}-def-${i}`} as="span"><strong>{term}:</strong> {def}</Highlightable>
              </li>
            ))}
          </ul>
        </Box>
      )}

      {sub.steps && (
        <Box bg="#eff6ff" border="#bfdbfe" left="#1d4ed8" titleColor="#1e3a8a" title="🪜 STEP-BY-STEP — HOW TO CODE IT">
          <ul style={{ ...s.ul, listStyle: "none", paddingLeft: 0 }}>
            {sub.steps.map((t, i) => (
              <li key={t}>
                <Highlightable id={`${sub.id}-step-${i}`} as="span">{t}</Highlightable>
              </li>
            ))}
          </ul>
        </Box>
      )}

      {sub.categories.map((cat, catIndex) => (
        <div key={cat.name}>
          <h3 style={s.catTitle}>{cat.name}</h3>
          <ul style={s.codeList}>
            {cat.codes.map(([code, desc], codeIndex) => (
              <Highlightable key={code} id={`${sub.id}-cat-${catIndex}-code-${codeIndex}`} as="li" style={s.codeItem}>
                <code style={s.codeChip}>{code}</code>
                <span style={{ flex: "1 1 220px" }}>{desc}</span>
              </Highlightable>
            ))}
          </ul>
        </div>
      ))}

      {sub.rules.length > 0 && (
        <Box bg="#fef2f2" border="#fecaca" left="#dc2626" titleColor="#991b1b" title="🟥 KEY CODING RULES">
          <ul style={s.ul}>
            {sub.rules.map((t, i) => (
              <li key={t}>
                <Highlightable id={`${sub.id}-rule-${i}`} as="span">{t}</Highlightable>
              </li>
            ))}
          </ul>
        </Box>
      )}

      {sub.tips.length > 0 && (
        <Box bg="#f0fdf4" border="#bbf7d0" left="#16a34a" titleColor="#166534" title="🧠 CODING TIPS">
          <ul style={s.ul}>
            {sub.tips.map((t, i) => (
              <li key={t}>
                <Highlightable id={`${sub.id}-tip-${i}`} as="span">{t}</Highlightable>
              </li>
            ))}
          </ul>
        </Box>
      )}

      {sub.traps && sub.traps.length > 0 && (
        <Box bg="#fffbeb" border="#fde68a" left="#d97706" titleColor="#92400e" title="⚠️ COMMON TRAPS">
          <ul style={s.ul}>
            {sub.traps.map((t, i) => (
              <li key={t}>
                <Highlightable id={`${sub.id}-trap-${i}`} as="span">{t}</Highlightable>
              </li>
            ))}
          </ul>
        </Box>
      )}

      {sub.cases?.map((c, ci) => (
        <Box key={c.title} bg="#f0fdfa" border="#99f6e4" left="#0f766e" titleColor="#115e59" title={`🧩 ${c.label ?? "SOLVED CASE"} — ${c.title}`}>
          <Highlightable id={`${sub.id}-case-${ci}-scenario`} as="div" style={{ margin: "0 0 10px", fontStyle: "italic" }}>{c.scenario}</Highlightable>
          <p style={{ margin: "0 0 4px", fontWeight: 800 }}>How to solve it</p>
          <ol style={{ ...s.ul, paddingLeft: "22px", marginBottom: "10px" }}>
            {c.steps.map((t, i) => (
              <li key={t}>
                <Highlightable id={`${sub.id}-case-${ci}-step-${i}`} as="span">{t}</Highlightable>
              </li>
            ))}
          </ol>
          <Highlightable id={`${sub.id}-case-${ci}-answer`} as="div" style={{ margin: 0, background: "#ccfbf1", borderRadius: "8px", padding: "10px 12px", fontWeight: 800 }}>Answer: {c.answer}</Highlightable>
        </Box>
      ))}
    </section>
  );
}

const PARTS = [
  { href: "/cpt/surgery/50000-series-guidelines-reviewer", label: "Part 1 (Endoscopy)" },
  { href: "/cpt/surgery/50000-series-guidelines-reviewer-part-2", label: "Part 2 (Hysterectomy & prostate)" },
  { href: "/cpt/surgery/50000-series-guidelines-reviewer-part-3", label: "Part 3 (Maternal care & delivery)" },
];

export function ReviewerShell({ part, subtitle, intro, sections }: { part: 1 | 2 | 3; subtitle: string; intro: ReactNode; sections: Subsection[] }) {
  return (
    <main style={s.main}>
      <HighlightToolbar />
      <header style={s.hero}>
        <p style={s.kicker}>50,000 SERIES · GENITOURINARY SYSTEM</p>
        <h1 style={{ margin: 0, fontSize: "clamp(28px, 5.5vw, 48px)" }}>CPT Surgery Guidelines Reviewer</h1>
        <p style={{ margin: "12px 0 0", fontSize: "19px", lineHeight: 1.5 }}>{subtitle}</p>
      </header>

      <div style={{ ...s.nav, marginBottom: "16px" }}>
        {PARTS.map((p, i) =>
          i + 1 === part ? <span key={p.href} style={s.pagerActive}>{p.label}</span> : <Link key={p.href} href={p.href} style={s.pagerLink}>{p.label}</Link>
        )}
      </div>

      <nav aria-label="Genitourinary system navigation" style={s.nav}>
        <Link href="/cpt/surgery/50,000" style={s.navLink}>Genitourinary System home</Link>
        <Link href="/cpt/surgery/50000-series-discussion-guide" style={s.navLink}>Discussion Guide</Link>
        <Link href="/cpt/surgery" style={s.navLink}>Surgery home</Link>
        <Link href="/cpt" style={s.navLink}>CPT home</Link>
      </nav>

      <nav aria-label="Jump to a section" style={s.nav}>
        {sections.map((sec) => <a key={sec.id} href={`#${sec.id}`} style={s.pagerLink}>{sec.n} · {sec.range}</a>)}
      </nav>

      <section style={s.intro}>{intro}</section>

      {sections.map((sec) => <SectionView key={sec.id} sub={sec} />)}

      <div style={{ marginTop: "30px", display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {part > 1 && <Link href={PARTS[part - 2].href} style={{ textDecoration: "none", color: "#4338ca", fontWeight: 700 }}>← Previous part</Link>}
        {part < 3 && <Link href={PARTS[part].href} style={{ textDecoration: "none", color: "#4338ca", fontWeight: 700 }}>Continue to next part →</Link>}
        <Link href="/cpt/surgery/50,000" style={{ textDecoration: "none", color: "#4338ca", fontWeight: 700 }}>← Back to Genitourinary System</Link>
      </div>
    </main>
  );
}
