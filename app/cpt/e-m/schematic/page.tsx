import { SeriesSchematicPage, type SchematicNode } from "../../surgery/_digestive/schematic";
import { TEAL } from "../../surgery/_digestive/players";

const nodes: SchematicNode[] = [
  {
    n: 1,
    title: "Chapter Map & Code Structure",
    range: "98000–99499",
    points: [
      "Category (place/type of visit) → subcategory (new/established, initial/subsequent) → level (how much work)",
      "Every leveled code descriptor reads: number → place/type → content → time",
      "99201 was deleted — 99202 is the first new-patient office code",
      "Telemedicine (98000–98016) sits alongside office, hospital, ED, and consult categories",
    ],
    callout: "Read a descriptor left to right and you can rebuild the code from scratch.",
  },
  {
    n: 2,
    title: "New vs. Established & Provider Status",
    points: [
      "New: no professional service from the exact same specialty + subspecialty, same group, in the past 3 years",
      "Established: that exact match HAS been seen within 3 years",
      "Locum tenens/covering provider: classify the patient as the absent provider would have",
      "The emergency department has no new/established split at all",
    ],
    callout: "The 3-year look-back is same specialty AND same subspecialty — a different specialty in the same group doesn't count.",
  },
  {
    n: 3,
    title: "What Counts as Time",
    range: "Level-based codes only",
    points: [
      "The provider's own TOTAL time on the date — face-to-face and non-face-to-face, wherever they are",
      "Included: prep, medically appropriate history/exam, counseling, ordering, documenting",
      "Excluded: separately billed services, travel, clinical staff time",
      "Two providers meeting together at once → count only one person's time",
    ],
    callout: "No 50% counseling test anymore — counseling simply counts toward the total.",
  },
  {
    n: 4,
    title: "Picking the Level: Two Routes",
    range: "99202–99215 · 99221–99239 · 99242–99255",
    points: [
      "Route 1 — MDM: at least 2 of 3 elements met or exceeded",
      "Route 2 — Time: total time meets or exceeds the listed minutes",
      "Use whichever route the documentation supports better",
      "History/exam extent no longer picks the level — done only as 'medically appropriate'",
      "Emergency department (99281–99285) is MDM only — no time thresholds",
    ],
    callout: "The single biggest 2026 change: history and exam are documented, not counted.",
  },
  {
    n: 5,
    title: "The Three MDM Elements",
    range: "Problems · Data · Risk",
    points: [
      "Problems addressed: minor → stable chronic → acute with systemic symptoms → threat to life",
      "Data: Category 1 (tests/docs/independent historian) · Category 2 (independent interpretation) · Category 3 (discussion with an outside provider)",
      "Risk: OTC drugs/minor surgery (low) → prescription drug management (moderate) → decision to hospitalize or DNR (high)",
      "Level = the highest tier where 2 of 3 elements are met",
    ],
    callout: "Count each unique test once — ordering and reviewing the same test is one item, not two.",
  },
  {
    n: 6,
    title: "Time Thresholds by Category",
    range: "minutes to meet or exceed",
    points: [
      "Office new: 15/30/45/60 · established: 10/20/30/40",
      "Hospital initial: 40/55/75 · subsequent: 25/35/50",
      "Consults office: 20/30/40/55 · inpatient: 35/45/60/80",
      "99211 has neither an MDM nor a time requirement",
    ],
    callout: "Levels aren't interchangeable across categories — same MDM name, different minutes.",
  },
  {
    n: 7,
    title: "Critical Care Services",
    range: "99291–99292",
    points: [
      "A vital organ system is acutely impaired — serious deterioration likely without intervention",
      "30–74 min = 99291 ×1; then 99292 for each additional 30-minute block",
      "99291 is reported only once per date, even if care is split into separate visits",
      "Packaged: chest x-ray, blood gases, pulse oximetry, ventilator management, gastric intubation, vascular access",
    ],
    callout: "Time off the unit where the physician isn't immediately available doesn't count — a phone call from home is out.",
  },
  {
    n: 8,
    title: "Prolonged Services",
    range: "99417–99418 · 99358–99360 · 99415–99416",
    points: [
      "99417 (office): starts 15 min past the time-based top code — past 60 min new, past 40 min established",
      "99418 (inpatient/observation): same idea, each primary code has its own starting point",
      "99358/99359: no direct patient contact, on a different date from the visit",
      "99415/99416: prolonged clinical staff time, office only, never with 99417",
    ],
    callout: "Only valid when the primary code was leveled by TIME — never after an MDM-based level.",
  },
  {
    n: 9,
    title: "Same-Day & Status Rules",
    points: [
      "Modifier 25: E/M significant and separately identifiable from a same-day procedure — same diagnosis is fine",
      "Split/shared visit: time-based → majority-time provider bills; MDM-based → whoever owns the management plan",
      "Discharge + readmit, same facility, same date → subsequent care, not a new initial or discharge service",
      "Consultation = opinion requested and sent back in writing; taking over care = new/established code, not a consult",
    ],
    callout: "Consultations and transfers of care get mixed up constantly — the test is who keeps managing the patient afterward.",
  },
  {
    n: 10,
    title: "The Deck's Old System vs. 2026",
    range: "7 components · history/exam types",
    points: [
      "7 components (3 key + 3 contributory + time) → replaced by MDM (2 of 3) or total time",
      "History/exam types (problem focused → comprehensive) → retired for level selection",
      "'>50% counseling' rule → gone; time is just one of two routes now",
      "99354–99357 (old prolonged with contact) → deleted, replaced by 99417/99418",
    ],
    callout: "If a question uses 'detailed history' or '3 of 3 key components,' it's testing the old system — answer with 2026 rules.",
  },
];

