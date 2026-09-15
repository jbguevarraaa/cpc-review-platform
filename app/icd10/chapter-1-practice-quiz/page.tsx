"use client";

import Link from "next/link";
import { useState } from "react";

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
    topic: "HIV Infections",
    question: "A patient is admitted with PCP pneumonia. The provider documents \"AIDS.\" What is the principal diagnosis?",
    options: [
      "A. J18.9, Pneumonia, unspecified organism, as principal, HIV coded secondary",
      "B. B20, Human immunodeficiency virus [HIV] disease",
      "C. Z21, Asymptomatic HIV infection status",
      "D. R75, Inconclusive laboratory evidence of HIV",
    ],
    correct: "B",
    explanation: "Whenever \"AIDS,\" \"HIV disease,\" or any HIV-related illness is documented and the reason for admission is HIV-related, B20 is the principal diagnosis, followed by the related conditions (like the pneumonia) as secondary.",
    lookFor: "The words \"AIDS\" or \"HIV disease\" (or any illness clearly tied to the patient's HIV status) plus an admission that's actually about that condition.",
    eliminate: "Z21 and R75 both describe a patient without an active HIV illness — they're automatically wrong the moment an actual HIV-related diagnosis is documented.",
  },
  {
    topic: "HIV Infections",
    question: "A patient with a documented history of a prior HIV-related illness (previously coded B20) comes in for a routine visit with no current symptoms. How is HIV status coded at this visit?",
    options: [
      "A. Z21, since the patient is currently asymptomatic",
      "B. R75, since there's no current illness to confirm",
      "C. B20, because it's assigned on every future encounter once ever diagnosed",
      "D. No HIV code is needed since nothing active is happening",
    ],
    correct: "C",
    explanation: "Once a patient has ever qualified for B20, that code is used on every subsequent encounter forever, regardless of current symptoms.",
    lookFor: "\"Previously diagnosed\" or \"history of\" an HIV-related illness — that phrase alone locks in B20 permanently.",
    eliminate: "Z21 is the tempting wrong answer here because \"asymptomatic\" is mentioned — but Z21 only applies to patients who have never had a qualifying HIV illness in the first place.",
  },
  {
    topic: "Infectious Agents as Cause of Diseases Elsewhere",
    question: "A patient has pneumonia documented as due to Klebsiella, and the pneumonia code itself doesn't specify an organism. Which additional code identifies the organism?",
    options: [
      "A. A code from B95 (strep/staph/enterococcus)",
      "B. A code from B96 (other bacterial agents)",
      "C. A code from B97 (viral agents)",
      "D. A code from Z16 (antimicrobial resistance)",
    ],
    correct: "B",
    explanation: "Klebsiella isn't strep, staph, or enterococcus, so it falls to B96 (other bacterial agents as the cause of diseases classified elsewhere).",
    lookFor: "Identify the organism family first: strep/staph/enterococcus → B95, any other bacteria → B96, a virus → B97.",
    eliminate: "Z16 is a trap answer — it identifies drug resistance, not the organism itself. Don't confuse \"which germ\" codes with \"is it resistant\" codes.",
  },
  {
    topic: "Antibiotic Resistance",
    question: "A combination code already exists naming pneumonia due to MRSA. Should a Z16.11 (resistance to penicillins) code also be added?",
    options: [
      "A. Yes, always add it for MRSA cases",
      "B. No — the combination code already communicates the resistant organism",
      "C. Only if the patient is in the ICU",
      "D. Only if severe sepsis is also present",
    ],
    correct: "B",
    explanation: "When a combination code already names both the condition and the resistant organism, adding a separate Z16 resistance code duplicates information that's already fully captured.",
    lookFor: "Ask: does the code I already picked name the resistant organism by itself? If yes, stop there.",
    eliminate: "C and D invent conditions that don't exist in the actual rule — the guideline doesn't care about ICU status or sepsis severity for this specific decision, so treat overly specific qualifiers as a red flag on exam questions.",
  },
  {
    topic: "Sepsis, Severe Sepsis & Septic Shock",
    question: "A patient is admitted with documented sepsis, organism unspecified, and no organ dysfunction is documented anywhere in the record. What is coded?",
    options: [
      "A. A41.9 alone",
      "B. A41.9 plus R65.20",
      "C. R65.20 alone",
      "D. A41.9 plus R65.21",
    ],
    correct: "A",
    explanation: "R65.2- (severe sepsis) is only added when severe sepsis or an associated acute organ dysfunction is actually documented. Without that, plain A41.9 stands alone.",
    lookFor: "Scan specifically for organ dysfunction language (acute kidney injury, altered mental status, etc.) before ever reaching for an R65.2- code.",
    eliminate: "C is impossible on its own — R65.2- can never be a standalone/principal code. D adds septic shock (R65.21) that was never mentioned in the scenario at all.",
  },
  {
    topic: "Sepsis, Severe Sepsis & Septic Shock",
    question: "A patient is admitted with sepsis and pneumonia, both present on admission, with the pneumonia identified as the infection source. What's sequenced first?",
    options: [
      "A. The pneumonia code first, sepsis code second",
      "B. The systemic infection (sepsis) code first, pneumonia second",
      "C. Either order is acceptable, coder's choice",
      "D. R65.2- first, since severe sepsis outranks a localized infection",
    ],
    correct: "B",
    explanation: "When sepsis and a localized infection are both present on admission, the systemic infection is sequenced first and the localized source second — that order only flips if the localized infection was the reason for admission and sepsis developed later.",
    lookFor: "Check the timing: was sepsis present on admission, or did it develop afterward? That single detail decides the sequencing order.",
    eliminate: "C is wrong because there's a specific rule, not coder discretion. D is wrong because R65.2- can never be sequenced first — it always follows an infection code.",
  },
  {
    topic: "Sepsis, Severe Sepsis & Septic Shock",
    question: "A patient is in septic shock. Can the septic shock code be reported as the principal diagnosis?",
    options: [
      "A. Yes, if septic shock is the main reason for the encounter",
      "B. No — it can never be a principal diagnosis",
      "C. Yes, but only if the organism is unknown",
      "D. Yes, if the patient was admitted through the ED",
    ],
    correct: "B",
    explanation: "The septic shock code is always sequenced after the systemic infection code — it represents a type of organ dysfunction and, by definition, is never a standalone or principal diagnosis.",
    lookFor: "Any time \"septic shock\" appears, immediately expect two codes minimum: the infection first, then the septic shock code.",
    eliminate: "A, C, and D all try to invent an exception based on circumstances (reason for visit, known organism, admission route) — none of those change this absolute sequencing rule.",
  },
  {
    topic: "MRSA",
    question: "A patient has a wound infection documented as due to MRSA, and no combination code exists for \"wound infection due to MRSA.\" What's coded?",
    options: [
      "A. The wound infection code alone",
      "B. The wound infection code plus B95.62",
      "C. B95.62 alone",
      "D. The wound infection code plus Z16.11",
    ],
    correct: "B",
    explanation: "When no combination code exists for the specific condition plus MRSA, code the condition itself and add B95.62 as a secondary code to identify MRSA as the cause.",
    lookFor: "First check whether a combination code exists for this exact condition + MRSA. If not, that's your signal to add B95.62 separately.",
    eliminate: "D swaps in the wrong code family — Z16.11 identifies drug resistance, not the organism itself; B95.62 is what actually identifies MRSA as the cause here.",
  },
  {
    topic: "MRSA",
    question: "A routine admission screening swab is documented as \"MRSA nasal swab positive,\" with no signs of active infection anywhere. What's coded?",
    options: [
      "A. B95.62, MRSA infection as the cause of diseases classified elsewhere",
      "B. Z22.322, Carrier or suspected carrier of MRSA",
      "C. A code from the sepsis family, since MRSA is a serious organism",
      "D. Z16.11, Resistance to penicillins",
    ],
    correct: "B",
    explanation: "Colonization (carrying the organism without illness) is a distinct concept from infection and uses its own code, Z22.322 — not an infection or resistance code.",
    lookFor: "Words like \"carrier,\" \"colonization,\" or \"screen positive\" with no documented active illness point straight to Z22.322.",
    eliminate: "A and D both assume an active infection or documented resistance concern that was never actually described — the scenario only supports colonization.",
  },
  {
    topic: "Zika Virus",
    question: "A provider documents \"probable Zika virus infection\" in a patient with joint pain after travel to an endemic area. What's coded?",
    options: [
      "A. A92.5, Zika virus disease",
      "B. Code the joint pain symptom; do not assign A92.5",
      "C. Z20.821 alone, and ignore the joint pain",
      "D. A92.5 plus Z20.821 together",
    ],
    correct: "B",
    explanation: "\"Probable,\" \"possible,\" or \"suspected\" documentation blocks A92.5 entirely — code the presenting signs/symptoms instead.",
    lookFor: "The word \"probable\" (or \"possible\"/\"suspected\") is a hard stop for A92.5, unlike \"confirmed,\" which doesn't require a specific lab test to be coded.",
    eliminate: "A and D both wrongly use A92.5 despite the documentation explicitly saying \"probable\" rather than confirmed.",
  },
  {
    topic: "COVID-19",
    question: "A patient is admitted with a positive COVID-19 test and pneumonia documented as due to COVID-19. What's the correct sequencing?",
    options: [
      "A. The pneumonia code first, U07.1 second",
      "B. U07.1 first, the COVID-19 pneumonia code second",
      "C. Either order, coder's discretion",
      "D. U07.1 only — the pneumonia isn't separately coded",
    ],
    correct: "B",
    explanation: "When COVID-19 is the reason for admission, U07.1 is sequenced first, followed by the specific manifestation code (here, the COVID-19 pneumonia code) as an additional diagnosis.",
    lookFor: "COVID-19 as the admitting reason almost always means U07.1 leads, with manifestation codes following — unless another guideline (OB, sepsis, transplant) overrides it.",
    eliminate: "D is wrong because manifestations are always separately coded in addition to U07.1, never folded into it.",
  },
  {
    topic: "COVID-19",
    question: "A patient who had COVID-19 two months ago now has persistent shortness of breath and fatigue. Their current COVID-19 test is negative. What's coded?",
    options: [
      "A. U07.1 plus the symptom codes",
      "B. U09.9 plus the symptom codes",
      "C. U07.1 alone",
      "D. Z86.16 alone, nothing else",
    ],
    correct: "B",
    explanation: "Lingering symptoms after a resolved COVID-19 infection, with a current negative test, describe Post COVID-19 condition — U09.9, plus codes for the specific symptoms. U09.9 is never used for an active, current infection.",
    lookFor: "\"Persistent/lingering symptoms\" + \"previously had COVID\" + \"current test negative\" is the exact signature of U09.9, not U07.1.",
    eliminate: "A and C both incorrectly use U07.1, which is reserved for an active, current, confirmed infection — not a resolved one.",
  },
  {
    topic: "COVID-19",
    question: "A patient has an asymptomatic positive COVID-19 test, but the provider hasn't documented a COVID-19 diagnosis anywhere in the record. What should the coder do?",
    options: [
      "A. Code U07.1 automatically, since the test is positive",
      "B. Query the provider before assigning U07.1",
      "C. Code Z11.52 (screening) regardless of the positive result",
      "D. Assign no code at all",
    ],
    correct: "B",
    explanation: "A positive test alone, without the provider's own diagnosis statement, isn't enough — false positives happen, and confirming the diagnosis is the provider's responsibility. Query first.",
    lookFor: "A positive lab result sitting by itself, with no matching provider diagnosis statement anywhere in the documentation, is always a query trigger.",
    eliminate: "A jumps straight to coding without confirming the diagnosis actually exists in the documentation — exactly the shortcut this guideline warns against.",
  },
  {
    topic: "COVID-19",
    question: "A patient with a documented history of COVID-19 (fully resolved, no current infection) now develops multisystem inflammatory syndrome (MIS). What's coded?",
    options: [
      "A. U07.1 plus M35.81",
      "B. M35.81 plus U09.9",
      "C. M35.81 plus Z20.822",
      "D. M35.81 alone",
    ],
    correct: "B",
    explanation: "MIS following a past (not current) COVID-19 infection is coded with M35.81 (Multisystem inflammatory syndrome) plus U09.9 (Post COVID-19 condition) — U07.1 is reserved for an active infection, and Z20.822 is for exposure without any confirmed infection ever having occurred.",
    lookFor: "Three different MIS scenarios hinge on one distinction: active infection right now → U07.1; history of a past, resolved infection → U09.9; exposure only, never actually confirmed → Z20.822.",
    eliminate: "A wrongly assumes an active current infection; C wrongly treats a documented past infection as if it were only \"exposure\" — those are two different levels of certainty in the documentation.",
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

export default function Icd10Chapter1PracticeQuizPage() {
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
      <header style={heroStyle}>
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 1 · PRACTICE QUIZ</p>
        <h1 style={{ margin: 0, fontSize: "clamp(24px, 5vw, 38px)" }}>Chapter 1 Practice Quiz</h1>
        <p style={{ margin: "10px 0 0", fontSize: "15.5px", lineHeight: 1.5 }}>14 original scenario questions with elimination tricks, covering HIV, sepsis, MRSA, Zika, and COVID-19.</p>
      </header>

      <nav aria-label="ICD-10 quiz navigation" style={navStyle}>
        <Link href="/icd10" style={navLinkStyle}>ICD-10-CM home</Link>
        <Link href="/icd10/chapter-1-guidelines-reviewer" style={navLinkStyle}>Guidelines Reviewer</Link>
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
