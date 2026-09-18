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
    topic: "COPD Exacerbation",
    scenario: "A patient with documented COPD is admitted for markedly increased dyspnea, cough, and sputum production beyond their usual baseline. No specific infection is identified as the trigger.",
    options: [
      "A. COPD, uncomplicated",
      "B. COPD with acute exacerbation",
      "C. Acute bronchitis alone",
      "D. Query the provider before coding",
    ],
    correct: "B",
    explanation: "A documented worsening beyond baseline in a known COPD patient is an acute exacerbation — coded as COPD with acute exacerbation (J44 family), regardless of whether a specific trigger is identified.",
    lookFor: "\"Markedly increased beyond baseline\" in a chronic condition is the defining signal for an exacerbation code.",
  },
  {
    topic: "Asthma Exacerbation Triggered by Infection",
    scenario: "A child with known asthma develops a upper respiratory viral infection, which brings on a significant asthma flare requiring nebulizer treatment and a short course of oral steroids.",
    options: [
      "A. The viral infection code plus asthma, uncomplicated",
      "B. Asthma with acute exacerbation",
      "C. A combination code for \"infection superimposed on asthma\"",
      "D. The viral infection code alone",
    ],
    correct: "B",
    explanation: "Even though a viral infection was the trigger, the exacerbation is coded as an exacerbation of the chronic asthma itself — an exacerbation being triggered by infection doesn't change it into something else.",
    lookFor: "The trigger (infection) doesn't change the code — look for what actually happened to the chronic condition (it worsened), not just what set it off.",
  },
  {
    topic: "Acute Respiratory Failure — Principal, No Override",
    scenario: "An elderly patient with no pregnancy, poisoning, HIV, or newborn context is admitted, and after study, acute and chronic respiratory failure is determined to be chiefly responsible for the admission.",
    options: [
      "A. A code from J96.2, acute and chronic respiratory failure, as principal",
      "B. The underlying chronic lung disease as principal instead",
      "C. Query the provider before assigning a principal diagnosis",
      "D. Code the respiratory failure as secondary only",
    ],
    correct: "A",
    explanation: "With no competing chapter-specific sequencing guideline (obstetrics, poisoning, HIV, newborn) in play, and respiratory failure established as chiefly responsible for the admission, J96.2 may be the principal diagnosis.",
    lookFor: "Absence of any competing chapter-specific guideline is what clears the way for respiratory failure to be principal here.",
  },
  {
    topic: "Acute Respiratory Failure — Chapter-Specific Override",
    scenario: "A patient with a documented drug poisoning is admitted with acute respiratory failure directly resulting from that poisoning, and the poisoning chapter's guidelines specify a particular sequencing for this situation.",
    options: [
      "A. Acute respiratory failure is always principal regardless of other chapters' rules",
      "B. The poisoning chapter's specific sequencing guideline takes precedence",
      "C. Both codes are assigned as co-principal automatically",
      "D. Neither condition is coded until a query is resolved",
    ],
    correct: "B",
    explanation: "Chapter-specific sequencing guidelines, including poisoning, take precedence over the general acute-respiratory-failure-as-principal-diagnosis rule.",
    lookFor: "Any time poisoning, obstetrics, HIV, or newborn guidelines apply to the same encounter, check those first — they override the general respiratory failure rule.",
  },
  {
    topic: "Acute Respiratory Failure — Secondary",
    scenario: "A patient is admitted for elective surgery. On postoperative day three, the patient develops acute respiratory failure requiring intervention.",
    options: [
      "A. Principal diagnosis, replacing the original reason for admission",
      "B. Secondary diagnosis, since it developed after admission",
      "C. Not coded, since it's a postoperative complication",
      "D. Coded only if the provider specifically labels it a complication",
    ],
    correct: "B",
    explanation: "Respiratory failure developing after admission (here, postoperatively) is coded as a secondary diagnosis — it cannot be the principal diagnosis in this scenario.",
    lookFor: "\"Developed after admission\" (postoperative day three) is the direct signal for secondary-diagnosis status.",
  },
  {
    topic: "Acute Respiratory Failure — Ambiguous Equal Responsibility",
    scenario: "A patient is admitted with both acute respiratory failure and an acute cerebrovascular accident (stroke). The admitting note doesn't clarify which condition, if either, was more responsible for the admission.",
    options: [
      "A. Automatically code the stroke as principal, since it's more severe",
      "B. Automatically code the respiratory failure as principal",
      "C. Query the provider for clarification on which condition(s) occasioned the admission",
      "D. Code both as principal and let the payer decide",
    ],
    correct: "C",
    explanation: "When it's unclear whether two conditions were equally responsible for occasioning the admission, querying the provider is the correct next step rather than guessing based on perceived severity.",
    lookFor: "Ambiguity about which condition(s) occasioned the admission — not just which is clinically \"worse\" — is what triggers a query.",
  },
  {
    topic: "Influenza — Provider Statement Sufficient",
    scenario: "A physician's note states \"confirmed H3N2 influenza\" based on clinical presentation and local outbreak pattern, without ordering a specific lab test for that strain.",
    options: [
      "A. A code from J09, avian/novel influenza",
      "B. A code from J10, other identified influenza virus",
      "C. A code from J11, unidentified influenza virus",
      "D. No code without a specific lab test",
    ],
    correct: "B",
    explanation: "A confirmed, specifically named strain (H3N2, not avian/novel) documented by the provider's own diagnostic statement is coded to J10 — lab testing isn't required for this confirmation.",
    lookFor: "A specifically NAMED, non-avian/non-novel strain, confirmed by provider statement alone, maps to J10.",
  },
  {
    topic: "Influenza — Avian, Confirmed by Statement",
    scenario: "During a regional avian influenza outbreak, a physician documents \"confirmed avian influenza\" based on clinical criteria and exposure history, without a positive lab test specific to avian influenza having come back yet.",
    options: [
      "A. A code from J09, certain identified influenza viruses",
      "B. A code from J10, other identified influenza virus",
      "C. A code from J11, unidentified influenza virus",
      "D. Wait for the lab result before coding",
    ],
    correct: "A",
    explanation: "The provider's diagnostic statement of confirmed avian influenza is sufficient for J09 — positive lab testing specific to avian influenza is explicitly not required for this confirmation.",
    lookFor: "\"Confirmed\" avian influenza by provider statement alone (regardless of lab status) is the J09 trigger.",
  },
  {
    topic: "Influenza — Suspected, Not Confirmed",
    scenario: "A physician documents \"suspected novel influenza A, pending confirmatory testing\" for a patient with severe respiratory symptoms during a novel flu outbreak.",
    options: [
      "A. A code from J09, certain identified influenza viruses",
      "B. A code from J10, other identified influenza virus",
      "C. A code from J11, influenza due to unidentified influenza virus",
      "D. No code until testing returns",
    ],
    correct: "C",
    explanation: "\"Suspected\" (not confirmed) documentation for novel influenza A routes to J11 — J09 and J10 both require confirmed status, which this documentation doesn't meet.",
    lookFor: "\"Suspected\" or \"pending confirmatory testing\" language rules out J09/J10 and points to J11 instead.",
  },
  {
    topic: "VAP — Fully Documented",
    scenario: "A ventilated ICU patient's provider documents \"ventilator-associated pneumonia, due to Acinetobacter baumannii\" in the progress notes.",
    options: [
      "A. J95.851 alone",
      "B. J95.851 plus the appropriate B-category code for Acinetobacter baumannii",
      "C. J95.851 plus a code from J12–J18 for the pneumonia type",
      "D. A code from J12–J18 alone",
    ],
    correct: "B",
    explanation: "J95.851 (VAP) is paired with an additional code identifying the causative organism — never with a J12–J18 pneumonia-type code, which is specifically excluded when J95.851 applies.",
    lookFor: "VAP always pairs with an ORGANISM-identifying code, never a pneumonia-TYPE code from J12–J18.",
  },
  {
    topic: "VAP — Ambiguous Relationship",
    scenario: "A ventilated patient's chart shows a new pneumonia diagnosis during the ICU stay, but no note anywhere states whether the ventilator caused or contributed to it.",
    options: [
      "A. Assign J95.851 since the patient is ventilated and has pneumonia",
      "B. Query the provider to clarify whether this is ventilator-associated pneumonia",
      "C. Assign a code from J12-J18 plus J95.851 automatically",
      "D. Assign no pneumonia code at all",
    ],
    correct: "B",
    explanation: "Without the provider specifically documenting the VAP relationship, J95.851 cannot be assigned — the correct action is to query for clarification, not to assume the relationship exists.",
    lookFor: "Silence on the causal relationship (ventilator to pneumonia) — not just the coexistence of a ventilator and pneumonia — is what triggers a query.",
  },
  {
    topic: "VAP — Developing After Admission",
    scenario: "A patient is admitted with pneumonia due to an unspecified organism (coded from J18), and on hospital day 5, while ventilated, the provider documents newly developed ventilator-associated pneumonia.",
    options: [
      "A. J95.851 replaces the original J18 code entirely",
      "B. The J18 code remains principal; J95.851 is added as an additional diagnosis",
      "C. J95.851 becomes principal, with J18 as secondary",
      "D. Only J18 is coded; the later VAP documentation is ignored",
    ],
    correct: "B",
    explanation: "The pneumonia present at admission (J18) keeps the principal-diagnosis role; the later-developing, provider-documented VAP is added as an additional diagnosis (J95.851).",
    lookFor: "Pneumonia present AT ADMISSION always keeps the principal slot when a distinct VAP is documented as developing LATER in the same stay.",
  },
  {
    topic: "Vaping — Lung Injury Alone",
    scenario: "A teenager is diagnosed with acute lung injury that the treating pulmonologist specifically attributes to vaping, with no other manifestations or symptoms documented.",
    options: [
      "A. U07.0 alone",
      "B. U07.0 plus a J96.0- acute respiratory failure code",
      "C. A code from J12-J18 alone",
      "D. U07.0 plus J68.0, pneumonitis",
    ],
    correct: "A",
    explanation: "For lung injury specifically due to vaping, only U07.0 is assigned — no additional lung-injury code is layered on for that specific finding.",
    lookFor: "\"Lung injury due to vaping\" alone, without other documented manifestations, is coded with just U07.0.",
  },
  {
    topic: "Vaping — With Manifestations & Symptoms",
    scenario: "A patient with a vaping-related disorder is documented with pneumonitis, plus persistent cough and new-onset abdominal pain with diarrhea.",
    options: [
      "A. U07.0 alone; nothing else is separately coded",
      "B. U07.0, plus J68.0 (pneumonitis) and codes for the diarrhea/abdominal pain; the cough is not separately coded",
      "C. U07.0 plus codes for the cough only",
      "D. U07.0 plus J68.0 and a separate code for the cough, but not the GI symptoms",
    ],
    correct: "B",
    explanation: "Pneumonitis (J68.0) is a separately codeable manifestation, and GI symptoms (diarrhea, abdominal pain) are separately coded even alongside a vaping diagnosis — but respiratory symptoms like cough are not separately coded once the definitive vaping diagnosis is established.",
    lookFor: "Respiratory symptoms (cough) are absorbed into U07.0, but GI symptoms (diarrhea, abdominal pain) are still separately coded — the reverse of what many coders assume.",
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

export default function Icd10Chapter10WorkedExamplesPage() {
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
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 10 · WORKED EXAMPLES</p>
        <h1 style={{ margin: 0, fontSize: "clamp(24px, 5vw, 38px)" }}>Chapter 10 Worked Examples</h1>
        <p style={{ margin: "10px 0 0", fontSize: "15.5px", lineHeight: 1.5 }}>14 scenario walkthroughs with full reasoning — jump to any question to check its answer directly.</p>
      </header>

      <nav aria-label="ICD-10 navigation" style={navStyle}>
        <Link href="/icd10" style={navLinkStyle}>ICD-10 home</Link>
        <Link href="/icd10/chapter-10-guidelines-reviewer" style={navLinkStyle}>Guidelines Reviewer</Link>
        <Link href="/icd10/chapter-10-practice-quiz" style={navLinkStyle}>Practice Quiz</Link>
      </nav>

      <div style={introStyle}>
        <strong>Big-picture tip:</strong> questions 7, 8, and 9 are a deliberate three-way set — the SAME clinical picture (confirmed vs. avian-confirmed vs. suspected influenza) resolves to three different codes (J10, J09, J11) based purely on ONE fact: confirmed-and-named, confirmed-and-avian/novel, or merely suspected. Read for that one fact before picking a code.
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
