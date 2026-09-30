import { SeriesSchematicPage, type SchematicNode } from "../_digestive/schematic";
import { SLATE } from "../_digestive/players";

const nodes: SchematicNode[] = [
  {
    n: 1,
    title: "Chapter Map",
    range: "20100–29999",
    points: [
      "General (20100–20999) → head-to-foot anatomy → casts/strapping → endoscopy/arthroscopy",
      "Within each region: Incision → Excision → Intro/Removal → Repair/Reconstruction → Fracture/Dislocation → Amputation → Other",
      "Learn the ORDER, not every boundary number",
    ],
    callout: "The same internal order repeats region by region — use it to jump straight to the right page.",
  },
  {
    n: 2,
    title: "The MS Surgical Package",
    points: [
      "Bundled: FIRST cast/splint/traction device (application + removal), local anesthesia, routine follow-up",
      "Modifier 56 never applies to a cast/splint — it's never preoperative care",
      "Supplies (Q4xxx) are always separately billable, even when the device itself is bundled",
    ],
    callout: "Three packaged services, not just the cast rule — know all three.",
  },
  {
    n: 3,
    title: "Fracture & Dislocation Treatment Types",
    points: [
      "Closed (± manipulation/traction) vs. percutaneous skeletal fixation vs. open",
      "Fracture TYPE (open/closed injury) ≠ treatment TYPE — independent variables",
      "Skeletal traction penetrates bone; skin traction never does",
      "Modifiers: 54 (surgical care only) · 76 (repeat, same physician) · 77 (repeat, different physician)",
    ],
    callout: "An internal fixation nail through a remote incision is still OPEN treatment, even unvisualized.",
  },
  {
    n: 4,
    title: "Casting, Splinting & Strapping",
    range: "29000–29799",
    points: [
      "Subsequent (replacement) casts/splints ARE separately billable — the first one never is",
      "Removal by a different physician than the one who applied it → its own code (29700–29710)",
      "Sprain/strain immobilization routes to STRAPPING codes, not the fracture cast-application codes",
    ],
    callout: "No fracture code to bundle into? The cast/strap itself becomes the billable service.",
  },
  {
    n: 5,
    title: "Tumor Excision — The Four Tiers",
    points: [
      "Subcutaneous → subfascial → radical resection (soft tissue) → radical resection (bone)",
      "Sized by diameter + narrowest margin at time of excision — except radical BONE, which is location-only",
      "Vessel exploration, neuroplasty, complex closure always reported separately",
      "Skin-origin lesions route to Integumentary codes instead",
    ],
    callout: "Radical bone tumor resection is the one tier where size and benign/malignant status don't matter at all.",
  },
  {
    n: 6,
    title: "Head, Neck, Thorax & Back/Flank",
    range: "21010–21935",
    points: [
      "TMJ arthrotomy/arthroplasty; LeFort I/II/III craniofacial reconstruction & fracture, by piece count + bone graft",
      "Chest wall tumor, pectus repair (open vs. Nuss ± thoracoscopy)",
      "Closed rib fracture = E/M only; open with fixation tiers by rib count (1–3 / 4–6 / 7+)",
      "Back/flank soft-tissue excision excludes the spine itself (routes to 22010–22015)",
    ],
    callout: "LeFort level, piece count, and bone-graft status are three separate variables — miss one, wrong code.",
  },
  {
    n: 7,
    title: "Spine — Bundling, Arthrodesis & Instrumentation",
    range: "22010–22870",
    points: [
      "Bone grafts (20930–20938) & instrumentation (22840–22859) always reported separately from arthrodesis",
      "Modifier 51 on arthrodesis combined with another definitive procedure — except add-ons 22585/22614/22632",
      "Modifier 62 (co-surgeon) forbidden on bone graft and instrumentation codes",
      "Arthrodesis organized by approach: lateral extracavitary, anterior/anterolateral, posterior/posterolateral/interbody",
    ],
    callout: "Deformity arthrodesis and instrumentation are both tiered by vertebral SEGMENT count — count carefully.",
  },
  {
    n: 8,
    title: "Spine — Osteotomy, Fracture & Vertebral Augmentation",
    range: "22206–22527",
    points: [
      "3-column (pedicle/vertebral body subtraction) vs. simpler 1-column osteotomy — each with its own add-on",
      "Odontoid (C1–C2) fracture has its own dedicated code pair, separate from other vertebral fracture/dislocation",
      "Vertebroplasty (cement only) vs. vertebral augmentation/kyphoplasty (cavity creation first) — both bundle imaging + bone biopsy",
    ],
    callout: "That one cavity-creation step is the entire difference between vertebroplasty and kyphoplasty coding.",
  },
  {
    n: 9,
    title: "Shoulder / Elbow / Wrist — Repair & Reconstruction Variants",
    range: "23395–25492",
    points: [
      "Capsulorrhaphy: Bankart, bone block, coracoid transfer, posterior, multidirectional — each its OWN code",
      "Ligament/tendon: repair with local tissue vs. reconstruction with tendon graft are different codes",
      "Arthroplasty: hemiarthroplasty vs. total vs. revision (one component or both) — same pattern repeats shoulder → elbow → wrist",
    ],
    callout: "Technique variants are separate codes, never a modifier on one base code — the recurring pattern here.",
  },
  {
    n: 10,
    title: "Named Fracture-Dislocation Combos & Escalation",
    range: "23500–25999",
    points: [
      "Monteggia (ulna shaft + radial head dislocation) and Galeazzi (radius shaft + DRUJ dislocation) each get a dedicated combination code",
      "Shoulder dislocation + tuberosity/neck fracture → its own combination code, not two separate codes",
      "Fracture treatment escalates: closed w/o manipulation → closed w/ manipulation → open w/ fixation → open w/ prosthesis",
    ],
    callout: "Named combination injuries are a trap — billing the two components separately is the wrong answer.",
  },
  {
    n: 11,
    title: "Injections, Arthrocentesis & Biopsy",
    range: "20200–20612",
    points: [
      "Arthrocentesis by JOINT SIZE — small/intermediate/major — each size has its own separate \"with ultrasound\" code",
      "Trigger points counted by MUSCLE (1–2 vs. 3+), reported once per session, not per injection site",
      "Muscle biopsy: superficial vs. deep; bone biopsy: technique (trocar/needle vs. open) × depth",
    ],
    callout: "Ultrasound guidance is baked into 20604/20606/20611 — fluoroscopic/CT/MRI guidance still needs its own separate code.",
  },
  {
    n: 12,
    title: "Arthroscopy & Endoscopy",
    range: "29800–29999",
    points: [
      "Diagnostic arthroscopy (29870) is bundled into any surgical arthroscopy in the same joint, same session",
      "Meniscectomy (29880/29881) splits medial+lateral vs. medial OR lateral — a separate family from meniscus REPAIR (29882/29883)",
      "A categorically different procedure (e.g., ligament reconstruction) in another compartment still gets its own code",
    ],
    callout: "29881's built-in meniscectomy + chondroplasty bundling never extends to an unrelated procedure like ligament work.",
  },
];

