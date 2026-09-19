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
    topic: "Multiple Pressure Ulcers",
    question: "A patient has a stage 2 pressure ulcer on the left heel and a stage 3 pressure ulcer on the sacrum, both documented at the same encounter. How many L89 codes are assigned?",
    options: [
      "A. One code, for the higher stage (stage 3) only",
      "B. Two codes — one for each ulcer's site and stage",
      "C. One code, using an average of the two stages",
      "D. No code until the ulcers are staged identically",
    ],
    correct: "B",
    explanation: "As many codes from category L89 as needed are assigned to identify all the pressure ulcers a patient has — two distinct ulcers at two distinct sites and stages get two separate codes.",
    lookFor: "Two genuinely separate ulcers (different sites) is a direct cue to assign one L89 code per ulcer, not to average or pick only the worse one.",
    eliminate: "A wrongly drops the heel ulcer just because it's less severe than the sacral one.",
  },
  {
    topic: "Non-Provider Stage Documentation",
    question: "A wound-care nurse (not the treating physician) documents the specific stage of a patient's pressure ulcer in the chart. Can that documentation be used to assign the pressure ulcer stage code?",
    options: [
      "A. No — only the treating provider's own documentation can be used for the stage",
      "B. Yes — pressure ulcer stage is a named exception allowing non-provider clinician documentation",
      "C. No — a coder must query the physician regardless of what the nurse documented",
      "D. Yes, but only if the physician co-signs the nurse's note the same day",
    ],
    correct: "B",
    explanation: "Pressure ulcer stage specifically may be documented by clinicians other than the patient's treating provider (such as a wound-care nurse) and still be used for code assignment — a named exception to the general provider-documentation rule.",
    lookFor: "\"Wound-care nurse documents the stage\" is the specific scenario this named exception exists for.",
    eliminate: "A and C both wrongly apply the general provider-only documentation rule to a situation where an explicit exception applies.",
  },
  {
    topic: "Unstageable vs. Unspecified",
    question: "A pressure ulcer is documented as covered by eschar, making its true stage impossible to determine clinically. What's coded?",
    options: [
      "A. L89.––9, unspecified stage",
      "B. L89.––0, unstageable",
      "C. Stage 4, since eschar-covered ulcers are usually the most severe",
      "D. Query the provider before coding",
    ],
    correct: "B",
    explanation: "Unstageable pressure ulcer codes (L89.––0) are used specifically when the stage cannot be clinically determined, such as when the ulcer is covered by eschar — a genuine clinical finding, not a documentation gap.",
    lookFor: "\"Covered by eschar, stage impossible to determine\" is the textbook trigger for the unstageable code, not unspecified.",
    eliminate: "A wrongly applies the unspecified code, which is reserved for when the stage simply was never documented at all — a different situation.",
  },
  {
    topic: "Unstageable vs. Unspecified",
    question: "A pressure ulcer is documented in the chart, but there is no documentation anywhere regarding its stage. What's coded?",
    options: [
      "A. L89.––0, unstageable",
      "B. L89.––9, unspecified stage",
      "C. No code at all until a stage is documented",
      "D. Stage 1, as the default lowest severity",
    ],
    correct: "B",
    explanation: "When there is no documentation at all regarding the stage of the pressure ulcer, the unspecified stage code (L89.––9) is assigned — a documentation gap, not a clinical finding of an indeterminate stage.",
    lookFor: "\"No documentation regarding stage\" (as opposed to a documented clinical barrier like eschar) is the specific trigger for unspecified, not unstageable.",
    eliminate: "A wrongly applies the unstageable code, which requires an actual clinical reason staging isn't possible, not just silence in the documentation.",
  },
  {
    topic: "Unstageable — Revealed After Debridement",
    question: "A previously unstageable pressure ulcer (covered by eschar) undergoes debridement during the current encounter, revealing it to actually be a stage 3 ulcer. What's coded?",
    options: [
      "A. Both L89.––0 (unstageable) and the stage 3 code together",
      "B. L89.––0 (unstageable) alone, since that was the original finding",
      "C. Only the stage 3 code",
      "D. L89.––9, unspecified stage",
    ],
    correct: "C",
    explanation: "If the stage of a previously unstageable pressure ulcer is revealed after debridement during the encounter, only the code for the stage revealed following debridement is assigned — the unstageable code is not used once the true stage is known.",
    lookFor: "\"Revealed after debridement\" is the specific cue to drop the unstageable code entirely and code only the newly revealed stage.",
    eliminate: "A wrongly keeps the unstageable code alongside the revealed stage, when only the revealed stage should be coded.",
  },
  {
    topic: "Documented Stage & Query",
    question: "A provider uses an unfamiliar clinical term to describe a pressure ulcer's severity. That specific term is not found anywhere in the Alphabetic Index, and there's no other documentation of the stage. What's the correct action?",
    options: [
      "A. Assign the unspecified stage code without querying",
      "B. Guess the closest-sounding stage based on the term used",
      "C. Query the provider for clarification",
      "D. Assign stage 4, since unfamiliar terms usually describe severe findings",
    ],
    correct: "C",
    explanation: "For clinical terms describing the stage that are not found in the Alphabetic Index, with no other stage documentation available, the provider should be queried rather than guessed at.",
    lookFor: "An unfamiliar term NOT found in the Index, with nothing else to go on, is the specific query trigger here.",
    eliminate: "A and D both skip the required query and instead guess at a stage that isn't actually supported by documentation.",
  },
  {
    topic: "Current vs. Healing — Query",
    question: "Documentation is unclear about whether a patient has a brand-new pressure ulcer or is being treated for one that's healing from a prior admission. What's the correct action?",
    options: [
      "A. Assume it's a new ulcer and code the current stage",
      "B. Assume it's healing and assign the unspecified stage code",
      "C. Query the provider to clarify",
      "D. Code both a new ulcer and a healing ulcer",
    ],
    correct: "C",
    explanation: "If it's unclear from documentation whether the patient has a current (new) pressure ulcer or is being treated for a healing one, the provider should be queried.",
    lookFor: "Ambiguity specifically about NEW vs. HEALING status (not about the stage itself) is its own distinct query trigger.",
    eliminate: "A and B both guess at a status that the documentation doesn't actually clarify.",
  },
  {
    topic: "Healed vs. Healing",
    question: "A patient's chart states a pressure ulcer was present previously but is now completely healed at the time of admission. What's coded?",
    options: [
      "A. The appropriate stage code, based on the last known stage",
      "B. L89.––9, unspecified stage",
      "C. No code is assigned for this ulcer",
      "D. A personal history code only",
    ],
    correct: "C",
    explanation: "No code is assigned if the documentation states that the pressure ulcer is completely healed at the time of admission.",
    lookFor: "\"Completely healed at admission\" is the specific trigger for assigning no code at all for that ulcer.",
    eliminate: "A and B both wrongly assign some stage code to an ulcer explicitly documented as completely healed already.",
  },
  {
    topic: "Healed vs. Healing",
    question: "A patient's chart documents a \"healing stage 2 pressure ulcer\" — still present, but improving. What's coded?",
    options: [
      "A. No code, since it's healing rather than a fresh ulcer",
      "B. The stage 2 pressure ulcer code",
      "C. L89.––9, unspecified stage, since healing status changes the picture",
      "D. A personal history code",
    ],
    correct: "B",
    explanation: "Pressure ulcers described as healing (still present, not yet fully healed) should be assigned the appropriate pressure ulcer stage code based on the documentation — here, stage 2.",
    lookFor: "\"Healing\" (still present) is coded at whatever stage is documented — only \"completely healed\" results in no code.",
    eliminate: "A wrongly applies the no-code rule, which is reserved specifically for completely healed ulcers, not healing ones.",
  },
  {
    topic: "Healed vs. Healing",
    question: "A patient's chart documents a healing pressure ulcer, but doesn't specify its current stage anywhere. What's coded?",
    options: [
      "A. No code, since the stage isn't specified",
      "B. Stage 1, as the default for unspecified healing ulcers",
      "C. The code for unspecified stage",
      "D. Query the provider before any code can be assigned",
    ],
    correct: "C",
    explanation: "If the documentation does not provide information about the stage of a healing pressure ulcer, the appropriate code for unspecified stage is assigned.",
    lookFor: "A healing ulcer with no stage given still gets coded — just with the unspecified-stage code, not skipped entirely.",
    eliminate: "A wrongly treats a healing ulcer with an unspecified stage the same as a completely healed one, which is a different scenario with a different rule.",
  },
  {
    topic: "Present on Admission, Healed by Discharge",
    question: "A patient is admitted with a documented stage 2 sacral pressure ulcer, which has fully healed by the time of discharge several days later. What's coded?",
    options: [
      "A. No code, since the ulcer was gone by discharge",
      "B. The stage 2 sacral pressure ulcer code, reflecting the admission documentation",
      "C. L89.––9, unspecified stage, since the stage changed during the stay",
      "D. A personal history code only",
    ],
    correct: "B",
    explanation: "For pressure ulcers present on admission but healed at the time of discharge, assign the code for the site and stage of the pressure ulcer as documented at the time of admission.",
    lookFor: "\"Present on admission, healed by discharge\" still gets coded — at the admission-time stage, not skipped just because it resolved during the stay.",
    eliminate: "A wrongly applies the \"completely healed = no code\" rule, which is specifically for ulcers already healed AT ADMISSION, not ones that heal during the stay.",
  },
  {
    topic: "Two-Code Progression Rule",
    question: "A patient is admitted with a stage 2 sacral pressure ulcer, and during the stay it progresses to stage 3. How many codes are assigned, and for what stages?",
    options: [
      "A. One code, for stage 3 only (the highest stage reached)",
      "B. One code, for stage 2 only (the admission stage)",
      "C. Two codes: one for stage 2 (admission) and one for stage 3 (highest reached)",
      "D. One code, for an averaged stage between 2 and 3",
    ],
    correct: "C",
    explanation: "When a pressure ulcer progresses to a higher stage during the admission, two separate codes are assigned: one for the site and stage on admission, and a second for the same site at the highest stage reported during the stay.",
    lookFor: "Pressure ulcer stage progression during a stay is a TWO-CODE rule — both the admission stage and the highest stage reached are coded together.",
    eliminate: "A applies the single-code \"highest severity only\" pattern used elsewhere in ICD-10-CM, which does NOT apply to pressure ulcer progression specifically.",
  },
  {
    topic: "Pressure-Induced Deep Tissue Damage",
    question: "A patient is documented with pressure-induced deep tissue damage at the sacrum, described as distinct from a staged (1–4) pressure ulcer. What's coded?",
    options: [
      "A. The stage 4 pressure ulcer code, since deep tissue damage is the most severe presentation",
      "B. L89.––6, the dedicated deep tissue damage code",
      "C. L89.––9, unspecified stage",
      "D. Both a stage 4 code and L89.––6 together",
    ],
    correct: "B",
    explanation: "For pressure-induced deep tissue damage or deep tissue pressure injury, assign only the appropriate code for pressure-induced deep tissue damage (L89.––6) — its own distinct code, not a stage 1–4 code.",
    lookFor: "Deep tissue pressure injury is its own dedicated code, not simply an especially severe stage 4 ulcer.",
    eliminate: "A wrongly treats deep tissue damage as just a more severe version of the numbered stage system.",
  },
  {
    topic: "Non-Pressure Ulcers — Healed",
    question: "A patient's chart documents a non-pressure venous stasis ulcer as completely healed at the time of admission. What's coded?",
    options: [
      "A. No code is assigned",
      "B. The unspecified severity code",
      "C. The appropriate severity code, based on the last known severity",
      "D. A personal history code",
    ],
    correct: "A",
    explanation: "No code is assigned if the documentation states that the non-pressure ulcer is completely healed at the time of admission — the identical rule used for pressure ulcers, just applied to the L97/L98.4 category.",
    lookFor: "This mirrors the pressure ulcer \"completely healed = no code\" rule exactly, just for a non-pressure ulcer.",
    eliminate: "B and C both wrongly assign some code to an ulcer explicitly documented as completely healed already.",
  },
  {
    topic: "Non-Pressure Ulcers — Progression",
    question: "A patient is admitted with a non-pressure ulcer at one documented severity level, which progresses to a higher severity level during the same admission. How many codes are assigned?",
    options: [
      "A. One code, for the highest severity level reached",
      "B. One code, for the admission severity level",
      "C. Two codes: one for the admission severity and one for the highest severity reached",
      "D. No code, since the severity level changed during the stay",
    ],
    correct: "C",
    explanation: "If a non-pressure ulcer progresses to a higher severity level during the admission, two separate codes are assigned — one for the admission severity level and one for the highest severity level reported during the stay, mirroring the pressure ulcer two-code progression rule exactly.",
    lookFor: "The two-code progression rule applies identically to non-pressure ulcers as it does to pressure ulcers.",
    eliminate: "A wrongly applies a single-code \"highest only\" pattern, which doesn't apply to this chapter's progression rule for either pressure or non-pressure ulcers.",
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

export default function Icd10Chapter12PracticeQuizPage() {
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
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 12 · PRACTICE QUIZ</p>
        <h1 style={{ margin: 0, fontSize: "clamp(24px, 5vw, 38px)" }}>Chapter 12 Practice Quiz</h1>
        <p style={{ margin: "10px 0 0", fontSize: "15.5px", lineHeight: 1.5 }}>15 original scenario questions with elimination tricks, covering pressure ulcer staging, the unstageable/unspecified distinction, healed vs. healing, the two-code progression rule, and the parallel non-pressure ulcer rules.</p>
      </header>

      <nav aria-label="ICD-10 quiz navigation" style={navStyle}>
        <Link href="/icd10" style={navLinkStyle}>ICD-10-CM home</Link>
        <Link href="/icd10/chapter-12-guidelines-reviewer" style={navLinkStyle}>Guidelines Reviewer</Link>
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
