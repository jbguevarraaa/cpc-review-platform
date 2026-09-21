import { ReviewerShell, type Subsection } from "../_neuro/kit";
import { SkullBaseDiagram, EndovascularDiagram } from "../_neuro/diagrams";

const sections: Subsection[] = [
  {
    id: "skull-base",
    n: 1,
    title: "Openings in the Skull & Skull Base Surgery",
    range: "61580–61619",
    intro: [
      "Brain and skull codes start with one question: how did the surgeon get in, what was done once inside, and how was it closed? Skull base surgery answers each of those three with its own group of codes.",
      "Skull base operations often bring several surgical specialties into the same operating session. The dura (the tough covering of the brain), the tissue, and the skin have to be closed for good so the wound does not become infected. That is why the codes are split into three layers, and each layer can be done by a different surgeon.",
    ],
    diagram: <SkullBaseDiagram />,
    definitions: [
      ["Twist drill hole", "a small hole made with a hand-held twist drill, usually to quickly reach the ventricles (the fluid spaces) of the brain."],
      ["Burr hole (trephine)", "a small drilled hole, usually for a definitive procedure where it may be the only opening in the skull, or to make room for further surgery."],
      ["Craniectomy / craniotomy", "a piece of skull is removed to relieve pressure on the brain or to reach it. In these codes the two words are used together and are interchangeable."],
      ["Cranial fossae", "the three dents that make up the floor of the skull: anterior (front), middle, and posterior (back). The skull base codes are sorted by them."],
      ["Approach procedure", "the work needed to get enough exposure to the lesion."],
      ["Definitive procedure", "the work that biopsies, removes, or treats the lesion, including primary closure of the dura, mucous membranes, and skin."],
      ["Repair / reconstruction", "closing the defect left behind — reported separately only when it is extensive."],
    ],
    steps: [
      "① Which layer are you coding: getting in (approach), treating the lesion (definitive), or a big repair (reconstruction)?",
      "② Which area of the skull base: anterior, middle, or posterior cranial fossa? (An approach may also be described by the brainstem or upper spinal cord.)",
      "③ For a definitive procedure: is the lesion outside the dura (extradural) or inside it (intradural)?",
      "④ Did one surgeon do two layers? Report both codes and put modifier 51 on the second one.",
      "⑤ Was the closure big (extensive dural graft, cranioplasty, flaps, extensive skin graft)? Only then is a repair reported separately, with the repair or reconstruction code that matches what was done. 61618 and 61619 are the codes for a secondary repair of a spinal-fluid leak.",
    ],
    categories: [
      {
        name: "Approach procedures (61580–61598)",
        codes: [
          ["61580–61586", "ANTERIOR cranial fossa approaches — craniofacial and orbitocranial routes, with or without orbital exenteration or maxillectomy"],
          ["61590 · 61591 · 61592", "MIDDLE cranial fossa — infratemporal pre-auricular · infratemporal post-auricular · orbitocranial zygomatic"],
          ["61595", "POSTERIOR — transtemporal approach (jugular foramen or midline skull base, with mastoidectomy)"],
          ["61596", "POSTERIOR — TRANSCOCHLEAR approach (includes labyrinthectomy, jugular decompression, with or without moving the facial nerve or petrous carotid artery)"],
          ["61597", "POSTERIOR — transcondylar approach (occipital condylectomy, mastoidectomy, and more)"],
          ["61598", "POSTERIOR — transpetrosal approach (clivus or foramen magnum)"],
        ],
      },
      {
        name: "Also in the craniotomy block: transoral approach (61575–61576)",
        codes: [
          ["61575 · 61576", "TRANSORAL approach to the skull base, brainstem, or upper spinal cord for biopsy, decompression, or excision of a lesion — 61576 needs splitting of the tongue and/or mandible"],
        ],
      },
      {
        name: "Definitive procedures (61600–61616)",
        codes: [
          ["61600 · 61601", "Lesion of the base of the ANTERIOR cranial fossa — extradural · intradural (with dural repair, with or without graft)"],
          ["61605 · 61606", "Infratemporal fossa, parapharyngeal space, petrous apex (MIDDLE fossa) — extradural · intradural"],
          ["61607 · 61608", "Parasellar area, cavernous sinus, clivus, or midline skull base (MIDDLE fossa) — extradural · intradural"],
          ["+61611", "ADD-ON: transection or ligation of the carotid artery in the petrous canal, used with 61605–61608 (once per session)"],
          ["61613", "Obliteration of a carotid aneurysm, arteriovenous malformation, or carotid-cavernous fistula by dissection within the cavernous sinus"],
          ["61615 · 61616", "Base of the POSTERIOR cranial fossa, jugular foramen, foramen magnum, or C1–C3 vertebral bodies — extradural · INTRADURAL"],
        ],
      },
      {
        name: "Repair and reconstruction (61618–61619)",
        codes: [
          ["61618 · 61619", "Secondary repair of the dura for a spinal-fluid leak after skull base surgery — by free tissue graft · by a local or regional pedicle flap or myocutaneous flap"],
        ],
      },
    ],
    rules: [
      "Approach codes are picked by the anatomic AREA: anterior, middle, or posterior cranial fossa (or brainstem / upper spinal cord).",
      "Extensive dural grafting, cranioplasty, myocutaneous flaps, and extensive skin grafts are NOT part of the definitive package and are reported separately, with the codes for the repair that was actually done. Ordinary closure is included. (61618 and 61619 describe a secondary repair of a spinal-fluid leak after skull base surgery — they are not a general 'closure' code.)",
      "When one surgeon does the approach, another the definitive procedure, and a third the repair, each surgeon reports only his or her own code.",
      "When ONE surgeon does more than one layer (for example approach AND definitive), report both codes with modifier 51 on the secondary code.",
      "Which code is first? Coding practice is to list the higher-valued (work RVU) procedure first — the CMS physician fee schedule shows the values — and add modifier 51 to the lower-valued one.",
      "For the primary skin or tissue closure itself, use the closure codes (15730, 15733, 15756–15758), not the skull base repair codes.",
    ],
    tips: [
      "Read the layer name in the descriptor: a code that starts with 'approach' or names a route (transcochlear, transtemporal) is an APPROACH; a code that says 'resection or excision of lesion' is DEFINITIVE.",
      "Extradural vs. intradural is the one extra choice inside every definitive pair: the second code in each pair is the intradural one.",
    ],
    traps: [
      "Adding a repair code for a routine closure. Only extensive repairs are reported.",
      "Forgetting modifier 51 when one surgeon did both the approach and the definitive procedure.",
      "Choosing the approach code by where the LESION is instead of by the ROUTE the surgeon took. The route names the approach; the lesion location names the definitive code.",
    ],
    cases: [
      {
        title: "Transcochlear approach with removal of an intradural lesion",
        scenario: "Using a transcochlear approach, a physician excises an intradural lesion at the base of the posterior cranial fossa. One physician performed both the approach and the definitive procedures. How should these services be reported?",
        steps: [
          "There are two layers of work: the APPROACH (how the surgeon got in) and the DEFINITIVE procedure (removing the lesion). Nothing was said about a big repair.",
          "Approach: a transcochlear approach to the posterior cranial fossa = 61596.",
          "Definitive: excision of a lesion at the base of the posterior cranial fossa, INTRADURAL = 61616.",
          "One surgeon did both, so report both codes with modifier 51 on the secondary one.",
          "Which is secondary? Coding practice puts the higher-valued procedure first. The walkthrough compared work values on the CMS fee schedule and found the definitive procedure (61616) is higher than the approach (61596), so 61616 goes first and 61596 gets the modifier 51.",
        ],
        answer: "61616, 61596-51",
      },
    ],
  },
  {
    id: "endovascular",
    n: 2,
    title: "Intracranial Endovascular Therapy",
    range: "61623–61651",
    intro: [
      "Endovascular therapy treats the arteries inside the head from within, through a catheter, without opening the skull. The codes cover opening a clot, widening or stenting a narrowed artery, reversing artery spasm, and infusing drugs.",
      "The counting rules are the whole game here. Balloon dilatation of spasm is counted per VESSEL. Prolonged drug infusion is counted per VASCULAR TERRITORY. And there are only three territories.",
    ],
    diagram: <EndovascularDiagram />,
    definitions: [
      ["Vascular territory (family)", "one of three groups of intracranial arteries: the right carotid circulation, the left carotid circulation, and the vertebro-basilar circulation (both vertebral arteries and the basilar artery)."],
      ["Vasospasm", "a sudden narrowing of a brain artery, often after a bleed (subarachnoid hemorrhage)."],
      ["Thrombectomy", "removing a clot from an artery. It can be done by a device, by suction, or with clot-dissolving drugs — the method does not change the code."],
      ["Prolonged infusion", "putting a drug into an artery for at least 10 minutes, continuously or in intervals. The drug must NOT be a clot-buster."],
      ["Papaverine", "a drug that relaxes smooth muscle (an antispasmodic). It is not a clot-dissolving drug."],
    ],
    steps: [
      "① What was the main goal: remove a clot, widen or stent a narrowed artery, treat spasm, give drugs, or block a vessel?",
      "② Which territory or territories were treated? Left carotid, right carotid, vertebro-basilar.",
      "③ Count the right way: spasm balloons = per vessel; drug infusion = per territory. Clot removal, angioplasty, and stent codes are each reported once for the treated artery or territory, and not together in the same territory.",
      "④ Was the drug a clot-buster or a flush? Drug infusion codes need a NON-clot-dissolving drug given for 10 minutes or more.",
      "⑤ Check the packaged steps: catheter placement, diagnostic angiography of the treated territory, imaging guidance, monitoring, and closure of the artery are all included.",
    ],
    categories: [
      {
        name: "Codes in this family",
        codes: [
          ["61623", "Temporary balloon occlusion of an artery in the head or neck (includes catheterization of the vessel to be occluded and the angiography needed for the balloon)"],
          ["61624 · 61626", "Permanent occlusion or embolization — central nervous system (intracranial, spinal cord) · non-central head or neck (for example nosebleeds)"],
          ["61630", "Balloon angioplasty, intracranial (for example atherosclerotic narrowing)"],
          ["61635", "Placement of an intracranial stent, including balloon angioplasty if done"],
          ["61640", "Balloon dilatation of intracranial vasospasm — initial vessel"],
          ["+61641 · +61642", "Each additional vessel in the SAME territory · in a DIFFERENT territory (add-ons to 61640)"],
          ["61645", "Percutaneous thrombectomy and/or infusion for thrombolysis, intracranial — any method"],
          ["61650", "Prolonged arterial drug infusion (other than for thrombolysis) — initial vascular territory"],
          ["+61651", "Each additional vascular territory (add-on to 61650; at most 2 per day)"],
        ],
      },
    ],
    rules: [
      "The balloon vasospasm codes 61640–61642 already cover the catheter placement, contrast, measurements, roadmapping, and re-stretching of the vessel. Do not report 61640 or 61642 with 61650 or 61651 for the same territory.",
      "61645, 61650, and 61651 include selective catheterization, diagnostic angiography, and all later angiography of the treated territory, plus monitoring and closure of the artery.",
      "Diagnostic angiography of a territory you did NOT treat may be reported separately. For example, if the treatment was in the right carotid circulation, a study of the left carotid or the vertebral arteries can be reported.",
      "When the diagnostic arteriogram shows the need for angioplasty or a stent, 61630 and 61635 already include it. When it does not, report only the selective catheterization and imaging codes instead.",
      "Do not report 61630 or 61635 with 61645 for the same territory. Do not report 61645 with 61650 or 61651 for the same territory, or with the carotid/vertebral angiography codes (36221–36226) for the same territory. 61650 and 61651 are also not reported with 61640–61642 or with the chemotherapy administration codes (96420–96425) for the same territory.",
      "61650 and 61651 need two things: a non-clot-dissolving drug (for example a spasm-relaxing drug or chemotherapy) AND at least 10 minutes of continuous or intermittent giving. Drugs and fluids used routinely during an intervention (such as saline flushes) do not count.",
      "61651 is limited by the number of territories: at most 2 units (three territories minus the first).",
      "Embolization (61624 for the central nervous system, 61626 for non-central head or neck) includes the devices used. If a stent is placed as the ONLY treatment of an aneurysm or vascular leak, report the stent code 61635 instead. Only one embolization code is reported for each surgical field.",
    ],
    tips: [
      "Ask 'what was really done today?' In a long story with many angiograms, the answer is usually one thing: a clot removed, an artery stented, spasm relaxed. The rest is packaged.",
      "Draw three boxes (right carotid, left carotid, vertebro-basilar). Mark the treated one. Anything you looked at in an untreated box is reported separately; anything in the treated box is packaged.",
    ],
    traps: [
      "Reporting every angiogram in the story. Angiography of the treated territory is inside the treatment code.",
      "Counting 61650 per vessel. It counts per territory — and needs a 10-minute infusion of a non-clot-dissolving drug.",
      "Stacking a stent or angioplasty (61630, 61635) with a thrombectomy (61645) in the same territory.",
    ],
    cases: [
      {
        title: "Acute stroke: stent-retriever clot removal",
        scenario: "A patient presents with an acute stroke. Via femoral access, the left and right internal carotid arteries are catheterized and intracranial arteriograms performed. The patient is found to have thrombosis of the left middle cerebral artery (MCA). The MCA is catheterized and another angiogram is performed. Then the physician uses a stentriever to remove the clot. Completion angiograms reveal significant restoration of flow. What CPT codes are reported?",
        steps: [
          "Ask 'what was done today?' A clot was removed from an intracranial artery. That is the definitive procedure: 61645 (thrombectomy). The access, catheterizations, and angiograms are supporting steps.",
          "61645 already includes selective catheterization, diagnostic angiography, and all later angiography — but only inside the TREATED vascular territory.",
          "The clot was in the left MCA, so the treated territory is the LEFT carotid circulation. The left ICA angiogram, the MCA angiogram, and the completion angiograms are all inside 61645.",
          "The RIGHT internal carotid was also catheterized and imaged. The right carotid territory was NOT treated, so that angiography is reported separately: 36224 (selective catheter placement of the internal carotid artery with angiography of the ipsilateral intracranial circulation).",
          "Add modifier 59 to 36224 to show it is a different vascular territory from the one that was treated. The guidelines for these angiography codes (36221–36228, in the Cardiovascular section) call for modifier 59 when different vessels are studied in the same session; a payer may prefer a different modifier.",
        ],
        answer: "61645, 36224-59",
      },
      {
        title: "Vasospasm after a brain bleed: papaverine infusion",
        scenario: "A patient develops vasospasm following subarachnoid hemorrhage. Via femoral access, the physician advances a catheter into the distal left internal carotid artery. Intracranial arteriogram reveals marked vasospasm of the internal carotid and its branches. Papaverine is then administered intermittently over a 20-minute period with a total administration time of 12 minutes. Completion angiogram reveals marked improvement in vessel diameter. How should these services be reported?",
        steps: [
          "The main procedure is the drug infusion. The femoral access, catheter placement, and angiograms are supporting steps that are already included.",
          "Is the drug allowed? Papaverine relaxes artery spasm. It is NOT a clot-dissolving drug, so it meets the drug requirement.",
          "Is the time enough? The infusion needs at least 10 minutes, continuous or intermittent. Total administration time is 12 minutes, so it qualifies (the 20-minute window does not matter).",
          "How many vascular territories? Only the left internal carotid circulation was treated — ONE territory.",
          "Prolonged infusion, first territory = 61650. There is no additional territory, so no +61651.",
          "Balloon dilatation (61640) was not done, and 61640 could not be added to 61650 for the same territory anyway.",
        ],
        answer: "61650 (once)",
      },
    ],
  },
];

export default function NeuroReviewerPart1Page() {
  return (
    <ReviewerShell
      part={1}
      subtitle="Part 1 — Skull Base Surgery & Intracranial Endovascular Therapy (61580–61651)"
      sections={sections}
      intro={
        <>
          <strong>How this series is organized.</strong> The 60,000 series follows your training deck: (1) Code listing, (2) Procedures on the skull, meninges, and brain, (3) Procedures on the spine and spinal cord, (4) Procedures on the endocrine system. Part 1 covers the first two sub-topics of Topic 2 (skull base surgery and endovascular therapy), Part 2 covers the rest of Topic 2 (stereotactic radiosurgery and neurostimulators), and Part 3 covers Topics 3 and 4 (the spine and the endocrine glands). Codes and rules were cross-checked against the 2026 CPT codebook and reviewed, and the guidelines are paraphrased, not copied. Where the deck or its walkthrough differs from CPT 2026, this reviewer follows the codebook and says so.
        </>
      }
    />
  );
}
