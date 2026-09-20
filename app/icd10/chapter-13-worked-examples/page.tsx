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
    topic: "Bone Site for Avascular Necrosis",
    scenario: "A radiology-confirmed diagnosis of avascular necrosis of the head of the left femur is documented.",
    options: [
      "A. Code to the bone (femur), not the hip joint",
      "B. Code to the hip joint",
      "C. Use a 'multiple sites' code",
      "D. Use a symptom code for hip pain",
    ],
    correct: "A",
    explanation: "Even though the head of the femur forms part of the hip joint, the site designation for avascular necrosis of bone is the bone, not the joint.",
    lookFor: "A bone condition at the end of the bone.",
  },
  {
    topic: "Unnamed Joints",
    scenario: "The provider writes 'osteoarthritis of multiple joints' without listing which joints.",
    options: [
      "A. The code for the knee, the most common site",
      "B. A separate code for each joint the coder thinks is likely",
      "C. The appropriate 'multiple sites' code",
      "D. A query is never allowed",
    ],
    correct: "C",
    explanation: "When the specific sites aren't documented, assign the appropriate code for 'multiple sites.' If the individual joints are named, they are coded individually by site.",
    lookFor: "Individual sites aren't named.",
  },
  {
    topic: "Acute vs. Chronic",
    scenario: "A patient is treated for a fresh injury sustained yesterday. Another patient has a long-standing condition that is a result of an old, healed injury.",
    options: [
      "A. Both are coded from Chapter 13",
      "B. The fresh injury is coded from Chapter 19; the old-injury condition is generally coded from Chapter 13",
      "C. Both are coded from Chapter 19",
      "D. The fresh injury is coded from Chapter 13; the old one from Chapter 19",
    ],
    correct: "B",
    explanation: "A current, acute injury is coded from Chapter 19. Conditions resulting from a healed injury and chronic or recurrent conditions are generally coded from Chapter 13.",
    lookFor: "Current acute vs. healed or chronic.",
  },
  {
    topic: "New Provider, Active Treatment",
    scenario: "A patient with a pathologic fracture transfers to a new orthopedic surgeon while still receiving active treatment.",
    options: [
      "A. 7th character D",
      "B. 7th character S",
      "C. A new code with no 7th character",
      "D. 7th character A — active treatment continues, regardless of the provider",
    ],
    correct: "D",
    explanation: "7th character A applies as long as the patient is receiving active treatment; a new provider doesn't change it.",
    lookFor: "A new provider and ongoing active treatment.",
  },
  {
    topic: "Nonunion",
    scenario: "A patient who finished active treatment of a pathologic fracture returns for routine follow-up, and the provider finds a nonunion.",
    options: [
      "A. 7th character A",
      "B. 7th character D",
      "C. The other subsequent-encounter 7th character for nonunion",
      "D. A traumatic fracture code",
    ],
    correct: "C",
    explanation: "Problems associated with healing, such as nonunion, malunion, and sequelae, take the other subsequent-encounter 7th characters listed under the subcategory — not D (routine healing) and not A (active treatment is over).",
    lookFor: "Routine follow-up that finds a healing problem.",
  },
  {
    topic: "Routine Healing",
    scenario: "A patient has completed active treatment for a pathologic fracture and attends a routine visit during the healing phase, with no problems.",
    options: [
      "A. 7th character D",
      "B. 7th character A",
      "C. A complication code",
      "D. An aftercare Z code",
    ],
    correct: "A",
    explanation: "7th character D is used after active treatment is completed, for routine care during the healing or recovery phase.",
    lookFor: "Active treatment complete, uncomplicated healing.",
  },
  {
    topic: "Osteoporosis and a Minor Fall",
    scenario: "A patient with known osteoporosis breaks a vertebra after a minor fall that wouldn't normally break a healthy bone.",
    options: [
      "A. A traumatic vertebral fracture code",
      "B. M81",
      "C. A traumatic fracture code plus M81",
      "D. A code from M80, not a traumatic fracture code",
    ],
    correct: "D",
    explanation: "A patient with known osteoporosis who suffers a fracture is coded to M80, even after minor trauma. The M80 code identifies the site of the fracture.",
    lookFor: "Known osteoporosis plus minimal trauma.",
  },
  {
    topic: "Osteoporosis History of Fracture",
    scenario: "A patient with osteoporosis is seen for medication management. They had a spinal fracture from osteoporosis two years ago, which has healed, and have no current fracture.",
    options: [
      "A. M80",
      "B. M81, followed by Z87.310",
      "C. Z87.310 only",
      "D. A traumatic fracture code with 7th character S",
    ],
    correct: "B",
    explanation: "M81 is for osteoporosis without a current pathologic fracture, even with a fracture in the past. Z87.310 (personal history of healed osteoporosis fracture) follows the M81 code.",
    lookFor: "A healed past fracture and no current one.",
  },
  {
    topic: "Complication of Surgical Repair",
    scenario: "A patient whose fracture was repaired surgically returns during recovery with a complication of the surgical treatment.",
    options: [
      "A. The fracture code with 7th character A",
      "B. The fracture code with 7th character D",
      "C. The fracture code with a nonunion character",
      "D. The appropriate complication code",
    ],
    correct: "D",
    explanation: "Care for complications of surgical treatment for fracture repairs during healing or recovery is coded with the appropriate complication codes.",
    lookFor: "A complication of the surgery itself.",
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

export default function Icd10Chapter13WorkedExamplesPage() {
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
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 13 · WORKED EXAMPLES</p>
        <h1 style={{ margin: 0, fontSize: "clamp(24px, 5vw, 38px)" }}>Chapter 13 Worked Examples</h1>
        <p style={{ margin: "10px 0 0", fontSize: "15.5px", lineHeight: 1.5 }}>9 scenario walkthroughs with full reasoning — jump to any question to check its answer directly.</p>
      </header>

      <nav aria-label="ICD-10 navigation" style={navStyle}>
        <Link href="/icd10" style={navLinkStyle}>ICD-10 home</Link>
        <Link href="/icd10/chapter-13-guidelines-reviewer" style={navLinkStyle}>Guidelines Reviewer</Link>
        <Link href="/icd10/chapter-13-practice-quiz" style={navLinkStyle}>Practice Quiz</Link>
      </nav>

      <div style={introStyle}>
        <strong>Big-picture tip:</strong> examples 4, 5, and 6 walk through the pathologic fracture 7th characters in order — active treatment (A, even with a new provider), a healing problem such as nonunion (the other subsequent-encounter characters), and routine healing (D).</div>

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
