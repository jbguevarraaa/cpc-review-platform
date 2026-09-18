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
    title: "Diabetes Codes Are Combination Codes — Type, Body System & Complication",
    codes: "E08–E13",
    summary: [
      "Every diabetes mellitus code is a combination code baked from three pieces at once: the TYPE of diabetes, the BODY SYSTEM affected, and the specific COMPLICATION in that body system. As many codes within a category as needed are used to capture every complication the patient actually has.",
      "Codes are sequenced based on the reason for THIS particular encounter — there's no fixed universal order across every diabetes complication; assign as many codes from E08–E13 as needed to identify all associated conditions the patient has.",
      "The age of the patient is NOT the sole determining factor for type — even though type 1 is nicknamed \"juvenile diabetes\" because most patients develop it before puberty, an adult can still have type 1, and a child can still have type 2.",
      "El0.A– (Type 1 diabetes mellitus, presymptomatic) is used for early-stage type 1 that predates the onset of actual symptoms — a distinct concept from a standard active type 1 diagnosis.",
      "If the TYPE of diabetes isn't documented at all in the medical record, the default is E11.– (Type 2 diabetes mellitus) — not an unspecified-type code, and not type 1.",
    ],
    easy: {
      scenario: "A 45-year-old patient has documented type 2 diabetes with diabetic peripheral neuropathy.",
      answer: "The E11 code specific to type 2 diabetes with the neuropathy complication (E11.4-) — one combination code capturing type, body system, and complication together.",
    },
    hard: {
      scenario: "A patient's chart simply says \"diabetes mellitus\" with no type ever specified anywhere in the documentation.",
      answer: "Default to E11.– (Type 2 diabetes mellitus) — this is the fixed default whenever type isn't documented, regardless of the patient's age or any other clinical detail.",
    },
    tips: [
      "\"Type not documented\" always defaults to Type 2 (E11), never to an \"unspecified type\" code and never to Type 1 — this is a fixed rule, not a judgment call.",
      "Patient age is a red herring for diabetes type — \"juvenile diabetes\" nickname aside, age alone never determines the code.",
    ],
  },
  {
    n: 2,
    title: "Type 2 Diabetes in Remission",
    codes: "E11.A",
    summary: [
      "E11.A (Type 2 diabetes mellitus without complications, in remission) is assigned specifically based on PROVIDER DOCUMENTATION that the diabetes has achieved remission — it's not something a coder infers from lab values alone.",
      "If documentation is unclear about whether remission has actually been achieved, the provider should be queried — don't guess.",
      "\"Resolved\" is explicitly NOT the same thing as \"remission\" for coding purposes — that specific wording distinction is called out directly in the guideline.",
    ],
    easy: {
      scenario: "A provider clearly documents that a patient's type 2 diabetes has achieved remission, with no diabetic complications present.",
      answer: "E11.A (Type 2 diabetes mellitus without complications, in remission).",
    },
    hard: {
      scenario: "A patient's chart states their type 2 diabetes has \"resolved,\" with no further clarification.",
      answer: "Query the provider — \"resolved\" is not treated as synonymous with \"remission\" for coding purposes, so E11.A cannot be assigned on that wording alone.",
    },
    tips: [
      "\"Resolved\" vs. \"in remission\" is a precise wording trap worth memorizing outright — they are NOT interchangeable terms here, even though they sound similar in casual use.",
    ],
  },
  {
    n: 3,
    title: "Diabetes & Long-Term Drug Use — the Z79 Codes",
    codes: "Z79.4, Z79.84, Z79.85",
    summary: [
      "If documentation doesn't specify the type of diabetes but DOES indicate the patient uses insulin, code E11.– (Type 2) is still assigned as the default — plus an additional Z79 code identifying the specific long-term medication use.",
      "Z79.4 = long-term (current) use of insulin. Z79.84 = long-term (current) use of oral hypoglycemic drugs. Z79.85 = long-term (current) use of injectable non-insulin antidiabetic drugs.",
      "If a patient is on BOTH oral hypoglycemics and insulin, assign both Z79.4 AND Z79.84 together. If on both insulin and an injectable non-insulin antidiabetic, assign Z79.4 AND Z79.85. If on both oral hypoglycemics and an injectable non-insulin antidiabetic (no insulin), assign Z79.84 AND Z79.85.",
      "Z79.4 is specifically NOT assigned if insulin is given only TEMPORARILY to bring blood sugar under control during a single encounter — this Z79 family is for ongoing, long-term medication use, not a one-time in-visit adjustment.",
    ],
    easy: {
      scenario: "A patient's diabetes type isn't documented, but the chart confirms they take insulin on a long-term, ongoing basis.",
      answer: "E11.– (Type 2 diabetes, the default) plus Z79.4 (long-term use of insulin).",
    },
    hard: {
      scenario: "A type 2 diabetic patient is on both an oral hypoglycemic medication and an injectable non-insulin antidiabetic drug (no insulin at all).",
      answer: "Z79.84 (long-term use of oral hypoglycemic drugs) AND Z79.85 (long-term use of injectable non-insulin antidiabetic drugs) — both codes together, since neither drug is insulin itself.",
    },
    tips: [
      "There are exactly three possible two-drug Z79 combinations (insulin+oral, insulin+injectable non-insulin, oral+injectable non-insulin) — map the patient's actual medication list onto this grid rather than memorizing scenarios individually.",
      "A single temporary insulin dose to control blood sugar during today's visit does NOT trigger Z79.4 — this only applies to genuine ongoing, long-term use.",
    ],
  },
  {
    n: 4,
    title: "Insulin Pump Malfunction — Underdose vs. Overdose",
    codes: "T85.6–, T38.3X1–, T38.3X6–",
    summary: [
      "An UNDERDOSE of insulin caused by insulin pump failure is coded with a T85.6– subcategory code (mechanical complication of the specific pump malfunction type) as the principal/first-listed code, followed by T38.3X6– (underdosing of insulin and oral hypoglycemic drugs) — plus additional codes for the diabetes type and any complications from the underdosing.",
      "An OVERDOSE of insulin caused by insulin pump failure ALSO leads with a T85.6– code, but is followed instead by T38.3X1– (poisoning by insulin, accidental/unintentional) — a completely different second code from the underdose scenario, even though both start with the same T85.6– mechanical-complication code.",
    ],
    easy: {
      scenario: "A patient's insulin pump malfunctions, delivering too little insulin, resulting in hyperglycemia.",
      answer: "T85.6– (mechanical complication of the pump, specifying the malfunction type) first, then T38.3X6– (underdosing of insulin), plus codes for the diabetes type and any resulting complications.",
    },
    hard: {
      scenario: "A patient's insulin pump malfunctions, delivering too MUCH insulin, resulting in hypoglycemia requiring treatment.",
      answer: "T85.6– (mechanical complication of the pump) first, then T38.3X1– (poisoning by insulin, accidental) — not T38.3X6–, which is reserved for the underdose scenario.",
    },
    tips: [
      "Both underdose and overdose scenarios START with the identical T85.6– mechanical-complication code — the SECOND code is what distinguishes them (X6– for underdose, X1– for overdose). Don't let the shared first code cause you to mix up the pairing.",
    ],
  },
  {
    n: 5,
    title: "Secondary Diabetes Mellitus — Causes & Sequencing",
    codes: "E08, E09, E13, E89.1, Z90.41",
    summary: [
      "Secondary diabetes (codes under E08, drug/chemical-induced diabetes under E09, and other specified diabetes under E13) is always CAUSED by another condition or event — examples include cystic fibrosis, pancreatic malignancy, pancreatectomy, an adverse drug effect, or poisoning. It's conceptually different from type 1 or type 2, which arise on their own.",
      "The Z79 long-term medication-use rules from Topic 3 apply to secondary diabetes patients too — assign the matching Z79 code(s) for insulin, oral hypoglycemics, or injectable non-insulin drugs when the patient routinely uses them (again, not for temporary in-visit insulin dosing).",
      "For POSTPANCREATECTOMY diabetes specifically (loss of insulin production from surgical removal of all or part of the pancreas): assign E89.1 (postprocedural hypoinsulinemia), a code from category E13 as the principal/first-listed diagnosis, and a code from Z90.41 (acquired absence of pancreas) as an additional code — a specific three-part combination.",
      "For diabetes caused by DRUGS: this is coded as an adverse effect or poisoning per the general adverse-effect/poisoning rules (Chapter 19) and, when relevant, external cause codes (Chapter 20) — not as a standalone diabetes-only diagnosis.",
      "Sequencing of the secondary diabetes code relative to the code for its CAUSE follows the Tabular List instructions specific to categories E08, E09, and E13 — there's no single universal rule across all three; check the specific category's own notes.",
    ],
    easy: {
      scenario: "A patient develops secondary diabetes as a documented consequence of cystic fibrosis.",
      answer: "A code from category E08 (diabetes mellitus due to underlying condition) identifying the specific manifestation, with sequencing relative to the cystic fibrosis code following that category's own Tabular List instructions.",
    },
    hard: {
      scenario: "A patient develops diabetes after having their pancreas surgically removed due to pancreatic cancer.",
      answer: "E89.1 (postprocedural hypoinsulinemia), a category E13 code as the principal/first-listed diagnosis, and Z90.41 (acquired absence of pancreas) as an additional code — this specific three-code combination is the defined pattern for postpancreatectomy diabetes.",
    },
    tips: [
      "Secondary diabetes is defined by having an identifiable CAUSE — pancreatectomy, another disease, or a drug/poisoning — this is the conceptual line separating it from primary type 1/type 2.",
      "Postpancreatectomy diabetes is a named, three-code combination worth memorizing outright (E89.1 + E13 code + Z90.41) rather than reasoning out from general principles.",
    ],
  },
  {
    n: 6,
    title: "Obesity",
    codes: "E66.–, E88.82, O99.21",
    summary: [
      "Category E66 (overweight and obesity) includes codes tied to the CAUSE of obesity, such as E66.1 (drug-induced obesity), as well as codes tied to obesity's EFFECTS, such as E66.2 (morbid/severe obesity with alveolar hypoventilation).",
      "Other obesity-related codes exist outside category E66 entirely — E88.82 (obesity due to disruption of the MC4R pathway) is a genetics-linked code in a different category, and O99.21 (obesity complicating pregnancy, childbirth, and the puerperium) lives in the pregnancy chapter.",
      "Subcategory E66.81 (obesity class) requires a 5th character to convey severity, and the obesity CLASS must be documented in the medical record by the provider before that code can be assigned — a coder can't infer the class from BMI alone.",
      "Obesity class codes can be reported alongside other obesity codes to fully describe the condition. However, if BOTH class 3 obesity AND morbid obesity are documented for the same patient, only the class 3 obesity code is assigned — it's considered more specific, so the two aren't stacked together.",
    ],
    easy: {
      scenario: "A patient is documented with obesity as a known side effect of a specific long-term medication.",
      answer: "E66.1 (drug-induced obesity).",
    },
    hard: {
      scenario: "A patient's provider documents both \"class 3 obesity\" and \"morbid obesity\" in the same note.",
      answer: "Only the class 3 obesity code is assigned — since class 3 is the more specific documented finding, it isn't reported alongside a separate morbid obesity code for the same condition.",
    },
    tips: [
      "Obesity class codes require the provider to have actually documented the class — a coder cannot calculate or infer class purely from a BMI number in the chart.",
      "Overlapping obesity documentation (class 3 + morbid obesity) resolves to just the MORE SPECIFIC code, not both — this is a general specificity principle worth remembering for obesity questions specifically.",
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

export default function Icd10Chapter4GuidelinesReviewerPage() {
  return (
    <main style={mainStyle}>
      <header style={heroStyle}>
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 4 · 2026 OFFICIAL GUIDELINES</p>
        <h1 style={{ margin: 0, fontSize: "clamp(26px, 5vw, 44px)" }}>Endocrine, Nutritional &amp; Metabolic Diseases</h1>
        <p style={{ margin: "12px 0 0", fontSize: "18px", lineHeight: 1.5 }}>E00–E89 — diabetes mellitus type/remission/drug-use/pump-malfunction/secondary-cause rules, plus obesity coding.</p>
      </header>

      <nav aria-label="ICD-10 navigation" style={navStyle}>
        <Link href="/icd10" style={navLinkStyle}>ICD-10-CM home</Link>
        <Link href="/icd10/chapter-4-practice-quiz" style={navLinkStyle}>Practice Quiz</Link>
        <Link href="/icd10/chapter-4-worked-examples" style={navLinkStyle}>Worked Examples</Link>
        <Link href="/icd10/chapter-4-flashcards" style={navLinkStyle}>Flashcards</Link>
      </nav>

      <section style={introStyle}>
        <strong>How to use this reviewer:</strong> same format as the other ICD-10 chapters — a plain-language rule summary, an easy and a hard example scenario with reasoning, and a tips/traps box for each topic. Written as an original summary, not a copy of the guideline text. Diabetes mellitus (Topics 1–5) is one of the most consistently tested topics on the whole CPC exam — worth extra attention here.
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
