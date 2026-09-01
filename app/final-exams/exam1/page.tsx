"use client";

import React, { useState } from "react";

const questions = [
  {
    question: "What is the difference between entropion and ectropion?",
    options: [
      "Entropion is the inward turning of the eyelid and ectropion is the outward turning of the eyelid.",
      "Entropion is facial droop and ectropion is a facial spasm.",
      "Entropion is the outward turning of the hands and ectropion is the inward turning of the hands.",
      "Entropion is the inward turning of the feet and ectropion is the outward turning of the feet due to muscle disorder."
    ],
    correct: "A",
    explanation:
      "Entropion causes the eyelid to turn inward, allowing lashes to rub against the eye. Ectropion causes the eyelid to turn outward, exposing the inner eyelid surface. Both are disorders of the eyelid (ICD-10-CM category H02)."
  },

  {
    question:
      "An arteriovenous anastomosis is used to increase blood flow in hemodialysis. Which one of the following describes a direct arteriovenous anastomosis?",
    options: [
      "Insertion of a cannula",
      "A section of artery and a neighboring vein are joined",
      "A donor’s vein is used to connect an artery and a vein",
      "Radical hysterectomy not otherwise specified"
    ],
    correct: "B",
    explanation:
      "A direct arteriovenous (AV) anastomosis is created by surgically connecting a nearby artery and vein, increasing blood flow for hemodialysis access."
  },

  {
    question:
      "Ventral, umbilical, spigelian and incisional are types of:",
    options: [
      "Surgical approaches",
      "Hernias",
      "Organs found in the digestive system",
      "Cardiac catheterizations"
    ],
    correct: "B",
    explanation:
      "Ventral, umbilical, spigelian, and incisional are all specific types of abdominal wall hernias commonly classified in CPT hernia repair codes."
  },

  {
    question:
      "What is the term used for inflammation of the bone and bone marrow?",
    options: [
      "Chondromatosis",
      "Osteochondritis",
      "Costochondritis",
      "Osteomyelitis"
    ],
    correct: "D",
    explanation:
      "Osteomyelitis is a bacterial infection causing inflammation of bone and bone marrow, often resulting in reduced blood supply to the affected bone."
  },

  {
    question:
      "Fracturing the acetabulum involves what area?",
    options: [
      "Skull",
      "Shoulder",
      "Pelvis",
      "Leg"
    ],
    correct: "C",
    explanation:
      "The acetabulum is the cup-shaped socket of the hip joint located within the pelvis where the femoral head articulates."
  },

  {
    question:
      "When a patient is having a tenotomy performed on the abductor hallucis muscle, where is this muscle located?",
    options: [
      "Foot",
      "Upper Arm",
      "Upper Leg",
      "Hand"
    ],
    correct: "A",
    explanation:
      "The abductor hallucis is a muscle of the foot that moves the great toe away from the midline."
  },

  {
    question:
      "Complete this series: Frontal lobe, Parietal lobe, Temporal lobe, ________.",
    options: [
      "Medulla lobe",
      "Occipital lobe",
      "Middle lobe",
      "Inferior lobe"
    ],
    correct: "B",
    explanation:
      "The four major lobes of the brain are frontal, parietal, temporal, and occipital."
  },

  {
    question:
      "A patient with rebound tenderness at McBurney's point is associated with which structure?",
    options: [
      "Sigmoid colon",
      "Gallbladder",
      "Appendix",
      "Spleen"
    ],
    correct: "C",
    explanation:
      "McBurney's point overlies the base of the appendix. Rebound tenderness in this area is a classic sign of acute appendicitis."
  },

  {
    question:
      "A patient receives a percutaneous breast biopsy with ultrasound guidance and localization device. Another biopsy is done on the contralateral breast using stereotactic guidance with localization device. What CPT codes are reported?",
    options: [
      "19081, 19083-59",
      "19081, 19083",
      "19083, 19082",
      "19081, 19084"
    ],
    correct: "A",
    explanation:
      "Code 19081 reports the stereotactic-guided breast biopsy with localization device. Code 19083 reports the ultrasound-guided biopsy of a separate lesion. Modifier 59 indicates a distinct procedural service."
  },

  {
    question:
      "Full excision of an 8 cm malignant lesion on the neck with layered closure. What CPT code(s) are reported?",
    options: [
      "11626",
      "11626, 12004-51",
      "11626, 12044-51",
      "11626, 13132-51, 13133"
    ],
    correct: "C",
    explanation:
      "Code 11626 reports excision of a malignant lesion of the neck. Because layered closure was performed, intermediate repair code 12044 is separately reportable."
  },
{
  question:
    "Debridement of infected ulcer on right foot down to bone. What CPT code is reported?",
  options: [
    "11043",
    "11012",
    "11044",
    "11042"
  ],
  correct: "C",
  explanation:
    "The ulcer was debrided all the way down to the bone, making 11044 the correct code. Code 11012 is used for debridement associated with open fractures/dislocations, which was not documented."
},

{
  question:
    "Multiple lacerations repaired in the ED including simple and layered closures. Select the appropriate procedure codes.",
  options: [
    "99283-25, 12014, 12034-59, 12002-59, 11042-51",
    "99283-25, 12053, 12034-59, 12002-59",
    "99283-25, 12014, 12034-59, 11042-51",
    "99283-25, 12053, 12034-59"
  ],
  correct: "D",
  explanation:
    "The facial lacerations required extensive cleaning and debris removal, qualifying as intermediate repair (12053). The arm and leg layered closures totaled 10 cm and are reported with 12034. Adhesive-strip closure of the hand and foot is not separately coded."
},

{
  question:
    "Dermatologist removes lesion by shave on lip and punch biopsy on nose. What CPT codes are reported?",
  options: [
    "40490, 11104-59",
    "11310, 11104-59",
    "17000, 17003",
    "11440, 11105-59"
  ],
  correct: "B",
  explanation:
    "The lower lip lesion was removed using the shave technique (11310). The nasal lesion underwent a punch biopsy (11104). Modifier 59 indicates a separate lesion and distinct procedure."
},

{
  question:
    "Bilateral blepharoplasty of upper eyelids due to dermatochalasis not affecting function. What CPT code is reported?",
  options: [
    "15822, 15823-51",
    "15823-50",
    "15822-50",
    "15820-LT, 15820-RT"
  ],
  correct: "C",
  explanation:
    "This was a bilateral upper eyelid blepharoplasty performed for nonfunctional dermatochalasis. Modifier 50 indicates a bilateral procedure."
},

{
  question:
    "Excision of 4 cm lipoma from subcutaneous tissue of right flank. What CPT and ICD-10-CM codes are reported?",
  options: [
    "21932, D17.39",
    "21935, D17.1",
    "21931, D17.1",
    "21925, D17.9"
  ],
  correct: "C",
  explanation:
    "The lipoma was located in the subcutaneous tissue of the trunk/flank, which corresponds to D17.1. CPT 21931 is used for excision of a subcutaneous soft tissue tumor of the trunk."
},

{
  question:
    "Bilateral medial distal femur hemiepiphysiodesis performed on infant with genu valgum. What procedure code is reported?",
  options: [
    "27470-50",
    "27475-50",
    "27477-50",
    "27485-50"
  ],
  correct: "D",
  explanation:
    "Key terms are distal femur, genu valgum, and hemiepiphysiodesis, which lead to CPT 27485. Modifier 50 indicates bilateral surgery."
},

{
  question:
    "Arthroscopic lysis of adhesions for frozen left shoulder. What CPT code is reported?",
  options: [
    "23450-LT",
    "23466-LT",
    "29805-LT, 29806-51-LT",
    "29825-LT"
  ],
  correct: "D",
  explanation:
    "The procedure was performed arthroscopically and involved lysis of adhesions/capsular release for a frozen shoulder. CPT 29825 specifically describes this service."
},

{
  question:
    "Lumbar laminectomies and interbody fusion at L3-4, L4-5, L5-S1 with instrumentation and graft. Select CPT codes.",
  options: [
    "22612, 22614 × 2, 22842, 20938, 20930",
    "22533, 22534 × 2, 22842",
    "22630, 22632 × 2, 22842, 20938, 20930",
    "22554, 22632 × 2, 22842"
  ],
  correct: "C",
  explanation:
    "The surgery involved a posterior lumbar interbody fusion at three levels. Report 22630 for the first level and 22632 for each additional level. Instrumentation and graft codes are also separately reported."
},

{
  question:
    "Percutaneous pleural drainage with indwelling catheter under ultrasound guidance. CPT code?",
  options: [
    "32557",
    "32555",
    "32556",
    "32550"
  ],
  correct: "A",
  explanation:
    "The procedure involved percutaneous pleural drainage, placement of an indwelling catheter, and ultrasound guidance, all of which are included in CPT 32557."
},

{
  question:
    "VATS removal of upper and middle right lung lobes. CPT code?",
  options: [
    "32482",
    "32484",
    "32670",
    "32671"
  ],
  correct: "C",
  explanation:
    "The procedure was performed using video-assisted thoracoscopic surgery (VATS) and involved removal of two right lung lobes (upper and middle). CPT 32670 accurately describes this thoracoscopic bilobectomy."
},
{
  question:
    "Removal of tunneled pleural catheter during planned return to OR. CPT code?",
  options: [
    "32440-78",
    "32035-58",
    "32036-79",
    "32552-58"
  ],
  correct: "D",
  explanation:
    "The patient returned to the OR for a planned staged procedure (catheter removal), which supports modifier 58. CPT 32552 describes removal of an indwelling tunneled pleural catheter."
},

{
  question:
    "Selective catheterization and right lower extremity angiogram. What codes describe this procedure?",
  options: [
    "36217, 75736-26",
    "36247, 75716-26",
    "36217, 75756-26",
    "36247, 75710-26"
  ],
  correct: "D",
  explanation:
    "The catheter advanced to the superficial femoral artery, making it a third-order selective catheterization (36247). The angiogram was performed on the right lower extremity only, reported with 75710-26."
},

{
  question:
    "Repair of atrial septal defect using pericardial patch. What CPT and ICD-10-CM codes are reported?",
  options: [
    "33675, Q21.0",
    "33647, Q21.1, R06.02",
    "33645, Q21.2, R06.02",
    "33641, Q21.1"
  ],
  correct: "D",
  explanation:
    "The procedure repaired a secundum atrial septal defect (ASD) using a pericardial patch. Shortness of breath is a symptom of the condition and is not coded separately."
},

{
  question:
    "Laparoscopic appendectomy. CPT code?",
  options: [
    "44970",
    "44950",
    "44960",
    "44979"
  ],
  correct: "A",
  explanation:
    "The appendix was removed using a laparoscopic approach, which is reported with CPT 44970."
},

{
  question:
    "Open lysis of extensive adhesions requiring additional work. CPT code?",
  options: [
    "44005",
    "44180-22",
    "44005-22",
    "44180-59"
  ],
  correct: "C",
  explanation:
    "The procedure was performed open, not laparoscopically, and documentation states the adhesions were extensive and required significantly increased work, supporting modifier 22."
},

{
  question:
    "EGD with catheter placement, incomplete exam due to obstruction. CPT code?",
  options: [
    "43246-52",
    "43241-52",
    "43235",
    "43191"
  ],
  correct: "B",
  explanation:
    "An EGD with catheter placement was performed, but the duodenum could not be examined because of obstruction. Modifier 52 indicates a reduced service."
},

{
  question:
    "Return to OR for repeat small bowel resection due to complication from prior surgery. CPT code?",
  options: [
    "44120-78",
    "44126-79",
    "44120-76",
    "44202-58"
  ],
  correct: "A",
  explanation:
    "The patient returned unexpectedly to the OR due to a postoperative complication, making modifier 78 appropriate. CPT 44120 describes the small bowel resection."
},

{
  question:
    "Laparoscopic donor nephrectomy. CPT code?",
  options: [
    "50543",
    "50547",
    "50300",
    "50320"
  ],
  correct: "B",
  explanation:
    "This was a laparoscopic donor nephrectomy with removal of the kidney for transplantation and cold preservation."
},

{
  question:
    "Cystoscopy with placement of sling for urinary incontinence. CPT code?",
  options: [
    "57288",
    "57287",
    "57288, 52000-51",
    "51992, 52000-51"
  ],
  correct: "A",
  explanation:
    "The sling procedure for stress urinary incontinence is reported with 57288. The cystoscopy is considered integral to the procedure and is not separately reported."
},

{
  question:
    "Repair of circumcision due to redundant foreskin. CPT code?",
  options: [
    "54150",
    "54160",
    "54163",
    "54164"
  ],
  correct: "C",
  explanation:
    "This was a revision/repair of a previous circumcision due to redundant foreskin and scarring, not an initial circumcision."
},

{
  question:
    "Surgical excision of labial adhesions in a child. CPT code?",
  options: [
    "58660",
    "58740",
    "57061",
    "56441"
  ],
  correct: "D",
  explanation:
    "The procedure specifically involved excision of labial adhesions, which is reported with CPT 56441."
},

{
  question:
    "Bilateral ureteral stent placement with retrograde pyelogram interpretation. Codes?",
  options: [
    "52332, 74425",
    "52332-50, 74420-26",
    "52005, 74420",
    "52005-50, 74425-26"
  ],
  correct: "B",
  explanation:
    "Stents were placed in both ureters, requiring modifier 50. The physician also interpreted the retrograde pyelogram, reported with 74420-26."
},

{
  question:
    "Plastic repair for chordee due to congenital hypospadias. CPT code?",
  options: [
    "54304",
    "54340",
    "54400",
    "54440"
  ],
  correct: "A",
  explanation:
    "The surgery corrected congenital chordee associated with hypospadias, which is described by CPT 54304."
},

{
  question:
    "Pregnancy termination at 14 weeks by dilation and evacuation (D&E). CPT code?",
  options: [
    "59840",
    "59841",
    "59812",
    "59851"
  ],
  correct: "B",
  explanation:
    "The pregnancy was terminated by dilation and evacuation (D&E) after the first trimester (14 weeks), making 59841 the correct code."
},

{
  question:
    "Transrectal ultrasound guidance with placement of radioactive seeds for prostate cancer. Codes?",
  options: [
    "55920, 76965-26",
    "55876, 76942-26",
    "55860, 76873-26",
    "55875, 76965-26"
  ],
  correct: "D",
  explanation:
    "The procedure involved percutaneous placement of radioactive prostate seeds (brachytherapy) with transrectal ultrasound guidance."
},

{
  question:
    "Removal of intrathecal pain pump and catheter due to infection. Codes?",
  options: [
    "62365, 62350-51, T85.898A, Z46.2",
    "62360, 62355-51, T85.738A",
    "62365, 62355-51, T85.738A",
    "36590, I97.42, T85.898A"
  ],
  correct: "C",
  explanation:
    "Both the intrathecal catheter and implanted pain pump were removed because of infection related to the device."
},
{
  question:
    "Placement of ventriculoperitoneal shunt. CPT code?",
  options: [
    "62220",
    "62223",
    "62190",
    "62192"
  ],
  correct: "B",
  explanation:
    "A ventriculoperitoneal (VP) shunt diverts cerebrospinal fluid from the brain ventricles to the peritoneal cavity. CPT 62223 describes VP shunt creation, revision, or replacement."
},

{
  question:
    "Decompression of median nerve at wrist (carpal tunnel release). CPT code?",
  options: [
    "64704",
    "64713",
    "64721",
    "64719"
  ],
  correct: "C",
  explanation:
    "Carpal tunnel release involves decompression of the median nerve at the wrist, which is specifically reported with CPT 64721."
},

{
  question:
    "Incision and curettage of chalazion on upper and lower right eyelid. CPT code?",
  options: [
    "67801",
    "67805",
    "67800",
    "67808"
  ],
  correct: "B",
  explanation:
    "CPT 67805 is reported when multiple chalazia are incised and curetted during the same session."
},

{
  question:
    "Cervical laminectomy at C3-C6 with decompression. Codes?",
  options: [
    "63045-50, 63048-50",
    "63020-50, 63035-50, 63035-50",
    "63015-50",
    "63045, 63048 × 2"
  ],
  correct: "D",
  explanation:
    "CPT 63045 is reported for the first cervical vertebral segment decompressed and 63048 for each additional segment."
},

{
  question:
    "Complex extracapsular cataract removal with iris expansion device and IOL insertion. CPT code?",
  options: [
    "66985",
    "66984",
    "66982",
    "66983"
  ],
  correct: "C",
  explanation:
    "Use of an iris expansion device makes this a complex cataract extraction, reported with CPT 66982."
},

{
  question:
    "Bilateral tympanostomy with ventilating tube placement for chronic otitis media. Codes?",
  options: [
    "69436-50, H65.33",
    "69436-50, H66.43",
    "69433-50, H65.113",
    "69421-50, H65.33"
  ],
  correct: "A",
  explanation:
    "CPT 69436 describes tympanostomy with insertion of ventilating tubes under general anesthesia. Modifier 50 indicates bilateral placement."
},

{
  question:
    "Pessary cleaning performed by nurse during established patient visit. Codes?",
  options: [
    "99202, Z46.89",
    "99211, Z46.89",
    "99202, Z46.9",
    "99212, Z46.9"
  ],
  correct: "B",
  explanation:
    "A nurse-performed pessary cleaning without physician involvement is appropriately reported with 99211. Diagnosis code Z46.89 indicates fitting or adjustment of other devices."
},

{
  question:
    "Neonatologist admits infant to NICU for cyanosis and performs echocardiogram. Codes?",
  options: [
    "99468-25, 93303-26",
    "99471-25, 31500, 94002, 93303-26",
    "99460-25, 31500, 94002, 93303-26",
    "99291-25, 93303-26"
  ],
  correct: "A",
  explanation:
    "Initial neonatal intensive care admission is reported with 99468. The physician's interpretation of the echocardiogram is reported separately with 93303-26."
},

{
  question:
    "Primary care physician spends 55 minutes counseling patient regarding abnormal Pap smear results and possible cervical cancer. Codes?",
  options: [
    "99215, 99417",
    "99213, 99358",
    "99214, 99354",
    "99213"
  ],
  correct: "A",
  explanation:
    "A total physician time of 55 minutes exceeds the threshold for 99215, and additional prolonged service time is reported using 99417."
},

{
  question:
    "Physician performs moderate complexity home visit for worsening CHF. E/M code?",
  options: [
    "99342",
    "99344",
    "99349",
    "99350"
  ],
  correct: "B",
  explanation:
    "A moderate-complexity home visit for a new patient is reported with 99344 based on medical decision making."
},

{
  question:
    "Hospital day 3 visit with comprehensive exam and high complexity decision making. E/M code?",
  options: [
    "99223",
    "99233",
    "99232",
    "99236"
  ],
  correct: "B",
  explanation:
    "This is a subsequent hospital visit with high-complexity medical decision making, which corresponds to 99233."
},

{
  question:
    "Emergency department visit with moderate complexity MDM. E/M code?",
  options: [
    "99291",
    "99475",
    "99284",
    "99285"
  ],
  correct: "C",
  explanation:
    "An ED visit with moderate medical decision making is reported using CPT 99284."
},

{
  question:
    "Anesthesia for laparoscopic radical nephrectomy for renal pelvis cancer with controlled diabetes. Codes?",
  options: [
    "00860-P1, C64.9, E11.9",
    "00840-P3, C65.9, E11.9",
    "00862-P2, C65.9, E11.9",
    "00868-P2, C79.02, E11.9"
  ],
  correct: "C",
  explanation:
    "The anesthesia was for a laparoscopic radical nephrectomy. Renal pelvis cancer is coded C65.9, controlled diabetes is E11.9, and controlled systemic disease supports physical status modifier P2."
},

{
  question:
    "Anesthesia for removal of laryngeal mass in a 10-month-old child. Codes?",
  options: [
    "00320",
    "00326",
    "00320, 99100",
    "00326, 99100"
  ],
  correct: "B",
  explanation:
    "CPT 00326 describes anesthesia for procedures involving the larynx. The base anesthesia code appropriately describes the service."
},
{
  question: "A 6-month-old patient is administered general anesthesia to repair a cleft palate. What anesthesia code(s) is (are) reported for this procedure?",
  options: ["00170, 99100", "00172", "00172, 99100", "00176"],
  correct: "B",
  explanation: "CPT 00172 describes anesthesia for cleft palate repair. Although the patient is under 1 year old, qualifying circumstance code 99100 is not separately reported in this scenario."
},
{
  question: "A 50-year-old female had a left subcutaneous mastectomy for cancer. She now returns for reconstruction with a single TRAM flap. Right mastopexy is done for asymmetry. Select the anesthesia code for this procedure.",
  options: ["00404", "00402", "00406", "00400"],
  correct: "A",
  explanation: "A TRAM flap breast reconstruction following mastectomy is reported with anesthesia code 00404."
},
{
  question: "A patient is having knee replacement surgery. The anesthesiologist provides general anesthesia and inserts a continuous lumbar epidural infusion for postoperative pain management and manages it for two postoperative days.",
  options: [
    "01400-AA, 62326, 01996 × 2",
    "01402-AA, 62327, 01966 × 2",
    "01402-AA, 62326, 01996 × 2",
    "01404-AA, 62327"
  ],
  correct: "C",
  explanation: "01402-AA reports anesthesia for total knee arthroplasty. 62326 reports postoperative epidural catheter management and 01996 is reported for each subsequent day."
},
{
  question: "A 56-year-old female is having a bilateral screening mammogram with computer-aided detection due to family history of breast cancer. What radiological service is reported?",
  options: ["77065 × 2", "77065, 77066", "77067", "77066"],
  correct: "C",
  explanation: "77067 reports a bilateral screening mammogram including CAD."
},
{
  question: "A physician performs chest X-rays (AP and lateral views) in the office and interprets them. What CPT code is reported?",
  options: ["71046-26", "71047-26", "71046", "71045-26-TC"],
  correct: "C",
  explanation: "Two-view chest radiography is reported with 71046. Since the physician performed and interpreted the study, no modifier is needed."
},
{
  question: "X-rays of the left wrist (oblique and lateral views) reveal a displaced distal radius fracture. What radiology and ICD-10-CM codes are reported?",
  options: [
    "73100-26, S52.502B, W18.31XA, Y92.039",
    "73110-26, S52.602A, W18.31XA, Y92.039",
    "73115-26, S52.502A, W18.31XA, Y92.039",
    "73100-26, S52.602B, W18.31XA, Y92.039"
  ],
  correct: "C",
  explanation: "Multiple wrist views with interpretation are reported with 73115-26. The diagnosis is S52.502A."
},
{
  question: "During open intracranial surgery to remove a brain tumor, an intraoperative MRI of the brain including brain stem and skull base is performed without contrast. What CPT code is reported?",
  options: ["70551", "70553", "70557", "70554"],
  correct: "C",
  explanation: "70557 specifically describes an intraoperative MRI of the brain, brain stem and skull base without contrast."
},
{
  question: "A patient undergoes a nuclear stress test with rest and stress study using SPECT imaging and radiopharmaceutical administration. What CPT code is reported?",
  options: ["78452", "78451", "78454", "78473"],
  correct: "A",
  explanation: "78452 reports myocardial perfusion imaging with both rest and stress studies using SPECT."
},
{
  question: "Pathology examination of two specimens: arterial plaque and cutaneous ulceration. What surgical pathology codes are reported?",
  options: [
    "88304-26, 88302-26",
    "88305-26, 88304-26",
    "88307-26, 88305-26",
    "88309-26, 88307-26"
  ],
  correct: "B",
  explanation: "Cutaneous ulceration is reported with 88305 and arterial plaque with 88304. Modifier 26 indicates professional component."
},
{
  question: "During craniectomy a frozen section tumor specimen is examined with gross and microscopic analysis. What CPT code(s) are reported?",
  options: [
    "80503",
    "88331-26, 88307-26",
    "80505",
    "88331-26, 88332-26, 88304-26"
  ],
  correct: "B",
  explanation: "88331 reports frozen section examination. 88307 reports the subsequent surgical pathology examination."
},
{
  question: "Per CPT guidelines for organ or disease-oriented panels, how are a basic metabolic panel (80047) and comprehensive metabolic panel (80053) reported?",
  options: [
    "80053, 80047",
    "80053",
    "80047, 82040, 82247, 82310, 84075, 84155, 84460, 84450",
    "80053, 82330"
  ],
  correct: "B",
  explanation: "The comprehensive metabolic panel includes all tests contained in the basic metabolic panel, so only 80053 is reported."
},
{
  question: "ER drug screening using immunoassay for antidepressants, phenothiazines, and benzodiazepines with confirmation of antidepressant. What CPT codes are reported?",
  options: [
    "80307, 80338",
    "80305, 80338",
    "80306 × 3, 80332",
    "80307 × 3, 80333"
  ],
  correct: "A",
  explanation: "80307 reports presumptive drug testing and 80338 reports definitive testing for antidepressants."
},
{
  question: "Therapeutic drug monitoring of Topiramate for seizure control. What CPT code is reported?",
  options: ["80305", "80375", "80201", "80306, 80375"],
  correct: "C",
  explanation: "80201 is the therapeutic drug assay code for Topiramate."
},
{
  question: "Oral glucose tolerance test with five blood specimens over three hours. What CPT codes are reported?",
  options: [
    "82947 × 5",
    "82946",
    "80422",
    "82951, 82952 × 2"
  ],
  correct: "D",
  explanation: "82951 reports the glucose tolerance test and 82952 reports each additional specimen."
},
{
  question: "Blood gas testing for oxygen saturation only, performed twice. What codes are reported?",
  options: [
    "82805, 82805-51",
    "82810, 82810-91",
    "82803, 82803-51",
    "82805, 82805-90"
  ],
  correct: "B",
  explanation: "82810 reports oxygen saturation measurement only. Modifier 91 indicates a repeat laboratory test."
},
{
  question: "A child receives polio vaccine IM, live influenza intranasally, and varicella subcutaneously. What CPT codes are reported?",
  options: [
    "90713, 90658, 90716, 90460, 90461 × 2",
    "90713, 90660, 90716, 90460, 90461 × 1",
    "90713, 90660, 90716, 90471, 90472, 90474",
    "90713, 90658, 90716, 90471, 90472, 90473"
  ],
  correct: "B",
  explanation: "Counseling was provided, so pediatric administration codes 90460/90461 apply."
},
{
  question: "Evaluation of peritoneal dialysis dwell time and dialysate composition after catheter placement. What code is reported?",
  options: ["90935", "90937", "90947", "90945"],
  correct: "D",
  explanation: "90945 reports dialysis procedure other than hemodialysis including peritoneal dialysis assessment and management."
},
{
  question: "Established patient with dry eye syndrome undergoes comprehensive ophthalmologic exam and corneal measurement for soft contact lens placement. What codes are reported?",
  options: [
    "92014-25, 92071-50",
    "99214-25, 92072-50",
    "92014-25, 92325-50",
    "92014-25, 92310-50"
  ],
  correct: "D",
  explanation: "92014 reports the ophthalmological exam and 92310 reports contact lens fitting."
},
{
  question: "Laryngeal function study with only acoustic testing completed. What CPT code is reported?",
  options: ["92520", "92700", "92520-52", "92614-52"],
  correct: "C",
  explanation: "Only part of the laryngeal function study was completed, making modifier 52 appropriate."
},
{
  question: "New patient cardiovascular stress test in cardiologist’s office with supervision and interpretation. What codes are reported?",
  options: [
    "93015-26, 99204-25",
    "93016, 93018, 99204-25",
    "93015, 99204-25",
    "93018-26, 99204-25"
  ],
  correct: "C",
  explanation: "93015 includes the complete cardiovascular stress test. The E/M service is reported separately with 99204-25."
},{
  question:
    "A cancer patient receives a hydration infusion lasting 1 hour 30 minutes prior to chemotherapy. What code(s) are reported?",
  options: [
    "96360",
    "96360, 96361",
    "96365, 96366",
    "96422"
  ],
  correct: "B",
  explanation:
    "96360 reports the initial hydration infusion (31 minutes to 1 hour), and 96361 reports each additional hour. A 90-minute infusion requires both codes."
},

{
  question:
    "Therapist performs comprehensive reevaluation for patient with multiple sclerosis lasting 30 minutes. What CPT and ICD-10-CM codes are reported?",
  options: [
    "97168, Z51.89, G35",
    "97164, Z56.89, G35",
    "97167, G35",
    "97163, Z56.9, G35"
  ],
  correct: "C",
  explanation:
    "97167 reports a high-complexity occupational therapy evaluation. Multiple sclerosis is coded G35."
},

{
  question:
    "Patient with previous cervical adenocarcinoma now has atypical glandular cells on Pap smear. What ICD-10-CM codes are reported?",
  options: [
    "R87.619, C53.9",
    "C55",
    "R87.619, Z85.41",
    "Z12.4, Z85.41"
  ],
  correct: "C",
  explanation:
    "The current finding is atypical glandular cells (R87.619). The cervical cancer is a personal history condition, reported with Z85.41."
},

{
  question:
    "Patient diagnosed with double pneumonia after chest X-ray. What ICD-10-CM code is reported?",
  options: [
    "J18.9, R05.9, R06.2",
    "R05.9, R06.2, J18.9",
    "J18.9",
    "J15.9"
  ],
  correct: "C",
  explanation:
    "When a definitive diagnosis of pneumonia is established, associated symptoms such as cough and wheezing are not coded separately."
},

{
  question:
    "Bradycardia due to properly administered Demerol. What codes are reported?",
  options: [
    "T40.2X1A, R00.1",
    "T40.2X3A, R00.1",
    "R00.1, T40.2X5A",
    "R00.1, T40.2X2A"
  ],
  correct: "C",
  explanation:
    "A properly administered medication causing an adverse effect is coded with the manifestation first (R00.1 Bradycardia) followed by the adverse-effect code (T40.2X5A)."
},

{
  question:
    "Second-degree burns on face and third-degree burns on both hands totaling 10% TBSA. What ICD-10-CM codes are reported?",
  options: [
    "T20.20XA, T23.301A, T23.302A, T31.10, X10.2XXA, Y93.G3",
    "T23.301A, T23.302A, T20.20XA, T31.11, X10.2XXA, Y93.G3",
    "T23.301A, T23.302A, T20.20XA, T31.10, X10.2XXA, Y93.G3",
    "T23.601A, T23.602A, T20.60XA, T31.10, X10.2XXA, Y93.G3"
  ],
  correct: "C",
  explanation:
    "Burn coding is sequenced by highest degree first. The third-degree burns of both hands are reported before the second-degree facial burn. T31.10 reports 10% TBSA with less than 10% third-degree involvement."
},

{
  question:
    "Cirrhosis with hemorrhagic esophageal varices. What ICD-10-CM codes are reported?",
  options: [
    "I85.01, K74.69",
    "I85.11, K74.60",
    "K74.60, I85.11",
    "I85.00, K74.69"
  ],
  correct: "A",
  explanation:
    "I85.01 reports esophageal varices with bleeding. The underlying cirrhosis is separately reported with K74.69."
},

{
  question:
    "Patient with healed patella fracture now has staggering gait. What ICD-10-CM codes are reported?",
  options: [
    "S82.002A, R26.81",
    "R26.0, S82.002A",
    "S82.092S, R26.0",
    "R26.0, S82.002S"
  ],
  correct: "D",
  explanation:
    "The current condition is a staggering gait (R26.0) resulting from a prior healed fracture. The fracture is reported as a sequela (S82.002S)."
},

{
  question:
    "Breast tissue expander insertion during mastectomy reconstruction. What HCPCS code is reported?",
  options: [
    "C1789",
    "L8600",
    "Q2026",
    "A4565"
  ],
  correct: "A",
  explanation:
    "C1789 identifies a prosthetic breast implant or tissue expander used during breast reconstruction."
},{
  question: "External insulin infusion pump for diabetes. What HCPCS code is reported?",
  options: [
    "A4224",
    "E0784",
    "A4230",
    "E0781"
  ],
  correct: "B",
  explanation:
    "E0784 reports an external ambulatory insulin infusion pump used for continuous insulin delivery in diabetic patients."
},

{
  question: "Which statement is TRUE when reporting pregnancy codes (O00–O9A)?",
  options: [
    "These codes can be used on maternal and baby records",
    "These codes have sequencing priority over codes from other chapters",
    "Code Z33.1 should always be reported with these codes",
    "The seventh character indicates complications during pregnancy only"
  ],
  correct: "B",
  explanation:
    "ICD-10-CM Chapter 15 pregnancy codes have sequencing priority over codes from other chapters when applicable."
},

{
  question: "Which statement is TRUE about reporting diabetes mellitus codes?",
  options: [
    "If type is not documented the default is E11 Type 2 diabetes",
    "When a patient uses insulin Type 1 is always reported",
    "Patient age determines Type 1 diabetes",
    "E08–E13 codes cannot be primary codes"
  ],
  correct: "A",
  explanation:
    "When diabetes type is not documented, the default assignment is Type 2 diabetes mellitus (E11.-)."
},

{
  question: "Which statement is TRUE for external cause codes (V00–Y99)?",
  options: [
    "All external cause codes require a seventh character",
    "Only one external cause code may be reported",
    "Report Y92.9 if place of occurrence not stated",
    "External cause codes should never be primary codes"
  ],
  correct: "D",
  explanation:
    "External cause codes provide supplemental information and are never reported as the principal diagnosis."
},

{
  question: "What is NOT included in the CPT surgical package?",
  options: [
    "Typical postoperative follow-up care",
    "One related E/M service on the same date of the procedure",
    "Returning to the OR next day for complication from initial procedure",
    "Evaluating the patient in the post-anesthesia recovery area"
  ],
  correct: "C",
  explanation:
    "An unplanned return to the operating room during the postoperative period is separately reportable and not part of the global surgical package."
},

{
  question: "Which statement about Z codes is TRUE?",
  options: [
    "Z codes are never primary codes",
    "Z codes are only reported with injury codes",
    "Z codes may be used as primary or secondary codes",
    "Z codes are always secondary codes"
  ],
  correct: "C",
  explanation:
    "Depending on the circumstance of care, Z codes may be reported as either primary or secondary diagnoses."
},

{
  question: "In which situation is the diabetes code never sequenced first?",
  options: [
    "Underdose of insulin due to pump malfunction",
    "Secondary diabetes treatment",
    "Type 2 diabetes with insulin use",
    "Diabetes with associated condition"
  ],
  correct: "A",
  explanation:
    "For insulin pump malfunction causing underdosing, the device complication code is sequenced first."
},

{
  question: "What is PHI?",
  options: [
    "Physician-health care interchange",
    "Private health insurance",
    "Protected health information",
    "Provider identified incident-to"
  ],
  correct: "C",
  explanation:
    "Under HIPAA, PHI refers to individually identifiable health information in any form or medium."
},

{
  question: "Which health plan does NOT fall under HIPAA?",
  options: [
    "Medicaid",
    "Medicare",
    "Workers’ compensation",
    "Private plans"
  ],
  correct: "C",
  explanation:
    "Workers' compensation programs are specifically excluded from HIPAA's definition of a health plan."
},

{
  question: "Which of the following is an example of electronic data?",
  options: [
    "A digital X-ray",
    "An explanation of benefits",
    "An advance beneficiary notice",
    "A written prescription"
  ],
  correct: "A",
  explanation:
    "A digital X-ray is electronic data because the image is stored electronically."
},

{
  question: "Guidelines from which code set are included as part of HIPAA requirements?",
  options: [
    "CPT Category III",
    "ICD-10-CM",
    "HCPCS Level II",
    "ADA Dental Codes"
  ],
  correct: "B",
  explanation:
    "HIPAA requires adherence to the ICD-10-CM Official Coding Guidelines."
},

{
  question: "Open reduction and internal fixation of right scaphoid fracture. What CPT code is reported?",
  options: [
    "25628-RT",
    "25624-RT",
    "25645-RT",
    "25651-RT"
  ],
  correct: "A",
  explanation:
    "Open reduction with internal fixation of a scaphoid fracture is reported with CPT 25628-RT."
},

{
  question: "Re-do left carotid endarterectomy with patch graft for recurrent stenosis. What CPT codes are reported?",
  options: [
    "35301",
    "35301, 35390",
    "35302",
    "35311, 35390"
  ],
  correct: "B",
  explanation:
    "Report 35301 for carotid endarterectomy and add-on code 35390 for reoperation due to recurrent stenosis."
},

{
  question: "Laparoscopic cholecystectomy for chronic cholecystitis. What CPT and ICD-10-CM codes are reported?",
  options: [
    "47564, K81.2",
    "47562, K81.1",
    "47610, K81.2",
    "47600, K81.1"
  ],
  correct: "B",
  explanation:
    "The procedure was laparoscopic cholecystectomy (47562) and the diagnosis was chronic cholecystitis (K81.1)."
},

{
  question: "Needle localization with excisional biopsy of breast papilloma. What CPT and ICD-10-CM codes are reported?",
  options: [
    "19100, N63.20",
    "19285, C50.912",
    "19120, R92.8",
    "19125, D24.2"
  ],
  correct: "D",
  explanation:
    "Needle-localized excisional biopsy of a benign breast papilloma is reported with 19125 and D24.2."
},

{
  question: "Reduction of distal radius fracture with external fixation system. What CPT coding is reported?",
  options: [
    "25600-LT, 20692-51",
    "25605-LT, 20690-51",
    "25606-LT",
    "25607-LT"
  ],
  correct: "B",
  explanation:
    "Closed reduction with manipulation and uniplane external fixation is reported with 25605-LT and 20690-51."
},

{
  question: "Placement of Infuse-A-Port via subclavian vein with fluoroscopic guidance. What CPT codes are reported?",
  options: [
    "36556, 77001-26",
    "36558",
    "36561, 77001-26",
    "36571"
  ],
  correct: "C",
  explanation:
    "A tunneled central venous access device with subcutaneous port and fluoroscopic guidance is reported with 36561 and 77001-26."
},

{
  question: "Insertion of DDD pacemaker with atrial and ventricular leads. What CPT code is reported?",
  options: [
    "33208",
    "33212",
    "33226",
    "33235, 71090-26"
  ],
  correct: "A",
  explanation:
    "Insertion of a dual-chamber pacemaker generator with atrial and ventricular leads is reported with CPT 33208."
},

{
  question: "Endometrial ablation and laparoscopic bilateral salpingo-oophorectomy. What CPT codes are reported?",
  options: [
    "58660, 58353-51",
    "58661, 58563-51",
    "58661, 58558-51",
    "58662, 58563-51"
  ],
  correct: "B",
  explanation:
    "Report 58661 for laparoscopic bilateral salpingo-oophorectomy and 58563-51 for hysteroscopic endometrial ablation."
},

{
  question: "Hartmann procedure with sigmoid resection and colostomy for perforated diverticulitis. What CPT code is reported?",
  options: [
    "44140",
    "44143",
    "44160",
    "44208"
  ],
  correct: "B",
  explanation:
    "A Hartmann procedure includes sigmoid colectomy with end colostomy and closure of the distal bowel segment, reported with CPT 44143."
},

{
  question:
    "Non-emergency ambulance transportation to dialysis center. What HCPCS code is reported?",
  options: [
    "A0428",
    "A0425",
    "A0426",
    "A0430"
  ],
  correct: "A",
  explanation:
    "A0428 reports non-emergency basic life support (BLS) ambulance transportation, such as transport to a dialysis facility. A0425 would be reported separately for mileage if applicable."
},
  
];

