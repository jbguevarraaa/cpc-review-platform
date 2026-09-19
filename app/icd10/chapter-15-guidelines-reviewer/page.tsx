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
    title: "Chapter 15 Sequencing Priority, Maternal-Only Rule & Incidental Pregnancy",
    codes: "O00–O9A, Z33.1",
    summary: [
      "Obstetric cases require codes from Chapter 15 (O00–O9A). Chapter 15 codes have SEQUENCING PRIORITY over codes from other chapters — additional codes from other chapters may be added to further specify a condition, but a Chapter 15 code still leads.",
      "If the provider specifically documents that the pregnancy is INCIDENTAL to the encounter (i.e., the condition being treated is NOT affecting the pregnancy), use Z33.1 (Pregnant state, incidental) INSTEAD of any Chapter 15 code. This determination is the provider's responsibility to document — a coder can't decide this independently.",
      "Chapter 15 codes are used ONLY on the maternal record — never on the newborn's own record.",
    ],
    easy: {
      scenario: "A pregnant patient is treated for a condition, and the provider documents that the condition is not affecting the pregnancy in any way.",
      answer: "Z33.1 (Pregnant state, incidental) in place of any Chapter 15 code — the provider's explicit \"not affecting the pregnancy\" documentation is what triggers this.",
    },
    hard: {
      scenario: "A pregnant patient is treated for a condition, and there's no documentation either way about whether it's affecting the pregnancy.",
      answer: "Use a Chapter 15 code — Z33.1 is only appropriate when the provider has SPECIFICALLY documented the condition as not affecting the pregnancy; silence on the question defaults to the Chapter 15 pathway, not the incidental one.",
    },
    tips: [
      "Z33.1 isn't a default or a coder's judgment call — it requires the provider to explicitly state the condition doesn't affect the pregnancy. Absent that statement, use Chapter 15.",
      "Never code a Chapter 15 diagnosis on a newborn's chart — that's a maternal-record-only code family, full stop.",
    ],
  },
  {
    n: 2,
    title: "Trimester Character — Assignment & Multi-Trimester Admissions",
    codes: "O00–O9A (trimester character)",
    summary: [
      "Most Chapter 15 codes have a final character indicating the trimester. Assignment is based on the PROVIDER'S documentation of the trimester, OR the number of weeks (a coder can translate weeks into the matching trimester). This applies both to pre-existing conditions and to conditions that develop during or due to the pregnancy.",
      "If trimester isn't a component of a particular code, it's because that condition always occurs in one specific trimester, or the trimester concept simply doesn't apply to it.",
      "Whenever delivery occurs during the current admission, and there's an \"in childbirth\" option for the complication being coded, use the \"in childbirth\" code. If no \"in childbirth\" option exists for that condition, use the code for the current trimester instead.",
      "For an admission that STARTS in one trimester and continues into a LATER trimester: the trimester character for an antepartum complication is based on the trimester when the complication actually DEVELOPED — not the trimester of discharge. If the condition developed before the current admission (a pre-existing condition), use the trimester at the time of the current admission/encounter instead.",
    ],
    easy: {
      scenario: "A patient develops a pregnancy complication documented at 22 weeks gestation (second trimester), and the encounter note doesn't use the word \"trimester\" anywhere.",
      answer: "Assign the second-trimester character — the provider's documented week count (22 weeks) can be translated directly into the matching trimester.",
    },
    hard: {
      scenario: "A patient is admitted during her second trimester for a complication that developed then, and remains hospitalized into her third trimester before discharge.",
      answer: "The SECOND-trimester character — based on when the complication actually developed, not the trimester at discharge.",
    },
    tips: [
      "\"In childbirth\" beats a plain trimester code whenever delivery happens during the same admission and that specific option exists for the complication — check for it before defaulting to trimester.",
      "Multi-trimester admissions are a fixed rule, not a judgment call: code the trimester when the complication DEVELOPED, period — discharge trimester is irrelevant for that purpose.",
    ],
  },
  {
    n: 3,
    title: "Unspecified Trimester & 7th Character for Fetus Identification",
    codes: "O00–O9A (7th character), O31–O36, O40, O41, O60–O64, O69",
    summary: [
      "Every category with trimester codes also has an \"unspecified trimester\" option — but it should RARELY be used, reserved for situations where documentation is genuinely insufficient to determine the trimester and clarification isn't obtainable.",
      "For certain categories (O31, O32, O33.3–O33.6, O35, O36, O40, O41, O60.1, O60.2, O64, and O69), a 7th character identifies WHICH FETUS a complication code applies to, when there's more than one.",
      "Assign 7th character \"0\" (single/unspecified) in three situations: for single gestations, when documentation is insufficient to determine which fetus is affected and clarification isn't possible, or when it's simply not clinically possible to determine which fetus is affected.",
    ],
    easy: {
      scenario: "A patient with a single (non-multiple) pregnancy has a documented complication from one of the fetus-identifying categories.",
      answer: "7th character \"0\" — single gestations always get this character, since there's only one fetus to identify.",
    },
    hard: {
      scenario: "A patient with twins has a documented complication from a fetus-identifying category, but the documentation doesn't specify which twin is affected, and it's not possible to obtain that clarification.",
      answer: "7th character \"0\" — even in a multiple gestation, when the specific fetus can't be identified from the documentation and clarification isn't obtainable, the same \"0\" character applies.",
    },
    tips: [
      "\"Unspecified trimester\" should feel like a rare fallback, not a routine option — reach for a specific trimester whenever the documentation supports one.",
      "7th character \"0\" covers THREE different real-world situations (single gestation, can't-determine-which-fetus, not clinically possible to determine) — don't assume it only applies to singleton pregnancies.",
    ],
  },
  {
    n: 4,
    title: "Completed Weeks of Gestation",
    codes: "O09.–, Z3A.–",
    summary: [
      "In ICD-10-CM, \"completed\" weeks of gestation means FULL weeks only — partial weeks don't round up.",
    ],
    easy: {
      scenario: "A provider documents gestation at exactly 36 weeks, 0 days.",
      answer: "The code for 36 completed weeks of gestation.",
    },
    hard: {
      scenario: "A provider documents gestation at 39 weeks and 6 days — one day short of 40 weeks.",
      answer: "The code for 39 completed weeks of gestation, NOT 40 — the patient hasn't reached a full 40 completed weeks yet, even though she's just one day away.",
    },
    tips: [
      "\"39 weeks and 6 days\" is a classic trap — the instinct to round up to 40 is wrong. Completed weeks means the LAST fully finished week, not the nearest one.",
    ],
  },
  {
    n: 5,
    title: "Selecting the OB Principal Diagnosis — Routine Prenatal vs. High-Risk Supervision",
    codes: "Z34.–, O09.–, O80",
    summary: [
      "For ROUTINE outpatient prenatal visits with NO complications present, use a code from category Z34 (Encounter for supervision of normal pregnancy) as the first-listed diagnosis. Z34 codes are NOT used together with Chapter 15 codes.",
      "Category O09 (Supervision of high-risk pregnancy) is intended for use ONLY during the PRENATAL period. For complications arising during labor or delivery as a result of a high-risk pregnancy, use the applicable Chapter 15 complication codes instead — not O09. If there are no complications during labor/delivery, use O80 (Encounter for full-term uncomplicated delivery) instead.",
      "For routine PRENATAL outpatient visits specifically for a high-risk pregnancy patient, an O09 code IS used as the first-listed diagnosis (unlike the complication-free routine case, which uses Z34). Secondary Chapter 15 codes may be added alongside O09 if appropriate.",
    ],
    easy: {
      scenario: "A patient with no risk factors and no complications presents for a routine prenatal check-up.",
      answer: "A code from category Z34 as the first-listed diagnosis — no Chapter 15 code is used alongside it.",
    },
    hard: {
      scenario: "A patient with a documented high-risk pregnancy presents for a routine prenatal visit, with no current complications.",
      answer: "A code from category O09 (supervision of high-risk pregnancy) as the first-listed diagnosis — NOT Z34, since Z34 is reserved for patients without high-risk status. Secondary Chapter 15 codes may be added if appropriate.",
    },
    tips: [
      "Z34 = routine, no risk factors. O09 = routine prenatal visit, BUT high-risk status documented. Same \"routine visit\" framing, two different first-listed codes depending on risk status.",
      "O09 is a PRENATAL-only category — once labor/delivery complications actually occur, switch to the specific Chapter 15 complication code; O09 doesn't carry forward into the delivery episode itself.",
    ],
  },
  {
    n: 6,
    title: "Selecting the OB Principal Diagnosis — No Delivery, Delivery Occurs, Cesarean & Outcome",
    codes: "O00–O9A, Z37.–",
    summary: [
      "In episodes when NO delivery occurs, the principal diagnosis should be the principal complication of the pregnancy that necessitated the encounter. If more than one complication is present and all are treated/monitored, any of the complication codes may be sequenced first.",
      "When an obstetric patient is admitted AND delivers during that same admission, the condition that PROMPTED THE ADMISSION is sequenced as the principal diagnosis (if multiple conditions prompted admission, sequence the one most related to the delivery). Any complication of the delivery itself is an ADDITIONAL diagnosis.",
      "For a CESAREAN delivery specifically: if the patient was admitted with a condition that resulted in the cesarean, THAT condition is the principal diagnosis. If the reason for admission was UNRELATED to the condition that led to the cesarean, the actual admission reason is the principal diagnosis instead.",
      "A code from category Z37 (Outcome of delivery) should be included on EVERY maternal record whenever a delivery has occurred — never on subsequent records, and never on the newborn's own record.",
    ],
    easy: {
      scenario: "A pregnant patient is admitted and treated for a single complication, with no delivery occurring during this encounter.",
      answer: "That complication's Chapter 15 code as the principal diagnosis — the reason for the no-delivery encounter drives principal diagnosis selection.",
    },
    hard: {
      scenario: "A patient is admitted specifically for failure to progress in labor (the stated reason for admission), and during that same admission ends up requiring a cesarean delivery because of the failure to progress.",
      answer: "Failure to progress — the condition that resulted in the cesarean is also the condition the patient was admitted for, so it's the principal diagnosis. (Had the admission instead been for something unrelated, with the cesarean-triggering condition arising only after admission, the original admission reason would remain principal instead.)",
    },
    tips: [
      "\"What was the reason for admission\" is the anchor question whenever delivery happens during the same stay — the delivery complication itself is usually additional, not principal, unless it also happens to be why the patient was admitted.",
      "Z37 is a required companion code on every maternal record with a completed delivery — don't forget it, and don't carry it forward onto follow-up visits or the newborn's chart.",
    ],
  },
  {
    n: 7,
    title: "Pre-Existing vs. Pregnancy-Related Conditions & Pre-Existing Hypertension",
    codes: "O10.–",
    summary: [
      "Certain Chapter 15 categories distinguish between conditions that existed BEFORE pregnancy (pre-existing) and those that are a DIRECT RESULT of the pregnancy itself. Assessing which one applies is essential to picking the right code. Categories that DON'T make this distinction can be used for either situation.",
      "It's acceptable to use puerperium-specific codes together with codes complicating pregnancy/childbirth if a condition arises postpartum during the delivery encounter itself.",
      "Category O10 (pre-existing hypertension complicating pregnancy, childbirth, and the puerperium) includes codes for hypertensive heart disease and hypertensive chronic kidney disease. When one of those specific O10 codes is used, a SECONDARY code from the appropriate hypertension category is also required to specify the type of heart failure or CKD involved.",
      "Hypertension that develops DURING pregnancy (not pre-existing) is a different code family entirely — gestational hypertension and pre-eclampsia/eclampsia live in categories O13–O16, not O10. Confirming pre-existing vs. pregnancy-induced status is what decides which of these two code families applies.",
    ],
    easy: {
      scenario: "A patient has hypertension that was documented and treated for years before she became pregnant.",
      answer: "A code from category O10 (pre-existing hypertension) — the hypertension predates the pregnancy, making this the pre-existing category rather than a pregnancy-induced one.",
    },
    hard: {
      scenario: "A patient's chart documents pre-existing hypertension with hypertensive chronic kidney disease, using the appropriate O10 subcode for that combination.",
      answer: "The O10 code PLUS a secondary code from the appropriate hypertension category identifying the specific CKD detail — the O10 code alone doesn't fully capture the CKD specifics; a second code is required.",
    },
    tips: [
      "Pre-existing vs. pregnancy-related is a threshold question you have to answer BEFORE picking a Chapter 15 code for many categories — don't skip straight to a code without asking which situation actually applies.",
      "O10 codes for hypertensive heart/CKD are never complete on their own — they always need a secondary hypertension-category code layered on top for the specific detail.",
      "Pre-existing hypertension (O10) and pregnancy-induced hypertension (O13–O16) are a matched pair worth memorizing together: same underlying condition, two entirely different code families depending purely on timing.",
    ],
  },
];

