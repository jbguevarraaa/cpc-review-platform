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
    topic: "Sequencing",
    question: "An infant is admitted for surgical repair of a documented atrial septal defect. Down syndrome is also documented. How are the two Chapter 17 codes sequenced?",
    options: [
      "A. Down syndrome first, because it is the underlying cause",
      "B. The septal defect first (the reason for admission), Down syndrome secondary",
      "C. Chapter 17 codes may only be reported as secondary diagnoses",
      "D. Either order is acceptable",
    ],
    correct: "B",
    explanation: "A Chapter 17 code can be first-listed or secondary. Sequencing follows the reason for the encounter: the admission is for the septal defect repair, so that code is first-listed and Down syndrome is secondary.",
    lookFor: "\"Admitted for surgical repair\" identifies the reason for the encounter.",
    eliminate: "A sequences by the underlying cause instead of the reason for the encounter. C is false — Q codes can be first-listed. D ignores the reason-for-encounter rule.",
  },
  {
    topic: "Sequencing",
    question: "When can a Chapter 17 (Q00–Q99) code be the first-listed diagnosis?",
    options: [
      "A. Never — Q codes are always secondary",
      "B. Only on a newborn's birth admission",
      "C. When the anomaly is the reason for the encounter",
      "D. Only for chromosomal abnormalities",
    ],
    correct: "C",
    explanation: "A malformation, deformation, or chromosomal abnormality may be the principal/first-listed diagnosis on a record or a secondary diagnosis, depending on why the patient is being seen.",
    lookFor: "\"May be the principal/first-listed diagnosis … or a secondary diagnosis.\"",
    eliminate: "A denies a first-listed role that exists. B is backwards — the birth admission puts Z38 first. D invents a restriction.",
  },
  {
    topic: "Documentation",
    question: "A radiology report describes findings suggestive of a congenital syndrome, but the provider has not documented a syndrome diagnosis. What Chapter 17 code is assigned?",
    options: [
      "A. None — the anomaly has not been documented by the provider",
      "B. The syndrome code from Q87 that best fits the findings",
      "C. Q89.7, multiple congenital malformations",
      "D. A code from Q90–Q99 pending confirmation",
    ],
    correct: "A",
    explanation: "Chapter 17 codes are assigned when a malformation, deformation, or chromosomal abnormality is DOCUMENTED. Suggestive findings alone don't meet that trigger.",
    lookFor: "\"Has not documented a syndrome diagnosis\" — the trigger is missing.",
    eliminate: "B, C, and D all assign a congenital code without a documented diagnosis.",
  },
  {
    topic: "No Unique Code",
    question: "A provider documents a rare congenital malformation syndrome with no specific code (Q87.89 applies), with a seizure disorder and hearing loss present. What is reported?",
    options: [
      "A. Q87.89 only",
      "B. Codes for the seizure disorder and hearing loss only",
      "C. Q89.7 only",
      "D. Q87.89 plus codes for the seizure disorder and the hearing loss",
    ],
    correct: "D",
    explanation: "When the anomaly has no unique code, assign additional code(s) for any manifestations present. Q87.89 reports the syndrome, and the seizure disorder and hearing loss each get their own codes.",
    lookFor: "\"No specific code\" — the general 'other specified' code needs manifestation codes added.",
    eliminate: "A drops the manifestations. B drops the syndrome. C is the multiple-malformation code, which doesn't describe a named syndrome.",
  },
  {
    topic: "No Unique Code",
    question: "A provider documents 'multiple congenital malformations' without naming any of them, and documents hearing loss. What is reported?",
    options: [
      "A. Q89.7 plus a code for the hearing loss",
      "B. Q89.7 only",
      "C. Codes for the most likely specific malformations",
      "D. A hearing loss code only",
    ],
    correct: "A",
    explanation: "Q89.7 (multiple congenital malformations, not elsewhere classified) is a general code, so the documented manifestation — the hearing loss — is coded in addition. Specific malformations that weren't named are not guessed at.",
    lookFor: "\"Without naming any of them\" points to the general multiple-malformation code.",
    eliminate: "B omits the manifestation. C invents malformations. D omits the anomaly code.",
  },
  {
    topic: "Inherent Manifestations",
    question: "Lumbar spina bifida WITH hydrocephalus is documented. What is reported?",
    options: [
      "A. Q05.2 and Q03.9",
      "B. Q03.9 only",
      "C. Q05.7 and Q03.9",
      "D. Q05.2 only",
    ],
    correct: "D",
    explanation: "Hydrocephalus is built into the spina bifida 'with hydrocephalus' combination codes (Q05.0–Q05.4). Q05.2 alone reports it; adding a separate congenital hydrocephalus code would be redundant.",
    lookFor: "A code title that already contains the manifestation — 'with hydrocephalus.'",
    eliminate: "A and C add a separate hydrocephalus code. B drops the spina bifida. Q05.7 is the WITHOUT-hydrocephalus lumbar code.",
  },
  {
    topic: "Non-Inherent Manifestations",
    question: "The same child with lumbar spina bifida and hydrocephalus also has documented paraplegia caused by the spina bifida. What is added?",
    options: [
      "A. Nothing — paraplegia is inherent in spina bifida",
      "B. G82.2- for the paraplegia",
      "C. Q07.0- for Arnold-Chiari syndrome",
      "D. Q06.- for another spinal cord malformation",
    ],
    correct: "B",
    explanation: "The Q05 category note says to use an additional code for any associated paraplegia (G82.2-). Paraplegia is a manifestation that is not an inherent component of the code, so it is coded separately.",
    lookFor: "A 'use additional code' note pointing to the manifestation.",
    eliminate: "A treats it as inherent, but the note says otherwise. C and D add unrelated congenital codes (Arnold-Chiari type II is actually Excludes1 with Q05).",
  },
  {
    topic: "Inherent vs. Separate Malformation",
    question: "A child with Down syndrome also has a documented septal defect. How is this reported?",
    options: [
      "A. The Down syndrome code only",
      "B. The septal defect code only",
      "C. Both — the septal defect is not described by the Down syndrome code",
      "D. A single combination code covering both",
    ],
    correct: "C",
    explanation: "A specific code excludes only manifestations that are an inherent component of it. The Down syndrome code doesn't describe a septal defect, so the septal defect gets its own Chapter 17 code as well.",
    lookFor: "A separately identified malformation that the syndrome code doesn't describe.",
    eliminate: "A and B each drop a documented condition. D — there is no combination code that covers both.",
  },
  {
    topic: "Personal History",
    question: "An adult had a congenital heart defect fully repaired in childhood, with no residual defect, and is seen for a routine visit. What is assigned?",
    options: [
      "A. The Q code for the heart defect",
      "B. A Z87.7- personal history code for the corrected malformation",
      "C. Both the Q code and a Z87.7- code",
      "D. No code — history is never reported",
    ],
    correct: "B",
    explanation: "If a congenital malformation or deformity has been corrected, a personal history code (category Z87.7-) is used instead of the Q code.",
    lookFor: "\"Fully repaired … no residual defect\" — corrected.",
    eliminate: "A and C report a Q code for a defect that no longer exists. D — a history code is exactly what is used here.",
  },
  {
    topic: "Lifetime Use",
    question: "A 34-year-old has a documented congenital malformation that was never corrected and is still present. What is assigned?",
    options: [
      "A. A Z87.7- personal history code",
      "B. No code — Chapter 17 codes are for children",
      "C. The Chapter 17 Q code, because these codes may be used throughout life",
      "D. A genetic-counseling Z code",
    ],
    correct: "C",
    explanation: "Chapter 17 codes may be used throughout the life of the patient. The history code is only for malformations that have been corrected — this one is still present.",
    lookFor: "\"Never corrected and still present\" — not history.",
    eliminate: "A is only for corrected malformations. B invents an age limit. D doesn't report the condition.",
  },
  {
    topic: "Diagnosed Later in Life",
    question: "A 45-year-old is newly diagnosed by the provider with a bicuspid aortic valve. What is assigned?",
    options: [
      "A. The Chapter 17 code for bicuspid aortic valve (Q23.81)",
      "B. Only an acquired aortic valve code from the circulatory chapter",
      "C. No code — Chapter 17 codes aren't used after childhood",
      "D. A Z87.7- personal history code",
    ],
    correct: "A",
    explanation: "A congenital condition may not be identified until later in life. Whenever the provider diagnoses it, it is appropriate to assign the Chapter 17 code.",
    lookFor: "\"Newly diagnosed\" at an adult age — the code is still assigned.",
    eliminate: "B reports an acquired disorder for a congenital condition. C invents an age limit. D is for corrected malformations.",
  },
  {
    topic: "Birth Admission",
    question: "A newborn delivered vaginally in the hospital is documented with a cleft lip. What is the correct sequencing on the birth record?",
    options: [
      "A. The cleft lip code first, then Z38.00",
      "B. Z38.00 first, then the cleft lip code from Q36",
      "C. Z38.01 first, then the cleft lip code",
      "D. Z38.00 only — anomaly codes aren't added on the birth record",
    ],
    correct: "B",
    explanation: "For the birth admission, the Z38 code is principal and the congenital anomaly codes follow. Z38.00 is the single liveborn infant delivered vaginally.",
    lookFor: "\"Birth record\" — Z38 leads.",
    eliminate: "A reverses the order. C uses the cesarean delivery code. D drops a documented anomaly.",
  },
  {
    topic: "Birth Admission",
    question: "On a newborn's birth-episode chart, a coder wants to list a documented, life-threatening congenital heart defect first. Is that correct?",
    options: [
      "A. Yes — the most serious condition is listed first",
      "B. Yes, if the provider asks for it",
      "C. Yes, but only with a Chapter 16 code in front of it",
      "D. No — Z38 stays principal and the heart defect code follows it",
    ],
    correct: "D",
    explanation: "For the birth admission, the appropriate Z38 code is sequenced as the principal diagnosis, followed by any congenital anomaly codes, no matter how serious the anomaly is.",
    lookFor: "\"Birth-episode chart\" — Z38 is principal.",
    eliminate: "A and B sequence by severity or preference. C invents a Chapter 16 requirement.",
  },
  {
    topic: "Cleft Lip & Palate",
    question: "A patient (not on a birth admission) has both a cleft lip and a cleft palate documented. What is reported?",
    options: [
      "A. Q35 and Q36 together",
      "B. Q37, cleft palate with cleft lip",
      "C. Q36 only",
      "D. Q35 only",
    ],
    correct: "B",
    explanation: "Q35 (cleft palate) and Q36 (cleft lip) each carry an Excludes1 note for cleft palate with cleft lip, which has its own category, Q37. When both are present, Q37 is reported.",
    lookFor: "Both cleft lip AND cleft palate — a combination category exists.",
    eliminate: "A reports two categories that each exclude the combination. C and D drop one of the two documented conditions.",
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

export default function Icd10Chapter17PracticeQuizPage() {
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
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 17 · PRACTICE QUIZ</p>
        <h1 style={{ margin: 0, fontSize: "clamp(24px, 5vw, 38px)" }}>Chapter 17 Practice Quiz</h1>
        <p style={{ margin: "10px 0 0", fontSize: "15.5px", lineHeight: 1.5 }}>14 original scenario questions with elimination tricks, covering documentation and sequencing, general vs. specific codes, inherent and non-inherent manifestations, corrected malformations, later-in-life diagnosis, and birth-admission sequencing with Z38.</p>
      </header>

      <nav aria-label="ICD-10 quiz navigation" style={navStyle}>
        <Link href="/icd10" style={navLinkStyle}>ICD-10-CM home</Link>
        <Link href="/icd10/chapter-17-guidelines-reviewer" style={navLinkStyle}>Guidelines Reviewer</Link>
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
