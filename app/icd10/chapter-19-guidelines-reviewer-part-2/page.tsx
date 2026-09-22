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
    title: "The Four-Way Table — Adverse Effect, Poisoning, Underdosing, Toxic Effect",
    codes: "T36–T65",
    summary: [
      "ADVERSE EFFECT — the drug was correctly prescribed and properly administered. Code (1) the nature of the adverse effect (tachycardia, delirium, etc.), then (2) the adverse effect code from T36–T50 with a 5th or 6th character 5.",
      "POISONING — improper use of a drug. Code (1) the poisoning code from T36–T50 (the 5th or 6th character identifies the intent), (2) all manifestations of the poisoning, and (3) abuse or dependence of the substance, if applicable.",
      "UNDERDOSING — taking less of a medication than prescribed or than the manufacturer's instructions. Code (1) the condition caused by the underdosing, (2) the underdosing code (T36–T50 with a 5th or 6th character 6), and (3) noncompliance (Z91.12-, Z91.13-) or complication of care (Y63.6–Y63.9) codes, if known.",
      "TOXIC EFFECT — a harmful substance is ingested or comes in contact with a person. Code the toxic effect code (T51–T65), which includes the intent.",
      "Never code directly from the Table of Drugs and Chemicals — always go back to the Tabular List. Use as many codes as necessary to describe ALL the drugs or substances involved, and if the same code describes the causative agent for more than one reaction, assign it only once.",
      "Codes in T36–T65 are combination codes that already include the substance and the intent, so no additional external cause code is required for poisonings, toxic effects, adverse effects, and underdosing.",
    ],
    easy: {
      scenario: "A patient takes a medication exactly as prescribed and develops tachycardia from it.",
      answer: "Adverse effect: the tachycardia code first, then the drug's adverse-effect code (T36–T50 with 5th or 6th character 5).",
    },
    hard: {
      scenario: "A patient accidentally takes a double dose of a prescribed medication and becomes drowsy.",
      answer: "Poisoning (improper use): the poisoning code from T36–T50 with accidental intent first, followed by the manifestation — the drowsiness.",
    },
    tips: [
      "Four keywords decide the pattern: correctly prescribed = adverse effect; improper use = poisoning; taking less = underdosing; harmful substance = toxic effect.",
      "Adverse effect and underdosing put the CONDITION first. Poisoning and toxic effect put the T-code first.",
      "No extra external cause code is needed with T36–T65.",
    ],
  },
  {
    n: 2,
    title: "Poisoning — Intent, Multiple Drugs, and the Four Classic Examples",
    codes: "T36–T50",
    summary: [
      "For a poisoning or a reaction to improper use of a medication (an overdose, the wrong substance given or taken in error, or the wrong route), first assign the appropriate code from categories T36–T50, then additional code(s) for ALL manifestations.",
      "The 5th or 6th character carries the intent: accidental, intentional self-harm, assault, or undetermined. If the intent is unknown or unspecified, code it as ACCIDENTAL. Undetermined intent is used only when the documentation states that the intent cannot be determined.",
      "If there is also a diagnosis of abuse or dependence of the substance, assign it as an additional code.",
      "If two or more drugs are taken, code each individually unless a combination code is listed in the Table of Drugs and Chemicals. If multiple unspecified drugs were taken, assign T50.91-.",
      "Four classic poisoning examples — (i) an error in prescribing or administering the drug, by anyone; (ii) an intentional overdose, even if it resulted in drug toxicity; (iii) a nonprescribed drug taken with a correctly prescribed, properly administered drug, when the reaction comes from their interaction; (iv) an interaction of a drug and alcohol. (See Section I.C.4 if a poisoning results from an insulin pump malfunction.)",
    ],
    easy: {
      scenario: "A patient takes a nonprescribed sleep aid along with a correctly prescribed medication and has a reaction from the interaction of the two.",
      answer: "Poisoning — a nonprescribed drug taken with a properly administered prescribed drug, with a reaction from their interaction, is classified as a poisoning.",
    },
    hard: {
      scenario: "A patient is treated for an overdose, and nowhere in the record is the intent stated.",
      answer: "Code the intent as accidental. Undetermined intent is only for records that specifically state the intent cannot be determined.",
    },
    tips: [
      "Unknown intent = accidental. Undetermined = only when documented as impossible to determine.",
      "Drug + alcohol interaction = poisoning.",
      "Add codes for ALL manifestations, and for abuse or dependence if present.",
    ],
  },
  {
    n: 3,
    title: "Adverse Effects — Nature First, Then the Drug",
    codes: "T36–T50 (5th/6th character 5)",
    summary: [
      "When coding an adverse effect of a drug that was correctly prescribed and properly administered, assign the code for the NATURE of the adverse effect FIRST, followed by the appropriate code for the adverse effect of the drug (T36–T50).",
      "The drug code carries a 5th or 6th character 5 (for example, T36.0X5-).",
      "Examples of the nature of an adverse effect: tachycardia, delirium, gastrointestinal hemorrhaging, vomiting, hypokalemia, hepatitis, renal failure, or respiratory failure.",
    ],
    easy: {
      scenario: "Vomiting occurs after a correctly prescribed antibiotic is taken as directed.",
      answer: "Code the vomiting first, then the antibiotic's adverse-effect code (character 5).",
    },
    hard: {
      scenario: "The same patient took a double dose of the antibiotic by mistake and then vomited.",
      answer: "That is a poisoning, not an adverse effect — a dosing error is improper use. The poisoning code (accidental intent) comes first, then the vomiting.",
    },
    tips: [
      "Adverse effect = the symptom first, then the drug's character-5 code.",
      "Properly prescribed AND properly administered is the entry ticket.",
    ],
  },
  {
    n: 4,
    title: "Underdosing — Never Principal, and What Goes With It",
    codes: "T36–T50 (6th character 6)",
    summary: [
      "Underdosing means taking less of a medication than a provider prescribed or the manufacturer instructs. Discontinuing a prescribed medication on the patient's own initiative (not directed by the provider) is also underdosing.",
      "Assign the code from T36–T50 with a 5th or 6th character 6. Documentation of a change in the patient's condition is NOT required — documentation that the patient takes less than prescribed, or stopped the medication, is enough.",
      "Underdosing codes are NEVER assigned as the principal or first-listed code. If the patient has a relapse or exacerbation of the condition the drug treats because of the reduced dose, code the medical condition itself.",
      "Noncompliance (Z91.12-, Z91.13-, Z91.14-, and Z91.A4-) or complication of care (Y63.6–Y63.9) codes are used with the underdosing code to show intent, if known.",
    ],
    easy: {
      scenario: "A patient stops taking a prescribed blood pressure medicine on their own initiative, and their hypertension worsens.",
      answer: "Code the medical condition (the worsening hypertension) first, then the underdosing code (character 6), plus a noncompliance code if known. The underdosing code is never first-listed.",
    },
    hard: {
      scenario: "A coder waits to assign an underdosing code until the provider documents that the patient's condition changed.",
      answer: "Not needed — documentation that the patient is taking less than prescribed or discontinued the medication is sufficient for the underdosing code.",
    },
    tips: [
      "Underdosing is never principal or first-listed.",
      "Stopping a medication without the provider's direction is underdosing too.",
      "Pair it with a Z91 noncompliance code, or Y63.6–Y63.9, when intent is known.",
    ],
  },
  {
    n: 5,
    title: "Toxic Effects — Toxic Effect Code First",
    codes: "T51–T65",
    summary: [
      "When a harmful substance is ingested or comes in contact with a person, it is a toxic effect. The codes are in categories T51–T65.",
      "Assign the toxic effect code FIRST, followed by codes for ALL associated manifestations of the toxic effect.",
      "Toxic effect codes carry an associated intent: accidental, intentional self-harm, assault, or undetermined — so no separate external cause code is needed for intent.",
    ],
    easy: {
      scenario: "A worker accidentally inhales a harmful fume and develops a cough.",
      answer: "Assign the toxic effect code (accidental) first, then a code for the cough.",
    },
    hard: {
      scenario: "A coder adds an external cause code from Chapter 20 to a toxic effect code just to show the intent.",
      answer: "Not needed — the T51–T65 codes already include the intent.",
    },
    tips: [
      "Toxic effect = T51–T65, code first, manifestations after.",
      "Intent is built in — no extra external cause code.",
    ],
  },
  {
    n: 6,
    title: "Adult & Child Abuse, Neglect and Maltreatment",
    codes: "T74 · T76 · Y07 · Z04.4- · Z04.7- · Z04.8-",
    summary: [
      "Sequence FIRST the appropriate code from T74 (confirmed) or T76 (suspected) for abuse, neglect, and other maltreatment, followed by any accompanying mental health or injury code(s).",
      "If the record states abuse or neglect, it is coded as CONFIRMED (T74). It is coded as suspected (T76) only when documented as suspected.",
      "For CONFIRMED abuse or neglect, add an external cause code from the assault section (X92–Y09) to identify the cause of any physical injuries, and a perpetrator code (Y07) when the perpetrator is known. For SUSPECTED cases, do not report an external cause or perpetrator code.",
      "See Section I.C.15 for abuse in a pregnant patient. If suspected abuse is RULED OUT during an encounter, use the observation code instead of T76: Z04.71 or Z04.72 (alleged adult or child physical abuse), Z04.41 or Z04.42 (alleged adult or child rape), or Z04.81 or Z04.82 (forced sexual exploitation or forced labor exploitation).",
    ],
    easy: {
      scenario: "A child is treated for a fractured arm, and the provider documents confirmed physical abuse by a known perpetrator.",
      answer: "Sequence T74 (confirmed child abuse) first, then the fracture, plus an assault external cause code and a perpetrator code (Y07).",
    },
    hard: {
      scenario: "A child is evaluated for suspected physical abuse, and after the workup abuse is ruled out.",
      answer: "Use Z04.72 (examination and observation following alleged child physical abuse, ruled out) — not T76.",
    },
    tips: [
      "Stated abuse = confirmed (T74). Suspected only if documented as suspected (T76).",
      "Suspected cases get no external cause or perpetrator code. Confirmed cases get an assault code and Y07 if the perpetrator is known.",
      "Ruled out = a Z04 observation code, never T76.",
    ],
  },
  {
    n: 7,
    title: "Complications of Care — Devices, Body-System Chapters, and Built-In External Causes",
    codes: "T80–T88 · G89.18 · G89.28",
    summary: [
      "Pain associated with devices, implants, or grafts left in a surgical site (for example, a painful hip prosthesis) is assigned to the appropriate T code in Chapter 19. Use an additional code from category G89 for acute or chronic pain due to the device (G89.18 or G89.28).",
      "Some complication-of-care codes include the external cause: the code describes the nature of the complication and the type of procedure that caused it, so no separate external cause code for the procedure is needed.",
      "Intraoperative and postprocedural complication codes are also found within the BODY SYSTEM chapters, with codes specific to the organs of that system. Sequence these first, followed by a code for the specific complication if applicable. For example, a vascular intraoperative or postprocedural complication uses the appropriate circulatory chapter complication code — unless the complication is specifically indexed to a T code in Chapter 19.",
      "For documentation of complications of care, see Section I.B.16.",
    ],
    easy: {
      scenario: "A patient has pain from a hip prosthesis left in place.",
      answer: "Assign the appropriate Chapter 19 T code for the prosthesis-related complication, plus a G89 code (G89.18 acute or G89.28 chronic) for the device-related pain.",
    },
    hard: {
      scenario: "A patient has a vascular complication during surgery, and the coder goes straight to a Chapter 19 T code.",
      answer: "Not automatically — intraoperative and postprocedural complications are usually coded from the body system chapter (here, circulatory), unless the complication is specifically indexed to a T code.",
    },
    tips: [
      "Device pain = the Chapter 19 T code + a G89 pain code.",
      "Check the body system chapter first for intraoperative and postprocedural complications.",
      "Some complication codes already contain the procedure's external cause.",
    ],
  },
  {
    n: 8,
    title: "Transplant Complications (T86) — Only If Function Is Affected",
    codes: "T86 · T86.1-",
    summary: [
      "Category T86 (complications of transplanted organs and tissues) is used for BOTH complications and rejection of a transplanted organ. A transplant complication code is assigned only if the complication affects the FUNCTION of the transplanted organ.",
      "Two codes are required to fully describe a transplant complication: the T86 code and a secondary code that identifies the complication.",
      "Pre-existing conditions, or conditions that develop after the transplant, are not coded as complications unless they affect the function of the transplanted organ.",
      "KIDNEY: a kidney transplant may not fully restore kidney function, so the patient may still have chronic kidney disease. Use T86.1- for documented complications such as failure or rejection. Do NOT assign T86.1- for a post-transplant patient with CKD unless a complication such as failure or rejection is documented. If it's unclear whether there's a transplant complication, query the provider.",
      "Conditions that affect the function of the transplanted kidney (other than CKD) get a code from T86.1- plus a secondary code identifying the complication. For CKD after a transplant without a complication, see Section I.C.14.",
    ],
    easy: {
      scenario: "A kidney transplant patient has stage 3 chronic kidney disease, with no rejection or failure documented.",
      answer: "Code the CKD (per the CKD and transplant-status guideline) — not T86.1-. No transplant complication is documented.",
    },
    hard: {
      scenario: "A kidney transplant patient's chart shows declining kidney function, but it is unclear whether the provider considers it a transplant complication.",
      answer: "Query the provider — T86.1- is assigned only for documented transplant complications.",
    },
    tips: [
      "T86 needs the organ's FUNCTION to be affected — a mere post-transplant condition isn't enough.",
      "T86 + a secondary code for the specific complication (two codes).",
      "Kidney + CKD without failure or rejection = no T86.1-.",
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

export default function Icd10Chapter19GuidelinesReviewerPart2Page() {
  return (
    <main style={mainStyle}>
      <HighlightToolbar />
      <header style={heroStyle}>
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 19 · 2026 OFFICIAL GUIDELINES</p>
        <h1 style={{ margin: 0, fontSize: "clamp(26px, 5vw, 44px)" }}>Injury, Poisoning &amp; Certain Other Consequences of External Causes</h1>
        <p style={{ margin: "12px 0 0", fontSize: "18px", lineHeight: 1.5 }}>Part 2 — the four-way drug-reaction table, poisoning, adverse effects, underdosing, toxic effects, adult and child abuse, complications of care, and transplant complications. T36–T88.</p>
      </header>

      <div style={pagerStyle}>
        <Link href="/icd10/chapter-19-guidelines-reviewer" style={pagerLinkStyle}>← Part 1 — Injuries, Fractures & Burns</Link>
        <span style={pagerActiveStyle}>Part 2 — Drug Reactions, Abuse & Complications</span>
      </div>

      <nav aria-label="ICD-10 navigation" style={navStyle}>
        <Link href="/icd10" style={navLinkStyle}>ICD-10-CM home</Link>
        <Link href="/icd10/chapter-19-practice-quiz" style={navLinkStyle}>Practice Quiz</Link>
        <Link href="/icd10/chapter-19-worked-examples" style={navLinkStyle}>Worked Examples</Link>
        <Link href="/icd10/chapter-19-flashcards" style={navLinkStyle}>Flashcards</Link>
      </nav>

      <section style={introStyle}>
        <strong>How to use this reviewer:</strong> same format as Part 1 — a plain-language rule summary, an easy and a hard example scenario with reasoning, and a tips/traps box for each topic. This page covers the drug-reaction, abuse, and complication guidance that builds on Part 1's 7th-character and injury rules.
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
        <Link href="/icd10/chapter-19-guidelines-reviewer" style={backLinkStyle}>← Back to Part 1</Link>
        <Link href="/icd10" style={backLinkStyle}>← Back to ICD-10-CM</Link>
      </div>
    </main>
  );
}