export default function EmSchematicPage() {
  return (
    <SeriesSchematicPage
      theme={TEAL}
      kicker="E/M SERIES · STRATEGIC SCHEMATIC"
      title="E/M at a Glance"
      blurb="The whole 98000–99499 evaluation & management chapter as one visual roadmap — ten stops, top to bottom."
      nav={[
        { href: "/cpt/e-m/99,000", label: "99,000 series home" },
        { href: "/cpt/e-m/99000-series-guidelines-reviewer", label: "Reviewer Pt. 1" },
        { href: "/cpt/e-m/99000-series-guidelines-reviewer-part-2", label: "Reviewer Pt. 2" },
        { href: "/cpt/e-m/99000-series-guidelines-reviewer-part-3", label: "Reviewer Pt. 3" },
        { href: "/cpt/e-m/99000-series-discussion-guide", label: "Discussion Guide" },
      ]}
      backHref="/cpt/e-m/99,000"
      backLabel="← Back to 99,000 Series"
      nodes={nodes}
      strategyTitle="The Biggest CPC Strategy for E/M"
      strategyText={
        <>
          <p style={{ margin: "0 0 10px" }}>Every level-based E/M question resolves through the same chain:</p>
          <p style={{ margin: "0 0 10px", fontWeight: 800, fontSize: "17px" }}>PLACE → STATUS (new/established, initial/subsequent) → MDM vs. TIME (stronger route wins) → PROLONGED UNITS (time-based only) → SAME-DAY EXTRAS (modifier 25, split/shared)</p>
          <p style={{ margin: "0 0 10px" }}>Worked example: an established office patient returns for a flare-up of a chronic illness. The doctor reviews one outside note plus orders and reviews two lab panels, and starts a new prescription. Documented time on the date: 47 minutes.</p>
          <p style={{ margin: "0 0 10px" }}>By MDM — problems (an exacerbation) = moderate; data (1 external note + 2 tests = 3 Category 1 items) = moderate; risk (prescription drug management) = moderate. Two of three at moderate → 99214. By time — established-patient thresholds are 10/20/30/40, and 47 minutes clears the 40-minute mark for 99215.</p>
          <p style={{ margin: 0 }}>Both routes are supported, so take the stronger one: 99215, by time — not 99214. Work the chain in order and the code stops being something you guess and becomes something you build, piece by piece, every time.</p>
        </>
      }
    />
  );
}
