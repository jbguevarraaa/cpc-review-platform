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
    topic: "Nose",
    question: "A patient undergoes bilateral repair of nasal valve collapse using a single, well-documented technique. How should this be coded?",
    options: [
      "A. The nasal valve repair code, reported once (bilateral is the default)",
      "B. The nasal valve repair code, reported twice with modifier 50",
      "C. Two different nasal valve repair techniques, one per side",
      "D. The nasal valve repair code with modifier 52",
    ],
    correct: "A",
    explanation: "The nasal valve repair codes (30465/30468/30469) are written as bilateral procedures by default — reporting it once already covers both sides when the same technique is used bilaterally.",
    lookFor: "\"Bilateral\" + a single named technique is the cue that the code is already inherently bilateral — no modifier 50 needed.",
    eliminate: "B double-reports a code that's already bilateral by definition; D (modifier 52) is for a UNILATERAL repair, the opposite of this scenario.",
  },
  {
    topic: "Nose",
    question: "A patient has epistaxis controlled with a simple anterior nasal pack. What's the coding logic here?",
    options: [
      "A. Code from the 30901–30906 epistaxis control family, chosen by anterior/posterior and simple/complex",
      "B. Code from the rhinoplasty family (30400–30450)",
      "C. Code from the nasal valve repair family (30465–30469)",
      "D. No code — packing alone isn't a billable procedure",
    ],
    correct: "A",
    explanation: "Epistaxis control codes (30901–30906) are chosen along two axes: anterior vs. posterior, and simple vs. complex — a simple anterior pack is the most basic tier of that family.",
    lookFor: "\"Nasal pack for epistaxis\" always routes to the 30901–30906 family, not rhinoplasty or valve repair, which address structural issues rather than bleeding control.",
    eliminate: "B and C both address structural nasal problems, not active bleeding control.",
  },
  {
    topic: "Larynx",
    question: "A surgeon performs operative removal of a laryngeal foreign body using an operating microscope, and separately reports add-on code 69990 (microsurgical technique) for use of the scope. Is this correct?",
    options: [
      "A. Yes, 69990 is always reported whenever a microscope is used",
      "B. No — the microscope-inclusive foreign body removal code (31531) already accounts for the scope; 69990 is not separately reported alongside it",
      "C. Yes, but only with modifier 51",
      "D. No, because foreign body removal never uses a microscope",
    ],
    correct: "B",
    explanation: "The Larynx family pairs plain codes with dedicated \"with operating microscope or telescope\" variants (e.g., 31530 vs. 31531). Once the microscope-inclusive code is used, add-on code 69990 is not separately reported for that same microscope use.",
    lookFor: "\"...with operating microscope or telescope\" appearing as its own separate code from the plain version is the cue that magnification is already priced into that code choice — not billed again as 69990.",
    eliminate: "A wrongly assumes 69990 stacks on top of a code that already includes the microscope; D incorrectly claims foreign body removal never uses a microscope, when 31530/31531 is exactly that code pair.",
  },
  {
    topic: "Trachea & Bronchi",
    question: "A standard adult patient undergoes a planned tracheostomy (not an emergency, not under age 2). What's the code?",
    options: [
      "A. 31600",
      "B. 31601",
      "C. 31603",
      "D. 31605",
    ],
    correct: "A",
    explanation: "31600 is the standard planned tracheostomy code. 31601 is specifically for patients younger than 2. 31603 and 31605 are the emergency tracheostomy codes (transtracheal vs. via the cricothyroid membrane), not planned procedures.",
    lookFor: "\"Planned\" vs. \"emergency\" is the first fork for tracheostomy coding; age under 2 is a second, independent fork that only applies within the planned-tracheostomy pair.",
    eliminate: "C and D both belong to the emergency tracheostomy pair, which doesn't match a planned procedure; B requires the patient to be under 2, which isn't stated here.",
  },
  {
    topic: "Lung & Pleural Biopsy",
    question: "A percutaneous needle biopsy of a lung nodule is performed under both CT and fluoroscopic guidance in the same session. How many imaging guidance codes are billed alongside 32408?",
    options: [
      "A. Two — one for each modality used",
      "B. One, whichever modality provided the primary guidance",
      "C. Zero — imaging guidance is already bundled into 32408",
      "D. One, but only if fluoroscopy was used",
    ],
    correct: "C",
    explanation: "32408 already bundles in ALL imaging guidance used for that biopsy, regardless of how many modalities were involved — imaging guidance codes are never separately added on top of it.",
    lookFor: "\"Multiple imaging modalities used for the same biopsy\" is a common overbilling trap — the bundling rule applies no matter how many modalities were actually used.",
    eliminate: "A and B both assume at least one imaging code is separately billable, which the bundling rule explicitly rules out.",
  },
  {
    topic: "Thoracotomy",
    question: "A patient undergoes thoracotomy specifically for drainage of an empyema. Which code family applies?",
    options: [
      "A. 32035/32036, empyema thoracostomy",
      "B. 32551, tube thoracostomy",
      "C. 32100, thoracotomy with exploration",
      "D. 32200, pneumonostomy for drainage of lung abscess",
    ],
    correct: "A",
    explanation: "32035/32036 are specifically written for empyema thoracostomy — a distinct, dedicated code pair rather than a generic thoracotomy or chest tube code.",
    lookFor: "\"Empyema\" as the specific documented indication routes straight to 32035/32036 — don't default to the generic exploratory thoracotomy code (32100) when a more specific indication-based code exists.",
    eliminate: "B (tube thoracostomy) and D (lung abscess drainage) both address different specific indications, not empyema.",
  },
  {
    topic: "Lung Resection",
    question: "A patient undergoes removal of an entire lung. What's the base code?",
    options: [
      "A. 32440, pneumonectomy",
      "B. 32480, lobectomy, single lobe",
      "C. 32505, wedge resection with diagnostic biopsy",
      "D. 32486, lobectomy, sleeve",
    ],
    correct: "A",
    explanation: "32440 is the base pneumonectomy code — removal of an entire lung, distinct from lobectomy (removal of one lobe) or wedge resection (removal of a small segment).",
    lookFor: "\"Entire lung\" is the defining phrase for pneumonectomy (32440); \"one lobe\" points to the lobectomy family (32480–32488); a small segment points to wedge resection (32505–32507).",
    eliminate: "B and D both describe lobectomy variants (removal of a lobe, not the whole lung); C describes a much smaller wedge resection.",
  },
  {
    topic: "Pleural Drainage",
    question: "A patient has a simple chest tube placed for a pneumothorax, no imaging guidance used. What's the code?",
    options: [
      "A. 32550, insertion of indwelling tunneled pleural catheter",
      "B. 32551, tube thoracostomy",
      "C. 32560, chemical pleurodesis",
      "D. 32552, removal of indwelling tunneled pleural catheter",
    ],
    correct: "B",
    explanation: "32551 is the standard tube thoracostomy (chest tube) code — distinct from 32550, which is for a tunneled indwelling catheter meant for longer-term drainage (e.g., a PleurX-type catheter).",
    lookFor: "\"Simple chest tube\" is 32551. \"Tunneled\" or \"indwelling, longer-term\" catheter is 32550 — the word \"tunneled\" is the key differentiator.",
    eliminate: "A and D both involve the tunneled catheter family, which doesn't match a simple acute chest tube placement.",
  },
  {
    topic: "Thoracoscopy (VATS)",
    question: "What general principle applies to a diagnostic thoracoscopy performed immediately before a therapeutic (surgical) thoracoscopic procedure in the same session?",
    options: [
      "A. Both the diagnostic and therapeutic codes are billed together",
      "B. The diagnostic thoracoscopy is bundled into the surgical thoracoscopy — not separately billed",
      "C. Only the diagnostic code is billed",
      "D. Bill the diagnostic code with modifier 59",
    ],
    correct: "B",
    explanation: "As with open and endoscopic procedures throughout CPT, a diagnostic scope that precedes a surgical/therapeutic scope in the same session is bundled into the more extensive therapeutic procedure — not separately reported.",
    lookFor: "\"Diagnostic scope immediately followed by therapeutic scope, same session\" is a recurring CPT-wide bundling pattern, not unique to thoracoscopy.",
    eliminate: "A and D both incorrectly try to preserve the diagnostic code as separately billable, which contradicts the general endoscopy bundling rule.",
  },
  {
    topic: "Lung Transplantation",
    question: "What three components does a lung transplant code typically account for?",
    options: [
      "A. Donor pneumonectomy, backbench preparation, and recipient implantation",
      "B. Only the recipient implantation",
      "C. Only backbench preparation of the donor lung",
      "D. Preoperative evaluation, implantation, and postoperative rehab",
    ],
    correct: "A",
    explanation: "Lung transplant coding conceptually breaks into three distinct components — removing the donor lung, preparing it on the backbench, and implanting it into the recipient — and these may be reported as separate components depending on who performs which part.",
    lookFor: "When a transplant scenario mentions different teams or physicians handling different parts of the process, think in terms of these three distinct components rather than one all-in-one code.",
    eliminate: "B and C each isolate only one component, missing the fact that transplant coding is built from multiple distinct pieces of work.",
  },
  {
    topic: "Repair, Collapse Therapy & Ablation",
    question: "A patient undergoes percutaneous radiofrequency ablation of a lung tumor under imaging guidance. Is imaging guidance separately billed?",
    options: [
      "A. Yes, always bill imaging guidance separately",
      "B. No — imaging guidance is typically bundled into the ablation code itself",
      "C. Only if MRI guidance was used",
      "D. Only if the tumor was malignant",
    ],
    correct: "B",
    explanation: "Consistent with the pattern seen throughout this series (e.g., percutaneous lung biopsy), percutaneous ablation codes typically already bundle the imaging guidance needed to perform them.",
    lookFor: "This bundled-imaging-guidance pattern recurs across nearly every percutaneous procedure in the 30,000 series — biopsy, ablation, catheter placement — always check the code's own descriptor before adding a guidance code.",
    eliminate: "A assumes guidance is always separately billable, which contradicts the bundling pattern seen elsewhere in this series.",
  },
  {
    topic: "Accessory Sinuses",
    question: "A patient undergoes bilateral radiofrequency destruction of the posterior nasal nerve (31242), performed in the same session as a diagnostic nasal endoscopy (31231) examining the same structures. How is this coded?",
    options: [
      "A. 31242 once (bilateral is the default) plus 31231",
      "B. 31242 once — bilateral is already the default, and it's not reported together with 31231",
      "C. 31242 reported twice with modifier 50",
      "D. 31231 alone",
    ],
    correct: "B",
    explanation: "31242 (posterior nasal nerve ablation) is written as a bilateral procedure by default, so it's reported once, not twice with modifier 50. It's also specifically excluded from being reported together with plain diagnostic endoscopy (31231) performed on the same structures.",
    lookFor: "\"Bilateral by default\" + \"not reported with 31231\" are two separate rules stacked in the same question — both apply to 31242/31243.",
    eliminate: "A wrongly adds 31231 on top, which the bundling rule excludes; C wrongly doubles a code that's already bilateral by definition.",
  },
];

