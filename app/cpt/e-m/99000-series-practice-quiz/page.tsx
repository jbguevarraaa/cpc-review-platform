import { QuizPlayer, TEAL, type QuizItem } from "../../surgery/_digestive/players";

const items: QuizItem[] = [
  {
    topic: "Critical care",
    question: "A physician sees a critical care patient for 74 minutes, leaves, and returns for 30 more minutes of critical care later the same day. How should the services be reported?",
    correct: "99291 × 1, 99292 × 1",
    wrong: ["99291 × 2", "99291 × 1 only", "99291 × 1, 99292 × 2"],
    explanation: "Critical care time does not need to be continuous, so the two visits are added: 74 + 30 = 104 minutes. On the time table, 75–104 minutes is 99291 once plus 99292 once. 99291 is used only once per date.",
    lookFor: "Same date, same physician: add the minutes together and read the time table once.",
    eliminate: "Two 99291 units break the once-per-date rule. 99291 alone stops at 74 minutes. A second 99292 would need at least 105 minutes.",
  },
  {
    topic: "Prolonged services",
    question: "An established patient and her mother come to the office to talk about her newly diagnosed type 1 diabetes. The visit lasts 75 minutes, and over 50 minutes of it is counseling and coordination of care. Which codes?",
    correct: "99215, 99417 × 2",
    wrong: ["99215 only", "99215, 99417 × 1", "99215, 99417 × 3"],
    explanation: "Use total time on the date: 75 minutes. 99215 needs 40 minutes. The first unit of 99417 starts 15 minutes beyond that (55 minutes), and the second at 70 minutes. 75 minutes reaches two units, and the last 5 minutes are not a full unit.",
    lookFor: "The visit was leveled by TIME, and the time is well beyond the top code's minutes.",
    eliminate: "99215 alone ignores the extra time. One unit stops at 69 minutes. A third unit needs 85 minutes.",
  },
  {
    topic: "Prolonged services",
    question: "In the morning a physician sees a NEW adolescent for anxiety and spends 45 minutes with the family. Later that day the patient returns and the physician spends another 45 minutes counseling and coordinating a referral. Which codes?",
    correct: "99205, 99417 × 2",
    wrong: ["99204 × 2", "99205, 99417 × 1", "99205, 99417 × 3"],
    explanation: "Two visits by the same physician on the same date are reported as one service, and the time is added: 45 + 45 = 90 minutes. A new patient's top code is 99205 (60 minutes). The first 99417 starts at 75 minutes and the second at 90 minutes.",
    lookFor: "Same physician, same date, more than one visit: one combined service and one combined time.",
    eliminate: "Two separate visit codes are not reported for the same date. One unit would only cover 75–89 minutes. Three units need 105 minutes.",
  },
  {
    topic: "Level selection",
    question: "An established patient has one stable chronic illness. The physician reviews two unique lab results and manages the patient's prescription medicine. No time is documented. What is the E/M level?",
    correct: "99213 (low MDM)",
    wrong: ["99214 (moderate MDM)", "99212 (straightforward MDM)", "99215 (high MDM)"],
    explanation: "Problems: one stable chronic illness = low. Data: two unique test results = limited (low). Risk: prescription drug management = moderate. Moderate MDM needs two of the three elements at the moderate level, and only risk is there. Low is met by two elements, so the level is low MDM.",
    lookFor: "Rate each of the three MDM elements separately, then find the highest level that at least two of them reach.",
    eliminate: "Moderate needs two elements at moderate, and only one is. Straightforward understates a chronic illness with data and drug management. High needs extensive data or severe problems.",
  },
  {
    topic: "Level selection",
    question: "For a level-based office visit in the 2026 codebook, how is the level chosen?",
    correct: "By the level of medical decision making, OR by total provider time on the date",
    wrong: ["By history, exam, and MDM, requiring all three", "By the extent of the history and exam only", "By counseling being more than half of the visit"],
    explanation: "Level-based E/M codes are selected either by medical decision making (two of three elements) or by total time on the date of the encounter. History and exam are done as medically appropriate but do not choose the level.",
    lookFor: "Any answer that counts history or exam elements, or a 50% counseling rule, is from the older system in your deck.",
    eliminate: "The 3-of-3 key component rule and the extent of history and exam were retired for level selection. The 50% counseling test is also gone: total time is what counts.",
  },
  {
    topic: "Time",
    question: "A new patient's office visit is leveled by time. The physician's total time on the date is 62 minutes. Which is reported?",
    correct: "99205 only",
    wrong: ["99205, 99417 × 1", "99204", "99215"],
    explanation: "99205 needs 60 minutes, and 62 meets it. The first unit of 99417 does not start until 15 minutes past 60, at 75 minutes. So there is no prolonged unit yet.",
    lookFor: "Compare the total minutes with the code's minutes (60), then with the prolonged starting point (75).",
    eliminate: "99417 needs 75 minutes for a new patient. 99204 needs only 45 minutes and would understate the time. 99215 is an established-patient code.",
  },
  {
    topic: "Critical care",
    question: "A physician spends 25 minutes total on a critically ill ICU patient on one date. Which is reported?",
    correct: "An appropriate E/M code, not critical care",
    wrong: ["99291", "99292", "99291 with modifier 52"],
    explanation: "Critical care under 30 minutes total on a date is reported with the appropriate E/M code for the place of service and patient status. 99291 starts at 30 minutes.",
    lookFor: "The total minutes for the date. The first cut-off is 30.",
    eliminate: "99291 needs at least 30 minutes. 99292 is an add-on and is never reported alone. Modifier 52 is not the way to report short critical care time.",
  },
  {
    topic: "Prolonged services",
    question: "On Monday a physician sees an established patient and reports 99214 by MDM. On Tuesday the physician spends 40 minutes reviewing outside records for that patient, with no patient contact. Which is reported for Tuesday?",
    correct: "99358 × 1",
    wrong: ["99417 × 2", "99359 × 1", "99354 × 1"],
    explanation: "Prolonged service WITHOUT patient contact on a date other than the visit is 99358 (first hour; 30–74 minutes). 99417 belongs to the same date as an office visit. 99359 is an add-on for further blocks after the first. 99354 is no longer in the code set.",
    lookFor: "Which date the extra work was done and whether there was patient contact.",
    eliminate: "99417 is same-date only. 99359 cannot start alone. 99354 no longer exists in the 2026 codebook.",
  },
  {
    topic: "Consultations",
    question: "An office consultation is leveled by total time. The consultant's total time on the date is 72 minutes. Which is reported?",
    correct: "99245, 99417 × 1",
    wrong: ["99245 only", "99245, 99417 × 2", "99244, 99417 × 1"],
    explanation: "The highest office consultation code, 99245, needs 55 minutes. The first unit of 99417 starts 15 minutes past that, at 70 minutes. 72 minutes reaches one unit; the second would start at 85.",
    lookFor: "The top code's minutes (55) plus 15 gives the starting point for 99417.",
    eliminate: "99245 alone ignores minutes past 70. Two units need 85 minutes. 99244 needs only 40 minutes, so it understates the time.",
  },
  {
    topic: "Prolonged services",
    question: "Initial hospital care is leveled by total time, and the physician's total time on the date is 106 minutes. Which is reported?",
    correct: "99223, 99418 × 2",
    wrong: ["99223, 99418 × 1", "99223, 99418 × 3", "99223 only"],
    explanation: "99223 needs 75 minutes. The inpatient prolonged code 99418 starts at 90 minutes and adds a unit every 15 minutes: 90 is one unit and 105 is two. 106 minutes reaches two units. The third would start at 120.",
    lookFor: "Inpatient prolonged time uses 99418, not 99417.",
    eliminate: "One unit stops at 104 minutes. Three units need 120 minutes. 99223 alone ignores the extra time.",
  },
];

export default function EmPracticeQuizPage() {
  return (
    <QuizPlayer
      kicker="99,000 SERIES · PRACTICE QUIZ"
      title="Evaluation & Management Practice Quiz"
      blurb={`${items.length} scenario questions — critical care, prolonged services, consultations, MDM, and time thresholds. Each answer shows what to look for and how to eliminate the wrong choices.`}
      nav={[
        { href: "/cpt/e-m/99,000", label: "99,000 Series home" },
        { href: "/cpt/e-m/99000-series-guidelines-reviewer", label: "Reviewer Part 1" },
        { href: "/cpt/e-m/99000-series-guidelines-reviewer-part-2", label: "Part 2" },
        { href: "/cpt/e-m/99000-series-guidelines-reviewer-part-3", label: "Part 3" },
        { href: "/cpt/e-m/99000-series-flashcards", label: "Flashcards" },
      ]}
      items={items}
      backHref="/cpt/e-m/99,000"
      backLabel="← Back to the 99,000 Series"
      theme={TEAL}
    />
  );
}
