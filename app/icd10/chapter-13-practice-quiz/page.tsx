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
    topic: "Bone vs. Joint",
    question: "Documentation specifies avascular necrosis of the head of the right femur, which forms part of the hip joint. How is the site designated?",
    options: [
      "A. As the hip joint",
      "B. As multiple sites",
      "C. As the bone (femur), not the joint",
      "D. Either bone or joint, at the coder's choice",
    ],
    correct: "C",
    explanation: "For conditions such as avascular necrosis of bone (M87) and osteoporosis (M80, M81), the affected portion may be at the joint, but the site designation is the BONE, not the joint.",
    lookFor: "A bone condition located at the end of the bone near a joint.",
    eliminate: "A uses the joint the guideline says not to use. B applies when sites aren't documented. D leaves a choice the guideline doesn't give.",
  },
  {
    topic: "Multiple Sites",
    question: "A provider documents joint involvement as 'multiple joints' without naming any individual joint. What is assigned?",
    options: [
      "A. The appropriate 'multiple sites' code",
      "B. A code for the most commonly affected joint",
      "C. A separate code for each joint the coder assumes are involved",
      "D. An unspecified code from another chapter",
    ],
    correct: "A",
    explanation: "Codes describing specified sites are assigned individually by site when documented. When the specific site(s) are not documented, assign the appropriate code for 'multiple sites.'",
    lookFor: "Individual sites aren't named.",
    eliminate: "B and C guess at sites that weren't documented. D moves out of the chapter without a reason.",
  },
  {
    topic: "Acute vs. Chronic",
    question: "A patient has a current, acute injury to a bone. Where is it coded?",
    options: [
      "A. Chapter 13, Diseases of the Musculoskeletal System",
      "B. Chapter 18, symptoms and signs",
      "C. Chapter 20, external causes",
      "D. The appropriate injury code in Chapter 19",
    ],
    correct: "D",
    explanation: "Any current, acute injury should be coded to the appropriate injury code from Chapter 19. Chronic or recurrent conditions are generally coded from Chapter 13.",
    lookFor: "'Current, acute injury.'",
    eliminate: "A is for healed-injury results and recurrent conditions. B is for symptoms. C is never first-listed and doesn't describe the injury itself.",
  },
  {
    topic: "Acute vs. Chronic",
    question: "A bone or joint condition is the result of an injury that has healed. Where is it usually found?",
    options: [
      "A. Chapter 19",
      "B. Chapter 13",
      "C. Chapter 21",
      "D. Chapter 18",
    ],
    correct: "B",
    explanation: "Bone, joint, or muscle conditions that are the result of a healed injury are usually found in Chapter 13, as are recurrent bone, joint, or muscle conditions.",
    lookFor: "'Healed injury' or 'recurrent.'",
    eliminate: "A is for current, acute injuries. C and D don't classify musculoskeletal conditions.",
  },
  {
    topic: "Unclear Documentation",
    question: "It is difficult to tell from the record whether a condition is a current acute injury or a chronic musculoskeletal condition. What is done?",
    options: [
      "A. Query the provider",
      "B. Always assume it's acute",
      "C. Always assume it's chronic",
      "D. Code from Chapter 18",
    ],
    correct: "A",
    explanation: "If it's difficult to determine from the documentation which code best describes a condition, query the provider.",
    lookFor: "'Difficult to determine from the documentation.'",
    eliminate: "B and C guess. D uses a symptom chapter when a query is the direction given.",
  },
  {
    topic: "Pathologic Fracture — 7th Character A",
    question: "A patient with a pathologic fracture is still in active treatment and is seen for the first time by a new orthopedic provider. Which 7th character applies?",
    options: [
      "A. D, because the provider is new",
      "B. A subsequent-encounter character for healing problems",
      "C. S",
      "D. A, because active treatment continues",
    ],
    correct: "D",
    explanation: "7th character A is used as long as the patient is receiving active treatment for the fracture. The character is based on active treatment, not on whether the provider is seeing the patient for the first time.",
    lookFor: "'Still in active treatment' plus a 'new provider' distractor.",
    eliminate: "A lets the provider change the character. B and C don't apply while active treatment continues.",
  },
  {
    topic: "Pathologic Fracture — 7th Character D",
    question: "A patient has completed active treatment for a pathologic fracture and is receiving routine care during healing. Which 7th character applies?",
    options: [
      "A. A",
      "B. S",
      "C. D",
      "D. A code from another chapter",
    ],
    correct: "C",
    explanation: "7th character D is used for encounters after active treatment is complete, when the patient is receiving routine care for the fracture during the healing or recovery phase.",
    lookFor: "'Completed active treatment' and 'routine care.'",
    eliminate: "A is for active treatment. B is for sequela. D isn't needed for routine healing care.",
  },
  {
    topic: "Healing Problems",
    question: "After active treatment of a pathologic fracture ends, the patient is seen for a nonunion. Which 7th character is used?",
    options: [
      "A. A",
      "B. The other subsequent-encounter 7th character listed under the subcategory for healing problems such as nonunion",
      "C. D, because it is routine care",
      "D. No 7th character applies",
    ],
    correct: "B",
    explanation: "The other 7th characters listed under each subcategory in the Tabular List are for subsequent encounters for treatment of problems associated with the healing, such as malunions, nonunions, and sequelae.",
    lookFor: "A healing problem, not routine healing.",
    eliminate: "A is for active treatment. C is for uncomplicated routine care. D — 7th characters are required for these codes.",
  },
  {
    topic: "Surgical Complications",
    question: "During healing of a fracture repaired surgically, the patient has a complication of the surgical treatment. How is it coded?",
    options: [
      "A. A fracture code with 7th character A",
      "B. A fracture code with 7th character D",
      "C. A sequela code",
      "D. The appropriate complication code",
    ],
    correct: "D",
    explanation: "Care for complications of surgical treatment for fracture repairs during the healing or recovery phase should be coded with the appropriate complication codes.",
    lookFor: "A complication of surgery, not of fracture healing.",
    eliminate: "A and B use fracture 7th characters. C is for conditions resulting from the injury itself.",
  },
  {
    topic: "Osteoporosis with Fracture",
    question: "A patient with known osteoporosis fractures a bone after a minor fall that wouldn't usually break a normal, healthy bone. Which category is used?",
    options: [
      "A. M80, osteoporosis with current pathological fracture — not a traumatic fracture code",
      "B. A traumatic fracture code from Chapter 19",
      "C. M81",
      "D. Both M80 and a traumatic fracture code",
    ],
    correct: "A",
    explanation: "A code from category M80, not a traumatic fracture code, should be used for any patient with known osteoporosis who suffers a fracture, even after a minor fall or trauma that wouldn't usually break a normal, healthy bone.",
    lookFor: "'Known osteoporosis' plus a minor fall.",
    eliminate: "B and D add a traumatic fracture code. C is for osteoporosis WITHOUT a current fracture.",
  },
  {
    topic: "Osteoporosis without Fracture",
    question: "A patient has osteoporosis with no current pathologic fracture but had an osteoporotic fracture in the past. What is reported?",
    options: [
      "A. M80 for the past fracture",
      "B. M81, followed by Z87.310 (personal history of healed osteoporosis fracture)",
      "C. Only Z87.310",
      "D. A traumatic fracture code with 7th character S",
    ],
    correct: "B",
    explanation: "M81 is for patients with osteoporosis who don't currently have a pathologic fracture due to it, even if they've had a fracture in the past. For a history of osteoporosis fractures, Z87.310 follows the M81 code.",
    lookFor: "Osteoporosis with a fracture only in the past.",
    eliminate: "A is for a CURRENT fracture. C leaves out the osteoporosis. D is for injury sequelae.",
  },
  {
    topic: "Osteoporosis — Site",
    question: "Which statement about site in the osteoporosis categories is correct?",
    options: [
      "A. M81 codes identify the bone involved",
      "B. Osteoporosis affects only the bone where the fracture occurs",
      "C. Site isn't a component of M81 because osteoporosis is systemic, and the site codes under M80 identify the site of the fracture, not the osteoporosis",
      "D. M80 and M81 both identify the site of the osteoporosis",
    ],
    correct: "C",
    explanation: "Osteoporosis is a systemic condition, so site isn't a component of M81 (osteoporosis without current pathological fracture). The site codes under M80 identify the site of the fracture, not the osteoporosis.",
    lookFor: "'Systemic' — all bones are affected.",
    eliminate: "A and D give M81 a site. B treats osteoporosis as local.",
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

export default function Icd10Chapter13PracticeQuizPage() {
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
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 13 · PRACTICE QUIZ</p>
        <h1 style={{ margin: 0, fontSize: "clamp(24px, 5vw, 38px)" }}>Chapter 13 Practice Quiz</h1>
        <p style={{ margin: "10px 0 0", fontSize: "15.5px", lineHeight: 1.5 }}>12 original scenario questions with elimination tricks, covering bone vs. joint sites, acute vs. chronic conditions, pathologic fracture 7th characters, and osteoporosis (M80 vs. M81).</p>
      </header>

      <nav aria-label="ICD-10 quiz navigation" style={navStyle}>
        <Link href="/icd10" style={navLinkStyle}>ICD-10-CM home</Link>
        <Link href="/icd10/chapter-13-guidelines-reviewer" style={navLinkStyle}>Guidelines Reviewer</Link>
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
