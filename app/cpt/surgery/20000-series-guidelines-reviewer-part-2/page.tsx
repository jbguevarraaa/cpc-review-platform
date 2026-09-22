import Link from "next/link";

type CodeEntry = { code: string; desc: string };
type Category = { title: string; codes: CodeEntry[] };

type Topic = {
  n: number;
  title: string;
  codes: string;
  categories?: Category[];
  summary: string[];
  steps: string[];
  easy: { scenario: string; answer: string };
  hard: { scenario: string; answer: string };
  tips: string[];
};

const topics: Topic[] = [
  {
    n: 1,
    title: "Head — TMJ, Excision, Prosthesis & Craniofacial Reconstruction",
    codes: "21010–21299",
    categories: [
      {
        title: "TMJ procedures",
        codes: [
          { code: "21010", desc: "Arthrotomy, temporomandibular joint" },
          { code: "21050", desc: "Condylectomy, temporomandibular joint (separate procedure)" },
          { code: "21060", desc: "Meniscectomy, partial or complete, temporomandibular joint" },
          { code: "21073", desc: "Manipulation of TMJ(s), therapeutic, requiring an anesthesia service" },
          { code: "21240", desc: "Arthroplasty, temporomandibular joint, with or without autograft" },
          { code: "21243", desc: "Arthroplasty, temporomandibular joint, with prosthetic joint replacement" },
        ],
      },
      {
        title: "Excision of mandible/maxilla tumors & cysts",
        codes: [
          { code: "21040", desc: "Excision of benign tumor or cyst of mandible, by enucleation and/or curettage" },
          { code: "21044", desc: "Excision of malignant tumor of mandible" },
          { code: "21046", desc: "Excision of benign tumor or cyst of mandible; requiring intra-oral osteotomy" },
          { code: "21048", desc: "Excision of benign tumor or cyst of maxilla; requiring intra-oral osteotomy" },
        ],
      },
      {
        title: "Head prosthesis (physician-fabricated)",
        codes: [
          { code: "21076", desc: "Impression and custom preparation; surgical obturator prosthesis" },
          { code: "21077", desc: "Impression and custom preparation; orbital prosthesis" },
          { code: "21088", desc: "Impression and custom preparation; facial prosthesis" },
        ],
      },
      {
        title: "LeFort midface reconstruction",
        codes: [
          { code: "21141", desc: "Reconstruction midface, LeFort I; single piece, without bone graft" },
          { code: "21145", desc: "Reconstruction midface, LeFort I; single piece, requiring bone grafts" },
          { code: "21150", desc: "Reconstruction midface, LeFort II; anterior intrusion" },
          { code: "21159", desc: "Reconstruction midface, LeFort III (extracranial), requiring bone grafts; without LeFort I" },
        ],
      },
    ],
    summary: [
      "TMJ arthrotomy (21010) is for exploring/draining the joint or removing a foreign body — separate from the whole family of craniofacial reconstruction codes that follows.",
      "TMJ manipulation under anesthesia (21073) specifically requires an anesthesia service (general or monitored anesthesia care). Manipulation without that anesthesia service, or closed treatment of an actual TMJ dislocation, are different codes entirely.",
      "Head Prosthesis codes (21076–21089) only apply when the treating clinician personally designs and fabricates the prosthesis (eye, ear, nose, obturator, etc.) — never when an outside lab makes it.",
      "Excision of a benign mandible/maxilla tumor or cyst is tiered by extent: simple enucleation/curettage vs. requiring an osteotomy (intra-oral or extra-oral) — with a separate, higher tier for malignant/radical resection.",
      "The large Repair/Revision/Reconstruction family (21120–21296) covers craniofacial work: genioplasty, LeFort I/II/III midface reconstruction, forehead/orbital reconstruction, and mandible/maxilla implants or TMJ arthroplasty.",
      "For LeFort-type reconstructions, code selection depends on how many bone \"pieces\" the midface is divided into and whether bone grafting is required — not on injury severity.",
    ],
    steps: [
      "Step 1 — Identify the target: the TMJ itself, mandible/maxilla, cranial bones, or a craniofacial deformity needing multi-piece reconstruction.",
      "Step 2 — For tumor/cyst excision: simple enucleation/curettage, or does it require an intra-oral or extra-oral osteotomy?",
      "Step 3 — For LeFort reconstructions: which LeFort level, how many pieces, and is bone grafting needed?",
      "Step 4 — For head prosthesis codes: confirm the treating clinician personally designed and fabricated the device.",
    ],
    easy: {
      scenario: "A small benign mandibular cyst is removed by simple enucleation and curettage, with no osteotomy needed.",
      answer: "The basic enucleation/curettage code — not one of the osteotomy-required codes.",
    },
    hard: {
      scenario: "A LeFort I midface reconstruction is performed in 3 separate bone pieces, requiring bone grafts to stabilize the segments.",
      answer: "The LeFort I code specific to \"3 or more pieces, requiring bone grafts\" — both the piece count and the bone-graft requirement change the code, not just the LeFort level alone.",
    },
    tips: [
      "LeFort level, piece count, and bone-graft-yes/no are three separate variables that each affect code selection — missing any one lands on the wrong code.",
      "Head prosthesis codes require physician fabrication — a lab-made prosthesis doesn't qualify for 21076–21089.",
    ],
  },
  {
    n: 2,
    title: "Head — Fracture and Dislocation (Nasal, Orbital, LeFort, Mandible, TMJ)",
    codes: "21315–21499",
    categories: [
      {
        title: "Nasal & orbital fractures",
        codes: [
          { code: "21315", desc: "Closed treatment of nasal bone fracture with manipulation; without stabilization" },
          { code: "21325", desc: "Open treatment of nasal fracture; uncomplicated" },
          { code: "21400", desc: "Closed treatment of fracture of orbit, except blowout; without manipulation" },
          { code: "21406", desc: "Open treatment of fracture of orbit, except blowout; without implant" },
        ],
      },
      {
        title: "LeFort-pattern midface fractures",
        codes: [
          { code: "21345", desc: "Closed treatment of nasomaxillary complex fracture (LeFort II type)" },
          { code: "21421", desc: "Closed treatment of palatal or maxillary fracture (LeFort I type)" },
          { code: "21431", desc: "Closed treatment of craniofacial separation (LeFort III type)" },
          { code: "21433", desc: "Open treatment of craniofacial separation (LeFort III type); with wiring and/or internal fixation" },
        ],
      },
      {
        title: "Mandible fracture & TMJ dislocation",
        codes: [
          { code: "21450", desc: "Closed treatment of mandibular fracture; without manipulation" },
          { code: "21453", desc: "Closed treatment of mandibular fracture with interdental fixation" },
          { code: "21461", desc: "Open treatment of mandibular fracture; without interdental fixation" },
          { code: "21465", desc: "Open treatment of mandibular condylar fracture" },
          { code: "21480", desc: "Closed treatment of temporomandibular dislocation; initial or subsequent" },
          { code: "21490", desc: "Open treatment of temporomandibular dislocation" },
        ],
      },
    ],
    summary: [
      "Nasal fracture treatment splits into closed (with or without stabilization) vs. open (uncomplicated vs. complicated with internal/external fixation), plus combined treatment when the septum is also fractured.",
      "Orbital floor blowout fractures are their own family, split by surgical approach (transantral, periorbital, or combined) and by whether an implant or bone graft is added.",
      "LeFort-pattern facial fractures — palatal/maxillary (LeFort I type), nasomaxillary (LeFort II type), and craniofacial separation (LeFort III type) — use closed treatment (interdental wire/denture/splint fixation) or open treatment graded by complexity: basic wiring/fixation vs. multiple surgical approaches vs. approaches plus bone grafting.",
      "Mandibular fracture treatment escalates from no manipulation, to manipulation, to interdental fixation, to external fixation, to open treatment with or without interdental fixation — with a separate dedicated code for condylar fracture and another for complicated multi-approach fractures.",
      "TMJ dislocation treatment is closed (initial or subsequent, and complicated or not) or open — distinct from interdental wiring performed for a non-fracture condition.",
    ],
    steps: [
      "Step 1 — Identify the fracture site: nasal, nasoethmoid, frontal sinus, orbital blowout, LeFort-pattern midface, mandible, or TMJ dislocation.",
      "Step 2 — Closed or open treatment? LeFort-pattern closed treatment uses interdental wire/denture/splint fixation only.",
      "Step 3 — For open treatment: how many surgical approaches, and was bone grafting performed? Both escalate the code toward \"complicated.\"",
      "Step 4 — For mandible fractures: check for interdental fixation, external fixation, or condylar involvement specifically.",
    ],
    easy: {
      scenario: "A displaced nasal bone fracture is manipulated and reduced, with no stabilization device needed afterward.",
      answer: "Closed treatment of nasal fracture, without-stabilization code.",
    },
    hard: {
      scenario: "A comminuted zygomatic/malar-area fracture is treated through multiple surgical approaches, with both internal fixation and bone grafting.",
      answer: "The complicated malar-area fracture code that specifically bundles internal fixation, multiple approaches, and bone grafting — not the basic open-treatment code.",
    },
    tips: [
      "\"LeFort\" fracture codes are named for the classic fracture pattern but selected by treatment complexity — closed wiring and open multi-approach-with-grafting are worlds apart in code choice.",
      "\"Complicated\" fracture codes almost always require multiple surgical approaches PLUS either internal fixation or grafting — one element alone usually isn't enough.",
    ],
  },
  {
    n: 3,
    title: "Neck (Soft Tissues) and Thorax",
    codes: "21501–21899",
    categories: [
      {
        title: "Chest wall tumor & rib excision",
        codes: [
          { code: "21601", desc: "Excision of chest wall tumor including rib(s)" },
          { code: "21602", desc: "Excision of chest wall tumor involving rib(s), with plastic reconstruction; without mediastinal lymphadenectomy" },
          { code: "21615", desc: "Excision of first and/or cervical rib" },
        ],
      },
      {
        title: "Pectus repair",
        codes: [
          { code: "21740", desc: "Reconstructive repair of pectus excavatum or carinatum; open" },
          { code: "21742", desc: "Minimally invasive approach (Nuss procedure), without thoracoscopy" },
          { code: "21743", desc: "Minimally invasive approach (Nuss procedure), with thoracoscopy" },
        ],
      },
      {
        title: "Rib & sternal fractures",
        codes: [
          { code: "21811", desc: "Open treatment of rib fracture(s) with internal fixation, unilateral; 1–3 ribs" },
          { code: "21812", desc: "Open treatment of rib fracture(s) with internal fixation; 4–6 ribs" },
          { code: "21813", desc: "Open treatment of rib fracture(s) with internal fixation; 7 or more ribs" },
          { code: "21820", desc: "Closed treatment of sternum fracture" },
          { code: "21825", desc: "Open treatment of sternum fracture with or without skeletal fixation" },
        ],
      },
    ],
    summary: [
      "Incision and drainage of a deep neck/thorax abscess has a distinct code when a partial rib ostectomy is also required.",
      "Soft tissue tumor excision of the neck or anterior thorax follows the same three-tier logic used across the whole Musculoskeletal section: subcutaneous, subfascial, or radical resection, sized by diameter plus margin.",
      "Rib excision, costotransversectomy, and cervical rib excision (with or without sympathectomy) are separate from chest wall tumor excision, which itself escalates by whether plastic reconstruction and/or mediastinal lymphadenectomy are also performed.",
      "Pectus excavatum/carinatum repair splits into open vs. minimally invasive (Nuss procedure) — and the Nuss procedure further splits by whether thoracoscopy is used alongside it.",
      "An uncomplicated closed rib fracture doesn't have its own fracture-treatment code — it's reported with an E/M code instead. Only OPEN treatment with internal fixation gets a dedicated code, tiered by rib count (1–3, 4–6, 7+).",
      "Sternal fracture has its own closed vs. open treatment codes, separate from sternoclavicular dislocation (which is coded under the Shoulder subsection).",
    ],
    steps: [
      "Step 1 — Is this a soft tissue procedure (biopsy, excision, tumor resection) or a bony/rib/sternal procedure?",
      "Step 2 — For tumor excision, apply the standard subcutaneous/subfascial/radical tiers by size.",
      "Step 3 — For pectus repair: open or Nuss? If Nuss, is thoracoscopy also used?",
      "Step 4 — For rib fractures: closed (→ E/M code) or open with internal fixation (→ rib-fracture-specific code, tiered by rib count)?",
    ],
    easy: {
      scenario: "A 2 cm subcutaneous soft tissue tumor of the anterior thorax is excised with minimal margin.",
      answer: "The subcutaneous excision code, under-3 cm tier.",
    },
    hard: {
      scenario: "A patient with 5 rib fractures undergoes open treatment with internal fixation and thoracoscopic visualization.",
      answer: "The \"4–6 ribs\" open rib-fracture-fixation code — rib count alone decides the tier, regardless of the thoracoscopic visualization detail.",
    },
    tips: [
      "There is no closed-treatment CPT code for an uncomplicated rib fracture in this section — that scenario is an E/M visit, not a fracture-treatment code.",
      "Chest wall tumor excision escalates independently on two axes — plastic reconstruction, and mediastinal lymphadenectomy — check both separately.",
    ],
  },
  {
    n: 4,
    title: "Back and Flank",
    codes: "21920–21936",
    categories: [
      {
        title: "Biopsy & tumor excision, back/flank",
        codes: [
          { code: "21920", desc: "Biopsy, soft tissue of back or flank; superficial" },
          { code: "21925", desc: "Biopsy, soft tissue of back or flank; deep" },
          { code: "21930", desc: "Excision, tumor, soft tissue of back or flank, subcutaneous; less than 3 cm" },
          { code: "21935", desc: "Radical resection of tumor, soft tissue of back or flank; less than 5 cm" },
        ],
      },
    ],
    summary: [
      "This is a short, self-contained family: soft tissue biopsy (superficial vs. deep) and tumor excision (subcutaneous, subfascial, radical) of the back or flank specifically — using the same three-tier size-based logic seen throughout the Musculoskeletal section.",
      "These codes exclude anything involving the spine itself — posterior spine incision and drainage is a separate Spine-subsection code (22010–22015), not a back/flank code.",
    ],
    steps: [
      "Step 1 — Confirm the lesion is soft tissue of the back/flank, not an intrinsic spinal lesion (which routes to the Spine subsection instead).",
      "Step 2 — Apply the standard tumor tier: subcutaneous, subfascial, or radical resection, sized by diameter plus margin.",
    ],
    easy: {
      scenario: "A 4 cm subfascial soft tissue mass of the flank is excised with minimal margin.",
      answer: "The subfascial excision code, 3 cm-or-greater tier.",
    },
    hard: {
      scenario: "A malignant soft tissue sarcoma of the back is resected with wide margins spanning both the subcutaneous and subfascial layers.",
      answer: "The radical resection code (selected by size) — not the subfascial excision code, since radical resection can legitimately span multiple tissue layers.",
    },
    tips: [
      "Don't confuse back/flank soft-tissue codes with posterior spine incision-and-drainage codes (22010–22015) — the distinction is deep soft tissue vs. the spine itself.",
    ],
  },
  {
    n: 5,
    title: "Spine — General Bundling Rules, Incision & Excision",
    codes: "22010–22116",
    categories: [
      {
        title: "Incision & drainage, posterior spine",
        codes: [
          { code: "22010", desc: "Incision and drainage, open, of deep abscess (subfascial), posterior spine; cervical/thoracic/cervicothoracic" },
          { code: "22015", desc: "Incision and drainage, open, of deep abscess, posterior spine; lumbar/sacral/lumbosacral" },
        ],
      },
      {
        title: "Partial vertebral excision (intrinsic bony lesion)",
        codes: [
          { code: "22100", desc: "Partial excision of posterior vertebral component, single segment; cervical" },
          { code: "22102", desc: "Partial excision of posterior vertebral component, single segment; lumbar" },
          { code: "22103", desc: "Partial excision of posterior vertebral component; each additional segment (add-on)" },
          { code: "22110", desc: "Partial excision of vertebral body, single segment; cervical" },
          { code: "22114", desc: "Partial excision of vertebral body, single segment; lumbar" },
          { code: "22116", desc: "Partial excision of vertebral body; each additional segment (add-on)" },
        ],
      },
    ],
    summary: [
      "Bone grafts (20930–20938) and spinal instrumentation (22840–22859) are ALWAYS reported separately, in addition to arthrodesis — never bundled into the arthrodesis code itself.",
      "When arthrodesis is performed alongside another definitive procedure (osteotomy, fracture care, corpectomy, laminectomy), append modifier 51 to the arthrodesis code — except codes 22585, 22614, and 22632, which are themselves add-on codes and never take modifier 51.",
      "Modifier 62 (co-surgeon) can be appended to definitive spine procedure codes when two surgeons each perform a distinct part of the same procedure as primary surgeons — but it can NEVER be appended to bone graft codes (20900–20938) or to spinal instrumentation codes (22840–22855, 22859).",
      "Incision and drainage of a deep posterior spine abscess splits by region — cervical/thoracic/cervicothoracic vs. lumbar/sacral/lumbosacral — and the two codes are not reported together.",
      "Partial excision of the posterior vertebral component (for an intrinsic bony lesion, not deformity) is billed per single vertebral segment by region, with an add-on for each additional segment — this is different from a full/near-full vertebral body resection (corpectomy), which is a Nervous System code, not Musculoskeletal.",
    ],
    steps: [
      "Step 1 — Identify the definitive spine procedure being performed (excision, osteotomy, fracture care, arthrodesis, etc.).",
      "Step 2 — Check whether bone graft and/or instrumentation are also documented — code them as separate add-ons, never folded into the primary code.",
      "Step 3 — If arthrodesis is combined with another definitive procedure, append modifier 51 to the arthrodesis code (unless it's one of the three arthrodesis add-on codes, which never take 51).",
      "Step 4 — If co-surgeons split the work, modifier 62 goes on the definitive procedure and eligible add-ons — never on bone graft or spinal instrumentation codes.",
    ],
    easy: {
      scenario: "A surgeon performs posterior arthrodesis at L5-S1 using morselized autogenous iliac bone graft harvested through a separate fascial incision, with no other procedure that day.",
      answer: "Report the arthrodesis code plus the separate morselized-autograft-for-spine add-on code — never combined into a single code.",
    },
    hard: {
      scenario: "Two surgeons work together, each performing a distinct part of an anterior interbody arthrodesis with anterior instrumentation at the same level.",
      answer: "Modifier 62 goes on the arthrodesis code and on the instrumentation add-on (since both surgeons contributed to each) — but modifier 62 is never appended to a bone graft code.",
    },
    tips: [
      "Spine bone grafts and instrumentation are separately reportable in every case — one of the most consistent rules in the whole Spine subsection.",
      "Modifier 62 is explicitly forbidden on bone graft and spinal instrumentation codes — a reliable wrong-answer trap if a question tries to attach it there.",
    ],
  },
  {
    n: 6,
    title: "Spine — Osteotomy",
    codes: "22206–22226",
    categories: [
      {
        title: "3-column osteotomy (pedicle/vertebral body subtraction)",
        codes: [
          { code: "22206", desc: "Osteotomy of spine, posterior/posterolateral approach, 3 columns, 1 vertebral segment; thoracic" },
          { code: "22207", desc: "Osteotomy of spine, posterior/posterolateral approach, 3 columns, 1 vertebral segment; lumbar" },
          { code: "22208", desc: "Osteotomy of spine, 3 columns; each additional vertebral segment (add-on)" },
        ],
      },
      {
        title: "1-column posterior/posterolateral osteotomy",
        codes: [
          { code: "22210", desc: "Osteotomy of spine, posterior/posterolateral approach, 1 vertebral segment; cervical" },
          { code: "22212", desc: "Osteotomy of spine, 1 vertebral segment; thoracic" },
          { code: "22214", desc: "Osteotomy of spine, 1 vertebral segment; lumbar" },
          { code: "22216", desc: "Osteotomy of spine, 1 column; each additional vertebral segment (add-on)" },
        ],
      },
      {
        title: "Anterior approach osteotomy",
        codes: [
          { code: "22220", desc: "Osteotomy of spine, including discectomy, anterior approach, single segment; cervical" },
          { code: "22222", desc: "Osteotomy of spine, anterior approach, single segment; thoracic" },
          { code: "22224", desc: "Osteotomy of spine, anterior approach, single segment; lumbar" },
          { code: "22226", desc: "Osteotomy of spine, anterior approach; each additional vertebral segment (add-on)" },
        ],
      },
    ],
    summary: [
      "Spinal osteotomy codes apply specifically when a portion of a vertebral segment is cut and removed to help re-align the spine for deformity correction — not for excising an intrinsic bony lesion (that's the Excision family, 22100–22116) and not for routine decompression (a Nervous System code).",
      "The spine is conceptually divided into three columns for these codes: anterior (front two-thirds of the vertebral body), middle (back third of the body plus the pedicle), and posterior (facets, lamina, spinous process).",
      "A posterior/posterolateral 3-column osteotomy (pedicle/vertebral body subtraction) is a single code per segment, split thoracic vs. lumbar — distinct from the simpler posterior/posterolateral 1-column osteotomy, which is split cervical/thoracic/lumbar and carries its own separate additional-segment add-on.",
      "Anterior approach osteotomy (including discectomy) is yet another family, split cervical/thoracic/lumbar with its own additional-segment add-on.",
    ],
    steps: [
      "Step 1 — Confirm this is a deformity-correction osteotomy, not lesion excision or decompression.",
      "Step 2 — How many spinal columns are being cut: the full 3-column subtraction, or the simpler posterior 1-column osteotomy?",
      "Step 3 — Anterior approach, or posterior/posterolateral approach?",
      "Step 4 — What spinal region, and how many segments — apply the matching additional-segment add-on for that specific code family.",
    ],
    easy: {
      scenario: "A posterior 1-column osteotomy is performed at a single lumbar segment.",
      answer: "The posterior/posterolateral 1-column lumbar osteotomy code.",
    },
    hard: {
      scenario: "A 3-column pedicle subtraction osteotomy is performed at one thoracic segment, then a second thoracic segment in the same session.",
      answer: "The 3-column thoracic osteotomy code for the first segment, plus its own dedicated additional-segment add-on for the second — not the 1-column osteotomy's add-on, which belongs to a different base code.",
    },
    tips: [
      "The 3-column (pedicle/vertebral body subtraction) osteotomy and the simpler 1-column osteotomy are two entirely separate code families, each with its own additional-segment add-on — don't cross their add-ons.",
    ],
  },
  {
    n: 7,
    title: "Spine — Fracture/Dislocation, Manipulation & Percutaneous Vertebroplasty/Augmentation",
    codes: "22310–22527",
    categories: [
      {
        title: "Fracture/dislocation treatment",
        codes: [
          { code: "22310", desc: "Closed treatment of vertebral body fracture(s), without manipulation, requiring casting/bracing" },
          { code: "22318", desc: "Open treatment and/or reduction of odontoid fracture(s), anterior approach; without grafting" },
          { code: "22325", desc: "Open treatment and/or reduction of vertebral fracture(s) and/or dislocation(s), posterior approach, 1 fractured vertebra; lumbar" },
        ],
      },
      {
        title: "Manipulation & percutaneous vertebroplasty/augmentation",
        codes: [
          { code: "22505", desc: "Manipulation of spine requiring anesthesia, any region" },
          { code: "22510", desc: "Percutaneous vertebroplasty, 1 vertebral body; cervicothoracic" },
          { code: "22511", desc: "Percutaneous vertebroplasty, 1 vertebral body; lumbosacral" },
          { code: "22513", desc: "Percutaneous vertebral augmentation, including cavity creation, 1 vertebral body; thoracic" },
          { code: "22514", desc: "Percutaneous vertebral augmentation, 1 vertebral body; lumbar" },
        ],
      },
      {
        title: "Annuloplasty",
        codes: [
          { code: "22526", desc: "Percutaneous intradiscal electrothermal annuloplasty; single level" },
          { code: "22527", desc: "Percutaneous intradiscal electrothermal annuloplasty; 1 or more additional levels (add-on)" },
        ],
      },
    ],
    summary: [
      "Closed treatment of a vertebral body fracture without manipulation, requiring casting/bracing, is one code; closed treatment of a fracture and/or dislocation requiring manipulation or traction (plus casting/bracing) is a different code.",
      "Open treatment of an odontoid (C1-C2/dens) fracture is its own distinct code pair (with or without grafting) — separate from open treatment of vertebral fracture/dislocation elsewhere in the spine, which is split by region with its own additional-level add-on.",
      "Manipulation of the spine requiring anesthesia (any region) is a single code — spinal manipulation without anesthesia is reported with a different, non-surgery code instead.",
      "Percutaneous vertebroplasty (cement injection only) and percutaneous vertebral augmentation (cavity creation, e.g. kyphoplasty, then cement injection) are two different procedures, each with a primary code plus an add-on for additional levels — vertebroplasty splits cervicothoracic vs. lumbosacral, augmentation splits thoracic vs. lumbar. Both already include bone biopsy and imaging guidance when performed, so neither is separately billed.",
      "Percutaneous intradiscal electrothermal annuloplasty has its own single-level code plus an add-on for additional levels.",
    ],
    steps: [
      "Step 1 — Is this a fracture/dislocation treatment, spinal manipulation, vertebroplasty/augmentation, or annuloplasty?",
      "Step 2 — For fracture/dislocation: closed (with or without manipulation/traction) or open? Odontoid fracture gets its own dedicated code pair.",
      "Step 3 — For percutaneous vertebral procedures: vertebroplasty (cement only) or augmentation (cavity creation first)? What region, and how many levels?",
      "Step 4 — Remember: bone biopsy and imaging guidance are already included in the vertebroplasty/augmentation codes — never billed separately alongside them.",
    ],
    easy: {
      scenario: "A patient with an osteoporotic compression fracture undergoes percutaneous vertebroplasty at a single lumbosacral vertebral body, with imaging guidance.",
      answer: "The single-level lumbosacral vertebroplasty code — the imaging guidance is already included, not billed separately.",
    },
    hard: {
      scenario: "A patient undergoes kyphoplasty (cavity creation plus cement) at two lumbar vertebral bodies in the same session.",
      answer: "The primary lumbar vertebral augmentation code for the first level, plus its additional-level add-on for the second — not the vertebroplasty code, since a cavity was created first.",
    },
    tips: [
      "Vertebroplasty = cement injection only. Vertebral augmentation (kyphoplasty) = cavity creation first, then cement. That single distinction decides the code family.",
      "Imaging guidance and bone biopsy are baked into 22510–22515 — adding a separate imaging code alongside them is a common wrong-answer trap.",
    ],
  },
  {
    n: 8,
    title: "Spine — Arthrodesis Techniques",
    codes: "22532–22634",
    categories: [
      {
        title: "Lateral extracavitary & anterior transoral",
        codes: [
          { code: "22532", desc: "Arthrodesis, lateral extracavitary technique; thoracic" },
          { code: "22548", desc: "Arthrodesis, anterior transoral or extraoral technique, clivus–C1–C2, with or without excision of odontoid process" },
        ],
      },
      {
        title: "Anterior interbody techniques",
        codes: [
          { code: "22551", desc: "Arthrodesis, anterior interbody, including decompression; cervical below C2" },
          { code: "22554", desc: "Arthrodesis, anterior interbody technique, minimal discectomy; cervical below C2" },
          { code: "22558", desc: "Arthrodesis, anterior interbody technique, minimal discectomy; lumbar" },
          { code: "22585", desc: "Arthrodesis, anterior interbody technique; each additional interspace (add-on)" },
        ],
      },
      {
        title: "Posterior/posterolateral & posterior interbody",
        codes: [
          { code: "22600", desc: "Arthrodesis, posterior or posterolateral technique, single interspace; cervical below C2" },
          { code: "22612", desc: "Arthrodesis, posterior or posterolateral technique, single interspace; lumbar" },
          { code: "22614", desc: "Arthrodesis, posterior or posterolateral technique; each additional interspace (add-on)" },
          { code: "22630", desc: "Arthrodesis, posterior interbody technique, single interspace, lumbar" },
          { code: "22633", desc: "Arthrodesis, combined posterior/posterolateral with posterior interbody, single interspace, lumbar" },
        ],
      },
    ],
    summary: [
      "Arthrodesis technique codes are organized by surgical approach: Lateral Extracavitary, Anterior or Anterolateral, and Posterior/Posterolateral/Lateral Transverse Process/Interbody.",
      "Anterior transoral/extraoral arthrodesis at clivus-C1-C2 is its own single dedicated code (with or without odontoid excision) — distinct from anterior interbody arthrodesis at other cervical levels below C2, which bundles disc space prep, discectomy, osteophytectomy, and cord/nerve root decompression into one code, with its own additional-interspace add-on.",
      "A separate, simpler \"anterior interbody technique\" family (minimal discectomy only, not the fuller decompression version) is split cervical-below-C2/thoracic/lumbar, sharing one common additional-interspace add-on code across all three regions.",
      "Posterior or posterolateral technique arthrodesis is split craniocervical (occiput-C2), atlas-axis (C1-C2), and then cervical-below-C2/thoracic/lumbar — the thoracic and lumbar versions specifically include lateral transverse technique when performed, sharing one additional-interspace add-on across all of them.",
      "Posterior INTERBODY technique arthrodesis (includes laminectomy/discectomy to prep the interspace) is a separate lumbar-only code from the posterior/posterolateral technique above, with its own matching additional-interspace add-on — and a combined posterior-plus-interbody technique is yet another distinct code with its own add-on.",
      "Decompression performed at the SAME interspace as a posterior lumbar interbody fusion (laminectomy, facetectomy, foraminotomy) can be separately reported; decompression performed solely to prepare the interspace for fusion cannot.",
    ],
    steps: [
      "Step 1 — What surgical approach: lateral extracavitary, anterior/anterolateral, or posterior/posterolateral/interbody?",
      "Step 2 — For anterior cervical: clivus-C1-C2 transoral (its own code), full interbody-with-decompression below C2, or the simpler minimal-discectomy interbody technique?",
      "Step 3 — For posterior: craniocervical/atlas-axis, standard posterior/posterolateral (by region), posterior interbody (lumbar only), or combined posterior+interbody?",
      "Step 4 — Is decompression being done at the SAME interspace as the fusion (separately reportable), or just to prepare the interspace for fusion (not separately reportable)?",
      "Step 5 — Count interspaces and apply the matching additional-interspace add-on — each technique family has its own dedicated add-on; don't cross them.",
    ],
    easy: {
      scenario: "A single-level lumbar posterior/posterolateral arthrodesis is performed with pedicle screw fixation, no interbody work.",
      answer: "The posterior/posterolateral lumbar arthrodesis code plus the spinal instrumentation add-on — reported separately, per the general spine bundling rules.",
    },
    hard: {
      scenario: "A transforaminal lumbar interbody fusion (TLIF) is performed at L4-L5, and a laminectomy for neural decompression is also performed at that same level.",
      answer: "Both the posterior interbody arthrodesis code AND the laminectomy/decompression code can be reported together, since the decompression is for neural decompression at that level — not merely interspace preparation.",
    },
    tips: [
      "Each arthrodesis technique family (anterior-with-decompression, anterior-minimal, posterior/posterolateral, posterior interbody, combined) has its OWN separate additional-interspace add-on code — pairing the wrong add-on with the wrong base code is a common trap.",
      "\"Decompression to prepare the interspace\" is bundled into the fusion code; \"decompression for neural relief\" at the same level is separately billable — read carefully for the stated reason behind the laminectomy/facetectomy.",
    ],
  },
  {
    n: 9,
    title: "Spine — Spine Deformity, Exploration & Spinal Instrumentation",
    codes: "22800–22870",
    categories: [
      {
        title: "Spinal deformity arthrodesis & kyphectomy",
        codes: [
          { code: "22800", desc: "Arthrodesis, posterior, for spinal deformity, with or without cast; up to 6 vertebral segments" },
          { code: "22802", desc: "Arthrodesis, posterior, for spinal deformity; 7 to 12 vertebral segments" },
          { code: "22808", desc: "Arthrodesis, anterior, for spinal deformity; 2 to 3 vertebral segments" },
          { code: "22818", desc: "Kyphectomy, circumferential exposure and resection of vertebral segment(s); single or 2 segments" },
        ],
      },
      {
        title: "Exploration",
        codes: [
          { code: "22830", desc: "Exploration of spinal fusion" },
        ],
      },
      {
        title: "Spinal instrumentation",
        codes: [
          { code: "22840", desc: "Posterior non-segmental instrumentation (List separately in addition to code for primary procedure)" },
          { code: "22842", desc: "Posterior segmental instrumentation; 3 to 6 vertebral segments (add-on)" },
          { code: "22845", desc: "Anterior instrumentation; 2 to 3 vertebral segments (add-on)" },
          { code: "22850", desc: "Removal of posterior nonsegmental instrumentation" },
          { code: "22852", desc: "Removal of posterior segmental instrumentation" },
        ],
      },
    ],
    summary: [
      "Spinal deformity arthrodesis (scoliosis/kyphosis correction) is coded separately from routine arthrodesis, tiered purely by vertebral segment count: posterior approach (up to 6, 7–12, 13+) and anterior approach (2–3, 4–7, 8+) — with or without a cast.",
      "Kyphectomy (circumferential exposure and resection of vertebral segments, body and posterior elements) is its own family, split single-or-2 segments vs. 3-or-more, and is reported alongside the spinal deformity arthrodesis codes with modifier 51 when both are performed.",
      "Spinal deformity arthrodesis and kyphectomy codes cannot be reported together with thoracic (or lumbar/thoracolumbar) vertebral body tethering codes — tethering is a fusion-avoiding alternative technique, not combined with fusion in the same session.",
      "Exploration of a prior spinal fusion (checking whether it actually healed) is a single standalone code, which takes modifier 51 when reported alongside another definitive procedure like arthrodesis or decompression.",
      "Spinal instrumentation is classified as segmental (fixation at each end plus at least one additional interposed bony attachment) vs. non-segmental (fixation at each end only, no interposed attachment) — posterior and anterior instrumentation codes are each tiered by vertebral segment count, with their own additional-segment add-ons.",
      "Removal or reinsertion of spinal instrumentation is separately coded from the original insertion — but if instrumentation is removed AND new instrumentation placed at the same/overlapping levels in the same session, only the insertion code is reported, not both removal and insertion.",
    ],
    steps: [
      "Step 1 — Is this a deformity-correction arthrodesis/kyphectomy, an exploration of existing fusion, or instrumentation placement/revision/removal?",
      "Step 2 — For deformity arthrodesis: anterior or posterior approach, and how many vertebral segments (which tier)?",
      "Step 3 — For instrumentation: segmental or non-segmental, posterior or anterior, and how many segments — apply the matching additional-segment add-on.",
      "Step 4 — If instrumentation is being replaced at overlapping levels in the same session, code only the insertion, not a separate removal code on top.",
    ],
    easy: {
      scenario: "A posterior spinal deformity arthrodesis is performed across 8 vertebral segments for scoliosis correction.",
      answer: "The \"7 to 12 vertebral segments\" posterior deformity arthrodesis code.",
    },
    hard: {
      scenario: "A patient has previously placed posterior segmental instrumentation removed and new posterior segmental instrumentation placed at the same overlapping levels, in the same operative session.",
      answer: "Only the new insertion code is reported — the removal code is not additionally billed for an overlapping-level replacement in the same session.",
    },
    tips: [
      "Segmental vs. non-segmental instrumentation hinges on whether there's an interposed bony attachment between the two end-fixation points, not on how many total segments are spanned.",
      "A same-session instrumentation swap at overlapping levels gets only the insertion code — billing both insertion and removal here is a common overbilling trap.",
    ],
  },
];

