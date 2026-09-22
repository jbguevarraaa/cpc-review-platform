import Link from "next/link";
import { SolvedCaseBox, type SolvedCase } from "../_cases/solved-case";
import { aorticValveCases, cabgCases, ecmoCases } from "../_cases/cases-33000";

type CodeEntry = [string, string];
type Category = { name: string; codes: CodeEntry[] };
type Subsection = {
  n: number;
  title: string;
  range: string;
  intro?: string[];
  definitions?: [string, string][];
  steps?: string[];
  examples?: string[];
  categories: Category[];
  rules: string[];
  tips: string[];
  cases?: SolvedCase[];
};

const subsections: Subsection[] = [
  {
    n: 1,
    title: "General Cardiac Repair & Percutaneous LAA Closure",
    range: "33300–33340",
    intro: [
      "This short bridge section covers general cardiac wound repair, exploratory cardiotomy, general aorta/great vessel suture repair and grafting (distinct from the specific ascending/arch/descending aorta codes later in this part), and the percutaneous left atrial appendage (LAA) closure device — the code most exam-writers associate with the Watchman-type device.",
      "Removal of an atrial or ventricular thrombus via cardiotomy (33310/33315) is not separately reported alongside another cardiac procedure UNLESS a separate heart incision was genuinely required to remove that thrombus.",
    ],
    categories: [
      {
        name: "General Repair",
        codes: [
          ["33300", "Repair of cardiac wound; without bypass"],
          ["33305", "Same, with cardiopulmonary bypass"],
          ["33310", "Cardiotomy, exploratory (includes removal of foreign body, atrial or ventricular thrombus); without bypass"],
          ["33315", "Same, with cardiopulmonary bypass"],
        ],
      },
      {
        name: "General Aorta/Great Vessel Repair",
        codes: [
          ["33320", "Suture repair of aorta or great vessels; without shunt or cardiopulmonary bypass"],
          ["33321", "Same, with shunt bypass"],
          ["33322", "Same, with cardiopulmonary bypass"],
          ["33330", "Insertion of graft, aorta or great vessels; without shunt or cardiopulmonary bypass"],
          ["33335", "Same, with cardiopulmonary bypass"],
        ],
      },
      {
        name: "Percutaneous LAA Closure",
        codes: [
          ["33340", "Percutaneous transcatheter closure of the left atrial appendage with endocardial implant, including fluoroscopy, transseptal puncture, catheter placement(s), left atrial angiography, and LAA angiography when performed"],
        ],
      },
    ],
    rules: [
      "33340 is not reported together with left/right heart catheterization codes (93451–93461, 93593–93598) unless catheterization is performed for indications distinct from the LAA closure itself, using a non-transseptal approach.",
    ],
    tips: [
      "33340 (percutaneous LAA closure) is a completely different code family from the surgical/thoracoscopic LAA exclusion codes in Part 1 (33267–33269) — percutaneous device closure vs. surgical exclusion are two different procedures, not two ways to bill the same thing.",
    ],
  },
  {
    n: 2,
    title: "Aortic Valve — TAVR & Open Replacement",
    cases: aorticValveCases,
    range: "33361–33417",
    intro: [
      "TAVR/TAVI (transcatheter aortic valve replacement/implantation) codes are picked purely by the ARTERIAL ACCESS ROUTE used to deliver the new valve — femoral, axillary, iliac, or transaortic/transapical — not by the valve type or manufacturer.",
      "TAVR/TAVI codes already bundle percutaneous access, balloon aortic valvuloplasty, advancing and positioning the delivery system, deploying the valve, temporary pacemaker insertion for rapid pacing, and arteriotomy closure. All the guidance imaging (angiography, roadmapping, fluoroscopy) needed to place the valve is bundled too — it's never separately billed.",
      "When cardiopulmonary bypass support is needed during TAVR/TAVI, add the matching bypass add-on: percutaneous peripheral (33367), open peripheral (33368), or central (33369) — chosen by cannulation site and technique, not by the base TAVR code itself.",
      "Open aortic valve replacement (33405/33406/33410) is chosen by valve material: prosthetic (33405), homograft/allograft (33406), or stentless tissue (33410). Konno (33412, transventricular annulus enlargement) and Ross-Konno (33440, autologous pulmonary valve translocation with annulus enlargement) are specialized enlargement procedures layered on top of that same basic AVR concept.",
    ],
    definitions: [
      ["TAVR / TAVI", "transcatheter aortic valve replacement/implantation: a cut-down or percutaneous access to the femoral artery (or another route), a catheter advanced under radiologic guidance, a balloon valvuloplasty to enlarge the implantation site, and the new valve advanced and deployed."],
    ],
    steps: [
      "① Access (percutaneous, or open femoral/axillary/iliac, transaortic, or transapical) → INCLUDED; the approach picks the code (33361–33366).",
      "② Placing the access sheath, balloon aortic valvuloplasty, advancing and positioning the delivery system, repositioning and deploying the valve → all INCLUDED.",
      "③ Temporary pacemaker insertion (33210) for rapid pacing and closure of the arteriotomy → INCLUDED.",
      "④ Angiography, roadmapping, fluoroscopy, aortic/LVOT measurement, post-deployment aortography, and their radiological supervision and interpretation → INCLUDED. Diagnostic left heart catheterization codes (93452, 93453, 93458–93461) and 93567 are NOT used to report this work.",
      "⑤ Diagnostic coronary angiography → separately reportable only if there is no prior study, or the prior study is outdated or inadequate, or a clinical change during the procedure requires it. Other diagnostic cardiac catheterization not intrinsic to the TAVR may also be reported separately.",
      "⑥ Percutaneous coronary intervention at the same session → reported separately.",
      "⑦ Transcatheter ventricular support (a VAD or balloon pump) → reported with the appropriate VAD/IABP code.",
      "⑧ Cardiopulmonary bypass → add-on 33367 (percutaneous peripheral), 33368 (open peripheral), or 33369 (central).",
      "⑨ Two operators → each reports the code with modifier 62.",
    ],
    categories: [
      {
        name: "Transcatheter Aortic Valve Replacement (TAVR/TAVI), by Access Route",
        codes: [
          ["33361", "TAVR/TAVI with prosthetic valve; percutaneous femoral artery approach"],
          ["33362", "Open femoral artery approach"],
          ["33363", "Open axillary artery approach"],
          ["33364", "Open iliac artery approach"],
          ["33365", "Transaortic approach (e.g., median sternotomy, mediastinotomy)"],
          ["33366", "Transapical exposure (e.g., left thoracotomy)"],
          ["33370", "Cerebral embolic protection device during TAVR/TAVI (add-on)"],
        ],
      },
      {
        name: "Open Aortic Valve Replacement & Related",
        codes: [
          ["33390 / 33391", "Aortic valvuloplasty, open, with bypass — simple vs. complex"],
          ["33405", "Replacement, aortic valve, open, with bypass; prosthetic valve (not homograft or stentless)"],
          ["33406", "Same, with allograft valve (freehand)"],
          ["33410", "Same, with stentless tissue valve"],
          ["33411", "Same, with aortic annulus enlargement, noncoronary sinus"],
          ["33412", "Same, with transventricular aortic annulus enlargement (Konno procedure)"],
          ["33413", "Same, by translocation of autologous pulmonary valve (Ross procedure)"],
          ["33440", "Replacement, aortic valve, by autologous pulmonary valve translocation WITH annulus enlargement (Ross-Konno procedure)"],
        ],
      },
    ],
    rules: [
      "Diagnostic left heart catheterization (93452, 93453, 93458–93461) and supravalvular aortography (93567) are not used to report the TAVR/TAVI guidance work — it is captured in the TAVR codes. Separately, diagnostic CORONARY angiography at the same session may be reported (modifier 59) only when there is no prior catheter-based study, or a prior study exists but the patient's condition has changed, visualization was inadequate, or a clinical change during the procedure needs new evaluation.",
      "TAVR/TAVI always requires two physician operators, and the work of both is reported using modifier 62 on the same code — not two different codes.",
      "33440 (Ross-Konno) is never reported together with 33405, 33406, 33410, 33411, 33412, 33413, 33414, 33416, or 33417 — it's a single all-in-one code for that specific combined procedure.",
    ],
    tips: [
      "For TAVR: access route decides the code (33361–33366). For open AVR: valve material decides the code (33405 prosthetic / 33406 homograft / 33410 stentless), with Konno/Ross layered on top only when annulus enlargement or pulmonary valve translocation is actually documented.",
      "\"Two operators, modifier 62\" is a near-guaranteed detail on any TAVR/TAVI question — don't reach for co-surgeon exclusions here like you would elsewhere in Cardiovascular.",
    ],
  },
  {
    n: 3,
    title: "Mitral, Tricuspid & Pulmonary Valve Procedures",
    range: "33418–33478",
    intro: [
      "Transcatheter mitral valve repair (TMVR — 33418 initial prosthesis, +33419 additional prosthesis in the same session) follows the same bundling logic as TAVR: percutaneous access, transseptal puncture, delivery, positioning, and deployment are all included, and diagnostic catheterization isn't separately billed unless one of the same \"genuinely new study needed\" exceptions applies.",
      "Transcatheter pulmonary valve implantation (TPVI, 33477) is reported only once per session and bundles all associated cardiac catheterization, contrast injection, and imaging — including balloon angioplasty and stenting performed within the pulmonary conduit/treatment zone itself. Angioplasty or stenting done at a separate site outside that zone can still be billed separately (92997/92998 or 37236/37237).",
      "Open mitral, tricuspid, and pulmonary valve work follows a consistent internal pattern across all three valves: valvotomy (opening a stenotic valve) → valvuloplasty (repair, with or without a ring) → replacement — the same conceptual ladder, just with different code numbers per valve.",
    ],
    categories: [
      {
        name: "Mitral Valve",
        codes: [
          ["33418", "Transcatheter mitral valve repair (TMVR), percutaneous, including transseptal puncture when performed; initial prosthesis"],
          ["33419", "Additional prosthesis(es), same session (add-on)"],
          ["33420", "Valvotomy, mitral valve; closed heart"],
          ["33422", "Same, open heart, with cardiopulmonary bypass"],
          ["33425", "Valvuloplasty, mitral valve, with cardiopulmonary bypass"],
          ["33426", "Same, with prosthetic ring"],
          ["33427", "Same, radical reconstruction, with or without ring"],
          ["33430", "Replacement, mitral valve, with cardiopulmonary bypass"],
        ],
      },
      {
        name: "Tricuspid Valve",
        codes: [
          ["33460", "Valvectomy, tricuspid valve, with cardiopulmonary bypass"],
          ["33463", "Valvuloplasty, tricuspid valve; without ring insertion"],
          ["33464", "Same, with ring insertion"],
          ["33465", "Replacement, tricuspid valve, with cardiopulmonary bypass"],
          ["33468", "Tricuspid valve repositioning and plication for Ebstein anomaly"],
        ],
      },
      {
        name: "Pulmonary Valve",
        codes: [
          ["33474", "Valvotomy, pulmonary valve, open heart, with cardiopulmonary bypass"],
          ["33475", "Replacement, pulmonary valve"],
          ["33476", "Right ventricular resection for infundibular stenosis, with or without commissurotomy"],
          ["33477", "Transcatheter pulmonary valve implantation (TPVI), percutaneous approach, including pre-stenting when performed"],
          ["33478", "Outflow tract augmentation (gusset), with or without commissurotomy or infundibular resection"],
        ],
      },
      {
        name: "Other Valvular Procedures",
        codes: [
          ["33496", "Repair of non-structural prosthetic valve dysfunction, with cardiopulmonary bypass (separate procedure)"],
        ],
      },
    ],
    rules: [
      "33419 (additional TMVR prosthesis) is only ever reported in conjunction with 33418 — it's an add-on, never standalone, and is capped at once per session no matter how many additional prostheses are placed.",
      "For a reoperation on a valve more than one month after the original operation, add code 33530 alongside the valve procedure code — this isn't folded into the base valve codes themselves.",
      "Repairing non-structural prosthetic valve dysfunction (33496) during a reoperation still needs 33530 added alongside it, same as any other valve reoperation.",
    ],
    tips: [
      "Across mitral/tricuspid/pulmonary, memorize the ladder once — valvotomy → valvuloplasty (± ring) → replacement — and you can navigate all three valve families without memorizing 15 codes independently.",
      "TPVI (33477) is a once-per-session code even if pre-stenting, angioplasty, and valve deployment all happen in the same setting — don't split it into multiple line items.",
    ],
  },
  {
    n: 4,
    title: "Coronary Artery Bypass Grafting — Venous, Arterial & Combined",
    cases: cabgCases,
    range: "33500–33536, 33572",
    intro: [
      "CABG codes are counted by the number of DISTAL ANASTOMOSES — the points where the graft is actually sutured onto a diseased coronary artery — not by how many separate graft segments or incisions were used.",
      "There are three separate CABG code families depending on graft material, and they are NEVER mixed within the same family: venous-only grafts (33510–33516, picked by graft count 1 through 6+), arterial-only grafts (33533–33536, picked by graft count 1 through 4+), and combined arterial-venous grafting, which requires reporting TWO codes together — a combined-grafting add-on code (33517–33523, for the venous component) PLUS the matching arterial graft code (33533–33536).",
      "Procurement of the saphenous vein graft is already bundled into the venous CABG codes (33510–33516) and the combined codes (33517–33523) — it's never billed as a separate service or co-surgery. Harvesting an upper-extremity vein instead uses add-on 35500; harvesting a femoropopliteal vein segment uses add-on 35572. Endoscopic (rather than open) vein harvest is reported with add-on 33508, and endoscopic upper-extremity artery harvest with its own code, 33509.",
      "The internal mammary (internal thoracic) artery, gastroepiploic artery, epigastric artery, radial artery, and other arterial conduits are all included as \"arterial grafts\" for the 33533–33536 codes — procurement of the artery itself is bundled in, except when an upper-extremity artery like the radial artery is harvested, which is reported with its own code (33509 endoscopic, or 35600 open).",
    ],
    definitions: [
      ["Number of grafts", "the number of DISTAL ANASTOMOSES — the contact points where a graft is sutured onto a diseased coronary artery."],
      ["CABG concept", "the diseased part of the coronary artery is bypassed by attaching a healthy vessel above and below the diseased area."],
    ],
    categories: [
      {
        name: "Venous Grafts Only (not combined with arterial)",
        codes: [
          ["33510", "Coronary artery bypass, vein only; single coronary venous graft"],
          ["33511", "2 coronary venous grafts"],
          ["33512", "3 coronary venous grafts"],
          ["33513", "4 coronary venous grafts"],
          ["33514", "5 coronary venous grafts"],
          ["33516", "6 or more coronary venous grafts"],
        ],
      },
      {
        name: "Combined Arterial-Venous Grafting (venous component — report WITH an arterial code below)",
        codes: [
          ["33517", "Using venous graft(s) and arterial graft(s); single vein graft (add-on)"],
          ["33518", "2 venous grafts (add-on)"],
          ["33519", "3 venous grafts (add-on)"],
          ["33521", "4 venous grafts (add-on)"],
          ["33522", "5 venous grafts (add-on)"],
          ["33523", "6 or more venous grafts (add-on)"],
        ],
      },
      {
        name: "Arterial Grafts (standalone, or paired with a combined-grafting code above)",
        codes: [
          ["33533", "Coronary artery bypass, using arterial graft(s); single arterial graft"],
          ["33534", "2 coronary arterial grafts"],
          ["33535", "3 coronary arterial grafts"],
          ["33536", "4 or more coronary arterial grafts"],
        ],
      },
      {
        name: "Harvest Add-Ons & Related",
        codes: [
          ["33508", "Endoscopy, surgical, including video-assisted harvest of vein(s) for CABG (add-on)"],
          ["33509", "Harvest of upper extremity artery, 1 segment, for CABG, endoscopic"],
          ["33572", "Coronary endarterectomy, open, of LAD/circumflex/RCA, performed with CABG, each vessel (add-on)"],
          ["33530", "Reoperation, coronary artery bypass or valve procedure, more than 1 month after original operation (add-on)"],
        ],
      },
    ],
    rules: [
      "Never report a venous-only code (33510–33516) together with an arterial code (33533–33536) for the same operative session — that combination is what the combined codes (33517–33523 + 33533–33536) exist for.",
      "The combined-grafting codes (33517–33523) can never be reported alone — they must always be paired with the matching arterial graft code (33533–33536).",
      "33530 (reoperation) is an add-on used across valve AND bypass procedures alike, whenever the operation is more than a month after the original — it's not exclusive to CABG.",
      "When a SURGICAL ASSISTANT performs the graft procurement (not the primary surgeon), add modifier 80 to the bypass codes — 33510–33516 for venous CABG, and 33517–33523 and 33533–33536 as appropriate for combined and arterial CABG.",
      "Percutaneous ventricular assist device (pVAD) insertion, removal, and repositioning (33990–33993, 33995, 33997) are not part of the CABG package and are reported separately.",
    ],
    tips: [
      "Count distal anastomoses, not graft segments — a single vein graft that's sequentially anastomosed to two different coronary arteries still only counts by how many suture connection points it made, per the book's own counting note.",
      "Three-question CABG lookup: (1) venous only, arterial only, or combined? (2) how many grafts? (3) was endarterectomy or a reoperation also involved, needing an add-on?",
    ],
  },
  {
    n: 5,
    title: "Other Open Cardiac Procedures — VSD Repair, Ventricular Restoration & Endarterectomy",
    range: "33542–33572",
    categories: [
      {
        name: "Other Cardiac Repair Procedures",
        codes: [
          ["33542", "Myocardial resection (e.g., ventricular aneurysmectomy)"],
          ["33545", "Repair of postinfarction ventricular septal defect, with or without myocardial resection"],
          ["33548", "Surgical ventricular restoration procedure, includes prosthetic patch when performed (e.g., SVR, SAVER, Dor procedure)"],
        ],
      },
    ],
    rules: [
      "33548 (surgical ventricular restoration) is not reported together with chest tube placement (32551) or several of the exploratory/cardiotomy codes (33210, 33211, 33310, 33315) — it's already inclusive of that scope.",
      "For a Batista procedure or cardiac pacopexy, route to the unlisted cardiac surgery code (33999) — there's no dedicated code for either.",
    ],
    tips: [
      "\"Postinfarction VSD\" (33545) is a distinct, specific trap phrase — a ventricular septal defect from a heart attack routes here, not to the congenital septal defect repair codes elsewhere in this section.",
    ],
  },
  {
    n: 6,
    title: "Aorta & Great Vessels — Open Repair and TEVAR",
    range: "33858–33886",
    intro: [
      "Ascending aorta graft codes (33858/33859) split purely by INDICATION: 33858 for aortic dissection, 33859 for any other aortic disease (like an aneurysm) — same graft procedure, different reason for doing it.",
      "Aortic root replacement procedures layer additional work onto the base ascending-graft concept: 33863 (Bentall procedure) adds a valved conduit with coronary artery reconstruction; 33864 (David or Yacoub procedure) is the valve-SPARING version — root remodeling and coronary reconstruction, but the patient's own aortic valve is preserved rather than replaced.",
      "Aortic hemiarch graft (33866) is an add-on specifically for when hemiarch work is done alongside an ascending aortic graft (33858/33859/33863/33864) — it is never billed together with the full transverse arch graft code (33871), since that describes a more extensive arch reconstruction.",
      "TEVAR (thoracic endovascular aortic repair, 33880–33886) is coded by which segment of the thoracic aorta the endograft covers relative to the left subclavian artery, not by the underlying pathology (aneurysm, dissection, penetrating ulcer, and traumatic disruption are all coded the same way based on anatomic coverage). Pre-procedure sizing, non-selective catheterization from the femoral/iliac access, all associated radiological supervision and interpretation, and all extensions placed at the same session are bundled into the base TEVAR codes — not separately billable. Extensions placed LATER, after a prior repair, use the delayed-extension codes.",
    ],
    categories: [
      {
        name: "Open Ascending Aorta & Aortic Root",
        codes: [
          ["33858", "Ascending aorta graft, with cardiopulmonary bypass, includes valve suspension when performed; for aortic dissection"],
          ["33859", "Same, for aortic disease other than dissection (e.g., aneurysm)"],
          ["33863", "Ascending aorta graft with aortic root replacement using a valved conduit and coronary reconstruction (Bentall procedure)"],
          ["33864", "Ascending aorta graft with valve suspension, coronary reconstruction, and valve-sparing aortic root remodeling (David or Yacoub procedure)"],
        ],
      },
      {
        name: "Aortic Arch",
        codes: [
          ["33866", "Aortic hemiarch graft including arch-vessel isolation/control and circulatory arrest (add-on, with an ascending graft code)"],
          ["33871", "Transverse aortic arch graft, with circulatory arrest and reimplantation of arch vessel(s)"],
        ],
      },
      {
        name: "Descending Thoracic Aorta",
        codes: [
          ["33875", "Descending thoracic aorta graft, with or without cardiopulmonary bypass"],
          ["33877", "Repair of thoracoabdominal aortic aneurysm with graft, with or without cardiopulmonary bypass"],
        ],
      },
      {
        name: "Thoracic Endovascular Aortic Repair (TEVAR), by Coverage",
        codes: [
          ["33880", "Aorto-aortic tube endograft COVERING the left subclavian artery origin, with all extensions from the aortic arch and ascending aorta distally to the celiac artery"],
          ["33881", "Aorto-aortic tube endograft NOT covering the left subclavian artery origin, with all extensions from the left common carotid artery to the celiac artery"],
          ["33882", "Branched multipiece endograft system — an aorto-aortic tube with a fenestration for the left subclavian artery stent graft(s), including target zone angioplasty and left subclavian selective catheterization"],
          ["33883", "DELAYED placement of a proximal extension prosthesis (not covering the left subclavian origin), after a prior thoracic endovascular repair — reported once regardless of the number of modules"],
          ["33886", "DELAYED placement of a distal extension prosthesis (left subclavian artery to the celiac artery), after a prior descending thoracic aorta repair — reported once regardless of the number of modules"],
        ],
      },
    ],
    rules: [
      "33864 (David/Yacoub) is never reported together with 33858, 33859, or 33863 — it's a distinct, complete procedure choice, not an add-on to those.",
      "33871 (full transverse arch graft) and 33866 (hemiarch add-on) are mutually exclusive — pick the one that matches the actual extent of arch work performed.",
      "Balloon angioplasty or stenting performed within the TEVAR treatment zone, either before or after endograft deployment, is never separately reported — it's bundled into the base TEVAR code. Angioplasty/stenting in vessels OUTSIDE the treatment zone, embolization, and IVUS may be reported separately.",
      "Report only ONE code from 33880, 33881, 33882, 33883, and 33886 in the same session — they are mutually exclusive. Same-session extensions are inside 33880–33882; 33883 and 33886 are reserved for delayed placement. (Some older study materials list a 33884 for a proximal extension — it is deleted in CPT 2026; use 33883.)",
      "Access follows the EVAR pattern: percutaneous access with a sheath smaller than 12 French is included; a 12 French or larger sheath with closure device is +34713; open exposure is reported by site (34714, 34715, 34716, 34812, 34820, 34833, 34834). Transcatheter fixation devices for the thoracic repair are 34712, once per operative session.",
    ],
    tips: [
      "For the ascending aorta/root family, ask: dissection or other disease (858 vs. 859)? Valve replaced or preserved (863 Bentall vs. 864 David/Yacoub)? That's the whole decision tree.",
      "TEVAR code selection hinges entirely on anatomic coverage relative to the left subclavian artery — memorize that landmark, not the pathology being treated.",
    ],
  },
  {
    n: 7,
    title: "ECMO/ECLS & Cardiac Assist — Balloon Pump, VAD & Percutaneous VAD",
    cases: ecmoCases,
    range: "33946–33999",
    intro: [
      "ECMO (extracorporeal membrane oxygenation) and ECLS (extracorporeal life support) are the same idea: a machine circulates the patient's blood outside the body through an artificial lung and back in, doing the work of the heart and/or lungs. The physician services are reported as a consistent grid — initiation, daily management, cannula insertion, cannula repositioning, and decannulation — across two circuit types.",
      "Services directly related to the ECMO/ECLS circuit (cannulation, initiation, management, and discontinuation) are distinct from the patient's daily overall management. That overall care may still be reported separately with the hospital inpatient/observation or critical care codes (99221–99236, 99291/99292, 99468–99480).",
      "Cardiac assist devices are a second family: intra-aortic balloon pumps (IABP), ventricular assist devices (VAD, surgically attached to one or both ventricles and either extracorporeal or intracorporeal), and percutaneous VADs (pVAD). Insertion, removal, repositioning, and replacement each follow their own packaging rules.",
    ],
    definitions: [
      ["ECMO/ECLS", "temporary outside-the-body support for a failing heart and/or lungs, giving them time to rest and heal."],
      ["Veno-arterial (VA)", "supports BOTH heart and lungs; requires two cannulae — one in a large vein, one in a large artery (33947 initiation / 33949 daily management)."],
      ["Veno-venous (VV)", "supports the LUNGS ONLY; requires one or two cannulae, all placed in a vein (33946 initiation / 33948 daily management)."],
      ["Ventricular assist device (VAD)", "an apparatus surgically attached to one or both ventricles to assist or augment a damaged or weakened native heart. Two designs: extracorporeal (pump outside the body) and intracorporeal (implanted). Transthoracic insertion codes: 33975, 33976, 33979; percutaneous: 33990, 33991, 33995."],
    ],
    steps: [
      "① Cannulate → insertion codes 33951–33956, chosen by approach (percutaneous peripheral, open peripheral, or central by sternotomy/thoracotomy) and age (birth–5 years vs. 6 and older). The percutaneous codes include fluoroscopic guidance.",
      "② Initiate the circuit and set parameters → 33946 (VV) or 33947 (VA). Daily management (33948/33949) and repositioning (33957–33964) are NOT reported on the same day as initiation, by the same or a different physician.",
      "③ Manage the circuit each day → 33948 (VV) / 33949 (VA), once per day, separate from the patient's overall hospital or critical care management.",
      "④ Reposition a cannula → 33957–33964. At the same session as insertion it is packaged and not reported; fluoroscopic guidance for repositioning is included and not separately reported.",
      "⑤ Replace a cannula → SAME vessel: report only the insertion code (33951–33956). DIFFERENT vessel: report TWO codes — a decannulation code (33965, 33966, 33969, 33984, 33985, 33986) and an insertion code.",
      "⑥ Wean and decannulate → 33965/33966 percutaneous, 33969/33984 open peripheral, 33985/33986 central. Extensive artery repair or replacement may be reported additionally (e.g., 35226, 35286, 35371, 35665).",
      "⑦ If different physicians do different parts, each reports only the service(s) he or she personally performed. Modifier 63 is never reported with 33946–33949.",
    ],
    categories: [
      {
        name: "ECMO/ECLS Physician Services",
        codes: [
          ["33946", "Initiation, veno-venous"],
          ["33947", "Initiation, veno-arterial"],
          ["33948", "Daily management, each day, veno-venous"],
          ["33949", "Daily management, each day, veno-arterial"],
        ],
      },
      {
        name: "Cannula Insertion (birth–5 years / 6 years and older)",
        codes: [
          ["33951 / 33952", "Peripheral (arterial and/or venous), percutaneous, includes fluoroscopy"],
          ["33953 / 33954", "Peripheral (arterial and/or venous), open"],
          ["33955 / 33956", "Central cannula(e) by sternotomy or thoracotomy"],
        ],
      },
      {
        name: "Cannula Repositioning (birth–5 years / 6 years and older)",
        codes: [
          ["33957 / 33958", "Peripheral, percutaneous, includes fluoroscopy"],
          ["33959 / 33962", "Peripheral, open, includes fluoroscopy"],
          ["33963 / 33964", "Central by sternotomy or thoracotomy, includes fluoroscopy"],
        ],
      },
      {
        name: "Decannulation (birth–5 years / 6 years and older)",
        codes: [
          ["33965 / 33966", "Removal of peripheral cannula(e), percutaneous"],
          ["33969 / 33984", "Removal of peripheral cannula(e), open"],
          ["33985 / 33986", "Removal of central cannula(e) by sternotomy or thoracotomy"],
        ],
      },
      {
        name: "Additional ECMO/ECLS Procedures",
        codes: [
          ["+33987", "Arterial exposure with creation of a graft conduit (e.g., chimney graft) to facilitate arterial perfusion for ECMO/ECLS"],
          ["33988", "Insertion of a left heart vent by thoracic incision (sternotomy, thoracotomy) for ECMO/ECLS"],
          ["33989", "Removal of a left heart vent by thoracic incision for ECMO/ECLS"],
        ],
      },
      {
        name: "Intra-Aortic Balloon Pump (IABP) — 33967–33974, by approach",
        codes: [
          ["33967 / 33968", "Insertion / removal, percutaneous"],
          ["33970 / 33971", "Insertion through the femoral artery, open approach / removal including femoral artery repair, with or without graft"],
          ["33973 / 33974", "Insertion through the ascending aorta / removal including aortic repair, with or without graft"],
        ],
      },
      {
        name: "Ventricular Assist Device (VAD) — 33975–33983",
        codes: [
          ["33975 / 33976", "INSERTION, extracorporeal VAD — single ventricle / biventricular"],
          ["33977 / 33978", "REMOVAL, extracorporeal VAD — single ventricle / biventricular"],
          ["33979", "INSERTION, implantable intracorporeal VAD, single ventricle"],
          ["33980", "REMOVAL, implantable intracorporeal VAD, single ventricle"],
          ["33981", "REPLACEMENT of the extracorporeal VAD pump(s), single or biventricular"],
          ["33982 / 33983", "REPLACEMENT of the implantable intracorporeal VAD pump(s), single ventricle — without / with cardiopulmonary bypass"],
        ],
      },
      {
        name: "Percutaneous VAD (pVAD) — 33990–33997",
        codes: [
          ["33990", "Insertion, percutaneous, includes radiological supervision and interpretation — left heart, arterial access only"],
          ["33991", "Same — left heart, both arterial and venous access, with transseptal puncture"],
          ["33995", "Same — right heart, venous access only"],
          ["33992", "Removal of a percutaneous left heart VAD at a separate and distinct session from insertion"],
          ["33997", "Removal of a percutaneous right heart VAD (venous cannula) at a separate and distinct session"],
          ["33993", "Repositioning of a percutaneous right or left heart VAD WITH imaging guidance at a separate and distinct session"],
        ],
      },
      {
        name: "Other",
        codes: [["33999", "Unlisted procedure, cardiac surgery (also used for revising or replacing components only of an artificial heart)"]],
      },
    ],
    rules: [
      "ECMO daily management (33948/33949) and repositioning (33957–33964) may not be reported on the same day as initiation (33946/33947), by the same or different individuals.",
      "Repositioning at the same session as insertion is not separately reportable. Replacing a cannula in the same vessel is reported with the insertion code only; in a different vessel, report the decannulation code AND the insertion code.",
      "Removal of a VAD (33977, 33978, 33980) or pVAD (33992, 33997) includes removal of the entire device, cannulas included.",
      "pVAD removal or repositioning at the SAME session as insertion is not separately reportable. At a separate and distinct session on the same day, report 33992/33997 (removal) or 33993 (repositioning with imaging guidance) with modifier 59. Repositioning that needs no imaging guidance is not a reportable service.",
      "Replacing only the VAD PUMP uses 33981–33983. Replacing the ENTIRE VAD system (pump + cannulas) uses the INSERTION codes (33975, 33976, 33979), and removal of the system being replaced is not separately reported. Replacing a pVAD uses the implantation codes (33990, 33991, 33995), and its removal is packaged.",
      "Open arterial exposure to facilitate pVAD insertion (e.g., 34812, 34714, 34820) is not part of the pVAD package and may be reported separately; extensive artery repair may also be reported.",
    ],
    tips: [
      "One grid for ECMO: VV (lungs only) vs. VA (heart + lungs), crossed with initiation, daily management, cannula insertion, repositioning, and decannulation. Learn the grid, not 40 individual codes.",
      "Insertion codes are picked by APPROACH (percutaneous / open / central) and AGE (birth–5 vs. 6+) — the same pattern repeats for repositioning and decannulation.",
      "For VADs, ask: extracorporeal or implantable? insert, remove, or replace? Then replacing the whole system = insertion codes; replacing only the pump = 33981–33983.",
      "'Different physicians managed different parts' is a recurring exam setup — each physician reports only what he or she personally did.",
    ],
  },
  {
    n: 8,
    title: "Heart & Heart-Lung Transplantation and the Total Artificial Heart",
    range: "33927–33945",
    intro: [
      "A heart (or heart-lung) transplant involves three distinct components of PHYSICIAN work, each with its own code: the cadaver donor cardiectomy (with or without pneumonectomy), the backbench work on the donor organ, and the recipient allotransplantation. Whoever performs each component reports that component's code.",
      "The 'artificial heart' (total replacement heart system) is a separate family from ventricular assist devices. Implanting one is 33927; swapping one for another is 33928; taking one out to make room for a donor heart is the add-on 33929 reported with the heart transplant 33945. Revising or replacing only components of an artificial heart is the unlisted code 33999.",
    ],
    definitions: [
      ["Cadaver donor cardiectomy", "removing the donor organ and keeping it cold and perfused with preservation solution until it is transplanted."],
      ["Backbench work", "preparing the cadaver heart (or heart and lung) allograft before transplant — dissecting the allograft from surrounding soft tissue and preparing the aorta, superior and inferior vena cava, pulmonary artery, and left atrium (heart) or the aorta, venae cavae, and trachea (heart-lung) for implantation."],
      ["Recipient cardiectomy", "removal of the patient's diseased heart in preparation for implanting a donor heart."],
      ["Recipient allotransplantation", "implanting the donor organ and caring for the recipient."],
      ["Total replacement heart system", "also called the 'artificial heart' — a surgically installed pump that takes over the function of diseased or damaged ventricles."],
    ],
    steps: [
      "① Donor cardiectomy (harvest + cold preservation) → 33940 for the heart; 33930 for heart and lungs.",
      "② Backbench preparation of the donor organ → 33944 for the heart; 33933 for heart and lungs.",
      "③ Recipient transplant → 33945 heart, with or without recipient cardiectomy; 33935 heart-lung with recipient cardiectomy-pneumonectomy.",
      "④ Repair or resection on the DONOR heart → report the appropriate heart or vessel procedure code (e.g., 33300, 33310, 33320, 33390, 33463, 33464, 33510, 33641, 35216, 35276, 35685).",
      "⑤ Artificial heart → new implant with recipient cardiectomy 33927; remove the old device and replace with a new one 33928; remove the artificial heart for a donor heart: 33945 PLUS +33929.",
      "⑥ Revision or replacement of components only of an artificial heart → 33999.",
    ],
    categories: [
      {
        name: "Allograft Codes — Heart vs. Heart & Lungs",
        codes: [
          ["33940 / 33930", "Donor cardiectomy (with cold preservation) — heart / heart-lung (cardiectomy-pneumonectomy)"],
          ["33944 / 33933", "Backbench standard preparation of the cadaver donor allograft — heart / heart-lung"],
          ["33945 / 33935", "Recipient transplant — heart, with or without recipient cardiectomy / heart-lung with recipient cardiectomy-pneumonectomy"],
        ],
      },
      {
        name: "Total Replacement Heart System (Artificial Heart)",
        codes: [
          ["33927", "Implantation of a total replacement heart system with recipient cardiectomy"],
          ["33928", "Removal and replacement of a total replacement heart system (old removed, new implanted)"],
          ["+33929", "Removal of a total replacement heart system for heart transplantation (add-on — use with 33945)"],
        ],
      },
    ],
    rules: [
      "Report ventricular assist device codes (33975, 33976, 33979, 33990, 33991, 33995) — NOT 33927 — when the implanted device is a VAD rather than a total artificial heart.",
      "33929 is an add-on reported only with 33945: the artificial heart is removed and an allograft heart transplanted in the same operation.",
      "Revising or replacing components only of an artificial heart is the unlisted code 33999, not one of the 33927–33929 codes.",
    ],
    tips: [
      "Three-component thinking: DONOR (33940/33930) → BACKBENCH (33944/33933) → RECIPIENT (33945/33935). The heart-only and heart-lung codes always sit in the same three slots.",
      "Artificial heart ≠ VAD. If the source says 'total replacement heart system,' think 33927–33929; if it says 'ventricular assist device,' think 33975–33995.",
    ],
  },
];

