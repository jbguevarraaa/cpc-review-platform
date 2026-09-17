"use client";

import Link from "next/link";
import { useState } from "react";

type Question = {
  topic: string;
  question: string;
  options: string[];
  correct: "A" | "B" | "C" | "D";
  explanation: string;
  lookFor: string;
  eliminate: string;
};

const questions: Question[] = [
  {
    topic: "Nose — Foreign Body Removal",
    question: "A 5-year-old is brought to an ambulatory surgery center after pushing a foam hair roller deep into her nose. Given how deep and awkwardly positioned it is, the ENT specialist removes it via a lateral rhinotomy.",
    options: ["A. 30300, T17.1XXD", "B. 30310, T17.1XXA", "C. 30320, T17.1XXA", "D. 30100, T17.1XXD"],
    correct: "C",
    explanation: "Foreign body removal from the nose falls in the 30300–30320 range. 30300 is a simple in-office removal; 30310 requires general anesthesia (not documented); 30320 specifically covers removal via lateral rhinotomy, which matches the approach used.",
    lookFor: "The named surgical APPROACH (\"lateral rhinotomy\") is the deciding detail — match it to the code that explicitly describes that approach.",
    eliminate: "D is a biopsy code, not removal, and pairs with a wrong 7th character. B needs general anesthesia, which isn't documented. A is the basic in-office removal, but a more involved surgical approach was used here.",
  },
  {
    topic: "Mohs Micrographic Surgery",
    question: "A pro golfer undergoes Mohs surgery for a forehead skin cancer. The surgeon completes two stages: the first with 4 tissue blocks, the second with 6 tissue blocks.",
    options: ["A. 17311, 17315", "B. 17313, 17314, 17315", "C. 17311, 17312, 17315", "D. 17311, 17312"],
    correct: "C",
    explanation: "Mohs codes are chosen first by location — 17311 covers the head/neck/hands/feet/genitalia (including the forehead); 17313 is for the trunk/arms/legs, the wrong location entirely. Each stage caps at 5 blocks; anything beyond that uses add-on 17315 per extra block. Stage 1 (4 blocks) fits within 17311's cap. Stage 2 (6 blocks) needs the second-stage code 17312, plus one unit of 17315 for the one block over the limit.",
    lookFor: "Location decides the base code family; the block COUNT PER STAGE decides whether the add-on is needed.",
    eliminate: "B uses the wrong location code entirely. A skips reporting the second stage. D never accounts for the extra block that went over the 5-block cap in stage 2.",
  },
  {
    topic: "Muscle Biopsy + Imaging Guidance",
    question: "A percutaneous needle biopsy of the left shoulder muscle is performed under ultrasound guidance, passing through the fascia into the muscle. Pathology confirms a malignant neoplasm of connective and soft tissue.",
    options: ["A. 20206, 76942, C49.12", "B. 10021, 76942, C49.12", "C. 20206, D21.12", "D. 20205, D21.12"],
    correct: "A",
    explanation: "A percutaneous needle muscle biopsy is 20206 (20205 is the OPEN approach, which doesn't match a needle-through-skin technique). Since ultrasound guidance was specifically used, it's separately reported with 76942. Because pathology confirms malignancy, the diagnosis must reflect a malignant neoplasm, not a benign one.",
    lookFor: "\"Bore needle... through the skin... ultrasound guidance\" is the exact signature of percutaneous approach plus separately-reportable guidance — and always code the FINAL pathology result.",
    eliminate: "C and D both miss the guidance code and use the wrong (benign) diagnosis despite the addendum confirming malignancy. D also uses the open-approach code instead of percutaneous. B swaps in an unrelated skin/subQ FNA code instead of the muscle biopsy code.",
  },
  {
    topic: "Excision — Malignant Lesion, Chest",
    question: "A malignant lesion on the chest, measuring 1.0 cm, is excised with a 0.2 cm margin taken on each side.",
    options: ["A. 11401", "B. 11601", "C. 11602", "D. 11402"],
    correct: "C",
    explanation: "Malignant excisions are coded 116xx (11400s are benign, ruling out A and D). The excised diameter is the lesion plus margins on BOTH sides: 1.0 + 0.2 + 0.2 = 1.4 cm, landing in the 1.1–2.0 cm bracket, not the 0.6–1.0 cm bracket.",
    lookFor: "Always add BOTH margins to the lesion size — a margin \"on both sides\" doubles, it doesn't just add once.",
    eliminate: "A and D are benign-lesion codes, the wrong lesion behavior entirely. B undercounts the excised diameter by forgetting to double the margin.",
  },
  {
    topic: "Morton's Neuroma Excision",
    question: "A patient has three interdigital (Morton's) neuromas excised from the right foot in a hospital outpatient clinic.",
    options: ["A. 28080, G57.61", "B. 64774, D17.79", "C. 64776, 64778, G62.9", "D. 28080 x 3, G57.61"],
    correct: "D",
    explanation: "CPT specifically redirects Morton's neurectomy to code 28080 instead of the general neuroma-excision codes (64774–64776). Excision of a neuroma is reported per lesion, and since three separate neuromas were removed, 28080 is reported three times, not once.",
    lookFor: "Watch for a parenthetical note redirecting a specific condition to an entirely different code family — \"Morton's neuroma\" is the trigger phrase here. Then count the lesions.",
    eliminate: "B and C both use the general neuroma-excision codes instead of following the specific redirect. A reports the code only once despite three separate neuromas.",
  },
  {
    topic: "Repair Closure Classification",
    question: "According to CPT, what classification applies to a wound repair that specifically involves the use of retention sutures?",
    options: ["A. Simple", "B. Intermediate", "C. Not specified", "D. Complex"],
    correct: "D",
    explanation: "Complex repair requires more than a layered (intermediate) closure — it specifically involves things like scar revision, debridement, extensive undermining, or the use of stents/retention sutures.",
    lookFor: "\"Retention sutures\" is one of the specific named criteria that automatically escalates a repair to \"complex,\" regardless of wound length.",
    eliminate: "Simple and intermediate closures don't involve any of the extra techniques that define complex repair — those extras are exactly what push it into the complex category.",
  },
  {
    topic: "Suprahyoid Lymphadenectomy, Bilateral",
    question: "Five days after a glossectomy and lymph node sampling for oral cancer in the soft palate, a patient returns to the OR after pathology shows spread to the suprahyoid lymph nodes. A suprahyoid lymphadenectomy is performed on both sides of the neck.",
    options: ["A. 38500-50, C77.0, C05.1", "B. 38589, C77.0", "C. 38555, C77.0, C79.89", "D. 38700-50, C77.0, Z85.810"],
    correct: "D",
    explanation: "38500 is a lymph node sampling/biopsy code — that step already happened at the prior encounter. 38555 describes excision of a cystic hygroma, unrelated here. The correct code for suprahyoid lymphadenectomy is 38700, reported bilaterally with modifier 50 (not the unlisted code 38589). Since the primary tumor was already excised, the primary-site diagnosis is followed by a personal-history code for that already-treated malignancy, not a second active-cancer code for the palate.",
    lookFor: "\"Returns to the OR days later\" plus \"primary tumor already excised\" signals a personal-history diagnosis code for the primary site, not a second active-cancer code.",
    eliminate: "A wrongly reuses the sampling/biopsy code for a procedure already completed. C uses an unrelated excision code. B settles for an unlisted code when a specific one (38700) exists.",
  },
  {
    topic: "Bronchoscopy with EBUS",
    question: "A diagnostic bronchoscopy is performed with cell washings of both lungs. Endobronchial ultrasound is then used to guide biopsies from both the right and left bronchus, due to suspected bronchial cancer.",
    options: ["A. 31652", "B. 31622, 31625-RT, 31625-LT-59", "C. 31625, 31652-RT, 31653-LT", "D. 31625-50, 31630"],
    correct: "A",
    explanation: "Once endobronchial ultrasound (EBUS) is used to guide the sampling, it supersedes the plain washing/biopsy codes — the EBUS-guided sampling codes already bundle diagnostic bronchoscopy, washings, and biopsy into one code. Since only the right and left bronchus (1–2 stations) were sampled, 31652 applies — 31653 is reserved for three or more stations.",
    lookFor: "Whenever EBUS guidance is explicitly used for the sampling itself, it replaces the plain washing/biopsy codes rather than being added alongside them.",
    eliminate: "B and D both incorrectly stack plain biopsy/washing codes with or instead of the EBUS-bundled code. C mixes the plain biopsy code with the EBUS code, double-reporting the same sampling.",
  },
  {
    topic: "Sinus Lavage by Cannulation",
    question: "What CPT code applies to a lavage performed by cannulation of the maxillary sinus?",
    options: ["A. 31000", "B. 31002", "C. 31235", "D. 31020"],
    correct: "A",
    explanation: "31000 and 31002 are the lavage-by-cannulation codes, split by sinus: 31000 is maxillary, 31002 is sphenoid. No scope was used, so the endoscopy code doesn't apply, and 31020 describes a surgical sinusotomy, a different procedure.",
    lookFor: "\"Lavage by cannulation\" with no scope mentioned points straight to 31000/31002 — then match the specific sinus.",
    eliminate: "B is the wrong sinus. C requires an endoscope, which isn't mentioned. D describes a surgical sinusotomy, not a simple lavage.",
  },
  {
    topic: "Muscle Biopsy, Percutaneous Needle",
    question: "A local anesthetic is injected above a site on the thigh, and a small-bore needle is passed roughly 3 inches deep into the muscle to obtain a biopsy sample.",
    options: ["A. 20205", "B. 20206", "C. 20225", "D. 27324"],
    correct: "B",
    explanation: "20225 is a bone biopsy code, not muscle. 20205 is the OPEN muscle biopsy approach, but a small-bore needle through the skin is percutaneous, matching 20206. 27324 is a general deep soft-tissue thigh biopsy code, but since the muscle specifically was sampled, the dedicated muscle-biopsy code family takes priority over the more generic regional code.",
    lookFor: "\"Small bore needle... through the skin\" is percutaneous, not open — and a named specific tissue (muscle) outranks a more generic regional code.",
    eliminate: "C is bone, not muscle. A is the open approach, not needle/percutaneous. D is a reasonable general-region code but less specific than the dedicated muscle-biopsy codes.",
  },
  {
    topic: "PICC Line Insertion",
    question: "At the bedside, a 72-year-old has a dual-lumen PICC line placed into the right cephalic vein under ultrasound guidance, advanced to the SVC/RA junction.",
    options: ["A. 36573", "B. 36566, 76937", "C. 36561, 76942-26", "D. 36561, 76937-26"],
    correct: "A",
    explanation: "Central venous access codes split by insertion site: centrally-inserted catheters use 36555–36566, while peripherally-inserted catheters (PICC lines) use 36568–36573. Since this is explicitly a PICC, only the PICC-range code applies.",
    lookFor: "The word \"PICC\" itself is the whole decision point — it immediately narrows you to the 36568–36573 range and rules out every centrally-inserted code.",
    eliminate: "B, C, and D all use codes from the centrally-inserted catheter range, which doesn't match a peripherally-inserted line at all.",
  },
  {
    topic: "Direct Laryngoscopy with Operating Microscope",
    question: "In outpatient surgery, a direct laryngoscopy is performed using an operating microscope.",
    options: ["A. 31515", "B. 31520", "C. 31525", "D. 31526"],
    correct: "D",
    explanation: "31515 is specifically for aspiration, not described here. 31520 and 31525 are plain diagnostic direct laryngoscopy codes (split by newborn vs. not), but neither captures the operating microscope — 31526 is the variant that specifically adds that detail.",
    lookFor: "Whenever \"operating microscope\" or \"telescope\" is mentioned alongside a laryngoscopy, look for the specific code variant naming that equipment.",
    eliminate: "A doesn't match (no aspiration mentioned). B and C are the right procedure type but miss the microscope detail, which is the whole point of the question.",
  },
  {
    topic: "Removal of Skin Tags",
    question: "Two skin tags (0.3 cm and 0.5 cm) are removed from the chest.",
    options: ["A. 11200, 11201", "B. 11305, 11305", "C. 11305", "D. 11200"],
    correct: "D",
    explanation: "Skin tag removal is coded 11200–11201; the 113xx range is for shaving epidermal/dermal lesions, a different procedure entirely. Skin tags are billed by RANGE — 11200 alone covers up to 15 tags in one session, so removing just two doesn't need the add-on code (which only applies beyond that first batch).",
    lookFor: "Skin tag counts are grouped in bands (first up to 15, then additional 10s) — don't assume a second code is needed just because more than one tag was removed.",
    eliminate: "B and C both use the shave-removal codes, the wrong procedure type entirely. A adds the extra-tags code unnecessarily, since two tags is still within the first-15 range.",
  },
  {
    topic: "Discontinued Procedure Before Anesthesia",
    question: "A patient is prepped for a TMJ partial meniscectomy at a hospital outpatient surgery center, but before anesthesia is given, the patient develops respiratory distress and the physician cancels the procedure.",
    options: ["A. 21060-53", "B. 21060-73", "C. 21050-73", "D. 21031-74"],
    correct: "A",
    explanation: "Modifiers 73 (discontinued prior to anesthesia) and 74 (discontinued after anesthesia) are reserved for the FACILITY's own claim, not the physician's. The physician's own code uses modifier 53 (discontinued procedure) instead, regardless of the anesthesia-timing distinction that 73/74 make.",
    lookFor: "Modifiers 73/74 are facility-only — if the question is about the physician/surgeon's own code, that routes to modifier 53 instead, no matter when the procedure stopped.",
    eliminate: "B, C, and D all reach for the facility-only modifier on what should be the physician's own claim, and C/D also pick the wrong base procedure entirely.",
  },
  {
    topic: "Arthrocentesis + Same-Day E/M",
    question: "An established patient comes in for a left knee arthrocentesis to drain fluid, but also mentions ongoing fatigue, weakness, and depression. The physician performs the arthrocentesis and also does a separate, low-level E/M evaluation of her general condition.",
    options: ["A. 99213-25, 20605", "B. 99203-25, 20610", "C. 99213, 20605", "D. 99213-25, 20610"],
    correct: "D",
    explanation: "Since a separately identifiable E/M service was performed the same day as the procedure, modifier 25 is required on the E/M code. She's established, so the new-patient E/M code doesn't apply. The knee is a MAJOR joint (20610), not an intermediate one (20605, which covers joints like the TMJ, AC joint, wrist, elbow, or ankle).",
    lookFor: "A same-day, separately-documented E/M reason (unrelated symptoms, not just pre-procedure workup) needs modifier 25 — and always confirm which joint-size bracket the specific joint falls into.",
    eliminate: "B uses a new-patient E/M code for an established patient. C forgets modifier 25 entirely. A picks the intermediate-joint code instead of the major-joint code for the knee.",
  },
  {
    topic: "Suction-Assisted Lipectomy, Multiple Sites",
    question: "Suction-assisted lipectomy is performed on the posterior iliac crest, lateral trochanteric area, and medial thighs bilaterally, followed by the abdomen.",
    options: ["A. 15830, 15832-50", "B. 15877, 15879-50", "C. 15830, 15832-50, 15847", "D. 15877, 15878-50"],
    correct: "B",
    explanation: "Because this is explicitly a SUCTION-ASSISTED lipectomy, the codes come from the 15877–15879 family, not the excisional lipectomy/panniculectomy 15830s. The abdomen/trunk work is 15877; the bilateral thigh work (lower extremity) is 15879 with modifier 50.",
    lookFor: "\"Suction-assisted\" is the exact phrase that routes you to 15877–15879 instead of the excisional 15830s.",
    eliminate: "A and C both use the excisional codes, the wrong technique entirely. D correctly uses 15877 for the trunk but pairs it with 15878 (upper extremity) instead of the lower-extremity code the thighs actually need.",
  },
  {
    topic: "Breast Localization Device Placement + FNA",
    question: "Stereotactic guidance is used to place a localization device for two lesions in each breast (four total), and the same lesions undergo fine needle aspiration without imaging guidance.",
    options: ["A. 19081 x 2", "B. 10007, 10008", "C. 19081, 19082, 10021, 10004", "D. 19283, 19284, 10021, 10004"],
    correct: "D",
    explanation: "19081–19086 are combination codes bundling biopsy + localization device + imaging guidance — but the scenario describes an aspiration, not a biopsy, so those bundled codes don't fit. Instead, the localization device placement is coded separately (stereotactic guidance: 19283 first lesion, 19284 each additional), and the FNA without imaging guidance is coded 10021 (first lesion) and 10004 (each additional).",
    lookFor: "\"Aspiration\" specifically (not \"biopsy\") is the trigger to separate the localization-device codes from the FNA codes instead of reaching for the bundled combination codes.",
    eliminate: "A and C both wrongly use the bundled biopsy+device codes for what's actually an aspiration procedure. B uses codes from an unrelated, non-breast-specific section.",
  },
  {
    topic: "Knee Arthrography",
    question: "After a fall, a patient with knee pain, swelling, and a \"pop\" sensation undergoes a contrast knee arthrogram in outpatient radiology, with a needle placed into the femoropatellar space and contrast injected directly. The diagnosis is a closed knee dislocation.",
    options: ["A. 27369, 73580, S83.104A", "B. 27369, 73580, S83.111A", "C. 27369, 77002, S83.121A", "D. 27369, 73580, 77002, S83.101A"],
    correct: "A",
    explanation: "The injection procedure is 27369, and the imaging component is 73580. Fluoroscopic guidance (77002) is only separately reported for an enhanced CT arthrogram, which isn't described here. The diagnosis needs to match a general knee dislocation, not a more specific proximal-tibia dislocation that isn't supported by the documentation.",
    lookFor: "77002 only gets added for CT arthrography specifically — a plain radiographic arthrogram doesn't need it.",
    eliminate: "C and D both incorrectly add 77002 for a non-CT arthrogram. B uses an ICD-10 code for a proximal tibia dislocation, more specific than what's actually documented.",
  },
  {
    topic: "Excision of Two Infected Sebaceous Cysts",
    question: "A patient has a 4.1 cm infected sebaceous cyst on the back and a 2.5 cm infected sebaceous cyst on the neck, both excised in the same outpatient session.",
    options: ["A. 11406, 11423, L72.3", "B. 11406, L72.3", "C. 11606, 11623-59, L72.3, L72.3", "D. 11406, 11423-59, N94.89"],
    correct: "A",
    explanation: "These are benign cysts, so the codes come from the 114xx benign range, not the 116xx malignant range. Excisions are coded per lesion — with two separately-sized cysts, two size-matched codes are needed. Because the two lesions are naturally at different anatomic sites, modifier 59 isn't needed to distinguish them.",
    lookFor: "Two separate, distinctly-sized lesions mean two separate size-matched codes — and modifier 59 isn't automatic just because two procedures happened.",
    eliminate: "C wrongly uses malignant-lesion codes for benign cysts. B only reports one of the two lesions. D adds an unnecessary modifier 59 and an unrelated diagnosis code.",
  },
  {
    topic: "Lymphadenectomy, Cervical + Axillary",
    question: "A surgeon performs a left cervical lymphadenectomy and a left superficial axillary lymphadenectomy for enlarged nodes; pathology confirms malignant lymphoma in both areas.",
    options: ["A. 38740-LT, 38724-LT, C85.81, C85.8", "B. 38720-LT, 38740-LT, C85.91, C85.94", "C. 38720-LT, 38740-LT, C85.98", "D. 38724-LT, 38745-LT, C85.90"],
    correct: "B",
    explanation: "38724 specifically describes a \"modified radical\" neck dissection, which isn't documented, so that code doesn't apply. The correct procedures are 38720 (cervical) and 38740 (superficial axillary). The site-specific lymphoma diagnosis codes for head/face/neck and axilla/upper limb match the two documented sites more precisely than one unspecified code.",
    lookFor: "\"Modified radical\" has to actually appear in the documentation before that specific code family applies — don't assume it just because neck nodes were removed.",
    eliminate: "A and D both incorrectly reach for the modified-radical code without that term being documented. C uses the right procedures but settles for one unspecified diagnosis instead of the two more specific site codes.",
  },
  {
    topic: "Cast Application, Fracture Stabilization Only",
    question: "A patient sustains a displaced, oblique left humeral shaft fracture in a car accident (as a passenger) and has a long-arm cast applied by the ED physician, with definitive treatment deferred to an orthopedist at a later visit.",
    options: ["A. 29065-LT, S42.332A, V43.62XA", "B. 24500-LT, S42.332A, V43.62XA", "C. 24505-LT, 29065-LT, S42.302A, V43.62XA", "D. 24500-LT, 29065-LT, S42.302A, V43.62XA"],
    correct: "A",
    explanation: "Cast/strapping is billed separately from a fracture treatment code specifically when it's used just for stabilization/comfort, with definitive treatment still pending — exactly this scenario. Since no actual fracture treatment (reduction, fixation) happened today, none of the fracture-treatment codes apply at all — only the casting code does.",
    lookFor: "\"Cast applied until the patient can see an orthopedist\" is the signature phrase for casting-only, no-treatment-yet scenarios.",
    eliminate: "B, C, and D all incorrectly add a fracture treatment code for a visit where only stabilization casting — not actual treatment — was performed.",
  },
  {
    topic: "Elbow Arthroplasty",
    question: "A patient with systemic sclerosis undergoes a membrane arthroplasty of the left elbow at an outpatient surgery center.",
    options: ["A. 24330, M34.9", "B. 24360, M34.9", "C. 24343, M34.9", "D. 24365, M34.9"],
    correct: "B",
    explanation: "Arthroplasty of the elbow falls in the 24360–24370 range, ruling out codes outside that range. Since the procedure is a general elbow arthroplasty (not specifically radial head replacement), the more specific radial-head arthroplasty code doesn't apply.",
    lookFor: "\"Arthroplasty\" plus the named joint (elbow) narrows you to a specific range — then check whether any more specific sub-structure is actually named before picking a more specific code.",
    eliminate: "A and C fall outside the elbow arthroplasty range entirely. D is specifically for radial head arthroplasty, not described here.",
  },
  {
    topic: "Knee Arthroscopy — Meniscectomy vs. Repair",
    question: "A patient with a recurrent bucket-handle tear of the medial meniscus undergoes knee arthroscopy; the posterior horn is debrided back to a stable rim rather than being surgically repaired/sutured.",
    options: ["A. 29881, M23.204", "B. 29881, S83.212A", "C. 29881, 29870, S83.252A", "D. 29880, S83.212A"],
    correct: "A",
    explanation: "The key detail is that the meniscus was DEBRIDED (trimmed to a stable rim), not repaired/sutured — that describes an arthroscopic meniscectomy, not a repair code. Since this is a recurrent/chronic tear (not a fresh traumatic injury), the diagnosis comes from the musculoskeletal derangement codes, not an injury chapter code.",
    lookFor: "\"Debrided... back to a stable rim\" describes a meniscectomy technique, not a repair — don't be misled by other language in the note.",
    eliminate: "B and D both pair reasonable procedure logic with an acute-injury diagnosis code, which doesn't fit a recurrent/chronic tear. C adds an unnecessary extra arthroscopy code and an overly specific injury diagnosis.",
  },
  {
    topic: "Trigger Point Injection",
    question: "A patient with acquired trigger finger receives a single trigger point injection into one muscle.",
    options: ["A. 20551, M65.30", "B. 20552, 77002, M65.30", "C. 20552, M65.30", "D. 20600, M65.30"],
    correct: "C",
    explanation: "20600 is a joint arthrocentesis code, which doesn't match — no joint injection is described. 20551 is for injecting a TENDON, but this targets a muscle trigger point, matching 20552 instead. No fluoroscopic guidance was mentioned, so 77002 doesn't apply.",
    lookFor: "\"Trigger point\" injection into a MUSCLE (not a tendon or joint) is the deciding phrase — match the injected structure exactly.",
    eliminate: "A targets tendons, not muscles. B adds guidance that was never mentioned. D is a joint injection code, and no joint injection is described.",
  },
  {
    topic: "Wart Destruction + Separate Lesion Biopsy",
    question: "Three plantar warts on the right foot are destroyed via cryosurgery, and a separate, suspicious-looking lesion on the left arm is removed via punch biopsy. Pathology on the arm lesion shows a blue nevus with no atypical features.",
    options: ["A. 17000, 17003, D23.6, B07", "B. 17000, 17003, 11100-59, D23.62, B07.0", "C. 17110, 11104-59, B07.0, D23.62", "D. 17110, D23.69, B07.9"],
    correct: "C",
    explanation: "Plantar warts are benign, not premalignant, so the premalignant destruction codes (most commonly used for actinic keratosis) don't apply — the benign-lesion destruction code fits instead. Since a completely separate biopsy was performed on a different lesion at a different site, that punch biopsy needs its own code with modifier 59 to show it's distinct from the wart destruction.",
    lookFor: "Warts are benign, not premalignant — don't default to the premalignant destruction codes just because a lesion is being destroyed.",
    eliminate: "A and B both incorrectly use the premalignant destruction codes for benign warts. D omits the separate biopsy procedure entirely.",
  },
  {
    topic: "Percutaneous Lung Needle Biopsy",
    question: "A smoker with cough, hemoptysis, slurred speech, and weight loss has a large, non-resectable lung mass on imaging, with a suspicious but unconfirmed brain finding. Under conscious sedation and fluoroscopic guidance, a needle biopsy of the lung mass confirms small cell carcinoma; chemo and radiation are planned but not yet started.",
    options: ["A. 32408, C34.11", "B. 10022, R05, R04.2, R47.81, R63.4", "C. 32408, C34.11, Z51.11", "D. 32601, C34.11"],
    correct: "A",
    explanation: "Lung procedures fall in the 32xxx range, ruling out an unrelated skin biopsy code. No scope (thoracoscopy/VATS) was used, so the thoracoscopic biopsy code doesn't apply either — the percutaneous needle biopsy code fits. Since chemo and radiation are only PLANNED, not yet given, a code implying active treatment doesn't apply.",
    lookFor: "\"Planned\" treatment that hasn't started yet never gets a code implying it's actively happening — a common trap in oncology scenarios.",
    eliminate: "B substitutes symptom codes for the actual confirmed procedure and diagnosis. D wrongly assumes a scoped approach that isn't described. C adds a code implying chemotherapy is currently being administered, when it's only planned.",
  },
  {
    topic: "Malignant Lesion Excision, Forehead, with Layered Closure",
    question: "A 1.0 cm malignant lesion on the forehead is excised with margins of 1.1 cm on all sides, and the resulting defect is closed in a layered fashion.",
    options: ["A. 11644, 12052", "B. 11602, 12052", "C. 11604", "D. 11602, 12051"],
    correct: "A",
    explanation: "Malignant excisions are grouped first by location — the forehead falls in the face/ears/eyelids/nose/lips range (11640–11646), not the trunk/arms/legs range. The excised diameter (lesion plus margins on both sides) is well above 4.0 cm, matching the largest code in that location-specific family. Since a layered closure was performed, that's separately reported with the size-matched intermediate repair code for the face.",
    lookFor: "Location comes first for excision code selection — confirm the anatomical-region family before calculating size.",
    eliminate: "B and D both use the wrong location range (trunk/arms/legs instead of face-specific). C reports the excision alone and forgets the separately-billable layered closure.",
  },
  {
    topic: "Arthroscopic Partial Synovectomy + Loose Body Removal",
    question: "A Medicare patient undergoes an arthroscopic partial synovectomy of the left ankle to address crystal-induced tenosynovitis, along with removal of loose bodies found during the same session.",
    options: ["A. 29894, 29895-59, M65.89", "B. 29895, M65.872", "C. 29895, M65.88", "D. 29897, M11.872, M65.89"],
    correct: "B",
    explanation: "The procedure described — arthroscopic partial synovectomy — matches one code directly; loose body removal found during that same operative session is considered part of it rather than a separately billable second procedure. The diagnosis needs to specifically reflect crystal-induced tenosynovitis at the ankle, not a generic \"other specified\" code.",
    lookFor: "When a description already matches one specific code closely, check whether an additional finding mentioned in the same note is actually bundled in before adding a second procedure code.",
    eliminate: "A incorrectly adds a second procedure code as if loose body removal were separately billable here. C and D both use diagnosis codes that don't specifically match the ankle location documented.",
  },
  {
    topic: "Bilateral Deep Axillary Lymph Node Biopsy",
    question: "Three years after a right partial mastectomy for breast cancer, a patient presents with lumps in the right axillary lymph nodes. The surgeon performs an incisional deep biopsy of the axillary lymph nodes on both sides.",
    options: ["A. 38525-50, R59.0, Z85.3", "B. 38500, R59.9", "C. 38740, R59.9, Z85.3", "D. 38745-50, R59.9"],
    correct: "A",
    explanation: "Lymph node biopsy/excision codes run 38500–38531; the radical axillary lymphadenectomy codes require an actual radical dissection, not just a biopsy, so those don't apply. Within the biopsy range, one code is for SUPERFICIAL nodes, but the scenario describes a deep incisional biopsy, needing the deep-biopsy-specific code instead, reported bilaterally. The diagnosis should reflect the localized lymph node enlargement plus a personal history of the prior treated breast cancer.",
    lookFor: "\"Radical\" lymphadenectomy codes require an actual radical dissection — a biopsy alone, however extensive, doesn't qualify.",
    eliminate: "C and D both incorrectly reach for radical lymphadenectomy codes for what's only a biopsy. B uses the superficial-node code, but the scenario specifically describes a deep biopsy.",
  },
  {
    topic: "Malignant Melanoma Excision + Rotation Flap",
    question: "A 4.8 cm malignant melanoma on the inner thigh is excised, and the resulting defect is closed using a 6 cm x 6 cm rotation flap.",
    options: ["A. 14021-LT", "B. 11606-LT, 13121-LT", "C. 11606-LT, 14301-LT", "D. 14301"],
    correct: "D",
    explanation: "When a lesion excision is performed specifically in conjunction with an adjacent tissue transfer (like a rotation flap), only the adjacent tissue transfer code is reported — the excision is bundled into that flap code. The flap covers a 6x6 cm = 36 sq cm defect, which exceeds the 30 sq cm threshold that separates the base adjacent-tissue-transfer codes from the larger-defect code, so the larger-defect code applies on its own.",
    lookFor: "Excision + adjacent tissue transfer at the same site is bundled into one code — never report the excision separately alongside it.",
    eliminate: "B and C both incorrectly add a separate excision code on top of the flap code, double-reporting the excision. A uses the right concept but the wrong size-bracket code for a 36 sq cm defect.",
  },
];

