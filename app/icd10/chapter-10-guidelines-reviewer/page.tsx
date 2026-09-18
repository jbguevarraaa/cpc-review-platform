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
    title: "COPD & Asthma — Acute Exacerbation",
    codes: "J44.–, J45.–",
    summary: [
      "Categories J44 (COPD) and J45 (asthma) both distinguish between UNCOMPLICATED cases and cases in ACUTE EXACERBATION.",
      "An acute exacerbation is a worsening or decompensation of the chronic condition itself — it is NOT the same thing as a separate infection layered on top of the chronic condition, even though an exacerbation can be TRIGGERED by an infection.",
      "This distinction matters for code selection: the exacerbation code describes the chronic disease getting worse, not the presence of an infection — don't reach for a combined \"infection\" code just because an infection happened to trigger the flare-up.",
    ],
    easy: {
      scenario: "A patient with known COPD presents with significantly worsened shortness of breath and wheezing beyond their baseline, with no documented triggering infection.",
      answer: "The COPD-with-acute-exacerbation code from J44 — a worsening/decompensation of the chronic disease itself.",
    },
    hard: {
      scenario: "A patient with asthma develops a viral upper respiratory infection, which then triggers a significant worsening of their asthma symptoms requiring treatment.",
      answer: "The asthma-with-acute-exacerbation code from J45 — the exacerbation is still coded as an exacerbation of the chronic disease, even though an infection was the trigger; it is not treated as a separate \"infection superimposed on\" combination.",
    },
    tips: [
      "\"Triggered by an infection\" does not change what gets coded — the exacerbation of the chronic condition is still the code, since an exacerbation is defined as the disease worsening, not as an infection being layered on top.",
    ],
  },
  {
    n: 2,
    title: "Acute Respiratory Failure — As Principal Diagnosis",
    codes: "J96.0–, J96.2–",
    summary: [
      "A code from subcategory J96.0 (acute respiratory failure) or J96.2 (acute and chronic respiratory failure) may be assigned as the PRINCIPAL diagnosis when it's the condition established after study to be chiefly responsible for the hospital admission, and this selection is supported by the Alphabetic Index and Tabular List.",
      "However, chapter-specific coding guidelines that provide their own sequencing direction (such as obstetrics, poisoning, HIV, or newborn guidelines) TAKE PRECEDENCE over this general rule — respiratory failure doesn't automatically override those other chapters' own sequencing instructions.",
    ],
    easy: {
      scenario: "A patient is admitted, and after study, acute respiratory failure is determined to be the condition chiefly responsible for the admission, with no competing chapter-specific sequencing guideline in play.",
      answer: "A code from J96.0 (or J96.2, if both acute and chronic) may be assigned as the principal diagnosis.",
    },
    hard: {
      scenario: "A pregnant patient is admitted with acute respiratory failure that is directly related to a documented obstetric complication, where the obstetrics chapter's own guidelines specify a different sequencing.",
      answer: "The obstetrics chapter-specific sequencing guideline takes precedence over the general acute-respiratory-failure-as-principal-diagnosis rule — chapter-specific sequencing guidelines (obstetrics, poisoning, HIV, newborn) override this general rule when they apply.",
    },
    tips: [
      "Acute respiratory failure being \"chiefly responsible for the admission\" is necessary but not always sufficient — always check whether a chapter-specific sequencing guideline (obstetrics/poisoning/HIV/newborn) applies first, since those take precedence.",
    ],
  },
  {
    n: 3,
    title: "Acute Respiratory Failure — As Secondary Diagnosis & Sequencing",
    codes: "J96.0–, J96.2–",
    summary: [
      "Respiratory failure may be listed as a SECONDARY diagnosis if it develops after admission, or if it's present on admission but doesn't meet the definition of principal diagnosis.",
      "When a patient is admitted with respiratory failure AND another acute condition (e.g., myocardial infarction, cerebrovascular accident, aspiration pneumonia — whether that other condition is respiratory or nonrespiratory), the principal diagnosis will NOT be the same in every situation; it depends on the specific circumstances of the admission.",
      "If both the respiratory failure and the other acute condition are equally responsible for occasioning the admission, and there are no chapter-specific sequencing rules that apply, the general \"two or more diagnoses that equally meet the definition of principal diagnosis\" guideline (Section II.C) may be applied.",
      "If the documentation isn't clear about whether respiratory failure and the other condition were EQUALLY responsible for the admission, query the provider for clarification rather than guessing.",
    ],
    easy: {
      scenario: "A patient develops respiratory failure during the hospital stay, several days after being admitted for an unrelated reason.",
      answer: "Respiratory failure is coded as a SECONDARY diagnosis — it developed after admission, so it can't be the principal diagnosis in this scenario.",
    },
    hard: {
      scenario: "A patient is admitted with both acute respiratory failure and an acute myocardial infarction, and the documentation doesn't clarify whether the two were equally responsible for the admission.",
      answer: "Query the provider for clarification before selecting the principal diagnosis — with ambiguous documentation about whether the two conditions were equally responsible, guessing isn't appropriate.",
    },
    tips: [
      "There is NO universal rule for which condition (respiratory failure vs. the other acute condition) is principal when both are present on admission — it always depends on the specific circumstances, so resist the urge to memorize one condition as \"always principal.\"",
    ],
  },
  {
    n: 4,
    title: "Influenza Due to Certain Identified Viruses",
    codes: "J09, J10, J11",
    summary: [
      "Category J09 (influenza due to certain identified influenza viruses, e.g., avian or other novel influenza A) and J10 (influenza due to other identified influenza virus) should ONLY be coded for CONFIRMED cases — this is an explicit exception to the general hospital inpatient uncertain-diagnosis guideline (Section II.H), which normally allows coding a documented \"probable\"/\"suspected\" diagnosis as if confirmed.",
      "\"Confirmation\" for this purpose does NOT require positive laboratory testing specifically for avian/novel influenza A — coding is instead based on the PROVIDER'S diagnostic statement that the patient has avian influenza, other novel influenza A, or another particular identified strain (like H1N1 or H3N2) not identified as novel/variant.",
      "If the provider instead documents \"suspected,\" \"possible,\" or \"probable\" avian/novel/other identified influenza (i.e., NOT confirmed), the appropriate code is instead from category J11 (influenza due to UNIDENTIFIED influenza virus) — neither J09 nor J10 should be assigned in that case.",
    ],
    easy: {
      scenario: "A provider's diagnostic statement clearly documents \"H1N1 influenza\" as a confirmed diagnosis, with no lab confirmation mentioned either way.",
      answer: "A code from J10 (influenza due to other identified influenza virus) — the provider's own diagnostic statement is sufficient for confirmation; positive lab testing isn't required.",
    },
    hard: {
      scenario: "A provider documents \"possible avian influenza\" pending further workup.",
      answer: "A code from J11 (influenza due to unidentified influenza virus) — since the documentation says \"possible\" rather than confirming the diagnosis, neither J09 nor J10 (which require confirmation) can be assigned.",
    },
    tips: [
      "This is a rare exception to the usual inpatient rule that \"probable\"/\"suspected\" diagnoses can be coded as confirmed — for J09/J10 specifically, unconfirmed documentation routes to J11 instead, not to J09/J10.",
      "Confirmation here means the PROVIDER's own diagnostic statement, not a positive lab result — don't hold out for lab confirmation before assigning J09/J10.",
    ],
  },
  {
    n: 5,
    title: "Ventilator-Associated Pneumonia — Documentation Requirement",
    codes: "J95.851",
    summary: [
      "As with all procedural/postprocedural complications, code assignment for ventilator-associated pneumonia (VAP) is based on the PROVIDER'S OWN DOCUMENTATION of the relationship between the pneumonia and the ventilator — not a coder's inference just because a patient on a ventilator happens to have pneumonia.",
      "Code J95.851 (Ventilator associated pneumonia) should be assigned ONLY when the provider has specifically documented VAP by that relationship — plus an additional code identifying the causative organism (for example, B96.5 for Pseudomonas aeruginosa).",
      "Do NOT assign an additional code from categories J12–J18 (pneumonia by organism) to also identify the type of pneumonia when J95.851 is used — J95.851 stands on its own (with the organism code), rather than being paired with a J12–J18 pneumonia-type code.",
      "J95.851 should NOT be assigned simply because a patient has pneumonia AND is on a mechanical ventilator — the provider must have specifically stated the pneumonia is ventilator-associated. If documentation is unclear on this relationship, query the provider.",
    ],
    easy: {
      scenario: "A provider specifically documents that a patient's pneumonia is ventilator-associated pneumonia, caused by Pseudomonas aeruginosa.",
      answer: "J95.851 (ventilator associated pneumonia) plus B96.5 (Pseudomonas aeruginosa as the causative organism) — no additional J12–J18 pneumonia-type code is added alongside it.",
    },
    hard: {
      scenario: "A patient on a mechanical ventilator develops pneumonia, but the documentation never actually states the pneumonia is ventilator-associated — it's ambiguous whether the ventilator caused it.",
      answer: "Query the provider — J95.851 cannot be assigned just because the patient happens to be on a ventilator and has pneumonia; the provider must specifically document the VAP relationship.",
    },
    tips: [
      "J95.851 is a documentation-driven code, exactly like other procedural complications — \"on a ventilator\" + \"has pneumonia\" is NOT enough on its own; the provider must state the causal relationship.",
      "When J95.851 is used, don't also add a J12–J18 organism-type pneumonia code — only the organism-identifying code (like B96.5) is added alongside it.",
    ],
  },
  {
    n: 6,
    title: "Ventilator-Associated Pneumonia — Developing After Admission",
    codes: "J12–J18, J95.851",
    summary: [
      "A patient may be admitted with one specific type of pneumonia already present (for example, J13, pneumonia due to Streptococcus pneumoniae) and then SUBSEQUENTLY develop VAP during the same stay.",
      "In this situation, the PRINCIPAL diagnosis is the appropriate J12–J18 code for the pneumonia diagnosed AT THE TIME OF ADMISSION — not the later-developing VAP.",
      "J95.851 is then assigned as an ADDITIONAL diagnosis, specifically when the provider has ALSO documented the presence of ventilator-associated pneumonia developing during the stay.",
    ],
    easy: {
      scenario: "A patient is admitted with Streptococcus pneumoniae pneumonia (J13), and several days into the ventilator-supported stay, the provider documents the patient has also developed VAP.",
      answer: "J13 (the admission pneumonia) remains the principal diagnosis, with J95.851 (VAP) added as an additional diagnosis for the pneumonia that developed later.",
    },
    hard: {
      scenario: "A patient is admitted with a different type of pneumonia already coded from the J12–J18 range, and the chart later mentions the patient is on a ventilator, but the provider never specifically documents that a SECOND, ventilator-associated pneumonia has developed.",
      answer: "J95.851 is NOT added — the admission pneumonia code remains the only pneumonia code, since the provider hasn't documented a distinct, subsequently-developing VAP.",
    },
    tips: [
      "The sequence of events matters here: pneumonia present AT ADMISSION keeps its own J12–J18 principal-diagnosis code; VAP that develops LATER is added as a secondary J95.851 code — only when the provider actually documents that later VAP separately.",
    ],
  },
  {
    n: 7,
    title: "Vaping-Related Disorders",
    codes: "U07.0",
    summary: [
      "For patients presenting with conditions related to vaping, assign code U07.0 (Vaping-related disorder) as the PRINCIPAL diagnosis.",
      "For lung injury specifically due to vaping, assign ONLY code U07.0 — no additional lung-injury code is layered on top of it for that specific finding.",
      "Additional codes ARE assigned for OTHER manifestations related to the vaping, such as acute respiratory failure (from subcategory J96.0–) or pneumonitis (J68.0).",
      "Associated respiratory signs/symptoms due to vaping (such as cough or shortness of breath) are NOT coded separately once a definitive vaping-related diagnosis has been established. However, it IS appropriate to separately code any GASTROINTESTINAL symptoms, such as diarrhea or abdominal pain, that are also present.",
    ],
    easy: {
      scenario: "A patient presents with lung injury specifically attributed to vaping, with no other complications documented.",
      answer: "U07.0 (vaping-related disorder) alone — no additional lung-injury code is added for this specific finding.",
    },
    hard: {
      scenario: "A patient with a vaping-related disorder is documented with acute respiratory failure, plus ongoing cough and diarrhea.",
      answer: "U07.0 as the principal diagnosis, PLUS a code from J96.0– for the acute respiratory failure (an additional manifestation) and a code for the diarrhea (a GI symptom, separately codeable) — but the cough is NOT separately coded, since respiratory signs/symptoms aren't coded separately once the definitive vaping diagnosis is established.",
    },
    tips: [
      "Respiratory symptoms (cough, shortness of breath) get absorbed into the U07.0 diagnosis and aren't separately coded — but GI symptoms (diarrhea, abdominal pain) ARE still separately coded even alongside a vaping diagnosis. This asymmetry (respiratory vs. GI symptoms) is worth memorizing directly.",
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

export default function Icd10Chapter10GuidelinesReviewerPage() {
  return (
    <main style={mainStyle}>
      <header style={heroStyle}>
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 10 · 2026 OFFICIAL GUIDELINES</p>
        <h1 style={{ margin: 0, fontSize: "clamp(26px, 5vw, 44px)" }}>Diseases of the Respiratory System</h1>
        <p style={{ margin: "12px 0 0", fontSize: "18px", lineHeight: 1.5 }}>J00–J99, U07.0 — COPD/asthma exacerbation, acute respiratory failure sequencing, confirmed vs. unconfirmed influenza, ventilator-associated pneumonia, and vaping-related disorders.</p>
      </header>

      <nav aria-label="ICD-10 navigation" style={navStyle}>
        <Link href="/icd10" style={navLinkStyle}>ICD-10-CM home</Link>
        <Link href="/icd10/chapter-10-practice-quiz" style={navLinkStyle}>Practice Quiz</Link>
        <Link href="/icd10/chapter-10-worked-examples" style={navLinkStyle}>Worked Examples</Link>
        <Link href="/icd10/chapter-10-flashcards" style={navLinkStyle}>Flashcards</Link>
      </nav>

      <section style={introStyle}>
        <strong>How to use this reviewer:</strong> same format as the other ICD-10 chapters — a plain-language rule summary, an easy and a hard example scenario with reasoning, and a tips/traps box for each topic. Written as an original summary, not a copy of the guideline text. Acute respiratory failure sequencing (Topics 2–3) and the VAP documentation rules (Topics 5–6) are the densest, most exam-relevant parts of this chapter.
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
