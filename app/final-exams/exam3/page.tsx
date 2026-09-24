"use client";

import React, { useState, useEffect } from "react";

type Q = {
  question: string;
  options: string[];
  correct: string;
  explanation: string;
};

const questions: Q[] = [
  {
    question: "A pediatrician examines an adolescent that has a thoracic curvature of the spine which is called:",
    options: ["Sclerosis", "Kyphosis", "Osteochondrosis", "Neurofibromatosis"],
    correct: "B",
    explanation:
      "Kyphosis is an exaggerated thoracic (upper back) curvature of the spine, sometimes called a hunchback. ICD-10-CM Alphabetic Index: Curvature/spine — see Dorsopathy, deforming; Kyphosis/thoracic region indexes to M40.204, under category M40 (Deforming dorsopathies).",
  },
  {
    question: "The root metr/o means:",
    options: ["Breast", "Menstruation", "Mammary gland", "Uterus"],
    correct: "D",
    explanation: "The root metr/o (or metr/i) means uterus. In the Alphabetic Index, Metrorrhexis refers to Rupture, uterus.",
  },
  {
    question: "What is ascites?",
    options: ["Abdominal malignancy", "Enlarged liver and spleen", "Fluid in the abdomen", "Abdominal tenderness"],
    correct: "C",
    explanation:
      "In ascites, fluid collects in the peritoneal cavity, typically from cirrhosis, malignancy, or heart failure. ICD-10-CM: Ascites (abdominal) refers to R18.8, where the includes note under R18 states \"Fluid in peritoneal cavity.\"",
  },
  {
    question: "Which one of the following is a disorder in causing paralysis of the facial nerve?",
    options: ["Brachial plexus lesions", "Bell's palsy", "Tarsal tunnel syndrome", "Exotropia"],
    correct: "B",
    explanation:
      "The facial nerve is the seventh cranial nerve; exotropia relates to the eye muscles (fourth cranial nerve), tarsal tunnel syndrome is nerve impingement in the foot, and brachial plexus lesions involve nerves between the neck and armpit. Bell's palsy is a common disorder of the facial nerve causing an inability to control facial muscles of expression.",
  },
  {
    question: "Which term is one who has an overload of sodium?",
    options: ["Hypercalcemia", "Hyperpotassemia", "Hypernatremia", "Hyperkalemia"],
    correct: "C",
    explanation: "Hypernatremia is too much sodium in the system, indexed to code E87.0.",
  },
  {
    question: "The term paracentesis found in CPT code 49082 means:",
    options: [
      "Removal of tissue samples from the abdominal cavity by an open approach",
      "Removal of a cyst located in the abdominal cavity",
      "Biopsy of an abdominal mass",
      "A procedure performed to drain fluid that has accumulated in the abdominal cavity",
    ],
    correct: "D",
    explanation:
      "Para- means near/beside/outside and -centesis means puncture (insertion of a needle to withdraw fluids). Code 49082 describes inserting a needle into the abdominal (peritoneal) cavity to drain accumulated fluid, or to obtain a fluid sample for testing.",
  },
  {
    question: "While playing softball a 12-year-old boy sustains a blowout fracture. What is the anatomical location of a blowout fracture?",
    options: ["Orbit", "Clavicle", "Femur", "Patella"],
    correct: "A",
    explanation:
      "A blowout fracture is a fracture of the walls or floor of the orbit, the eye socket of the skull. ICD-10-CM Alphabetic Index: Fracture, traumatic/orbit/floor (blowout).",
  },
  {
    question:
      "According to the CPT Appendix L, when performing a selective vascular catheterization, which vessels would you pass through to place the catheter into the right middle cerebral artery?",
    options: [
      "Left common carotid, left internal carotid",
      "Innominate, the right common, and internal carotid",
      "Innominate, right common carotid, right external carotid",
      "Innominate, right subclavian & axillary",
    ],
    correct: "B",
    explanation:
      "Using Appendix L as a guide for vascular families: begin in the innominate artery (first order), then the right common carotid (second order), then the right internal carotid (third order), ending at the right middle cerebral artery.",
  },
  {
    question: "CKD is a disease of which system?",
    options: ["Genitourinary", "Digestive", "Circulatory", "Musculoskeletal"],
    correct: "A",
    explanation: "CKD (Chronic Kidney Disease) falls under category N18 in the ICD-10-CM Tabular List, part of the Genitourinary System chapter.",
  },
  {
    question: "A person who has nephritis has inflammation in what location?",
    options: ["Gallbladder", "Kidney", "Nerve", "Uterus"],
    correct: "B",
    explanation: "Nephr/o refers to kidney and -itis means inflammation — nephritis is inflammation of the kidney.",
  },
  {
    question: "Complete this series: Pulmonary, Aortic, Mitral, and ________ are valves of the heart.",
    options: ["Tricuspid", "Superior Vena Cava", "Carotid", "Atrium"],
    correct: "A",
    explanation:
      "Tricuspid is the first heart valve blood encounters entering the heart. The Superior Vena Cava is a vein, carotid is a neck artery, and atrium is a receiving chamber — none are valves.",
  },
  {
    question:
      "The left breast was prepped and draped in a sterile fashion. An incision from the 3 around to the 9 o'clock position on the areolar border on its inferior aspect was made in the skin and extended to the subcutaneous tissue. The breast mass was excised by sharp dissection. The mass was found to be approximately 1.5 - 2 cm in maximum dimension. Hemostasis was made adequate using electrocautery and the Argon beam coagulator. After this was accomplished, the skin margins were reapproximated with running inverted 3-0 Vicryl subcuticular suture. Select the procedure and diagnosis codes.",
    options: ["19120, N63.20", "19101, N64.51", "19301, D49.3", "19125, N60.82"],
    correct: "A",
    explanation:
      "The patient is having the procedure for a breast mass — ICD-10-CM Alphabetic Index: Mass/breast refers to N63.0; under N63, left breast unspecified quadrant is N63.20. CPT's Breast Excision guidelines note that partial mastectomy procedures (lumpectomy, tylectomy, quadrantectomy, segmentectomy) specifically involve removal of adequate surgical margins — there's no documentation of margin removal here, so the simple excision code 19120 applies.",
  },
  {
    question:
      "A 50-year-old female saw her dermatologist for removal of a basal cell carcinoma on her right arm. An 8.0 cm lesion that included the margins was drawn out and a 15-blade scalpel was used for full excision of the lesion. A layered closure was performed after the removal. The specimen was sent for permanent histopathologic examination. What CPT coding is reported?",
    options: ["11606, 12034-51", "11606", "11606, 13121-51, 13122", "11606, 12004-51"],
    correct: "A",
    explanation:
      "CPT guidelines for excision of malignant lesions state that repair by intermediate or complex closure is reported separately. The closure here was layered (intermediate), reported with 12034. Modifier 51 indicates multiple procedures in the same session.",
  },
  {
    question:
      "A 7-year-old riding his bike struck a tree stump throwing him off his bike. He received multiple lacerations. He had a 3 cm dermis laceration on his scalp with two 0.5 cm lacerations on his face. His right arm had a 5 cm laceration and right leg has a 5 cm laceration. The physician stapled the laceration for the scalp. Physician used steri-strips (adhesive strips) to close the wounds on the face. The legs and arms were cleaned by heavily irrigating them with normal saline and removal of embedded debris performed on both wounds, followed with a single-layer closure. Select the repair codes to report.",
    options: [
      "12032, 12032-59, 12011-59, 12002-59",
      "12005, 11042-59",
      "12034, 12002-59",
      "12002, 12002-59, 12011-59, 12002-59",
    ],
    correct: "C",
    explanation:
      "The two face lacerations were closed with steri-strips only — per CPT's Repair (Closure) guidelines, when adhesive strips are the ONLY repair material, no repair code is reported (only the appropriate E/M service). The scalp staple closure (3 cm) is simple, coded 12002. The arm and leg wounds required extensive cleaning/removal of debris with a single-layer closure — per guidelines, that qualifies as intermediate repair even though it's single-layer: combine the 5+5=10 cm arm/leg lengths (same classification, same grouped anatomic sites) into 12034. Modifier 59 is appended to the least complicated repair when different classifications are repaired together.",
  },
  {
    question:
      "A 55-year-old male presents in the office with an ingrown toenail on the right and left foot. The procedure was discussed in detail and the patient elected to have it performed. The right foot was prepped and draped in sterile fashion. The right great toe was anesthetized with 50/50 solution of 2 percent lidocaine and .05 percent Marcaine. A mini-tourniquet was placed around the toe for hemostasis in which part of the nail plate and matrixectomy were performed. Phenol was then applied, the toe was then flushed. Tourniquet was released and dressing applied. At this time the patient elected to only have one performed and will return in two weeks for the left foot. Code the procedure.",
    options: ["11750-T5", "11740-T5", "11730-T5", "11765-T5"],
    correct: "A",
    explanation:
      "This is removal of an ingrown toenail with partial removal of the nail AND the nail matrix (matrixectomy, with phenol) — not just evacuation of a subungual hematoma. 11750 (excision of nail and nail matrix, partial or complete) is correct.",
  },
  {
    question:
      "Procedure Diagnosis: Basal cell carcinoma, left chin. Procedure: Wide local excision of 3.0 cm with 0.3 cm margin basal cell carcinoma of the left chin with a 4 cm closure. Procedure: The patient's left chin was examined. The site of intended excision was marked out. The site was then prepped. The patient was then prepped and draped in the usual fashion. A 15 blade scalpel was then used to make an incision in the previously marked site. It was carried down to the subcuticular fat. The lesion was then sharply dissected off underlying tissue bed using a 15-blade scalpel. It was tagged for pathologic orientation. The hyfrecator was used for hemostasis. The wound was then closed by advancing the tissue surrounding the lesion and closing in layers with 3-0 Vicryl for the deep layer, followed by 5-0 Prolene for the skin. The skin closure was in a running subcuticular fashion. Steri-Strips were then applied. What are the procedure and diagnosis codes?",
    options: [
      "11444, 12052-51, D49.2",
      "11644, 12052-51, C44.319",
      "11443, 12013-51, D49.2",
      "11643, 12013-51, C44.319",
    ],
    correct: "B",
    explanation:
      "Basal cell carcinoma is malignant, eliminating the benign-lesion codes. Excised diameter = 3.0 cm lesion + 0.3 cm margin + 0.3 cm margin = 3.6 cm, on the chin (face group) — 11644. The closure was in two layers (deep + skin), qualifying as intermediate repair of the chin (4 cm) — 12052. ICD-10-CM Table of Neoplasms: Neoplasm, skin NOS/face NOS/basal cell carcinoma refers to C44.31-, completed with 6th character 9.",
  },
  {
    question:
      "The physician removes a tumor from the patient's neck using the Mohs micrographic surgery technique. During the first stage, the physician takes four tissue blocks and reviews them under a microscope. The exam of the tissue blocks reveals a second stage is necessary to remove areas where the tumor is still present. The physician examines two additional tissue blocks. What are the appropriate CPT codes for reporting the procedure?",
    options: ["17313, 17315", "17311, 17312", "17313, 17314, 17315", "17311, 17312, 17315"],
    correct: "B",
    explanation:
      "Mohs codes are selected by anatomic grouping, stage, and number of tissue blocks. The neck falls in the scalp/neck/hands/feet/genitalia/any-site-requiring-muscle-involvement group (17311/+17312), not the trunk/arms/legs group (17313/+17314). Two stages were performed, coded 17311 (stage 1) and 17312 (stage 2). +17315 is not reported because neither stage removed more than 5 tissue blocks (4 in stage 1, 2 in stage 2).",
  },
  {
    question:
      "A 25-year-old male has a ruptured distal biceps tendon at the proximal end of the radius. An incision is made overlying the antecubital fossa. The biceps tendon was tagged using #1 Vicryl-suture. The second incision made on the superior border of the ulna. The supinator was incised deep to expose the radial tuberosity. Drill holes are made at the radial tuberosity in which sutures and the distal biceps tendon are placed in the hole of the radial tuberosity. Two sutures are placed in the biceps tendon in horizontal mattress type fashion pulled tight and secured. The distal biceps tendon is reattached to the radius to restore elbow function. Closure was then accomplished with sutures and staples. What is the correct code for this procedure?",
    options: ["23430", "24342", "23440", "24340"],
    correct: "D",
    explanation:
      "This is a tenodesis (suturing a tendon's end to bone) of the ruptured distal biceps tendon at the elbow — an elbow-region procedure (24340), not a shoulder-region long-bicep-tendon procedure (23430/23440, which involves the tendon running over the humerus to the shoulder). There's no resection or transplantation of the tendon, which would be 24342.",
  },
  {
    question:
      "Patient complains of chronic/acute arm and shoulder pain following bilateral carpal tunnel surgery. Patient is followed by pain management for over a year. Physician finally diagnoses patient with reflex dystrophy syndrome (RSD). Physician performs six trigger point injections into four muscle groups. How is this encounter reported?",
    options: ["20551 x 6", "20552", "20553", "20553 x 6"],
    correct: "C",
    explanation:
      "Trigger point injection codes are selected by the number of MUSCLES injected, not the number of injections given. Six trigger points were injected into three OR MORE muscle groups (four here) — 20553 (3 or more muscle groups), reported once regardless of injection count.",
  },
  {
    question:
      "A Grade I, high velocity type 1 open right femur shaft fracture was incurred when a 15 year-old female pedestrian was hit by a car. She was taken to the operating room within four hours of her injury for thorough irrigation and debridement, including excision of devitalized bone. The patient was then reprepped, redraped, and repositioned. Intramedullary rodding was then carried out with proximal and distal locking screws. What are the correct codes for this diagnosis and procedure?",
    options: [
      "27506, 11012-51, S72.301B, V03.90XXA, Y93.01",
      "27506, 11044-51, S72.301B, V03.90XXA, Y93.01",
      "27507, 11044-51, S72.91XA, V03.90XXA, Y93.01",
      "27507, 11012-51, S72.301A, V03.90XXA, Y93.01",
    ],
    correct: "A",
    explanation:
      "ICD-10-CM Alphabetic Index: Fracture, traumatic/femur/shaft refers to S72.30-; Tabular List completes it as S72.301B (right femur, type 1 open fracture, initial encounter with open fracture type 1). This is intramedullary rodding of an open shaft fracture — 27506. Because extensive debridement was performed all the way to bone on an open fracture, the debridement is separately reported with 11012 (not 11044, which is unrelated to a fracture site), modifier 51 for multiple procedures.",
  },
  {
    question:
      "This 45-year-old male presents to the operating room with a painful mass of the right upper arm. General anesthesia was induced. Soft tissue dissection was carried down thru the proximal aspect of the teres minor muscle. Upon further dissection a large mass was noted just distal of the IGHL(inferior glenohumeral ligament), which appeared to be benign in nature. With blunt dissection and electrocautery, the 4.5 cm mass was removed en bloc and sent to pathology. The wound was irrigated, and repair of the teres minor with subcutaneous tissue was then closed with triple-0 Vicryl. Skin was closed with double-0 Prolene in a subcuticular fashion. What is the correct CPT code for this service?",
    options: ["23075", "23076", "23077", "23066"],
    correct: "B",
    explanation:
      "This is excision of a soft tissue mass at the shoulder (not a biopsy, and not a radical resection with lymph node removal). Code selection depends on anatomic location, depth, and size. The excised mass measured 4.5 cm, pointing to 23076.",
  },
  {
    question:
      "The patient presented for medial meniscal bucket-handle tear left knee. Arthroscopy with partial medial meniscectomy left knee and arthroscopic picking (drilling pick holes) of the lateral femoral condyle left knee was performed. Code the procedure and diagnosis codes.",
    options: [
      "29881-RT, 29885-51-LT, S83.242A",
      "29880-LT, 29879-51-LT, S83.212A",
      "29881-LT, 29879-51-LT, S83.212A",
      "29882-LT, 29885-51-LT, S83.282A",
    ],
    correct: "C",
    explanation:
      "ICD-10-CM Alphabetic Index: Tear/meniscus/medial/bucket-handle refers to S83.21-, completed as S83.212A (left knee). Only the medial meniscus was addressed, so 29881 (medial OR lateral meniscectomy) applies, not the bilateral-both-menisci code 29880. The \"drilling pick holes\" (chondroplasty/abrasion arthroplasty of the lateral femoral condyle) is reported with add-on 29879-51.",
  },
  {
    question:
      "A 47-year-old patient was previously treated with external fixation for a type IIIA open left tibia fracture. There is now nonunion of the left proximal tibia and he is admitted for open reduction of tibia with bone grafting. Approximately 30 grams of cancellous bone was harvested from the iliac crest. The fracture site was exposed and the area of nonunion was osteotomized, cleaned, and repositioned. Interfragmentary compression was applied and three screws and the harvested bone graft were packed into the fracture site. What are the correct codes for this diagnosis and procedure?",
    options: ["27759, S82.102N", "27724, S82.102N", "27758, S82.202S", "27722, S82.202P"],
    correct: "B",
    explanation:
      "This is a nonunion repair, not an acute traumatic fracture treatment, eliminating 27758/27759. The bone graft harvested from the iliac crest points to code 27724 (repair of nonunion, tibia, with iliac or other autogenous bone graft). ICD-10-CM Alphabetic Index: Nonunion/fracture — see Fracture, by site; Fracture, traumatic/tibia/upper end refers to S82.10-, completed as S82.102N (7th character N = subsequent care, nonunion, per guideline I.C.19.c.1).",
  },
  {
    question:
      "This 25-year-old male presents with deviated nasal septum. After intubation, a left hemitransfixion incision was made with elevation of the mucoperichondrium. Cartilage from the bony septum was detached and the nasoseptum was realigned and removed in a piecemeal fashion from the obstructed perpendicular plate of the ethmoid. Thereafter, 4-0 chronic was used to approximate mucous membranes. A small amount of silver nitrate cautery was used to achieve hemostasis. A dressing consisted of a fold of Telfa with a ventilating tube for nasal airway on each side achieved good hemostasis, patient went to recovery in good condition. What is the correct CPT code for this procedure?",
    options: ["30420", "30520", "30620", "30450"],
    correct: "B",
    explanation:
      "This is a septoplasty (removing/straightening a deviated septum to correct airway obstruction), not a rhinoplasty (cosmetic/reconstructive) or a dermatoplasty (skin replacement). 30520 is correct.",
  },
  {
    question:
      "A 67-year-old female has CAD, atrial fibrillation, claudication and several chronic conditions that have been marginally controlled with medication. The doctor decided that the benefits outweigh the risks for her having a single vessel cardiopulmonary bypass using an arterial graft. Her medication Heparin has been stopped for several days. She was admitted in the hospital a day before the surgery. In the operating room, general anesthesia was administered. After the chest is opened the patient begins to hemorrhage and drops in blood pressure. The decision is made to stop the procedure and close the chest. How is this service coded?",
    options: ["33533-52", "33533-53", "Service is not coded due to not completing the procedure", "33533-74"],
    correct: "B",
    explanation:
      "The procedure code with a modifier is reported because the patient was prepped, received anesthesia, and the procedure had already started when it was stopped due to a drop in blood pressure threatening the patient's well-being — modifier 53 (discontinued procedure). This did not occur in an outpatient hospital/ASC setting (which would use modifier 73/74).",
  },
  {
    question:
      "Mr. Y presents to outpatient surgery for placement of a dual chamber pacemaker after multiple attempts to manage his bradycardia medically. Atrial and ventricular leads were placed under fluoroscopic guidance via the subclavian vein. Testing confirmed appropriate placement and conduction. The left chest was then infiltrated with epinephrine and a pocket was opened for placement of the generator. The leads were attached to the generator and the generator was programmed. Appropriate pacing was confirmed. The skin pocket was closed in layers and dressing placed. Select the appropriate CPT code(s).",
    options: ["33213, 33217", "33235, 33208", "33214", "33208"],
    correct: "D",
    explanation:
      "This is an initial insertion of a new dual-chamber pacemaker — the pulse generator plus both atrial and ventricular leads, reported with a single code, 33208. There's no documentation of a pacemaker removal or upgrade from a single-chamber system.",
  },
  {
    question:
      "Patient had a dual chamber pacemaker put in two days ago. He is having problems with the battery and the cardiologist found that it is malfunctioning. He is taken to the operating suite to replace the pacemaker battery. What CPT and ICD-10-CM codes are reported?",
    options: ["33213-58, T82.119A", "33235-52, T82.110A", "33228-78, T82.111A", "33226-76, T82.111A"],
    correct: "C",
    explanation:
      "The patient is still in the postoperative period from the initial pacemaker placement and returns unexpectedly to the OR due to a malfunctioning battery — modifier 78 (unplanned return for a related procedure). 33228 is removal of the pulse generator/battery on a dual-lead system with replacement. ICD-10-CM: Malfunction/cardiac electronic device/pulse generator refers to T82.111-, completed as T82.111A.",
  },
  {
    question:
      "A 2-year-old male requires a central venous catheter. Using xylocaine local anesthesia a percutaneous approach is used in the neck and venous access is achieved. A subcutaneous tunnel is created from the anterior chest wall to the venotomy site and the catheter passed through the tunnel. The CV catheter is then placed at the superior vena cava and sutured in position. Which procedure code is reported?",
    options: ["36557", "36555", "36560", "36568"],
    correct: "A",
    explanation:
      "Central venous catheter codes are selected by placement technique (tunneled vs. non-tunneled), use of a port/pump, and patient age. This is a tunneled catheter (subcutaneous tunnel created), age under 5 — 36557 (not 36555, which is non-tunneled; no port/pump is placed, eliminating the port codes).",
  },
  {
    question:
      "A 62-year-old female with three-vessel disease and supraventricular tachycardia, which has been refractory to other management. She previously had pacemaker placement and stenting of the coronary artery stenosis, which has failed to solve the problem. She will undergo CABG with autologous saphenous vein and a modified MAZE procedure to treat the tachycardia. The risks and benefits have been discussed and the patient wishes to proceed. She is brought to the cardiac OR and placed supine on the OR table. She is prepped and draped and adequate endotracheal anesthesia is assured. A median sternotomy incision is made and cardiopulmonary bypass is initiated. The endoscope is used to harvest an adequate length of saphenous vein from her left leg. This is uneventful and bleeding is easily controlled. The vein graft is prepared and cut to the appropriate lengths for anastomosis. Three bypasses are performed, one to the LAD, one to the circumflex and another distally on the circumflex. A modified MAZE procedure was then performed and the patient was weaned from bypass. Once the heart was once beating on its own again, we attempted to induce an arrhythmia and this could not be done. At this point, the sternum was closed with wires and the skin reapproximated with staples. The patient tolerated the procedure without difficulty and was taken to the PACU. Choose the procedure codes for this service.",
    options: [
      "33535, 33254-51, 33508",
      "33512, 33257, 33508",
      "33512, 33257-51, 33508-51",
      "33512, 33254-51, 33508",
    ],
    correct: "B",
    explanation:
      "This is a CABG with three venous grafts — 33512. Code 33254 (MAZE alone) is specifically excluded by a parenthetical note when performed with another procedure requiring median sternotomy/CPB; instead, add-on 33257 reports a modified MAZE performed at the same time as other cardiac procedures. Add-on 33508 reports the endoscopic saphenous vein harvest. Both 33257 and 33508 are add-on codes, so modifier 51 is not appended to either.",
  },
  {
    question:
      "A patient comes in for surgery today to address complications from his previous partial enterectomy performed 5 months ago. Upon reopening the patient's previous incision the surgeon resected the ileum and a portion of the colon. An ileocolostomy was performed to complete the procedure with no complications. The appropriate CPT code to report is:",
    options: ["44160", "44144", "44205", "44150"],
    correct: "A",
    explanation:
      "The surgeon removed a portion of the colon (partial colectomy) and the ileum, with an ileocolostomy performed through an OPEN incision (not laparoscopically) — 44160 (colectomy, partial, with removal of terminal ileum with ileocolostomy).",
  },
  {
    question:
      "A patient with esophageal cancer is brought to the OR for subtotal esophagectomy. A thoracotomy incision is made and the esophagus is identified. The tumor is carefully dissected free of the surrounding structures. No invasion of the aorta or IVC is identified. The cervical esophagus is controlled with pursestring sutures and then transected above the sternal notch. The esophagus is then dissected free of the stomach and the entire specimen is removed from the chest cavity and sent to pathology. The stomach is then pulled into the chest cavity and anastomosed to the remaining cervical esophageal stump. The anastomosis is tested for patency and no leaks are found. Hemostasis is assured. The chest is examined for any signs of additional disease but is grossly free of cancer. The chest is closed in layers and a chest tube is place through a separate stab incision. The patient tolerated the procedure well and was taken to the PACU in stable condition. What CPT code is reported?",
    options: ["43107", "43117", "43101", "43112"],
    correct: "D",
    explanation:
      "This is a thoracotomy approach (not excision of a lesion, and not a cervical-approach-only procedure) with the stomach pulled through the chest and anastomosed to the esophageal stump in the NECK — the key term \"cervical\" points to 43112 (total or subtotal esophagectomy, with thoracotomy, with pharyngogastrostomy or cervical esophagogastrostomy).",
  },
  {
    question:
      "Diagnostic esophagogastroduodenoscopy of the esophagus, stomach, and duodenum was performed after esophageal balloon dilation (less than 30 mm diameter) was done at the same operative session. Code the procedure(s).",
    options: ["43220", "43249", "43220, 43200-51", "43249, 43235-51"],
    correct: "B",
    explanation:
      "This is an EGD (esophagus, stomach, AND duodenum), not an esophagoscopy alone. \"Balloon dilation\" during an EGD points to 43249. The diagnostic EGD (43235) is a \"separate procedure\" bundled into the surgical EGD (43249) when performed at the same session, not separately reported.",
  },
  {
    question:
      "A 42-year-old has a lesion on his pancreas. The physician passes the biopsy needle through the skin and removes tissue to be sent to pathology. Fluoroscopic guidance is used to obtain the biopsy. Physician's report and interpretation is placed in the record. Code this encounter.",
    options: ["48102, 77002-26", "48120, 76942-26", "48100, 77002-26", "48102, 76942-26"],
    correct: "A",
    explanation:
      "The needle passed through the skin indicates a percutaneous approach (not open) — 48102. Fluoroscopic guidance (not ultrasound) is reported with 77002-26.",
  },
  {
    question:
      "A 55-year-old male presents to the outpatient surgery center for ERCP with cholangiography. A stricture of the common bile duct is found and the decision is made to perform balloon dilation and placed two side-by-side stents in the common bile duct. What CPT coding is reported?",
    options: ["43275 x 2, 43274 x 2", "43276", "43274, 43274-59", "43277, 43274"],
    correct: "C",
    explanation:
      "Two stents in the common bile duct are both reported with 43274. There's no exchange/removal of an existing stent (eliminating other options). A parenthetical note states balloon dilation (43277) cannot be reported with 43274 in the same duct, so it's not separately coded. A parenthetical note under 43274 directs modifier 59 for each additional stent placed.",
  },
  {
    question:
      "Newborn male is scheduled for a circumcision. He is sterilely prepped and draped; a penile nerve block is performed. The circumcision is performed by a ring device. Hemostasis is achieved. Vaseline Gauze dressing applied. Patient tolerated the procedure well. How is this encounter coded?",
    options: ["54161, 64450", "54160", "54150, 64450", "54150"],
    correct: "D",
    explanation:
      "The circumcision performed with a ring device (\"other device\") is 54150. The penile nerve block is included in the code descriptor itself, so 64450 is not separately reported.",
  },
  {
    question:
      "A laparoscopic assisted total hysterectomy is planned for a patient who has severe intramural fibroids. After inserting the laparoscope, extensive adhesions are noted to the extent that the ligaments supporting the uterus cannot be visualized. The physician decides to convert the procedure to an open abdominal hysterectomy in which the uterus and cervix are removed. What CPT coding is reported?",
    options: ["58570", "58150", "58262, 58570-53", "58260, 58550-22"],
    correct: "B",
    explanation:
      "Per NCCI policy (followed on the exam), when a laparoscopic procedure converts to open, only the open procedure code is reported — the laparoscopic code is not separately billed. 58150 (total abdominal hysterectomy) is correct.",
  },
  {
    question:
      "Patient has consented for further testing to determine the extent of her cervical dysplasia. A cervical cone biopsy of endocervical tissue was cut using a laser. It was tagged with a single stitch. Dilation and curettage was performed. Small amount of tissue was obtained and sent to pathology. Which procedure code(s) is (are) reported?",
    options: ["57520", "57500, 57505", "57461", "57520, 58120"],
    correct: "A",
    explanation:
      "A cone-shaped excision of endocervical tissue is a conization, here performed with a laser. Code 57520's own descriptor includes fulguration, dilation and curettage, or repair when performed — so the D&C is not reported separately.",
  },
  {
    question:
      "A 46-year-old female with history of cervical carcinoma underwent placement of an ileal conduit, with subsequent development of left hydronephrosis. A retrograde ureteral catheter was recently placed. She returns today for catheter exchange. Patient was placed in the supine on the operating table. The ileal conduit was accessed. The existing catheter was removed over a guidewire and replaced with a similar 10 French 50 cm long locking pigtail catheter. Contrast was injected for monitoring, confirming good position of the catheter placement. Interpretation and report is in the record. IMPRESSION: Left retrograde ureteral catheter exchange via the ileal conduit.",
    options: ["50688, 75984-26", "50435", "50385", "50693"],
    correct: "A",
    explanation:
      "50688 reports catheter exchange via an ileal conduit (not percutaneous [50435] or transurethral [50385] or initial stent placement [50693]). A parenthetical note under 50688 directs imaging to be reported with 75984.",
  },
  {
    question:
      "A 70-year-old with significant pelvic prolapse and grade IV cystocele who has failed previous primary repair and is status post hysterectomy. She presents for anterior repair and colpopexy. Procedure: Patient placed in the dorsal lithotomy position and general anesthetic was induced without problems. A midline incision is made from just above the bladder neck to the vaginal cuff. She is noted to have a grade IV cystocele. Vaginal flaps were dissected to the level of the pubocervical fascia. Her vaginal mucosa was in good condition but near the urethra and bladder neck it was a little thinner. There is significant scarring on the left side from previous procedures. Ischial spine is identified and swept fiber fatty tissue off of the sacrospinous ligament bilaterally. No scarring or adhesions in this area. Anterior needles were passed into place on the elevate mesh and these were fixed in a manner similar to the MiniArc. They were passed along just below the bladder neck toward the obturator foramen and fixed in place. An anterior support was created without tension at the vesicourethral junction. Apical needles were then used to pass the apical arms into place. There were gently fixed into place along the sacrospinous ligament approximately 2cm away from the ischial spine. This was done bilaterally. They passed in a single pass and were fixed in place confirmed by gentle tugging on both arms. Three Vicryl sutures had been placed and the vaginal apex were then passed over into the mesh and tied down. The apical arms were placed through the eyelets of the mesh and passed down toward the sacrospinous ligament bilaterally to create good apical support. Eyelet fasteners placed bilaterally and mesh arms trimmed providing excellent apical and anterior support. Vaginal mucosa was closed and vaginal packed placed. No complications. What CPT code(s) describe(s) this procedure?",
    options: ["57240, 57283", "57240, 57282", "57250, 57283", "57250, 57280"],
    correct: "B",
    explanation:
      "Colporrhaphy codes are selected by surgical approach and herniation type — this is an anterior repair for a grade IV cystocele, 57240. Colpopexy codes are selected by approach — the documentation describes a sacrospinous ligament fixation, 57282.",
  },
  {
    question:
      "A 58-year-old female has lumbar degenerative spondylolisthesis with severe stenosis and instability. The spinous process of L4 and L5 are decompressed bilaterally by performing a laminectomies, right-sided foraminotomies and then left-sided facetectomy completely decompressing the nerve roots as well as the dura. How is this procedure reported?",
    options: ["63047-50, 63048-50", "63017", "63047, 63048", "63030-50, 63035 x 2"],
    correct: "C",
    explanation:
      "A laminectomy with facetectomy and foraminotomy at L4-L5 is reported with 63047 (first level) and 63048 (each additional level). Modifier 50 is not appended because bilateral decompression is already included in the code's own descriptor.",
  },
  {
    question:
      "Physician is performing an intracapsular cataract extraction. The anterior chamber of the eye is entered performing an anterior capsulotomy using forceps. The lens nucleus was hydrodissected and loosened. Using phacoemulsification unit, the lens nucleus was divided and emulsified. Cortical and capsular fragments were removed. The anterior chamber and capsule bag inflated. Using lens inserter an intraocular lens prosthesis, Cystalens, was inserted and rotated to the horizontal position. Topical solution applied, conjunctiva repositioned over the wound with wet field cautery and patch applied. Which CPT code(s) is (are) reported?",
    options: ["66985", "66983", "66983, 66985", "66984, 66985"],
    correct: "B",
    explanation:
      "This is a cataract extraction WITH an intraocular lens (IOL) prosthesis inserted in the same session — 66983 (intracapsular cataract extraction with IOL insertion, one stage). 66985 is used only when the IOL is inserted alone, on a patient who already had the cataract removed previously.",
  },
  {
    question:
      "A 5-year-old male has diminished hearing in the left ear due to chronic otitis media. He has had hearing aid prosthetic devices in the ear which have resulted in additional infections. Parents have decided on an osseointegrated implant to restore hearing. The mastoid cortex is exposed. Spiral drilling is performed to create a pilot hole. The stem of the titanium pedestal is placed in the tunnel adjacent to the cochlea and abutment subsequently secured to the fixture. Which CPT code is reported?",
    options: ["69716-LT", "69719-LT", "69717-LT", "69714-LT"],
    correct: "D",
    explanation:
      "This is the initial (first-time) placement of an osseointegrated implant, not a replacement, and there's no attachment to an external speech processor documented — 69714 (implantation, osseointegrated implant, temporal bone, first stage, without mastoidectomy).",
  },
  {
    question:
      "The physician performs a right thyroid lobectomy. The patient was prepped and draped. After adequate general anesthesia, the neck was incised on the right side and sharp dissection was then used to cut down onto the strap muscles and sternocleidomastoid muscles. The strap muscles were separated and transected on the right side. A small thyroid lobe was visualized and dissected free. There was no evidence of a tumor. The wound was closed with 3-0 interrupted Vicryl for the platysma, 4-0 Vicryl for the deep tissues and 6-0 fast absorbing gut for the skin. Code the encounter.",
    options: ["60252-RT", "60220-RT", "60210-RT", "60260-RT"],
    correct: "B",
    explanation:
      "This is a thyroid LOBECTOMY (a whole lobe dissected free, no partial-lobe removal documented), not a full thyroidectomy — 60220.",
  },
  {
    question:
      "Physician performs a medical review and documentation on an 83 year-old patient who has been in the hospital for the last two days with confusion. Problem focused exam where she is alert and oriented x 3 today. Low medical decision making by ordering an echocardiogram and to continue IV fluids. Patient is not safe to return home. What E/M code is reported for this visit?",
    options: ["99231", "99221", "99234", "99224"],
    correct: "A",
    explanation:
      "The patient has been hospitalized for two days already, making this a SUBSEQUENT hospital care visit (99231-99233), not observation care or initial hospital care. Two of three key components must meet or exceed the level — problem focused exam plus low-complexity MDM point to 99231.",
  },
  {
    question:
      "A plastic surgeon is called to the ED at the request of the emergency department physician to evaluate a patient that arrived with multiple facial fractures that may need surgery. Patient was in an automobile accident and an opinion is needed for reconstructive surgery. The plastic surgeon arrives at the ED, obtains detailed history and performs a detailed exam. The plastic surgeon performs a moderate medical decision making, in deciding that the patient needs major surgery to repair the injuries. The plastic surgeon schedules the patient for surgery the next day and documents her full note with findings in the ED chart. The E/M service reported by the plastic surgeon is:",
    options: ["99243-32", "99243-57", "99284-57", "99284-32"],
    correct: "B",
    explanation:
      "This meets the requirements for a consultation (requested by the ED physician for an opinion, with a written report documented in the chart), performed in an outpatient setting (the ED) — all three key components (detailed history, detailed exam, moderate MDM) support 99243. Modifier 57 is appended because the decision for major surgery (scheduled the next day) was made during this visit. Modifier 32 (mandated service) doesn't apply — there's no third-party mandate documented.",
  },
  {
    question:
      "At the request of the mother's obstetrician, a neonatologist is called to attend the birth of an infant being delivered at 29 weeks gestation. During delivery, the neonate was pale and bradycardic needing resuscitation. Neonatologist performs the suctioning and bag ventilation on this 1000 gram neonate was performed with 100 percent oxygen. Bradycardia worsened, requiring endotracheal intubation and insertion of an umbilical line for fluid resuscitation. Later this critically ill neonate was moved from the delivery room and admitted to the NICU with severe respiratory distress and continued hypotension. What are the appropriate procedure codes reported by the neonatologist?",
    options: [
      "99465, 99468",
      "99465, 99468-25, 31500-59, 36510-59",
      "99468, 99464",
      "99465, 99464, 99468-25, 31500-59, 36510-59",
    ],
    correct: "B",
    explanation:
      "A parenthetical note states 99464 cannot be reported with 99465 — since the baby needed resuscitation, 99465 applies. The neonate is then admitted to critical care, reported with 99468 (which CAN be reported with 99465). Per CPT guidelines, procedures performed as a necessary part of pre-admission delivery room resuscitation are separately reported — the intubation (31500) and umbilical line (36510) both occurred before NICU admission, each with modifier 59. Modifier 25 on 99468 identifies it as a separately significant E/M service.",
  },
  {
    question:
      "15-year-old male is seen by the pediatrician in his office for having excessive thirst and frequent urination. A urine dip is performed showing +3 sugar and with some ketones. Glucometer reading is done showing a blood sugar range of 500-600. Physician sends the patient with his father to the hospital for emergency admission and insulin drip. The pediatrician meets the patient at the hospital and performs a detailed history, comprehensive exam and a high complexity medical decision making. How should the pediatrician code the E/M service for this visit?",
    options: ["99214", "99285", "99223", "99221"],
    correct: "D",
    explanation:
      "Per CPT guidelines for Initial Hospital Care, when a patient is admitted as an inpatient during an encounter at another site of service (here, the physician's office), all E/M services by that physician on the same date are part of the initial hospital care — the earlier office visit is not separately reported. All three key components must meet or exceed the level for codes 99221-99223. Because the lowest component here is a detailed history (99221 allows detailed OR comprehensive history), the highest level reachable is 99221 — 99223 would require a comprehensive history specifically.",
  },
  {
    question:
      "CC: Shortness of breath. History: A 62-year-old female returns to a family practice having shortness of breath for the last week. It has been two years since her last visit to the practice. She also has nausea, diaphoresis, chest pressure. Past History: Celebrex for her arthritis. Hysterectomy 1 year ago. Social History: Smoker-No Alcohol-No. Allergies: Penicillin. PHYSICAL EXAM Vital Signs: BP 195/95 sitting, left arm. General/Constitutional: Mild distress. Some diaphoresis. Nose/Throat: Mucous membranes normal. Oropharynx appears normal. No mucosal lesions. Neck/Thyroid: Supple, without adenopathy or enlarged thyroid. Respiratory: Shallow breathing, no wheezing. Cardiovascular: Unequal pulses in both arms. Abnormal heart sounds heard. EKG ordered. Assessment/Plan: Severe exacerbation of congestive heart failure. Patient is sent to the hospital to be admitted. Will send hospital orders to start her on IV, order chest X-ray and CBC.",
    options: ["99214", "99204", "99202", "99215"],
    correct: "D",
    explanation:
      "MDM: 1 acute/chronic illness posing a threat to life or bodily function (high); ordering 3 unique tests — EKG, CBC, X-ray (moderate data); decision regarding hospitalization (high risk). Two of three high-level elements are met, giving 99215 — even though the patient hasn't been seen in two years, she remains an established patient of the practice (not a new patient of this specific physician necessarily, but of the practice/specialty group within 3 years matters — here the key driver is simply that this is coded as an established visit per the correct answer).",
  },
  {
    question:
      "This morning a 48-year-old is placed in observation status from the emergency room with severe diarrhea and extreme thirst. The physician performs a comprehensive history, comprehensive examination and determines the patient is suffering from dehydration. The physician places the patient on IV saline 500 ml and conducts normal saline hydration for a couple hours. The medical making decision making is of moderate complexity. Patient is discharged home in the late evening on the same day and is told to return if symptoms occur again. The E/M service(s) for this encounter is:",
    options: ["99285", "99219, 99217", "99235", "99217"],
    correct: "C",
    explanation:
      "The patient is admitted to AND discharged from observation status on the SAME calendar date — per the Initial Observation Care guidelines, this scenario is reported with the Observation or Inpatient Care Services (Including Admission and Discharge Services) codes, 99234-99236. Comprehensive history + comprehensive exam + moderate MDM lands on 99235.",
  },
  {
    question:
      "Physician was called to the floor to evaluate a 94 year-old that had sudden weakness, hypotension, and diaphoresis. Physician found the patient in mild distress and dyspneic. Her BP 101/60, pulse 85. Labs were still pending. Arterial blood gas was drawn and interpreted by the physician. She was admitted to CCU for Acute Antero-lateral MI and hypotension. Physician spent total critical care time of 65 minutes. Select the appropriate CPT coding for this visit.",
    options: ["99291, 82803-26", "99291, 99292", "99291", "99233, 82803-26"],
    correct: "C",
    explanation:
      "Critical care codes report the total duration of constant attention to a critically ill/injured patient, regardless of location. 65 minutes of critical care is reported with a single unit of 99291 (which covers the first 30-74 minutes) — 99292 is only added for additional time beyond 74 minutes. The blood gas (82803) is included in critical care and not separately reported.",
  },
  {
    question:
      "A four-year-old patient presents with pain in the left forearm following a fall from a chair. The injury occurred one hour ago. Her mom applied ice to the injury but it does not appear to help. The ED physician performs a detailed history, expanded problem focused examination and medical decision making of moderate complexity. An X-ray is ordered, which shows a fracture of the distal end of the radius as read by the radiologist. The ED physician consults with an orthopedic surgeon. The ED physician performs moderate conscious sedation with Ketamine for 30 minutes. The fracture is reduced and cast applied by an orthopedic surgeon. The child was monitored with pulse oximetry, cardiac monitor and blood pressure by the ED physician frequently. The patient was discharged with a sling and requested to follow up with the orthopedic surgeon. Code the services performed by the ED physician.",
    options: [
      "99283-25, 99152, 99157",
      "99283-25, 99155, 99157",
      "99284-25, 99151, 99157-51",
      "99284-25, 99151, 99153",
    ],
    correct: "B",
    explanation:
      "ED E/M codes (99281-99285) require all THREE key components to be met. Detailed history + expanded problem focused exam + moderate MDM supports 99283. Modifier 25 reports the E/M as separately identifiable from the sedation procedure. Moderate conscious sedation codes depend on patient age, time, and whether the sedating physician is also performing the procedure requiring sedation — here the ED physician provides ONLY the sedation (the orthopedic surgeon does the fracture reduction), for a 4-year-old, 30 minutes: 99155 (initial 15 minutes, age under 5, different physician performing the procedure) + 99157 (each additional 15 minutes, add-on, no modifier 51).",
  },
  {
    question:
      "PROCEDURE: Bilateral lumbar medial branch block under ultrasound guidance for the L3, L4, L5 medial branches injecting the L4-L5, L5-S1 facets for diagnostic and therapeutic purposes. The patient was placed in the prone position and automated blood pressure cuff and pulse oximeter applied. The skin entry points for approaching the anatomic target points of the bilateral segmental medial branches or dorsal ramus of L3, L4, L5 were identified with a 22.5 degree from an ultrasound view and marked. Following thorough Chloraprep preparation of the skin and draping and 1% lidocaine infiltration of the skin entry points and subcutaneous tissues, a 22 gauge 6\" spinal needle was placed under ultrasound guidance for the L4-L5 and L5-S1 facet joints. At each joint 1 mL consisting of 0.5% bupivacaine and Depo-Medrol was injected. A total of 80 mg of Depo-Medrol was given in both sides. Which CPT codes are reported?",
    options: ["64493-50, 64494-50, 64495-50", "64493-50, 64494-50, 76942-26", "0216T-50, 0217T x 2", "0216T-50, 0217T x 2, 0218T x 2, 76942-26"],
    correct: "C",
    explanation:
      "A parenthetical note directs that when ULTRASOUND guidance is used for facet/facet nerve injections, report 0213T-0218T instead of the standard 64490-series codes (which assume fluoroscopic/CT guidance). Two levels (L4-L5, L5-S1) were injected bilaterally: 0216T-50 (first level, bilateral) plus add-on 0217T reported twice (each additional level — its own parenthetical note says report it twice for bilateral, not with modifier 50). Ultrasound guidance is bundled into these codes, not separately reported.",
  },
  {
    question:
      "Patient is admitted in labor for delivery. She received a labor neuraxial epidural for a vaginal delivery. The baby goes into fetal distress and a cesarean section is performed. Following delivery the patient starts to hemorrhage. The physician decides, with family approval, to perform a hysterectomy. Code the anesthesia services.",
    options: ["01967, 01969", "01967, 00840", "1968", "1962"],
    correct: "A",
    explanation:
      "The neuraxial labor epidural for a planned vaginal delivery is 01967. When the delivery becomes a cesarean AND a hysterectomy is subsequently required, add-on code 01969 reports the anesthesia for the cesarean/hysterectomy performed after the epidural was placed.",
  },
  {
    question:
      "Angiograms reveal three artery blockages. The patient has COPD, which is a severe systemic disease. The patient undergoes a CABG X 3 venous grafts on cardiopulmonary bypass and cell saver. Code the anesthesia service.",
    options: ["00566-P4", "00560-P4", "00562-P3", "00567-P3"],
    correct: "D",
    explanation:
      "Cardiopulmonary bypass being used points to the \"with pump oxygenator\" code, 00567 (not 00566, without pump oxygenator). COPD is a severe systemic disease but not documented as a threat to life, supporting physical status P3 (not P4, which implies a constant threat to life).",
  },
  {
    question:
      "A healthy 11-month-old patient with bilateral cleft lip and palate undergoes surgery. The surgeon performs a bilateral cleft lip repair, single stage. Code the anesthesia service.",
    options: ["00102-P1", "00170-P1", "00102-P1, 99100", "00170-P1, 99100"],
    correct: "C",
    explanation:
      "Anesthesia for cleft lip repair is 00102. The patient is healthy, supporting physical status P1. Because the patient is under 1 year of age (and age is not already built into this anesthesia code), qualifying circumstance add-on 99100 is separately reported.",
  },
  {
    question: "The anesthesiologist performed MAC (monitored anesthesia care) for a patient undergoing an arthroscopy of the right knee. Code the anesthesia service.",
    options: ["01400-AA", "01382-AA-QS", "01382-AA", "01400-AA-QS"],
    correct: "B",
    explanation:
      "MAC requires modifier QS. The procedure is a DIAGNOSTIC arthroscopy (not surgical), pointing to 01382 rather than 01400 (which covers open/surgical knee procedures). Modifier AA reports personal performance by the anesthesiologist.",
  },
  {
    question: "General anesthesia is administered to a 9-month-old undergoing a tracheostomy. Code the anesthesia service.",
    options: ["00326, 99100", "326", "00320, 99100", "320"],
    correct: "B",
    explanation:
      "Anesthesia for a tracheostomy in a patient under 1 year old is 00326 (the age-specific code already accounts for the patient's youth). A parenthetical note under 00326 explicitly states not to report it in conjunction with 99100, since the age factor is already built into the code itself.",
  },
  {
    question:
      "A 78-year-old with lower back pain and leg pain is scheduled for a MRI of lumbar spine without contrast. Following the MRI, the patient is diagnosed with spinal stenosis of the lumbar region. What are the procedure and diagnosis codes?",
    options: ["72158-26, M48.07, M54.50, M79.606", "72020-26, M54.50, M79.606, M48.061", "72149-26, M48.061", "72148-26, M48.061"],
    correct: "D",
    explanation:
      "MRI (not X-ray) of the lumbar spine, without contrast, is 72148. Per ICD-10-CM guideline I.B.5, signs/symptoms integral to a definitive diagnosis (the back and leg pain, since claudication isn't specifically documented) are not separately coded. ICD-10-CM: Stenosis/spinal/lumbar region (without neurogenic claudication) refers to M48.061.",
  },
  {
    question:
      "A 22-year-old driver lost control of her car and crashed into a light pole on the highway. She arrived at the hospital. She had CT scans without contrast of the brain and chest. She had X-rays of AP and PA views of her left ribs and AP and PA views of her right ribs with a posteroanterior view of the chest. The CT scan of the brain showed a fracture of the skull base with no hemorrhage of the brain. The CT of the lung showed no puncture of the lungs. The X-ray showed fractures in the right and left second, third, and fifth ribs. What CPT and ICD-10-CM codes are reported?",
    options: [
      "70460-26, 71260-26, 71110-26, S02.01XA, S22.49XB V47.0XXA, Y92.411",
      "70450-26, 71250-26, 71101-26, S02.109A, S22.43XA, V47.32XA, Y92.411",
      "70450-26, 71250-26, 71111-26, S02.109A, S22.43XA, V47.5XXA, Y92.411",
      "70450-26, 71250-26, 71111-26, 71045-26, S01.109A, S22.49XA, V47.32XA, Y92.411",
    ],
    correct: "C",
    explanation:
      "CT head/brain WITHOUT contrast is 70450; CT thorax without contrast is 71250; four total views of both sides of the ribcage including the PA chest view is 71111. ICD-10-CM: Fracture, traumatic/skull/base completes as S02.109A; Fracture, traumatic/rib/multiple (bilateral, 3 ribs) completes as S22.43XA. External cause: Accident/transport/car occupant/driver/stationary object completes as V47.5XXA; Place of occurrence/highway refers to Y92.411.",
  },
  {
    question: "The physician orders an ultrasound on a patient 25 weeks pregnant with twins to access fetal heart rate and fetal position. Select the code(s).",
    options: ["76816 x 2", "76811, 76812", "76815", "76805, 76810"],
    correct: "C",
    explanation:
      "This is a LIMITED ultrasound — only two elements examined (fetal heart rate and fetal position) — 76815, whose own descriptor says \"1 or more\" fetuses, meaning it's reported only once regardless of the number of fetuses.",
  },
  {
    question:
      "A 65-year-old woman is one year post with B-cell non-Hodgkin's lymphoma. She is having recurrent fever and pain. Tumor recurrence was confirmed by CT studies and chest X-ray. She has failed prior chemotherapy and radiation treatments. A new treatment is being contemplated and she is referred for a radiopharmaceutical distribution imaging as a requirement before starting this new treatment. The provider injects small amounts of gamma-emitting radioactive material paying particular attention for potential reaction. A gamma camera is used to take planar images of the whole body for three days. Three sets of image data are interpreted. Qualitative assessment of distribution and determination of treatment with monoclonal antibody are provided. A report is dictated and placed in the medical record. Which CPT code is reported?",
    options: ["78801-26", "78804-26", "78802-26", "78803-26"],
    correct: "B",
    explanation:
      "78801 covers a single area/single day, which is eliminated since the whole body was imaged over three days. 78804 (whole body, requiring 2 or more days imaging) is correct.",
  },
  {
    question: "Due to an elevated CEA level two years following a colon resection, the patient's oncologist ordered a diagnostic liver ultrasound. Which radiology code is reported for this encounter?",
    options: ["76705", "76706", "76700", "76970"],
    correct: "A",
    explanation:
      "Ultrasound of a single organ (the liver) is a LIMITED abdominal ultrasound — 76705 (its own descriptor specifies \"single organ\"). This is an initial ultrasound, not a follow-up, so 76970 doesn't apply.",
  },
  {
    question:
      "A 52-year-old male has a 3.2 cm metastasized lung cancer in his left upper lobe. The tumor cannot be removed by surgery due to the patient having severe respiratory conditions. He will be receiving stereotactic body radiation therapy management under image guidance. There is a delivery of 25 Gy for four fractions under direct supervision of the radiation oncologist. The patient's treatment set up is assessed to manage the execution of the treatment to make any adjustments needed for accuracy and safety. The oncologist reviews and approves all the images used to locate the tumor and images of fields arranged to deliver the dose. What CPT and ICD-10-CM codes should be reported?",
    options: ["77435, Z51.0, C78.02", "77402, C34.92, Z51.0", "77435, C78.02, Z51.0", "77373, Z51.0, C34.92"],
    correct: "A",
    explanation:
      "The documentation describes stereotactic body radiation therapy MANAGEMENT (treatment setup assessment, image review/approval), which is 77435. Per ICD-10-CM guideline I.C.2.e.2, when the encounter is solely for administration of radiation therapy, Z51.0 is the first-listed diagnosis, followed by the condition being treated. The metastatic (secondary) lung tumor in the upper lobe: Neoplasm/lung/upper lobe/Malignant Secondary completes as C78.02.",
  },
  {
    question:
      "A patient presents to the ED with crushing chest pain radiating down the left arm and up under the chin. There are elevated S-T segments on EKG. The cardiologist sees and admits the patient to CCU. He orders three serial CPK enzymes levels with instructions that the tests are also to be done with isoenzymes if the initial tests are elevated for that date of service. The CPK enzyme levels were elevated. The lab codes are:",
    options: ["82550, 82550-91 x 2, 82552, 82552-91 x 2", "82550, 82552, 82550-76 x 2, 82552-76 x 2", "82550, 82552, 82552-91 x 2", "82550 x 3, 82554 x 3"],
    correct: "A",
    explanation:
      "Three serial CPK levels were run, with modifier 91 (repeat clinical diagnostic test) on the second and third of each. Since the CPK levels were elevated, isoenzymes (82552) were also run for all three, similarly modified with 91 on the repeats.",
  },
  {
    question:
      "A 22-year-old has had no prenatal care. Fundal height indicates a term fetus and by dates it is determined she is 38 weeks pregnant. Few hours prior to admission to Labor and Delivery her membranes ruptured spontaneously. She does not have fever, but the physician performs a rapid antigen test for group B strep. An enzyme immunoassay method is performed. Physician obtains a lower vaginal swab, then observes that it visually shows the patient is negative for the antigen. If clinical risk factors appear, intrapartum antibiotics will be initiated. Which lab test is reported?",
    options: ["86317", "87802", "87653", "87899"],
    correct: "B",
    explanation:
      "This is a rapid antigen (direct optical/visual observation) test for group B Streptococcus — 87802 (infectious agent antigen detection by immunoassay with direct optical observation).",
  },
  {
    question:
      "The patient presents with burning urination and frequency. The physician performs a UA dipstick, which shows elevated WBC. He orders a urine culture with identification for each isolate to determine which antibiotic to give to the patient for the infection. What are the appropriate lab codes?",
    options: ["81002, 87088", "87086, 87088", "81000, 81007", "81001, 87086"],
    correct: "A",
    explanation:
      "A UA dipstick with no microscopic component is 81002 (non-automated, without microscopy). A urine culture with identification of each isolate is 87088. 87086 (quantitative colony count) does not apply here since identification, not colony count, is documented.",
  },
  {
    question: "Which of the following coding combinations is an example of unbundling?",
    options: ["80048, 80061", "82310, 82355, 82374", "80061, 83718, 84478", "80076, 80305"],
    correct: "C",
    explanation:
      "80061 (lipid panel) already includes 83718 (HDL) and 84478 (triglycerides) — reporting these lab tests separately in addition to the panel is unbundling.",
  },
  {
    question: "Patient is undergoing in vitro fertilization to get pregnant. Following the retrieval of follicular fluid from the patient, the physician uses a microscope to examine the fluid to identify the oocytes. What is the code for the laboratory service?",
    options: ["89250", "89254", "89255", "89258"],
    correct: "B",
    explanation:
      "This is identification of oocytes from follicular fluid — 89254. This code covers identification only, not culture or preparation of the oocyte for fertilization.",
  },
  {
    question:
      "A 22-year-old comes into the Emergency Department with convulsions. The ED physician orders a drug screening without identifying any specific drug class to be tested. The lab runs two drug classes screening using an immunoassay multiplex strip (dipstick) and the results are visually read. The lab report comes back positive for alcohol and benzodiazepines. The ED physician then orders a confirmatory test to be performed by the lab to confirm both positive results. What CPT codes are reported?",
    options: ["80305, 80320, 80346", "80306 x 2, 80320 x 2, 80346 x 2", "80305 x 2, 80320, 80346", "80307, 80320, 80346"],
    correct: "A",
    explanation:
      "The immunoassay dipstick, visually read, points to 80305. CPT's Presumptive Drug Class Screening guidelines direct that 80305 is reported ONCE regardless of the number of drug classes screened by direct observation. Confirmatory testing for both positives is reported separately: 80320 (alcohol) and 80346 (benzodiazepines).",
  },
  {
    question: "A pathologist performs a comprehensive consultation and report for surgical pathology on referred material that involves reviewing a patient's records, specimens and official findings from other sources after a surgery. What is the correct code?",
    options: ["88325", "88329", "80505", "99244"],
    correct: "A",
    explanation:
      "88325 is a comprehensive consultation reviewing records, specimens, and findings from other sources. 99244 doesn't apply (no patient evaluation/exam), 88329 is for a consultation performed intraoperatively, and 80505 is a clinical (not surgical) pathology consultation.",
  },
  {
    question:
      "A 69-year-old female has been having chest tightness. Cardiologist performs a percutaneous transluminal coronary angioplasty (PCTA) of the right coronary artery and left anterior descending coronary artery. The procedure revealed atherosclerosis in the native vessel of the left anterior descending coronary artery and right coronary artery. Stents were inserted in both arteries to keep the arteries opened. Patient was placed under moderate conscious sedation by the anesthesiologist during the procedure for a total of 30 minutes. What CPT codes are reported for the cardiologist?",
    options: ["92928-LD, 92929-RC, 99152, 99153", "92928-LD, 92928-RC, 99152, 99153", "92928-LD, 92928-RC", "92928-LT, 92929-RT"],
    correct: "C",
    explanation:
      "Stents were placed in two major coronary arteries (LAD and RCA) — base code 92928 is reported twice with the vessel-specific modifiers -LD and -RC. The moderate sedation was performed by the anesthesiologist, not the cardiologist, so it's not reported by the cardiologist.",
  },
  {
    question:
      "A two-month-old returns for a well child check and several shots (Rota, DTaP-HepB-IPV, Pneumococcal PCV13) with her pediatrician. He offers suggestions to the mom, completes the exam, and counsels her on the vaccinations. How should this be coded?",
    options: [
      "99381-25, 90471, 90472 x 2, 90474, 90680, 90700, 90648, 90670",
      "99391-25, 90460 x 3, 90461 x 4, 90680, 90723, 90670",
      "99391-25, 90460, 90461 x 2, 90680, 90723, 90670",
      "99381-25, 90471, 90472 x 3, 90680, 90723, 90670",
    ],
    correct: "B",
    explanation:
      "This is an established patient preventive visit (99391, 2 months old). Because the physician counsels the mother regarding vaccinations, the physician-counseling administration codes (90460/90461) apply rather than the nurse-only codes (90471/90472). Three vaccines: rotavirus (90680), the 5-component combination DTaP-HepB-IPV (90723), and pneumococcal PCV13 (90670). 90460 is reported three times (once per vaccine's first component — rotavirus, diphtheria as the first component of the combo, and pneumococcal), and add-on 90461 four times for the combination vaccine's four remaining components (tetanus, acellular pertussis, Hepatitis B, poliovirus).",
  },
  {
    question: "Mary, who has food allergies, came to her physician for her weekly allergen immune therapy that consists of two injections prepared and provided by the physician. The correct code is:",
    options: ["95144", "95117", "95146", "95125"],
    correct: "D",
    explanation:
      "95125 reports allergen immunotherapy with 2 or more injections, where the antigen is BOTH prepared and provided by the treating physician. 95144 applies when the extract is supplied in individual doses in a vial; 95146 is for insect venom (not the case here); 95117 applies if the patient brought their own extract to be injected.",
  },
  {
    question: "Photodynamic therapy involving application of light externally to destroy premalignant lesions on the lower lip was provided to a 63 year-old patient. Code the encounter.",
    options: ["96567", "96999", "96913", "96570"],
    correct: "A",
    explanation:
      "96567 specifically describes photodynamic therapy by external application of light to destroy premalignant lesions, matching this scenario exactly.",
  },
  {
    question: "In the inpatient setting, the psychiatrist provides psychotherapy for 30 minutes to affect a change in the patient's maladaptive behavior. What is the procedure code?",
    options: ["90845", "90853", "90847", "90832"],
    correct: "D",
    explanation:
      "This is individual psychotherapy (with only the patient, not family/group, and not psychoanalysis) for 30 minutes — 90832.",
  },
  {
    question: "A 42-year-old male was previously treated with external fixation of an ankle trimalleolar fracture. He is now presenting with a nonunion fracture of the trimalleolar. What is the ICD-10-CM code to report?",
    options: ["S82.53XA", "S82.853D", "S82.853S", "S82.853K"],
    correct: "D",
    explanation:
      "ICD-10-CM Alphabetic Index: Nonunion/fracture — see Fracture, by site; Fracture, traumatic/ankle/trimalleolar refers to S82.85-. Per guideline I.C.19.c.1, complications of fractures like nonunion are reported with a specific 7th character for subsequent care with nonunion (K, M, or N) — completing the code as S82.853K.",
  },
  {
    question: "Mr. Jones is here today to receive an intercostal nerve block to mitigate the debilitating pain of his malignancy. His treatment is for the cancer that has metastasized to his right lung. Select the appropriate ICD-10-CM codes.",
    options: ["C78.01, G89.3", "G89.3, C78.01", "C34.91, G89.3", "G89.3, C34.91"],
    correct: "B",
    explanation:
      "Per ICD-10-CM guideline I.C.6.b.5, pain due to neoplastic disease (G89.3) is sequenced FIRST when the encounter is for pain management. The metastatic (secondary) lung cancer is coded second, as C78.01.",
  },
  {
    question:
      "A 55-year-old female presents to the office with ongoing history of diabetes which has been controlled with insulin. During the exam the physician notes that gangrene has set in due to the diabetes on her left great toe. Patient is recommended to see a general surgeon for treatment of the gangrene on her left great toe. Select the diagnosis codes to report.",
    options: ["E11.52, Z79.4", "E10.52, Z79.2", "E10.610, Z79.4", "E11.610, Z79.2"],
    correct: "A",
    explanation:
      "Per ICD-10-CM guidelines I.C.4.a.2-3, when the diabetes type isn't documented but insulin use IS documented, Type 2 (E11.-) is assigned by default (not Type 1). ICD-10-CM Alphabetic Index: Diabetes/with/gangrene refers to E11.52. Z79.4 reports long-term insulin use.",
  },
  {
    question: "A 32-year-old delivered a baby girl one week ago via cesarean section. She is in the obstetrician's office with complaint of her cesarean wound bleeding. The wound is cleaned and a small hematoma removed. The edges are pulled with steri-strips, and a clean dressing is applied. What ICD-10-CM code should be reported?",
    options: ["L76.02", "O82", "O90.1", "O90.2"],
    correct: "D",
    explanation:
      "Per guideline I.C.15.o.2, a postpartum complication is any complication occurring within the six-week postpartum period — the patient delivered one week ago, putting her squarely in this window. A hematoma of a cesarean wound in the postpartum period is O90.2.",
  },
  {
    question:
      "A 25-year-old is brought to the burn unit being rescued from a burning house. She sustained 25% second degree burns on her anterior trunk and back and 20% third degree burns on her legs and arms. Total body surface area burned is 45%. What ICD-10-CM code is reported for the burns classified according to the extent of body surface involved?",
    options: ["T31.22", "T32.42", "T31.42", "T31.24"],
    correct: "C",
    explanation:
      "Per guideline I.C.19.d.6, add the second- and third-degree percentages together for total TBSA (25% + 20% = 45%), giving the 4th character 4 (40-49%). The 5th character reflects only the third-degree portion (20%), giving character 2 (20-29%). This is fire, not chemical corrosion (eliminating the T32 option). ICD-10-CM: Burn/extent (percentage of body surface)/40-49 percent/with 20-29 percent third degree burns refers to T31.42.",
  },
  {
    question:
      "The patient is a 75-year-old woman who is here for follow-up after an incident last week in which she had an FB lodged in her throat. An emergency esophagoscopy was performed and the piece of hamburger meat removed and biopsy performed. She is positive for Barrett's esophagus. She has GERD which is currently being treated by medication and is here today to be evaluated for photodynamic therapy. What diagnosis codes should be reported for today's visit?",
    options: ["K22.70, K21.9", "T18.12XA, K22.70", "K22.70, K21.9", "T18.12XA, K22.70, K21.9"],
    correct: "A",
    explanation:
      "The biopsy confirmed Barrett's esophagus (K22.70), typically caused by GERD (K21.9) — both are reported for today's visit. The foreign body (T18.12XA) was already resolved last week and is not reported for today's follow-up encounter.",
  },
  {
    question:
      "A 72-year-old female patient with severe osteoarthritis of the knee is receiving a hyaluronan injection (Synvisc-One) into her right knee joint to help relieve pain and improve joint function. The patient receives 48 mg of hyaluronan during the procedure. What is the appropriate HCPCS code for the administration of the hyaluronan injection?",
    options: ["J7321 x 1", "J7323 x 1", "J7325 x 48", "J7320 x 48"],
    correct: "C",
    explanation:
      "J7325 is the specific HCPCS code for Synvisc-One, described in 1 mg increments — 48 mg is reported as J7325 x 48.",
  },
  {
    question: "A 55-year-old male patient with multiple sclerosis is receiving a monthly infusion of 300 mg of natalizumab (Tysabri) as part of his treatment regimen. The infusion is administered over one hour. What is the correct HCPCS code for the administration of Natalizumab?",
    options: ["J2323 x 300", "J9035 x 30", "J0717 x 300", "J2323 x 1"],
    correct: "A",
    explanation: "J2323 is the specific code for natalizumab (Tysabri), described in 1 mg increments — 300 mg is reported as J2323 x 300.",
  },
  {
    question: "A 64-year-old male patient with iron deficiency anemia is receiving an intravenous infusion of 100 mg of ferric carboxymaltose (Injectafer). The infusion is completed in 30 minutes. What is the appropriate HCPCS code for the administration of ferric carboxymaltose?",
    options: ["J1438 x 4", "J2916 x 8", "J1439 x 100", "J1756 x 100"],
    correct: "C",
    explanation: "J1439 is the specific code for ferric carboxymaltose (Injectafer), described in 1 mg increments — 100 mg is reported as J1439 x 100.",
  },
  {
    question: "When coding for a patient who has had a primary malignancy of the thyroid cartilage that was completely excised a year ago, which one of the following statements is TRUE?",
    options: [
      "When the cancer is surgically removed with no further treatment provided and there is no evidence of any existing primary malignancy, code Z85.850.",
      "When the cancer is surgically removed but the patient is receiving chemotherapy treatment report Z85.850.",
      "Any mention of extension, invasion, or metastasis to another site is coded as a D49.1, Z85.850.",
      "When further treatment is provided and there is evidence of an existing metastasis, code first Z85.850 and then C32.9.",
    ],
    correct: "A",
    explanation:
      "Per ICD-10-CM guideline I.C.2.d, when a malignancy has been excised/eradicated with no further treatment directed to that site and no evidence of existing primary malignancy, a code from category Z85 (Personal history of malignant neoplasm) is used to indicate the site of the former malignancy — Alphabetic Index: History/personal (of)/malignant neoplasm (of)/thyroid. If further treatment (chemo/radiation) is still being given for that site, the malignant neoplasm code is reported instead, not the history code.",
  },
  {
    question: "In order to use the critical care codes, which statement is TRUE?",
    options: [
      "Time spent reviewing laboratory test results or discussing the critically ill patient's care with other medical staff in the unit or at the nursing station on the floor cannot be included in the determination of critical care time.",
      "Physician can provide services to another patient during the same time providing critical care services to a critically ill patient",
      "Critical care services can be provided in an internist's office",
      "Critical care services are never reported with endotracheal intubation (31500)",
    ],
    correct: "C",
    explanation:
      "Critical care can be provided at ANY site — location doesn't determine eligibility, the type of care does. Time spent reviewing results and discussing the patient with staff IS included in critical care time (contrary to option A). Endotracheal intubation (31500) CAN be reported separately with critical care. A physician providing critical care must devote full attention to that one patient and cannot simultaneously serve another patient (contrary to option B).",
  },
  {
    question: "Which statement regarding an ICD-10-CM coding conventions is TRUE?",
    options: [
      "Signs and symptoms that are integral to the disease process should not be assigned as additional codes, unless otherwise instructed.",
      "If the same condition is described as both acute and chronic and separate subentries exist in the Alphabetic Index at the same indentation level, code only the acute condition.",
      "An ICD-10-CM code is still valid even if it has not been coded to the full number of characters required for that code.",
      "Sequela (Late effect) codes are reported for a current acute phase of the injury or illness.",
    ],
    correct: "A",
    explanation:
      "Per ICD-10-CM Official Guideline I.B.5, signs/symptoms integral to a definitive diagnosis are not separately assigned unless otherwise instructed. When a condition is both acute and chronic with separate index subentries, guideline I.B.8 says to code BOTH (not just the acute). Sequela codes describe the residual effect AFTER the acute phase has resolved, not the current acute phase (I.B.10). A code must be reported to its full required specificity to be valid.",
  },
  {
    question: "Which modifier is appended to a CPT, for which the provider had a patient sign an Advance Beneficiary Notice (ABN) form because there is a possibility the service may be denied because the patient's diagnosis might not meet medical necessity for the covered service?",
    options: ["GJ", "GY", "GA", "GB"],
    correct: "C",
    explanation:
      "Modifier GA reports that a signed ABN (waiver of liability) is on file, informing Medicare that the patient may be billed if the service is denied.",
  },
  {
    question: "Which one of the following statements regarding advanced beneficiary notices (ABN) is TRUE?",
    options: [
      "An ABN must be obtained from a patient even in a medical emergency when the services to be provided are not covered.",
      "An ABN must be completed before delivery of items or services are provided.",
      "ABN must specify only the CPT code that Medicare is expected to deny.",
      "Generic ABN which states that a Medicare denial of payment is possible, or the internist is unaware whether Medicare will deny payment or not is acceptable.",
    ],
    correct: "B",
    explanation:
      "An ABN must be signed BEFORE the item/service is delivered. It cannot be obtained during a medical emergency (the patient must be stable), it must specifically describe the service and estimated cost (not just a bare CPT code), and generic ABNs that don't identify a specific reason for possible denial are not acceptable.",
  },
  {
    question: "Which service is covered by Medicare Part B?",
    options: ["Routine dental care", "Minor surgery performed in a physician's office", "Inpatient chemotherapy", "Assisted living facility"],
    correct: "B",
    explanation: "Physician-performed services, including minor office-based surgery, are covered under Medicare Part B. Inpatient services fall under Part A, and Medicare does not cover routine dental care.",
  },
  {
    question: "What is the patient's right when it involves making changes in the personal medical record?",
    options: [
      "It is a violation of federal health care law to revise a patient medical record.",
      "Revision of the patient medical record depends solely on the facility's compliance program policy.",
      "They should be able to obtain copies of the medical record and request corrections of errors and mistakes.",
      "Patient must work through an attorney to revise any portion of the personal medical information.",
    ],
    correct: "C",
    explanation: "Under HIPAA, patients have the right to receive a copy of their medical record and to request that errors be corrected.",
  },
  {
    question:
      "A 70-year-old female patient is scheduled for a procedure that Medicare may not cover due to its classification as a potentially non-covered service. The healthcare provider wants to ensure that they can bill the patient if Medicare denies the claim. The provider explains this to the patient and provides a standardized form to document the possibility of non-coverage, along with an estimate of the cost. What is the correct document the provider should use in this scenario?",
    options: ["Medicare Summary Notice (MSN)", "Advance Beneficiary Notice (ABN)", "Explanation of Benefits (EOB)", "Notice of Exclusion from Medicare Benefits (NEMB)"],
    correct: "B",
    explanation:
      "The ABN explains why Medicare may deny coverage and allows the provider to bill the patient if it does. NEMB is used for services never covered by Medicare (and doesn't enable patient billing the same way), MSN summarizes services already billed to Medicare, and EOB is an insurer's payment/denial statement.",
  },
  {
    question:
      "Preoperative Diagnosis: Full-thickness burns. Postoperative Diagnosis: Full-thickness burns. Procedure: Full-thickness burns excised and covered with xenograft (skin substitute graft). Indications: A 15-year-old boy was burned in a fire and assessed to have received burns to 75 percent of his total body surface area. He was transferred to a burn center for definitive treatment. Once stable, he was brought to the OR. Due to extent of the patient's burns and lack of sufficient donor sites, his full-thickness burns will be excised and covered with xenograft (skin substitute graft), and a split-thickness skin biopsy will be harvested for preparation of autologous grafts to be applied in the coming weeks, when available. Procedure Description: After induction of anesthesia, extensive debridement of the full-thickness burns was undertaken. Attention was first directed to the patient's face, neck, and scalp. A total of 500 sq cm in this area received full-thickness burns. The eschar involving this area was excised down to viable tissue. Hemostasis was achieved using electrocautery. Attention was then turned to the trunk. A total of 950 sq cm in this area received full-thickness burns. The eschar involving this area was excised down to viable tissue. Hemostasis was achieved. Attention was then turned to the arms and legs. A total of 725 sq cm received full-thickness burns. The eschar involving this area was excised down to viable tissue. Hemostasis was achieved. Attention was then turned to the hands and feet. A total of 300 sq cm in this area received full-thickness burns. The eschar involving this area was excised down to viable tissue. All involved areas were then covered with xenograft. Finally a split thickness skin graft of 0.015 inches in depth was harvested using a dermatome from a separate donor site. A total of 85 sq cm was recovered. What procedures codes are reported?",
    options: [
      "15130, 15131 x 7, 15135, 15136 x 16, 15004, 15005 x 7, 15002, 15003 x 16",
      "15277, 15278 x 7, 15273, 15274 x 16, 15004, 15005 x 7, 15002, 15003 x 16, 15040",
      "15200, 15201 x 123, 15004, 15005, 15002, 15003",
      "15275, 15276 x 31, 15271, 15272 x 66, 15004, 15005 x 16, 15002, 15003 x 7",
    ],
    correct: "B",
    explanation:
      "A xenograft is a skin substitute graft, pointing to the 15271-15278 family. Group the burned areas by anatomic region for the skin substitute codes: face/scalp/neck (500) + hands/feet (300) = 800 sq cm, coded 15277 + 15278 x7; trunk (950) + arms/legs (725) = 1675 sq cm, coded 15273 + 15274 x16. The same anatomic groupings and areas are used for the surgical site preparation (eschar excision) codes: face/scalp/neck/hands/feet = 15004 + 15005 x7; trunk/arms/legs = 15002 + 15003 x16. Code 15040 (harvest of skin for tissue-cultured autograft, ≤100 sq cm) reports the separate split-thickness skin harvest via dermatome for future autografting.",
  },
  {
    question:
      "PREOPERATIVE DIAGNOSIS: History of prior colon polyps. POSTOPERATIVE DIAGNOSIS: Colon polyps, diverticulosis, hemorrhoids. PROCEDURE: Colonoscopy. PROCEDURE DESCRIPTION: After sedation was provided by the anesthesiologist, a rectal exam was performed by the gastroenterologist and revealed small external hemorrhoids. The video colonoscope was passed without difficulty from anus to cecum. The colon was well prepped. The instrument was slowly withdrawn with good views obtained throughout. There was a 3 mm polyp in the proximal ascending colon. This polyp was removed with hot biopsy forceps and retrieved. There was a 4 mm rectal polyp located 10 cm from the anus in the proximal rectum. The polyp was removed by hot biopsy forceps. There was also moderate diverticulosis extending from the hepatic flexure to the distal sigmoid colon. What CPT coding is reported?",
    options: ["45384", "45384 x 2, 45378-59", "45388", "45385"],
    correct: "A",
    explanation:
      "Both polyps were removed by the SAME technique (hot biopsy forceps), so 45384 is reported only once, regardless of the number of polyps removed that way. A surgical colonoscopy always includes the diagnostic colonoscopy, which is not separately reported.",
  },
  {
    question:
      "Preoperative Diagnosis: Hydrocephalus. Postoperative Diagnosis: Hydrocephalus. Procedure: Replacement of shunt valve with medium pressure ventriculo-peritoneal shunt assembly with in-line 0-25 Aesculap Shunt Assistant Implant ICP Monitor. Procedure Description: After obtaining general anesthesia, patient prepped and draped. Right parietal scalp incision was reopened and shunt catheter identified. The shunt reservoir was delivered from the wound and the distal catheter freed from it. Abdominal incision reopened, shunt passer was used to bring the distal catheter from the head wound to the abdominal wound. The old ventricular catheter was removed. A new ventricular-catheter was inserted into the tract of the old catheter and fed, good flow seen. It was then attached to the shunt reservoir that was then seated after attaching a 0-25 shunt assistant valve to it. The distal catheter was then fed into the peritoneal cavity. Subcutaneous tissues were closed in multi-layer fashion and skin with staples. Patient tolerated the procedure well and taken to PICU in stable condition. What CPT codes are reported?",
    options: ["62223, 62225-51", "62258, 62160", "62230, 62225-51", "62256, 62225-51"],
    correct: "C",
    explanation:
      "The patient already has an existing shunt — this is not creation of a new shunt (eliminating 62223). This is a replacement of the valve and ventricular catheter, not a removal of the entire shunt system — 62230 (replacement or irrigation of a VP shunt, one component) plus 62225-51 (replacement or irrigation of a ventricular catheter).",
  },
  {
    question:
      "Preoperative Diagnosis: Right hydronephrosis. Postoperative Diagnosis: Right hydronephrosis. Procedure: Cystoscopy and right retrograde pyelogram. Procedure Description: Patient prepped and draped in the dorsolithotomy position. Placed under general anesthesia a 23 French cystoscope was passed into the bladder. No tumors were visualized. Urine from the bladder was sent for urine cytology. Then a 6 French access catheter was passed into the right ureteral orifice. Contrast was injected and there were no filling defects noted. There was no fixed tumor and no stone. There was mild hydroureteral nephrosis against the bladder. There was a narrowing at the UVJ no abnormalities. Renal pelvis barbotaged with saline and renal pelvis urine sent to pathology for urine cytology. After the retrograde pyelogram was performed the access catheter was removed. Interpretation and report are in the medical record. What CPT codes are reported?",
    options: ["52281-RT, 74425-26", "52007-RT, 74400-26", "52000-RT, 74420-26", "52005-RT, 74420-26"],
    correct: "D",
    explanation:
      "A catheter was passed into the right ureter to introduce contrast for retrograde pyelography — 52005 (cystourethroscopy with ureteral catheterization, exclusive of radiologic service, which is why the radiologic component is separately reported with 74420-26).",
  },
  {
    question:
      "Preoperative Diagnosis: Lower left inguinal pain. Postoperative Diagnosis: Inguinal hernia. Procedure: Laparoscopic reduction of inguinal hernia with mesh. Indications: This 30 year-old patient presented with lower left inguinal pain and on examination was found to have a left inguinal hernia. The decision to perform a left inguinal hernia repair was made. The procedure was performed in the outpatient hospital surgery center. Risks and benefits of the surgery were discussed with the patient and the patient decided to proceed with the surgery. Procedure Description: A skin incision was placed at the umbilicus where the left rectus fascia was incised anteriorly. The rectus muscle was retracted laterally. Balloon dissector was passed below the muscle and above the peritoneum. Insufflation and deinsufflation were done with the balloon removed. The structural balloon was placed in the preperitoneal space and insufflated to 10 mm Hg carbon dioxide. The other trocars were placed in the lower midline times two. The hernia sac was easily identified and was well-defined. It was dissected off the cord anteromedially. It was an indirect sac. It was taken back down and reduced into the peritoneal cavity. Mesh was then tailored and placed overlying the defect, covering the femoral, indirect, and direct spaces, tacked into place. After this was completed, there was good hemostasis. The cord, structures, and vas were left intact. The trocars were removed. The wounds were closed with 0 Vicryl for the fascia, 4-0 for the skin. Steri-Strips were applied. The patient was awakened and carried to the recovery room in good condition, having tolerated the procedure well. What are the correct procedure and diagnosis codes?",
    options: ["49652-LT, K40.20", "49651-LT, 49568, K40.90", "49650-LT, K40.90", "49650-LT, K40.20"],
    correct: "C",
    explanation:
      "This is an inguinal hernia (not a ventral/incisional hernia, eliminating 49652/49651), not documented as recurrent, incarcerated, or strangulated — 49650 (laparoscopic initial inguinal hernia repair). Mesh add-on 49568 is only reportable with open hernia repair codes 49560-49566, not with laparoscopic codes, so it's not separately coded. ICD-10-CM: Hernia/inguinal/unilateral refers to K40.90 (no bilateral hernia is documented).",
  },
  {
    question:
      "Preoperative Diagnosis: Chronic tonsillitis. Chronic adenoiditis. Postoperative Diagnosis: Same. Procedure: Tonsillectomy and adenoidectomy. Procedure Description: Patient is a 24 year-old male who was taken to the operating room and put under IV sedation by the anesthesia department. An initial curettage of adenoids was done and packing was placed. The left tonsil was then identified and dissected out extracapsular and removed with scissors. Hemostasis was maintained by packing the left tonsil. Next, the right tonsil was identified and incision was made. Dissection was done extracapsular and the right tonsil was then removed. Both the right and left tonsil were sent as specimens as well as adenoid tissue. What CPT and ICD-10-CM codes are reported?",
    options: ["42821, J35.03", "42820, J35.03", "42826, 42831-59, J35.02", "42821, 42836-59, J35.01, J35.02"],
    correct: "A",
    explanation:
      "ICD-10-CM: Adenoiditis/with tonsillitis refers to J35.03. The patient is over age 12, having BOTH a tonsillectomy and adenoidectomy — there is a single combination code for that (42821), rather than reporting two separate procedure codes.",
  },
  {
    question:
      "Postoperative Diagnosis: 1. Impingement syndrome left shoulder. 2. AC synovitis left shoulder. Procedure: Arthroscopy with subacromial decompression and AC resection left shoulder. Procedure Description: The patient was placed supine on the operating table and prepped and draped in usual sterile fashion. The scope was introduced from a posterior portal and the joint was inspected. The rotator cuff looked in good condition. The articular surfaces looked good. The bicep also was in good condition. We went subacromially and there was a fair amount of bursal inflammation encountered. We did a thorough bursectomy. A ligament chisel was used to take down the coracoacromial ligament. A high-speed bur was used to do a subacromial decompression going from lateral to medial. We took off about 2 cm of bone anteriorly. Part of the acromion is surgically corrected. Next we opened the AC joint through an anterosuperior portal. High-speed bur was used to grind off about 10 mm of distal clavicle because there was a large subchondral cyst and we wanted to get this totally ground out, which we did. Then the wounds were irrigated out, Nylon suture was placed in our portals. The patient was placed in a bulky dressing and an arm sling and sent to the recovery room in stable condition. What CPT codes are reported?",
    options: ["23120-LT, 23130-LT", "29824-LT, 29826-LT", "29827-LT, 29826-LT", "29825-LT, 29827-LT"],
    correct: "B",
    explanation:
      "This is performed arthroscopically (via scope), eliminating the open-procedure codes. \"Subacromial decompression\" with release of the coracoacromial ligament is 29826. Grinding off 10 mm of distal clavicle for a subchondral cyst (distal claviculectomy) is 29824. There's no documentation of lysis/resection of adhesions or rotator cuff repair.",
  },
  {
    question:
      "Pre-Operative Diagnosis: Right lung mass. Indications: Patient with a mass in the right lung identified on routine X-ray presents for bronchoscopy and biopsy. Procedure: Bronchoscopy with lung biopsy. Procedure Description: The patient was brought to the endoscopy suite and the mouth and throat were anesthetized. The bronchoscope was inserted and advanced through the larynx to the bronchus. The bronchoscope was introduced into the right bronchus. Using fluoroscopic guidance, the tip of the bronchoscope was maneuvered into the area of the mass. A closed biopsy forceps was passed through the channel in the bronchoscope and then through the bronchial wall. A tissue sample was obtained. There were no other abnormalities appreciated in the right side and the bronchoscope was removed. The specimen was labeled and sent to pathology for testing. The patient tolerated the procedure well. Pathology indicates that the lung mass is cancer. What are the procedure and diagnosis codes reported?",
    options: ["31628, C34.91", "31625, R22.2", "31628, 31622-51, C34.91", "31628, R22.2"],
    correct: "A",
    explanation:
      "ICD-10-CM Table of Neoplasms: Neoplasm, lung/Malignant Primary completes as C34.91 (right lung). A surgical bronchoscopy always includes a diagnostic bronchoscopy (31622), so it's not separately reported. Fluoroscopic guidance is included in 31628 (bronchoscopy with transbronchial lung biopsy) and not separately billed.",
  },
];