const mainStyle = { maxWidth: "980px", margin: "0 auto", padding: "36px 24px 64px", minHeight: "100vh", background: "#f6f9f9", color: "#141d1c", fontFamily: "Arial, sans-serif" };
const heroStyle = { background: "linear-gradient(135deg, #1f2937, #0f766e)", color: "white", padding: "40px 36px", borderRadius: "18px", marginBottom: "24px", boxShadow: "0 12px 28px rgba(31,41,55,0.22)" };
const kickerStyle = { margin: "0 0 10px", color: "#99f6e4", fontWeight: 800, letterSpacing: "0.08em", fontSize: "13px" };
const navStyle = { display: "flex", flexWrap: "wrap" as const, gap: "10px", marginBottom: "16px" };
const navLinkStyle = { textDecoration: "none", color: "#0f766e", background: "#ffffff", border: "1px solid #dbe3e1", borderRadius: "999px", padding: "9px 14px", fontWeight: 700, fontSize: "13.5px" };
const introStyle = { background: "#f0fdfa", border: "1px solid #99f6e4", borderLeft: "5px solid #0f766e", borderRadius: "10px", padding: "14px 16px", marginBottom: "20px", lineHeight: 1.65, fontSize: "13.5px" };
const cardStyle = { background: "#ffffff", border: "1px solid #e3e7e6", borderRadius: "14px", padding: "26px 28px", boxShadow: "0 5px 16px rgba(16,23,25,0.06)" };
const progressStyle = { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px", fontSize: "13px", color: "#5b6b68", fontWeight: 700 };
const topicChipStyle = { background: "#f0fdfa", border: "1px solid #99f6e4", color: "#0f766e", borderRadius: "999px", padding: "4px 12px", fontWeight: 800, fontSize: "12px" };
const questionStyle = { fontSize: "16.5px", lineHeight: 1.6, margin: "14px 0 18px", color: "#111827" };
const optionsWrapStyle = { display: "grid", gap: "10px" };
const buttonBaseStyle: React.CSSProperties = { textAlign: "left", padding: "13px 16px", borderRadius: "10px", border: "1px solid #dbe3e1", background: "#fff", cursor: "pointer", fontSize: "14px", lineHeight: 1.5 };
const actionsRowStyle = { display: "flex", gap: "12px", marginTop: "20px", flexWrap: "wrap" as const };
const primaryBtnStyle = { padding: "11px 22px", borderRadius: "999px", border: "none", background: "#0f766e", color: "#fff", fontWeight: 800, cursor: "pointer", fontSize: "14px" };
const secondaryBtnStyle = { padding: "11px 22px", borderRadius: "999px", border: "1px solid #dbe3e1", background: "#fff", color: "#0f766e", fontWeight: 800, cursor: "pointer", fontSize: "14px" };
const answerBoxStyle = { marginTop: "22px", display: "grid", gap: "12px" };
const explanationBoxStyle = { background: "#f0fdf4", border: "1px solid #bbf7d0", borderLeft: "5px solid #16a34a", borderRadius: "10px", padding: "14px 16px", lineHeight: 1.65, fontSize: "14px" };
const lookForBoxStyle = { background: "#eff6ff", border: "1px solid #bfdbfe", borderLeft: "5px solid #2563eb", borderRadius: "10px", padding: "14px 16px", lineHeight: 1.65, fontSize: "14px" };
const eliminateBoxStyle = { background: "#fef2f2", border: "1px solid #fecaca", borderLeft: "5px solid #dc2626", borderRadius: "10px", padding: "14px 16px", lineHeight: 1.65, fontSize: "14px" };
const scoreStyle = { textAlign: "center" as const, padding: "40px 20px" };
const jumpBarStyle = { display: "flex", flexWrap: "wrap" as const, gap: "6px", marginBottom: "18px" };

function jumpButtonStyle(active: boolean, answered: boolean): React.CSSProperties {
  return {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    border: active ? "1px solid #0f766e" : "1px solid #dbe3e1",
    background: active ? "#0f766e" : answered ? "#f0fdf4" : "#fff",
    color: active ? "#fff" : "#0f766e",
    fontWeight: 800,
    fontSize: "11px",
    cursor: "pointer",
  };
}

export default function CptModule4PracticeExamPage() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState<boolean[]>(new Array(questions.length).fill(false));
  const [finished, setFinished] = useState(false);

  const q = questions[current];
  const letters: Array<"A" | "B" | "C" | "D"> = ["A", "B", "C", "D"];

  function checkAnswer() {
    if (!selected) return;
    setShowAnswer(true);
    if (!answered[current]) {
      const nextAnswered = [...answered];
      nextAnswered[current] = true;
      setAnswered(nextAnswered);
      if (selected === q.correct) setScore((s) => s + 1);
    }
  }

  function goTo(index: number) {
    setCurrent(index);
    setSelected(null);
    setShowAnswer(false);
  }

  function next() {
    if (current < questions.length - 1) {
      goTo(current + 1);
    } else {
      setFinished(true);
    }
  }

  function restart() {
    setCurrent(0);
    setSelected(null);
    setShowAnswer(false);
    setScore(0);
    setAnswered(new Array(questions.length).fill(false));
    setFinished(false);
  }

  return (
    <main style={mainStyle}>
      <header style={heroStyle}>
        <p style={kickerStyle}>CPT · MODULE 4 · PRACTICE EXAM</p>
        <h1 style={{ margin: 0, fontSize: "clamp(24px, 5vw, 38px)" }}>CPT Module 4 Practice Exam</h1>
        <p style={{ margin: "10px 0 0", fontSize: "15.5px", lineHeight: 1.5 }}>30 scenario questions spanning Integumentary, Musculoskeletal, Respiratory, Cardiovascular/Lymphatic, and Breast — with a coding tip and an elimination trick for every answer.</p>
      </header>

      <nav aria-label="CPT navigation" style={navStyle}>
        <Link href="/cpt" style={navLinkStyle}>CPT home</Link>
        <Link href="/cpt/surgery" style={navLinkStyle}>Surgery home</Link>
      </nav>

      <div style={introStyle}>
        <strong>How to use this exam:</strong> most of these questions are solved the same way — by elimination. Rule out choices that use the wrong code family (wrong lesion behavior, wrong approach, wrong location) before comparing what's left. The tip and elimination note on every answer walk through exactly that process.
      </div>

      <div style={jumpBarStyle} aria-label="Jump to question">
        {questions.map((_, i) => (
          <button key={i} type="button" style={jumpButtonStyle(i === current, answered[i])} onClick={() => goTo(i)}>
            {i + 1}
          </button>
        ))}
      </div>

      <div style={cardStyle}>
        {finished ? (
          <div style={scoreStyle}>
            <h2 style={{ margin: "0 0 10px" }}>Exam Complete</h2>
            <p style={{ fontSize: "40px", fontWeight: 800, color: "#0f766e", margin: "0 0 10px" }}>{score} / {questions.length}</p>
            <p style={{ color: "#5b6b68", marginBottom: "22px" }}>
              {score === questions.length ? "Perfect score across all 5 systems — this module is solid." : score / questions.length >= 0.7 ? "Good run — review the ones you missed, then try again." : "Worth another pass — the elimination notes on each miss will help the pattern click."}
            </p>
            <button type="button" style={primaryBtnStyle} onClick={restart}>Restart Exam</button>
          </div>
        ) : (
          <>
            <div style={progressStyle}>
              <span>Question {current + 1} of {questions.length}</span>
              <span style={topicChipStyle}>{q.topic}</span>
            </div>

            <p style={questionStyle}>{q.question}</p>

            <div style={optionsWrapStyle}>
              {q.options.map((opt, i) => {
                const letter = letters[i];
                const isSelected = selected === letter;
                const isCorrect = letter === q.correct;
                let style = { ...buttonBaseStyle };
                if (showAnswer) {
                  if (isCorrect) style = { ...style, background: "#f0fdf4", borderColor: "#16a34a", fontWeight: 700 };
                  else if (isSelected) style = { ...style, background: "#fef2f2", borderColor: "#dc2626" };
                } else if (isSelected) {
                  style = { ...style, borderColor: "#0f766e", background: "#f0fdfa" };
                }
                return (
                  <button key={letter} type="button" style={style} onClick={() => !showAnswer && setSelected(letter)}>
                    {opt}
                  </button>
                );
              })}
            </div>

            <div style={actionsRowStyle}>
              {!showAnswer ? (
                <button type="button" style={primaryBtnStyle} onClick={checkAnswer} disabled={!selected}>Check Answer</button>
              ) : (
                <button type="button" style={primaryBtnStyle} onClick={next}>{current < questions.length - 1 ? "Next Question →" : "See Final Score"}</button>
              )}
              <button type="button" style={secondaryBtnStyle} onClick={restart}>Restart</button>
            </div>

            {showAnswer && (
              <div style={answerBoxStyle}>
                <div style={explanationBoxStyle}>
                  <strong>✅ Correct answer: {q.correct}</strong>
                  <p style={{ margin: "8px 0 0" }}>{q.explanation}</p>
                </div>
                <div style={lookForBoxStyle}>
                  <strong>🔎 What to look for</strong>
                  <p style={{ margin: "8px 0 0" }}>{q.lookFor}</p>
                </div>
                <div style={eliminateBoxStyle}>
                  <strong>❌ How to eliminate wrong answers</strong>
                  <p style={{ margin: "8px 0 0" }}>{q.eliminate}</p>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      <div style={{ marginTop: "24px" }}>
        <Link href="/cpt" style={{ textDecoration: "none", color: "#0f766e", fontWeight: 700 }}>← Back to CPT</Link>
      </div>
    </main>
  );
}
