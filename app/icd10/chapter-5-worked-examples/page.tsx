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
    topic: "Psychological Pain — Exclusive",
    scenario: "A patient is evaluated for chronic pain. Extensive workup finds no physical cause; the pain is attributed entirely to psychological factors.",
    options: [
      "A. F45.41 alone",
      "B. F45.41 plus a code from category G89",
      "C. F45.42 plus a code from category G89",
      "D. A code from category G89 alone",
    ],
    correct: "A",
    explanation: "Pain that is exclusively psychological in origin is coded F45.41 alone — the Excludes1 note under G89 prevents pairing a G89 code with F45.41.",
    lookFor: "\"No physical cause found\" + \"entirely psychological\" together point to F45.41 used by itself, with no G89 code.",
  },
  {
    topic: "Psychological Pain — Mixed",
    scenario: "A patient has documented chronic post-surgical pain (a physical condition) along with a clearly documented psychological component that the provider notes is contributing to the pain experience.",
    options: [
      "A. F45.41 alone",
      "B. F45.42 plus a code from category G89",
      "C. G89 alone",
      "D. F45.41 plus a code from category G89",
    ],
    correct: "B",
    explanation: "A physical pain source plus a documented psychological component uses F45.42 together with the G89 code for the pain — the opposite pairing from purely psychological pain.",
    lookFor: "A physical cause (post-surgical pain) PLUS a psychological component is the specific cue for F45.42 + G89, not F45.41.",
  },
  {
    topic: "Unspecified Substance Use",
    scenario: "A provider documents \"unspecified cannabis use\" as the direct cause of a documented cannabis-induced sleep disorder in the same note.",
    options: [
      "A. Not coded — a bare mention of substance use is never coded",
      "B. F12.90 alone, with no code for the sleep disorder",
      "C. F12.9- (unspecified cannabis use) with the appropriate character identifying the associated sleep disorder",
      "D. A code from category G89 instead of an F12 code",
    ],
    correct: "C",
    explanation: "Unspecified-use codes ARE assigned when the provider documents the substance use as associated with a chapter 5 disorder — here, the documented link to a cannabis-induced sleep disorder is exactly the qualifying relationship, so F12.9- is coded with the character identifying that disorder.",
    lookFor: "A documented provider-stated LINK between the substance use and a chapter 5 disorder (sleep disorder, sexual dysfunction, etc.) is what flips an unspecified-use code from \"not codeable\" to \"codeable.\"",
  },
  {
    topic: "Remission — Severity Fork",
    scenario: "A provider documents \"moderate cocaine use disorder, in early remission\" at a follow-up visit.",
    options: [
      "A. The cocaine abuse-in-remission codes",
      "B. The cocaine dependence-in-remission codes",
      "C. The cocaine unspecified-use codes",
      "D. No remission code exists for cocaine",
    ],
    correct: "B",
    explanation: "Moderate or severe substance use disorders in remission are classified using the dependence-in-remission codes — only mild severity maps to the abuse-in-remission family.",
    lookFor: "\"Moderate\" or \"severe\" is the trigger word for dependence-in-remission, regardless of how early the remission is.",
  },
  {
    topic: "Use/Abuse/Dependence Hierarchy",
    scenario: "A patient's chart documents \"alcohol use\" and \"alcohol dependence\" (but not abuse) in the same note, referring to the same patient's alcohol pattern.",
    options: [
      "A. Two codes: one for use, one for dependence",
      "B. One code, for use only",
      "C. One code, for dependence only",
      "D. One code, for abuse, since it falls between use and dependence",
    ],
    correct: "C",
    explanation: "When both use and dependence are documented for the same substance (even without abuse mentioned), only the dependence code is assigned — dependence outranks use in the hierarchy regardless of whether abuse is mentioned at all.",
    lookFor: "Use + dependence documented together (skipping abuse entirely) still resolves to dependence alone — the hierarchy doesn't require all three terms to be present to apply.",
  },
  {
    topic: "Medical Condition Due to Substance Use",
    scenario: "A patient has documented alcoholic pancreatitis in the setting of alcohol dependence. A newer coder proposes assigning F10.288 alone to capture the full picture in one code.",
    options: [
      "A. Correct — F10.288 alone is the appropriate single code",
      "B. Incorrect — assign K85.2 (alcohol-induced acute pancreatitis) plus a code from F10.2- instead",
      "C. Correct, but only if a modifier is added",
      "D. Incorrect — assign F10.2- alone, no pancreatitis code needed",
    ],
    correct: "B",
    explanation: "The guideline explicitly rejects using a combination code like F10.288 for this scenario — the correct approach pairs the specific medical-condition code (K85.2) with the appropriate F10-F19 code separately.",
    lookFor: "This is the guideline's own named example of a trap — reaching for an \"other alcohol-induced disorder\" combination code instead of the correct two-code pairing.",
  },
  {
    topic: "Blood Alcohol Level",
    scenario: "An ED patient is documented with alcohol intoxication (an F10 category condition) by the treating physician. The lab report in the chart shows a blood alcohol level, though the physician's own note never restates that number.",
    options: [
      "A. No Y90 code — the level must be restated by the provider personally",
      "B. The F10 intoxication code plus a Y90 code for the documented level",
      "C. A Y90 code alone, no F10 code needed",
      "D. No code at all, since the level came from the lab rather than the provider",
    ],
    correct: "B",
    explanation: "Y90 may be assigned once the provider has documented a qualifying F10 condition — the blood alcohol level itself doesn't need to be restated by the provider; a lab-documented level is sufficient.",
    lookFor: "The provider's job is to document the F10 CONDITION; the blood alcohol NUMBER can come from anywhere in the record, including the lab report.",
  },
  {
    topic: "Factitious Disorder — Perpetrator's Chart",
    scenario: "A caregiver is documented as repeatedly fabricating and inducing symptoms of illness in an elderly relative under her care (Munchausen syndrome by proxy). Code the CAREGIVER's own chart.",
    options: [
      "A. F68.1-, factitious disorder imposed on self",
      "B. F68.A, factitious disorder imposed on another",
      "C. A code from category T74 or T76",
      "D. No code, since the caregiver has no symptoms of her own",
    ],
    correct: "B",
    explanation: "The perpetrator in an MSBP scenario is coded F68.A (factitious disorder imposed on another) on their own record — this is the diagnosis for the person causing the fabrication, not the person experiencing symptoms.",
    lookFor: "F68.A describes the perpetrator's ACT, not a personal symptom — it's assigned even though the caregiver herself has no illness.",
  },
  {
    topic: "Factitious Disorder — Victim's Chart",
    scenario: "Same MSBP scenario as the previous question. Now code the ELDERLY RELATIVE's (victim's) own chart, where the maltreatment has been medically confirmed.",
    options: [
      "A. F68.A, factitious disorder imposed on another",
      "B. F68.1-, factitious disorder imposed on self",
      "C. The appropriate code from category T74 (confirmed adult abuse/maltreatment)",
      "D. No code is assigned to the victim's chart",
    ],
    correct: "C",
    explanation: "The victim of MSBP is coded with the appropriate T74 (confirmed) or T76 (suspected) abuse/maltreatment code — never F68.A, which is reserved exclusively for the perpetrator's chart.",
    lookFor: "Confirmed maltreatment for the victim routes to T74 specifically (not T76, which is for suspected-but-unconfirmed cases) — and never to F68.A.",
  },
  {
    topic: "Dementia Severity Progression",
    scenario: "A patient is admitted to an inpatient unit with documented unspecified-severity Alzheimer's dementia. Later in that same stay, the treating physician documents the dementia has progressed to moderate severity.",
    options: [
      "A. Two codes: one for unspecified severity, one for moderate",
      "B. One code, for unspecified severity (the admission finding)",
      "C. One code, for moderate severity (the highest level reported during the stay)",
      "D. One code for mild severity, as a compromise between the two findings",
    ],
    correct: "C",
    explanation: "When dementia severity progresses during a single inpatient stay, only one code is assigned, for the highest severity level reported at any point during that stay — here, moderate.",
    lookFor: "\"Same inpatient stay, severity changes\" always resolves to a single code at the HIGHEST level reached, discarding the lower admission-level finding.",
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

export default function Icd10Chapter5WorkedExamplesPage() {
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
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 5 · WORKED EXAMPLES</p>
        <h1 style={{ margin: 0, fontSize: "clamp(24px, 5vw, 38px)" }}>Chapter 5 Worked Examples</h1>
        <p style={{ margin: "10px 0 0", fontSize: "15.5px", lineHeight: 1.5 }}>10 scenario walkthroughs with full reasoning — jump to any question to check its answer directly.</p>
      </header>

      <nav aria-label="ICD-10 navigation" style={navStyle}>
        <Link href="/icd10" style={navLinkStyle}>ICD-10-CM home</Link>
        <Link href="/icd10/chapter-5-guidelines-reviewer" style={navLinkStyle}>Guidelines Reviewer</Link>
        <Link href="/icd10/chapter-5-practice-quiz" style={navLinkStyle}>Practice Quiz</Link>
      </nav>

      <div style={introStyle}>
        <strong>Big-picture tip:</strong> questions 8 and 9 are a deliberate pair — same MSBP scenario, coded from both the perpetrator's chart (F68.A) and the victim's chart (T74/T76). Whenever a scenario involves two people, always ask "which chart am I coding right now?" before picking an answer — this trap shows up again anywhere one person's condition is caused by another person's actions.
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
