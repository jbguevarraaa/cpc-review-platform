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
    title: "Chapter 16 Codes — Record Rules & Lifetime Use",
    codes: "P00–P96",
    summary: [
      "For coding purposes, the perinatal period is defined as BEFORE BIRTH through the 28th day following birth.",
      "Chapter 16 codes are NEVER used on the maternal record. Conversely, Chapter 15 (obstetric) codes are NEVER permitted on the newborn's record — this is the mirror image of the maternal-only rule covered in Chapter 15.",
      "Chapter 16 codes may continue to be used THROUGHOUT THE LIFE of the patient, as long as the condition that originated in the perinatal period is STILL PRESENT — this isn't a newborn-only code family with an expiration date.",
    ],
    easy: {
      scenario: "A condition that originated during the perinatal period is documented as still present and clinically relevant for a patient who is now 8 years old.",
      answer: "The Chapter 16 code is still used — perinatal-origin codes remain valid throughout the patient's life as long as the condition persists.",
    },
    hard: {
      scenario: "A coder considers assigning a Chapter 16 perinatal code on the mother's chart to reflect a newborn complication that also affected her care.",
      answer: "Incorrect — Chapter 16 codes are never used on the maternal record, regardless of how connected the newborn's condition might be to the mother's own care.",
    },
    tips: [
      "The Chapter 15/16 maternal-only and newborn-only rules mirror each other perfectly — neither chapter's codes ever cross onto the other party's record.",
      "\"Perinatal-origin\" doesn't mean \"newborn-only\" — these codes travel with the patient for life if the condition remains present.",
    ],
  },
  {
    n: 2,
    title: "Principal Diagnosis for the Birth Record",
    codes: "Z38.–",
    summary: [
      "When coding the birth episode on the newborn's own record, a code from category Z38 (liveborn infants, by place of birth and type of delivery) is assigned as the PRINCIPAL diagnosis.",
      "A Z38 code is assigned ONLY ONCE — at the time of birth. If the newborn is later transferred to another institution, a Z38 code is NOT used at the receiving hospital.",
      "Z38 is used ONLY on the newborn's own record — never on the mother's record.",
    ],
    easy: {
      scenario: "A newborn's birth episode is being coded at the hospital where the delivery actually took place.",
      answer: "A Z38 code (matching the place of birth and type of delivery) as the principal diagnosis.",
    },
    hard: {
      scenario: "A newborn is transferred to a different hospital two days after birth, and the receiving hospital is now coding this newborn's admission.",
      answer: "No Z38 code is assigned at the receiving hospital — Z38 is a one-time, birth-institution-only code, not reassigned at every subsequent facility.",
    },
    tips: [
      "Z38 is a \"one and done\" code — assigned exactly once, exclusively at the birth admission, never repeated at a later transfer.",
    ],
  },
  {
    n: 3,
    title: "Combining Chapter 16 with Other Chapters — Sequencing & Signs/Symptoms",
    codes: "P00–P96",
    summary: [
      "Codes from OTHER chapters may be used together with Chapter 16 codes when those other-chapter codes provide MORE SPECIFIC detail.",
      "Codes for signs and symptoms may be assigned when a DEFINITIVE diagnosis hasn't yet been established.",
      "If the REASON FOR THE ENCOUNTER is a perinatal condition, the Chapter 16 code should be SEQUENCED FIRST.",
    ],
    easy: {
      scenario: "A newborn's encounter is specifically for a documented perinatal condition, with an additional code available from another chapter that adds more specific detail.",
      answer: "The Chapter 16 code is sequenced first, with the other-chapter code added for the additional specific detail.",
    },
    hard: {
      scenario: "A newborn is being evaluated for a suspected problem, and no definitive diagnosis has been established yet — only signs and symptoms are documented.",
      answer: "Codes for the signs/symptoms are assigned — appropriate when a definitive diagnosis isn't yet established.",
    },
    tips: [
      "\"Reason for the encounter is a perinatal condition\" is the specific trigger for sequencing Chapter 16 first — this isn't an automatic rule for every code combination.",
    ],
  },
  {
    n: 4,
    title: "Birth Process vs. Community-Acquired — The Default Rule",
    codes: "P00–P96",
    summary: [
      "If a newborn has a condition that COULD be either due to the birth process OR community-acquired, and documentation doesn't specify which, the DEFAULT is due to the BIRTH PROCESS — a Chapter 16 code is used.",
      "If the condition is documented as COMMUNITY-ACQUIRED specifically, a Chapter 16 code should NOT be assigned.",
    ],
    easy: {
      scenario: "A newborn's condition could plausibly be from the birth process or from community exposure, and the documentation doesn't specify which.",
      answer: "Default to birth-process origin — a Chapter 16 code is used when the documentation doesn't clarify the source.",
    },
    hard: {
      scenario: "A newborn's condition is specifically documented as community-acquired.",
      answer: "No Chapter 16 code is assigned — the guideline specifically excludes Chapter 16 codes once a condition is documented as community-acquired.",
    },
    tips: [
      "This default (birth-process-when-unclear) is the OPPOSITE of leaving something unspecified — silence on the source actively resolves TOWARD Chapter 16, not away from it.",
    ],
  },
  {
    n: 5,
    title: "Code All Clinically Significant Newborn Conditions",
    codes: "P00–P96",
    summary: [
      "ALL clinically significant conditions noted on a routine newborn examination should be coded. A condition is considered clinically significant if it requires ANY of the following: clinical evaluation, therapeutic treatment, diagnostic procedures, extended length of hospital stay, increased nursing care/monitoring, OR has implications for future health care needs.",
      "This list mirrors the GENERAL \"additional diagnoses\" coding guideline used elsewhere in ICD-10-CM, with one key difference: the \"implications for future health care needs\" criterion is unique to the perinatal/newborn guideline — codes should be assigned for conditions the provider has specified as having such implications.",
    ],
    easy: {
      scenario: "A routine newborn exam finds a condition that required no treatment, no extra monitoring, no procedures, and no extended stay — but the provider specifically notes it has implications for the child's future health care needs.",
      answer: "This condition IS coded — \"implications for future health care needs,\" as specifically documented by the provider, is on its own sufficient to meet the clinical significance threshold.",
    },
    hard: {
      scenario: "A coder considers applying the \"implications for future health care needs\" criterion to code an incidental finding on an adult patient's routine exam.",
      answer: "Incorrect — this specific criterion is explicitly a newborn/perinatal guideline and should NOT be applied to adult patients.",
    },
    tips: [
      "Six separate triggers make a newborn finding \"clinically significant\" — memorize the list, since any ONE of them is sufficient on its own, not all six together.",
      "\"Future health care needs\" implications is the one criterion that's unique to this newborn guideline — don't port it over to adult coding scenarios.",
    ],
  },
  {
    n: 6,
    title: "Observation for Suspected Conditions Not Found",
    codes: "Z05.–",
    summary: [
      "Category Z05 (observation and evaluation of newborn for suspected diseases/conditions ruled out) identifies cases where a HEALTHY newborn is evaluated for a suspected condition that, after study, is determined NOT to be present.",
      "Do NOT use a Z05 code when the newborn actually has documented signs or symptoms of the suspected problem — in that case, code the sign/symptom instead.",
      "Z05 may ALSO be used as a principal/first-listed code for later readmissions or encounters once a Z38 code no longer applies — but only for genuinely healthy newborns/infants where no condition is found after study.",
      "On the BIRTH record specifically, a Z05 code is used as a SECONDARY code, following the Z38 code.",
    ],
    easy: {
      scenario: "A healthy newborn is evaluated for a suspected condition based on risk factors, and after study, no condition is actually found to be present.",
      answer: "A Z05 code — the classic scenario this category exists for.",
    },
    hard: {
      scenario: "A newborn is evaluated for a suspected condition, and the newborn DOES have documented signs/symptoms consistent with that suspected problem.",
      answer: "Do not use Z05 — code the actual signs/symptoms instead, since Z05 is reserved for when the suspected condition is ruled out, not when it's actively presenting with findings.",
    },
    tips: [
      "Z05 is exclusively for the \"nothing was actually found\" outcome — the presence of any real signs/symptoms disqualifies it in favor of coding those findings directly.",
      "On the birth record, Z05 always follows Z38 as a secondary code — never assigned as principal on that specific record.",
    ],
  },
  {
    n: 7,
    title: "Prematurity, Fetal Growth Retardation & Birth Weight",
    codes: "P05.–, P07.–",
    summary: [
      "Providers use different criteria for determining prematurity — a code for prematurity should NEVER be assigned unless it's actually documented by the provider.",
      "Category P05 (disorders related to slow fetal growth/fetal malnutrition) and category P07 (disorders related to short gestation and low birth weight) are assigned based on the RECORDED BIRTH WEIGHT and ESTIMATED GESTATIONAL AGE.",
      "When BOTH birth weight and gestational age are documented and available, TWO codes from category P07 are assigned — with the BIRTH WEIGHT code sequenced BEFORE the gestational age code.",
    ],
    easy: {
      scenario: "A newborn's chart documents both a specific birth weight and a specific estimated gestational age, both qualifying for P07 codes.",
      answer: "Two P07 codes — the birth weight code first, then the gestational age code.",
    },
    hard: {
      scenario: "A newborn is clinically small, but no provider documentation ever uses the word \"prematurity\" or provides prematurity-specific criteria.",
      answer: "No prematurity code is assigned — a code for prematurity requires actual provider documentation, not a coder's own clinical impression.",
    },
    tips: [
      "Birth weight ALWAYS leads gestational age in the P07 sequence when both are coded together — memorize that specific order.",
      "\"Looks premature\" isn't a coding trigger — only documented prematurity, using the provider's own stated criteria, justifies the code.",
    ],
  },
  {
    n: 8,
    title: "Low Birth Weight & Immaturity Status (Beyond the Newborn Period)",
    codes: "P07.–",
    summary: [
      "Category P07 codes are also used for a CHILD OR ADULT who was premature or had low birth weight AS A NEWBORN, when that history is STILL AFFECTING the patient's CURRENT health status — not just as a historical footnote.",
    ],
    easy: {
      scenario: "A 6-year-old patient's documented history of low birth weight at birth is specifically noted as still affecting their current growth and development.",
      answer: "A P07 code is still appropriate — the low-birth-weight history is documented as actively affecting current health status, not just sitting in the past medical history.",
    },
    hard: {
      scenario: "An adult patient's chart mentions they were born prematurely decades ago, purely as background history with no documented connection to any current health issue.",
      answer: "A P07 code would NOT be appropriate here without a documented CURRENT effect — this criterion specifically requires the history to be affecting current health status, not just be mentioned as background.",
    },
    tips: [
      "P07 isn't locked to the newborn period — it follows the patient into childhood or adulthood specifically when the original low-birth-weight/prematurity history is still clinically relevant today.",
    ],
  },
  {
    n: 9,
    title: "Bacterial Sepsis of Newborn",
    codes: "P36.–, B95–B96",
    summary: [
      "Category P36 already covers congenital sepsis as part of what it captures — a separate \"congenital\" code family doesn't exist alongside it. If a newborn is documented with sepsis WITHOUT specifying congenital vs. community-acquired, the DEFAULT is CONGENITAL, and a P36 code is assigned.",
      "B95 (Streptococcus, Staphylococcus, and Enterococcus as the cause of disease) and B96 (other bacterial agents) are the two organism-identifying code families that pair with P36 when the organism isn't already built into the specific P36 subcode. If the specific P36 subcode already includes the causal organism, don't also add a separate organism code from either B95 or B96 — that would be redundant.",
      "If the P36 subcode does NOT include the causal organism, add an additional code — B96 specifically, per the guideline's own instruction for this scenario.",
      "If applicable, use additional codes to identify SEVERE sepsis (R65.2–) and any associated acute organ dysfunction.",
    ],
    easy: {
      scenario: "A newborn is documented with sepsis, with no specification of congenital vs. community-acquired anywhere in the record.",
      answer: "Default to congenital — a code from category P36 is assigned.",
    },
    hard: {
      scenario: "A newborn has bacterial sepsis coded with a P36 subcode that does NOT specify the causal organism, and the specific bacteria is documented separately as identified on culture.",
      answer: "Add an additional code from category B96 for the specific organism, since the P36 code itself doesn't already capture that detail.",
    },
    tips: [
      "Check whether the SPECIFIC P36 subcode already bakes in the organism before reflexively adding a B95/B96 code — adding one on top of an organism-inclusive P36 code would be redundant.",
      "\"Sepsis, source unspecified\" in a newborn defaults to congenital — the opposite assumption from how an adult sepsis case might be approached.",
    ],
  },
  {
    n: 10,
    title: "Stillbirth & COVID-19 in Newborn",
    codes: "P95, U07.1, P35.8",
    summary: [
      "Code P95 (stillbirth) is used ONLY in institutions that maintain SEPARATE RECORDS for stillbirths. No other code is used alongside P95, and P95 is NEVER used on the mother's own record.",
      "For a newborn testing positive for COVID-19 with no documentation of a specific transmission type, assign U07.1 (COVID-19) plus codes for any associated neonatal manifestations.",
      "If the provider specifically documents the COVID-19 was contracted IN UTERO or DURING THE BIRTH PROCESS, assign BOTH P35.8 (other congenital viral diseases) AND U07.1 together.",
      "For the birth episode itself on a newborn record, the appropriate Z38 code is still assigned as the principal diagnosis, regardless of COVID-19 status.",
    ],
    easy: {
      scenario: "A newborn tests positive for COVID-19, with no documentation of how or when the infection was transmitted.",
      answer: "U07.1 plus the appropriate codes for any associated manifestations — no P35.8 without documentation of in-utero/birth-process transmission specifically.",
    },
    hard: {
      scenario: "A newborn tests positive for COVID-19, and the provider specifically documents that the infection was contracted in utero.",
      answer: "Both P35.8 (other congenital viral diseases) AND U07.1 together — the specific documented in-utero transmission is what unlocks the P35.8 pairing.",
    },
    tips: [
      "P35.8 is not automatic just because a newborn has COVID-19 — it specifically requires documented in-utero or birth-process transmission; otherwise, U07.1 alone (plus manifestation codes) is correct.",
      "P95 (stillbirth) is a highly restricted code: separate-stillbirth-record institutions only, no companion codes, and never on the mother's chart.",
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

export default function Icd10Chapter16GuidelinesReviewerPage() {
  return (
    <main style={mainStyle}>
      <header style={heroStyle}>
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 16 · 2026 OFFICIAL GUIDELINES</p>
        <h1 style={{ margin: 0, fontSize: "clamp(26px, 5vw, 44px)" }}>Certain Conditions Originating in the Perinatal Period</h1>
        <p style={{ margin: "12px 0 0", fontSize: "18px", lineHeight: 1.5 }}>P00–P96 — newborn-only record rules, the birth-record principal diagnosis (Z38), the birth-process default, clinically significant conditions, prematurity/birth weight, bacterial sepsis, stillbirth, and COVID-19.</p>
      </header>

      <nav aria-label="ICD-10 navigation" style={navStyle}>
        <Link href="/icd10" style={navLinkStyle}>ICD-10-CM home</Link>
        <Link href="/icd10/chapter-16-practice-quiz" style={navLinkStyle}>Practice Quiz</Link>
        <Link href="/icd10/chapter-16-worked-examples" style={navLinkStyle}>Worked Examples</Link>
        <Link href="/icd10/chapter-16-flashcards" style={navLinkStyle}>Flashcards</Link>
      </nav>

      <section style={introStyle}>
        <strong>How to use this reviewer:</strong> same format as the other ICD-10 chapters — a plain-language rule summary, an easy and a hard example scenario with reasoning, and a tips/traps box for each topic. Written as an original summary, not a copy of the guideline text. This chapter is the newborn-side mirror of Chapter 15 (the obstetric/maternal chapter) — codes flow in exactly one direction on each side, never crossing onto the other party's record.
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
