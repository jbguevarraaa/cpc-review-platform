import { ReviewerShell, type Subsection } from "../_em/kit";

const sections: Subsection[] = [
  {
    id: "em-layout",
    n: 1,
    title: "How the E/M Section Is Built",
    range: "98000–98016 · 99202–99499",
    intro: [
      "E/M stands for evaluation and management. These codes describe a provider's work of evaluating a patient's condition and deciding how to manage it. The section is made of categories (where or what kind of visit), subcategories (usually new versus established patient, or initial versus subsequent), and levels (how much work).",
      "Every E/M code with levels is written in the same four-part pattern: a unique code number, then the place or type of service, then the content of the service, then the time. Read a descriptor left to right and you can rebuild the code from scratch.",
      "One warning before you start: your training deck shows the older 1990s way of picking a level (seven components, history and exam types). CPT 2026 works differently. This reviewer follows the 2026 codebook and tells you where the deck differs.",
    ],
    definitions: [
      ["Category", "the broad place or kind of visit — office, hospital, emergency department, and so on. In the deck this is the 'third digit'."],
      ["Subcategory", "usually the patient's status — new or established, initial or subsequent. The deck calls it the 'fourth digit'."],
      ["Level of service", "how much work the visit took — the last digit. Most categories have three to five levels, and the levels of one category are not interchangeable with another's."],
      ["QHP / QHCP", "a qualified health care professional: someone allowed to report E/M services on their own, such as a nurse practitioner or physician assistant. This is different from 'clinical staff', who work under supervision and cannot bill E/M on their own."],
    ],
    steps: [
      "① Where was the patient seen — office, hospital, emergency department, nursing facility, home, or by telemedicine?",
      "② What is the patient's status — new or established, initial or subsequent?",
      "③ Is it a level-based visit, or a time-only service such as critical care or prolonged service?",
      "④ For a level-based visit, pick the level by MEDICAL DECISION MAKING or by TOTAL TIME on the date (Part 2).",
      "⑤ Check the notes above the category: many have special instructions that change the answer.",
    ],
    categories: [
      {
        name: "Code map (categories and where they live)",
        codes: [
          ["98000–98016", "Telemedicine: synchronous audio-video and audio-only visits (new and established patient)"],
          ["99202–99205 · 99211–99215", "OFFICE or other outpatient visits — new patient · established patient"],
          ["99221–99239", "HOSPITAL inpatient or observation care — initial, subsequent, same-day admission and discharge, and discharge"],
          ["99242–99255", "CONSULTATIONS — office or outpatient · inpatient or observation"],
          ["99281–99285", "EMERGENCY DEPARTMENT services — new or established patient"],
          ["99291–99292", "CRITICAL CARE — the first 30–74 minutes · each additional 30 minutes"],
          ["99466–99480", "Neonatal and pediatric critical and intensive care (transport, and inpatient by age)"],
          ["99304–99316", "NURSING FACILITY services — initial, subsequent, and discharge"],
          ["99341–99350", "HOME or RESIDENCE services — new patient · established patient"],
          ["99358–99359 · 99415–99418", "PROLONGED services — without direct patient contact · clinical staff time · with or without direct contact on the date of the E/M visit"],
          ["99360", "STANDBY services"],
          ["99366–99380", "Case management (team conferences) and care plan oversight"],
          ["99381–99429", "PREVENTIVE medicine services and counseling"],
          ["99499", "Unlisted E/M service"],
        ],
      },
    ],
    rules: [
      "The E/M section runs 98000–98016 and 99202–99499. 99201 was deleted; 99202 is the first new-patient office code.",
      "E/M codes with levels include a medically appropriate history and/or examination. The extent of the history and exam is NOT one of the things used to pick the level of these codes.",
      "Each code's descriptor and the guidelines above its category are what decide the answer. Always read the special instructions for the category first.",
      "Most E/M services need a face-to-face encounter with the patient and/or family or caregiver. (99211 and 99281 may be performed by clinical staff.)",
    ],
    tips: [
      "Think of the code as a sentence: place → patient status → content → time.",
      "When two E/M categories look possible, go back to WHERE the patient was, because 'place of service' is the second part of every descriptor.",
    ],
    traps: [
      "Using the deck's code layout (99201 to 99292, then 99304 to 99350, then 99354 to 99499). That grouping is out of date; use the code map above.",
      "Assuming level 1 of one category means the same thing as level 1 of another.",
    ],
    cases: [
      {
        label: "HARD SCENARIO",
        title: "A nursing facility resident seen in the office",
        scenario: "A patient who lives in a nursing facility is brought to a doctor's office for a visit. Which category applies?",
        steps: [
          "The place of service is decided by where the face-to-face encounter happens — not by where the patient lives.",
          "The encounter took place in the office, so it is an office or other outpatient visit.",
          "Then pick new or established, and the level by MDM or time.",
        ],
        answer: "Office or other outpatient code (99202–99215), not a nursing facility code.",
      },
    ],
  },
  {
    id: "em-common",
    n: 2,
    title: "Rules Common to All E/M Services",
    range: "New vs. established · time · concurrent care · transfer of care · counseling",
    intro: [
      "These are the rules that apply no matter which E/M category you use. Rules that help with the exam are added here too. The deck teaches six of them: the levels of service, new and established patients, time, concurrent care and transfer of care, counseling, and services reported separately.",
    ],
    definitions: [
      ["Professional services", "face-to-face services given by a physician or other QHP who can report E/M services. They are what count when deciding whether a patient is new or established."],
      ["New patient", "one who has not received any professional service from the physician or QHP, or another physician or QHP of the EXACT same specialty and SUBSPECIALTY in the same group practice, within the past 3 years."],
      ["Established patient", "one who HAS received a professional service from that physician or QHP, or a same-specialty, same-subspecialty colleague in the same group, within the past 3 years."],
      ["Locum tenens", "a doctor covering for another doctor who is away. The patient is classified as the absent doctor would have classified them."],
      ["Initial vs. subsequent service", "for hospital and nursing facility care: 'initial' means the patient has not yet received professional services from the physician or a same-specialty group colleague during that stay; 'subsequent' means they have."],
      ["Concurrent care", "the same kind of services given to one patient by more than one physician or QHP on the same date. No special reporting is needed; each provider reports their own codes. (This is a deck definition — the 2026 guidelines do not print a separate heading for it.)"],
      ["Transfer of care", "one physician gives up management of a patient and another agrees to take over. Services that take over the patient's entire care, or the care of a specific condition, are reported with new or established patient codes, not consultation codes."],
      ["Counseling", "in the deck: a discussion with the patient or family about diagnostic results, prognosis, treatment options and their risks and benefits, and follow-up instructions. In 2026 counseling is simply part of the time a provider spends on the patient."],
    ],
    steps: [
      "① New or established? Look back 3 years for a professional service from the same specialty AND subspecialty in the same group.",
      "② Is the provider a locum tenens or covering? Then use the absent provider's status for the patient.",
      "③ Is it an emergency department visit? Then there is no new or established — ED codes fit any patient.",
      "④ Are you using time? Add up the provider's own time on the date of the encounter (see below).",
      "⑤ Was a separate procedure done the same day? It can be reported separately.",
    ],
    categories: [
      {
        name: "What counts as TIME in 2026 (for level-based codes)",
        codes: [
          ["INCLUDED — before and during", "Preparing to see the patient (for example reviewing tests) · getting or reviewing a separately obtained history · a medically appropriate exam"],
          ["INCLUDED — the work itself", "Counseling and educating the patient or family · ordering medications, tests, or procedures · referring and communicating with other health professionals"],
          ["INCLUDED — after", "Documenting · independently interpreting results (not billed separately) · care coordination (not billed separately)"],
          ["NOT INCLUDED", "Time in services that are billed separately · travel · general teaching not about this patient · clinical staff time"],
          ["HOW IT IS ADDED", "Total time is the provider's own time on the date of the encounter, face-to-face AND non-face-to-face, wherever they are (on or off the unit, in or out of the office). When two providers meet the patient together, count only one person's time."],
        ],
      },
    ],
    rules: [
      "The three-year look-back is about the EXACT same specialty and subspecialty in the same group practice. A different specialty in the same group does not make the patient established.",
      "Nurse practitioners and physician assistants working with a physician are treated as working in the same specialty and subspecialty as that physician.",
      "A covering or on-call provider classifies the patient as the absent provider would have. If the patient has never been seen in the group, they are new; if they are established to the original physician, they are established.",
      "ALL patients seen in the emergency department are handled the same way — there is no split between new and established in the ED.",
      "Time for level selection is the provider's total time on the date of the encounter. The deck's older 'face-to-face time' and 'unit/floor time' measures are not used for level-based E/M codes in 2026.",
      "Hospital, observation, and nursing facility care are 'per day' services: several visits on one date in the same setting are reported as ONE service, using the total time or the combined MDM. Your deck applies the same idea to an office patient seen twice in one day (see Part 3), but the codebook prints this rule for those facility settings.",
      "If a patient is discharged and readmitted to the SAME facility on the same date, report a subsequent care service (not a new discharge or initial service). That counts as one stay. A move to a different facility is a different stay. A change from observation to inpatient within a facility is also one stay.",
      "Split or shared visit: when a physician and a QHP work together on one service, the one who did a substantive part reports it. If the level is picked by time, the one who spent the MAJORITY of the time reports it. If it is picked by MDM, the one who made or approved the management plan and takes responsibility for it reports it.",
      "Modifier 25 on an E/M with a procedure the same day does NOT need a different diagnosis. The E/M must be significant and separately identifiable, and it may be prompted by the same condition.",
      "Any specifically identifiable procedure or service done the same day may be reported separately. If a significant, separately identifiable E/M was also needed the same day as a procedure, report it with modifier 25.",
      "Ordering a test and its interpretation: if the doctor bills the interpretation with its own CPT code, that work does not count toward the E/M level.",
      "A consultation is an opinion requested by another physician, QHP, or appropriate source, and communicated back in writing. A patient- or family-initiated request is not a consultation. A visit that takes over the patient's care is not a consultation.",
    ],
    tips: [
      "New or established is one question: 'Has this specialty and subspecialty, in this group, seen the patient in the last 3 years?' Yes = established.",
      "Time is the provider's own time on the date. If it is not documented as the provider's time, do not add it.",
    ],
    traps: [
      "Calling a patient established because a different specialty in the group saw them. It has to be the EXACT same specialty and subspecialty.",
      "Adding nurse or medical assistant time to the provider's total time.",
      "Counting the time for a billed procedure, such as a biopsy, in the E/M time.",
      "Reporting a consultation when the doctor actually took over management of the patient.",
    ],
    cases: [
      {
        label: "HARD SCENARIO",
        title: "Same condition, same day, procedure plus visit",
        scenario: "A patient with a painful skin lesion is seen by a doctor. The doctor evaluates the problem, decides on treatment, and removes the lesion the same day. The visit was more than the usual pre-procedure check. Can the E/M be reported, and does it need a different diagnosis?",
        steps: [
          "A procedure has its own included pre-procedure work, so the E/M must be significant and separately identifiable to be reported.",
          "Here the doctor evaluated the problem and chose treatment beyond the usual pre-procedure work.",
          "The codebook says different diagnoses are not required for reporting the procedure and the E/M on the same date.",
        ],
        answer: "Report the procedure and the E/M with modifier 25 — the same diagnosis is allowed.",
      },
      {
        label: "HARD SCENARIO",
        title: "Discharged and readmitted the same day",
        scenario: "A patient is discharged from a hospital in the morning and readmitted to the same hospital that afternoon. Which service is reported for the afternoon?",
        steps: [
          "The patient is discharged and readmitted to the SAME facility on the same calendar date.",
          "For E/M reporting this is a single stay.",
        ],
        answer: "A subsequent hospital care service — not a new discharge or initial service.",
      },
      {
        label: "HARD SCENARIO",
        title: "Physician and NP share a hospital visit",
        scenario: "A physician and a nurse practitioner in the same group both work on one hospital visit. The NP spends 30 minutes and the physician spends 15 minutes. The level is picked by total time. Who reports it?",
        steps: [
          "This is a split or shared visit picked by TIME.",
          "The professional who spent the majority of the time reports the service.",
          "The NP spent 30 of the 45 minutes.",
        ],
        answer: "The NP reports the visit (if it was picked by MDM instead, the one who made or approved the plan reports it).",
      },
      {
        label: "HARD SCENARIO",
        title: "A covering doctor sees a patient for the first time",
        scenario: "Dr. Lee is away. Dr. Kim, a same-specialty colleague in the same group, covers and sees Dr. Lee's patient in the office. Dr. Lee saw this patient 8 months ago.",
        steps: [
          "The covering provider classifies the patient as the absent provider would have.",
          "Dr. Lee (same specialty, same group) saw the patient within 3 years, so the patient is ESTABLISHED to the group.",
          "So Dr. Kim reports an established patient office code.",
        ],
        answer: "An established patient office visit (99212–99215).",
      },
      {
        label: "HARD SCENARIO",
        title: "Emergency department, first time ever",
        scenario: "A patient who has never been to this hospital is seen in its emergency department.",
        steps: [
          "The emergency department category makes no distinction between new and established patients.",
          "Pick the ED code (99281–99285) by the level of medical decision making.",
        ],
        answer: "An emergency department code (99281–99285) — no 'new patient' needed.",
      },
      {
        label: "HARD SCENARIO",
        title: "Took over the patient's care — is it a consultation?",
        scenario: "A surgeon is asked to take over the entire ongoing care of a patient's hernia problem. No one asked for an opinion to send back.",
        steps: [
          "A consultation is an opinion requested by another provider, sent back in writing.",
          "Here the surgeon takes over management. Services that take over the patient's entire care, or the care of a specific problem, use new or established patient codes.",
        ],
        answer: "A new or established patient E/M code, not a consultation code.",
      },
    ],
  },
];

export default function EmReviewerPart1Page() {
  return (
    <ReviewerShell
      part={1}
      subtitle="Part 1 — How the E/M Section Is Built & Rules Common to All E/M Services (98000–99499)"
      sections={sections}
      intro={
        <>
          <strong>How this series is organized.</strong> The 99,000 series follows your training deck: (1) E/M guidelines, (2) Code lay-out, (3) Critical care services, (4) Prolonged services. Part 1 covers the E/M layout and the rules common to every E/M service. Part 2 covers picking the level — and where the deck&apos;s older system differs from 2026. Part 3 covers critical care and prolonged services, with your three case questions solved step by step. This series sits beside your existing E/M reviewer and does not replace it. The rules are checked against the 2026 CPT codebook and paraphrased, not copied.
        </>
      }
    />
  );
}
