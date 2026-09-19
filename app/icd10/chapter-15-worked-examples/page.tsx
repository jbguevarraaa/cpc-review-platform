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
    topic: "Sequencing Priority",
    scenario: "A pregnant patient sees her primary care provider for a routine skin condition. The provider documents clearly: \"this dermatologic condition is not affecting the pregnancy.\"",
    options: [
      "A. A Chapter 15 code plus the skin condition code",
      "B. Z33.1 in place of any Chapter 15 code, plus the skin condition code",
      "C. The skin condition code alone, no pregnancy-related code at all",
      "D. A Chapter 15 code alone",
    ],
    correct: "B",
    explanation: "The provider's explicit \"not affecting the pregnancy\" documentation triggers Z33.1 in place of any Chapter 15 code, alongside the skin condition's own code.",
    lookFor: "The specific documented phrase ruling out any effect on the pregnancy is what unlocks Z33.1.",
  },
  {
    topic: "Trimester — Multi-Admission Span",
    scenario: "A patient develops preeclampsia, documented as starting in her second trimester (week 26). She remains hospitalized continuously and is still admitted when she crosses into her third trimester two weeks later.",
    options: [
      "A. Third trimester code, since that's her status at the latest point of care",
      "B. Second trimester code, matching when the complication developed",
      "C. Unspecified trimester, since the stay spans two trimesters",
      "D. Both a second- and third-trimester code together",
    ],
    correct: "B",
    explanation: "For an admission spanning more than one trimester, the antepartum complication's trimester character is based on when the complication developed — here, the second trimester.",
    lookFor: "The trimester of ONSET, not the trimester at any later point during the same continuous stay, governs the code.",
  },
  {
    topic: "7th Character — Single Gestation",
    scenario: "A patient pregnant with a single fetus has a documented complication from one of the fetus-identifying code categories.",
    options: [
      "A. 7th character \"1\"",
      "B. 7th character \"2\"",
      "C. 7th character \"0\"",
      "D. No 7th character is required for single gestations",
    ],
    correct: "C",
    explanation: "7th character \"0\" is assigned for single gestations.",
    lookFor: "Single gestation is one of the three defined triggers for the \"0\" 7th character.",
  },
  {
    topic: "Completed Weeks of Gestation",
    scenario: "A provider's note states: \"estimated gestational age 34 weeks, 5 days\" at the time of a documented complication.",
    options: [
      "A. 35 weeks",
      "B. 34 weeks",
      "C. 33 weeks",
      "D. Query the provider for a more precise date",
    ],
    correct: "B",
    explanation: "\"Completed\" weeks means full weeks only — 34 weeks, 5 days has not yet reached a full 35th week.",
    lookFor: "Any documented day count less than 7 additional days keeps the coding at the lower completed week.",
  },
  {
    topic: "Routine Prenatal, No Risk Factors",
    scenario: "A patient with an uncomplicated, average-risk pregnancy presents for her scheduled prenatal visit. No complications or risk factors are documented.",
    options: [
      "A. A code from category O09",
      "B. A code from category Z34",
      "C. O80",
      "D. Z33.1",
    ],
    correct: "B",
    explanation: "Routine outpatient prenatal visits with no complications present use a Z34 code as the first-listed diagnosis, not used together with Chapter 15 codes.",
    lookFor: "\"Routine, no complications, no risk factors documented\" is the plain Z34 scenario.",
  },
  {
    topic: "Episodes When No Delivery Occurs",
    scenario: "A pregnant patient is admitted and treated for two separate, unrelated complications during the same encounter, with no delivery occurring, and both complications are actively treated/monitored during the stay.",
    options: [
      "A. Only the more clinically severe complication may be sequenced first",
      "B. Either complication code may be sequenced first",
      "C. The complication documented first chronologically must be sequenced first",
      "D. Neither can be principal; a different code entirely is required",
    ],
    correct: "B",
    explanation: "When more than one complication is present, all treated or monitored, and no delivery occurs, any of the complication codes may be sequenced first.",
    lookFor: "Multiple actively-managed complications with no delivery gives the coder flexibility in sequencing — no forced severity or chronology ranking.",
  },
  {
    topic: "Pre-Existing vs. Pregnancy-Related",
    scenario: "A patient's hypertension is first documented at 20 weeks gestation, with no history of hypertension before this pregnancy.",
    options: [
      "A. Category O10 (pre-existing hypertension)",
      "B. A pregnancy-induced hypertension category, since it began during this pregnancy",
      "C. Z33.1, since the timing is unclear",
      "D. No code until postpartum resolution is confirmed",
    ],
    correct: "B",
    explanation: "Since there's no history of hypertension prior to this pregnancy, this is a pregnancy-induced (not pre-existing) hypertension scenario, coded from the pregnancy-induced hypertension categories rather than O10.",
    lookFor: "No documented history before pregnancy plus new onset during pregnancy points away from the pre-existing (O10) category.",
  },
  {
    topic: "Fetal Conditions Affecting Management",
    scenario: "A known fetal cardiac abnormality is documented as requiring weekly additional fetal echocardiograms and increased maternal monitoring for the remainder of the pregnancy.",
    options: [
      "A. No code, since the fetus is the one being monitored",
      "B. A code from O35, since the fetal condition is documented as changing the mother's management",
      "C. A Chapter 16 perinatal code on the mother's record",
      "D. Z34, since this is still technically a prenatal visit",
    ],
    correct: "B",
    explanation: "The fetal cardiac abnormality is documented as directly requiring additional maternal monitoring and studies, meeting the management-impact threshold for an O35 code.",
    lookFor: "Documented EXTRA monitoring/studies specifically because of the fetal finding is the management-impact evidence that justifies O35.",
  },
  {
    topic: "HIV — Symptomatic Illness",
    scenario: "A pregnant patient is admitted specifically because of a symptomatic, active HIV-related opportunistic infection requiring inpatient treatment.",
    options: [
      "A. Z21 alone",
      "B. The opportunistic infection code alone",
      "C. O98.7– as principal, followed by the specific HIV-related illness code(s)",
      "D. O98.7– and Z21 together",
    ],
    correct: "C",
    explanation: "For a symptomatic HIV-related illness prompting admission, O98.7– is the principal diagnosis, followed by the code(s) for the specific illness.",
    lookFor: "Symptomatic/active illness (not just HIV status) points to O98.7– plus the illness code, not the Z21 asymptomatic-status pairing.",
  },
  {
    topic: "Pre-Existing Diabetes in Pregnancy",
    scenario: "A patient with known, long-standing type 1 diabetes becomes pregnant.",
    options: [
      "A. Only the E10 (type 1 diabetes) code from Chapter 4",
      "B. An O24 code (pre-existing diabetes complicating pregnancy) first, then the E10 code",
      "C. Only an O24.4 (gestational diabetes) code",
      "D. The E10 code first, then the O24 code",
    ],
    correct: "B",
    explanation: "Pre-existing diabetes in pregnancy is coded with an O24 code first, followed by the appropriate Chapter 4 diabetes code (E10 for type 1) — sequencing matters.",
    lookFor: "\"Long-standing,\" \"known before pregnancy\" is the pre-existing (not gestational) signal, and O24 always leads the sequence.",
  },
  {
    topic: "Puerperal Sepsis with Organism",
    scenario: "A patient two weeks postpartum (no recent obstetrical procedure) develops sepsis, with blood cultures confirming a specific bacterial organism.",
    options: [
      "A. A code from category A41 alone",
      "B. O85 alone, no organism code",
      "C. O85 plus a secondary code from B95–B96 for the organism",
      "D. R65.2 alone",
    ],
    correct: "C",
    explanation: "Puerperal sepsis is coded O85, with a required secondary code from B95–B96 identifying the confirmed bacterial organism.",
    lookFor: "A confirmed organism on culture is exactly the detail that fills in the required secondary code alongside O85.",
  },
  {
    topic: "Normal Delivery — O80 Eligibility",
    scenario: "A patient is admitted at 39 weeks with no antepartum complications, labors normally, delivers a single healthy infant vaginally, and has no postpartum complications during the delivery episode.",
    options: [
      "A. O80 as principal, Z37.0 as the outcome code",
      "B. A code from category O09, since risk can never be ruled out",
      "C. O80 alone, no outcome code needed",
      "D. Z34, since the pregnancy was uncomplicated",
    ],
    correct: "A",
    explanation: "This is the textbook O80 scenario: full-term, single healthy infant, no complications at any point in the delivery episode — O80 as principal, paired with Z37.0 as the required outcome-of-delivery code.",
    lookFor: "Full-term + single infant + zero complications antepartum/during/postpartum is the complete O80 checklist.",
  },
  {
    topic: "Peripartum Cardiomyopathy",
    scenario: "A patient with no prior cardiac history develops new-onset cardiomyopathy diagnosed in her third trimester, which is still being managed and monitored four months after delivery.",
    options: [
      "A. A general (non-obstetric) cardiomyopathy code from the circulatory chapter",
      "B. O90.3",
      "C. O94, since it's now past the immediate delivery period",
      "D. O85, since it developed near delivery",
    ],
    correct: "B",
    explanation: "O90.3 is defined precisely for this presentation: no pre-existing heart disease, third-trimester onset, and continued progression/management for months after delivery — within the peripartum window.",
    lookFor: "No pre-existing heart disease + third-trimester onset + ongoing months-later management is the specific O90.3 profile.",
  },
  {
    topic: "Abuse in a Pregnant Patient",
    scenario: "A pregnant patient presents with confirmed physical abuse by a partner, sustaining a documented current injury, with the perpetrator identified in the record.",
    options: [
      "A. The injury code first, then the abuse code, then the perpetrator code",
      "B. A code from O9A.3 first, followed by the injury code and the perpetrator code",
      "C. Only the injury code; abuse status isn't separately coded during pregnancy",
      "D. Z33.1, since the abuse is unrelated to the pregnancy itself",
    ],
    correct: "B",
    explanation: "For confirmed physical abuse of a pregnant patient, the O9A.3 code is sequenced first, followed by the codes identifying the current injury and the perpetrator.",
    lookFor: "The abuse-complicating-pregnancy code (O9A.3/.4/.5) always leads this sequence, with injury and perpetrator codes following.",
  },
  {
    topic: "COVID-19 as the Reason for Admission",
    scenario: "A pregnant patient is admitted specifically for treatment of active, symptomatic COVID-19 pneumonia.",
    options: [
      "A. U07.1 as principal, O98.5– as additional",
      "B. O98.5– as principal, followed by U07.1 and the pneumonia manifestation code",
      "C. The pneumonia code alone as principal",
      "D. O98.5– alone, no other codes",
    ],
    correct: "B",
    explanation: "When COVID-19 is the actual reason for admission during pregnancy, O98.5– is sequenced as principal, followed by U07.1 and codes for associated manifestations like pneumonia.",
    lookFor: "COVID-19 being the genuine admission reason (not incidental) is what puts O98.5– first in the sequence.",
  },
  {
    topic: "Gestational Diabetes — Abnormal Glucose (Not True Diabetes)",
    scenario: "A pregnant patient's glucose tolerance test shows an abnormal result that does not meet the clinical definition of diabetes.",
    options: [
      "A. An O24.4 subcode, since any glucose abnormality in pregnancy is gestational diabetes",
      "B. O99.81, abnormal glucose complicating pregnancy",
      "C. E11.9, type 2 diabetes, unspecified",
      "D. No code, since it doesn't meet the definition of diabetes",
    ],
    correct: "B",
    explanation: "Abnormal glucose tolerance in pregnancy that doesn't meet the definition of diabetes is coded from subcategory O99.81, not the O24.4 gestational diabetes family.",
    lookFor: "\"Abnormal, but not meeting the definition of diabetes\" is the specific cue for O99.81 rather than O24.4.",
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

export default function Icd10Chapter15WorkedExamplesPage() {
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
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 15 · WORKED EXAMPLES</p>
        <h1 style={{ margin: 0, fontSize: "clamp(24px, 5vw, 38px)" }}>Chapter 15 Worked Examples</h1>
        <p style={{ margin: "10px 0 0", fontSize: "15.5px", lineHeight: 1.5 }}>16 scenario walkthroughs with full reasoning — jump to any question to check its answer directly.</p>
      </header>

      <nav aria-label="ICD-10 navigation" style={navStyle}>
        <Link href="/icd10" style={navLinkStyle}>ICD-10 home</Link>
        <Link href="/icd10/chapter-15-guidelines-reviewer" style={navLinkStyle}>Guidelines Reviewer Pt. 1</Link>
        <Link href="/icd10/chapter-15-guidelines-reviewer-part-2" style={navLinkStyle}>Guidelines Reviewer Pt. 2</Link>
        <Link href="/icd10/chapter-15-practice-quiz" style={navLinkStyle}>Practice Quiz</Link>
      </nav>

      <div style={introStyle}>
        <strong>Big-picture tip:</strong> a huge share of this chapter's traps boil down to one question — "was this the actual REASON for the encounter, or just incidentally present?" That single question governs Z33.1 (Q1), O09 vs. Z34, principal diagnosis for cesarean, and COVID-19 sequencing (Q16) alike. Learn to ask it reflexively.
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
