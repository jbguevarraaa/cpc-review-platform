import { DiscussionGuidePage, DGList, type DGTopic } from "../../surgery/_digestive/discussion-guide";
import { TEAL } from "../../surgery/_digestive/players";

const topics: DGTopic[] = [
  {
    n: 1,
    title: "Organization of the E/M Chapter",
    range: "98000–98016 · 99202–99499",
    items: [
      {
        q: "Be able to identify the organization of the chapter (e.g., 992XX is for acute care facilities).",
        approach: "Group the codes by WHERE the patient is seen and WHO is billing, not by number order — the discussion guide's shorthand ('992XX = acute care') is a simplification worth correcting.",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}>The 992XX block is not one thing — it covers several different places of service, plus critical care and prolonged services. The chapter is organized by category first, then by new/established or initial/subsequent, then by level:</p>
            <DGList
              items={[
                "98000–98016 — telemedicine (synchronous audio-video and audio-only visits)",
                "99202–99215 — office or other outpatient (99202–99205 new, 99211–99215 established)",
                "99221–99239 — hospital inpatient or observation (initial, subsequent, same-day admit/discharge, discharge)",
                "99242–99255 — consultations (office/outpatient and inpatient/observation)",
                "99281–99285 — emergency department (no new/established split)",
                "99291–99292 — critical care",
                "99304–99316 — nursing facility services",
                "99341–99350 — home or residence services",
                "99358–99360 · 99415–99418 — prolonged services and standby",
                "99381–99429 — preventive medicine and counseling",
                "99499 — unlisted E/M service",
              ]}
            />
            <p style={{ margin: "8px 0 0" }}>99201 was deleted, so the office/outpatient block now starts at 99202.</p>
          </>
        ),
      },
    ],
  },
  {
    n: 2,
    title: "Basis for Selecting the Code Level",
    range: "99202–99215 · 99221–99255",
    items: [
      {
        q: "What is the basis for selecting the code level for office/other outpatient services? For other E/M codes?",
        approach: "The same two routes apply everywhere a level exists — only the code family and its minutes change.",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}>Every level-based E/M code — office, hospital, and consultations alike — is selected by EITHER of two routes, whichever the note supports:</p>
            <DGList
              items={[
                "The level of MEDICAL DECISION MAKING (MDM): straightforward, low, moderate, or high, met when at least two of its three elements (problems, data, risk) are reached.",
                "TOTAL TIME the physician or QHP personally spent on the date of the encounter, met or exceeded against that code's listed minutes.",
              ]}
            />
            <p style={{ margin: "8px 0 0" }}>A medically appropriate history and/or exam is still performed and documented, but its extent does not pick the level — that is the single biggest change from the older (1995/1997) system. The emergency department (99281–99285) is the one exception: it is MDM only, with no time thresholds at all.</p>
          </>
        ),
      },
    ],
  },
  {
    n: 3,
    title: "New vs. Established Patients",
    range: "New/established definitions",
    items: [
      {
        q: "In the CPT system, when is a patient considered new? When is a patient considered established?",
        approach: "Ask one question: has this EXACT specialty and subspecialty, in this group, provided a professional service to the patient in the last 3 years?",
        answer: (
          <>
            <p style={{ margin: "0 0 4px" }}><strong>New patient:</strong> one who has NOT received any professional service from the physician or QHP, or from another physician or QHP of the exact same specialty and subspecialty in the same group practice, within the past 3 years.</p>
            <p style={{ margin: 0 }}><strong>Established patient:</strong> one who HAS received such a service within the past 3 years. Nurse practitioners and physician assistants are treated as the same specialty and subspecialty as the physician they work with. A covering (locum tenens) provider classifies the patient exactly as the absent provider would have.</p>
          </>
        ),
      },
    ],
  },
  {
    n: 4,
    title: "Physician Time",
    range: "Total time on the date of the encounter",
    items: [
      {
        q: "What are the activities included in physician time?",
        approach: "Time is everything the physician or QHP personally does for this patient on the date of the encounter, face-to-face or not — with a short exclusion list.",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}><strong>Included:</strong> preparing to see the patient (e.g. reviewing tests), obtaining or reviewing a separately obtained history, a medically appropriate exam, counseling and educating the patient or family, ordering medications/tests/procedures, referring and communicating with other health professionals, documenting, independently interpreting results (when not billed separately), and care coordination (when not billed separately).</p>
            <p style={{ margin: 0 }}><strong>Not included:</strong> time in a separately billed service, travel, general teaching not about this patient, and clinical staff time. When two providers meet the patient together, only one person's time is counted.</p>
          </>
        ),
      },
      {
        q: "What are the three sub-definitions of 'time' amongst the E/M services?",
        approach: "This is the deck's older vocabulary — CPT 2026 has collapsed it into one measure for level-based codes, so name the three, then say what replaced them.",
        answer: (
          <>
            <DGList
              items={[
                "Face-to-face time — time spent directly with the patient and/or family.",
                "Unit/floor time — time spent on the patient's hospital unit or floor, face-to-face and not.",
                "Total time — all time spent by the physician on the date, on or off the unit.",
              ]}
            />
            <p style={{ margin: "8px 0 0" }}>CPT 2026 uses only TOTAL TIME on the date of the encounter for level-based codes. Critical care and prolonged services have their own separate time rules (see Q7–Q8 below).</p>
          </>
        ),
      },
    ],
  },
  {
    n: 5,
    title: "Key Components and the Old 'Time as Controlling Factor' Rule",
    range: "Legacy 1995/1997 system, for context",
    items: [
      {
        q: "What are the 'key' components in selecting the level of service for Other E/M codes? When does time become the key or controlling factor for Other E/M codes?",
        approach: "This question uses the older system's language. Answer it as the deck intends, then translate to what CPT 2026 actually does.",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}><strong>Older (1995/1997) system:</strong> the three KEY components were history, exam, and medical decision making. Counseling, coordination of care, and the nature of the presenting problem were CONTRIBUTORY factors, not key ones. Time became the key or controlling factor only when counseling and/or coordination of care made up MORE THAN 50% of the total visit time — in that case, the level could be selected by time alone instead of by the three key components.</p>
            <p style={{ margin: 0 }}><strong>CPT 2026:</strong> there is no single 'key component' anymore and no 50% counseling test. Every level-based E/M code (except the ED) is chosen by MDM OR total time — either route is available on every visit, not just ones dominated by counseling.</p>
          </>
        ),
      },
    ],
  },
  {
    n: 6,
    title: "The Three MDM Elements",
    range: "Office or Other Outpatient E/M (99202–99215)",
    items: [
      {
        q: "What 3 elements define Medical Decision Making when used as the basis for selecting a level of Office or Other Outpatient E/M services?",
        approach: "These three elements are the same for every level-based E/M category, not just the office — memorize them once.",
        answer: (
          <DGList
            items={[
              <><strong>Number and complexity of problems addressed</strong> at the encounter.</>,
              <><strong>Amount and/or complexity of data</strong> to be reviewed and analyzed.</>,
              <><strong>Risk of complications and/or morbidity or mortality</strong> of patient management.</>,
            ]}
          />
        ),
        codes: [["99202–99205", "New"], ["99212–99215", "Established"]],
      },
    ],
  },
  {
    n: 7,
    title: "Prolonged Services",
    range: "99417–99418 · 99358–99359 · 99415–99416 · 99360",
    items: [
      {
        q: "How are the Prolonged Service codes grouped?",
        approach: "Group them by WHERE and WHEN the extra time happens: same-date with the E/M visit, a different date with no patient contact, clinical staff time, or standby.",
        answer: (
          <DGList
            items={[
              <><strong>99417</strong> — prolonged total time on the date of an office or other outpatient visit, per 15 minutes.</>,
              <><strong>99418</strong> — the same idea for inpatient/observation visits, per 15 minutes.</>,
              <><strong>99358, 99359</strong> — prolonged service WITHOUT direct patient contact, on a date OTHER than the face-to-face visit.</>,
              <><strong>99415, 99416</strong> — prolonged CLINICAL STAFF face-to-face time in the office, with physician supervision.</>,
              <><strong>99360</strong> — standby service requested by another physician, without direct patient contact.</>,
            ]}
          />
        ),
      },
      {
        q: "How are Prolonged Services reported?",
        approach: "Each family has its own starting point and unit size — the common thread is that none of them is reported for less than the smallest listed increment.",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}>99417/99418 are reported only when the primary code was selected by TIME, starting 15 minutes past the highest-level code's minutes (for example, 75 minutes for a new-patient 99205, 55 minutes for an established 99215), and then once for each further full 15 minutes.</p>
            <p style={{ margin: 0 }}>99358 covers the first hour (30–74 minutes) of non-face-to-face time on another date, with +99359 for each additional 30 minutes. 99415 covers the first hour of clinical staff time, with +99416 for each additional 30 minutes. 99360 is reported per 30 minutes, and the second and later units each need a full 30 minutes. None of these codes is reported for under 30 minutes total (99417/99418 for under 15 minutes past the threshold).</p>
          </>
        ),
      },
    ],
  },
  {
    n: 8,
    title: "Critical Care Services",
    range: "99291–99292",
    items: [
      {
        q: "How are Critical Care codes grouped?",
        approach: "Group them by patient age and setting first, then note that the standard adult codes also cover most non-neonatal transport and outpatient critical care.",
        answer: (
          <DGList
            items={[
              "Adult or over 71 months, any location — 99291, 99292",
              "Outpatient, 0 days to 71 months — 99291, 99292",
              "Inpatient, 28 days or younger — 99468, 99469",
              "Inpatient, 29 days to 71 months — 99471–99476",
              "Interfacility transport, 24 months or younger — 99466, 99467",
              "Interfacility transport, older than 24 months — 99291, 99292",
            ]}
          />
        ),
      },
      {
        q: "How are Critical Services reported?",
        approach: "It is purely time-based: total up the minutes on the date, then read the code off the time table.",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}>99291 covers the first 30–74 minutes of critical care on a date and is reported only ONCE per date, even if the time is split across separate visits. +99292 covers each additional block of up to 30 minutes beyond the first 74 (75–104 min = ×1, 105–134 = ×2, and so on). Under 30 minutes total is reported with an ordinary E/M code instead.</p>
            <p style={{ margin: 0 }}>Time counts only while the physician is immediately available to the patient (bedside care, and chart/imaging review on the unit) — phone calls off the unit and unrelated meetings do not count. Certain monitoring, imaging, and access services are packaged into critical care and are not billed separately by the physician.</p>
          </>
        ),
        codes: [["99291", "First 30–74 minutes"], ["99292", "Each additional 30 minutes"]],
      },
    ],
  },
];

