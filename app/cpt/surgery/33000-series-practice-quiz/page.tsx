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
    topic: "Pericardium",
    question: "A physician aspirates pericardial fluid and leaves a catheter in place for continued drainage, in a 45-year-old patient with no congenital cardiac anomaly. What's coded?",
    options: [
      "A. 33016, Pericardiocentesis",
      "B. 33017, Pericardial drainage with indwelling catheter, percutaneous, age 6+",
      "C. 33018, same but with a congenital cardiac anomaly",
      "D. 33019, using CT guidance",
    ],
    correct: "B",
    explanation: "The catheter is left in place (not just aspirated and removed), the patient is over 6, and there's no congenital anomaly — that's 33017.",
    lookFor: "\"Catheter left in place\" is the trigger for 33017/33018/33019 instead of the simple pericardiocentesis code 33016.",
    eliminate: "A is for no catheter left behind; C requires a congenital anomaly or age under 6, neither of which applies here.",
  },
  {
    topic: "Pacemaker/ICD",
    question: "A patient needs an initial pacemaker generator inserted onto an existing dual-lead system (no new leads placed). What's coded?",
    options: [
      "A. 33208, full dual-chamber system",
      "B. 33213, generator only, onto existing dual leads",
      "C. 33228, generator removal with replacement, dual lead system",
      "D. 33217, insertion of two transvenous electrodes only",
    ],
    correct: "B",
    explanation: "\"Initial generator insertion, existing dual leads, no leads placed\" maps directly to 33213 per the scenario reference table.",
    lookFor: "Existing leads + generator-only = the 33212/33213/33221 family, not the full-system codes (33206–33208).",
    eliminate: "A describes a full new system with new leads, which isn't what happened; C is for removing AND replacing a generator, not an initial insertion.",
  },
  {
    topic: "Aortic Valve",
    question: "A patient undergoes TAVR via a percutaneous femoral artery approach. Two operators performed distinct parts of the procedure. How is this reported?",
    options: [
      "A. 33361 twice, once per operator",
      "B. 33361 with modifier 62",
      "C. 33361 and 33362 together",
      "D. 33361 with modifier 80 (assistant surgeon)",
    ],
    correct: "B",
    explanation: "TAVR/TAVI always requires two physician operators, and their combined work is reported with modifier 62 (co-surgeon) on the single matching access-route code.",
    lookFor: "\"Two operators\" + TAVR is always modifier 62 on one code, not two separate codes or an assistant-surgeon modifier.",
    eliminate: "A double-reports the same code incorrectly; C mixes two different access-route codes, which doesn't reflect a single femoral approach; D uses the wrong modifier concept (assistant, not co-surgeon).",
  },
  {
    topic: "Aortic Valve",
    question: "A patient undergoes open aortic valve replacement using their own translocated pulmonary valve, WITH transventricular annulus enlargement, in the same operative session. What's coded?",
    options: [
      "A. 33413 and 33412 together",
      "B. 33440 alone",
      "C. 33405 with modifier 22",
      "D. 33413 alone",
    ],
    correct: "B",
    explanation: "33440 (Ross-Konno) is the single all-in-one code for pulmonary valve translocation combined with annulus enlargement — it's never reported together with the individual Ross (33413) or Konno (33412) codes.",
    lookFor: "\"Both\" pulmonary valve translocation AND annulus enlargement together is the exact trigger for the combined 33440 code.",
    eliminate: "A incorrectly bills the two individual component codes together, which the guideline specifically excludes once 33440 applies.",
  },
  {
    topic: "CABG",
    question: "A patient receives 2 saphenous vein grafts and 1 internal mammary artery graft in the same CABG operation. What's coded?",
    options: [
      "A. 33511 alone (2 venous grafts)",
      "B. 33518 (2 venous grafts, combined) plus 33533 (1 arterial graft)",
      "C. 33511 plus 33533",
      "D. 33518 alone",
    ],
    correct: "B",
    explanation: "Combining venous and arterial grafts in the same operation requires the combined-grafting venous add-on code (33518, for 2 venous grafts) reported together with the matching arterial graft code (33533, for 1 arterial graft) — never the standalone venous-only code.",
    lookFor: "Any CABG question mentioning BOTH a vein graft and an arterial graft (like the internal mammary artery) in the same session is testing the combined-code pairing, not the venous-only family.",
    eliminate: "A and C both incorrectly use the venous-only code (33511), which is reserved for cases using vein grafts exclusively.",
  },
  {
    topic: "CABG",
    question: "How does CPT define the number of coronary bypass grafts for code selection purposes?",
    options: [
      "A. The number of separate skin incisions made",
      "B. The number of distal anastomoses where the graft is sutured to a diseased coronary artery",
      "C. The number of harvested graft segments",
      "D. The number of coronary arteries with any degree of disease",
    ],
    correct: "B",
    explanation: "CPT specifically counts the number of distal anastomoses (contact points) — not incisions, harvested segments, or diseased vessels in general.",
    lookFor: "This is a direct definitional fact worth memorizing outright — \"count the distal anastomoses\" is the book's own explicit instruction.",
    eliminate: "A, C, and D each substitute a plausible-sounding but incorrect counting method.",
  },
  {
    topic: "Aorta & Great Vessels",
    question: "A patient undergoes ascending aorta graft with aortic root replacement using a valved conduit and coronary artery reconstruction, for an aneurysm (not a dissection). What's coded?",
    options: [
      "A. 33858",
      "B. 33859",
      "C. 33863 (Bentall procedure)",
      "D. 33864 (David/Yacoub procedure)",
    ],
    correct: "C",
    explanation: "A valved conduit with coronary reconstruction is the defining feature of the Bentall procedure (33863) — the valve is replaced, not preserved, which rules out 33864 (the valve-sparing David/Yacoub procedure).",
    lookFor: "\"Valved conduit\" = valve replaced = Bentall (33863). \"Valve-sparing\" or \"root remodeling with the native valve preserved\" = David/Yacoub (33864).",
    eliminate: "A and B are the simpler ascending graft codes without root replacement, which doesn't match the more extensive procedure described; D is the valve-sparing alternative, not what's described here.",
  },
  {
    topic: "Aorta & Great Vessels (TEVAR)",
    question: "What anatomic landmark determines TEVAR code selection?",
    options: [
      "A. The underlying pathology (aneurysm vs. dissection vs. traumatic disruption)",
      "B. Coverage of the endograft relative to the left subclavian artery",
      "C. The manufacturer of the endograft device",
      "D. Whether the patient is symptomatic or asymptomatic",
    ],
    correct: "B",
    explanation: "TEVAR code selection is based on the most proximal extent of thoracic aortic coverage relative to the left subclavian artery — the underlying pathology does not change which base code applies.",
    lookFor: "\"Coverage relative to the left subclavian artery\" is the one fact to memorize for the entire TEVAR family — everything else (aneurysm, dissection, ulcer, trauma) is coded the same way once coverage is known.",
    eliminate: "A is a tempting trap since pathology is usually a major factor elsewhere in CPT, but TEVAR specifically does not split by pathology type.",
  },
  {
    topic: "ECMO/ECLS",
    question: "A patient is initiated on veno-arterial ECMO on Monday. On Tuesday, a different physician manages the ECMO circuit and parameters. What does the Tuesday physician report?",
    options: [
      "A. 33947, initiation, veno-arterial",
      "B. 33949, daily management, veno-arterial",
      "C. Both 33947 and 33949",
      "D. Nothing — only the initiating physician can bill for ECMO care",
    ],
    correct: "B",
    explanation: "Daily management (33949 for veno-arterial) is a distinct service from initiation (33947), reported by whichever physician performs that day's management — even if a different physician started the circuit the day before.",
    lookFor: "\"Different physician, different day, managing the circuit\" is the exact setup for a daily management code, not initiation.",
    eliminate: "A wrongly reuses the initiation code for ongoing management; D incorrectly assumes only one physician can ever bill ECMO services.",
  },
  {
    topic: "Central Venous Access",
    question: "A PICC line (no port or pump) is placed in a 40-year-old patient using ultrasound guidance, with tip position confirmed as part of the guided placement. Is a same-day chest X-ray to confirm tip position separately billable?",
    options: [
      "A. Yes, chest X-ray is always separately billable for line placement",
      "B. No — tip confirmation is already bundled into the imaging-guided PICC code (36573)",
      "C. Yes, but only with modifier 59",
      "D. No, but only because the patient is over 5",
    ],
    correct: "B",
    explanation: "The imaging-guided PICC codes (36572/36573/36584) already bundle tip-position confirmation — a same-day chest X-ray for that purpose is not separately billable.",
    lookFor: "\"Guided placement with tip confirmed\" is the cue that the confirmation work is already included — look for this bundling rule whenever a chest X-ray is mentioned alongside PICC placement.",
    eliminate: "A and C both wrongly assume the X-ray is billable; D attaches the wrong reasoning (age doesn't determine this rule, the imaging-guidance bundling does).",
  },
  {
    topic: "Dialysis Circuit",
    question: "During a percutaneous dialysis circuit intervention, thrombus is found and treated with mechanical thrombectomy, followed by peripheral segment angioplasty. No stent is placed. What's coded?",
    options: [
      "A. 36901",
      "B. 36904",
      "C. 36905",
      "D. 36904 and 36902 together",
    ],
    correct: "C",
    explanation: "Thrombus found + thrombectomy + peripheral angioplasty (no stent) lands on 36905, which already includes the thrombectomy (36904) and diagnostic angiography beneath it — a single ladder-level code.",
    lookFor: "\"Thrombus present\" routes to the 904–906 ladder, not the 901–903 (no-thrombus) ladder; the highest level of work performed (angioplasty, here) picks the exact code.",
    eliminate: "A and D both incorrectly reach for the non-thrombus ladder or double-report a step that's already bundled into 36905.",
  },
  {
    topic: "IABP",
    question: "An intra-aortic balloon pump is inserted via an open femoral artery approach. What's the code?",
    options: [
      "A. 33967, percutaneous insertion",
      "B. 33970, insertion through the femoral artery, open approach",
      "C. 33973, insertion through the ascending aorta",
      "D. 33990, percutaneous VAD insertion",
    ],
    correct: "B",
    explanation: "IABP insertion codes are split by approach: 33967/33968 for percutaneous, 33970/33971 for open femoral, and 33973/33974 for the ascending aorta — each approach has its own paired insertion and removal code.",
    lookFor: "\"Open femoral artery approach\" for an IABP is the specific cue for 33970, distinct from both the percutaneous IABP codes and the unrelated VAD codes (33990+).",
    eliminate: "A is the percutaneous version, not open; C is a different approach entirely (ascending aorta); D confuses IABP with the separate VAD code family.",
  },
  {
    topic: "Hemodialysis Access",
    question: "A surgeon creates a direct arteriovenous fistula using upper-arm cephalic vein transposition. What's the code?",
    options: [
      "A. 36818",
      "B. 36821",
      "C. 36825",
      "D. 36830",
    ],
    correct: "A",
    explanation: "36818 is specifically for direct AV anastomosis by upper-arm cephalic vein transposition — one of four mutually exclusive direct-anastomosis variants (36818–36821) picked by which vein/site is used.",
    lookFor: "\"Cephalic vein\" + \"upper arm\" + \"transposition\" is the precise combination that identifies 36818 among the four direct-anastomosis codes.",
    eliminate: "C and D both describe graft material bridging artery and vein (autogenous or synthetic), not a direct anastomosis — a different concept entirely from vein transposition.",
  },
  {
    topic: "Thrombectomy",
    question: "During a planned angioplasty, the physician incidentally retrieves a short thrombus segment. How is the thrombus removal coded?",
    options: [
      "A. 37184, primary mechanical thrombectomy",
      "B. 37184 and 37185 together",
      "C. 37186, secondary mechanical thrombectomy",
      "D. Not separately coded — it's bundled into the angioplasty",
    ],
    correct: "C",
    explanation: "An incidental short thrombus/embolus retrieval during another planned intervention is \"secondary\" thrombectomy (37186), an add-on — distinct from \"primary\" thrombectomy (37184/37185), which applies when thrombus was already diagnosed and the thrombectomy itself was the planned procedure.",
    lookFor: "\"Incidentally\" or \"during another intervention\" is the signature phrase for secondary thrombectomy (37186), not primary.",
    eliminate: "A and B both apply the primary thrombectomy codes to a scenario that was planned as something else entirely, which is exactly what 37186 is designed to distinguish.",
  },
];