export default function TwentyThousandSchematicPage() {
  return (
    <SeriesSchematicPage
      theme={SLATE}
      kicker="20,000 SERIES · STRATEGIC SCHEMATIC"
      title="Musculoskeletal at a Glance"
      blurb="The whole 20100–29999 Musculoskeletal chapter as one visual roadmap — twelve stops, general rules through arthroscopy."
      nav={[
        { href: "/cpt/surgery/20,000", label: "20,000 Series home" },
        { href: "/cpt/surgery/20000-series-guidelines-reviewer", label: "Reviewer Pt. 1" },
        { href: "/cpt/surgery/20000-series-guidelines-reviewer-part-2", label: "Pt. 2" },
        { href: "/cpt/surgery/20000-series-guidelines-reviewer-part-3", label: "Pt. 3" },
        { href: "/cpt/surgery/20000-series-discussion-guide", label: "Discussion Guide" },
      ]}
      backHref="/cpt/surgery/20,000"
      backLabel="← Back to 20,000 Series"
      nodes={nodes}
      strategyTitle="The Biggest CPC Strategy for Musculoskeletal"
      strategyText={
        <>
          <p style={{ margin: "0 0 10px" }}>Almost every Musculoskeletal question resolves with the same chain — walk it in order before you touch a code number:</p>
          <p style={{ margin: "0 0 10px", fontWeight: 800, fontSize: "17px" }}>SITE/INJURY → NAMED COMBINATION PATTERN? → TREATMENT TYPE (closed/percutaneous/open) → WHAT'S BUNDLED → WHO DOES FOLLOW-UP</p>
          <p style={{ margin: "0 0 10px" }}>Worked example: a construction worker falls and fractures the tibial shaft. The ED physician manipulates it, applies a long leg cast, and hands off all follow-up care to an orthopedic group.</p>
          <p style={{ margin: "0 0 10px" }}><strong>Site/injury</strong> — tibial shaft, not one of the named combination patterns (no Monteggia, no Galeazzi, no shoulder-dislocation-plus-tuberosity-fracture) — so there's no combination code to hunt for. <strong>Treatment type</strong> — the site was never surgically opened, and manual force realigned it, so this is closed treatment with manipulation. <strong>What's bundled</strong> — the long leg cast is the FIRST device for this fracture, so it's already packaged into the treatment code; it's never billed on its own. <strong>Who does follow-up</strong> — since a different group takes over all subsequent care, modifier 54 (surgical care only) gets appended to the fracture code.</p>
          <p style={{ margin: 0 }}>One fracture code, one modifier, no separate cast code, no combination code — the whole answer falls out once the chain is walked in order instead of guessed at from memory.</p>
        </>
      }
    />
  );
}