const mainStyle = { maxWidth: "1160px", margin: "0 auto", padding: "36px 24px 64px", minHeight: "100vh", background: "#f5f7fa", color: "#161c26", fontFamily: "Arial, sans-serif" };
const heroStyle = { background: "linear-gradient(135deg, #0f172a, #2563eb)", color: "white", padding: "46px 42px", borderRadius: "18px", marginBottom: "26px", boxShadow: "0 12px 28px rgba(15,23,42,0.22)" };
const kickerStyle = { margin: "0 0 10px", color: "#bfdbfe", fontWeight: 800, letterSpacing: "0.08em" };
const navStyle = { display: "flex", flexWrap: "wrap" as const, gap: "10px", marginBottom: "26px" };
const navLinkStyle = { textDecoration: "none", color: "#2563eb", background: "#ffffff", border: "1px solid #dbe3f0", borderRadius: "999px", padding: "10px 15px", fontWeight: 700, fontSize: "14px" };
const pagerStyle = { display: "flex", flexWrap: "wrap" as const, gap: "10px", marginBottom: "26px" };
const pagerLinkStyle = { textDecoration: "none", color: "#2563eb", background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: "999px", padding: "8px 16px", fontWeight: 700, fontSize: "14px" };
const pagerActiveStyle = { ...pagerLinkStyle, background: "#2563eb", color: "#fff", border: "1px solid #2563eb" };
const introStyle = { background: "#eff6ff", border: "1px solid #bfdbfe", borderLeft: "7px solid #2563eb", borderRadius: "12px", padding: "22px 24px", marginBottom: "24px", lineHeight: 1.7 };
const sectionStyle = { background: "#ffffff", border: "1px solid #e2e7f0", borderRadius: "14px", padding: "24px 26px", marginBottom: "20px", boxShadow: "0 5px 16px rgba(15,23,42,0.05)" };
const sectionHeaderStyle = { display: "flex", alignItems: "center", gap: "12px", marginBottom: "6px", flexWrap: "wrap" as const };
const numberBadgeStyle = { background: "#2563eb", color: "#fff", width: "34px", height: "34px", minWidth: "34px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "14px" };
const sectionTitleStyle = { margin: 0, fontSize: "21px", color: "#111827" };
const codeChipStyle = { background: "#eff6ff", border: "1px solid #bfdbfe", color: "#2563eb", borderRadius: "999px", padding: "4px 12px", fontWeight: 800, fontSize: "12.5px", fontFamily: "Consolas, monospace" };
const pStyle = { lineHeight: 1.75, margin: "0 0 8px", fontSize: "14.5px" };
const labelStyle = { margin: "16px 0 8px", fontWeight: 800, fontSize: "13px", letterSpacing: "0.03em", color: "#2563eb" };
const scenarioGridStyle = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "14px", marginTop: "6px" };
const easyCardStyle = { background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "10px", padding: "14px 16px", lineHeight: 1.65, fontSize: "13.5px" };
const hardCardStyle = { background: "#fff7ed", border: "1px solid #fed7aa", borderRadius: "10px", padding: "14px 16px", lineHeight: 1.65, fontSize: "13.5px" };
const tipsBoxStyle = { background: "#fef2f2", border: "1px solid #fecaca", borderLeft: "5px solid #dc2626", borderRadius: "10px", padding: "14px 16px", marginTop: "14px", lineHeight: 1.65, fontSize: "13.5px" };
const stepsBoxStyle = { background: "#eff6ff", border: "1px solid #bfdbfe", borderLeft: "5px solid #2563eb", borderRadius: "10px", padding: "14px 16px", marginTop: "6px", marginBottom: "16px", lineHeight: 1.65, fontSize: "13.5px" };
const backLinkStyle = { textDecoration: "none", color: "#2563eb", fontWeight: 700 };
const categoryTitleStyle = { fontWeight: 800, fontSize: "13px", color: "#111827", margin: "10px 0 6px" };
const codeListStyle = { display: "flex", flexWrap: "wrap" as const, gap: "8px", marginBottom: "12px" };
const codeItemStyle = { background: "#f8fafc", border: "1px solid #e2e7f0", borderRadius: "8px", padding: "6px 10px", fontSize: "12.5px", lineHeight: 1.4, maxWidth: "320px" };
const codeNumStyle = { fontFamily: "Consolas, monospace", fontWeight: 800, color: "#2563eb", marginRight: "6px" };

