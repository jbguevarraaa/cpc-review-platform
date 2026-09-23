"use client";

import React, { useState } from "react";

type Q = {
  question: string;
  options: string[];
  correct: string;
  explanation: string;
};

const questions: Q[] = [
  {
    question: "Glomerulonephritis is an inflammation affecting which system?",
    options: ["Urinary", "Nervous", "Cardiovascular", "Digestive"],
    correct: "A",
    explanation:
      "Glomerulonephritis is a form of nephritis marked by inflammation of the glomeruli of the kidney. In the ICD-10-CM Alphabetic Index look for Glomerulonephritis, referring you to code N05.9, found in Chapter 14: Diseases of the Genitourinary System.",
  },
  {
    question: "When a patient has fractured the proximal end of his humerus, where is the fracture located?",
    options: ["Lower end of the leg", "Upper end of the leg", "Upper end of the arm", "Lower end of the arm"],
    correct: "C",
    explanation:
      "The humerus extends from the shoulder to the elbow. Proximal refers to the area nearest the trunk of the body. In the ICD-10-CM Alphabetic Index, Fracture, traumatic/humerus/proximal end refers you to see Fracture, humerus, upper end.",
  },
  {
    question: "When a person has labyrinthitis what has the inflammation?",
    options: ["Brain", "Spine", "Inner ear", "Conjunctiva"],
    correct: "C",
    explanation:
      "Labyrinthitis is an inflammation of the inner ear which can cause vertigo and vomiting. In the ICD-10-CM Alphabetic Index, Labyrinthitis shows \"inner ear\" in parenthesis next to the term.",
  },
  {
    question: "Which of the following anatomical sites have septums?",
    options: ["Orbit, ovary", "Sternum, coccyx", "Kidney, lung", "Nose, heart"],
    correct: "D",
    explanation:
      "Both the heart and the nose have a septum, a wall dividing two chambers. The nasal septum separates the two nostrils; the cardiac septum divides the right and left atria and ventricles. In the CPT Index, Septum or Septal refers you to codes for the nose or heart.",
  },
  {
    question: "Lordosis is a disorder of which anatomical site?",
    options: ["Male genitalia", "Nasal sinus", "Hand", "Spine"],
    correct: "D",
    explanation:
      "Lordosis is a spinal deformity with excessive anterior curvature of the lumbar spine (\"sway back\"). ICD-10-CM Alphabetic Index: Lordosis refers to M40.50, in Chapter 13 (Diseases of the Musculoskeletal System). Category M40 codes are selected by area of the spine.",
  },
  {
    question: "What is another term for when a physician performs a reduction on a displaced fracture?",
    options: ["Skeletal traction", "Manipulation", "External fixation", "Casting"],
    correct: "B",
    explanation:
      "The CPT Musculoskeletal System guidelines define Manipulation as the attempted reduction or restoration of a fracture or joint dislocation to its normal anatomic alignment by manually applied force.",
  },
  {
    question: "What does oligospermia mean?",
    options: [
      "Formation of spermatozoa",
      "Presence of blood in the semen",
      "Having sperm in urine",
      "Deficiency of sperm in semen",
    ],
    correct: "D",
    explanation:
      "The combining form olig/o means too few or too little, and spermia refers to the condition of the sperm — too low or too few sperm. In the Alphabetic Index, Oligospermia refers to N46.11, a type of male infertility.",
  },
  {
    question: "Thoracentesis is removing fluid or air from the:",
    options: ["Lung", "Heart", "Chest cavity", "Thoracic vertebrae"],
    correct: "C",
    explanation:
      "Thorac/o refers to the chest and -centesis means puncture (insertion of a needle to add or withdraw fluid). In the CPT Index, Thoracentesis refers to codes 32554 and 32555, for removal of fluid or air from the pleural space between the ribs.",
  },
  {
    question: "An angiogram is a study to look inside:",
    options: ["Blood Vessels", "Breasts", "Urinary System", "Female Reproductive System"],
    correct: "A",
    explanation:
      "Angi/o refers to blood vessel and -gram refers to a written record. An angiogram uses contrast/dye to image inside blood vessels. In the CPT Index, Angiography refers you to Radiology section codes organized by artery.",
  },
  {
    question: "What is orchitis?",
    options: [
      "Inflammation of testis",
      "Inflammation of an ilioinguinal hernia",
      "Lacrimal infection",
      "Inner ear imbalance",
    ],
    correct: "A",
    explanation:
      "Orchitis is painful swelling of the testis, occurring without cause or as the result of infection. The Greek root \"orchis\" means testicle and \"-itis\" means inflammation. ICD-10-CM: Orchitis refers to N45.2, under Diseases of the Male Genital Organs (N40-N53).",
  },
  {
    question:
      "The patient is a 16-year-old female with pelvic pain. Her ultrasound is normal. A laparoscopy found several small cysts in the area of the fallopian tubes. These cysts are called:",
    options: ["Paratubal cysts", "Myomas", "Pilonidal cysts", "Synovial cysts"],
    correct: "A",
    explanation:
      "Paratubal cysts are benign and frequently found adjacent to the fallopian tubes. A pilonidal cyst develops in the deeper skin layers near the buttocks; myomas (leiomyomas) are benign uterine tumors; a synovial cyst develops in a joint. ICD-10-CM Alphabetic Index: Cyst/paratubal refers to N83.8.",
  },
  {
    question: "Which one of the following patients might be documented as having meconium staining?",
    options: [
      "Newborn with pneumonia",
      "Newborn delivered via elective repeat cesarean with no complications",
      "Newborn with normal Apgar scores and clear amniotic fluid",
      "Newborn born prior to 37 weeks gestation with an otherwise unremarkable delivery",
    ],
    correct: "A",
    explanation:
      "Meconium is fetal stool that can be expelled into the amniotic fluid during stress before or during birth, and can be inhaled into the fetal lung and cause pneumonia at birth. Meconium staining refers to discoloration of the amniotic fluid or of the neonate. ICD-10-CM Alphabetic Index: Stain, staining/meconium (newborn) refers to P96.83.",
  },
  {
    question:
      "Patient has basal cell carcinoma on his upper back. A map was prepared to correspond to the area of skin where the excisions of the tumor will be performed using Mohs micrographic surgery technique. There were three tissue blocks that were prepared for cryostat, sectioned, and removed in the first stage. Then a second stage had six tissue blocks which were also cut and stained for microscopic examination. The entire base and margins of the excised pieces of tissue were examined by the surgeon. No tumor was identified after the final stage of the microscopically controlled surgery. What procedure codes are reported?",
    options: ["17313, 17315", "17313, 17314, 17315", "17260, 17313, 17314", "17313, 17314, 17314"],
    correct: "B",
    explanation:
      "The back is a trunk/arms/legs site for Mohs surgery, reported with 17313 (first stage, up to 5 blocks). Add-on code 17314 reports the second stage (also up to 5 of its 6 blocks), and +17315 reports the sixth block, since it is beyond the first 5 blocks of that stage. CPT 2026 note: the Mohs guidelines confirm +17315 counts each additional block beyond the first 5, in any stage — the trigger is total blocks in that stage, not a new stage.",
  },
  {
    question:
      "A 45-year-old male is in outpatient surgery to excise a basal cell carcinoma of the right nose and have reconstruction with an advancement flap. The 1.2 cm lesion with an excised diameter of 1.5 cm was excised with a 15-blade scalpel down to the level of the subcutaneous tissue, totaling a primary defect of 1.8 cm. Electrocautery was used for hemostasis. An adjacent tissue transfer of 3 sq cm was taken from the nasolabial fold and was advanced into the primary defect. Which CPT code(s) is (are) reported?",
    options: ["15574", "11642, 14060", "14060", "11642, 15115"],
    correct: "C",
    explanation:
      "The excision of the malignant lesion is included in the adjacent tissue transfer (advancement flap) code and is not separately reported. CPT 2026's Adjacent Tissue Transfer or Rearrangement guidelines state excision of a benign (11400-11446) or malignant (11600-11646) lesion is included in codes 14000-14302 when the defect is closed by ATT. Nose falls in the forehead/cheeks/nose/etc. group, 3 sq cm defect: 14060.",
  },
  {
    question:
      "A 24-year-old patient had an abscess by her vulva which burst. She has developed a soft tissue infection caused by gas gangrene. The area was debrided of necrotic infected tissue. All of the pus was removed and irrigation was performed with a liter of saline until clear and clean. The infected area was completely drained and the wound was packed gently with sterile saline moistened gauze and pads were placed on top of this. The correct CPT code is:",
    options: ["11042", "11004", "10061", "56405"],
    correct: "B",
    explanation:
      "The abscess had already burst, so no incision was needed to open it. The debridement was performed for a soft tissue infection (necrotizing) at the external genitalia (vulva), which is specifically reported with 11004 — debridement of necrotizing soft tissue infection, external genitalia and perineum.",
  },
  {
    question:
      "The physician is called in to perform repairs for a 17 year-old girl involved in a motor vehicle accident. She sustained an 8.6 cm laceration to her forehead, a 5.5 cm laceration to her right cheek, a 4 cm laceration to her left cheek, a 4 cm laceration across her chin, and a 12.5 cm laceration to her chest. The wound on her chin required a layered closure. All other wounds required complex closure. The CPT codes to report are:",
    options: [
      "13132, 13133 x 3, 13101, 13102, 12052",
      "13132, 13133 x 3, 13133-52, 13101, 13102, 12052",
      "13132, 13133 x 4, 13101, 12052",
      "13131, 13132, 13133 x 3, 13101, 13102, 12052",
    ],
    correct: "A",
    explanation:
      "List lacerations by anatomical site and closure type. The chin (4 cm) had a layered (intermediate) closure: 12052. The remaining complex closures: forehead (8.6 cm) + right and left cheek (5.5 + 4 = 9.5 cm) total 18.1 cm, same complex group (forehead/cheeks/etc.), coded 13132 (first 7.5 cm) + 13133 x 3 (remaining 10.6 cm). The chest (12.5 cm, trunk group) is coded separately: 13101 (first 7.5cm) + 13102 (remaining 5 cm).",
  },
  {
    question:
      "A 36-year-old male presents to have multiple lesions destroyed. Three benign lesions on his face are destroyed and five actinic keratoses on his left arm are destroyed. The CPT code(s) to report is (are):",
    options: ["17000, 17003 x 4, 17110", "17110", "17000, 17003", "17260 x 5, 17110 x 3"],
    correct: "A",
    explanation:
      "Actinic keratoses (premalignant lesions) are destroyed with 17000 (first lesion) and 17003 (\"each\" additional, x4 for the remaining four). The three benign lesions are destroyed with 17110, reported once regardless of lesion count since its descriptor covers 1-14 lesions.",
  },
  {
    question:
      "The patient is a 66-year-old female who presents with Dupuytren's disease in the right palm and ring finger. This results in a contracture of the ring digit MP joint. She is having a subtotal palmar fasciectomy for Dupuytren's disease right ring digit and palm. A Brunner incision was then made beginning in the proximal palm and extending to the ring finger PIP crease. This exposed a large pretendinous cord arising from the palmar fascia extending distally over the flexor tendons of the ring finger. The fascial attachments to the flexor tendon sheath were released. At the level of the metacarpophalangeal crease, one band arose from the central pretendinous cord-one coursing toward the middle finger. The digital nerve was identified, and this diseased fascia was also excised. What procedure code(s) is (are) used?",
    options: ["26121-RT", "26035-RT", "26040-RT", "26123-RT, 26125-F7"],
    correct: "D",
    explanation:
      "The operative note documents a fasciectomy (not a fasciotomy), supported by \"the fascial attachments to the flexor tendon sheath were released\" and \"subtotal palmar fasciectomy\" — 26123-RT. The additional diseased fascia excised at the middle finger is reported with the add-on 26125-F7 (right middle finger).",
  },
  {
    question:
      "This is a 32-year-old female who presents today with sacroiliitis. On the physical exam there was pain on palpation of the left and right sacroiliac joint and fluoroscopic guidance was done for the needle positioning. Then 80 mg of Depo-Medrol and 1 mL of bupivacaine at 0.5% was injected into the left and right sacroiliac joint with a 22 gauge needle. The patient was able to walk from the exam room without difficulty. Follow up will be as needed. What CPT coding is reported?",
    options: ["27096, 27096-51, 77012", "27096-50, 77012", "20611", "27096-50"],
    correct: "D",
    explanation:
      "Fluoroscopic guidance is bundled into 27096's own descriptor and is never separately reported. There is a parenthetical note under 27096 directing modifier 50 for a bilateral (left and right) procedure.",
  },
  {
    question:
      "Patient is having ongoing back and hip pain. The physician elects to perform a sacroiliac injection at an ambulatory surgery center. After sterile prep, the patient is placed prone position. A needle is placed under fluoroscopic guidance into the SI joint and a mixture of 20 mg of Celestone and Marcaine is injected for pain relief. Report the CPT code(s).",
    options: ["20552", "20611", "27096, 77003-26", "27096"],
    correct: "D",
    explanation:
      "27096 is correct for a steroid injection into the sacroiliac joint. Fluoroscopic (or CT) guidance is included in the code — there is a parenthetical note stating 27096 is only reported WITH CT or fluoroscopic confirmation of intra-articular needle position, so 77003 is never separately reported.",
  },
  {
    question:
      "A 68-year-old female has a L5 age-related osteoporotic compression fracture and is in the outpatient facility to have vertebroplasty to restore the vertebral body. The patient is appropriately prepped and local anesthesia with light sedation is administered. A biopsy needle is guided into the fractured vertebra using x-ray guidance. Specially formulated acrylic bone cement is injected directly into the fractured vertebra, filling the spaces within the bone with the goal of creating a type of internal cast to stabilize the vertebral bone. The needle is removed and the small skin puncture is covered with a bandage. The patient is taken to the recovery room and discharged later in the same day. Select the CPT and ICD-10-CM codes for this procedure:",
    options: [
      "22511, M80.08XA",
      "22510, M80.08XA",
      "22511, 77002-26, M48.56XA",
      "22513, 77002-26, M48.56XA",
    ],
    correct: "A",
    explanation:
      "L5 is a lumbar level, so the correct percutaneous vertebroplasty code is 22511 (lumbosacral); 22510 is cervicothoracic, 22513 is vertebral augmentation. Radiological guidance is bundled into the code and never separately reported. ICD-10-CM: Osteoporosis/age-related/with current pathological fracture/vertebra refers to M80.08-, completed as M80.08XA (7 characters).",
  },
  {
    question:
      "A 35-year-old female patient presents with acute onset of severe pain since October. Her workup has revealed evidence of disk herniation with loss of lordosis at the C5-C6. Intraoperative findings were consistent with two large fragments of free disk fragments in the foramen at C5-C6 on the right side. After general anesthesia, the patient was placed on the operative table in the supine position. All pressure points were cushioned and a transverse skin incision was fashioned under fluoroscopic guidance over the C5-C6 disc space. Dissection through the platysma eventually allowed for exposure of the anterior entrance to the vertebral body of C5 and C6 and retractors were inserted to maintain adequate exposure. The operating microscope was brought into the field. Caspar posts were placed and slight distraction allowed exposure. A complete discectomy was performed at C5-C6 by using endplate curets pituitary rongeurs and Kerrison rongeurs. The posterior longitudinal ligament was resected and beneath the posterior longitudinal ligament, two significant sized disc fragments were noted in the foramen at C5-C6. These were removed using pituitary and Decker instruments. The endplates were then decorticated so that they were parallel to each other and a midline keel was performed on AP and lateral fluoroscopy. A size #1 by 5 mm interbody Kineflex-C device was placed under fluoroscopic guidance. Satisfied with the positioning of the device, the decision was made to close. What is the correct CPT code for this procedure?",
    options: ["63081", "22554", "63075", "22856"],
    correct: "D",
    explanation:
      "The keyword \"discectomy\" here is a cervical disc removal followed by insertion of an artificial cervical disc (Kineflex-C device), not a fusion (no arthrodesis documented) and not a standalone anterior cervical discectomy without arthroplasty, guiding to 22856 (total disc arthroplasty, single interspace, cervical).",
  },
  {
    question:
      "The patient is a 51-year-old gentleman who has end-stage renal disease. He was in the OR yesterday for a revision of his AV graft. The next day the patient had complications of the graft failing. The patient was back to the operating room where an open thrombectomy was performed on both sides getting good back bleeding, good inflow. Select the appropriate code for performing the procedure in a post-operative period:",
    options: ["36831-78", "36831-58", "36831", "36831-76"],
    correct: "A",
    explanation:
      "The patient returned to the OR within the postoperative period due to a complication (graft failing) — an unplanned return, so modifier 78 applies. This is not a planned staged procedure (58) or a repeat procedure by the same physician on the same day (76).",
  },
  {
    question:
      "The patient is a 77-year-old white female who has been having right temporal pain and headaches with some visual changes and has a sed rate of 51. She is scheduled for a temporal artery biopsy to rule out temporal arteritis. A Doppler probe was used to isolate the temporal artery and using a marking pen the path of the artery was drawn. Lidocaine 1% was used to infiltrate the skin, and using a 15 blade scalpel the skin was opened in the preauricular area and dissected down to the subcutaneous tissue where the temporal artery was identified in its bed. It was a medium size artery and we dissected it out for a length of approximately 4 cm with some branches. The ends were ligated with 4-0 Vicryl, and the artery was removed from its bed and sent to Pathology as specimen. What CPT code is reported?",
    options: ["37609", "37799", "36625", "37605"],
    correct: "A",
    explanation: "The key term is \"temporal artery biopsy,\" found specifically in the descriptor for CPT 37609.",
  },
  {
    question:
      "A 50-year-old female has recurrent lymphoma in the axilla. Ultrasound was used to localize the lymph node in question for needle guidance. An 11 blade scalpel was used to perform a small dermatotomy. An 18 x 10 cm Biopence needle was advanced through the dermatotomy to the periphery of the lymph node. A total of 4 biopsy specimens were obtained. Two specimens were placed an RPMI and 2 were placed in formalin and sent to laboratory. The correct CPT code(s) is (are):",
    options: ["38505, 76942-26", "10005", "38500, 77002-26", "38525, 76942-26"],
    correct: "A",
    explanation:
      "A needle biopsy (not aspiration or an open excisional biopsy) is being performed, coded 38505. The parenthetical note under 38505 directs reporting imaging guidance, when performed, with 76942, 77012, or 77021 — here, ultrasound guidance is 76942.",
  },
  {
    question:
      "The patient comes in today to have an arteriovenous fistula created to facilitate dialysis. The surgeon performs an upper arm basilic vein transposition based on the patient's previous arterial duplex scan. Which is the appropriate CPT code for this procedure?",
    options: ["36830", "36825", "36818", "36819"],
    correct: "D",
    explanation:
      "This is specifically a basilic vein transposition; the location of the transposition (upper arm) picks between the remaining choices, correctly directing to 36819.",
  },
  {
    question:
      "A 56-year-old with lung cancer developed an effusion that is suspicious for malignancy. Needle aspiration is performed to obtain a sample of the fluid for pathological examination. A needle is inserted between the ribs and into the pleural space, and the fluid is withdrawn. The specimen is sent to pathology. Choose the CPT code that reports the procedure described.",
    options: ["32554", "32555", "32551", "32400"],
    correct: "A",
    explanation:
      "A needle puncture to withdraw fluid from the pleural cavity is a thoracentesis, 32554. There is no biopsy of the pleura (eliminating 32400), no tube connected to a water seal (eliminating 32551), and no imaging guidance documented (eliminating 32555).",
  },
  {
    question:
      "The physician performs a selective catheterization of the right renal artery and renal angiography. The puncture site was the right femoral artery. Which CPT coding is reported?",
    options: ["36251-RT", "36251-RT, 36200-51, 75625-26", "36215-RT, 36200-51, 75625-26", "36245-RT"],
    correct: "A",
    explanation:
      "36251 is a bundled code that already includes catheter access (36200), contrast injections, and imaging for selective first-order renal artery catheterization with angiography — so it is the only code reported, with RT for the right side.",
  },
  {
    question:
      "Patient is going into the OR for an appendectomy with a ruptured appendicitis. Right lower quadrant transverse incision was made upon entry to the abdomen. In the right lower quadrant there was a large amount of pus consistent with a right lower quadrant abscess. Intraoperative cultures anaerobic and aerobic were taken and sent to microbiology for evaluation. Irrigation of the pus was performed until clear. The base of the appendix right at the margin of the cecum was perforated. The mesoappendix was taken down and tied using 0-Vicryl ties and the appendix fell off completely since it was already ruptured with tissue paper thin membrane at the base. There was no appendiceal stump to close or to tie, just an opening into the cecum; therefore, the appendiceal opening area into the cecum was tied twice using figure of 8 Vicryl sutures. Omentum flap was tacked over this area and anchored in place using interrupted 3-0 Vicryl sutures to secure the repair. What CPT and ICD-10-CM codes are reported?",
    options: [
      "44950, K35.890",
      "44950, 49905-51, K35.20",
      "44960, 49905, K35.33",
      "44970, K37",
    ],
    correct: "C",
    explanation:
      "The appendectomy was open (not laparoscopic, eliminating D), performed for a ruptured appendix WITH abscess, coded 44960. 49905 (omental flap) is an add-on code, so modifier 51 is not applied. ICD-10-CM: Appendicitis/with peritoneal abscess refers to K35.33.",
  },
  {
    question:
      "A 15 year-old female is to have a tonsillectomy performed for chronic tonsillitis and hypertrophied tonsils. A McIver mouth gag was put in place and the tongue was depressed. The nasopharynx was digitalized. No significant adenoid tissue was felt. The tonsils were then removed bilaterally by dissection. The uvula was a huge size because of edema, a part of this was removed and the raw surface oversewn with 3-0 chromic catgut. Which CPT code(s) is (are) reported?",
    options: ["42842", "42821", "42826, 42106-51", "42825, 42104-51"],
    correct: "C",
    explanation:
      "Code selection is based on patient age (15, so the age-12-or-over tonsillectomy code applies, not the under-12 codes) and what tissue was excised (tonsils only, plus partial uvulectomy) — 42826 (tonsillectomy age 12+) with 42106-51 (partial uvulectomy).",
  },
  {
    question:
      "A 34-year-old male developed a 3-cm ventral hernia when lifting a 60 pound bag. The patient is in surgery for a ventral herniorrhaphy. The abdomen was entered through a short midline incision revealing the fascial defect. The hernia sac and contents were able to easily be reduced and a large plug of mesh was placed into the fascial defect. The edge of the mesh plug was sutured to the fascia. What procedure code(s) is (are) reported?",
    options: ["49594, 49623", "49593", "49615", "49593, 49623"],
    correct: "B",
    explanation:
      "A ventral hernia is an anterior abdominal hernia. The 3 cm defect was easily reduced (reducible, not incarcerated/strangulated), making 49593 (initial repair, anterior abdominal hernia, reducible) correct. Mesh placement is included in this code and not separately reported.",
  },
  {
    question:
      "A 53-year-old woman with ascites consented to a procedure to withdraw fluid from the abdominal cavity. Ultrasonic guidance was used for guiding the needle placement for the aspiration. What CPT coding is reported?",
    options: ["49082, 77002-26", "49083", "49180, 76942-26", "49180, 76998-26"],
    correct: "B",
    explanation:
      "This is an abdominal paracentesis. The needle placement was guided by ultrasound (imaging guidance), which is bundled into 49083's own descriptor — a parenthetical note under 49083 explicitly states not to report it with 76942, 77002, 77012, or 77021.",
  },
  {
    question:
      "A 67-year-old male patient is referred for a flex sigmoidoscopy exam to remove polyps. The physician found three polyps in the rectosigmoid junction. They were removed by hot biopsy forceps. The path report indicated the polyps were benign. What is the CPT code to report for this encounter?",
    options: ["45384", "45333", "45346", "45315"],
    correct: "B",
    explanation:
      "This is a flexible sigmoidoscopy (eliminating the colonoscopy codes), and the polyps were removed with hot biopsy forceps, correctly coded 45333. All three polyps removed by the same technique are reported once, not per polyp.",
  },
  {
    question:
      "A patient with rectal bleeding underwent a proctosigmoidoscopy that showed she had two internal hemorrhoids. The anus was prepped and draped. A field block with Marcaine 0.25% was then placed. There was an internal prolapsing hemorrhoid in the anterior midline. This was rubber band ligated by applying two bands. In the posterior midline, there was another internal hemorrhoid that was banded in the same manner. Code the procedure.",
    options: ["46930", "46945", "46948", "46221"],
    correct: "D",
    explanation:
      "Internal hemorrhoids were treated with rubber band ligation (not thermal destruction, eliminating 46930; not ultrasound-guided hemorrhoidal artery ligation, eliminating 46948), correctly coded 46221 — reported once regardless of the number of bands or hemorrhoids ligated in the same session.",
  },
  {
    question:
      "A 25-year-old female in the OR for ectopic pregnancy. Once the trocars were place a pneumoperitoneum was created and the laparoscope introduced. The left fallopian tube was dilated and was bleeding. The left ovary was normal. The uterus was of normal size, shape and contour. The right ovary and tube were normal. Due to the patient's body habitus the adnexa could not be visualized to start the surgery. At this point the laparoscopic approach was terminated. The pneumoperitoneum was deflated, and trocar sites were sutured closed. The trocars and laparoscopic instruments had been removed. Open surgery was performed incising a previous transverse scar from a cesarean section. The gestation site was bleeding and all products of conception and clots were removed. The left tube was grasped, clamped and removed in its entirety and passed off to pathology. What CPT code(s) is (are) reported for this procedure?",
    options: ["59151", "59150, 59120", "59120", "59121"],
    correct: "C",
    explanation:
      "The laparoscopic approach failed due to the patient's body habitus and was converted to an open salpingectomy for the tubal ectopic pregnancy. Per NCCI guidance, when a laparoscopic procedure fails and converts to open, only the successful open procedure (59120) is reported.",
  },
  {
    question:
      "A 23-year-old who is pregnant at 39-weeks and 3 days is presenting for a low transverse cesarean section. An abdominal incision is made and was extended superiorly and inferiorly with good visualization of the bladder. The bladder blade was then inserted and the lower uterine segment incised in a transverse fashion with the scalpel. The bladder blade was removed and the infant's head delivered atraumatically. The nose and mouth were suctioned with the bulb suction trap and the cord doubly clamped and cut. The placenta was then removed manually. What CPT and ICD-10-CM codes are reported for this procedure?",
    options: [
      "59514, O82, Z37.0, Z3A.39",
      "59610, O34.211, Z37.0, Z3A.39",
      "59510, O64.1XX0, Z37.0, Z3A.39",
      "59515, O82, Z37.0, Z3A.39",
    ],
    correct: "A",
    explanation:
      "With no documentation of antepartum or postpartum care history, only the delivery-only code applies: 59514 (cesarean delivery only). ICD-10-CM: Delivery/cesarean/without indication refers to O82; Outcome of delivery/single/liveborn refers to Z37.0; Pregnancy/weeks of gestation/39 weeks refers to Z3A.39.",
  },
  {
    question:
      "A 55-year-old female has a symptomatic rectocele. She had been admitted and taken to the main OR. An incision is made in the vagina into the perineal body (central tendon of the perineum). Dissection was carried underneath posterior vaginal epithelium all the way over to the rectocele. Fascial tissue was brought together with sutures creating a bridge and the rectocele had been reduced with good support between the vagina and rectum. What procedure code should be reported?",
    options: ["57240", "57284", "45560", "57250"],
    correct: "D",
    explanation:
      "This is a repair of a rectocele (not a cystocele, eliminating options describing cystocele repair) performed via a posterior colporrhaphy approach, coded 57250.",
  },
  {
    question:
      "A neonatal male had an elective circumcision before being discharged home from the newborn nursery. The physician uses a ring block for the local anesthetic and the foreskin is placed over the glans. A clamp is selected for the size of the glans and a constricting circular ring is placed over the foreskin to compress and devascularize the foreskin. The devascularized foreskin is excised with a scalpel and the clamp is left in place. Which CPT code should be used?",
    options: ["54160", "54150", "54161", "54150-52"],
    correct: "B",
    explanation:
      "Circumcision using a clamp or device with a ring block for anesthesia is coded 54150 (not 54160/54161, which apply when no clamp or device is used). A parenthetical note under 54150 states modifier 52 is used only when the circumcision is performed WITHOUT a dorsal penile or ring block — here a ring block was used, so no modifier is needed.",
  },
  {
    question:
      "A 30-year-old disabled Medicare patient is scheduled for surgery due to the discovery of what looks like an ovarian mass on the right ovary. On entering the abdomen, the surgeon finds an enlarged ovarian cyst on the right, but the ovary is otherwise normal. The left ovary is necrotic looking. The decision is made, based on the patient's age, to remove the cyst from the right ovary and to remove the entire left ovary and fallopian tube. Code this encounter.",
    options: ["58925-50, 58720-50-59", "58920-50, 58700-50-59", "58920, 58940-51", "58925, 58720-59"],
    correct: "D",
    explanation:
      "Two different procedures were performed on two different ovaries: cystectomy of the right ovary (58925) and salpingo-oophorectomy of the left (58720). Modifier 50 is not used because \"unilateral or bilateral\" is already built into each code's own descriptor. Modifier 59 is appended to 58720 because it is a designated \"separate procedure\" code.",
  },
  {
    question:
      "The patient is a 25-year-old G2P1 female at 13-weeks with a molar pregnancy. She has had irregular bleeding for one week. Ultrasound was performed yesterday and the physician confirms a 16-week size uterus with hydatidiform molar pregnancy. She is admitted today for an evacuation and curettage. What are the CPT and ICD-10-CM codes?",
    options: ["59870, O01.9", "57505, O02.0", "59812, O02.89", "59160, O01.9"],
    correct: "A",
    explanation:
      "Evacuation and curettage for a hydatidiform mole is specifically coded 59870. ICD-10-CM Alphabetic Index: Hydatidiform mole refers to O01.9.",
  },
  {
    question:
      "A 55-year-old man with complaints of an elevated PSA of 6.5 presents to the outpatient surgical facility for prostate biopsies. The patient is placed in the lateral position. Some calcifications were found in the right lobe, with no obvious hypoechogenic abnormality. The base of the prostate was infiltrated and random needle biopsies were performed under ultrasonic guidance by the physician. His interpretation was reported in the record. What is (are) the CPT code(s)?",
    options: ["55705, 76942-26", "55706", "10005", "55700, 76942-26"],
    correct: "D",
    explanation:
      "Only random needle biopsies were performed without a template/mapping grid through a transperineal route (which would be 55706), so 55700 is correct. A parenthetical note under 55700 directs reporting imaging guidance with 76942 when ultrasonic guidance is used; modifier 26 reports the professional component in an outpatient facility.",
  },
  {
    question:
      "A craniectomy is being performed on a patient who has Chiari malformation. Once the posterior inferior scalp was removed a C-1 and a partial C-2 laminectomy was then performed. The right cerebellar tonsil was dissected free of the dorsal medulla and a gush of cerebrospinal fluid gave good decompression of the posterior fossa content. Which CPT code is reported?",
    options: ["61458", "61343", "61322", "61345"],
    correct: "B",
    explanation:
      "The keywords cervical (C-1/C-2) laminectomy, medulla, and Chiari malformation together point specifically to the descriptor for CPT 61343.",
  },
  {
    question:
      "Under fluoroscopic guidance an injection of a combination of steroid and analgesic agent is performed on T2-T3, T4-T5, T6-T7 and T8-T9 on the left side into the paravertebral facet joints. The procedure was performed for pain due to thoracic root lesions. What are the procedure codes?",
    options: ["64490, 64491, 64492 x 2", "64520 x 4, 77003", "64490, 64491, 64492", "64479, 64480 x 3, 77003"],
    correct: "C",
    explanation:
      "Paravertebral facet joint injection codes are selected by spinal region and number of levels: 64490 (thoracic, first level), 64491 (second level), 64492 (third and any additional levels — a parenthetical note states not to report 64492 more than once per day, regardless of how many levels beyond the second are injected). Fluoroscopic guidance is bundled in, so 77003 is not separately reported.",
  },
  {
    question:
      "An entropion repair is performed on the left lower eyelid in which undermining was performed with scissors of the inferior lid and inferior temporal region. Deep sutures were used to separate the eyelid margin outwardly along with stripping the lateral tarsus to provide firm approximation of the lower lid to the globe. The correct CPT code is:",
    options: ["67924-E2", "67914-E4", "67921-E2", "67917-E1"],
    correct: "A",
    explanation:
      "This is an entropion repair (not ectropion) of the left lower eyelid — modifier E2. A tarsal strip procedure was performed, indicating the extensive repair code, 67924.",
  },
  {
    question: "An injection is performed to anesthetize a nerve located between two ribs to block chest wall pain. Which CPT nerve injection code is reported?",
    options: ["64420", "64421", "64417", "64415"],
    correct: "A",
    explanation:
      "\"Intercostal\" (inter- = between, costal = pertaining to rib) nerve injection codes are 64420 (single level) and 64421 (multiple levels). A single injection is documented here, so 64420 is correct.",
  },
  {
    question:
      "A 65-year-old patient presented with ectropion of the right lower eyelid. Repair with tarsal wedge excision is performed for correction. Attention was then directed to the left eye. The patient also had an ectropion of the left lower lid, which was repaired by suture. Which CPT code(s) is (are) reported?",
    options: ["67916-E4, 67914-E2", "67916-50", "67914-50", "67923-E4, 67921-E2"],
    correct: "A",
    explanation:
      "This is ectropion repair (eliminating options describing entropion). The right lower lid had a tarsal wedge excision, coded 67916-E4. The left lower lid had a suture repair, coded 67914-E2. Because a DIFFERENT procedure was performed on each eyelid, modifier 50 (same procedure, bilateral) does not apply.",
  },
  {
    question:
      "A 42-year-old patient was in the hospital three days ago in which a lumbar puncture was performed to find the etiology of the patient's headaches. Today he is in the neurology clinic because after having the lumbar puncture the headaches have increased in intensity over the past three days. The neurologist examines the patient and finds a CSF leak from the lumbar puncture. A blood patch is performed by epidural injection to repair the leak. Code the CPT code(s) for today's visit.",
    options: ["62270, 62282", "62270, 62273", "62273", "62272"],
    correct: "C",
    explanation:
      "\"Blood patch\" and \"injection\" point to 62273, where the patient's own blood is injected to seal the CSF leak. This is the only code reported today — the lumbar puncture itself was performed three days earlier at a separate encounter.",
  },
  {
    question:
      "A 63-year-old woman presented to the eye clinic as with symptoms of flashing lights and floaters in the right eye for two days. The ophthalmologist dilates her eyes and checking her with an indirect ophthalmoscope, revealing peripheral retinal break. The physician explains to the patient that there is a high likelihood of retinal detachment. The patient agrees to have the procedure done. The physician lasers the retinal tear and tells the patient to come back in 24 hours for follow-up. The appropriate CPT code for this visit is:",
    options: ["67220", "67145", "67210", "67141"],
    correct: "B",
    explanation:
      "The retinal break was sealed with laser light (photocoagulation), correctly coded 67145 (prophylactic treatment of retinal break/lesion without drainage, one or more sessions).",
  },
  {
    question:
      "CC: Follow up on Atrial Fibrillation. History: A 62-year-old is here today to follow-up on her atrial fibrillation. She is a patient of my partner Dr. J, but he is out of the office today. She had no new problems. No chest pressure, fluttering or shortness of breath. Physical Exam Constitutional: BP 125/85 T 98.6F PR 72. Chest: Clear. Cardiac: Normal sinus rhythm. Assessment: F/U on atrial fibrillation. Plan: Continue with meds prescribed by Dr. J. Follow-up in the next 3 months. What E/M code is reported for this service?",
    options: ["99203", "99213", "99212", "99202"],
    correct: "B",
    explanation:
      "Because the patient was seen by another physician of the same specialty/subspecialty in the same group practice within the past 3 years, this is an established patient visit (eliminating the new patient codes). MDM: 1 stable chronic illness (low), no data reviewed (none), prescription drug management continued (moderate risk). Two of three elements at low level are met, giving an overall low MDM level — 99213.",
  },
  {
    question:
      "CC: Osteoarthritis flare ups in both knees. History: Patient is here today with continued pain in both knees due osteoarthritis. The left knee bothers her a more that her right knee. She has been having this issue for over a year. She is requesting a steroid injection. She uses one over-the-counter ibuprofen daily. No weakness or numbness. Exam: Weight is 167 Lbs. Blood pressure is 118/60 Pulse is 72 beats/min. There is some pain but not in distress. There is crepitus at the knees with some tenderness with flexion and extension of the knees which is mildly noted today. No effusion is clearly noted. No warmth of the knees noted. There are some flexion contractures of the fingers as noted before. Elbow flexion contracture noted on the left side. Assessment: As above with what appears to be continued progression of primary osteoarthritis of the knees. Prescription of Celebrex given. Note given for work today as well. What is the overall E/M for this office visit?",
    options: ["99215", "99212", "99214", "99213"],
    correct: "C",
    explanation:
      "MDM: 1 or more chronic illnesses with exacerbation/progression (moderate), no data reviewed (none), prescription drug management (moderate risk). Two of three elements at moderate level are met, giving an overall moderate MDM level — 99214.",
  },
  {
    question:
      "A 2-year-old is brought to the ER by EMS for near drowning. EMS had gotten a pulse. The ER physician performs endotracheal intubation, blood gas, and a central venous catheter placement. The ER physician documents a total time of 30 minutes on this critical infant in which the physician already subtracted the time for the other billable services. Select the E/M service and procedures to report for the ER physician?",
    options: [
      "99285-25, 36556, 31500, 82803",
      "99291-25, 36556, 31500, 82803",
      "99475-25, 36556",
      "99291-25, 36555, 31500",
    ],
    correct: "D",
    explanation:
      "To report critical care in an outpatient setting like the ED for neonates and pediatric patients of any age, use 99291/99292. The physician spent a total of 30 minutes on this critical patient, which is reported as one unit of 99291. Blood gas (82803) is a lab service not separately reported with critical care. Central venous catheter placement in a patient under 5 years old (not via saphenous vein) is 36555 (not 36556). Modifier 25 identifies the critical care E/M as separately identifiable from the billable procedures performed the same day.",
  },
  {
    question:
      "The patient is a 35-year-old male who presents to the emergency department (ED) after several hours of low back pain, nausea, and chills. The ED physician takes a detailed history and performs a comprehensive examination. A urinalysis lab and CT of the abdomen is ordered. The results of the CT show two small kidney stones. The ED physician discusses the results with the patient and tells him the stones are small and will pass on their own. Medical decision making (MDM) of moderate complexity is made with the patient being discharged, with a prescription of pain medication, and with a diagnosis of kidney stones. Select the E/M code and diagnosis codes.",
    options: ["99285, N20.0, M54.5, R11.2, R68.83", "99284, N20.0", "99284, M54.5, R11.2, R68.83, N20.0", "99283, N20.0"],
    correct: "B",
    explanation:
      "All three ED key components must be met or exceeded — the lowest documented is a detailed history and moderate MDM, capping the level at 99284. Diagnosis is kidney stones, N20.0. Per ICD-10-CM guideline I.B.5, signs/symptoms routinely associated with a diagnosed condition (back pain, nausea, chills) are not separately coded.",
  },
  {
    question:
      "A 63-year-old man wants a second opinion for his sleep apnea. He decides to go to Dr. S, who his neighbor referred him, to see if Dr. S can provide another type of treatment. Dr. S documents a detailed history. He has had it for the past five months. Sleep is disrupted by frequent awakenings and getting worse due to anxiety and snoring. Current medication that he is on now is not helping him. Physician also performs a comprehensive exam and moderate MDM. Which E/M category is reported for this encounter?",
    options: ["New Patient Office Visit (99202-99205)", "Office Consultation (99241-99245)", "Observation Care (99218-99220)", "Established Patient Office Visit (99211-99215)"],
    correct: "A",
    explanation:
      "This is a self-referral (a patient/family-initiated request for a second opinion), not a physician-requested consultation. CPT guidelines state that when a \"consultation\" is requested by the patient and not by another physician, an office/outpatient visit code is used instead. This is also the doctor's first time seeing this patient.",
  },
  {
    question:
      "A 55-year-old established patient is coming in for a pre-op visit; he is getting a liver transplant due to cirrhosis. The physician performs an appropriate history and examination. A moderate medical decision making is performed. Patient agrees with his physician's recommendations and the transplantation will take place as scheduled. The patient expresses a number of concerns and questions for the prospective liver transplant. Physician documents in spending a total time of 60 minutes with the patient that includes answering questions and addressing his concerns regarding the surgery and discussing possible outcomes. What CPT codes should be reported?",
    options: ["99214, 99356", "99214, 99417", "99215, 99417", "99215, 99356"],
    correct: "C",
    explanation:
      "A total time of 60 minutes for an established patient office visit supports the highest level, 99215. The office/outpatient-specific prolonged services add-on, 99417, is used (per its own parenthetical note, only reportable with 99205 and 99215) — codes 99356/99358 are not reported with 99215.",
  },
  {
    question:
      "A very large lipoma is removed from the chest measuring 8 sq cm and the defect is 12.2 cm requiring a layered closure with extensive undermining. MAC is performed by a medically directed Certified Registered Nurse Anesthetist (CRNA). Code the anesthesia service.",
    options: ["00400-QX-QS", "00300-QS", "00300-QX-QS", "00400-QS"],
    correct: "A",
    explanation:
      "The anesthesia code for an integumentary procedure on the anterior trunk is 00400. HCPCS modifier QX reports that a medically directed CRNA provided the service, and QS identifies the type of anesthesia as monitored anesthesia care (MAC).",
  },
  {
    question:
      "A 56-year-old receives general anesthesia for an open pleura biopsy. An anesthesiologist medically directs two other cases, and medically directs a CRNA on this case. What are the anesthesia codes and modifiers reported for the anesthesiologist and CRNA?",
    options: ["00541-QK, 00541-QX", "00540-QK, 00540-QX", "00541-AA, 00540-QZ", "00540-AA, 00540-QZ"],
    correct: "B",
    explanation:
      "There is no indication of one-lung ventilation, so the base anesthesia code is 00540 (not 00541). The anesthesiologist reports modifier QK (medical direction of 2-4 concurrent procedures), and the CRNA reports modifier QX (medically directed service).",
  },
  {
    question:
      "A patient is given general anesthesia by the anesthesiologist for a carpal tunnel nerve release. After the surgery the anesthesiologist is called to perform an axillary block for postoperative pain management on the same patient. What are the appropriate CPT codes?",
    options: ["01829-AA, 64417-59", "01830-AA, 64417-59", "01810-AA, 64417-59", "01840-AA, 64417-59"],
    correct: "C",
    explanation:
      "Carpal tunnel release is a wrist procedure, reported with anesthesia code 01810-AA (AA identifies personal performance by the anesthesiologist). The postoperative axillary nerve block for pain management is a separate service from the mode of anesthesia and is reported with 64417-59.",
  },
  {
    question:
      "A healthy 45-year-old is having a needle thyroid biopsy. The anesthesiologist begins to prepare the patient for surgery at 09:00 am. The surgery begins at 09:15 am and ends at 09:45 am. The anesthesiologist turns over the patient's care to the recovery room nurse at 10:00 am. Which is the appropriate anesthesia code and what is the anesthesia time?",
    options: ["00320, 45 minutes", "00322, One hour", "00320, One hour", "00322, 45 minutes"],
    correct: "B",
    explanation:
      "A thyroid needle biopsy is reported with 00322. Per the CPT Anesthesia Guidelines, anesthesia time starts when the anesthesiologist begins preparing the patient (09:00 am) and ends when they are no longer in personal attendance (10:00 am) — one hour total. Surgical start/stop times are not used for anesthesia time.",
  },
  {
    question:
      "A CT density study is performed on a post-menopausal female to screen for osteoporosis. Today's visit the bone density study will be performed on the spine. Which CPT code is reported?",
    options: ["77080", "77075", "72081", "77078"],
    correct: "D",
    explanation:
      "This is a bone density/mass study of the spine performed by CT, which is specifically 77078 (computed tomography bone mineral density study, one or more sites, axial skeleton).",
  },
  {
    question:
      "The patient is 15-weeks pregnant with twins coming back to her obstetrician to have a transabdominal ultrasound performed to reassess anatomic abnormalities of both fetuses that were previously demonstrated in the last ultrasound. What ultrasound code(s) is (are) reported?",
    options: ["76816, 76816-59", "76815", "76801, 76802", "76805, 76810"],
    correct: "A",
    explanation:
      "This is a follow-up ultrasound reassessing previously documented fetal abnormalities. A parenthetical note under 76816 directs reporting the code with modifier 59 for each additional fetus — since there are twins, 76816 is reported twice.",
  },
  {
    question:
      "A patient is undergoing an aortogram in which the left femoral artery was cannulated with a catheter advanced into the infrarenal abdominal aorta. Contrast medium was injected, and films were taken by serialography. What CPT codes are reported for the professional component?",
    options: ["36200, 75625-26", "36200, 75635-26, 75716-26", "36200, 75630-26", "36200, 75605-26"],
    correct: "A",
    explanation:
      "Catheter introduction into the aorta is reported with 36200. The abdominal aortogram is reported with 75625 (75630 is a runoff study of the iliofemorals; 75605 is thoracic aorta; 75635 is CT angiography, not performed here). Modifier 26 reports the professional component only.",
  },
  {
    question:
      "A 32-year-old pregnant female has gestational diabetes at 34 weeks gestation. Her doctor is concerned about decreased fetal movement. The patient is sent to the radiology department of the hospital for a biophysical profile (BPP). The radiologist performs and interprets four elements scored by the ultrasound and it was reassuring, 8/8. A non-stress test will be performed by the obstetrician at the patient's next office visit, not the radiologist. What is the correct CPT code for the fetal profile performed by the radiologist?",
    options: ["76820", "76815", "76819", "76818"],
    correct: "C",
    explanation:
      "A full biophysical profile has 5 components — 4 ultrasound evaluations and 1 non-stress test (which requires a fetal monitor and is not performed in radiology). Since only the 4 ultrasound-based elements were performed and scored by the radiologist, 76819 (BPP without non-stress testing) is correct.",
  },
  {
    question:
      "A patient with colon cancer receives five sessions of radiation treatments. During the course of treatments, the physician views the port films, reviews the treatment parameters, and assesses the patient's response to the treatment. The patient receives two more treatment sessions when ending the course of treatment. What is the CPT coding for the radiation treatment management?",
    options: ["77427", "77427", "77427, 77431", "77427 x 7"],
    correct: "A",
    explanation:
      "The patient received seven total radiation fractions. Radiation treatment management is reported once for every five sessions/fractions. Per the coding guidelines for this section, one or two fractions beyond a multiple of five at the end of a course of treatment are not reported separately — so all seven sessions are reported with a single unit of 77427.",
  },
  {
    question:
      "Cells were taken from amniotic fluid for analyzation of the chromosomes for possible Down's syndrome. The geneticist performs the analysis with two G-banded karyotypes analyzing 30 cells. Select the lab code(s) for reporting this service.",
    options: ["88262, 88285", "88273, 88280, 88291", "88267, 88280, 88285", "88248"],
    correct: "C",
    explanation:
      "The sample source is amniotic fluid, which points to 88267 (chromosome analysis, amniotic fluid, one karyotype, 15 cells). Add-on 88280 reports the additional (second) karyotype, and add-on 88285 reports the additional 15 cells (bringing the total to 30 cells studied).",
  },
  {
    question:
      "Sperm is being prepared through a washing method to get it ready for the insemination of five oocytes for fertilization by directly injecting the sperm into each oocyte. Choose the CPT codes to report this service.",
    options: ["89260, 89268", "89260, 89280", "89261, 89280", "89257, 89280"],
    correct: "B",
    explanation:
      "Sperm washing separates sperm from semen and removes dead/slow-moving sperm and chemicals that could impair fertilization — 89260. The number of oocytes fertilized (5, less than 10) by direct injection into each is reported with 89280.",
  },
  {
    question:
      "A pathologist performs a comprehensive consultation and report after reviewing a patient's records and specimens from another facility. The correct CPT code to report this service is:",
    options: ["99244", "88329", "88325", "88323"],
    correct: "C",
    explanation:
      "A comprehensive consultation involving review of records and specimens from a different facility is 88325. 99244 is a physician E/M consultation (requires patient evaluation), 88323 is for referred material requiring slide preparation, and 88329 is for a consultation performed intraoperatively.",
  },
  {
    question:
      "A surgical specimen was removed from the proximal jejunum during a resection for adenocarcinoma and was submitted to surgical pathology for gross and microscopic examination. The correct CPT code for this service is:",
    options: ["88309", "88305", "88307", "88304"],
    correct: "A",
    explanation:
      "The specimen is from the small intestine (jejunum) and was removed during a resection for a malignant tumor — 88309 (Level VI) is the only surgical pathology code that specifically covers small intestine resection for tumor.",
  },
  {
    question:
      "The physician performs the following tests on her automated equipment: HDL, total serum cholesterol, triglycerides, and a quantitative glucose. The correct CPT codes for these lab tests are:",
    options: ["83718, 82465, 84478, 82947", "83721, 82465, 82951", "80061, 82947", "80061, 82950"],
    correct: "C",
    explanation:
      "HDL, total cholesterol, and triglycerides together make up the lipid panel, 80061. Quantitative glucose (82947) is not one of the three tests included in the panel, so it is reported separately alongside 80061.",
  },
  {
    question: "A patient with a manic depressive disorder is being treated with lithium. The physician orders a therapeutic drug test to measure the level of lithium. What is the correct CPT code?",
    options: ["80299", "80178", "80306", "80375"],
    correct: "B",
    explanation:
      "This is a therapeutic drug monitoring test to measure a specific drug level, and 80178 is the specific therapeutic drug assay code for lithium.",
  },
  {
    question:
      "Patient with hemiparesis on the dominant side due to having a CVA lives at home alone and has a therapist at his home site to evaluate meal preparation for self-care. The therapist observes the patient's functional level of performing kitchen management activities within safe limits. The therapist then teaches meal preparation using one handed techniques along with adaptive equipment to handle different kitchen appliances. The total time spent on this visit was 45 minutes. Report the CPT and ICD-10-CM codes for this encounter.",
    options: ["97530 x 3, I67.89, G81.91", "97535 x 3, G81.90, I69.959", "97530 x 3, I69.959, I67.89", "97535 x 3, I69.959"],
    correct: "D",
    explanation:
      "Teaching self-care/home management activities is specifically reported with 97535 (self-care/home management training), reported 3 times to cover the 45-minute session (15-minute units). Per ICD-10-CM guideline I.C.9.d.1, category I69 codes are combination codes that report both a residual neurologic deficit and its cause (CVA) in a single code — Hemiparesis following cerebrovascular disease refers to I69.959.",
  },
  {
    question:
      "A 10-year-old patient had a recent placement of a cochlear implant. She and her family see an audiologist to check the pressure and determine the strength of the magnet. The transmitter, microphone and cable are connected to the external speech processor and maximum loudness levels are determined under programming computer control. Which CPT code should be used?",
    options: ["92562", "92604", "92601", "92603"],
    correct: "D",
    explanation:
      "This is programming of a cochlear implant. Code selection depends on the patient's age and whether the visit is an initial or subsequent programming session. There is no documentation of a prior programming attempt, and the implant was recently placed, so this is an initial programming — for a patient 7 years or older, that is 92603.",
  },
  {
    question:
      "A cardiologist pediatrician sends a four week-old baby to an outpatient facility to have an echocardiogram. The baby has been having rapid breathing. He is sedated and a probe is placed on the chest wall and images are taken through the chest wall. A report is generated and sent to the pediatrician. The interpretation of the report by the pediatrician reveals the baby has an atrial septal defect. Choose the CPT code the cardiologist pediatrician should report.",
    options: ["93315-26", "93315", "93303", "93303-26"],
    correct: "D",
    explanation:
      "The echocardiogram was performed transthoracically (through the chest wall, not transesophageally), and given the patient's age and congenital finding (atrial septal defect), the congenital transthoracic echocardiogram code 93303 applies. Since only the interpretation was performed by the pediatrician (not the technical component), modifier 26 is appended.",
  },
  {
    question:
      "A patient presents to her oncologist's office for schedule chemotherapy. The patient is severely dehydrated. The physician decides to schedule the chemotherapy for another day and orders hydration therapy to be performed today instead of the chemotherapy. The therapy is ordered and administered for one hour and 10 minutes. Select the appropriate CPT code(s).",
    options: ["96413-53, 96360", "96360, 96361", "96365, 96366", "96422"],
    correct: "D",
    explanation:
      "Only hydration therapy was performed (chemotherapy was rescheduled), eliminating the chemotherapy infusion codes. Hydration codes are selected by time: 96360 covers the initial 31 minutes to 1 hour. A parenthetical note under 96361 states it is reported for infusion intervals greater than 30 minutes beyond each additional hour — since only 10 extra minutes were given beyond the first hour, only 96360 is reported.",
  },
  {
    question:
      "Left heart catheterization retrograde from the femoral artery with injection procedures for selective coronary angiography and selective left ventriculography, including imaging supervision and interpretation with report, are performed. The cardiologist performed all of the services at the hospital. The CPT code is:",
    options: ["93459-26", "93452-26", "93460-26", "93458-26"],
    correct: "D",
    explanation:
      "A retrograde left heart catheterization with selective coronary angiography AND left ventriculography, with imaging S&I, is 93458 — a bundled code covering all these components. There is no bypass graft catheterization documented (which would point to 93459/93460), so 93458-26 is correct with modifier 26 for the professional component.",
  },
  {
    question: "A patient is coming in to have osteopathic manipulative treatment (OMT) performed on two root lesions in his cervical region and three root lesions in the thoracic region. Which CPT code is reported by the physician for the OMT?",
    options: ["98927", "98925", "98940", "98942"],
    correct: "B",
    explanation:
      "OMT codes are selected by the number of BODY REGIONS treated, not the number of lesions within a region. Here, OMT was performed on 2 body regions total (cervical and thoracic), corresponding to 98925.",
  },
  {
    question:
      "The patient is admitted to the hospital for an EEG to determine the focus of her cerebral seizures. The continous EEG recording is for 12 hours and no video is obtained. The physician reviews the recorded events, analyzes spike and seizure detection, interprets the data and writes the report. What CPT code is reported?",
    options: ["95717", "95718", "95705", "95712"],
    correct: "A",
    explanation:
      "The physician personally reviewed, analyzed, and interpreted the EEG data (eliminating the technical-only codes). No video monitoring was used, and the monitoring duration was 2 to 12 hours, matching 95717.",
  },
  {
    question:
      "Patient is going back to the OR for a re-exploration L5-S1 laminectomy for a presumed cerebrospinal fluid leak following a decompression procedure. A small partial laminectomy was slightly extended, however revealed no real evidence of leak. Valsalva maneuver was performed several times, no evidence of leak. There was a hematoma, which was drained. What ICD-10-CM code(s) is (are) reported by the physician?",
    options: ["G96.00, T81.4XXA", "G96.00", "G96.8", "G97.61"],
    correct: "D",
    explanation:
      "Per ICD-10-CM guideline IV.H, an uncertain/ruled-out diagnosis (the presumed CSF leak that was NOT confirmed) is not coded, eliminating the CSF-leak-related options. The patient was found to have a postoperative hematoma while in the postoperative period from the original decompression, which is a complication — Alphabetic Index: Complication/postprocedural/hematoma/nervous system/following a nervous system procedure refers to G97.61.",
  },
  {
    question: "A patient that has hypertensive heart disease with congestive heart failure is coded:",
    options: ["I13.0, I11.0, I50.9", "I11.0, I50.9", "I50.9, I11.0", "I13.0"],
    correct: "B",
    explanation:
      "ICD-10-CM Alphabetic Index: Hypertension/due to/heart disease/with/heart failure (congestive) refers to I11.0. Under I11.0 in the Tabular List, an instructional note directs \"Use additional code to identify type of heart failure (I50.-)\" — so I50.9 is reported second, in that sequence order.",
  },
  {
    question:
      "A 35-year-old female returns to her primary care provider for follow up of an upper respiratory infection diagnosed the previous week. Her condition has not improved and her cough has increased. She has a long history of smoking and currently smokes one pack a day. She uses a bronchodilator for her chronic bronchitis which is caused by her smoking history. The physician changes her antibiotics to treat both her chronic and acute bronchitis. Provide the diagnosis codes for this visit.",
    options: ["J44.9, Z72.0", "J20.9, Z72.0", "J20.9, J41.0, Z72.0", "J41.0, J20.9, Z72.0"],
    correct: "C",
    explanation:
      "The patient has both acute and chronic bronchitis. ICD-10-CM guideline I.B.8 states that when a condition is described as both acute and chronic with separate subentries at the same indentation level in the Alphabetic Index, code both and sequence the acute code first: J20.9 (acute bronchitis) then J41.0 (chronic bronchitis due to tobacco smoking). Z72.0 reports current tobacco use.",
  },
  {
    question:
      "Following the MUGA scan, the physician documents that the patient has developed congestive heart failure as an adverse effect of the Trastuzumab she received as a treatment for her breast cancer. The trastuzumab antineoplastic antibiotic therapy is being discontinued while the heart failure management is attempted pharmaceutically. What ICD-10-CM codes are reported?",
    options: ["I50.9, T45.1X3A, C50.919", "I50.9, T45.1X5A, C50.919", "I50.9, T45.1X1A, C50.919", "I50.9, T45.1X4A, Z85.3"],
    correct: "B",
    explanation:
      "Congestive heart failure is I50.9. The heart failure is an adverse effect of a properly administered drug (Trastuzumab), which per ICD-10-CM guideline I.C.19.e.5 is coded from the \"adverse effect, therapeutic use\" classification, T45.1X5A — not poisoning (T45.1X1A) or assault (T45.1X3A). Because the cancer treatment is only being paused (not resolved), the breast cancer is still active and reported as C50.919, not a history code.",
  },
  {
    question: "The patient has a history of symptomatic HIV and has been treated for an HIV related illness. Which ICD-10-CM code is reported?",
    options: ["B20", "Z20.6", "R75", "Z21"],
    correct: "A",
    explanation:
      "Per Official Guideline I.C.1.a.2.(d), once a patient with HIV is treated for any HIV-related illness or is described as having any condition resulting from HIV-positive status, code B20 (not a history code) is reported — symptomatic HIV does not resolve, so \"history of\" here does not mean the condition is inactive.",
  },
  {
    question:
      "The mother, at 38-weeks gestation, advances to severe pre-eclampsia during labor. Fetal heart rate deceleration during contractions are not improved with the administration of oxygen, so a low transverse cesarean section is performed in the hospital. There is evidence of intrauterine growth retardation. The male infant weighs 1587 gm and has Apgars of 3 and 5. Select the ICD-10-CM codes for the newborn's chart.",
    options: [
      "Z38.01, P00.0, P03.811, P05.9",
      "Z37.0, P00.0, P03.810, P05.9",
      "Z38.01, P00.0, P03.810, P05.9",
      "Z37.0, P00.0, P03.811, P05.9",
    ],
    correct: "A",
    explanation:
      "Z37 codes are used on the MOTHER's chart, not the newborn's, eliminating those options. Per guideline I.C.16.a.2, Z38 is reported as the principal diagnosis for a newborn at birth and only on the newborn's record — Z38.01 (single liveborn, born via cesarean). P00.0 reports the newborn affected by the mother's hypertensive disorder. P03.811 reports fetal heart rate decelerations during labor. P05.9 reports the intrauterine growth retardation.",
  },
  {
    question: "If a ST elevation myocardial infarction (STEMI) converts to a non ST elevation myocardial infarction (NSTEMI) due to thrombolytic therapy, how is it reported, according to ICD-10-CM guidelines?",
    options: ["As unspecified AMI", "As a NSTEMI", "As a subendocardial AMI", "As STEMI"],
    correct: "D",
    explanation:
      "Per ICD-10-CM guideline I.C.9.e.1, when a STEMI converts to a NSTEMI due to thrombolytic therapy, it is still coded as a STEMI of the specified site.",
  },
  {
    question:
      "A 72-year-old female patient with chronic obstructive pulmonary disease (COPD) is seen in the pulmonary clinic. She receives a nebulizer treatment with 0.5 mg of Ipratropium Bromide and 2.5 mg of Albuterol Sulfate (DuoNeb). The treatment lasts 15 minutes. What is the appropriate HCPCS code(s) for the administration of this nebulizer treatment?",
    options: ["A7003", "J7620", "Q4098", "J7644"],
    correct: "B",
    explanation:
      "J7620 is the specific HCPCS code for the combination inhalation solution (Ipratropium Bromide and Albuterol Sulfate / DuoNeb) administered through a nebulizer.",
  },
  {
    question:
      "A 68-year-old male patient with a family history of colorectal cancer and a previous diagnosis of inflammatory bowel disease presents for a routine colorectal cancer screening. What is the appropriate HCPCS code for this screening colonoscopy?",
    options: ["G0106", "G0121", "G0122", "G0105"],
    correct: "D",
    explanation:
      "G0105 is designated for a screening colonoscopy in a patient at HIGH RISK for colorectal cancer (family history plus inflammatory bowel disease qualify), which allows more frequent screening. G0121 is used for patients who are not high risk.",
  },
  {
    question:
      "A 67-year-old female patient with osteoporosis is prescribed a bone density test using single-energy X-ray absorptiometry to assess her bone density at the wrist and heel. What is the correct HCPCS code(s) for the bone scan performed?",
    options: ["G0130", "G8400", "G9769", "G9471"],
    correct: "A",
    explanation:
      "G0130 specifically describes a single-energy X-ray absorptiometry (SEXA) bone density study of the appendicular skeleton (peripheral sites such as the wrist and heel).",
  },
  {
    question: "What is the full CPT code description for 61535?",
    options: [
      "Craniotomy with elevation of bone flap; for removal of epidural or subdural electrode array, without excision of cerebral tissue (separate procedure)",
      "Craniotomy with elevation of bone flap; for subdural implantation of an electrode array, for long-term seizure monitoring; for removal of epidural or subdural electrode array, without excision of cerebral tissue (separate procedure)",
      "For excision of epileptogenic focus without electrocorticography during surgery; for removal of epidural or subdural electrode array, without excision of cerebral tissue (separate procedure)",
      "For removal of epidural or subdural electrode array, without excision of cerebral tissue (separate procedure)",
    ],
    correct: "A",
    explanation:
      "In the CPT codebook, an indented code's full description is built from the parent code's text up to the semicolon, plus the indented code's own unique text. For 61535, that parent stem is \"Craniotomy with elevation of bone flap;\" combined with its own text \"for removal of epidural or subdural electrode array, without excision of cerebral tissue (separate procedure).\"",
  },
  {
    question: "Which place of service code is reported on the physician's claim for a surgical procedure performed in an ASC?",
    options: ["24", "11", "22", "21"],
    correct: "A",
    explanation:
      "Place of service codes identify the location where services were rendered. A service performed in a freestanding Ambulatory Surgical Center is reported with POS 24.",
  },
  {
    question: "Which place of service code is reported for fracture care performed by an orthopedic physician in the ED?",
    options: ["20", "23", "11", "22"],
    correct: "B",
    explanation: "Services rendered in the emergency department are reported with place of service code 23.",
  },
  {
    question: "Which Z code category can ONLY be reported as a first listed diagnosis code?",
    options: ["Z58", "Z67", "Z02", "Z69"],
    correct: "C",
    explanation:
      "The Official ICD-10-CM Coding Guidelines (I.C.21.c.16) list Z code categories that can only be reported as the first-listed diagnosis; Z02 (encounter for administrative examination) is one of them.",
  },
  {
    question: "Local Coverage Determinations (LCD) are published to give providers information on which of the following?",
    options: [
      "Fee schedule information listed by CPT code",
      "Information on modifier use with procedure codes",
      "CPT codes that are bundled",
      "Reasonable and necessary conditions of coverage for an item or service",
    ],
    correct: "D",
    explanation:
      "LCDs are Medicare Administrative Contractor rules that indicate whether a particular item or service is considered reasonable and necessary, and therefore covered — not a fee schedule (that's the annual Medicare Physician Fee Schedule) and not bundling logic (that's NCCI).",
  },
  {
    question: "Which one of the following is an example of fraud?",
    options: [
      "Reporting a lab panel with an additional lab test that is not included in the lab panel",
      "Reporting a biopsy and excision performed on the same skin lesion during the same encounter",
      "Failing to append modifier 26 on an X-ray that is performed and interpreted in the physician's office",
      "Reporting the code for ultrasound guidance when used to perform a liver biopsy",
    ],
    correct: "B",
    explanation:
      "Reporting a biopsy AND an excision of the SAME lesion at the same encounter is unbundling — the biopsy is incidental to (included in) the excision and is not separately reportable under NCCI/CPT guidelines, making it a fraudulent claim if billed as two services.",
  },
  {
    question:
      "Cardiologist Office Visit – New Patient. CC: CHEST ACHES-tightness. History: Patient has chest pain. Describes it as being tight. Shortness of breath and fatigue. Occasional pain in both arms. Started with these symptoms a month ago. Has been under a lot of pressure from work. Family History: Sister with Wolf-Parkinson-White syndrome. Review of Systems: Constitutional positive for fatigue; Respiratory positive for dyspnea; Cardiovascular negative for edema, orthopnea, PND, positive for chest pain, dyspnea, palpitations. Physical Exam: BP 120/86 sitting, left arm; General no apparent distress, well-nourished/developed; Nose/Throat normal; Neck/Thyroid supple, no adenopathy; Respiratory normal, lungs clear; Cardiovascular regular rhythm, no murmurs/gallops/rubs. Assessment/Plan: Chest pain consistent with anxiety, will order further tests to confirm — EKG, CBC, chest CT scan ordered, prescription of isosorbide dinitrate given for chest pain. What is the E/M visit and ICD-10-CM codes to report?",
    options: ["99204, R07.9", "99203, R07.9", "99203, F41.9", "99204, F41.9"],
    correct: "A",
    explanation:
      "MDM: 1 undiagnosed new problem with uncertain prognosis (chest pain of undetermined cause, needing further workup — moderate); ordering 3 unique tests, EKG/CBC/CT (moderate data); prescription drug management (moderate risk). Two of three moderate elements are met, giving 99204. Diagnosis: the physician's documented \"consistent with anxiety\" is not a confirmed diagnosis (per guideline I.B.18/IV.H, uncertain diagnoses in the outpatient setting are not coded), so the presenting symptom, chest pain (R07.9), is reported instead.",
  },
  {
    question:
      "PREOPERATIVE DIAGNOSIS: Multivessel coronary artery disease. POSTOPERATIVE DIAGNOSIS: Multivessel coronary artery disease. NAME OF PROCEDURE: Coronary artery bypass graft x 3, left internal mammary artery to the LAD, saphenous vein graft to the obtuse marginal, saphenous vein graft to the diagonal. The patient is placed on heart and lung bypass during the procedure. Anesthesia time: 6:00 PM to 12:00 AM. Surgical time: 6:15 PM to 11:30 PM. What is the correct anesthesia code and anesthesia time?",
    options: ["00567, 5 hours and 30 minutes", "00566, 6 hours", "00567, 6 hours", "00566, 5 hours and 30 minutes"],
    correct: "C",
    explanation:
      "This is a coronary artery bypass graft using a pump oxygenator (heart-lung bypass machine), matching 00567's descriptor \"with pump oxygenator\" (00566 is without pump oxygenator). Per the CPT Anesthesia Guidelines, anesthesia time runs from when the anesthesiologist begins preparing the patient until they release the patient to postoperative supervision — 6:00 PM to 12:00 AM is 6 hours. Surgical start/stop times are not used to calculate anesthesia time.",
  },
  {
    question:
      "PREOPERATIVE DIAGNOSIS: Left Breast Abnormal MMG or Palpable Mass; Other Disorders of Breast. PROCEDURE: Automated Stereotactic Biopsy Left Breast. There is a subglandular implant in place, displaced out of the way during the biopsy. The patient was placed prone on the stereotactic table. Under stereotactic guidance, 9 core biopsy samples were obtained using vacuum and cutting technique from the calcifications. The tissue marking clip was deployed into the biopsy cavity successfully, confirmed by final stereotactic digital image and post core biopsy mammogram. What CPT coding is reported?",
    options: ["19100, 19283", "19283", "19081", "19081, 19283"],
    correct: "C",
    explanation:
      "The biopsy was performed percutaneously with a needle (SenoRx needle) under stereotactic imaging guidance, and a localization/marker clip was placed in the same session. Code 19081 (percutaneous breast biopsy with stereotactic guidance, including placement of a marker) covers BOTH the biopsy and the clip placement in one code, so 19283 (clip placement alone) is not separately reported.",
  },
  {
    question:
      "PREOPERATIVE DIAGNOSIS: Medial meniscus tear, right knee. POSTOPERATIVE DIAGNOSIS: Medial meniscus tear, extensive synovitis with an impingement medial synovial plica, right knee. PROCEDURE: Diagnostic operative arthroscopy, partial medial meniscectomy and synovectomy, right knee. Debridement was performed in the patellofemoral, intercondylar, and lateral compartments, along with resection of an impinging medial synovial plica. In the medial compartment, an upbiting basket transected the base of a degenerative posterior horn flap tear, removed with a grasper, and the remaining meniscus was contoured and found stable. The lateral meniscus and cruciate ligaments were probed and found intact. What CPT and ICD-10-CM codes should be reported?",
    options: [
      "29880-RT, 29877-59-RT, M23.621, M65.80, M94.261, M22.41",
      "29881-RT, M23.211, M65.861, M94.261, M22.41",
      "29881-RT, M23.221, M65.861, M94.261, M22.41",
      "29880-RT, M23.203, M65.80, M94.261, M22.41",
    ],
    correct: "C",
    explanation:
      "Only the medial meniscus was addressed (not both, eliminating the bilateral-meniscectomy code 29880), so 29881 (partial meniscectomy, any meniscus) applies. The limited synovectomy (29875) is a CPT-designated \"separate procedure\" and is not separately reported when performed with the meniscectomy in the same compartment, nor is the debridement of the other compartments (29877), which is included in 29881. Reported diagnoses: synovitis (M65.861), chondromalacia of the tibial plateau/patella (M94.261), articular cartilage disorder (M22.41), and — per the Alphabetic Index, Derangement/knee/meniscus/medial/posterior horn — the specific tear type, M23.221 (not the more generic M23.211, which is anterior horn).",
  },
  {
    question:
      "Preoperative/Postoperative Diagnosis: Displaced odontoid fracture. Procedure: Open reduction of odontoid fracture. A 61-year-old fell while intoxicated, sustaining a posteriorly displaced odontoid fracture. Gardner-Wells tongs and axial traction under fluoroscopy achieved a partial reduction, but more manipulation was needed. The anterior neck was incised, the C2 body ventral aspect was exposed, and pressure achieved satisfactory reduction. A Kirschner wire was advanced into the C2 body through the fracture line into the odontoid process, drilled, and a cannulated lag screw was placed through the C2 body into the odontoid process. What procedure code is reported?",
    options: ["22318", "22326", "22505", "22315"],
    correct: "A",
    explanation:
      "This is open treatment of an odontoid fracture via an anterior approach with internal fixation (Kirschner wire and lag screw), matching 22318. The earlier Gardner-Wells tongs application (20660) is a CPT-designated \"separate procedure\" and is not separately reported during the same session as the definitive fracture reduction.",
  },
  {
    question:
      "Preoperative/Postoperative Diagnosis: Hypertrophic Scar. Procedure: Surgical preparation and split-thickness graft. Patient has a hypertrophic scar restricting mobility on the posterior left leg at the knee, after an unsuccessful physical therapy trial. The scar was excised down to viable dermis. Skin was harvested from the thigh in a split-thickness fashion and used to cover the 90 sq cm defect created by the excision, secured with skin staples. What CPT codes are reported?",
    options: ["15100, 11406", "15110, 15002", "15100, 15002", "15110-52, 15002"],
    correct: "C",
    explanation:
      "A split-thickness autograft (harvested from the thigh) covering less than 100 sq cm is reported with 15100. The physician also excised the hypertrophic scar to prepare the 90 sq cm recipient site (leg, trunk/arms/legs group) prior to grafting, which is separately reported as surgical site preparation, 15002.",
  },
  {
    question:
      "OPERATION: Dual chamber transvenous implantable pacing cardioverter-defibrillator system implantation with leads. A 67-year-old with ischemic cardiomyopathy (EF 25%), prior infarcts, and high risk for malignant ventricular arrhythmias meets Madit II criteria for a transvenous ICD. Both an atrial lead and a ventricular lead were advanced and actively fixed, with sensing/pacing thresholds confirmed for each, and the generator was connected and placed in a subcutaneous pocket under fluoroscopic guidance. Ventricular fibrillation was induced and successfully terminated with a defibrillation shock, confirming device function. Which CPT coding is reported?",
    options: ["33249", "33241, 33243, 33249", "33249, 76000-26", "33208"],
    correct: "A",
    explanation:
      "This is the initial insertion of a dual-chamber (atrial and ventricular lead) transvenous implantable defibrillator system with generator, which is specifically 33249 — not 33208 (that code is for a permanent PACEMAKER, not a defibrillator). Fluoroscopic guidance is bundled into the 33206-33249 code range per the subsection guidelines and is never separately reported.",
  },
  {
    question:
      "Procedure: Endoscopic retrograde cholangiopancreatogram with stent placement and antral biopsy. A 50-year-old post-liver-transplant patient with cholestatic liver enzymes requires ERCP before placement of a 7-French 12 cm stent and to evaluate the biliary system. The common bile duct was cannulated and the cholangiogram obtained; a 12 cm stent was deployed for biliary drainage, and a biopsy from the antrum was obtained. Which CPT codes are reported?",
    options: ["43212, 43202-51", "43266, 43239-51", "43276, 43261-51", "43274, 43261-51"],
    correct: "D",
    explanation:
      "This is an initial (not exchange) biliary stent placement via ERCP, reported with 43274. A biopsy was also obtained during the same endoscopy, reported separately with 43261-51.",
  },
];

export default function Exam2() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [answers, setAnswers] = useState<string[]>([]);
  const [revealed, setRevealed] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const letters = ["A", "B", "C", "D"];
  const q = questions[currentQuestion];

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
              <strong>Your Answer:</strong> {answers[index]}
            </p>
            <p>
              <strong>Correct Answer:</strong> {qq.correct}
            </p>
            <p>{answers[index] === qq.correct ? "✅ Correct" : "❌ Incorrect"}</p>
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
        }}
      >
        <h1>🎓 CPC Final Exam 2</h1>
        <p>
          Question {currentQuestion + 1} of {questions.length}
        </p>
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
