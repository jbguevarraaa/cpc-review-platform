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
    title: "Aftercare Z Codes — Healing and Recovery, Not Acute Disease or Injuries",
    codes: "Z42–Z49 · Z51",
    summary: [
      "Aftercare visit codes cover situations when the initial treatment of a disease has been performed and the patient requires continued care during the healing or recovery phase, or for the long-term consequences of the disease.",
      "Do NOT use an aftercare Z code if treatment is directed at a current, acute disease — use the diagnosis code. Do NOT use aftercare Z codes for aftercare of INJURIES either: assign the acute injury code with the appropriate 7th character for a subsequent encounter.",
      "Aftercare codes are generally FIRST-LISTED to explain the specific reason for the encounter. An aftercare code may be an ADDITIONAL code when a specific type of aftercare is provided in addition to the reason for the encounter and no diagnosis code is applicable — for example, closure of a colostomy during an encounter for treatment of another condition.",
      "Use aftercare codes with other aftercare codes or diagnosis codes to give better detail, unless directed otherwise. The sequence of multiple aftercare codes depends on the circumstances of the encounter. Some aftercare categories need a secondary diagnosis code to describe the resolving condition or sequelae; for others, the condition is in the code title.",
      "Status Z codes may be used with aftercare codes to show the nature of the aftercare — for example, Z95.1 (presence of aortocoronary bypass graft) with Z48.812 (surgical aftercare following surgery on the circulatory system). But do NOT use a status code when the aftercare code already indicates the type of status — for example, Z43.0 (attention to tracheostomy) with Z93.0 (tracheostomy status).",
      "The aftercare codes are generally found in Z42, Z43, Z44, Z45, Z46, Z47, Z48, Z49, and Z51.",
    ],
    easy: {
      scenario: "A patient returns for aftercare following joint replacement surgery, and the reason for the visit is the continued care during recovery.",
      answer: "An aftercare code (e.g., Z47.1) is first-listed — it explains the specific reason for the encounter.",
    },
    hard: {
      scenario: "A patient returns for routine care of a healing fracture, and the coder assigns an aftercare Z code.",
      answer: "Incorrect — aftercare Z codes aren't used for injuries. Assign the acute fracture code with the appropriate 7th character for a subsequent encounter.",
    },
    tips: [
      "Aftercare Z code = recovery from a treated disease. Injuries use the injury code with 7th character D.",
      "Current, acute disease = the diagnosis code, not aftercare.",
      "Don't pair an aftercare code with a status code that says the same thing (Z43.0 with Z93.0).",
    ],
  },
  {
    n: 2,
    title: "Follow-Up Codes (Z08, Z09) — Completed Treatment, Condition Gone",
    codes: "Z08 · Z09 · Z39",
    summary: [
      "Follow-up codes explain continuing SURVEILLANCE after completed treatment of a disease, condition, or injury. They imply the condition has been fully treated and no longer exists.",
      "They should not be confused with aftercare codes, or with injury codes with a 7th character for a subsequent encounter, which explain ongoing care of a HEALING condition or its sequelae.",
      "Follow-up codes may be used with history codes to give the full picture of the healed condition and its treatment. The follow-up code is sequenced FIRST, followed by the history code.",
      "A follow-up code may explain multiple visits. If the condition is found to have RECURRED at the follow-up visit, assign the diagnosis code for the condition instead of the follow-up code.",
      "Z08 is follow-up after completed treatment for malignant neoplasm; Z09 is for conditions other than malignant neoplasm. Both may be assigned following any type of completed treatment (medical and surgical). Z39 (maternal postpartum care and examination) is also on the follow-up list.",
    ],
    easy: {
      scenario: "A patient whose cancer treatment is complete and no cancer remains returns for scheduled surveillance.",
      answer: "Z08 (follow-up after completed treatment for malignant neoplasm) first, followed by the personal history of malignant neoplasm code.",
    },
    hard: {
      scenario: "During a follow-up visit, the provider finds the condition has recurred.",
      answer: "Assign the diagnosis code for the recurred condition in place of the follow-up code.",
    },
    tips: [
      "Follow-up = treatment is finished and the condition is gone. Aftercare = still healing or recovering.",
      "Follow-up code first, then the history code.",
      "Recurrence = code the condition, not Z08/Z09.",
    ],
  },
  {
    n: 3,
    title: "Donors (Z52) and Counseling Z Codes",
    codes: "Z52 · Z30.0- · Z31.5 · Z31.6- · Z32.2 · Z32.3 · Z69 · Z70 · Z71 · Z76.81",
    summary: [
      "Category Z52 (donors of organs and tissues) is for LIVING individuals donating blood or other body tissue — for others or as self-donation. It is NOT used for cadaveric donations.",
      "Counseling Z codes are used when a patient or family member receives assistance in the aftermath of an illness or injury, or when support is needed to cope with family or social problems. The counseling categories include Z30.0- (general contraception counseling and advice), Z31.5 (procreative genetic counseling), Z31.6- (general procreation counseling and advice), Z32.2 (childbirth instruction), Z32.3 (childcare instruction), Z69 (mental health services for victims and perpetrators of abuse), Z70 (counseling on sexual attitude, behavior, and orientation), Z71 (other counseling and medical advice), and Z76.81 (expectant mother prebirth pediatrician visit).",
      "Z71.84 is for health counseling related to travel — health risk and safety counseling for future travel.",
      "Z71.85 (immunization safety counseling) is for counseling the patient or caregiver about the SAFETY of a vaccine. It is not used for general information about risks and potential side effects provided during routine vaccine administration encounters.",
      "Z71.87 (pediatric-to-adult transition counseling) is assigned when transition counseling is the sole reason for the encounter or is provided in addition to other services. If both transition counseling and treatment of a medical condition happen at the same encounter, report the condition code(s) and Z71.87, sequenced according to the circumstances of the encounter.",
    ],
    easy: {
      scenario: "A living person donates blood for another person.",
      answer: "A code from category Z52 applies — it's for living donors, whether donating for others or for themselves.",
    },
    hard: {
      scenario: "A coder assigns a Z52 code for an organ recovered from a deceased donor.",
      answer: "Incorrect — Z52 isn't used for cadaveric donations.",
    },
    tips: [
      "Z52 = living donors only (including self-donation).",
      "Z71.85 is for counseling about vaccine SAFETY — not routine risk and side-effect information at vaccination.",
      "Transition counseling + a medical condition at the same visit = both codes, sequenced by circumstances.",
    ],
  },
  {
    n: 4,
    title: "Obstetric and Reproductive Z Codes — Z34, Z3A, Z37",
    codes: "Z30–Z39 · Z3A · Z37",
    summary: [
      "Z codes for pregnancy are used only when NONE of the problems or complications included in the obstetric chapter's codes exist — for example, a routine prenatal visit or postpartum care. For more, see Section I.C.15 (pregnancy, childbirth, and the puerperium).",
      "Codes in category Z34 (supervision of normal pregnancy) are ALWAYS first-listed and are never used with any other code from the OB chapter.",
      "Z3A (weeks of gestation) may be assigned for additional information about the pregnancy. Do NOT assign Z3A for pregnancies with abortive outcomes (categories O00–O08), elective termination (Z33.2), or postpartum conditions. For inpatient admissions spanning more than one gestational week, use the date of admission to determine the weeks.",
      "The outcome of delivery (category Z37) should be included on ALL maternal delivery records, and it is ALWAYS a secondary code. Z37 codes are NOT used on the newborn record.",
      "Z codes for family planning (contraceptive) or procreative management and counseling should be included on an obstetric record, during the pregnancy or the postpartum stage, if applicable.",
    ],
    easy: {
      scenario: "A patient has a routine prenatal visit with no problems or complications.",
      answer: "Z34 (supervision of normal pregnancy) is first-listed, and a Z3A code may give the weeks of gestation.",
    },
    hard: {
      scenario: "A coder assigns Z37 (outcome of delivery) on the newborn's record.",
      answer: "Incorrect — Z37 belongs on the maternal delivery record only, and it is always secondary.",
    },
    tips: [
      "Z34 is first-listed and never used with another OB-chapter code.",
      "Z3A: not for abortive outcomes, elective termination, or postpartum.",
      "Z37: every maternal delivery record, always secondary, never on the newborn.",
    ],
  },
  {
    n: 5,
    title: "Routine and Administrative Examinations",
    codes: "Z00 · Z01 · Z02 · Z32.0-",
    summary: [
      "These Z codes describe encounters for routine examinations, such as a general check-up, or for administrative purposes, such as a pre-employment physical. They are NOT used if the exam is to diagnose a suspected condition or for treatment purposes — in those cases the diagnosis code is used.",
      "If a diagnosis or condition is discovered during a routine exam, it is coded as an additional code. Pre-existing and chronic conditions and history codes may also be added as long as the exam is administrative and not focused on a particular condition.",
      "Some routine exam codes distinguish 'with' and 'without' abnormal findings. Assignment depends on what is known when the encounter is coded — if no abnormal findings were found but test results aren't back yet, 'without abnormal findings' is acceptable. When 'with abnormal findings' is assigned, add code(s) identifying the specific abnormal finding(s).",
      "Pre-operative examination and pre-procedural laboratory examination Z codes are used only when a patient is being cleared for a procedure or surgery and no treatment is given.",
      "The categories: Z00 (general exam without complaint, suspected or reported diagnosis), Z01 (other special exam without complaint), Z02 (administrative examination, except Z02.9), and Z32.0- (pregnancy test).",
    ],
    easy: {
      scenario: "A patient has a routine physical for a new job, with no complaints.",
      answer: "An administrative examination code is used — the visit is routine with no suspected condition.",
    },
    hard: {
      scenario: "During a routine exam, the provider discovers a condition. The coder wants to make it the first-listed diagnosis in place of the exam code.",
      answer: "Incorrect — the routine exam code remains the reason for the encounter, and the discovered condition is coded as an additional diagnosis.",
    },
    tips: [
      "Routine exam Z code = no suspected condition, no treatment. A suspected condition = the diagnosis or symptom code.",
      "A condition found during the exam becomes an additional code.",
      "Pre-op clearance Z codes apply only when the patient is being cleared and no treatment is given.",
    ],
  },
  {
    n: 6,
    title: "Prophylactic Organ Removal and Other Miscellaneous Z Codes",
    codes: "Z40 · Z28 · Z29 · Z41 · Z53 · Z72–Z76 · Z91",
    summary: [
      "The miscellaneous Z codes capture health care encounters that don't fit the other categories. Some identify the reason for the encounter; others are additional codes giving useful information about circumstances that may affect care.",
      "For encounters specifically for PROPHYLACTIC REMOVAL of an organ (such as removing breasts because of a genetic susceptibility or family history of cancer), the principal or first-listed code should be from Z40.0 (prophylactic surgery for risk factors related to malignant neoplasms) or Z40.8 (other prophylactic surgery). Assign additional code(s) for any associated risk factor, such as genetic susceptibility or family history.",
      "If the patient has a malignancy at one site and is having prophylactic removal at ANOTHER site to prevent a new primary or metastatic disease, ALSO assign the code for the malignancy along with the Z40.0 code.",
      "Do NOT assign Z40.0 if the organ removal is for TREATMENT of a malignancy — such as removing the testes to treat prostate cancer.",
      "Miscellaneous categories include Z28 (immunization not carried out, except Z28.3-), Z29 (other prophylactic measures), Z40 (prophylactic surgery), Z41 (procedure for purposes other than remedying health state, except Z41.9), Z53 (specific procedure or treatment not carried out), Z72 (lifestyle problems), Z73 (life management difficulty), Z74 (care provider dependency, except Z74.01), Z75 (medical facility problems), Z76.0 (repeat prescription), Z76.3 (healthy person accompanying a sick person), Z76.4 (other boarder), Z76.5 (malingerer), Z91.1- (patient noncompliance), Z91.A- (caregiver noncompliance), Z91.B (DES exposure risk factor), Z91.83 (wandering), Z91.84- (oral health risk factors), and Z91.89 (other personal risk factors). For Z72 and Z73, assign the code only when the documentation says the patient has an associated problem.",
    ],
    easy: {
      scenario: "A patient with a documented genetic susceptibility to breast cancer is admitted specifically for prophylactic mastectomy.",
      answer: "The first-listed code is from Z40.0, with an additional code for the genetic susceptibility risk factor.",
    },
    hard: {
      scenario: "A patient with prostate cancer has the testes removed as treatment for the cancer. The coder assigns Z40.0.",
      answer: "Incorrect — Z40.0 isn't assigned when the organ removal is for treatment of a malignancy.",
    },
    tips: [
      "Prophylactic removal for cancer risk = Z40.0 first, plus the risk-factor code (and the malignancy code if the patient has cancer at another site).",
      "Removal to TREAT cancer = no Z40.0.",
      "Z72 and Z73 only when the documentation specifies an associated problem.",
    ],
  },
  {
    n: 7,
    title: "Nonspecific Z Codes — Use Sparingly",
    codes: "Z02.9 · Z04.9 · Z13.9 · Z41.9 · Z52.9 · Z86.59 · Z88.9 · Z92.0",
    summary: [
      "Certain Z codes are so nonspecific, or potentially redundant with other codes, that there is little justification for using them in the INPATIENT setting.",
      "In the OUTPATIENT setting, their use should be limited to instances when there is no further documentation to permit more precise coding. Otherwise, any sign or symptom or any other reason for the visit that is captured in another code should be used.",
      "The nonspecific Z codes: Z02.9 (administrative examinations, unspecified), Z04.9 (examination and observation for unspecified reason), Z13.9 (screening, unspecified), Z41.9 (procedure for purposes other than remedying health state, unspecified), Z52.9 (donor of unspecified organ or tissue), Z86.59 (personal history of other mental and behavioral disorders), Z88.9 (allergy status to unspecified drugs, medicaments, and biological substances), and Z92.0 (personal history of contraception).",
    ],
    easy: {
      scenario: "A record only says 'screening' with no further detail, and no more documentation is available in the outpatient setting.",
      answer: "The nonspecific screening code (Z13.9) may be used — outpatient use is limited to when nothing more precise can be assigned.",
    },
    hard: {
      scenario: "An inpatient record could support a more specific sign or symptom code, but the coder assigns a nonspecific Z code.",
      answer: "Incorrect — there is little justification for nonspecific Z codes inpatient, and a sign, symptom, or other reason for the visit captured in another code should be used.",
    },
    tips: [
      "The nonspecific list is closed — Z02.9, Z04.9, Z13.9, Z41.9, Z52.9, Z86.59, Z88.9, Z92.0. Don't infer it from the last digit; inpatient use is hard to justify.",
      "Outpatient: only when no further documentation allows a more precise code.",
    ],
  },
  {
    n: 8,
    title: "Z Codes That May Only Be Principal or First-Listed",
    codes: "Z00 · Z01 · Z02 · Z04 · Z31.81/.83/.84 · Z33.2 · Z34 · Z38 · Z39 · Z40 · Z42 · Z51.0 · Z51.1- · Z52 · Z76.1 · Z76.2 · Z99.12",
    summary: [
      "These Z codes may ONLY be reported as the principal/first-listed diagnosis, except when there are multiple encounters on the same day and the medical records for the encounters are combined.",
      "The list: Z00 (except Z00.6), Z01, Z02, Z04, Z33.2 (elective termination of pregnancy), Z31.81, Z31.83, Z31.84, Z34, Z39, Z38, Z40, Z42, Z51.0 (antineoplastic radiation therapy), Z51.1- (antineoplastic chemotherapy and immunotherapy), Z52 (except Z52.9), Z76.1, Z76.2, and Z99.12.",
      "Z38 (liveborn infants) is on this list because it is the principal diagnosis on a newborn's birth record. Z34 is on it because normal pregnancy supervision is always first-listed.",
    ],
    easy: {
      scenario: "A patient is admitted for a scheduled course of chemotherapy (Z51.1-).",
      answer: "Z51.1- is first-listed — it is on the first-listed-only list.",
    },
    hard: {
      scenario: "A patient has two encounters at the same facility on the same day, and the records are combined. A code from the first-listed-only list appears as the second encounter's reason.",
      answer: "This is the one exception the guideline allows — when multiple encounters on the same day are combined into one medical record, these codes are not restricted to the first-listed position.",
    },
    tips: [
      "First-listed-only Z codes include Z00, Z01, Z02, Z04, Z34, Z38, Z39, Z40, Z42, Z51.0, Z51.1-, and Z52.",
      "Exception: multiple same-day encounters with combined records.",
    ],
  },
  {
    n: 9,
    title: "Newborn Z Codes and Social Determinants of Health (SDOH)",
    codes: "Z76.1 · Z00.1- · Z38 · Z55–Z65",
    summary: [
      "Newborn Z codes include Z76.1 (health supervision and care of foundling), Z00.1- (routine child health examination), and Z38 (liveborn infants). See Section I.C.16 for the newborn guidelines.",
      "SOCIAL DETERMINANTS OF HEALTH (SDOH) codes describe social problems, conditions, or risk factors that influence a patient's health. Assign them when the information is documented in the medical record, and assign as many as are needed to describe ALL the social problems, conditions, or risk factors documented during the current episode of care.",
      "Documentation matters: merely living alone — without documentation of a risk or unmet need for assistance at home — does NOT support Z60.2 (problems related to living alone). Documentation that the patient expressed concerns with access to and availability of food supports Z59.41 (food insecurity). Documentation that the patient is experiencing homelessness supports a code from Z59.0-.",
      "For SDOH classified to Chapter 21 (categories Z55–Z65), code assignment may be based on documentation from CLINICIANS other than the patient's provider — such as social workers, community health workers, case managers, or nurses — if the documentation is in the official medical record.",
      "Patient self-reported information may be used to assign SDOH codes, as long as it is signed off by and incorporated into the medical record by a clinician or provider.",
      "SDOH codes are located primarily in Z55 (education and literacy), Z56 (employment and unemployment), Z57 (occupational exposure), Z58 (physical environment), Z59 (housing and economic circumstances), Z60 (social environment), Z62 (upbringing), Z63 (primary support group), Z64, and Z65 (psychosocial circumstances).",
    ],
    easy: {
      scenario: "A social worker documents in the official record that a patient is experiencing homelessness.",
      answer: "A code from subcategory Z59.0- may be assigned — SDOH codes can be based on documentation from clinicians other than the provider.",
    },
    hard: {
      scenario: "The chart says only that a patient lives alone, with no risk or unmet need documented. The coder assigns Z60.2.",
      answer: "Incorrect — merely living alone doesn't support Z60.2. A documented risk or unmet need for assistance at home is required.",
    },
    tips: [
      "SDOH: assign as many codes as needed for everything documented in the episode of care.",
      "The source can be a social worker, case manager, community health worker, or nurse — or signed-off patient self-report.",
      "The documentation must show an actual problem, risk, or unmet need — not just a circumstance.",
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

export default function Icd10Chapter21GuidelinesReviewerPart2Page() {
  return (
    <main style={mainStyle}>
      <HighlightToolbar />
      <header style={heroStyle}>
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 21 · 2026 OFFICIAL GUIDELINES</p>
        <h1 style={{ margin: 0, fontSize: "clamp(26px, 5vw, 44px)" }}>Factors Influencing Health Status &amp; Contact with Health Services</h1>
        <p style={{ margin: "12px 0 0", fontSize: "18px", lineHeight: 1.5 }}>Part 2 — aftercare, follow-up, donors and counseling, obstetric and reproductive codes, routine exams, prophylactic surgery, nonspecific codes, first-listed-only codes, newborn codes, and social determinants of health.</p>
      </header>

      <div style={pagerStyle}>
        <Link href="/icd10/chapter-21-guidelines-reviewer" style={pagerLinkStyle}>← Part 1 — Status, History, Screening & Observation</Link>
        <span style={pagerActiveStyle}>Part 2 — Aftercare, Follow-Up, OB, Exams & SDOH</span>
      </div>

      <nav aria-label="ICD-10 navigation" style={navStyle}>
        <Link href="/icd10" style={navLinkStyle}>ICD-10-CM home</Link>
        <Link href="/icd10/chapter-21-practice-quiz" style={navLinkStyle}>Practice Quiz</Link>
        <Link href="/icd10/chapter-21-worked-examples" style={navLinkStyle}>Worked Examples</Link>
        <Link href="/icd10/chapter-21-flashcards" style={navLinkStyle}>Flashcards</Link>
      </nav>

      <section style={introStyle}>
        <strong>How to use this reviewer:</strong> same format as Part 1 — a plain-language rule summary, an easy and a hard example scenario with reasoning, and a tips/traps box for each topic. This page covers the encounter-type Z codes that build on Part 1's general rules.
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
        <Link href="/icd10/chapter-21-guidelines-reviewer" style={backLinkStyle}>← Back to Part 1</Link>
        <Link href="/icd10" style={backLinkStyle}>← Back to ICD-10-CM</Link>
      </div>
    </main>
  );
}
