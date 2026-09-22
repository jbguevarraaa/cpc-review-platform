"use client";

import Link from "next/link";
import { HighlightToolbar } from "../../cpt/surgery/_digestive/highlighter";
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
    topic: "Sequencing",
    scenario: "A patient is admitted with a hip fracture after a documented accidental fall on a sidewalk.",
    options: [
      "A. The fall external cause code first, then the fracture",
      "B. The fracture first, then the fall external cause code, the place of occurrence, and the external cause status code",
      "C. Only the fall external cause code",
      "D. The place of occurrence first, then the fracture",
    ],
    correct: "B",
    explanation: "External cause codes are never first-listed. The fracture is reported first, followed by the fall (cause and intent), the place of occurrence, and the external cause status code that goes with the other external cause codes.",
    lookFor: "The injury always leads; external cause codes follow.",
  },
  {
    topic: "Beyond Injuries",
    scenario: "A patient has a heart attack while shoveling heavy snow. The provider documents the activity as contributing.",
    options: [
      "A. No external cause code is allowed because it isn't an injury",
      "B. Only a Chapter 19 code",
      "C. Only Y99",
      "D. External cause codes can be used, since the health condition is due to an external cause",
    ],
    correct: "D",
    explanation: "External cause codes may be used with any code in the range A00.0–T88.9 and Z00–Z99 that represents a health condition due to an external cause — including a heart attack during strenuous physical activity.",
    lookFor: "The guideline's own example of a non-injury condition.",
  },
  {
    topic: "7th Character Match",
    scenario: "A patient returns for follow-up of a healing injury. The injury code is reported with 7th character D.",
    options: [
      "A. The external cause code also carries 7th character D",
      "B. The external cause code carries A because it is the first external cause code",
      "C. The external cause code carries no 7th character",
      "D. The external cause code carries S",
    ],
    correct: "A",
    explanation: "The 7th character on the external cause code should match the 7th character of the associated injury or condition code for that encounter.",
    lookFor: "'Injury code D' — match it.",
  },
  {
    topic: "Place of Occurrence",
    scenario: "A patient is treated for a fall injury and the place is documented at the initial encounter. Two weeks later the patient returns for follow-up of the same injury.",
    options: [
      "A. Assign the place of occurrence code again at follow-up",
      "B. Assign Y92.9 at follow-up",
      "C. Do not repeat the place of occurrence code at follow-up",
      "D. Assign a different Y92 code at each visit",
    ],
    correct: "C",
    explanation: "A place of occurrence code is generally assigned once, at the initial encounter for treatment. It isn't repeated at follow-up visits.",
    lookFor: "'Initial encounter' vs. 'follow-up.'",
  },
  {
    topic: "Activity Code Not Applicable",
    scenario: "A patient is treated for an accidental drug poisoning. The coder wants to add a Y93 activity code for what the patient was doing.",
    options: [
      "A. Add Y93.9",
      "B. Do not add an activity code — they aren't applicable to poisonings",
      "C. Add any Y93 code the coder chooses",
      "D. Add Y99.9 instead",
    ],
    correct: "B",
    explanation: "Activity codes are not applicable to poisonings, adverse effects, misadventures, or sequela. (Status codes aren't used with them either.)",
    lookFor: "A poisoning — an excluded situation.",
  },
  {
    topic: "Status Code",
    scenario: "A worker falls from a scaffold on the job. Cause, place, and activity codes are assigned at the initial encounter.",
    options: [
      "A. No status code is needed",
      "B. Y99.9",
      "C. A status code for military activity",
      "D. One Y99 status code showing the person was at work, once at the initial encounter",
    ],
    correct: "D",
    explanation: "A Y99 code is assigned with the other external cause codes to show the person's work status — here, a non-military person at work. It is used once, at the initial encounter.",
    lookFor: "'On the job' plus other external cause codes already present.",
  },
  {
    topic: "Hierarchy — Abuse vs. Transport",
    scenario: "A child is injured in a motor vehicle collision. During the workup, the provider confirms the child was also physically abused by a known caregiver, causing a separate injury.",
    options: [
      "A. The abuse (assault) external cause code takes priority and is first-listed",
      "B. The transport accident code is first-listed",
      "C. Whichever event was documented first",
      "D. No external cause codes are used for abuse",
    ],
    correct: "A",
    explanation: "External cause codes for child and adult abuse take priority over all other external cause codes, including transport accidents. For confirmed abuse with a known perpetrator, Y07 accompanies the assault codes.",
    lookFor: "Two events, one of them confirmed abuse.",
  },
  {
    topic: "Limited Reporting Format",
    scenario: "A registry form has room for only one external cause code. The principal diagnosis is a burn from a house fire, and the record also has a place of occurrence.",
    options: [
      "A. The place of occurrence code",
      "B. The status code",
      "C. The code for the cause and intent most related to the principal diagnosis (the fire)",
      "D. The activity code",
    ],
    correct: "C",
    explanation: "If the reporting format limits the number of external cause codes, report the cause and intent code most related to the principal diagnosis.",
    lookFor: "A one-code limit.",
  },
  {
    topic: "Unknown Intent",
    scenario: "An ED record describes a patient's laceration but never says whether it was accidental, self-inflicted, or caused by another person.",
    options: [
      "A. Undetermined intent",
      "B. Accidental intent",
      "C. Intentional self-harm",
      "D. Assault",
    ],
    correct: "B",
    explanation: "If the intent of the cause of an injury is unknown or unspecified, code the intent as accidental. Undetermined intent requires documentation that the intent cannot be determined.",
    lookFor: "Intent is simply not stated.",
  },
  {
    topic: "Sequela External Cause",
    scenario: "A patient attends a physical therapy visit to regain motion after an injury. No late effect of the injury is documented; the therapy is part of routine rehabilitation.",
    options: [
      "A. Use a sequela external cause code (7th character S)",
      "B. Use a sequela external cause code and a current injury code together",
      "C. Use Y92.9",
      "D. Do not use a sequela external cause code — no late effect is documented",
    ],
    correct: "D",
    explanation: "A late effect external cause code is used only when a late effect of the initial injury is being treated. It isn't used for subsequent visits for follow-up care such as rehabilitation when no late effect has been documented.",
    lookFor: "'Rehabilitation' with no documented late effect.",
  },
  {
    topic: "Terrorism Identified",
    scenario: "The Federal Government (FBI) identifies a bombing as a terrorist act. A patient injured in it is treated, and the record documents where it occurred.",
    options: [
      "A. A Y38 code as the first-listed external cause code, plus a Y92 place of occurrence code",
      "B. A generic assault code",
      "C. Y38.9 only",
      "D. No external cause code",
    ],
    correct: "A",
    explanation: "When the cause is identified as terrorism by the Federal Government (FBI), the first-listed external cause code should be from Y38, with a Y92 place of occurrence code added.",
    lookFor: "Terrorism identified by the Federal Government (FBI).",
  },
  {
    topic: "Terrorism — Initial and Secondary",
    scenario: "A patient injured in an FBI-identified terrorist explosion is treated for the explosion injuries. Later, the same patient develops a condition that is a subsequent result of the event, not of the initial explosion.",
    options: [
      "A. Y38.9 only",
      "B. A generic assault code for both",
      "C. The Y38 code for the initial explosion, plus Y38.9 for the subsequent condition",
      "D. Only the Y38 code for the initial explosion",
    ],
    correct: "C",
    explanation: "Y38.9 (terrorism, secondary effects) is for conditions occurring subsequent to the terrorist event, and it can be assigned with another Y38 code when there is both an injury from the initial event and an injury that is a subsequent result.",
    lookFor: "An initial-act injury plus a later condition.",
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

export default function Icd10Chapter20WorkedExamplesPage() {
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
      <HighlightToolbar />
      <header style={heroStyle}>
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 20 · WORKED EXAMPLES</p>
        <h1 style={{ margin: 0, fontSize: "clamp(24px, 5vw, 38px)" }}>Chapter 20 Worked Examples</h1>
        <p style={{ margin: "10px 0 0", fontSize: "15.5px", lineHeight: 1.5 }}>12 scenario walkthroughs with full reasoning — jump to any question to check its answer directly.</p>
      </header>

      <nav aria-label="ICD-10 navigation" style={navStyle}>
        <Link href="/icd10" style={navLinkStyle}>ICD-10 home</Link>
        <Link href="/icd10/chapter-20-guidelines-reviewer" style={navLinkStyle}>Guidelines Reviewer</Link>
        <Link href="/icd10/chapter-20-practice-quiz" style={navLinkStyle}>Practice Quiz</Link>
      </nav>

      <div style={introStyle}>
        <strong>Big-picture tip:</strong> examples 5 and 6 are a deliberate pair — activity (Y93) and status (Y99) codes are one-time, secondary codes. Example 5 shows them being SKIPPED for a poisoning (they aren't used with poisonings, adverse effects, misadventures, or sequela); example 6 shows a status code being ADDED for an on-the-job fall.</div>

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
