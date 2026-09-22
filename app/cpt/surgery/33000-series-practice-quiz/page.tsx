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
    topic: "Pericardium",
    question: "A physician aspirates pericardial fluid and leaves a catheter in place for continued drainage, in a 45-year-old patient with no congenital cardiac anomaly. What's coded?",
    options: [
      "A. 33016, Pericardiocentesis",
      "B. 33017, Pericardial drainage with indwelling catheter, percutaneous, age 6+",
      "C. 33018, same but with a congenital cardiac anomaly",
      "D. 33019, using CT guidance",
    ],
    correct: "B",
    explanation: "The catheter is left in place (not just aspirated and removed), the patient is over 6, and there's no congenital anomaly — that's 33017.",
    lookFor: "\"Catheter left in place\" is the trigger for 33017/33018/33019 instead of the simple pericardiocentesis code 33016.",
    eliminate: "A is for no catheter left behind; C requires a congenital anomaly or age under 6, neither of which applies here.",
  },
  {
    topic: "Pacemaker/ICD",
    question: "A patient needs an initial pacemaker generator inserted onto an existing dual-lead system (no new leads placed). What's coded?",
    options: [
      "A. 33208, full dual-chamber system",
      "B. 33213, generator only, onto existing dual leads",
      "C. 33228, generator removal with replacement, dual lead system",
      "D. 33217, insertion of two transvenous electrodes only",
    ],
    correct: "B",
    explanation: "\"Initial generator insertion, existing dual leads, no leads placed\" maps directly to 33213 per the scenario reference table.",
    lookFor: "Existing leads + generator-only = the 33212/33213/33221 family, not the full-system codes (33206–33208).",
    eliminate: "A describes a full new system with new leads, which isn't what happened; C is for removing AND replacing a generator, not an initial insertion.",
  },
  {
    topic: "Aortic Valve",
    question: "A patient undergoes TAVR via a percutaneous femoral artery approach. Two operators performed distinct parts of the procedure. How is this reported?",
    options: [
      "A. 33361 twice, once per operator",
      "B. 33361 with modifier 62",
      "C. 33361 and 33362 together",
      "D. 33361 with modifier 80 (assistant surgeon)",
    ],
    correct: "B",
    explanation: "TAVR/TAVI always requires two physician operators, and their combined work is reported with modifier 62 (co-surgeon) on the single matching access-route code.",
    lookFor: "\"Two operators\" + TAVR is always modifier 62 on one code, not two separate codes or an assistant-surgeon modifier.",
    eliminate: "A double-reports the same code incorrectly; C mixes two different access-route codes, which doesn't reflect a single femoral approach; D uses the wrong modifier concept (assistant, not co-surgeon).",
  },
  {
    topic: "Aortic Valve",
    question: "A patient undergoes open aortic valve replacement using their own translocated pulmonary valve, WITH transventricular annulus enlargement, in the same operative session. What's coded?",
    options: [
      "A. 33413 and 33412 together",
      "B. 33440 alone",
      "C. 33405 with modifier 22",
      "D. 33413 alone",
    ],
    correct: "B",
    explanation: "33440 (Ross-Konno) is the single all-in-one code for pulmonary valve translocation combined with annulus enlargement — it's never reported together with the individual Ross (33413) or Konno (33412) codes.",
    lookFor: "\"Both\" pulmonary valve translocation AND annulus enlargement together is the exact trigger for the combined 33440 code.",
    eliminate: "A incorrectly bills the two individual component codes together, which the guideline specifically excludes once 33440 applies.",
  },
  {
    topic: "CABG",
    question: "A patient receives 2 saphenous vein grafts and 1 internal mammary artery graft in the same CABG operation. What's coded?",
    options: [
      "A. 33511 alone (2 venous grafts)",
      "B. 33518 (2 venous grafts, combined) plus 33533 (1 arterial graft)",
      "C. 33511 plus 33533",
      "D. 33518 alone",
    ],
    correct: "B",
    explanation: "Combining venous and arterial grafts in the same operation requires the combined-grafting venous add-on code (33518, for 2 venous grafts) reported together with the matching arterial graft code (33533, for 1 arterial graft) — never the standalone venous-only code.",
    lookFor: "Any CABG question mentioning BOTH a vein graft and an arterial graft (like the internal mammary artery) in the same session is testing the combined-code pairing, not the venous-only family.",
    eliminate: "A and C both incorrectly use the venous-only code (33511), which is reserved for cases using vein grafts exclusively.",
  },
  {
    topic: "CABG",
    question: "How does CPT define the number of coronary bypass grafts for code selection purposes?",
    options: [
      "A. The number of separate skin incisions made",
      "B. The number of distal anastomoses where the graft is sutured to a diseased coronary artery",
      "C. The number of harvested graft segments",
      "D. The number of coronary arteries with any degree of disease",
    ],
    correct: "B",
    explanation: "CPT specifically counts the number of distal anastomoses (contact points) — not incisions, harvested segments, or diseased vessels in general.",
    lookFor: "This is a direct definitional fact worth memorizing outright — \"count the distal anastomoses\" is the book's own explicit instruction.",
    eliminate: "A, C, and D each substitute a plausible-sounding but incorrect counting method.",
  },
  {
    topic: "Aorta & Great Vessels",
    question: "A patient undergoes ascending aorta graft with aortic root replacement using a valved conduit and coronary artery reconstruction, for an aneurysm (not a dissection). What's coded?",
    options: [
      "A. 33858",
      "B. 33859",
      "C. 33863 (Bentall procedure)",
      "D. 33864 (David/Yacoub procedure)",
    ],
    correct: "C",
    explanation: "A valved conduit with coronary reconstruction is the defining feature of the Bentall procedure (33863) — the valve is replaced, not preserved, which rules out 33864 (the valve-sparing David/Yacoub procedure).",
    lookFor: "\"Valved conduit\" = valve replaced = Bentall (33863). \"Valve-sparing\" or \"root remodeling with the native valve preserved\" = David/Yacoub (33864).",
    eliminate: "A and B are the simpler ascending graft codes without root replacement, which doesn't match the more extensive procedure described; D is the valve-sparing alternative, not what's described here.",
  },
  {
    topic: "Aorta & Great Vessels (TEVAR)",
    question: "What anatomic landmark determines TEVAR code selection?",
    options: [
      "A. The underlying pathology (aneurysm vs. dissection vs. traumatic disruption)",
      "B. Coverage of the endograft relative to the left subclavian artery",
      "C. The manufacturer of the endograft device",
      "D. Whether the patient is symptomatic or asymptomatic",
    ],
    correct: "B",
    explanation: "TEVAR code selection is based on the most proximal extent of thoracic aortic coverage relative to the left subclavian artery — the underlying pathology does not change which base code applies.",
    lookFor: "\"Coverage relative to the left subclavian artery\" is the one fact to memorize for the entire TEVAR family — everything else (aneurysm, dissection, ulcer, trauma) is coded the same way once coverage is known.",
    eliminate: "A is a tempting trap since pathology is usually a major factor elsewhere in CPT, but TEVAR specifically does not split by pathology type.",
  },
  {
    topic: "ECMO/ECLS",
    question: "A patient is initiated on veno-arterial ECMO on Monday. On Tuesday, a different physician manages the ECMO circuit and parameters. What does the Tuesday physician report?",
    options: [
      "A. 33947, initiation, veno-arterial",
      "B. 33949, daily management, veno-arterial",
      "C. Both 33947 and 33949",
      "D. Nothing — only the initiating physician can bill for ECMO care",
    ],
    correct: "B",
    explanation: "Daily management (33949 for veno-arterial) is a distinct service from initiation (33947), reported by whichever physician performs that day's management — even if a different physician started the circuit the day before.",
    lookFor: "\"Different physician, different day, managing the circuit\" is the exact setup for a daily management code, not initiation.",
    eliminate: "A wrongly reuses the initiation code for ongoing management; D incorrectly assumes only one physician can ever bill ECMO services.",
  },
  {
    topic: "Central Venous Access",
    question: "A PICC line (no port or pump) is placed in a 40-year-old patient using ultrasound guidance, with tip position confirmed as part of the guided placement. Is a same-day chest X-ray to confirm tip position separately billable?",
    options: [
      "A. Yes, chest X-ray is always separately billable for line placement",
      "B. No — tip confirmation is already bundled into the imaging-guided PICC code (36573)",
      "C. Yes, but only with modifier 59",
      "D. No, but only because the patient is over 5",
    ],
    correct: "B",
    explanation: "The imaging-guided PICC codes (36572/36573/36584) already bundle tip-position confirmation — a same-day chest X-ray for that purpose is not separately billable.",
    lookFor: "\"Guided placement with tip confirmed\" is the cue that the confirmation work is already included — look for this bundling rule whenever a chest X-ray is mentioned alongside PICC placement.",
    eliminate: "A and C both wrongly assume the X-ray is billable; D attaches the wrong reasoning (age doesn't determine this rule, the imaging-guidance bundling does).",
  },
  {
    topic: "Dialysis Circuit",
    question: "During a percutaneous dialysis circuit intervention, thrombus is found and treated with mechanical thrombectomy, followed by peripheral segment angioplasty. No stent is placed. What's coded?",
    options: [
      "A. 36901",
      "B. 36904",
      "C. 36905",
      "D. 36904 and 36902 together",
    ],
    correct: "C",
    explanation: "Thrombus found + thrombectomy + peripheral angioplasty (no stent) lands on 36905, which already includes the thrombectomy (36904) and diagnostic angiography beneath it — a single ladder-level code.",
    lookFor: "\"Thrombus present\" routes to the 904–906 ladder, not the 901–903 (no-thrombus) ladder; the highest level of work performed (angioplasty, here) picks the exact code.",
    eliminate: "A and D both incorrectly reach for the non-thrombus ladder or double-report a step that's already bundled into 36905.",
  },
  {
    topic: "IABP",
    question: "An intra-aortic balloon pump is inserted via an open femoral artery approach. What's the code?",
    options: [
      "A. 33967, percutaneous insertion",
      "B. 33970, insertion through the femoral artery, open approach",
      "C. 33973, insertion through the ascending aorta",
      "D. 33990, percutaneous VAD insertion",
    ],
    correct: "B",
    explanation: "IABP insertion codes are split by approach: 33967/33968 for percutaneous, 33970/33971 for open femoral, and 33973/33974 for the ascending aorta — each approach has its own paired insertion and removal code.",
    lookFor: "\"Open femoral artery approach\" for an IABP is the specific cue for 33970, distinct from both the percutaneous IABP codes and the unrelated VAD codes (33990+).",
    eliminate: "A is the percutaneous version, not open; C is a different approach entirely (ascending aorta); D confuses IABP with the separate VAD code family.",
  },
  {
    topic: "Hemodialysis Access",
    question: "A surgeon creates a direct arteriovenous fistula using upper-arm cephalic vein transposition. What's the code?",
    options: [
      "A. 36818",
      "B. 36821",
      "C. 36825",
      "D. 36830",
    ],
    correct: "A",
    explanation: "36818 is specifically for direct AV anastomosis by upper-arm cephalic vein transposition — one of four mutually exclusive direct-anastomosis variants (36818–36821) picked by which vein/site is used.",
    lookFor: "\"Cephalic vein\" + \"upper arm\" + \"transposition\" is the precise combination that identifies 36818 among the four direct-anastomosis codes.",
    eliminate: "C and D both describe graft material bridging artery and vein (autogenous or synthetic), not a direct anastomosis — a different concept entirely from vein transposition.",
  },
  {
    topic: "Thrombectomy",
    question: "During a planned angioplasty, the physician incidentally retrieves a short thrombus segment. How is the thrombus removal coded?",
    options: [
      "A. 37184, primary mechanical thrombectomy",
      "B. 37184 and 37185 together",
      "C. 37186, secondary mechanical thrombectomy",
      "D. Not separately coded — it's bundled into the angioplasty",
    ],
    correct: "C",
    explanation: "An incidental short thrombus/embolus retrieval during another planned intervention is \"secondary\" thrombectomy (37186), an add-on — distinct from \"primary\" thrombectomy (37184/37185), which applies when thrombus was already diagnosed and the thrombectomy itself was the planned procedure.",
    lookFor: "\"Incidentally\" or \"during another intervention\" is the signature phrase for secondary thrombectomy (37186), not primary.",
    eliminate: "A and B both apply the primary thrombectomy codes to a scenario that was planned as something else entirely, which is exactly what 37186 is designed to distinguish.",
  },
  {
    topic: "EVAR",
    question: "A ruptured infrarenal abdominal aortic aneurysm is repaired with an aorto-bi-iliac endograft. An extension ends in the infrarenal aorta below the renal arteries, and both distal limb extensions end in the common iliac arteries. What's coded?",
    options: [
      "A. 34705",
      "B. 34706 + 34709",
      "C. 34706 + 34710",
      "D. 34706",
    ],
    correct: "D",
    explanation: "Aorto-bi-iliac repair is 34705 (other than rupture) or 34706 (rupture). Extensions that end in the infrarenal aorta below the renals or in the common iliac arteries are inside the treatment zone and are included in the base code, so 34706 stands alone.",
    lookFor: "\"Ruptured\" flips the odd code to the even code; \"extensions end in the aorta or common iliac\" means they are bundled.",
    eliminate: "A ignores the rupture. B adds 34709, which is only for extensions ending beyond the common iliacs or above the renals. C uses 34710, a code for DELAYED extensions after a prior repair.",
  },
  {
    topic: "EVAR",
    question: "During an elective (non-ruptured) aorto-bi-iliac endograft repair, two extension prostheses (not docking limbs) are placed and both end in the right external iliac artery. What is added to the base code for the extensions?",
    options: [
      "A. +34709, once",
      "B. +34709, twice — once per extension",
      "C. Nothing — all extensions are included",
      "D. 34710 and +34711",
    ],
    correct: "A",
    explanation: "Extensions that end in the internal iliac, external iliac, or common femoral artery are reported with add-on 34709 — but only ONCE per vessel treated, no matter how many extensions are placed in that vessel.",
    lookFor: "The extension ends BEYOND the common iliac artery, and there are multiple extensions in ONE vessel — once per vessel.",
    eliminate: "B counts per extension instead of per vessel. C would be right only if the extensions ended in the common iliac. D lists the delayed-placement codes.",
  },
  {
    topic: "EVAR vs. Occlusive Disease",
    question: "A covered stent is placed for atherosclerotic occlusive disease isolated to the abdominal aorta (no aneurysm). What's the correct code family?",
    options: [
      "A. 34701",
      "B. 34703",
      "C. 37236",
      "D. 37221",
    ],
    correct: "C",
    explanation: "EVAR/FEVAR codes treat disease of the aortic WALL (aneurysm, dissection, ulcer, trauma), not narrowing of the lumen. A covered stent for occlusive disease isolated to the aorta is reported with 37236 (37237 for each additional). 37221 was deleted in CPT 2026 — iliac occlusive disease now uses 37258–37261.",
    lookFor: "\"Occlusive disease\" / \"atherosclerotic\" signals narrowing, which sends you out of the EVAR family.",
    eliminate: "A and B are EVAR codes for wall disease. D is a deleted code that some older training material still lists.",
  },
  {
    topic: "EVAR Access",
    question: "During an endovascular aortic repair, a 14 French sheath is placed percutaneously through the right femoral artery and a closure device is used at the end. What's added for the access?",
    options: [
      "A. +34812",
      "B. +34714",
      "C. Nothing — percutaneous access is always included",
      "D. +34713",
    ],
    correct: "D",
    explanation: "Percutaneous access with a sheath smaller than 12 French is included in the EVAR code. A large sheath (12 French or larger) with percutaneous closure is add-on 34713. 34812 and 34714 are for OPEN femoral exposure.",
    lookFor: "Sheath size (12 French or larger) plus a percutaneous closure device.",
    eliminate: "A and B describe open surgical exposure. C is true only for sheaths smaller than 12 French.",
  },
  {
    topic: "Catheter Placement",
    question: "Through femoral access, a catheter is advanced into the abdominal aorta, then selectively into the superior mesenteric artery, and then into a second-order branch of that artery — all in one vascular family. What is reported for the catheter placement?",
    options: [
      "A. 36200 + 36245 + 36246",
      "B. 36245 + 36246",
      "C. 36246",
      "D. 36246 + 36248",
    ],
    correct: "C",
    explanation: "Catheter-placement codes are progressive hierarchies: less intensive placements are packaged into more intensive ones. The deepest level reached in the family is a second-order branch, so only 36246 is reported; the aortic (36200) and first-order (36245) placements are packaged in.",
    lookFor: "One vascular family, and the tip went as deep as the second-order branch.",
    eliminate: "A and B stack lower levels that are already packaged. D adds 36248, which is for each ADDITIONAL second-order or higher branch beyond the initial one.",
  },
  {
    topic: "Catheter Placement",
    question: "A catheter tip is parked at the origin of the celiac artery and contrast is injected, but the tip never enters the celiac artery. How is the catheter placement classified?",
    options: [
      "A. Non-selective — 36200",
      "B. Selective first-order — 36245",
      "C. Selective second-order — 36246",
      "D. Selective thoracic branch — 36215",
    ],
    correct: "A",
    explanation: "Selective catheterization requires the tip to go INTO a branch — not merely 'at' or 'near the origin' of it. A tip that stays in the aorta is non-selective (36200).",
    lookFor: "'Parked at the origin' — the tip never entered the branch.",
    eliminate: "B and C assume the branch was entered. D is a thoracic/brachiocephalic branch code, and the celiac is an abdominal branch.",
  },
  {
    topic: "Bypass Graft",
    question: "A femoral-popliteal bypass uses the patient's saphenous vein, harvested by the same surgeon. How is the vein harvest handled?",
    options: [
      "A. Add 35572",
      "B. Add 35500",
      "C. Add 35682",
      "D. It is included in the bypass code — not reported separately",
    ],
    correct: "D",
    explanation: "Procurement of the saphenous vein graft is part of the description of the work for the vein bypass codes and is not reported separately or as co-surgery.",
    lookFor: "The conduit is the SAPHENOUS vein.",
    eliminate: "A is for a femoropopliteal vein segment, B is for an upper-extremity vein, and C is an autogenous composite graft add-on.",
  },
  {
    topic: "Bypass Graft",
    question: "For the same femoral-popliteal bypass, the saphenous vein is unsuitable, so the surgeon harvests one segment of the patient's basilic vein from the arm. What is added?",
    options: [
      "A. Nothing — harvest is always included",
      "B. +35500",
      "C. +35572",
      "D. +35681",
    ],
    correct: "B",
    explanation: "Only saphenous vein harvest is bundled. Harvesting an upper-extremity vein for a lower-extremity or coronary bypass is reported with add-on 35500 in addition to the bypass.",
    lookFor: "The vein came from the ARM (upper extremity), not the saphenous.",
    eliminate: "A applies only to the saphenous vein. C is a femoropopliteal vein segment. D is a prosthetic-plus-vein composite graft.",
  },
  {
    topic: "CABG",
    question: "During a three-vessel venous CABG, a surgical assistant (not the primary surgeon) harvests the saphenous vein. How is this reported?",
    options: [
      "A. Add 35500 to the CABG",
      "B. Add 33508 to the CABG",
      "C. Add modifier 80 to the bypass code for the assistant",
      "D. Report 35572 for the harvest",
    ],
    correct: "C",
    explanation: "Saphenous vein procurement is included in the CABG code. When a surgical assistant performs the graft procurement, modifier 80 is added to the bypass code (33510–33516 for venous grafts).",
    lookFor: "Who performed the procurement — the assistant, not the surgeon — and the vein is saphenous.",
    eliminate: "A and D are for non-saphenous veins. B is the endoscopic vein-harvest add-on, which the scenario doesn't describe.",
  },
  {
    topic: "ECMO",
    question: "A percutaneous femoral ECMO cannula (patient older than 6) is removed and a new cannula is placed in the SAME femoral vessel. What's reported?",
    options: [
      "A. 33952 only",
      "B. 33966 + 33952",
      "C. 33958",
      "D. 33947",
    ],
    correct: "A",
    explanation: "Replacing an ECMO/ECLS cannula in the same vessel is reported with the insertion code only (33952 here — percutaneous peripheral, age 6 or older).",
    lookFor: "\"Same vessel\" replacement.",
    eliminate: "B is for a DIFFERENT vessel. C is repositioning, which is a different service. D is circuit initiation.",
  },
  {
    topic: "ECMO",
    question: "A percutaneous femoral ECMO cannula (patient older than 6) is removed, and a new cannula is placed percutaneously in a DIFFERENT vessel. What's reported?",
    options: [
      "A. 33952 only",
      "B. 33958",
      "C. 33966 + 33952",
      "D. 33952 + 33958",
    ],
    correct: "C",
    explanation: "When a cannula is removed from one vessel and a new one is placed in a different vessel, report two codes: the decannulation code (33966, percutaneous, age 6 or older) and the insertion code (33952).",
    lookFor: "\"Different vessel\" — two events (removal + insertion) at two sites.",
    eliminate: "A ignores the removal. B is repositioning. D adds repositioning, which was never performed.",
  },
  {
    topic: "Heart Transplant",
    question: "An artificial heart is removed and a donor heart is transplanted in the same operation. What's reported?",
    options: [
      "A. 33928",
      "B. 33927 + 33945",
      "C. 33945 + 33929",
      "D. 33929 alone",
    ],
    correct: "C",
    explanation: "Heart transplant is 33945, and removing the total replacement heart system for the transplant is add-on 33929, reported with 33945.",
    lookFor: "Artificial heart removed FOR a donor heart — the add-on pairs with the transplant code.",
    eliminate: "A is remove-and-replace with another artificial heart. B implants an artificial heart. D is an add-on and can't stand alone.",
  },
  {
    topic: "Heart Transplant",
    question: "A surgeon performs backbench work on a cadaver donor HEART (not heart-lung) allograft, dissecting it and preparing the aorta, vena cavae, pulmonary artery, and left atrium for implantation. Which code?",
    options: [
      "A. 33940",
      "B. 33933",
      "C. 33945",
      "D. 33944",
    ],
    correct: "D",
    explanation: "The three components of a heart transplant each have a code: donor cardiectomy (33940), backbench work (33944), and recipient transplant (33945). The heart-lung equivalents are 33930, 33933, and 33935.",
    lookFor: "'Backbench' plus 'heart only'.",
    eliminate: "A is the donor cardiectomy, B is backbench for heart AND lung, and C is the recipient operation.",
  },
  {
    topic: "Percutaneous VAD",
    question: "A percutaneous left heart VAD (arterial access only) is inserted and, during the same session, repositioned under imaging guidance. What's reported?",
    options: [
      "A. 33990 only",
      "B. 33990 + 33993",
      "C. 33990 + 33993 with modifier 59",
      "D. 33990 + 33992",
    ],
    correct: "A",
    explanation: "Repositioning a percutaneous VAD at the same session as insertion is not separately reportable. 33993 is reserved for repositioning with imaging guidance at a separate and distinct session (then with modifier 59 if on the same day).",
    lookFor: "Same session as insertion.",
    eliminate: "B and C report a repositioning that is packaged. D is a removal code.",
  },
  {
    topic: "TEVAR",
    question: "Several weeks after a thoracic endovascular repair, a proximal extension prosthesis (not involving coverage of the left subclavian artery) is placed. Which code?",
    options: [
      "A. 33880",
      "B. 33883",
      "C. 33884",
      "D. 33886",
    ],
    correct: "B",
    explanation: "33883 is the delayed placement of a proximal extension prosthesis after a prior thoracic endovascular repair. 33886 is the distal extension. 33884 was deleted in CPT 2026, and 33880 is the primary repair code.",
    lookFor: "'Delayed' and 'proximal'.",
    eliminate: "A is the primary repair. C is a deleted code some older material still lists. D is the distal extension.",
  },
  {
    topic: "Pacemaker Generator Replacement",
    question: "A dual-chamber pacemaker's pulse generator is removed and replaced with a new generator. Both existing leads are left in place and tested. What's reported?",
    options: [
      "A. 33228",
      "B. 33228 + 33233",
      "C. 33213",
      "D. 33208",
    ],
    correct: "A",
    explanation: "Removing and replacing only the pulse generator is reported by the final number of leads — 33228 for a dual-lead system. Removal of the old generator is already included, so 33233 is not added.",
    lookFor: "Generator replaced, leads untouched, two leads — 33227–33229 family, dual = 33228.",
    eliminate: "B adds a removal that is already included. C is insertion of a generator onto existing leads when NO old generator is removed. D is a full new system, which involves new lead work.",
  },
  {
    topic: "Skin Pocket",
    question: "During a pacemaker generator replacement, the physician also relocates the skin pocket because of erosion. What is reported for the pocket?",
    options: [
      "A. Nothing — pocket work is always included",
      "B. 33223",
      "C. 33233",
      "D. 33222, in addition to the generator replacement",
    ],
    correct: "D",
    explanation: "Revising the skin pocket is included, but relocating it is a separate service: 33222 for a pacemaker pocket, 33223 for an ICD pocket. It is reported in addition to a generator replacement.",
    lookFor: "'Relocates' the pocket (not just revises), and it is a PACEMAKER.",
    eliminate: "A applies to revision only. B is the ICD pocket code. C is removal of a generator, which has nothing to do with the pocket.",
  },
  {
    topic: "ICD Testing",
    question: "A subcutaneous ICD system is inserted (33270), and defibrillation threshold testing is performed during the insertion. Is the testing separately reported?",
    options: [
      "A. Yes — 93640",
      "B. Yes — 93642",
      "C. No — DFT testing during S-ICD insertion is not separately reportable",
      "D. Yes — 93641",
    ],
    correct: "C",
    explanation: "DFT testing during a transvenous ICD insertion or replacement is separately reportable (93640, 93641), but DFT testing during subcutaneous ICD system insertion is not. At follow-up or at replacement, 93642 or 93644 apply.",
    lookFor: "The device is a SUBCUTANEOUS ICD and the testing is at the time of insertion.",
    eliminate: "A and D are for transvenous ICD insertion or replacement. B is for follow-up or replacement testing.",
  },
  {
    topic: "TAVR Bypass",
    question: "A TAVR is performed by percutaneous femoral approach with percutaneous peripheral cardiopulmonary bypass support. What is added to 33361?",
    options: [
      "A. +33368",
      "B. +33369",
      "C. +33367",
      "D. Nothing — bypass is included in TAVR",
    ],
    correct: "C",
    explanation: "Cardiopulmonary bypass with TAVR is an add-on chosen by cannulation: +33367 percutaneous peripheral, +33368 open peripheral, +33369 central.",
    lookFor: "'Percutaneous peripheral' cannulation.",
    eliminate: "A is for OPEN peripheral cannulation, B is central, and D is wrong because bypass is not bundled into the TAVR code.",
  },
  {
    topic: "EVAR — Iliac Branched",
    question: "An isolated iliac branched endograft is placed for a NON-ruptured common iliac aneurysm, unilateral, at a session with no aorto-iliac endograft. What's reported?",
    options: [
      "A. +34717",
      "B. 34707",
      "C. 37799",
      "D. 34718",
    ],
    correct: "D",
    explanation: "34718 is the stand-alone iliac branched endograft code for non-rupture. +34717 is the add-on used when the iliac branched device is placed at the same session as an aorto-iliac endograft. (A ruptured isolated iliac branched repair goes to unlisted code 37799.)",
    lookFor: "Stand-alone (no aorto-iliac endograft at the session) and NOT ruptured.",
    eliminate: "A requires an aorto-iliac endograft at the same session. B is an ilio-iliac tube endograft, not a branched device. C is only for the ruptured case.",
  },
  {
    topic: "EVAR — Delayed Extension",
    question: "Months after an EVAR, a distal extension is placed in the right iliac artery for an endoleak, and another in the left iliac artery (two different vessels). What's reported?",
    options: [
      "A. 34710 + 34711",
      "B. 34709 twice",
      "C. 34710 twice",
      "D. 34712",
    ],
    correct: "A",
    explanation: "Delayed extension placement uses 34710 for the initial vessel treated and add-on 34711 for each additional vessel.",
    lookFor: "'Months after' — delayed placement, in two vessels.",
    eliminate: "B is the same-session extension add-on. C repeats the base code instead of using the add-on. D is for fixation devices (anchors, screws, tacks).",
  },
  {
    topic: "VAD Replacement",
    question: "The entire implantable single-ventricle VAD system (pump and cannulas) is replaced. What's reported?",
    options: [
      "A. 33982",
      "B. 33980 + 33979",
      "C. 33983",
      "D. 33979",
    ],
    correct: "D",
    explanation: "Replacing the entire implantable VAD system is reported with the insertion code (33979). Removing the system being replaced is not reported separately. The pump-only replacement codes (33982/33983) are for replacing just the pump.",
    lookFor: "Pump AND cannulas replaced — the whole system.",
    eliminate: "A and C are pump-only replacements. B reports the removal that is packaged into the replacement.",
  },
  {
    topic: "Venipuncture",
    question: "A physician performs skilled venipuncture of the femoral vein in a 2-year-old. What's reported?",
    options: [
      "A. 36410",
      "B. 36400",
      "C. 36415",
      "D. 36406",
    ],
    correct: "B",
    explanation: "36400 is skilled venipuncture in a patient younger than 3 years, femoral or jugular vein. 36410 is the age-3-or-older version. 36415 is routine specimen collection.",
    lookFor: "Age under 3 plus the femoral vein.",
    eliminate: "A is for age 3 or older. C is routine collection. D is 'other vein' — the scenario names the femoral vein.",
  },
  {
    topic: "Endovenous Ablation",
    question: "Laser ablation is performed on the great saphenous vein, and then on the small saphenous vein of the same leg through a separate access site. What's reported?",
    options: [
      "A. 36478 twice",
      "B. 36478 + 36479 with modifier 50",
      "C. 36478 + 36479",
      "D. 36479 twice",
    ],
    correct: "C",
    explanation: "Ablation codes are built as a first-vein code plus an add-on for each subsequent vein treated through a separate access site in the same extremity: 36478 for the first vein and add-on 36479 for the next (36479 is reported once per extremity).",
    lookFor: "Same leg, second vein, separate access.",
    eliminate: "A repeats the base code. B adds a bilateral modifier for a same-leg case. D leaves out the base code.",
  },
  {
    topic: "Cervicocerebral Angiography",
    question: "Selective catheterization of BOTH common carotid arteries, each with ipsilateral extracranial carotid angiography, is performed in one session. What's reported?",
    options: [
      "A. 36222 twice with modifier 59",
      "B. 36222 once",
      "C. 36221",
      "D. 36222 with modifier 50",
    ],
    correct: "D",
    explanation: "Bilateral carotid catheterization with imaging is reported with the unilateral code and modifier 50 — here 36222 with modifier 50.",
    lookFor: "The same territory studied on both sides.",
    eliminate: "A uses modifier 59, which is for a DIFFERENT territory on each side. B leaves out one side. C is non-selective placement in the thoracic aorta, which is packaged into selective codes.",
  },
  {
    topic: "Renal Angiography",
    question: "Selective catheterization of both main renal arteries with renal angiography and flush aortogram is performed. What's reported?",
    options: [
      "A. 36251 twice",
      "B. 36251 with modifier 50",
      "C. 36252",
      "D. 36253",
    ],
    correct: "C",
    explanation: "36251 is unilateral and 36252 is the bilateral first-order main renal artery code. 36253/36254 are for superselective placement in second-order or higher renal branches.",
    lookFor: "Both main renal arteries — the bilateral code exists.",
    eliminate: "A and B stack or modify the unilateral code when a bilateral code exists. D is superselective, which the scenario doesn't describe.",
  },
];