const mainStyle = { maxWidth: "1160px", margin: "0 auto", padding: "36px 24px 64px", minHeight: "100vh", background: "#f6f9f9", color: "#141d1c", fontFamily: "Arial, sans-serif" };
const heroStyle = { background: "linear-gradient(135deg, #101719, #0f766e)", color: "white", padding: "46px 42px", borderRadius: "18px", marginBottom: "26px", boxShadow: "0 12px 28px rgba(16,23,25,0.22)" };
const kickerStyle = { margin: "0 0 10px", color: "#99f6e4", fontWeight: 800, letterSpacing: "0.08em" };
const navStyle = { display: "flex", flexWrap: "wrap" as const, gap: "10px", marginBottom: "26px" };
const navLinkStyle = { textDecoration: "none", color: "#0f766e", background: "#ffffff", border: "1px solid #dbe3e1", borderRadius: "999px", padding: "10px 15px", fontWeight: 700, fontSize: "14px" };
const pagerStyle = { display: "flex", flexWrap: "wrap" as const, gap: "10px", marginBottom: "26px" };
const pagerLinkStyle = { textDecoration: "none", color: "#0f766e", background: "#f0fdfa", border: "1px solid #99f6e4", borderRadius: "999px", padding: "8px 16px", fontWeight: 700, fontSize: "14px" };
const pagerActiveStyle = { ...pagerLinkStyle, background: "#0f766e", color: "#fff", border: "1px solid #0f766e" };
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

