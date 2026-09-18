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
    topic: "Type Default",
    scenario: "A 30-year-old patient is admitted with hyperglycemia. The chart documents insulin use but never specifies whether this is type 1 or type 2 diabetes.",
    options: [
      "A. E10.65, Type 1 diabetes with hyperglycemia",
      "B. E11.65, Type 2 diabetes with hyperglycemia, plus Z79.4",
      "C. E13.65, Other specified diabetes with hyperglycemia",
      "D. Query the provider before coding anything",
    ],
    correct: "B",
    explanation: "When type isn't documented but insulin use is confirmed, code E11.- (Type 2 diabetes, the default) plus Z79.4 for the long-term insulin use — this is a defined default, not a query trigger.",
    lookFor: "\"Type not specified\" + \"insulin use confirmed\" together point to E11 plus Z79.4, a specific combination worth memorizing.",
  },
  {
    topic: "Presymptomatic Type 1",
    scenario: "A pediatric patient has positive autoantibody testing consistent with early-stage type 1 diabetes, but has not yet developed any symptoms of diabetes.",
    options: [
      "A. E10.-, standard active type 1 diabetes",
      "B. E10.A-, Type 1 diabetes mellitus, presymptomatic",
      "C. E11.-, Type 2 diabetes (default for unclear type)",
      "D. Z13.1, encounter for screening for diabetes",
    ],
    correct: "B",
    explanation: "E10.A- is specifically for early-stage type 1 diabetes that predates the onset of symptoms — distinct from a standard active type 1 diagnosis, which implies symptomatic disease.",
    lookFor: "\"Positive testing, no symptoms yet\" is the precise clinical picture E10.A- was created to capture.",
  },
  {
    topic: "Remission Documentation",
    scenario: "A patient's endocrinologist writes \"type 2 diabetes, in remission per ADA criteria, no complications\" in today's note.",
    options: [
      "A. E11.9, Type 2 diabetes mellitus without complications",
      "B. E11.A, Type 2 diabetes mellitus without complications, in remission",
      "C. Z86.39, personal history of other endocrine disease",
      "D. Query the provider to clarify \"remission\"",
    ],
    correct: "B",
    explanation: "The provider has explicitly documented \"in remission\" (not \"resolved\" or ambiguous wording), which is exactly the clear documentation needed to assign E11.A directly, no query needed.",
    lookFor: "Explicit \"in remission\" documentation (as opposed to \"resolved\" or unclear wording) is coded directly — the query requirement is specifically for UNCLEAR documentation.",
  },
  {
    topic: "Z79 Combination",
    scenario: "A type 2 diabetic patient's medication list shows long-term use of both an oral hypoglycemic (metformin) and an injectable non-insulin antidiabetic drug (a GLP-1 agonist), with no insulin use at all.",
    options: [
      "A. Z79.4 and Z79.84",
      "B. Z79.4 and Z79.85",
      "C. Z79.84 and Z79.85",
      "D. Z79.85 alone",
    ],
    correct: "C",
    explanation: "Oral hypoglycemic (Z79.84) plus injectable non-insulin antidiabetic (Z79.85) is the correct pairing when insulin isn't used at all — this is the third of the three possible Z79 two-drug combinations.",
    lookFor: "No insulin mentioned anywhere in the scenario is the cue to rule out Z79.4 entirely and look at the oral+injectable-non-insulin pairing instead.",
  },
  {
    topic: "Pump Malfunction — Underdose",
    scenario: "A type 1 diabetic patient's insulin pump has a documented mechanical failure that delivered less insulin than programmed, resulting in diabetic ketoacidosis.",
    options: [
      "A. T85.6- , then T38.3X1-, then the type 1 diabetes with ketoacidosis code",
      "B. T85.6-, then T38.3X6-, then the type 1 diabetes with ketoacidosis code",
      "C. T38.3X6- alone",
      "D. E10.10, type 1 diabetes with ketoacidosis, alone",
    ],
    correct: "B",
    explanation: "Underdose from pump failure is coded T85.6- (mechanical complication) first, then T38.3X6- (underdosing of insulin), plus a code for the diabetes type and the resulting complication (ketoacidosis).",
    lookFor: "\"Less insulin than programmed\" = underdose = the X6- code, not X1- (which is reserved for overdose/poisoning).",
  },
  {
    topic: "Pump Malfunction — Overdose",
    scenario: "A patient's insulin pump malfunctions and delivers a continuous excess dose overnight, causing severe hypoglycemia requiring emergency treatment.",
    options: [
      "A. T85.6-, then T38.3X6-",
      "B. T85.6-, then T38.3X1-",
      "C. T38.3X1- alone, no mechanical complication code needed",
      "D. E11.649, hypoglycemia, alone",
    ],
    correct: "B",
    explanation: "Overdose from pump failure pairs T85.6- (mechanical complication) with T38.3X1- (poisoning by insulin, accidental) — the mirror image of the underdose pairing.",
    lookFor: "\"Excess dose\" / \"too much insulin\" from a pump is the overdose pattern, always pairing with X1-, never X6-.",
  },
  {
    topic: "Secondary Diabetes — Pancreatectomy",
    scenario: "A patient underwent total pancreatectomy for chronic pancreatitis two years ago and now has diabetes requiring insulin as a direct result.",
    options: [
      "A. E11.9 alone",
      "B. E89.1, a category E13 code, and Z90.41",
      "C. Z90.41 alone",
      "D. E08.9, diabetes due to underlying condition, alone",
    ],
    correct: "B",
    explanation: "Postpancreatectomy diabetes is a fixed three-code combination: E89.1 (postprocedural hypoinsulinemia), the category E13 code as principal/first-listed, and Z90.41 (acquired absence of pancreas) as an additional code.",
    lookFor: "\"Pancreas surgically removed\" plus \"diabetes as a result\" is the exact trigger for this specific three-code combination, regardless of how much time has passed since surgery.",
  },
  {
    topic: "Drug-Induced Secondary Diabetes",
    scenario: "A patient on long-term corticosteroid therapy for an autoimmune condition develops diabetes clearly documented as a result of the steroid treatment.",
    options: [
      "A. E11.9 alone",
      "B. A code from category E09 (drug/chemical-induced diabetes) coded per the adverse-effect rules, with the appropriate adverse-effect code",
      "C. E13.9 alone, no additional code needed",
      "D. T38.0X5-, adverse effect of glucocorticoids, alone",
    ],
    correct: "B",
    explanation: "Drug-induced diabetes is coded from category E09, following the general adverse-effect coding rules (Chapter 19) — this requires both the E09 diabetes code AND the specific adverse-effect code for the causative drug.",
    lookFor: "\"Diabetes caused by a medication\" always routes to E09 plus the adverse-effect coding framework — not a standalone E09 or E13 code alone.",
  },
  {
    topic: "Obesity Class vs. Morbid Obesity",
    scenario: "A patient's chart states \"BMI 42\" in the vitals section, but the provider's assessment and plan never uses the word \"obesity\" or documents any obesity class.",
    options: [
      "A. E66.81 with the appropriate 5th character for class 3",
      "B. E66.9, obesity, unspecified",
      "C. No obesity code is assigned based on BMI alone; query the provider if obesity coding is needed",
      "D. E66.2, morbid obesity with alveolar hypoventilation",
    ],
    correct: "C",
    explanation: "Obesity class codes (and obesity diagnoses generally) require actual provider documentation of the condition — a BMI number alone in the vitals section, without the provider documenting obesity or a class, isn't sufficient to assign an obesity code.",
    lookFor: "A BMI number alone, without an accompanying provider diagnosis of obesity, is not enough to code obesity — this is the same general principle as \"a lab value alone doesn't establish a diagnosis.\"",
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

export default function Icd10Chapter4WorkedExamplesPage() {
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
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 4 · WORKED EXAMPLES</p>
        <h1 style={{ margin: 0, fontSize: "clamp(24px, 5vw, 38px)" }}>Chapter 4 Worked Examples</h1>
        <p style={{ margin: "10px 0 0", fontSize: "15.5px", lineHeight: 1.5 }}>9 scenario walkthroughs with full reasoning — jump to any question to check its answer directly.</p>
      </header>

      <nav aria-label="ICD-10 navigation" style={navStyle}>
        <Link href="/icd10" style={navLinkStyle}>ICD-10-CM home</Link>
        <Link href="/icd10/chapter-4-guidelines-reviewer" style={navLinkStyle}>Guidelines Reviewer</Link>
        <Link href="/icd10/chapter-4-practice-quiz" style={navLinkStyle}>Practice Quiz</Link>
      </nav>

      <div style={introStyle}>
        <strong>Big-picture tip:</strong> questions 5 and 6 (pump underdose vs. overdose) are a deliberate mirror pair — same T85.6- opener, opposite second code. That pairing pattern (shared first code, opposite second code based on a single fact) shows up again for Z79 combinations and secondary diabetes causes — read for the ONE fact that flips the answer.
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
