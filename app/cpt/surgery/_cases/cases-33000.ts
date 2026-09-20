import type { SolvedCase } from "./solved-case";

const DECK = "Scenario from your Cardiovascular deck — the slide shows no answer, so it is worked out from CPT 2026";
const NOTES = "From your study notes and prework";

/** Section 4 of Part 1 — Pacemaker or Implantable Defibrillator */
export const pacemakerCases: SolvedCase[] = [
  {
    title: "New permanent pacemaker after a heart attack",
    source: DECK,
    scenario: "The patient recently suffered a heart attack. A team of cardiologists decided he should receive a permanent pacemaker system. A pulse generator was inserted with transvenous electrodes placed on the right ventricle and the right atrium. How is this service reported?",
    steps: [
      "What was done? A whole system was placed (generator AND leads), so use a SYSTEM code — not a lead-only or generator-only code.",
      "Which device? A permanent pacemaker. Permanent is the default whenever the note does not say temporary.",
      "How many leads? Two — right atrium and right ventricle. That is a dual-chamber system, which is 33208.",
      "The heart attack affects the diagnosis code (ICD-10-CM), not the CPT code.",
    ],
    answer: "33208",
  },
  {
    title: "Lead malfunction five days after the implant",
    source: DECK,
    scenario: "Five days after a single-chamber pacemaker was implanted, the patient feels very dizzy and his EKG shows abnormalities. His physician returns him to the operating room and finds the pacemaker lead is malfunctioning. A new pacemaker lead is inserted and the patient recovers nicely. How is this service reported?",
    steps: [
      "What was done? Only a lead was put in — the generator was not touched. So this is a lead-only code, not a system code.",
      "How many leads? One new transvenous lead = 33216 (33217 would be two leads; 33215 is repositioning an existing lead).",
      "When? Five days after the original implant is inside that surgery's follow-up (global) period. An unplanned return to the operating room by the same physician for a related problem takes modifier 78.",
      "The scenario does not mention removing the bad lead. If the old lead were taken out, that could be added separately (33234 or 33235).",
    ],
    answer: "33216-78",
  },
  {
    title: "Depleted battery and an upgrade to a dual-lead device",
    source: DECK,
    scenario: "The patient has had his single-chamber pacemaker system for five years. The battery is depleted. He is also having symptoms that his physician believes need not only a replacement pacemaker but also an upgrade to a dual-lead device. How is this service reported?",
    steps: [
      "A 'battery change' is really a pulse generator change — there is no battery-only code.",
      "But this goes further: the system changes from one lead to two. That is an upgrade from a single-chamber to a dual-chamber system.",
      "The upgrade has its own code, 33214. It already includes removing the old generator, testing the existing lead, inserting the new lead, and inserting the new generator.",
      "So do NOT add a generator replacement (33227–33229), a lead insertion (33216), or a generator removal (33233).",
      "Variant from your notes: if the generator is ALSO moved to a new pocket (for example under the ribcage), that is a skin pocket relocation. Relocation done during a generator replacement is reported separately (33222). Revising the same pocket would be included.",
    ],
    answer: "33214. If the generator is also moved to a new pocket: 33214, 33222.",
  },
  {
    title: "Epicardial pacemaker replaced through a thoracotomy",
    source: DECK,
    scenario: "The patient had a single-chamber epicardial atrial pacemaker for four years. Now she is scheduled for a thoracotomy procedure, during which she will receive a newer model of the same system. How are these services reported?",
    steps: [
      "Epicardial leads sit on the outside of the heart and need an open approach — here a thoracotomy.",
      "Take the old system out: 33236 is removal of a permanent epicardial pacemaker AND its electrode by thoracotomy. It is the single-lead version (33237 is dual-lead), and because it removes the generator too, 33233 is not added.",
      "Put the new lead on: 33202 is insertion of an epicardial electrode by open incision (33203 would be endoscopic).",
      "Put the new generator in: 33212 is a pulse generator for a single-lead system. The codebook says to report 33202 together with the generator code when the same physician does both in the same session.",
    ],
    answer: "33236, 33202, 33212",
  },
  {
    title: "Leadless pacemaker with ventriculography",
    source: NOTES,
    scenario: "A ventriculography was done on the patient. Under fluoroscopic guidance, a leadless pacemaker is then introduced into the patient's right ventricle. Device interrogation was performed immediately after. What CPT codes are reported?",
    steps: [
      "A leadless pacemaker is a generator with a built-in battery and electrode, placed inside the heart chamber. It has its own code: 33274 (insertion or replacement).",
      "33274 already includes imaging guidance (fluoroscopy, venous ultrasound, ventriculography, femoral venography) and the device evaluation (interrogation or programming) when performed.",
      "So the ventriculography and the interrogation are not reported separately.",
    ],
    answer: "33274 only",
  },
];

