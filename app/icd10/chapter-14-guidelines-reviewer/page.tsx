import Link from "next/link";

type Topic = {
  n: number;
  title: string;
  codes: string;
  summary: string[];
  easy: { scenario: string; answer: string };
  hard: { scenario: string; answer: string };
  tips: string[];
};

const topics: Topic[] = [
  {
    n: 1,
    title: "CKD Stages — Classification & Codes",
    codes: "N18.1–N18.6",
    summary: [
      "ICD-10-CM classifies chronic kidney disease (CKD) by SEVERITY, designated as stages 1 through 5. Stage 2 (code N18.2) equates to MILD CKD. Stage 3 (codes N18.30–N18.32, split further by 3a vs. 3b) equates to MODERATE CKD. Stage 4 (code N18.4) equates to SEVERE CKD.",
      "Stage 1 (N18.1) and stage 5 (N18.5) are also real, distinct codes in this category, though the guideline doesn't attach a \"mild/moderate/severe\" label to them the way it does for stages 2–4.",
      "End-stage renal disease (ESRD) is coded separately from the numbered stages, using code N18.6 — assigned specifically when the provider has documented ESRD.",
    ],
    easy: {
      scenario: "A patient's chart documents \"CKD stage 3a.\"",
      answer: "The specific N18.31 code for CKD stage 3a — one of the two subdivisions of stage 3 (moderate CKD).",
    },
    hard: {
      scenario: "A patient's nephrology note documents \"severe chronic kidney disease\" without stating a specific numbered stage.",
      answer: "N18.4 — the guideline explicitly equates stage 4 with \"severe CKD,\" so documented severity language maps directly to its corresponding stage code.",
    },
    tips: [
      "Memorize the severity-word mapping directly: stage 2 = mild, stage 3 (3a/3b) = moderate, stage 4 = severe. These aren't just numbers — the guideline itself defines these as equivalent terms.",
    ],
  },
  {
    n: 2,
    title: "CKD Stage vs. ESRD — When Both Are Documented",
    codes: "N18.6",
    summary: [
      "If a patient's chart documents BOTH a specific stage of CKD (e.g., stage 4) AND end-stage renal disease (ESRD), assign code N18.6 (ESRD) ONLY — not both the stage code and N18.6 together.",
    ],
    easy: {
      scenario: "A patient's chart documents only \"ESRD,\" with no other CKD stage mentioned.",
      answer: "N18.6 (end-stage renal disease) alone.",
    },
    hard: {
      scenario: "A patient's chart documents \"CKD stage 4, progressing to ESRD\" — both terms appear in the same note.",
      answer: "N18.6 alone — when both a CKD stage and ESRD are documented together, ESRD is the only code assigned; the stage code is not also reported.",
    },
    tips: [
      "ESRD always wins when both are documented — don't stack the stage code and N18.6 together, even though the stage might feel like useful additional detail.",
    ],
  },
  {
    n: 3,
    title: "CKD and Kidney Transplant Status",
    codes: "N18.–, Z94.0",
    summary: [
      "A patient who has had a kidney transplant may STILL have some form of CKD, because the transplant may not fully restore kidney function. The presence of CKD alone does NOT, by itself, mean there's a transplant complication.",
      "For a transplant patient with ongoing CKD (and no documented complication), assign the appropriate N18 code for the patient's CKD stage PLUS Z94.0 (kidney transplant status) — both codes together.",
      "If a genuine transplant complication is documented instead — such as failure, rejection, or another specific complication — that's coded differently (see the kidney-transplant-complication guidance referenced in the chronic-conditions cross-reference below), not as plain CKD + transplant status.",
      "If the documentation is unclear about whether the patient has an actual transplant complication (versus just ongoing CKD after a working transplant), query the provider.",
    ],
    easy: {
      scenario: "A patient with a prior kidney transplant has documented stage 3a CKD, with no complication of the transplant mentioned.",
      answer: "N18.31 (CKD stage 3a) plus Z94.0 (kidney transplant status) — CKD alone in a transplant patient isn't automatically coded as a complication.",
    },
    hard: {
      scenario: "A transplant patient's chart mentions declining kidney function, but it's unclear whether this reflects a true transplant complication (like rejection) or just expected, ongoing CKD despite a working transplant.",
      answer: "Query the provider — the documentation doesn't clearly establish whether this is a transplant complication or just CKD, and those two scenarios are coded completely differently.",
    },
    tips: [
      "\"Transplant present\" + \"CKD present\" does NOT automatically equal \"transplant complication\" — that's the single biggest trap in this topic. The two conditions coexisting is expected and separately coded (N18 + Z94.0), not merged into a complication code.",
    ],
  },
  {
    n: 4,
    title: "CKD with Other Conditions — Sequencing",
    codes: "N18.–",
    summary: [
      "Patients with CKD frequently also have other serious conditions, most commonly diabetes mellitus and hypertension. The SEQUENCING of the CKD code relative to codes for these other contributing conditions is based on the conventions in the Tabular List — there's no single universal rule that applies to every combination.",
      "For hypertension specifically combined with CKD, see the dedicated hypertensive chronic kidney disease guidance (covered in the Circulatory System chapter) — that combination has its own specific combination-code rules (I12/I13).",
      "For CKD in a kidney transplant patient with an actual documented complication (not just plain CKD), see the kidney-transplant-complication guidance instead of the plain CKD-with-other-conditions approach.",
    ],
    easy: {
      scenario: "A patient has documented CKD stage 3b and type 2 diabetes, and the question asks which code sequencing convention applies.",
      answer: "Follow the Tabular List's own instructional notes for that specific combination — there's no single blanket rule; the Tabular List conventions decide sequencing case by case.",
    },
    hard: {
      scenario: "A patient has hypertension and CKD stage 4 documented together.",
      answer: "This routes to the dedicated hypertensive CKD guidance (category I12, or I13 if heart disease is also present) rather than being treated as a generic \"CKD with other conditions\" sequencing question — hypertension+CKD has its own specific combination-code framework.",
    },
    tips: [
      "Don't try to memorize one universal \"CKD always goes first/last\" rule — this topic exists specifically to tell you sequencing depends on the Tabular List's own instructions for each particular combination, and to point you toward the specialized hypertensive-CKD and transplant-complication guidance when those specific situations apply.",
    ],
  },
];

