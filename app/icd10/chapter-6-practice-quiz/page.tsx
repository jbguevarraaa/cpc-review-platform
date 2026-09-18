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
    topic: "Dominant/Nondominant Defaults",
    question: "A patient's chart documents left-sided hemiplegia with no mention of the patient's handedness anywhere. What's the default?",
    options: [
      "A. Dominant side",
      "B. Nondominant side",
      "C. Query the provider before coding",
      "D. Unspecified side, since handedness isn't documented",
    ],
    correct: "B",
    explanation: "When handedness isn't documented, the left side defaults to nondominant — a fixed rule, distinct from the right-side default (dominant) and the ambidextrous default (also dominant).",
    lookFor: "\"Left side, handedness not documented\" is the specific trigger for the nondominant default.",
    eliminate: "A applies the right-side default to a left-side scenario; C and D ignore the fact that a specific default rule already exists for this exact situation.",
  },
  {
    topic: "Dominant/Nondominant Defaults",
    question: "A documented ambidextrous patient has right-sided monoplegia of the lower limb. What's the default?",
    options: [
      "A. Nondominant, since ambidextrous patients have no true dominant side",
      "B. Dominant",
      "C. Unspecified",
      "D. Query the provider",
    ],
    correct: "B",
    explanation: "The ambidextrous-patient default is dominant, regardless of which side is affected — this overrides the general left/right defaults, which only apply when handedness itself isn't known.",
    lookFor: "\"Ambidextrous\" is its own named default (dominant) — don't fall back to the left/right rule once ambidextrous status is documented.",
    eliminate: "A incorrectly assumes ambidextrous patients default to nondominant.",
  },
  {
    topic: "G89 — When It Applies",
    question: "A patient is admitted for spinal fusion surgery to treat a diagnosed vertebral fracture. No mention of pain control being the reason for admission. What's coded as principal diagnosis?",
    options: [
      "A. A G89 pain code",
      "B. The vertebral fracture code",
      "C. Both the G89 code and the fracture code, co-principal",
      "D. G89.18, acute postprocedural pain",
    ],
    correct: "B",
    explanation: "When the admission is for a procedure aimed at treating the underlying condition itself, the underlying condition (vertebral fracture) is the principal diagnosis — no G89 code is assigned in this scenario.",
    lookFor: "\"Admission for a procedure treating the underlying condition\" rules out G89 entirely as the principal diagnosis.",
    eliminate: "A and D both wrongly lead with a pain code when the encounter reason is the underlying condition itself, not pain control.",
  },
  {
    topic: "G89 — When It Applies",
    question: "A patient with a known intervertebral disc problem and severe pain presents solely for a steroid injection into the spinal canal for pain relief — no procedure is done on the disc itself. What's the principal diagnosis?",
    options: [
      "A. The intervertebral disc disorder code",
      "B. The appropriate G89 pain code",
      "C. Neither — this scenario requires a query",
      "D. A code from category T74",
    ],
    correct: "B",
    explanation: "When pain control/management is the stated reason for the encounter, the G89 code is acceptable as the principal/first-listed diagnosis, with the underlying disc condition as an additional diagnosis.",
    lookFor: "\"Presents solely for pain relief\" (not treatment of the underlying condition) is the specific trigger allowing G89 to lead.",
    eliminate: "A wrongly leads with the underlying condition, which is only correct when the encounter is FOR treating that condition, not for pain control.",
  },
  {
    topic: "G89 + Site-Specific Sequencing",
    question: "A patient presents specifically for pain management of acute post-traumatic neck pain. What's the correct code order?",
    options: [
      "A. The site-specific neck pain code first, then the G89 code",
      "B. The G89 code first, then the site-specific neck pain code",
      "C. The G89 code alone, no site code needed",
      "D. The site-specific code alone, no G89 code needed",
    ],
    correct: "B",
    explanation: "When the encounter is for pain control/management, the G89 code is sequenced first, followed by the site-specific code — G89.11 (acute pain due to trauma) then the cervicalgia code, per the guideline's own example.",
    lookFor: "\"Encounter is FOR pain management\" is the cue that G89 leads, with the site-specific code following.",
    eliminate: "A reverses the required sequencing order for this specific scenario.",
  },
  {
    topic: "Postoperative Pain",
    question: "A patient has ordinary, expected pain in the hours immediately following routine surgery, with no documented complication. Is this coded?",
    options: [
      "A. Yes, with a G89.18 code",
      "B. Yes, with a Chapter 19 code",
      "C. No — routine/expected postoperative pain right after surgery is not coded",
      "D. Yes, but only as a secondary diagnosis",
    ],
    correct: "C",
    explanation: "Routine or expected postoperative pain immediately after surgery should not be coded at all — this is a direct exclusion in the guideline.",
    lookFor: "\"Routine, expected, immediately after surgery\" with no complication is the specific cue to assign no code at all.",
    eliminate: "A, B, and D all wrongly assign some code to pain that the guideline says shouldn't be coded in the first place.",
  },
  {
    topic: "Postoperative Pain",
    question: "A patient has documented chronic pain specifically caused by painful wire sutures retained from a prior surgery. What's coded?",
    options: [
      "A. G89.28 alone",
      "B. The appropriate Chapter 19 code for the wire-suture complication, plus G89.28 as an additional code",
      "C. G89.18 alone, since it's postoperative pain",
      "D. No code, since this is expected postoperative pain",
    ],
    correct: "B",
    explanation: "Postoperative pain associated with a specific complication (like painful wire sutures) is coded to the appropriate Chapter 19 complication code, with G89.28 (chronic postprocedural pain) added if appropriate to identify the pain as chronic.",
    lookFor: "A NAMED complication (wire sutures) shifts the leading code to Chapter 19 — the G89.2x code becomes secondary, not primary.",
    eliminate: "A and C both skip the required Chapter 19 complication code that should lead in this scenario.",
  },
  {
    topic: "Chronic Pain — No Time Frame",
    question: "A patient has had documented pain for eight months, but the provider's note never uses the word \"chronic\" anywhere. Can G89.2 be assigned based on the eight-month duration alone?",
    options: [
      "A. Yes, any pain lasting more than 3 months is automatically chronic",
      "B. Yes, any pain lasting more than 6 months is automatically chronic",
      "C. No — there is no fixed time frame; the provider's own documentation of \"chronic\" is what's required",
      "D. No, chronic pain codes are never used regardless of documentation",
    ],
    correct: "C",
    explanation: "There is no fixed time frame defining when pain becomes chronic in this guideline — the provider's documentation should guide use of the chronic pain code, not a coder's own duration calculation.",
    lookFor: "\"Duration documented, but the word 'chronic' never used\" is the specific trap testing whether you know there's no fixed cutoff.",
    eliminate: "A and B both invent a specific duration cutoff that doesn't actually exist in this guideline.",
  },
  {
    topic: "Neoplasm-Related Pain",
    question: "A cancer patient is admitted specifically for pain control of cancer-related pain. What's the principal diagnosis?",
    options: [
      "A. The neoplasm code",
      "B. G89.3, with the neoplasm as an additional diagnosis",
      "C. G89.3 plus a separate site-of-pain code, both co-principal",
      "D. A code from category R52",
    ],
    correct: "B",
    explanation: "G89.3 (neoplasm-related pain) may be assigned as principal/first-listed when pain control is the stated reason for the encounter, with the neoplasm reported as an additional diagnosis.",
    lookFor: "\"Admitted specifically for pain control\" for a cancer patient is the direct trigger for G89.3 as principal, mirroring the general G89 pain-control-as-reason rule.",
    eliminate: "A reverses the required sequencing for this specific pain-control scenario.",
  },
  {
    topic: "Central Pain Syndrome",
    question: "A patient develops persistent burning pain on one side of the body following a stroke, and the provider specifically documents this as \"central pain syndrome.\" What's coded?",
    options: [
      "A. G89.2, chronic pain",
      "B. G89.4, chronic pain syndrome",
      "C. G89.0, central pain syndrome",
      "D. A code from category G81 instead, since it followed a stroke",
    ],
    correct: "C",
    explanation: "G89.0 (central pain syndrome) is coded specifically when the provider documents that exact named condition — classic post-stroke thalamic pain is the textbook example of when this term is used.",
    lookFor: "\"Central pain syndrome\" documented by name (often post-stroke) is the specific trigger for G89.0 — distinct from both G89.2 and G89.4.",
    eliminate: "B applies the wrong specifically-named syndrome (chronic pain syndrome is a different condition from central pain syndrome); D confuses this pain code with an unrelated hemiplegia code.",
  },
  {
    topic: "Chronic Pain Syndrome vs. Chronic Pain",
    question: "A provider documents a patient's long-standing pain simply as \"chronic pain,\" without ever using the term \"chronic pain syndrome.\" What's coded?",
    options: [
      "A. G89.4, chronic pain syndrome",
      "B. G89.0, central pain syndrome",
      "C. G89.2, chronic pain",
      "D. Either G89.2 or G89.4, coder's choice",
    ],
    correct: "C",
    explanation: "G89.2 (chronic pain) is coded for the general term \"chronic pain\" — G89.4 (chronic pain syndrome) requires that specific named condition to actually be documented, which it wasn't here.",
    lookFor: "The EXACT term documented matters: plain \"chronic pain\" maps to G89.2, while the specific named \"chronic pain syndrome\" maps to G89.4 — they are not interchangeable.",
    eliminate: "A wrongly applies the specific-syndrome code to documentation that only used the general term.",
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

export default function Icd10Chapter6PracticeQuizPage() {
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
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 6 · PRACTICE QUIZ</p>
        <h1 style={{ margin: 0, fontSize: "clamp(24px, 5vw, 38px)" }}>Chapter 6 Practice Quiz</h1>
        <p style={{ margin: "10px 0 0", fontSize: "15.5px", lineHeight: 1.5 }}>11 original scenario questions with elimination tricks, covering dominant/nondominant defaults and the full category G89 pain rules.</p>
      </header>

      <nav aria-label="ICD-10 quiz navigation" style={navStyle}>
        <Link href="/icd10" style={navLinkStyle}>ICD-10-CM home</Link>
        <Link href="/icd10/chapter-6-guidelines-reviewer" style={navLinkStyle}>Guidelines Reviewer</Link>
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