export default function Icd10Chapter15GuidelinesReviewerPage() {
  return (
    <main style={mainStyle}>
      <header style={heroStyle}>
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 15 · 2026 OFFICIAL GUIDELINES</p>
        <h1 style={{ margin: 0, fontSize: "clamp(26px, 5vw, 44px)" }}>Pregnancy, Childbirth &amp; the Puerperium</h1>
        <p style={{ margin: "12px 0 0", fontSize: "18px", lineHeight: 1.5 }}>Part 1 — General rules, sequencing priority, trimester logic, fetus identification, principal diagnosis selection, and pre-existing vs. pregnancy-related conditions.</p>
      </header>

      <div style={pagerStyle}>
        <span style={pagerActiveStyle}>Part 1 — General Rules</span>
        <Link href="/icd10/chapter-15-guidelines-reviewer-part-2" style={pagerLinkStyle}>Part 2 — Specific Conditions →</Link>
      </div>

      <nav aria-label="ICD-10 navigation" style={navStyle}>
        <Link href="/icd10" style={navLinkStyle}>ICD-10-CM home</Link>
        <Link href="/icd10/chapter-15-practice-quiz" style={navLinkStyle}>Practice Quiz</Link>
        <Link href="/icd10/chapter-15-worked-examples" style={navLinkStyle}>Worked Examples</Link>
        <Link href="/icd10/chapter-15-flashcards" style={navLinkStyle}>Flashcards</Link>
      </nav>

      <section style={introStyle}>
        <strong>How to use this reviewer:</strong> same format as the other ICD-10 chapters — a plain-language rule summary, an easy and a hard example scenario with reasoning, and a tips/traps box for each topic. Written as an original summary, not a copy of the guideline text. Chapter 15 is one of the largest, densest guideline sections in the whole book, so it's split into two parts: this page covers the general rules that apply across the whole chapter; Part 2 covers specific conditions (HIV, diabetes, sepsis, substance use, normal delivery, abortion, abuse, and COVID-19).
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

      <div style={{ marginTop: "10px", display: "flex", flexWrap: "wrap" as const, gap: "16px" }}>
        <Link href="/icd10/chapter-15-guidelines-reviewer-part-2" style={backLinkStyle}>Continue to Part 2 →</Link>
        <Link href="/icd10" style={backLinkStyle}>← Back to ICD-10-CM</Link>
      </div>
    </main>
  );
}
