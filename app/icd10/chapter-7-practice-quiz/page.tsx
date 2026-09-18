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
    topic: "Glaucoma Codes",
    question: "A patient has two distinct, documented types of glaucoma affecting the same eye. How many H40 codes are assigned?",
    options: [
      "A. One code, for the more severe type only",
      "B. As many codes as needed to capture each distinct type documented",
      "C. Zero codes, since two types in one eye requires a query",
      "D. One combination code covering both types",
    ],
    correct: "B",
    explanation: "The guideline instructs assigning as many H40 codes as needed to identify the type, eye, and stage — when more than one type is genuinely documented, multiple codes are used.",
    lookFor: "\"As many codes as needed\" is the operating principle whenever more than one distinct glaucoma finding is documented.",
    eliminate: "A and D both wrongly collapse two distinct diagnoses into a single code.",
  },
  {
    topic: "Bilateral Glaucoma — Same Type/Stage",
    question: "A patient has bilateral glaucoma, same type and stage in both eyes, and a bilateral-specific code exists for that type. How many codes?",
    options: [
      "A. Two codes, one per eye",
      "B. One code — the bilateral-specific code with the stage's seventh character",
      "C. Three codes: one per eye plus one bilateral summary code",
      "D. No code, since bilateral cases require a query",
    ],
    correct: "B",
    explanation: "When both eyes share the same type and stage and a bilateral code exists, only that one bilateral code (with the correct seventh character) is assigned.",
    lookFor: "\"Same type AND same stage\" plus \"bilateral code exists\" together point to exactly one code.",
    eliminate: "A incorrectly uses two codes when one bilateral code is available and applicable.",
  },
  {
    topic: "Bilateral Glaucoma — Same Type/Stage",
    question: "A patient has bilateral glaucoma, same type and stage in both eyes, but that type falls under subcategory H40.10, which has no bilateral-specific code. How many codes?",
    options: [
      "A. Two codes, one per eye, both with the same stage character",
      "B. One code, for that glaucoma type, with the seventh character for the shared stage",
      "C. No code can be assigned without a bilateral option",
      "D. One code per eye, but using different seventh characters arbitrarily",
    ],
    correct: "B",
    explanation: "Even without a dedicated bilateral code, same type and stage in both eyes still results in just one code — the type code with the shared stage's seventh character.",
    lookFor: "The \"one code\" outcome from Topic 2 doesn't depend on whether a bilateral-specific code exists — it applies either way, as long as type and stage truly match in both eyes.",
    eliminate: "A wrongly doubles the code count just because no bilateral-specific code exists.",
  },
  {
    topic: "Bilateral Glaucoma — Different Type",
    question: "A patient's right eye has primary angle-closure glaucoma and the left eye has primary open-angle glaucoma — two genuinely different types, and the classification distinguishes laterality for these types. How many codes?",
    options: [
      "A. One bilateral code covering both types",
      "B. Two codes, one for each eye's specific type",
      "C. One code, using only the more severe type",
      "D. No code until the two types are reconciled",
    ],
    correct: "B",
    explanation: "When each eye has a genuinely different type of glaucoma and the classification distinguishes laterality, a separate code is assigned for each eye — not a shared bilateral code.",
    lookFor: "Different TYPES between the two eyes (not just different stages) is its own trigger for two separate, eye-specific codes.",
    eliminate: "A wrongly collapses two distinct diagnoses into a single bilateral code, which only applies when type AND stage match in both eyes.",
  },
  {
    topic: "Bilateral Glaucoma — Different Type/Stage",
    question: "A patient has the same glaucoma type in both eyes but a different stage in each (moderate right, severe left), under subcategory H40.20 (no laterality distinction). How many codes, and how do they differ?",
    options: [
      "A. One code, using the higher (severe) stage for both eyes",
      "B. Two codes, same type, but with different seventh characters matching each eye's own stage",
      "C. Two codes, each with a different type assigned arbitrarily",
      "D. One code, using an average stage",
    ],
    correct: "B",
    explanation: "When the same type has different stages in each eye and the classification doesn't distinguish laterality, assign a code for each eye with the seventh character matching that eye's own specific stage.",
    lookFor: "Different STAGES (even with matching type) is enough to require two codes — the sameness of type doesn't collapse this back down to one code.",
    eliminate: "A wrongly forces both eyes onto a single shared stage rather than coding each eye's true documented stage.",
  },
  {
    topic: "Glaucoma Stage Progression",
    question: "A patient is admitted with mild-stage glaucoma, and by discharge the documentation shows progression to severe stage. What stage is coded?",
    options: [
      "A. Mild, the admission-day stage",
      "B. Severe, the highest stage documented during the admission",
      "C. An average of mild and severe",
      "D. Two codes, one for each stage",
    ],
    correct: "B",
    explanation: "When glaucoma stage progresses during a single admission, the code for the highest stage documented during that admission is assigned — not the admission-day stage.",
    lookFor: "Same-admission stage progression always resolves to ONE code, at the HIGHEST stage reached.",
    eliminate: "A uses the wrong (lower, outdated) stage; D incorrectly stacks two codes for a single admission's progression.",
  },
  {
    topic: "Indeterminate vs. Unspecified Stage",
    question: "A provider's note never mentions the glaucoma's stage anywhere in the documentation. What seventh character is used?",
    options: [
      "A. \"4\", indeterminate stage",
      "B. \"0\", unspecified",
      "C. Either \"4\" or \"0\", coder's choice",
      "D. No code can be assigned without stage documentation",
    ],
    correct: "B",
    explanation: "When there simply is no documentation regarding the glaucoma's stage at all, the seventh character \"0\" (unspecified) is used — a documentation gap, not a clinical finding.",
    lookFor: "\"Never mentioned\" (a documentation gap) is the specific trigger for \"0\", not \"4\".",
    eliminate: "A wrongly applies the indeterminate-stage character, which requires an actual clinical assessment that staging isn't determinable.",
  },
  {
    topic: "Indeterminate vs. Unspecified Stage",
    question: "A provider specifically documents that the glaucoma's stage cannot be clinically determined given the current exam findings. What seventh character is used?",
    options: [
      "A. \"0\", unspecified",
      "B. \"4\", indeterminate stage",
      "C. \"9\", other specified",
      "D. No character is required in this case",
    ],
    correct: "B",
    explanation: "A provider's documented clinical conclusion that the stage cannot be determined is coded with seventh character \"4\" (indeterminate stage) — distinct from \"0\", which is for when staging was never addressed at all.",
    lookFor: "An ACTIVE clinical conclusion that stage isn't determinable (not silence on the topic) is the trigger for \"4\".",
    eliminate: "A misapplies the unspecified character to a scenario where the provider actively assessed and documented an inability to determine stage.",
  },
  {
    topic: "Blindness & Low Vision",
    question: "A patient's chart documents \"low vision, both eyes,\" with no specific visual impairment category stated. What's coded?",
    options: [
      "A. H54.7, unspecified visual loss",
      "B. H54.6-, unqualified visual loss, one eye",
      "C. H54.3, unqualified visual loss, both eyes",
      "D. Query the provider before coding",
    ],
    correct: "C",
    explanation: "When blindness/low vision of both eyes is documented but the specific impairment category isn't, H54.3 (unqualified visual loss, both eyes) is assigned.",
    lookFor: "\"Both eyes\" documented, but no impairment category, is the specific trigger for H54.3.",
    eliminate: "B applies the one-eye code family to a both-eyes scenario.",
  },
  {
    topic: "Blindness & Low Vision",
    question: "A patient's chart documents \"low vision, left eye,\" with no specific visual impairment category stated, and no mention of the right eye's status. What's coded?",
    options: [
      "A. H54.3, unqualified visual loss, both eyes",
      "B. A code from H54.6-, unqualified visual loss, one eye",
      "C. H54.7, unspecified visual loss",
      "D. Query the provider before coding",
    ],
    correct: "B",
    explanation: "When blindness/low vision in ONE eye is documented but the specific impairment category isn't, a code from H54.6- (unqualified visual loss, one eye) is assigned.",
    lookFor: "\"One eye\" specifically documented, but no impairment category, is the trigger for H54.6- — distinct from both the both-eyes code (H54.3) and the eyes-unknown code (H54.7).",
    eliminate: "A wrongly applies the both-eyes code when only one eye is documented as affected; C wrongly applies the eyes-unknown code when the affected eye is actually specified.",
  },
  {
    topic: "Blindness & Low Vision",
    question: "A patient's chart simply states \"visual loss,\" with no mention of which eye(s) are affected and no impairment category documented. What's coded?",
    options: [
      "A. H54.3, unqualified visual loss, both eyes",
      "B. H54.6-, unqualified visual loss, one eye",
      "C. H54.7, unspecified visual loss",
      "D. Query the provider before coding",
    ],
    correct: "C",
    explanation: "When it isn't even documented whether one or both eyes are affected, H54.7 (unspecified visual loss) is assigned — distinct from both the both-eyes code and the one-eye code family.",
    lookFor: "Missing information about HOW MANY eyes are affected (not just the impairment category) is the specific trigger for H54.7.",
    eliminate: "A and B both assume information about the number of eyes affected that isn't actually documented here.",
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

export default function Icd10Chapter7PracticeQuizPage() {
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
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 7 · PRACTICE QUIZ</p>
        <h1 style={{ margin: 0, fontSize: "clamp(24px, 5vw, 38px)" }}>Chapter 7 Practice Quiz</h1>
        <p style={{ margin: "10px 0 0", fontSize: "15.5px", lineHeight: 1.5 }}>11 original scenario questions with elimination tricks, covering the full glaucoma coding framework and blindness/low-vision coding.</p>
      </header>

      <nav aria-label="ICD-10 quiz navigation" style={navStyle}>
        <Link href="/icd10" style={navLinkStyle}>ICD-10-CM home</Link>
        <Link href="/icd10/chapter-7-guidelines-reviewer" style={navLinkStyle}>Guidelines Reviewer</Link>
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
