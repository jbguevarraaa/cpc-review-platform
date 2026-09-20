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
    topic: "Sequencing",
    question: "Can an external cause code (Chapter 20) be reported as the principal or first-listed diagnosis?",
    options: [
      "A. Yes, when the admission is for an injury",
      "B. Yes, if it is the only code on the record",
      "C. Yes, for transport accidents",
      "D. No — an external cause code can never be principal or first-listed",
    ],
    correct: "D",
    explanation: "External cause of morbidity codes should never be sequenced as the first-listed or principal diagnosis. The injury or condition is reported first.",
    lookFor: "'Principal or first-listed' plus Chapter 20.",
    eliminate: "A, B, and C each invent an exception to a rule that has none.",
  },
  {
    topic: "Reporting Requirement",
    question: "A facility is not subject to any state or payer external cause reporting mandate. What is the reporting requirement for Chapter 20 codes?",
    options: [
      "A. None nationally — voluntary unless a state mandate or payer requires it, though reporting is encouraged",
      "B. Required for all inpatient records",
      "C. Required for all Medicare claims",
      "D. Required for every injury diagnosis",
    ],
    correct: "A",
    explanation: "There is no national requirement for mandatory external cause code reporting. Unless a state-based mandate or a payer requires the codes, reporting is voluntary, and providers are encouraged to report them.",
    lookFor: "'No mandate' — reporting is voluntary.",
    eliminate: "B, C, and D describe national requirements that the guidelines say don't exist.",
  },
  {
    topic: "General Rules",
    question: "A patient has a heart attack that occurs during strenuous physical activity. Can an external cause code be used?",
    options: [
      "A. No — external cause codes are for injuries only",
      "B. Only with Chapter 19 codes",
      "C. Yes — they can be used with other health conditions due to an external cause",
      "D. Only if the heart attack is the principal diagnosis",
    ],
    correct: "C",
    explanation: "External cause codes may be used with any code in the range A00.0–T88.9 and Z00–Z99 representing a health condition due to an external cause — including things like infections or a heart attack during strenuous activity.",
    lookFor: "The guideline's own heart attack example.",
    eliminate: "A and B limit the codes to injuries. D adds a principal-diagnosis condition that isn't in the rule.",
  },
  {
    topic: "No Code Needed",
    question: "A patient has an accidental penicillin poisoning coded T36.0X1-. Is a Chapter 20 code needed to show the cause and intent?",
    options: [
      "A. Yes, a W-code",
      "B. No — the code already includes the external cause and intent",
      "C. Yes, an X-code",
      "D. Yes, a Y99 status code",
    ],
    correct: "B",
    explanation: "No external cause code from Chapter 20 is needed if the external cause and intent are included in a code from another chapter, such as T36.0X1-.",
    lookFor: "A code that already says 'accidental (unintentional).'",
    eliminate: "A, C, and D add Chapter 20 codes the guideline says aren't needed.",
  },
  {
    topic: "7th Characters",
    question: "A patient is seen for follow-up of an injury reported with 7th character D. What 7th character goes on the external cause code?",
    options: [
      "A. D — it matches the injury code",
      "B. A, because it is the first external cause code",
      "C. S",
      "D. None — external cause codes have no 7th characters",
    ],
    correct: "A",
    explanation: "Most Chapter 20 categories have a 7th character, and it should match the 7th character of the code assigned for the associated injury or condition for that encounter.",
    lookFor: "'Injury code D' — match it.",
    eliminate: "B ignores the matching rule. C is for sequela. D is false — most Chapter 20 categories have 7th characters (the guideline specifically says Y92 has none).",
  },
  {
    topic: "7th Characters",
    question: "A patient in active treatment for an injury (7th character A) is seen by a new physician. What 7th character goes on the external cause code?",
    options: [
      "A. D, because the provider is new",
      "B. S",
      "C. None",
      "D. A, matching the injury code",
    ],
    correct: "D",
    explanation: "A new or different provider doesn't change the 7th character. The external cause code matches the injury code, which remains A while active treatment continues.",
    lookFor: "A 'new physician' distractor.",
    eliminate: "A lets the provider change the character. B is for sequela. C omits a required 7th character.",
  },
  {
    topic: "Place of Occurrence",
    question: "When is a place of occurrence code (Y92) generally assigned?",
    options: [
      "A. At every encounter for the injury",
      "B. Only at discharge",
      "C. Once, at the initial encounter for treatment",
      "D. Only at the follow-up encounter",
    ],
    correct: "C",
    explanation: "A place of occurrence code is generally assigned only once, at the initial encounter for treatment. (A new injury during hospitalization may get an additional place code.)",
    lookFor: "'Generally … only once.'",
    eliminate: "A repeats it every visit. B and D pick the wrong timing.",
  },
  {
    topic: "Place of Occurrence",
    question: "The record never states where the injury happened. What is done about the place of occurrence?",
    options: [
      "A. Assign Y92.9, unspecified place",
      "B. Do not assign Y92.9 — an unspecified place code isn't used when the place is not stated",
      "C. Guess the most common place",
      "D. Assign a place code from the initial encounter of a different patient",
    ],
    correct: "B",
    explanation: "Do not use Y92.9 if the place is not stated or is not applicable.",
    lookFor: "'Not stated' — no Y92.9.",
    eliminate: "A is the code the guideline prohibits. C and D invent information.",
  },
  {
    topic: "Activity Codes",
    question: "A patient is treated for an adverse effect of a drug. Is an activity code (Y93) assigned?",
    options: [
      "A. Yes, always",
      "B. Yes, but only once",
      "C. Yes, if the adverse effect is principal",
      "D. No — activity codes aren't applicable to poisonings, adverse effects, misadventures, or sequela",
    ],
    correct: "D",
    explanation: "Activity codes are not applicable to poisonings, adverse effects, misadventures, or sequela.",
    lookFor: "An adverse effect — one of the excluded situations.",
    eliminate: "A, B, and C all assign an activity code where the guideline says it doesn't apply.",
  },
  {
    topic: "Activity Codes",
    question: "The record doesn't state what the patient was doing when the injury occurred. What is done?",
    options: [
      "A. Do not assign Y93.9 — an unspecified activity code isn't used when the activity isn't stated",
      "B. Assign Y93.9",
      "C. Assign Y99.9",
      "D. Assign a random activity code",
    ],
    correct: "A",
    explanation: "Do not assign Y93.9 (unspecified activity) if the activity is not stated.",
    lookFor: "'Activity not stated.'",
    eliminate: "B and C assign unspecified codes the guidelines prohibit. D invents information.",
  },
  {
    topic: "Status Codes",
    question: "When is an external cause status code (Y99) assigned?",
    options: [
      "A. Always, on every record",
      "B. Only when other external cause codes are assigned for the encounter (and not for poisonings, adverse effects, misadventures, or late effects)",
      "C. Only for work injuries",
      "D. Only for military personnel",
    ],
    correct: "B",
    explanation: "A Y99 code is assigned whenever any other external cause code is assigned for the encounter, including an activity code — except for poisonings, adverse effects, misadventures, and late effects. Do not assign Y99 if no other external cause code applies.",
    lookFor: "Y99 depends on other external cause codes being present.",
    eliminate: "A and C and D are too broad or too narrow — Y99 covers military, work, and non-work status.",
  },
  {
    topic: "Sequencing Hierarchy",
    question: "A patient's injuries result from a transport accident and from confirmed abuse. Which external cause code is first-listed?",
    options: [
      "A. The transport accident code",
      "B. The code for whichever event happened more recently",
      "C. The abuse code",
      "D. The Y99 status code",
    ],
    correct: "C",
    explanation: "Child and adult abuse external cause codes take priority over all others. Terrorism outranks all but abuse, cataclysmic events outrank all but abuse and terrorism, and transport accidents come next.",
    lookFor: "The hierarchy: abuse > terrorism > cataclysmic > transport.",
    eliminate: "A ranks transport above abuse. B invents a recency rule. D is a status code, which follows the causal codes.",
  },
  {
    topic: "Sequencing Hierarchy",
    question: "After the causal external cause codes are assigned, which codes follow them?",
    options: [
      "A. Only the perpetrator code Y07",
      "B. Only the status code",
      "C. None — the order among external cause codes doesn't matter",
      "D. The place of occurrence, activity, and external cause status codes",
    ],
    correct: "D",
    explanation: "Place of occurrence, activity, and external cause status codes are sequenced after the main (causal) external cause code(s).",
    lookFor: "'After the main external cause code(s).'",
    eliminate: "A and B name only part of the group. C ignores the sequencing guidance.",
  },
  {
    topic: "Limited Formats",
    question: "A reporting format allows only ONE external cause code. The principal diagnosis is a fracture from a fall. Which code is reported?",
    options: [
      "A. The code for the cause and intent most related to the principal diagnosis (the fall)",
      "B. The place of occurrence code",
      "C. The activity code",
      "D. The status code",
    ],
    correct: "A",
    explanation: "If the format limits the number of external cause codes, report the code for the cause and intent most related to the principal diagnosis.",
    lookFor: "A one-code limit.",
    eliminate: "B, C, and D are place, activity, and status codes — the ones dropped first.",
  },
  {
    topic: "Unknown Intent",
    question: "An injury is documented but nothing states whether it was accidental, self-inflicted, or an assault. What intent is coded?",
    options: [
      "A. Undetermined",
      "B. Intentional self-harm",
      "C. Accidental",
      "D. Assault",
    ],
    correct: "C",
    explanation: "If the intent is unknown or unspecified, code the intent as accidental. Undetermined intent is only used when the documentation specifies the intent cannot be determined.",
    lookFor: "'Nothing states' the intent.",
    eliminate: "A requires documentation that intent can't be determined. B and D assume a specific intent.",
  },
  {
    topic: "Sequela",
    question: "A patient returns to have healing checked after an injury. No late effect is documented. Is a sequela external cause code (7th character S) used?",
    options: [
      "A. Yes, for any subsequent visit",
      "B. No — a sequela external cause code isn't used for follow-up of healing or rehabilitation when no late effect is documented",
      "C. Yes, alongside the current injury code",
      "D. Yes, with Y92.9",
    ],
    correct: "B",
    explanation: "A late effect external cause code is used for subsequent visits only when a late effect of the initial injury is being treated — not for follow-up care such as assessing healing or rehabilitation. It is also never used with a related current injury code.",
    lookFor: "'Healing check' and 'no late effect documented.'",
    eliminate: "A ignores the limit. C pairs a sequela code with a current injury. D uses an unspecified code the guidelines prohibit.",
  },
  {
    topic: "Terrorism",
    question: "The cause of an injury is suspected, but not confirmed, to be terrorism. How is the external cause classified?",
    options: [
      "A. With a Y38 code",
      "B. With Y38.9",
      "C. With Y07",
      "D. As assault",
    ],
    correct: "D",
    explanation: "When the cause of an injury is only suspected to be the result of terrorism, a Y38 code is not assigned. Suspected cases are classified as assault.",
    lookFor: "'Suspected' terrorism.",
    eliminate: "A requires the Federal Government (FBI) to identify the event as terrorism. B is only for later, secondary conditions of a terrorist event. C is the perpetrator-of-maltreatment code.",
  },
  {
    topic: "Terrorism — Secondary Effects",
    question: "A patient develops a condition AFTER a terrorist event (not from the initial act). Which code identifies it?",
    options: [
      "A. Y38.9, terrorism, secondary effects",
      "B. A first-listed Y38 code for the initial act",
      "C. Y07",
      "D. No external cause code",
    ],
    correct: "A",
    explanation: "Y38.9 is assigned for conditions occurring subsequent to the terrorist event. It is not for conditions due to the initial terrorist act, and it may accompany another Y38 code when both apply.",
    lookFor: "'After the terrorist event' — a subsequent result.",
    eliminate: "B is for conditions due to the initial act. C is a perpetrator code. D drops a documented condition.",
  },
  {
    topic: "Hierarchy — Terrorism vs. Cataclysmic Event",
    question: "A patient's injuries come from a cataclysmic event (such as an earthquake) and from an FBI-identified terrorist act. Which external cause code takes priority as first-listed?",
    options: [
      "A. The cataclysmic event code",
      "B. The terrorism (Y38) code",
      "C. Whichever event was more recent",
      "D. The transport accident code",
    ],
    correct: "B",
    explanation: "External cause codes for terrorism events take priority over all other external cause codes except child and adult abuse — so they rank above cataclysmic events and transport accidents.",
    lookFor: "The hierarchy: abuse > terrorism > cataclysmic events > transport accidents.",
    eliminate: "A ranks cataclysmic events above terrorism. C invents a recency rule. D ranks below both.",
  },
  {
    topic: "Limited Formats — Extra Room",
    question: "A reporting format has room for additional external cause codes beyond the first. Which codes should fill the extra space?",
    options: [
      "A. Place of occurrence, activity, and status codes",
      "B. The perpetrator code Y07 only",
      "C. The cause and intent of the additional events, including medical misadventures",
      "D. Y99.9",
    ],
    correct: "C",
    explanation: "If the format permits capturing additional external cause codes, report the cause and intent — including medical misadventures — of the additional events rather than the codes for place, activity, or external status.",
    lookFor: "Extra space and additional events.",
    eliminate: "A is the reverse of the guidance. B covers one situation only. D is an unspecified status code the guideline says not to assign when status isn't stated.",
  },
  {
    topic: "Undetermined Intent",
    question: "A record states that the intent of an injury 'cannot be determined.' What intent is coded?",
    options: [
      "A. Accidental",
      "B. Intentional self-harm",
      "C. Assault",
      "D. Undetermined",
    ],
    correct: "D",
    explanation: "External cause codes for events of undetermined intent are used only if the documentation specifies that the intent cannot be determined. Otherwise unknown or unspecified intent is coded as accidental.",
    lookFor: "The record explicitly says intent can't be determined.",
    eliminate: "A is the default only when intent is simply not stated. B and C assume a specific intent.",
  },
  {
    topic: "Sequela — Late Effect Treated",
    question: "A patient is seen for treatment of a documented late effect of an earlier injury. Which 7th character goes on the external cause code?",
    options: [
      "A. A",
      "B. D",
      "C. S",
      "D. None",
    ],
    correct: "C",
    explanation: "Sequela are reported using the external cause code with 7th character S, with any report of a late effect or sequela resulting from a previous injury. It is never used with a related current injury code.",
    lookFor: "A late effect being treated.",
    eliminate: "A and B apply to current injuries. D omits a required 7th character.",
  },
  {
    topic: "Combination External Cause Codes",
    question: "A patient falls and, during the fall, strikes an object. Which external cause coding is appropriate?",
    options: [
      "A. Only the fall code",
      "B. The combination external cause code that matches the sequence of events (a fall resulting in striking against an object)",
      "C. Only the code for striking an object",
      "D. No external cause code",
    ],
    correct: "B",
    explanation: "Some external cause codes are combination codes for sequential events, such as a fall that results in striking against an object. The combination code used should match the sequence of events, regardless of which caused the most serious injury.",
    lookFor: "Sequential events — one leading to the next.",
    eliminate: "A and C drop half of the sequence. D drops the external cause entirely.",
  },
  {
    topic: "New Injury During Hospitalization",
    question: "A new injury occurs while the patient is hospitalized for a different condition. May an additional place of occurrence code be assigned?",
    options: [
      "A. Yes, in that rare instance",
      "B. No — only one place of occurrence code is ever allowed",
      "C. Yes, at every encounter",
      "D. Only with Y92.9",
    ],
    correct: "A",
    explanation: "A place of occurrence code is generally assigned once, at the initial encounter. In the rare instance that a new injury occurs during hospitalization, an additional place of occurrence code may be assigned.",
    lookFor: "A NEW injury during the hospital stay.",
    eliminate: "B ignores the stated exception. C repeats it at every encounter. D uses the unspecified code the guideline prohibits when the place isn't stated.",
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

export default function Icd10Chapter20PracticeQuizPage() {
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
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 20 · PRACTICE QUIZ</p>
        <h1 style={{ margin: 0, fontSize: "clamp(24px, 5vw, 38px)" }}>Chapter 20 Practice Quiz</h1>
        <p style={{ margin: "10px 0 0", fontSize: "15.5px", lineHeight: 1.5 }}>24 original scenario questions with elimination tricks, covering never-first-listed, 7th characters, place/activity/status codes, the sequencing hierarchy, unknown intent, sequela, and terrorism.</p>
      </header>

      <nav aria-label="ICD-10 quiz navigation" style={navStyle}>
        <Link href="/icd10" style={navLinkStyle}>ICD-10-CM home</Link>
        <Link href="/icd10/chapter-20-guidelines-reviewer" style={navLinkStyle}>Guidelines Reviewer</Link>
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
