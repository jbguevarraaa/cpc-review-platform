import Link from "next/link";
import { SolvedCaseBox, type SolvedCase } from "../_cases/solved-case";
import { cvadCases } from "../_cases/cases-33000";

type CodeEntry = [string, string];
type Category = { name: string; codes: CodeEntry[] };
type Subsection = {
  n: number;
  title: string;
  range: string;
  intro?: string[];
  definitions?: [string, string][];
  hierarchy?: string[];
  steps?: string[];
  categories: Category[];
  rules: string[];
  tips: string[];
  cases?: SolvedCase[];
};

const subsections: Subsection[] = [
  {
    n: 1,
    title: "Endovascular Repair of the Abdominal Aorta & Iliac Arteries (EVAR & FEVAR)",
    range: "34701–34848",
    intro: [
      "EVAR/FEVAR codes treat disease of the aortic or arterial WALL — aneurysm, pseudoaneurysm, dissection, penetrating ulcer, or traumatic disruption. They do NOT describe narrowing of the lumen: a covered stent for atherosclerotic occlusive disease goes to 37236/37237 when it is isolated to the aorta, or to 37258–37261 for the iliac artery. (Some older training material still cites 37221/37223 for iliac occlusive disease — those codes are deleted in CPT 2026; use 37258–37261.)",
      "The base code is chosen by WHAT WAS DEPLOYED (aorto-aortic tube, aorto-uni-iliac, aorto-bi-iliac, ilio-iliac tube, or iliac branched device), and the four device pairs (34701–34708) split by rupture: the odd code is for other-than-rupture, the even code is for rupture (34702, 34704, 34706, and 34708 include temporary aortic or iliac balloon occlusion when performed). The iliac branched codes (34717/34718) are not paired this way. Everything inside the treatment zone is already bundled — the main body, docking limbs, and any extensions ending in the aorta or common iliac arteries.",
      "Only three things stack on top of the base code: extensions that end BEYOND the common iliacs (34709 — once per vessel, not per extension), access/exposure for the delivery sheath, and interventions OUTSIDE the treatment zone. Fenestrated repair (FEVAR, 34841–34848) is a separate family for grafts with 'holes' that preserve flow to the visceral and renal arteries.",
    ],
    definitions: [
      ["Covered stent", "the same thing as an endovascular graft, endoprosthesis, endograft, or stent graft."],
      ["Aortic segments", "the diaphragm divides the thoracic aorta from the abdominal aorta (the aorta passes through the aortic hiatus). The abdominal aorta is split into the upper suprarenal/visceral aorta (celiac, superior mesenteric, and renal arteries) and the lower infrarenal aorta. TEVAR codes (Part 2) run distally as far as the celiac artery."],
      ["Treatment zone", "every vessel that ends up holding a piece of the endograft (main body, docking limb, or extension) during that session. For 34701/34702 it is the infrarenal aorta; for 34703/34704 the infrarenal aorta plus the ipsilateral common iliac; for 34705/34706 the infrarenal aorta plus both common iliacs; for 34707/34708/34717/34718 the iliac artery(ies) containing the endograft."],
      ["Ruptured vessel", "acute bleeding shown on the exam and/or on imaging. A chronic, contained rupture counts as a pseudoaneurysm and takes the non-rupture code."],
      ["Infrarenal endograft types", "aortic tube device; bifurcated unibody device; modular bifurcated docking system with docking limb(s); aorto-uni-iliac device."],
      ["Fenestrated endograft", "a graft with openings ('fenestrations') in its fabric so the operator can reach the visceral and/or renal arteries and stent them (bare metal or covered stent) while the graft still spans their origins."],
    ],
    steps: [
      "① Pre-procedure sizing and device selection → INCLUDED in the base code (34839 is the separate code for 90+ minutes of physician planning of a patient-specific fenestrated graft).",
      "② Vascular access → percutaneous access with a sheath smaller than 12 French is INCLUDED; a 12 French or larger sheath with closure device is +34713; open exposure is separately reported by site (+34812, +34714, +34820, +34833, +34715, +34716, +34834).",
      "③ Guidewires, non-selective catheterization, and pre-deployment aortography → INCLUDED.",
      "④ Deploy the main body (and docking limb[s]) → the BASE code, picked by device type and rupture status.",
      "⑤ Extension into the common iliac (or infrarenal aorta below the renals) → INCLUDED. Extension ending in the internal iliac, external iliac, common femoral, or aorta above the renals → +34709, once per vessel treated.",
      "⑥ Balloon angioplasty or stenting INSIDE the treatment zone, before or after deployment → INCLUDED. Outside the zone → separately reported (e.g., 37254–37261).",
      "⑦ Selective catheterization of the hypogastric or renal artery, or of vascular families outside the zone → separately reportable; embolization (e.g., 37242) and intravascular ultrasound (37252/37253) are also separate.",
      "⑧ Completion angiography, fluoroscopy, roadmapping, and radiological supervision and interpretation → INCLUDED.",
      "⑨ Closure → percutaneous closure is inherent; open femoral repair and closure is 34812; extensive artery repair (35226, 35286, 35371) is separate.",
    ],
    categories: [
      {
        name: "Infrarenal Aorta / Iliac Repair — by Device (odd = other than rupture, even = rupture)",
        codes: [
          ["34701 / 34702", "Aorto-aortic tube endograft (infrarenal aorta), including all extensions from the renal arteries to the aortic bifurcation"],
          ["34703 / 34704", "Aorto-uni-iliac endograft"],
          ["34705 / 34706", "Aorto-bi-iliac endograft"],
          ["34707 / 34708", "Iliac artery repair with an ilio-iliac tube endograft, unilateral"],
          ["+34717", "Iliac branched endograft placed at the time of an aorto-iliac endograft (34703–34706) — once per side; report twice for bilateral, no modifier 50"],
          ["34718", "Iliac branched endograft NOT at the same session as an aorto-iliac endograft, unilateral — bilateral uses modifier 50"],
        ],
      },
      {
        name: "Extensions & Fixation",
        codes: [
          ["+34709", "Extension prosthesis(es) distal to the common iliac or proximal to the renal arteries, per vessel treated"],
          ["34710", "DELAYED placement of a distal or proximal extension after a prior repair (endoleak, migration, etc.) — initial vessel treated"],
          ["+34711", "Each additional vessel treated (with 34710)"],
          ["+34808", "Endovascular placement of an iliac artery occlusion device (used with the EVAR base codes)"],
          ["34712", "Transcatheter delivery of enhanced fixation device(s) (anchor, screw, tack) — once per operative session"],
        ],
      },
      {
        name: "Access & Exposure Add-Ons (each unilateral — report twice for bilateral, never modifier 50)",
        codes: [
          ["+34713", "Percutaneous femoral access and closure for a large sheath (12 French or larger), ultrasound guidance included"],
          ["+34812", "Open femoral artery exposure by groin incision"],
          ["+34714", "Open femoral artery exposure WITH creation of a conduit (or for cardiopulmonary bypass)"],
          ["+34820", "Open iliac artery exposure by abdominal or retroperitoneal incision"],
          ["+34833", "Open iliac artery exposure WITH conduit"],
          ["+34715", "Open axillary/subclavian exposure, infraclavicular or supraclavicular incision"],
          ["+34716", "Open axillary/subclavian exposure WITH conduit"],
          ["+34834", "Open brachial artery exposure"],
          ["+34813", "Placement of a femoral-femoral prosthetic graft during endovascular aortic aneurysm repair"],
        ],
      },
      {
        name: "Fenestrated Endovascular Repair (FEVAR) — by number of visceral artery endoprostheses",
        codes: [
          ["34841 / 34842 / 34843 / 34844", "Fenestrated visceral aortic endograft with one / two / three / four or more visceral artery endoprostheses (superior mesenteric, celiac, and/or renal)"],
          ["34845 / 34846 / 34847 / 34848", "Same, with a concomitant unibody or modular infrarenal aortic endograft — one / two / three / four or more visceral endoprostheses"],
          ["34839", "Physician planning of a patient-specific fenestrated visceral aortic endograft, minimum 90 minutes of physician time"],
        ],
      },
    ],
    rules: [
      "Extensions placed in the aorta (renal arteries to bifurcation) or ending in the common iliac arteries are INCLUDED in 34701–34708 and 34845–34848 — never report them separately. 34709 is reported only ONCE per vessel treated, no matter how many extensions were placed in it.",
      "A docking limb is inherent to a modular endograft, so 34709 is NOT reported for a docking limb that extends into the external iliac artery. 34709 is also not reported with 34717/34718 on the same (ipsilateral) side.",
      "34710/34711 are for DELAYED extensions after a prior repair and are not reported with 34701–34709 in the same session; each is reported once per operative session even if several extensions go into one vessel.",
      "Non-selective catheterization, balloon angioplasty/stenting inside the treatment zone, fluoroscopic guidance, and completion angiography are never separately reported with EVAR/FEVAR. Selective catheterization of the hypogastric or renal arteries and vascular families outside the zone, IVUS (37252/37253), and angioplasty/stenting outside the zone MAY be reported.",
      "34713 is used only for a 12 French or larger sheath (ultrasound guidance 76937 is not reported with it for the same access). If an exposure with conduit (34714, 34716, 34833) is converted to a bypass, report the bypass (e.g., 35665) instead of the conduit code.",
      "34841–34844 are not reported with 34701–34706 or with 34845–34848. 34841–34848 are also not reported with 37236/37237 for stents placed into the visceral branches inside the target zone, and 34839 is not reported with them on the day before or the day of the repair.",
      "34707/34708 are unilateral — for isolated bilateral iliac repair with ilio-iliac tube endografts, report the code with modifier 50. Simultaneous bilateral iliac aneurysm repair with an aorto-bi-iliac device is reported with 34705/34706 instead.",
      "34718 is for NON-rupture iliac branched repair only (an isolated ruptured iliac branched endograft is reported with unlisted code 37799). It is not reported with 34701–34709 or 34717, and not with 34710/34711 on the same side.",
      "For a concomitant endovascular repair of the thoracic aorta, TEVAR codes 33880–33886 may be reported with 34841–34848.",
    ],
    tips: [
      "Four-question EVAR lookup: (1) what device went in — tube, aorto-uni, aorto-bi, ilio-iliac, branched, or fenestrated? (2) rupture or not (even vs. odd)? (3) did any extension end beyond the common iliacs (+34709)? (4) how was access obtained (percutaneous 12 Fr+, or open, and on which side)?",
      "'Narrowing = not EVAR.' If the indication is atherosclerotic occlusive disease treated with a covered stent, leave this family: aorta 37236/37237, iliac 37258–37261.",
      "Treatment-zone thinking is the whole game: anything the endograft covers is bundled; anything outside it is separate.",
    ],
  },
  {
    n: 2,
    title: "Bypass Grafts (Non-Coronary)",
    range: "35500–35683",
    intro: [
      "A bypass graft reroutes blood around a diseased segment by attaching a healthy conduit above and below it. The code description names the two vessels the graft 'bridges' — for example carotid-vertebral (35508), axillary-femoral (35521), or popliteal-tibial (35587) — so you find the code by matching the vessel pair, then by the conduit material.",
      "Three code families split by conduit: bypass with VEIN (35501–35571), IN-SITU vein bypass (35583–35587, where the vein stays in place and its valves are disrupted), and bypass with OTHER THAN VEIN (35601–35671, which covers artery grafts and synthetic conduits). The bypass code covers building both the inflow and the outflow, however the surgeon accomplishes it.",
    ],
    definitions: [
      ["Vein bypass", "a vein conduit (usually the saphenous) sutured above and below the diseased artery — the code name lists the vessel pair (e.g., 35501 common carotid to ipsilateral internal carotid)."],
      ["In-situ vein bypass", "the vein is left in its bed and its valves are disrupted so it can carry arterial flow — a separate family (35583–35587)."],
      ["Composite graft", "a conduit built from more than one material or segment: prosthetic + vein (35681), or autogenous vein segments from distant sites (35682, 35683)."],
    ],
    steps: [
      "① Harvest the conduit → saphenous vein harvest is INCLUDED in 35501–35587 and is never reported separately or as co-surgery.",
      "② Other conduit harvest → upper-extremity vein +35500; femoropopliteal vein segment +35572; upper-extremity artery (for coronary bypass) 35600 — all reported IN ADDITION to the bypass.",
      "③ Establish inflow and outflow and sew the anastomoses → the BASE bypass code, chosen by the vessel pair and the conduit type.",
      "④ Composite conduit → prosthetic + vein is +35681; autogenous composite of 2 vein segments from 2 locations is +35682; 3 or more segments from 2 or more locations is +35683.",
      "⑤ Nothing listed for the vessel pair → unlisted vascular procedure, 37799.",
    ],
    categories: [
      {
        name: "Conduit Harvest (reported with the bypass)",
        codes: [
          ["+35500", "Harvest of upper-extremity vein, one segment, for lower-extremity or coronary artery bypass (use with 33510–33536, 35556, 35566, 35570, 35571, 35583–35587)"],
          ["+35572", "Harvest of femoropopliteal vein, one segment, for vascular reconstruction"],
          ["35600", "Harvest of upper-extremity artery, one segment, for coronary artery bypass — bilateral uses modifier 50"],
        ],
      },
      {
        name: "Bypass Families",
        codes: [
          ["35501–35571", "Bypass graft WITH VEIN — named by the vessel pair bridged (e.g., 35501 common carotid-ipsilateral internal carotid)"],
          ["35583–35587", "IN-SITU vein bypass (e.g., 35587 popliteal-tibial or peroneal)"],
          ["35601–35671", "Bypass graft with OTHER THAN VEIN — artery grafts and synthetic conduits (e.g., 35626 synthetic aortosubclavian/aortoinnominate/aortocarotid; 35654 synthetic axillary-femoral-femoral; 35671 popliteal-tibial or peroneal)"],
        ],
      },
      {
        name: "Composite Grafts (add-ons)",
        codes: [
          ["+35681", "Composite graft, prosthetic and vein"],
          ["+35682", "Autogenous composite, 2 segments of vein from 2 locations (use with 35556, 35566, 35570, 35571, 35583–35587)"],
          ["+35683", "Autogenous composite, 3 or more segments of vein from 2 or more locations (same primary codes)"],
        ],
      },
    ],
    rules: [
      "Saphenous vein procurement is part of the bypass (35501–35587). Any OTHER vein — an upper-extremity vein, or a femoropopliteal vein segment — is reported separately with 35500 or 35572.",
      "35681, 35682, and 35683 are mutually exclusive — report only one composite add-on for a bypass.",
      "35682/35683 are for veins harvested from a limb other than the one being bypassed.",
      "A bypass performed with a synthetic graft is coded from the 'other than vein' family — the vein-family entries point you there (e.g., 'for bypass graft performed with synthetic graft, use 35626').",
    ],
    tips: [
      "Read the code name as two anatomic endpoints, then check the conduit: vein (35501–35571), in-situ vein (35583–35587), or artery/synthetic (35601–35671).",
      "Harvest is bundled only for the SAPHENOUS vein — every other harvest site is its own add-on.",
    ],
  },
  {
    n: 3,
    title: "Vascular Injection — Catheter Placement & Angiography",
    range: "36000–36254",
    intro: [
      "Catheter-placement codes describe how far a catheter travels and how selectively it is placed — not how many pictures were taken. Each code already includes accessing the vessel, placing the catheter, injecting contrast (with or without a power injector), and all necessary pre- and post-injection care. Imaging interpretation is usually reported from the Radiology section (for example 75710 for unilateral extremity arteriography), unless the code says it is included (36221–36228 and 36251–36254 include it).",
      "These codes are built on progressive hierarchies: a less-intensive placement is packaged into a more-intensive one, so you report only the deepest catheter placement reached in a vascular family (non-selective < first-order < second-order < third-order or beyond).",
    ],
    definitions: [
      ["Vascular access", "the location where the vascular system is entered — usually the common femoral artery or a brachial artery."],
      ["Vascular family", "a first-order vessel arising from the aorta together with all of its branches (second-order, third-order, and beyond)."],
      ["Vascular order", "the level of the vessel: the initial vessel off the aorta is first-order; branches off first-order vessels are second-order; branches off second-order vessels are third-order."],
      ["Intracatheter", "a needle with a short catheter sheathed over it."],
      ["Non-selective catheterization", "the catheter tip reaches the aorta and does NOT move into any of its branches, OR the tip stays in the access vessel."],
      ["Selective catheterization", "the tip is placed INTO a branch of the aorta or of the access vessel — not merely 'at' or 'near the origin' of it."],
    ],
    hierarchy: [
      "Third-order (or beyond) selective — most intensive",
      "Second-order selective",
      "First-order selective",
      "Non-selective (aorta or access vessel only) — least intensive, packaged into any selective placement",
    ],
    categories: [
      {
        name: "Venous — Needle/Catheter Introduction & Selective Placement",
        codes: [
          ["36000", "Introduction of needle or intracatheter, vein"],
          ["36002", "Injection procedure (e.g., thrombin) for percutaneous treatment of an extremity pseudoaneurysm"],
          ["36005", "Injection procedure for extremity venography"],
          ["36010", "Introduction of catheter, superior or inferior vena cava"],
          ["36011 / 36012", "Selective venous catheter placement — first-order branch (e.g., renal vein, jugular vein) / second-order or more selective branch (e.g., left adrenal vein, petrosal sinus)"],
          ["36013", "Introduction of catheter, right heart or main pulmonary artery"],
          ["36014 / 36015", "Selective placement, left or right pulmonary artery / segmental or subsegmental pulmonary artery"],
        ],
      },
      {
        name: "Arterial — Needle/Intracatheter & Aortic Access",
        codes: [
          ["36100", "Introduction of needle or intracatheter, carotid or vertebral artery (bilateral: modifier 50)"],
          ["36140", "Introduction of needle or intracatheter, upper or lower extremity artery"],
          ["36160", "Introduction of needle or intracatheter, aortic, translumbar"],
          ["36200", "Introduction of catheter, aorta"],
        ],
      },
      {
        name: "Thoracic / Brachiocephalic Branches",
        codes: [
          ["36215", "Selective placement, each FIRST-order thoracic or brachiocephalic branch, within a vascular family"],
          ["36216", "Initial SECOND-order thoracic or brachiocephalic branch, within a vascular family"],
          ["36217", "Initial THIRD-order or more selective branch, within a vascular family"],
          ["+36218", "Each additional second-order, third-order, or beyond branch, within a vascular family"],
        ],
      },
      {
        name: "Cervicocerebral (Carotid & Vertebral) Angiography",
        codes: [
          ["36221", "Non-selective catheter placement in the thoracic aorta with imaging of the aortic arch and great vessel origins"],
          ["36222 / 36223 / 36224", "Unilateral carotid angiography, ascending in complexity — report only the most comprehensive per ipsilateral carotid territory (36224 > 36223 > 36222)"],
          ["36225 / 36226", "Unilateral vertebral angiography — report only the more comprehensive (36226 > 36225)"],
          ["+36227", "Ipsilateral external carotid circulation (with 36222, 36223, or 36224)"],
          ["+36228", "Each intracranial branch of the internal carotid or vertebral arteries (with 36223–36226; not more than twice per side)"],
        ],
      },
      {
        name: "Abdominal, Pelvic & Lower-Extremity Branches",
        codes: [
          ["36245", "Selective placement, each FIRST-order abdominal, pelvic, or lower-extremity artery branch, within a vascular family"],
          ["36246", "Initial SECOND-order branch, within a vascular family"],
          ["36247", "Initial THIRD-order or more selective branch, within a vascular family"],
          ["+36248", "Each additional second-order, third-order, or beyond branch (use with 36246, 36247)"],
        ],
      },
      {
        name: "Renal Artery Angiography",
        codes: [
          ["36251 / 36252", "Selective first-order main renal artery (and any accessory renal artery) with renal angiography and flush aortogram when performed — unilateral / bilateral"],
          ["36253 / 36254", "Superselective (one or more second-order or higher renal branches) with renal angiography — unilateral / bilateral"],
        ],
      },
    ],
    rules: [
      "Less-intensive catheterizations are PACKAGED into more-intensive ones and not reported separately. Non-selective placement is packaged into selective placement (for example, do not report 36221 with 36222–36226, and do not add 36200 to 36215).",
      "Bilateral work uses modifier 50 on the unilateral base code — for example 36100 (carotid/vertebral introduction) and 36222–36226 (cervicocerebral angiography). The add-ons 36227 and 36228 are NOT given modifier 50; they are reported twice for a bilateral study. When a DIFFERENT territory (vascular family) is studied on each side, modifier 59 goes on the second code.",
      "Interventional procedures at the same session as a diagnostic angiography are NOT part of the angiography package and are reported separately.",
      "Do not report 36253 with 36251 for the same kidney, or 36254 with 36252. A closure device at the access site is not separately reported with 36251–36254.",
      "Coronary angiography catheter placement is not here — see 93454–93461. Ultrasound guidance for vascular access with 36221–36228 is 76937, and 3D rendering is 76376/76377.",
    ],
    tips: [
      "Ask two things: how far did the tip go (aorta only, first-order, second-order, third-order or beyond), and in which territory (thoracic/brachiocephalic, cervicocerebral, abdominal-pelvic-extremity, renal, or venous)? Then report only the deepest level reached per family, adding the add-on codes for additional branches.",
      "'Into, not at': a catheter parked at the origin of a branch is still non-selective. The code jumps to selective only when the tip is INSIDE the branch.",
    ],
  },
  {
    n: 4,
    title: "Venipuncture, Transfusion, Sclerotherapy & Endovenous Ablation",
    range: "36400–36483",
    intro: [
      "This block covers skilled venipuncture and cutdown, blood transfusion and exchange transfusion, injection of sclerosant into veins, and endovenous ablation of incompetent veins. Injecting a sclerosant with a needle or mini-catheter and then compressing the leg is a different service from ablation. Ablation codes include all imaging guidance and monitoring, are built as a first-vein code plus an add-on for each subsequent vein treated through a separate access site in the same extremity, and differ by technique: mechanochemical, radiofrequency, laser, or chemical adhesive (cyanoacrylate).",
    ],
    categories: [
      {
        name: "Venipuncture & Cutdown",
        codes: [
          ["36400 / 36405 / 36406", "Venipuncture requiring physician skill, younger than 3 years — femoral or jugular vein / scalp vein / other vein"],
          ["36410", "Venipuncture, age 3 or older, requiring physician skill, for diagnostic or therapeutic purposes (not routine)"],
          ["36415 / 36416", "Collection of venous blood by venipuncture / collection of capillary blood specimen (finger, heel, ear stick)"],
          ["36420 / 36425", "Venipuncture cutdown — younger than 1 year / age 1 or over"],
        ],
      },
      {
        name: "Transfusion",
        codes: [
          ["36430", "Transfusion, blood or blood components"],
          ["36440", "Push transfusion, blood, age 2 years or younger"],
          ["36450 / 36455", "Exchange transfusion, blood — newborn / other than newborn"],
          ["36456", "Partial exchange transfusion, newborn"],
          ["36460", "Intrauterine (fetal) transfusion"],
        ],
      },
      {
        name: "Sclerotherapy (Injection of Sclerosant)",
        codes: [
          ["36465 / 36466", "Non-compounded foam sclerosant into an extremity truncal vein with ultrasound-guided compression — single vein / multiple veins, same leg (36466 once per extremity; not for compounded foam)"],
          ["36468", "Spider veins (telangiectasia), limb or trunk — not more than once per extremity"],
          ["36470", "Single incompetent vein (other than telangiectasia)"],
          ["36471", "Multiple incompetent veins (other than telangiectasia), same leg"],
        ],
      },
      {
        name: "Endovenous Ablation of Incompetent Extremity Vein (first vein + add-on per additional vein, separate access)",
        codes: [
          ["36473 / +36474", "Mechanochemical — first vein / each subsequent vein (once per extremity)"],
          ["36475 / +36476", "Radiofrequency — first vein / each subsequent vein (add-on once per extremity)"],
          ["36478 / +36479", "Laser — first vein / each subsequent vein (add-on once per extremity)"],
          ["36482 / +36483", "Chemical adhesive (cyanoacrylate) — first vein / each subsequent vein (add-on once per extremity)"],
        ],
      },
      {
        name: "Other Vascular Injection & Related Procedures",
        codes: [
          ["36500", "Venous catheterization for selective organ blood sampling"],
          ["36510", "Catheterization of umbilical vein for diagnosis or therapy, newborn"],
          ["36512 / 36514", "Automated red blood cell exchange / plasma pheresis (therapeutic apheresis family)"],
        ],
      },
    ],
    rules: [
      "Ablation (36473–36483) already includes all imaging guidance and monitoring, and is not reported in the same surgical field with 36000, 36002, 36005, 36410, 36425, another ablation technique, 37241, or the imaging codes 75894, 76000, 76937, 76942, 76998, 77022, 93970, 93971.",
      "Sclerosant injection (36468–36471) is not reported with compression codes (29520, 29530, 29540, 29550, 29580, 29581, 29584) for the same extremity, and compression dressings are included in the injection.",
      "36468 and 36471 are each reported only once per extremity, and so is every subsequent-vein add-on (36474, 36476, 36479, 36483) — never once per vein.",
      "Do not report modifier 63 with 36415, 36420, 36450, 36456, or 36460.",
    ],
    tips: [
      "Sclerosant injected (needle or mini-catheter) = 36465–36471: foam with ultrasound-guided compression is 36465/36466, spider veins 36468, other incompetent veins 36470/36471. A catheter advanced along the vein to treat it with heat, mechanical action, or adhesive = ablation, 36473–36483.",
      "For every ablation code, ask 'first vein or subsequent vein through a separate access?' — subsequent veins use the add-on.",
    ],
  },
  {
    n: 5,
    title: "Central Venous Access Devices",
    cases: cvadCases,
    range: "36555–36598",
    intro: [
      "Peripherally inserted central catheters (PICCs) can be placed or replaced with or without imaging guidance. Without imaging guidance, use 36568/36569 (insertion). With imaging guidance (ultrasound and/or fluoroscopy), the bundled codes 36572, 36573, and 36584 already include all imaging, image documentation, the associated radiological supervision and interpretation, venography through the same puncture, and confirming the catheter tip's final central position.",
      "Because tip-position confirmation is already bundled into the imaging-guided codes, a chest X-ray (71045–71048) is not separately billable on the same day to confirm final position, and neither is 76937 (ultrasound vascular-access guidance) or 77001 (fluoroscopy for central access) alongside 36568, 36569, 36572, 36573, or 36584. If tip confirmation wasn't actually performed as part of an imaging-guided placement, append modifier 52.",
      "A 'midline' catheter terminates in the peripheral venous system, not centrally — it is never a central venous access device and is never coded as a PICC. Use 36400, 36406, or 36410 instead. Similarly, a PICC placed using magnetic guidance (or any guidance method that isn't imaging-based) is coded as 36568/36569, not the imaging-guidance codes.",
    ],
    definitions: [
      ["Central venous catheter", "the catheter TIP must end in the subclavian, brachiocephalic (innominate), or iliac vein, the superior or inferior vena cava, or the right atrium. A tip anywhere else (including a midline) is not central."],
      ["Central vs. peripheral insertion", "a device may be inserted centrally (via the jugular, subclavian, or femoral vein, or the inferior vena cava) or peripherally (via the basilic or cephalic vein, as with a PICC) — either way, the tip location is what makes it central."],
      ["How the device is used", "it may be accessed through an exposed catheter, a subcutaneous port, or a subcutaneous pump."],
    ],
    steps: [
      "① Confirm the tip is central. If not, this is not a CVA code (midline: 36400, 36406, or 36410).",
      "② Pick the device type: non-tunneled, tunneled, or PICC — then catheter only, port, or pump — then age (younger than 5 vs. 5 or older, where the code splits by age).",
      "③ Approach (percutaneous vs. cutdown) and catheter size do NOT change the code.",
      "④ Multi-catheter device: a tunneled device needing 2 catheters via 2 separate access sites is 36565/36566. To repair, partially replace, completely replace, or remove BOTH catheters of a multi-catheter device, report the appropriate code with a frequency of two.",
      "⑤ Replacing a device: removing the old device and placing a new one through the SAME venous access site is a complete replacement (36580–36585). Through a DIFFERENT venous access site, report a removal code (if one exists) PLUS an insertion code.",
      "⑥ Imaging guidance: 76937 and 77001 may be reported separately for centrally inserted catheters — but NOT with 36568, 36569, 36572, 36573, or 36584, which already bundle imaging.",
    ],
    categories: [
      {
        name: "Insertion",
        codes: [
          ["36555 / 36556", "Non-tunneled centrally inserted catheter — younger than 5 vs. 5 or older"],
          ["36557 / 36558", "Tunneled centrally inserted catheter, no port or pump — younger than 5 vs. 5 or older"],
          ["36560 / 36561", "Tunneled centrally inserted device, with a subcutaneous port — younger than 5 vs. 5 or older"],
          ["36563", "Tunneled centrally inserted device, with a subcutaneous pump"],
          ["36565 / 36566", "Tunneled device requiring 2 catheters via 2 separate access sites (e.g., Tesio type) — without vs. with subcutaneous port(s)"],
          ["36568 / 36569", "PICC, no port/pump, without imaging guidance — younger than 5 vs. 5 or older"],
          ["36572 / 36573", "PICC, no port/pump, with bundled imaging guidance — younger than 5 vs. 5 or older"],
          ["36570 / 36571", "PICC with a subcutaneous port — younger than 5 vs. 5 or older"],
        ],
      },
      {
        name: "Repair",
        codes: [
          ["36575", "Repair of the catheter only (no port/pump), central or peripheral insertion site"],
          ["36576", "Repair of the device with a port or pump, central or peripheral insertion site"],
        ],
      },
      {
        name: "Partial Replacement (Catheter Only — Device Stays)",
        codes: [
          ["36578", "Replace catheter only, device has a port or pump, central or peripheral insertion site"],
        ],
      },
      {
        name: "Complete Replacement (Same Venous Access Site)",
        codes: [
          ["36580", "Non-tunneled central catheter, no port/pump"],
          ["36581", "Tunneled central catheter, no port/pump"],
          ["36582", "Tunneled central device with a port"],
          ["36583", "Tunneled central device with a pump"],
          ["36584", "PICC, no port/pump, with bundled imaging guidance"],
          ["36585", "PICC with a port"],
        ],
      },
      {
        name: "Removal",
        codes: [
          ["36589", "Tunneled catheter, no port or pump"],
          ["36590", "Tunneled device with a port or pump, central or peripheral insertion"],
        ],
      },
      {
        name: "Other Central Venous Access Services",
        codes: [
          ["36591", "Blood specimen collection from a completely implantable venous access device"],
          ["36592", "Blood specimen collection using an established central or peripheral venous catheter, not otherwise specified"],
          ["36593", "Declotting an implanted vascular access device/catheter with a thrombolytic agent"],
          ["36595", "Mechanical removal of pericatheter obstructive material (e.g., fibrin sheath), via a separate venous access"],
          ["36596", "Mechanical removal of intraluminal (intracatheter) obstructive material, through the device lumen"],
          ["36597", "Repositioning a previously placed central venous catheter under fluoroscopic guidance"],
          ["36598", "Contrast injection(s) to radiologically evaluate an existing central venous access device, including fluoroscopy, image documentation, and report"],
        ],
      },
    ],
    rules: [
      "36591 and 36592 (blood draws from an existing device) are not reported together with any other service except an actual lab test — they're standalone specimen-collection codes.",
      "36595 and 36596 are mutually exclusive with each other and with 36593 — pick mechanical removal via a separate access (36595), mechanical removal through the existing lumen (36596), or thrombolytic declotting (36593), not more than one for the same event.",
      "36598 (contrast injection to evaluate an existing device) is not reported together with fluoroscopy code 76000, or with the obstructive-material removal codes 36595/36596.",
      "There is no 'without imaging guidance' version of complete PICC replacement — 36584 (with bundled imaging) is the only complete-replacement PICC code; a complete PICC replacement performed without any imaging guidance falls to the unlisted code 37799.",
    ],
    tips: [
      "Work it in three questions: (1) central or peripheral (PICC)? (2) tunneled or non-tunneled? (3) plain catheter, port, or pump? Age under/over 5 only changes the code for standard central lines and standard PICCs — the Tesio-type codes (which split by port, not age) and the complete-replacement codes (36580–36585) don't split by age.",
      "'Partial' replacement always means catheter-only, device stays — that's always 36578, no matter whether it's a port or a pump. 'Complete' replacement swaps the whole system through the same access site and the code depends on device type (36580–36585).",
    ],
  },
  {
    n: 6,
    title: "Arterial Puncture & Catheterization",
    range: "36600–36680",
    categories: [
      {
        name: "Procedures",
        codes: [
          ["36600", "Arterial puncture, withdrawal of blood for diagnosis"],
          ["36620 / 36625", "Arterial catheterization/cannulation for sampling, monitoring, or transfusion (separate procedure) — percutaneous vs. cutdown"],
          ["36640", "Arterial catheterization for prolonged infusion therapy (e.g., chemotherapy), cutdown"],
          ["36660", "Umbilical artery catheterization, newborn, for diagnosis or therapy"],
          ["36680", "Placement of a needle for intraosseous infusion"],
        ],
      },
    ],
    rules: [
      "Modifier 63 (procedures on infants under 4kg) is not reported with 36660 — that code already accounts for the newborn population it's written for.",
    ],
    tips: ["Percutaneous vs. cutdown is the main fork for 36620/36625 — same clinical purpose (sampling/monitoring/transfusion), different approach."],
  },
  {
    n: 7,
    title: "Hemodialysis Access & AV Fistula (Open Procedures)",
    range: "36800–36861",
    categories: [
      {
        name: "Cannula Insertion",
        codes: [
          ["36800", "Insertion of a cannula for hemodialysis, other purpose (separate procedure), vein to vein"],
          ["36810 / 36815", "External arteriovenous cannula (Scribner type) — insertion vs. revision/closure"],
        ],
      },
      {
        name: "Open Arteriovenous Anastomosis (Direct Fistula)",
        codes: [
          ["36818", "By upper-arm cephalic vein transposition"],
          ["36819", "By upper-arm basilic vein transposition"],
          ["36820", "By forearm vein transposition"],
          ["36821", "Direct, any site (e.g., Cimino type) (separate procedure)"],
        ],
      },
      {
        name: "Arteriovenous Graft (Non-Direct Fistula)",
        codes: [
          ["36825", "Autogenous graft"],
          ["36830", "Nonautogenous graft (e.g., biological collagen, thermoplastic graft)"],
        ],
      },
      {
        name: "Thrombectomy & Revision (Open)",
        codes: [
          ["36831", "Open thrombectomy of an AV fistula, without revision, autogenous or nonautogenous dialysis graft (separate procedure)"],
          ["36832 / 36833", "Open revision of an AV fistula — without thrombectomy vs. with thrombectomy, autogenous or nonautogenous dialysis graft"],
        ],
      },
      {
        name: "Percutaneous AV Fistula Creation (Upper Extremity)",
        codes: [
          ["36836", "Single access of both the peripheral artery and vein, including fistula maturation procedures when performed, plus all vascular access and imaging"],
          ["36837", "Separate access sites for the artery and vein, same bundled scope as 36836"],
        ],
      },
      {
        name: "Other",
        codes: [
          ["36823", "Insertion of arterial and venous cannula(s) for isolated extracorporeal circulation with regional chemotherapy perfusion to an extremity, with or without hyperthermia, including removal and repair of the arteriotomy/venotomy sites"],
          ["36835", "Insertion of a Thomas shunt (separate procedure)"],
          ["36838", "Distal revascularization and interval ligation (DRIL), upper-extremity hemodialysis access, for steal syndrome"],
          ["36860 / 36861", "External cannula declotting (separate procedure) — without vs. with a balloon catheter"],
        ],
      },
    ],
    rules: [
      "36818, 36819, 36820, and 36821 (the open direct AV anastomosis variants) are mutually exclusive on a unilateral procedure — only report one. For a bilateral procedure performed in the same session, use modifier 50 or 59 as appropriate rather than reporting two different variant codes.",
      "36823 already bundles chemotherapy perfusion supported by a membrane oxygenator/perfusion pump — the general chemotherapy administration codes (96409–96425) are not separately reported with it.",
      "36836 and 36837 already bundle all vascular access, angiography, imaging guidance, and any fistula-maturation technique (like balloon angioplasty or coil embolization) performed at the same session — a long list of catheterization, imaging, and angioplasty/stent codes are excluded from being reported alongside them.",
      "36832/36833 (open AV fistula revision) is not reported together with the percutaneous dialysis-circuit codes 36901–36906 for the same revision — pick the open or the percutaneous approach, not both.",
    ],
    tips: [
      "Direct connection of artery to vein = an anastomosis code (36818–36821), picked by which vein is transposed. A graft material bridging artery and vein = 36825 (the patient's own vein) or 36830 (synthetic/biological material) instead.",
      "36836 vs. 36837 comes down to one question: did the physician access the artery and vein through one skin puncture, or two separate ones?",
    ],
  },
  {
    n: 8,
    title: "Dialysis Circuit (Percutaneous Interventions)",
    range: "36901–36909",
    intro: [
      "The dialysis circuit is the full arteriovenous pathway used for repeated hemodialysis access, running from the arterial anastomosis to the right atrium — built either as a fistula (AVF, a direct artery-to-vein connection) or a graft (AVG, a prosthetic conduit). It's divided into two segments: the peripheral dialysis segment (from the arterial anastomosis out through the axillary/cephalic vein in the arm, or the common femoral vein in the leg) and the central dialysis segment (everything further in — subclavian/innominate veins through the SVC in the arm, or iliac veins through the IVC in the leg).",
      "This whole family is built as two parallel 3-step ladders, and only one code from either ladder is reported per session, because each step already includes everything below it: the non-thrombus ladder is diagnostic angiography (36901) → + peripheral angioplasty (36902) → + peripheral stent (36903); the thrombus ladder is mechanical thrombectomy/thrombolysis (36904) → + peripheral angioplasty (36905) → + peripheral stent (36906). Each level bundles all the catheter placements, fluoroscopic guidance, roadmapping, and radiological supervision/interpretation needed to perform it, and is reported only once per session regardless of how many lesions were treated within that segment.",
      "36907 (central-segment angioplasty) and 36908 (central-segment stent) are add-on codes layered on top of whichever base ladder code applies — each reported once per session no matter how many central lesions or stents were involved, and 36908 already includes what 36907 covers, so the two are never reported together. 36909 is a separate add-on for permanent embolization or occlusion of the main circuit or an accessory vein, also capped at once per session.",
    ],
    definitions: [
      ["Dialysis circuit", "the extracorporeal \"blood loop\" built for easy, repeated access for hemodialysis — made from an arteriovenous fistula (AVF, an artery-to-vein anastomosis) or an arteriovenous graft (AVG, a prosthetic graft between an artery and a vein)."],
      ["Peripheral dialysis segment", "begins at the arterial anastomosis and ends where the central segment begins; it includes the peri-anastomotic region."],
      ["Central dialysis segment", "all draining veins central to the peripheral segment — upper extremity: the subclavian and innominate veins through the SVC; lower extremity: the external and common iliac veins through the IVC."],
    ],
    steps: [
      "① Direct access of the circuit (antegrade and retrograde punctures), imaging of the circuit, all catheter manipulation for that imaging, selective catheterization of accessory veins, and advancing the catheter to the vena cava or the arterial anastomosis → all INCLUDED in 36901 (and in every higher code).",
      "② Advancing the catheter into the inflow ARTERY is a selective catheterization and is separately reportable (36215; do not add 36200). Diagnostic arteriography through that catheter may add 75710.",
      "③ Ultrasound guidance to puncture the circuit (76937) is not typically included or needed, but may be reported for a new (immature) or failing fistula when fully documented.",
      "④ Angiography through an existing access or catheter-based arterial access only: report 36901 with modifier 52.",
      "⑤ Ask: thrombus present? No → 36901/36902/36903. Yes → 36904/36905/36906. Then how far: diagnostic only, plus peripheral angioplasty, or plus peripheral stent.",
      "⑥ Central-segment work stacks on the base code: +36907 (angioplasty), +36908 (stent); embolization +36909. Each add-on once per session.",
    ],
    categories: [
      {
        name: "Diagnostic / Angioplasty / Stent Ladder",
        codes: [
          ["36901", "Diagnostic angiography of the entire dialysis circuit, including all direct punctures, catheter placements, and imaging from the arterial anastomosis through the venous outflow to the vena cava"],
          ["36902", "36901, plus transluminal balloon angioplasty in the peripheral dialysis segment"],
          ["36903", "36902, plus transcatheter stent placement in the peripheral dialysis segment"],
        ],
      },
      {
        name: "Thrombectomy / Angioplasty / Stent Ladder",
        codes: [
          ["36904", "Percutaneous mechanical thrombectomy and/or thrombolytic infusion, treating thrombus in both the peripheral and central segments, including diagnostic angiography"],
          ["36905", "36904, plus transluminal balloon angioplasty in the peripheral dialysis segment"],
          ["36906", "36905, plus transcatheter stent placement in the peripheral dialysis segment"],
        ],
      },
      {
        name: "Central Segment & Embolization Add-Ons",
        codes: [
          ["+36907", "Transluminal balloon angioplasty, central dialysis segment (add-on, once per session)"],
          ["+36908", "Transcatheter stent placement, central dialysis segment (add-on, once per session, includes 36907's scope)"],
          ["+36909", "Permanent embolization/occlusion of the main circuit or accessory veins (add-on, once per session)"],
        ],
      },
    ],
    rules: [
      "Report only one code from 36901–36906 per session — never two levels of the same ladder, and never one from each ladder.",
      "Removing an arterial plug during a thrombectomy is part of the thrombectomy service itself — it is never separately coded as an angioplasty (36905), even if a balloon catheter is used to dislodge it.",
      "Ultrasound guidance for the initial dialysis-circuit puncture (76937) is not typically needed or bundled, but can be separately reported — with full documentation — for cases like a new/immature or failing fistula that genuinely requires it to puncture safely.",
      "When open dialysis-access creation, revision, or thrombectomy (36818–36833) is performed, completion angiography and peripheral-segment angioplasty/stenting are already bundled into that open procedure — but central-segment work (36907/36908) can still be reported separately.",
    ],
    tips: [
      "Ask 'did I find thrombus?' first — that alone tells you which ladder (901–903 or 904–906) you're on. Then ask how far you went (diagnostic only, + angioplasty, or + stent) to land on the exact code.",
      "36907/36908/36909 are the only three add-ons to the base ladder code. A few other services can still be separate when they really happen: catheterizing the inflow artery (36215, with 75710) and ultrasound guidance for the puncture (76937) in the immature or failing fistula case.",
    ],
  },
  {
    n: 9,
    title: "Portal Decompression Procedures",
    range: "37140–37183",
    categories: [
      {
        name: "Open Shunts",
        codes: [
          ["37140", "Open portocaval venous anastomosis"],
          ["37145", "Open renoportal venous anastomosis"],
          ["37160", "Open caval-mesenteric venous anastomosis"],
          ["37180 / 37181", "Open splenorenal venous anastomosis — proximal vs. distal (selective decompression of esophagogastric varices, any technique)"],
        ],
      },
      {
        name: "Transvenous Intrahepatic Portosystemic Shunt (TIPS)",
        codes: [
          ["37182", "Placement of TIPS — includes venous access, hepatic and portal vein catheterization, portography with hemodynamic evaluation, tract formation/dilation, stent placement, and all associated imaging"],
          ["37183", "Revision of an existing TIPS — same bundled scope as 37182, for a revision"],
        ],
      },
    ],
    rules: [
      "37182 and 37183 already include the full portography and hemodynamic workup — the older transhepatic portography supervision-and-interpretation codes (75885, 75887) are not separately reported alongside either one.",
    ],
    tips: ["Open procedure → pick the specific vessel pairing (portocaval, renoportal, caval-mesenteric, or splenorenal). Percutaneous → it's TIPS: 37182 for a new placement, 37183 for revising one already in place."],
  },
  {
    n: 10,
    title: "Transcatheter Procedures — Mechanical Thrombectomy & Thrombolytic Infusion",
    range: "37184–37214",
    intro: [
      "Catheter placement, diagnostic studies, and other percutaneous interventions (like angioplasty or stenting) performed in the same session are separately reportable in addition to these thrombectomy/thrombolysis codes. Fluoroscopic guidance is already bundled into 37184–37188. An intraprocedural thrombolytic drug injection is bundled into the mechanical thrombectomy codes, but a continuous thrombolytic infusion carried on before or after the thrombectomy session is not bundled and is separately reportable (37211–37214). Coronary mechanical thrombectomy uses a different code entirely (92973), and intracranial arterial mechanical thrombectomy uses 61645 — neither routes through this family.",
      "'Primary' arterial mechanical thrombectomy (37184/37185) applies when thrombus was already diagnosed beforehand and the thrombectomy itself was the planned procedure — reported per vascular family, with 37184 for the first vessel treated and add-on 37185 for each additional vessel in that same family. A second, separate vascular family treated through a separate access site gets its own 37184 with modifier 59. 'Secondary' thrombectomy (37186) instead applies when only a short segment of thrombus/embolus is retrieved incidentally during another percutaneous intervention (like an angioplasty) — 37184/37185 and 37186 are never reported together.",
      "Venous mechanical thrombectomy uses 37187 for the initial application (modifier 50 for bilateral through separate access sites) and 37188 for a repeat treatment on a later day during an ongoing course of thrombolytic therapy.",
      "For thrombolytic drip infusion (as opposed to mechanical thrombectomy), the day of treatment determines the code: the initial day uses 37211 or 37212, continued treatment on a day that is neither the first nor the last uses 37213, and the final day uses 37214. If the entire course starts and finishes on the same day, only 37211 or 37212 is reported — not a combination.",
    ],
    categories: [
      {
        name: "Arterial Mechanical Thrombectomy",
        codes: [
          ["37184", "Primary percutaneous mechanical thrombectomy, noncoronary/non-intracranial artery or arterial bypass graft — initial vessel"],
          ["+37185", "Same, second and all subsequent vessels within the same vascular family (add-on)"],
          ["+37186", "Secondary mechanical thrombectomy, performed in conjunction with another percutaneous intervention (add-on)"],
        ],
      },
      {
        name: "Venous Mechanical Thrombectomy",
        codes: [
          ["37187", "Percutaneous mechanical thrombectomy of vein(s), including intraprocedural thrombolytic injection(s) and fluoroscopic guidance"],
          ["37188", "Repeat venous mechanical thrombectomy on a subsequent day of an ongoing thrombolytic course"],
        ],
      },
      {
        name: "Thrombolytic Infusion, by Day of Treatment",
        codes: [
          ["37211 / 37212", "Initial treatment day — arterial vs. venous"],
          ["37213", "Continued treatment, a day that is neither the first nor the last"],
          ["37214", "Cessation/final treatment day"],
        ],
      },
    ],
    rules: [
      "Do not report 37184/37185 for retrieving only a short thrombus/embolus segment found incidentally during another intervention — that scenario is 37186 instead.",
      "37186 is never reported together with 37184/37185 in the same session.",
      "For thrombolytic infusion (37211–37214), only one code is used per calendar day of treatment, chosen by whether it's the first day, a middle day, or the final day of the course.",
    ],
    tips: [
      "Ask: was thrombus already known and the thrombectomy planned in advance (primary, 37184/37185), or was it an incidental finding during a different procedure (secondary, 37186)?",
      "For thrombolytic infusion, think of it as a day counter: Day 1 → 37211/37212. Middle days → 37213. Last day → 37214.",
    ],
  },
];

