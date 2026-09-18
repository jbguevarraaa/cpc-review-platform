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
    topic: "Nutritional Anemias",
    question: "A patient has chronic iron deficiency anemia specifically documented as secondary to ongoing GI blood loss. What's coded?",
    options: [
      "A. D50.9, iron deficiency anemia, unspecified",
      "B. D50.0, iron deficiency anemia secondary to blood loss (chronic)",
      "C. D62, acute posthemorrhagic anemia",
      "D. D53.9, nutritional anemia, unspecified",
    ],
    correct: "B",
    explanation: "D50.0 is the specific code for iron deficiency anemia secondary to CHRONIC blood loss — more specific than the unspecified D50.9.",
    lookFor: "\"Secondary to blood loss\" plus \"chronic\" is the exact trigger for D50.0.",
    eliminate: "C (D62) is for acute, not chronic, blood loss — a different timeframe entirely; A skips available specificity.",
  },
  {
    topic: "Acute vs. Chronic Blood Loss",
    question: "A patient develops sudden anemia following acute traumatic blood loss from a motor vehicle collision, with no prior anemia history. What's coded?",
    options: [
      "A. D50.0, iron deficiency anemia secondary to blood loss (chronic)",
      "B. D62, acute posthemorrhagic anemia",
      "C. D64.9, anemia, unspecified",
      "D. D69.6, thrombocytopenia, unspecified",
    ],
    correct: "B",
    explanation: "D62 is specifically for acute posthemorrhagic anemia — sudden blood loss, as opposed to D50.0, which is reserved for chronic blood loss.",
    lookFor: "\"Acute\" and \"sudden\" trauma-related blood loss points to D62, not D50.0.",
    eliminate: "A applies the chronic blood-loss code to an acute scenario, which is the exact trap this question tests.",
  },
  {
    topic: "Hereditary Hemolytic Anemia",
    question: "A patient has documented sickle-cell thalassemia. Which category does this belong to?",
    options: [
      "A. D56, thalassemia",
      "B. D57.4-, sickle-cell thalassemia",
      "C. D55, anemia due to enzyme disorders",
      "D. D58, other hereditary hemolytic anemias",
    ],
    correct: "B",
    explanation: "Despite having \"thalassemia\" in the name, sickle-cell thalassemia is specifically excluded from D56 and classified under D57 (sickle-cell disorders) instead.",
    lookFor: "\"Sickle-cell thalassemia\" is a specific combination term that routes to the sickle-cell category, not the general thalassemia category — a classic naming trap.",
    eliminate: "A applies the general thalassemia code, which is explicitly excluded for this specific combination diagnosis.",
  },
  {
    topic: "Hereditary vs. Acquired Hemolytic Anemia",
    question: "A patient develops autoimmune hemolytic anemia with no hereditary enzyme or membrane defect identified. What category applies?",
    options: [
      "A. D55, anemia due to enzyme disorders",
      "B. D58, other hereditary hemolytic anemias",
      "C. D59, acquired hemolytic anemia",
      "D. D61, aplastic anemia",
    ],
    correct: "C",
    explanation: "Autoimmune hemolytic anemia is an ACQUIRED cause of hemolysis, coded under D59 — distinct from the hereditary causes in D55–D58.",
    lookFor: "\"Autoimmune\" is an acquired mechanism, not a hereditary enzyme or structural defect — that alone routes to D59.",
    eliminate: "A and B both apply hereditary hemolytic anemia categories to a clearly acquired (autoimmune) cause.",
  },
  {
    topic: "Hemophilia Types",
    question: "A patient has documented hereditary factor IX deficiency. Which hemophilia type and code?",
    options: [
      "A. Hemophilia A, D66",
      "B. Hemophilia B, D67",
      "C. Hemophilia C, D68.1",
      "D. Von Willebrand disease, D68.0",
    ],
    correct: "B",
    explanation: "Factor IX deficiency is Hemophilia B (also called Christmas disease), coded D67 — distinct from Factor VIII deficiency (Hemophilia A, D66) and Factor XI deficiency (Hemophilia C, D68.1).",
    lookFor: "Memorize by factor number: Factor VIII = Hemophilia A (D66). Factor IX = Hemophilia B (D67). Factor XI = Hemophilia C (D68.1).",
    eliminate: "A and C both name the wrong factor/hemophilia-letter pairing for factor IX specifically.",
  },
  {
    topic: "DIC",
    question: "A patient develops disseminated intravascular coagulation (DIC) as a complication of septic shock. How should this be coded?",
    options: [
      "A. D65 alone",
      "B. D65 plus an additional code for the septic shock",
      "C. Only the septic shock code",
      "D. A69.9 plus D65",
    ],
    correct: "B",
    explanation: "The guideline note for D65 (DIC) specifically calls for coding the associated underlying condition additionally when applicable — DIC is almost always secondary to something else.",
    lookFor: "DIC is a consumption coagulopathy that's typically triggered by another condition — always look for and code that underlying trigger alongside D65.",
    eliminate: "A and C each drop half of the required combination.",
  },
  {
    topic: "Qualitative Platelet Defect vs. Thrombocytopenia",
    question: "A patient has a normal platelet count, but the platelets present are documented as functioning abnormally (Bernard-Soulier syndrome). What's coded?",
    options: [
      "A. D69.6, thrombocytopenia, unspecified",
      "B. D69.1, qualitative platelet defects",
      "C. D69.0, allergic purpura",
      "D. D65, disseminated intravascular coagulation",
    ],
    correct: "B",
    explanation: "D69.1 covers qualitative platelet defects — platelets present in normal numbers but functioning abnormally — distinct from thrombocytopenia, which is a low platelet COUNT.",
    lookFor: "\"Normal count, abnormal function\" is the exact signature of a qualitative platelet defect, not thrombocytopenia.",
    eliminate: "A wrongly assumes a low platelet count, which isn't documented here — the count is normal, only the function is defective.",
  },
  {
    topic: "Drug-Induced Blood Disorders",
    question: "A patient develops neutropenia as a documented adverse effect of chemotherapy. How is this coded?",
    options: [
      "A. D70.2 alone",
      "B. D70.2 plus an additional adverse-effect code identifying the specific drug",
      "C. D70.0, congenital neutropenia",
      "D. D61, aplastic anemia",
    ],
    correct: "B",
    explanation: "Drug-induced neutropenia (D70.2) follows the same pattern seen throughout this chapter for drug-induced blood disorders: code the disorder, then add a separate adverse-effect code identifying the causative drug.",
    lookFor: "This drug-plus-adverse-effect-code pattern recurs across folate deficiency anemia, hemolytic anemia, and neutropenia in this chapter — it's a consistent structural rule, not a one-off.",
    eliminate: "A drops the required second code; C wrongly applies the congenital subcode to a drug-induced (acquired) scenario.",
  },
  {
    topic: "Spleen Complications",
    question: "A patient sustains a splenic laceration as a complication during an unrelated abdominal surgery. What category applies?",
    options: [
      "A. D73, diseases of the spleen",
      "B. D78, intraoperative and postprocedural complications of the spleen",
      "C. D69.2, other nonthrombocytopenic purpura",
      "D. D89.1, cryoglobulinemia",
    ],
    correct: "B",
    explanation: "D78 is specifically reserved for intraoperative and postprocedural complications of the spleen — distinct from D73, which covers spleen disease in general, not procedure-related complications.",
    lookFor: "\"Complication during surgery\" is the specific trigger for D78 rather than the general D73 spleen-disease category.",
    eliminate: "A applies the general spleen-disease category, missing that this is specifically a procedural complication.",
  },
  {
    topic: "Immunodeficiency Categories",
    question: "A patient has documented common variable immunodeficiency, affecting antibody production only, with normal cell-mediated immunity.",
    options: [
      "A. D80, immunodeficiency with predominantly antibody defects",
      "B. D81, combined immunodeficiencies",
      "C. D86, sarcoidosis",
      "D. D89.1, cryoglobulinemia",
    ],
    correct: "A",
    explanation: "D80 covers immunodeficiencies affecting antibody production specifically — including common variable immunodeficiency — distinct from D81, which requires both antibody AND cell-mediated immunity to be affected.",
    lookFor: "\"Antibody defect only, cell-mediated immunity normal\" is the deciding factor for D80 vs. D81 — read carefully for which arm(s) of immunity are affected.",
    eliminate: "B requires combined antibody and cell-mediated defects, which isn't the case here.",
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

export default function Icd10Chapter3PracticeQuizPage() {
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
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 3 · PRACTICE QUIZ</p>
        <h1 style={{ margin: 0, fontSize: "clamp(24px, 5vw, 38px)" }}>Chapter 3 Practice Quiz</h1>
        <p style={{ margin: "10px 0 0", fontSize: "15.5px", lineHeight: 1.5 }}>10 original scenario questions with elimination tricks, covering anemias, hemophilias, purpura/platelet disorders, and immune mechanism disorders.</p>
      </header>

      <nav aria-label="ICD-10 quiz navigation" style={navStyle}>
        <Link href="/icd10" style={navLinkStyle}>ICD-10-CM home</Link>
        <Link href="/icd10/chapter-3-guidelines-reviewer" style={navLinkStyle}>Guidelines Reviewer</Link>
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
