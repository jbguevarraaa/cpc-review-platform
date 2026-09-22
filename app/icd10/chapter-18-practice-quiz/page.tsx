"use client";

import Link from "next/link";
import { useState } from "react";
import { HighlightToolbar } from "../../cpt/surgery/_digestive/highlighter";

type Question = {
  topic: string;
  question: string;
  options: string[];
  correct: "A" | "B" | "C" | "D";
  explanation: string;
  lookFor: string;
  eliminate: string;
};

const questions: Question[] = [
  {
    topic: "Symptom Codes",
    question: "A patient presents with abdominal pain, and no definitive diagnosis has been established by discharge. What's coded?",
    options: [
      "A. The abdominal pain symptom code",
      "B. Nothing — wait until a diagnosis is confirmed",
      "C. A \"rule out\" diagnosis code",
      "D. The provider must be queried before any code is assigned",
    ],
    correct: "A",
    explanation: "Symptom codes are entirely acceptable on their own whenever a related definitive diagnosis hasn't actually been confirmed yet.",
    lookFor: "\"No definitive diagnosis reached\" is the exact trigger for coding the symptom on its own.",
    eliminate: "B and C both describe workarounds that aren't how ICD-10-CM actually works — coding the symptom is the correct, direct answer, not a placeholder.",
  },
  {
    topic: "Symptom Codes",
    question: "A patient is diagnosed with pneumonia, and the documentation also lists \"cough\" as a symptom. Should cough get its own additional code?",
    options: [
      "A. Yes, always code every documented symptom separately",
      "B. No — cough is routinely associated with pneumonia, so it isn't separately coded unless instructed",
      "C. Only if the cough is severe",
      "D. Only if cough was the reason for the visit",
    ],
    correct: "B",
    explanation: "Symptoms that are routinely/typically part of a diagnosis aren't given their own additional code unless the classification specifically says to.",
    lookFor: "Ask whether the symptom is a textbook-expected part of the diagnosis. If yes, it doesn't get its own code.",
    eliminate: "C and D both invent conditions (severity, reason for visit) that aren't actually part of this rule — the deciding factor is simply whether the symptom is routine for that diagnosis.",
  },
  {
    topic: "Repeated Falls",
    question: "A patient fell today, and the care team is actively investigating why it happened. What's coded?",
    options: [
      "A. Z91.81, History of falling",
      "B. R29.6, Repeated falls",
      "C. Both codes automatically, every time",
      "D. Neither, until the cause is determined",
    ],
    correct: "B",
    explanation: "R29.6 is specifically for an encounter where a recent fall is being investigated.",
    lookFor: "\"Fell today\" + \"cause being investigated\" is the signature of R29.6.",
    eliminate: "A is a trap because it describes a past pattern/risk factor, not today's fall being worked up.",
  },
  {
    topic: "Repeated Falls",
    question: "The same patient from the previous question also has a documented history of multiple prior falls and is considered an ongoing fall risk. What's coded now?",
    options: [
      "A. R29.6 only",
      "B. Z91.81 only",
      "C. R29.6 and Z91.81 together",
      "D. Neither code — only the injury from today's fall",
    ],
    correct: "C",
    explanation: "R29.6 (today's fall being investigated) and Z91.81 (the standing history/risk) describe two different things and may both be assigned together when both apply.",
    lookFor: "Whenever a scenario mentions both a current fall AND a documented pattern of past falls, expect both codes together.",
    eliminate: "A and B each only tell half the story — the scenario explicitly supports both pieces of information.",
  },
  {
    topic: "Coma",
    question: "A patient with a documented traumatic brain injury has only a Glasgow coma scale total score recorded — not the individual eye/verbal/motor components. What's coded?",
    options: [
      "A. All three individual component codes, estimated from the total",
      "B. R40.24–, Glasgow coma scale, total score",
      "C. R40.20, Unspecified coma",
      "D. R40.2A, Nontraumatic coma due to underlying condition",
    ],
    correct: "B",
    explanation: "When only the total score is documented (not the individual components), R40.24– is the correct code.",
    lookFor: "\"Total score only, no individual components documented\" points straight to R40.24–.",
    eliminate: "A invents data that wasn't documented; D is wrong because this is a traumatic cause, and R40.2A is specifically for nontraumatic coma.",
  },
  {
    topic: "Coma",
    question: "A patient is in a medically induced coma in the ICU for ventilator management. How should the coma be coded?",
    options: [
      "A. R40.20, Unspecified coma",
      "B. The appropriate individual Glasgow component codes",
      "C. R40.24–, total score",
      "D. None of the R40.2x codes — this scenario is excluded from the entire family",
    ],
    correct: "D",
    explanation: "Medically induced or sedated states are excluded from the entire R40.2x code family, regardless of how the coma would otherwise be scored.",
    lookFor: "\"Medically induced\" or \"sedated\" is an automatic stop sign for this whole code family — don't try to score it at all.",
    eliminate: "A, B, and C all try to apply a coma code to a situation the guideline explicitly excludes.",
  },
  {
    topic: "SIRS (Non-Infectious)",
    question: "A patient with severe pancreatitis develops SIRS, with no infection documented anywhere in the record. What's coded?",
    options: [
      "A. The pancreatitis code, followed by R65.10",
      "B. R65.10 alone",
      "C. The pancreatitis code, followed by R65.2 (severe sepsis)",
      "D. The pancreatitis code, followed by A41.9 (sepsis)",
    ],
    correct: "A",
    explanation: "SIRS from a noninfectious trigger (like pancreatitis) is coded as the underlying condition first, then R65.10 (no organ dysfunction documented) or R65.11 (with organ dysfunction).",
    lookFor: "No infection documented + a noninfectious trigger (trauma, cancer, pancreatitis) = R65.1x, not the sepsis codes.",
    eliminate: "C and D both wrongly pull in the sepsis code family (R65.2x/A41.9), which only applies when an actual infection is present.",
  },
  {
    topic: "SIRS (Non-Infectious)",
    question: "A trauma patient develops SIRS and acute kidney injury, but it's unclear whether the kidney injury is related to the SIRS or is a direct effect of the trauma itself. What should the coder do?",
    options: [
      "A. Assign R65.11 and the AKI code automatically",
      "B. Query the provider before assigning R65.11 with the organ dysfunction code",
      "C. Assign R65.10 and skip the AKI code entirely",
      "D. Code the AKI only and skip SIRS altogether",
    ],
    correct: "B",
    explanation: "When it's unclear whether an organ dysfunction is actually tied to the SIRS or due to another condition, the provider should be queried before coding R65.11.",
    lookFor: "\"Unclear whether X is related to Y\" is always a query trigger in this chapter, not a guess to be made by the coder.",
    eliminate: "A skips the query step entirely; C and D each drop part of the documented picture without justification.",
  },
  {
    topic: "Death NOS",
    question: "A patient is brought to the emergency department already deceased, cause unknown, and is pronounced dead on arrival. What's coded?",
    options: [
      "A. R99, Ill-defined and unknown cause of mortality",
      "B. A code based on the most likely suspected cause",
      "C. No code is needed — it's only a discharge disposition",
      "D. A Z code specific to death notification",
    ],
    correct: "A",
    explanation: "R99 is reserved for exactly this narrow scenario: a patient already dead on arrival at a facility, pronounced dead there, with an unknown cause.",
    lookFor: "\"Already dead on arrival\" + \"pronounced dead at the facility\" + \"cause unknown\" is the precise signature of R99.",
    eliminate: "C incorrectly treats R99 as if it only describes discharge status rather than being an actual diagnosis code to assign.",
  },
  {
    topic: "Death NOS",
    question: "A hospitalized patient dies during their inpatient stay, and the cause hasn't been fully determined at the time of documentation. Is R99 appropriate here?",
    options: [
      "A. Yes, since the cause is unknown",
      "B. No — R99 is reserved for the dead-on-arrival scenario, not routine inpatient deaths",
      "C. Yes, but only if it's the patient's first admission",
      "D. Yes, in combination with the treating diagnosis code",
    ],
    correct: "B",
    explanation: "R99 does not represent a general \"discharge disposition of death\" — it's specifically for patients already dead on arrival, not for deaths that occur during an inpatient stay.",
    lookFor: "An inpatient death (as opposed to a dead-on-arrival presentation) should never trigger R99, no matter how uncertain the cause is.",
    eliminate: "A, C, and D all try to stretch R99 beyond its narrow intended use — none of the added conditions (first admission, combining with treating diagnosis) actually make it valid here.",
  },
  {
    topic: "NIHSS Stroke Scale",
    question: "A patient is admitted with an acute ischemic stroke, and an initial NIHSS score is documented in the ED. What's the correct sequencing?",
    options: [
      "A. The NIHSS code first, then the stroke diagnosis code",
      "B. The stroke diagnosis code first, then the NIHSS code",
      "C. The NIHSS code only — the stroke code isn't needed",
      "D. Either order is acceptable",
    ],
    correct: "B",
    explanation: "NIHSS stroke scale codes are always sequenced after the acute stroke diagnosis code(s), never before.",
    lookFor: "Same pattern as the coma scale — any severity/scale code in this chapter follows the actual diagnosis, it never leads.",
    eliminate: "C drops the actual diagnosis code entirely, which is never correct; D wrongly assumes sequencing is flexible when it's actually fixed.",
  },
  {
    topic: "NIHSS Stroke Scale",
    question: "A patient's NIHSS score is recorded multiple times over their admission as their condition improves, and the facility has chosen to track that trend. What's required at minimum?",
    options: [
      "A. Only the very last score before discharge may ever be coded",
      "B. The initial documented score must be reported at minimum; the facility may optionally report additional scores, always sequenced after the stroke code",
      "C. Only the highest severity score is reported",
      "D. NIHSS scores replace the need for a stroke diagnosis code",
    ],
    correct: "B",
    explanation: "At minimum, the initial documented score is reported; a facility may choose to capture and report multiple scores if desired, but the stroke diagnosis code always comes first.",
    lookFor: "\"At minimum\" language in the guideline signals a floor, not a ceiling — more scores can be reported, but the initial one is the non-negotiable baseline.",
    eliminate: "A, C, and D each invent a restriction or substitution that isn't part of the actual rule.",
  },
];