const rangeMap: [string, string][] = [
  ["Endovascular repairs", "TEVAR 33880–33886 (Part 2) · EVAR 34701–34712 · FEVAR 34841–34848"],
  ["Bypass graft", "Vein 35500–35572 · In-situ vein 35583–35587 · Other than vein 35600–35671 · Composite 35681–35683"],
  ["Vascular injection", "Intravenous 36000–36015 · Intra-arterial/intra-aortic 36100–36299 · Venous 36400–36522"],
  ["Central venous access", "Insertion 36555–36571 · Repair 36575–36576 · Partial replacement 36578 · Complete replacement 36580–36585 · Removal 36589–36590"],
  ["Hemodialysis", "Open access 36800–36861 · Circuit interventions 36901–36909"],
  ["Also in this part", "Arterial puncture and catheterization 36600–36680 · Portal decompression 37140–37183 · Thrombectomy & thrombolytic infusion 37184–37214"],
];

const diagramBoxStyle = { background: "#fff7f7", border: "1px solid #f0d7d7", borderRadius: "14px", padding: "18px", margin: "16px 0", textAlign: "center" as const, overflowX: "auto" as const };
const diagramCaptionStyle = { margin: "10px 0 0", fontSize: "13px", color: "#7a3a3a", fontWeight: 700 };
const rangeMapStyle = { display: "grid", gap: "8px", margin: "12px 0 0", padding: 0, listStyle: "none" };
const rangeMapRowStyle = { display: "flex", flexWrap: "wrap" as const, gap: "8px 14px", alignItems: "baseline", background: "#ffffff", border: "1px solid #fecaca", borderRadius: "8px", padding: "9px 13px" };
const rangeMapLabelStyle = { fontWeight: 800, color: "#991b1b", minWidth: "170px" };
const definitionsBoxStyle = { background: "#f5f3ff", border: "1px solid #ddd6fe", borderLeft: "5px solid #7c3aed", borderRadius: "10px", padding: "16px 18px", margin: "14px 0 0", lineHeight: 1.7 };
const definitionsTitleStyle = { margin: "0 0 8px", color: "#5b21b6", fontWeight: 800, fontSize: "14px", letterSpacing: "0.03em" };
const hierarchyBoxStyle = { background: "#ecfeff", border: "1px solid #a5f3fc", borderLeft: "5px solid #0e7490", borderRadius: "10px", padding: "16px 18px", margin: "14px 0 0", lineHeight: 1.7 };
const hierarchyTitleStyle = { margin: "0 0 8px", color: "#155e75", fontWeight: 800, fontSize: "14px", letterSpacing: "0.03em" };
const stepsBoxStyle = { background: "#eff6ff", border: "1px solid #bfdbfe", borderLeft: "5px solid #1d4ed8", borderRadius: "10px", padding: "16px 18px", margin: "14px 0 0", lineHeight: 1.7 };
const stepsTitleStyle = { margin: "0 0 8px", color: "#1e3a8a", fontWeight: 800, fontSize: "14px", letterSpacing: "0.03em" };