/** Section 2 of Part 2 — Aortic Valve: TAVR & Open Replacement */
export const aorticValveCases: SolvedCase[] = [
  {
    title: "TAVR through the open femoral artery with bypass support",
    source: DECK,
    scenario: "An 83-year-old patient with cardiac stenosis, coronary artery disease, and moderate heart failure is seen in the facility. His aortic stenosis is life-limiting with severe symptoms, and multiple comorbidities make him high risk for conventional open heart aortic valve replacement. TAVR via open femoral artery approach was performed, and the patient was placed on full extracorporeal cardiopulmonary bypass support with open iliac arterial and venous cannulation. How should these services be reported?",
    steps: [
      "The valve was replaced through a catheter, not an open chest — so this is TAVR (33361–33366), not open valve replacement.",
      "The ACCESS ROUTE picks the code. Open femoral artery approach = 33362.",
      "Bypass is NOT part of the TAVR package. The bypass was set up through open iliac vessels, so it is open peripheral bypass, the add-on 33368. (33367 is percutaneous and 33369 is central.)",
      "TAVR needs two physician operators, and the codebook says the components are reported with modifier 62 (co-surgeons).",
      "Angiography, the balloon valvuloplasty, temporary pacing, and closure are all inside the TAVR code — nothing else to add.",
    ],
    answer: "33362-62 and +33368-62 (modifier 62 on both, following the TAVR two-operator rule). +33368 is an add-on, so it can only ride with a TAVR code (33361–33366).",
  },
  {
    title: "Open aortic valve replacement on the heart-lung machine",
    source: DECK,
    scenario: "A patient has a loud heart murmur and, after study, is found to have severe aortic stenosis. He elects to have an aortic valve replacement. He is taken to the operating room and placed on a heart-lung machine. He then has his aortic valve replaced with a prosthetic valve. How should these services be reported?",
    steps: [
      "Open surgery with the heart-lung machine, so this is the OPEN aortic valve replacement family — not TAVR.",
      "Pick the valve type: a prosthetic valve (not a donor valve and not a stentless tissue valve) = 33405.",
      "The heart-lung machine is already part of the open valve code. Do not add a bypass code.",
    ],
    answer: "33405",
  },
];

