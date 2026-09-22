import Link from "next/link";
import { HighlightToolbar } from "../../cpt/surgery/_digestive/highlighter";

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
    title: "Assigning Chapter 17 Codes — Documentation and Sequencing",
    codes: "Q00–Q99",
    summary: [
      "Assign a code from Chapter 17 (Q00–Q99) when a congenital malformation, deformation, or chromosomal abnormality is DOCUMENTED by the provider. All three kinds of abnormality follow the same rule.",
      "A Chapter 17 code can be the principal/first-listed diagnosis OR a secondary diagnosis. Which position it takes depends on the reason for the encounter — not on which condition sounds more serious.",
    ],
    easy: {
      scenario: "An infant is admitted for surgical repair of a documented atrial septal defect.",
      answer: "The atrial septal defect code from category Q21 is the first-listed diagnosis — it is the reason for the admission.",
    },
    hard: {
      scenario: "The same infant's chart also documents Down syndrome, which is not the reason for the admission.",
      answer: "The septal defect code is still first-listed, and the Down syndrome code (from Q90) is reported as a secondary diagnosis. Both are Chapter 17 codes; sequencing follows the reason for the encounter.",
    },
    tips: [
      "'Documented' is the trigger — don't infer a syndrome or malformation from findings alone.",
      "A Chapter 17 code is never automatically first or last. Sequence by the reason for the encounter.",
    ],
  },
  {
    n: 2,
    title: "No Unique Code — Add Manifestation Codes",
    codes: "Q87.89 · Q89.7 · other specified / NEC codes",
    summary: [
      "When a malformation, deformation, or chromosomal abnormality does NOT have a unique code of its own — it can only be reported with an 'other specified,' 'not elsewhere classified,' or multiple-malformation code — assign additional code(s) for any manifestations that are present.",
      "The extra manifestation codes are how the record captures the patient's actual clinical problems when the anomaly code itself is general.",
      "Two examples of these general landing spots: Q87.89 (other specified congenital malformation syndromes, not elsewhere classified) and Q89.7 (multiple congenital malformations, not elsewhere classified).",
    ],
    easy: {
      scenario: "A provider documents a rare congenital malformation syndrome that has no specific code, with a seizure disorder and hearing loss both present.",
      answer: "Assign Q87.89 for the syndrome, plus separate codes for each documented manifestation — the seizure disorder and the hearing loss.",
    },
    hard: {
      scenario: "The provider documents 'multiple congenital malformations' but names none of them, and documents hearing loss.",
      answer: "Assign Q89.7, plus a code for the documented hearing loss. Don't guess at specific malformations that weren't named.",
    },
    tips: [
      "Test: does the malformation have its OWN unique code? If not — it can only be reported with a general code — add codes for the manifestations that are present.",
      "Never invent specific malformations to avoid a general code — code what is documented.",
    ],
  },
  {
    n: 3,
    title: "Unique Code — Skip Inherent Manifestations, Code the Rest",
    codes: "Q05 · Q90 · Q00–Q99",
    summary: [
      "When a code SPECIFICALLY identifies the anomaly, manifestations that are an INHERENT component of it are NOT coded separately.",
      "Manifestations that are NOT an inherent component still get their own additional codes.",
      "The Tabular List does much of the sorting for you. Combination codes build some manifestations into the code (hydrocephalus is built into the spina bifida 'with hydrocephalus' codes Q05.0–Q05.4), and 'use additional code' notes point to manifestations that are NOT inherent (the Q05 note says to use an additional code for any associated paraplegia, G82.2-).",
    ],
    easy: {
      scenario: "Lumbar spina bifida WITH hydrocephalus is documented.",
      answer: "Report the single combination code (Q05.2). Hydrocephalus is already built into the code, so a separate congenital hydrocephalus code (Q03.-) would be redundant.",
    },
    hard: {
      scenario: "The same child also has documented paraplegia caused by the spina bifida.",
      answer: "Add G82.2- for the paraplegia. The Q05 note says to use an additional code for any associated paraplegia, so it is a non-inherent manifestation that is coded separately.",
    },
    tips: [
      "Read the code's title and its notes before adding anything — the answer is usually in the combination wording or a 'use additional code' note.",
      "An additional, separately identified malformation (such as a septal defect in a child with Down syndrome) gets its own Chapter 17 code, because the Down syndrome code doesn't describe it.",
      "Tabular List notes: Q05 has an Excludes1 note for Arnold-Chiari syndrome type II (Q07.0-) and spina bifida occulta (Q76.0) — those aren't reported with Q05. Likewise Q35 (cleft palate) and Q36 (cleft lip) each carry an Excludes1 note pointing to Q37 (cleft palate with cleft lip) for the combined condition.",
    ],
  },
  {
    n: 4,
    title: "Personal History After Correction — and Lifetime Use",
    codes: "Q00–Q99 · Z87.7-",
    summary: [
      "Chapter 17 codes may be used throughout the patient's LIFE — there is no age cutoff.",
      "If a congenital malformation or deformity has been CORRECTED, use a personal history code to identify the history instead of the Q code.",
      "The personal-history codes for corrected congenital malformations are in category Z87.7-, organized by body system (for example, the Index lists a corrected heart malformation under Z87.74).",
    ],
    easy: {
      scenario: "An adult had a congenital heart defect repaired in childhood, with no residual defect, and is seen for a routine visit.",
      answer: "Use a Z87.7- personal history code for the corrected malformation (the Index lists the heart under Z87.74), not a Q code — the defect no longer exists.",
    },
    hard: {
      scenario: "A 34-year-old has a documented congenital malformation that was never corrected and is still present.",
      answer: "Assign the Chapter 17 Q code. Lifetime use applies, and the history code is only for malformations that have been corrected.",
    },
    tips: [
      "'Corrected' vs. 'still present' is the whole decision.",
      "Adults get Q codes too — a Q code doesn't expire at any age.",
    ],
  },
  {
    n: 5,
    title: "Diagnosed Later in Life",
    codes: "Q00–Q99",
    summary: [
      "A malformation, deformation, or chromosomal abnormality is present at birth but may not be identified until later in life.",
      "Whenever the provider diagnoses it — at any age — it is appropriate to assign the Chapter 17 code.",
    ],
    easy: {
      scenario: "A 45-year-old is newly diagnosed with a bicuspid aortic valve on an echocardiogram.",
      answer: "Assign the Chapter 17 code for the bicuspid aortic valve (Q23.81). It is a congenital condition, and the code is assigned whenever the provider diagnoses it.",
    },
    hard: {
      scenario: "A 30-year-old's genetic testing confirms a chromosomal abnormality, and the provider documents it.",
      answer: "Assign the appropriate code from Q90–Q99 at that encounter. The abnormality has been present since birth, and the age at diagnosis doesn't matter.",
    },
    tips: [
      "Age at diagnosis never blocks a Chapter 17 code.",
      "Documentation still rules: the code needs the provider's diagnosis, not just a lab result.",
    ],
  },
  {
    n: 6,
    title: "The Birth Admission — Z38 First, Then the Anomaly Codes",
    codes: "Z38.- · Q00–Q99",
    summary: [
      "For the birth admission, the appropriate Z38 code (liveborn infants according to place of birth and type of delivery) is sequenced as the PRINCIPAL diagnosis.",
      "Any congenital anomaly codes (Q00–Q99) follow the Z38 code.",
      "This matches the Chapter 16 birth-record rule: Z38 stays principal on the birth episode regardless of what else is documented.",
    ],
    easy: {
      scenario: "A newborn delivered vaginally in the hospital is documented with a cleft lip.",
      answer: "Z38.00 (single liveborn infant, delivered vaginally) is principal, followed by the appropriate cleft lip code from Q36.",
    },
    hard: {
      scenario: "On the birth-episode chart, a coder wants to list a documented congenital heart defect first because it is the most serious condition.",
      answer: "Incorrect. Z38 stays principal for the birth admission, and the heart defect code (Q20–Q28) is listed after it.",
    },
    tips: [
      "Z38 first, Q codes after — for the birth admission.",
      "Serious does not mean principal on the birth record; the Z38 code always leads.",
    ],
  },
];

