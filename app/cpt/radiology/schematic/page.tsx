import { SeriesSchematicPage, type SchematicNode } from "../../surgery/_digestive/schematic";
import type { Theme } from "../../surgery/_digestive/players";

const RADIOLOGY: Theme = { dark: "#3c2f2f", accent: "#8b5e3c", soft: "#fff7e8", border: "#d8d0c5", bg: "#fbfaf7", text: "#2a2926", muted: "#6b4226", light: "#f6d9a8" };

const nodes: SchematicNode[] = [
  {
    n: 1,
    title: "Chapter Map & Core Algorithm",
    range: "70010–79999",
    points: [
      "70010–76499 Diagnostic Radiology → 76506–76999 Ultrasound → 77001–77022 Guidance → 77046–77067 Mammography → 77071–77078+ Bone/Joint → 77261–77799 Radiation Oncology → 78012–79999 Nuclear Medicine",
      "Every question resolves the same way: body part → modality → technique/contrast → guidance → inclusion/exclusion",
      "Modality options to consider: X-ray, CT, MRI/MRA, CTA, ultrasound, fluoroscopy, nuclear medicine",
    ],
    callout: "Learn the section MAP first — it's a bigger score boost than memorizing isolated codes.",
  },
  {
    n: 2,
    title: "CT Contrast Pattern — The 0/1/2 Family",
    range: "70450–74170",
    points: [
      "3-code pattern repeats per body site: without contrast → with contrast → without-then-with",
      "Head 70450/70460/70470 · Thorax 71250/71260/71270 · Abdomen 74150/74160/74170 · Pelvis 72192/72193/72194",
      "Upper extremity 73200/73201/73202 · Lower extremity 73700/73701/73702",
    ],
    callout: "Last-digit shortcut (0=without, 1=with, 2=both) holds reliably within CT families — not universally.",
  },
  {
    n: 3,
    title: "MRI Pattern",
    range: "70551–73720",
    points: [
      "Same without/with/without-then-with logic, different code endings per site",
      "Brain 70551/70552/70553 · Orbit-Face-Neck 70540/70542/70543 · Chest 71550/71551/71552",
      "Extremities: upper 73218/73219/73220 · lower 73718/73719/73720",
      "Functional MRI: 70554 (nonphysician-administered testing) vs 70555 (physician/psychologist, requires 96020)",
    ],
  },
  {
    n: 4,
    title: "CTA & MRA — Angiography Imaging",
    range: "70496–75635",
    points: [
      "MRA = MR + angiography (vessels); head/neck MRA routes to its own family, 70544–70549, not the plain-MRI codes",
      "CTA: head 70496 · neck 70498 · chest 71275 · pelvis 72191 · abdomen 74175 · abdomen+pelvis 74174",
      "75635 = CTA abdominal aorta + bilateral iliofemoral lower-extremity runoff — go straight there for that phrase",
    ],
    callout: "Many CTA descriptors already include noncontrast images/postprocessing — don't add a separate noncontrast CT code on top.",
  },
  {
    n: 5,
    title: "X-ray View Counts",
    range: "70100–72120",
    points: [
      "Head/neck: mandible 70100/70110, facial bones 70140/70150, sinuses 70210/70220, skull 70250/70260 — all split by view count",
      "Chest: 71045 (1 view) → 71046 (2) → 71047 (3) → 71048 (4+)",
      "Spine: cervical 72040/72050/72052, thoracic 72070/72072/72074, lumbosacral 72100/72110/72114 by view count",
    ],
    callout: "More views = a different code — always check the documented count before picking one.",
  },
  {
    n: 6,
    title: "Spine Imaging — Contrast Route Matters",
    range: "72141–72158",
    points: [
      "Spine CT contrast is either intrathecal (code the injection separately, e.g., 61055/62284) or IV (bundled into the CT, never separately coded)",
      "Spine MRI follows the usual without/with/without-then-with pattern: cervical 72141/72142/72156, thoracic 72146/72147/72157, lumbar 72148/72149/72158",
    ],
  },
  {
    n: 7,
    title: "Abdomen + Pelvis — The Combined-Exam Trap",
    range: "74150–74178",
    points: [
      "Standalone: abdomen CT 74150/74160/74170 · pelvis CT 72192/72193/72194",
      "Combined single exam: 74176/74177/74178 — never reported alongside the standalone codes",
    ],
    callout: "This bundling trap is one of the highest-yield rules in the whole series.",
  },
  {
    n: 8,
    title: "GI & Urinary Contrast Studies",
    range: "74220–74485",
    points: [
      "Esophagus: 74220 single vs 74221 double contrast — mutually exclusive",
      "Upper GI 74240/74246 (single/double) + 74248 small-bowel follow-through add-on",
      "Colon: CT colonography 74261 (diagnostic without) / 74262 (diagnostic with) / 74263 (screening); classic barium enema 74270/74280 single vs double",
      "Urinary tract: IVP 74400, retrograde urography 74420, antegrade 74425, cystography 74430",
    ],
  },
  {
    n: 9,
    title: "Vascular & Interventional Radiology",
    range: "75774–75989",
    points: [
      "Selective catheterization includes the approach — don't separately code every lesser-order vessel reached en route",
      "Diagnostic angiography/venography is bundled into an intervention UNLESS no prior study existed, or the condition changed/anatomy was inadequately seen — then append modifier 59",
      "75894 (transcatheter embolization) bundles contrast injection, roadmapping, guidance, completion angiography; 75898 = follow-up angiography through an existing catheter",
      "75989 = image-guided percutaneous drainage with catheter placement (fluoro/US/CT), supervision & interpretation included",
    ],
  },
  {
    n: 10,
    title: "Guidance Codes — One Family, Four Modalities",
    range: "76942 / 77002 / 77012 / 77021",
    points: [
      "76942 ultrasound · 77002 fluoroscopic · 77012 CT · 77021 MRI — all needle-placement guidance, all include supervision & interpretation",
      "76937 = ultrasound guidance for vascular access (documented site evaluation + real-time visualization required)",
      "MR safety: 76014/76015 staff implant screening, 76016 physician determination, 76017–76019 day-of-exam physics/electronics/positioning",
    ],
    callout: "Before coding any guidance code, check whether the primary procedure already bundles it in.",
  },
  {
    n: 11,
    title: "Cardiac Imaging Across Modalities",
    range: "75557–75580 / 93306–93325",
    points: [
      "Cardiac MRI 75557–75565 (plain/stress/contrast/velocity) — only one reported per session",
      "Cardiac CT 75571 (calcium score) / 75572 (structure) / 75573 (congenital) / 75574 (coronary CTA) — only one per encounter",
      "75580 = CT-derived fractional flow reserve, reported together with 75574",
      "Echo: 93306 complete + Doppler/color, 93307 complete without Doppler, 93308 limited; TEE 93312/93314; Doppler add-ons 93320/93321/93325",
    ],
  },
  {
    n: 12,
    title: "Ultrasound — Complete vs. Limited, Plus OB",
    range: "76700–76857 / 76801–76819",
    points: [
      "Complete vs. limited runs through every family: abdomen 76700/76705, retroperitoneal 76770/76775, breast 76641/76642, pelvis 76856/76857",
      "OB: first trimester 76801 (+76802 add-on) · complete anatomy scan 76805 (+76810 add-on) · follow-up growth 76816 · transvaginal 76817",
      "Biophysical profile: 76818 without NST vs 76819 with NST",
    ],
    callout: "\"One organ only\" or \"gallbladder only\" documentation points to limited, not complete — don't default upward.",
  },
  {
    n: 13,
    title: "Mammography, Breast MRI, Bone/Joint & DXA",
    range: "77065–77085",
    points: [
      "Mammography: 77067 screening bilateral · 77065/77066 diagnostic unilateral/bilateral",
      "Breast MRI mirrors the CT pattern: 77046 without / 77047 with / 77048 without-then-with",
      "Bone/joint: 77071 stress views, 77072 bone age, 77074 skeletal survey, 77075 metastatic survey",
      "DXA: 77080 axial (routine osteoporosis screening) vs 77081 peripheral; 77085 adds vertebral fracture assessment",
    ],
  },
  {
    n: 14,
    title: "Radiation Oncology & Nuclear Medicine Workflow",
    range: "77261–77427 / 78012–78816",
    points: [
      "Rad onc workflow: consult → simulation (77280/77285/77290) → treatment planning (77261/77262/77263) → dosimetry (77300, 77336, 77370) → delivery → management (77427, typically weekly)",
      "Nuclear medicine = administer radioactive material, then image: thyroid uptake 78012/78013, brain SPECT 78607, whole-body bone scan 78306, myocardial perfusion 78451–78454",
      "PET falls in the 788xx range (78811–78816 whole regions, 78830–78832 limited) — many PET/CT codes already bundle the CT, don't double-code it",
    ],
  },
];

