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
    topic: "Record Rules — Newborn Only",
    scenario: "A coder is finalizing both the mother's chart and the newborn's chart after an uncomplicated vaginal delivery with a documented newborn respiratory condition.",
    options: [
      "A. Code the respiratory condition on both the mother's and newborn's charts",
      "B. Code the respiratory condition (a Chapter 16 code) only on the newborn's chart",
      "C. Code it only on the mother's chart, since she's the one who delivered",
      "D. Code it on whichever chart is finalized first",
    ],
    correct: "B",
    explanation: "Chapter 16 codes are used only on the newborn's own record, never the maternal record — even though the mother's delivery directly relates to the newborn's condition.",
    lookFor: "A newborn condition, however directly tied to the delivery, still only gets its Chapter 16 code on the newborn's own chart.",
  },
  {
    topic: "Lifetime Use",
    scenario: "A perinatal-origin lung condition, first coded at birth, remains actively managed and clinically significant when the same patient is seen at age 12.",
    options: [
      "A. The perinatal (Chapter 16) code is still used, since the condition remains present",
      "B. A different, age-appropriate code from another chapter must replace it at some point",
      "C. No code is used past the 28-day perinatal period, regardless of persistence",
      "D. The code must be re-verified by a neonatologist before continued use",
    ],
    correct: "A",
    explanation: "Chapter 16 codes may be used throughout the patient's life as long as the perinatal-origin condition remains present — there's no automatic expiration or required replacement.",
    lookFor: "\"Still present, still clinically significant\" is what keeps a perinatal-origin code valid, regardless of the patient's current age.",
  },
  {
    topic: "Birth Record — Z38",
    scenario: "A newborn is delivered via cesarean at Hospital A, and the coder is completing the birth admission record at that same hospital.",
    options: [
      "A. A code from category Z38, matching place of birth and delivery type, as principal diagnosis",
      "B. A Chapter 16 diagnosis code as principal, with Z38 as a secondary code",
      "C. No Z38 code, since this was a cesarean rather than a vaginal delivery",
      "D. A code from category Z05 as principal",
    ],
    correct: "A",
    explanation: "The birth episode on a newborn's own record is coded with a Z38 code (matching place of birth and delivery type) as the principal diagnosis.",
    lookFor: "Delivery TYPE (cesarean vs. vaginal) is reflected IN the specific Z38 subcode chosen — it doesn't disqualify Z38 itself.",
  },
  {
    topic: "Sequencing — Other-Chapter Detail Code",
    scenario: "A newborn's encounter is specifically for a documented perinatal jaundice condition. An additional code from another chapter provides more specific laboratory detail about the bilirubin level.",
    options: [
      "A. The laboratory detail code first, then the perinatal jaundice code",
      "B. The perinatal jaundice (Chapter 16) code first, then the laboratory detail code",
      "C. Only the laboratory detail code is used",
      "D. Only the perinatal jaundice code is used; the detail code is never added",
    ],
    correct: "B",
    explanation: "Since the reason for the encounter is the perinatal condition itself, the Chapter 16 code is sequenced first, with the more specific detail code from the other chapter added afterward.",
    lookFor: "The perinatal condition being the actual REASON for the encounter is what puts the Chapter 16 code first.",
  },
  {
    topic: "Birth-Process Default",
    scenario: "A newborn develops a skin infection that could plausibly be from the birth process or from later community exposure. The documentation never specifies which.",
    options: [
      "A. Default to community-acquired; no Chapter 16 code",
      "B. Default to birth-process origin; a Chapter 16 code is assigned",
      "C. No code can be assigned without clarification",
      "D. Code both possibilities together",
    ],
    correct: "B",
    explanation: "When documentation doesn't specify the source of a condition that could be either birth-process or community-acquired, the default is birth-process, and a Chapter 16 code applies.",
    lookFor: "Silence on source resolves toward Chapter 16 (birth process) by default — the opposite of assuming community-acquired.",
  },
  {
    topic: "Community-Acquired — Excluded",
    scenario: "A newborn develops an infection several weeks after discharge, and the provider specifically documents it as community-acquired, unrelated to the birth process.",
    options: [
      "A. A Chapter 16 code, since the patient is still within the perinatal period",
      "B. No Chapter 16 code — the condition is specifically documented as community-acquired",
      "C. Both a Chapter 16 code and a community-acquired infection code together",
      "D. Query the provider, since community-acquired conditions are always ambiguous",
    ],
    correct: "B",
    explanation: "Once a condition is specifically documented as community-acquired, a Chapter 16 code should not be assigned, regardless of the patient's age still being within the technical perinatal window.",
    lookFor: "Explicit community-acquired documentation overrides the birth-process default entirely — this isn't a close call once documented.",
  },
  {
    topic: "Clinically Significant — Future Health Needs Alone",
    scenario: "A routine newborn exam finds a minor anatomic variant. No treatment, monitoring, or procedures result from it, but the provider specifically documents it as having implications for the child's future health care needs.",
    options: [
      "A. Not coded, since no treatment or monitoring resulted",
      "B. Coded — the documented future-health-needs implication alone meets the significance threshold",
      "C. Coded only if a specialist referral is also made",
      "D. Not coded, since minor anatomic variants are never clinically significant",
    ],
    correct: "B",
    explanation: "A condition is clinically significant if it meets ANY of several criteria, and documented implications for future health care needs is one of them, sufficient on its own.",
    lookFor: "The future-health-needs criterion doesn't require treatment or monitoring alongside it — it stands alone as sufficient.",
  },
  {
    topic: "Z05 — Nothing Found",
    scenario: "A newborn with a family history of a genetic condition is evaluated with targeted testing during the birth admission. The testing is negative, and the newborn shows no signs or symptoms of the condition.",
    options: [
      "A. A code for the genetic condition itself, since it was specifically tested for",
      "B. A code from category Z05",
      "C. No code at all, since testing was negative",
      "D. A code from category P36",
    ],
    correct: "B",
    explanation: "A healthy newborn evaluated for a suspected condition (here, based on family history) that is ruled out after study is coded with Z05.",
    lookFor: "\"Tested because of risk factors, found healthy\" is the classic Z05 scenario — not coding the ruled-out condition itself.",
  },
  {
    topic: "Z05 — Findings Present, Not Used",
    scenario: "A newborn is evaluated for suspected hypoglycemia due to maternal diabetes, and blood glucose testing confirms the newborn does have low blood sugar with documented symptoms.",
    options: [
      "A. Z05, since the evaluation was for a \"suspected\" condition",
      "B. A code for the newborn's actual hypoglycemia, since it was confirmed with symptoms",
      "C. Both Z05 and the hypoglycemia code together",
      "D. No code, since the underlying cause was maternal, not the newborn's own condition",
    ],
    correct: "B",
    explanation: "Since the newborn actually has documented findings (confirmed hypoglycemia with symptoms), Z05 doesn't apply — the actual condition is coded instead.",
    lookFor: "A confirmed, symptomatic finding rules OUT Z05 even though the evaluation started as \"suspected.\"",
  },
  {
    topic: "Prematurity — Provider Documentation Required",
    scenario: "A newborn is born at a gestational age the coder personally believes qualifies as premature, but the delivering provider's note never uses the word \"prematurity\" or documents specific criteria for it.",
    options: [
      "A. Assign a prematurity code based on the gestational age alone",
      "B. Do not assign a prematurity code without actual provider documentation",
      "C. Query is not needed; use the birth weight code as a substitute",
      "D. Assign the code, then have it verified retrospectively",
    ],
    correct: "B",
    explanation: "A code for prematurity should not be assigned unless it is actually documented by the provider — a coder's own assessment isn't a substitute for that documentation.",
    lookFor: "Gestational age alone, without the provider's own prematurity determination, is not sufficient to code prematurity.",
  },
  {
    topic: "P07 Sequencing — Weight Before Gestational Age",
    scenario: "A newborn's chart documents birth weight of 1,400 grams and an estimated gestational age of 30 weeks, both meeting criteria for P07 subcodes.",
    options: [
      "A. The gestational age code first, then the birth weight code",
      "B. The birth weight code first, then the gestational age code",
      "C. Only the birth weight code is used; gestational age is not separately coded",
      "D. Only the gestational age code is used; birth weight is not separately coded",
    ],
    correct: "B",
    explanation: "When both birth weight and gestational age are documented, two P07 codes are assigned, with the birth weight code sequenced first.",
    lookFor: "Weight-before-gestational-age is a fixed sequencing rule whenever both details are available together.",
  },
  {
    topic: "Bacterial Sepsis — Congenital Default",
    scenario: "A newborn is documented with \"sepsis\" during the birth admission, with no further detail in the chart about whether it's congenital or acquired after birth.",
    options: [
      "A. Default to community-acquired; no P36 code",
      "B. Default to congenital; a P36 code is assigned",
      "C. Query the provider before assigning any sepsis code",
      "D. Code it as unspecified infection, not sepsis specifically",
    ],
    correct: "B",
    explanation: "Newborn sepsis without documentation of congenital vs. community-acquired defaults to congenital, coded from category P36.",
    lookFor: "The newborn-specific sepsis default (congenital) is worth memorizing as its own fact, distinct from adult sepsis-source assumptions.",
  },
  {
    topic: "Bacterial Sepsis — Organism Already Included",
    scenario: "A newborn's documented sepsis is coded with a specific P36 subcode that already identifies Group B Streptococcus as the causal organism within that subcode's own description.",
    options: [
      "A. Add a separate code from category B95 for the Streptococcus organism",
      "B. No additional organism code is needed — it's already captured in the P36 subcode",
      "C. Add a code from category B96 instead",
      "D. Replace the P36 code entirely with a B95 code",
    ],
    correct: "B",
    explanation: "If the P36 code already includes the causal organism, an additional B95/B96 organism code should not be added — that would be redundant.",
    lookFor: "Check whether the organism is ALREADY baked into the specific P36 subcode before reaching for a separate B95/B96 code.",
  },
  {
    topic: "Stillbirth — Institutional Restriction",
    scenario: "A stillbirth occurs at a facility that does not maintain a separate stillbirth record-keeping system — stillbirths are documented within the standard delivery records.",
    options: [
      "A. P95 is still assigned, since a stillbirth clinically occurred",
      "B. P95 is not used at this facility, since it lacks separate stillbirth records",
      "C. P95 is assigned on the mother's record instead",
      "D. P95 is assigned along with a companion Z38 code",
    ],
    correct: "B",
    explanation: "P95 is restricted to institutions that maintain separate records for stillbirths — a facility without that separate record-keeping structure does not use this code.",
    lookFor: "P95's use depends on the FACILITY's record-keeping setup, not merely on the clinical event of a stillbirth.",
  },
  {
    topic: "COVID-19 — No Transmission Documentation",
    scenario: "A newborn in the well-baby nursery tests positive for COVID-19 on routine screening, with no documentation anywhere about how the virus was transmitted.",
    options: [
      "A. P35.8 plus U07.1",
      "B. U07.1 plus codes for any associated manifestations",
      "C. P35.8 alone",
      "D. A Chapter 16 sepsis code instead of a COVID-specific code",
    ],
    correct: "B",
    explanation: "Without documentation of a specific transmission type, U07.1 plus manifestation codes is correct — P35.8 requires documented in-utero or birth-process transmission specifically.",
    lookFor: "Default to U07.1 alone (plus manifestations) whenever transmission timing/route isn't documented.",
  },
  {
    topic: "COVID-19 — Birth-Process Transmission Documented",
    scenario: "A newborn tests positive for COVID-19, and the delivering provider specifically documents that transmission occurred during the birth process itself.",
    options: [
      "A. U07.1 alone",
      "B. P35.8 alone",
      "C. Both P35.8 and U07.1 together",
      "D. Neither code; a generic viral infection code is used instead",
    ],
    correct: "C",
    explanation: "Documented transmission during the birth process specifically unlocks the P35.8 + U07.1 combination, per the same rule that applies to documented in-utero transmission.",
    lookFor: "\"During the birth process\" is treated the same as \"in utero\" for triggering the P35.8 pairing — both are specific documented-transmission scenarios.",
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

export default function Icd10Chapter16WorkedExamplesPage() {
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
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 16 · WORKED EXAMPLES</p>
        <h1 style={{ margin: 0, fontSize: "clamp(24px, 5vw, 38px)" }}>Chapter 16 Worked Examples</h1>
        <p style={{ margin: "10px 0 0", fontSize: "15.5px", lineHeight: 1.5 }}>16 scenario walkthroughs with full reasoning — jump to any question to check its answer directly.</p>
      </header>

      <nav aria-label="ICD-10 navigation" style={navStyle}>
        <Link href="/icd10" style={navLinkStyle}>ICD-10 home</Link>
        <Link href="/icd10/chapter-16-guidelines-reviewer" style={navLinkStyle}>Guidelines Reviewer</Link>
        <Link href="/icd10/chapter-16-practice-quiz" style={navLinkStyle}>Practice Quiz</Link>
      </nav>

      <div style={introStyle}>
        <strong>Big-picture tip:</strong> questions 8 and 9 are a deliberate pair — same clinical setup (a "suspected" condition), opposite outcomes based purely on whether the workup actually found something. Z05 only applies when nothing is found; the moment real findings show up, code those findings directly instead.
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
