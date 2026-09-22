"use client";

import Link from "next/link";
import { HighlightToolbar } from "../../cpt/surgery/_digestive/highlighter";
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
    topic: "Primary vs. Secondary Site",
    scenario: "A patient with a known primary malignancy of the pancreas, with metastasis to the liver, is admitted this time specifically for radiofrequency ablation of the liver lesions. No treatment is directed at the pancreas this admission.",
    options: [
      "A. Pancreatic malignancy as principal, liver metastasis as secondary",
      "B. Liver secondary malignancy as principal, pancreatic malignancy as secondary",
      "C. C80.0, disseminated malignancy, alone",
      "D. Liver malignancy coded as a new primary site",
    ],
    correct: "B",
    explanation: "Since treatment this admission is directed only at the metastatic liver site, the liver (secondary) malignancy is the principal/first-listed diagnosis, with the primary pancreatic malignancy coded as an additional diagnosis.",
    lookFor: "Always ask \"where is TREATMENT directed THIS encounter?\" — that answer picks the principal diagnosis, regardless of which site was diagnosed first.",
  },
  {
    topic: "Antineoplastic Therapy Exception",
    scenario: "A patient with a known malignancy is admitted for insertion of brachytherapy seeds directly into a prostate tumor.",
    options: [
      "A. Z51.0, encounter for antineoplastic radiation therapy, as principal",
      "B. The prostate malignancy code as principal; Z51.0 is not assigned",
      "C. Both Z51.0 and the malignancy code, either order",
      "D. A Chapter 19 procedure complication code",
    ],
    correct: "B",
    explanation: "Insertion/implantation of radioactive elements (brachytherapy) is specifically excluded from the Z51.0 rule — unlike external beam radiation therapy, the malignancy code itself leads for brachytherapy insertion encounters.",
    lookFor: "\"Brachytherapy\" or \"radioactive seed/element insertion\" should immediately flag this as the exception to the general Z51.0-leads rule for radiation therapy encounters.",
  },
  {
    topic: "Anemia — Malignancy vs. Therapy",
    scenario: "A patient with metastatic colon cancer is admitted because their hemoglobin has dropped significantly. The oncologist documents this is anemia directly caused by the cancer's chronic blood loss, and the only treatment this visit is a blood transfusion for the anemia.",
    options: [
      "A. D63.0 first, then the colon cancer code",
      "B. The colon cancer code first, then D63.0",
      "C. D63.0 alone",
      "D. T45.1X5- first, then the colon cancer code",
    ],
    correct: "B",
    explanation: "Anemia caused directly by the malignancy (not by chemo/immuno/radiation therapy), with treatment only for the anemia, follows the baseline rule: malignancy first, then D63.0 second.",
    lookFor: "The absence of any chemotherapy/immunotherapy/radiation mention is the tell that this is the baseline anemia-from-malignancy rule, not the flipped therapy-caused-anemia rule.",
  },
  {
    topic: "Anemia — Malignancy vs. Therapy",
    scenario: "That same patient returns three weeks later, now significantly anemic as a documented adverse effect of the FOLFOX chemotherapy regimen they've been receiving. Only the anemia is treated this visit.",
    options: [
      "A. The colon cancer code first, then D63.0",
      "B. D63.0 first, then the colon cancer code and T45.1X5-",
      "C. T45.1X5- alone",
      "D. The colon cancer code alone",
    ],
    correct: "B",
    explanation: "This time the anemia is documented as an adverse effect of chemotherapy — this flips the sequencing: the anemia code leads, followed by the neoplasm code and the adverse-effect code (T45.1X5-).",
    lookFor: "Same patient, same symptom (anemia), but a different stated CAUSE this time (chemo adverse effect vs. the cancer itself) completely changes the correct sequencing — read the cause every time, don't assume from a prior encounter.",
  },
  {
    topic: "Admission to Determine Extent",
    scenario: "A patient with a history of breast cancer is admitted for a PET scan and thoracentesis specifically to determine whether a newly found pleural effusion represents metastatic spread. A single dose of chemotherapy is also given during this same stay for their already-known disease.",
    options: [
      "A. Z51.11, encounter for antineoplastic chemotherapy, as principal",
      "B. The primary breast malignancy (or relevant metastatic site) as principal",
      "C. A Chapter 18 code for the pleural effusion",
      "D. Z85, personal history of malignant neoplasm",
    ],
    correct: "B",
    explanation: "Because the reason for this encounter is to determine the extent of the malignancy, the malignancy leads as principal diagnosis — even though chemotherapy was also administered during the same stay.",
    lookFor: "\"To determine extent\" as the stated reason overrides the usual Z51.0-leads-for-antineoplastic-therapy pattern — read for what the encounter's actual REASON was, not just what services happened to occur.",
  },
  {
    topic: "Personal History vs. Current Disease",
    scenario: "A patient had a malignant melanoma excised from their back 5 years ago. No further treatment has ever been directed at that site, and today's skin exam shows no evidence of recurrence there. However, a CT scan ordered for unrelated reasons incidentally reveals a new lung nodule, later confirmed as metastatic melanoma.",
    options: [
      "A. Code only Z85.820 (personal history of melanoma)",
      "B. Code the lung nodule as a secondary malignant neoplasm of lung, plus Z85.820 as an additional code",
      "C. Reactivate the original melanoma of skin as a current active diagnosis",
      "D. Code C80.0, disseminated malignant neoplasm, unspecified",
    ],
    correct: "B",
    explanation: "A new metastasis confirmed to have originated from a previously-excised, no-further-treatment primary gets its own current secondary-neoplasm code (for the lung), while the Z85 personal history code continues to indicate the former primary site.",
    lookFor: "Discovery of a NEW metastasis always earns a fresh, active secondary-site code — the personal history code doesn't just get quietly dropped or \"upgraded\" without adding the new active diagnosis.",
  },
  {
    topic: "Pathologic Fracture",
    scenario: "A patient with widely metastatic breast cancer to bone sustains a pathological fracture of the femur after a minor fall. The patient is admitted specifically for orthopedic fixation of the femur fracture; no other cancer treatment is provided this admission.",
    options: [
      "A. The breast cancer code first, then M84.5-",
      "B. M84.5- first, then the appropriate secondary bone malignancy code",
      "C. A traumatic fracture code from Chapter 19",
      "D. M84.5- alone",
    ],
    correct: "B",
    explanation: "Since the focus of THIS admission's treatment is the fracture itself (orthopedic fixation), M84.5- (pathological fracture in neoplastic disease) is sequenced first, followed by the neoplasm code.",
    lookFor: "\"Admitted specifically for fixation of the fracture\" is the clear signal that the fracture, not the cancer, is this encounter's focus of treatment.",
  },
  {
    topic: "Transplant-Associated Malignancy",
    scenario: "A patient who received a liver transplant 4 years ago is now diagnosed with a new hepatocellular carcinoma arising within the transplanted liver.",
    options: [
      "A. The hepatocellular carcinoma code alone",
      "B. T86.-, transplant complication, followed by C80.2, followed by the specific liver malignancy code",
      "C. C80.2 alone",
      "D. A Chapter 19 mechanical complication code, then the malignancy",
    ],
    correct: "B",
    explanation: "A malignancy arising in a transplanted organ is coded as a transplant complication first (the appropriate T86.- code), then C80.2 (malignant neoplasm associated with transplanted organ), then an additional code identifying the specific malignancy.",
    lookFor: "\"Malignancy arising WITHIN a transplanted organ\" is a fixed three-code sequence — this is a fact to memorize outright, not something to reason out from general principles.",
  },
  {
    topic: "Secondary Lymphoid Tissue Neoplasm",
    scenario: "A patient with follicular lymphoma is found on staging workup to have involvement of the spleen, liver, and bone marrow, all outside the lymph node chains.",
    options: [
      "A. Three separate secondary malignant neoplasm codes (spleen, liver, bone marrow)",
      "B. A single code from the lymphoma's category with final character \"9\" (extranodal and solid organ sites)",
      "C. C80.0, disseminated malignant neoplasm, unspecified",
      "D. The lymphoma code plus C80.1",
    ],
    correct: "B",
    explanation: "Lymphoid tissue malignancy spreading beyond the lymph nodes into solid organs/extranodal sites is captured with a single code using the \"9\" final character for that lymphoma category — not separate codes per organ involved.",
    lookFor: "Multiple extranodal sites for a lymphoid malignancy is the specific trigger for the single combined \"...9\" code — resist the urge to code each organ separately the way you would for most other cancer types.",
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

export default function Icd10Chapter2WorkedExamplesPage() {
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
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 2 · WORKED EXAMPLES</p>
        <h1 style={{ margin: 0, fontSize: "clamp(24px, 5vw, 38px)" }}>Chapter 2 Worked Examples</h1>
        <p style={{ margin: "10px 0 0", fontSize: "15.5px", lineHeight: 1.5 }}>9 scenario walkthroughs with full reasoning — jump to any question to check its answer directly.</p>
      </header>

      <nav aria-label="ICD-10 navigation" style={navStyle}>
        <Link href="/icd10" style={navLinkStyle}>ICD-10-CM home</Link>
        <Link href="/icd10/chapter-2-guidelines-reviewer" style={navLinkStyle}>Guidelines Reviewer</Link>
        <Link href="/icd10/chapter-2-practice-quiz" style={navLinkStyle}>Practice Quiz</Link>
      </nav>

      <div style={introStyle}>
        <strong>Big-picture tip:</strong> the two anemia scenarios (4 and 5) are the same patient with the same symptom but an opposite-cause, opposite-sequencing setup on purpose — that pairing is exactly how this distinction gets tested on the real exam. Read the stated CAUSE every time, never assume from a prior question.
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
