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
    title: "Fetal Conditions Affecting Management of the Mother",
    codes: "O35.–, O36.–",
    summary: [
      "Codes from category O35 (maternal care for known/suspected fetal abnormality and damage) and O36 (maternal care for other fetal problems) are assigned ONLY when the fetal condition is actually responsible for modifying the management of the mother — for example, by requiring diagnostic studies, additional observation, special care, or termination of pregnancy.",
      "The fact that a fetal condition simply EXISTS does NOT, by itself, justify assigning one of these codes to the mother's record — there has to be a documented effect on how the mother is being managed.",
      "For in-utero surgery performed on the fetus: assign a diagnosis code from category O35 identifying the fetal condition, plus the appropriate procedure code for the procedure performed. No Chapter 16 (perinatal) code is ever used on the MOTHER'S record for this — surgery on a fetus in utero is still coded as an obstetric encounter for the mother.",
    ],
    easy: {
      scenario: "A known fetal abnormality is documented as requiring additional maternal monitoring and diagnostic studies beyond a routine pregnancy.",
      answer: "A code from O35 — the fetal condition is documented as actually modifying the mother's management (extra monitoring/studies), satisfying the requirement.",
    },
    hard: {
      scenario: "A fetal condition is noted on an ultrasound report, but nothing in the documentation indicates it changed anything about how the mother herself is being managed or monitored.",
      answer: "No O35/O36 code is assigned — the fetal condition existing alone, without a documented effect on the mother's management, doesn't meet the threshold for these codes.",
    },
    tips: [
      "\"Does this fetal finding actually change what's being done for the mother?\" is the test — a fetal finding sitting quietly in the chart with no management impact doesn't earn an O35/O36 code.",
      "In-utero fetal surgery is still an OBSTETRIC encounter on the mother's record (O35 + procedure code) — never coded from Chapter 16, which is reserved for the newborn's own record.",
    ],
  },
  {
    n: 2,
    title: "HIV Infection in Pregnancy",
    codes: "O98.7–, Z21",
    summary: [
      "When a patient is admitted during pregnancy, childbirth, or the puerperium specifically because of an HIV-related illness, the PRINCIPAL diagnosis is a code from subcategory O98.7– (HIV disease complicating pregnancy, childbirth, and the puerperium), FOLLOWED by the code(s) for the specific HIV-related illness(es).",
      "For a patient with ASYMPTOMATIC HIV infection status (no active HIV-related illness) admitted during pregnancy/childbirth/puerperium, assign both O98.7– AND Z21 (asymptomatic HIV infection status) together.",
    ],
    easy: {
      scenario: "A pregnant patient with asymptomatic HIV status (no active illness) is admitted for an unrelated obstetric reason, and her HIV status is documented.",
      answer: "O98.7– plus Z21 (asymptomatic HIV infection status) — both codes together for the asymptomatic scenario.",
    },
    hard: {
      scenario: "A pregnant patient is admitted specifically because of an active, symptomatic HIV-related opportunistic infection.",
      answer: "O98.7– as the principal diagnosis, FOLLOWED by the code(s) for the specific HIV-related illness — the sequencing (O98.7– first) is part of the rule, not incidental.",
    },
    tips: [
      "Symptomatic HIV-related illness → O98.7– first, then the specific illness code(s). Asymptomatic HIV status → O98.7– plus Z21. Two different code combinations depending on symptom status.",
    ],
  },
  {
    n: 3,
    title: "Diabetes Mellitus in Pregnancy — Pre-Existing vs. Gestational",
    codes: "O24.–",
    summary: [
      "For a pregnant patient with PRE-EXISTING diabetes, assign a code from category O24 FIRST, followed by the appropriate diabetes code(s) from Chapter 4 (E08–E13).",
      "GESTATIONAL (pregnancy-induced) diabetes occurs during the SECOND or THIRD trimester in patients who were NOT diabetic before pregnancy — coded from subcategory O24.4. No other O24 code is used together with an O24.4 code.",
      "O24.4 subcodes distinguish diet-controlled, insulin-controlled, and oral-hypoglycemic-controlled gestational diabetes. If treated with BOTH diet and insulin, only the insulin-controlled code is needed. If treated with BOTH diet and oral hypoglycemics, only the oral-hypoglycemic-controlled code is needed — don't stack a diet-controlled code on top.",
      "Long-term drug-use codes (Z79.4 insulin, Z79.84 oral hypoglycemic, Z79.85 injectable non-insulin antidiabetic) are NOT assigned together with O24.4 codes — the O24.4 subcode itself already captures the treatment method.",
      "Abnormal glucose tolerance in pregnancy (not meeting the definition of diabetes) is coded from subcategory O99.81 instead.",
    ],
    easy: {
      scenario: "A patient with known type 2 diabetes before pregnancy is now pregnant.",
      answer: "An O24 code (pre-existing diabetes complicating pregnancy) FIRST, followed by the appropriate E11 (type 2 diabetes) code from Chapter 4.",
    },
    hard: {
      scenario: "A patient with no prior diabetes history develops gestational diabetes in her third trimester, managed with both dietary changes and insulin.",
      answer: "Only the insulin-controlled O24.4 subcode — since insulin is involved, the diet-controlled subcode isn't also reported, and no Z79.4 long-term-insulin code is added on top of O24.4 either.",
    },
    tips: [
      "O24.4 (gestational) never mixes with any other O24 subcode — it's diagnostically distinct from pre-existing diabetes, and treated as its own closed system.",
      "For O24.4's treatment-method subcodes, insulin control always wins over diet-alone, and oral-hypoglycemic control always wins over diet-alone — pick the single most \"active\" treatment method documented, not every method mentioned.",
    ],
  },
  {
    n: 4,
    title: "Sepsis, Septic Shock & Puerperal Sepsis",
    codes: "O85, R65.2–",
    summary: [
      "When assigning a Chapter 15 sepsis-complicating-pregnancy code, a code for the SPECIFIC TYPE of infection is added as an additional diagnosis. If SEVERE sepsis is present, also add a code from subcategory R65.2 (severe sepsis) plus code(s) for any associated organ dysfunction.",
      "Puerperal sepsis specifically is coded O85, with a SECONDARY code identifying the causal organism (e.g., a code from B95–B96 for a bacterial infection). Codes from category A40 (streptococcal sepsis) or A41 (other sepsis) are NOT used for puerperal sepsis.",
      "O85 is NOT assigned for sepsis following an OBSTETRICAL PROCEDURE — that's coded instead under the postprocedural-infection sepsis guidance (a different, dedicated pathway).",
    ],
    easy: {
      scenario: "A postpartum patient develops sepsis from a documented bacterial infection, with no recent obstetrical procedure involved.",
      answer: "O85 (puerperal sepsis) plus a secondary code from B95–B96 identifying the specific bacterial organism.",
    },
    hard: {
      scenario: "A patient develops sepsis specifically as a result of an infection following a recent obstetrical procedure (like a cesarean).",
      answer: "This is NOT coded as O85 — sepsis following an obstetrical procedure follows the postprocedural-infection sepsis pathway instead, a distinct code path from plain puerperal sepsis.",
    },
    tips: [
      "Puerperal sepsis (O85) is specifically for sepsis NOT tied to a procedure — once a procedure is the identified cause, you're in different guideline territory entirely.",
      "Never reach for A40/A41 for puerperal sepsis — those categories are explicitly excluded here, even though they're the \"generic\" sepsis-by-organism codes elsewhere in the book.",
    ],
  },
  {
    n: 5,
    title: "Alcohol, Tobacco & Drug Use During Pregnancy",
    codes: "O99.31, O99.32, O99.33",
    summary: [
      "Alcohol use during pregnancy/childbirth/puerperium: assign a code from O99.31, PLUS a secondary code from category F10 (alcohol-related disorders) to identify the specific manifestations.",
      "Tobacco use: assign a code from O99.33, PLUS a secondary code from category F17 (nicotine dependence) identifying the specific type.",
      "Drug use (illegal drugs, or inappropriate use/abuse of prescription drugs): assign a code from O99.32, PLUS secondary code(s) from categories F11–F16 and F18–F19 identifying the manifestations.",
      "All three of these apply for use during the pregnancy OR the postpartum period — not just during active pregnancy.",
    ],
    easy: {
      scenario: "A pregnant patient is documented as a current tobacco user.",
      answer: "A code from O99.33 (smoking complicating pregnancy) plus a secondary F17 code (nicotine dependence) identifying the specific type.",
    },
    hard: {
      scenario: "A patient is documented using both alcohol and an illicit drug during the postpartum period, six weeks after delivery.",
      answer: "Both O99.31 (alcohol use) plus an F10 code, AND O99.32 (drug use) plus the appropriate F11–F16/F18–F19 code — these substance-use rules apply to the postpartum period too, not just active pregnancy, and multiple substances each get their own O99 + F-code pairing.",
    },
    tips: [
      "All three substance categories (alcohol/tobacco/drugs) follow the identical two-code pattern: the O99.3x code first, then a secondary code from the matching mental/behavioral disorders category for the specific manifestation.",
      "These codes aren't limited to \"during pregnancy\" — postpartum substance use is explicitly included too.",
    ],
  },
  {
    n: 6,
    title: "Poisoning, Toxic Effects, Adverse Effects & Underdosing in a Pregnant Patient",
    codes: "O9A.2",
    summary: [
      "A code from subcategory O9A.2 (injury, poisoning, and certain other consequences of external causes complicating pregnancy/childbirth/puerperium) is sequenced FIRST, followed by the appropriate injury/poisoning/toxic-effect/adverse-effect/underdosing code, and THEN any additional code(s) specifying the actual condition caused by that poisoning/toxic effect/adverse effect/underdosing.",
    ],
    easy: {
      scenario: "A pregnant patient experiences a documented adverse effect from a correctly-prescribed and correctly-taken medication.",
      answer: "O9A.2 first, then the specific adverse-effect code, then any additional code for the resulting condition — a strict three-part sequence.",
    },
    hard: {
      scenario: "A pregnant patient is treated for accidental poisoning from a household chemical, which also caused a specific documented organ effect.",
      answer: "O9A.2 first, then the poisoning code for the specific substance, then the additional code identifying the resulting organ-specific condition — all three layers, in that exact order.",
    },
    tips: [
      "This is a strict three-code sequence, not a two-code one: the pregnancy-complicating code (O9A.2) always leads, the poisoning/adverse-effect/toxic-effect/underdosing code comes second, and the resulting condition code comes third.",
    ],
  },
  {
    n: 7,
    title: "Normal Delivery — Code O80",
    codes: "O80, Z37.0",
    summary: [
      "O80 (Encounter for full-term uncomplicated delivery) is assigned when a patient is admitted for a full-term normal delivery of a SINGLE, healthy infant, with NO complications antepartum, during delivery, or postpartum during the delivery episode. O80 is always the PRINCIPAL diagnosis, and it's never used if any other Chapter 15 code is needed to describe a current complication.",
      "Additional codes from OTHER chapters may still be used with O80, as long as they're unrelated to and not complicating the pregnancy.",
      "O80 MAY still be used if the patient had a complication AT SOME POINT during the pregnancy, as long as that complication is NOT present at the time of the actual delivery admission.",
      "Z37.0 (Single live birth) is the ONLY outcome-of-delivery code appropriate for use alongside O80 — no other Z37 subcode pairs with O80.",
    ],
    easy: {
      scenario: "A patient with a completely uncomplicated pregnancy is admitted at full term and delivers a single healthy infant with no complications at any point.",
      answer: "O80 as the principal diagnosis, plus Z37.0 (single live birth) as the outcome-of-delivery code.",
    },
    hard: {
      scenario: "A patient had a documented complication earlier in her pregnancy (now fully resolved), and is admitted at full term with no complications present at the time of this delivery admission, delivering a single healthy infant.",
      answer: "O80 is still appropriate — a complication that existed earlier in pregnancy but isn't present at the time of THIS delivery admission doesn't disqualify O80.",
    },
    tips: [
      "O80 is an all-or-nothing code: any current complication (antepartum, during delivery, or postpartum in the same episode) rules it out entirely — but a fully RESOLVED earlier complication doesn't.",
      "Z37.0 is the only outcome-of-delivery code that ever pairs with O80 — memorize that pairing as a fixed fact.",
    ],
  },
  {
    n: 8,
    title: "Peripartum/Postpartum Periods, Pregnancy-Associated Cardiomyopathy & Sequelae",
    codes: "O90.3, O94, Z39.0",
    summary: [
      "The POSTPARTUM period begins immediately after delivery and continues for SIX WEEKS following delivery. The PERIPARTUM period is defined as the last month of pregnancy through FIVE MONTHS postpartum — a longer, overlapping window used for specific conditions like cardiomyopathy.",
      "A postpartum complication is any complication occurring within that six-week postpartum window. Chapter 15 codes may still be used to describe pregnancy-related complications AFTER the peripartum/postpartum period ends, as long as the provider documents the condition as pregnancy-related.",
      "When a mother delivers OUTSIDE the hospital before admission, and is then admitted for routine postpartum care with no complications noted, the principal diagnosis is Z39.0 (encounter for care/examination of mother immediately after delivery).",
      "Pregnancy-associated (peripartum) cardiomyopathy is coded O90.3 — unique because it may be diagnosed in the THIRD trimester but can continue progressing for months AFTER delivery. O90.3 is used ONLY when the cardiomyopathy develops as a result of pregnancy in a patient with NO pre-existing heart disease.",
      "O94 (sequelae of complication of pregnancy, childbirth, and the puerperium) is used when an initial pregnancy complication develops a sequela requiring care/treatment at a LATER date — usable at ANY time after the initial postpartum period. Like all sequela codes, O94 is sequenced AFTER the code describing the actual sequela condition itself, not before it.",
    ],
    easy: {
      scenario: "A patient delivered at home and is admitted afterward specifically for routine postpartum care, with no complications noted.",
      answer: "Z39.0 as the principal diagnosis — the specific code for postpartum care following an out-of-hospital delivery.",
    },
    hard: {
      scenario: "A patient with no pre-existing heart disease develops cardiomyopathy in her third trimester, which continues to progress for several months after delivery.",
      answer: "O90.3 (pregnancy-associated/peripartum cardiomyopathy) — the defining features (no pre-existing heart disease, onset in the third trimester, progression continuing after delivery) all match this specific code's criteria.",
    },
    tips: [
      "Postpartum = 6 weeks. Peripartum = last month of pregnancy through 5 months postpartum. Two different windows, with peripartum being both longer and starting earlier (before delivery).",
      "O94 sequencing is easy to get backwards — it goes AFTER the sequela's own code, following the same pattern as every other sequela code in ICD-10-CM, not before it.",
    ],
  },
  {
    n: 9,
    title: "Termination of Pregnancy, Spontaneous Abortion & Abuse in a Pregnant Patient",
    codes: "O03A, O07A, O04.6, O9A.3–O9A.5",
    summary: [
      "If an attempted termination of pregnancy results in a LIVEBORN fetus, assign Z33.2 (encounter for elective termination of pregnancy) PLUS a code from category Z37 (outcome of delivery).",
      "For SUBSEQUENT encounters for retained products of conception following a spontaneous abortion or elective termination, WITHOUT complications, assign O03A (incomplete spontaneous abortion without complication) or O07A (failed attempted termination without complication) — this applies even if the patient was previously discharged with a diagnosis of \"complete\" abortion. If there IS a specific complication associated with the abortion/termination in addition to retained products, use the appropriate complication code (O03.–, O04.–, O07.–) INSTEAD of O03A/O07A.",
      "Chapter 15 codes may be used as ADDITIONAL codes alongside O04/O07/O08 categories to identify any documented pregnancy complications.",
      "For hemorrhage following an ELECTIVE abortion specifically, assign O04.6 (delayed or excessive hemorrhage following induced termination) — do NOT use O72.1 (other immediate postpartum hemorrhage), which is explicitly excluded for post-abortion conditions.",
      "For suspected or confirmed abuse of a pregnant patient, codes from O9A.3 (physical abuse), O9A.4 (sexual abuse), or O9A.5 (psychological abuse) complicating pregnancy are sequenced FIRST, followed by codes identifying any associated current injury and the perpetrator of the abuse, as applicable.",
    ],
    easy: {
      scenario: "A patient returns weeks after a spontaneous abortion with documented retained products of conception and no other complication.",
      answer: "O03A (incomplete spontaneous abortion without complication) — even though her original discharge diagnosis may have said \"complete\" abortion, this subsequent-encounter code still applies.",
    },
    hard: {
      scenario: "A patient develops delayed, excessive bleeding specifically following an elective termination of pregnancy.",
      answer: "O04.6 (delayed or excessive hemorrhage following induced termination) — NOT O72.1, which is specifically excluded from being used for any post-abortion condition.",
    },
    tips: [
      "O03A/O07A apply on the SUBSEQUENT encounter for retained products, regardless of what the original discharge diagnosis said — don't let a prior \"complete\" abortion label block this code.",
      "O72.1 (postpartum hemorrhage) and O04.6 (post-abortion hemorrhage) look like they could overlap, but they're mutually exclusive by definition — O72.1 is explicitly barred from ever describing a post-abortion bleed.",
      "Abuse codes (O9A.3/.4/.5) lead the sequence, with injury and perpetrator identification codes following — not the other way around.",
    ],
  },
  {
    n: 10,
    title: "COVID-19 Infection in Pregnancy, Childbirth & the Puerperium",
    codes: "O98.5–, U07.1",
    summary: [
      "When COVID-19 is the REASON for admission/encounter during pregnancy, childbirth, or the puerperium, code O98.5– (other viral diseases complicating pregnancy) is sequenced as the PRINCIPAL/first-listed diagnosis, followed by U07.1 (COVID-19) and codes for any associated manifestations as additional diagnoses. Chapter 15 codes always take sequencing priority.",
      "If the reason for admission/encounter is UNRELATED to COVID-19, but the patient is diagnosed with COVID-19 during that same admission, the actual reason for admission is sequenced as principal/first-listed — with O98.5–, U07.1, and any manifestation codes added as ADDITIONAL diagnoses instead.",
    ],
    easy: {
      scenario: "A pregnant patient is admitted specifically because of COVID-19 symptoms requiring treatment.",
      answer: "O98.5– as the principal diagnosis, followed by U07.1 and any manifestation codes — COVID-19 being the actual admission reason puts the pregnancy-complicating code first.",
    },
    hard: {
      scenario: "A pregnant patient is admitted for an unrelated obstetric complication and incidentally tests positive for COVID-19 during that same admission, with no COVID-19 symptoms driving the admission itself.",
      answer: "The unrelated obstetric complication's own code as principal diagnosis, with O98.5– and U07.1 added as additional diagnoses — COVID-19 being incidental to the actual reason for admission changes the sequencing.",
    },
    tips: [
      "The exact same \"was this the reason for the encounter, or just incidentally found\" logic that governs Z33.1 (Topic 1, Part 1) and Z94.0/kidney transplant status (Chapter 14) shows up again here for COVID-19 — a recurring theme across chapters.",
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

export default function Icd10Chapter15GuidelinesReviewerPart2Page() {
  return (
    <main style={mainStyle}>
      <HighlightToolbar />
      <header style={heroStyle}>
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 15 · 2026 OFFICIAL GUIDELINES</p>
        <h1 style={{ margin: 0, fontSize: "clamp(26px, 5vw, 44px)" }}>Pregnancy, Childbirth &amp; the Puerperium</h1>
        <p style={{ margin: "12px 0 0", fontSize: "18px", lineHeight: 1.5 }}>Part 2 — Fetal conditions, HIV, diabetes, sepsis, substance use, poisoning, normal delivery, peripartum/postpartum, abortion, abuse, and COVID-19.</p>
      </header>

      <div style={pagerStyle}>
        <Link href="/icd10/chapter-15-guidelines-reviewer" style={pagerLinkStyle}>← Part 1 — General Rules</Link>
        <span style={pagerActiveStyle}>Part 2 — Specific Conditions</span>
      </div>

      <nav aria-label="ICD-10 navigation" style={navStyle}>
        <Link href="/icd10" style={navLinkStyle}>ICD-10-CM home</Link>
        <Link href="/icd10/chapter-15-practice-quiz" style={navLinkStyle}>Practice Quiz</Link>
        <Link href="/icd10/chapter-15-worked-examples" style={navLinkStyle}>Worked Examples</Link>
        <Link href="/icd10/chapter-15-flashcards" style={navLinkStyle}>Flashcards</Link>
      </nav>

      <section style={introStyle}>
        <strong>How to use this reviewer:</strong> same format as Part 1 — a plain-language rule summary, an easy and a hard example scenario with reasoning, and a tips/traps box for each topic. This page covers the specific-condition guidance that builds on Part 1's general rules — HIV, diabetes, sepsis, substance use, poisoning, normal delivery, peripartum/postpartum periods, abortion/termination, abuse, and COVID-19.
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
        <Link href="/icd10/chapter-15-guidelines-reviewer" style={backLinkStyle}>← Back to Part 1</Link>
        <Link href="/icd10" style={backLinkStyle}>← Back to ICD-10-CM</Link>
      </div>
    </main>
  );
}