/** Section 4 of Part 2 — Coronary Artery Bypass Grafting */
export const cabgCases: SolvedCase[] = [
  {
    title: "Two arterial grafts from the internal mammary",
    source: DECK,
    scenario: "The patient underwent coronary artery bypass using two arterial bypass grafts from the internal mammary. How should these services be reported?",
    steps: [
      "Count grafts by distal anastomoses — the points where each graft is sewn onto a diseased coronary artery. Two grafts = 2.",
      "Both grafts are arterial and none are vein, so the arterial-only family (33533–33536) is used.",
      "Two arterial grafts = 33534.",
      "Taking the internal mammary artery is already included — nothing more to add.",
    ],
    answer: "33534",
  },
  {
    title: "One internal mammary graft plus three saphenous vein grafts",
    source: DECK,
    scenario: "The patient has documented arteriosclerotic coronary heart disease and hypertensive heart disease, benign. Coronary artery bypass of native arteries is performed using one internal mammary artery graft and three reverse saphenous venous grafts. How should these services be reported?",
    steps: [
      "Arteries AND veins were used, so this is a combined graft.",
      "For a combined graft, the ARTERIAL code is the primary code: one arterial graft = 33533.",
      "Then add the venous add-on that matches the number of vein grafts: three venous grafts = +33519. It is used with 33533–33536.",
      "Taking the saphenous vein and the internal mammary artery is included, so no harvest codes.",
      "Diagnosis side (ICD-10-CM): I25.10 for coronary atherosclerosis of a native artery and I11.9 for hypertensive heart disease without heart failure.",
    ],
    answer: "33533, +33519",
  },
  {
    title: "Saphenous vein to the RCA and an arm vein to the LAD",
    source: DECK,
    scenario: "The patient was taken to the operative suite for CABG. A saphenous vein graft was harvested and attached to the right coronary artery, and a separate upper extremity venous graft was attached to the left anterior descending artery. How should these services be reported?",
    steps: [
      "Both grafts are veins, so this is the venous-only family (33510–33516).",
      "Two grafts, two distal anastomoses = 33511.",
      "Saphenous vein harvest is included in the CABG code.",
      "An UPPER EXTREMITY vein is not included. It is reported separately with the add-on +35500.",
    ],
    answer: "33511, +35500",
  },
  {
    title: "Leg vein and mammary artery grafts together",
    source: NOTES,
    scenario: "A 65-year-old male underwent CABG with a graft from the femoropopliteal vein attached to the obtuse marginal and circumflex arteries. A second graft from the internal mammary artery was attached to the ramus and diagonal arteries. What CPT codes are to be reported?",
    steps: [
      "Count by attachments, not by the number of grafts taken. The leg vein goes to two arteries (2 venous). The mammary artery goes to two arteries (2 arterial).",
      "Arteries and veins together = combined. The arterial code is primary: two arterial grafts = 33534.",
      "The venous add-on for two vein grafts = +33518.",
      "The femoropopliteal vein is not a saphenous vein, so harvesting it is not included. Add +35572.",
    ],
    answer: "33534, +33518, +35572",
  },
];

/** Section 7 of Part 2 — ECMO/ECLS */
export const ecmoCases: SolvedCase[] = [
  {
    title: "Removing ECMO cannulas from a 4-year-old",
    source: NOTES,
    scenario: "After weeks of weaning, a 4-year-old patient is being removed from veno-arterial life support. The catheters had been previously placed via a neck incision. What CPT codes are to be reported?",
    steps: [
      "Taking the cannulas out is decannulation (removal), not insertion or repositioning.",
      "The approach: they went in through a neck incision. Neck vessels count as PERIPHERAL, so this is an open peripheral removal. (Central means through the chest, by sternotomy or thoracotomy.)",
      "The age decides the last step. Birth through 5 years = 33969. (6 years and older = 33984.)",
      "Veno-arterial or veno-venous does not change the code — approach and age do.",
    ],
    answer: "33969",
  },
];

/** Section 5 of Part 3 — Central Venous Access Devices */
export const cvadCases: SolvedCase[] = [
  {
    title: "Tunneled central line with a subcutaneous pump, age 7",
    source: NOTES,
    scenario: "A physician places a centrally inserted, tunneled central venous access device with a subcutaneous pump in a 7-year-old patient. What CPT code is required?",
    steps: [
      "Was the tip central, and how was it placed? Centrally inserted and tunneled.",
      "What is at the end — a plain catheter, a port, or a pump? A pump.",
      "The pump code does not depend on age: 36563. (The port codes are the ones that split at age 5: 36560 under 5, 36561 age 5 or older.)",
    ],
    answer: "36563",
  },
];
