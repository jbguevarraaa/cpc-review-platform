import { SeriesSchematicPage, type SchematicNode } from "../_digestive/schematic";
import { VIOLET } from "../_digestive/players";

const nodes: SchematicNode[] = [
  {
    n: 1,
    title: "Chapter Map",
    range: "60000–69990",
    points: [
      "Endocrine 60000–60699 → Nervous system 61000–63746 → Peripheral nerve 64400–64999 → Eye 65091–68899 → Ear 69000–69990",
      "Built here: endocrine · skull base & endovascular · radiosurgery & neurostimulators · spine decompression",
      "Not built yet: craniotomy block 61304–61576, aneurysm/AVM surgery, epidural/intrathecal injections & pumps, shunts, peripheral nerve, eye, ear",
    ],
    callout: "Know which sub-range you're in before you touch a code.",
  },
  {
    n: 2,
    title: "Skull Base Surgery",
    range: "61580–61619",
    points: [
      "Three layers: approach (getting in) → definitive (treating the lesion) → repair (only if extensive)",
      "Approach is picked by ROUTE/fossa (anterior, middle, posterior); definitive is picked by LESION location, extradural vs. intradural",
      "One surgeon does 2+ layers → report both codes, modifier 51 on the lower-valued one (usually the approach)",
      "Ordinary closure is included; 61618/61619 are only for a secondary CSF-leak repair",
    ],
    callout: "The route names the approach code; the lesion location names the definitive code.",
  },
  {
    n: 3,
    title: "Intracranial Endovascular Therapy",
    range: "61623–61651",
    points: [
      "Three vascular territories: right carotid, left carotid, vertebro-basilar",
      "Vasospasm balloon (61640/+61641/+61642) counts per VESSEL; drug infusion (61650/+61651) counts per TERRITORY",
      "61645, 61650, and 61651 already include catheterization + all angiography of the TREATED territory",
      "Angiography of an UNTREATED territory is billed separately (with modifier 59)",
    ],
    callout: "Draw the three territories, mark which one was treated — everything in that box is packaged.",
  },
  {
    n: 4,
    title: "Stereotactic Radiosurgery",
    range: "61796–61800 · 63620–63621",
    points: [
      "Complex cranial lesion = ≥3.5 cm, OR schwannoma/AVM/pituitary/glomus/pineal/cavernous-parasellar-petroclival, OR within 5 mm of the optic pathway, OR brainstem",
      "All lesions simple → base 61796 + additional simple lesions as +61797",
      "ANY complex lesion → base 61798 + additional simple as +61797, additional complex as +61799",
      "+61800 = headframe application; spine version is 63620 + 63621 (max twice per course)",
    ],
    callout: "One complex lesion in the group flips the whole base code to 61798.",
  },
  {
    n: 5,
    title: "Neurostimulators",
    range: "61850–61892 · 63650–63688",
    points: [
      "No 'system' code — always report electrodes and pulse generator as separate services",
      "Brain electrodes: cortical (61850/61860) vs. subcortical/stereotactic (61863/+61864, or with microelectrode recording 61867/+61868)",
      "Generator: 61885 (single array) vs. 61886 (2+ arrays); skull-mounted generator is 61889/61891/61892",
      "Spine: percutaneous array 63650 vs. plate/paddle 63655; generator is 63685",
    ],
    callout: "Two shopping lists every time: electrodes, then the generator.",
  },
  {
    n: 6,
    title: "Spine Decompression — Posterior",
    range: "62287–62380 · 63001–63048",
    points: [
      "First ask HOW: percutaneous (62287, 62330/+62331) vs. endoscopic (62380) vs. open — spine is presumed open unless stated",
      "Plain laminectomy (63001–63017) counts in 2 BANDS: 1–2 segments, or more than 2 — picked once",
      "Laminectomy WITH facetectomy/foraminotomy (63045–63047 + 63048) counts per SEGMENT",
      "Laminotomy (63020/63030 + 63035) counts per INTERSPACE; bilateral = modifier 50 on the base, add-on reported twice with no 50",
    ],
    callout: "Three different counting units in one topic — band, segment, interspace. Confirm the family before you count.",
  },
  {
    n: 7,
    title: "Spine Decompression — Anterior, Lateral & Transpedicular",
    range: "63055–63103",
    points: [
      "Discectomy counts per INTERSPACE (63075/+63076 cervical, 63077/+63078 thoracic)",
      "Corpectomy counts per SEGMENT (63081/+63082 cervical, 63085/+63086 thoracic, 63087–63091 thoracolumbar)",
      "Anterior discectomy + same-level fusion → code the fusion (22551/22552), not 63075",
      "Operating microscope is included in 63075–63078 — never add 69990",
    ],
    callout: "Memory hook: DISC = INTERspace, BODY = SEGMENT.",
  },
  {
    n: 8,
    title: "The Endocrine Glands",
    range: "60000–60699",
    points: [
      "Five glands, grouped in order: thyroid 60000–60300 → parathyroid 60500–60512 → thymus 60520–60522 → adrenal 60540–60650 → carotid body 60600–60605",
      "Thyroid: sort by how much came out — piece (60200), one lobe (60210/60220), everything (60240), for cancer (60252/60254 by neck-dissection extent)",
      "+60512 = parathyroid autotransplantation add-on (with parathyroidectomy or several thyroid codes)",
      "Adrenalectomy: open 60540/60545 vs. laparoscopic 60650 — a different code, not a modifier",
    ],
    callout: "Sort by gland, then by how much came out.",
  },
  {
    n: 9,
    title: "What's Packaged vs. Separately Billable",
    points: [
      "Bundled: the approach layer, ordinary closure, routine catheterization/angiography of the TREATED territory, and surgeon-performed microelectrode recording",
      "Billable separately: extensive repairs, imaging of an UNTREATED territory, and later programming/analysis (Medicine-section codes)",
      "The 'do not report X with Y' lines throughout this series exist to stop double-billing packaged work",
    ],
    callout: "Ask: was this step necessary to DO the main procedure, or is it a genuinely separate service?",
  },
];

