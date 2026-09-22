"use client";

import Link from "next/link";
import { HighlightToolbar } from "../../cpt/surgery/_digestive/highlighter";
import { useState } from "react";

type Question = {
  topic: string;
  scenario: string;
  options: string[];
  correct: "A" | "B" | "C" | "D";
  explanation: string;
  lookFor: string;
};

const questions: Question[] = [
  {
    topic: "7th Character — Active Treatment",
    scenario: "A patient is seen in the ED for a forearm laceration, sutured that day. Three days later the same wound is opened and treated for an infection, and the patient is seen again by a different physician.",
    options: [
      "A. Initial-encounter 7th character at both encounters",
      "B. Initial at the first encounter, subsequent at the second because the physician is different",
      "C. Subsequent at both encounters",
      "D. Sequela at the second encounter",
    ],
    correct: "A",
    explanation: "The 7th character follows active treatment, not the provider. The patient is still receiving active treatment for the wound at both encounters, so the initial-encounter character applies each time.",
    lookFor: "A 'different physician' distractor and ongoing active treatment.",
  },
  {
    topic: "Aftercare of an Injury",
    scenario: "Six weeks after surgery for an ankle fracture, a patient returns for routine cast and healing checks. There are no complications.",
    options: [
      "A. An aftercare code from Z47",
      "B. The fracture code with an initial-encounter 7th character",
      "C. The fracture code with a subsequent-encounter 7th character",
      "D. The fracture code with 7th character S",
    ],
    correct: "C",
    explanation: "Aftercare Z codes aren't used for traumatic fractures. Routine care during healing is reported with the acute fracture code and the subsequent-encounter 7th character.",
    lookFor: "'Routine healing checks' — active treatment is complete.",
  },
  {
    topic: "Sequela Order",
    scenario: "A patient is evaluated for a contracture that developed after a burn healed.",
    options: [
      "A. The burn code with 7th character S, then the contracture code",
      "B. The contracture code with 7th character S, then the burn code",
      "C. The burn code with 7th character A, then the contracture code",
      "D. The contracture code, then the burn code with 7th character S",
    ],
    correct: "D",
    explanation: "The sequela (the contracture) is sequenced first, followed by the burn code carrying 7th character S. The S goes only on the injury code.",
    lookFor: "A sequela of a burn — the order and where the S goes.",
  },
  {
    topic: "Fracture Defaults",
    scenario: "An ED note states 'tibial shaft fracture' after a fall. There is no statement about open vs. closed or displaced vs. nondisplaced.",
    options: [
      "A. Closed, nondisplaced",
      "B. Closed, displaced",
      "C. Open, displaced",
      "D. Unspecified — query is required before coding",
    ],
    correct: "B",
    explanation: "A fracture not indicated as open or closed is coded to closed, and one not indicated as displaced or nondisplaced is coded to displaced — no query is needed.",
    lookFor: "The record is silent on both descriptors.",
  },
  {
    topic: "Gustilo Not Documented",
    scenario: "A provider documents an open fracture of the lower leg but doesn't state a Gustilo classification.",
    options: [
      "A. Type IIIA",
      "B. Type IIIC",
      "C. Type I or II (B, E, H, M, Q)",
      "D. The closed fracture 7th character",
    ],
    correct: "C",
    explanation: "For open fractures of the forearm, femur, and lower leg (including ankle), the 7th character depends on the Gustilo type. When the type isn't specified, assign the character for open fracture type I or II.",
    lookFor: "An open lower-leg fracture with no Gustilo type.",
  },
  {
    topic: "Osteoporotic Fracture",
    scenario: "A patient with known osteoporosis breaks a vertebra by bending over to pick up a light object.",
    options: [
      "A. A traumatic vertebral fracture code",
      "B. A code from category M80",
      "C. Both a traumatic fracture code and M80",
      "D. Only a fall-related external cause code",
    ],
    correct: "B",
    explanation: "A patient with known osteoporosis who fractures a bone is coded to M80, even if the trauma was minor and wouldn't usually break a healthy bone.",
    lookFor: "Known osteoporosis plus minimal trauma.",
  },
  {
    topic: "Multiple Injuries",
    scenario: "An inpatient has a documented wrist fracture, a scalp laceration, and a cornea abrasion. The provider says the wrist fracture is the most serious and the focus of treatment.",
    options: [
      "A. Separate codes for each injury, with the wrist fracture first",
      "B. T07 for multiple injuries",
      "C. Only the wrist fracture code",
      "D. Separate codes with the laceration first because it was seen first",
    ],
    correct: "A",
    explanation: "Each injury gets its own code unless a combination code exists, T07 isn't used when specific information is available, and the most serious injury (per the provider and the focus of treatment) is sequenced first.",
    lookFor: "Several documented injuries and a stated most-serious injury.",
  },
  {
    topic: "Superficial Injury Same Site",
    scenario: "A patient has a fractured radius with a bruise over the fracture site.",
    options: [
      "A. The fracture code and a contusion code",
      "B. The contusion code first",
      "C. Only the contusion code",
      "D. Only the fracture code",
    ],
    correct: "D",
    explanation: "Superficial injuries such as contusions aren't coded when associated with a more severe injury of the same site.",
    lookFor: "A superficial injury at the same site as a more severe one.",
  },
  {
    topic: "Iatrogenic Injury",
    scenario: "During a laparoscopic procedure, the bowel is accidentally perforated. The coder considers an injury code from Chapter 19.",
    options: [
      "A. Assign a bowel injury code from Chapter 19",
      "B. Assign no code because it occurred during surgery",
      "C. Assign the appropriate complication code(s) instead of a Chapter 19 injury code",
      "D. Assign a Chapter 19 injury code with 7th character S",
    ],
    correct: "C",
    explanation: "Injury codes from Chapter 19 aren't assigned for injuries that occur during or as a result of a medical intervention. The complication code(s) are used instead.",
    lookFor: "An injury caused by the procedure itself.",
  },
  {
    topic: "Burn Sequencing",
    scenario: "A patient is admitted for treatment of a second-degree burn of the forearm and a third-degree burn of the chest, both due to a house fire.",
    options: [
      "A. Second-degree forearm burn first",
      "B. Category T30 only",
      "C. Whichever burn was documented first",
      "D. Third-degree chest burn first, then the second-degree forearm burn",
    ],
    correct: "D",
    explanation: "When more than one burn is present and the admission is for treatment of the burns, the highest degree burn is sequenced first. Each burn site gets its own code.",
    lookFor: "Multiple burns of different degrees at different sites.",
  },
  {
    topic: "Same-Site Burns",
    scenario: "The record documents first- and second-degree burns of the same area of the left thigh.",
    options: [
      "A. Both a first-degree and a second-degree code",
      "B. A first-degree code only",
      "C. A second-degree code only",
      "D. T30",
    ],
    correct: "C",
    explanation: "Burns of the same anatomic site and side but different degrees are classified to the subcategory identifying the highest degree recorded — here, the second-degree code.",
    lookFor: "Same site, same side, different degrees.",
  },
  {
    topic: "Healing Wound and Sequela Together",
    scenario: "A patient has a healed burn of the hand with a scar contracture, and a separate burn of the arm that is still healing.",
    options: [
      "A. Only the current burn code",
      "B. Only the sequela",
      "C. Both — the current burn with 7th character A or D, and the healed burn with 7th character S for the sequela",
      "D. T31 for the extent of the burns",
    ],
    correct: "C",
    explanation: "Both a current burn code (7th character A or D) and a burn code with 7th character S can be assigned on the same record when a current healing wound and a sequela of an old burn exist together. T31 isn't used for sequelae.",
    lookFor: "A current burn and a sequela of an older burn at once.",
  },
  {
    topic: "Adverse Effect vs. Poisoning",
    scenario: "A patient takes a prescribed medication exactly as directed and develops delirium. A different patient takes twice the prescribed dose by mistake and develops drowsiness.",
    options: [
      "A. Both are adverse effects",
      "B. Both are poisonings",
      "C. The first is a poisoning; the second is an adverse effect",
      "D. The first is an adverse effect (delirium first, then the drug's character-5 code); the second is a poisoning (poisoning code first, then the drowsiness)",
    ],
    correct: "D",
    explanation: "Correct prescription and proper administration = adverse effect (nature first, then the character-5 drug code). Taking a double dose in error is improper use = poisoning (T36–T50 code first, then the manifestation).",
    lookFor: "Two patients — one correct use, one error.",
  },
  {
    topic: "Underdosing and Sequencing",
    scenario: "A patient stops taking a prescribed heart medication on their own because of cost, and is admitted with a worsening of the condition the drug treats.",
    options: [
      "A. The medical condition first, then the underdosing code and a noncompliance code if known",
      "B. The underdosing code as the principal diagnosis",
      "C. Only a noncompliance code",
      "D. A poisoning code, because the medication was misused",
    ],
    correct: "A",
    explanation: "Stopping a medication on the patient's own initiative is underdosing. The underdosing code is never principal or first-listed — the medical condition is coded first, followed by the underdosing code and a noncompliance code (Z91.12-, Z91.13-, Z91.14-, Z91.A4-) if known.",
    lookFor: "Discontinued on their own initiative, with a relapse of the condition.",
  },
  {
    topic: "Abuse — Confirmed vs. Ruled Out",
    scenario: "Encounter 1: a child with a fractured arm is documented as confirmed physical abuse by a known caregiver. Encounter 2: a different child is evaluated for suspected abuse and it is ruled out.",
    options: [
      "A. Encounter 1: T76; Encounter 2: T74",
      "B. Encounter 1: T74 first, then the fracture, an assault external cause code, and Y07; Encounter 2: Z04.72",
      "C. Encounter 1: fracture first, then T74; Encounter 2: T76",
      "D. Encounter 1: T74 only; Encounter 2: no code",
    ],
    correct: "B",
    explanation: "Confirmed abuse: T74 is sequenced first, followed by the injury, with an assault external cause code (X92–Y09) and the perpetrator code Y07 when known. A suspected case that is ruled out uses an observation code such as Z04.72 for alleged child physical abuse — not T76.",
    lookFor: "Confirmed vs. ruled out — two different code paths.",
  },
  {
    topic: "Toxic Effect",
    scenario: "A worker accidentally inhales a harmful chemical vapor and develops a cough.",
    options: [
      "A. The cough first, then an adverse effect code",
      "B. The toxic effect code (T51–T65, accidental) first, then the cough",
      "C. A poisoning code from T36–T50 first, then the cough",
      "D. An underdosing code, then the cough",
    ],
    correct: "B",
    explanation: "A harmful substance that is inhaled or contacted is a toxic effect (T51–T65). Assign the toxic effect code first, followed by codes for all associated manifestations. The intent is built into the code.",
    lookFor: "A harmful substance, not a medication used improperly.",
  },
  {
    topic: "Suspected Abuse",
    scenario: "A child with a bruise is evaluated, and the provider documents suspected physical abuse pending an investigation.",
    options: [
      "A. T76 first, then the injury code — no external cause or perpetrator code",
      "B. T74 first, with Y07",
      "C. Z04.72",
      "D. An assault external cause code only",
    ],
    correct: "A",
    explanation: "Suspected abuse is coded T76 first, followed by the injury code. External cause and perpetrator codes are reported only for confirmed cases.",
    lookFor: "The provider says 'suspected.'",
  },
  {
    topic: "Transplant — Unclear Documentation",
    scenario: "A liver transplant patient's chart notes declining function of the transplanted liver, but it's unclear whether the provider considers it a transplant complication.",
    options: [
      "A. Assign a T86 complication code",
      "B. Assign only the transplant status code and stop",
      "C. Assign no code",
      "D. Query the provider before assigning a transplant complication code",
    ],
    correct: "D",
    explanation: "A transplant complication code is assigned when the complication affects the organ's function — but when the documentation is unclear about whether there is a complication, the provider should be queried.",
    lookFor: "Unclear documentation of a complication.",
  },
];