const cabgDiagramStyle = { background: "#fff7f7", border: "1px solid #f0d7d7", borderRadius: "14px", padding: "20px", margin: "18px 0", textAlign: "center" as const };
const diagramCaptionStyle = { margin: "10px 0 0", fontSize: "13px", color: "#7a3a3a", fontWeight: 700 };

function CabgDiagram() {
  return (
    <div style={cabgDiagramStyle}>
      <svg viewBox="0 0 480 300" width="100%" height="auto" style={{ maxWidth: "440px" }} role="img" aria-label="Diagram of coronary artery bypass grafting showing an internal mammary artery graft and a saphenous vein graft">
        <rect x="0" y="0" width="480" height="300" fill="#fff7f7" />
        {/* Heart outline */}
        <path d="M 180 120 Q 140 60 100 100 Q 60 140 100 190 Q 140 240 200 270 Q 260 240 300 190 Q 340 140 300 100 Q 260 60 220 120 Z" fill="#fbe2e2" stroke="#b91c1c" strokeWidth="2.5" />
        {/* Aorta */}
        <path d="M 210 100 Q 220 50 280 40 Q 340 35 360 60" fill="none" stroke="#7a1f1f" strokeWidth="10" strokeLinecap="round" />
        <text x="300" y="30" fontSize="13" fontWeight="700" fill="#7a1f1f">Aorta</text>
        {/* Left subclavian artery branch */}
        <line x1="290" y1="42" x2="290" y2="10" stroke="#7a1f1f" strokeWidth="6" strokeLinecap="round" />
        <text x="230" y="14" fontSize="11" fill="#7a1f1f">Left subclavian artery</text>
        {/* LIMA graft (arterial) */}
        <path d="M 290 42 Q 260 90 230 140 Q 215 165 200 190" fill="none" stroke="#b45309" strokeWidth="5" strokeLinecap="round" strokeDasharray="0" />
        <text x="250" y="120" fontSize="11" fontWeight="700" fill="#b45309">LIMA graft</text>
        <text x="215" y="133" fontSize="10" fill="#b45309">(arterial)</text>
        {/* Vein graft from aorta to a different coronary vessel */}
        <path d="M 355 62 Q 330 130 280 175 Q 250 200 220 210" fill="none" stroke="#166534" strokeWidth="5" strokeLinecap="round" />
        <text x="330" y="145" fontSize="11" fontWeight="700" fill="#166534">Vein graft</text>
        {/* Coronary artery targets */}
        <circle cx="200" cy="190" r="4" fill="#7a1f1f" />
        <circle cx="220" cy="210" r="4" fill="#7a1f1f" />
        <text x="120" y="215" fontSize="11" fill="#7a1f1f">Diseased coronary</text>
        <text x="120" y="228" fontSize="11" fill="#7a1f1f">artery (distal anastomosis)</text>
      </svg>
      <p style={diagramCaptionStyle}>Two graft materials, two separate code families: an arterial graft (e.g., LIMA, 33533–33536) and a vein graft (e.g., saphenous, 33510–33516) — used together, they&apos;re coded as combined grafting (33517–33523 + 33533–33536), not two standalone codes.</p>
    </div>
  );
}