const mainStyle = { maxWidth: "900px", margin: "0 auto", padding: "36px 24px 64px", minHeight: "100vh", background: "#f5f7fa", color: "#161c26", fontFamily: "Arial, sans-serif" };
const heroStyle = { background: "linear-gradient(135deg, #1f2937, #0f766e)", color: "white", padding: "40px 36px", borderRadius: "18px", marginBottom: "24px", boxShadow: "0 12px 28px rgba(15,23,42,0.2)" };
const kickerStyle = { margin: "0 0 10px", color: "#99f6e4", fontWeight: 800, letterSpacing: "0.08em", fontSize: "13px" };
const navStyle = { display: "flex", flexWrap: "wrap" as const, gap: "10px", marginBottom: "22px" };
const navLinkStyle = { textDecoration: "none", color: "#0f766e", background: "#ffffff", border: "1px solid #efd39b", borderRadius: "999px", padding: "9px 14px", fontWeight: 700, fontSize: "13.5px" };
const cardStyle = { background: "#ffffff", border: "1px solid #e5e1d6", borderRadius: "14px", padding: "26px 28px", boxShadow: "0 5px 16px rgba(15,23,42,0.06)" };
const progressStyle = { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px", fontSize: "13px", color: "#5b6b68", fontWeight: 700 };
const topicChipStyle = { background: "#fff7e8", border: "1px solid #efd39b", color: "#0f766e", borderRadius: "999px", padding: "4px 12px", fontWeight: 800, fontSize: "12px" };
const questionStyle = { fontSize: "17px", lineHeight: 1.6, margin: "14px 0 18px", color: "#111827" };
const optionsWrapStyle = { display: "grid", gap: "10px" };
const buttonBaseStyle: React.CSSProperties = { textAlign: "left", padding: "13px 16px", borderRadius: "10px", border: "1px solid #e5e1d6", background: "#fff", cursor: "pointer", fontSize: "14.5px", lineHeight: 1.5 };
const actionsRowStyle = { display: "flex", gap: "12px", marginTop: "20px", flexWrap: "wrap" as const };
const primaryBtnStyle = { padding: "11px 22px", borderRadius: "999px", border: "none", background: "#0f766e", color: "#fff", fontWeight: 800, cursor: "pointer", fontSize: "14px" };
const secondaryBtnStyle = { padding: "11px 22px", borderRadius: "999px", border: "1px solid #e5e1d6", background: "#fff", color: "#0f766e", fontWeight: 800, cursor: "pointer", fontSize: "14px" };
const answerBoxStyle = { marginTop: "22px", display: "grid", gap: "12px" };
const explanationBoxStyle = { background: "#f0fdf4", border: "1px solid #bbf7d0", borderLeft: "5px solid #16a34a", borderRadius: "10px", padding: "14px 16px", lineHeight: 1.65, fontSize: "14px" };
const lookForBoxStyle = { background: "#eff6ff", border: "1px solid #bfdbfe", borderLeft: "5px solid #2563eb", borderRadius: "10px", padding: "14px 16px", lineHeight: 1.65, fontSize: "14px" };
const eliminateBoxStyle = { background: "#fef2f2", border: "1px solid #fecaca", borderLeft: "5px solid #dc2626", borderRadius: "10px", padding: "14px 16px", lineHeight: 1.65, fontSize: "14px" };
const scoreStyle = { textAlign: "center" as const, padding: "40px 20px" };

export default function SurgeryThirtyThousandPracticeQuizPage() {
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
        <p style={kickerStyle}>30,000 SERIES · PRACTICE QUIZ</p>
        <h1 style={{ margin: 0, fontSize: "clamp(24px, 5vw, 38px)" }}>Respiratory System Practice Quiz</h1>
        <p style={{ margin: "10px 0 0", fontSize: "15.5px", lineHeight: 1.5 }}>12 scenario questions spanning both reviewer parts — nose, sinuses, larynx, trachea/bronchi, lung/pleural biopsy, resection, pleural drainage, VATS, transplant, and ablation.</p>
      </header>

      <nav aria-label="Respiratory quiz navigation" style={navStyle}>
        <Link href="/cpt/surgery/30,000" style={navLinkStyle}>Respiratory home</Link>
        <Link href="/cpt/surgery/30000-series-guidelines-reviewer" style={navLinkStyle}>Guidelines Reviewer</Link>
        <Link href="/cpt/surgery/30000-series-flashcards" style={navLinkStyle}>Flashcards</Link>
      </nav>

      <div style={cardStyle}>
        {finished ? (
          <div style={scoreStyle}>
            <h2 style={{ margin: "0 0 10px" }}>Quiz Complete</h2>
            <p style={{ fontSize: "40px", fontWeight: 800, color: "#0f766e", margin: "0 0 10px" }}>{score} / {questions.length}</p>
            <p style={{ color: "#5b6b68", marginBottom: "22px" }}>
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
                  style = { ...style, borderColor: "#0f766e", background: "#fff7e8" };
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
        <Link href="/cpt/surgery/30,000" style={{ textDecoration: "none", color: "#0f766e", fontWeight: 700 }}>← Back to Respiratory System</Link>
      </div>
    </main>
  );
}
