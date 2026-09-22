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
    topic: "Record Rules",
    question: "Can a Chapter 16 (perinatal) code ever be assigned on the mother's own record?",
    options: [
      "A. Yes, whenever the newborn's condition also affected the mother's care",
      "B. No — Chapter 16 codes are never used on the maternal record",
      "C. Yes, but only for complications during delivery",
      "D. Yes, if the mother is also being treated at the same facility",
    ],
    correct: "B",
    explanation: "Chapter 16 codes are never used on the maternal record — the mirror image of the rule that Chapter 15 codes are never used on the newborn's record.",
    lookFor: "\"Maternal record\" should immediately trigger the Chapter 16 exclusion, no exceptions.",
    eliminate: "A, C, and D all invent exceptions that don't exist in this fixed rule.",
  },
  {
    topic: "Lifetime Use",
    question: "A condition that originated in the perinatal period is still present and clinically relevant in a 25-year-old patient. Can a Chapter 16 code still be used?",
    options: [
      "A. No, Chapter 16 codes are newborn-only and expire after 28 days",
      "B. Yes — Chapter 16 codes may be used throughout the patient's life as long as the condition is still present",
      "C. Yes, but only if the patient is under 18",
      "D. No, an adult-chapter equivalent code must be found instead",
    ],
    correct: "B",
    explanation: "Chapter 16 codes may continue to be used throughout the life of the patient if the perinatal-origin condition is still present.",
    lookFor: "\"Still present\" is the only condition that matters — patient age doesn't cap this code family's usability.",
    eliminate: "A and C both wrongly impose an age limit that the guideline doesn't set.",
  },
  {
    topic: "Birth Record Principal Diagnosis",
    question: "A newborn is transferred to a second hospital two days after birth. Is a Z38 code assigned at the receiving hospital?",
    options: [
      "A. Yes, every facility that treats the newborn assigns its own Z38 code",
      "B. No — Z38 is assigned only once, at the birth admission, never at a later transfer",
      "C. Yes, but only if the transfer happens within 24 hours",
      "D. No, Z38 is never assigned under any circumstances",
    ],
    correct: "B",
    explanation: "A Z38 code is assigned only once, at the time of birth — if the newborn is transferred to another institution, Z38 is not used at the receiving hospital.",
    lookFor: "Z38 is a single-use, birth-institution-only code — transfer to a new facility doesn't trigger a fresh assignment.",
    eliminate: "A wrongly treats Z38 as reassignable at every new facility.",
  },
  {
    topic: "Sequencing — Perinatal Reason for Encounter",
    question: "A newborn's encounter is specifically FOR a documented perinatal condition, and an additional code from another chapter is also available to add specific detail. What's the sequencing?",
    options: [
      "A. The other-chapter code first, then the Chapter 16 code",
      "B. The Chapter 16 code first, then the other-chapter code",
      "C. Either order is acceptable",
      "D. Only the Chapter 16 code is used; the other-chapter code is never added",
    ],
    correct: "B",
    explanation: "If the reason for the encounter is a perinatal condition, the Chapter 16 code should be sequenced first.",
    lookFor: "\"Reason for the encounter\" being the perinatal condition itself is the specific trigger for Chapter-16-first sequencing.",
    eliminate: "A reverses the required order.",
  },
  {
    topic: "Signs/Symptoms Without Definitive Diagnosis",
    question: "A newborn is being evaluated for a suspected problem, and only signs and symptoms are documented — no definitive diagnosis has been established. What's coded?",
    options: [
      "A. A Chapter 16 code for the suspected condition, assumed present",
      "B. Codes for the signs/symptoms",
      "C. Z05, since the condition isn't confirmed",
      "D. No code until a definitive diagnosis is reached",
    ],
    correct: "B",
    explanation: "Codes for signs and symptoms may be assigned when a definitive diagnosis hasn't yet been established.",
    lookFor: "\"Signs/symptoms documented, no definitive diagnosis yet\" is the direct cue to code the signs/symptoms themselves.",
    eliminate: "A wrongly assumes the suspected condition as confirmed without a definitive diagnosis actually being established.",
  },
  {
    topic: "Birth Process Default",
    question: "A newborn has a condition that could be either due to the birth process or community-acquired, and the documentation doesn't specify which. What's coded?",
    options: [
      "A. No code until the source is clarified",
      "B. A Chapter 16 code, defaulting to birth-process origin",
      "C. A code assuming community-acquired origin",
      "D. Query the provider before any code can be assigned",
    ],
    correct: "B",
    explanation: "When documentation doesn't specify whether a condition is due to the birth process or community-acquired, the default is birth process, and a Chapter 16 code is used.",
    lookFor: "Unclear source defaults TOWARD Chapter 16 (birth process), not away from it.",
    eliminate: "C wrongly defaults to the opposite (community-acquired) source, which is not the guideline's actual default.",
  },
  {
    topic: "Community-Acquired — Documented",
    question: "A newborn's condition is specifically documented as community-acquired. Is a Chapter 16 code assigned?",
    options: [
      "A. Yes, Chapter 16 codes apply to all newborn conditions regardless of source",
      "B. No — a Chapter 16 code should not be assigned for a documented community-acquired condition",
      "C. Yes, but only as a secondary code",
      "D. No code of any kind can be assigned for community-acquired conditions",
    ],
    correct: "B",
    explanation: "If a condition is documented as community-acquired, a Chapter 16 code should not be assigned.",
    lookFor: "Explicit \"community-acquired\" documentation is the one scenario that actively rules OUT a Chapter 16 code.",
    eliminate: "A ignores the explicit exclusion for documented community-acquired conditions.",
  },
  {
    topic: "Clinically Significant Conditions",
    question: "A routine newborn exam finds a condition requiring no treatment, no extra monitoring, no procedures, and no extended stay — but the provider specifically documents it as having implications for the child's future health care needs. Is this coded?",
    options: [
      "A. No, since none of the typical treatment-related criteria are met",
      "B. Yes — documented future health care needs implications alone is sufficient",
      "C. Only if it's also documented on an adult's chart",
      "D. No, this criterion doesn't apply to routine newborn exams",
    ],
    correct: "B",
    explanation: "A condition is clinically significant if it meets any one of several criteria, including having documented implications for future health care needs — this alone is sufficient, even without treatment, monitoring, or extended stay.",
    lookFor: "Any ONE of the six significance criteria is sufficient — they don't all need to be met together.",
    eliminate: "A wrongly requires a treatment-related criterion when the future-health-needs criterion alone already qualifies.",
  },
  {
    topic: "Future Health Care Needs — Adult Exclusion",
    question: "Can the \"implications for future health care needs\" criterion be used to justify coding an incidental finding on an ADULT patient's routine exam?",
    options: [
      "A. Yes, the criterion applies to any patient regardless of age",
      "B. No — this specific criterion is explicitly a newborn/perinatal guideline, not for adult patients",
      "C. Yes, but only for patients under 40",
      "D. No, this criterion doesn't exist in ICD-10-CM at all",
    ],
    correct: "B",
    explanation: "The guideline explicitly notes this criterion should not be used for adult patients — it's specific to the newborn/perinatal context.",
    lookFor: "This is a directly-stated exclusion in the guideline itself — don't port this newborn-specific criterion over to adult coding.",
    eliminate: "A wrongly generalizes a criterion the guideline explicitly restricts to newborns.",
  },
  {
    topic: "Z05 — Suspected Condition Ruled Out",
    question: "A healthy newborn is evaluated for a suspected condition based on risk factors, and after study, no condition is actually found to be present. What's coded?",
    options: [
      "A. A Chapter 16 code for the suspected condition anyway",
      "B. A code from category Z05",
      "C. Codes for the signs/symptoms that prompted the evaluation",
      "D. No code at all, since nothing was found",
    ],
    correct: "B",
    explanation: "Z05 identifies cases where a healthy newborn is evaluated for a suspected condition that, after study, is determined not to be present.",
    lookFor: "\"Healthy newborn, evaluated, nothing found\" is the exact Z05 scenario.",
    eliminate: "A wrongly codes a condition that was specifically ruled out by the workup.",
  },
  {
    topic: "Z05 — Signs/Symptoms Present",
    question: "A newborn is evaluated for a suspected condition, and the newborn DOES have documented signs/symptoms consistent with that suspected problem. Is Z05 used?",
    options: [
      "A. Yes, Z05 is used whenever a condition is suspected",
      "B. No — code the actual signs/symptoms instead",
      "C. Yes, alongside the sign/symptom codes",
      "D. No code of any kind is appropriate",
    ],
    correct: "B",
    explanation: "Z05 is not used when the newborn has documented signs or symptoms of the suspected problem — code the sign/symptom instead.",
    lookFor: "The presence of actual signs/symptoms disqualifies Z05, even though a condition was \"suspected\" going in.",
    eliminate: "A and C both wrongly apply Z05 to a case with documented findings, when Z05 is specifically for when nothing is found.",
  },
  {
    topic: "Z05 on the Birth Record",
    question: "On the birth record specifically, how is a Z05 code sequenced relative to Z38?",
    options: [
      "A. Z05 first, then Z38",
      "B. Z38 first (principal), then Z05 as a secondary code",
      "C. Z05 replaces Z38 entirely on the birth record",
      "D. Z05 is never used on a birth record under any circumstances",
    ],
    correct: "B",
    explanation: "On the birth record, Z05 is used as a secondary code, following the Z38 code (which remains principal).",
    lookFor: "Z38 always leads on the birth record; Z05, when applicable, follows as secondary — never the reverse.",
    eliminate: "A reverses the required sequencing for the birth record specifically.",
  },
  {
    topic: "Prematurity — Documentation Required",
    question: "A newborn appears clinically small to the coder, but no provider documentation anywhere uses the word \"prematurity\" or states specific criteria for it. Is a prematurity code assigned?",
    options: [
      "A. Yes, based on the coder's own clinical assessment",
      "B. No — a prematurity code requires actual provider documentation",
      "C. Yes, using the lowest possible birth weight code as a proxy",
      "D. Only if the newborn is admitted to the NICU",
    ],
    correct: "B",
    explanation: "A code for prematurity should not be assigned unless it is actually documented by the provider — a coder's own clinical impression isn't sufficient.",
    lookFor: "\"Appears premature\" without actual documentation is not a coding trigger — only the provider's stated criteria justify the code.",
    eliminate: "A and C both substitute the coder's own judgment for the required provider documentation.",
  },
  {
    topic: "Birth Weight & Gestational Age Sequencing",
    question: "A newborn's chart documents both a specific birth weight and a specific estimated gestational age, both qualifying for P07 codes. What's the correct sequencing?",
    options: [
      "A. Gestational age code first, then birth weight code",
      "B. Birth weight code first, then gestational age code",
      "C. Either order is acceptable",
      "D. Only one of the two codes is ever assigned, never both",
    ],
    correct: "B",
    explanation: "When both birth weight and gestational age are available, two codes from category P07 are assigned, with the birth weight code sequenced before the gestational age code.",
    lookFor: "Birth weight always leads gestational age in this specific sequencing rule — memorize the fixed order.",
    eliminate: "A reverses the required order.",
  },
  {
    topic: "Low Birth Weight Status Beyond Newborn Period",
    question: "A 6-year-old patient's documented history of low birth weight at birth is specifically noted as still affecting their current growth and development. Is a P07 code still appropriate?",
    options: [
      "A. No, P07 codes are newborn-period-only",
      "B. Yes — as long as the history is documented as affecting current health status",
      "C. Yes, automatically, for any patient who was ever low birth weight",
      "D. No, a personal history Z-code must be used instead with no P07 code",
    ],
    correct: "B",
    explanation: "P07 codes are used for a child or adult who was premature or low birth weight as a newborn when that history is documented as still affecting current health status.",
    lookFor: "The key requirement is a documented CURRENT effect on health status — not simply having a low-birth-weight history somewhere in the past.",
    eliminate: "C wrongly assumes automatic, indefinite applicability without the required current-effect documentation.",
  },
  {
    topic: "Bacterial Sepsis — Unspecified Source",
    question: "A newborn is documented with sepsis, with no specification of congenital vs. community-acquired anywhere in the record. What's coded?",
    options: [
      "A. Default to community-acquired; no P36 code assigned",
      "B. Default to congenital; a code from category P36 is assigned",
      "C. Query the provider before any code can be assigned",
      "D. Code both congenital and community-acquired sepsis together",
    ],
    correct: "B",
    explanation: "If a newborn's sepsis isn't specified as congenital or community-acquired, the default is congenital, and a P36 code is assigned.",
    lookFor: "Unspecified newborn sepsis defaults to CONGENITAL — the opposite assumption from many adult infection-source defaults.",
    eliminate: "A wrongly defaults to community-acquired, which is not this guideline's stated default.",
  },
  {
    topic: "Bacterial Sepsis — Organism Coding",
    question: "A newborn has bacterial sepsis coded with a P36 subcode that does NOT specify the causal organism, and a specific bacterium is separately identified on culture. What's coded?",
    options: [
      "A. The P36 code alone; organism detail is never separately coded",
      "B. The P36 code plus an additional code from category B96 for the organism",
      "C. The P36 code plus a code from category B95 only, never B96",
      "D. Only the organism code; P36 is dropped once the organism is identified",
    ],
    correct: "B",
    explanation: "If the P36 code doesn't already include the causal organism, an additional code from category B96 is added to identify it.",
    lookFor: "Check whether the SPECIFIC P36 subcode already captures the organism — if not, B96 fills that gap.",
    eliminate: "A wrongly skips the organism detail that the guideline specifically calls for when the base P36 code doesn't already include it.",
  },
  {
    topic: "Stillbirth",
    question: "In an institution that does NOT maintain separate records for stillbirths, is code P95 used?",
    options: [
      "A. Yes, P95 applies universally regardless of record-keeping practices",
      "B. No — P95 is only for use in institutions that maintain separate stillbirth records",
      "C. Yes, but only with an additional companion code",
      "D. Yes, and it may be used on the mother's record as well",
    ],
    correct: "B",
    explanation: "Code P95 is restricted to institutions that maintain separate records for stillbirths — it's not a universal code usable at every facility.",
    lookFor: "P95's applicability depends on the INSTITUTION's own record-keeping structure, not just the clinical fact of a stillbirth occurring.",
    eliminate: "C and D both add exceptions (companion codes, maternal record use) that the guideline specifically excludes for P95.",
  },
  {
    topic: "COVID-19 — Transmission Not Documented",
    question: "A newborn tests positive for COVID-19, with no documentation of how or when the infection was transmitted. What's coded?",
    options: [
      "A. P35.8 alone",
      "B. U07.1 plus codes for any associated manifestations",
      "C. Both P35.8 and U07.1 together",
      "D. No code until transmission timing is documented",
    ],
    correct: "B",
    explanation: "For a newborn testing positive for COVID-19 with no documentation of a specific transmission type, U07.1 is assigned plus codes for any associated manifestations — P35.8 requires documented in-utero/birth-process transmission specifically.",
    lookFor: "Absence of documented transmission type means U07.1 alone (plus manifestations), not the P35.8 pairing.",
    eliminate: "A and C both wrongly add P35.8 without the required documented transmission detail.",
  },
  {
    topic: "COVID-19 — In-Utero Transmission Documented",
    question: "A newborn tests positive for COVID-19, and the provider specifically documents the infection was contracted in utero. What's coded?",
    options: [
      "A. U07.1 alone",
      "B. P35.8 alone",
      "C. Both P35.8 and U07.1 together",
      "D. A Chapter 16 code with no COVID-specific code at all",
    ],
    correct: "C",
    explanation: "When the provider documents COVID-19 was contracted in utero or during the birth process, both P35.8 (other congenital viral diseases) and U07.1 are assigned together.",
    lookFor: "Documented in-utero or birth-process transmission is exactly what unlocks the P35.8 + U07.1 combination.",
    eliminate: "A and B each drop one of the two required codes for this specific documented-transmission scenario.",
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

export default function Icd10Chapter16PracticeQuizPage() {
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
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 16 · PRACTICE QUIZ</p>
        <h1 style={{ margin: 0, fontSize: "clamp(24px, 5vw, 38px)" }}>Chapter 16 Practice Quiz</h1>
        <p style={{ margin: "10px 0 0", fontSize: "15.5px", lineHeight: 1.5 }}>20 original scenario questions with elimination tricks, covering record rules, the birth-process default, Z05, prematurity/birth weight, bacterial sepsis, stillbirth, and COVID-19.</p>
      </header>

      <nav aria-label="ICD-10 quiz navigation" style={navStyle}>
        <Link href="/icd10" style={navLinkStyle}>ICD-10-CM home</Link>
        <Link href="/icd10/chapter-16-guidelines-reviewer" style={navLinkStyle}>Guidelines Reviewer</Link>
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
