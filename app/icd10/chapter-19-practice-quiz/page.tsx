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
    topic: "7th Characters — A vs. D",
    question: "A patient's ankle fracture has been surgically treated, and the patient now attends routine follow-up during healing with no complications. Which is correct?",
    options: [
      "A. The fracture code with an initial-encounter 7th character, because the fracture is still present",
      "B. An aftercare Z code",
      "C. The fracture code with a subsequent-encounter 7th character",
      "D. The sequela 7th character S",
    ],
    correct: "C",
    explanation: "Once active treatment is finished and the patient is receiving routine care during healing or recovery, the acute fracture code is reported with a subsequent-encounter 7th character. Aftercare Z codes aren't used for traumatic fractures.",
    lookFor: "'Routine follow-up during healing' — active treatment is over.",
    eliminate: "A treats the fracture as still in active treatment. B is not used for traumatic fractures. D is for conditions that result from the injury, not routine healing care.",
  },
  {
    topic: "7th Characters — New Provider",
    question: "A patient who is still in active treatment for an injury is seen for the first time by a different physician. Which 7th character applies?",
    options: [
      "A. The same initial-encounter character — active treatment is ongoing",
      "B. The subsequent-encounter character, because a new provider is involved",
      "C. The sequela character",
      "D. An aftercare Z code instead of a 7th character",
    ],
    correct: "A",
    explanation: "The 7th character depends on whether the patient is receiving active treatment for the condition — not on whether the provider is new. Ongoing active treatment keeps the initial-encounter 7th character.",
    lookFor: "'Still in active treatment' plus a 'new physician' distractor.",
    eliminate: "B lets a new provider change the character. C and D don't apply to ongoing active treatment.",
  },
  {
    topic: "Aftercare of Injuries",
    question: "A patient returns for routine care of a healing injury after completing active treatment. How is the encounter reported?",
    options: [
      "A. An aftercare code from Z47 or Z48",
      "B. The acute injury code with 7th character A",
      "C. A follow-up code from Z09",
      "D. The acute injury code with the subsequent-encounter 7th character",
    ],
    correct: "D",
    explanation: "Aftercare Z codes aren't used for injuries or poisonings. For aftercare of an injury, assign the acute injury code with the 7th character for a subsequent encounter.",
    lookFor: "'Healing injury' plus 'routine care' — the guideline points to the injury code, not a Z code.",
    eliminate: "A and C are Z codes the guideline steers away from for injuries. B uses the active-treatment character for a routine visit.",
  },
  {
    topic: "Sequela",
    question: "A patient is seen for a scar that formed after a burn healed. How are the two codes ordered and marked?",
    options: [
      "A. The burn code with 7th character S first, then the scar code",
      "B. The scar code first, then the burn code with 7th character S",
      "C. The scar code with 7th character S first, then the burn code",
      "D. The burn code with 7th character A first, then the scar code",
    ],
    correct: "B",
    explanation: "The specific type of sequela (the scar) is sequenced first, followed by the injury code that caused it. The 7th character S is added only to the injury code, never to the sequela code.",
    lookFor: "'Scar after a healed burn' — a sequela of the burn.",
    eliminate: "A reverses the order. C puts the S on the sequela code. D uses the active-treatment character.",
  },
  {
    topic: "Coding Injuries",
    question: "In the inpatient setting, a patient has several injuries and the details for each one are documented. What is assigned?",
    options: [
      "A. T07 for unspecified multiple injuries",
      "B. T07 plus a code for each injury",
      "C. A separate code for each injury, unless a combination code exists",
      "D. A code for only the most serious injury",
    ],
    correct: "C",
    explanation: "Each injury gets its own code unless a combination code is provided. T07 shouldn't be assigned in the inpatient setting unless information for a more specific code isn't available.",
    lookFor: "'Details for each one are documented' — no reason to use T07.",
    eliminate: "A and B use T07 when specific information exists. D drops injuries that need to be coded.",
  },
  {
    topic: "Surgical Wounds",
    question: "A patient has a normal, healing surgical incision from a recent operation. Should a traumatic injury code (S00–T14.9) be assigned for the wound?",
    options: [
      "A. Yes, with the subsequent-encounter 7th character",
      "B. Yes, with the initial-encounter 7th character",
      "C. Yes, if the wound is on an extremity",
      "D. No — traumatic injury codes aren't used for normal, healing surgical wounds",
    ],
    correct: "D",
    explanation: "Traumatic injury codes are not to be used for normal, healing surgical wounds or to identify complications of surgical wounds.",
    lookFor: "'Normal, healing surgical incision.'",
    eliminate: "A, B, and C all apply a traumatic code that the guideline excludes.",
  },
  {
    topic: "Superficial Injuries",
    question: "A patient has a contusion over the same site as a fractured forearm bone. What is coded?",
    options: [
      "A. Only the fracture",
      "B. The contusion first, then the fracture",
      "C. Both, with the contusion sequenced last",
      "D. Only the contusion",
    ],
    correct: "A",
    explanation: "Superficial injuries such as abrasions or contusions aren't coded when they are associated with a more severe injury of the same site.",
    lookFor: "'Same site' plus a more severe injury.",
    eliminate: "B and C code the superficial injury. D drops the fracture.",
  },
  {
    topic: "Iatrogenic Injury",
    question: "A nerve is accidentally injured during a surgical procedure. How is it coded?",
    options: [
      "A. A nerve injury code from category S04",
      "B. The appropriate complication code(s), not a Chapter 19 injury code",
      "C. An injury code with the initial-encounter 7th character",
      "D. No code — it is expected in surgery",
    ],
    correct: "B",
    explanation: "Injury codes from Chapter 19 aren't assigned for injuries that occur during or as a result of a medical intervention. Assign the appropriate complication code(s) instead.",
    lookFor: "'During a surgical procedure' — caused by treatment.",
    eliminate: "A and C are injury codes. D drops a documented complication.",
  },
  {
    topic: "Fracture Defaults",
    question: "A record documents a 'fractured femur' with no mention of open or closed, or displaced or nondisplaced. How is it coded?",
    options: [
      "A. Open, displaced",
      "B. Open, nondisplaced",
      "C. Closed, displaced",
      "D. Closed, nondisplaced",
    ],
    correct: "C",
    explanation: "A fracture not indicated as open or closed is coded to closed, and a fracture not indicated as displaced or nondisplaced is coded to displaced.",
    lookFor: "Two missing descriptors — apply both defaults.",
    eliminate: "A and B default to open. D applies the wrong default for displacement.",
  },
  {
    topic: "Gustilo Default",
    question: "A provider documents an open fracture of the femur but does not state a Gustilo type. Which 7th character is assigned?",
    options: [
      "A. The type IIIA character",
      "B. The type IIIB character",
      "C. The closed fracture character",
      "D. The open fracture type I or II character",
    ],
    correct: "D",
    explanation: "The open-fracture 7th characters for the forearm, femur, and lower leg (including the ankle) are based on the Gustilo classification. When the type isn't specified, the type I or II character is assigned.",
    lookFor: "'Open fracture of the femur' with no Gustilo type.",
    eliminate: "A and B assume a more severe type. C ignores that the fracture is documented as open.",
  },
  {
    topic: "Physeal Fractures",
    question: "A child has a physeal fracture. How is it coded?",
    options: [
      "A. Only the code identifying the type of physeal fracture",
      "B. The physeal fracture code plus a code for the specific bone",
      "C. Only a code for the specific bone",
      "D. Two codes, one for each side of the growth plate",
    ],
    correct: "A",
    explanation: "For physeal fractures, assign only the code identifying the type of physeal fracture. Don't assign a separate code for the specific bone.",
    lookFor: "'Physeal' — one code for the physeal type.",
    eliminate: "B adds a bone code the guideline excludes. C and D don't follow the physeal-type coding.",
  },
  {
    topic: "Osteoporosis",
    question: "A patient with known osteoporosis fractures a vertebra after a minor fall that wouldn't normally break a healthy bone. Which code family?",
    options: [
      "A. A traumatic fracture code from S32",
      "B. A code from category M80",
      "C. Both S32 and M80",
      "D. A sequela code",
    ],
    correct: "B",
    explanation: "A code from category M80, not a traumatic fracture code, is used for any patient with known osteoporosis who suffers a fracture — even after a minor fall or trauma that wouldn't usually break a normal, healthy bone.",
    lookFor: "'Known osteoporosis' plus a minor fall.",
    eliminate: "A and C use a traumatic fracture code. D is unrelated to a new fracture.",
  },
  {
    topic: "Fracture Complications",
    question: "A patient is seen for a fracture that healed in poor alignment (malunion). Which group of 7th characters applies?",
    options: [
      "A. A, B, C",
      "B. K, M, N",
      "C. P, Q, R",
      "D. S only",
    ],
    correct: "C",
    explanation: "Complications of fractures are reported with the 7th characters for subsequent care with nonunion (K, M, N) or with malunion (P, Q, R).",
    lookFor: "'Healed in poor alignment' = malunion.",
    eliminate: "A is the initial-encounter group. B is nonunion. D is sequela.",
  },
  {
    topic: "Burn Sequencing",
    question: "A patient is admitted for treatment of first-degree burns of the arm, second-degree burns of the leg, and third-degree burns of the back. Which burn is sequenced first?",
    options: [
      "A. The first-degree burn",
      "B. The second-degree burn",
      "C. Whichever was documented first",
      "D. The third-degree burn",
    ],
    correct: "D",
    explanation: "When more than one burn is present, sequence first the code that reflects the highest degree of burn.",
    lookFor: "Multiple burns of different degrees.",
    eliminate: "A and B are lower degrees. C sequences by documentation order.",
  },
  {
    topic: "Same-Site Burns",
    question: "A record documents second- and third-degree burns of the right thigh. What is coded?",
    options: [
      "A. Only the third-degree code for the right thigh",
      "B. Both the second- and third-degree codes",
      "C. The second-degree code only",
      "D. Category T30",
    ],
    correct: "A",
    explanation: "Burns of the same anatomic site and the same side but of different degrees are classified to the subcategory identifying the highest degree — here the third-degree code (T24.311-).",
    lookFor: "Same site, same side, different degrees.",
    eliminate: "B codes both degrees. C picks the lower degree. D is a vague code that should rarely be used.",
  },
  {
    topic: "Non-Healing Burns",
    question: "A burn is not healing and necrosis of the burned skin is documented. How is it coded?",
    options: [
      "A. As a sequela of a burn",
      "B. As an acute (non-healed) burn",
      "C. As T30, burn of unspecified body region",
      "D. As a personal history code",
    ],
    correct: "B",
    explanation: "Non-healing burns are coded as acute burns, and necrosis of burned skin is coded as a non-healed burn.",
    lookFor: "'Not healing' and 'necrosis of burned skin.'",
    eliminate: "A treats an active wound as a late effect. C is vague. D isn't for an active burn.",
  },
  {
    topic: "Infected Burns",
    question: "A burn site is documented as infected. What is added?",
    options: [
      "A. Nothing — infection is included in the burn code",
      "B. A sequela 7th character",
      "C. A T30 code",
      "D. An additional code for the infection",
    ],
    correct: "D",
    explanation: "For any documented infected burn site, use an additional code for the infection.",
    lookFor: "'Infected burn site.'",
    eliminate: "A assumes the burn code covers infection. B and C don't identify the infection.",
  },
  {
    topic: "Underdosing",
    question: "Which 5th or 6th character on a T36–T50 code identifies UNDERDOSING?",
    options: [
      "A. 1",
      "B. 2",
      "C. 6",
      "D. 5",
    ],
    correct: "C",
    explanation: "Underdosing codes are from T36–T50 with a 5th or 6th character 6. Character 5 identifies an adverse effect, and characters 1–4 identify poisoning by intent.",
    lookFor: "The character that marks 'taking less than prescribed.'",
    eliminate: "A and B are poisoning intents. D is the adverse effect character.",
  },
  {
    topic: "Adverse Effect Sequencing",
    question: "A patient develops hepatitis from a correctly prescribed drug taken as directed. What is the order of coding?",
    options: [
      "A. The hepatitis first, then the drug's adverse-effect code (character 5)",
      "B. The drug's poisoning code first, then the hepatitis",
      "C. The drug's adverse-effect code first, then the hepatitis",
      "D. Only the hepatitis code",
    ],
    correct: "A",
    explanation: "For an adverse effect of a correctly prescribed and properly administered drug, code the nature of the adverse effect first, followed by the adverse-effect code for the drug (5th or 6th character 5).",
    lookFor: "'Correctly prescribed … taken as directed.'",
    eliminate: "B treats it as a poisoning. C reverses the order. D omits the drug.",
  },
  {
    topic: "Intent Unknown",
    question: "A patient is treated for a drug overdose, and the intent isn't documented anywhere. What intent is coded?",
    options: [
      "A. Undetermined",
      "B. Intentional self-harm",
      "C. Assault",
      "D. Accidental",
    ],
    correct: "D",
    explanation: "If the intent of a poisoning is unknown or unspecified, code the intent as accidental. Undetermined is used only when the record specifically says the intent cannot be determined.",
    lookFor: "'Intent isn't documented anywhere.'",
    eliminate: "A requires documentation that intent can't be determined. B and C assume a more serious intent.",
  },
  {
    topic: "Drug + Alcohol",
    question: "A reaction results from the interaction of a drug and alcohol. How is it classified?",
    options: [
      "A. An adverse effect",
      "B. A poisoning",
      "C. A toxic effect from T51",
      "D. Underdosing",
    ],
    correct: "B",
    explanation: "When a reaction results from the interaction of a drug and alcohol, it is classified as a poisoning.",
    lookFor: "'Interaction of a drug and alcohol.'",
    eliminate: "A requires proper use with no interacting substance. C: T51 is the toxic effect of alcohol, but the guideline classifies a drug-plus-alcohol interaction as a poisoning. D is taking less than prescribed.",
  },
  {
    topic: "Underdosing Sequencing",
    question: "Can an underdosing code be the principal or first-listed diagnosis?",
    options: [
      "A. Yes, whenever the patient stopped a medication",
      "B. Yes, but only in the outpatient setting",
      "C. No — underdosing codes are never principal or first-listed",
      "D. Yes, if a noncompliance code is also assigned",
    ],
    correct: "C",
    explanation: "Codes for underdosing should never be assigned as principal or first-listed codes. If the patient has a relapse or exacerbation of the condition because of the reduced dose, the medical condition itself is coded.",
    lookFor: "'Principal or first-listed' plus underdosing.",
    eliminate: "A, B, and D each create an exception that doesn't exist.",
  },
  {
    topic: "Toxic Effects",
    question: "A toxic effect code (T51–T65) is assigned. Is a separate external cause code needed to show intent?",
    options: [
      "A. No — toxic effect codes already include the intent",
      "B. Yes, always",
      "C. Yes, but only for assault",
      "D. Yes, but only for self-harm",
    ],
    correct: "A",
    explanation: "Toxic effect codes have an associated intent (accidental, intentional self-harm, assault, or undetermined), and no additional external cause code is required.",
    lookFor: "'Toxic effect' — a combination code.",
    eliminate: "B, C, and D add an external cause code that isn't needed.",
  },
  {
    topic: "Abuse Coding",
    question: "The record states 'child physical abuse' without any wording about it being suspected. Which code is sequenced first?",
    options: [
      "A. T76, suspected abuse",
      "B. T74, confirmed abuse",
      "C. Z04.72",
      "D. No abuse code",
    ],
    correct: "B",
    explanation: "If the documentation states abuse or neglect, it is coded as confirmed (T74). It is coded as suspected (T76) only if documented as suspected.",
    lookFor: "The words 'abuse' with no 'suspected.'",
    eliminate: "A requires 'suspected' documentation. C is for ruled-out cases. D drops a documented condition.",
  },
  {
    topic: "Device Pain",
    question: "A patient has pain from an implanted hip prosthesis. What is assigned?",
    options: [
      "A. A musculoskeletal pain code only",
      "B. A G89 code alone",
      "C. The Chapter 19 T code for the device-related pain plus a G89.18 or G89.28 code",
      "D. A status Z code for the prosthesis",
    ],
    correct: "C",
    explanation: "Pain associated with devices, implants, or grafts left in a surgical site is assigned to the appropriate Chapter 19 code, plus an additional G89 code (G89.18 or G89.28) for acute or chronic pain due to the device.",
    lookFor: "'Pain from an implanted device.'",
    eliminate: "A and B skip the Chapter 19 code. D reports status without the complication.",
  },
  {
    topic: "Kidney Transplant",
    question: "A kidney transplant patient has chronic kidney disease, and no rejection or failure is documented. What is coded?",
    options: [
      "A. T86.10 because the patient has a transplant",
      "B. T86.1- plus the CKD code",
      "C. Only Z94.0",
      "D. The CKD code (with transplant status) — not T86.1-",
    ],
    correct: "D",
    explanation: "T86.1- isn't assigned for post-transplant CKD unless a transplant complication such as failure or rejection is documented. Post-transplant CKD without a complication follows the CKD and kidney transplant status guideline.",
    lookFor: "'No rejection or failure documented.'",
    eliminate: "A and B assume a complication. C leaves out the CKD.",
  },
  {
    topic: "Burns — Internal and External",
    question: "A patient is admitted with both external and internal burns. What determines the principal or first-listed diagnosis?",
    options: [
      "A. The external burn, always",
      "B. The internal burn, always",
      "C. The circumstances of admission",
      "D. The burn with the largest surface area",
    ],
    correct: "C",
    explanation: "When a patient has both internal and external burns, the circumstances of admission govern the selection of the principal or first-listed diagnosis.",
    lookFor: "'Both internal and external burns.'",
    eliminate: "A and B pick a fixed order that the guideline doesn't set. D invents a surface-area rule.",
  },
  {
    topic: "Burns — Smoke Inhalation",
    question: "A patient is admitted for burn injuries and related conditions such as smoke inhalation and respiratory failure. What selects the principal diagnosis?",
    options: [
      "A. The circumstances of admission",
      "B. The burn, always",
      "C. The respiratory failure, always",
      "D. Category T30",
    ],
    correct: "A",
    explanation: "When a patient is admitted for burn injuries and related conditions such as smoke inhalation and/or respiratory failure, the circumstances of admission govern the selection of the principal or first-listed diagnosis.",
    lookFor: "Burns plus smoke inhalation or respiratory failure.",
    eliminate: "B and C set a fixed order the guideline doesn't set. D is a vague code that should rarely be used.",
  },
  {
    topic: "Abuse — Suspected",
    question: "A child with an injury is evaluated, and the provider documents SUSPECTED physical abuse pending investigation. What is reported?",
    options: [
      "A. T74 first, plus an assault external cause code and Y07",
      "B. T76 first, then the injury code — with no external cause or perpetrator code",
      "C. Z04.72",
      "D. T76 plus Y07",
    ],
    correct: "B",
    explanation: "Suspected abuse is sequenced first with T76 (suspected), followed by the injury. External cause and perpetrator codes are reported only for CONFIRMED cases — not for suspected ones.",
    lookFor: "'Suspected' — no external cause or perpetrator code.",
    eliminate: "A and D use confirmed-case codes. C is only for a suspected case that has been ruled out.",
  },
  {
    topic: "Transplant — Non-Kidney Organ",
    question: "A liver transplant patient has documented decline in the function of the transplanted liver, which the provider attributes to a transplant complication. What is reported?",
    options: [
      "A. Only the secondary code for the specific complication",
      "B. Only the transplant status code",
      "C. No code",
      "D. A T86 transplant complication code plus a secondary code identifying the complication",
    ],
    correct: "D",
    explanation: "A T86 code is assigned when a complication affects the function of the transplanted organ. Two codes are required: the T86 code and a secondary code that identifies the complication.",
    lookFor: "A documented complication affecting the function of the transplanted organ.",
    eliminate: "A and B each leave out one of the two required codes. C drops a documented complication.",
  },
  {
    topic: "Multiple Unspecified Drugs",
    question: "A patient takes several drugs, none of which are specified. Which code is assigned?",
    options: [
      "A. A code from T51",
      "B. A code from subcategory T50.91-",
      "C. A separate code for each unspecified drug",
      "D. T50.90-",
    ],
    correct: "B",
    explanation: "If multiple unspecified drugs, medicinal or biological substances were taken, assign the appropriate code from subcategory T50.91, poisoning by, adverse effect of, and underdosing of multiple unspecified drugs.",
    lookFor: "'Multiple' and 'unspecified' together.",
    eliminate: "A is toxic effect of alcohol. C can't be done for unspecified drugs. D is a single unspecified drug.",
  },
  {
    topic: "Prescribed + Nonprescribed Drug",
    question: "A patient takes a nonprescribed drug together with a correctly prescribed, properly administered drug and has a reaction from their interaction. How is it classified?",
    options: [
      "A. An adverse effect",
      "B. Underdosing",
      "C. A poisoning",
      "D. A toxic effect",
    ],
    correct: "C",
    explanation: "If a nonprescribed drug was taken with a correctly prescribed and properly administered drug, any drug toxicity or reaction from the interaction of the two is classified as a poisoning.",
    lookFor: "'Nonprescribed drug taken with a prescribed one.'",
    eliminate: "A requires proper use with no interacting substance. B is taking less than prescribed. D is for harmful substances outside medication use.",
  },
  {
    topic: "Delayed Presentation",
    question: "A patient waited several weeks before seeking treatment for a fracture and is now receiving first treatment. Which 7th character group applies?",
    options: [
      "A. Subsequent encounter",
      "B. Sequela",
      "C. Nonunion",
      "D. Initial encounter",
    ],
    correct: "D",
    explanation: "The initial-encounter 7th character should also be assigned for a patient who delayed seeking treatment for the fracture (or nonunion). The patient is beginning active treatment.",
    lookFor: "'Delayed seeking treatment' plus first active treatment.",
    eliminate: "A is for routine care after active treatment. B is for conditions that result from the injury. C requires a documented nonunion.",
  },
  {
    topic: "Complications of Care",
    question: "A patient has a documented postprocedural vascular complication. Where is the complication code usually found?",
    options: [
      "A. The circulatory chapter's complication code first (unless the complication is specifically indexed to a T code)",
      "B. A Chapter 19 T code, always",
      "C. A Y-code from Chapter 20",
      "D. No complication code is needed",
    ],
    correct: "A",
    explanation: "Intraoperative and postprocedural complication codes are found within the body system chapters. They are sequenced first, followed by a code for the specific complication if applicable — unless the complication is specifically indexed to a T code in Chapter 19.",
    lookFor: "A vascular complication — the circulatory chapter has its own complication codes.",
    eliminate: "B ignores the body-system chapters. C is external cause coding, which is never first-listed. D drops a documented complication.",
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

export default function Icd10Chapter19PracticeQuizPage() {
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
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 19 · PRACTICE QUIZ</p>
        <h1 style={{ margin: 0, fontSize: "clamp(24px, 5vw, 38px)" }}>Chapter 19 Practice Quiz</h1>
        <p style={{ margin: "10px 0 0", fontSize: "15.5px", lineHeight: 1.5 }}>34 original scenario questions with elimination tricks, covering 7th characters, injuries, fractures, burns, adverse effects vs. poisoning vs. underdosing, abuse, and complications of care.</p>
      </header>

      <nav aria-label="ICD-10 quiz navigation" style={navStyle}>
        <Link href="/icd10" style={navLinkStyle}>ICD-10-CM home</Link>
        <Link href="/icd10/chapter-19-guidelines-reviewer" style={navLinkStyle}>Reviewer Part 1</Link>
        <Link href="/icd10/chapter-19-guidelines-reviewer-part-2" style={navLinkStyle}>Reviewer Part 2</Link>
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