export default function Exam1() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const letters = ["A", "B", "C", "D"];

  const handleNext = () => {
    if (!selectedAnswer) return;

    const updatedAnswers = [...answers, selectedAnswer];

    if (currentQuestion < questions.length - 1) {
      setAnswers(updatedAnswers);
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
    } else {
      setAnswers(updatedAnswers);
      setShowResults(true);
    }
  };

  const score = answers.filter(
    (answer, index) =>
      answer === questions[index].correct
  ).length;

  if (showResults) {
    const percentage = Math.round(
      (score / questions.length) * 100
    );

    return (
      <main
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "40px",
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            background:
              "linear-gradient(135deg,#2563eb,#7c3aed)",
            color: "white",
            padding: "40px",
            borderRadius: "20px",
            marginBottom: "30px",
          }}
        >
          <h1>🎓 Exam Complete</h1>

          <h2>
            Score: {score} / {questions.length}
          </h2>

          <h2>{percentage}%</h2>

          <h2>
            {percentage >= 70
              ? "✅ PASS"
              : "❌ FAIL"}
          </h2>
        </div>

        {questions.map((q, index) => (
          <div
            key={index}
            style={{
              background: "white",
              padding: "25px",
              marginBottom: "20px",
              borderRadius: "16px",
              boxShadow:
                "0 4px 12px rgba(0,0,0,0.08)",
            }}
          >
            <h3>
              Question {index + 1}
            </h3>

            <p>{q.question}</p>

            <p>
              <strong>Your Answer:</strong>{" "}
              {answers[index]}
            </p>

            <p>
              <strong>Correct Answer:</strong>{" "}
              {q.correct}
            </p>

            <p>
              {answers[index] === q.correct
                ? "✅ Correct"
                : "❌ Incorrect"}
            </p>

            <div
              style={{
                marginTop: "15px",
                background: "#f8fafc",
                padding: "15px",
                borderRadius: "10px",
              }}
            >
              <strong>📖 Why:</strong>
              <p>{q.explanation}</p>
            </div>
          </div>
        ))}
      </main>
    );
  }

  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          background:
            "linear-gradient(135deg,#2563eb,#7c3aed)",
          color: "white",
          padding: "40px",
          borderRadius: "20px",
          marginBottom: "30px",
        }}
      >
        <h1>🎓 CPC Final Exam 1</h1>

        <p>
          Question {currentQuestion + 1} of{" "}
          {questions.length}
        </p>
      </div>

      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "16px",
          boxShadow:
            "0 4px 12px rgba(0,0,0,0.08)",
        }}
      >
        <h2>
          Question {currentQuestion + 1}
        </h2>

        <p>
          {questions[currentQuestion].question}
        </p>

        <div style={{ marginTop: "20px" }}>
          {questions[currentQuestion].options.map(
            (option, index) => (
              <label
                key={index}
                style={{
                  display: "block",
                  marginBottom: "12px",
                  cursor: "pointer",
                }}
              >
                <input
                  type="radio"
                  name="answer"
                  value={letters[index]}
                  checked={
                    selectedAnswer ===
                    letters[index]
                  }
                  onChange={() =>
                    setSelectedAnswer(
                      letters[index]
                    )
                  }
                />{" "}
                <strong>
                  {letters[index]}.
                </strong>{" "}
                {option}
              </label>
            )
          )}
        </div>

        <button
          onClick={handleNext}
          disabled={!selectedAnswer}
          style={{
            marginTop: "20px",
            padding: "12px 24px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          {currentQuestion ===
          questions.length - 1
            ? "Submit Exam"
            : "Next Question →"}
        </button>
      </div>
    </main>
  );
}

