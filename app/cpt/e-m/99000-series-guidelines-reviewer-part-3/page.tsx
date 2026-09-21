import { ReviewerShell, type Subsection } from "../_em/kit";
import { TimeLadderDiagram } from "../_em/diagrams";

const sections: Subsection[] = [
  {
    id: "critical-care",
    n: 1,
    title: "Critical Care Services",
    range: "99291–99292 · 99466–99480",
    intro: [
      "Critical care is a TIME-based service. There are no levels and no MDM to grade. You add up the minutes the physician or QHP personally spent on the critically ill patient on that date, then read the code off the time table.",
      "The 2026 codebook keeps the same rule your deck teaches: 99291 for the first 30–74 minutes, then 99292 for each extra block of up to 30 minutes.",
    ],
    diagram: <TimeLadderDiagram />,
    definitions: [
      ["Critical care", "direct delivery by a physician or QHP of medical care for a critically ill or critically injured patient."],
      ["Critical illness or injury", "a sudden problem with one or more VITAL ORGAN SYSTEMS that makes serious, life-threatening worsening very likely soon unless the physician acts."],
      ["Vital organ system failure", "examples: central nervous system failure, circulatory failure, shock, renal failure, hepatic failure, metabolic failure, respiratory failure."],
      ["Critical care area", "no single unit is required. Care in a coronary care unit, ICU, pediatric ICU, respiratory care unit, emergency department, or any other hospital area can be critical care, as long as the patient is critically ill and the service is delivered as described above."],
      ["Packaged services", "certain services are part of critical care and are not reported separately when the SAME physician does them during the critical period (see the table below)."],
    ],
    steps: [
      "① Is the patient critically ill or injured, with a vital organ system acutely impaired? If not, use another E/M code even if the patient is in the ICU.",
      "② Add up the physician's or QHP's critical care minutes for the date. They do not need to be continuous.",
      "③ Under 30 minutes? Report the ordinary E/M code for the place and patient status.",
      "④ 30–74 minutes? 99291 ×1.",
      "⑤ 75 minutes or more? 99291 ×1 PLUS 99292: ×1 at 75, ×2 at 105, ×3 at 135, ×4 at 165 …",
      "⑥ Age and location can change the family: neonatal or pediatric inpatient and transport codes are different (99466–99480).",
    ],
    categories: [
      {
        name: "Which critical care family? (from the deck's layout table)",
        codes: [
          ["Adult (older than 71 months), any location", "99291–99292"],
          ["Outpatient, 0 days to 71 months", "99291–99292"],
          ["Inpatient, 28 days or younger", "99468–99469"],
          ["Inpatient, 29 days to 71 months", "99471–99476"],
          ["Transport, 24 months or younger", "99466–99467"],
          ["Transport, older than 24 months", "99291–99292"],
        ],
      },
      {
        name: "Total duration → codes (99291–99292)",
        codes: [
          ["Less than 30 minutes", "An appropriate E/M code, not critical care"],
          ["30–74 minutes", "99291 ×1"],
          ["75–104 minutes", "99291 ×1 + 99292 ×1"],
          ["105–134 minutes", "99291 ×1 + 99292 ×2"],
          ["135–164 minutes", "99291 ×1 + 99292 ×3"],
          ["165–194 minutes", "99291 ×1 + 99292 ×4"],
          ["195 minutes or longer", "Keep going: one more 99292 for each extra 30 minutes"],
        ],
      },
      {
        name: "Included in critical care time · NOT included",
        codes: [
          ["INCLUDED", "Bedside care · reviewing test results and imaging on the floor or unit · talking with family or a surrogate when the patient cannot take part AND the talk bears directly on management · documenting, while immediately available to the patient"],
          ["NOT INCLUDED", "Time off the unit or floor where the doctor is not immediately available (for example telephone calls, even from the hospital) · time in the unit on things that do not treat this patient (meetings, calls about other patients) · time in separately reported procedures"],
          ["PACKAGED — monitoring", "Cardiac output interpretation (93598) · pulse oximetry (94760–94762) · blood gases · collecting and interpreting physiologic data (ECGs, blood pressures, hematologic data)"],
          ["PACKAGED — imaging and tubes", "Chest x-rays (71045, 71046) · gastric intubation (43752, 43753)"],
          ["PACKAGED — support", "Temporary transcutaneous pacing (92953) · ventilatory management (94002–94004, 94660) · vascular access (36000, 36410, 36415, 36591, 36600)"],
        ],
      },
    ],
    rules: [
      "99291 is reported only ONCE per date, even if the physician's critical care time that day is split into separate visits.",
      "99292 is an add-on code: it is reported with 99291 and never alone.",
      "Critical care under 30 minutes on a date is reported with the appropriate E/M code, not with 99291.",
      "Facilities may report the packaged services separately (for example a facility can bill the chest x-ray). The professional physician cannot. Any service not on the packaged list is reported separately.",
      "The same physician may provide critical care and another E/M service to the same patient on the same date when they are distinct; the time spent on that other E/M is not counted as critical care time.",
      "Time in separately reported procedures (for example a central line that is not in the packaged list) is not counted toward critical care time.",
      "A patient who is not critically ill but happens to be in a critical care unit is reported with other appropriate E/M codes.",
      "Critical care can be reported on more than one day even when the treatment does not change, as long as the patient's condition still needs that level of attention.",
    ],
    tips: [
      "Ladder to memorize: 30 · 75 · 105 · 135 · 165 — the first jump is 45 minutes wide (30 to 74); every step after that is 30 minutes.",
      "Ask two questions in order: 'Was the patient critically ill?' then 'How many minutes in total?' The place of service is not the deciding factor.",
    ],
    traps: [
      "Reporting 99291 twice because the physician came back later. It is ONE 99291 per date; the second visit's minutes are added to the total.",
      "Counting phone calls from home or other floors as critical care time.",
      "Reporting a chest x-ray interpretation or a ventilator management code separately by the physician who is billing the critical care.",
      "Using 99291 for a stable ICU patient who is not critically ill.",
    ],
    cases: [
      {
        label: "DECK CASE · SOLVED",
        title: "74 minutes, then 30 more minutes later the same day",
        scenario: "A physician sees a critical care patient for 74 minutes. The physician leaves and returns for another 30 minutes of critical care later the same day. How should the services be reported?",
        steps: [
          "Critical care time need not be continuous, so add the two visits: 74 + 30 = 104 minutes total for the date.",
          "Read the time table: 75–104 minutes = 99291 ×1 plus 99292 ×1.",
          "99291 is used only once per date, so there is no second 99291 for the return visit.",
          "Check: 74 minutes alone would be 99291 ×1. The extra 30 minutes bring the day to 104, which reaches the 75-minute mark for one 99292 but stops before the 105-minute mark for a second one.",
        ],
        answer: "99291 ×1 and 99292 ×1.",
      },
      {
        label: "HARD SCENARIO",
        title: "A phone call from home does not count",
        scenario: "A physician spends 100 minutes on critical care bedside work and then makes a 20-minute phone call from home to discuss the patient's care with the nurse.",
        steps: [
          "The phone call from home does not count: the physician is not immediately available to the patient.",
          "Total counted time = 100 minutes.",
          "100 falls in the 75–104 range.",
        ],
        answer: "99291 ×1 and 99292 ×1.",
      },
      {
        label: "HARD SCENARIO",
        title: "Only 25 minutes in the ICU",
        scenario: "A physician spends 25 minutes caring for an ICU patient who is critically ill.",
        steps: [
          "Critical care under 30 minutes total on a date is not reported with 99291.",
          "Use the appropriate E/M code for the place and patient status.",
        ],
        answer: "An appropriate E/M code (for example a hospital subsequent care code), not 99291.",
      },
    ],
  },
  {
    id: "prolonged",
    n: 2,
    title: "Prolonged Services",
    range: "99417–99418 · 99358–99359 · 99415–99416 · 99360",
    intro: [
      "A prolonged service is extra time beyond the usual service. All of these codes are time-based, and several are add-on codes that go with a primary code.",
      "The deck teaches an older system, where the prolonged codes were tied to services where counseling was more than half of the visit, and where 99354–99357 were used for prolonged service WITH patient contact. In the 2026 codebook, the with-contact codes 99354–99357 no longer exist. Use 99417 or 99418 instead.",
    ],
    definitions: [
      ["99417", "prolonged total time (with or without direct patient contact) on the date of an OFFICE or other outpatient visit, per each 15 minutes. It is used with 99205, 99215 and the other codes named in the codebook."],
      ["99418", "the same idea for INPATIENT and observation services, per each 15 minutes. Used with 99223, 99233, 99236, 99255, 99306, and 99310."],
      ["99358 · 99359", "prolonged service WITHOUT direct patient contact on a date OTHER than the face-to-face visit (for example, a long record review before or after the visit). 99358 = first hour; 99359 = each additional 30 minutes."],
      ["99415 · 99416", "prolonged CLINICAL STAFF face-to-face time in the office while the physician is supervising. 99415 = first hour; 99416 = each additional 30 minutes. Not used with 99417, and facilities may not report them."],
      ["99360", "STANDBY service requested by another physician or QHP that requires prolonged attendance without direct patient contact, each 30 minutes."],
    ],
    steps: [
      "① Was the primary E/M code chosen using TIME? 99417 and 99418 are used only then.",
      "② Did the time pass the highest code's minutes by at least 15? If not, no prolonged code yet.",
      "③ Count each FULL 15 minutes beyond that starting point as one unit.",
      "④ Was the extra work done on a DIFFERENT date from the visit and with no patient contact? Use 99358/99359 instead.",
      "⑤ Is it clinical staff time? Use 99415/99416 (office only), not 99417.",
    ],
    categories: [
      {
        name: "Where 99417 starts (new patient · 99205)",
        codes: [
          ["Less than 75 minutes", "99205 only"],
          ["75–89 minutes", "99205 + 99417 ×1"],
          ["90–104 minutes", "99205 + 99417 ×2"],
          ["105 minutes or more", "99205 + 99417 ×3 or more, one for each additional 15 minutes"],
        ],
      },
      {
        name: "Where 99417 starts (established patient · 99215)",
        codes: [
          ["Less than 55 minutes", "99215 only"],
          ["55–69 minutes", "99215 + 99417 ×1"],
          ["70–84 minutes", "99215 + 99417 ×2"],
          ["85 minutes or more", "99215 + 99417 ×3 or more"],
        ],
      },
      {
        name: "Where 99418 starts (inpatient · time to meet + 15 minutes)",
        codes: [
          ["99223", "75 min → first unit at 90"],
          ["99233", "50 min → first unit at 65"],
          ["99236", "85 min → first unit at 100"],
          ["99255", "80 min → first unit at 95"],
          ["99310", "45 min → first unit at 60"],
        ],
      },
      {
        name: "Prolonged service WITHOUT direct patient contact (99358–99359, on a different date)",
        codes: [
          ["Less than 30 minutes", "Not reported separately"],
          ["30–74 minutes", "99358 ×1"],
          ["75–104 minutes", "99358 ×1 + 99359 ×1"],
          ["105 minutes or more", "99358 + 99359 ×2 or more (each additional 30 minutes, and the last 15–30 minutes count too)"],
        ],
      },
    ],
    rules: [
      "99417 and 99418 are not reported on the same date as psychotherapy add-on codes 90833, 90836, or 90838, nor with 99358 or 99359.",
      "99359 and 99416 may also report the FINAL 15–30 minutes of the service. Only 99360 standby needs a full 30 minutes for each extra unit.",
      "99417 and 99418 are used only when the primary service is chosen by TIME alone, and only after the time for the highest-level primary code has been exceeded by 15 minutes.",
      "The first unit of 99417 is not reported until at least 15 minutes have been accumulated beyond 60 minutes for a new patient (75 minutes) or beyond 40 minutes for an established patient (55 minutes).",
      "Do not report 99417 or 99418 for any time increment shorter than 15 minutes.",
      "Time spent in separately reported services does not count toward the primary or the prolonged time.",
      "99358 and 99359 are only reported on a date OTHER than the face-to-face visit, and they may not be reported on the same date as an office, hospital, ED, nursing facility, or home E/M service, or with 99417 or 99418.",
      "Total prolonged time is added up even when it is not continuous. Prolonged service under 30 minutes (99358, 99415, 99360) is not reported separately.",
      "99415 and 99416 may be reported for no more than two simultaneous patients, and the time counted is only that devoted to one patient.",
      "For standby service (99360), the second and later 30-minute units need a FULL 30 minutes of standby. Standby is not reported if it ends with the physician doing a procedure that is bundled into a surgical package.",
      "99354–99357 are no longer part of the code set. A question that asks for 'prolonged service with direct contact' in 2026 is answered with 99417 or 99418.",
    ],
    tips: [
      "Think of 99417 as a 'time starts here' rule: new patient 75, established 55, then every 15 minutes more.",
      "The prolonged code is the last step. Choose the primary E/M code first, then look at whether time supports an extra unit.",
    ],
    traps: [
      "Using the deck's 'more than 50% of the visit was counseling' rule. In 2026 the total time on the date is what counts.",
      "Adding 99417 when the primary code was picked by MDM instead of time.",
      "Reporting 99358 on the same date as the office visit.",
      "Starting the prolonged units too early. Formula: new patient units = (total minutes − 60) ÷ 15, rounded down; established units = (total minutes − 40) ÷ 15, rounded down.",
    ],
    cases: [
      {
        label: "DECK CASE · SOLVED",
        title: "Established patient with new type 1 diabetes — 75 minutes",
        scenario: "An established patient and her mother come to a doctor's office to discuss the management of the patient's newly diagnosed type 1 diabetes. The visit lasts 75 minutes, and more than 50 minutes of it is counseling and coordination of care. Which codes are reported?",
        steps: [
          "The deck's 'more than 50% counseling' clue is the old rule. In 2026 use total time on the date: 75 minutes, and counseling counts toward that total.",
          "Established patient in the office: the top code is 99215. It needs 40 minutes, and 75 meets it.",
          "The first 99417 starts 15 minutes past 40, at 55 minutes. Read the established-patient table: 55–69 = ×1, 70–84 = ×2.",
          "75 minutes falls in the 70–84 range, so there are two full 15-minute units beyond the 40-minute mark (from 40 to 70 = two units, and the last 5 minutes are an incomplete unit that is not counted).",
        ],
        answer: "99215 ×1 and 99417 ×2.",
      },
      {
        label: "DECK CASE · SOLVED",
        title: "New adolescent with anxiety, seen twice the same day",
        scenario: "In the morning, a physician sees a new adolescent patient for anxiety. The patient is still quite anxious afterwards, so the physician tells the mother to come back that day if needed. Later that day the patient returns to discuss it further and is referred to a specialist. The physician spent 45 minutes with mother and son in the morning (35 minutes of it counseling), and another 45 minutes that day counseling and coordinating care. Which codes are reported?",
        steps: [
          "Two visits by the same physician on the same date are added together as one service. Do not report two E/M visits.",
          "Add the time: 45 + 45 = 90 minutes total.",
          "Your deck treats this as one combined service. The codebook prints the same-date rule for hospital and nursing facility services, so the office application comes from the deck.",
          "The patient is new, so start with 99205 (needs 60 minutes; 90 meets it).",
          "The first 99417 is not reported until 75 minutes. Read the 99205 table: 75–89 = ×1, 90–104 = ×2.",
          "90 minutes is in the 90–104 range, which means two full 15-minute units beyond 60 minutes (60→75 and 75→90).",
        ],
        answer: "99205 ×1 and 99417 ×2.",
      },
      {
        label: "HARD SCENARIO",
        title: "Record review on the next day",
        scenario: "A physician saw an established patient in the office on Monday (99214 by MDM). On Tuesday, the physician spends 40 minutes reviewing outside records related to that visit, with no patient contact.",
        steps: [
          "Tuesday is a different date from the face-to-face visit, and there was no patient contact.",
          "99417 is used on the SAME date as the visit, so it does not apply.",
          "Prolonged service without direct patient contact on another date: 99358 covers 30–74 minutes.",
        ],
        answer: "99358 ×1 (on Tuesday), in addition to the Monday 99214.",
      },
      {
        label: "HARD SCENARIO",
        title: "Long visit, but leveled by MDM",
        scenario: "A high-MDM new-patient visit is documented as 99205 by MDM only. No total time is documented, and the visit was long.",
        steps: [
          "99417 is used only when the primary service is selected using time.",
          "The visit was leveled by MDM, so a prolonged unit is not supported.",
        ],
        answer: "99205 only — no 99417.",
      },
    ],
  },
];

export default function EmReviewerPart3Page() {
  return (
    <ReviewerShell
      part={3}
      subtitle="Part 3 — Critical Care & Prolonged Services (99291–99292 · 99417–99418 · 99358–99360)"
      sections={sections}
      intro={
        <>
          <strong>Part 3 in one idea:</strong> both critical care and prolonged services are counted in TIME. Add up the provider&apos;s own minutes on the date, then read the code off the ladder: critical care 30 → 75 → 105 …; prolonged 99417 starts at 75 minutes (new) or 55 minutes (established). Your deck&apos;s three case questions are solved step by step below.
        </>
      }
    />
  );
}
