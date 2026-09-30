import { SeriesSchematicPage, type SchematicNode } from "../_digestive/schematic";
import { CRIMSON } from "../_digestive/players";

const nodes: SchematicNode[] = [
  {
    n: 1,
    title: "Chapter Map",
    range: "33016–37799",
    points: [
      "Two anatomic neighborhoods: Heart & Pericardium (33016–33999), then Arteries & Veins (34001–37799)",
      "Within Heart: pericardium → tumor → pacemakers/ICDs → EP/maze/LAA → valves → CABG → aorta → ECMO/assist → transplant",
      "Within Vessels: EVAR/FEVAR → bypass grafts → catheterization/angiography → venous procedures → CVAD → dialysis access → portal decompression → thrombectomy",
    ],
    callout: "Medicine — Cardiovascular (92920–93799) reads/manages the device; Surgery places it — don't confuse the two chapters.",
  },
  {
    n: 2,
    title: "Pericardium, Cardiac Tumor & TMR",
    range: "33016–33141",
    points: [
      "Pericardiocentesis (33016, no catheter left) vs. drainage w/ indwelling catheter (33017/33018 by age + congenital anomaly, 33019 CT-guided)",
      "Pericardiectomy: subtotal or complete, without vs. with bypass (33030/33031)",
      "Cardiac tumor: INTRAcardiac always needs bypass (33120); EXTERNAL does not (33130)",
      "Transmyocardial revascularization: standalone (33140) vs. add-on with another open-heart procedure (33141)",
    ],
    callout: "All four pericardial codes already bundle their own imaging guidance — never add 76942/77002/77012/77021.",
  },
  {
    n: 3,
    title: "Pacemakers & ICDs",
    range: "33202–33288",
    points: [
      "System = pulse generator (electronics + battery) + lead(s) — no battery-only code, a \"battery change\" bills as a full generator replacement",
      "Single (1 lead) / dual (2 leads) / biventricular-CRT (3rd LV lead, 33224 or +33225) / leadless (33274/33275, self-contained)",
      "ICD: transvenous (paces + shocks) vs. subcutaneous S-ICD (shock-only) vs. substernal (paces + shocks, no chronic pacing)",
      "Device evaluation (93260/93261/93279–93298) never billed with insertion/revision codes; DFT testing separately billable for transvenous ICD only",
      "Pocket revision is bundled; pocket relocation is billed separately (33222 pacemaker / 33223 ICD)",
    ],
    callout: "Epicardial leads (open 33202 / endoscopic 33203) are a completely separate code pair from the transvenous system codes.",
  },
  {
    n: 4,
    title: "Electrophysiology, Maze & LAA Closure",
    range: "33250–33269, 33340",
    points: [
      "Ablation: limited = isolate triggers only; extensive = full maze (additional lines through RA, septum, LA)",
      "Maze standalone (33254–33256) vs. add-on with another open-heart procedure (33257–33259); endoscopic maze 33265/33266",
      "Open LAA exclusion standalone (33267) vs. add-on (33268) vs. thoracoscopic (33269) — none separately billable when bundled into a maze or mitral repair",
      "Percutaneous transcatheter LAA closure device (33340) is a completely different code family from surgical LAA exclusion",
    ],
    callout: "Same clinical goal, two totally different code families — approach (surgical exclusion vs. percutaneous device) decides everything.",
  },
  {
    n: 5,
    title: "Heart Valves",
    range: "33361–33478",
    points: [
      "Aortic: TAVR/TAVI 33361–33370 (+CPB add-ons 33367–33369) vs. open replacement 33405–33417/33440",
      "Mitral: TMVR 33418 (initial) + 33419 (additional, add-on) vs. open valvotomy → valvuloplasty → replacement 33420–33430",
      "Tricuspid is open-only (33460–33468); Pulmonary TPVI 33477 vs. open 33474–33478",
      "Transcatheter valve bundle: access, valvuloplasty, delivery/deployment, temporary pacing (33210), closure, all guidance imaging",
      "Diagnostic coronary angiography separately billable only if no prior study, an outdated study, or an intraprocedural clinical change",
    ],
    callout: "TAVR/TAVI always has two operators — modifier 62 on the same code, never two different codes.",
  },
  {
    n: 6,
    title: "CABG & Other Open Cardiac Repair",
    range: "33510–33536, 33542–33572",
    points: [
      "Graft count = number of DISTAL ANASTOMOSES, not segments harvested",
      "Venous-only (33510–33516) / arterial-only (33533–33536) / combined = arterial code + venous combined add-on (33517–33523) — never billed side by side",
      "Saphenous vein harvest is bundled; every other harvest site is its own add-on (+35500 upper-extremity vein, 33509/35600 upper-extremity artery, +33508 endoscopic saphenous technique)",
      "Postinfarction VSD repair (33545) is a specific trap — routes here, not to congenital septal defect codes",
    ],
    callout: "Reoperation add-on (33530) applies to both valve and CABG cases performed more than a month after the original.",
  },
  {
    n: 7,
    title: "Aorta & Great Vessels",
    range: "33858–33886",
    points: [
      "Ascending/root: 33858/33859 (dissection vs. other disease); Bentall 33863 / David-Yacoub 33864",
      "Arch: hemiarch 33866 (always an add-on) vs. full transverse arch 33871 (mutually exclusive)",
      "Descending: open graft 33875/33877 vs. TEVAR 33880–33886",
      "TEVAR bundles sizing, non-selective catheterization, all guidance imaging, same-session extensions, <12F percutaneous access, in-zone angioplasty/stenting",
    ],
    callout: "75956–75959 (old TEVAR fluoroscopic guidance codes) are deleted in CPT 2026 — that work is simply bundled into 33880–33886 now.",
  },
  {
    n: 8,
    title: "ECMO/ECLS, Cardiac Assist & Transplant",
    range: "33927–33999",
    points: [
      "VV ECMO = lungs only (33946/33948); VA ECMO = heart + lungs (33947/33949) — daily management & repositioning never same-day as initiation",
      "Cannula grid: insertion / reposition / decannulate × approach (percutaneous / open / central) × age (birth–5 vs. 6+)",
      "IABP (33967–33974), VAD extracorporeal/intracorporeal (33975–33983), percutaneous VAD (33990–33997) — replacing the whole system uses insertion codes; replacing only the pump uses 33981–33983",
      "Transplant = 3 components: donor cardiectomy(-pneumonectomy) → backbench prep → recipient allotransplantation",
      "Artificial heart component-only revision has no dedicated code → unlisted 33999",
    ],
    callout: "Different physicians doing different pieces of ECMO care each bill only their own piece — no single \"owner\" of the case.",
  },
  {
    n: 9,
    title: "Abdominal Aorta (EVAR/FEVAR) & Non-Coronary Bypass Grafts",
    range: "34701–34848, 35500–35683",
    points: [
      "EVAR by device: aorto-aortic tube, aorto-uni-iliac, aorto-bi-iliac, ilio-iliac/iliac-branched — each split odd (non-rupture) / even (rupture)",
      "Treatment zone = every vessel holding a piece of the endograft; inside it's bundled, outside it's separate (+34709 for extensions beyond the common iliacs)",
      "FEVAR (34839–34848) preserves visceral/renal flow via fenestrations; open direct repair is 35001–35152",
      "Bypass grafts named by vessel-pair + conduit: vein (35501–35571), in-situ vein (35583–35587), other-than-vein/synthetic (35601–35671)",
      "Saphenous harvest is bundled into the bypass; every other harvest site is its own add-on (+35500, +35572, 35600)",
    ],
    callout: "A delayed extension after a prior EVAR (34710/+34711) is billed at a separate session — never with the original 34701–34709.",
  },
  {
    n: 10,
    title: "Vascular Access, Catheterization & Venous Procedures",
    range: "36000–36598",
    points: [
      "Catheterization hierarchy: non-selective → 1st-order → 2nd-order → 3rd-order+ — only the DEEPEST level reached is billed (Appendix L maps vessel order)",
      "Same territory bilateral → base code + modifier 50; different vascular family each side → separate codes + modifier 59",
      "Sclerosant injection (36465–36471, once per extremity) vs. endovenous ablation (36473–36483, first vein + add-on per subsequent vein/access)",
      "CVAD is defined by TIP location (subclavian/brachiocephalic/iliac/cavae/RA), not insertion site — 5 categories: insert/repair/partial-replace/complete-replace/remove",
      "PICC with imaging (36572/36573/36584) bundles tip-position confirmation — no separate chest X-ray/76937/77001; without imaging is 36568/36569",
    ],
    callout: "A less-intensive catheter placement is always packaged into the deepest level reached in the same vascular family — report once.",
  },
  {
    n: 11,
    title: "Dialysis Access, Portal Decompression & Transcatheter Thrombectomy",
    range: "36800–37214",
    points: [
      "Open AV access: direct anastomosis by vein transposition (36818–36821) vs. graft (36825 autogenous / 36830 nonautogenous)",
      "Percutaneous dialysis circuit = two 3-step ladders, one code per session: no-thrombus (36901→36902→36903) vs. thrombus (36904→36905→36906), + central add-ons 36907/36908",
      "Portal decompression: open shunts by vessel pair (37140/37145/37160/37180–81) vs. percutaneous TIPS (37182 new / 37183 revision)",
      "Arterial thrombectomy: primary (37184/+37185, by vascular family) vs. secondary/incidental (37186) — never reported together",
      "Venous thrombectomy (37187/37188) vs. thrombolytic infusion, billed by day of treatment (37211 initial → 37213 continued → 37214 final)",
    ],
    callout: "Ask \"thrombus present?\" first for dialysis-circuit coding — that alone picks the ladder before you count how far you went.",
  },
];