function AortaZoneDiagram() {
  return (
    <div style={diagramBoxStyle}>
      <svg viewBox="0 0 720 480" role="img" aria-label="Aorta segments and which endovascular repair code family covers each" style={{ width: "100%", height: "auto", maxWidth: "720px", minWidth: "560px" }}>
        <rect x="90" y="20" width="150" height="130" rx="8" fill="#dbeafe" />
        <rect x="90" y="150" width="150" height="70" rx="8" fill="#fde68a" />
        <rect x="90" y="220" width="150" height="90" rx="8" fill="#fecaca" />
        <rect x="90" y="310" width="150" height="65" rx="8" fill="#e9d5ff" />
        <rect x="90" y="375" width="150" height="90" rx="8" fill="#bbf7d0" />
        <path d="M165 30 V310 M165 310 L135 375 L130 455 M165 310 L195 375 L200 455" stroke="#b91c1c" strokeWidth="16" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M165 170 L215 165 M165 185 L215 190 M165 202 L112 212 M165 202 L218 212" stroke="#b91c1c" strokeWidth="5" fill="none" strokeLinecap="round" />
        <line x1="70" y1="150" x2="268" y2="150" stroke="#111827" strokeWidth="2" strokeDasharray="6 4" />
        <text x="274" y="146" fontSize="11.5" fill="#111827" fontWeight="700">diaphragm (aortic hiatus)</text>
        <g fontSize="13" fill="#291a1a">
          <text x="280" y="70" fontWeight="800" fill="#1e40af">Thoracic aorta</text>
          <text x="280" y="90">TEVAR 33880–33886 (Part 2)</text>
          <text x="280" y="176" fontWeight="800" fill="#92400e">Suprarenal / visceral aorta</text>
          <text x="280" y="196">celiac · SMA · renal arteries</text>
          <text x="280" y="214">FEVAR 34841–34848</text>
          <text x="280" y="256" fontWeight="800" fill="#991b1b">Infrarenal aorta = EVAR treatment zone</text>
          <text x="280" y="276">34701/34702 tube · 34703/34704 aorto-uni</text>
          <text x="280" y="294">34705/34706 aorto-bi — all bundled</text>
          <text x="280" y="333" fontWeight="800" fill="#6b21a8">Common iliac arteries</text>
          <text x="280" y="352">extensions ending here are INCLUDED</text>
          <text x="280" y="410" fontWeight="800" fill="#166534">Beyond the common iliacs</text>
          <text x="280" y="430">internal / external iliac, common femoral</text>
          <text x="280" y="448">→ +34709, once per vessel treated</text>
        </g>
      </svg>
      <p style={diagramCaptionStyle}>Where the endograft ends decides what is bundled and what is added on.</p>
    </div>
  );
}

