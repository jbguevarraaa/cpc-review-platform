import { FlashcardPlayer, VIOLET, type FlashItem } from "../_digestive/players";

const cards: FlashItem[] = [
  // ---- Code map ----
  { topic: "Code map", front: "What does each block of the 60,000 series cover?", back: "60K endocrine system · 61K–63K central nervous system (skull, meninges, brain, spine, spinal cord) · 64K peripheral nervous system · 65K–66K eyeball and anterior segment · 67K posterior segment and ocular adnexa · 68K conjunctiva · 69K ears." },
  { topic: "Code map", front: "Where are pituitary and pineal gland surgeries coded?", back: "In the NERVOUS system codes, not the endocrine section. Ovary and testis surgery is in the female and male genital sections." },
  { topic: "Code map", front: "What splits the eye codes, and what splits the ear codes?", back: "The LENS splits the eye: in front of it = 65K–66K, behind it plus the adnexa = 67K. The EARDRUM splits the ear: in front = external ear, the eardrum and behind = middle and inner ear." },

  // ---- Skull openings and skull base ----
  { topic: "Skull base", front: "Twist drill hole vs. burr hole vs. craniotomy?", back: "Twist drill: small hole, usually to reach the ventricles quickly. Burr hole: small drilled hole for a definitive procedure or to make room for more surgery. Craniectomy / craniotomy: a piece of skull is removed to relieve pressure or reach the brain — the codes use the two words interchangeably." },
  { topic: "Skull base", front: "The three layers of skull base surgery?", back: "APPROACH 61580–61598 (get exposure) · DEFINITIVE 61600–61616 (treat the lesion) · REPAIR / RECONSTRUCTION 61618–61619 (only when extensive)." },
  { topic: "Skull base", front: "How are skull base approach codes named?", back: "By the anatomic area: anterior cranial fossa (61580–61586), middle cranial fossa (61590–61592), or posterior cranial fossa (61595–61598)." },
  { topic: "Skull base", front: "Posterior fossa approaches?", back: "61595 transtemporal · 61596 transcochlear · 61597 transcondylar · 61598 transpetrosal." },
  { topic: "Skull base", front: "One surgeon does the approach AND the definitive procedure — how is it reported?", back: "Report both codes and add modifier 51 to the second (lower-valued) code. Different surgeons each report only their own layer." },
  { topic: "Skull base", front: "Which layer goes first when one surgeon does two?", back: "Coding practice lists the higher-valued procedure first, judged by work RVUs on the CMS fee schedule. Modifier 51 goes on the lower-valued one." },
  { topic: "Skull base", front: "When is a skull base repair code reported?", back: "Only for extensive dural grafting, cranioplasty, flaps, or extensive skin grafts — reported with the repair code that matches what was done. Ordinary closure is inside the definitive code. 61618 / 61619 are secondary repairs of a spinal-fluid leak." },
  { topic: "Skull base", front: "Transcochlear approach + intradural excision, one surgeon — codes?", back: "61616 (intradural lesion, posterior fossa) then 61596-51 (transcochlear approach)." },

  // ---- Endovascular ----
  { topic: "Endovascular", front: "What are the three intracranial vascular territories?", back: "Right carotid circulation, left carotid circulation, and vertebro-basilar circulation (both vertebral arteries plus the basilar artery)." },
  { topic: "Endovascular", front: "What is packaged into intracranial endovascular codes?", back: "Selective catheterization of the target vessel, diagnostic angiography, fluoroscopy, radiological supervision and interpretation, monitoring, and closure of the artery." },
  { topic: "Endovascular", front: "Balloon dilatation of vasospasm — how is it counted?", back: "Per VESSEL. 61640 first vessel · +61641 each additional vessel in the same territory · +61642 each additional vessel in a different territory." },
  { topic: "Endovascular", front: "Prolonged drug infusion 61650 / +61651 — how is it counted?", back: "Per VASCULAR TERRITORY. 61650 first territory · +61651 each additional territory (max 2). Needs a NON-clot-dissolving drug given for at least 10 minutes, continuously or intermittently." },
  { topic: "Endovascular", front: "61645 — what does it describe?", back: "Intracranial clot removal or infusion for thrombolysis, any method. The method (device, suction, or drugs) does not change the code." },
  { topic: "Endovascular", front: "Which combinations are not allowed in the same territory?", back: "61645 with 61630, 61635, 61650, or 61651. 61640, 61641, and 61642 with 61650 or 61651. 61645 with the carotid/vertebral angiography codes 36221–36226." },
  { topic: "Endovascular", front: "Angiography of a territory you did not treat?", back: "It is reported separately. Angiography of the TREATED territory is packaged into the treatment code." },
  { topic: "Endovascular", front: "Stroke: left MCA clot removed, right ICA also imaged — codes?", back: "61645 for the clot removal, plus 36224-59 for the right carotid territory that was imaged but not treated." },
  { topic: "Endovascular", front: "Papaverine over 20 minutes, 12 minutes of administration, one territory — code?", back: "61650 once. Papaverine relaxes spasm (it is not a clot-buster) and 12 minutes is over the 10-minute minimum." },
  { topic: "Endovascular", front: "61623 vs. 61624 vs. 61626?", back: "61623 = temporary balloon occlusion of an artery in the head or neck. 61624 = permanent occlusion or embolization in the central nervous system. 61626 = non-central head or neck embolization (for example a nosebleed)." },
  { topic: "Endovascular", front: "61630 vs. 61635?", back: "61630 = balloon angioplasty, intracranial. 61635 = intracranial stent, including balloon angioplasty if done. Both include the diagnostic arteriogram that showed the need for them." },

  // ---- Radiosurgery ----
  { topic: "Radiosurgery", front: "What is a simple cranial lesion?", back: "Smaller than 3.5 cm in its largest dimension AND not meeting any complex definition." },
  { topic: "Radiosurgery", front: "What makes a cranial lesion complex?", back: "3.5 cm or larger · schwannoma, AV malformation, pituitary, glomus, pineal-region, or cavernous sinus / parasellar / petroclival tumors · within 5 mm of the optic nerve, chiasm, or tract · in the brainstem." },
  { topic: "Radiosurgery", front: "The cranial radiosurgery code set?", back: "61796 first simple lesion · +61797 each additional simple · 61798 first complex lesion · +61799 each additional complex · +61800 headframe." },
  { topic: "Radiosurgery", front: "Several lesions, and one is complex — which base code?", back: "61798. Then +61797 for each additional SIMPLE lesion and +61799 for each additional COMPLEX lesion." },
  { topic: "Radiosurgery", front: "Two simple brain metastases (2.5 cm and 1.5 cm, particle beam) — codes?", back: "61796, +61797. The 2.5-cm lesion 2 cm from the optic apparatus is NOT complex because only 5 mm or less counts." },
  { topic: "Radiosurgery", front: "1.5-cm lesion + 4.0-cm lesion, headframe — codes?", back: "61798, +61797, +61800. The 4.0-cm lesion is complex, so 61798 is the base. The additional simple lesion is +61797." },
  { topic: "Radiosurgery", front: "Per-course limits on cranial radiosurgery?", back: "61796 and 61798 once per course. 61797 and 61799 once per lesion, and any combination of them no more than 4 times per course. Up to 5 sessions can be one course." },
  { topic: "Radiosurgery", front: "Does the machine type matter?", back: "No. Particle beam, gamma ray, or linear accelerator all report the same codes. Planning, dosimetry, and positioning by the neurosurgeon are included." },
  { topic: "Radiosurgery", front: "Spinal radiosurgery codes and limits?", back: "63620 first lesion (once per course) · +63621 each additional lesion — once per lesion and no more than 2 times for the whole course." },

  // ---- Neurostimulators ----
  { topic: "Neurostimulator", front: "Is there a 'system' code for a brain or spinal neurostimulator?", back: "No. Report one code for the electrode(s) and one for the pulse generator, and add them up." },
  { topic: "Neurostimulator", front: "Intracranial electrode codes?", back: "61850 cortical, twist drill or burr hole · 61860 cortical, craniotomy · 61863 + 61864 deep (subcortical) first / each additional array · 61867 + 61868 the same WITH microelectrode recording." },
  { topic: "Neurostimulator", front: "Intracranial pulse generator codes?", back: "61885 to a single electrode array · 61886 to 2 or more arrays · 61888 revision or removal · 61889, 61891, 61892 skull-mounted generator (insert, revise or replace, remove)." },
  { topic: "Neurostimulator", front: "Is 61870 a valid code?", back: "No. It is in older materials but is not in CPT 2026." },
  { topic: "Neurostimulator", front: "Microelectrode recording during electrode implantation?", back: "Included when the operating surgeon does it. If another person does neurophysiological mapping, that person reports 95961–95962." },
  { topic: "Neurostimulator", front: "Electronic analysis and programming — reported or not?", back: "Test stimulation and 95970 at implantation are included. Other analysis and programming is reported with the Medicine codes (95976, 95977, 95983, 95984 brain and cranial nerve; 95971, 95972 spinal cord), including programming done in the operating room." },
  { topic: "Neurostimulator", front: "Vagus nerve stimulator: which codes?", back: "The ELECTRODES are in the peripheral nerve section (64553 percutaneous placement, 64569 revision or removal of the array). The pulse generator or receiver uses the cranial generator codes 61885 and 61886." },
  { topic: "Neurostimulator", front: "Spinal neurostimulator codes?", back: "63650 percutaneous electrode array · 63655 plate or paddle through laminectomy · 63661 / 63662 removal · 63663 / 63664 revision or replacement · 63685 generator insertion or replacement · 63688 generator revision or removal." },
  { topic: "Neurostimulator", front: "Deep brain stimulator both sides with microelectrode recording and one generator?", back: "61867, +61868, 61886." },

  // ---- Spine ----
  { topic: "Spine", front: "Open vs. percutaneous vs. endoscopic spine surgery?", back: "Open: direct viewing through a surgical opening (the default). Percutaneous: image-guided only (CT or fluoroscopy). Endoscopic: continuous direct viewing through an endoscope." },
  { topic: "Spine", front: "Laminectomy vs. laminotomy?", back: "Laminectomy removes the whole lamina. Laminotomy (hemilaminectomy) removes only part of it and spares nearby ligaments and muscles." },
  { topic: "Spine", front: "Laminectomy WITHOUT facetectomy — how is it counted?", back: "In two bands, picked once: 1 or 2 segments (63001 cervical, 63003 thoracic, 63005 lumbar) or more than 2 segments (63015, 63016, 63017). Sacral is 63011." },
  { topic: "Spine", front: "Laminectomy WITH facetectomy and foraminotomy?", back: "Per segment: 63045 cervical, 63046 thoracic, 63047 lumbar for the first, then +63048 for each additional segment." },
  { topic: "Spine", front: "Laminotomy codes?", back: "First-time: 63020 cervical, 63030 lumbar, +63035 each additional interspace. Re-exploration: 63040 cervical, 63042 lumbar, +63043 / +63044 each additional interspace. Bilateral: modifier 50 on the base code; report the add-ons twice with no modifier 50. There is no thoracic laminotomy code." },
  { topic: "Spine", front: "Anterior discectomy codes?", back: "63075 + 63076 cervical (per interspace) · 63077 + 63078 thoracic (per interspace). The operating microscope is included." },
  { topic: "Spine", front: "Anterior corpectomy codes?", back: "63081 + 63082 cervical · 63085 + 63086 thoracic · 63087 + 63088 combined thoracolumbar approach (lower thoracic or lumbar) · 63090 + 63091 transperitoneal or retroperitoneal approach (lower thoracic, lumbar, or sacral). Counted per segment; the approach picks the code." },
  { topic: "Spine", front: "Lateral extracavitary corpectomy?", back: "63101 thoracic · 63102 lumbar · +63103 each additional thoracic or lumbar segment." },
  { topic: "Spine", front: "Memory hook for counting spine levels?", back: "DISC = INTERspace. BODY = SEGMENT. Laminotomy counts interspaces; laminectomy with facetectomy counts segments; plain laminectomy uses two bands." },
  { topic: "Spine", front: "Anterior cervical discectomy at four interspaces for spinal cord pressure?", back: "63075 for the first interspace, then +63076 × 3. Not with 22554, and no 69990." },
  { topic: "Spine", front: "Percutaneous and endoscopic spine codes?", back: "Percutaneous: 62287 (needle-based, single or multiple levels, no add-on) and 62330 + 62331 (with ligamentum flavum removal, bilateral; +62331 once per session; one-sided work takes modifier 52). Endoscopic: 62380 (1 interspace, lumbar; bilateral takes modifier 50)." },
  { topic: "Spine", front: "Two surgeons on an anterior spine operation?", back: "Each adds modifier 62 to the definitive code (63075, 63077, 63081, 63085, 63087, 63090) and to its add-ons, as long as both stay primary surgeons." },

  // ---- Endocrine ----
  { topic: "Endocrine", front: "Where are the endocrine code ranges?", back: "Thyroid 60000–60300 · parathyroid 60500–60512 · thymus 60520–60522 · adrenal 60540–60545 and 60650 · carotid body 60600–60605." },
  { topic: "Endocrine", front: "Thyroid codes by how much was removed?", back: "Cyst or adenoma 60200 · partial lobectomy 60210 / 60212 · total lobectomy 60220 / 60225 · total thyroidectomy 60240 · completion thyroidectomy 60260 · subtotal or partial thyroidectomy 60271." },
  { topic: "Endocrine", front: "Thyroidectomy for cancer?", back: "60252 with limited neck dissection · 60254 with radical neck dissection." },
  { topic: "Endocrine", front: "What is +60512?", back: "The add-on code for parathyroid autotransplantation. It goes with 60500, 60502, 60505 and the thyroid codes 60212, 60225, 60240, 60252, 60254, 60260, 60270, 60271." },
  { topic: "Endocrine", front: "Parathyroid codes?", back: "60500 parathyroidectomy or exploration · 60502 re-exploration · 60505 with mediastinal exploration by sternal split or chest approach · +60512 autotransplantation." },
  { topic: "Endocrine", front: "Thymectomy codes?", back: "60520 through the neck · 60521 sternal split or chest approach without radical dissection · 60522 with radical mediastinal dissection. VATS thymectomy is 32673." },
  { topic: "Endocrine", front: "Adrenalectomy codes?", back: "Open: 60540 (alone), 60545 (with adjacent retroperitoneal tumor). Laparoscopic: 60650. 60540 and 60545 are not reported with 50323." },
  { topic: "Endocrine", front: "Percutaneous ablation of thyroid nodules?", back: "60660 (first lobe or the isthmus) + 60661 (additional lobe, add-on). Radiofrequency with imaging guidance included. New in 2025. Not with 76940, 76942, 77013, or 77022." },
];

export default function NeuroFlashcardsPage() {
  return (
    <FlashcardPlayer
      kicker="60,000 SERIES · FLASHCARDS"
      title="5-Minute Commute Review"
      nav={[
        { href: "/cpt/surgery/60,000", label: "Neuro-Endocrine home" },
        { href: "/cpt/surgery/60000-series-guidelines-reviewer", label: "Reviewer Part 1" },
        { href: "/cpt/surgery/60000-series-guidelines-reviewer-part-2", label: "Part 2" },
        { href: "/cpt/surgery/60000-series-guidelines-reviewer-part-3", label: "Part 3" },
        { href: "/cpt/surgery/60000-series-practice-quiz", label: "Quiz" },
      ]}
      cards={cards}
      theme={VIOLET}
    />
  );
}
