"use client";

import Link from "next/link";
import { useState } from "react";
import { HighlightToolbar } from "../../cpt/surgery/_digestive/highlighter";

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
    topic: "COPD/Asthma Exacerbation",
    question: "A patient with known COPD presents with significantly worsened shortness of breath and wheezing beyond baseline, with no documented triggering infection. What's coded?",
    options: [
      "A. COPD, uncomplicated",
      "B. COPD with acute exacerbation",
      "C. An acute respiratory infection code alone",
      "D. COPD plus a separate infection code",
    ],
    correct: "B",
    explanation: "A worsening/decompensation of the chronic COPD itself is coded as COPD with acute exacerbation (J44 family) — an exacerbation is a worsening of the chronic disease, not an infection layered on top.",
    lookFor: "\"Significantly worsened beyond baseline\" is the defining feature of an exacerbation.",
    eliminate: "A misses the documented worsening; C and D wrongly treat this as primarily an infection issue.",
  },
  {
    topic: "COPD/Asthma Exacerbation",
    question: "A patient with asthma develops a viral upper respiratory infection, which then triggers a significant worsening of asthma symptoms requiring treatment. What's coded?",
    options: [
      "A. Asthma with acute exacerbation",
      "B. The viral infection code alone, since it caused the flare-up",
      "C. Asthma, uncomplicated, plus the viral infection code",
      "D. A combination \"infection superimposed on asthma\" code",
    ],
    correct: "A",
    explanation: "Even though an infection triggered it, an exacerbation is still coded as an exacerbation of the chronic disease — not as a separate \"infection superimposed on\" combination, since no such combination concept applies here.",
    lookFor: "\"Triggered by an infection\" doesn't change the code — the exacerbation of the chronic condition remains the code.",
    eliminate: "D invents a combination-code concept that doesn't apply to this exacerbation rule.",
  },
  {
    topic: "Acute Respiratory Failure — Principal",
    question: "A patient is admitted, and after study, acute respiratory failure is determined to be the condition chiefly responsible for the admission, with no competing chapter-specific sequencing guideline in play. What's coded as principal diagnosis?",
    options: [
      "A. A code from J96.0 (or J96.2), acute respiratory failure",
      "B. Whatever underlying condition caused the respiratory failure",
      "C. A code from J12–J18, pneumonia",
      "D. Query the provider before assigning any principal diagnosis",
    ],
    correct: "A",
    explanation: "When acute respiratory failure is established as chiefly responsible for the admission and no chapter-specific sequencing guideline overrides it, a code from J96.0/J96.2 may be the principal diagnosis.",
    lookFor: "\"Chiefly responsible for the admission\" plus \"no competing chapter-specific guideline\" together support respiratory failure as principal.",
    eliminate: "D is unnecessary — the documentation here is already clear enough to support a principal diagnosis without a query.",
  },
  {
    topic: "Acute Respiratory Failure — Chapter-Specific Override",
    question: "A pregnant patient is admitted with acute respiratory failure directly related to a documented obstetric complication, where the obstetrics chapter's own guidelines specify a different sequencing. What governs the principal diagnosis?",
    options: [
      "A. The general acute respiratory failure principal-diagnosis rule always wins",
      "B. The obstetrics chapter-specific sequencing guideline takes precedence",
      "C. Whichever condition was documented first in the chart",
      "D. Both conditions are co-principal automatically",
    ],
    correct: "B",
    explanation: "Chapter-specific sequencing guidelines (obstetrics, poisoning, HIV, newborn) take precedence over the general acute-respiratory-failure-as-principal-diagnosis rule when they apply.",
    lookFor: "A chapter-specific sequencing guideline (like obstetrics) always overrides the general respiratory failure rule when it applies to the case.",
    eliminate: "A wrongly assumes the general respiratory failure rule always wins, ignoring the guideline's own carve-out for chapter-specific sequencing rules.",
  },
  {
    topic: "Acute Respiratory Failure — Secondary",
    question: "A patient develops respiratory failure during the hospital stay, several days after being admitted for an unrelated reason. How is the respiratory failure coded?",
    options: [
      "A. As the principal diagnosis, since it's the most severe condition",
      "B. As a secondary diagnosis, since it developed after admission",
      "C. It is not coded at all since it developed after admission",
      "D. As principal, replacing the original admitting diagnosis",
    ],
    correct: "B",
    explanation: "Respiratory failure that develops after admission is coded as a secondary diagnosis, since it can't be the reason the patient was admitted in the first place.",
    lookFor: "\"Developed several days after admission\" is the direct cue for secondary-diagnosis status, not principal.",
    eliminate: "A and D both wrongly promote a post-admission complication to principal diagnosis status.",
  },
  {
    topic: "Acute Respiratory Failure — Equally Responsible, Unclear",
    question: "A patient is admitted with both acute respiratory failure and an acute myocardial infarction, and the documentation doesn't clarify whether the two were equally responsible for the admission. What's the next step?",
    options: [
      "A. Automatically code respiratory failure as principal",
      "B. Automatically code the myocardial infarction as principal",
      "C. Query the provider for clarification",
      "D. Code both as co-principal without any further documentation review",
    ],
    correct: "C",
    explanation: "When it's unclear whether two conditions were equally responsible for the admission, the provider should be queried for clarification rather than the coder guessing.",
    lookFor: "Ambiguous documentation about \"equally responsible\" status is the specific trigger for a provider query.",
    eliminate: "A and B both guess a specific answer that isn't supported by the (currently unclear) documentation.",
  },
  {
    topic: "Influenza — Confirmed, Identified Strain",
    question: "A provider's diagnostic statement clearly documents \"H1N1 influenza\" as a confirmed diagnosis, with no lab confirmation mentioned either way. What's coded?",
    options: [
      "A. A code from J09, avian/novel influenza",
      "B. A code from J10, influenza due to other identified influenza virus",
      "C. A code from J11, influenza due to unidentified influenza virus",
      "D. No code until lab confirmation is documented",
    ],
    correct: "B",
    explanation: "The provider's own diagnostic statement confirming a specific identified strain (H1N1) is sufficient — lab confirmation isn't required, and this routes to J10, not J09 (reserved for avian/novel strains) or J11 (unidentified).",
    lookFor: "A confirmed, specifically NAMED strain (not avian/novel) that isn't lab-tested still qualifies for J10 based on the provider's statement alone.",
    eliminate: "D wrongly requires lab confirmation, which the guideline explicitly says isn't necessary.",
  },
  {
    topic: "Influenza — Confirmed Avian/Novel",
    question: "A provider's diagnostic statement confirms \"avian influenza\" without any positive lab test specific to avian influenza. What's coded?",
    options: [
      "A. A code from J09, influenza due to certain identified influenza viruses",
      "B. A code from J10, influenza due to other identified influenza virus",
      "C. A code from J11, influenza due to unidentified influenza virus",
      "D. No code without positive lab testing",
    ],
    correct: "A",
    explanation: "The provider's diagnostic statement of avian influenza is sufficient for J09, even without a positive lab test specific for avian influenza — confirmation is based on the provider's statement, not the lab result.",
    lookFor: "\"Confirmed\" for J09 purposes means the provider's own diagnostic statement, regardless of lab testing status.",
    eliminate: "D wrongly demands lab confirmation that the guideline explicitly says is not required for this code.",
  },
  {
    topic: "Influenza — Suspected/Possible",
    question: "A provider documents \"possible avian influenza\" pending further workup. What's coded?",
    options: [
      "A. A code from J09, avian/novel influenza",
      "B. A code from J10, other identified influenza virus",
      "C. A code from J11, influenza due to unidentified influenza virus",
      "D. No code until the workup is complete",
    ],
    correct: "C",
    explanation: "\"Possible\" (not confirmed) avian influenza routes to J11 — this is an explicit exception to the usual inpatient rule that lets \"probable\"/\"suspected\" diagnoses be coded as confirmed; J09/J10 specifically require confirmation.",
    lookFor: "\"Possible,\" \"suspected,\" or \"probable\" language for avian/novel/other identified influenza is the specific trigger for J11, not J09/J10.",
    eliminate: "A and B both require confirmed status, which \"possible\" documentation doesn't meet.",
  },
  {
    topic: "VAP — Documentation Required",
    question: "A provider specifically documents that a patient's pneumonia is ventilator-associated pneumonia, caused by Pseudomonas aeruginosa. What's coded?",
    options: [
      "A. J95.851 alone",
      "B. J95.851 plus B96.5 (Pseudomonas aeruginosa)",
      "C. J95.851 plus a code from J12–J18 for the pneumonia type",
      "D. A code from J12–J18 alone",
    ],
    correct: "B",
    explanation: "J95.851 (VAP) is assigned along with an additional code identifying the causative organism (B96.5 for Pseudomonas aeruginosa) — no additional J12–J18 pneumonia-type code is added alongside it.",
    lookFor: "VAP pairs with an ORGANISM code (like B96.5), never with a J12–J18 pneumonia-type code.",
    eliminate: "C wrongly adds a J12–J18 code, which the guideline explicitly says not to do when J95.851 is used.",
  },
  {
    topic: "VAP — Not Documented",
    question: "A patient on a mechanical ventilator develops pneumonia, but the documentation never states the pneumonia is ventilator-associated — the relationship is ambiguous. What's the correct action?",
    options: [
      "A. Assign J95.851 automatically, since the patient is on a ventilator with pneumonia",
      "B. Query the provider for clarification",
      "C. Assign a code from J12-J18 plus J95.851 together",
      "D. Assign no pneumonia code at all",
    ],
    correct: "B",
    explanation: "J95.851 requires the provider to specifically document the VAP relationship — being on a ventilator with pneumonia isn't enough on its own. When documentation is unclear, query the provider.",
    lookFor: "\"On a ventilator\" + \"has pneumonia\" is NOT automatically VAP — the causal relationship must be provider-documented.",
    eliminate: "A wrongly assigns J95.851 without the required provider documentation of the VAP relationship.",
  },
  {
    topic: "VAP — Developing After Admission",
    question: "A patient is admitted with Streptococcus pneumoniae pneumonia (J13), and several days into the ventilator-supported stay, the provider documents the patient has also developed VAP. What's the principal diagnosis, and what else is coded?",
    options: [
      "A. J95.851 as principal, J13 as secondary",
      "B. J13 as principal, J95.851 as an additional diagnosis",
      "C. J13 alone; VAP developing later isn't separately coded",
      "D. J95.851 alone, replacing J13",
    ],
    correct: "B",
    explanation: "The pneumonia present at admission (J13) remains the principal diagnosis; VAP that develops later, once documented by the provider, is added as an additional diagnosis (J95.851).",
    lookFor: "The pneumonia present AT ADMISSION keeps the principal-diagnosis slot; a later-developing, provider-documented VAP is added as secondary.",
    eliminate: "A and D both wrongly displace the admission pneumonia from its principal-diagnosis role.",
  },
  {
    topic: "Vaping-Related Disorders",
    question: "A patient presents with lung injury specifically attributed to vaping, with no other complications documented. What's coded?",
    options: [
      "A. U07.0 alone",
      "B. U07.0 plus a code from J96.0- for the lung injury",
      "C. U07.0 plus J68.0, pneumonitis",
      "D. A code from J12-J18 alone",
    ],
    correct: "A",
    explanation: "For lung injury specifically due to vaping, assign ONLY U07.0 — no additional lung-injury code is layered on top of it for that specific finding.",
    lookFor: "\"Lung injury due to vaping\" (with nothing else documented) is coded with U07.0 alone, not paired with another respiratory code.",
    eliminate: "B and C both wrongly add a second respiratory code for a finding that U07.0 alone is meant to capture.",
  },
  {
    topic: "Vaping-Related Disorders",
    question: "A patient with a vaping-related disorder is documented with acute respiratory failure, plus ongoing cough and diarrhea. Which symptoms/conditions get their own additional code?",
    options: [
      "A. Both the cough and the diarrhea",
      "B. Only the acute respiratory failure and the diarrhea; the cough is not separately coded",
      "C. Only the cough; the respiratory failure and diarrhea are not separately coded",
      "D. None of them; U07.0 alone covers everything",
    ],
    correct: "B",
    explanation: "Acute respiratory failure is a separately codeable manifestation (J96.0-), and GI symptoms like diarrhea are still separately coded even alongside a vaping diagnosis — but respiratory signs/symptoms like cough are NOT separately coded once the definitive vaping diagnosis is established.",
    lookFor: "Respiratory symptoms (cough, shortness of breath) get absorbed into U07.0 and aren't separately coded, but GI symptoms (diarrhea, abdominal pain) still are — a deliberate asymmetry worth memorizing.",
    eliminate: "A and C both misplace the cough, which should NOT be separately coded once the vaping diagnosis is confirmed.",
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

export default function Icd10Chapter10PracticeQuizPage() {
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
      <HighlightToolbar />
      <header style={heroStyle}>
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 10 · PRACTICE QUIZ</p>
        <h1 style={{ margin: 0, fontSize: "clamp(24px, 5vw, 38px)" }}>Chapter 10 Practice Quiz</h1>
        <p style={{ margin: "10px 0 0", fontSize: "15.5px", lineHeight: 1.5 }}>14 original scenario questions with elimination tricks, covering COPD/asthma exacerbation, acute respiratory failure sequencing, influenza confirmation rules, VAP, and vaping-related disorders.</p>
      </header>

      <nav aria-label="ICD-10 quiz navigation" style={navStyle}>
        <Link href="/icd10" style={navLinkStyle}>ICD-10-CM home</Link>
        <Link href="/icd10/chapter-10-guidelines-reviewer" style={navLinkStyle}>Guidelines Reviewer</Link>
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
