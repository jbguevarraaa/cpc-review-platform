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
    topic: "Dominant/Nondominant Default",
    scenario: "A patient is documented with right-sided monoplegia of the upper limb. Handedness is never mentioned anywhere in the chart.",
    options: [
      "A. Nondominant side default",
      "B. Dominant side default",
      "C. Unspecified side, since handedness wasn't documented",
      "D. Query the provider before coding",
    ],
    correct: "B",
    explanation: "When the affected side is documented but handedness isn't, and the classification gives no other default, a right-sided finding defaults to dominant.",
    lookFor: "\"Right side, handedness unknown\" is a direct trigger for the dominant-side default — no query needed.",
  },
  {
    topic: "Dominant/Nondominant Default",
    scenario: "An ambidextrous patient (explicitly documented) has left-sided hemiplegia.",
    options: [
      "A. Nondominant, following the general left-side default",
      "B. Dominant, following the ambidextrous-patient default",
      "C. Unspecified",
      "D. Bilateral",
    ],
    correct: "B",
    explanation: "The ambidextrous-patient default (dominant) overrides the general left-side default (nondominant) — ambidextrous status has its own named rule that takes precedence.",
    lookFor: "Once \"ambidextrous\" is documented, apply that specific default (dominant) instead of the general left/right defaults.",
  },
  {
    topic: "G89 — Underlying Condition Known",
    scenario: "A patient with a documented history of degenerative disc disease is admitted specifically for a kyphoplasty procedure to treat the underlying spinal stenosis.",
    options: [
      "A. A G89 pain code as principal, with the spinal stenosis as an additional diagnosis",
      "B. The spinal stenosis code as principal; no G89 code assigned",
      "C. G89 and the spinal stenosis code as co-principal diagnoses",
      "D. G89.4, chronic pain syndrome, as principal",
    ],
    correct: "B",
    explanation: "Since the admission is for a procedure aimed at treating the underlying condition (kyphoplasty for spinal stenosis), the underlying condition is coded as principal — no G89 code is assigned in this scenario.",
    lookFor: "\"Procedure aimed at the underlying condition\" always excludes a G89 code, even though the patient clearly has pain.",
  },
  {
    topic: "G89 + Neurostimulator",
    scenario: "A patient undergoes spinal fusion for a diagnosed vertebral fracture. During the same admission, a neurostimulator is also inserted for pain control.",
    options: [
      "A. The pain code as principal, vertebral fracture as secondary",
      "B. The vertebral fracture code as principal, the pain code as secondary",
      "C. Only the pain code is assigned; the fracture is not coded",
      "D. Only the fracture code is assigned; the neurostimulator pain control is not coded",
    ],
    correct: "B",
    explanation: "When a neurostimulator for pain control is inserted during the same admission as a procedure for the underlying condition, the underlying condition remains principal, and the pain code becomes secondary — the neurostimulator alone doesn't flip the pain code to principal.",
    lookFor: "Adding a neurostimulator during an admission that's otherwise FOR the underlying condition doesn't change which code leads — it just adds the pain code as secondary.",
  },
  {
    topic: "G89 Sequencing with Site Codes",
    scenario: "A patient presents for pain management specifically for acute low back pain following a workplace injury.",
    options: [
      "A. The site-specific back pain code first, then the acute pain G89 code",
      "B. The acute pain G89 code first, then the site-specific back pain code",
      "C. The G89 code alone, since the site is already implied",
      "D. The site-specific code alone, since G89 doesn't apply to back pain",
    ],
    correct: "B",
    explanation: "When the stated reason for the encounter is pain management itself, the G89 code (identifying the pain as acute, due to trauma) is sequenced first, followed by the site-specific code for the back pain — mirroring the guideline's own neck-pain example.",
    lookFor: "\"Presents FOR pain management\" always puts the G89 code first, with the site-specific code following it.",
  },
  {
    topic: "Postoperative Pain — Routine",
    scenario: "A patient reports typical incision-site pain in the recovery room a few hours after an uncomplicated appendectomy, with no documented complication.",
    options: [
      "A. G89.18, acute postprocedural pain",
      "B. A Chapter 19 code for the surgical wound",
      "C. Not coded at all",
      "D. G89.28, chronic postprocedural pain",
    ],
    correct: "C",
    explanation: "Routine or expected postoperative pain occurring immediately after surgery, with no specific complication, is not coded at all.",
    lookFor: "\"Typical,\" \"expected,\" and \"no documented complication\" together are the cue to assign no code whatsoever for this pain.",
  },
  {
    topic: "Postoperative Pain — With Complication",
    scenario: "A patient has documented acute pain specifically caused by a retained surgical drain identified as the source of ongoing postoperative discomfort.",
    options: [
      "A. G89.18 alone",
      "B. The appropriate Chapter 19 code for the retained-drain complication, plus G89.18 as an additional code",
      "C. Not coded, since it's postoperative pain",
      "D. A code from category T74",
    ],
    correct: "B",
    explanation: "Postoperative pain tied to a specific identified complication (here, a retained drain) is coded first to the appropriate Chapter 19 complication code, with G89.18 (acute postprocedural pain) added if appropriate.",
    lookFor: "A specifically identified complication (retained drain, painful sutures, etc.) always routes to a Chapter 19 code first, with the G89.1x/G89.2x code as a secondary add-on.",
  },
  {
    topic: "Chronic Pain — No Time Frame",
    scenario: "A patient's pain has been present for three weeks, and the provider's note explicitly documents it as \"chronic low back pain.\"",
    options: [
      "A. Not codeable as chronic, since three weeks doesn't meet a chronic pain time threshold",
      "B. G89.2, chronic pain, based on the provider's own documentation",
      "C. G89.4, chronic pain syndrome",
      "D. Acute pain code, since three weeks is too short to be chronic",
    ],
    correct: "B",
    explanation: "There's no fixed time frame for chronic pain in this guideline — the provider's own documentation of \"chronic\" is what's used, regardless of how short the duration might seem.",
    lookFor: "A short duration doesn't disqualify chronic pain coding when the provider has explicitly documented the term \"chronic\" — there's no minimum time requirement to second-guess.",
  },
  {
    topic: "Neoplasm-Related Pain — Additional Diagnosis",
    scenario: "A cancer patient is admitted for scheduled chemotherapy administration. During the same stay, neoplasm-related pain is also documented, though pain control isn't the reason for the admission.",
    options: [
      "A. G89.3 as principal, chemotherapy encounter as secondary",
      "B. The chemotherapy encounter code as principal, G89.3 as an additional diagnosis, with no separate site-of-pain code needed",
      "C. G89.3 alone, no chemotherapy code needed",
      "D. The chemotherapy encounter code alone; the pain isn't coded since it isn't the reason for the visit",
    ],
    correct: "B",
    explanation: "When the admission reason is neoplasm management (chemotherapy) rather than pain control, G89.3 may still be assigned as an additional diagnosis for the documented neoplasm-related pain — and no separate site-of-pain code is required alongside it.",
    lookFor: "Pain documented during a neoplasm-management encounter (not a pain-control encounter) still gets coded — just as an ADDITIONAL diagnosis, not principal, and without a redundant site code.",
  },
  {
    topic: "Central Pain Syndrome",
    scenario: "A patient develops persistent burning pain on one side of the body following an ischemic stroke. The provider specifically documents this as \"central pain syndrome\" (thalamic pain).",
    options: [
      "A. G89.2, chronic pain",
      "B. G89.4, chronic pain syndrome",
      "C. G89.0, central pain syndrome",
      "D. A code from category G81, hemiplegia and hemiparesis",
    ],
    correct: "C",
    explanation: "G89.0 is coded specifically when the provider documents \"central pain syndrome\" by name — classic post-stroke thalamic pain is the textbook clinical picture this code was created for.",
    lookFor: "\"Central pain syndrome\" documented by name (frequently post-stroke) is the specific trigger for G89.0 — a third, distinct code from both G89.2 (plain chronic pain) and G89.4 (chronic pain syndrome).",
  },
  {
    topic: "Chronic Pain Syndrome — Specific Term Required",
    scenario: "A provider's note explicitly documents \"chronic pain syndrome\" as the diagnosis for a patient with long-standing multifactorial pain.",
    options: [
      "A. G89.2, chronic pain",
      "B. G89.0, central pain syndrome",
      "C. G89.4, chronic pain syndrome",
      "D. Either G89.2 or G89.4, coder's discretion",
    ],
    correct: "C",
    explanation: "G89.4 is coded specifically when the provider documents the named condition \"chronic pain syndrome\" — a distinct, specifically documented diagnosis, not simply implied by long-standing pain.",
    lookFor: "The exact term \"chronic pain syndrome\" being documented (not just paraphrased or implied) is what unlocks G89.4 specifically.",
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

export default function Icd10Chapter6WorkedExamplesPage() {
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
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 6 · WORKED EXAMPLES</p>
        <h1 style={{ margin: 0, fontSize: "clamp(24px, 5vw, 38px)" }}>Chapter 6 Worked Examples</h1>
        <p style={{ margin: "10px 0 0", fontSize: "15.5px", lineHeight: 1.5 }}>11 scenario walkthroughs with full reasoning — jump to any question to check its answer directly.</p>
      </header>

      <nav aria-label="ICD-10 navigation" style={navStyle}>
        <Link href="/icd10" style={navLinkStyle}>ICD-10 home</Link>
        <Link href="/icd10/chapter-6-guidelines-reviewer" style={navLinkStyle}>Guidelines Reviewer</Link>
        <Link href="/icd10/chapter-6-practice-quiz" style={navLinkStyle}>Practice Quiz</Link>
      </nav>

      <div style={introStyle}>
        <strong>Big-picture tip:</strong> almost every G89 question in this chapter (questions 3–11) reduces to one question: "is this encounter FOR pain control, or FOR treating the underlying condition?" Answer that first, and the correct code — and its sequencing — usually follows directly.
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