const mainStyle = { maxWidth: "1160px", margin: "0 auto", padding: "36px 24px 64px", minHeight: "100vh", background: "#f6f9f9", color: "#141d1c", fontFamily: "Arial, sans-serif" };
const heroStyle = { background: "linear-gradient(135deg, #101719, #0f766e)", color: "white", padding: "46px 42px", borderRadius: "18px", marginBottom: "26px", boxShadow: "0 12px 28px rgba(16,23,25,0.22)" };
const kickerStyle = { margin: "0 0 10px", color: "#99f6e4", fontWeight: 800, letterSpacing: "0.08em" };
const navStyle = { display: "flex", flexWrap: "wrap" as const, gap: "10px", marginBottom: "26px" };
const navLinkStyle = { textDecoration: "none", color: "#0f766e", background: "#ffffff", border: "1px solid #dbe3e1", borderRadius: "999px", padding: "10px 15px", fontWeight: 700, fontSize: "14px" };
const introStyle = { background: "#f0fdfa", border: "1px solid #99f6e4", borderLeft: "7px solid #0f766e", borderRadius: "12px", padding: "22px 24px", marginBottom: "24px", lineHeight: 1.7 };
const sectionStyle = { background: "#ffffff", border: "1px solid #e3e7e6", borderRadius: "14px", padding: "24px 26px", marginBottom: "20px", boxShadow: "0 5px 16px rgba(16,23,25,0.05)" };
const sectionHeaderStyle = { display: "flex", alignItems: "center", gap: "12px", marginBottom: "6px", flexWrap: "wrap" as const };
const numberBadgeStyle = { background: "#0f766e", color: "#fff", width: "34px", height: "34px", minWidth: "34px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "14px" };
const sectionTitleStyle = { margin: 0, fontSize: "21px", color: "#111827" };
const codeChipStyle = { background: "#f0fdfa", border: "1px solid #99f6e4", color: "#0f766e", borderRadius: "999px", padding: "4px 12px", fontWeight: 800, fontSize: "12.5px", fontFamily: "Consolas, monospace" };
const pStyle = { lineHeight: 1.75, margin: "0 0 8px", fontSize: "14.5px" };
const labelStyle = { margin: "16px 0 8px", fontWeight: 800, fontSize: "13px", letterSpacing: "0.03em", color: "#0f766e" };
const scenarioGridStyle = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "14px", marginTop: "6px" };
const easyCardStyle = { background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "10px", padding: "14px 16px", lineHeight: 1.65, fontSize: "13.5px" };
const hardCardStyle = { background: "#fff7ed", border: "1px solid #fed7aa", borderRadius: "10px", padding: "14px 16px", lineHeight: 1.65, fontSize: "13.5px" };
const tipsBoxStyle = { background: "#fef2f2", border: "1px solid #fecaca", borderLeft: "5px solid #dc2626", borderRadius: "10px", padding: "14px 16px", marginTop: "14px", lineHeight: 1.65, fontSize: "13.5px" };
const backLinkStyle = { textDecoration: "none", color: "#0f766e", fontWeight: 700 };