const boxBase = { background: "#fff7f7", border: "1px solid #f0d7d7", borderRadius: "14px", padding: "18px", margin: "16px 0", textAlign: "center" as const, overflowX: "auto" as const };
const definitionsBoxStyle = { background: "#f5f3ff", border: "1px solid #ddd6fe", borderLeft: "5px solid #7c3aed", borderRadius: "10px", padding: "16px 18px", margin: "14px 0 0", lineHeight: 1.7 };
const definitionsTitleStyle = { margin: "0 0 8px", color: "#5b21b6", fontWeight: 800, fontSize: "14px", letterSpacing: "0.03em" };
const stepsBoxStyle = { background: "#eff6ff", border: "1px solid #bfdbfe", borderLeft: "5px solid #1d4ed8", borderRadius: "10px", padding: "16px 18px", margin: "14px 0 0", lineHeight: 1.7 };
const stepsTitleStyle = { margin: "0 0 8px", color: "#1e3a8a", fontWeight: 800, fontSize: "14px", letterSpacing: "0.03em" };
const examplesBoxStyle = { background: "#fffbeb", border: "1px solid #fde68a", borderLeft: "5px solid #d97706", borderRadius: "10px", padding: "16px 18px", margin: "14px 0 0", lineHeight: 1.7 };
const examplesTitleStyle = { margin: "0 0 8px", color: "#92400e", fontWeight: 800, fontSize: "14px", letterSpacing: "0.03em" };

