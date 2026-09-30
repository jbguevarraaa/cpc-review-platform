import { SeriesSchematicPage, type SchematicNode } from "../_digestive/schematic";
import { TEAL } from "../_digestive/players";

const nodes: SchematicNode[] = [
  {
    n: 1,
    title: "Chapter Map",
    range: "30000–32999",
    points: [
      "Nose → Accessory Sinuses → Larynx → Trachea & Bronchi → Lungs & Pleura — outside-in, top of airway to bottom",
      "31,000 series (31000–31899) = everything between nose and lungs: sinuses, larynx, trachea, bronchi",
      "Category order inside most subsections: Incision → Excision/Destruction → Endoscopy → Introduction/Removal → Repair → Other Procedures",
    ],
    callout: "Learn the order of the 5 subsections before memorizing individual codes.",
  },
  {
    n: 2,
    title: "Nose",
    range: "30000–30999",
    points: [
      "Turbinate work has 3 mutually exclusive techniques: excision/resection (30130/30140), ablation (30801/30802), fracture (30930)",
      "Superior/middle turbinate procedures have no dedicated code — always route to unlisted 30999",
      "Simple (office-level) vs. extensive (hospital-level) polyp excision — 30110 vs. 30115",
      "Nasal valve repair (30465/30468/30469) mutually exclusive per side, written as bilateral by default",
    ],
    callout: "Superior or middle turbinate named specifically? Jump straight to 30999.",
  },
  {
    n: 3,
    title: "Accessory Sinuses",
    range: "31000–31299",
    points: [
      "Surgical sinus endoscopy = sinusotomy (when appropriate) + diagnostic endoscopy, bundled, never billed apart",
      "31237 (biopsy/polypectomy/debridement) is the anchor — most other add-ons build on top of it",
      "Biggest bundling trap: once the most extensive procedure is billed on one side, lesser/diagnostic components on that same side aren't separately reportable",
      "Stereotactic navigation (61782) is never part of the package — always separately reported",
    ],
    callout: "Ask: is this already included in a more extensive code I'm billing on this side?",
  },
  {
    n: 4,
    title: "Larynx",
    range: "31300–31599",
    points: [
      "Indirect (mirror) vs. direct (rigid scope) vs. flexible (fiberoptic) laryngoscopy — three separate code families",
      "Stenosis/web repair family (31551–31554, 31580) mutually exclusive: web vs. stenosis, age <12 vs. 12+, stent or no stent",
      "Operating microscope/telescope: use the dedicated inclusive variant when one exists; otherwise add 69990 once per session",
    ],
    callout: "Web or stenosis? Stent or no stent? Two questions, one code.",
  },
  {
    n: 5,
    title: "Trachea & Bronchi",
    range: "31600–31899",
    points: [
      "Tracheoscopy has no code family of its own — billed via the laryngoscopy codes (31515–31574)",
      "Tracheobronchoscopy through an established tracheostomy = one single code, 31615",
      "31622 is the anchor bronchoscopy code — surgical bronchoscopy always includes diagnostic, never billed separately",
      "Base code billed once per lobe/site; extra lobes go to add-ons (31632/31633), not repeated base-code units",
    ],
    callout: "\"Each additional lobe\" in the stem is your flag for the add-on code, not a doubled base code.",
  },
  {
    n: 6,
    title: "Lung & Pleural Biopsy — Picking the Approach",
    range: "32096–32098, 32400, 32408, 32601–32609",
    points: [
      "Three approaches, never mixed: open/thoracotomy, percutaneous needle, thoracoscopic (VATS)",
      "32408 (percutaneous core needle) bundles ALL imaging guidance, no matter how many modalities",
      "Diagnostic wedge/biopsy that leads to NO further resection → only the therapeutic wedge code itself",
      "Diagnostic wedge that DOES lead to a bigger resection same session → bigger code + add-on (32507 open / 32668 VATS)",
    ],
    callout: "Diagnostic-intent vs. therapeutic-intent is the fork that decides everything downstream (see the capstone below).",
  },
  {
    n: 7,
    title: "Thoracotomy",
    range: "32035–32036, 32100–32225",
    points: [
      "Built around the surgeon's GOAL: explore, control hemorrhage, decorticate, remove cyst/bullae, drain empyema",
      "Empyema thoracostomy (32035/32036) is distinct from trauma wound exploration, which explicitly excludes a thoracotomy approach",
      "A dedicated code exists specifically for thoracotomy done for postoperative complications, separate from a first-time exploration",
    ],
    callout: "Identify the specific surgical goal first — \"thoracotomy was performed\" alone isn't enough to pick a code.",
  },
  {
    n: 8,
    title: "Lung Resection — Pneumonectomy Down to Wedge",
    range: "32440–32507",
    points: [
      "Hierarchy: Pneumonectomy → Bilobectomy → Lobectomy → Segmentectomy → Wedge Resection → Biopsy",
      "Sleeve resections (32442 pneumonectomy, 32486 lobectomy) = airway segment resected AND reconnected",
      "Additional therapeutic wedge, same lung → add-on 32505/32506; opposite lung → base code again",
      "Therapeutic wedge + bigger procedure, same lobe/lung → bundled; different lobe/opposite lung → separate code + modifier 59",
    ],
    callout: "The wedge-escalation logic is the single highest-yield decision tree in this whole series.",
  },
  {
    n: 9,
    title: "Pleural Drainage & Catheters",
    range: "32550–32562",
    points: [
      "Left in place (tunneled catheter 32550, tube thoracostomy 32551) vs. aspirated only, nothing left behind (thoracentesis 32554/32555)",
      "Each family splits by with/without imaging guidance — never stack a separate guidance code on top",
      "Fibrinolytic instillation: initial-day code once, subsequent-day code once per additional day",
    ],
    callout: "\"Left in place\" vs. \"aspirated and removed\" is the first fork to resolve.",
  },
  {
    n: 10,
    title: "Thoracoscopy (VATS)",
    range: "32601–32674",
    points: [
      "Mirrors the open-thoracotomy decision tree, just scoped by approach first",
      "Diagnostic thoracoscopy (32601) is bundled into any therapeutic thoracoscopic code, never billed alongside it",
      "Wedge resection follows the identical diagnostic-vs-therapeutic escalation logic as open (32666/32667/32668)",
      "Mediastinal/regional lymphadenectomy add-on (32674) reported once, regardless of how many nodal stations were sampled",
    ],
    callout: "Know the open-procedure logic, and the VATS code becomes mostly a matching exercise.",
  },
  {
    n: 11,
    title: "Transplant, Repair, Collapse Therapy & Ablation",
    range: "32800–32856, 32900–32999",
    points: [
      "Lung transplant = 3 separate components/codes: donor pneumonectomy, backbench prep (uni-/bilateral), recipient transplant (single/double, w/ or w/o bypass)",
      "Repair matches the exact structure and scenario: lung hernia, Clagett empyema closure, bronchial fistula, traumatic chest wall reconstruction",
      "Percutaneous tumor ablation (32994/32998) already includes imaging guidance — never add a separate guidance code",
      "32999 unlisted procedure is the fallback when nothing else in the chapter fits",
    ],
    callout: "Three physicians, three codes — never assume one code covers \"the whole transplant.\"",
  },
];