const mainStyle = { maxWidth: "900px", margin: "0 auto", padding: "36px 24px 64px", minHeight: "100vh", background: "#f6f9f9", color: "#141d1c", fontFamily: "Arial, sans-serif" };
const heroStyle = { background: "linear-gradient(135deg, #101719, #0f766e)", color: "white", padding: "40px 36px", borderRadius: "18px", marginBottom: "24px", boxShadow: "0 12px 28px rgba(16,23,25,0.22)" };
const kickerStyle = { margin: "0 0 10px", color: "#99f6e4", fontWeight: 800, letterSpacing: "0.08em", fontSize: "13px" };
const navStyle = { display: "flex", flexWrap: "wrap" as const, gap: "10px", marginBottom: "22px" };
const navLinkStyle = { textDecoration: "none", color: "#0f766e", background: "#ffffff", border: "1px solid #dbe3e1", borderRadius: "999px", padding: "9px 14px", fontWeight: 700, fontSize: "13.5px" };
const cardStyle = { background: "#ffffff", border: "1px solid #e3e7e6", borderRadius: "14px", padding: "26px 28px", boxShadow: "0 5px 16px rgba(16,23,25,0.06)" };
const progressStyle = { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px", fontSize: "13px", color: "#5b6b68", fontWeight: 700 };
const topicChipStyle = { background: "#f0fdfa", border: "1px solid #99f6e4", color: "#0f766e", borderRadius: "999px", padding: "4px 12px", fontWeight: 800, fontSize: "12px" };
const questionStyle = { fontSize: "17px", lineHeight: 1.6, margin: "14px 0 18px", color: "#111827" };
const optionsWrapStyle = { display: "grid", gap: "10px" };
const buttonBaseStyle: React.CSSProperties = { textAlign: "left", padding: "13px 16px", borderRadius: "10px", border: "1px solid #dbe3e1", background: "#fff", cursor: "pointer", fontSize: "14.5px", lineHeight: 1.5 };
const actionsRowStyle = { display: "flex", gap: "12px", marginTop: "20px", flexWrap: "wrap" as const };
const primaryBtnStyle = { padding: "11px 22px", borderRadius: "999px", border: "none", background: "#0f766e", color: "#fff", fontWeight: 800, cursor: "pointer", fontSize: "14px" };
const secondaryBtnStyle = { padding: "11px 22px", borderRadius: "999px", border: "1px solid #dbe3e1", background: "#fff", color: "#0f766e", fontWeight: 800, cursor: "pointer", fontSize: "14px" };
const answerBoxStyle = { marginTop: "22px", display: "grid", gap: "12px" };
const explanationBoxStyle = { background: "#f0fdf4", border: "1px solid #bbf7d0", borderLeft: "5px solid #16a34a", borderRadius: "10px", padding: "14px 16px", lineHeight: 1.65, fontSize: "14px" };
const lookForBoxStyle = { background: "#eff6ff", border: "1px solid #bfdbfe", borderLeft: "5px solid #2563eb", borderRadius: "10px", padding: "14px 16px", lineHeight: 1.65, fontSize: "14px" };
const eliminateBoxStyle = { background: "#fef2f2", border: "1px solid #fecaca", borderLeft: "5px solid #dc2626", borderRadius: "10px", padding: "14px 16px", lineHeight: 1.65, fontSize: "14px" };
const scoreStyle = { textAlign: "center" as const, padding: "40px 20px" };

export default function Icd10Chapter18PracticeQuizPage() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState<boolean[]>(new Array(questions.length).fill(false));
  const [finished, setFinished] = useState(false);

  const q = questions[current];
  const letters: Array<"A" | "B" | "C" | "D"> = ["A", "B", "C", "D"];

  function checkAnswer() {
    if (!selected) return;
    setShowAnswer(true);
    if (!answered[current]) {
      const nextAnswered = [...answered];
      nextAnswered[current] = true;
      setAnswered(nextAnswered);
      if (selected === q.correct) setScore((s) => s + 1);
    }
  }

  function next() {
    if (current < questions.length - 1) {
      setCurrent((c) => c + 1);
      setSelected(null);
      setShowAnswer(false);
    } else {
      setFinished(true);
    }
  }

  function restart() {
    setCurrent(0);
    setSelected(null);
    setShowAnswer(false);
    setScore(0);
    setAnswered(new Array(questions.length).fill(false));
    setFinished(false);
  }

  return (
    <main style={mainStyle}>
      <HighlightToolbar />
      <header style={heroStyle}>
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 18 · PRACTICE QUIZ</p>
        <h1 style={{ margin: 0, fontSize: "clamp(24px, 5vw, 38px)" }}>Chapter 18 Practice Quiz</h1>
        <p style={{ margin: "10px 0 0", fontSize: "15.5px", lineHeight: 1.5 }}>12 original scenario questions with elimination tricks, covering symptom codes, falls, coma, SIRS, death NOS, and the NIHSS stroke scale.</p>
      </header>

      <nav aria-label="ICD-10 quiz navigation" style={navStyle}>
        <Link href="/icd10" style={navLinkStyle}>ICD-10-CM home</Link>
        <Link href="/icd10/chapter-18-guidelines-reviewer" style={navLinkStyle}>Guidelines Reviewer</Link>
      </nav>

      <div style={cardStyle}>
        {finished ? (
          <div style={scoreStyle}>
            <h2 style={{ margin: "0 0 10px" }}>Quiz Complete</h2>
            <p style={{ fontSize: "40px", fontWeight: 800, color: "#0f766e", margin: "0 0 10px" }}>{score} / {questions.length}</p>
            <p style={{ color: "#5b6b68", marginBottom: "22px" }}>
              {score === questions.length ? "Perfect score — this chapter is solid." : score / questions.length >= 0.7 ? "Good run — review the ones you missed, then try again." : "Worth another pass — revisit the Guidelines Reviewer for the topics you missed."}
            </p>
            <button type="button" style={primaryBtnStyle} onClick={restart}>Restart Quiz</button>
          </div>
        ) : (
          <>
            <div style={progressStyle}>
              <span>Question {current + 1} of {questions.length}</span>
              <span style={topicChipStyle}>{q.topic}</span>
            </div>

            <p style={questionStyle}>{q.question}</p>

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
                  <button key={letter} type="button" style={style} onClick={() => !showAnswer && setSelected(letter)}>
                    {opt}
                  </button>
                );
              })}
            </div>

            <div style={actionsRowStyle}>
              {!showAnswer ? (
                <button type="button" style={primaryBtnStyle} onClick={checkAnswer} disabled={!selected}>Check Answer</button>
              ) : (
                <button type="button" style={primaryBtnStyle} onClick={next}>{current < questions.length - 1 ? "Next Question →" : "See Final Score"}</button>
              )}
              <button type="button" style={secondaryBtnStyle} onClick={restart}>Restart</button>
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
                <div style={eliminateBoxStyle}>
                  <strong>❌ How to eliminate wrong answers</strong>
                  <p style={{ margin: "8px 0 0" }}>{q.eliminate}</p>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      <div style={{ marginTop: "24px" }}>
        <Link href="/icd10" style={{ textDecoration: "none", color: "#0f766e", fontWeight: 700 }}>← Back to ICD-10-CM</Link>
      </div>
    </main>
  );
}