function EcmoDiagram() {
  const panel = (x: number, title: string, sub: string, artery: boolean) => (
    <g transform={`translate(${x},0)`}>
      <text x="170" y="24" textAnchor="middle" fontSize="15" fontWeight="800" fill="#450a0a">{title}</text>
      <text x="170" y="43" textAnchor="middle" fontSize="12.5" fill="#291a1a">{sub}</text>
      <rect x="10" y="70" width="120" height="150" rx="12" fill="#fee2e2" stroke="#b91c1c" strokeWidth="1.5" />
      <text x="70" y="140" textAnchor="middle" fontSize="13" fontWeight="800" fill="#450a0a">Patient</text>
      <text x="70" y="160" textAnchor="middle" fontSize="11.5" fill="#291a1a">{artery ? "heart + lungs" : "lungs only"}</text>
      <circle cx="270" cy="145" r="42" fill="#dbeafe" stroke="#1d4ed8" strokeWidth="1.5" />
      <text x="270" y="141" textAnchor="middle" fontSize="12" fontWeight="800" fill="#1e3a8a">Oxygenator</text>
      <text x="270" y="157" textAnchor="middle" fontSize="10.5" fill="#1e3a8a">membrane lung</text>
      <path d="M130 105 H228 L238 122" fill="none" stroke="#2563eb" strokeWidth="5" strokeLinecap="round" />
      <text x="140" y="97" fontSize="11" fill="#1d4ed8" fontWeight="700">blood out — VEIN</text>
      <path d="M238 172 L228 190 H130" fill="none" stroke="#dc2626" strokeWidth="5" strokeLinecap="round" />
      <text x="140" y="212" fontSize="11" fill="#b91c1c" fontWeight="700">{artery ? "oxygenated back — ARTERY" : "oxygenated back — VEIN"}</text>
    </g>
  );
  return (
    <div style={boxBase}>
      <svg viewBox="0 0 740 260" role="img" aria-label="Veno-venous versus veno-arterial ECMO circuits" style={{ width: "100%", height: "auto", maxWidth: "740px", minWidth: "560px" }}>
        {panel(0, "Veno-venous (VV)", "33946 initiation · 33948 daily", false)}
        {panel(380, "Veno-arterial (VA)", "33947 initiation · 33949 daily", true)}
        <line x1="370" y1="20" x2="370" y2="235" stroke="#f0d7d7" strokeWidth="2" strokeDasharray="5 5" />
        <text x="185" y="250" textAnchor="middle" fontSize="12" fontWeight="800" fill="#7a3a3a">1–2 cannulae, all in a vein</text>
        <text x="565" y="250" textAnchor="middle" fontSize="12" fontWeight="800" fill="#7a3a3a">2 cannulae: large vein + large artery</text>
      </svg>
      <p style={diagramCaptionStyle}>Same circuit, different return: VV rests the lungs only; VA also bypasses the heart.</p>
    </div>
  );
}