function CatheterLadderDiagram() {
  const boxes: { x: number; h: number; fill: string; title: string; lines: string[] }[] = [
    { x: 10, h: 120, fill: "#fee2e2", title: "Non-selective", lines: ["tip stays in the aorta", "or the access vessel", "36200 — packaged into", "any selective code"] },
    { x: 190, h: 150, fill: "#fecaca", title: "1st-order branch", lines: ["36215 thoracic/brachio.", "36245 abd/pelvic/leg", "36011 venous"] },
    { x: 370, h: 180, fill: "#fca5a5", title: "2nd-order branch", lines: ["36216 thoracic/brachio.", "36246 abd/pelvic/leg", "36012 venous"] },
    { x: 550, h: 210, fill: "#f87171", title: "3rd-order or beyond", lines: ["36217 thoracic/brachio.", "36247 abd/pelvic/leg", "+36218 / +36248 =", "each additional branch"] },
  ];
  return (
    <div style={diagramBoxStyle}>
      <svg viewBox="0 0 720 300" role="img" aria-label="Catheter placement ladder from non-selective to third-order selective" style={{ width: "100%", height: "auto", maxWidth: "720px", minWidth: "560px" }}>
        {boxes.map((b, i) => (
          <g key={b.title}>
            <rect x={b.x} y={250 - b.h} width="150" height={b.h} rx="10" fill={b.fill} stroke="#b91c1c" strokeWidth="1.5" />
            <text x={b.x + 75} y={250 - b.h + 24} textAnchor="middle" fontSize="14" fontWeight="800" fill="#450a0a">{b.title}</text>
            {b.lines.map((line, j) => (
              <text key={line} x={b.x + 75} y={250 - b.h + 46 + j * 18} textAnchor="middle" fontSize="11" fill="#291a1a">{line}</text>
            ))}
            {i < 3 && <text x={b.x + 165} y="245" textAnchor="middle" fontSize="20" fill="#b91c1c" fontWeight="800">→</text>}
          </g>
        ))}
        <text x="360" y="280" textAnchor="middle" fontSize="13" fontWeight="800" fill="#7a3a3a">Report only the deepest level reached in each family.</text>
      </svg>
      <p style={diagramCaptionStyle}>Progressive hierarchy: more selective = more intensive = the only code you report for that family.</p>
    </div>
  );
}