const mainStyle = { maxWidth: "900px", margin: "0 auto", padding: "36px 24px 64px", minHeight: "100vh", background: "#fdf6f6", color: "#291a1a", fontFamily: "Arial, sans-serif" };
const heroStyle = { background: "linear-gradient(135deg, #450a0a, #b91c1c)", color: "white", padding: "40px 36px", borderRadius: "18px", marginBottom: "24px", boxShadow: "0 12px 28px rgba(69,10,10,0.22)" };
const kickerStyle = { margin: "0 0 10px", color: "#fecaca", fontWeight: 800, letterSpacing: "0.08em", fontSize: "13px" };
const navStyle = { display: "flex", flexWrap: "wrap" as const, gap: "10px", marginBottom: "22px" };
const navLinkStyle = { textDecoration: "none", color: "#b91c1c", background: "#ffffff", border: "1px solid #f0d7d7", borderRadius: "999px", padding: "9px 14px", fontWeight: 700, fontSize: "13.5px" };
const cardStyle = { background: "#ffffff", border: "1px solid #f0e2e2", borderRadius: "14px", padding: "26px 28px", boxShadow: "0 5px 16px rgba(69,10,10,0.06)" };
const progressStyle = { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px", fontSize: "13px", color: "#7a3a3a", fontWeight: 700 };
const topicChipStyle = { background: "#fff1f0", border: "1px solid #fecaca", color: "#b91c1c", borderRadius: "999px", padding: "4px 12px", fontWeight: 800, fontSize: "12px" };
const questionStyle = { fontSize: "17px", lineHeight: 1.6, margin: "14px 0 18px", color: "#111827" };
const optionsWrapStyle = { display: "grid", gap: "10px" };
const buttonBaseStyle: React.CSSProperties = { textAlign: "left", padding: "13px 16px", borderRadius: "10px", border: "1px solid #f0d7d7", background: "#fff", cursor: "pointer", fontSize: "14.5px", lineHeight: 1.5 };
const actionsRowStyle = { display: "flex", gap: "12px", marginTop: "20px", flexWrap: "wrap" as const };
const primaryBtnStyle = { padding: "11px 22px", borderRadius: "999px", border: "none", background: "#b91c1c", color: "#fff", fontWeight: 800, cursor: "pointer", fontSize: "14px" };
const secondaryBtnStyle = { padding: "11px 22px", borderRadius: "999px", border: "1px solid #f0d7d7", background: "#fff", color: "#b91c1c", fontWeight: 800, cursor: "pointer", fontSize: "14px" };
const answerBoxStyle = { marginTop: "22px", display: "grid", gap: "12px" };
const explanationBoxStyle = { background: "#f0fdf4", border: "1px solid #bbf7d0", borderLeft: "5px solid #16a34a", borderRadius: "10px", padding: "14px 16px", lineHeight: 1.65, fontSize: "14px" };
const lookForBoxStyle = { background: "#eff6ff", border: "1px solid #bfdbfe", borderLeft: "5px solid #2563eb", borderRadius: "10px", padding: "14px 16px", lineHeight: 1.65, fontSize: "14px" };
const eliminateBoxStyle = { background: "#fef2f2", border: "1px solid #fecaca", borderLeft: "5px solid #dc2626", borderRadius: "10px", padding: "14px 16px", lineHeight: 1.65, fontSize: "14px" };
const scoreStyle = { textAlign: "center" as const, padding: "40px 20px" };

export default function SurgeryThirtyThreeThousandPracticeQuizPage() {
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

  function next() {
    if (current < questions.length - 1) {
      setCurrent((c) => c + 1);
      setSelected(null);
      setShowAnswer(false);
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
        <p style={kickerStyle}>33,000 SERIES · PRACTICE QUIZ</p>
        <h1 style={{ margin: 0, fontSize: "clamp(24px, 5vw, 38px)" }}>Cardiovascular System Practice Quiz</h1>
        <p style={{ margin: "10px 0 0", fontSize: "15.5px", lineHeight: 1.5 }}>40 scenario questions spanning all three reviewer parts — pacemakers, valves, CABG, aorta/TEVAR, EVAR, bypass grafts, catheter placement, ECMO/VAD, heart transplant, IABP, and vascular access.</p>
      </header>

      <nav aria-label="Cardiovascular quiz navigation" style={navStyle}>
        <Link href="/cpt/surgery/33,000" style={navLinkStyle}>Cardiovascular home</Link>
        <Link href="/cpt/surgery/33000-series-guidelines-reviewer" style={navLinkStyle}>Reviewer Part 1</Link>
        <Link href="/cpt/surgery/33000-series-guidelines-reviewer-part-2" style={navLinkStyle}>Part 2</Link>
        <Link href="/cpt/surgery/33000-series-guidelines-reviewer-part-3" style={navLinkStyle}>Part 3</Link>
        <Link href="/cpt/surgery/33000-series-discussion-guide" style={navLinkStyle}>Discussion Guide</Link>
        <Link href="/cpt/surgery/33000-series-flashcards" style={navLinkStyle}>Flashcards</Link>
      </nav>

      <div style={cardStyle}>
        {finished ? (
          <div style={scoreStyle}>
            <h2 style={{ margin: "0 0 10px" }}>Quiz Complete</h2>
            <p style={{ fontSize: "40px", fontWeight: 800, color: "#b91c1c", margin: "0 0 10px" }}>{score} / {questions.length}</p>
            <p style={{ color: "#7a3a3a", marginBottom: "22px" }}>
              {score === questions.length ? "Perfect score — this series is solid." : score / questions.length >= 0.7 ? "Good run — review the ones you missed, then try again." : "Worth another pass — revisit the Guidelines Reviewer for the topics you missed."}
            </p>
            <button type="button" style={primaryBtnStyle} onClick={restart}>Restart Quiz</button>
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
                  style = { ...style, borderColor: "#b91c1c", background: "#fff1f0" };
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
        <Link href="/cpt/surgery/33,000" style={{ textDecoration: "none", color: "#b91c1c", fontWeight: 700 }}>← Back to Cardiovascular System</Link>
      </div>
    </main>
  );
}
