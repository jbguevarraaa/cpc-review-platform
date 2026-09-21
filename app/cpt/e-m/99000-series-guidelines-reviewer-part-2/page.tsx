import { ReviewerShell, type Subsection } from "../_em/kit";
import { TwoRoutesDiagram, MdmGridDiagram } from "../_em/diagrams";

const sections: Subsection[] = [
  {
    id: "pick-level",
    n: 1,
    title: "Picking the Level in 2026: MDM or Total Time",
    range: "99202–99215 · 99221–99239 · 99242–99255 · 99281–99285",
    intro: [
      "For E/M codes that have levels, CPT 2026 gives you two ways to pick the level. Either use the level of MEDICAL DECISION MAKING (MDM), or use the TOTAL TIME the provider spent on the date of the encounter. You may use whichever one the note supports.",
      "History and exam are still done and documented, but only as much as is 'medically appropriate'. The amount of history or exam no longer decides the level. This is the biggest difference between the 2026 codebook and your training deck.",
    ],
    diagram: <TwoRoutesDiagram />,
    definitions: [
      ["Medical decision making (MDM)", "the work of figuring out what is wrong, judging how a condition is doing, and choosing a plan. It has three elements: the problems addressed, the data reviewed and analyzed, and the risk of the management."],
      ["Four MDM levels", "straightforward, low, moderate, and high."],
      ["Problem addressed", "a problem counts when the provider evaluates or treats it at this visit — including deciding not to test or treat it after weighing risks and benefits. A note that another professional is handling it, with no evaluation, does not count."],
      ["Shared decision making", "asking about the patient's and family's preferences, educating them, and explaining the risks and benefits of the options."],
      ["Met or exceeded", "the wording for time. The minutes listed on the code must be reached; there is no 'halfway' rule between levels."],
    ],
    steps: [
      "① Which category and patient status? That names the family of codes.",
      "② Route 1: rate each of the three MDM elements, then take the level where at least TWO of the three are met or exceeded.",
      "③ Route 2: add up the provider's own time on the date. Pick the highest code whose listed minutes have been met or exceeded.",
      "④ Choose the route the documentation supports. If both work, the note decides which is stronger.",
      "⑤ If the visit was leveled by time and the time goes well past the top code, add the prolonged-service code (Part 3).",
    ],
    categories: [
      {
        name: "Office or other outpatient (MDM level · minutes to meet or exceed)",
        codes: [
          ["99202 · 99212", "Straightforward · new 15 min · established 10 min"],
          ["99203 · 99213", "Low · new 30 min · established 20 min"],
          ["99204 · 99214", "Moderate · new 45 min · established 30 min"],
          ["99205 · 99215", "High · new 60 min · established 40 min"],
          ["99211", "Established patient visit that may not need the provider present — no MDM or time requirement"],
        ],
      },
      {
        name: "Consultations (MDM level · minutes to meet or exceed)",
        codes: [
          ["99242 · 99252", "Straightforward · office 20 min · inpatient 35 min"],
          ["99243 · 99253", "Low · office 30 min · inpatient 45 min"],
          ["99244 · 99254", "Moderate · office 40 min · inpatient 60 min"],
          ["99245 · 99255", "High · office 55 min · inpatient 80 min. 99417 goes with 99245 (starts at 70); 99418 goes with 99255 (starts at 95)"],
        ],
      },
      {
        name: "Hospital inpatient or observation",
        codes: [
          ["99221 · 99222 · 99223", "Initial care — straightforward or low (40 min) · moderate (55 min) · high (75 min)"],
          ["99231 · 99232 · 99233", "Subsequent care — straightforward or low (25 min) · moderate (35 min) · high (50 min)"],
          ["99234 · 99235 · 99236", "Same-date admission and discharge — straightforward or low (45 min) · moderate (70 min) · high (85 min)"],
          ["99238 · 99239", "Discharge day — 30 minutes or less · more than 30 minutes (this is time only)"],
        ],
      },
    ],
    rules: [
      "To reach a level of MDM, at least two of the three elements must be met or exceeded for that level.",
      "Comorbidities and underlying diseases do not count by themselves — they count only when they are addressed at the visit and make the data or risk bigger.",
      "The final diagnosis does not by itself decide the complexity. A worrying symptom can drive a high-level work-up even when the final diagnosis turns out to be mild. Several lower-severity problems can add up to a higher risk.",
      "When the provider bills a separate CPT code that includes interpreting a test, that interpretation does not count toward the MDM. A billed discussion of management with another professional does not count either.",
      "Time is the total time on the date, and only distinct time is added (two people in the same meeting count once). Time in separately reported services does not count.",
      "Emergency department codes (99281–99285) are chosen by MDM only: they have NO time thresholds. 99211 has neither an MDM nor a time requirement, and 99281 has no MDM requirement either.",
      "Levels are not interchangeable between categories: 99202 and 99212 have the same MDM name (straightforward) but different time thresholds.",
    ],
    tips: [
      "Do MDM and time in two quick passes. The route with the higher supported level wins, as long as the note supports it.",
      "Office time thresholds to memorize: new 15 / 30 / 45 / 60; established 10 / 20 / 30 / 40.",
    ],
    traps: [
      "Using 'comprehensive history and exam' to choose a level. It is not a factor in 2026.",
      "Rounding time up to a halfway point. The listed minutes must be met or exceeded.",
      "Counting a problem the provider did not actually evaluate or manage.",
      "Adding the interpretation of an x-ray to the MDM when the doctor also billed the x-ray interpretation.",
    ],
    cases: [
      {
        label: "HARD SCENARIO",
        title: "Two of three elements — which level?",
        scenario: "An established patient has one stable chronic illness. The doctor reviews the results of two lab tests and manages the patient's prescription medicine. What level of MDM?",
        steps: [
          "Problems: one stable chronic illness = LOW.",
          "Data: reviewing two unique test results = LIMITED, which is also LOW.",
          "Risk: prescription drug management = MODERATE.",
          "Moderate MDM needs at least two elements at the moderate level. Only the risk is moderate.",
          "Low MDM needs two elements at low or above. Problems and data are both low (and risk is higher), so LOW is met.",
        ],
        answer: "Low MDM → 99213.",
      },
      {
        label: "HARD SCENARIO",
        title: "Time beats MDM",
        scenario: "An established patient has a simple follow-up (low MDM). The doctor's total time that day was 42 minutes, including documenting later in the evening. Which code?",
        steps: [
          "By MDM alone, low MDM is 99213.",
          "By total time, 42 minutes meets or exceeds the 40 minutes needed for 99215.",
          "The level can be picked by either route, so the time supports the higher code, as long as the total time on the date is documented.",
        ],
        answer: "99215 (by time).",
      },
      {
        label: "HARD SCENARIO",
        title: "62 minutes for a new patient",
        scenario: "A new patient's office visit takes 62 minutes of the doctor's total time on the date.",
        steps: [
          "The new-patient top code is 99205, which needs 60 minutes.",
          "62 minutes meets 60. The prolonged code 99417 starts only when 75 minutes are reached.",
        ],
        answer: "99205 only.",
      },
    ],
  },
  {
    id: "mdm-details",
    n: 2,
    title: "The Three MDM Elements in Plain Language",
    range: "Table 1 — problems · data · risk",
    intro: [
      "Each MDM element has its own ladder. The grid shows the short form. Below it are the details that the exam likes to test.",
    ],
    diagram: <MdmGridDiagram />,
    definitions: [
      ["Self-limited or minor problem", "runs a definite, prescribed course, is short-lived, and is not likely to change the patient's health for good."],
      ["Stable chronic illness", "expected to last at least one year or until death. 'Stable' means at the patient's own treatment goal. A patient who is NOT at goal is not stable — for example, persistently poorly controlled blood pressure is not stable, even if the numbers are not changing."],
      ["Undiagnosed new problem with uncertain prognosis", "a problem that could be a serious condition, such as a lump of unknown cause, that needs a work-up."],
      ["Acute illness with systemic symptoms", "an illness affecting the whole body, such as a fever with a flu-like illness, that is not limited to one organ."],
      ["Threat to life or bodily function", "a condition that, without treatment, is likely to threaten life or the function of a body part in the near term."],
      ["Unique test", "counted by CPT code: a CBC with differential is one test. Repeating the same test counts once. Pulse oximetry is not counted as a test. Translation by an interpreter is not an independent historian."],
      ["Data — Category 1", "tests, documents, or an independent historian. Each unique test, order, or document counts once toward a combination (2 items for low, 3 for moderate, 3 for the high category)."],
      ["Data — Category 2", "independent interpretation of a test performed by another provider (not billed separately)."],
      ["Data — Category 3", "discussion of management or test interpretation with an external physician, QHP, or appropriate source (not billed separately)."],
      ["Independent historian", "someone other than the patient (a parent, a caregiver) who gives the history because the patient cannot."],
      ["Risk", "the chance of harm from the testing or treatment the provider is considering, including options they considered and did not choose after sharing the decision with the patient."],
      ["Examples of low risk", "over-the-counter drugs; minor surgery without identified risk factors; physical or occupational therapy; IV fluids without additives."],
      ["Examples of moderate risk", "prescription drug management; deciding on minor surgery with risk factors; deciding on elective major surgery without risk factors; a diagnosis or treatment that is significantly limited by social determinants of health."],
      ["Examples of high risk", "drug therapy that needs intensive monitoring for toxicity; elective major surgery with risk factors; emergency major surgery; parenteral controlled substances; a decision to hospitalize or to move care to a higher hospital level; a decision not to resuscitate because of a poor prognosis."],
    ],
    steps: [
      "① Problems: count the problems addressed and rate them (minor, stable chronic, exacerbation, threat to life).",
      "② Data: tally each unique test, document, or independent historian, then look for independent interpretation or discussion with an outside professional.",
      "③ Risk: what is the risk of the tests or treatment being decided on at this visit?",
      "④ Take the highest level that at least two of the three elements reach.",
    ],
    categories: [
      {
        name: "How many data items each level needs (short form)",
        codes: [
          ["Straightforward", "Minimal or none"],
          ["Low", "Limited: any 2 items from Category 1 (external notes from each unique source, results of each unique test, ordering each unique test), OR an independent historian"],
          ["Moderate", "At least 1 of 3 categories: 3 items from Category 1 (with the independent historian counted there), OR independent interpretation, OR discussion of management"],
          ["High", "Extensive: at least 2 of the 3 categories"],
        ],
      },
    ],
    rules: [
      "'Ordering' a test counts as reviewing its result — the review is part of the same encounter and does not count again later.",
      "A test that only gives results and needs no separate interpretation is counted as ordered or reviewed, not as an independent interpretation.",
      "Tests that were considered but not ordered after shared decision making may count toward data, if the reasons are documented.",
      "Risk is judged on the patient-management decisions the reporting provider makes at THIS encounter, including the choice to start or hold back testing, treatment, or hospitalization.",
    ],
    tips: [
      "Count each unique test once — the same test ordered and then reviewed at the same encounter is still one item.",
      "When a code says 'or', you only need one of the choices; when a level lists categories, count how many the level requires.",
    ],
    traps: [
      "Counting one test twice (ordered and reviewed).",
      "Giving 'moderate' data credit for two Category 1 items — moderate needs three, or one item from Category 2 or 3.",
      "Forgetting that the doctor's own interpretation counts only when it is NOT billed separately.",
    ],
    cases: [
      {
        label: "HARD SCENARIO",
        title: "Which level is the risk?",
        scenario: "At a visit, the doctor decides to hospitalize a patient with chest pain rather than treat as an outpatient.",
        steps: [
          "A decision to hospitalize is listed as an example of HIGH risk of morbidity from management.",
          "The problem (a possible threat to life) may also be high, which would give two of three elements at the high level.",
        ],
        answer: "High risk → supports high MDM (99205 or 99215 depending on patient status).",
      },
    ],
  },
  {
    id: "old-system",
    n: 3,
    title: "The Deck's Older System — and What Changed in 2026",
    range: "History · exam · 7 components · nature of presenting problem",
    intro: [
      "Your deck teaches how to choose an 'institutional' level (hospital, nursing facility, and so on) the older way: rate the HISTORY, the EXAM, and the MDM, and require 2 of 3 or 3 of 3. That method is no longer used to pick levels in the 2026 codebook. It is kept here as vocabulary, because the terms still turn up in older training and in documentation.",
      "For 2026, use Section 1 of this part. If a question shows the old table (problem focused, expanded, detailed, comprehensive), answer from the current rules.",
    ],
    definitions: [
      ["Seven components (old)", "three KEY components (history, exam, MDM), three CONTRIBUTORY factors (counseling, coordination of care, nature of the presenting problem), and time."],
      ["History pieces (old)", "chief complaint, history of present illness (HPI), review of systems (ROS), and past, family, and social history (PFSH). Old levels were named problem focused, expanded problem focused, detailed, and comprehensive."],
      ["Exam pieces (old)", "the number of body areas or organ systems examined decided the exam type. Today the exam is done as medically appropriate and is not counted."],
    ],
    steps: [
      "① Is the question about picking a level in 2026? Use MDM or total time (Section 1).",
      "② Does the question use 'problem focused', 'expanded problem focused', 'detailed', or 'comprehensive'? That is the old system — the level is not picked that way now.",
      "③ Does it mention '2 of 3 key components' or '3 of 3'? Also old. Today the rule is 2 of 3 MDM ELEMENTS.",
      "④ Does it say counseling above 50% of the visit makes time the key factor? Also old. Today, time is just one of two routes.",
    ],
    categories: [
      {
        name: "Old idea → what 2026 says",
        codes: [
          ["Extent of history and exam picks the level", "NOT used. A medically appropriate history and/or exam is part of the code, but its extent is not an element of the level."],
          ["Type of history: problem focused → comprehensive", "Retired for level selection. The HPI, ROS, and PFSH terms still describe documentation."],
          ["Type of exam: 1, 5, 6–8, 9+ areas or systems", "Retired for level selection."],
          ["3 of 3 key components (new patient, initial hospital) · 2 of 3 (established, subsequent)", "Replaced by: at least 2 of 3 MDM elements, or total time."],
          ["Counseling or coordination > 50% makes time the key component", "Replaced by: total time on the date of the encounter, without a 50% test."],
          ["Nature of presenting problem: minimal, minor, low, moderate, high severity", "Replaced by the MDM element 'number and complexity of problems addressed'."],
          ["MDM by number of diagnoses or management options · data · risk of complications", "Replaced by MDM Table 1: problems addressed · data reviewed and analyzed · risk of management."],
          ["Face-to-face time · unit/floor time · total time (three time measures)", "Level-based codes use TOTAL TIME on the date, whatever the location. Critical care and prolonged codes have their own time rules (Part 3)."],
        ],
      },
    ],
    rules: [
      "The old rule: 'the following categories require ALL three key components: office new patient, hospital observation, initial hospital care, office consultations, initial inpatient consultation, emergency department, initial nursing facility care, domiciliary care new patient, home new patient.' Do not use it for 2026 answers.",
      "The old rule: 'the following categories require 2 of 3 key components: office established, subsequent hospital care, subsequent nursing facility care, domiciliary care established, home established.' Also not used for 2026 answers.",
      "The HPI, ROS, and PFSH vocabulary is still useful for documentation, and 'medically appropriate history and/or exam' is still part of the code.",
      "Counseling and coordination of care count toward TIME in 2026. They are no longer 'contributory components' of the level.",
    ],
    tips: [
      "If a practice question uses words such as 'detailed history' or 'expanded problem focused exam', it was written for the old system. Choose the answer that follows the 2026 rules.",
      "Keep the old vocabulary in your head as a translation aid, not as a level-picking method.",
    ],
    traps: [
      "Using '2 of 3 key components' on a 2026 question. The 2 of 3 rule now belongs to MDM elements.",
      "Trying to count HPI elements or ROS systems to pick a level.",
      "Believing counseling over 50% of the visit is what makes time count. In 2026 time can be used for the office, hospital, and consultation levels, with no 50% test. The ED codes are MDM only.",
    ],
    cases: [
      {
        title: "An old-style level question",
        scenario: "A hospital note documents a brief HPI, an extended ROS, a pertinent PFSH, and a 6-area exam. A student asks what history and exam level that makes and what it means for the initial hospital code.",
        steps: [
          "In the old system: brief HPI with extended ROS and pertinent PFSH is not 'detailed' (a detailed history needs an extended HPI), and a 6–8 area exam is 'detailed'.",
          "But that does not matter in 2026. History and exam are documented as medically appropriate, and their extent is not used to pick the level of an initial hospital code (99221–99223).",
          "The level comes from MDM (straightforward or low, moderate, or high) or from total time (40, 55, or 75 minutes).",
        ],
        answer: "Ignore the history and exam counts. Pick 99221, 99222, or 99223 by MDM or by total time.",
      },
    ],
  },
];

export default function EmReviewerPart2Page() {
  return (
    <ReviewerShell
      part={2}
      subtitle="Part 2 — Picking the Level: MDM or Total Time, and the Deck's Older System (99202–99255)"
      sections={sections}
      intro={
        <>
          <strong>Part 2 in one idea:</strong> for a level-based E/M code, pick the level by MEDICAL DECISION MAKING (two of three elements) or by TOTAL TIME on the date (the listed minutes met or exceeded). History and exam are no longer counted. Your deck&apos;s history-exam-MDM tables are shown here so you can translate old material, but they are not the method for 2026 answers.
        </>
      }
    />
  );
}