export default function CardiovascularSchematicPage() {
  return (
    <SeriesSchematicPage
      theme={CRIMSON}
      kicker="33,000 SERIES · STRATEGIC SCHEMATIC"
      title="Cardiovascular System at a Glance"
      blurb="The whole 33016–37799 chapter as one visual roadmap — eleven stops, top to bottom."
      nav={[
        { href: "/cpt/surgery/33,000", label: "33,000 Series home" },
        { href: "/cpt/surgery/33000-series-guidelines-reviewer", label: "Reviewer Pt. 1" },
        { href: "/cpt/surgery/33000-series-guidelines-reviewer-part-2", label: "Pt. 2" },
        { href: "/cpt/surgery/33000-series-guidelines-reviewer-part-3", label: "Pt. 3" },
        { href: "/cpt/surgery/33000-series-discussion-guide", label: "Discussion Guide" },
      ]}
      backHref="/cpt/surgery/33,000"
      backLabel="← Back to the Cardiovascular Series"
      nodes={nodes}
      strategyTitle="The Biggest CPC Strategy for Cardiovascular"
      strategyText={
        <>
          <p style={{ margin: "0 0 10px" }}>Every cardiovascular question resolves with the same eight-question chain:</p>
          <p style={{ margin: "0 0 10px", fontWeight: 800, fontSize: "17px" }}>SYSTEM → APPROACH → BYPASS STATUS → COUNT → MATERIAL → STANDALONE-OR-ADD-ON → WHAT'S BUNDLED → SPECIAL REPORTING</p>
          <p style={{ margin: "0 0 10px" }}>Worked example: a patient gets an open (sternotomy) aortic valve replacement with a stentless tissue valve, plus a 2-graft CABG — one internal mammary artery graft and one saphenous vein graft — on cardiopulmonary bypass, at a reoperation more than a month after a prior sternotomy.</p>
          <p style={{ margin: "0 0 10px" }}>SYSTEM: two systems in one session — the aortic valve and the coronary arteries. APPROACH: open, not transcatheter, so this routes to the 33405–33417/33440 family, not TAVR. BYPASS: used, confirming the "with bypass" code family. COUNT: 1 arterial + 1 venous graft. MATERIAL: stentless tissue valve for the valve; arterial-plus-venous combination for the grafts — which is never billed as a plain venous code next to a plain arterial code. STANDALONE-OR-ADD-ON: the venous side rides as the combined-grafting add-on on top of the arterial code, and the reoperation add-on applies because this is more than a month post-original. BUNDLED: the saphenous vein harvest is already included in the combined-grafting add-on — it's never billed separately. SPECIAL REPORTING: the reoperation add-on (33530) can be added to a valve case exactly the same way it's added to a CABG-only case.</p>
          <p style={{ margin: 0, fontWeight: 800 }}>Final stack: 33440 (open AVR, stentless valve) + 33533 (1 arterial graft) + +33517 (1 venous graft, combined-grafting add-on) + 33530 (reoperation add-on).</p>
        </>
      }
    />
  );
}
