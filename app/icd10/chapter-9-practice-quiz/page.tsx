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
    topic: "Hypertension with Heart Disease",
    question: "A patient has documented hypertension and heart failure (I50.9), with no statement from the provider about whether the two are related. What's coded?",
    options: [
      "A. I10 and I50.9, coded as unrelated conditions",
      "B. I11.0 and I50.9, coded as related",
      "C. I11.9 alone, no additional heart failure code",
      "D. Query the provider before coding either condition",
    ],
    correct: "B",
    explanation: "ICD-10-CM presumes a causal link between hypertension and heart disease — code them as related (I11.0, hypertensive heart disease with heart failure, plus the I50.9 code) unless documentation explicitly says they're unrelated.",
    lookFor: "No statement either way defaults to \"presumed related\" for hypertension + heart disease — this is the opposite of how most other conditions work.",
    eliminate: "A assumes unrelated without documentation support; C skips the required additional heart failure code, which is only omitted for I51.5/I51.7.",
  },
  {
    topic: "Hypertension with Heart Disease",
    question: "A patient has hypertension, cardiomegaly (I51.7), and no chronic kidney disease. What's coded?",
    options: [
      "A. I11.9 and I51.7 together",
      "B. I11.9 alone",
      "C. I10 and I51.7 together",
      "D. I13.- alone",
    ],
    correct: "B",
    explanation: "Hypertension with cardiomegaly (I51.7) or myocardial degeneration (I51.5) codes to I11 alone — no additional heart-condition code is needed, unlike the I50.-/I51.4/I51.89/I51.9 combinations.",
    lookFor: "I51.5 and I51.7 are the two heart conditions that get fully absorbed into I11 with nothing added on top.",
    eliminate: "A wrongly adds a second code that this specific combination doesn't need; D pulls in the CKD combination code without any CKD being documented.",
  },
  {
    topic: "Hypertension — Secondary/Transient",
    question: "A non-pregnant patient has a single elevated blood pressure reading at a routine visit, with no prior hypertension diagnosis. What's coded?",
    options: [
      "A. I10, Essential hypertension",
      "B. R03.0, Elevated blood pressure reading without diagnosis of hypertension",
      "C. I15.9, Secondary hypertension, unspecified",
      "D. No code — a single reading isn't reportable",
    ],
    correct: "B",
    explanation: "R03.0 is the default for a transient/elevated reading in a patient with no established hypertension diagnosis.",
    lookFor: "\"No prior hypertension diagnosis\" plus \"elevated reading\" is the exact R03.0 pattern.",
    eliminate: "A assumes a diagnosis that hasn't been established; C invents a secondary cause that isn't in the scenario.",
  },
  {
    topic: "Hypertension — Secondary/Transient",
    question: "A pregnant patient in her second trimester develops transient hypertension without significant proteinuria. What's coded?",
    options: [
      "A. R03.0",
      "B. I10",
      "C. O13.-, Gestational hypertension without significant proteinuria",
      "D. O14.-, Pre-eclampsia",
    ],
    correct: "C",
    explanation: "Transient hypertension of pregnancy without significant proteinuria is specifically coded O13.-, not the general R03.0 default.",
    lookFor: "Pregnancy context always overrides the general R03.0 default for transient hypertension — go straight to the O-codes.",
    eliminate: "A ignores the pregnancy-specific code family; D requires proteinuria/pre-eclampsia findings that aren't documented here.",
  },
  {
    topic: "Hypertensive Crisis & Pulmonary HTN",
    question: "A patient is documented with pulmonary hypertension secondary to chronic lung disease. What code family applies?",
    options: [
      "A. I10-I16, systemic hypertension",
      "B. I27.2-, other pulmonary heart diseases",
      "C. I16.-, hypertensive crisis",
      "D. I1A.0, resistant hypertension",
    ],
    correct: "B",
    explanation: "Pulmonary hypertension is classified to category I27, not to the systemic I10-I16 hypertension family, despite sharing the word \"hypertension.\"",
    lookFor: "\"Pulmonary\" hypertension is a completely separate code family from systemic hypertension — don't let the shared word cause a mix-up.",
    eliminate: "A, C, and D all pull from the systemic hypertension side of the chapter, which doesn't apply once \"pulmonary\" is specified.",
  },
  {
    topic: "Hypertensive Crisis & Pulmonary HTN",
    question: "A patient with essential hypertension is documented as having \"apparent treatment resistant hypertension\" on three medications. How is this coded?",
    options: [
      "A. I1A.0 alone",
      "B. I10 alone",
      "C. I10, then I1A.0 as an additional code",
      "D. I16.9, hypertensive crisis, unspecified",
    ],
    correct: "C",
    explanation: "I1A.0 (resistant hypertension) is always an add-on code — the specific existing hypertension type is coded first, then I1A.0 second.",
    lookFor: "\"Apparent/treatment/true resistant hypertension\" language is the exact trigger for adding I1A.0 on top of the primary hypertension code.",
    eliminate: "A drops the required primary hypertension code; D misreads \"resistant\" as a crisis, which is a different concept entirely.",
  },
  {
    topic: "Atherosclerotic CAD & Angina",
    question: "A patient has atherosclerotic heart disease of a native coronary artery with documented angina pectoris, and no other cause identified for the angina. What's coded?",
    options: [
      "A. I25.11- alone",
      "B. I25.11- plus a separate angina pectoris code",
      "C. I20.9, Angina pectoris, unspecified, alone",
      "D. I25.10 and I20.9 together",
    ],
    correct: "A",
    explanation: "I25.11- is a combination code that already includes the angina — a causal relationship is assumed, so no separate angina code is added.",
    lookFor: "Whenever atherosclerosis and angina are both documented with no other stated cause, expect the single combination code, not two codes.",
    eliminate: "B and D both double-report the angina that's already built into the combination code.",
  },
  {
    topic: "Atherosclerotic CAD & Angina",
    question: "A patient with known coronary artery disease is admitted for an acute anterior wall STEMI. What's the correct sequencing?",
    options: [
      "A. The coronary artery disease code first, then the STEMI code",
      "B. The STEMI code first, then the coronary artery disease code",
      "C. Either order is acceptable",
      "D. Only the coronary artery disease code is needed",
    ],
    correct: "B",
    explanation: "When a patient with CAD is admitted for an acute MI, the AMI is sequenced before the coronary artery disease code.",
    lookFor: "\"Admitted for an acute MI\" is the cue that the AMI leads, even though the CAD could be seen as the underlying cause.",
    eliminate: "A reverses the required sequencing; D drops the AMI code entirely, which is never correct when an acute MI is the reason for admission.",
  },
  {
    topic: "Intraoperative/Postprocedural CVA",
    question: "A patient has a stroke discovered two days after an unrelated orthopedic surgery, with no documentation linking the surgery to the stroke. How should this be coded?",
    options: [
      "A. As a postprocedural cerebrovascular accident",
      "B. As an ordinary stroke (e.g., I63.-), not as intraoperative/postprocedural",
      "C. Query is not needed — code it as postprocedural by default",
      "D. Do not code the stroke at all until a cause is confirmed",
    ],
    correct: "B",
    explanation: "Without documentation clearly establishing a cause-and-effect relationship between the procedure and the CVA, it's coded as an ordinary stroke, not as intraoperative/postprocedural.",
    lookFor: "Timing alone (\"two days after surgery\") is never enough — the record must explicitly state the cause-and-effect link.",
    eliminate: "A and C both assume a link the documentation doesn't support; D incorrectly withholds a code that should still be assigned based on the stroke itself.",
  },
  {
    topic: "Sequelae of Cerebrovascular Disease",
    question: "A patient's chart documents right-sided hemiparesis as a lasting deficit from a stroke 8 months ago, with no mention of hand dominance. What's the default?",
    options: [
      "A. Nondominant side affected",
      "B. Dominant side affected",
      "C. Ambidextrous default only",
      "D. No default exists — query required",
    ],
    correct: "B",
    explanation: "Per the default rule for unspecified dominance: right side affected defaults to dominant.",
    lookFor: "Memorize the three defaults: ambidextrous → dominant, left → nondominant, right → dominant.",
    eliminate: "A applies the left-side default to a right-side scenario; D ignores that ICD-10-CM does provide a specific default here.",
  },
  {
    topic: "Sequelae of Cerebrovascular Disease",
    question: "A patient with known residual deficits from a stroke 6 months ago is admitted today for a brand-new acute cerebral infarction. What's coded?",
    options: [
      "A. Only the new acute infarction code",
      "B. Only the I69 sequela code for the old deficits",
      "C. Both the new acute infarction code and the I69 sequela code",
      "D. Neither — sequelae and acute events can't be coded together",
    ],
    correct: "C",
    explanation: "I69 codes may be reported alongside active I60-I67 codes when a patient has both a current cerebrovascular event and deficits from an old one.",
    lookFor: "\"Current event\" plus \"old lasting deficit\" is the signature for reporting both codes together.",
    eliminate: "A and B each drop half of the clinical picture; D states a restriction that doesn't actually exist in the guideline.",
  },
  {
    topic: "Acute MI — STEMI/NSTEMI",
    question: "A patient's type 1 STEMI converts to NSTEMI on follow-up testing after thrombolytic therapy is administered. How is the MI coded?",
    options: [
      "A. As NSTEMI, since that's the current presentation",
      "B. As STEMI, since that was the original presentation",
      "C. Both STEMI and NSTEMI codes together",
      "D. I21.9, unspecified, since the type is now unclear",
    ],
    correct: "B",
    explanation: "A STEMI that converts to NSTEMI due to thrombolytic therapy is still coded as STEMI — the original presentation is what's coded, not the post-treatment picture.",
    lookFor: "\"Converts to NSTEMI due to thrombolytic therapy\" is the specific trigger for keeping the original STEMI code.",
    eliminate: "A and D both incorrectly let the treatment outcome override the original diagnosis.",
  },
  {
    topic: "Acute MI — STEMI/NSTEMI",
    question: "A patient with a type 1 STEMI five days ago is now admitted with a new type 1 MI in a different location, still within the 4-week window. What's coded?",
    options: [
      "A. Only a category I22 code",
      "B. Only a category I21 code for the new MI",
      "C. A category I22 code together with a category I21 code",
      "D. I25.2, Old myocardial infarction, plus the new I21 code",
    ],
    correct: "C",
    explanation: "Category I22 (subsequent MI) is always reported together with a category I21 code, never alone — sequencing depends on the circumstances of the encounter.",
    lookFor: "\"New AMI within 4 weeks of a prior type 1 or unspecified AMI\" is the exact trigger for adding a category I22 code alongside I21.",
    eliminate: "A omits the required I21 code; D wrongly treats the first MI as \"old and healed,\" which doesn't apply within the 4-week active window.",
  },
  {
    topic: "Acute MI — Type 2 & Other Types",
    question: "A patient has a documented type 2 myocardial infarction due to demand ischemia from severe anemia, with the anemia identified as the cause. What's coded?",
    options: [
      "A. The anemia code, then I21.A1",
      "B. I24.89, Other forms of acute ischemic heart disease",
      "C. I21.0-I21.4 based on the STEMI/NSTEMI description",
      "D. I21.A1 alone, no anemia code",
    ],
    correct: "A",
    explanation: "Type 2 MI is coded I21.A1, with the underlying cause (here, anemia) coded first when known. I24.89 is specifically NOT used for demand ischemia.",
    lookFor: "\"Demand ischemia\" or \"ischemic imbalance\" always points to I21.A1, with the cause sequenced first if documented.",
    eliminate: "B uses the wrong code family entirely; C wrongly applies type 1 STEMI/NSTEMI codes, which are reserved exclusively for type 1 MI.",
  },
  {
    topic: "Acute MI — Type 2 & Other Types",
    question: "A patient with a known type 2 MI two weeks ago now presents with a new type 2 MI. What's coded for the new event?",
    options: [
      "A. A category I22 code",
      "B. I21.A1 only",
      "C. I21.A9 only",
      "D. Both I21.A1 and a category I22 code",
    ],
    correct: "B",
    explanation: "A subsequent type 2 MI is coded I21.A1 only — category I22 is reserved exclusively for subsequent type 1 or unspecified MI, never type 2.",
    lookFor: "\"Subsequent\" + \"type 2\" together should never trigger a category I22 code — that's the specific trap this question tests.",
    eliminate: "A and D both incorrectly pull in category I22, which type 2 MI is explicitly excluded from.",
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

export default function Icd10Chapter9PracticeQuizPage() {
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
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 9 · PRACTICE QUIZ</p>
        <h1 style={{ margin: 0, fontSize: "clamp(24px, 5vw, 38px)" }}>Chapter 9 Practice Quiz</h1>
        <p style={{ margin: "10px 0 0", fontSize: "15.5px", lineHeight: 1.5 }}>15 original scenario questions with elimination tricks, covering hypertension combinations, CAD/angina, cerebrovascular sequelae, and acute MI types.</p>
      </header>

      <nav aria-label="ICD-10 quiz navigation" style={navStyle}>
        <Link href="/icd10" style={navLinkStyle}>ICD-10-CM home</Link>
        <Link href="/icd10/chapter-9-guidelines-reviewer" style={navLinkStyle}>Guidelines Reviewer</Link>
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