function TransplantFlowDiagram() {
  const steps = [
    { x: 10, t: "① DONOR", l1: "cardiectomy + cold preservation", l2: "Heart 33940", l3: "Heart-lung 33930" },
    { x: 260, t: "② BACKBENCH", l1: "prepare allograft for implant", l2: "Heart 33944", l3: "Heart-lung 33933" },
    { x: 510, t: "③ RECIPIENT", l1: "allotransplant + recipient care", l2: "Heart 33945", l3: "Heart-lung 33935" },
  ];
  return (
    <div style={boxBase}>
      <svg viewBox="0 0 740 230" role="img" aria-label="Heart transplant three components and artificial heart codes" style={{ width: "100%", height: "auto", maxWidth: "740px", minWidth: "560px" }}>
        {steps.map((st, i) => (
          <g key={st.t}>
            <rect x={st.x} y="10" width="220" height="115" rx="12" fill="#fecaca" stroke="#b91c1c" strokeWidth="1.5" />
            <text x={st.x + 110} y="36" textAnchor="middle" fontSize="15" fontWeight="800" fill="#450a0a">{st.t}</text>
            <text x={st.x + 110} y="58" textAnchor="middle" fontSize="11.5" fill="#291a1a">{st.l1}</text>
            <text x={st.x + 110} y="88" textAnchor="middle" fontSize="13.5" fontWeight="800" fill="#991b1b">{st.l2}</text>
            <text x={st.x + 110} y="108" textAnchor="middle" fontSize="13.5" fontWeight="800" fill="#991b1b">{st.l3}</text>
            {i < 2 && <text x={st.x + 235} y="75" textAnchor="middle" fontSize="24" fontWeight="800" fill="#b91c1c">→</text>}
          </g>
        ))}
        <rect x="10" y="145" width="720" height="75" rx="12" fill="#e9d5ff" stroke="#7c3aed" strokeWidth="1.5" />
        <text x="370" y="170" textAnchor="middle" fontSize="14" fontWeight="800" fill="#4c1d95">Artificial heart (total replacement heart system)</text>
        <text x="370" y="192" textAnchor="middle" fontSize="12.5" fill="#291a1a">33927 new implant + recipient cardiectomy · 33928 remove old + replace with new</text>
        <text x="370" y="210" textAnchor="middle" fontSize="12.5" fill="#291a1a">+33929 remove for a donor heart (with 33945) · components only → 33999</text>
      </svg>
      <p style={diagramCaptionStyle}>Three physician components, each reported by whoever performs it — heart and heart-lung use parallel codes.</p>
    </div>
  );
}