export default function ThirtyThousandSeriesSchematicPage() {
  return (
    <SeriesSchematicPage
      theme={TEAL}
      kicker="30,000 SERIES · STRATEGIC SCHEMATIC"
      title="Respiratory System at a Glance"
      blurb="The whole 30000–32999 chapter as one visual roadmap — eleven stops, top to bottom."
      nav={[
        { href: "/cpt/surgery/30,000", label: "30,000 Series home" },
        { href: "/cpt/surgery/30000-series-guidelines-reviewer", label: "Guidelines Reviewer Pt. 1" },
        { href: "/cpt/surgery/30000-series-guidelines-reviewer-part-2", label: "Guidelines Reviewer Pt. 2" },
        { href: "/cpt/surgery/30000-series-discussion-guide", label: "Discussion Guide" },
      ]}
      backHref="/cpt/surgery/30,000"
      backLabel="← Back to 30,000 Series"
      nodes={nodes}
      strategyTitle="The Biggest CPC Strategy for the 30,000 Series"
      strategyText={
        <>
          <p style={{ margin: "0 0 10px" }}>Nearly every hard wedge-resection question in this series collapses to the same two-question chain:</p>
          <p style={{ margin: "0 0 10px", fontWeight: 800, fontSize: "17px" }}>WAS THE WEDGE DIAGNOSTIC OR THERAPEUTIC INTENT? → SAME SITE, OR A DIFFERENT LOBE/OPPOSITE LUNG?</p>
          <p style={{ margin: "0 0 10px" }}>Worked example: during a VATS procedure, the surgeon takes a wedge resection of a lung nodule specifically to determine whether it's malignant before deciding how far to go. Frozen section comes back positive, and the surgeon proceeds immediately to a lobectomy in that same lobe, same session.</p>
          <p style={{ margin: "0 0 10px" }}>Run the chain: (1) Intent — the wedge was performed to help DECIDE on further surgery, so it's diagnostic-intent, not a finished treatment. (2) Site — the lobectomy that followed is in the same lobe as the wedge. Diagnostic-intent + a bigger resection at the same site means you never bundle and never drop the wedge — you report BOTH: the bigger procedure code (32663, VATS lobectomy) PLUS the add-on 32668 (diagnostic wedge preceding an anatomic lung resection).</p>
          <p style={{ margin: 0 }}>Now change one fact: the wedge itself was already a complete, margin-attentive removal (therapeutic-intent), and the surgeon later takes a second wedge from a different lobe. That's not an escalation at all — report the initial VATS wedge (32666) and the second wedge in the different lobe with modifier 59, because therapeutic-intent work in a different lobe or the opposite lung is never bundled and never uses the 3266x/3250x add-on. Same two questions, opposite answer, completely different pair of codes.</p>
        </>
      }
    />
  );
}
