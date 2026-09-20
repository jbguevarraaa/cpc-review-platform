import type { SolvedCase } from "./solved-case";

// The respiratory training deck (23 pages of guideline slides) contains no practice questions,
// so these cases are built from the deck's own rules and checked against the CPT 2026 codebook.
const DECK_RULES = "Built from the rules in your Respiratory training deck";

/** Section 2 of Part 1 — Accessory Sinuses (nasal/sinus endoscopy) */
export const nasalEndoscopyCases: SolvedCase[] = [
  {
    title: "Diagnostic nasal endoscopy on both sides",
    source: DECK_RULES,
    scenario: "A patient with recurring nosebleeds has a diagnostic nasal endoscopy. The surgeon inspects the nasal cavity, the middle and superior meatus, the turbinates, and the spheno-ethmoid recess on the right and then on the left. Nothing is biopsied or treated. How is this reported?",
    steps: [
      "Nothing was DONE beyond looking, so this is the diagnostic code, not a surgical endoscopy code.",
      "The diagnostic codes 31231–31235 assume the whole inspection in one pass. You do not add a code for each structure examined.",
      "31231 is written as 'unilateral or bilateral'. Both sides in one session is still one unit — no modifier 50.",
      "31231 is the only nasal endoscopy code written that way. Every code from 31233 up (the diagnostic sinusoscopies 31233 and 31235 as well as the surgical ones) is a UNILATERAL procedure, so a bilateral one takes modifier 50.",
      "Careful: if any surgical nasal or sinus endoscopy had been done on the same side, the diagnostic look would be packaged into it and 31231 would not be reported.",
    ],
    answer: "31231 (once)",
  },
];

/** Section 4 of Part 1 — Trachea and Bronchi */
export const bronchoscopyCases: SolvedCase[] = [
  {
    title: "Bronchoscopy with a lung biopsy and fluoroscopy",
    source: DECK_RULES,
    scenario: "A flexible bronchoscopy is done under fluoroscopic guidance. The surgeon inspects the airways and then takes a transbronchial biopsy of the right lower lobe. How is this reported?",
    steps: [
      "Something was DONE — a biopsy. A surgical bronchoscopy always includes the diagnostic bronchoscopy, so 31622 is not added.",
      "Fluoroscopic guidance is included in the bronchoscopy codes 31622–31651, so 76000 is not added either.",
      "Transbronchial lung biopsy of a single lobe = 31628. (Each additional lobe would be the add-on +31632.)",
    ],
    answer: "31628",
  },
  {
    title: "EBUS sampling of lymph node stations",
    source: DECK_RULES,
    scenario: "During bronchoscopy the surgeon uses endobronchial ultrasound (EBUS) to guide needle sampling of lymph nodes at stations 4R, 7, and 11L. How is this reported?",
    steps: [
      "The deck's rule: if EBUS is used, go to 31652–31654.",
      "31652 and 31653 are complete services for sampling lymph nodes with EBUS. They are counted by STATIONS: 31652 for 1 or 2 stations, 31653 for 3 or more.",
      "Three stations were sampled, so 31653.",
      "31654 is a different thing: an add-on to identify a peripheral lesion by ultrasound. It is not used here.",
    ],
    answer: "31653",
  },
];

