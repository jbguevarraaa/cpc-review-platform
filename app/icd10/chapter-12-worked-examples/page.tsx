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
    topic: "Multiple Pressure Ulcers",
    scenario: "A bedbound patient's skin exam documents a stage 1 pressure ulcer on the right elbow, a stage 2 pressure ulcer on the left heel, and unstageable (eschar-covered) tissue damage on the sacrum, all at the same encounter.",
    options: [
      "A. One code for the sacral finding only, since it's the most severe",
      "B. Three separate L89 codes — one for each distinct site and finding",
      "C. One combined code covering all three sites",
      "D. Two codes, combining the two staged ulcers into one code and the unstageable finding separately",
    ],
    correct: "B",
    explanation: "As many L89 codes as needed are assigned to identify all the pressure ulcers a patient has — three genuinely distinct findings at three distinct sites get three separate codes.",
    lookFor: "Count the number of distinct pressure ulcer findings documented, regardless of severity — each gets its own code.",
  },
  {
    topic: "Non-Provider Stage Documentation",
    scenario: "A hospitalist's note mentions a pressure ulcer but doesn't specify its stage. The wound-care nurse's assessment note, filed the same day, documents it as stage 3. The coder is unsure whether the nurse's documentation alone can be used.",
    options: [
      "A. No — the coder must query the hospitalist directly before using stage 3",
      "B. Yes — pressure ulcer stage documented by a clinician other than the treating provider (like a wound-care nurse) can be used for code assignment",
      "C. No — only nursing documentation co-signed by the physician within 24 hours counts",
      "D. No code can be assigned until both notes agree",
    ],
    correct: "B",
    explanation: "Pressure ulcer stage is specifically documentable by clinicians other than the patient's treating provider, and that documentation can be used directly for code assignment — a named exception to the general rule requiring provider documentation.",
    lookFor: "A wound-care nurse's stage documentation is explicitly sufficient on its own for this specific detail (stage), even without physician confirmation.",
  },
  {
    topic: "Unstageable — Eschar",
    scenario: "A sacral pressure ulcer is documented as covered by a thick layer of eschar, and the provider notes the true depth and stage cannot be determined until the eschar is debrided.",
    options: [
      "A. L89.––9, unspecified stage",
      "B. Stage 4, assumed from the eschar covering",
      "C. L89.––0, unstageable",
      "D. Query the provider for a specific stage estimate",
    ],
    correct: "C",
    explanation: "An ulcer whose stage cannot be clinically determined because it's covered by eschar is coded as unstageable (L89.––0) — a genuine clinical finding.",
    lookFor: "Eschar specifically preventing stage determination is the classic unstageable scenario, not a documentation gap.",
  },
  {
    topic: "Unstageable — Revealed After Debridement",
    scenario: "During today's encounter, the previously eschar-covered, unstageable sacral ulcer from the prior note is debrided, and the underlying tissue reveals a stage 4 pressure ulcer.",
    options: [
      "A. L89.––0 (unstageable) plus the stage 4 code, both reported",
      "B. Only the stage 4 code",
      "C. Only L89.––0 (unstageable), since that was the working diagnosis this admission",
      "D. L89.––9, unspecified stage, since the finding changed mid-encounter",
    ],
    correct: "B",
    explanation: "Once debridement during the encounter reveals the true stage of a previously unstageable ulcer, only the code for the stage revealed following debridement is assigned.",
    lookFor: "\"Revealed after debridement, same encounter\" always drops the unstageable code in favor of the newly known stage.",
  },
  {
    topic: "Unspecified — No Documentation",
    scenario: "A pressure ulcer is noted in a nursing home transfer summary, but no part of the record — physician or otherwise — documents any information about its stage.",
    options: [
      "A. L89.––0, unstageable",
      "B. Stage 1, as the safest default assumption",
      "C. L89.––9, unspecified stage",
      "D. No code at all, since no stage was ever given",
    ],
    correct: "C",
    explanation: "When there is simply no documentation at all regarding a pressure ulcer's stage, the unspecified stage code (L89.––9) is assigned.",
    lookFor: "A total absence of stage documentation (not a clinical barrier to staging) is the specific trigger for the unspecified code.",
  },
  {
    topic: "Documented Stage — Unfamiliar Term, Query",
    scenario: "A provider describes a pressure ulcer using a specific clinical term that isn't found in the Alphabetic Index, and no other part of the documentation describes the stage in more familiar terms.",
    options: [
      "A. Assign the unspecified stage code and move on",
      "B. Research the term online and assign the closest-matching stage",
      "C. Query the provider for clarification",
      "D. Assign the unstageable code, since the term is unfamiliar",
    ],
    correct: "C",
    explanation: "For clinical terms describing the stage that aren't found in the Alphabetic Index, with no other stage documentation available, the provider should be queried rather than a coder guessing.",
    lookFor: "An unfamiliar, non-Index term with nothing else to go on is a direct query trigger, not a guessing exercise.",
  },
  {
    topic: "Current vs. Healing — Query",
    scenario: "A patient readmitted after a recent discharge has a pressure ulcer noted on exam, but it's unclear from the documentation whether this is a brand-new ulcer or the same one from before, now healing.",
    options: [
      "A. Assume it's the same healing ulcer and code it as such",
      "B. Assume it's a new ulcer at its current stage",
      "C. Query the provider to determine whether it's new or healing",
      "D. Code it as both, to be safe",
    ],
    correct: "C",
    explanation: "If it's unclear whether the patient has a current (new) pressure ulcer or is being treated for a healing one, the provider should be queried.",
    lookFor: "New-vs-healing ambiguity is its own distinct query trigger, separate from ambiguity about the stage itself.",
  },
  {
    topic: "Healed at Admission",
    scenario: "A pre-admission note documents that a patient's previously known heel pressure ulcer is now completely healed, with intact skin confirmed on today's exam.",
    options: [
      "A. Code the last known stage before it healed",
      "B. No code is assigned for this ulcer",
      "C. L89.––9, unspecified stage",
      "D. A personal history code from category Z87",
    ],
    correct: "B",
    explanation: "No code is assigned if documentation states the pressure ulcer is completely healed at the time of admission.",
    lookFor: "\"Completely healed\" at admission means no L89 code at all for that ulcer — not even at its last known stage.",
  },
  {
    topic: "Healing, Stage Documented",
    scenario: "A follow-up wound clinic note documents a \"healing stage 3 sacral pressure ulcer, granulation tissue present, decreasing in size.\"",
    options: [
      "A. No code, since it's improving",
      "B. L89.––9, unspecified stage",
      "C. The stage 3 pressure ulcer code",
      "D. Query the provider, since granulation tissue complicates staging",
    ],
    correct: "C",
    explanation: "A pressure ulcer described as healing (not yet fully healed) is assigned the appropriate stage code based on the documentation — here, stage 3.",
    lookFor: "\"Healing\" plus a specific stage given means code that specific stage directly — improvement doesn't change the coding logic.",
  },
  {
    topic: "Healing, No Stage Given",
    scenario: "A progress note documents \"pressure ulcer, sacrum, healing well\" with no mention of a specific stage anywhere in the note or the rest of the record.",
    options: [
      "A. No code, since it's healing",
      "B. The code for unspecified stage",
      "C. Stage 1, since it's described as healing well",
      "D. Query the provider before any code can be assigned",
    ],
    correct: "B",
    explanation: "If documentation about a healing pressure ulcer doesn't specify the stage, the appropriate code for unspecified stage is assigned — still coded, just at unspecified severity.",
    lookFor: "A healing ulcer with no stage given is still coded (unlike a completely healed one) — the fallback here is the unspecified-stage code, not \"no code.\"",
  },
  {
    topic: "Present on Admission, Healed by Discharge",
    scenario: "Admission documentation notes a stage 2 heel pressure ulcer. By the time of discharge five days later, the discharge summary states the ulcer has fully healed.",
    options: [
      "A. No code, since the ulcer was healed by discharge",
      "B. The stage 2 heel pressure ulcer code, based on the admission documentation",
      "C. L89.––9, unspecified stage, since the status changed during the stay",
      "D. Two codes: one for stage 2 and one indicating it later healed",
    ],
    correct: "B",
    explanation: "For pressure ulcers present on admission but healed by discharge, the code for the site and stage as documented AT ADMISSION is assigned — the ulcer having healed during the stay doesn't erase that code.",
    lookFor: "Present-on-admission-but-healed-by-discharge always codes the admission-time finding, never \"no code.\"",
  },
  {
    topic: "Two-Code Progression",
    scenario: "A patient is admitted with a documented stage 1 coccyx pressure ulcer. By hospital day 4, the wound has progressed and is now documented as stage 3.",
    options: [
      "A. One code, for stage 3 (the highest stage reached)",
      "B. One code, for stage 1 (the admission stage)",
      "C. Two codes: stage 1 (admission) and stage 3 (highest stage reached)",
      "D. One code, for stage 2, as a compromise between the two findings",
    ],
    correct: "C",
    explanation: "Pressure ulcer stage progression during an admission is a two-code rule: one code for the admission stage, and a second code for the same site at the highest stage reached during the stay.",
    lookFor: "This is the single highest-yield trap in the chapter — don't apply the \"one code for highest severity\" pattern used elsewhere in ICD-10-CM to pressure ulcers.",
  },
  {
    topic: "Pressure-Induced Deep Tissue Damage",
    scenario: "A patient's sacral skin shows a documented finding of pressure-induced deep tissue damage — a purple, intact-skin finding the provider explicitly distinguishes from a staged ulcer.",
    options: [
      "A. Stage 4 pressure ulcer code, since deep tissue damage is presumed most severe",
      "B. The dedicated deep tissue damage code (L89.––6)",
      "C. L89.––9, unspecified stage",
      "D. No code until it progresses to an open wound",
    ],
    correct: "B",
    explanation: "Pressure-induced deep tissue damage (deep tissue pressure injury) is assigned only the dedicated L89.––6 code — a distinct clinical entity from the numbered stages, not simply an especially severe stage 4.",
    lookFor: "The provider explicitly distinguishing deep tissue damage from a staged ulcer is the direct cue for L89.––6 specifically.",
  },
  {
    topic: "Non-Pressure Ulcer — Healing, Severity Given",
    scenario: "A wound clinic note documents a \"healing venous stasis ulcer, moderate severity, decreasing drainage\" on the patient's lower leg.",
    options: [
      "A. No code, since the ulcer is described as healing",
      "B. The non-pressure ulcer code at the documented moderate severity",
      "C. The code for unspecified severity, since \"healing\" makes the severity uncertain",
      "D. Query the provider, since drainage amount isn't a valid severity indicator",
    ],
    correct: "B",
    explanation: "Non-pressure ulcers described as healing are assigned the appropriate code based on the documented severity — here, moderate — the exact same logic as a healing pressure ulcer with a stage given.",
    lookFor: "\"Healing\" plus a specific severity level given means code that severity directly, mirroring the pressure-ulcer healing-with-stage rule point for point.",
  },
  {
    topic: "Non-Pressure Ulcer — Two-Code Progression",
    scenario: "A patient is admitted with a documented venous stasis ulcer (non-pressure) at a mild severity level. During the stay, it's redocumented at a more severe level due to worsening tissue involvement.",
    options: [
      "A. One code, for the more severe level only",
      "B. One code, for the admission (mild) level only",
      "C. Two codes: one for the admission severity and one for the highest severity reached",
      "D. No code, since severity terminology varies by provider",
    ],
    correct: "C",
    explanation: "Non-pressure ulcer progression to a higher severity level during an admission mirrors the pressure ulcer rule exactly: two codes, one for the admission severity and one for the highest severity level reported during the stay.",
    lookFor: "The two-code progression rule is identical for non-pressure ulcers — this chapter's rules for L97/L98.4 parallel the L89 rules point for point.",
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

export default function Icd10Chapter12WorkedExamplesPage() {
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
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 12 · WORKED EXAMPLES</p>
        <h1 style={{ margin: 0, fontSize: "clamp(24px, 5vw, 38px)" }}>Chapter 12 Worked Examples</h1>
        <p style={{ margin: "10px 0 0", fontSize: "15.5px", lineHeight: 1.5 }}>15 scenario walkthroughs with full reasoning — jump to any question to check its answer directly.</p>
      </header>

      <nav aria-label="ICD-10 navigation" style={navStyle}>
        <Link href="/icd10" style={navLinkStyle}>ICD-10 home</Link>
        <Link href="/icd10/chapter-12-guidelines-reviewer" style={navLinkStyle}>Guidelines Reviewer</Link>
        <Link href="/icd10/chapter-12-practice-quiz" style={navLinkStyle}>Practice Quiz</Link>
      </nav>

      <div style={introStyle}>
        <strong>Big-picture tip:</strong> questions 3 and 4 are a deliberate pair — the SAME ulcer, first unstageable (eschar-covered), then revealed by debridement to be a specific stage. Once the stage is revealed, the unstageable code drops out entirely. That pattern (a provisional code replaced once more information is known, not stacked alongside it) is worth watching for elsewhere in this chapter too.
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
