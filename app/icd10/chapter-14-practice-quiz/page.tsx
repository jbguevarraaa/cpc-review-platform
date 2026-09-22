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
    topic: "CKD Stages",
    question: "A patient's chart documents \"mild chronic kidney disease\" without a specific stage number given. What's coded?",
    options: [
      "A. N18.1, CKD stage 1",
      "B. N18.2, CKD stage 2",
      "C. N18.4, CKD stage 4",
      "D. N18.9, CKD unspecified",
    ],
    correct: "B",
    explanation: "The guideline explicitly equates stage 2 with \"mild CKD\" (N18.2) — documented severity language maps directly to its corresponding stage code.",
    lookFor: "\"Mild\" maps specifically to stage 2 — memorize the severity-word-to-stage mapping directly rather than guessing.",
    eliminate: "A wrongly assumes stage 1 is the \"mild\" stage, but the guideline's mild/moderate/severe labels specifically start at stage 2.",
  },
  {
    topic: "CKD Stages",
    question: "A patient's chart documents \"moderate CKD, subtype b.\" What's coded?",
    options: [
      "A. N18.30, CKD stage 3 unspecified",
      "B. N18.31, CKD stage 3a",
      "C. N18.32, CKD stage 3b",
      "D. N18.4, CKD stage 4",
    ],
    correct: "C",
    explanation: "Moderate CKD corresponds to stage 3, and the documented subtype \"b\" specifically maps to N18.32 (stage 3b), one of the two subdivisions of stage 3.",
    lookFor: "Stage 3 splits into two more specific subcodes (3a/3b) — match the documented subtype precisely rather than defaulting to the unspecified stage 3 code.",
    eliminate: "A ignores the documented subtype (\"b\") in favor of the less-specific unspecified stage 3 code.",
  },
  {
    topic: "CKD Stages",
    question: "A nephrology note documents \"severe chronic kidney disease.\" What's coded?",
    options: [
      "A. N18.3, CKD stage 3",
      "B. N18.4, CKD stage 4",
      "C. N18.5, CKD stage 5",
      "D. N18.6, ESRD",
    ],
    correct: "B",
    explanation: "The guideline explicitly equates stage 4 with \"severe CKD\" (N18.4).",
    lookFor: "\"Severe\" maps specifically to stage 4 — not stage 5, which has no severity-word label attached in the guideline, and not ESRD, which is a separate, distinct diagnosis.",
    eliminate: "C and D both reach for a more advanced-sounding code than what \"severe\" (specifically mapped to stage 4) actually indicates.",
  },
  {
    topic: "CKD Stage vs. ESRD",
    question: "A patient's chart documents only \"end-stage renal disease,\" with no specific numbered CKD stage mentioned anywhere. What's coded?",
    options: [
      "A. N18.5, CKD stage 5",
      "B. N18.6, ESRD",
      "C. Both N18.5 and N18.6 together",
      "D. N18.9, CKD unspecified",
    ],
    correct: "B",
    explanation: "ESRD is coded with N18.6 when the provider has documented ESRD — a distinct code from the numbered CKD stages.",
    lookFor: "\"ESRD\" documented on its own maps directly to N18.6.",
    eliminate: "A wrongly substitutes the stage 5 code for the specifically documented ESRD diagnosis.",
  },
  {
    topic: "CKD Stage vs. ESRD",
    question: "A patient's chart documents \"CKD stage 4, progressing toward ESRD,\" with ESRD also explicitly confirmed in the same note. What's coded?",
    options: [
      "A. N18.4 alone",
      "B. N18.6 alone",
      "C. Both N18.4 and N18.6 together",
      "D. N18.5 alone, as a compromise between stage 4 and ESRD",
    ],
    correct: "B",
    explanation: "When both a CKD stage and ESRD are documented together, N18.6 (ESRD) is assigned alone — the stage code is not also reported.",
    lookFor: "\"Both stage and ESRD documented together\" is the specific trigger for the ESRD-alone rule — don't stack the two codes.",
    eliminate: "C wrongly stacks both codes when the guideline specifically says to assign ESRD alone in this situation.",
  },
  {
    topic: "CKD & Kidney Transplant",
    question: "A patient with a prior kidney transplant has documented stage 3a CKD, with no complication of the transplant mentioned anywhere. What's coded?",
    options: [
      "A. N18.31 alone",
      "B. Z94.0 alone",
      "C. N18.31 plus Z94.0",
      "D. A kidney transplant complication code",
    ],
    correct: "C",
    explanation: "CKD in a transplant patient, without a documented complication, is coded with the appropriate N18 stage code PLUS Z94.0 (kidney transplant status) — the presence of CKD alone doesn't make this a transplant complication.",
    lookFor: "Transplant status + ongoing CKD, no complication documented, is a two-code combination: the stage code and Z94.0 together.",
    eliminate: "D wrongly assumes CKD in a transplant patient automatically means a transplant complication, which the guideline specifically says isn't the case.",
  },
  {
    topic: "CKD & Kidney Transplant",
    question: "A transplant patient's chart mentions declining kidney function, but it's unclear whether this reflects a true transplant complication (like rejection) or just expected, ongoing CKD despite a working transplant. What's the correct action?",
    options: [
      "A. Code it as a transplant complication by default",
      "B. Code it as plain CKD plus Z94.0 by default",
      "C. Query the provider for clarification",
      "D. Code both a transplant complication and plain CKD together",
    ],
    correct: "C",
    explanation: "If the documentation is unclear as to whether the patient has a complication of the transplant, the provider should be queried — these two scenarios are coded completely differently.",
    lookFor: "Genuine ambiguity between \"complication\" and \"just CKD\" is the specific query trigger in this topic.",
    eliminate: "A and B both guess at an answer the documentation doesn't actually support.",
  },
  {
    topic: "CKD with Other Conditions",
    question: "A patient has documented CKD stage 3b and type 2 diabetes. How is the sequencing between the two determined?",
    options: [
      "A. CKD is always sequenced first, regardless of the specific combination",
      "B. Diabetes is always sequenced first, regardless of the specific combination",
      "C. Sequencing follows the Tabular List's own conventions for that specific combination",
      "D. Sequencing is based solely on which condition was diagnosed first chronologically",
    ],
    correct: "C",
    explanation: "The sequencing of the CKD code relative to codes for other contributing conditions is based on the conventions in the Tabular List — there's no single universal rule for every combination.",
    lookFor: "\"Sequencing depends on the Tabular List conventions\" is the correct general answer whenever a question asks about CKD-plus-another-condition ordering without more specific guidance.",
    eliminate: "A and B both invent a fixed universal rule that the guideline explicitly says doesn't exist.",
  },
  {
    topic: "CKD with Other Conditions",
    question: "A patient has hypertension and CKD stage 4 documented together. Which guidance framework applies?",
    options: [
      "A. The generic CKD-with-other-conditions sequencing rule, decided case by case",
      "B. The dedicated hypertensive CKD combination-code framework (category I12/I13)",
      "C. The kidney-transplant-complication guidance",
      "D. No combination code exists; code hypertension and CKD entirely separately with no connection",
    ],
    correct: "B",
    explanation: "Hypertension combined with CKD has its own specific, dedicated combination-code framework (I12, or I13 if heart disease is also present) rather than being treated as a generic CKD-with-other-conditions sequencing question.",
    lookFor: "Hypertension + CKD specifically routes to the dedicated hypertensive CKD guidance, not the generic \"follow the Tabular List conventions\" answer used for other conditions.",
    eliminate: "A applies the generic rule to a combination that actually has its own specific, dedicated framework.",
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

export default function Icd10Chapter14PracticeQuizPage() {
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
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 14 · PRACTICE QUIZ</p>
        <h1 style={{ margin: 0, fontSize: "clamp(24px, 5vw, 38px)" }}>Chapter 14 Practice Quiz</h1>
        <p style={{ margin: "10px 0 0", fontSize: "15.5px", lineHeight: 1.5 }}>9 original scenario questions with elimination tricks, covering CKD stage classification, ESRD, kidney transplant status, and sequencing with other conditions.</p>
      </header>

      <nav aria-label="ICD-10 quiz navigation" style={navStyle}>
        <Link href="/icd10" style={navLinkStyle}>ICD-10-CM home</Link>
        <Link href="/icd10/chapter-14-guidelines-reviewer" style={navLinkStyle}>Guidelines Reviewer</Link>
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