/** Section 3 of Part 2 — Lung Resection (wedge resection rules) */
export const wedgeCases: SolvedCase[] = [
  {
    title: "Two wedge resections in the same lung",
    source: DECK_RULES,
    scenario: "Through an open chest incision, the surgeon removes two lung nodules with wedge resections. Both are in the right lung. How is this reported?",
    steps: [
      "Both wedges are meant to treat, and the surgeon pays attention to the surgical margins, so these are THERAPEUTIC wedge resections.",
      "Open approach: the first wedge is 32505 (VATS would be 32666).",
      "Each additional wedge in the SAME lung is an add-on: +32506 (VATS would be +32667).",
      "One additional wedge = one unit of +32506.",
    ],
    answer: "32505, +32506",
  },
  {
    title: "One wedge in each lung",
    source: DECK_RULES,
    scenario: "Through an open approach, the surgeon does a therapeutic wedge resection of a nodule in the right lung and a therapeutic wedge resection of a nodule in the left lung. How is this reported?",
    steps: [
      "Both are therapeutic wedge resections done open.",
      "The add-on +32506 is only for the SAME lung. The second wedge is in the opposite lung.",
      "So the opposite lung is reported as its own 32505, with modifier 59 to show it is a different lung. This open answer comes from the deck's rule.",
      "If the same two wedges were done by VATS, the codebook has its own note under 32666: report a bilateral procedure with modifier 50. That gives 32666-50 (the deck's slide shows modifier 59 for VATS too, but follow the codebook note).",
    ],
    answer: "Open: 32505, 32505-59. VATS: 32666-50.",
  },
  {
    title: "Diagnostic wedge, then a VATS lobectomy",
    source: DECK_RULES,
    scenario: "By thoracoscopy the surgeon takes a wedge of a right upper lobe nodule and sends it for intraoperative pathology. The frozen section shows cancer, so the surgeon goes on to do a lobectomy of the same lobe during the same session. How is this reported?",
    steps: [
      "The wedge was taken to decide how much to remove, and the result led to a bigger operation in the SAME place. It is a DIAGNOSTIC wedge.",
      "The lobectomy is the main code: VATS lobectomy = 32663. (The VATS codes 32663, 32666, and 32668 are listed in the Thoracoscopy section below.)",
      "Then add the add-on for the diagnostic wedge that led to it: +32668 (the open version is +32507).",
      "Two codes together — not just the lobectomy, and not the therapeutic wedge code.",
    ],
    answer: "32663, +32668",
  },
  {
    title: "A lobectomy plus a wedge in a different lobe",
    source: DECK_RULES,
    scenario: "Through a thoracotomy the surgeon removes the right upper lobe (lobectomy) for a cancer. In the same session, a separate nodule in the right lower lobe is treated with a therapeutic wedge resection. How is this reported?",
    steps: [
      "A therapeutic wedge in the SAME lobe as a bigger resection is part of the bigger operation.",
      "This wedge is in a DIFFERENT lobe, so it is not part of the lobectomy and is reported on its own.",
      "Open lobectomy = 32480. The extra wedge = 32505 with modifier 59.",
    ],
    answer: "32480, 32505-59",
  },
  {
    title: "A wedge and no further resection",
    source: DECK_RULES,
    scenario: "By thoracoscopy the surgeon removes a lung nodule with a wedge resection, taking clear margins, and sends it for intraoperative pathology. The result is benign, the wedge is the complete removal, and no more lung is removed. How is this reported?",
    steps: [
      "The frozen section did not lead to a more extensive resection.",
      "In that case the wedge is reported as a therapeutic wedge resection — the surgeon paid attention to margins and the wedge was the complete removal. (A sample-only biopsy with no attention to margins is a different service: the diagnostic lung biopsy codes such as 32608.)",
      "VATS wedge resection, first one, one side = 32666. (32505 is the open version.)",
    ],
    answer: "32666",
  },
];

/** Section 5 of Part 2 — Thoracoscopy (VATS) */
export const thoracoscopyCases: SolvedCase[] = [
  {
    title: "Thoracoscopy with a pleural biopsy",
    source: DECK_RULES,
    scenario: "A patient with a pleural effusion has video-assisted thoracoscopy. The surgeon first looks all around the chest cavity, then takes biopsies of the pleura. How is this reported?",
    steps: [
      "The deck's rule: a diagnostic thoracoscopy is packaged into the thoracoscopy code that does more.",
      "The surgeon did something beyond looking — a pleural biopsy. The biopsy code already includes the look around the chest cavity.",
      "Thoracoscopy with biopsy of the pleura = 32609 (it sits with the diagnostic and biopsy thoracoscopy codes 32601–32609 listed in Section 1). The diagnostic thoracoscopy 32601 is not added.",
    ],
    answer: "32609",
  },
];
