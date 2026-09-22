import { FlashcardPlayer, TEAL, type FlashItem } from "../../surgery/_digestive/players";

const cards: FlashItem[] = [
  // ---- Code map ----
  { topic: "Code map", front: "Where is each E/M category?", back: "Telemedicine 98000–98016 · office 99202–99215 · hospital 99221–99239 · consultations 99242–99255 · emergency 99281–99285 · critical care 99291–99292 · nursing facility 99304–99316 · home or residence 99341–99350 · prolonged 99358–99359, 99415–99418 · preventive 99381–99429 · unlisted 99499." },
  { topic: "Code map", front: "What is the four-part pattern of an E/M descriptor?", back: "Unique code number → place or type of service → content of the service → time. Read left to right and you can rebuild the code." },
  { topic: "Code map", front: "Category vs. subcategory vs. level?", back: "Category = where or what kind of visit. Subcategory = patient status (new or established, initial or subsequent). Level = how much work, the last digit." },
  { topic: "Code map", front: "Which code was deleted at the start of the new-patient office range?", back: "99201. The first new-patient office code is 99202." },
  { topic: "Code map", front: "Which prolonged codes with direct contact were deleted?", back: "99354–99357. Use 99417 (office) or 99418 (inpatient) for prolonged time on the date of the visit." },
  { topic: "Code map", front: "QHP vs. clinical staff?", back: "A QHP can report E/M services on their own (NP, PA). Clinical staff work under supervision and cannot bill E/M on their own." },
  { topic: "Code map", front: "Which E/M codes may not need the provider present?", back: "99211 (established office visit) and 99281 (ED) may be performed by clinical staff." },

  // ---- New vs established ----
  { topic: "New vs. established", front: "New patient?", back: "No professional service from the physician or QHP, or another of the EXACT same specialty and subspecialty in the same group, within the past 3 years." },
  { topic: "New vs. established", front: "Established patient?", back: "One who HAS received a professional service from the physician or QHP, or a same-specialty, same-subspecialty colleague in the same group, within the past 3 years." },
  { topic: "New vs. established", front: "A different specialty in the same group saw the patient last year — new or established?", back: "Still NEW. It has to be the exact same specialty and subspecialty." },
  { topic: "New vs. established", front: "Locum tenens or covering doctor — who classifies the patient?", back: "The absent doctor's status is used: the patient is classified as that doctor would have classified them." },
  { topic: "New vs. established", front: "Do NPs and PAs count as the same specialty?", back: "Yes. They are treated as the same specialty and subspecialty as the physician they work with." },
  { topic: "New vs. established", front: "Modifier 25 on an E/M — does it need a different diagnosis?", back: "No. It needs a significant, separately identifiable E/M. The same condition can prompt both the visit and the procedure." },
  { topic: "New vs. established", front: "Discharged and readmitted to the same hospital on the same date?", back: "One stay. Report a subsequent care service instead of a discharge or initial service." },
  { topic: "New vs. established", front: "Split or shared visit — who reports?", back: "By time: the professional who spent the majority of the time. By MDM: the one who made or approved the management plan and takes responsibility for it." },
  { topic: "New vs. established", front: "Emergency department — new or established?", back: "No split. ED codes fit any patient; choose the code by MDM." },
  { topic: "New vs. established", front: "Initial vs. subsequent (hospital, nursing facility)?", back: "Initial = the patient has not yet received professional service from the physician or a same-specialty group colleague during this stay. Subsequent = they have." },
  { topic: "New vs. established", front: "A nursing facility resident is seen in the doctor's office — which category?", back: "Office or other outpatient (99202–99215). The place of the face-to-face encounter decides, not where the patient lives." },

  // ---- Choosing the level ----
  { topic: "Choosing the level", front: "How is a level-based E/M level picked in 2026?", back: "Either by the level of MDM (2 of 3 elements met or exceeded) OR by total provider time on the date of the encounter." },
  { topic: "Choosing the level", front: "Does the extent of history and exam pick the level?", back: "No. A medically appropriate history and/or exam is done, but its extent is not used to choose the level." },
  { topic: "Choosing the level", front: "The four MDM levels?", back: "Straightforward, low, moderate, high." },
  { topic: "Choosing the level", front: "The three MDM elements?", back: "Number and complexity of PROBLEMS addressed · amount and complexity of DATA reviewed and analyzed · RISK of complications or management." },
  { topic: "Choosing the level", front: "How many of the three MDM elements are needed?", back: "At least TWO must be met or exceeded for the level." },
  { topic: "Choosing the level", front: "Data for LOW MDM?", back: "Limited: any 2 items from Category 1 (external notes, each unique test result, each unique test ordered), OR an independent historian." },
  { topic: "Choosing the level", front: "Data for MODERATE MDM?", back: "One of three categories: 3 items from Category 1, OR independent interpretation of a test, OR discussion of management with an outside professional." },
  { topic: "Choosing the level", front: "Data for HIGH MDM?", back: "Extensive: at least 2 of the 3 categories." },
  { topic: "Choosing the level", front: "Risk examples — moderate?", back: "Prescription drug management · decision about minor surgery with risk factors · decision about elective major surgery without risk factors · care limited by social determinants of health." },
  { topic: "Choosing the level", front: "Risk examples — high?", back: "Drug therapy needing intensive monitoring for toxicity · elective major surgery with risk factors · emergency major surgery · decision to hospitalize · parenteral controlled substances · a DNR decision because of a poor prognosis." },
  { topic: "Choosing the level", front: "Risk examples — low?", back: "Over-the-counter drugs · minor surgery without identified risk factors · physical or occupational therapy · IV fluids without additives." },
  { topic: "Choosing the level", front: "What is a STABLE chronic illness?", back: "Expected to last at least a year, and at the patient's own treatment goal. Poorly controlled blood pressure is NOT stable even if it is not changing." },
  { topic: "Choosing the level", front: "Time or MDM for the emergency department?", back: "MDM only. ED codes (99281–99285) have no time thresholds." },
  { topic: "Choosing the level", front: "Do comorbidities count toward MDM?", back: "Only when they are addressed and make the data or risk bigger. They do not count just by being present." },
  { topic: "Choosing the level", front: "A separately billed test interpretation — counts toward MDM?", back: "No. When the interpretation or report has its own CPT code, it does not count toward MDM. The same goes for a separately billed discussion of management." },
  { topic: "Choosing the level", front: "One stable chronic illness + 2 unique labs + prescription drug management — level?", back: "Low MDM (99213 established). Problems = low, data = low, risk = moderate; only one element is moderate." },

  // ---- Time ----
  { topic: "Time", front: "Office time thresholds — NEW patient?", back: "99202 15 min · 99203 30 · 99204 45 · 99205 60." },
  { topic: "Time", front: "Office time thresholds — ESTABLISHED patient?", back: "99212 10 min · 99213 20 · 99214 30 · 99215 40." },
  { topic: "Time", front: "Hospital initial care time?", back: "99221 40 min · 99222 55 · 99223 75." },
  { topic: "Time", front: "Hospital subsequent care time?", back: "99231 25 min · 99232 35 · 99233 50." },
  { topic: "Time", front: "Discharge day codes?", back: "99238 = 30 minutes or less · 99239 = more than 30 minutes. Time only." },
  { topic: "Time", front: "What counts as total time?", back: "The provider's own time on the date: preparing, getting history, exam, counseling, ordering, referring, documenting, care coordination. Face-to-face and non-face-to-face, on or off the unit." },
  { topic: "Time", front: "What does NOT count as time?", back: "Separately billed services · travel · general teaching · clinical staff time. When two providers meet the patient together, count only one person's time." },
  { topic: "Time", front: "Rounding up minutes?", back: "No. The listed minutes must be met or exceeded." },
  { topic: "Time", front: "Two visits by the same provider on the same date?", back: "Report a single service and add up the time (or combine the decision making)." },
  { topic: "Time", front: "Established patient, low MDM, but 42 minutes of total time on the date?", back: "99215 by time, because 42 meets the 40 minutes needed." },

  { topic: "Time", front: "Office consultation time thresholds?", back: "99242 20 min · 99243 30 · 99244 40 · 99245 55. 99417 goes with 99245 and starts at 70 minutes." },
  { topic: "Time", front: "Inpatient or observation consultation time thresholds?", back: "99252 35 min · 99253 45 · 99254 60 · 99255 80. 99418 goes with 99255 and starts at 95 minutes." },

  // ---- Critical care ----
  { topic: "Critical care", front: "What is critical care?", back: "Medical care delivered directly to a critically ill or injured patient — one whose vital organ system is suddenly impaired so that life-threatening worsening is very likely without action." },
  { topic: "Critical care", front: "Vital organ system failures (examples)?", back: "Central nervous system failure, circulatory failure, shock, renal, hepatic, metabolic, or respiratory failure." },
  { topic: "Critical care", front: "99291 and 99292?", back: "99291 = first 30–74 minutes, once per date. +99292 = each additional block of up to 30 minutes beyond the first 74." },
  { topic: "Critical care", front: "Critical care time ladder?", back: "Under 30 = ordinary E/M · 30–74 = 99291 · 75–104 = +99292 ×1 · 105–134 = ×2 · 135–164 = ×3 · 165–194 = ×4." },
  { topic: "Critical care", front: "Does critical care time need to be continuous?", back: "No. Add up all the time on the date, even if split into several visits." },
  { topic: "Critical care", front: "What is NOT critical care time?", back: "Time when the physician is not immediately available (phone calls, even from the hospital) · unit time that does not treat this patient (meetings) · time in separately reported procedures." },
  { topic: "Critical care", front: "Services packaged into critical care for the professional?", back: "Cardiac output measurement interpretation (93598) · chest x-rays (71045, 71046) · pulse oximetry · blood gases · gastric intubation · temporary pacing (92953) · ventilatory management · vascular access. Facilities may report them separately." },
  { topic: "Critical care", front: "A stable patient happens to be in the ICU?", back: "Not critical care. Use another appropriate E/M code." },
  { topic: "Critical care", front: "Critical care family by age and location?", back: "Adult or older than 71 months: 99291–99292 · inpatient 28 days or less 99468–99469 · inpatient 29 days to 71 months 99471–99476 · transport 24 months or less 99466–99467." },
  { topic: "Critical care", front: "74 minutes + 30 minutes later the same day — codes?", back: "104 minutes total → 99291 ×1 + 99292 ×1." },

  // ---- Prolonged ----
  { topic: "Prolonged services", front: "99417 in one line?", back: "Prolonged total time (with or without contact) on the date of an office or outpatient visit, each 15 minutes. Used only when the visit was leveled by TIME." },
  { topic: "Prolonged services", front: "Where does the first 99417 start?", back: "New patient (99205): at 75 minutes. Established (99215): at 55 minutes. Then one unit per further full 15 minutes." },
  { topic: "Prolonged services", front: "Where does the first 99418 start?", back: "15 minutes after the top code's time: 99223 at 90 · 99233 at 65 · 99236 at 100 · 99255 at 95 · 99310 at 60." },
  { topic: "Prolonged services", front: "Which codes cannot be reported with 99417 or 99418 on the same date?", back: "Psychotherapy add-ons 90833, 90836, 90838, and prolonged codes 99358 and 99359." },
  { topic: "Prolonged services", front: "99418?", back: "The inpatient and observation version of 99417, each 15 minutes, used with the highest-level codes such as 99223, 99233, 99236, 99255, 99306, and 99310." },
  { topic: "Prolonged services", front: "99358 and 99359?", back: "Prolonged service WITHOUT direct patient contact on a date OTHER than the visit. 99358 = first hour (30–74 min) · +99359 = each extra 30 minutes (the final 15–30 minutes count)." },
  { topic: "Prolonged services", front: "Can 99358 be reported on the same date as an office visit?", back: "No. It is not reported with an E/M visit on the same date, nor with 99417 or 99418." },
  { topic: "Prolonged services", front: "99415 and 99416?", back: "Prolonged CLINICAL STAFF time in the office with physician supervision. 99415 = first hour · +99416 = each additional 30 minutes. Not with 99417; facilities may not report them." },
  { topic: "Prolonged services", front: "99360?", back: "Standby service requested by another physician, each 30 minutes. Under 30 minutes is not reported, and later units need a full 30 minutes." },
  { topic: "Prolonged services", front: "Smallest prolonged unit for 99417 and 99418?", back: "15 minutes. Do not report for any increment shorter than 15 minutes." },
  { topic: "Prolonged services", front: "Established, 75 minutes total — codes?", back: "99215 + 99417 ×2 (55 minutes = first unit, 70 minutes = second)." },
  { topic: "Prolonged services", front: "New patient seen twice the same day, 45 + 45 minutes — codes?", back: "90 minutes → 99205 + 99417 ×2 (75 minutes = first unit, 90 minutes = second)." },

  // ---- Deck vs 2026 ----
  { topic: "Deck vs. 2026", front: "Old system: the seven components?", back: "Three key (history, exam, MDM), three contributory (counseling, coordination of care, nature of the presenting problem), and time. This is old vocabulary and is not used to pick levels in 2026." },
  { topic: "Deck vs. 2026", front: "Old '3 of 3' and '2 of 3' rules?", back: "Old system only. Today, 2 of 3 applies to MDM elements, and time is the other route." },
  { topic: "Deck vs. 2026", front: "Old 'more than 50% counseling makes time the key factor'?", back: "Old rule. In 2026, total time on the date is used, with no 50% test." },
];

export default function EmFlashcardsPage() {
  return (
    <FlashcardPlayer
      kicker="99,000 SERIES · FLASHCARDS"
      title="5-Minute Commute Review"
      nav={[
        { href: "/cpt/e-m/99,000", label: "99,000 Series home" },
        { href: "/cpt/e-m/99000-series-guidelines-reviewer", label: "Reviewer Part 1" },
        { href: "/cpt/e-m/99000-series-guidelines-reviewer-part-2", label: "Part 2" },
        { href: "/cpt/e-m/99000-series-guidelines-reviewer-part-3", label: "Part 3" },
        { href: "/cpt/e-m/99000-series-practice-quiz", label: "Quiz" },
        { href: "/cpt/e-m/99000-series-discussion-guide", label: "Discussion Guide" },
      ]}
      cards={cards}
      theme={TEAL}
    />
  );
}
