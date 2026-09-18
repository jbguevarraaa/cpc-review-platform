import Link from "next/link";

type CodeEntry = [string, string];
type Category = { name: string; codes: CodeEntry[] };
type Subsection = {
  n: number;
  title: string;
  range: string;
  intro?: string[];
  categories: Category[];
  rules: string[];
  tips: string[];
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
    range: "33361–33417",
    intro: [
      "TAVR/TAVI (transcatheter aortic valve replacement/implantation) codes are picked purely by the ARTERIAL ACCESS ROUTE used to deliver the new valve — femoral, axillary, iliac, or transaortic/transapical — not by the valve type or manufacturer.",
      "TAVR/TAVI codes already bundle percutaneous access, balloon aortic valvuloplasty, advancing and positioning the delivery system, deploying the valve, temporary pacemaker insertion for rapid pacing, and arteriotomy closure. All the guidance imaging (angiography, roadmapping, fluoroscopy) needed to place the valve is bundled too — it's never separately billed.",
      "When cardiopulmonary bypass support is needed during TAVR/TAVI, add the matching bypass add-on: percutaneous peripheral (33367), open peripheral (33368), or central (33369) — chosen by cannulation site and technique, not by the base TAVR code itself.",
      "Open aortic valve replacement (33405/33406/33410) is chosen by valve material: prosthetic (33405), homograft/allograft (33406), or stentless tissue (33410). Konno (33412, transventricular annulus enlargement) and Ross-Konno (33440, autologous pulmonary valve translocation with annulus enlargement) are specialized enlargement procedures layered on top of that same basic AVR concept.",
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
      "Diagnostic left heart catheterization and supravalvular aortography codes are not separately billed with TAVR/TAVI — that work is already captured in the TAVR codes themselves, unless a genuinely new diagnostic study is needed (no prior study available, anatomy inadequately visualized, or a clinical change requires new evaluation).",
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
    range: "33500–33536, 33572",
    intro: [
      "CABG codes are counted by the number of DISTAL ANASTOMOSES — the points where the graft is actually sutured onto a diseased coronary artery — not by how many separate graft segments or incisions were used.",
      "There are three separate CABG code families depending on graft material, and they are NEVER mixed within the same family: venous-only grafts (33510–33516, picked by graft count 1 through 6+), arterial-only grafts (33533–33536, picked by graft count 1 through 4+), and combined arterial-venous grafting, which requires reporting TWO codes together — a combined-grafting add-on code (33517–33523, for the venous component) PLUS the matching arterial graft code (33533–33536).",
      "Procurement of the saphenous vein graft is already bundled into the venous CABG codes (33510–33516) and the combined codes (33517–33523) — it's never billed as a separate service or co-surgery. Harvesting an upper-extremity vein instead uses add-on 35500; harvesting a femoropopliteal vein segment uses add-on 35572. Endoscopic (rather than open) vein harvest is reported with add-on 33508, and endoscopic upper-extremity artery harvest with add-on 33509.",
      "The internal mammary (internal thoracic) artery, gastroepiploic artery, epigastric artery, radial artery, and other arterial conduits are all included as \"arterial grafts\" for the 33533–33536 codes — procurement of the artery itself is bundled in, except when an upper-extremity artery like the radial artery is harvested, which gets its own add-on (33509 endoscopic, or 35600 open).",
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
          ["33509", "Harvest of upper extremity artery, 1 segment, for CABG, endoscopic (add-on)"],
          ["33572", "Coronary endarterectomy, open, of LAD/circumflex/RCA, performed with CABG, each vessel (add-on)"],
          ["33530", "Reoperation, coronary artery bypass or valve procedure, more than 1 month after original operation (add-on)"],
        ],
      },
    ],
    rules: [
      "Never report a venous-only code (33510–33516) together with an arterial code (33533–33536) for the same operative session — that combination is what the combined codes (33517–33523 + 33533–33536) exist for.",
      "The combined-grafting codes (33517–33523) can never be reported alone — they must always be paired with the matching arterial graft code (33533–33536).",
      "33530 (reoperation) is an add-on used across valve AND bypass procedures alike, whenever the operation is more than a month after the original — it's not exclusive to CABG.",
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
      "TEVAR (thoracic endovascular aortic repair, 33880–33886) is coded by which segment of the thoracic aorta the endograft covers relative to the left subclavian artery, not by the underlying pathology (aneurysm, dissection, penetrating ulcer, and traumatic disruption are all coded the same way based on anatomic coverage). All of the pre-procedure imaging, nonselective catheterization from the femoral/iliac access, and completion angiography are bundled into the base TEVAR codes — not separately billable.",
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
          ["33880", "Endovascular repair of descending thoracic aorta, covering the left subclavian artery origin; initial endoprosthesis"],
          ["33881", "Same, not covering the left subclavian artery origin"],
          ["33882", "Placement of a fenestrated/branched endograft module extending into the left subclavian artery"],
          ["33883", "Delayed placement of a proximal extension prosthesis (add-on)"],
          ["33886", "Delayed placement of a distal extension prosthesis (add-on)"],
        ],
      },
    ],
    rules: [
      "33864 (David/Yacoub) is never reported together with 33858, 33859, or 33863 — it's a distinct, complete procedure choice, not an add-on to those.",
      "33871 (full transverse arch graft) and 33866 (hemiarch add-on) are mutually exclusive — pick the one that matches the actual extent of arch work performed.",
      "Balloon angioplasty or stenting performed within the TEVAR treatment zone, either before or after endograft deployment, is never separately reported — it's bundled into the base TEVAR code.",
    ],
    tips: [
      "For the ascending aorta/root family, ask: dissection or other disease (858 vs. 859)? Valve replaced or preserved (863 Bentall vs. 864 David/Yacoub)? That's the whole decision tree.",
      "TEVAR code selection hinges entirely on anatomic coverage relative to the left subclavian artery — memorize that landmark, not the pathology being treated.",
    ],
  },
  {
    n: 7,
    title: "ECMO/ECLS, Ventricular Assist Devices & Total Artificial Heart",
    range: "33927–33999",
    intro: [
      "ECMO (extracorporeal membrane oxygenation) and ECLS (extracorporeal life support) are the same concept — continuously pumping blood through an external oxygenator — reported through a consistent 4-code structure repeated for each of the two circuit types: veno-venous (lung support only) and veno-arterial (heart and lung support).",
      "Initiation codes (33946 veno-venous, 33947 veno-arterial) cover the physician work of setting up the circuit and its parameters. Daily management codes (33948 veno-venous, 33949 veno-arterial) cover the ongoing physician oversight of blood flow, oxygenation, and anticoagulation — and these are billed once per day, separate from the patient's overall daily hospital care codes (which are still separately reportable).",
      "Cannula insertion (33951–33956) is coded by patient age and circuit type; cannula repositioning (33957–33964) is a distinct service from insertion and is never billed on the same day as an initiation code by the same or a different physician.",
      "Ventricular assist device (VAD) and intra-aortic balloon pump (IABP) codes exist on a similar insertion/removal/repositioning pattern to the pacemaker and ECMO families — percutaneous VAD insertion/removal uses 33990–33997, transthoracic (implantable) VAD uses 33975/33976/33979, and IABP insertion/removal is split by APPROACH: percutaneous (33967/33968), open femoral (33970/33971), or ascending aorta (33973/33974) — each approach has its own paired insertion and removal code.",
    ],
    categories: [
      {
        name: "ECMO/ECLS",
        codes: [
          ["33946", "ECMO/ECLS, physician services; initiation, veno-venous"],
          ["33947", "Initiation, veno-arterial"],
          ["33948", "Daily management, each day, veno-venous"],
          ["33949", "Daily management, each day, veno-arterial"],
          ["33951–33956", "Cannula insertion for ECMO/ECLS, by age and veno-venous/veno-arterial circuit type"],
          ["33957–33964", "Cannula repositioning for ECMO/ECLS, by age and circuit type"],
        ],
      },
      {
        name: "Ventricular Assist Device & Intra-Aortic Balloon Pump",
        codes: [
          ["33967", "Insertion of intra-aortic balloon assist device, percutaneous"],
          ["33968", "Removal of intra-aortic balloon assist device, percutaneous"],
          ["33970", "Insertion of intra-aortic balloon assist device through the femoral artery, open approach"],
          ["33971", "Removal of intra-aortic balloon assist device, including repair of femoral artery, with or without graft"],
          ["33973", "Insertion of intra-aortic balloon assist device through the ascending aorta"],
          ["33974", "Removal of intra-aortic balloon assist device from the ascending aorta, including repair, with or without graft"],
          ["33975 / 33976", "Insertion of implantable (transthoracic) VAD — single ventricle vs. biventricular"],
          ["33979", "Insertion of a total replacement heart system (artificial heart)"],
          ["33990–33993, 33995, 33997", "Percutaneous VAD insertion, removal, and repositioning, by ventricle and approach"],
        ],
      },
      {
        name: "Heart Transplantation",
        codes: [
          ["33945", "Heart transplant, with or without recipient cardiectomy"],
          ["33929", "Removal of a total replacement heart system for heart transplantation (add-on)"],
        ],
      },
    ],
    rules: [
      "Daily ECMO/ECLS management codes (33948/33949) are never reported on the same day as an initiation code (33946/33947) — even if performed by a different physician on that same day.",
      "Initiation codes (33946/33947) are never reported on the same day as a repositioning code (33957–33964).",
      "Repositioning a cannula at the same session as its original insertion is not separately reported — that's already part of the insertion code itself.",
    ],
    tips: [
      "The ECMO family is one consistent grid: veno-venous vs. veno-arterial, crossed with initiation vs. daily management vs. cannula work — learn the grid, not 19 individual codes.",
      "\"Different physicians managed different parts of ECMO care\" is a recurring exam setup — each physician reports only the specific service(s) they personally performed, not the whole bundle.",
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

const mainStyle = { maxWidth: "1160px", margin: "0 auto", padding: "36px 24px 64px", minHeight: "100vh", background: "#fdf6f6", color: "#291a1a", fontFamily: "Arial, sans-serif" };
const heroStyle = { background: "linear-gradient(135deg, #450a0a, #b91c1c)", color: "white", padding: "48px 44px", borderRadius: "18px", marginBottom: "26px", boxShadow: "0 12px 28px rgba(69,10,10,0.22)" };
const kickerStyle = { margin: "0 0 10px", color: "#fecaca", fontWeight: 800, letterSpacing: "0.08em" };
const navStyle = { display: "flex", flexWrap: "wrap" as const, gap: "10px", marginBottom: "26px" };
const navLinkStyle = { textDecoration: "none", color: "#b91c1c", background: "#ffffff", border: "1px solid #f0d7d7", borderRadius: "999px", padding: "10px 15px", fontWeight: 700, fontSize: "14px" };
const pagerStyle = { display: "flex", flexWrap: "wrap" as const, gap: "10px", marginBottom: "26px" };
const pagerLinkStyle = { textDecoration: "none", color: "#b91c1c", background: "#fff1f0", border: "1px solid #fecaca", borderRadius: "999px", padding: "8px 16px", fontWeight: 700, fontSize: "14px" };
const pagerActiveStyle = { ...pagerLinkStyle, background: "#b91c1c", color: "#fff", border: "1px solid #b91c1c" };
const introBoxStyle = { background: "#fff1f0", border: "1px solid #fecaca", borderLeft: "7px solid #b91c1c", borderRadius: "12px", padding: "22px 24px", marginBottom: "30px", lineHeight: 1.7 };
const sectionStyle = { background: "#ffffff", border: "1px solid #f0e2e2", borderRadius: "14px", padding: "26px 28px", marginBottom: "22px", boxShadow: "0 5px 16px rgba(69,10,10,0.06)" };
const sectionHeaderStyle = { display: "flex", alignItems: "center", gap: "14px", marginBottom: "10px", flexWrap: "wrap" as const };
const sectionNumberStyle = { background: "#b91c1c", color: "#fff", width: "36px", height: "36px", minWidth: "36px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "15px" };
const sectionTitleStyle = { margin: 0, fontSize: "22px", color: "#111827" };
const rangeChipStyle = { background: "#fff1f0", border: "1px solid #fecaca", color: "#b91c1c", borderRadius: "999px", padding: "4px 12px", fontWeight: 800, fontSize: "13px", fontFamily: "Consolas, monospace" };
const pStyle = { lineHeight: 1.75, margin: "0 0 10px" };
const categoryTitleStyle = { margin: "18px 0 8px", fontSize: "16px", color: "#b91c1c", fontWeight: 800 };
const codeListStyle = { listStyle: "none", padding: 0, margin: "0 0 4px", display: "grid", gap: "7px" };
const codeItemStyle = { display: "flex", gap: "12px", alignItems: "baseline", background: "#fdf8f8", border: "1px solid #f0e2e2", borderRadius: "8px", padding: "8px 13px" };
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
        <p style={{ margin: "12px 0 0", fontSize: "19px", lineHeight: 1.5 }}>Part 2 — General Repair, LAA Closure, Heart Valves, Coronary Artery Bypass Grafting, Aorta &amp; Great Vessels, and ECMO/VAD (33300–33999)</p>
      </header>

      <div style={pagerStyle}>
        <Link href="/cpt/surgery/33000-series-guidelines-reviewer" style={pagerLinkStyle}>← Part 1 (33016–33269)</Link>
        <span style={pagerActiveStyle}>Part 2 (33300–33999)</span>
        <Link href="/cpt/surgery/33000-series-guidelines-reviewer-part-3" style={pagerLinkStyle}>Part 3 (36555–37214) →</Link>
      </div>

      <nav aria-label="Cardiovascular series navigation" style={navStyle}>
        <Link href="/cpt/surgery/33,000" style={navLinkStyle}>Cardiovascular System home</Link>
        <Link href="/cpt/surgery/33000-series-practice-quiz" style={navLinkStyle}>Practice Quiz</Link>
        <Link href="/cpt/surgery/33000-series-flashcards" style={navLinkStyle}>Flashcards</Link>
        <Link href="/cpt/surgery" style={navLinkStyle}>Surgery home</Link>
      </nav>

      <section style={introBoxStyle}>
        <strong>This fills the biggest gap in the series:</strong> heart valve surgery (TAVR/TAVI, open valve repair and replacement across all four valves) and coronary artery bypass grafting (CABG) — arguably the most clinically central and most heavily tested part of cardiovascular surgery — plus aorta/great vessel repair (open and endovascular/TEVAR) and ECMO/VAD support. Source text pulled directly from the 2026 CPT codebook. Written in original wording, not copied from the CPT text; codes are grouped by category with representative entries, not every single code listed.
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

          {sub.categories.map((cat) => (
            <div key={cat.name}>
              <h3 style={categoryTitleStyle}>{cat.name}</h3>
              <ul style={codeListStyle}>
                {cat.codes.map(([code, desc]) => (
                  <li key={code} style={codeItemStyle}>
                    <code style={codeChipStyle}>{code}</code>
                    <span>{desc}</span>
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