const blocks: [string, string, string][] = [
  ["Q00–Q07", "Nervous system", "e.g., Q02 microcephaly, Q03 congenital hydrocephalus, Q05 spina bifida"],
  ["Q10–Q18", "Eye, ear, face and neck", "e.g., Q10.0 congenital ptosis"],
  ["Q20–Q28", "Circulatory system", "e.g., Q21 cardiac septal defects, Q23.81 bicuspid aortic valve, Q25.0 patent ductus arteriosus"],
  ["Q30–Q34", "Respiratory system", "airway and lung malformations"],
  ["Q35–Q37", "Cleft lip and cleft palate", "Q35 cleft palate · Q36 cleft lip · Q37 cleft palate WITH cleft lip"],
  ["Q38–Q45", "Other digestive system", "mouth, esophagus, and intestinal malformations"],
  ["Q50–Q56", "Genital organs", "malformations of the ovary, uterus, and male genitalia"],
  ["Q60–Q64", "Urinary system", "kidney, ureter, and bladder malformations"],
  ["Q65–Q79", "Musculoskeletal system", "malformations AND deformations of bones, joints, and muscles"],
  ["Q80–Q89", "Other congenital malformations", "e.g., Q85.1 tuberous sclerosis, Q86.0 fetal alcohol syndrome, Q87.4 Marfan syndrome, Q87.89 other specified syndromes, Q89.7 multiple malformations NEC"],
  ["Q90–Q99", "Chromosomal abnormalities, not elsewhere classified", "e.g., Q90 Down syndrome, Q91 trisomy 18 and trisomy 13"],
];