function DialysisCircuitDiagram() {
  return (
    <div style={diagramBoxStyle}>
      <svg viewBox="0 0 720 270" role="img" aria-label="Dialysis circuit divided into peripheral and central segments with code families" style={{ width: "100%", height: "auto", maxWidth: "720px", minWidth: "560px" }}>
        <rect x="150" y="70" width="270" height="50" rx="10" fill="#fecaca" />
        <rect x="420" y="70" width="190" height="50" rx="10" fill="#e9d5ff" />
        <path d="M20 95 H620" stroke="#b91c1c" strokeWidth="12" strokeLinecap="round" />
        <circle cx="150" cy="95" r="14" fill="#fff" stroke="#111827" strokeWidth="3" />
        <text x="150" y="50" textAnchor="middle" fontSize="12" fontWeight="800" fill="#111827">arterial anastomosis</text>
        <text x="60" y="140" textAnchor="middle" fontSize="12" fill="#291a1a">inflow artery</text>
        <text x="285" y="58" textAnchor="middle" fontSize="14" fontWeight="800" fill="#450a0a">PERIPHERAL segment</text>
        <text x="285" y="140" textAnchor="middle" fontSize="12" fill="#291a1a">(includes the peri-anastomotic region)</text>
        <text x="515" y="58" textAnchor="middle" fontSize="14" fontWeight="800" fill="#4c1d95">CENTRAL segment</text>
        <text x="515" y="140" textAnchor="middle" fontSize="12" fill="#291a1a">subclavian → SVC · iliac → IVC</text>
        <text x="668" y="92" textAnchor="middle" fontSize="12" fontWeight="800" fill="#111827">right</text>
        <text x="668" y="108" textAnchor="middle" fontSize="12" fontWeight="800" fill="#111827">atrium</text>
        <g fontSize="12.5" fill="#291a1a">
          <text x="285" y="172" textAnchor="middle" fontWeight="800">36902 / 36905 angioplasty</text>
          <text x="285" y="190" textAnchor="middle" fontWeight="800">36903 / 36906 stent</text>
          <text x="285" y="208" textAnchor="middle">peripheral only — once per session</text>
          <text x="515" y="172" textAnchor="middle" fontWeight="800">+36907 angioplasty</text>
          <text x="515" y="190" textAnchor="middle" fontWeight="800">+36908 stent</text>
          <text x="515" y="208" textAnchor="middle">add-ons — once per session</text>
        </g>
        <text x="360" y="248" textAnchor="middle" fontSize="12.5" fontWeight="800" fill="#7a3a3a">36901 = diagnostic study of the whole circuit · 36904 = thrombectomy, either segment</text>
      </svg>
      <p style={diagramCaptionStyle}>Base ladder codes act on the peripheral segment; central-segment work is always an add-on.</p>
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
const codeChipStyle = { fontWeight: 800, color: "#b91c1c", minWidth: "110px", fontFamily: "Consolas, monospace", fontSize: "13.5px" };
const rulesBoxStyle = { background: "#fef2f2", border: "1px solid #fecaca", borderLeft: "5px solid #dc2626", borderRadius: "10px", padding: "16px 18px", margin: "18px 0 0", lineHeight: 1.7 };
const rulesTitleStyle = { margin: "0 0 8px", color: "#991b1b", fontWeight: 800, fontSize: "14px", letterSpacing: "0.03em" };
const tipsBoxStyle = { background: "#f0fdf4", border: "1px solid #bbf7d0", borderLeft: "5px solid #16a34a", borderRadius: "10px", padding: "16px 18px", margin: "14px 0 0", lineHeight: 1.7 };
const tipsTitleStyle = { margin: "0 0 8px", color: "#166534", fontWeight: 800, fontSize: "14px", letterSpacing: "0.03em" };
const backLinkStyle = { textDecoration: "none", color: "#b91c1c", fontWeight: 700 };

export default function SurgeryCardiovascularGuidelinesReviewerPart3Page() {
  return (
    <main style={mainStyle}>
      <header style={heroStyle}>
        <p style={kickerStyle}>33,000 SERIES · CARDIOVASCULAR SYSTEM</p>
        <h1 style={{ margin: 0, fontSize: "clamp(28px, 5.5vw, 48px)" }}>CPT Surgery Guidelines Reviewer</h1>
        <p style={{ margin: "12px 0 0", fontSize: "19px", lineHeight: 1.5 }}>Part 3 — Endovascular Aorta (EVAR/FEVAR), Bypass Grafts, Vascular Injection, Venous Access, Dialysis Circuit, Portal Decompression &amp; Thrombectomy (34701–37214)</p>
      </header>

      <div style={pagerStyle}>
        <Link href="/cpt/surgery/33000-series-guidelines-reviewer" style={pagerLinkStyle}>← Part 1 (33016–33288)</Link>
        <Link href="/cpt/surgery/33000-series-guidelines-reviewer-part-2" style={pagerLinkStyle}>← Part 2 (33300–33999)</Link>
        <span style={pagerActiveStyle}>Part 3 (34701–37214)</span>
      </div>

      <nav aria-label="Cardiovascular series navigation" style={navStyle}>
        <Link href="/cpt/surgery/33,000" style={navLinkStyle}>Cardiovascular System home</Link>
        <Link href="/cpt/surgery/33000-series-coding-approach" style={navLinkStyle}>How to Approach This Series</Link>
        <Link href="/cpt/surgery/33000-series-practice-quiz" style={navLinkStyle}>Practice Quiz</Link>
        <Link href="/cpt/surgery/33000-series-flashcards" style={navLinkStyle}>Flashcards</Link>
        <Link href="/cpt/surgery" style={navLinkStyle}>Surgery home</Link>
      </nav>

      <nav aria-label="Jump to a section of Part 3" style={pagerStyle}>
        {subsections.map((sub) => (
          <a key={sub.n} href={`#sec-${sub.n}`} style={pagerLinkStyle}>{sub.n} · {sub.range}</a>
        ))}
      </nav>

      <section style={introBoxStyle}>
        <strong>Arteries &amp; Veins (34001–37799) — the map for this part.</strong> A primary vascular procedure code already covers building the inflow and outflow, plus the surgeon's own operative arteriogram (and sympathectomy when done with a listed aortic procedure); use 37799 when nothing listed fits. The topics run through this part in this order:
        <ul style={rangeMapStyle}>
          {rangeMap.map(([label, codes]) => (
            <li key={label} style={rangeMapRowStyle}>
              <span style={rangeMapLabelStyle}>{label}</span>
              <span>{codes}</span>
            </li>
          ))}
        </ul>
      </section>

      {subsections.map((sub) => (
        <section key={sub.n} id={`sec-${sub.n}`} style={sectionStyle}>
          <div style={sectionHeaderStyle}>
            <span style={sectionNumberStyle}>{sub.n}</span>
            <h2 style={sectionTitleStyle}>{sub.title}</h2>
            <span style={rangeChipStyle}>{sub.range}</span>
          </div>
          {sub.intro?.map((p) => <p key={p} style={pStyle}>{p}</p>)}

          {sub.n === 1 && <AortaZoneDiagram />}
          {sub.n === 3 && <CatheterLadderDiagram />}
          {sub.n === 8 && <DialysisCircuitDiagram />}

          {sub.definitions && (
            <div style={definitionsBoxStyle}>
              <p style={definitionsTitleStyle}>📖 DEFINITIONS</p>
              <ul style={{ margin: 0, paddingLeft: "20px", display: "grid", gap: "8px" }}>
                {sub.definitions.map(([term, def]) => <li key={term}><strong>{term}:</strong> {def}</li>)}
              </ul>
            </div>
          )}

          {sub.hierarchy && (
            <div style={hierarchyBoxStyle}>
              <p style={hierarchyTitleStyle}>📶 HIERARCHY — MOST TO LEAST INTENSIVE</p>
              <ol style={{ margin: 0, paddingLeft: "22px", display: "grid", gap: "6px" }}>
                {sub.hierarchy.map((h) => <li key={h}>{h}</li>)}
              </ol>
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
        <Link href="/cpt/surgery/33000-series-guidelines-reviewer-part-2" style={backLinkStyle}>← Back to Part 2</Link>
        <Link href="/cpt/surgery/33,000" style={backLinkStyle}>← Back to Cardiovascular System</Link>
      </div>
    </main>
  );
}
