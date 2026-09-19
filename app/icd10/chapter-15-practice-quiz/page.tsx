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
    topic: "Sequencing Priority & Incidental Pregnancy",
    question: "A pregnant patient is treated for a condition, and the provider explicitly documents that the condition is not affecting the pregnancy in any way. What's coded?",
    options: [
      "A. The condition's own code, plus a Chapter 15 code",
      "B. Z33.1 (Pregnant state, incidental) in place of any Chapter 15 code",
      "C. A Chapter 15 code alone, since pregnancy always takes priority",
      "D. The condition's own code alone, with no pregnancy-related code at all",
    ],
    correct: "B",
    explanation: "When the provider explicitly documents that a condition is not affecting the pregnancy, Z33.1 is used in place of any Chapter 15 code.",
    lookFor: "Explicit provider documentation that a condition doesn't affect the pregnancy is the specific trigger for Z33.1.",
    eliminate: "C ignores the specific incidental-pregnancy exception, defaulting to the general Chapter 15 priority rule that doesn't apply here.",
  },
  {
    topic: "Sequencing Priority — No Documentation Either Way",
    question: "A pregnant patient is treated for a condition, and there is no documentation anywhere stating whether the condition affects the pregnancy or not. What's coded?",
    options: [
      "A. Z33.1, since the relationship to the pregnancy isn't confirmed",
      "B. A Chapter 15 code, since Z33.1 requires an explicit \"not affecting\" statement that isn't present here",
      "C. Neither code, until the provider clarifies",
      "D. Both Z33.1 and a Chapter 15 code together",
    ],
    correct: "B",
    explanation: "Z33.1 is only appropriate when the provider has specifically documented the condition as not affecting the pregnancy — silence on the question defaults to the Chapter 15 pathway, not the incidental one.",
    lookFor: "Missing documentation is NOT the same as an explicit \"not affecting\" statement — Z33.1 requires the latter, not just the absence of a stated connection.",
    eliminate: "A wrongly treats silence as equivalent to an explicit incidental statement, which it is not.",
  },
  {
    topic: "Maternal-Only Rule",
    question: "Can a Chapter 15 (O00-O9A) code ever be assigned on a newborn's own medical record?",
    options: [
      "A. Yes, whenever the mother's pregnancy complication directly affected the baby",
      "B. No — Chapter 15 codes are used only on the maternal record",
      "C. Yes, but only for delivery-related complications",
      "D. Yes, if the newborn requires perinatal-period care",
    ],
    correct: "B",
    explanation: "Chapter 15 codes are used only on the maternal record, never on the record of the newborn.",
    lookFor: "\"Newborn's own record\" should always trigger the maternal-only exclusion for Chapter 15 codes.",
    eliminate: "A, C, and D all invent exceptions that don't exist — the maternal-only rule has no carve-outs.",
  },
  {
    topic: "Trimester — Weeks Documentation",
    question: "A pregnancy complication is documented at 22 weeks gestation, with the word \"trimester\" never used anywhere in the note. What trimester character is assigned?",
    options: [
      "A. Unspecified trimester, since the word \"trimester\" was never used",
      "B. First trimester",
      "C. Second trimester",
      "D. Query the provider before assigning any trimester",
    ],
    correct: "C",
    explanation: "The provider's documented week count can be used to assign the appropriate trimester character — 22 weeks falls within the second trimester.",
    lookFor: "A documented week count is just as valid as the word \"trimester\" itself for determining the correct character.",
    eliminate: "A wrongly defaults to unspecified when a specific week count is actually available to determine the trimester.",
  },
  {
    topic: "Multi-Trimester Admission",
    question: "A patient is admitted during her second trimester for a complication that developed at that time, and remains hospitalized into her third trimester before discharge. What trimester character is assigned to the antepartum complication code?",
    options: [
      "A. Third trimester, matching the discharge trimester",
      "B. Second trimester, matching when the complication developed",
      "C. Unspecified trimester, since the admission spanned two trimesters",
      "D. Both second and third trimester codes together",
    ],
    correct: "B",
    explanation: "For an admission spanning more than one trimester, the trimester character is based on when the complication actually developed, not the trimester of discharge.",
    lookFor: "\"When did the complication develop\" is the deciding question for multi-trimester admissions — not the discharge date.",
    eliminate: "A wrongly uses the discharge trimester, which the guideline specifically says is NOT the basis for this character.",
  },
  {
    topic: "Trimester — Pre-Existing Condition",
    question: "A patient has a pre-existing condition (one that developed before this current admission/encounter entirely) that's being coded with a trimester character. What trimester is used?",
    options: [
      "A. The trimester when the condition first originally developed, years ago if applicable",
      "B. The trimester at the time of the current admission/encounter",
      "C. Always the first trimester, since the condition pre-dates the pregnancy workup",
      "D. Unspecified trimester, since pre-existing conditions don't have a clear trimester of onset",
    ],
    correct: "B",
    explanation: "If a condition developed prior to the current admission/encounter or represents a pre-existing condition, the trimester character for the trimester AT THE TIME OF THE ADMISSION/ENCOUNTER is assigned — not the (possibly undeterminable or irrelevant) trimester of original onset.",
    lookFor: "Pre-existing conditions use the CURRENT encounter's trimester, distinct from the \"when did it develop\" rule that applies to complications first arising during the current admission.",
    eliminate: "A wrongly chases an original-onset trimester that isn't the actual basis for this specific rule.",
  },
  {
    topic: "7th Character — Fetus Identification",
    question: "A patient with twins has a documented complication from a fetus-identifying category, but documentation doesn't specify which twin is affected, and clarification isn't obtainable. What 7th character is assigned?",
    options: [
      "A. \"1\", for the first twin by default",
      "B. \"2\", for the second twin by default",
      "C. \"0\"",
      "D. No code can be assigned without knowing which fetus is affected",
    ],
    correct: "C",
    explanation: "7th character \"0\" applies when documentation is insufficient to determine which fetus is affected and clarification isn't possible — even in a multiple gestation.",
    lookFor: "\"0\" isn't just for singleton pregnancies — it also covers can't-determine-which-fetus situations in multiples.",
    eliminate: "A and B both guess at a specific fetus that the documentation doesn't actually identify.",
  },
  {
    topic: "Completed Weeks of Gestation",
    question: "A provider documents gestation at 39 weeks and 6 days. What week of gestation is coded?",
    options: [
      "A. 40 weeks, rounding up",
      "B. 39 weeks",
      "C. 38 weeks, rounding down for safety",
      "D. Query the provider for the exact day count",
    ],
    correct: "B",
    explanation: "\"Completed\" weeks means full weeks only — 39 weeks and 6 days has not yet reached 40 completed weeks.",
    lookFor: "Any documented weeks-and-days combination that's short of a full next week stays at the lower completed week.",
    eliminate: "A wrongly rounds up, which \"completed weeks\" specifically does not allow.",
  },
  {
    topic: "Routine Prenatal vs. High-Risk Supervision",
    question: "A patient with a documented high-risk pregnancy presents for a routine prenatal visit, with no current complications. What's the first-listed diagnosis?",
    options: [
      "A. A code from category Z34 (supervision of normal pregnancy)",
      "B. A code from category O09 (supervision of high-risk pregnancy)",
      "C. O80 (full-term uncomplicated delivery)",
      "D. Z33.1 (pregnant state, incidental)",
    ],
    correct: "B",
    explanation: "For a routine prenatal visit in a documented high-risk pregnancy, a code from category O09 is the first-listed diagnosis — not Z34, which is reserved for patients without high-risk status.",
    lookFor: "\"High-risk\" status documented at a routine visit routes to O09, not Z34.",
    eliminate: "A wrongly applies the non-high-risk routine code to a patient specifically documented as high-risk.",
  },
  {
    topic: "High-Risk Pregnancy — Labor/Delivery Complications",
    question: "A high-risk pregnancy patient develops a complication during labor. What's coded for that complication?",
    options: [
      "A. A code from category O09, since the pregnancy is high-risk",
      "B. The applicable Chapter 15 complication code",
      "C. O80, since delivery occurred",
      "D. Z34, since prenatal supervision was already established",
    ],
    correct: "B",
    explanation: "Category O09 is intended for use only during the prenatal period — complications during labor or delivery as a result of a high-risk pregnancy are coded with the applicable Chapter 15 complication codes instead.",
    lookFor: "O09 doesn't carry forward into labor/delivery — once an actual complication occurs there, switch to the specific complication code.",
    eliminate: "A wrongly continues using O09 into the labor/delivery episode, where it no longer applies.",
  },
  {
    topic: "Principal Diagnosis — Cesarean Delivery",
    question: "A patient is admitted with a condition that directly results in a cesarean delivery being performed. What's the principal diagnosis?",
    options: [
      "A. A generic delivery code, regardless of the underlying condition",
      "B. The condition that resulted in the cesarean procedure",
      "C. Z37, outcome of delivery",
      "D. Whichever code is listed first in the chart, regardless of clinical relevance",
    ],
    correct: "B",
    explanation: "For a cesarean delivery, if the patient was admitted with a condition that resulted in the cesarean, that condition is selected as the principal diagnosis.",
    lookFor: "The condition driving the cesarean itself is the principal diagnosis when that's also why the patient was admitted.",
    eliminate: "C wrongly uses the outcome-of-delivery code as a principal diagnosis; Z37 is always an additional code, never principal.",
  },
  {
    topic: "Principal Diagnosis — Cesarean, Unrelated Admission Reason",
    question: "A patient is admitted for a condition entirely unrelated to obstetric complications. During the same admission, a separate condition develops that results in a cesarean delivery. What's the principal diagnosis?",
    options: [
      "A. The condition that resulted in the cesarean, since a cesarean was performed",
      "B. The original, unrelated condition the patient was actually admitted for",
      "C. Z37, outcome of delivery",
      "D. Both conditions, co-principal",
    ],
    correct: "B",
    explanation: "If the reason for admission was unrelated to the condition resulting in the cesarean delivery, the condition related to the actual reason for admission is selected as the principal diagnosis — not the cesarean-driving condition.",
    lookFor: "\"Admitted for X, but Y (unrelated) develops and drives the cesarean\" keeps X as principal — the cesarean-triggering condition only becomes principal when it's also why the patient was admitted in the first place.",
    eliminate: "A wrongly assumes the cesarean-causing condition is always principal, missing the guideline's explicit carve-out for when the admission reason was unrelated to it.",
  },
  {
    topic: "Pre-Existing Hypertension",
    question: "A patient's chart documents pre-existing hypertension with hypertensive chronic kidney disease, using the appropriate O10 subcode. What else is needed?",
    options: [
      "A. Nothing — the O10 subcode alone is complete",
      "B. A secondary code from the appropriate hypertension category specifying the CKD detail",
      "C. A code from category O09 instead",
      "D. Z33.1, since hypertension predates the pregnancy",
    ],
    correct: "B",
    explanation: "When an O10 code includes hypertensive heart disease or hypertensive CKD, a secondary code from the appropriate hypertension category is required to specify the type of heart failure or CKD.",
    lookFor: "O10 codes covering heart/kidney involvement are never complete alone — a secondary hypertension-category code is always required.",
    eliminate: "A wrongly treats the O10 code as sufficient on its own, missing the required secondary code.",
  },
  {
    topic: "Fetal Conditions Affecting Management",
    question: "A fetal finding is noted on an ultrasound report, but nothing in the documentation indicates it changed how the mother herself is being managed. Is an O35/O36 code assigned?",
    options: [
      "A. Yes, any documented fetal finding qualifies",
      "B. No — the fetal condition must actually modify the mother's management to qualify",
      "C. Yes, but only on the newborn's record",
      "D. No, O35/O36 codes are never used for ultrasound findings",
    ],
    correct: "B",
    explanation: "O35/O36 codes require the fetal condition to actually be responsible for modifying the mother's management — a fetal finding existing alone, without a documented management effect, doesn't meet that threshold.",
    lookFor: "\"Does this change what's being done for the mother\" is the real test, not just \"was a fetal finding documented.\"",
    eliminate: "A wrongly assumes any fetal finding automatically qualifies, ignoring the management-impact requirement.",
  },
  {
    topic: "HIV in Pregnancy",
    question: "A pregnant patient with asymptomatic HIV status (no active illness) is admitted for an unrelated obstetric reason, and her HIV status is documented. What's coded for the HIV status?",
    options: [
      "A. O98.7– alone",
      "B. Z21 alone",
      "C. O98.7– plus Z21",
      "D. No code, since she's asymptomatic",
    ],
    correct: "C",
    explanation: "For asymptomatic HIV infection status during pregnancy, both O98.7– and Z21 are assigned together.",
    lookFor: "Asymptomatic HIV status in pregnancy is a two-code combination, not a single code.",
    eliminate: "D wrongly assumes asymptomatic status means no code is needed at all.",
  },
  {
    topic: "Gestational Diabetes — Treatment Method",
    question: "A patient with no prior diabetes history develops gestational diabetes in her third trimester, managed with both dietary changes and insulin. What's coded?",
    options: [
      "A. The diet-controlled O24.4 subcode alone",
      "B. The insulin-controlled O24.4 subcode alone",
      "C. Both the diet-controlled and insulin-controlled subcodes together",
      "D. The insulin-controlled subcode plus Z79.4",
    ],
    correct: "B",
    explanation: "When gestational diabetes is treated with both diet and insulin, only the insulin-controlled subcode is required — not both, and not an additional Z79.4 code.",
    lookFor: "Insulin control always \"wins\" over diet-alone when both are documented for gestational diabetes.",
    eliminate: "D wrongly adds Z79.4, which is specifically excluded from being used with O24.4 codes.",
  },
  {
    topic: "Puerperal Sepsis",
    question: "A postpartum patient develops sepsis from a documented bacterial infection, with no recent obstetrical procedure involved. What's coded?",
    options: [
      "A. A code from category A40 (streptococcal sepsis) alone",
      "B. O85 plus a secondary code from B95-B96 for the organism",
      "C. O85 alone, no organism code needed",
      "D. A code from category A41 (other sepsis) alone",
    ],
    correct: "B",
    explanation: "Puerperal sepsis is coded O85, with a secondary code identifying the causal organism (from B95-B96 for a bacterial infection) — A40/A41 are explicitly not used for puerperal sepsis.",
    lookFor: "O85 always needs a secondary organism code — it's never reported alone.",
    eliminate: "A and D both wrongly reach for the general sepsis-by-organism categories, which are excluded specifically for puerperal sepsis.",
  },
  {
    topic: "Sepsis Following an Obstetrical Procedure",
    question: "A patient develops sepsis specifically as a result of an infection following a recent cesarean delivery. Is this coded as O85 (puerperal sepsis)?",
    options: [
      "A. Yes, any postpartum sepsis is coded O85",
      "B. No — sepsis following an obstetrical procedure follows the postprocedural-infection sepsis pathway instead",
      "C. Yes, but with an additional procedure-complication code",
      "D. No, this would not be coded as sepsis at all",
    ],
    correct: "B",
    explanation: "O85 is not assigned for sepsis following an obstetrical procedure — that scenario follows the dedicated postprocedural-infection sepsis guidance instead.",
    lookFor: "A recent obstetrical PROCEDURE as the identified cause takes this out of the O85 pathway entirely.",
    eliminate: "A wrongly applies O85 to every postpartum sepsis case, missing the procedure-related exclusion.",
  },
  {
    topic: "Substance Use During Pregnancy",
    question: "A patient is documented using both alcohol and an illicit drug during the postpartum period, six weeks after delivery. How many code pairs are assigned?",
    options: [
      "A. None — postpartum substance use isn't covered by these codes",
      "B. One combined code for both substances",
      "C. Two separate O99.3x + F-code pairs, one for each substance",
      "D. Only the alcohol code, since it's more clinically significant",
    ],
    correct: "C",
    explanation: "Each substance gets its own O99.3x code plus a secondary code from the matching mental/behavioral disorders category — and these rules explicitly apply to postpartum use, not just active pregnancy.",
    lookFor: "Multiple substances documented means multiple O99.3x + F-code pairs, each substance coded independently.",
    eliminate: "A wrongly assumes these codes only apply during active pregnancy, ignoring the explicit postpartum inclusion.",
  },
  {
    topic: "Poisoning in a Pregnant Patient — Sequencing",
    question: "A pregnant patient is treated for accidental poisoning from a household chemical, which also caused a specific documented organ effect. What's the correct code sequence?",
    options: [
      "A. The organ-effect code, then the poisoning code, then O9A.2",
      "B. O9A.2, then the poisoning code, then the organ-effect code",
      "C. The poisoning code alone, no other codes needed",
      "D. O9A.2 alone, no other codes needed",
    ],
    correct: "B",
    explanation: "The correct sequence is O9A.2 first, then the specific poisoning code, then any additional code for the resulting condition — a strict three-part order.",
    lookFor: "O9A.2 always leads this three-code sequence — it's never second or third.",
    eliminate: "A reverses the required sequence, putting the organ-effect code first instead of last.",
  },
  {
    topic: "Normal Delivery — Code O80",
    question: "A patient had a documented complication earlier in her pregnancy (now fully resolved), and is admitted at full term with no complications present at the time of this delivery admission, delivering a single healthy infant. Is O80 appropriate?",
    options: [
      "A. No — any complication anywhere in the pregnancy rules out O80",
      "B. Yes — a resolved earlier complication doesn't disqualify O80 as long as nothing is present at this admission",
      "C. No, O80 requires a completely complication-free pregnancy from conception to delivery",
      "D. Yes, but only with an additional code for the resolved complication",
    ],
    correct: "B",
    explanation: "O80 may still be used if a complication existed earlier in the pregnancy but is not present at the time of the actual delivery admission.",
    lookFor: "\"Present at THIS admission\" is what disqualifies O80 — a fully resolved earlier complication does not.",
    eliminate: "A and C both wrongly disqualify O80 based on pregnancy history rather than the current admission's status.",
  },
  {
    topic: "Normal Delivery — Outcome Code",
    question: "Which outcome-of-delivery code is appropriate to use alongside O80?",
    options: [
      "A. Any Z37 code, depending on the specific delivery details",
      "B. Z37.0, single live birth, exclusively",
      "C. No Z37 code is used with O80",
      "D. Z39.0",
    ],
    correct: "B",
    explanation: "Z37.0 (single live birth) is the only outcome-of-delivery code appropriate for use with O80.",
    lookFor: "O80 pairs with exactly one Z37 subcode — Z37.0 — never any other outcome variant.",
    eliminate: "A wrongly suggests any Z37 code could pair with O80, when only Z37.0 is correct.",
  },
  {
    topic: "Postpartum vs. Peripartum Window",
    question: "How long does the postpartum period last, and how does that compare to the peripartum period?",
    options: [
      "A. Both are identical six-week windows starting after delivery",
      "B. Postpartum is six weeks after delivery; peripartum is the last month of pregnancy through five months postpartum",
      "C. Postpartum is five months after delivery; peripartum is six weeks after delivery",
      "D. Both periods start at delivery and have no defined end point",
    ],
    correct: "B",
    explanation: "The postpartum period is six weeks following delivery. The peripartum period is a longer, overlapping window: the last month of pregnancy through five months postpartum.",
    lookFor: "Peripartum is both longer than postpartum AND starts earlier (before delivery, not after).",
    eliminate: "C reverses the two timeframes.",
  },
  {
    topic: "Pregnancy-Associated Cardiomyopathy",
    question: "A patient with no pre-existing heart disease develops cardiomyopathy in her third trimester, which continues to progress for several months after delivery. What's coded?",
    options: [
      "A. A generic cardiomyopathy code from the circulatory system chapter alone",
      "B. O90.3, pregnancy-associated (peripartum) cardiomyopathy",
      "C. O94, sequelae of complication of pregnancy",
      "D. O99.81, abnormal glucose complicating pregnancy",
    ],
    correct: "B",
    explanation: "O90.3 is specifically for cardiomyopathy that develops as a result of pregnancy in a patient with no pre-existing heart disease, diagnosed in the third trimester and potentially progressing for months after delivery.",
    lookFor: "\"No pre-existing heart disease\" plus \"third-trimester onset, progressing after delivery\" is the defining picture for O90.3.",
    eliminate: "A misses the pregnancy-specific code that exists precisely for this presentation.",
  },
  {
    topic: "Retained Products of Conception",
    question: "A patient returns weeks after a spontaneous abortion with documented retained products of conception and no other complication, despite having been discharged previously with a diagnosis of \"complete\" abortion. What's coded?",
    options: [
      "A. No code, since the abortion was previously documented as complete",
      "B. O03A, incomplete spontaneous abortion without complication",
      "C. A code from category O07 instead",
      "D. Query the provider to resolve the discrepancy before coding",
    ],
    correct: "B",
    explanation: "O03A applies to subsequent encounters for retained products of conception without complications, even when the patient was previously discharged with a \"complete\" abortion diagnosis.",
    lookFor: "A prior \"complete\" abortion diagnosis does NOT block O03A on a later encounter for retained products.",
    eliminate: "A wrongly treats the prior \"complete\" diagnosis as disqualifying, when the guideline explicitly says it isn't.",
  },
  {
    topic: "Post-Abortion Hemorrhage",
    question: "A patient develops delayed, excessive bleeding specifically following an elective termination of pregnancy. What's coded?",
    options: [
      "A. O72.1, other immediate postpartum hemorrhage",
      "B. O04.6, delayed or excessive hemorrhage following induced termination",
      "C. Both O72.1 and O04.6 together",
      "D. A generic hemorrhage code unrelated to pregnancy",
    ],
    correct: "B",
    explanation: "O04.6 is specifically for hemorrhage following an elective abortion — O72.1 is explicitly excluded from ever being used for post-abortion conditions.",
    lookFor: "\"Following an elective termination\" specifically routes to O04.6, never O72.1.",
    eliminate: "A and C both incorrectly involve O72.1, which is barred from post-abortion use entirely.",
  },
  {
    topic: "Abortion with Liveborn Fetus",
    question: "An attempted elective termination of pregnancy unexpectedly results in a liveborn fetus. What's coded?",
    options: [
      "A. O03.–, incomplete spontaneous abortion",
      "B. O07.–, failed attempted termination of pregnancy",
      "C. Z33.2 (encounter for elective termination of pregnancy) plus a code from category Z37 (outcome of delivery)",
      "D. Only a code from category Z37, since a live birth occurred",
    ],
    correct: "C",
    explanation: "When an attempted termination results in a liveborn fetus, Z33.2 is assigned plus a Z37 outcome-of-delivery code — not an abortion-failure code, since the outcome was a live birth, not a failed/incomplete abortion.",
    lookFor: "\"Attempted termination\" + \"liveborn fetus\" together is the specific trigger for the Z33.2 + Z37 combination, not an O03/O07 abortion code.",
    eliminate: "A and B both wrongly apply abortion-outcome codes to a scenario that resulted in a live birth, not an abortion.",
  },
  {
    topic: "COVID-19 in Pregnancy",
    question: "A pregnant patient is admitted for an unrelated obstetric complication and incidentally tests positive for COVID-19 during that same admission, with no COVID-19 symptoms driving the admission. What's the principal diagnosis?",
    options: [
      "A. O98.5–, the COVID-19-complicating-pregnancy code",
      "B. U07.1, COVID-19",
      "C. The unrelated obstetric complication's own code",
      "D. Both O98.5– and the obstetric complication code, co-principal",
    ],
    correct: "C",
    explanation: "When the reason for admission is unrelated to COVID-19, but the patient is incidentally diagnosed with it during that admission, the actual reason for admission is sequenced as principal, with O98.5– and U07.1 added as additional diagnoses.",
    lookFor: "\"Incidental, not the reason for the encounter\" flips the sequencing — the actual admission reason leads, not the COVID-19 codes.",
    eliminate: "A and B both wrongly promote the COVID-19 codes to principal status for an incidental finding.",
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

export default function Icd10Chapter15PracticeQuizPage() {
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
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 15 · PRACTICE QUIZ</p>
        <h1 style={{ margin: 0, fontSize: "clamp(24px, 5vw, 38px)" }}>Chapter 15 Practice Quiz</h1>
        <p style={{ margin: "10px 0 0", fontSize: "15.5px", lineHeight: 1.5 }}>28 original scenario questions with elimination tricks, covering both parts of this chapter — general OB rules plus HIV, diabetes, sepsis, substance use, normal delivery, abortion, and COVID-19.</p>
      </header>

      <nav aria-label="ICD-10 quiz navigation" style={navStyle}>
        <Link href="/icd10" style={navLinkStyle}>ICD-10-CM home</Link>
        <Link href="/icd10/chapter-15-guidelines-reviewer" style={navLinkStyle}>Guidelines Reviewer Pt. 1</Link>
        <Link href="/icd10/chapter-15-guidelines-reviewer-part-2" style={navLinkStyle}>Guidelines Reviewer Pt. 2</Link>
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
