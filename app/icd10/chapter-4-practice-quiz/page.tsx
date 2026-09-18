"use client";

import Link from "next/link";
import { useState } from "react";

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
    topic: "Diabetes Type",
    question: "A patient's chart documents \"diabetes mellitus\" with no type ever specified. What's the default?",
    options: [
      "A. E10.-, Type 1 diabetes mellitus",
      "B. E11.-, Type 2 diabetes mellitus",
      "C. E13.-, Other specified diabetes mellitus",
      "D. Query the provider before assigning any code",
    ],
    correct: "B",
    explanation: "When the type of diabetes isn't documented at all, the fixed default is E11.- (Type 2), regardless of age or any other clinical factor.",
    lookFor: "\"Type not documented\" is a direct trigger for the Type 2 default — no query needed for this specific situation.",
    eliminate: "A defaults to the wrong type; D is unnecessary since a specific default rule already exists for this exact scenario.",
  },
  {
    topic: "Diabetes Type",
    question: "A 68-year-old patient is newly diagnosed with type 1 diabetes. Is this coding valid, or should it default to type 2 given the patient's age?",
    options: [
      "A. Should default to type 2 because of the patient's age",
      "B. Valid as type 1 — age is not the sole determining factor for diabetes type",
      "C. Should be coded as \"other specified diabetes\" due to the unusual age",
      "D. Requires a query regardless of documentation",
    ],
    correct: "B",
    explanation: "Age alone is never the deciding factor for diabetes type — type 1 can be diagnosed at any age, despite its \"juvenile diabetes\" nickname.",
    lookFor: "Any question testing diabetes type against an unusual age is checking whether you know age is explicitly NOT the deciding factor.",
    eliminate: "A and C both incorrectly let the patient's age override clearly documented type 1.",
  },
  {
    topic: "Type 2 in Remission",
    question: "A provider documents a patient's type 2 diabetes as \"resolved.\" Can E11.A (in remission) be assigned?",
    options: [
      "A. Yes, \"resolved\" and \"in remission\" are interchangeable",
      "B. No — \"resolved\" is not synonymous with \"remission\"; query the provider",
      "C. Yes, but only with modifier documentation",
      "D. No, E11.A can never be assigned regardless of documentation",
    ],
    correct: "B",
    explanation: "The guideline explicitly states \"resolved\" is not synonymous with remission — if documentation is unclear about actual remission status, the provider should be queried.",
    lookFor: "\"Resolved\" is a specific wording trap — it looks like it should mean remission, but the guideline explicitly says otherwise.",
    eliminate: "A wrongly treats the two terms as interchangeable, which the guideline directly contradicts.",
  },
  {
    topic: "Z79 Drug-Use Codes",
    question: "A patient with type 2 diabetes is on both an oral hypoglycemic drug and insulin, both long-term. What additional code(s) are assigned?",
    options: [
      "A. Z79.4 only",
      "B. Z79.84 only",
      "C. Z79.4 and Z79.84 together",
      "D. Z79.85 only",
    ],
    correct: "C",
    explanation: "When a patient is on both oral hypoglycemics and insulin long-term, both Z79.4 (insulin) and Z79.84 (oral hypoglycemics) are assigned together.",
    lookFor: "Two different long-term drug types documented = two Z79 codes together, not just one.",
    eliminate: "A and B each capture only one of the two medications actually documented.",
  },
  {
    topic: "Z79 Drug-Use Codes",
    question: "A patient receives a single dose of insulin today solely to bring their blood sugar under control during this visit, with no other long-term insulin use. Is Z79.4 assigned?",
    options: [
      "A. Yes, any insulin administration triggers Z79.4",
      "B. No — Z79.4 is not assigned for temporary, in-visit insulin dosing",
      "C. Yes, but only with modifier 25",
      "D. No, because Z79.4 requires oral hypoglycemics too",
    ],
    correct: "B",
    explanation: "Z79.4 is specifically excluded for insulin given only temporarily to control blood sugar during a single encounter — it's reserved for genuine long-term, ongoing use.",
    lookFor: "\"Temporary\" or \"to control blood sugar during this encounter\" is the specific exclusion language for Z79.4.",
    eliminate: "A wrongly assumes any insulin dose triggers the code, ignoring the temporary-use exclusion.",
  },
  {
    topic: "Insulin Pump Malfunction",
    question: "An insulin pump malfunctions and delivers too little insulin, causing hyperglycemia. What's the second code, after the T85.6- mechanical complication code?",
    options: [
      "A. T38.3X1-, poisoning by insulin, accidental",
      "B. T38.3X6-, underdosing of insulin",
      "C. E11.65, type 2 diabetes with hyperglycemia",
      "D. Z79.4, long-term use of insulin",
    ],
    correct: "B",
    explanation: "An underdose from pump failure is coded T85.6- first, then T38.3X6- (underdosing of insulin) — distinct from the overdose pairing, which uses T38.3X1- instead.",
    lookFor: "\"Too little insulin\" from a pump malfunction is the underdose scenario, which pairs with the X6- code, not the X1- (poisoning) code.",
    eliminate: "A is the overdose pairing, not underdose; C and D are each missing the required T85.6- mechanical complication code that must lead.",
  },
  {
    topic: "Insulin Pump Malfunction",
    question: "An insulin pump malfunctions and delivers too MUCH insulin, causing hypoglycemia. What's the second code, after T85.6-?",
    options: [
      "A. T38.3X6-, underdosing of insulin",
      "B. T38.3X1-, poisoning by insulin, accidental",
      "C. E11.649, type 2 diabetes with hypoglycemia",
      "D. No second code needed",
    ],
    correct: "B",
    explanation: "An overdose from pump failure is coded T85.6- first, then T38.3X1- (poisoning by insulin, accidental/unintentional) — the mirror-image pairing from the underdose scenario.",
    lookFor: "\"Too much insulin\" is the overdose scenario, pairing with the X1- (poisoning) code, not X6- (underdosing).",
    eliminate: "A applies the underdose code to an overdose scenario — exactly the trap this question/its sibling question test.",
  },
  {
    topic: "Secondary Diabetes",
    question: "A patient develops diabetes following surgical removal of their entire pancreas due to cancer. What's the required code combination?",
    options: [
      "A. E13 code alone",
      "B. E89.1, a category E13 code, and Z90.41 together",
      "C. E08 code alone",
      "D. E89.1 alone",
    ],
    correct: "B",
    explanation: "Postpancreatectomy diabetes is a specific three-code combination: E89.1 (postprocedural hypoinsulinemia), a category E13 code as principal/first-listed, and Z90.41 (acquired absence of pancreas) as an additional code.",
    lookFor: "\"Diabetes after pancreas removal\" (postpancreatectomy) is a named, memorize-outright three-code combination.",
    eliminate: "A, C, and D each drop at least one required code from the specific three-part combination.",
  },
  {
    topic: "Obesity",
    question: "A patient's provider documents both class 3 obesity and morbid obesity in the same note, describing the same condition. How many obesity codes are assigned?",
    options: [
      "A. Both the class 3 code and the morbid obesity code together",
      "B. Only the class 3 obesity code, since it's more specific",
      "C. Only the morbid obesity code",
      "D. Neither — the documentation is considered contradictory",
    ],
    correct: "B",
    explanation: "When both class 3 obesity and morbid obesity are documented for the same condition, only the class 3 obesity code is assigned, since it's considered the more specific finding.",
    lookFor: "\"Both documented for the same condition\" resolves to the single more specific code, not both stacked together.",
    eliminate: "A incorrectly stacks both codes, which the guideline specifically says not to do in this situation.",
  },
  {
    topic: "Obesity",
    question: "Can a coder assign an obesity class code (E66.81) based solely on a documented BMI value, without the provider stating the class?",
    options: [
      "A. Yes, BMI alone is sufficient",
      "B. No — the obesity class itself must be documented by the provider before the code can be assigned",
      "C. Yes, but only for BMI over 40",
      "D. No, obesity class codes are never used regardless of documentation",
    ],
    correct: "B",
    explanation: "Obesity class codes require the class to be documented in the medical record by the provider — a coder cannot calculate or infer the class purely from a BMI number.",
    lookFor: "\"BMI documented but class not stated\" is the specific trap for E66.81 — BMI alone isn't enough.",
    eliminate: "A and C both wrongly allow a coder to infer class from BMI alone, which the guideline doesn't permit.",
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

export default function Icd10Chapter4PracticeQuizPage() {
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
      <header style={heroStyle}>
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 4 · PRACTICE QUIZ</p>
        <h1 style={{ margin: 0, fontSize: "clamp(24px, 5vw, 38px)" }}>Chapter 4 Practice Quiz</h1>
        <p style={{ margin: "10px 0 0", fontSize: "15.5px", lineHeight: 1.5 }}>10 original scenario questions with elimination tricks, covering diabetes type/remission/drug-use/pump-malfunction/secondary-cause rules and obesity coding.</p>
      </header>

      <nav aria-label="ICD-10 quiz navigation" style={navStyle}>
        <Link href="/icd10" style={navLinkStyle}>ICD-10-CM home</Link>
        <Link href="/icd10/chapter-4-guidelines-reviewer" style={navLinkStyle}>Guidelines Reviewer</Link>
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