export default function EmDiscussionGuidePage() {
  return (
    <DiscussionGuidePage
      theme={TEAL}
      kicker="99,000 SERIES · DISCUSSION GUIDE"
      title="E/M Discussion Guide — Answered"
      blurb="Every question from the training discussion guide, answered step by step and checked against the CPT 2026 codebook, with the deck's older vocabulary translated where it differs."
      nav={[
        { href: "/cpt/e-m/99,000", label: "99,000 Series home" },
        { href: "/cpt/e-m/99000-series-guidelines-reviewer", label: "Reviewer Pt. 1" },
        { href: "/cpt/e-m/99000-series-guidelines-reviewer-part-2", label: "Pt. 2" },
        { href: "/cpt/e-m/99000-series-guidelines-reviewer-part-3", label: "Pt. 3" },
        { href: "/cpt/e-m/99000-series-practice-quiz", label: "Practice Quiz" },
        { href: "/cpt/e-m/99000-series-flashcards", label: "Flashcards" },
      ]}
      backHref="/cpt/e-m/99,000"
      backLabel="← Back to the 99,000 Series"
      topics={topics}
      approach={[
        "Read the question first and decide which reviewer part it belongs to — that tells you which rule family to reach for.",
        "Answer from CPT 2026 rules by default. Where the question uses older 1995/1997 language ('key components', '50% counseling'), that vocabulary is explained too, since it still shows up in some training material.",
        "Check the code chips for the exact codes tied to each answer, and follow the reviewer links for the full walkthroughs and solved cases.",
      ]}
      sourceNote="Answers are paraphrased from CPT 2026 and cross-checked against the E/M Guidelines Reviewer in this series. Where the discussion guide uses older exam-prep terminology, both the old and current rule are given."
    />
  );
}
