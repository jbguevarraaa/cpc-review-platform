"use client";

import Link from "next/link";
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
    topic: "Screening First-Listed",
    scenario: "A well 55-year-old with no symptoms and a family history of colon cancer comes in only for a screening colonoscopy.",
    options: [
      "A. The family history code first, then the screening code",
      "B. The screening code first, with a procedure code confirming the screening, then the family history code",
      "C. Only the procedure code",
      "D. A diagnostic colonoscopy code with no Z code",
    ],
    correct: "B",
    explanation: "The reason for the encounter (screening) is first-listed, a procedure code confirms the screening was performed, and the family history code is added as an additional diagnosis to explain the need for the test.",
    lookFor: "A well patient — the visit is specifically for screening.",
  },
  {
    topic: "Screening vs. Diagnostic",
    scenario: "A patient with unexplained weight loss and blood in the stool has a colonoscopy ordered to find the cause.",
    options: [
      "A. A screening Z code first-listed",
      "B. Z12 and the symptoms together",
      "C. The signs and symptoms (weight loss, blood in the stool) to explain the reason for the test",
      "D. A history Z code",
    ],
    correct: "C",
    explanation: "Testing because of a sign or symptom is a diagnostic examination, not a screening. The sign or symptom explains the reason for the test.",
    lookFor: "Symptoms that prompted the test.",
  },
  {
    topic: "Vaccination Visit",
    scenario: "A child is brought in only to receive a scheduled immunization.",
    options: [
      "A. Z23 first-listed, plus procedure codes for the administration and the vaccine",
      "B. Z23 secondary after a diagnosis code",
      "C. A vaccine procedure code only",
      "D. Z20 exposure code",
    ],
    correct: "A",
    explanation: "Z23 is for an encounter to receive a prophylactic inoculation, and procedure codes identify the administration and the type(s) of immunization. It is only secondary when the vaccination is part of a routine preventive visit such as a well-baby visit.",
    lookFor: "The vaccine is the sole reason for the visit.",
  },
  {
    topic: "Status Code Not Used",
    scenario: "A heart transplant patient is admitted for a documented complication of the transplant (T86.2-).",
    options: [
      "A. T86.2- plus Z94.1",
      "B. Z94.1 only",
      "C. Z94.1 first, then T86.2-",
      "D. T86.2- only — the complication code already indicates the patient is a heart transplant patient",
    ],
    correct: "D",
    explanation: "A status code isn't used with a body system diagnosis code that already includes the information. The T86.2- complication code identifies the patient as a heart transplant patient.",
    lookFor: "A complication code that already contains the status.",
  },
  {
    topic: "Ventilator Weaning",
    scenario: "A patient is admitted for weaning from a mechanical ventilator.",
    options: [
      "A. A J96.1- chronic respiratory failure code, followed by Z99.11 (dependence on respirator status)",
      "B. Z99.11 first, then J96.1-",
      "C. J96.0- only",
      "D. Z99.12 only",
    ],
    correct: "A",
    explanation: "For weaning from a mechanical ventilator, assign a code from J96.1- followed by Z99.11.",
    lookFor: "'Weaning' — the fixed pair and order.",
  },
  {
    topic: "Long-Term Drug Therapy",
    scenario: "A patient takes low-dose aspirin daily, long term, as a prophylactic measure under a provider's direction.",
    options: [
      "A. No code for the aspirin",
      "B. A Z79 long-term drug therapy code",
      "C. A poisoning code",
      "D. A history code",
    ],
    correct: "B",
    explanation: "Z79 indicates a patient's continuous use of a prescribed drug (including aspirin therapy) for long-term treatment or prophylaxis.",
    lookFor: "Continuous prescribed use for the long term.",
  },
  {
    topic: "Antimicrobial Resistance",
    scenario: "A patient is admitted for a urinary tract infection that is documented as resistant to the antibiotic given.",
    options: [
      "A. Z16 first, then the infection code",
      "B. Only the infection code",
      "C. Only Z16",
      "D. The infection code first, then the Z16 resistance code",
    ],
    correct: "D",
    explanation: "Category Z16 indicates resistance to antimicrobial drug treatment, and the infection code is sequenced first.",
    lookFor: "A resistant infection — infection first.",
  },
  {
    topic: "Follow-Up After Cancer",
    scenario: "A patient completed treatment for breast cancer and no cancer remains. The patient returns for scheduled surveillance, and nothing new is found.",
    options: [
      "A. A breast cancer code",
      "B. Aftercare code Z51.1-",
      "C. Z08, followed by the personal history of malignant neoplasm code",
      "D. Only the personal history code",
    ],
    correct: "C",
    explanation: "Follow-up codes explain continuing surveillance after completed treatment. Z08 covers malignant neoplasm and is sequenced first, followed by the history code.",
    lookFor: "Completed treatment, condition no longer exists.",
  },
  {
    topic: "Recurrence at Follow-Up",
    scenario: "At the same kind of surveillance visit, the provider finds that the cancer has returned.",
    options: [
      "A. Z08 first, then the cancer code",
      "B. Z08 only",
      "C. A history code only",
      "D. The cancer diagnosis code in place of the follow-up code",
    ],
    correct: "D",
    explanation: "If a condition is found to have recurred on the follow-up visit, the diagnosis code for the condition is assigned in place of the follow-up code.",
    lookFor: "'Has returned' — the condition exists again.",
  },
  {
    topic: "Aftercare for Injury",
    scenario: "A patient returns for routine cast care and healing checks of a fractured wrist.",
    options: [
      "A. The acute fracture code with the subsequent-encounter 7th character",
      "B. An aftercare Z code",
      "C. Z09",
      "D. A status code",
    ],
    correct: "A",
    explanation: "Aftercare Z codes aren't used for injuries. Assign the acute injury code with the appropriate 7th character for a subsequent encounter.",
    lookFor: "An injury in its healing phase.",
  },
  {
    topic: "Incidental Pregnancy",
    scenario: "A patient in her second trimester is treated for an unrelated skin rash. The pregnancy in no way complicates the visit.",
    options: [
      "A. An obstetric chapter code",
      "B. Z34",
      "C. Z33.1 as a secondary code",
      "D. No pregnancy code",
    ],
    correct: "C",
    explanation: "Z33.1 is a secondary code only, for when the pregnancy is in no way complicating the reason for the visit.",
    lookFor: "A pregnancy that doesn't affect the reason for the visit.",
  },
  {
    topic: "Prenatal Visit",
    scenario: "A patient has a routine prenatal visit with no problems, at 24 weeks of gestation.",
    options: [
      "A. Z34 first-listed, and Z3A for the weeks of gestation",
      "B. Z33.1 first-listed",
      "C. An OB chapter code with Z34",
      "D. Z37",
    ],
    correct: "A",
    explanation: "Z34 (supervision of normal pregnancy) is always first-listed and isn't used with any other OB-chapter code. Z3A may give the weeks of gestation.",
    lookFor: "A normal pregnancy visit.",
  },
  {
    topic: "Prophylactic Surgery",
    scenario: "A patient with a documented BRCA gene mutation is admitted specifically for prophylactic mastectomy. There is no cancer.",
    options: [
      "A. The genetic susceptibility code first-listed",
      "B. Z40.0 first-listed, with an additional code for the genetic susceptibility risk factor",
      "C. A history code first",
      "D. A breast cancer code",
    ],
    correct: "B",
    explanation: "For prophylactic removal of an organ, the first-listed code is from Z40.0 or Z40.8, with additional code(s) for any associated risk factor such as genetic susceptibility.",
    lookFor: "Prophylactic removal, no cancer present.",
  },
  {
    topic: "Homelessness Documentation",
    scenario: "A case manager documents in the official record that a patient is homeless. The patient's physician doesn't mention it.",
    options: [
      "A. No SDOH code — only the physician's documentation counts",
      "B. A Z59.0- code cannot be used",
      "C. A Z59.0- homelessness code, based on the case manager's documentation",
      "D. Only if the patient signs a form",
    ],
    correct: "C",
    explanation: "SDOH codes in Z55–Z65 may be based on documentation from clinicians involved in the care who aren't the patient's provider — including case managers — if the documentation is in the official medical record.",
    lookFor: "A non-provider clinician's documentation of a social problem.",
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

export default function Icd10Chapter21WorkedExamplesPage() {
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
      <header style={heroStyle}>
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 21 · WORKED EXAMPLES</p>
        <h1 style={{ margin: 0, fontSize: "clamp(24px, 5vw, 38px)" }}>Chapter 21 Worked Examples</h1>
        <p style={{ margin: "10px 0 0", fontSize: "15.5px", lineHeight: 1.5 }}>14 scenario walkthroughs with full reasoning — jump to any question to check its answer directly.</p>
      </header>

      <nav aria-label="ICD-10 navigation" style={navStyle}>
        <Link href="/icd10" style={navLinkStyle}>ICD-10 home</Link>
        <Link href="/icd10/chapter-21-guidelines-reviewer" style={navLinkStyle}>Reviewer Part 1</Link>
        <Link href="/icd10/chapter-21-guidelines-reviewer-part-2" style={navLinkStyle}>Reviewer Part 2</Link>
        <Link href="/icd10/chapter-21-practice-quiz" style={navLinkStyle}>Practice Quiz</Link>
      </nav>

      <div style={introStyle}>
        <strong>Big-picture tip:</strong> examples 8 and 9 are a deliberate pair — the same surveillance visit with opposite outcomes. Nothing new found: Z08 followed by the history code. Recurrence found: code the condition itself in place of the follow-up code.</div>

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
