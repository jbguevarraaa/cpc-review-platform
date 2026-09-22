"use client";

import Link from "next/link";
import { useState } from "react";
import { Highlightable, HighlightToolbar } from "../../surgery/_digestive/highlighter";

type Question = {
  question: string;
  options: string[];
  correct: string;
  explanation: string;
  studyNote: string;
};

const questions: Question[] = [
  {
    question:
      "A 40-year-old established patient is seen for hypertension. The physician documents low MDM and spends 45 minutes face-to-face discussing an abnormal Pap smear, screening procedures, and possible treatment. Which code should be used?",
    options: [
      "A. 99215",
      "B. 99213, 99354",
      "C. 99213, 99417",
      "D. 99213, 99403",
    ],
    correct: "A",
    explanation:
      "The patient is established, the documented MDM is low, and the time is 45 minutes. When both MDM and time are provided, select the level supported by the higher element. The transcript identifies 99215 because the established-patient time threshold is 40 minutes and the documented 45 minutes meets or exceeds it.",
    studyNote:
      "Do not let the low MDM override a higher supported time level. Also eliminate unrelated preventive counseling and prolonged-service choices that do not apply to the code combination shown.",
  },
  {
    question:
      "Which of the following components is used to determine the level of an E/M service based on time?",
    options: [
      "A. History",
      "B. Examination",
      "C. Medical Decision Making (MDM)",
      "D. Time",
    ],
    correct: "C",
    explanation:
      "The supplied screenshot marks option C, and the transcript presents MDM and time as the two E/M coding decision points. This item is reproduced from the provided study source. In an actual coding scenario, review the documented time and MDM guidance together and select the method supported by the record.",
    studyNote:
      "The source answer is C (MDM). Keep the broader rule in mind: E/M level selection may be based on MDM or qualifying total time, depending on the code family and documentation.",
  },
  {
    question:
      "Stella is an established patient with a rib fracture follow-up. The physician reviews a pre-ordered chest X-ray, gives recovery instructions, and discusses pain medication. The documentation supports low MDM. Which code is correct?",
    options: ["A. 99204", "B. 99213", "C. 99215", "D. 99203"],
    correct: "B",
    explanation:
      "The patient is established, so new-patient codes 99204 and 99203 are eliminated. The reviewed chest X-ray and follow-up management support low MDM rather than high MDM. Therefore, the transcript identifies 99213 as the correct established-patient low-MDM code.",
    studyNote:
      "Look for the patient status first. A test review alone does not make the visit high MDM; the overall problems, data, and risk must support that level.",
  },
  {
    question:
      "Alan presents to a physician's office with pneumonia symptoms. The physician performs the outpatient evaluation, reviews a chest X-ray, admits Alan to the hospital, and later performs the initial hospital service with moderate MDM. How should the services be reported?",
    options: [
      "A. 99222",
      "B. 99204, 99222-51",
      "C. 99204-25, 99222",
      "D. 99204",
    ],
    correct: "C",
    explanation:
      "The patient received a separately identifiable outpatient service before admission and an initial inpatient service after admission. Report both services and append modifier 25 to the outpatient E/M service. The screenshot and transcript identify 99204-25 for the outpatient visit and 99222 for the initial inpatient service.",
    studyNote:
      "When admission follows an encounter in another site of service, the initial-site service may be separately reported when significant and separately identifiable. Do not use modifier 51 with E/M codes.",
  },
  {
    question:
      "A 90-year-old patient is admitted from observation and discharged on the same date. The physician documents moderate MDM. Which CPT code should be reported?",
    options: ["A. 99235", "B. 99238", "C. 99239", "D. 99221"],
    correct: "A",
    explanation:
      "The patient was admitted and discharged on the same date, and the documented MDM is moderate. Code 99235 represents hospital inpatient or observation care including admission and discharge on the same date with moderate MDM.",
    studyNote:
      "Same-day admission and discharge use 99234, 99235, or 99236 based on the MDM level. Codes 99238 and 99239 are different-day discharge management codes.",
  },
  {
    question:
      "A 57-year-old patient is sent by a family physician to a urologist for an office consultation. The urologist documents moderate-complexity MDM and reports only the office service. Which option matches the source question?",
    options: [
      "A. 99244-57",
      "B. 99253",
      "C. 99244-57, 52000",
      "D. 99221",
    ],
    correct: "A",
    explanation:
      "The service is an office consultation requested by another physician, and the MDM is moderate. The source identifies option A, 99244, as the office consultation choice; the question also says to report only the office service, so the separate procedure in option C is not selected.",
    studyNote:
      "Consultation coding requires a request from another physician, qualified health care professional, or appropriate source, plus a report back. A consultation initiated only by the patient or family is not reported with consultation codes. Verify modifier details against the current CPT manual and payer policy.",
  },
  {
    question:
      "A 3-year-old critically ill child is admitted by the same physician to the PICU from the emergency department for respiratory failure caused by an asthma exacerbation. The physician begins continuous bronchodilator therapy and pharmacologic support. Which CPT code reports the initial critical-care encounter?",
    options: ["A. 99475", "B. 99291", "C. 99284", "D. 99476"],
    correct: "A",
    explanation:
      "The child is 3 years old and receives initial inpatient pediatric critical care. The source identifies 99475, the initial inpatient pediatric critical-care code for a critically ill child age 2 through 5 years. 99476 is for subsequent care, 99291 is the outpatient critical-care base code, and 99284 is an emergency-department visit code.",
    studyNote:
      "For this source set, first identify the setting, age, and whether the service is initial or subsequent. Always confirm the current CPT code descriptor and age brackets in the edition being used.",
  },
  {
    question:
      "A 20-day-old infant is seen in the emergency department and admitted to the NICU for cyanosis and rapid breathing. The neonatologist performs intubation, ventilation management, and a complete echocardiogram, then provides the echocardiography report. Which option matches the source question?",
    options: [
      "A. 99468-25, 93303-26",
      "B. 99471-25, 31500, 94002, 93303-26",
      "C. 99460-25, 31500, 94002, 93303-26",
      "D. 99291-25, 93303-26",
    ],
    correct: "A",
    explanation:
      "The infant is 20 days old and receives initial inpatient neonatal critical care, so the source selects 99468. The physician's professional echocardiography interpretation is reported with 93303-26. The source also places modifier 25 on the E/M service because the diagnostic service is separately reported.",
    studyNote:
      "Do not separately report services bundled into the applicable critical-care code when performed during critical care. For modifier 25 and the echocardiography professional component, verify the current CPT guidelines and payer requirements.",
  },
  {
    question:
      "A 37-year-old established patient is seen by her primary care physician for hypertension. The physician documents 55 minutes of face-to-face counseling about an abnormal gynecologic test. Which E/M code combination matches the source question?",
    options: [
      "A. 99213",
      "B. 99214, 99359",
      "C. 99215, 99417",
      "D. 99213, 99358",
    ],
    correct: "C",
    explanation:
      "The source selects 99215 with 99417. The established-patient E/M service is selected using total time, and 99417 is the prolonged outpatient E/M add-on reported with an applicable primary outpatient E/M code when the documented total time reaches the required threshold. The source eliminates 99358/99359 because those codes apply to prolonged service on a date other than the face-to-face E/M service.",
    studyNote:
      "Separate the two prolonged-service families: 99358–99359 are for prolonged work without direct patient contact on a date other than the face-to-face E/M service; 99417 is the outpatient add-on for prolonged time on the E/M date. Confirm current code-family parenthetical instructions before reporting.",
  },
  {
    question:
      "A pediatrician is asked to remain in the delivery room for a baby at risk for complications. The pediatrician remains for 45 minutes, but the baby is healthy and does not require the pediatrician's services. Which CPT code is reported?",
    options: ["A. 99360", "B. 99219", "C. 99252", "D. 99360 x 2"],
    correct: "A",
    explanation:
      "This is standby service. The pediatrician provided prolonged attendance but did not provide care to the healthy newborn. Because the standby time is 45 minutes, it falls within the 30–59 minute range and 99360 is reported once. A second unit requires another full 30 minutes.",
    studyNote:
      "Do not report 99360 for less than 30 minutes. Multiply by full 30-minute units only: 30–59 minutes = 1 unit; 60–89 minutes = 2 units.",
  },
  {
    question:
      "A 33-year-old patient was admitted to the hospital from the emergency department on 12/17 and discharged on 12/20. The physician performed the final examination, reviewed studies, prescribed medication, and spent 20 minutes on the discharge visit. Which CPT code should be reported for 12/20?",
    options: ["A. 99283", "B. 99221", "C. 99231", "D. 99238"],
    correct: "D",
    explanation:
      "The patient is being discharged on a date different from the admission date, and the physician spent 20 minutes on discharge management. Code 99238 reports hospital inpatient or observation discharge day management of 30 minutes or less. The ED, initial-care, and subsequent-care options do not describe the documented discharge service.",
    studyNote:
      "When the question explicitly states discharge, look first at the discharge family. For a different-day discharge, 30 minutes or less supports 99238; more than 30 minutes supports 99239.",
  },
  {
    question:
      "A physician is called to the hospital for medical management of a 56-year-old patient admitted one day earlier for aspiration pneumonia and COPD. The patient receives continued IV antibiotics and respiratory support, and the physician documents moderate MDM. Which code should be reported?",
    options: ["A. 99221", "B. 99231", "C. 99223", "D. 99232"],
    correct: "D",
    explanation:
      "Because the patient was admitted one day earlier, this is subsequent hospital inpatient or observation care, not initial care. The documented moderate MDM supports 99232. Code 99231 represents low MDM, while 99223 is initial high-MDM care.",
    studyNote:
      "Use two checkpoints: determine initial versus subsequent care from the admission timeline, then match the documented MDM level.",
  },
  {
    question:
      "A 75-year-old established patient is brought in for a physical screening to enroll in a group home. There are no new complaints, and the visit is a periodic comprehensive preventive medicine evaluation. Which code should be reported?",
    options: ["A. 99397", "B. 99387", "C. 99212", "D. 99213"],
    correct: "A",
    explanation:
      "The patient is established and the service is a periodic comprehensive preventive medicine evaluation. For an established patient age 65 or older, the source identifies 99397. Code 99387 is for an initial comprehensive preventive visit, while 99212 and 99213 are problem-oriented established-patient office visits.",
    studyNote:
      "Preventive medicine coding depends on patient status and age. Do not select a problem-oriented office E/M code when the documented purpose is preventive screening without a new complaint.",
  },
  {
    question:
      "A 59-year-old patient is seen in a cardiologist's office for a consultation requested by her primary care physician. The cardiologist documents moderate MDM and reports the findings to the PCP by phone and letter. Which code should be reported?",
    options: ["A. 99244", "B. 99254", "C. 99214", "D. 99245"],
    correct: "A",
    explanation:
      "This is an office consultation requested by another physician, and the MDM is moderate. Code 99244 is the office or other outpatient consultation code for a new or established patient with moderate MDM. 99254 is inpatient consultation, 99214 is a problem-oriented office visit, and 99245 requires high MDM.",
    studyNote:
      "Confirm the consultation request, setting, and MDM level. The report back to the requesting physician supports the consultation requirements shown in the reviewer.",
  },
  {
    question:
      "An office physician provides high-complexity medical decision making for an established patient based on the documented history and medically appropriate physical examination. Which CPT code should be reported?",
    options: ["A. 99215", "B. 99245", "C. 99205", "D. 99214"],
    correct: "A",
    explanation:
      "The patient is established and the documented MDM is high. Code 99215 reports an office or other outpatient E/M visit for an established patient requiring high-level MDM. Code 99245 is a consultation, 99205 is for a new patient, and 99214 represents moderate MDM.",
    studyNote:
      "For office or outpatient E/M, match patient status first, then distinguish a regular visit from a consultation and select the supported MDM level.",
  },
];