export default function Icd10Chapter14GuidelinesReviewerPage() {
  return (
    <main style={mainStyle}>
      <header style={heroStyle}>
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 14 · 2026 OFFICIAL GUIDELINES</p>
        <h1 style={{ margin: 0, fontSize: "clamp(26px, 5vw, 44px)" }}>Diseases of the Genitourinary System</h1>
        <p style={{ margin: "12px 0 0", fontSize: "18px", lineHeight: 1.5 }}>N00–N99 — this chapter's official guidelines focus entirely on chronic kidney disease: stage classification, ESRD, kidney transplant status, and sequencing with other conditions.</p>
      </header>

      <nav aria-label="ICD-10 navigation" style={navStyle}>
        <Link href="/icd10" style={navLinkStyle}>ICD-10-CM home</Link>
        <Link href="/icd10/chapter-14-practice-quiz" style={navLinkStyle}>Practice Quiz</Link>
        <Link href="/icd10/chapter-14-worked-examples" style={navLinkStyle}>Worked Examples</Link>
        <Link href="/icd10/chapter-14-flashcards" style={navLinkStyle}>Flashcards</Link>
      </nav>

      <section style={introStyle}>
        <strong>How to use this reviewer:</strong> same format as the other ICD-10 chapters — a plain-language rule summary, an easy and a hard example scenario with reasoning, and a tips/traps box for each topic. Written as an original summary, not a copy of the guideline text. Unlike some other chapters, Chapter 14's official narrative guidelines are narrow — they cover chronic kidney disease (CKD) specifically and nothing else — so this reviewer is intentionally focused on that one subject rather than padded out to match other chapters' length.
      </section>

      {topics.map((t) => (
        <section key={t.n} style={sectionStyle}>
          <div style={sectionHeaderStyle}>
            <span style={numberBadgeStyle}>{t.n}</span>
            <h2 style={sectionTitleStyle}>{t.title}</h2>
            <span style={codeChipStyle}>{t.codes}</span>
          </div>

          <p style={labelStyle}>📋 RULE SUMMARY</p>
          {t.summary.map((s) => <p key={s} style={pStyle}>{s}</p>)}

          <p style={labelStyle}>🎯 TWO EXAMPLE SCENARIOS</p>
          <div style={scenarioGridStyle}>
            <div style={easyCardStyle}>
              <strong>🟢 Easy:</strong> {t.easy.scenario}
              <p style={{ margin: "8px 0 0" }}><strong>Answer:</strong> {t.easy.answer}</p>
            </div>
            <div style={hardCardStyle}>
              <strong>🟠 Hard:</strong> {t.hard.scenario}
              <p style={{ margin: "8px 0 0" }}><strong>Answer:</strong> {t.hard.answer}</p>
            </div>
          </div>

          <div style={tipsBoxStyle}>
            <strong>🟥 Tips &amp; Traps</strong>
            <ul style={{ margin: "8px 0 0", paddingLeft: "20px", display: "grid", gap: "6px" }}>
              {t.tips.map((tip) => <li key={tip}>{tip}</li>)}
            </ul>
          </div>
        </section>
      ))}

      <div style={{ marginTop: "10px" }}>
        <Link href="/icd10" style={backLinkStyle}>← Back to ICD-10-CM</Link>
      </div>
    </main>
  );
}
