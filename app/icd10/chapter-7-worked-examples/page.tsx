"use client";

import Link from "next/link";
import { useState } from "react";
import { HighlightToolbar } from "../../cpt/surgery/_digestive/highlighter";

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
    topic: "Assigning Glaucoma Codes",
    scenario: "An ophthalmologist documents both primary open-angle glaucoma and steroid-induced glaucoma affecting the same patient's right eye, each clinically distinct.",
    options: [
      "A. One code for the more clinically significant type only",
      "B. As many H40 codes as needed — one for each distinct type documented",
      "C. A single combination code covering both glaucoma types",
      "D. No code until the provider clarifies which type is primary",
    ],
    correct: "B",
    explanation: "The guideline instructs assigning as many H40 codes as needed to identify the type(s), eye, and stage present — two distinct types means two codes.",
    lookFor: "Two genuinely distinct glaucoma diagnoses is a direct cue to use two codes, not to pick just one.",
  },
  {
    topic: "Bilateral Glaucoma — Same Type/Stage, Bilateral Code Exists",
    scenario: "A patient has primary open-angle glaucoma, moderate stage, documented identically in both eyes. A bilateral-specific code exists for this type.",
    options: [
      "A. Two codes, one per eye, both with the moderate-stage character",
      "B. One code — the bilateral-specific code with the seventh character for moderate stage",
      "C. Three codes: right eye, left eye, and a bilateral summary code",
      "D. One code with an unspecified eye designation",
    ],
    correct: "B",
    explanation: "Same type and stage in both eyes, with a bilateral-specific code available, means only that one bilateral code is assigned, with the seventh character for the shared stage.",
    lookFor: "\"Identical type and stage, bilateral code exists\" is the exact trigger for the single bilateral code outcome.",
  },
  {
    topic: "Bilateral Glaucoma — Same Type/Stage, No Bilateral Code",
    scenario: "A patient has the same specific glaucoma type in both eyes, same stage, but that type falls under subcategory H40.20, which has no bilateral-specific code option.",
    options: [
      "A. Two codes, one per eye, since no bilateral code exists",
      "B. One code, for that glaucoma type, with the seventh character for the shared stage",
      "C. No code can be assigned in this situation",
      "D. One code, but leave the eye designation unspecified since bilateral isn't available",
    ],
    correct: "B",
    explanation: "Even without a bilateral-specific code, matching type and stage in both eyes still yields just one code — the type code with the shared stage's seventh character.",
    lookFor: "The absence of a bilateral-specific code doesn't force two codes — the underlying \"same type and stage = one code\" logic still applies.",
  },
  {
    topic: "Bilateral Glaucoma — Different Type",
    scenario: "A patient's right eye has primary angle-closure glaucoma while the left eye has glaucoma secondary to eye trauma — two genuinely different types, and the classification distinguishes laterality for both.",
    options: [
      "A. One bilateral code covering both types",
      "B. Two separate codes, one for each eye's specific type",
      "C. One code for the more severe type only",
      "D. No code until the types are reconciled into one diagnosis",
    ],
    correct: "B",
    explanation: "When each eye has a genuinely different type of glaucoma and the classification distinguishes laterality, a separate code is assigned for each eye — not a shared bilateral code.",
    lookFor: "Different TYPES in each eye is a direct trigger for two separate, eye-specific codes.",
  },
  {
    topic: "Bilateral Glaucoma — Same Type, Different Stage",
    scenario: "A patient has the same glaucoma type in both eyes (falling under H40.10, no laterality distinction), but the right eye is mild stage while the left eye is severe stage.",
    options: [
      "A. One code, using the more severe (left eye) stage for both",
      "B. Two codes, same type, each with its own eye's stage character",
      "C. One code, using an averaged \"moderate\" stage",
      "D. No code, since mismatched stages require a query",
    ],
    correct: "B",
    explanation: "When the same type has different stages in each eye and laterality isn't distinguished by the classification, a code is assigned for each eye with that eye's own specific seventh character for stage.",
    lookFor: "Different STAGES between the two eyes (even with the same type) still requires two codes, distinguished only by their seventh characters.",
  },
  {
    topic: "Glaucoma Stage Progression",
    scenario: "A patient is admitted with glaucoma documented as moderate stage. Two days into the stay, a follow-up exam documents progression to severe stage, and the patient is discharged at that severity.",
    options: [
      "A. Moderate stage, since that was the admission finding",
      "B. Severe stage, the highest stage documented during the admission",
      "C. Two codes: one for moderate, one for severe",
      "D. Indeterminate stage, since it changed during the stay",
    ],
    correct: "B",
    explanation: "When glaucoma stage progresses during a single admission, one code is assigned for the highest stage documented at any point during that admission.",
    lookFor: "Same-admission progression always resolves to ONE code, at the HIGHEST stage reached — mirroring the same pattern used for dementia severity in Chapter 5.",
  },
  {
    topic: "Indeterminate Stage",
    scenario: "An ophthalmologist examines a patient and documents that, based on current visual field testing limitations, the glaucoma stage cannot be clinically determined at this time.",
    options: [
      "A. Seventh character \"0\", unspecified",
      "B. Seventh character \"4\", indeterminate stage",
      "C. No seventh character is required",
      "D. Seventh character \"9\", other specified",
    ],
    correct: "B",
    explanation: "A documented clinical conclusion that the stage cannot be determined is coded with seventh character \"4\" (indeterminate stage) — a genuine clinical finding, not a documentation gap.",
    lookFor: "An ACTIVE, documented clinical assessment that staging isn't determinable is what unlocks \"4\", distinct from silence on the topic.",
  },
  {
    topic: "Unspecified Stage",
    scenario: "A general practice note mentions a patient has \"glaucoma, right eye\" as part of the problem list, with absolutely no mention of stage anywhere in the record.",
    options: [
      "A. Seventh character \"4\", indeterminate stage",
      "B. Seventh character \"0\", unspecified",
      "C. No code can be assigned without a stage",
      "D. Query the provider before any code can be assigned",
    ],
    correct: "B",
    explanation: "When there is no documentation at all about the glaucoma's stage, seventh character \"0\" (unspecified) is used — this is a documentation gap, not a clinical indeterminate finding.",
    lookFor: "\"No mention of stage anywhere\" (as opposed to an active clinical statement that it can't be determined) is the specific cue for \"0\", not \"4\".",
  },
  {
    topic: "Blindness — Both Eyes, No Category",
    scenario: "A patient's chart documents \"low vision, both eyes\" following a comprehensive eye exam, but no specific visual impairment category (like a particular severity classification) is documented.",
    options: [
      "A. H54.6-, unqualified visual loss, one eye",
      "B. H54.7, unspecified visual loss",
      "C. H54.3, unqualified visual loss, both eyes",
      "D. No code without the specific category",
    ],
    correct: "C",
    explanation: "Both eyes documented, but no specific impairment category, is the defined trigger for H54.3 (unqualified visual loss, both eyes).",
    lookFor: "\"Both eyes\" clearly stated, category absent, is the H54.3 pattern — don't confuse it with the one-eye or unspecified-eyes code families.",
  },
  {
    topic: "Blindness — One Eye, No Category",
    scenario: "A follow-up eye exam note documents \"low vision, right eye\" with no mention of the left eye's status and no specific visual impairment category stated.",
    options: [
      "A. H54.3, unqualified visual loss, both eyes",
      "B. A code from H54.6-, unqualified visual loss, one eye",
      "C. H54.7, unspecified visual loss",
      "D. Query the provider before coding anything",
    ],
    correct: "B",
    explanation: "One eye documented as affected (right eye), with no specific impairment category stated, is the defined trigger for a code from H54.6- (unqualified visual loss, one eye).",
    lookFor: "A specific eye named (right or left), with the category missing, is the H54.6- pattern — distinct from both the both-eyes code (H54.3) and the eyes-unknown code (H54.7).",
  },
  {
    topic: "Blindness — Eyes Not Specified",
    scenario: "An intake note for a new patient simply states \"history of visual loss\" with no documentation of which eye(s) are affected, and no impairment category given.",
    options: [
      "A. H54.3, unqualified visual loss, both eyes",
      "B. H54.6-, unqualified visual loss, one eye",
      "C. H54.7, unspecified visual loss",
      "D. Query the provider before coding anything",
    ],
    correct: "C",
    explanation: "When it's not even documented whether one or both eyes are affected, H54.7 (unspecified visual loss) applies — the correct code when the number of affected eyes itself is unknown.",
    lookFor: "The distinguishing detail here is that even the NUMBER of eyes affected is missing — not just the impairment category, which is the key difference from the H54.3/H54.6- scenarios.",
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

export default function Icd10Chapter7WorkedExamplesPage() {
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
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 7 · WORKED EXAMPLES</p>
        <h1 style={{ margin: 0, fontSize: "clamp(24px, 5vw, 38px)" }}>Chapter 7 Worked Examples</h1>
        <p style={{ margin: "10px 0 0", fontSize: "15.5px", lineHeight: 1.5 }}>11 scenario walkthroughs with full reasoning — jump to any question to check its answer directly.</p>
      </header>

      <nav aria-label="ICD-10 navigation" style={navStyle}>
        <Link href="/icd10" style={navLinkStyle}>ICD-10 home</Link>
        <Link href="/icd10/chapter-7-guidelines-reviewer" style={navLinkStyle}>Guidelines Reviewer</Link>
        <Link href="/icd10/chapter-7-practice-quiz" style={navLinkStyle}>Practice Quiz</Link>
      </nav>

      <div style={introStyle}>
        <strong>Big-picture tip:</strong> questions 2 and 3 are a deliberate pair (same type/stage in both eyes, but one WITH a bilateral code and one WITHOUT) — the outcome is identical (one code) either way. That's the core insight of this chapter's bilateral rules: ask "do type AND stage match?" first, and only then worry about whether a dedicated bilateral code happens to exist.
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