export default function NeuroEndocrineSchematicPage() {
  return (
    <SeriesSchematicPage
      theme={VIOLET}
      kicker="60,000 SERIES · STRATEGIC SCHEMATIC"
      title="Neuro-Endocrine System at a Glance"
      blurb="Skull base surgery, intracranial endovascular therapy, radiosurgery, neurostimulators, spine decompression, and the endocrine glands — nine stops, top to bottom."
      nav={[
        { href: "/cpt/surgery/60,000", label: "Neuro-Endocrine home" },
        { href: "/cpt/surgery/60000-series-guidelines-reviewer", label: "Reviewer Pt. 1" },
        { href: "/cpt/surgery/60000-series-guidelines-reviewer-part-2", label: "Reviewer Pt. 2" },
        { href: "/cpt/surgery/60000-series-guidelines-reviewer-part-3", label: "Reviewer Pt. 3" },
      ]}
      backHref="/cpt/surgery/60,000"
      backLabel="← Back to Neuro-Endocrine System"
      nodes={nodes}
      strategyTitle="The Biggest CPC Strategy for the 60,000 Series"
      strategyText={
        <>
          <p style={{ margin: "0 0 10px" }}>Every code in this series answers the same five questions, in order:</p>
          <p style={{ margin: "0 0 10px", fontWeight: 800, fontSize: "16px" }}>REGION/GLAND → APPROACH OR ROUTE → WHAT WAS ACTUALLY DONE → HOW THIS FAMILY COUNTS → WHAT'S PACKAGED VS. SEPARATE</p>
          <p style={{ margin: "0 0 10px" }}>
            Run the acute-stroke case through it. <strong>Region</strong> — intracranial, left MCA, which sits in the left carotid territory. <strong>Route</strong> — endovascular, via femoral access. <strong>What was actually done</strong> — a clot was removed, not just imaged, so the definitive act is a thrombectomy (61645), not a code for each angiogram along the way. <strong>How this family counts</strong> — per vascular territory, and only the left territory was treated. <strong>Packaged vs. separate</strong> — every angiogram inside the treated left territory is bundled into 61645; the right internal carotid was studied but never treated, so it is billed separately as 36224-59.
          </p>
          <p style={{ margin: 0 }}>Whether you are in the skull, the spine, or the endocrine glands, the five questions stay the same — only the vocabulary at each step changes.</p>
        </>
      }
    />
  );
}
