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
    topic: "CKD Stage — Mild",
    scenario: "A primary care note documents \"mild chronic kidney disease, stable on current management,\" with no other stage number given.",
    options: [
      "A. N18.1, CKD stage 1",
      "B. N18.2, CKD stage 2",
      "C. N18.30, CKD stage 3 unspecified",
      "D. N18.9, CKD unspecified",
    ],
    correct: "B",
    explanation: "\"Mild CKD\" is the guideline's own defined equivalent for stage 2, so this maps directly to N18.2.",
    lookFor: "The severity word \"mild\" alone is enough to determine the code — stage 2 specifically, not stage 1.",
  },
  {
    topic: "CKD Stage — Moderate, Subtype Given",
    scenario: "A nephrology consult documents \"moderate CKD, subtype a\" for a patient with declining but not severely impaired kidney function.",
    options: [
      "A. N18.30, CKD stage 3 unspecified",
      "B. N18.31, CKD stage 3a",
      "C. N18.32, CKD stage 3b",
      "D. N18.4, CKD stage 4",
    ],
    correct: "B",
    explanation: "\"Moderate CKD\" maps to stage 3, and the documented subtype \"a\" specifically identifies N18.31 rather than the less-specific unspecified stage 3 code.",
    lookFor: "When a stage 3 subtype (a or b) is documented, use the matching subcode rather than the unspecified stage 3 code.",
  },
  {
    topic: "CKD Stage — Severe",
    scenario: "A hospital discharge summary lists \"severe chronic kidney disease\" as a final diagnosis, with no ESRD mentioned anywhere.",
    options: [
      "A. N18.4, CKD stage 4",
      "B. N18.5, CKD stage 5",
      "C. N18.6, ESRD",
      "D. N18.9, CKD unspecified",
    ],
    correct: "A",
    explanation: "\"Severe CKD\" is the guideline's defined equivalent for stage 4 (N18.4) — not stage 5 or ESRD, neither of which is documented here.",
    lookFor: "\"Severe\" specifically means stage 4 in this guideline's terminology — don't escalate further to stage 5 or ESRD without those terms actually being documented.",
  },
  {
    topic: "ESRD Alone",
    scenario: "A patient on long-term dialysis has \"end-stage renal disease\" documented as the sole kidney-related diagnosis, with no specific numbered stage given anywhere in the chart.",
    options: [
      "A. N18.5, CKD stage 5",
      "B. N18.6, ESRD",
      "C. N18.9, CKD unspecified",
      "D. Both N18.5 and N18.6 together",
    ],
    correct: "B",
    explanation: "ESRD, when documented by the provider, is coded N18.6 — its own distinct code, separate from any numbered CKD stage.",
    lookFor: "\"ESRD\" documented directly and specifically is coded N18.6, not a numbered stage.",
  },
  {
    topic: "CKD Stage + ESRD Together",
    scenario: "A patient's nephrology note reads: \"Chronic kidney disease, stage 5, now progressed to end-stage renal disease, patient started on hemodialysis this admission.\"",
    options: [
      "A. N18.5 alone",
      "B. N18.6 alone",
      "C. Both N18.5 and N18.6 together",
      "D. N18.4, since the progression suggests overlap with stage 4",
    ],
    correct: "B",
    explanation: "When both a CKD stage and ESRD are documented in the same encounter, N18.6 (ESRD) is assigned alone — the stage code is not additionally reported.",
    lookFor: "Both stage 5 AND ESRD documented together is the exact scenario where ESRD wins and stands alone.",
  },
  {
    topic: "Transplant + CKD, No Complication",
    scenario: "A patient two years post-kidney-transplant has a documented \"stage 2 CKD\" on routine follow-up labs, with the transplant itself functioning normally and no complication documented.",
    options: [
      "A. N18.2 alone",
      "B. Z94.0 alone",
      "C. N18.2 plus Z94.0",
      "D. A transplant complication code, since any CKD after transplant implies a problem",
    ],
    correct: "C",
    explanation: "CKD after a kidney transplant, without a documented complication, is coded with the appropriate N18 stage code plus Z94.0 (kidney transplant status) together — CKD alone doesn't imply a complication.",
    lookFor: "\"Functioning normally, no complication documented\" is the cue for the N18 + Z94.0 combination, not a complication code.",
  },
  {
    topic: "Transplant — Ambiguous Complication",
    scenario: "A transplant recipient's labs show worsening kidney function on today's visit, and the note simply states \"will monitor,\" without clarifying whether this reflects rejection, another transplant complication, or just expected CKD progression despite the working transplant.",
    options: [
      "A. Code a kidney transplant complication by default, since function is worsening",
      "B. Code plain CKD plus Z94.0 by default",
      "C. Query the provider to determine whether this is a transplant complication",
      "D. Code both a complication and plain CKD together to cover both possibilities",
    ],
    correct: "C",
    explanation: "When it's unclear from documentation whether declining function represents an actual transplant complication or just ongoing CKD, the provider should be queried rather than the coder assuming either scenario.",
    lookFor: "Genuine clinical ambiguity between \"complication\" and \"expected CKD\" — not just any worsening lab value — is the specific query trigger here.",
  },
  {
    topic: "CKD with Diabetes — Sequencing",
    scenario: "A patient's discharge summary lists both \"type 2 diabetes mellitus\" and \"CKD stage 3b\" as active diagnoses for this encounter, and the coder needs to determine sequencing.",
    options: [
      "A. Diabetes is always sequenced before CKD, no exceptions",
      "B. CKD is always sequenced before diabetes, no exceptions",
      "C. Sequencing is determined by the Tabular List's own conventions for this specific combination",
      "D. Sequencing is left entirely to coder discretion, with no guiding rule at all",
    ],
    correct: "C",
    explanation: "The sequencing of CKD relative to other contributing conditions like diabetes is based on the conventions found in the Tabular List — there's no fixed universal order.",
    lookFor: "Any \"which comes first\" question about CKD plus another common comorbidity (diabetes, hypertension) should point you to \"follow the Tabular List conventions,\" not a memorized fixed order.",
  },
  {
    topic: "CKD with Hypertension — Specialized Framework",
    scenario: "A patient has both hypertension and CKD stage 4 documented at the same encounter, and the coder is deciding which coding framework governs this combination.",
    options: [
      "A. The generic \"follow the Tabular List conventions\" rule used for other CKD comorbidities",
      "B. The dedicated hypertensive CKD combination-code category (I12, or I13 if heart disease is also present)",
      "C. The kidney transplant complication guidance",
      "D. No combination framework exists; the two conditions are always coded with zero relationship implied",
    ],
    correct: "B",
    explanation: "Hypertension combined with CKD has its own dedicated combination-code framework (category I12, or I13 when heart disease is also present) — a more specific rule than the general CKD-with-other-conditions guidance.",
    lookFor: "Hypertension is the one comorbidity in this topic that gets its OWN named, dedicated combination-code system, rather than falling under the generic \"Tabular List conventions\" answer.",
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

export default function Icd10Chapter14WorkedExamplesPage() {
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
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 14 · WORKED EXAMPLES</p>
        <h1 style={{ margin: 0, fontSize: "clamp(24px, 5vw, 38px)" }}>Chapter 14 Worked Examples</h1>
        <p style={{ margin: "10px 0 0", fontSize: "15.5px", lineHeight: 1.5 }}>9 scenario walkthroughs with full reasoning — jump to any question to check its answer directly.</p>
      </header>

      <nav aria-label="ICD-10 navigation" style={navStyle}>
        <Link href="/icd10" style={navLinkStyle}>ICD-10 home</Link>
        <Link href="/icd10/chapter-14-guidelines-reviewer" style={navLinkStyle}>Guidelines Reviewer</Link>
        <Link href="/icd10/chapter-14-practice-quiz" style={navLinkStyle}>Practice Quiz</Link>
      </nav>

      <div style={introStyle}>
        <strong>Big-picture tip:</strong> questions 1, 2, and 3 are a deliberate trio — mild, moderate (with subtype), and severe CKD, walking straight down the guideline's own severity-word ladder (stage 2 → stage 3a/3b → stage 4). Memorize that ladder once and you can answer any severity-word question in this chapter directly.
      </div>

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
