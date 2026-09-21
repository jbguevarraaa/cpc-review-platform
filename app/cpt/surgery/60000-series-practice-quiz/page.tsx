import { QuizPlayer, VIOLET, type QuizItem } from "../_digestive/players";

const items: QuizItem[] = [
  {
    topic: "Skull base",
    question: "Using a transcochlear approach, one physician excises an intradural lesion at the base of the posterior cranial fossa. The definitive procedure has the higher work value. How should the services be reported?",
    correct: "61616, 61596-51",
    wrong: ["61596, 61616-51", "61596, 61616", "61616 only"],
    explanation: "Skull base surgery has an approach layer (transcochlear approach = 61596) and a definitive layer (intradural lesion, posterior fossa = 61616). One surgeon did both, so both codes are reported with modifier 51 on the secondary one. The higher-valued definitive code is listed first.",
    lookFor: "Two layers of work done by ONE surgeon: the route in, and the treatment of the lesion.",
    eliminate: "Dropping the approach code leaves out billable work. Listing both with no modifier ignores the multiple-procedure rule. Putting 51 on 61616 lists the lower-valued approach first.",
  },
  {
    topic: "Spine",
    question: "A surgeon performs a first-time laminotomy with nerve root decompression at one lumbar interspace on both sides, and at a second lumbar interspace on both sides. Which codes?",
    correct: "63030-50, +63035 × 2",
    wrong: ["63030-50, +63035-50", "63030 × 2, +63035", "63030-50, +63035 once"],
    explanation: "Laminotomy is counted per interspace. The base code (63030) takes modifier 50 for both sides. The second interspace is the add-on +63035, and for bilateral work the add-on is reported twice, without modifier 50.",
    lookFor: "The counting method (interspaces) and the bilateral rule: modifier 50 on the base code, add-on repeated.",
    eliminate: "Modifier 50 is never put on the add-on. Repeating the base code counts the first interspace twice. Reporting +63035 once leaves out the second side of the second interspace.",
  },
  {
    topic: "Endovascular",
    question: "A patient with an acute stroke has the left and right internal carotid arteries catheterized and imaged. A clot is found in the left middle cerebral artery, which is catheterized and imaged, and a stentriever removes the clot. Completion angiograms show restored flow. Which codes?",
    correct: "61645, 36224-59",
    wrong: ["61645 only", "61645, 36221, 36224", "61645, 61635"],
    explanation: "The definitive procedure is clot removal (61645). It includes catheterization and angiography within the TREATED territory (left carotid). The right internal carotid territory was imaged but not treated, so that angiography is reported separately with 36224, and modifier 59 marks the different territory.",
    lookFor: "Which vascular territory was treated, and which territory was only looked at.",
    eliminate: "Dropping 36224 loses the untreated-territory angiography that is reported separately. 36221 is not reported with the other carotid angiography codes (36222–36226) or with 61645. 61635 is a stent, which is not used with 61645 in the same territory.",
  },
  {
    topic: "Endovascular",
    question: "After a brain bleed, a patient has vasospasm. A catheter is placed in the distal left internal carotid artery. Papaverine is given intermittently over 20 minutes, for a total of 12 minutes of administration. The completion angiogram shows improvement. Which code?",
    correct: "61650",
    wrong: ["61640", "61650, +61651", "61645"],
    explanation: "Prolonged infusion of a non-clot-dissolving drug (papaverine relaxes artery spasm) for at least 10 minutes is 61650 for the first vascular territory. Only the left carotid territory was treated, so there is no +61651. The catheter and angiograms are included.",
    lookFor: "The drug type (not a clot-buster) and the 10-minute minimum. Then count territories.",
    eliminate: "61640 is a BALLOON dilatation of the vessel, and none was done. +61651 is for an additional territory. 61645 is for clot removal.",
  },
  {
    topic: "Endovascular",
    question: "A physician performs balloon dilatation for vasospasm in two vessels of the left carotid circulation and in one vessel of the vertebro-basilar circulation. Which codes?",
    correct: "61640, +61641, +61642",
    wrong: ["61640 three times", "61640, +61641 twice", "61640, +61642 twice"],
    explanation: "Balloon dilatation is counted per VESSEL. The first vessel is 61640. The second vessel in the same territory is +61641. The vessel in a different territory (vertebro-basilar) is +61642.",
    lookFor: "Count vessels first, then ask whether each extra vessel is in the same territory or a different one.",
    eliminate: "The add-on codes exist so the base code is used only once. Using +61641 for the third vessel ignores that it is in a different territory. Using +61642 for the second vessel ignores that it is in the same territory.",
  },
  {
    topic: "Radiosurgery",
    question: "A patient has two brain metastases treated with a particle beam. One lesion is 2.5 cm and is 2 cm from the optic apparatus. The other is 1.5 cm and is in the primary motor strip. Which codes?",
    correct: "61796, +61797",
    wrong: ["61798, +61799", "61796, +61799", "61798, +61797"],
    explanation: "A lesion is complex only if it is 3.5 cm or larger, is one of the complex tumor types, or is within 5 mm of the optic pathway or in the brainstem. Neither lesion qualifies, so both are simple: 61796 for the first and +61797 for the second.",
    lookFor: "The 5 mm rule: 2 cm is NOT close enough to make a lesion complex.",
    eliminate: "61798 and +61799 are for complex lesions. Mixing 61796 with +61799 pairs a simple base with a complex add-on, which is not allowed.",
  },
  {
    topic: "Radiosurgery",
    question: "A woman has two brain lesions, 1.5 cm and 4.0 cm, treated with gamma ray radiosurgery. A stereotactic headframe is applied by the surgeon. Which codes?",
    correct: "61798, +61797, +61800",
    wrong: ["61798, +61799, +61800", "61796, +61799, +61800", "61796, +61797, +61800"],
    explanation: "One lesion is complex (4.0 cm is over 3.5 cm), so the base code is 61798. The additional lesion is SIMPLE, so it is +61797 (+61799 is only for an additional complex lesion). The headframe is +61800.",
    lookFor: "Whether ANY lesion is complex (it changes the base code) and what each ADDITIONAL lesion is.",
    eliminate: "61796 cannot be the base when one lesion is complex. +61799 is reserved for an additional complex lesion, and the second lesion here is simple.",
  },
  {
    topic: "Neurostimulator",
    question: "A neurosurgeon places a deep brain stimulator electrode in the subthalamic nucleus on each side using microelectrode recording done by the surgeon. One pulse generator is implanted and connected to both electrodes. Which codes?",
    correct: "61867, +61868, 61886",
    wrong: ["61863, +61864, 61885", "61867, 61867-50, 61886", "61867, +61868, 61885, 61885"],
    explanation: "There are no system codes, so the electrodes and generator are coded separately. Deep arrays WITH microelectrode recording: first array 61867, second array +61868. One generator connected to 2 or more arrays is 61886. The recording by the operating surgeon is included.",
    lookFor: "Microelectrode recording (61867 family, not 61863) and how many arrays the generator connects to.",
    eliminate: "61863 and 61864 are the codes WITHOUT recording. 61885 is a generator for a single array. Repeating a code with modifier 50 does not replace the add-on for a second array.",
  },
  {
    topic: "Spine",
    question: "A physician excises the discs from four cervical interspaces by an anterior approach to relieve pressure on the spinal cord from herniated discs. How should this be reported?",
    correct: "63075, +63076 × 3",
    wrong: ["63075 × 4", "63081, +63082 × 3", "63020, +63035 × 3"],
    explanation: "Anterior cervical discectomy is counted per interspace: 63075 for the first interspace and one unit of +63076 for each additional interspace. Four interspaces = 63075 plus three units of +63076.",
    lookFor: "The structure removed (discs, not vertebral bodies) and the approach (anterior).",
    eliminate: "Repeating 63075 four times ignores the add-on. 63081 is a corpectomy (vertebral body). 63020 is a posterior laminotomy.",
  },
  {
    topic: "Endocrine",
    question: "A surgeon performs a total thyroidectomy for a large goiter. A parathyroid gland is removed by accident, cut into small pieces, and placed into a neck muscle. Which codes?",
    correct: "60240, +60512",
    wrong: ["60240 only", "60220, 60225", "60240, 60500"],
    explanation: "Total thyroidectomy is 60240. Parathyroid autotransplantation is the add-on +60512, which may be reported with 60240.",
    lookFor: "The word 'placed into a muscle' means autotransplantation, which has its own add-on.",
    eliminate: "60240 alone leaves out the transplant. 60220 and 60225 are lobectomy codes. 60500 is a parathyroidectomy performed as its own procedure.",
  },
];

export default function NeuroPracticeQuizPage() {
  return (
    <QuizPlayer
      kicker="60,000 SERIES · PRACTICE QUIZ"
      title="Neuro-Endocrine System Practice Quiz"
      blurb={`${items.length} scenario questions — skull base, endovascular therapy, radiosurgery, neurostimulators, spine, and the endocrine glands. Each answer shows what to look for and how to eliminate the wrong choices.`}
      nav={[
        { href: "/cpt/surgery/60,000", label: "Neuro-Endocrine home" },
        { href: "/cpt/surgery/60000-series-guidelines-reviewer", label: "Reviewer Part 1" },
        { href: "/cpt/surgery/60000-series-guidelines-reviewer-part-2", label: "Part 2" },
        { href: "/cpt/surgery/60000-series-guidelines-reviewer-part-3", label: "Part 3" },
        { href: "/cpt/surgery/60000-series-flashcards", label: "Flashcards" },
      ]}
      items={items}
      backHref="/cpt/surgery/60,000"
      backLabel="← Back to Neuro-Endocrine System"
      theme={VIOLET}
    />
  );
}