const mainStyle = { maxWidth: "980px", margin: "0 auto", padding: "36px 24px 64px", minHeight: "100vh", background: "#f6f9f9", color: "#141d1c", fontFamily: "Arial, sans-serif" };
const heroStyle = { background: "linear-gradient(135deg, #101719, #0f766e)", color: "white", padding: "40px 36px", borderRadius: "18px", marginBottom: "24px", boxShadow: "0 12px 28px rgba(16,23,25,0.22)" };
const kickerStyle = { margin: "0 0 10px", color: "#99f6e4", fontWeight: 800, letterSpacing: "0.08em", fontSize: "13px" };
const navStyle = { display: "flex", flexWrap: "wrap" as const, gap: "10px", marginBottom: "16px" };
const navLinkStyle = { textDecoration: "none", color: "#0f766e", background: "#ffffff", border: "1px solid #dbe3e1", borderRadius: "999px", padding: "9px 14px", fontWeight: 700, fontSize: "13.5px" };
const jumpBarStyle = { display: "flex", flexWrap: "wrap" as const, gap: "8px", marginBottom: "22px" };
const introStyle = { background: "#f0fdfa", border: "1px solid #99f6e4", borderLeft: "5px solid #0f766e", borderRadius: "10px", padding: "14px 16px", marginBottom: "20px", lineHeight: 1.65, fontSize: "13.5px" };
const cardStyle = { background: "#ffffff", border: "1px solid #e3e7e6", borderRadius: "14px", padding: "26px 28px", boxShadow: "0 5px 16px rgba(16,23,25,0.06)" };
const progressStyle = { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px", fontSize: "13px", color: "#5b6b68", fontWeight: 700 };
const topicChipStyle = { background: "#f0fdfa", border: "1px solid #99f6e4", color: "#0f766e", borderRadius: "999px", padding: "4px 12px", fontWeight: 800, fontSize: "12px" };
const scenarioStyle = { fontSize: "16px", lineHeight: 1.65, margin: "14px 0 18px", color: "#111827" };
const optionsWrapStyle = { display: "grid", gap: "10px" };
const buttonBaseStyle: React.CSSProperties = { display: "flex", alignItems: "center", gap: "8px", textAlign: "left", padding: "13px 16px", borderRadius: "10px", border: "1px solid #dbe3e1", background: "#fff", cursor: "pointer", fontSize: "14.5px", lineHeight: 1.5 };
const actionsRowStyle = { display: "flex", gap: "12px", marginTop: "20px", flexWrap: "wrap" as const };
const primaryBtnStyle = { padding: "11px 22px", borderRadius: "999px", border: "none", background: "#0f766e", color: "#fff", fontWeight: 800, cursor: "pointer", fontSize: "14px" };
const secondaryBtnStyle = { padding: "11px 22px", borderRadius: "999px", border: "1px solid #dbe3e1", background: "#fff", color: "#0f766e", fontWeight: 800, cursor: "pointer", fontSize: "14px" };
const answerBoxStyle = { marginTop: "22px", display: "grid", gap: "12px" };
const explanationBoxStyle = { background: "#f0fdf4", border: "1px solid #bbf7d0", borderLeft: "5px solid #16a34a", borderRadius: "10px", padding: "14px 16px", lineHeight: 1.65, fontSize: "14px" };
const lookForBoxStyle = { background: "#eff6ff", border: "1px solid #bfdbfe", borderLeft: "5px solid #2563eb", borderRadius: "10px", padding: "14px 16px", lineHeight: 1.65, fontSize: "14px" };

function jumpButtonStyle(active: boolean): React.CSSProperties {
  return {
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    border: active ? "1px solid #0f766e" : "1px solid #dbe3e1",
    background: active ? "#0f766e" : "#fff",
    color: active ? "#fff" : "#0f766e",
    fontWeight: 800,
    fontSize: "13px",
    cursor: "pointer",
  };
}

export default function Icd10Chapter19WorkedExamplesPage() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const q = questions[current];
  const letters: Array<"A" | "B" | "C" | "D"> = ["A", "B", "C", "D"];

  function goTo(index: number) {
    setCurrent(index);
    setSelected(null);
    setShowAnswer(false);
  }

  return (
    <main style={mainStyle}>
      <HighlightToolbar />
      <header style={heroStyle}>
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 19 · WORKED EXAMPLES</p>
        <h1 style={{ margin: 0, fontSize: "clamp(24px, 5vw, 38px)" }}>Chapter 19 Worked Examples</h1>
        <p style={{ margin: "10px 0 0", fontSize: "15.5px", lineHeight: 1.5 }}>18 scenario walkthroughs with full reasoning — jump to any question to check its answer directly.</p>
      </header>

      <nav aria-label="ICD-10 navigation" style={navStyle}>
        <Link href="/icd10" style={navLinkStyle}>ICD-10 home</Link>
        <Link href="/icd10/chapter-19-guidelines-reviewer" style={navLinkStyle}>Reviewer Part 1</Link>
        <Link href="/icd10/chapter-19-guidelines-reviewer-part-2" style={navLinkStyle}>Reviewer Part 2</Link>
        <Link href="/icd10/chapter-19-practice-quiz" style={navLinkStyle}>Practice Quiz</Link>
      </nav>

      <div style={introStyle}>
        <strong>Big-picture tip:</strong> example 13 is the drug-reaction pair in one scenario — the same idea (a medication) gives an ADVERSE EFFECT when taken correctly and a POISONING when taken improperly, and example 14 adds the third type, UNDERDOSING, which is never first-listed. Sort by how the drug was taken before you pick a code.</div>

      <div style={jumpBarStyle} aria-label="Jump to question">
        {questions.map((_, i) => (
          <button key={i} type="button" style={jumpButtonStyle(i === current)} onClick={() => goTo(i)}>
            {i + 1}
          </button>
        ))}
      </div>

      <div style={cardStyle}>
        <div style={progressStyle}>
          <span>Question {current + 1} of {questions.length}</span>
          <span style={topicChipStyle}>{q.topic}</span>
        </div>

        <p style={scenarioStyle}>{q.scenario}</p>

        <div style={optionsWrapStyle}>
          {q.options.map((opt, i) => {
            const letter = letters[i];
            const isSelected = selected === letter;
            const isCorrect = letter === q.correct;
            let style = { ...buttonBaseStyle };
            if (showAnswer) {
              if (isCorrect) style = { ...style, background: "#f0fdf4", borderColor: "#16a34a", fontWeight: 700 };
              else if (isSelected) style = { ...style, background: "#fef2f2", borderColor: "#dc2626" };
            } else if (isSelected) {
              style = { ...style, borderColor: "#0f766e", background: "#f0fdfa" };
            }
            return (
              <button key={letter} type="button" style={style} onClick={() => setSelected(letter)}>
                {showAnswer && isCorrect && <span aria-hidden="true">✅</span>}
                <span>{opt}</span>
              </button>
            );
          })}
        </div>

        <div style={actionsRowStyle}>
          <button type="button" style={primaryBtnStyle} onClick={() => setShowAnswer(true)}>Show Answer</button>
          <button type="button" style={secondaryBtnStyle} onClick={() => goTo(current > 0 ? current - 1 : questions.length - 1)}>← Previous</button>
          <button type="button" style={secondaryBtnStyle} onClick={() => goTo(current < questions.length - 1 ? current + 1 : 0)}>Next →</button>
        </div>

        {showAnswer && (
          <div style={answerBoxStyle}>
            <div style={explanationBoxStyle}>
              <strong>✅ Correct answer: {q.correct}</strong>
              <p style={{ margin: "8px 0 0" }}>{q.explanation}</p>
            </div>
            <div style={lookForBoxStyle}>
              <strong>🔎 What to look for</strong>
              <p style={{ margin: "8px 0 0" }}>{q.lookFor}</p>
            </div>
          </div>
        )}
      </div>

      <div style={{ marginTop: "24px" }}>
        <Link href="/icd10" style={{ textDecoration: "none", color: "#0f766e", fontWeight: 700 }}>← Back to ICD-10-CM</Link>
      </div>
    </main>
  );
}
