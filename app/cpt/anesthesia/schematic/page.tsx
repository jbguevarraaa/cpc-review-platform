import { SeriesSchematicPage, type SchematicNode } from "../../surgery/_digestive/schematic";
import type { Theme } from "../../surgery/_digestive/players";

const CYAN: Theme = { dark: "#0f172a", accent: "#0e7490", soft: "#ecfeff", border: "#cbeaf1", bg: "#f6f8fb", text: "#1b2233", muted: "#475569", light: "#a5f3fc" };

const nodes: SchematicNode[] = [
  {
    n: 1,
    title: "Chapter Map",
    range: "00100–01999",
    points: [
      "Grouped anatomically, head to toe",
      "Head → Neck → Thorax → Spine → Abdomen → Pelvis/Perineum → Leg → Arm",
      "Closes with Radiological, Burn, Obstetric, and Other Procedures",
    ],
    callout: "Know the ORDER, not every boundary number.",
  },
  {
    n: 2,
    title: "The Anesthesia Package",
    points: [
      "Bundled: pre/post-op visits, intra-op care, fluids/blood, routine monitoring, local anesthesia",
      "Separately billable: 31500 (true emergency intubation only), 36620 (arterial line), 36555/36556 (central line <5 / 5+), 93503 (Swan-Ganz)",
    ],
    callout: "\"Unusual monitoring\" is the exception CPT names explicitly.",
  },
  {
    n: 3,
    title: "Types of Anesthesia",
    points: [
      "General — unconsciousness via anesthetic agents",
      "Regional — spinal, epidural, or nerve block",
      "MAC — light/no sedation + local, patient stays responsive",
    ],
    callout: "Same body-area code covers all three — type is captured by documentation/modifiers, not a different code.",
  },
  {
    n: 4,
    title: "Moderate Sedation vs. MAC",
    range: "99151–99157",
    points: [
      "Same physician doing the procedure sedates too → 99151–99153",
      "A second physician sedates, facility setting → 99155–99157",
      "MAC → qualified anesthesia provider only, 00100–01999 + QS/G8/G9",
    ],
    callout: "Ask: who is sedating, and can they convert to general anesthesia?",
  },
  {
    n: 5,
    title: "Time & Payment",
    points: [
      "Starts at prep for induction, ends when no longer in personal attendance",
      "Medicare: (BASE + TIME) × Conversion Factor",
      "Non-Medicare: (BASE + TIME + P-modifier + QC) × Conversion Factor",
    ],
    callout: "Medicare's formula leaves out P-modifiers and QC units entirely.",
  },
  {
    n: 6,
    title: "Physical Status Modifiers",
    range: "P1–P6",
    points: [
      "P1/P2 = healthy/mild disease (0 extra units)",
      "P3 = severe systemic disease (1 unit)",
      "P4 = constant threat to life (2 units) · P5 = moribund (3 units)",
      "P6 = declared brain-dead, organ donor (0 units)",
    ],
  },
  {
    n: 7,
    title: "Qualifying Circumstances",
    range: "+99100 / +99116 / +99135 / +99140",
    points: [
      "Extreme age (<1 or >70) · total body hypothermia",
      "Controlled hypotension · emergency conditions",
      "Add-on only — never alone; more than one may apply",
    ],
  },
  {
    n: 8,
    title: "Modifiers, CPT + HCPCS",
    points: [
      "CPT: 23 unusual anesthesia · 47 anesthesia by surgeon (on the surgical code) · 53 discontinued · 59 distinct service",
      "HCPCS: AA solo · QK/QY direction · QX/QZ CRNA with/without direction · AD supervision · QS/G8/G9 MAC",
      "Sequence: 1st direction modifier → 2nd payment/MAC modifier → 3rd other",
    ],
    callout: "QX and QZ are opposites — don't mix them up.",
  },
  {
    n: 9,
    title: "Direction vs. Supervision",
    points: [
      "Medical Direction: 2–4 concurrent + all 7 required elements met",
      "Medical Supervision: 5+ concurrent, OR any of the 7 elements missing",
    ],
  },
  {
    n: 10,
    title: "Multiple Procedures & Extras",
    points: [
      "One anesthetic, multiple surgeries → report only the MOST COMPLEX code",
      "Time = combined total for all procedures",
      "01999 = unlisted anesthesia procedure, needs a Special Report",
    ],
  },
];

export default function AnesthesiaSchematicPage() {
  return (
    <SeriesSchematicPage
      theme={CYAN}
      kicker="ANESTHESIA SERIES · STRATEGIC SCHEMATIC"
      title="Anesthesia at a Glance"
      blurb="The whole 00100–01999 chapter as one visual roadmap — ten stops, top to bottom."
      nav={[
        { href: "/cpt/anesthesia", label: "Anesthesia home" },
        { href: "/cpt/anesthesia/guidelines-reviewer", label: "Guidelines Reviewer" },
        { href: "/cpt/anesthesia/discussion-guide", label: "Discussion Guide" },
      ]}
      backHref="/cpt/anesthesia"
      backLabel="← Back to Anesthesia"
      nodes={nodes}
      strategyTitle="The Biggest CPC Strategy for Anesthesia"
      strategyText={
        <>
          <p style={{ margin: "0 0 10px" }}>Every anesthesia question resolves with the same six-step chain:</p>
          <p style={{ margin: "0 0 10px", fontWeight: 800, fontSize: "17px" }}>BODY AREA → TYPE OF ANESTHESIA/SEDATION → WHO PERFORMED IT → TIME → MODIFIERS → ANYTHING SEPARATELY BILLABLE</p>
          <p style={{ margin: 0 }}>Work it in that order and the five-digit code stops being something you recall from memory — it becomes something you build, piece by piece, every time.</p>
        </>
      }
    />
  );
}
