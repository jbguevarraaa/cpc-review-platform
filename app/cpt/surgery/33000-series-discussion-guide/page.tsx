import { DiscussionGuidePage, DGList, DGSteps, type DGTopic } from "../_digestive/discussion-guide";
import { CRIMSON } from "../_digestive/players";

const topics: DGTopic[] = [
  {
    n: 1,
    title: "Chapter Organization (Session 1)",
    range: "33016–37799",
    items: [
      {
        q: "Be able to identify the organization of the Chapter (e.g., 33K is Heart).",
        approach: "Read the Cardiovascular System chapter as a set of anatomic neighborhoods, in the order the codebook actually runs through them — heart first, then the vessels.",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}>The Cardiovascular System chapter (33016–37799) is organized by anatomic structure, running roughly heart-outward to vessels:</p>
            <DGList
              items={[
                "Heart & Pericardium (33016–33999) — pericardium, cardiac tumor, pacemakers/ICDs, phrenic nerve stimulation, electrophysiology/maze/LAA, general cardiac repair, heart valves (open and transcatheter), CABG, aorta & great vessels (open and TEVAR), ECMO/cardiac assist, and heart/heart-lung transplantation.",
                "Arteries & Veins (34001–37799) — endovascular repair of the abdominal aorta and iliac arteries (EVAR/FEVAR), open direct aneurysm repair, bypass grafts, vascular injection/catheterization and angiography, venous procedures (venipuncture, transfusion, sclerotherapy, ablation), central venous access, hemodialysis access and the dialysis circuit, portal decompression, and transcatheter thrombectomy/thrombolysis.",
                "Hemic & Lymphatic Systems and Mediastinum & Diaphragm (38100–39599) — spleen, bone marrow, lymph nodes, mediastinum, and diaphragm; not part of this series.",
              ]}
            />
            <p style={{ margin: "8px 0 0" }}>A second, separate section worth knowing exists outside Surgery entirely: Medicine — Cardiovascular (92920–93799) covers coronary therapeutic services, diagnostic cardiac catheterization, monitoring, and device evaluation/interrogation. The Surgery chapter places the device (pacemaker, CABG graft, stent); the Medicine section reads and manages it afterward.</p>
          </>
        ),
      },
    ],
  },
  {
    n: 2,
    title: "Pacemaker or Implantable Defibrillator",
    range: "33202–33288",
    items: [
      {
        q: "a. What are the three (3) different components of a pacemaker/implantable defib?",
        approach: "A pacemaker or ICD system is built from three physical parts — name each one and what it does, rather than describing the system as one unit.",
        answer: (
          <>
            <DGList
              items={[
                <><strong>The electronics</strong> — the circuitry that generates and times the pacing impulse (or detects and treats an arrhythmia, for an ICD).</>,
                <><strong>The battery</strong> — the power supply. Both the electronics and the battery live inside the pulse generator's case.</>,
                <><strong>The lead(s)</strong> — each lead carries the impulse to the heart and consists of one or more electrodes, conductor wires, insulation, and a fixation mechanism.</>,
              ]}
            />
            <p style={{ margin: "8px 0 0" }}>For coding purposes, the electronics and battery are never split apart — there is no battery-only code, so a "battery change" is billed as a full pulse-generator replacement. That is why the Guidelines Reviewer treats "pulse generator" as one bundled component and "lead" as the other; CPT's own descriptive sentence is simply naming what is inside the generator.</p>
          </>
        ),
      },
      {
        q: "b. What are the four (4) different configurations of pacemaker systems?",
        approach: "Count leads and where they sit: one lead, two leads, three leads, or no leads at all (self-contained).",
        answer: (
          <DGList
            items={[
              <><strong>Single-chamber</strong> — pulse generator + one lead, in the right atrium OR the right ventricle.</>,
              <><strong>Dual-chamber</strong> — pulse generator + two leads, right atrium AND right ventricle.</>,
              <><strong>Biventricular (CRT)</strong> — dual-chamber system plus a third lead placed in the cardiac venous system to pace the left ventricle (reported with 33224 standalone or +33225 at the time of generator insertion).</>,
              <><strong>Leadless</strong> — a single self-contained capsule with a built-in battery and electrode, placed transvenously into the right ventricle (33274/33275).</>,
            ]}
          />
        ),
        codes: [["33206–33208", "Full pacemaker system, by lead configuration"], ["33274 / 33275", "Leadless pacemaker insert/replace / removal"]],
      },
      {
        q: "c. What are the three (3) different configurations of implantable defib systems?",
        approach: "Same idea as the ICD 'three general categories' language CPT itself uses — sort by where the electrode sits and what therapies it can deliver.",
        answer: (
          <DGList
            items={[
              <><strong>Transvenous ICD</strong> — combines antitachycardia pacing, low-energy cardioversion, and defibrillating shocks, and can also provide chronic pacing.</>,
              <><strong>Subcutaneous ICD (S-ICD)</strong> — a single subcutaneous electrode tunneled to the left parasternal margin; shock-only — no antitachycardia pacing and no chronic pacing.</>,
              <><strong>Substernal ICD</strong> — at least one electrode tunneled subcutaneously into the substernal anterior mediastinum (without entering the pericardium); provides antitachycardia pacing and shocks, but not chronic pacing.</>,
            ]}
          />
        ),
      },
      {
        q: "d. How is the placement of epicardial leads (as opposed to transvenous leads) reported?",
        approach: "Epicardial always means an open or endoscopic approach to the outside of the heart — that alone tells you which two codes apply.",
        answer: (
          <p style={{ margin: 0 }}>Epicardial lead placement needs access to the surface of the heart, so it is reported with its own pair of codes rather than folded into the transvenous system codes: <strong>33202</strong> for open incision (thoracotomy, sternotomy, or subxiphoid) or <strong>33203</strong> for an endoscopic (thoracoscopic/pericardioscopic) approach. When the same physician also inserts the generator in the same session, the generator code (33212, 33213, 33221, 33230, 33231, 33240, as appropriate) is reported in addition to 33202/33203.</p>
        ),
        codes: [["33202", "Epicardial lead(s), open incision"], ["33203", "Epicardial lead(s), endoscopic"]],
      },
      {
        q: "e. How are procedures on the skin pocket for pacemakers or implantable defibs reported?",
        approach: "Ask 'was the same pocket just revised, or was a new pocket created (relocation)?' — only relocation is separately billable.",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}><strong>Revision</strong> of the existing skin pocket is included in the generator/lead/system codes (33206–33249, 33262–33264, 33270–33273) and is never reported separately — even when revision involves opening the pocket to drain a hematoma or infection (in which case the appropriate wound-repair code, e.g. 10140, 11042–11047, may apply instead).</p>
            <p style={{ margin: 0 }}><strong>Relocation</strong> to a new pocket (for example, for infection or erosion) is a separate, billable service: 33222 for a pacemaker pocket, 33223 for an ICD pocket. It may be reported as a standalone procedure or at the time of a generator/lead insertion, replacement, or repositioning, and it already includes everything about the old pocket (opening, draining a hematoma/abscess if present, closing it) plus creating the new one.</p>
          </>
        ),
        codes: [["33222", "Relocate pacemaker skin pocket"], ["33223", "Relocate ICD skin pocket"]],
      },
      {
        q: "f. How are device evaluation or testing procedures reported for pacemakers and implantable defibs?",
        approach: "Split this into two separate testing questions: routine device interrogation/programming, and defibrillation threshold (DFT) testing.",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}><strong>Device evaluation/interrogation</strong> (93260, 93261, 93279–93298) is never reported together with the pulse-generator-and-lead insertion or revision codes (33206–33249, 33262–33264, 33270, 33271, 33272, 33273). For leadless pacemakers, the parallel evaluation codes (93279, 93286, 93288, 93294, 93296) are likewise not reported with 33274/33275 — device evaluation at insertion, replacement, or removal is bundled into those codes.</p>
            <p style={{ margin: 0 }}><strong>Defibrillation threshold (DFT) testing</strong> is separately reportable (93640, 93641) when performed during transvenous ICD insertion or replacement. It is <strong>not</strong> separately reportable during S-ICD insertion. At a follow-up visit or at a later replacement, DFT testing is reported with 93642 or 93644 instead.</p>
          </>
        ),
      },
    ],
  },
  {
    n: 3,
    title: "Cardiac Valve Procedures",
    range: "33361–33478",
    items: [
      {
        q: "a. Locate the code ranges for both OPEN and TRANSCATHETER valve procedures.",
        approach: "Group by valve first (aortic, mitral, tricuspid, pulmonary), then by approach within each valve.",
        answer: (
          <DGList
            items={[
              <><strong>Aortic — transcatheter (TAVR/TAVI):</strong> 33361–33370 (by access route), with CPB add-ons 33367–33369.</>,
              <><strong>Aortic — open:</strong> 33390/33391 (valvuloplasty), 33405–33417, 33440 (replacement — prosthetic, homograft, stentless, Konno, Ross, Ross-Konno).</>,
              <><strong>Mitral — transcatheter (TMVR):</strong> 33418 (initial prosthesis) + 33419 (additional, add-on).</>,
              <><strong>Mitral — open:</strong> 33420–33430 (valvotomy → valvuloplasty → replacement).</>,
              <><strong>Tricuspid — open:</strong> 33460–33468 (no transcatheter tricuspid family in this series).</>,
              <><strong>Pulmonary — transcatheter (TPVI):</strong> 33477.</>,
              <><strong>Pulmonary — open:</strong> 33474–33476, 33478.</>,
            ]}
          />
        ),
      },
      {
        q: "b. What services are packaged with transcatheter cardiac valve procedures?",
        approach: "TAVR/TMVR/TPVI all follow one bundling logic: everything needed to deliver and deploy the valve through the catheter is included.",
        answer: (
          <DGList
            items={[
              "Percutaneous (or open/transapical/transaortic) access to reach the valve.",
              "Balloon valvuloplasty to prepare the implantation site.",
              "Advancing, positioning, repositioning, and deploying the delivery system and valve.",
              "Temporary pacemaker insertion (33210) for rapid pacing during deployment.",
              "Closure of the arteriotomy or access site.",
              "All guidance imaging used to place the valve — angiography, roadmapping, fluoroscopy, aortic/LVOT measurement, post-deployment aortography, and the radiological supervision and interpretation for all of it.",
              "For TPVI (33477) specifically: balloon angioplasty and stenting performed within the pulmonary conduit/treatment zone itself, and pre-stenting when performed.",
            ]}
          />
        ),
      },
      {
        q: "c. What services are NOT packaged with transcatheter cardiac valve procedures and therefore are reported separately when performed?",
        approach: "These are the services that exist outside the valve delivery itself — support devices, other interventions, and the co-surgeon modifier.",
        answer: (
          <DGList
            items={[
              "Cardiopulmonary bypass support, by cannulation method: +33367 (percutaneous peripheral), +33368 (open peripheral), +33369 (central) — used with TAVR/TAVI codes.",
              "Percutaneous coronary intervention performed at the same session.",
              "Transcatheter ventricular support (a VAD or intra-aortic balloon pump), reported with its own appropriate code.",
              "Two physician operators — TAVR/TAVI always involves two operators, each reporting the same base code with modifier 62 (not two different codes).",
              "For TPVI: angioplasty or stenting performed at a site OUTSIDE the pulmonary treatment zone (92997/92998 or 37236/37237).",
              "Diagnostic coronary angiography, but only under the narrow exceptions in the next question.",
            ]}
          />
        ),
        codes: [["+33367 / +33368 / +33369", "TAVR CPB add-on — percutaneous / open peripheral / central"], ["Modifier 62", "Two-operator reporting for TAVR/TAVI"]],
      },
      {
        q: "d. What unique conditions allow for the separate reporting of diagnostic coronary angiography alongside transcatheter cardiac valve procedures?",
        approach: "Diagnostic LEFT HEART catheterization codes are never used for the valve's own guidance work — but diagnostic CORONARY angiography has three narrow exceptions.",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}>Diagnostic left heart catheterization (93452, 93453, 93458–93461) and supravalvular aortography (93567) are not used to report the transcatheter valve procedure's own guidance work — that is captured inside the valve code itself. Diagnostic <strong>coronary</strong> angiography at the same session, however, may be separately reported (with modifier 59) only when ONE of these applies:</p>
            <DGList
              items={[
                "There is no prior catheter-based coronary study on file, OR",
                "A prior study exists but is outdated or inadequate (poor visualization, or the patient's clinical condition has since changed), OR",
                "A clinical change occurring during the procedure itself requires new coronary evaluation.",
              ]}
            />
          </>
        ),
      },
    ],
  },
  {
    n: 4,
    title: "Coronary Artery Bypass Grafting (CABG)",
    range: "33510–33536, 33572",
    items: [
      {
        q: "a. How are the number of grafts determined in a CABG procedure?",
        approach: "This is a direct definitional fact worth memorizing outright.",
        answer: <p style={{ margin: 0 }}>By the number of <strong>distal anastomoses</strong> — the points where a graft is actually sutured onto a diseased coronary artery — not by the number of graft segments harvested, incisions made, or diseased vessels identified. A single vein graft that is sequentially anastomosed to two different coronary arteries counts as two, because it made two suture connection points.</p>,
      },
      {
        q: "b. How are CABG procedures grouped (3 of them) in the CPT system?",
        approach: "Group by graft MATERIAL — the three families are never mixed within the same operative session.",
        answer: (
          <DGList
            items={[
              <><strong>Venous-only</strong> grafts — 33510–33516, picked by graft count (1 through 6+).</>,
              <><strong>Arterial-only</strong> grafts — 33533–33536, picked by graft count (1 through 4+).</>,
              <><strong>Combined arterial-venous</strong> grafting — requires TWO codes reported together: a combined-grafting add-on (33517–33523, for the venous component) PLUS the matching arterial graft code (33533–33536).</>,
            ]}
          />
        ),
        codes: [["33510–33516", "Venous only"], ["33533–33536", "Arterial only"], ["33517–33523 + 33533–33536", "Combined"]],
      },
      {
        q: "c. Which vessel(s) when procured (used) is considered as a packaged service for venous grafting?",
        approach: "One specific vein is bundled — everything else is separately billable.",
        answer: <p style={{ margin: 0 }}>The <strong>saphenous vein</strong>. Procuring it is already bundled into the venous CABG codes (33510–33516) and the combined codes (33517–33523) — it is never billed as a separate service or reported as co-surgery.</p>,
      },
      {
        q: "d. Which vessel(s) when procured (used) is considered as a packaged service for arterial grafting?",
        approach: "Almost every arterial conduit's harvest is bundled into 33533–33536 — with one specific exception (answered in part e).",
        answer: <p style={{ margin: 0 }}>The internal mammary (internal thoracic) artery, gastroepiploic artery, epigastric artery, radial artery, and other arterial conduits are all considered "arterial grafts" for 33533–33536, and procurement of the artery itself is included in those codes.</p>,
      },
      {
        q: "e. When is the vessel procurement NOT packaged with the grafting? What codes are reported for those?",
        answer: (
          <DGList
            items={[
              <><strong>Upper-extremity vein</strong> harvest (for lower-extremity or coronary bypass) — add-on <strong>+35500</strong>.</>,
              <><strong>Femoropopliteal vein segment</strong> harvest — add-on <strong>+35572</strong>.</>,
              <><strong>Upper-extremity artery</strong> harvest for CABG (e.g., radial artery) — <strong>33509</strong> if endoscopic, <strong>35600</strong> if open.</>,
              <>Choosing an <strong>endoscopic</strong> (rather than open) technique to harvest the saphenous vein itself is still separately reported with add-on <strong>33508</strong>, since it describes the technique, not a non-bundled vessel.</>,
            ]}
          />
        ),
        codes: [["+35500", "Upper-extremity vein harvest"], ["+35572", "Femoropopliteal vein segment harvest"], ["33509 / 35600", "Upper-extremity artery harvest — endoscopic / open"], ["+33508", "Endoscopic saphenous vein harvest technique"]],
      },
      {
        q: "f. How are combination arterial-venous grafting reported?",
        approach: "Never report a plain venous code side-by-side with a plain arterial code — there is a purpose-built pairing for this exact scenario.",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}>Report the combined-grafting venous add-on code that matches the number of vein grafts (33517–33523) TOGETHER WITH the arterial graft code that matches the number of arterial grafts (33533–33536). The arterial code carries the "primary" role; the combined-grafting code can never stand alone.</p>
            <p style={{ margin: 0 }}>Example: one internal mammary artery graft plus three saphenous vein grafts = <strong>33533</strong> (1 arterial graft) + <strong>+33519</strong> (3 venous grafts, combined-grafting add-on) — never 33510-family billed side-by-side with 33533-family.</p>
          </>
        ),
      },
    ],
  },
  {
    n: 5,
    title: "Thoracic Aorta Repairs",
    range: "33858–33886",
    items: [
      {
        q: "a. What are the three (3) procedures (groups of codes) used to repair disease in the thoracic aorta?",
        approach: "Split the thoracic aorta into its three anatomic segments — the segment tells you which code family to open.",
        answer: (
          <DGList
            items={[
              <><strong>Ascending aorta &amp; aortic root</strong> — 33858/33859 (graft, by dissection vs. other disease), with root-replacement variants 33863 (Bentall) and 33864 (David/Yacoub).</>,
              <><strong>Aortic arch</strong> — 33866 (hemiarch, add-on with an ascending graft) or 33871 (full transverse arch graft, mutually exclusive with 33866).</>,
              <><strong>Descending thoracic aorta</strong> — repaired either by an open graft (33875, or 33877 for a thoracoabdominal aneurysm) or by TEVAR, the endovascular approach (33880–33886).</>,
            ]}
          />
        ),
      },
      {
        q: "b. What services are packaged with endovascular repair of descending thoracic aorta?",
        approach: "TEVAR bundling mirrors EVAR bundling — everything inside the treatment zone, and everything needed to deliver the graft, is included.",
        answer: (
          <DGList
            items={[
              "Pre-procedure sizing.",
              "Non-selective catheterization from the femoral/iliac access.",
              "All associated radiological supervision and interpretation.",
              "All extensions placed at the same session as the primary repair.",
              "Percutaneous access with a sheath smaller than 12 French.",
              "Balloon angioplasty or stenting performed within the TEVAR treatment zone, either before or after endograft deployment.",
            ]}
          />
        ),
      },
      {
        q: "c. What services are NOT packaged with endovascular repair of descending thoracic aorta and therefore are reported separately when performed?",
        answer: (
          <DGList
            items={[
              "Access with a 12 French or larger sheath plus closure device — +34713.",
              "Open exposure, reported by site — 34714, 34715, 34716, 34812, 34820, 34833, 34834.",
              "Transcatheter fixation devices for the thoracic repair — 34712, once per operative session.",
              "Angioplasty/stenting performed in vessels OUTSIDE the TEVAR treatment zone, embolization, and IVUS.",
              "Extensions placed LATER, after a prior repair (delayed extension codes — see the next question's related codes 33883/33886).",
            ]}
          />
        ),
      },
      {
        q: "d. How are the fluoroscopic guidance codes 75956–75959 used in conjunction with the endovascular repair codes?",
        approach: "This is a trap question built on outdated material — check the current codebook status of these four codes before answering.",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}><strong>They aren't — 75956, 75957, 75958, and 75959 have all been deleted in CPT 2026.</strong> These were the older radiological supervision and interpretation codes for placement of the proximal and distal thoracic endovascular graft(s) and each additional module. Some older training material still lists them alongside TEVAR.</p>
            <p style={{ margin: 0 }}>The work they used to describe is now simply bundled directly into the base TEVAR codes (33880–33886) — TEVAR already includes "all associated radiological supervision and interpretation," so no separate fluoroscopic guidance code is reported at all, deleted or otherwise. This is the same pattern as 33884 (deleted, replaced by 33883) and 37221/37223 (deleted, replaced by 37258–37261) elsewhere in this series.</p>
          </>
        ),
      },
    ],
  },
  {
    n: 6,
    title: "Heart-Lung Transplantation (Session 2)",
    range: "33927–33945",
    items: [
      {
        q: "a. What are the three (3) distinct physician work components in heart-lung transplantations?",
        approach: "The same three-component structure applies to a heart-only transplant — heart-lung just uses the parallel heart-lung code in each slot.",
        answer: (
          <DGList
            items={[
              <><strong>Donor cardiectomy-pneumonectomy</strong> — removing the donor heart and lungs and keeping them cold and perfused with preservation solution until transplant — <strong>33930</strong>.</>,
              <><strong>Backbench work</strong> — preparing the cadaver heart-lung allograft: dissecting it from surrounding soft tissue and preparing the aorta, venae cavae, and trachea for implantation — <strong>33933</strong>.</>,
              <><strong>Recipient allotransplantation</strong> — implanting the donor heart-lung block, with recipient cardiectomy-pneumonectomy, and caring for the recipient — <strong>33935</strong>.</>,
            ]}
          />
        ),
        codes: [["33930", "Donor cardiectomy-pneumonectomy"], ["33933", "Backbench, heart-lung"], ["33935", "Recipient transplant, heart-lung"]],
      },
      {
        q: "b. What services are packaged with cadaver donor cardiectomy?",
        approach: "Ask what happens to the organ between removal and the recipient's operating room.",
        answer: <p style={{ margin: 0 }}>Keeping the donor organ(s) cold and perfused with preservation solution — the cold preservation itself is part of the harvest code, not a separately billable service.</p>,
      },
      {
        q: "c. What services are packaged with backbench work?",
        approach: "Backbench work is defined by its own preparation checklist — everything on that checklist is included in the single backbench code.",
        answer: <p style={{ margin: 0 }}>Dissecting the allograft from surrounding soft tissue, and preparing the vessels/structures needed for implantation: the aorta, superior and inferior vena cava, pulmonary artery, and left atrium for a heart-only allograft (33944); the aorta, venae cavae, and trachea for a heart-lung allograft (33933).</p>,
      },
      {
        q: "d. How are procedures on components of artificial hearts reported?",
        approach: "Distinguish 'implant/replace/remove the whole device' (has its own codes) from 'fix a piece of the device that's already in' (does not).",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}>Implanting, removing-and-replacing, or removing the entire total replacement heart system each have dedicated codes: 33927 (implant with recipient cardiectomy), 33928 (remove and replace with a new device), and +33929 (remove for a donor heart transplant, add-on with 33945).</p>
            <p style={{ margin: 0 }}><strong>Revising or replacing only components</strong> of an already-implanted artificial heart (not the whole system) has no dedicated code — it is reported with the unlisted cardiac surgery code, <strong>33999</strong>.</p>
          </>
        ),
        codes: [["33927", "Implant total artificial heart"], ["33928", "Remove and replace"], ["+33929", "Remove for donor heart transplant (with 33945)"], ["33999", "Components only — unlisted"]],
      },
    ],
  },
  {
    n: 7,
    title: "Extracorporeal Membrane Oxygenation / Extracorporeal Life Support (ECMO-ECLS)",
    range: "33946–33989",
    items: [
      {
        q: "a. What are the two (2) methods of ECMO-ECLS? Describe the configuration of each.",
        approach: "Ask what the circuit is supporting — lungs alone, or heart and lungs together — and that tells you the cannula configuration.",
        answer: (
          <DGList
            items={[
              <><strong>Veno-venous (VV)</strong> — supports the LUNGS ONLY. One or two cannulae, all placed in a vein.</>,
              <><strong>Veno-arterial (VA)</strong> — supports BOTH heart and lungs. Two cannulae — one in a large vein, one in a large artery.</>,
            ]}
          />
        ),
      },
      {
        q: "b. What are the two (2) big groups of service codes in ECMO-ECLS?",
        approach: "Split the codes by WHO is doing the work — the physician running the circuit, or the cannula procedure itself.",
        answer: (
          <DGList
            items={[
              <><strong>Physician services</strong> for running the circuit — initiation (33946 VV, 33947 VA) and daily management (33948 VV, 33949 VA).</>,
              <><strong>Cannula procedures</strong> — insertion (33951–33956), repositioning (33957–33964), and decannulation/removal (33965–33986), plus a few related add-ons (+33987 arterial exposure with conduit, 33988/33989 left heart vent).</>,
            ]}
          />
        ),
      },
      {
        q: "c. What are the services included in each one of these groups of codes?",
        approach: "Match each code to the moment in the patient's course it covers — starting the circuit, running it day to day, or placing/moving/removing the cannula.",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}><strong>Physician services group:</strong> initiation (33946/33947) covers establishing and setting the parameters of the circuit for that admission. Daily management (33948/33949) covers ongoing circuit monitoring and adjustment, once per day, separate from the patient's overall hospital/critical care.</p>
            <p style={{ margin: 0 }}><strong>Cannula procedures group:</strong> insertion codes are chosen by approach (percutaneous peripheral, open peripheral, or central by sternotomy/thoracotomy) and age (birth–5 vs. 6+), and the percutaneous codes already include fluoroscopic guidance. Repositioning and decannulation follow the identical approach-and-age pattern and also include their own fluoroscopic guidance.</p>
          </>
        ),
      },
      {
        q: "d. How are ECMO/ECLS services reported by the different physicians involved in the patient care?",
        approach: "Each physician bills only the piece of work he or she personally performed — there is no rule requiring one physician to own the whole case.",
        answer: <p style={{ margin: 0 }}>If different physicians perform different parts of the ECMO/ECLS care (for example, one physician initiates the circuit and a different physician manages it the next day), each physician reports only the service(s) he or she personally performed. Modifier 63 (procedures on infants under 4 kg) is never reported with 33946–33949.</p>,
      },
      {
        q: "e. What other services are packaged with ECMO/ECLS?",
        approach: "Look for work that is inseparable from the cannula procedure itself, and for same-day combinations the codebook specifically excludes.",
        answer: (
          <DGList
            items={[
              "Fluoroscopic guidance for percutaneous cannula insertion, repositioning, and decannulation — already included in those codes.",
              "Repositioning performed at the SAME session as insertion is not separately reportable — it's part of getting the cannula placed correctly.",
              "Daily management (33948/33949) and repositioning (33957–33964) are never reported on the same day as initiation (33946/33947), regardless of whether the same or a different physician performs them.",
            ]}
          />
        ),
      },
      {
        q: "f. How are cannula repositioning reported?",
        approach: "Same two axes as insertion — approach and age — with its own same-day reporting limits.",
        answer: <p style={{ margin: 0 }}>By approach and age, using codes <strong>33957–33964</strong>: peripheral percutaneous (33957/33958), peripheral open (33959/33962), or central by sternotomy/thoracotomy (33963/33964) — each pair split birth–5 years vs. 6 years and older. Not reported at the same session as insertion, and not on the same day as initiation.</p>,
        codes: [["33957 / 33958", "Peripheral percutaneous repositioning"], ["33959 / 33962", "Peripheral open repositioning"], ["33963 / 33964", "Central repositioning"]],
      },
      {
        q: "g. How are cannula replacement reported?",
        approach: "The fork is entirely about whether the new cannula goes into the SAME vessel or a DIFFERENT one.",
        answer: (
          <DGList
            items={[
              <><strong>Same vessel:</strong> report only the insertion code (33951–33956) — the replacement is treated as a fresh insertion.</>,
              <><strong>Different vessel:</strong> report TWO codes — a decannulation code (33965, 33966, 33969, 33984, 33985, or 33986, matching approach and age) PLUS an insertion code (33951–33956).</>,
            ]}
          />
        ),
      },
      {
        q: "h. How are cannula removal reported?",
        approach: "Same approach-and-age axes again, plus watch for extra vessel-repair work that can be reported on top of the decannulation code.",
        answer: <p style={{ margin: 0 }}>Decannulation is coded by approach and age: <strong>33965/33966</strong> peripheral percutaneous, <strong>33969/33984</strong> peripheral open, <strong>33985/33986</strong> central by sternotomy/thoracotomy (each pair split birth–5 years vs. 6+). Extensive artery repair or replacement needed during removal may be reported additionally (e.g., 35226, 35286, 35371, 35665).</p>,
        codes: [["33965 / 33966", "Peripheral percutaneous removal"], ["33969 / 33984", "Peripheral open removal"], ["33985 / 33986", "Central removal"]],
      },
    ],
  },
  {
    n: 8,
    title: "Abdominal Aorta Repairs",
    range: "34701–34848, 35001–35152",
    items: [
      {
        q: "a. What are the three (3) procedures (groups of codes) used to repair disease in the abdominal aorta?",
        approach: "This parallels the thoracic aorta question — three approach families, this time organized by how invasive the repair is.",
        answer: (
          <DGList
            items={[
              <><strong>Standard endovascular repair (EVAR)</strong> — 34701–34718, a covered-stent endograft deployed through the femoral/iliac vessels for aneurysm, pseudoaneurysm, dissection, penetrating ulcer, or traumatic disruption confined to the infrarenal aorta and/or iliac arteries.</>,
              <><strong>Fenestrated endovascular repair (FEVAR)</strong> — 34839–34848, for repairs that must preserve flow into the visceral/renal arteries via graft fenestrations.</>,
              <><strong>Open direct repair</strong> — 35001–35152 (Direct Repair of Aneurysm or Excision, and Graft Insertion, for Aneurysm, Pseudoaneurysm, Ruptured Aneurysm, and Associated Occlusive Disease) — the traditional open surgical approach, used when the anatomy or clinical situation doesn't support an endovascular repair.</>,
            ]}
          />
        ),
      },
      {
        q: "b. Identify the range of codes for each of these types of abdominal aorta repair.",
        approach: "Match each repair type from part (a) to its own code block — the three families never overlap.",
        answer: (
          <DGList
            items={[
              "Standard EVAR: 34701–34718 (base device codes and extensions covered in this series' reviewer), with the broader endovascular repair heading running through 34832 in the codebook's table of contents.",
              "FEVAR: 34839–34848 (34839 is the separate physician-planning code; 34841–34848 are the fenestrated endograft codes themselves).",
              "Open direct repair: 35001–35152 — outside the detailed coverage of this series' Guidelines Reviewer, but confirmed against the CPT 2026 table of contents.",
            ]}
          />
        ),
      },
      {
        q: "c. What other terms refer to a covered stent?",
        approach: "These are all synonyms for the same physical device — recognize them so a question worded differently doesn't throw you off.",
        answer: <p style={{ margin: 0 }}>Endovascular graft, endoprosthesis, endograft, and stent graft — all the same device by different names.</p>,
      },
      {
        q: "d. What are the different types of infrarenal aortic endografts?",
        approach: "Picture how the graft is shaped once deployed — straight tube, split into two legs as one piece, split into two legs that dock together, or off to one side only.",
        answer: (
          <DGList
            items={[
              "Aortic tube device.",
              "Bifurcated unibody device.",
              "Modular bifurcated docking system, with docking limb(s).",
              "Aorto-uni-iliac device.",
            ]}
          />
        ),
      },
      {
        q: "e. What are treatment zones and how many are there?",
        approach: "The zone is defined by the device, and it directly answers 'what's bundled?' for that repair.",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}>A treatment zone is every vessel that ends up holding a piece of the endograft (main body, docking limb, or extension) during that session. Anything the endograft covers within its zone is bundled into the base code; anything outside the zone is separately reportable. There are four treatment-zone definitions, matching the four base device pairs:</p>
            <DGList
              items={[
                "34701/34702 (aorto-aortic tube) — the infrarenal aorta.",
                "34703/34704 (aorto-uni-iliac) — the infrarenal aorta plus the ipsilateral common iliac.",
                "34705/34706 (aorto-bi-iliac) — the infrarenal aorta plus both common iliacs.",
                "34707/34708/34717/34718 (ilio-iliac / iliac branched) — the iliac artery(ies) containing the endograft.",
              ]}
            />
          </>
        ),
      },
      {
        q: "f. How are the infrarenal treatment codes organized?",
        approach: "Two questions in order: which device, and is it ruptured?",
        answer: (
          <p style={{ margin: 0 }}>By WHICH DEVICE was deployed (aorto-aortic tube, aorto-uni-iliac, aorto-bi-iliac, ilio-iliac tube, or iliac branched device), and each of the first four is then split into a rupture pair: the ODD code is for other-than-rupture, the EVEN code is for rupture (and the even codes include temporary aortic or iliac balloon occlusion when performed). The iliac branched codes (34717 add-on / 34718 standalone) are not paired this way.</p>
        ),
        codes: [["34701 / 34702", "Aorto-aortic tube — non-rupture / rupture"], ["34703 / 34704", "Aorto-uni-iliac — non-rupture / rupture"], ["34705 / 34706", "Aorto-bi-iliac — non-rupture / rupture"], ["34707 / 34708", "Ilio-iliac tube — non-rupture / rupture"]],
      },
      {
        q: "g. What services are packaged with endovascular repairs?",
        approach: "Walk through the procedure in order — sizing, access, guidewire work, deployment, and closure — and everything along that path is bundled.",
        answer: (
          <DGList
            items={[
              "Pre-procedure sizing and device selection.",
              "Vascular access with a percutaneous sheath smaller than 12 French.",
              "Guidewires, non-selective catheterization, and pre-deployment aortography.",
              "Deploying the main body and docking limb(s) — the base code itself.",
              "Extensions ending in the common iliac (or in the infrarenal aorta below the renals) — inside the treatment zone.",
              "Balloon angioplasty or stenting inside the treatment zone, before or after deployment.",
              "Completion angiography, fluoroscopy, roadmapping, and all radiological supervision and interpretation.",
              "Percutaneous closure.",
            ]}
          />
        ),
      },
      {
        q: "h. What services are NOT packaged with endovascular repairs and may be reported separately?",
        approach: "Look for work OUTSIDE the treatment zone, or for a bigger/different access approach than the routine percutaneous sheath.",
        answer: (
          <DGList
            items={[
              "Extensions ending BEYOND the common iliacs (internal iliac, external iliac, common femoral) or above the renal arteries — +34709, once per vessel treated.",
              "A 12 French or larger sheath with closure device — +34713.",
              "Open exposure, by site — +34812/+34714 (femoral), +34820/+34833 (iliac), +34715/+34716 (axillary/subclavian), +34834 (brachial).",
              "Selective catheterization of the hypogastric or renal artery, or of vascular families outside the treatment zone.",
              "Balloon angioplasty or stenting OUTSIDE the treatment zone (e.g., 37254–37261), embolization (e.g., 37242), and intravascular ultrasound (37252/37253).",
              "Open femoral repair and closure (34812) or extensive artery repair (35226, 35286, 35371) when performed.",
              "DELAYED extension placement after a prior repair — 34710 (initial vessel) + 34711 (each additional vessel) — reported at a separate session, not with 34701–34709.",
            ]}
          />
        ),
      },
    ],
  },
  {
    n: 9,
    title: "Catheterizations (Vascular Injection Procedures)",
    range: "36000–36254",
    items: [
      {
        q: "a. What services are packaged with vascular injection procedures?",
        approach: "Each catheter-placement code already covers the full act of getting the catheter where it needs to go and using it — not just the needle stick.",
        answer: (
          <DGList
            items={[
              "Accessing the vessel.",
              "Placing the catheter.",
              "Injecting contrast (with or without a power injector).",
              "All necessary pre- and post-injection care.",
            ]}
          />
        ),
      },
      {
        q: "b. Describe the hierarchy of vascular catheterization procedures. How does this relate to the Appendix L?",
        approach: "The hierarchy is about how deep the catheter tip travels from the aorta outward — memorize the four levels, then use Appendix L to look up which order a specific named vessel is.",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}>Catheterization codes are built on a progressive hierarchy, from least to most intensive:</p>
            <DGSteps
              items={[
                "Non-selective — the tip reaches the aorta and does not enter any branch, or stays in the access vessel.",
                "First-order selective — the tip is placed into a vessel that branches directly off the aorta.",
                "Second-order selective — the tip is placed into a branch of a first-order vessel.",
                "Third-order (or beyond) selective — the tip is placed into a branch of a second-order vessel, or deeper.",
              ]}
            />
            <p style={{ margin: "8px 0 0" }}>A less-intensive placement is always packaged into a more-intensive one within the same vascular family, so only the DEEPEST level reached is reported. <strong>Appendix L</strong> of the CPT codebook is the reference list that maps out each vascular family — which vessels are first-order, second-order, and third-order-or-beyond off the aorta — so a coder can determine the order of any named vessel and apply this hierarchy correctly.</p>
          </>
        ),
      },
      {
        q: "c. How are ipsilateral catheterization procedures reported?",
        approach: "Same side, same vascular family — report once, at the deepest level actually reached.",
        answer: <p style={{ margin: 0 }}>Only the single deepest level of selective catheterization reached within that vascular family, on that side, is reported — all shallower levels reached along the way to get there (non-selective, then first-order, then second-order, etc.) are packaged into that one code and are not reported separately.</p>,
      },
      {
        q: "d. How are bilateral catheterization procedures reported?",
        approach: "Ask whether the SAME territory was studied on both sides, or a DIFFERENT territory on each side — that decides between modifier 50 and modifier 59.",
        answer: (
          <DGList
            items={[
              <><strong>Same territory, both sides</strong> — report the unilateral base code once with modifier 50 (for example, 36222 with modifier 50 for bilateral carotid angiography of the same complexity level).</>,
              <><strong>Different vascular family on each side</strong> — report each side's code separately, with modifier 59 on the second code.</>,
              <>Add-on codes such as +36227 and +36228 are NOT given modifier 50 — they are simply reported twice for a bilateral study.</>,
            ]}
          />
        ),
      },
      {
        q: "e. How are diagnostic angiographies reported alongside catheterization procedures?",
        approach: "Separate the catheter placement from the imaging interpretation, then separate the imaging from any intervention performed at the same session.",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}>Imaging interpretation for a catheter placement is usually reported from the Radiology section as its own code (for example, 75710 for unilateral extremity arteriography) — unless the catheter-placement code itself already includes the imaging, which is true for 36221–36228 and 36251–36254.</p>
            <p style={{ margin: 0 }}>When an interventional procedure (like an angioplasty or stent) is performed at the same session as a diagnostic angiogram, that intervention is NOT considered part of the diagnostic angiography package — it is reported separately, in addition to the diagnostic study.</p>
          </>
        ),
      },
    ],
  },
  {
    n: 10,
    title: "Central Venous Access Procedures",
    range: "36555–36598",
    items: [
      {
        q: "a. Describe the required configuration of a central venous access procedure in terms of (1) the tip of the catheter, (2) venous access device insertion, and (3) access to the device.",
        approach: "These are three independent questions about the same device — where the tip ends up, how it got there, and how it's used day-to-day.",
        answer: (
          <DGList
            items={[
              <><strong>(1) Catheter tip:</strong> must terminate in the subclavian vein, the brachiocephalic (innominate) vein, the iliac vein, the superior or inferior vena cava, or the right atrium. A tip anywhere else — including a "midline" catheter, which ends in the peripheral venous system — is NOT central and is not coded as a central venous access device.</>,
              <><strong>(2) Device insertion:</strong> the device may be inserted centrally (via the jugular, subclavian, or femoral vein, or the inferior vena cava) or peripherally (via the basilic or cephalic vein, as with a PICC). Either way, it is the TIP LOCATION — not the insertion site — that makes the device central.</>,
              <><strong>(3) Access to the device:</strong> the device may be accessed through an exposed catheter, a subcutaneous port, or a subcutaneous pump.</>,
            ]}
          />
        ),
      },
      {
        q: "b. What are the five (5) categories of CVA procedures?",
        approach: "These map directly onto the five category headers in the code range — memorize the headers, not the individual codes, first.",
        answer: (
          <DGList
            items={[
              <><strong>Insertion</strong> — 36555–36571 (non-tunneled, tunneled ± port/pump, Tesio-type, and PICC, with or without imaging guidance).</>,
              <><strong>Repair</strong> — 36575 (catheter only) / 36576 (device with port or pump).</>,
              <><strong>Partial replacement</strong> (catheter only, device stays) — 36578.</>,
              <><strong>Complete replacement</strong> (through the same venous access site) — 36580–36585.</>,
              <><strong>Removal</strong> — 36589 (catheter only) / 36590 (device with port or pump).</>,
            ]}
          />
        ),
      },
      {
        q: "c. How are PICC codes reported with or without accompanying imaging guidance?",
        approach: "The presence of imaging guidance changes the code family entirely — it isn't an add-on modifier situation.",
        answer: (
          <>
            <p style={{ margin: "0 0 8px" }}><strong>Without imaging guidance:</strong> 36568 (younger than 5) or 36569 (age 5 or older) for insertion. This same pair also applies when a PICC is placed using a non-imaging guidance method, such as magnetic guidance.</p>
            <p style={{ margin: "0 0 8px" }}><strong>With imaging guidance</strong> (ultrasound and/or fluoroscopy): the bundled codes 36572 (younger than 5) / 36573 (age 5 or older) for insertion, and 36584 for complete replacement. These already include all imaging, image documentation, the associated radiological supervision and interpretation, venography through the same puncture, and confirmation of the catheter tip's final central position.</p>
            <p style={{ margin: 0 }}>Because tip-position confirmation is bundled into the imaging-guided codes, a same-day chest X-ray (71045–71048), 76937 (ultrasound access guidance), or 77001 (fluoroscopy for central access) is not separately billable alongside 36568, 36569, 36572, 36573, or 36584. There is no "without imaging" version of complete PICC replacement — a complete PICC replacement performed with no imaging guidance at all falls to the unlisted code 37799.</p>
          </>
        ),
        codes: [["36568 / 36569", "PICC insertion, no imaging — under 5 / 5+"], ["36572 / 36573", "PICC insertion, with imaging — under 5 / 5+"], ["36584", "PICC complete replacement, with imaging"]],
      },
    ],
  },
];