export default function SurgeryTwentyThousandGuidelinesReviewerPart2Page() {
  return (
    <main style={mainStyle}>
      <header style={heroStyle}>
        <p style={kickerStyle}>20,000 SERIES · MUSCULOSKELETAL SYSTEM</p>
        <h1 style={{ margin: 0, fontSize: "clamp(28px, 5.5vw, 48px)" }}>CPT Surgery Guidelines Reviewer</h1>
        <p style={{ margin: "12px 0 0", fontSize: "18px", lineHeight: 1.5 }}>Part 2 — Head, Neck &amp; Thorax, Back &amp; Flank, and the Spine (21010–22899): craniofacial reconstruction, facial fractures, and every spine arthrodesis/instrumentation rule, grouped by category.</p>
      </header>

      <div style={pagerStyle}>
        <Link href="/cpt/surgery/20000-series-guidelines-reviewer" style={pagerLinkStyle}>Part 1 (General, 20100–20999)</Link>
        <span style={pagerActiveStyle}>Part 2 (Head–Spine, 21010–22899)</span>
        <Link href="/cpt/surgery/20000-series-guidelines-reviewer-part-3" style={pagerLinkStyle}>Part 3 (Abdomen–Wrist, 22900–25999) →</Link>
      </div>

      <nav aria-label="20,000 series navigation" style={navStyle}>
        <Link href="/cpt/surgery/20,000" style={navLinkStyle}>20,000 Series home</Link>
        <Link href="/cpt/surgery/20000-series-discussion-guide" style={navLinkStyle}>Discussion Guide</Link>
        <Link href="/cpt/surgery/20,000-series-study-tips" style={navLinkStyle}>Study Tips</Link>
        <Link href="/cpt/surgery" style={navLinkStyle}>Surgery home</Link>
      </nav>

      <section style={introStyle}>
        <strong>Part 2 of the 20,000 series reviewer:</strong> Part 1 covered the General subsection (20100–20999) — the rules that apply across the whole Musculoskeletal section. This part covers the anatomic-region subsections from Head through Spine, in the same Topic → Rule Summary → Step-by-Step → Example → Traps format. The Spine gets the deepest treatment here since arthrodesis, instrumentation, and vertebroplasty/kyphoplasty rules are consistently high-yield on the CPC exam. Codes are grouped by category rather than listed individually. Written in original wording, not copied from the CPT text.
      </section>

      {topics.map((t) => (
        <section key={t.n} style={sectionStyle}>
          <div style={sectionHeaderStyle}>
            <span style={numberBadgeStyle}>{t.n}</span>
            <h2 style={sectionTitleStyle}>{t.title}</h2>
            <span style={codeChipStyle}>{t.codes}</span>
          </div>

          {t.categories && (
            <>
              <p style={labelStyle}>🗂️ KEY CODES BY CATEGORY</p>
              {t.categories.map((c) => (
                <div key={c.title}>
                  <p style={categoryTitleStyle}>{c.title}</p>
                  <div style={codeListStyle}>
                    {c.codes.map((entry) => (
                      <span key={entry.code} style={codeItemStyle}>
                        <span style={codeNumStyle}>{entry.code}</span>
                        {entry.desc}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </>
          )}

          <p style={labelStyle}>📋 RULE SUMMARY</p>
          {t.summary.map((s) => <p key={s} style={pStyle}>{s}</p>)}

          <p style={labelStyle}>🪜 STEP BY STEP — HOW TO CODE THIS</p>
          <div style={stepsBoxStyle}>
            <ol style={{ margin: 0, paddingLeft: "20px", display: "grid", gap: "8px" }}>
              {t.steps.map((step) => <li key={step}>{step}</li>)}
            </ol>
          </div>

          <p style={labelStyle}>🎯 TWO EXAMPLE SCENARIOS</p>
          <div style={scenarioGridStyle}>
            <div style={easyCardStyle}>
              <strong>🟢 Easy:</strong> {t.easy.scenario}
              <p style={{ margin: "8px 0 0" }}><strong>Answer:</strong> {t.easy.answer}</p>
            </div>
            <div style={hardCardStyle}>
              <strong>🟠 Hard:</strong> {t.hard.scenario}
              <p style={{ margin: "8px 0 0" }}><strong>Answer:</strong> {t.hard.answer}</p>
            </div>
          </div>

          <div style={tipsBoxStyle}>
            <strong>🟥 Common Traps</strong>
            <ul style={{ margin: "8px 0 0", paddingLeft: "20px", display: "grid", gap: "6px" }}>
              {t.tips.map((tip) => <li key={tip}>{tip}</li>)}
            </ul>
          </div>
        </section>
      ))}

      <div style={{ marginTop: "10px", display: "flex", gap: "16px", flexWrap: "wrap" as const }}>
        <Link href="/cpt/surgery/20000-series-guidelines-reviewer" style={backLinkStyle}>← Back to Part 1</Link>
        <Link href="/cpt/surgery/20000-series-guidelines-reviewer-part-3" style={backLinkStyle}>Continue to Part 3 (Abdomen–Wrist) →</Link>
        <Link href="/cpt/surgery/20,000" style={backLinkStyle}>← Back to 20,000 Series</Link>
      </div>
    </main>
  );
}
