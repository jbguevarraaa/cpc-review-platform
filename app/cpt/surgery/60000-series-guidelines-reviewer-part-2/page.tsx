import { ReviewerShell, type Subsection } from "../_neuro/kit";

const sections: Subsection[] = [
  {
    id: "radiosurgery",
    n: 1,
    title: "Stereotactic Radiosurgery — Brain and Spine",
    range: "61796–61800 · 63620–63621",
    intro: [
      "Stereotactic radiosurgery treats a lesion with beams of radiation, with no incision. A 3-D image finds the exact target and the same image guides the beam. The neurosurgeon reports these codes; the radiation oncologist reports the treatment planning and management from the Radiation Oncology section.",
      "Brain lesions are sorted into SIMPLE and COMPLEX. That single sort, plus the number of lesions, decides every code in the brain family.",
    ],
    definitions: [
      ["Simple cranial lesion", "smaller than 3.5 cm in its largest dimension AND not one of the complex types below."],
      ["Complex cranial lesion", "3.5 cm or larger, OR one of these types: schwannoma, arteriovenous malformation, pituitary tumor, glomus tumor, pineal-region tumor, or a cavernous sinus / parasellar / petroclival tumor. Also any lesion within 5 mm of the optic nerve, chiasm, or tract, and any lesion in the brainstem."],
      ["Course of treatment", "the whole planned treatment, which is usually one session but can be up to five planning or treatment sessions."],
      ["Headframe", "a rigid frame fixed to the head to hold it still during treatment."],
    ],
    steps: [
      "① Brain or spine? Brain lesions use 61796–61800; spine lesions use 63620–63621.",
      "② Brain: measure each lesion and check it against the complex list. Is ANY lesion complex?",
      "③ All simple → 61796 for the first lesion, then +61797 for each additional simple lesion.",
      "④ At least one complex → start with 61798 for the first lesion, then add +61797 for each additional SIMPLE lesion and +61799 for each additional COMPLEX lesion.",
      "⑤ Was a headframe applied by the neurosurgeon? Add +61800.",
      "⑥ Spine: 63620 for the first lesion, +63621 for each additional lesion, within the limits below.",
    ],
    categories: [
      {
        name: "Cranial (brain) radiosurgery",
        codes: [
          ["61796", "Stereotactic radiosurgery (particle beam, gamma ray, or linear accelerator) — 1 SIMPLE cranial lesion"],
          ["+61797", "Each additional cranial lesion, SIMPLE (add-on to 61796 or 61798)"],
          ["61798", "1 COMPLEX cranial lesion — also used for lesion-creating procedures (thalamotomy, pallidotomy) and when any lesion in a group is complex"],
          ["+61799", "Each additional cranial lesion, COMPLEX (add-on to 61798)"],
          ["+61800", "Application of a stereotactic headframe for radiosurgery (add-on to 61796 or 61798)"],
        ],
      },
      {
        name: "Spinal radiosurgery",
        codes: [
          ["63620", "Stereotactic radiosurgery — 1 spinal lesion"],
          ["+63621", "Each additional spinal lesion (add-on to 63620)"],
        ],
      },
    ],
    rules: [
      "The type of machine (particle beam, gamma ray, linear accelerator) does not change the code. The count and the complexity of the lesions do.",
      "If all lesions are simple, use 61796 as the base code. If ANY lesion in the group is complex, use 61798 as the base code, then add +61797 for each additional simple lesion or +61799 for each additional complex lesion.",
      "61796 and 61798 are each reported once per course of treatment. 61797 and 61799 are each reported no more than once per lesion, and any combination of the two is reported no more than 4 times for the whole course.",
      "Planning, dosimetry, targeting, positioning, and blocking done by the neurosurgeon are included in the radiosurgery codes. Computer-assisted planning is included (do not add 61781–61783).",
      "When treatment needs more than one session, do not report the radiosurgery code again for the same lesion in the same course of treatment.",
      "Do not report 61796–61800 with 20660. The same doctor should not also report radiation treatment management (77427–77435). When lesion-creating procedures such as thalamotomy are done, 61798 is reported only once however many lesions are created.",
      "Spinal: 63620 once per course; 63621 no more than once per lesion and no more than twice for the whole course, however many lesions there are. Spinal radiosurgery is only for tumors that affect spinal neural tissue or touch the dura, and arteriovenous malformations must be under the dura.",
    ],
    tips: [
      "Sort every lesion into simple or complex FIRST. One complex lesion changes the base code for the whole group.",
      "Measure from the record, not from the impression. 'Small' is not a size. The size and location have to be stated.",
    ],
    traps: [
      "Calling every second lesion +61799. A SIMPLE additional lesion is +61797, even when the base code is 61798.",
      "Missing the location rule. A small lesion within 5 mm of the optic pathway is still complex.",
      "Reporting the radiosurgery code once per session when several sessions are part of one course. It is once per lesion per course.",
    ],
    cases: [
      {
        title: "Two lung metastases, particle beam",
        scenario: "A 64-year-old smoker with a diagnosis of squamous cell carcinoma of the lung presents with two metastatic lesions in the brain. One lesion is 2.5 cm in size and is noted to be 2 cm from the optic apparatus; the second lesion is 1.5 cm in size and is situated in the primary motor strip on the left. After careful consideration of options for surgery, the patient underwent stereotactic radiosurgery employing a particle beam machine to treat both lesions. What CPT codes will be reported for these services?",
        steps: [
          "The machine type does not matter. Sort each lesion into simple or complex.",
          "Lesion 1: 2.5 cm is under 3.5 cm. It is a lung metastasis — not one of the automatically complex tumor types. It is 2 cm (20 mm) from the optic apparatus, and only 5 mm or less counts. So it is SIMPLE.",
          "Lesion 2: 1.5 cm, in the primary motor strip. Size and location raise no flags. It is SIMPLE.",
          "Every lesion is simple, so the base code is 61796 for the first lesion.",
          "The second simple lesion is the add-on +61797.",
        ],
        answer: "61796, +61797",
      },
      {
        title: "Two lesions (1.5 cm and 4.0 cm), gamma ray, headframe",
        scenario: "A 39-year-old woman presents with two cranial lesions. The first measures 1.5 cm, while the second measures 4.0 cm. Her surgeon decided that the best option for surgery was stereotactic surgery via gamma ray radiation. A stereotactic headframe was employed during the surgery. What CPT codes are reported?",
        steps: [
          "Lesion 1 is 1.5 cm: SIMPLE. Lesion 2 is 4.0 cm, which is over 3.5 cm: COMPLEX.",
          "There are two lesions and one of them is complex, so the base code is 61798 (not 61796).",
          "61798 covers the first lesion. The other lesion is 1.5 cm and simple, so it is the add-on for an additional SIMPLE lesion: +61797. (+61799 is only for an additional COMPLEX lesion.)",
          "A headframe was applied by the surgeon: add +61800, which goes with 61796 or 61798.",
          "Planning and dosimetry by the neurosurgeon are included, so nothing else is added.",
        ],
        answer: "61798, +61797, +61800. Note: the deck's walkthrough answered 61798, +61799, +61800, but 61799 is reserved for an additional COMPLEX lesion — here the additional lesion is simple.",
      },
      {
        label: "HARD SCENARIO",
        title: "Four spinal lesions in one course",
        scenario: "A neurosurgeon treats four spinal tumors that abut the dura with stereotactic radiosurgery over one course of treatment.",
        steps: [
          "Spinal radiosurgery has only two codes: 63620 for the first lesion and +63621 for each additional lesion.",
          "There are four lesions: one first lesion and three additional ones.",
          "But 63621 may not be reported more than twice in the whole course of treatment, however many lesions there are.",
        ],
        answer: "63620, +63621 × 2",
      },
    ],
  },
  {
    id: "neurostimulators",
    n: 2,
    title: "Neurostimulators — in the Brain and on the Spinal Cord",
    range: "61850–61892 · 63650–63688",
    intro: [
      "A neurostimulator sends small electrical pulses to treat movement disorders, mental-health conditions, or pain. It has parts: the electrodes (leads) and the pulse generator (the battery box). CPT codes each part separately — for putting it in, changing it, and taking it out.",
      "Two families live here: intracranial neurostimulators (electrodes on or in the brain) and spinal neurostimulators (electrodes on the spinal cord for pain).",
    ],
    definitions: [
      ["Neurostimulator system", "an implanted pulse generator (or receiver) plus electrodes, an extension when needed, and an external controller or charger."],
      ["Electrode array", "the group of contacts that deliver the stimulation. A percutaneous (needle-placed) array is catheter-like; a plate or paddle array is placed through an open cut in the spine."],
      ["Subcortical site", "a deep brain target such as the thalamus, globus pallidus, or subthalamic nucleus."],
      ["Microelectrode recording", "listening to nerve cell activity through a tiny electrode to find the right target during deep brain surgery."],
    ],
    steps: [
      "① Brain or spinal cord? Intracranial codes are 61850–61892. Spinal codes are 63650–63688.",
      "② Which part — electrodes or pulse generator? There is no single 'system' code. A whole system is reported by adding an electrode code and a pulse generator code.",
      "③ Insert, replace, revise, or remove? Each has its own code.",
      "④ Brain electrodes: cortical (surface) or subcortical (deep)? Then how they were placed.",
      "⑤ Spinal electrodes: needle-placed (percutaneous) or through a laminectomy (plate or paddle)?",
    ],
    categories: [
      {
        name: "Intracranial (brain) neurostimulators",
        codes: [
          ["61850 · 61860", "Electrodes on the brain surface (cortical) — through a twist drill or burr hole · through a craniotomy or craniectomy"],
          ["61863 · +61864", "Stereotactic electrode array in a deep (subcortical) site — first array · each additional array"],
          ["61867 · +61868", "The same, but WITH intraoperative microelectrode recording — first array · each additional array"],
          ["61880", "Revision or removal of intracranial neurostimulator electrodes"],
          ["61885 · 61886", "Insertion or replacement of the pulse generator or receiver — connected to a single electrode array · to 2 or more arrays"],
          ["61888", "Revision or removal of the pulse generator or receiver"],
          ["61889 · 61891 · 61892", "SKULL-MOUNTED generator or receiver — insertion · revision or replacement · removal (with cranioplasty when done)"],
        ],
      },
      {
        name: "Spinal cord neurostimulators",
        codes: [
          ["63650", "Percutaneous implantation of a neurostimulator electrode array, epidural"],
          ["63655", "Laminectomy for implantation of neurostimulator electrodes, plate or paddle, epidural"],
          ["63661 · 63662", "Removal of the electrode array (percutaneous) · of the plate or paddle (laminotomy or laminectomy)"],
          ["63663 · 63664", "Revision, including replacement when done, of the percutaneous array · of the plate or paddle"],
          ["63685", "Insertion or replacement of the spinal pulse generator or receiver"],
          ["63688", "Revision or removal of the implanted spinal pulse generator or receiver"],
        ],
      },
    ],
    rules: [
      "There are no 'system' codes for these operations. Report the electrodes and the pulse generator as separate services.",
      "The brand or complexity of the device does not change code choice, but the number of electrode ARRAYS does (61885 for a single array, 61886 for two or more). A few Category III codes (0784T–0787T) describe integrated single-component systems.",
      "Test stimulation to confirm the target is correct is part of placement, and electronic analysis 95970 at the time of implantation is not reported separately.",
      "Other analysis and programming is reported with the Medicine section codes — brain and cranial nerve devices 95970, 95976, 95977, 95983, 95984; spinal cord devices 95970–95972 — including programming done in the operating room after the implant. Read the notes under those codes.",
      "Microelectrode recording done by the operating surgeon during electrode implantation is included. If another person does the neurophysiological mapping, that person reports 95961–95962.",
      "For a cranial NERVE stimulator (for example vagus or trigeminal), the electrodes are coded in the peripheral nerve section (64553 for percutaneous placement, 64569 for revision or removal of the array). The pulse generator or receiver uses the cranial generator codes 61885 and 61886.",
      "Do not report 61888 with 61885 or 61886 for the same pulse generator, do not report 61892 with 61891 for the same skull-mounted generator, and do not report 63685 with 63688 for the same generator or receiver.",
      "Do not report 63663 or 63664 with 63661 or 63662 for the same spinal level. Removing or replacing a TEMPORARY percutaneous array (external generator) is not reported with 63661 or 63663.",
    ],
    tips: [
      "Think 'two shopping lists': one for electrodes (how many arrays, where), one for the generator (how many arrays connected). A whole DBS is one item from each list.",
      "The change words tell the code: insert, replace, revise, remove. Replacement of the generator and revision of the generator are different codes.",
    ],
    traps: [
      "Looking for a single code for 'the whole system'. There is none.",
      "Reporting 95970 for the analysis done at implantation. It is included. Other programming is reported separately.",
      "Sending a vagus nerve stimulator generator to the peripheral nerve section. The ELECTRODE codes are there (64553, 64569); the generator uses 61885 and 61886.",
      "Using 61870 from older material. That code is not in CPT 2026.",
    ],
    cases: [
      {
        label: "HARD SCENARIO",
        title: "Deep brain stimulation on both sides",
        scenario: "For a movement disorder, a neurosurgeon places a stimulator electrode in the subthalamic nucleus on each side of the brain through burr holes, using microelectrode recording (done by the surgeon) to find the targets. One pulse generator is implanted in the chest and connected to both electrodes.",
        steps: [
          "Two shopping lists: electrodes, and pulse generator. There is no system code.",
          "Electrodes: deep (subcortical) stereotactic arrays WITH microelectrode recording. The first array = 61867. The second array = +61868 (each additional array).",
          "Microelectrode recording by the surgeon is included; no separate code.",
          "Pulse generator: one generator connected to 2 or more electrode arrays = 61886.",
          "95970 at the time of implant is included and not added.",
        ],
        answer: "61867, +61868, 61886",
      },
      {
        label: "HARD SCENARIO",
        title: "Spinal cord stimulator for back pain",
        scenario: "For chronic back pain, a physician places a needle-placed (percutaneous) epidural electrode array and implants a pulse generator connected to it.",
        steps: [
          "Two shopping lists again: electrodes and the pulse generator.",
          "Electrodes: percutaneous implantation of a neurostimulator electrode array, epidural = 63650.",
          "Pulse generator: insertion of the spinal pulse generator or receiver = 63685.",
          "A plate or paddle placed through a laminectomy would have been 63655 instead of 63650.",
        ],
        answer: "63650, 63685",
      },
    ],
  },
];

export default function NeuroReviewerPart2Page() {
  return (
    <ReviewerShell
      part={2}
      subtitle="Part 2 — Stereotactic Radiosurgery & Neurostimulators (61796–61892, 63620–63688)"
      sections={sections}
      intro={
        <>
          <strong>Two ideas.</strong> Radiosurgery: sort each lesion into simple or complex, then count. Neurostimulators: there is no system code, so add up the electrode code and the pulse generator code. This part also covers the spinal versions of both, so the brain and spine are side by side. The two slide questions on brain radiosurgery are solved step by step in Section 1, with a harder spinal scenario after them.
        </>
      }
    />
  );
}