export default function EMGuidelinesQuizPage() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  const [answers, setAnswers] = useState<string[]>([]);
  const [complete, setComplete] = useState(false);

  const question = questions[current];
  const score = answers.filter((answer, index) => answer === questions[index].correct).length;

  const submitAnswer = () => {
    if (!selected) return;
    const nextAnswers = [...answers, selected];
    setAnswers(nextAnswers);
    if (current === questions.length - 1) {
      setComplete(true);
    } else {
      setCurrent(current + 1);
      setSelected("");
    }
  };

  if (complete) {
    return (
      <main style={pageStyle}>
        <HighlightToolbar />
        <header style={headerStyle}>
          <p style={eyebrowStyle}>E/M SERIES · MDM AND TIME</p>
          <h1 style={{ margin: 0 }}>Quiz Complete</h1>
          <p style={{ fontSize: "20px", marginBottom: 0 }}>Score: {score} / {questions.length}</p>
        </header>
        {questions.map((item, index) => (
          <section key={item.question} style={cardStyle}>
            <h2 style={{ fontSize: "22px", marginTop: 0 }}>Question {index + 1}</h2>
            <p style={{ lineHeight: 1.65 }}><Highlightable id={`result-${index}-question`} as="span">{item.question}</Highlightable></p>
            <p><strong>Your answer:</strong> {answers[index]}</p>
            <p><strong>Correct answer:</strong> {item.correct}</p>
            <p style={{ lineHeight: 1.65 }}><Highlightable id={`result-${index}-explanation`} as="span"><strong>Rationale:</strong> {item.explanation}</Highlightable></p>
            <p style={noteStyle}><Highlightable id={`result-${index}-studynote`} as="span"><strong>Study note:</strong> {item.studyNote}</Highlightable></p>
          </section>
        ))}
        <button onClick={() => { setCurrent(0); setSelected(""); setAnswers([]); setComplete(false); }} style={buttonStyle}>Retake Quiz</button>
        <div style={{ marginTop: "24px" }}><Link href="/cpt/e-m" style={linkStyle}>← Back to E/M Series</Link></div>
      </main>
    );
  }

  return (
    <main style={pageStyle}>
      <HighlightToolbar />
      <header style={headerStyle}>
        <p style={eyebrowStyle}>E/M SERIES · SEPARATE QUIZ</p>
        <h1 style={{ margin: 0 }}>MDM and Time Quiz</h1>
        <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: 0 }}><Highlightable id="quiz-intro" as="span">Photo-based questions with transcript-based rationale. This quiz is separate from the CodeMed Mastery reviewer.</Highlightable></p>
      </header>

      <section style={cardStyle}>
        <p style={{ color: "#64748b", fontWeight: 700 }}>Question {current + 1} of {questions.length}</p>
        <h2 style={{ fontSize: "27px", lineHeight: 1.35 }}>{question.question}</h2>
        <div style={{ display: "grid", gap: "12px" }}>
          {question.options.map((option) => {
            const letter = option.charAt(0);
            const active = selected === letter;
            return <button key={option} onClick={() => setSelected(letter)} style={{ ...optionStyle, borderColor: active ? "#0f766e" : "#d7e2df", background: active ? "#e0f2fe" : "white" }}>{option}</button>;
          })}
        </div>
        <div style={{ marginTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
          <span style={{ fontWeight: 700, color: "#475569" }}>Selected: {selected || "None"}</span>
          <button onClick={submitAnswer} disabled={!selected} style={{ ...buttonStyle, opacity: selected ? 1 : 0.5 }}>{current === questions.length - 1 ? "Finish Quiz" : "Next Question"}</button>
        </div>
      </section>

      <div style={{ marginTop: "24px" }}><Link href="/cpt/e-m" style={linkStyle}>← Back to E/M Series</Link></div>
    </main>
  );
}