const blockGridStyle = { display: "grid", gap: "8px", margin: "12px 0 0", padding: 0, listStyle: "none" };
const blockRowStyle = { display: "flex", flexWrap: "wrap" as const, gap: "6px 14px", alignItems: "baseline", background: "#f6f9f9", border: "1px solid #e3e7e6", borderRadius: "8px", padding: "9px 13px", lineHeight: 1.55, fontSize: "14px" };
const blockNameStyle = { fontWeight: 800, color: "#111827", minWidth: "190px" };

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

export default function Icd10Chapter17GuidelinesReviewerPage() {
  return (
    <main style={mainStyle}>
      <HighlightToolbar />
      <header style={heroStyle}>
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 17 · 2026 OFFICIAL GUIDELINES</p>
        <h1 style={{ margin: 0, fontSize: "clamp(26px, 5vw, 44px)" }}>Congenital Malformations, Deformations &amp; Chromosomal Abnormalities</h1>
        <p style={{ margin: "12px 0 0", fontSize: "18px", lineHeight: 1.5 }}>Q00–Q99 — when to assign a Chapter 17 code, general vs. specific codes and manifestations, corrected malformations and lifetime use, conditions found later in life, and birth-admission sequencing with Z38.</p>
      </header>

      <nav aria-label="ICD-10 navigation" style={navStyle}>
        <Link href="/icd10" style={navLinkStyle}>ICD-10-CM home</Link>
        <Link href="/icd10/chapter-17-practice-quiz" style={navLinkStyle}>Practice Quiz</Link>
        <Link href="/icd10/chapter-17-worked-examples" style={navLinkStyle}>Worked Examples</Link>
        <Link href="/icd10/chapter-17-flashcards" style={navLinkStyle}>Flashcards</Link>
      </nav>

      <section style={introStyle}>
        <strong>How to use this reviewer:</strong> same format as the other ICD-10 chapters — a plain-language rule summary, an easy and a hard example scenario with reasoning, and a tips/traps box for each topic. Written as an original summary, not a copy of the guideline text. Chapter 17 has a short set of official guidelines, so the six topics below cover all of them; the block map shows how the codes themselves are organized.
      </section>

      <section style={sectionStyle}>
        <div style={sectionHeaderStyle}>
          <span style={numberBadgeStyle}>🗺</span>
          <h2 style={sectionTitleStyle}>Chapter 17 at a Glance — The Eleven Blocks</h2>
          <span style={codeChipStyle}>Q00–Q99</span>
        </div>
        <p style={pStyle}>The chapter is organized by body system, with chromosomal abnormalities last. The official guidelines don't change from block to block — the same six rules below apply everywhere.</p>
        <ul style={blockGridStyle}>
          {blocks.map(([range, name, eg]) => (
            <li key={range} style={blockRowStyle}>
              <code style={codeChipStyle}>{range}</code>
              <span style={blockNameStyle}>{name}</span>
              <span>{eg}</span>
            </li>
          ))}
        </ul>
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