export default function CardiovascularDiscussionGuidePage() {
  return (
    <DiscussionGuidePage
      theme={CRIMSON}
      kicker="33,000 SERIES · DISCUSSION GUIDE"
      title="Cardiovascular System Discussion Guide — Answered"
      blurb="Every question from both training discussion guides (Session 1 and Session 2), answered step by step and checked against the CPT 2026 codebook."
      nav={[
        { href: "/cpt/surgery/33,000", label: "33,000 Series home" },
        { href: "/cpt/surgery/33000-series-guidelines-reviewer", label: "Reviewer Pt. 1" },
        { href: "/cpt/surgery/33000-series-guidelines-reviewer-part-2", label: "Pt. 2" },
        { href: "/cpt/surgery/33000-series-guidelines-reviewer-part-3", label: "Pt. 3" },
        { href: "/cpt/surgery/33000-series-coding-approach", label: "Coding Approach" },
        { href: "/cpt/surgery/33000-series-practice-quiz", label: "Practice Quiz" },
        { href: "/cpt/surgery/33000-series-flashcards", label: "Flashcards" },
      ]}
      backHref="/cpt/surgery/33,000"
      backLabel="← Back to the Cardiovascular Series"
      topics={topics}
      approach={[
        "Read the question first and decide which reviewer part it belongs to (Part 1: pericardium → electrophysiology; Part 2: valves, CABG, aorta, ECMO, transplant; Part 3: EVAR, bypass, vascular injection, venous access) — that tells you which rule family to reach for.",
        "Answer from CPT 2026 rules by default. Where a question's phrasing points to an older or deleted code (like the thoracic aorta fluoroscopic guidance codes), the discussion notes it and gives the current equivalent.",
        "Check the code chips for the exact codes tied to each answer, and follow the reviewer links for the full walkthroughs, category tables, and solved cases.",
      ]}
      sourceNote="Answers are paraphrased from CPT 2026 and cross-checked against this series' Guidelines Reviewer (Parts 1–3), Coding Approach page, and solved cases. Covers both training discussion guides — Session 1 (chapter organization, pacemakers/ICDs, cardiac valves, CABG, thoracic aorta) and Session 2 (heart-lung transplant, ECMO/ECLS, abdominal aorta, catheterization, central venous access)."
    />
  );
}
