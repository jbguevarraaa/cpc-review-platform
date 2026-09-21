import { ReviewerShell, type Subsection } from "../_neuro/kit";
import { SpineGridDiagram } from "../_neuro/diagrams";

const sections: Subsection[] = [
  {
    id: "spine-posterior",
    n: 1,
    title: "Spine Decompression — Posterior Approach (Laminectomy & Laminotomy)",
    range: "62287–62380 · 63001–63048",
    intro: [
      "Spine surgery in the 60,000 series is for relieving pressure on the spinal cord or its nerves. (Surgery on the spinal BONES, such as fusions and fractures, is in the musculoskeletal 20,000 series.)",
      "First decide HOW the surgeon saw the spine — through image guidance only, through an endoscope, or through an open cut. Then the operation, then the spine region, then how many segments or interspaces.",
    ],
    diagram: <SpineGridDiagram />,
    definitions: [
      ["Vertebral segment / interspace", "a segment is one vertebra. An interspace is the space between two vertebrae, where a disc sits."],
      ["Spondylolisthesis", "a vertebra that has slipped forward over the one below it. The Gill procedure removes loose bone at the back of a slipped vertebra to free the nerves."],
      ["Laminectomy", "removing the whole lamina (the back part of the vertebra that covers the spinal canal) to open up room for the spinal cord and nerves."],
      ["Laminotomy (hemilaminectomy)", "removing only PART of the lamina. Less bone comes out and nearby ligaments and muscles are spared."],
      ["Facetectomy", "removing part or all of a damaged facet joint — the small joints where each vertebra meets the one above and below."],
      ["Foraminotomy", "widening the foramen, the natural opening where a nerve leaves the spinal canal."],
      ["Discectomy", "removing all or part of an intervertebral disc (the cushion between two vertebrae). An osteophytectomy removes bone spurs."],
      ["Open", "the surgeon sees the spine directly, by eye, loupes, or microscope, through a surgical opening. Spine surgery is presumed open unless the note says otherwise."],
      ["Percutaneous", "done with image guidance (CT or fluoroscopy) only, with no scope or opening to see through."],
      ["Endoscopic", "done with continuous direct viewing through an endoscope."],
    ],
    steps: [
      "① How was it viewed: percutaneous (image-guided), endoscopic, or open?",
      "② Open: which operation — laminectomy, laminectomy with facetectomy and foraminotomy, or laminotomy?",
      "③ Which region of the spine: cervical, thoracic, lumbar, or sacral?",
      "④ Count the levels the way the family counts them. Plain laminectomy (63001–63017): pick the band, no add-ons. Laminectomy with facetectomy: base code plus +63048 per extra segment. Laminotomy: base code plus an add-on per extra interspace.",
      "⑤ Was it a first operation or a re-exploration of the same site? Laminotomy has separate re-exploration codes.",
    ],
    categories: [
      {
        name: "Percutaneous and endoscopic (not open)",
        codes: [
          ["62287", "Percutaneous decompression of the nucleus pulposus of a disc, needle-based, lumbar — covers single or multiple levels, so there is no add-on"],
          ["62330 · +62331", "Percutaneous decompression with partial removal of the ligamentum flavum, bilateral, lumbar — one interspace · additional interspace(s) (+62331 is reported ONCE per operative session; one-sided work takes modifier 52)"],
          ["62380", "ENDOSCOPIC decompression of the spinal cord or nerve root(s), discectomy and/or excision of a herniated disc, 1 interspace, lumbar (bilateral: modifier 50)"],
        ],
      },
      {
        name: "Open posterior laminectomy WITHOUT facetectomy or discectomy (for example spinal stenosis)",
        codes: [
          ["63001 · 63003 · 63005", "1 or 2 vertebral segments — cervical · thoracic · lumbar (lumbar excludes spondylolisthesis)"],
          ["63015 · 63016 · 63017", "MORE than 2 vertebral segments — cervical · thoracic · lumbar"],
          ["63011", "Sacral"],
          ["63012", "Lumbar, for spondylolisthesis, with removal of abnormal facets and/or pars interarticularis (Gill type procedure)"],
        ],
      },
      {
        name: "Open laminectomy WITH facetectomy and foraminotomy (per segment)",
        codes: [
          ["63045 · 63046 · 63047", "Single vertebral segment — cervical · thoracic · lumbar"],
          ["+63048", "Each additional vertebral segment, cervical, thoracic, or lumbar (add-on to 63045–63047)"],
        ],
      },
      {
        name: "Open laminotomy (hemilaminectomy) with nerve root decompression (per interspace)",
        codes: [
          ["63020 · 63030", "First-time, one interspace — cervical · lumbar"],
          ["+63035", "Each additional interspace, cervical or lumbar (add-on to 63020–63030)"],
          ["63040 · 63042", "RE-exploration, single interspace — cervical · lumbar"],
          ["+63043 · +63044", "Each additional re-exploration interspace — cervical · lumbar"],
        ],
      },
    ],
    rules: [
      "Surgical spine services are presumed OPEN unless the note says percutaneous or endoscopic. The main way the surgeon saw the spine defines the code, even if another method was used a little.",
      "Laminectomy codes without facetectomy count vertebral SEGMENTS in two bands: 1 or 2 segments, or more than 2. The band is picked ONCE — not per segment.",
      "Laminectomy with facetectomy and foraminotomy counts one segment at a time: the base code for the first, and +63048 for each additional segment.",
      "Laminotomy codes count INTERSPACES. For bilateral work, the base codes (63020, 63030, 63040, 63042) take modifier 50. The add-ons (63035, 63043, 63044) are reported twice for bilateral work — never with modifier 50.",
      "Do not report 62330 or 62331 with 62322, 62323, 62360, 63005, 63030, 63042, 63047, 64483, 64486, 77003, or 77012.",
      "Thoracic and sacral laminotomy have no codes here (thoracic laminectomy and sacral laminectomy do).",
      "If the laminectomy is followed by an arthrodesis (fusion), see 22590–22614. Do not report laminectomy or laminotomy done only to prepare the interspace for a fusion at the same level (22630–22634). The exception is decompression that goes beyond preparing the interspace for a posterior interbody fusion — that is reported with 63052 and +63053.",
      "The operating microscope (69990) may be reported with the laminectomy and laminotomy families. It is already included in the anterior discectomy codes 63075–63078.",
    ],
    tips: [
      "The number of 'levels' is not one thing. Laminectomy without facetectomy = two bands. Laminectomy with facetectomy = per segment. Laminotomy = per interspace. Read which counting method the descriptor uses.",
      "The 63045–63048 family always names facetectomy and foraminotomy in the descriptor; the 63001–63017 family says 'without facetectomy, foraminotomy or discectomy'.",
    ],
    traps: [
      "Using +63048 with 63001–63017. The add-on belongs to 63045–63047 only.",
      "Reporting a laminotomy code for a thoracic case. Thoracic decompression is by laminectomy or the anterior and lateral approaches.",
      "Adding a second code for each level of a 'more than 2 segments' laminectomy. 63015–63017 already cover all of them.",
    ],
    cases: [
      {
        label: "HARD SCENARIO",
        title: "Lumbar laminectomy with facetectomy and foraminotomy at three levels",
        scenario: "A surgeon performs an open laminectomy with facetectomy and foraminotomy to decompress the nerve roots at three lumbar vertebral segments.",
        steps: [
          "Open surgery, with facetectomy and foraminotomy included: this is the 63045–63047 family, not 63001–63017.",
          "Region: lumbar, single segment code = 63047 for the first segment.",
          "Each additional vertebral segment is the add-on +63048. Two more segments = 2 units.",
        ],
        answer: "63047, +63048 × 2",
      },
      {
        label: "HARD SCENARIO",
        title: "Bilateral lumbar laminotomy at two interspaces",
        scenario: "A surgeon performs a first-time laminotomy with nerve root decompression at one lumbar interspace on both sides, and at a second lumbar interspace on both sides.",
        steps: [
          "Laminotomy is counted per interspace. The first interspace is 63030.",
          "It was done on both sides, so the base code takes modifier 50: 63030-50.",
          "The second interspace is the add-on +63035. Because it was done on both sides, the add-on is reported TWICE — with no modifier 50.",
        ],
        answer: "63030-50, +63035 × 2",
      },
    ],
  },
  {
    id: "spine-anterior",
    n: 2,
    title: "Spine Decompression — Anterior, Lateral & Transpedicular Approaches",
    range: "63055–63103",
    intro: [
      "When the surgeon comes from the front or the side of the spine, the operation is a discectomy (removing a disc) or a corpectomy (removing a vertebral body). The count is by INTERSPACE for discectomy and by SEGMENT for corpectomy.",
      "These are still 60,000-series codes because the goal is to relieve pressure on the spinal cord or nerves. Procedures on the spine bones for fusion or fracture are in the 20,000 series.",
    ],
    definitions: [
      ["Corpectomy (vertebral body resection)", "removing all or a large part of a vertebral body. In the neck, 'partial' means at least half of the body; in the thoracic and lumbar spine it means at least one-third."],
      ["Transpedicular approach", "reaching the spinal canal through the pedicle, the bony bridge at the side of the vertebra."],
      ["Costovertebral approach", "reaching the thoracic spine by removing a small part of the rib next to it."],
      ["Lateral extracavitary approach", "coming from the side and behind, without entering the chest or belly cavity."],
      ["Interspace", "the space between two vertebrae where a disc sits."],
    ],
    steps: [
      "① Which structure was removed: a disc (discectomy) or a vertebral body (corpectomy)?",
      "② Which approach: anterior (front), lateral, transpedicular, or costovertebral?",
      "③ Which region of the spine (cervical, thoracic, lumbar, sacral) — and, for a corpectomy, which approach? A lower thoracic or lumbar corpectomy has more than one code, chosen by the approach.",
      "④ Count the interspaces (discectomy) or segments (corpectomy). The first is the base code; the rest are add-ons.",
      "⑤ Two surgeons working together (for example a spine surgeon and an access surgeon)? Each adds modifier 62 to his or her code and the add-ons.",
    ],
    categories: [
      {
        name: "Anterior discectomy (front approach)",
        codes: [
          ["63075 · +63076", "CERVICAL — single interspace · each additional interspace (includes osteophytectomy)"],
          ["63077 · +63078", "THORACIC — single interspace · each additional interspace"],
        ],
      },
      {
        name: "Anterior corpectomy (front approach)",
        codes: [
          ["63081 · +63082", "CERVICAL — first segment · each additional segment"],
          ["63085 · +63086", "THORACIC, transthoracic approach — first segment · each additional segment"],
          ["63087 · +63088", "COMBINED THORACOLUMBAR approach, lower thoracic or lumbar — first segment · each additional segment"],
          ["63090 · +63091", "TRANSPERITONEAL or RETROPERITONEAL approach, lower thoracic, lumbar, or sacral — first segment · each additional segment"],
        ],
      },
      {
        name: "Lateral and transpedicular approaches",
        codes: [
          ["63101 · 63102", "LATERAL EXTRACAVITARY corpectomy — thoracic · lumbar, single segment"],
          ["+63103", "Each additional thoracic or lumbar segment (add-on to 63101 and 63102)"],
          ["63055 · 63056", "TRANSPEDICULAR decompression of the spinal cord or nerve roots (for example a herniated disc) — thoracic · lumbar"],
          ["+63057", "Each additional segment, thoracic or lumbar"],
          ["63064 · +63066", "COSTOVERTEBRAL approach, thoracic — single segment · each additional segment"],
        ],
      },
    ],
    rules: [
      "Anterior discectomy codes are counted per INTERSPACE; anterior corpectomy, lateral, and transpedicular codes are counted per SEGMENT.",
      "63081–63091 already include the discectomy above and/or below the removed vertebral body.",
      "Do not report 63075 or 63076 with 22554 even when different surgeons do the two parts. To report the anterior disc removal with an interbody fusion at the same level in one session, use the arthrodesis codes (22551, 22552).",
      "The operating microscope is included in 63075–63078. Do not add 69990.",
      "Two surgeons working together on the same anterior operation each add modifier 62 to the definitive code (63075, 63077, 63081, 63085, 63087, 63090) and to its add-ons, for as long as both stay primary surgeons.",
      "If the corpectomy is followed by an arthrodesis, see 22548–22812. For rebuilding the spine with hardware, use the instrumentation codes 22840–22855, 22859.",
    ],
    tips: [
      "Memory hook: DISC = INTERspace. BODY = SEGMENT.",
      "An anterior cervical discectomy WITH a fusion at the same level is coded as the arthrodesis (22551), not as 63075. 63075 is for the disc removal by itself.",
    ],
    traps: [
      "Reporting 63075 with a same-level interbody fusion. Use the fusion code.",
      "Adding 69990 to an anterior discectomy. The microscope is included.",
      "Counting a corpectomy by interspace. Corpectomy counts segments.",
    ],
    cases: [
      {
        title: "Anterior discectomy at four cervical interspaces",
        scenario: "A physician excises the disks from four cervical interspaces (using an anterior approach) to eliminate herniated disks causing pressure on the spinal cord. How should these services be reported?",
        steps: [
          "What was removed? Discs — a discectomy, not a corpectomy or laminectomy. The approach is anterior, in the cervical spine.",
          "Why this section and not the 20,000 (musculoskeletal) codes? The purpose is to relieve pressure on the spinal cord, and procedures on the spinal cord take the 60,000 codes.",
          "Discectomy is counted per INTERSPACE. The first interspace is 63075.",
          "The other three interspaces are the add-on +63076 — one unit for each additional interspace. That is 3 units.",
          "No fusion was described, so 22554 and the fusion codes do not apply. The microscope is included.",
        ],
        answer: "63075, +63076 × 3",
      },
    ],
  },
  {
    id: "endocrine",
    n: 3,
    title: "The Endocrine Glands — Thyroid, Parathyroid, Thymus, Adrenal & Carotid Body",
    range: "60000–60699",
    intro: [
      "The endocrine system has relatively few codes. Its section (60000–60699) sits after the maternity care codes and before the nervous system codes.",
      "Four glands live here: thyroid, parathyroid, adrenal, and thymus (with the carotid body tumor codes at the end). Surgery on the pituitary and pineal glands is coded in the NERVOUS system. Surgery on the ovaries and testes is coded in the female and male genital sections. Pancreas surgery is in the digestive system.",
    ],
    definitions: [
      ["Thyroid lobectomy", "removing one side (lobe) of the thyroid. The isthmus is the bridge of tissue between the two lobes."],
      ["Total thyroidectomy", "removing the whole thyroid gland."],
      ["Parathyroidectomy", "removing the small parathyroid glands, which control calcium. There are usually four."],
      ["Parathyroid autotransplantation", "the removed gland is cut into 1–2 mm pieces and placed into a muscle of the neck or forearm, where it grows a new blood supply and works again in about 4 to 6 weeks."],
      ["Thymectomy", "removing the thymus gland, which sits behind the breastbone. 'Mediastinal' refers to the middle of the chest, where the thymus lies, and 'substernal' means behind the breastbone."],
      ["Adrenalectomy", "removing part or all of an adrenal gland, which sits on top of a kidney."],
    ],
    steps: [
      "① Which gland? Thyroid, parathyroid, thymus, adrenal, or carotid body.",
      "② Thyroid: how much came out — a piece (cyst or adenoma), part or one lobe, or the whole gland? Was it for cancer, and was neck dissection done?",
      "③ Parathyroid: was the gland removed, re-explored, or explored through the chest? Was any of it transplanted?",
      "④ Thymus and adrenal: which approach (neck, breastbone split, or open belly / laparoscopy)?",
      "⑤ Bilateral? Modifiers are given under the code (for example 60260 and 60540).",
    ],
    categories: [
      {
        name: "Thyroid gland",
        codes: [
          ["60000 · 60280 · 60281", "Thyroglossal duct cyst: incision and drainage · excision · excision, recurrent"],
          ["60100", "Core needle biopsy of the thyroid (needle aspiration biopsies are in 10004–10012 and 10021)"],
          ["60200", "Excision of a thyroid cyst or adenoma, or cutting through the isthmus"],
          ["60210 · 60212", "PARTIAL thyroid lobectomy, one side, with or without isthmusectomy · with contralateral subtotal lobectomy"],
          ["60220 · 60225", "TOTAL thyroid lobectomy, one side, with or without isthmusectomy · with contralateral subtotal lobectomy"],
          ["60240", "Total or complete thyroidectomy"],
          ["60252 · 60254", "Total or subtotal thyroidectomy FOR CANCER — with limited neck dissection · with radical neck dissection"],
          ["60260", "Completion thyroidectomy: removal of all remaining thyroid after an earlier partial removal (bilateral: modifier 50)"],
          ["60270 · 60271", "Thyroidectomy including a substernal thyroid — sternal split or chest approach · neck (cervical) approach. Subtotal or partial thyroidectomy uses 60271"],
          ["60300", "Aspiration and/or injection of a thyroid cyst"],
        ],
      },
      {
        name: "Parathyroid, thymus, adrenal, carotid body",
        codes: [
          ["60500 · 60502 · 60505", "Parathyroidectomy or exploration — first surgery · re-exploration · with mediastinal exploration by sternal split or chest approach"],
          ["+60512", "ADD-ON: parathyroid autotransplantation"],
          ["60520 · 60521 · 60522", "Thymectomy, partial or total — through the neck · sternal split or chest approach without radical mediastinal dissection · with radical mediastinal dissection"],
          ["60540 · 60545", "Adrenalectomy, partial or complete, or exploration, transabdominal, lumbar, or dorsal (open) — alone · with removal of adjacent retroperitoneal tumor"],
          ["60650", "LAPAROSCOPIC adrenalectomy, partial or complete, or exploration"],
          ["60600 · 60605", "Excision of a carotid body tumor — without excision of the carotid artery · with excision of the carotid artery"],
          ["60660 · +60661", "NEW (2025): percutaneous radiofrequency ablation of thyroid nodule(s) with imaging guidance — one lobe or the isthmus · additional lobe (add-on). Not reported with 76940, 76942, 77013, or 77022"],
          ["60659 · 60699", "Unlisted laparoscopy procedure, endocrine · unlisted procedure, endocrine"],
        ],
      },
    ],
    rules: [
      "+60512 (parathyroid autotransplantation) is an add-on. It is reported with 60500, 60502, 60505, and with the thyroid codes 60212, 60225, 60240, 60252, 60254, 60260, 60270, and 60271.",
      "Total thyroidectomy is 60240. For a subtotal or partial thyroidectomy, use 60271 (neck approach).",
      "Thyroidectomy for malignancy is picked by the neck dissection that was done: limited neck dissection (60252) or radical neck dissection (60254).",
      "Adrenalectomy: 60540 and 60545 are open and are not reported with 50323. For a laparoscopic approach, use 60650. For a bilateral open adrenalectomy, report 60540 with modifier 50.",
      "Thoracoscopic (VATS) thymectomy is not in this section — use 32673.",
      "Imaging guidance for a core needle biopsy of the thyroid (60100) is reported separately (76942, 77002, 77012, 77021).",
    ],
    tips: [
      "Sort by gland first. The codes for each gland are grouped together in numeric order: thyroid 60000–60300, parathyroid 60500–60512, thymus 60520–60522, adrenal 60540–60545 and 60650, carotid body 60600–60605.",
      "For the thyroid, count how much came out. Piece → 60200. One lobe → 60210 or 60220. Everything → 60240.",
    ],
    traps: [
      "Coding a pituitary or pineal gland operation from this section. Those are in the nervous system codes (for example 61546, 61548, 61552).",
      "Forgetting the add-on 60512 when a parathyroid gland is transplanted during a thyroidectomy or parathyroidectomy.",
      "Using 60540 for a laparoscopic adrenalectomy. The laparoscopic code is 60650.",
    ],
    cases: [
      {
        label: "HARD SCENARIO",
        title: "Total thyroidectomy with a parathyroid gland transplanted",
        scenario: "A surgeon removes a patient's entire thyroid for a large goiter. One parathyroid gland is accidentally removed with it, so the surgeon cuts it up and places the pieces into a neck muscle.",
        steps: [
          "The entire thyroid was removed: total thyroidectomy = 60240.",
          "A parathyroid gland was transplanted into a muscle: parathyroid autotransplantation, the add-on +60512.",
          "60512 may be reported with 60240 (it is on the list of allowed codes).",
        ],
        answer: "60240, +60512",
      },
      {
        label: "HARD SCENARIO",
        title: "Laparoscopic removal of an adrenal gland",
        scenario: "A surgeon removes the right adrenal gland with a laparoscope for a small adenoma.",
        steps: [
          "The gland is the adrenal gland. The approach is laparoscopic.",
          "The open codes 60540 and 60545 are for the open approach. The codebook points to 60650 for a laparoscopic approach.",
        ],
        answer: "60650",
      },
    ],
  },
];

export default function NeuroReviewerPart3Page() {
  return (
    <ReviewerShell
      part={3}
      subtitle="Part 3 — Spine Decompression & the Endocrine Glands (63001–63103, 60000–60699)"
      sections={sections}
      intro={
        <>
          <strong>Spine in one idea:</strong> the number of levels is counted differently by each family — bands for plain laminectomy, segments for laminectomy with facetectomy, interspaces for laminotomy and discectomy. The cervical discectomy slide question is solved in Section 2. <strong>Endocrine in one idea:</strong> sort by gland, then by how much came out. The eye (65000–68999) and ear (69000–69990) codes and the peripheral nerve codes (64000–64999) are not built yet.
        </>
      }
    />
  );
}