const FOUR_HOURS_SECONDS = 4 * 60 * 60;

function formatTime(totalSeconds: number) {
  const clamped = Math.max(0, totalSeconds);
  const h = Math.floor(clamped / 3600);
  const m = Math.floor((clamped % 3600) / 60);
  const s = clamped % 60;
  return `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export default function Exam3() {
  const [started, setStarted] = useState(false);
  const [timerEnabled, setTimerEnabled] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(FOUR_HOURS_SECONDS);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [answers, setAnswers] = useState<string[]>([]);
  const [revealed, setRevealed] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const letters = ["A", "B", "C", "D"];
  const q = questions[currentQuestion];

  useEffect(() => {
    if (!started || !timerEnabled || showResults) return;
    if (secondsLeft <= 0) {
      const finalAnswers = selectedAnswer ? [...answers, selectedAnswer] : [...answers];
      setAnswers(finalAnswers);
      setShowResults(true);
      return;
    }
    const id = setTimeout(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started, timerEnabled, showResults, secondsLeft]);

  function handleStart(withTimer: boolean) {
    setTimerEnabled(withTimer);
    setSecondsLeft(FOUR_HOURS_SECONDS);
    setStarted(true);
  }

  const handleShowAnswer = () => {
    if (!selectedAnswer) return;
    setRevealed(true);
  };

  const handleNext = () => {
    if (!selectedAnswer) return;

    const updatedAnswers = [...answers, selectedAnswer];

    if (currentQuestion < questions.length - 1) {
      setAnswers(updatedAnswers);
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
      setRevealed(false);
    } else {
      setAnswers(updatedAnswers);
      setShowResults(true);
    }
  };

  const score = answers.filter((answer, index) => answer === questions[index].correct).length;

  if (!started) {
    return (
      <main style={{ maxWidth: "900px", margin: "0 auto", padding: "40px", fontFamily: "Arial" }}>
        <div
          style={{
            background: "linear-gradient(135deg,#2563eb,#7c3aed)",
            color: "white",
            padding: "50px 40px",
            borderRadius: "20px",
            marginBottom: "30px",
            textAlign: "center",
          }}
        >
          <h1 style={{ margin: "0 0 10px" }}>🎓 CPC Final Exam 3</h1>
          <p style={{ fontSize: "18px", opacity: 0.95, margin: 0 }}>100 Questions</p>
        </div>

        <div style={{ background: "white", padding: "30px", borderRadius: "16px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", textAlign: "center" }}>
          <h2 style={{ marginTop: 0 }}>How would you like to take this exam?</h2>
          <p style={{ color: "#555", lineHeight: 1.6 }}>
            The real CPC exam gives you 4 hours. You can practice under that same time pressure, or take it untimed and focus on
            learning.
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginTop: "24px" }}>
            <button
              onClick={() => handleStart(true)}
              style={{
                padding: "16px 28px",
                background: "#2563eb",
                color: "white",
                border: "none",
                borderRadius: "12px",
                fontSize: "16px",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              ⏱ Start with 4-Hour Timer
            </button>
            <button
              onClick={() => handleStart(false)}
              style={{
                padding: "16px 28px",
                background: "#7c3aed",
                color: "white",
                border: "none",
                borderRadius: "12px",
                fontSize: "16px",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              ▶ Start Without a Timer
            </button>
          </div>
        </div>
      </main>
    );
  }

  if (showResults) {
    const percentage = Math.round((score / questions.length) * 100);

    return (
      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px", fontFamily: "Arial" }}>
        <div
          style={{
            background: "linear-gradient(135deg,#2563eb,#7c3aed)",
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
          <h2>{percentage >= 70 ? "✅ PASS" : "❌ FAIL"}</h2>
          {timerEnabled && secondsLeft <= 0 && (
            <p style={{ opacity: 0.9 }}>⏱ Time expired — the exam was submitted automatically with your answers so far.</p>
          )}
        </div>

        {questions.map((qq, index) => (
          <div
            key={index}
            style={{
              background: "white",
              padding: "25px",
              marginBottom: "20px",
              borderRadius: "16px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            }}
          >
            <h3>Question {index + 1}</h3>
            <p>{qq.question}</p>
            <p>
              <strong>Your Answer:</strong> {answers[index] ?? "Not answered"}
            </p>
            <p>
              <strong>Correct Answer:</strong> {qq.correct}
            </p>
            <p>
              {answers[index] === undefined ? "⬜ Not answered" : answers[index] === qq.correct ? "✅ Correct" : "❌ Incorrect"}
            </p>
            <div style={{ marginTop: "15px", background: "#f8fafc", padding: "15px", borderRadius: "10px" }}>
              <strong>📖 Why:</strong>
              <p>{qq.explanation}</p>
            </div>
          </div>
        ))}
      </main>
    );
  }

  return (
    <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px", fontFamily: "Arial" }}>
      <div
        style={{
          background: "linear-gradient(135deg,#2563eb,#7c3aed)",
          color: "white",
          padding: "40px",
          borderRadius: "20px",
          marginBottom: "30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <div>
          <h1 style={{ margin: 0 }}>🎓 CPC Final Exam 3</h1>
          <p style={{ margin: "6px 0 0" }}>
            Question {currentQuestion + 1} of {questions.length}
          </p>
        </div>
        {timerEnabled && (
          <div
            style={{
              background: secondsLeft <= 300 ? "#dc2626" : "rgba(255,255,255,0.15)",
              padding: "10px 18px",
              borderRadius: "10px",
              fontWeight: 800,
              fontSize: "18px",
              fontFamily: "Consolas, monospace",
            }}
          >
            ⏱ {formatTime(secondsLeft)}
          </div>
        )}
      </div>

      <div style={{ background: "white", padding: "30px", borderRadius: "16px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}>
        <h2>Question {currentQuestion + 1}</h2>
        <p>{q.question}</p>

        <div style={{ marginTop: "20px" }}>
          {q.options.map((option, index) => {
            const letter = letters[index];
            const isCorrectOption = revealed && letter === q.correct;
            const isWrongSelected = revealed && letter === selectedAnswer && letter !== q.correct;
            return (
              <label
                key={index}
                style={{
                  display: "block",
                  marginBottom: "12px",
                  padding: "8px 10px",
                  borderRadius: "8px",
                  cursor: revealed ? "default" : "pointer",
                  background: isCorrectOption ? "#dcfce7" : isWrongSelected ? "#fee2e2" : "transparent",
                }}
              >
                <input
                  type="radio"
                  name="answer"
                  value={letter}
                  checked={selectedAnswer === letter}
                  disabled={revealed}
                  onChange={() => setSelectedAnswer(letter)}
                />{" "}
                <strong>{letter}.</strong> {option}
                {isCorrectOption && " ✅"}
                {isWrongSelected && " ❌"}
              </label>
            );
          })}
        </div>

        {revealed && (
          <div style={{ marginTop: "15px", background: "#f8fafc", padding: "15px", borderRadius: "10px" }}>
            <p>
              <strong>Correct Answer:</strong> {q.correct}
            </p>
            <strong>📖 Why:</strong>
            <p>{q.explanation}</p>
          </div>
        )}

        <div style={{ marginTop: "20px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <button
            onClick={handleShowAnswer}
            disabled={!selectedAnswer || revealed}
            style={{
              padding: "12px 24px",
              background: revealed ? "#94a3b8" : "#7c3aed",
              color: "white",
              border: "none",
              borderRadius: "10px",
              cursor: !selectedAnswer || revealed ? "not-allowed" : "pointer",
            }}
          >
            See Correct Answer
          </button>

          <button
            onClick={handleNext}
            disabled={!selectedAnswer}
            style={{
              padding: "12px 24px",
              background: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "10px",
              cursor: !selectedAnswer ? "not-allowed" : "pointer",
            }}
          >
            {currentQuestion === questions.length - 1 ? "Submit Exam" : "Next Question →"}
          </button>
        </div>
      </div>
    </main>
  );
}
