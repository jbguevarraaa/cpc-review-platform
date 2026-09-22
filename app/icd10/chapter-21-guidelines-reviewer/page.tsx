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
    title: "Z Codes in Any Setting — First-Listed or Secondary, Never a Procedure Code",
    codes: "Z00–Z99",
    summary: [
      "Z codes are for use in ANY healthcare setting. Depending on the circumstances of the encounter, a Z code can be the first-listed diagnosis (the principal diagnosis in the inpatient setting) or a secondary code.",
      "Certain Z codes may ONLY be used as first-listed or principal diagnosis (Part 2 lists them).",
      "Z codes are not procedure codes. A corresponding procedure code must accompany a Z code to describe any procedure performed.",
      "Z codes either give the REASON for an encounter or provide ADDITIONAL INFORMATION about a patient encounter.",
    ],
    easy: {
      scenario: "A patient comes in for a routine check-up with no complaints, and a Z code is used to explain the reason for the visit.",
      answer: "The Z code can be the first-listed diagnosis — Z codes give the reason for an encounter in any healthcare setting.",
    },
    hard: {
      scenario: "A coder assumes a Z code for a screening encounter also describes the screening procedure itself.",
      answer: "Incorrect — Z codes aren't procedure codes. A corresponding procedure code must accompany the Z code to describe the procedure performed.",
    },
    tips: [
      "Z code = the reason or extra information. The procedure still needs its own code.",
      "Some Z codes are first-listed only; many are secondary — the circumstances decide.",
    ],
  },
  {
    n: 2,
    title: "Contact/Exposure (Z20, Z77) and Inoculations (Z23)",
    codes: "Z20 · Z77 · Z23",
    summary: [
      "Category Z20 indicates contact with, and suspected exposure to, communicable diseases — for patients who are suspected of being exposed by close personal contact with an infected person, or who are in an area where a disease is epidemic. Category Z77 covers other contact with and (suspected) exposures hazardous to health.",
      "Contact/exposure codes may be first-listed to explain an encounter for testing, or — more commonly — used as a secondary code to identify a potential risk.",
      "Code Z23 is for encounters for inoculations and vaccinations — a patient seen to receive a prophylactic inoculation against a disease. Procedure codes are required to identify the actual administration and the type(s) of immunizations given.",
      "Z23 may be used as a SECONDARY code if the inoculation is given as a routine part of preventive health care, such as a well-baby visit.",
    ],
    easy: {
      scenario: "A patient is seen only to receive a scheduled vaccination.",
      answer: "Z23 is first-listed as the reason for the encounter, with procedure codes identifying the administration and the type of vaccine.",
    },
    hard: {
      scenario: "A baby's well-baby visit includes a routine vaccination.",
      answer: "The well-baby exam is the reason for the visit, and Z23 may be reported as a secondary code because the vaccination was a routine part of the preventive care.",
    },
    tips: [
      "Z20 = exposure to a communicable disease; it may be first-listed to explain an encounter for testing, but is more commonly secondary.",
      "Z23 needs procedure codes for the administration and the vaccine type.",
    ],
  },
  {
    n: 3,
    title: "Status Codes — What They Are and When NOT to Use Them",
    codes: "Z14–Z19 · Z21 · Z22 · Z28.3 · Z66–Z99",
    summary: [
      "Status codes indicate that a patient is a carrier of a disease, or has the sequelae or residual of a past disease or condition — including the presence of prosthetic or mechanical devices from past treatment. A status code is informative because the status may affect the course of treatment and its outcome.",
      "A status code is DISTINCT from a history code. A history code says the patient no longer has the condition; a status code says something about the patient's ongoing state.",
      "Do NOT use a status code with a diagnosis code from a body system chapter when that diagnosis code already includes the information. For example, don't use Z94.1 (heart transplant status) with a T86.2- complication of heart transplant — the complication code already tells you the patient is a heart transplant patient.",
      "For encounters for weaning from a mechanical ventilator, assign a code from J96.1- (chronic respiratory failure), followed by Z99.11 (dependence on respirator [ventilator] status).",
      "Categories Z89–Z90 and Z93–Z99 are for use only if there are NO complications or malfunctions of the organ or tissue replaced, the amputation site, or the equipment on which the patient is dependent.",
      "The status categories the guideline lists: Z14 (genetic carrier — carries a gene tied to a disease that may be passed on, but does not have the disease and isn't at risk of developing it); Z15 (genetic susceptibility — carries a gene that raises the risk of disease); Z16 (resistance to antimicrobial drugs); Z17 (estrogen receptor status); Z18 (retained foreign body fragments); Z19 (hormone sensitivity malignancy status); Z21 (asymptomatic HIV infection status — tested positive, no signs or symptoms); Z22 (carrier of infectious disease — harbors the organisms without symptoms and can transmit them); Z28.3 (underimmunization status); Z33.1 (incidental pregnant state); Z66 (do not resuscitate); Z67 (blood type); Z68 (BMI); Z74.01 (bed confinement status); Z76.82 (awaiting organ transplant status); Z78 (other specified health status); Z79 (long-term drug therapy); Z88 (allergy status to drugs, except Z88.9); Z89–Z90 (acquired absence); Z91.0- (allergy status other than to drugs); Z92.82 (tPA in another facility); Z93–Z99.",
    ],
    easy: {
      scenario: "A patient with a pacemaker attends a routine visit and has no device problems.",
      answer: "A status code for the presence of the device may be used — it's informative, and there is no malfunction or complication.",
    },
    hard: {
      scenario: "A heart transplant patient has a documented complication of the transplant (T86.2-), and the coder also assigns Z94.1.",
      answer: "Incorrect — the complication code already identifies the patient as a heart transplant patient, so the status code adds nothing.",
    },
    tips: [
      "Status = ongoing state (carrier, device, sequelae). History = the condition is gone.",
      "If the diagnosis code already contains the status information, skip the status code.",
      "Z89–Z90 and Z93–Z99: only when there are no complications or malfunctions.",
    ],
  },
  {
    n: 4,
    title: "Common Status Codes — Z79, BMI, DNR, and Restraints",
    codes: "Z79 · Z68 · Z66 · Z78.1",
    summary: [
      "LONG-TERM DRUG THERAPY (Z79): indicates a patient's continuous use of a prescribed drug (including aspirin therapy) for the long-term treatment of a condition or for prophylaxis. Assign it if the patient is receiving medication for an extended period as a prophylactic measure (such as to prevent deep vein thrombosis) or to treat a chronic condition or a disease requiring a lengthy course of treatment. Do NOT use it for medication given for a brief period to treat an acute illness or injury (such as antibiotics for acute bronchitis). It is NOT for patients with drug addictions, or for detoxification or maintenance programs to prevent withdrawal (such as methadone maintenance) — code the drug use, abuse, or dependence instead.",
      "BODY MASS INDEX (Z68): BMI codes should be assigned only when there is an associated, reportable diagnosis (such as obesity or anorexia) documented by the patient's provider. Do not assign BMI codes during pregnancy. If the documentation shows fluctuating BMI values during the encounter for an associated reportable condition, assign the code for the most severe value.",
      "DO NOT RESUSCITATE (Z66): may be used when the provider documents that the patient is on do-not-resuscitate status at any time during the stay.",
      "PHYSICAL RESTRAINT STATUS (Z78.1): may be used when the provider documents that the patient has been put in restraints during the current encounter. It is NOT reported when the provider documents the patient was only temporarily restrained during a procedure.",
    ],
    easy: {
      scenario: "A patient takes a daily aspirin as prophylaxis long term for a documented condition.",
      answer: "Assign a Z79 long-term drug therapy code — continuous prescribed use for long-term prophylaxis.",
    },
    hard: {
      scenario: "A patient on methadone maintenance for opioid dependence is coded with a Z79 long-term drug therapy code.",
      answer: "Incorrect — Z79 isn't used for patients with addictions or for maintenance programs to prevent withdrawal. Code the drug use, abuse, or dependence instead.",
    },
    tips: [
      "Z79: long-term or prophylactic — not a short course, not for addiction or maintenance programs.",
      "BMI: only with a provider-documented associated diagnosis (obesity, anorexia), never in pregnancy, most severe value if it fluctuates.",
      "DNR (Z66) at any time during the stay; restraint status (Z78.1) — not for temporary restraint during a procedure.",
    ],
  },
  {
    n: 5,
    title: "Status Codes With Special Instructions — Z15, Z16, Z33.1, Z92.82, Z98.85",
    codes: "Z15 · Z16 · Z33.1 · Z92.82 · Z98.85",
    summary: [
      "GENETIC SUSCEPTIBILITY (Z15): indicates a person has a gene that increases the risk of developing a disease. Z15 codes should generally NOT be principal or first-listed. If the patient has the condition to which they're susceptible and it's the reason for the encounter, the current condition is sequenced first. If the patient is being seen for follow-up after completed treatment and the condition no longer exists, sequence the follow-up code first, followed by the personal history and genetic susceptibility codes. For an encounter for genetic counseling associated with procreative management, assign Z31.5 first-listed, followed by a Z15 code, plus any applicable family or personal history codes.",
      "RESISTANCE TO ANTIMICROBIAL DRUGS (Z16): indicates a patient has a condition that is resistant to antimicrobial drug treatment. SEQUENCE THE INFECTION CODE FIRST.",
      "INCIDENTAL PREGNANCY (Z33.1): a secondary code only, for use when the pregnancy is in no way complicating the reason for the visit. Otherwise a code from the obstetric chapter is required.",
      "tPA IN ANOTHER FACILITY (Z92.82): assign it as a secondary diagnosis when a patient is received by transfer and the documentation shows they received tPA within the last 24 hours before admission to the current facility — even if still receiving it. The code for the condition tPA was given for (such as cerebrovascular disease or myocardial infarction) is assigned first. Z92.82 applies only to the RECEIVING facility record, not the transferring facility.",
      "TRANSPLANTED ORGAN REMOVAL STATUS (Z98.85): indicates a transplanted organ has been previously removed. Don't assign it for the encounter in which the organ is removed — code the complication that necessitated removal instead.",
    ],
    easy: {
      scenario: "A patient with a documented infection that is resistant to antibiotics is admitted for treatment of the infection.",
      answer: "Sequence the infection code first; the resistance code (Z16) follows it.",
    },
    hard: {
      scenario: "A patient is transferred into a hospital after receiving tPA at another facility 6 hours earlier for a stroke. Which record carries Z92.82?",
      answer: "Only the RECEIVING facility's record carries Z92.82, as a secondary diagnosis — after the code for the condition tPA was administered for (the stroke). The transferring facility's record does not.",
    },
    tips: [
      "Z16: infection first. Z15: generally not first-listed — the current condition or follow-up code leads.",
      "Z33.1 only when the pregnancy doesn't complicate the reason for the visit; otherwise use an obstetric code.",
      "Z92.82: receiving facility only, secondary, after the condition tPA was given for.",
      "Z98.85: never at the encounter where the transplanted organ is removed.",
    ],
  },
  {
    n: 6,
    title: "History Codes — Personal and Family",
    codes: "Z80–Z87 · Z91.4- · Z91.5- · Z91.81 · Z91.82 · Z91.85 · Z92 (not Z92.0 or Z92.82)",
    summary: [
      "There are two types of history Z codes: PERSONAL and FAMILY. Personal history codes explain a patient's past medical condition that no longer exists and isn't being treated, but has the potential for recurrence and may need continued monitoring. Family history codes are for when a family member has had a disease that puts the patient at higher risk of contracting it.",
      "Personal history codes may be used in conjunction with follow-up codes, and family history codes may be used with screening codes to explain the need for a test or procedure.",
      "History codes are acceptable on any medical record, regardless of the reason for the visit. A history of an illness, even if no longer present, is important information that may alter the type of treatment ordered.",
      "The reason for the encounter (for example, screening or counseling) is sequenced FIRST, and the appropriate personal and/or family history code(s) are assigned as additional diagnoses.",
    ],
    easy: {
      scenario: "A patient with a family history of breast cancer comes in for a screening mammogram.",
      answer: "Sequence the screening code first (the reason for the encounter), then the family history code as an additional diagnosis.",
    },
    hard: {
      scenario: "A coder sequences a personal history code first for a visit that is specifically for genetic counseling.",
      answer: "Incorrect — the reason for the encounter (the counseling) is sequenced first, and the history code(s) follow as additional diagnoses.",
    },
    tips: [
      "History = the condition no longer exists. It never leads when the visit has a specific reason like screening or counseling.",
      "Family history pairs with screening codes; personal history pairs with follow-up codes.",
    ],
  },
  {
    n: 7,
    title: "Screening — And How It Differs From a Diagnostic Exam",
    codes: "Z11 · Z12 · Z13 · Z36",
    summary: [
      "Screening is testing for disease or disease precursors in seemingly WELL individuals so early detection and treatment can be provided for those who test positive (for example, a screening mammogram).",
      "Testing a person to rule out or confirm a suspected diagnosis because they have a SIGN or SYMPTOM is a DIAGNOSTIC examination, not a screening. In those cases, the sign or symptom explains the reason for the test.",
      "A screening code may be FIRST-LISTED if the reason for the visit is specifically the screening exam. It may also be used as an ADDITIONAL code if screening is done during an office visit for other health problems.",
      "A screening code is NOT necessary if the screening is inherent to a routine examination — for example, a pap smear done during a routine pelvic exam.",
      "If a condition is discovered during the screening, the code for the condition may be assigned as an additional diagnosis. The Z code indicates that a screening exam is planned, and a procedure code is required to confirm that the screening was performed.",
      "The screening categories: Z11 (infectious and parasitic diseases), Z12 (malignant neoplasms), Z13 (other diseases and disorders, except Z13.9), and Z36 (antenatal screening for mother).",
    ],
    easy: {
      scenario: "A well patient with no symptoms comes in only for a screening colonoscopy.",
      answer: "Report the screening code first-listed, with a procedure code confirming the screening was performed.",
    },
    hard: {
      scenario: "A patient with rectal bleeding has a colonoscopy to find the cause, and the coder assigns a screening Z code.",
      answer: "Incorrect — testing because of a sign or symptom is a diagnostic exam, not a screening. The sign or symptom (the bleeding) explains the reason for the test.",
    },
    tips: [
      "Well patient, looking for early disease = screening. Sign or symptom prompted the test = diagnostic (code the sign or symptom).",
      "A condition found during screening can be added as an additional diagnosis.",
      "No separate screening code when the screening is inherent to a routine exam.",
    ],
  },
  {
    n: 8,
    title: "Observation Codes (Z03, Z04, Z05) — Ruled Out, Never With Symptoms",
    codes: "Z03 · Z04 · Z05 · Z03.7-",
    summary: [
      "There are three observation Z code categories, used in very LIMITED circumstances when a person is being observed for a suspected condition that is RULED OUT. They are NOT used if an injury, illness, or any signs or symptoms related to the suspected condition are present — in those cases the diagnosis/symptom code is used (with the corresponding external cause code).",
      "Observation codes are primarily used as the principal/first-listed diagnosis. They may be a secondary diagnosis when the patient is observed for a condition that is ruled out and is unrelated to the principal/first-listed diagnosis.",
      "When the principal diagnosis must be a Z38 code (liveborn infants), a code from category Z05 (observation and evaluation of newborn for suspected diseases and conditions ruled out) is sequenced AFTER the Z38 code.",
      "Additional codes may be used with an observation code, but only if they are unrelated to the suspected condition being observed.",
      "Subcategory Z03.7- (suspected maternal and fetal conditions ruled out) may be first-listed or additional, on a maternal record, for very limited circumstances — for example, a condition suspected because of an abnormal test result. It isn't used when the condition is confirmed, or if any illness or signs or symptoms related to the suspected condition are present. It may not be used for encounters for antenatal screening of the mother.",
      "For encounters for a suspected fetal condition that is INCONCLUSIVE after testing, assign the appropriate code from category O35, O36, O40, or O41.",
    ],
    easy: {
      scenario: "A patient is admitted for observation because a serious condition is suspected. After study, it is ruled out, and the patient has no related symptoms.",
      answer: "An observation code (from Z03) is first-listed — the suspected condition was ruled out and no related signs or symptoms are present.",
    },
    hard: {
      scenario: "A newborn's birth record has Z38 as principal, and the baby is also observed for a suspected condition that is ruled out.",
      answer: "Z05 is reported as a secondary code, sequenced after the Z38 code.",
    },
    tips: [
      "Observation = ruled out, with no related signs or symptoms. Symptoms present = code the symptoms.",
      "Z05 follows Z38 on the birth record.",
      "Inconclusive suspected fetal condition = O35, O36, O40, or O41 — not Z03.7-.",
      "Z03 and Z05 can be secondary when unrelated to the principal diagnosis. Z04 is also on the first-listed-only list (Part 2, topic 8), so treat Z04 as first-listed.",
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

export default function Icd10Chapter21GuidelinesReviewerPage() {
  return (
    <main style={mainStyle}>
      <HighlightToolbar />
      <header style={heroStyle}>
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 21 · 2026 OFFICIAL GUIDELINES</p>
        <h1 style={{ margin: 0, fontSize: "clamp(26px, 5vw, 44px)" }}>Factors Influencing Health Status &amp; Contact with Health Services</h1>
        <p style={{ margin: "12px 0 0", fontSize: "18px", lineHeight: 1.5 }}>Part 1 — Z codes in any setting, contact/exposure, vaccines, status codes (including the special-instruction ones), history, screening, and observation. Z00–Z99.</p>
      </header>

      <div style={pagerStyle}>
        <span style={pagerActiveStyle}>Part 1 — Status, History, Screening & Observation</span>
        <Link href="/icd10/chapter-21-guidelines-reviewer-part-2" style={pagerLinkStyle}>Part 2 — Aftercare, Follow-Up, OB, Exams & SDOH →</Link>
      </div>

      <nav aria-label="ICD-10 navigation" style={navStyle}>
        <Link href="/icd10" style={navLinkStyle}>ICD-10-CM home</Link>
        <Link href="/icd10/chapter-21-practice-quiz" style={navLinkStyle}>Practice Quiz</Link>
        <Link href="/icd10/chapter-21-worked-examples" style={navLinkStyle}>Worked Examples</Link>
        <Link href="/icd10/chapter-21-flashcards" style={navLinkStyle}>Flashcards</Link>
      </nav>

      <section style={introStyle}>
        <strong>How to use this reviewer:</strong> same format as the other ICD-10 chapters — a plain-language rule summary, an easy and a hard example scenario with reasoning, and a tips/traps box for each topic. Chapter 21 is the largest guideline chapter, so it is split in two: this Part 1 covers the general Z-code rules and the contact, vaccine, status, history, screening, and observation categories; Part 2 covers aftercare, follow-up, donors, counseling, obstetric and reproductive codes, routine exams, miscellaneous and nonspecific codes, the first-listed-only list, newborn codes, and social determinants of health.
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
        <Link href="/icd10/chapter-21-guidelines-reviewer-part-2" style={backLinkStyle}>Continue to Part 2 →</Link>
        <Link href="/icd10" style={backLinkStyle}>← Back to ICD-10-CM</Link>
      </div>
    </main>
  );
}
