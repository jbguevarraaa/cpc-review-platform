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
    topic: "Uncertain Diagnosis",
    scenario: "A patient reports a dull ache and occasional sharp pain in the right calf, along with swelling, redness, and a low-grade fever. The provider suspects a possible embolism in the right femoral vein and orders venous plethysmography to investigate further.",
    options: [
      "A. I82.411",
      "B. I82.411, M79.661, M79.89, R50.9",
      "C. M79.661, M79.89, I82.411, R50.9",
      "D. M79.661, M79.89, R50.9",
    ],
    correct: "D",
    explanation: "The embolism is only \"suspected\" and is actively being investigated with a test — it hasn't been confirmed. In this outpatient encounter, that means only the documented signs and symptoms are coded: right calf pain (M79.661), the swelling/redness (M79.89), and the fever (R50.9). None of the answer choices that include I82.411 are correct, since that condition was never actually confirmed.",
    lookFor: "\"Suspected,\" \"probable,\" \"rule out,\" or \"ordered a test to investigate\" all point to the same rule: code the symptoms, not the condition being worked up.",
  },
  {
    topic: "Uncertain Diagnosis",
    scenario: "A patient is seen for abdominal pain that the provider believes may be related to alcohol-induced acute pancreatitis. Treatment includes nasogastric suction, IV fluids, and pain management.",
    options: [
      "A. K85.90, R10.9",
      "B. R10.9",
      "C. K85.20, R10.0",
      "D. R10.0",
    ],
    correct: "B",
    explanation: "\"Believes may be related to\" is provisional language — the pancreatitis (K85.90) isn't confirmed, so only the presenting symptom is coded: abdominal pain, unspecified (R10.9). R10.0 (acute abdomen) isn't used here because that specific term was never documented.",
    lookFor: "Watch for two traps in one question: the uncertain-diagnosis rule (skip K85.90) and the specificity trap (R10.9 vs. R10.0 — only use R10.0 if \"acute abdomen\" is the actual documented term).",
  },
  {
    topic: "Uncertain Diagnosis",
    scenario: "A patient is seen for loss of appetite that has led to a significant drop in body weight over the past three months. The provider's working impression is anorexia nervosa, and the patient is started on a weight-gain program with nutrition counseling.",
    options: [
      "A. F50.00, R63.4, R63.0",
      "B. R63.0, R63.4",
      "C. R63.0, F50.00",
      "D. F50.00",
    ],
    correct: "B",
    explanation: "A \"working impression\" is provisional by definition — so the eating disorder diagnosis (F50.00) isn't coded. Instead, code the actual documented findings: loss of appetite (R63.0, the symptom \"anorexia\") and abnormal weight loss (R63.4).",
    lookFor: "R63.0 (\"Anorexia,\" the symptom) and F50.00 (\"Anorexia nervosa,\" the eating disorder) sound alike but are not interchangeable — this question is specifically testing that distinction on top of the uncertain-diagnosis rule.",
  },
  {
    topic: "Combination Codes",
    scenario: "A patient reports two days of painful urination and dark, amber-colored urine. Urinalysis comes back positive for blood. The provider documents acute cystitis with hematuria.",
    options: [
      "A. N30.01",
      "B. R31.0, N30.01",
      "C. N30.01, R31.29",
      "D. N30.01, R31.9",
    ],
    correct: "A",
    explanation: "N30.01 (Acute cystitis with hematuria) is a combination code that already bundles the hematuria into it — adding any separate R31.x hematuria code on top would duplicate information the combination code already captures.",
    lookFor: "Whenever a \"with [symptom]\" combination code exists and matches the documentation exactly, that's your only code.",
  },
  {
    topic: "Symptom + Definitive Diagnosis",
    scenario: "A 65-year-old reports needing to urinate frequently during the day and waking multiple times at night to urinate. The provider's diagnosis is benign prostatic hyperplasia.",
    options: [
      "A. N40.1",
      "B. R35.1, R35.0, R39.15",
      "C. N40.3",
      "D. N40.1, R35.0, R35.1",
    ],
    correct: "D",
    explanation: "Unlike the cystitis example above, benign prostatic hyperplasia (N40.1) does not have a combination code that captures its urinary symptoms. Instead, the Tabular List specifically instructs coders to add codes for the associated lower urinary tract symptoms — so frequency (R35.0) and nocturia (R35.1) are reported alongside N40.1.",
    lookFor: "This is the exception that proves the rule: \"don't separately code routine symptoms\" only holds until the specific code you're using has its own \"use additional code\" instruction overriding it. Always check the code itself, not just the general chapter rule.",
  },
  {
    topic: "Combination Codes",
    scenario: "A patient with a history of opioid dependence since his late teens has become increasingly agitated over the past couple of weeks, and now reports seeing people around his house who intend to harm him. The provider documents opioid dependence with an opioid-induced psychotic disorder with hallucinations.",
    options: [
      "A. R44.0, R46.2",
      "B. F11.251",
      "C. R46.2, F11.29, R44.0",
      "D. F11.20, F29, R44.0",
    ],
    correct: "B",
    explanation: "F11.251 already spells out \"opioid dependence with opioid-induced psychotic disorder with hallucinations\" in the code descriptor itself — every symptom mentioned is already baked in, so no additional codes are needed.",
    lookFor: "The longer and more specific a combination code's descriptor reads, the more likely it already accounts for every symptom in the scenario — read the full descriptor before adding anything else.",
  },
  {
    topic: "Coma Scale",
    scenario: "A patient is brought to the emergency department after a motor vehicle collision. On assessment, his eye-opening score is 4, verbal response score is 4, and motor response score is 6, for a total of 14.",
    options: [
      "A. R40.2412, R40.2142, R40.2242, R40.2362",
      "B. R40.2142, R40.2242, R40.2362",
      "C. R40.2142, R40.2241, R40.2361",
      "D. R40.2412",
    ],
    correct: "B",
    explanation: "Because all three individual scores were documented, all three component codes are reported — each with a matching 7th character showing when the scale was recorded. A total-score code is never added on top of the three individual codes; that code family is reserved for when only the total is documented.",
    lookFor: "Individual eye/verbal/motor scores documented → three component codes only. Adding a total-score code on top (like option A does) is double-reporting the same information.",
  },
  {
    topic: "Coma Scale",
    scenario: "EMS finds a patient unconscious after a fall from a ladder and documents only a total coma score of 8, with no individual eye, verbal, or motor breakdown recorded.",
    options: [
      "A. R40.2413",
      "B. R40.2420",
      "C. R40.2441",
      "D. R40.2431",
    ],
    correct: "D",
    explanation: "Since only the total score was documented — no component breakdown — the single total-score code family (R40.24-) applies, with the score value and the correct 7th character for when it was recorded (in the field, by EMS).",
    lookFor: "Total-only documentation always means one code, not three. This is the mirror image of the previous question.",
  },
  {
    topic: "Laterality + Uncertain Diagnosis",
    scenario: "A patient is admitted with severe pain affecting both hands and both hips. The provider's impression is suspected rheumatoid arthritis with associated inflammatory myopathy.",
    options: [
      "A. M25.549, M25.579",
      "B. M25.541, M25.542, M25.551, M25.552",
      "C. M05.49",
      "D. M05.49, M25.549, M25.579",
    ],
    correct: "B",
    explanation: "Two rules stack here: the rheumatoid arthritis is only \"suspected,\" so the confirmed-disease code (M05.49) isn't used — the joint pain symptom is coded instead. And the joint-pain code family has no combined \"bilateral\" code, so each side is reported separately: right hand (M25.541), left hand (M25.542), right hip (M25.551), left hip (M25.552).",
    lookFor: "Don't assume every body-part code family has a bilateral option — joint pain codes specifically require separate right/left codes, which is why four codes are correct here instead of two.",
  },
  {
    topic: "Uncertain Diagnosis",
    scenario: "A 2-year-old is brought in with several days of malaise, poor appetite, and a worsening cough, now accompanied by some shortness of breath. A chest X-ray shows infiltrates in both lungs, and the provider notes the picture appears consistent with viral pneumonia.",
    options: [
      "A. J12.9",
      "B. R53.81, R63.0, R05.9, R06.02, R91.8",
      "C. J18.9, R06.02, R91.8",
      "D. J12.9, R05.9, R53.81, R63.0",
    ],
    correct: "B",
    explanation: "\"Appears consistent with\" is uncertain-diagnosis language, so viral pneumonia (J12.9) isn't coded. Every individual finding gets its own symptom code instead: malaise (R53.81), loss of appetite (R63.0), cough (R05.9), shortness of breath (R06.02), and the abnormal chest X-ray finding itself (R91.8).",
    lookFor: "An imaging finding described but not tied to a confirmed diagnosis (like \"infiltrates\") gets its own abnormal-finding code (R91.8) rather than being folded into a respiratory diagnosis code.",
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

export default function Icd10Chapter18WorkedExamplesPage() {
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
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 18 · WORKED EXAMPLES</p>
        <h1 style={{ margin: 0, fontSize: "clamp(24px, 5vw, 38px)" }}>Chapter 18 Worked Examples</h1>
        <p style={{ margin: "10px 0 0", fontSize: "15.5px", lineHeight: 1.5 }}>10 scenario walkthroughs with full reasoning — jump to any question to check its answer directly.</p>
      </header>

      <nav aria-label="ICD-10 navigation" style={navStyle}>
        <Link href="/icd10" style={navLinkStyle}>ICD-10-CM home</Link>
        <Link href="/icd10/chapter-18-guidelines-reviewer" style={navLinkStyle}>Guidelines Reviewer</Link>
        <Link href="/icd10/chapter-18-practice-quiz" style={navLinkStyle}>Practice Quiz</Link>
      </nav>

      <div style={introStyle}>
        <strong>Big-picture tip:</strong> 5 of these 10 questions test the exact same rule — uncertain/provisional language ("suspected," "probable," "working diagnosis," "appears consistent with") always means code the symptom, not the suspected condition. Spot that pattern and half the quiz gets easier.
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
