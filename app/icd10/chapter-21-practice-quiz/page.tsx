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
    topic: "Z Codes Are Not Procedures",
    question: "A patient is seen for a screening mammogram. Does the screening Z code also describe the procedure?",
    options: [
      "A. Yes, the Z code covers both the reason and the procedure",
      "B. Yes, but only in the outpatient setting",
      "C. No — a corresponding procedure code must accompany the Z code",
      "D. No — Z codes can't be used for screening",
    ],
    correct: "C",
    explanation: "Z codes are not procedure codes. A corresponding procedure code must accompany a Z code to describe any procedure performed.",
    lookFor: "'Does the Z code describe the procedure?'",
    eliminate: "A and B treat the Z code as a procedure code. D is false — screening Z codes exist.",
  },
  {
    topic: "Inoculations",
    question: "A well-baby visit includes a routine vaccination. How is Z23 used?",
    options: [
      "A. As a secondary code, because the inoculation is a routine part of preventive care",
      "B. Always first-listed",
      "C. It is not used",
      "D. Only with a diagnosis code for the disease being prevented",
    ],
    correct: "A",
    explanation: "Z23 may be used as a secondary code if the inoculation is given as a routine part of preventive health care, such as a well-baby visit. Procedure codes identify the administration and vaccine type.",
    lookFor: "A vaccination that is part of a well-baby visit.",
    eliminate: "B applies only when the inoculation is the sole reason for the encounter. C and D ignore how Z23 is used.",
  },
  {
    topic: "Contact/Exposure",
    question: "A patient with no symptoms is tested after close contact with someone who has a communicable disease. What may be first-listed?",
    options: [
      "A. The disease itself",
      "B. A symptom code",
      "C. Z23",
      "D. A Z20 contact/exposure code, to explain the encounter for testing",
    ],
    correct: "D",
    explanation: "Contact/exposure codes (Z20) may be first-listed to explain an encounter for testing, or — more commonly — used as a secondary code to identify a potential risk.",
    lookFor: "'Testing after exposure' with no symptoms.",
    eliminate: "A assumes the disease is present. B has no symptoms to code. C is for inoculations.",
  },
  {
    topic: "Status vs. History",
    question: "What is the difference between a status code and a history code?",
    options: [
      "A. They are interchangeable",
      "B. A status code describes an ongoing state or residual (carrier, device, sequelae); a history code says the patient no longer has the condition",
      "C. A history code describes a current condition; a status code describes a past one",
      "D. Status codes are only for family members",
    ],
    correct: "B",
    explanation: "Status codes indicate a patient is a carrier of a disease or has sequelae or residual of a past condition, including prosthetic or mechanical devices. A history code indicates the patient no longer has the condition.",
    lookFor: "'Ongoing state' vs. 'no longer has the condition.'",
    eliminate: "A ignores the guideline's distinction. C reverses the definitions. D is unrelated.",
  },
  {
    topic: "Status Code Not Needed",
    question: "A patient has a documented complication of a heart transplant (a T86.2- code). Should Z94.1 (heart transplant status) also be assigned?",
    options: [
      "A. Yes, always",
      "B. Yes, but only in outpatient",
      "C. Yes, if the transplant was more than a year ago",
      "D. No — the complication code already identifies the patient as a heart transplant patient",
    ],
    correct: "D",
    explanation: "A status code shouldn't be used with a body system diagnosis code that already includes the information. The T86.2- complication code already indicates the patient is a heart transplant patient.",
    lookFor: "A complication code that already contains the status.",
    eliminate: "A, B, and C add a status code that gives no additional information.",
  },
  {
    topic: "Ventilator Weaning",
    question: "A patient is admitted for weaning from a mechanical ventilator. What codes are assigned?",
    options: [
      "A. A code from J96.1- (chronic respiratory failure) followed by Z99.11 (dependence on respirator status)",
      "B. Z99.11 only",
      "C. J96.0- only",
      "D. Z99.12",
    ],
    correct: "A",
    explanation: "For encounters for weaning from a mechanical ventilator, assign a code from subcategory J96.1-, chronic respiratory failure, followed by Z99.11, dependence on respirator [ventilator] status.",
    lookFor: "'Weaning from a mechanical ventilator.'",
    eliminate: "B leaves out the chronic respiratory failure. C is acute respiratory failure. D is respirator dependence during power failure.",
  },
  {
    topic: "Status With Complications",
    question: "Categories Z89–Z90 and Z93–Z99 are for use only when:",
    options: [
      "A. There is a complication of the device",
      "B. The patient is an inpatient",
      "C. There are no complications or malfunctions of the organ or tissue replaced, the amputation site, or the equipment",
      "D. The patient is under 18",
    ],
    correct: "C",
    explanation: "Z89–Z90 and Z93–Z99 are for use only if there are no complications or malfunctions of the organ or tissue replaced, the amputation site, or the equipment on which the patient is dependent.",
    lookFor: "'No complications or malfunctions.'",
    eliminate: "A reverses the rule. B and D add restrictions that aren't in the guideline.",
  },
  {
    topic: "Long-Term Drug Therapy",
    question: "A patient takes a 10-day course of antibiotics for acute bronchitis. Is a Z79 long-term drug therapy code assigned?",
    options: [
      "A. Yes, for any prescribed medication",
      "B. No — Z79 isn't used for medication given for a brief period to treat an acute illness",
      "C. Yes, if the patient is an inpatient",
      "D. Yes, if a provider documents the course",
    ],
    correct: "B",
    explanation: "Z79 is for continuous use of a prescribed drug for long-term treatment or prophylaxis. It isn't for medication given briefly to treat an acute illness or injury, such as an antibiotic course for acute bronchitis.",
    lookFor: "'Brief course for an acute illness.'",
    eliminate: "A, C, and D ignore the extended-period requirement.",
  },
  {
    topic: "Long-Term Drug Therapy",
    question: "A patient with opioid dependence is on methadone maintenance to prevent withdrawal. Which is correct?",
    options: [
      "A. Assign a Z79 long-term drug therapy code",
      "B. Assign Z79 and the dependence code",
      "C. Assign no code for the dependence",
      "D. Assign the appropriate drug use, abuse, or dependence code instead of Z79",
    ],
    correct: "D",
    explanation: "Z79 isn't for patients with addictions, or for detoxification or maintenance programs to prevent withdrawal (such as methadone maintenance). Assign the code for the drug use, abuse, or dependence instead.",
    lookFor: "'Methadone maintenance' — an explicit exclusion.",
    eliminate: "A and B use Z79, which the guideline excludes here. C drops the documented dependence.",
  },
  {
    topic: "BMI",
    question: "A dietitian documents a BMI value, but the patient's provider documents no associated diagnosis such as obesity. Is a BMI code assigned?",
    options: [
      "A. No — BMI codes are assigned only when there is an associated reportable diagnosis documented by the provider",
      "B. Yes, always",
      "C. Yes, if the BMI is over 30",
      "D. Yes, in pregnancy",
    ],
    correct: "A",
    explanation: "BMI codes should be assigned only when there is an associated reportable diagnosis (such as obesity or anorexia) documented by the patient's provider. They aren't assigned during pregnancy.",
    lookFor: "A BMI number with no provider-documented diagnosis.",
    eliminate: "B and C skip the associated-diagnosis requirement. D is prohibited in pregnancy.",
  },
  {
    topic: "Antimicrobial Resistance",
    question: "A patient has an infection documented as resistant to antibiotics. How are the infection code and the Z16 resistance code sequenced?",
    options: [
      "A. Z16 first",
      "B. Either order",
      "C. The infection code first",
      "D. Z16 only",
    ],
    correct: "C",
    explanation: "Category Z16 (resistance to antimicrobial drugs) indicates that a patient has a condition resistant to antimicrobial treatment. The infection code is sequenced first.",
    lookFor: "'Resistant infection' — infection first.",
    eliminate: "A reverses the order. B ignores the sequencing rule. D drops the infection code.",
  },
  {
    topic: "Incidental Pregnancy",
    question: "A patient is seen for a sprained ankle and happens to be pregnant, with the pregnancy in no way complicating the visit. Which code is used?",
    options: [
      "A. An obstetric chapter code",
      "B. Z33.1 (pregnant state, incidental) as a secondary code",
      "C. Z34 first-listed",
      "D. No pregnancy code at all",
    ],
    correct: "B",
    explanation: "Z33.1 is a secondary code only, used when the pregnancy is in no way complicating the reason for the visit. Otherwise, an obstetric chapter code is required.",
    lookFor: "'In no way complicating the reason for the visit.'",
    eliminate: "A is required only when the pregnancy is involved. C is for supervision of a normal pregnancy. D drops a documented pregnancy.",
  },
  {
    topic: "tPA at Another Facility",
    question: "A patient is transferred in after receiving tPA at another hospital 6 hours earlier. Which record carries Z92.82?",
    options: [
      "A. The transferring facility's record",
      "B. Both records",
      "C. Neither record",
      "D. Only the receiving facility's record, as a secondary diagnosis",
    ],
    correct: "D",
    explanation: "Z92.82 is assigned as a secondary diagnosis on the RECEIVING facility's record when the patient was given tPA in another facility within the last 24 hours. The condition tPA was given for is assigned first, and Z92.82 doesn't apply to the transferring facility's record.",
    lookFor: "'Transferred in' after tPA elsewhere.",
    eliminate: "A and B put it on the transferring facility. C ignores the guideline.",
  },
  {
    topic: "Transplanted Organ Removal Status",
    question: "A transplanted organ is removed during today's encounter because of a complication. Is Z98.85 assigned for today's encounter?",
    options: [
      "A. No — code the complication that necessitated removal; Z98.85 is for encounters after the organ was removed",
      "B. Yes, always",
      "C. Yes, in addition to the complication",
      "D. Yes, instead of the complication",
    ],
    correct: "A",
    explanation: "Z98.85 indicates a transplanted organ was previously removed, and it shouldn't be assigned for the encounter in which the organ is removed. The complication necessitating removal is assigned for that encounter.",
    lookFor: "'Removed during this encounter.'",
    eliminate: "B, C, and D assign the status code at the removal encounter.",
  },
  {
    topic: "History Codes",
    question: "A patient with a family history of colon cancer comes in for a screening colonoscopy. How are the codes sequenced?",
    options: [
      "A. The family history code first",
      "B. Either order",
      "C. The screening code first, then the family history code",
      "D. Only the family history code",
    ],
    correct: "C",
    explanation: "The reason for the encounter (screening) is sequenced first, and the appropriate personal or family history code(s) are assigned as additional diagnoses.",
    lookFor: "A screening visit with a family history.",
    eliminate: "A reverses the order. B ignores it. D drops the reason for the visit.",
  },
  {
    topic: "Screening vs. Diagnostic",
    question: "A patient with rectal bleeding has a colonoscopy to find the cause. Is it coded as a screening?",
    options: [
      "A. Yes, colonoscopy is always a screening",
      "B. No — testing because of a sign or symptom is a diagnostic exam, and the sign or symptom explains the reason",
      "C. Yes, if the patient is over 50",
      "D. Yes, with the bleeding as an additional code",
    ],
    correct: "B",
    explanation: "Testing to rule out or confirm a suspected diagnosis because the patient has a sign or symptom is a diagnostic examination, not a screening. The sign or symptom is used to explain the reason for the test.",
    lookFor: "A symptom that prompted the test.",
    eliminate: "A, C, and D treat a symptom-driven test as a screening.",
  },
  {
    topic: "Screening Inherent to Exam",
    question: "A pap smear is performed as part of a routine pelvic examination. Is a separate screening Z code needed?",
    options: [
      "A. Yes, always",
      "B. Yes, first-listed",
      "C. Yes, only for patients under 30",
      "D. No — a screening code isn't necessary when the screening is inherent to a routine examination",
    ],
    correct: "D",
    explanation: "A screening code is not necessary if the screening is inherent to a routine examination, such as a pap smear done during a routine pelvic examination.",
    lookFor: "'Inherent to a routine exam.'",
    eliminate: "A, B, and C require a screening code that the guideline says isn't necessary.",
  },
  {
    topic: "Observation Codes",
    question: "A newborn's birth record has Z38 as principal, and the baby is also observed for a suspected condition that is ruled out. How is the observation code (Z05) sequenced?",
    options: [
      "A. After the Z38 code",
      "B. Before the Z38 code",
      "C. It replaces the Z38 code",
      "D. It isn't used on a birth record",
    ],
    correct: "A",
    explanation: "When the principal diagnosis must be Z38, a code from Z05 (observation and evaluation of newborn for suspected diseases and conditions ruled out) is sequenced after the Z38 code.",
    lookFor: "A birth record with a ruled-out suspected condition.",
    eliminate: "B and C displace Z38 as principal. D is false — Z05 is used this way.",
  },
  {
    topic: "Aftercare and Injuries",
    question: "A patient returns for routine care of a healing fracture. Which is correct?",
    options: [
      "A. An aftercare Z code first-listed",
      "B. Z09 follow-up code",
      "C. The acute fracture code with the subsequent-encounter 7th character",
      "D. A status code",
    ],
    correct: "C",
    explanation: "Aftercare Z codes should not be used for aftercare of injuries. For aftercare of an injury, assign the acute injury code with the appropriate 7th character for subsequent encounter.",
    lookFor: "An injury in the healing phase.",
    eliminate: "A is excluded for injuries. B is for completed treatment where the condition no longer exists. D doesn't explain the reason for the visit.",
  },
  {
    topic: "Follow-Up Codes",
    question: "During a follow-up visit after completed treatment, the provider finds that the condition has recurred. What is coded?",
    options: [
      "A. Z09 follow-up code",
      "B. The diagnosis code for the recurred condition, in place of the follow-up code",
      "C. Both, with Z09 first",
      "D. A history code only",
    ],
    correct: "B",
    explanation: "If a condition is found to have recurred on the follow-up visit, assign the diagnosis code for the condition in place of the follow-up code.",
    lookFor: "'Has recurred.'",
    eliminate: "A and C keep a follow-up code for a condition that exists again. D describes a condition that no longer exists.",
  },
  {
    topic: "Donors",
    question: "Is a Z52 code used for a donation from a deceased donor?",
    options: [
      "A. Yes, for all donations",
      "B. Yes, for organs only",
      "C. Yes, with the donor's consent documented",
      "D. No — Z52 is for living donors only (including self-donation)",
    ],
    correct: "D",
    explanation: "Category Z52 is used for living individuals donating blood or other body tissue, for others or for themselves. It isn't used to identify cadaveric donations.",
    lookFor: "'Deceased donor.'",
    eliminate: "A, B, and C extend Z52 to cadaveric donations, which the guideline excludes.",
  },
  {
    topic: "Z34",
    question: "How is Z34 (supervision of normal pregnancy) sequenced?",
    options: [
      "A. Always first-listed, and never used with any other code from the OB chapter",
      "B. Secondary only",
      "C. First-listed, along with any OB chapter code",
      "D. Only in the third trimester",
    ],
    correct: "A",
    explanation: "Codes in category Z34 are always first-listed and are not used with any other code from the OB chapter.",
    lookFor: "'Normal pregnancy supervision.'",
    eliminate: "B reverses the sequencing. C allows pairing with OB codes. D invents a trimester rule.",
  },
  {
    topic: "Z3A",
    question: "For which of these is Z3A (weeks of gestation) NOT assigned?",
    options: [
      "A. A routine prenatal visit",
      "B. A pregnancy complication in the second trimester",
      "C. A pregnancy with an abortive outcome (O00–O08)",
      "D. An inpatient delivery admission",
    ],
    correct: "C",
    explanation: "Category Z3A shouldn't be assigned for pregnancies with abortive outcomes (O00–O08), elective termination (Z33.2), or postpartum conditions.",
    lookFor: "The abortive-outcome exclusion.",
    eliminate: "A, B, and D are situations where Z3A may give additional pregnancy information.",
  },
  {
    topic: "Z37",
    question: "Can Z37 (outcome of delivery) be used on the newborn's record?",
    options: [
      "A. Yes, always",
      "B. No — Z37 belongs on the maternal delivery record only, and it is always secondary",
      "C. Yes, as principal",
      "D. Yes, only for cesarean births",
    ],
    correct: "B",
    explanation: "The outcome of delivery (Z37) should be included on all maternal delivery records, is always a secondary code, and is not used on the newborn record.",
    lookFor: "'Outcome of delivery' on a newborn record.",
    eliminate: "A, C, and D place Z37 on the newborn or as principal.",
  },
  {
    topic: "Prophylactic Surgery",
    question: "A patient with a documented genetic susceptibility to breast cancer is admitted specifically for prophylactic mastectomy. What is first-listed?",
    options: [
      "A. The genetic susceptibility code",
      "B. A breast cancer code",
      "C. A history code",
      "D. A code from Z40.0 (prophylactic surgery for risk factors related to malignant neoplasms)",
    ],
    correct: "D",
    explanation: "For encounters specifically for prophylactic removal of an organ, the principal or first-listed code should be from Z40.0 or Z40.8. Additional code(s) identify any associated risk factor, such as genetic susceptibility.",
    lookFor: "'Specifically for prophylactic removal.'",
    eliminate: "A is added as a risk factor, not first-listed. B — no cancer exists. C doesn't describe the reason for the encounter.",
  },
  {
    topic: "Prophylactic Surgery — Treatment",
    question: "A patient with prostate cancer has the testes removed as part of treatment of the cancer. Is Z40.0 assigned?",
    options: [
      "A. No — Z40.0 isn't assigned when the organ removal is for treatment of a malignancy",
      "B. Yes, always for orchiectomy",
      "C. Yes, as a secondary code",
      "D. Yes, if the provider calls it preventive",
    ],
    correct: "A",
    explanation: "A Z40.0 code should not be assigned if the patient is having organ removal for treatment of a malignancy, such as removal of the testes for the treatment of prostate cancer.",
    lookFor: "Removal to treat, not to prevent.",
    eliminate: "B, C, and D all assign Z40.0 for a treatment procedure.",
  },
  {
    topic: "SDOH — Documentation",
    question: "The chart says only that a patient lives alone, with no risk or unmet need for assistance documented. Is Z60.2 assigned?",
    options: [
      "A. Yes, living alone always supports Z60.2",
      "B. Yes, if the patient is elderly",
      "C. No — a documented risk or unmet need for assistance is required",
      "D. Yes, as first-listed",
    ],
    correct: "C",
    explanation: "Merely living alone, without documentation of a risk or unmet need for assistance at home, doesn't support Z60.2 (problems related to living alone).",
    lookFor: "'Only that a patient lives alone.'",
    eliminate: "A, B, and D assign the code without documented risk or need.",
  },
  {
    topic: "SDOH — Source of Documentation",
    question: "A social worker documents in the official medical record that a patient is experiencing homelessness. May a Z59.0- code be assigned?",
    options: [
      "A. No — only the patient's provider can document it",
      "B. Yes — SDOH codes may be based on documentation from clinicians other than the patient's provider, such as social workers",
      "C. Only with a physician's co-signature",
      "D. Only if the patient self-reports it",
    ],
    correct: "B",
    explanation: "For SDOH in categories Z55–Z65, code assignment may be based on documentation from clinicians involved in the care who aren't the patient's provider — such as social workers, community health workers, case managers, or nurses — if it is in the official record.",
    lookFor: "A non-provider clinician's documentation of a social problem.",
    eliminate: "A, C, and D add restrictions that the guideline doesn't have.",
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

export default function Icd10Chapter21PracticeQuizPage() {
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
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 21 · PRACTICE QUIZ</p>
        <h1 style={{ margin: 0, fontSize: "clamp(24px, 5vw, 38px)" }}>Chapter 21 Practice Quiz</h1>
        <p style={{ margin: "10px 0 0", fontSize: "15.5px", lineHeight: 1.5 }}>28 original scenario questions with elimination tricks, covering status vs. history, screening vs. diagnostic, aftercare, follow-up, obstetric Z codes, prophylactic surgery, and social determinants of health.</p>
      </header>

      <nav aria-label="ICD-10 quiz navigation" style={navStyle}>
        <Link href="/icd10" style={navLinkStyle}>ICD-10-CM home</Link>
        <Link href="/icd10/chapter-21-guidelines-reviewer" style={navLinkStyle}>Reviewer Part 1</Link>
        <Link href="/icd10/chapter-21-guidelines-reviewer-part-2" style={navLinkStyle}>Reviewer Part 2</Link>
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