const pageStyle = { maxWidth: "1000px", margin: "0 auto", padding: "36px 24px 56px", minHeight: "100vh", background: "#f7faf9", color: "#17212b", fontFamily: "Arial, sans-serif" };
const headerStyle = { background: "linear-gradient(135deg, #12343b, #0f766e)", color: "white", padding: "34px", borderRadius: "16px", marginBottom: "24px" };
const eyebrowStyle = { margin: "0 0 10px", color: "#b7f7e8", fontWeight: 800, letterSpacing: "0.04em" };
const cardStyle = { background: "white", border: "1px solid #d7e2df", borderRadius: "14px", padding: "24px", marginBottom: "18px", boxShadow: "0 5px 16px rgba(20,60,55,0.06)" };
const optionStyle = { textAlign: "left" as const, padding: "16px", border: "2px solid", borderRadius: "10px", fontSize: "17px", cursor: "pointer", color: "#17212b" };
const buttonStyle = { background: "#0f766e", color: "white", border: "none", borderRadius: "9px", padding: "13px 20px", fontWeight: 800, cursor: "pointer" };
const noteStyle = { background: "#fff7df", borderLeft: "5px solid #d97706", padding: "12px 15px", lineHeight: 1.6 };
const linkStyle = { color: "#0f766e", fontWeight: 800, textDecoration: "none" };
