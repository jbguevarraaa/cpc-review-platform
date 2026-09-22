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
    topic: "Psychological Pain",
    question: "A patient's chronic pain is documented as caused exclusively by psychological factors, with no physical cause identified. What's coded?",
    options: [
      "A. F45.41 alone",
      "B. F45.41 plus a code from category G89",
      "C. F45.42 plus a code from category G89",
      "D. A code from category G89 alone",
    ],
    correct: "A",
    explanation: "F45.41 (pain disorder exclusively related to psychological factors) is used alone — the Excludes1 note under G89 blocks pairing G89 with F45.41.",
    lookFor: "\"Exclusively\" psychological, with no physical cause, is the trigger for F45.41 used by itself.",
    eliminate: "B and C both wrongly add a G89 code, which is excluded for the exclusively-psychological scenario.",
  },
  {
    topic: "Psychological Pain",
    question: "A patient has documented chronic pain from a physical cause, plus a documented psychological component contributing to that pain. What's coded?",
    options: [
      "A. F45.41 alone",
      "B. F45.42 plus a code from category G89",
      "C. G89 alone, no F45 code needed",
      "D. F45.41 plus a code from category G89",
    ],
    correct: "B",
    explanation: "F45.42 (pain disorder with related psychological factors) is used together with a G89 code whenever there's a physical pain source plus a documented psychological component.",
    lookFor: "A MIX of physical pain plus a psychological component is the F45.42 + G89 combination, not F45.41.",
    eliminate: "A and D both use F45.41, which is reserved for exclusively psychological pain, not a physical+psychological mix.",
  },
  {
    topic: "Substance Use in Remission",
    question: "A provider documents \"severe opioid use disorder, in sustained remission.\" Which code family applies?",
    options: [
      "A. The opioid abuse-in-remission codes",
      "B. The opioid dependence-in-remission codes",
      "C. The opioid unspecified-use codes",
      "D. No remission code exists for opioids",
    ],
    correct: "B",
    explanation: "Moderate or severe substance use disorders in remission map to the dependence-in-remission codes, not the abuse-in-remission codes (which are for mild severity).",
    lookFor: "\"Severe\" is the key word — moderate or severe maps to dependence-in-remission, mild maps to abuse-in-remission.",
    eliminate: "A applies the mild-severity code family to a severe-severity scenario.",
  },
  {
    topic: "Use/Abuse/Dependence Hierarchy",
    question: "A chart documents \"cannabis use, cannabis abuse, and cannabis dependence\" all for the same patient. How many codes describe this pattern, and which one?",
    options: [
      "A. Three codes, one for each term",
      "B. One code, for dependence only",
      "C. One code, for use only, since it was mentioned first",
      "D. Two codes: abuse and dependence",
    ],
    correct: "B",
    explanation: "When use, abuse, and dependence are all documented for the same substance, only ONE code is assigned, and dependence — the strongest term — is the one selected.",
    lookFor: "Same substance, multiple terms documented together, always resolves to a single code for the STRONGEST term (dependence beats abuse beats use).",
    eliminate: "A and D both incorrectly stack multiple codes for the same substance's use pattern.",
  },
  {
    topic: "Unspecified Substance Use",
    question: "A social history note mentions \"occasional alcohol use\" with no documented associated disorder, medical condition, or anything else meeting the reportable-diagnosis definition. Is an F10.9- code assigned?",
    options: [
      "A. Yes, any mention of substance use is coded",
      "B. No — unspecified-use codes require a documented associated disorder/condition or a met reportable-diagnosis threshold",
      "C. Yes, but only as a secondary code",
      "D. No, unspecified-use codes are never assigned under any circumstances",
    ],
    correct: "B",
    explanation: "Unspecified psychoactive substance use codes are assigned only based on provider documentation and only when they meet the definition of a reportable diagnosis, tied to a documented chapter 5 disorder or medical condition.",
    lookFor: "A bare social-history mention, without a documented link to a disorder/condition, doesn't clear the bar for coding.",
    eliminate: "A wrongly treats any mention of substance use as automatically codeable.",
  },
  {
    topic: "Medical Conditions Due to Substance Use",
    question: "A patient has alcoholic pancreatitis with documented alcohol dependence. What's the correct code combination?",
    options: [
      "A. F10.288 alone (alcohol dependence with other alcohol-induced disorder)",
      "B. K85.2 alone",
      "C. K85.2 (alcohol-induced acute pancreatitis) plus a code from F10.2-",
      "D. F10.2- alone",
    ],
    correct: "C",
    explanation: "Medical conditions due to substance use are NOT classified as substance-induced combination codes — assign the specific medical-condition code (K85.2) plus the appropriate F10-F19 use/abuse/dependence code separately.",
    lookFor: "This exact scenario (alcoholic pancreatitis) is used directly in the guideline text as the illustrating example.",
    eliminate: "A is explicitly called out in the guideline as an inappropriate substitute for the correct two-code pairing.",
  },
  {
    topic: "Blood Alcohol Level",
    question: "A lab-reported blood alcohol level is documented in the chart, but the treating provider never documents any condition classifiable to category F10. Is a Y90 code assigned?",
    options: [
      "A. Yes, the lab value alone is sufficient",
      "B. No — Y90 requires the provider to have documented a qualifying F10 condition",
      "C. Yes, but only if ordered by the ED physician specifically",
      "D. No, Y90 codes require the blood alcohol level to be documented by the provider personally",
    ],
    correct: "B",
    explanation: "A Y90 code requires that the provider has documented a condition classifiable to category F10 — the blood alcohol level itself doesn't need to come from the provider, but the qualifying F10 condition does.",
    lookFor: "Two separate requirements: the F10 condition needs provider documentation; the blood alcohol level does not need to come from the provider.",
    eliminate: "D incorrectly requires provider documentation of the level itself, which the guideline explicitly says is not required.",
  },
  {
    topic: "Factitious Disorder",
    question: "A caregiver is documented as fabricating and inducing illness symptoms in a child under her care (Munchausen syndrome by proxy). What code is assigned on the caregiver's own chart?",
    options: [
      "A. F68.1-, factitious disorder imposed on self",
      "B. F68.A, factitious disorder imposed on another",
      "C. A code from category T74 or T76",
      "D. No code is assigned to the caregiver",
    ],
    correct: "B",
    explanation: "The perpetrator in an MSBP scenario receives F68.A (factitious disorder imposed on another) on their own chart — not F68.1-, which is for self-imposed factitious disorder.",
    lookFor: "\"Caregiver fabricating illness in someone else\" always identifies the PERPETRATOR's own code as F68.A.",
    eliminate: "C is the code for the VICTIM's chart, not the perpetrator's.",
  },
  {
    topic: "Factitious Disorder",
    question: "In that same MSBP scenario, what code is assigned on the child victim's own chart?",
    options: [
      "A. F68.A, factitious disorder imposed on another",
      "B. F68.1-, factitious disorder imposed on self",
      "C. The appropriate code from category T74 (confirmed) or T76 (suspected)",
      "D. No code is assigned to the victim",
    ],
    correct: "C",
    explanation: "The victim of MSBP is coded with the appropriate child/adult abuse, neglect and maltreatment code from category T74 (confirmed) or T76 (suspected) — F68.A belongs on the perpetrator's chart only, never the victim's.",
    lookFor: "The victim never receives F68.A — that code is reserved exclusively for the perpetrator's own record.",
    eliminate: "A wrongly assigns the perpetrator's code to the victim.",
  },
  {
    topic: "Dementia Severity",
    question: "A patient is admitted with mild vascular dementia, and during the same inpatient stay, documentation shows the dementia progressing to severe. How many codes, and at what severity?",
    options: [
      "A. Two codes: one for mild, one for severe",
      "B. One code, for the mild severity documented at admission",
      "C. One code, for the highest severity level (severe) reported during the stay",
      "D. One code for unspecified severity, since it changed during the stay",
    ],
    correct: "C",
    explanation: "When dementia progresses to a higher severity level during the same inpatient stay, assign one code for the HIGHEST severity level reported at any point during that stay.",
    lookFor: "Same-stay severity progression is a one-code rule based on the highest level reached, not the admission level.",
    eliminate: "A incorrectly stacks two codes for the same stay; B uses the wrong (lower) severity level.",
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

export default function Icd10Chapter5PracticeQuizPage() {
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
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 5 · PRACTICE QUIZ</p>
        <h1 style={{ margin: 0, fontSize: "clamp(24px, 5vw, 38px)" }}>Chapter 5 Practice Quiz</h1>
        <p style={{ margin: "10px 0 0", fontSize: "15.5px", lineHeight: 1.5 }}>10 original scenario questions with elimination tricks, covering psychological pain, substance use/abuse/dependence, remission, blood alcohol level, factitious disorder, and dementia severity.</p>
      </header>

      <nav aria-label="ICD-10 quiz navigation" style={navStyle}>
        <Link href="/icd10" style={navLinkStyle}>ICD-10-CM home</Link>
        <Link href="/icd10/chapter-5-guidelines-reviewer" style={navLinkStyle}>Guidelines Reviewer</Link>
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