const mainStyle = { maxWidth: "1160px", margin: "0 auto", padding: "36px clamp(12px, 4vw, 24px) 64px", minHeight: "100vh", background: "#fdf6f6", color: "#291a1a", fontFamily: "Arial, sans-serif" };
const heroStyle = { background: "linear-gradient(135deg, #450a0a, #b91c1c)", color: "white", padding: "48px 44px", borderRadius: "18px", marginBottom: "26px", boxShadow: "0 12px 28px rgba(69,10,10,0.22)" };
const kickerStyle = { margin: "0 0 10px", color: "#fecaca", fontWeight: 800, letterSpacing: "0.08em" };
const navStyle = { display: "flex", flexWrap: "wrap" as const, gap: "10px", marginBottom: "26px" };
const navLinkStyle = { textDecoration: "none", color: "#b91c1c", background: "#ffffff", border: "1px solid #f0d7d7", borderRadius: "999px", padding: "10px 15px", fontWeight: 700, fontSize: "14px" };
const pagerStyle = { display: "flex", flexWrap: "wrap" as const, gap: "10px", marginBottom: "26px" };
const pagerLinkStyle = { textDecoration: "none", color: "#b91c1c", background: "#fff1f0", border: "1px solid #fecaca", borderRadius: "999px", padding: "8px 16px", fontWeight: 700, fontSize: "14px" };
const pagerActiveStyle = { ...pagerLinkStyle, background: "#b91c1c", color: "#fff", border: "1px solid #b91c1c" };
const introBoxStyle = { background: "#fff1f0", border: "1px solid #fecaca", borderLeft: "7px solid #b91c1c", borderRadius: "12px", padding: "22px 24px", marginBottom: "30px", lineHeight: 1.7 };
const sectionStyle = { background: "#ffffff", border: "1px solid #f0e2e2", borderRadius: "14px", padding: "24px clamp(14px, 3.5vw, 28px)", marginBottom: "22px", boxShadow: "0 5px 16px rgba(69,10,10,0.06)" };
const sectionHeaderStyle = { display: "flex", alignItems: "center", gap: "14px", marginBottom: "10px", flexWrap: "wrap" as const };
const sectionNumberStyle = { background: "#b91c1c", color: "#fff", width: "36px", height: "36px", minWidth: "36px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "15px" };
const sectionTitleStyle = { margin: 0, fontSize: "22px", color: "#111827" };
const rangeChipStyle = { background: "#fff1f0", border: "1px solid #fecaca", color: "#b91c1c", borderRadius: "999px", padding: "4px 12px", fontWeight: 800, fontSize: "13px", fontFamily: "Consolas, monospace" };
const pStyle = { lineHeight: 1.75, margin: "0 0 10px" };
const categoryTitleStyle = { margin: "18px 0 8px", fontSize: "16px", color: "#b91c1c", fontWeight: 800 };
const codeListStyle = { listStyle: "none", padding: 0, margin: "0 0 4px", display: "grid", gap: "7px" };
const codeItemStyle = { display: "flex", flexWrap: "wrap" as const, gap: "6px 12px", alignItems: "baseline", background: "#fdf8f8", border: "1px solid #f0e2e2", borderRadius: "8px", padding: "8px 13px" };
const codeChipStyle = { fontWeight: 800, color: "#b91c1c", minWidth: "150px", fontFamily: "Consolas, monospace", fontSize: "13.5px" };
const rulesBoxStyle = { background: "#fef2f2", border: "1px solid #fecaca", borderLeft: "5px solid #dc2626", borderRadius: "10px", padding: "16px 18px", margin: "18px 0 0", lineHeight: 1.7 };
const rulesTitleStyle = { margin: "0 0 8px", color: "#991b1b", fontWeight: 800, fontSize: "14px", letterSpacing: "0.03em" };
const tipsBoxStyle = { background: "#f0fdf4", border: "1px solid #bbf7d0", borderLeft: "5px solid #16a34a", borderRadius: "10px", padding: "16px 18px", margin: "14px 0 0", lineHeight: 1.7 };
const tipsTitleStyle = { margin: "0 0 8px", color: "#166534", fontWeight: 800, fontSize: "14px", letterSpacing: "0.03em" };
const backLinkStyle = { textDecoration: "none", color: "#b91c1c", fontWeight: 700 };

export default function SurgeryCardiovascularGuidelinesReviewerPart2Page() {
  return (
    <main style={mainStyle}>
      <header style={heroStyle}>
        <p style={kickerStyle}>33,000 SERIES · CARDIOVASCULAR SYSTEM</p>
        <h1 style={{ margin: 0, fontSize: "clamp(28px, 5.5vw, 48px)" }}>CPT Surgery Guidelines Reviewer</h1>
        <p style={{ margin: "12px 0 0", fontSize: "19px", lineHeight: 1.5 }}>Part 2 — General Repair, LAA Closure, Heart Valves, Coronary Artery Bypass Grafting, Aorta &amp; Great Vessels, ECMO &amp; Cardiac Assist, and Heart Transplantation (33300–33999)</p>
      </header>

      <div style={pagerStyle}>
        <Link href="/cpt/surgery/33000-series-guidelines-reviewer" style={pagerLinkStyle}>← Part 1 (33016–33288)</Link>
        <span style={pagerActiveStyle}>Part 2 (33300–33999)</span>
        <Link href="/cpt/surgery/33000-series-guidelines-reviewer-part-3" style={pagerLinkStyle}>Part 3 (34701–37214) →</Link>
      </div>

      <nav aria-label="Cardiovascular series navigation" style={navStyle}>
        <Link href="/cpt/surgery/33,000" style={navLinkStyle}>Cardiovascular System home</Link>
        <Link href="/cpt/surgery/33000-series-coding-approach" style={navLinkStyle}>How to Approach This Series</Link>
        <Link href="/cpt/surgery/33000-series-discussion-guide" style={navLinkStyle}>Discussion Guide</Link>
        <Link href="/cpt/surgery/33000-series-practice-quiz" style={navLinkStyle}>Practice Quiz</Link>
        <Link href="/cpt/surgery/33000-series-flashcards" style={navLinkStyle}>Flashcards</Link>
        <Link href="/cpt/surgery" style={navLinkStyle}>Surgery home</Link>
      </nav>

      <section style={introBoxStyle}>
        <strong>This fills the biggest gap in the series:</strong> heart valve surgery (TAVR/TAVI, open valve repair and replacement across all four valves) and coronary artery bypass grafting (CABG) — arguably the most clinically central and most heavily tested part of cardiovascular surgery — plus aorta/great vessel repair (open and endovascular/TEVAR), ECMO and cardiac assist devices, and heart/heart-lung transplantation. Where older study material still cites codes that CPT 2026 has deleted (for example 33884, 37221, 37223), this page uses the current codes. Written in original wording, not copied from the CPT text; codes are grouped by category with representative entries, not every single code listed.
      </section>

      {subsections.map((sub) => (
        <section key={sub.n} style={sectionStyle}>
          <div style={sectionHeaderStyle}>
            <span style={sectionNumberStyle}>{sub.n}</span>
            <h2 style={sectionTitleStyle}>{sub.title}</h2>
            <span style={rangeChipStyle}>{sub.range}</span>
          </div>
          {sub.intro?.map((p) => <p key={p} style={pStyle}>{p}</p>)}

          {sub.n === 4 && <CabgDiagram />}
          {sub.n === 7 && <EcmoDiagram />}
          {sub.n === 8 && <TransplantFlowDiagram />}

          {sub.definitions && (
            <div style={definitionsBoxStyle}>
              <p style={definitionsTitleStyle}>📖 DEFINITIONS</p>
              <ul style={{ margin: 0, paddingLeft: "20px", display: "grid", gap: "8px" }}>
                {sub.definitions.map(([term, def]) => <li key={term}><strong>{term}:</strong> {def}</li>)}
              </ul>
            </div>
          )}

          {sub.steps && (
            <div style={stepsBoxStyle}>
              <p style={stepsTitleStyle}>🪜 STEP-BY-STEP — WHAT IS INCLUDED VS. REPORTED SEPARATELY</p>
              <ul style={{ margin: 0, paddingLeft: "20px", display: "grid", gap: "8px", listStyle: "none" }}>
                {sub.steps.map((step) => <li key={step}>{step}</li>)}
              </ul>
            </div>
          )}

          {sub.examples && (
            <div style={examplesBoxStyle}>
              <p style={examplesTitleStyle}>🧪 WORKED EXAMPLES</p>
              <ul style={{ margin: 0, paddingLeft: "20px", display: "grid", gap: "8px" }}>
                {sub.examples.map((ex) => <li key={ex}>{ex}</li>)}
              </ul>
            </div>
          )}

          {sub.categories.map((cat) => (
            <div key={cat.name}>
              <h3 style={categoryTitleStyle}>{cat.name}</h3>
              <ul style={codeListStyle}>
                {cat.codes.map(([code, desc]) => (
                  <li key={code} style={codeItemStyle}>
                    <code style={codeChipStyle}>{code}</code>
                    <span style={{ flex: "1 1 220px" }}>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {sub.rules.length > 0 && (
            <div style={rulesBoxStyle}>
              <p style={rulesTitleStyle}>🟥 KEY CODING RULES</p>
              <ul style={{ margin: 0, paddingLeft: "20px", display: "grid", gap: "8px" }}>
                {sub.rules.map((rule) => <li key={rule}>{rule}</li>)}
              </ul>
            </div>
          )}

          {sub.tips.length > 0 && (
            <div style={tipsBoxStyle}>
              <p style={tipsTitleStyle}>🧠 CODING TIPS</p>
              <ul style={{ margin: 0, paddingLeft: "20px", display: "grid", gap: "8px" }}>
                {sub.tips.map((tip) => <li key={tip}>{tip}</li>)}
              </ul>
            </div>
          )}
          {sub.cases?.map((c) => <SolvedCaseBox key={c.title} c={c} />)}
        </section>
      ))}

      <div style={{ marginTop: "30px", display: "flex", flexWrap: "wrap" as const, gap: "16px" }}>
        <Link href="/cpt/surgery/33000-series-guidelines-reviewer" style={backLinkStyle}>← Back to Part 1</Link>
        <Link href="/cpt/surgery/33000-series-guidelines-reviewer-part-3" style={backLinkStyle}>Continue to Part 3 →</Link>
        <Link href="/cpt/surgery/33,000" style={backLinkStyle}>← Back to Cardiovascular System</Link>
      </div>
    </main>
  );
}