export default function RadiologySchematicPage() {
  return (
    <SeriesSchematicPage
      theme={RADIOLOGY}
      kicker="RADIOLOGY SERIES · STRATEGIC SCHEMATIC"
      title="Radiology at a Glance"
      blurb="The entire 70010–79999 chapter as one visual roadmap — fourteen stops, top to bottom, tracing the patterns that actually decide the code."
      nav={[
        { href: "/cpt/radiology", label: "Radiology home" },
        { href: "/cpt/radiology/guidelines", label: "Guidelines" },
        { href: "/cpt/radiology/master-reviewer", label: "Master Reviewer Pt. 1" },
        { href: "/cpt/radiology/master-reviewer-part-2", label: "Master Reviewer Pt. 2" },
      ]}
      backHref="/cpt/radiology"
      backLabel="← Back to Radiology"
      nodes={nodes}
      strategyTitle="The Biggest CPC Strategy for 70K"
      strategyText={
        <>
          <p style={{ margin: "0 0 10px" }}>Never start by searching your memory for the code number. Work every radiology question through the same chain:</p>
          <p style={{ margin: "0 0 10px", fontWeight: 800, fontSize: "17px" }}>BODY PART → MODALITY → CONTRAST → VIEWS/TECHNIQUE → GUIDANCE → INCLUSION/EXCLUSION</p>
          <p style={{ margin: "0 0 10px" }}><strong>Example:</strong> &ldquo;Complete pelvic ultrasound, followed by ultrasound-guided aspiration of a pelvic fluid collection in the same session.&rdquo;</p>
          <p style={{ margin: 0 }}>Body part = pelvis → Modality = ultrasound → Contrast = not applicable → Views/technique = complete, not limited, so 76856 → Guidance = ultrasound guidance for needle placement, 76942 → Inclusion/exclusion = confirm 76942 isn&apos;t already bundled into the aspiration code itself before reporting both. Work it in that order and the code stops being something you recall — it becomes something you build, piece by piece, every time.</p>
        </>
      }
    />
  );
}
