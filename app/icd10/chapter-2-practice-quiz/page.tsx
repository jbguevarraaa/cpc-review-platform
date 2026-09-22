"use client";

import Link from "next/link";
import { HighlightToolbar } from "../../cpt/surgery/_digestive/highlighter";
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
    topic: "Primary vs. Secondary Site",
    question: "A patient with primary lung cancer and known liver metastasis is admitted for treatment directed exclusively at the liver metastasis. What's sequenced first?",
    options: [
      "A. The primary lung malignancy code",
      "B. The secondary liver malignancy code",
      "C. Both codes together, primary first",
      "D. A disseminated malignancy code (C80.0)",
    ],
    correct: "B",
    explanation: "When treatment is directed only at the secondary (metastatic) site, that secondary site becomes the principal/first-listed diagnosis, even though the primary malignancy is still present.",
    lookFor: "\"Treatment directed at\" tells you which site leads — not which site is anatomically primary.",
    eliminate: "A and C both default to the primary site leading, which contradicts the specific rule for treatment directed at a secondary site; D is for when no sites are known at all, which isn't the case here.",
  },
  {
    topic: "Antineoplastic Therapy",
    question: "A patient is admitted solely for a scheduled round of external beam radiation therapy for a known malignancy. What's the principal/first-listed diagnosis?",
    options: [
      "A. The malignancy code",
      "B. Z51.0, Encounter for antineoplastic radiation therapy",
      "C. A Chapter 18 symptom code",
      "D. Z85, personal history of malignant neoplasm",
    ],
    correct: "B",
    explanation: "When chemotherapy, immunotherapy, or external beam radiation therapy is the chief reason for the encounter, the matching Z51 code leads, with the malignancy as a secondary diagnosis.",
    lookFor: "\"Admitted solely for\" radiation/chemo/immunotherapy is the exact trigger for a Z51 code taking the lead position.",
    eliminate: "A reverses the required sequencing for this specific scenario; D is for a malignancy with no current disease, not an active treatment encounter.",
  },
  {
    topic: "Antineoplastic Therapy",
    question: "A patient is admitted for insertion of radioactive seed implants (brachytherapy) for a malignancy. Is Z51.0 assigned?",
    options: [
      "A. Yes, always for any radiation-related admission",
      "B. No — Z51.0 is not assigned for insertion/implantation of radioactive elements; the malignancy code leads instead",
      "C. Yes, but only as a secondary code",
      "D. No, and no code is assigned for the malignancy either",
    ],
    correct: "B",
    explanation: "Z51.0 is specifically not assigned when the admission is for insertion or implantation of radioactive elements — the malignancy code is sequenced first/principal instead.",
    lookFor: "\"Brachytherapy\" or \"insertion/implantation of radioactive elements\" is the specific carve-out that excludes Z51.0 — external beam radiation is different from implanted radiation for this rule.",
    eliminate: "A wrongly generalizes the external-beam rule to all radiation therapy, including implants, which the guideline explicitly excludes.",
  },
  {
    topic: "Complications — Anemia",
    question: "A patient with metastatic cancer is anemic due to the cancer itself, and only the anemia is being treated this admission. What's the sequencing?",
    options: [
      "A. D63.0 first, then the malignancy code",
      "B. The malignancy code first, then D63.0",
      "C. D63.0 alone, no malignancy code",
      "D. The malignancy code alone, no anemia code",
    ],
    correct: "B",
    explanation: "Anemia caused directly by the malignancy, with treatment only for the anemia, is sequenced with the malignancy code FIRST, then D63.0 (Anemia in neoplastic disease) second.",
    lookFor: "Anemia FROM the cancer itself = malignancy leads. This is the baseline rule to contrast against the therapy-caused-anemia exception.",
    eliminate: "A reverses the correct order for this specific scenario (anemia from cancer, not from treatment).",
  },
  {
    topic: "Complications — Anemia",
    question: "A patient develops anemia specifically as an adverse effect of their chemotherapy, and only the anemia is being treated. What's the sequencing?",
    options: [
      "A. The malignancy code first, then D63.0",
      "B. The anemia code first, then the malignancy code and the adverse-effect code (T45.1X5-)",
      "C. Only the adverse-effect code",
      "D. Same order as anemia caused directly by the malignancy",
    ],
    correct: "B",
    explanation: "Anemia from an adverse effect of chemo/immunotherapy flips the order compared to cancer-caused anemia: the anemia code leads, followed by the neoplasm code and the adverse-effect code.",
    lookFor: "\"Adverse effect of chemotherapy/immunotherapy/radiation\" causing the anemia is the trigger for the anemia code to lead — the opposite of Topic 3's baseline rule.",
    eliminate: "A and D both apply the cancer-caused-anemia sequencing to a therapy-caused-anemia scenario, which is exactly the trap this question tests.",
  },
  {
    topic: "Complications — Dehydration",
    question: "A patient with malignancy-related dehydration is admitted and treated only with IV rehydration. What's sequenced first?",
    options: [
      "A. The malignancy code",
      "B. The dehydration code",
      "C. A Z51 antineoplastic therapy code",
      "D. Z85, personal history of malignant neoplasm",
    ],
    correct: "B",
    explanation: "Dehydration due to the malignancy, treated only with IV rehydration, is sequenced with the dehydration code first, followed by the malignancy code(s).",
    lookFor: "\"Dehydration only, IV rehydration only\" is the trigger for dehydration to lead — matching the general \"complication only being treated\" pattern.",
    eliminate: "A reverses the required sequencing for this complication-focused encounter.",
  },
  {
    topic: "Extent of Disease / Chapter 18 Symptoms",
    question: "A patient is admitted for paracentesis specifically to help determine how extensively their malignancy has spread, and also happens to receive a dose of chemotherapy during the same stay. What leads?",
    options: [
      "A. Z51.11, encounter for antineoplastic chemotherapy",
      "B. The malignancy (primary or relevant metastatic site)",
      "C. A Chapter 18 symptom code describing the reason for paracentesis",
      "D. The paracentesis procedure has no associated diagnosis code",
    ],
    correct: "B",
    explanation: "When the reason for the encounter is to determine the extent of the malignancy (including via a procedure like paracentesis), the malignancy leads — even if chemotherapy happens to also be administered that same stay.",
    lookFor: "\"To determine extent of malignancy\" is a specific, narrow exception where the malignancy leads despite antineoplastic therapy also occurring.",
    eliminate: "A wrongly applies the Z51 antineoplastic-therapy-is-the-reason rule to a scenario where the actual REASON documented is determining extent, not receiving therapy.",
  },
  {
    topic: "Disseminated & Unspecified Malignancy",
    question: "A patient has documented metastatic disease with a clearly identified primary site (pancreas) and two clearly identified secondary sites (liver, peritoneum). Is C80.0 used?",
    options: [
      "A. Yes, since the disease is metastatic/disseminated",
      "B. No — C80.0 is only for cases where NO primary or secondary sites are specified; code each identified site individually",
      "C. Yes, in addition to the individual site codes",
      "D. Only if the patient also has anemia",
    ],
    correct: "B",
    explanation: "C80.0 is reserved for advanced disease where no known primary or secondary sites are specified — since this case has all sites clearly documented, each one is coded individually instead.",
    lookFor: "The deciding factor for C80.0 is whether sites are SPECIFIED, not how advanced or widespread the disease is.",
    eliminate: "A and C both misapply C80.0 to a case where sites are fully known — that's precisely when it should NOT be used.",
  },
  {
    topic: "Pathologic Fracture",
    question: "A patient with a known bone metastasis is admitted specifically for surgical stabilization of a pathological fracture at that site. The fracture is the focus of treatment. What's sequenced first?",
    options: [
      "A. The neoplasm code",
      "B. M84.5–, pathological fracture in neoplastic disease",
      "C. A Chapter 19 traumatic fracture code",
      "D. Z51.0",
    ],
    correct: "B",
    explanation: "When the fracture itself is the focus of treatment, M84.5– is sequenced first, followed by the neoplasm code.",
    lookFor: "\"Focus of treatment is the fracture\" is the exact phrase that flips M84.5 to the lead position.",
    eliminate: "A would be correct if the neoplasm itself were the focus of treatment instead — read carefully for which one the encounter is actually about; C is wrong because this is a pathological, not traumatic, fracture.",
  },
  {
    topic: "Current Malignancy vs. Personal History",
    question: "A patient's primary malignancy was excised 2 years ago. No further treatment has been directed at that site since, and there's no evidence of any existing malignancy there. What's coded for that site?",
    options: [
      "A. The original malignancy code, active",
      "B. A Z85 personal history of malignant neoplasm code",
      "C. C80.1, malignant neoplasm unspecified",
      "D. No code — resolved conditions aren't coded",
    ],
    correct: "B",
    explanation: "Once a primary malignancy is excised, with no further treatment directed at that site and no evidence of existing disease, a Z85 personal history code indicates the former site.",
    lookFor: "The three-part test: excised + no further treatment planned + no current evidence = switch to Z85. All three must be true.",
    eliminate: "A is only correct if further treatment is still being directed at that site, which isn't the case here.",
  },
  {
    topic: "Current Malignancy vs. Personal History",
    question: "A patient with a personal history of colon cancer (previously excised, no further treatment) now has a new metastatic lesion in the liver, confirmed to have originated from that original colon cancer. How is this coded?",
    options: [
      "A. Only update the Z85 code to reflect the new finding",
      "B. Code the liver lesion as a secondary malignant neoplasm, plus the Z85 code as a secondary/additional code",
      "C. Code only the liver lesion, drop the Z85 code entirely",
      "D. Re-code the original colon cancer as active",
    ],
    correct: "B",
    explanation: "Any mention of extension, invasion, or metastasis to another site after a malignancy has been coded to personal history is coded as a secondary malignant neoplasm to that new site — which may be principal/first-listed — with the Z85 code continuing as a secondary code.",
    lookFor: "\"New metastasis found, originating from a previously-excised primary\" always gets its own current secondary-neoplasm code, not just an update to the history code.",
    eliminate: "A drops the new active diagnosis entirely; D incorrectly reactivates the original primary site code, which the guideline doesn't support once it's excised with no current evidence there.",
  },
  {
    topic: "Transplant & BIA-ALCL",
    question: "A patient develops a new malignancy within a previously transplanted kidney. What's the correct code sequence?",
    options: [
      "A. The malignancy code alone",
      "B. T86.– (transplant complication) first, then C80.2, then the specific malignancy code",
      "C. C80.2 alone",
      "D. Z85 personal history code, then the malignancy",
    ],
    correct: "B",
    explanation: "A malignancy in a transplanted organ is coded as a transplant complication first (T86.–), followed by C80.2 (malignant neoplasm associated with transplanted organ), then an additional code for the specific malignancy.",
    lookFor: "\"Malignancy IN a transplanted organ\" is a three-code sequence, always led by the transplant complication code — a fact worth memorizing outright.",
    eliminate: "A and C each drop required codes from what is specifically a three-code combination.",
  },
  {
    topic: "Transplant & BIA-ALCL",
    question: "A patient is diagnosed with active breast implant-associated anaplastic large cell lymphoma (BIA-ALCL). Is a Chapter 19 device-complication code also assigned?",
    options: [
      "A. Yes, always, alongside C84.7A",
      "B. No — C84.7A (or C84.7B if in remission) is assigned alone; a Chapter 19 complication code is specifically not added",
      "C. Only if the implant is removed",
      "D. Only if documented as \"device-related\"",
    ],
    correct: "B",
    explanation: "BIA-ALCL is coded with C84.7A (active) or C84.7B (in remission) alone — the guideline specifically states a Chapter 19 complication code is not additionally assigned, even though it's implant-associated.",
    lookFor: "BIA-ALCL is a named, specific exception to the usual \"device-associated condition also gets a device complication code\" pattern seen elsewhere in ICD-10-CM.",
    eliminate: "A assumes the usual device-complication pairing applies here, which this specific guideline overrides.",
  },
  {
    topic: "Secondary Lymphoid Tissue Neoplasm",
    question: "A patient with diffuse large B-cell lymphoma has documented spread to the lung, brain, and adrenal gland — all outside the lymph nodes. How is this coded?",
    options: [
      "A. Three separate secondary malignant neoplasm codes, one per organ",
      "B. A single code from category C83 with final character \"9\" (extranodal and solid organ sites)",
      "C. C80.0, disseminated malignant neoplasm",
      "D. The lymphoma code alone, with no mention of spread",
    ],
    correct: "B",
    explanation: "When a lymphoid tissue malignancy metastasizes beyond the lymph nodes, a single code from categories C81–C85 with final character \"9\" is used, rather than separate secondary-neoplasm codes for each solid organ involved.",
    lookFor: "\"Lymphoma spreading beyond the lymph nodes to multiple solid organs\" is the specific trigger for the single \"...9\" extranodal code, not multiple individual site codes.",
    eliminate: "A applies the usual multiple-secondary-site coding pattern, which this specific lymphoid-tissue rule overrides with a single combined code instead.",
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

export default function Icd10Chapter2PracticeQuizPage() {
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
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 2 · PRACTICE QUIZ</p>
        <h1 style={{ margin: 0, fontSize: "clamp(24px, 5vw, 38px)" }}>Chapter 2 Practice Quiz</h1>
        <p style={{ margin: "10px 0 0", fontSize: "15.5px", lineHeight: 1.5 }}>14 original scenario questions with elimination tricks, covering site sequencing, antineoplastic therapy encounters, complications, and personal history rules.</p>
      </header>

      <nav aria-label="ICD-10 quiz navigation" style={navStyle}>
        <Link href="/icd10" style={navLinkStyle}>ICD-10-CM home</Link>
        <Link href="/icd10/chapter-2-guidelines-reviewer" style={navLinkStyle}>Guidelines Reviewer</Link>
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