const mainStyle = { maxWidth: "900px", margin: "0 auto", padding: "36px 24px 64px", minHeight: "100vh", background: "#fdf6f6", color: "#291a1a", fontFamily: "Arial, sans-serif" };
const heroStyle = { background: "linear-gradient(135deg, #450a0a, #b91c1c)", color: "white", padding: "40px 36px", borderRadius: "18px", marginBottom: "24px", boxShadow: "0 12px 28px rgba(69,10,10,0.22)" };
const kickerStyle = { margin: "0 0 10px", color: "#fecaca", fontWeight: 800, letterSpacing: "0.08em", fontSize: "13px" };
const navStyle = { display: "flex", flexWrap: "wrap" as const, gap: "10px", marginBottom: "22px" };
const navLinkStyle = { textDecoration: "none", color: "#b91c1c", background: "#ffffff", border: "1px solid #f0d7d7", borderRadius: "999px", padding: "9px 14px", fontWeight: 700, fontSize: "13.5px" };
const cardStyle = { background: "#ffffff", border: "1px solid #f0e2e2", borderRadius: "14px", padding: "26px 28px", boxShadow: "0 5px 16px rgba(69,10,10,0.06)" };
const progressStyle = { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px", fontSize: "13px", color: "#7a3a3a", fontWeight: 700 };
const topicChipStyle = { background: "#fff1f0", border: "1px solid #fecaca", color: "#b91c1c", borderRadius: "999px", padding: "4px 12px", fontWeight: 800, fontSize: "12px" };
const questionStyle = { fontSize: "17px", lineHeight: 1.6, margin: "14px 0 18px", color: "#111827" };
const optionsWrapStyle = { display: "grid", gap: "10px" };
const buttonBaseStyle: React.CSSProperties = { textAlign: "left", padding: "13px 16px", borderRadius: "10px", border: "1px solid #f0d7d7", background: "#fff", cursor: "pointer", fontSize: "14.5px", lineHeight: 1.5 };
const actionsRowStyle = { display: "flex", gap: "12px", marginTop: "20px", flexWrap: "wrap" as const };
const primaryBtnStyle = { padding: "11px 22px", borderRadius: "999px", border: "none", background: "#b91c1c", color: "#fff", fontWeight: 800, cursor: "pointer", fontSize: "14px" };
const secondaryBtnStyle = { padding: "11px 22px", borderRadius: "999px", border: "1px solid #f0d7d7", background: "#fff", color: "#b91c1c", fontWeight: 800, cursor: "pointer", fontSize: "14px" };
const answerBoxStyle = { marginTop: "22px", display: "grid", gap: "12px" };
const explanationBoxStyle = { background: "#f0fdf4", border: "1px solid #bbf7d0", borderLeft: "5px solid #16a34a", borderRadius: "10px", padding: "14px 16px", lineHeight: 1.65, fontSize: "14px" };
const lookForBoxStyle = { background: "#eff6ff", border: "1px solid #bfdbfe", borderLeft: "5px solid #2563eb", borderRadius: "10px", padding: "14px 16px", lineHeight: 1.65, fontSize: "14px" };
const eliminateBoxStyle = { background: "#fef2f2", border: "1px solid #fecaca", borderLeft: "5px solid #dc2626", borderRadius: "10px", padding: "14px 16px", lineHeight: 1.65, fontSize: "14px" };
const scoreStyle = { textAlign: "center" as const, padding: "40px 20px" };

export default function SurgeryThirtyThreeThousandPracticeQuizPage() {
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
        <p style={kickerStyle}>33,000 SERIES · PRACTICE QUIZ</p>
        <h1 style={{ margin: 0, fontSize: "clamp(24px, 5vw, 38px)" }}>Cardiovascular System Practice Quiz</h1>
        <p style={{ margin: "10px 0 0", fontSize: "15.5px", lineHeight: 1.5 }}>14 scenario questions spanning all three reviewer parts — pacemakers, valves, CABG, aorta/TEVAR, ECMO/VAD, IABP, and vascular access.</p>
      </header>

      <nav aria-label="Cardiovascular quiz navigation" style={navStyle}>
        <Link href="/cpt/surgery/33,000" style={navLinkStyle}>Cardiovascular home</Link>
        <Link href="/cpt/surgery/33000-series-guidelines-reviewer" style={navLinkStyle}>Guidelines Reviewer</Link>
        <Link href="/cpt/surgery/33000-series-flashcards" style={navLinkStyle}>Flashcards</Link>
      </nav>

      <div style={cardStyle}>
        {finished ? (
          <div style={scoreStyle}>
            <h2 style={{ margin: "0 0 10px" }}>Quiz Complete</h2>
            <p style={{ fontSize: "40px", fontWeight: 800, color: "#b91c1c", margin: "0 0 10px" }}>{score} / {questions.length}</p>
            <p style={{ color: "#7a3a3a", marginBottom: "22px" }}>
              {score === questions.length ? "Perfect score — this series is solid." : score / questions.length >= 0.7 ? "Good run — review the ones you missed, then try again." : "Worth another pass — revisit the Guidelines Reviewer for the topics you missed."}
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
                  style = { ...style, borderColor: "#b91c1c", background: "#fff1f0" };
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
        <Link href="/cpt/surgery/33,000" style={{ textDecoration: "none", color: "#b91c1c", fontWeight: 700 }}>← Back to Cardiovascular System</Link>
      </div>
    </main>
  );
}
