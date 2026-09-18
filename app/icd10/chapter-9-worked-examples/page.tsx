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
    topic: "Hypertension + CKD + Heart Failure",
    scenario: "A patient with long-standing hypertension is admitted with heart failure and is found to have stage 5 chronic kidney disease. The provider documents all three conditions without further comment on their relationship.",
    options: [
      "A. I11.0, N18.5",
      "B. I12.0, I50.9",
      "C. I13.2, the specific I50 heart failure code, N18.5",
      "D. I10, I50.9, N18.5, coded as three unrelated conditions",
    ],
    correct: "C",
    explanation: "When hypertension, heart failure, and chronic kidney disease are all present together, the triple-combination code I13.- applies — here I13.2, since heart failure is present with stage 5 CKD — plus the specific heart failure code and the CKD stage code. I11 and I12 are never used once I13 applies.",
    lookFor: "Whenever hypertension appears alongside BOTH a heart condition AND CKD in the same encounter, jump straight to I13 — don't stop at I11 or I12, which only cover two of the three conditions.",
  },
  {
    topic: "Transient Hypertension vs. Established Diagnosis",
    scenario: "A patient with no prior history of hypertension has a single elevated blood pressure reading of 148/92 recorded at a routine physical, with no other findings and no treatment started.",
    options: [
      "A. I10, Essential (primary) hypertension",
      "B. R03.0, Elevated blood pressure reading without diagnosis of hypertension",
      "C. I15.9, Secondary hypertension, unspecified",
      "D. No code — a single reading is not reportable",
    ],
    correct: "B",
    explanation: "Without an established hypertension diagnosis, a single elevated reading defaults to R03.0. Coding I10 here would assume a diagnosis the documentation doesn't actually support.",
    lookFor: "\"No prior history\" plus \"single elevated reading\" plus \"no treatment started\" together rule out I10 — that combination is the R03.0 signature.",
  },
  {
    topic: "Secondary Pulmonary Hypertension",
    scenario: "A patient with chronic obstructive pulmonary disease is found to have pulmonary hypertension due to their underlying lung disease. The provider documents both conditions and their relationship clearly.",
    options: [
      "A. I27.20, Pulmonary hypertension, unspecified, alone",
      "B. I10, plus the COPD code",
      "C. The COPD code, plus I27.23, Pulmonary hypertension due to lung disease and hypoxia",
      "D. I27.9, plus a separate COPD code, sequenced by admission reason only",
    ],
    correct: "C",
    explanation: "Secondary pulmonary hypertension is coded with the associated underlying condition also reported — here, the COPD causing it. I27.23 is the more specific code for pulmonary hypertension due to lung disease, more accurate than the unspecified I27.20 or I27.9.",
    lookFor: "Once a specific cause for pulmonary hypertension is documented (lung disease, left heart disease, hematologic, metabolic, etc.), use the matching specific I27.2- code instead of the unspecified I27.20/I27.9.",
  },
  {
    topic: "Atherosclerotic CAD with Angina, Cause Specified",
    scenario: "A patient has atherosclerotic heart disease of a native coronary artery. The provider documents that the patient's angina is caused by cocaine use, not by the atherosclerosis itself.",
    options: [
      "A. I25.11- alone",
      "B. I25.10 (without angina) plus a separate angina code with the cocaine-related cause noted",
      "C. I25.11- plus a cocaine-induced angina code",
      "D. I20.9 alone",
    ],
    correct: "B",
    explanation: "The combination code (I25.11-) assumes the angina is caused by the atherosclerosis — but that assumption only holds unless documentation says otherwise. Here the provider explicitly attributes the angina to a different cause, so the combination code doesn't apply; instead, code the CAD without angina (I25.10) and the angina separately, reflecting its actual documented cause.",
    lookFor: "The combination-code assumption for atherosclerosis + angina is rebuttable — a documented alternate cause for the angina overrides the automatic bundling.",
  },
  {
    topic: "AMI Sequencing with Known CAD",
    scenario: "A patient with a long history of coronary artery disease is admitted today specifically for a new acute inferior wall STEMI.",
    options: [
      "A. The coronary artery disease code first, then I21.19",
      "B. I21.19 first, then the coronary artery disease code",
      "C. I21.19 alone, no CAD code",
      "D. The CAD code alone, since it's the underlying condition",
    ],
    correct: "B",
    explanation: "When a patient with known CAD is admitted for an acute MI, the AMI is always sequenced first, ahead of the CAD code — reflecting that the acute event is the reason for this encounter.",
    lookFor: "\"Admitted for\" plus an acute MI diagnosis is the cue to lead with the MI code, regardless of how long-standing the underlying CAD is.",
  },
  {
    topic: "STEMI Documented Without a Site",
    scenario: "A patient is diagnosed with a transmural myocardial infarction. The documentation confirms ST elevation but does not specify which wall of the heart is involved.",
    options: [
      "A. I21.9, Acute myocardial infarction, unspecified",
      "B. I21.3, ST elevation (STEMI) myocardial infarction of unspecified site",
      "C. I21.4, Non-ST elevation (NSTEMI) myocardial infarction",
      "D. I25.2, Old myocardial infarction",
    ],
    correct: "B",
    explanation: "When only \"STEMI\" or \"transmural MI\" is documented without a specific site, I21.3 (STEMI, unspecified site) applies — not the fully unspecified I21.9, which is reserved for when the type itself isn't documented at all.",
    lookFor: "\"Type known (STEMI/transmural), site unknown\" is I21.3. \"Type itself unknown\" is I21.9. Don't collapse these into the same code.",
  },
  {
    topic: "Type 2 MI Documented as NSTEMI",
    scenario: "A patient in septic shock develops a type 2 myocardial infarction due to demand ischemia. The cardiology note describes the event as \"NSTEMI, type 2, secondary to sepsis-related hypotension.\"",
    options: [
      "A. I21.4, NSTEMI",
      "B. The sepsis code, then I21.4",
      "C. The sepsis/septic shock codes, then I21.A1, Myocardial infarction type 2",
      "D. I24.89, Other forms of acute ischemic heart disease",
    ],
    correct: "C",
    explanation: "Even though the note uses the word \"NSTEMI,\" a type 2 MI is always coded I21.A1, never a code from the I21.0-I21.4 range — those are reserved exclusively for type 1 MI. The underlying cause (sepsis/septic shock) is coded first since it's identified.",
    lookFor: "The word \"NSTEMI\" in a note doesn't automatically mean I21.4 — always check whether the documentation also says \"type 2,\" which overrides the NSTEMI-style code entirely.",
  },
  {
    topic: "Subsequent MI, Mixed Types",
    scenario: "A patient had a type 1 NSTEMI 10 days ago. Today, within the same 4-week window, they present with a new type 4a MI following a percutaneous coronary intervention.",
    options: [
      "A. I22.2 (subsequent NSTEMI) plus I21.4 for the original event",
      "B. I21.A9 for the new type 4a MI, plus I21.4 for the original event — no I22 code",
      "C. I22.2 alone",
      "D. I21.A9 alone, no reference to the original MI",
    ],
    correct: "B",
    explanation: "Category I22 (subsequent MI) is reserved for a NEW type 1 or unspecified AMI within the 4-week window — it's never used for type 4 or type 5 subsequent MI. The new type 4a event is coded I21.A9 instead, and the original type 1 NSTEMI is still reported with its own I21 code since it remains within its active reporting window.",
    lookFor: "\"Subsequent MI\" doesn't automatically mean category I22 — check the TYPE of the new event first. Only type 1/unspecified subsequent MI uses I22; types 2, 4, and 5 use their own I21.A- codes instead, without I22.",
  },
  {
    topic: "Cerebrovascular Sequelae with Documented Dominance",
    scenario: "A patient is left-hand dominant, per documentation. Six months after a stroke, they have persistent left-sided hemiplegia.",
    options: [
      "A. Apply the standard default: left side affected = nondominant",
      "B. Code hemiplegia affecting the dominant side, since the patient's documented dominant hand is the left",
      "C. Code as unspecified dominance",
      "D. No I69 code applies since the stroke was 6 months ago",
    ],
    correct: "B",
    explanation: "The default rules (ambidextrous → dominant, left → nondominant, right → dominant) only apply when dominance is NOT otherwise documented. Here the patient's left-hand dominance is explicitly stated, so the actual documented dominance is used instead of the default — meaning left-sided hemiplegia is coded as affecting the dominant side.",
    lookFor: "The dominant/nondominant defaults are a fallback, not an absolute rule — always check first whether the patient's actual hand dominance was documented, since that overrides the default.",
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

export default function Icd10Chapter9WorkedExamplesPage() {
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
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 9 · WORKED EXAMPLES</p>
        <h1 style={{ margin: 0, fontSize: "clamp(24px, 5vw, 38px)" }}>Chapter 9 Worked Examples</h1>
        <p style={{ margin: "10px 0 0", fontSize: "15.5px", lineHeight: 1.5 }}>9 scenario walkthroughs with full reasoning — jump to any question to check its answer directly.</p>
      </header>

      <nav aria-label="ICD-10 navigation" style={navStyle}>
        <Link href="/icd10" style={navLinkStyle}>ICD-10-CM home</Link>
        <Link href="/icd10/chapter-9-coding-approach" style={navLinkStyle}>How to Approach This Chapter</Link>
        <Link href="/icd10/chapter-9-guidelines-reviewer" style={navLinkStyle}>Guidelines Reviewer</Link>
        <Link href="/icd10/chapter-9-practice-quiz" style={navLinkStyle}>Practice Quiz</Link>
      </nav>

      <div style={introStyle}>
        <strong>Big-picture tip:</strong> most of these questions test whether you know when a combination/assumption rule applies (hypertension+heart, hypertension+CKD, atherosclerosis+angina) versus when documented specifics override the default (an alternate cause for angina, documented hand dominance, a specific pulmonary hypertension cause). Read for the exception before assuming the general rule applies.
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
