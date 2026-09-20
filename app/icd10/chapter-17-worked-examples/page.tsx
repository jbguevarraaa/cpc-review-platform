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
    topic: "Sequencing — Two Q Codes",
    scenario: "A 4-month-old is admitted for planned surgical repair of an atrial septal defect (unspecified). The chart also documents Down syndrome (unspecified).",
    options: [
      "A. Q21.10, then Q90.9",
      "B. Q90.9, then Q21.10",
      "C. Q21.10 only",
      "D. Q90.9 only",
    ],
    correct: "A",
    explanation: "Both are Chapter 17 codes, and either can be first-listed. The reason for the admission is the septal defect repair, so Q21.10 is first-listed and Down syndrome (Q90.9) is secondary.",
    lookFor: "Two congenital codes — sequence by the reason for the encounter, not by which is the underlying cause.",
  },
  {
    topic: "Q Code as a Secondary Diagnosis",
    scenario: "A 19-year-old with documented Down syndrome (unspecified) is admitted for pneumonia. The provider documents the pneumonia as the reason for the admission.",
    options: [
      "A. Q90.9 first, then the pneumonia code",
      "B. Q90.9 only",
      "C. Omit Q90.9 — Q codes are only for children",
      "D. The pneumonia code first, then Q90.9 as a secondary diagnosis",
    ],
    correct: "D",
    explanation: "A malformation or chromosomal abnormality can be a secondary diagnosis, and Chapter 17 codes may be used throughout life. The pneumonia is the reason for the admission, so it is first-listed.",
    lookFor: "A lifelong chromosomal abnormality on an admission for something else.",
  },
  {
    topic: "No Unique Code",
    scenario: "A provider documents a rare congenital malformation syndrome that has no specific code. The child also has documented seizures and hearing loss.",
    options: [
      "A. Q87.89 only — the manifestations are inherent",
      "B. Q87.89 plus separate codes for the seizures and the hearing loss",
      "C. Codes for the seizures and hearing loss only",
      "D. Q89.7 plus codes for the seizures and hearing loss",
    ],
    correct: "B",
    explanation: "When an anomaly has no unique code, assign additional codes for any manifestations present. Q87.89 reports the syndrome, and each documented manifestation gets its own code.",
    lookFor: "The words 'no specific code' — that signals the general 'other specified' landing spot and manifestation codes.",
  },
  {
    topic: "Multiple Malformations NOS",
    scenario: "The discharge summary says 'multiple congenital anomalies' but doesn't list any of them. Hearing loss is documented.",
    options: [
      "A. Q89.7 only",
      "B. Codes for the malformations the coder thinks are likely",
      "C. Q89.7 plus a code for the hearing loss",
      "D. A hearing loss code only",
    ],
    correct: "C",
    explanation: "Q89.7 is the general multiple-malformation code, so the documented manifestation (hearing loss) is coded in addition. No specific malformation is assumed.",
    lookFor: "An unnamed set of anomalies — the general code plus manifestations.",
  },
  {
    topic: "Inherent Manifestation",
    scenario: "A newborn's record documents lumbar spina bifida with hydrocephalus.",
    options: [
      "A. Q05.2 only",
      "B. Q05.7 and Q03.9",
      "C. Q05.2 and Q03.9",
      "D. Q03.9 only",
    ],
    correct: "A",
    explanation: "The spina bifida codes come in 'with hydrocephalus' and 'without hydrocephalus' versions. Q05.2 already includes the hydrocephalus, so a separate hydrocephalus code isn't added.",
    lookFor: "A combination code whose title already includes the second condition.",
  },
  {
    topic: "Non-Inherent Manifestation",
    scenario: "The same patient's chart documents paraplegia resulting from the spina bifida.",
    options: [
      "A. No additional code — paraplegia is part of spina bifida",
      "B. Replace Q05.2 with a paraplegia code",
      "C. Q07.0- as an additional code",
      "D. G82.2- as an additional code",
    ],
    correct: "D",
    explanation: "The Q05 category says to use an additional code for any associated paraplegia (G82.2-). Paraplegia is not an inherent component of the spina bifida code, so it is coded separately.",
    lookFor: "A 'use additional code' note in the Tabular List.",
  },
  {
    topic: "Separate Malformation",
    scenario: "A toddler with Down syndrome is documented with a ventricular septal defect.",
    options: [
      "A. Down syndrome code only",
      "B. Both codes",
      "C. Ventricular septal defect code only",
      "D. A single combination code",
    ],
    correct: "B",
    explanation: "Only manifestations inherent to a specific code are left out. The Down syndrome code doesn't describe a ventricular septal defect, so the defect is coded in addition.",
    lookFor: "A separately identified malformation, not part of the syndrome code's wording.",
  },
  {
    topic: "Corrected Malformation",
    scenario: "A 27-year-old is seen for a routine physical. The history notes a congenital heart defect that was repaired at age 3, with no residual defect.",
    options: [
      "A. Z87.74, personal history of (corrected) congenital malformations of the heart and circulatory system",
      "B. The Q code for the heart defect",
      "C. Both a Q code and Z87.74",
      "D. No code",
    ],
    correct: "A",
    explanation: "If a congenital malformation or deformity has been corrected, a personal history code (Z87.7-) is used instead of the Q code. The Index lists a corrected heart malformation under Z87.74.",
    lookFor: "'Repaired … no residual defect' means corrected.",
  },
  {
    topic: "Uncorrected Malformation in an Adult",
    scenario: "A 52-year-old's chart documents a congenital malformation that has never been treated and is still present.",
    options: [
      "A. A Z87.7- history code",
      "B. No code — Q codes expire in childhood",
      "C. The Chapter 17 Q code",
      "D. A Chapter 18 sign/symptom code",
    ],
    correct: "C",
    explanation: "Chapter 17 codes may be used throughout the life of the patient. The history code is only for corrected malformations.",
    lookFor: "Still present and uncorrected — lifetime use applies.",
  },
  {
    topic: "Diagnosed Later in Life",
    scenario: "A 45-year-old has an echocardiogram that leads the provider to diagnose a bicuspid aortic valve.",
    options: [
      "A. Z87.7-",
      "B. An acquired aortic valve disorder code only",
      "C. No code — the condition should have been diagnosed at birth",
      "D. Q23.81",
    ],
    correct: "D",
    explanation: "A malformation present at birth may not be identified until later in life. Whenever the provider diagnoses it, the Chapter 17 code is assigned — here Q23.81, bicuspid aortic valve.",
    lookFor: "A congenital diagnosis first made in adulthood.",
  },
  {
    topic: "Chromosomal Abnormality Confirmed Later",
    scenario: "At age 30, genetic testing confirms a chromosomal abnormality, and the provider documents the diagnosis.",
    options: [
      "A. No code — chromosomal abnormalities are only coded at birth",
      "B. An appropriate code from Q90–Q99",
      "C. A Z87.7- personal history code",
      "D. Q89.7",
    ],
    correct: "B",
    explanation: "Chromosomal abnormalities are present from birth but may not be identified until later. Once the provider documents the diagnosis, the appropriate Q90–Q99 code is assigned.",
    lookFor: "Provider-documented diagnosis at an adult age.",
  },
  {
    topic: "Birth Admission",
    scenario: "A newborn is delivered vaginally in the hospital. The provider documents a cleft lip.",
    options: [
      "A. The cleft lip code, then Z38.00",
      "B. Z38.01, then the cleft lip code",
      "C. Z38.00, then the cleft lip code from Q36",
      "D. Z38.00 only",
    ],
    correct: "C",
    explanation: "For the birth admission, the Z38 code is the principal diagnosis and any congenital anomaly codes follow. Z38.00 is the single liveborn infant delivered vaginally.",
    lookFor: "A newborn's birth record — Z38 leads, Q codes follow.",
  },
  {
    topic: "Cleft Lip and Palate Together",
    scenario: "A 6-month-old (not on a birth admission) has both a cleft lip and a cleft palate documented before repair.",
    options: [
      "A. Q35 and Q36",
      "B. Q36 only",
      "C. Q35 only",
      "D. Q37, cleft palate with cleft lip",
    ],
    correct: "D",
    explanation: "The cleft palate (Q35) and cleft lip (Q36) categories each exclude the combined condition, which has its own category, Q37. When both are documented, Q37 is reported.",
    lookFor: "Both conditions present — check for a combination category.",
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

export default function Icd10Chapter17WorkedExamplesPage() {
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
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 17 · WORKED EXAMPLES</p>
        <h1 style={{ margin: 0, fontSize: "clamp(24px, 5vw, 38px)" }}>Chapter 17 Worked Examples</h1>
        <p style={{ margin: "10px 0 0", fontSize: "15.5px", lineHeight: 1.5 }}>13 scenario walkthroughs with full reasoning — jump to any question to check its answer directly.</p>
      </header>

      <nav aria-label="ICD-10 navigation" style={navStyle}>
        <Link href="/icd10" style={navLinkStyle}>ICD-10 home</Link>
        <Link href="/icd10/chapter-17-guidelines-reviewer" style={navLinkStyle}>Guidelines Reviewer</Link>
        <Link href="/icd10/chapter-17-practice-quiz" style={navLinkStyle}>Practice Quiz</Link>
      </nav>

      <div style={introStyle}>
        <strong>Big-picture tip:</strong> examples 5 and 6 are a deliberate pair — the same spina bifida patient, but hydrocephalus is built INTO the code while paraplegia is NOT (a 'use additional code' note adds it). Before adding a second code, always check whether the first code already contains the condition.</div>

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
