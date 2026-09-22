"use client";

import Link from "next/link";
import { useState } from "react";

type Card = { topic: string; front: string; back: string };

const cards: Card[] = [
  { topic: "Pericardium", front: "33016 vs. 33017/33018/33019 — what's the fork?", back: "Catheter removed after draining = 33016. Catheter LEFT in place = 33017 (age 6+, no anomaly), 33018 (under 6 or any congenital anomaly), or 33019 (CT guidance)." },
  { topic: "Pacemaker/ICD", front: "4-question build order for any pacemaker/ICD scenario?", back: "(1) Lead-only, generator-only, or full system? (2) Single, dual, or multiple leads? (3) Pacemaker or ICD? (4) Transvenous, subcutaneous, or leadless?" },
  { topic: "Pacemaker/ICD", front: "Leadless pacemaker codes?", back: "33274 = insert/replace/remove-and-replace. 33275 = removal only. Both include imaging guidance and device evaluation — never billed separately." },
  { topic: "Maze/LAA", front: "Standalone maze vs. add-on maze — what decides it?", back: "No other concurrent open-heart procedure = standalone (33254–33256). Alongside another open cardiac procedure = add-on (33257–33259)." },
  { topic: "LAA Closure", front: "33267/33268/33269 (surgical LAA exclusion) vs. 33340 (percutaneous LAA closure) — same thing?", back: "No — completely different code families. Surgical exclusion vs. percutaneous device closure (e.g., Watchman-type) are two different procedures." },
  { topic: "TAVR", front: "What decides which TAVR code (33361–33366) to use?", back: "The arterial ACCESS ROUTE (femoral percutaneous/open, axillary, iliac, transaortic, transapical) — not valve type or manufacturer." },
  { topic: "TAVR", front: "TAVR always needs how many operators, and what modifier?", back: "Two operators, reported with modifier 62 on the same access-route code." },
  { topic: "Open AVR", front: "33405 vs. 33406 vs. 33410 — what's the fork?", back: "Valve material: 33405 = prosthetic. 33406 = allograft/homograft (freehand). 33410 = stentless tissue valve." },
  { topic: "Ross-Konno", front: "When does 33440 apply instead of 33412 or 33413 separately?", back: "When BOTH pulmonary valve translocation (Ross) AND annulus enlargement (Konno) are done together — 33440 is the single combined code; never bill 33412/33413 alongside it." },
  { topic: "Valve Ladder", front: "The memorize-once pattern for mitral/tricuspid/pulmonary valve work?", back: "Valvotomy (open a stenotic valve) → valvuloplasty (repair, ± ring) → replacement. Same ladder, different code numbers per valve." },
  { topic: "CABG Counting", front: "How does CPT count the number of bypass grafts?", back: "By the number of DISTAL ANASTOMOSES (suture points onto a diseased coronary artery) — not incisions, harvested segments, or diseased vessels." },
  { topic: "CABG Families", front: "Venous-only vs. arterial-only vs. combined CABG — how are they billed?", back: "Venous-only: 33510–33516 alone. Arterial-only: 33533–33536 alone. Combined: BOTH a venous add-on (33517–33523) AND an arterial code (33533–33536) together — never venous-only + arterial-only mixed." },
  { topic: "CABG Harvest", front: "Is saphenous vein graft procurement separately billed?", back: "No — it's bundled into 33510–33516 and 33517–33523. Upper-extremity vein harvest = add-on 35500. Femoropopliteal vein segment = add-on 35572." },
  { topic: "Aortic Root", front: "Bentall (33863) vs. David/Yacoub (33864) — what's the fork?", back: "Bentall = valved conduit, the valve IS replaced. David/Yacoub = valve-SPARING root remodeling, the patient's own valve is preserved." },
  { topic: "Aortic Arch", front: "Hemiarch add-on (33866) vs. full transverse arch graft (33871) — mutually exclusive?", back: "Yes — pick the one matching the actual extent of arch work. Never bill both for the same arch reconstruction." },
  { topic: "TEVAR", front: "What single landmark decides TEVAR code selection?", back: "Endograft coverage relative to the LEFT SUBCLAVIAN ARTERY — not the underlying pathology (aneurysm/dissection/ulcer/trauma are all coded the same way based on anatomic coverage)." },
  { topic: "ECMO", front: "The ECMO code grid — two axes?", back: "Veno-venous vs. veno-arterial, crossed with initiation (33946/33947) vs. daily management (33948/33949) vs. cannula insertion, repositioning, and decannulation." },
  { topic: "ECMO Timing", front: "Can daily management (33948/33949) be billed the same day as initiation (33946/33947)?", back: "No — never, even if performed by a different physician that same day." },
  { topic: "IABP", front: "How are intra-aortic balloon pump insertion/removal codes organized?", back: "By approach: percutaneous (33967/33968), open femoral (33970/33971), or ascending aorta (33973/33974) — each approach has its own paired insertion and removal code." },
  { topic: "Hemodialysis Access", front: "36818/36819/36820/36821 — what's the fork?", back: "Direct AV anastomosis, picked by which vein is transposed: 36818 = upper-arm cephalic, 36819 = upper-arm basilic, 36820 = forearm vein, 36821 = direct, any site (Cimino type). Mutually exclusive on a unilateral procedure." },
  { topic: "Central Venous Access", front: "3-question build for PICC/central line codes?", back: "(1) Central or peripheral (PICC)? (2) Tunneled or non-tunneled? (3) Plain catheter, port, or pump?" },
  { topic: "Central Venous Access", front: "Complete PICC replacement without any imaging guidance — which code?", back: "None of the standard codes — there's no 'without imaging' complete-PICC-replacement code. It falls to the unlisted code 37799." },
  { topic: "Dialysis Circuit", front: "The two parallel 3-step ladders for percutaneous dialysis circuit work?", back: "No thrombus: diagnostic (36901) → +angioplasty (36902) → +stent (36903). Thrombus present: thrombectomy (36904) → +angioplasty (36905) → +stent (36906). Only ONE code per session, from ONE ladder." },
  { topic: "Thrombectomy", front: "Primary (37184/37185) vs. secondary (37186) mechanical thrombectomy?", back: "Primary = thrombus already known, thrombectomy was the planned procedure. Secondary = incidental short-segment retrieval during another planned intervention. Never billed together." },
  { topic: "Biggest Trap", front: "What's the #1 cross-cutting trap in this whole series?", back: "Assuming a procedure done alongside another open-heart operation gets a standalone code — check for the matching ADD-ON code first (maze, LAA exclusion, hemiarch, bypass-support cannulation, and TAVR bypass support all have separate standalone vs. add-on versions)." },
  { topic: "EVAR", front: "34701–34708: what do the odd vs. even codes mean?", back: "Odd = other than rupture. Even = rupture (and includes temporary aortic/iliac balloon occlusion when performed). The device picks the pair: 34701/34702 tube, 34703/34704 aorto-uni-iliac, 34705/34706 aorto-bi-iliac, 34707/34708 ilio-iliac." },
  { topic: "EVAR", front: "What is bundled into an EVAR base code?", back: "Sizing, non-selective catheterization, guidewires, aortography, fluoroscopy, roadmapping, completion angiography, treatment-zone angioplasty/stenting, and extensions ending in the aorta or common iliac arteries." },
  { topic: "EVAR", front: "+34709 — when, and how many times?", back: "For extensions ending in the internal iliac, external iliac, or common femoral artery, or in the aorta above the renals. ONCE per vessel treated, no matter how many extensions. Not for a docking limb that extends into the external iliac." },
  { topic: "EVAR", front: "EVAR access: percutaneous vs. open?", back: "Sheath under 12 French percutaneous = included. 12 French or larger with closure device = +34713. Open exposure = +34812/34714 (femoral), +34820/34833 (iliac), +34715/34716 (axillary/subclavian), +34834 (brachial). Each is per side — report twice for bilateral, no modifier 50." },
  { topic: "EVAR", front: "Covered stent for OCCLUSIVE disease — EVAR codes?", back: "No. EVAR/FEVAR treat the vessel WALL (aneurysm, dissection, ulcer, trauma). Occlusive disease isolated to the aorta = 37236/37237; iliac = 37258–37261. 37221/37223 are deleted." },
  { topic: "FEVAR", front: "How are 34841–34848 chosen?", back: "By how many visceral artery endoprostheses (SMA, celiac, renal) go through the fenestrations: one, two, three, or four or more. 34841–34844 = fenestrated visceral aortic endograft; 34845–34848 = the same with a concomitant infrarenal endograft." },
  { topic: "Catheter Placement", front: "Selective vs. non-selective catheterization?", back: "Selective = the tip goes INTO a branch (not just 'at' or 'near the origin'). Non-selective = the tip stays in the aorta or the access vessel." },
  { topic: "Catheter Placement", front: "Vascular family and vascular order?", back: "A vascular family is a first-order vessel off the aorta plus all its branches. First-order = off the aorta, second-order = off a first-order vessel, third-order = off a second-order vessel." },
  { topic: "Catheter Placement", front: "Which catheter-placement code do you report when several levels are reached in one family?", back: "Only the deepest level reached (progressive hierarchy) — lower levels are packaged in. Add-ons (+36218, +36248) are for each ADDITIONAL second-, third-order, or beyond branch." },
  { topic: "Catheter Placement", front: "Both sides of the body catheterized — modifiers?", back: "Unilateral codes done on both sides: modifier 50. A DIFFERENT vascular family studied on each side: modifier 59 on the second code. Interventions at the same session as a diagnostic angiogram are reported separately." },
  { topic: "Bypass Graft", front: "35501–35571 vs. 35583–35587 vs. 35601–35671?", back: "35501–35571 = bypass with VEIN. 35583–35587 = IN-SITU vein bypass. 35601–35671 = OTHER THAN VEIN (artery grafts and synthetic conduits). The code name lists the two vessels the graft bridges." },
  { topic: "Bypass Graft", front: "Vein harvest for a bypass — bundled or separate?", back: "Saphenous vein harvest is bundled. Upper-extremity vein = +35500. Femoropopliteal vein segment = +35572. Upper-extremity artery for coronary bypass = 35600." },
  { topic: "Bypass Graft", front: "Composite grafts: 35681, 35682, 35683?", back: "+35681 prosthetic + vein. +35682 autogenous, 2 vein segments from 2 locations. +35683 autogenous, 3 or more segments from 2 or more locations. Report only one of the three." },
  { topic: "CABG", front: "Surgical assistant harvests the graft — what's added?", back: "Modifier 80 on the bypass code (33510–33516 venous; 33517–33523 and 33533–33536 as appropriate)." },
  { topic: "ECMO", front: "Veno-venous vs. veno-arterial ECMO?", back: "VV = lungs only, one or two cannulae, all in veins (33946 initiation, 33948 daily). VA = heart and lungs, two cannulae (large vein + large artery) (33947 initiation, 33949 daily)." },
  { topic: "ECMO", front: "ECMO cannula replaced — same vs. different vessel?", back: "Same vessel: insertion code only. Different vessel: TWO codes — a decannulation code (33965, 33966, 33969, 33984–33986) plus an insertion code (33951–33956)." },
  { topic: "ECMO", front: "What can't be reported on the same day as ECMO initiation?", back: "Daily management (33948/33949) and repositioning (33957–33964) — by the same or a different physician. Repositioning at the same session as insertion is packaged, and fluoroscopy for repositioning is included." },
  { topic: "Percutaneous VAD", front: "pVAD removal or repositioning on the same day as insertion?", back: "Same session as insertion: not separately reportable. Separate and distinct session, same day: 33992/33997 (removal) or 33993 (repositioning with imaging) with modifier 59. Repositioning without imaging guidance is not reportable." },
  { topic: "VAD", front: "Replace only the VAD pump vs. the whole VAD system?", back: "Pump only = 33981–33983. Entire system (pump + cannulas) = the INSERTION codes (33975, 33976, 33979), and removal of the old system is not separately reported. Same idea for a pVAD: replacement uses the implantation codes." },
  { topic: "Heart Transplant", front: "Three components of a heart transplant and their codes?", back: "DONOR cardiectomy 33940 (heart) / 33930 (heart-lung); BACKBENCH 33944 / 33933; RECIPIENT transplant 33945 / 33935. Each is reported by whoever performs it." },
  { topic: "Heart Transplant", front: "Artificial heart codes vs. VAD codes?", back: "Artificial heart (total replacement heart system): 33927 implant, 33928 remove-and-replace, +33929 removal for transplant (with 33945). VADs: 33975, 33976, 33979, 33990, 33991, 33995. Components-only revision of an artificial heart = 33999." },
  { topic: "Venous Procedures", front: "Sclerosant injection vs. endovenous ablation?", back: "Injection by needle or mini-catheter followed by compression = 36468–36471. A catheter advanced the length of the vein with mechanochemical, radiofrequency, laser, or adhesive treatment = ablation 36473–36483 (first vein + add-on for each subsequent vein through a separate access)." },
  { topic: "Dialysis Circuit", front: "Peripheral vs. central dialysis segment?", back: "Peripheral = from the arterial anastomosis through the peri-anastomotic region. Central = the draining veins central to it (subclavian/innominate through the SVC, or iliac through the IVC). Base ladder codes act on the peripheral segment; +36907/+36908 are the central-segment add-ons." },
  { topic: "TEVAR", front: "Delayed thoracic extension codes?", back: "33883 = delayed proximal extension; 33886 = delayed distal extension. Each once regardless of modules. Same-session extensions are inside 33880–33882. 33884 is deleted." },
  { topic: "Pacemaker/ICD", front: "Replace ONLY the pulse generator — what's the code and what isn't added?", back: "33227–33229 (pacemaker) or 33262–33264 (ICD), by the final number of leads. Old-generator removal (33233/33241) is included — don't add it." },
  { topic: "Pacemaker/ICD", front: "Full system replaced — what can still be added?", back: "Report the system code (33206–33208, 33249, 33270). Removal of the old generator (33233/33241) and lead extraction (33234, 33235, 33244, 33272) may be reported separately when performed." },
  { topic: "Pacemaker/ICD", front: "Skin pocket: revision vs. relocation?", back: "Revision is included. Relocation is a separate service — 33222 for a pacemaker, 33223 for an ICD." },
  { topic: "Pacemaker/ICD", front: "When is defibrillation threshold (DFT) testing separately reported?", back: "With transvenous ICD insertion or replacement (93640, 93641). NOT with S-ICD insertion. At follow-up or replacement: 93642 or 93644." },
  { topic: "TAVR", front: "TAVR and diagnostic angiography — what is and isn't billable?", back: "93452, 93453, 93458–93461, and 93567 aren't used for the TAVR's own guidance work. Diagnostic CORONARY angiography may be reported (modifier 59) only if there's no prior study, the prior study is outdated or inadequate, or a clinical change during the procedure needs it." },
  { topic: "TAVR", front: "Cardiopulmonary bypass with TAVR?", back: "Add-ons: +33367 percutaneous peripheral, +33368 open peripheral, +33369 central." },
  { topic: "EVAR", front: "+34717 vs. 34718?", back: "+34717 = iliac branched endograft at the SAME session as an aorto-iliac endograft (per side; twice for bilateral, no modifier 50). 34718 = stand-alone, non-rupture, unilateral (bilateral: modifier 50). A ruptured isolated iliac branched repair = 37799." },
  { topic: "EVAR", front: "34710 and +34711?", back: "DELAYED extension placement after a prior repair: 34710 for the initial vessel, +34711 for each additional vessel. Not reported with 34701–34709 in the same session." },
  { topic: "Catheter Placement", front: "Cervicocerebral angiography — hierarchy and bilateral rules?", back: "Carotid: 36224 > 36223 > 36222 (only the most comprehensive per side). Vertebral: 36226 > 36225. Bilateral = modifier 50 on the unilateral code; add-ons +36227/+36228 are reported twice, no modifier 50." },
  { topic: "Catheter Placement", front: "Renal angiography 36251–36254?", back: "36251 = first-order main renal artery, unilateral; 36252 = bilateral. 36253 = superselective, unilateral; 36254 = bilateral. Don't report 36253 with 36251 for the same kidney." },
  { topic: "Venous Procedures", front: "Skilled venipuncture codes?", back: "Under age 3: 36400 (femoral/jugular), 36405 (scalp), 36406 (other vein). Age 3 or older: 36410. Routine specimen collection: 36415." },
  { topic: "Venous Procedures", front: "Foam sclerotherapy codes?", back: "36465/36466 = non-compounded foam with ultrasound-guided compression into extremity truncal veins (36466 once per extremity). Compounded foam or injection without those maneuvers uses 36470/36471." },
];

const mainStyle = { maxWidth: "480px", margin: "0 auto", padding: "28px 18px 56px", minHeight: "100vh", background: "#fdf6f6", color: "#291a1a", fontFamily: "Arial, sans-serif", display: "flex", flexDirection: "column" as const };
const headerStyle = { marginBottom: "16px" };
const kickerStyle = { margin: "0 0 6px", color: "#b91c1c", fontWeight: 800, letterSpacing: "0.08em", fontSize: "12px" };
const titleStyle = { margin: 0, fontSize: "22px", color: "#111827" };
const navStyle = { display: "flex", flexWrap: "wrap" as const, gap: "8px", marginTop: "12px", marginBottom: "18px" };
const navLinkStyle = { textDecoration: "none", color: "#b91c1c", background: "#ffffff", border: "1px solid #f0d7d7", borderRadius: "999px", padding: "7px 12px", fontWeight: 700, fontSize: "12.5px" };
const progressStyle = { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px", fontSize: "13px", color: "#7a3a3a", fontWeight: 700 };
const topicChipStyle = { background: "#fff1f0", border: "1px solid #fecaca", color: "#b91c1c", borderRadius: "999px", padding: "3px 11px", fontWeight: 800, fontSize: "11.5px" };
const cardOuterStyle = { flex: 1, display: "flex", alignItems: "stretch" };
const cardFaceBaseStyle: React.CSSProperties = {
  width: "100%",
  minHeight: "300px",
  borderRadius: "20px",
  padding: "28px 24px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  cursor: "pointer",
  boxShadow: "0 12px 28px rgba(69,10,10,0.16)",
  userSelect: "none",
};
const frontFaceStyle: React.CSSProperties = { ...cardFaceBaseStyle, background: "linear-gradient(135deg, #450a0a, #b91c1c)", color: "#fff" };
const backFaceStyle: React.CSSProperties = { ...cardFaceBaseStyle, background: "#ffffff", border: "2px solid #b91c1c", color: "#111827" };
const cardLabelStyle: React.CSSProperties = { fontSize: "11px", fontWeight: 800, letterSpacing: "0.1em", opacity: 0.75, marginBottom: "14px" };
const cardTextStyle: React.CSSProperties = { fontSize: "20px", lineHeight: 1.5, fontWeight: 700, margin: 0 };
const cardBackTextStyle: React.CSSProperties = { fontSize: "17px", lineHeight: 1.6, margin: 0, color: "#1f2937" };
const tapHintStyle: React.CSSProperties = { marginTop: "18px", fontSize: "12px", opacity: 0.7, fontWeight: 700 };
const controlsRowStyle = { display: "flex", gap: "10px", marginTop: "18px" };
const controlBtnStyle = { flex: 1, padding: "13px", borderRadius: "999px", border: "1px solid #f0d7d7", background: "#fff", color: "#b91c1c", fontWeight: 800, cursor: "pointer", fontSize: "14px" };
const shuffleBtnStyle = { padding: "13px 18px", borderRadius: "999px", border: "none", background: "#b91c1c", color: "#fff", fontWeight: 800, cursor: "pointer", fontSize: "14px" };
const bottomRowStyle = { display: "flex", justifyContent: "center", marginTop: "12px" };

function shuffled(arr: Card[]): Card[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default function SurgeryThirtyThreeThousandFlashcardsPage() {
  const [deck, setDeck] = useState<Card[]>(cards);
  const [current, setCurrent] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const card = deck[current];

  function next() {
    setFlipped(false);
    setCurrent((c) => (c + 1) % deck.length);
  }

  function prev() {
    setFlipped(false);
    setCurrent((c) => (c - 1 + deck.length) % deck.length);
  }

  function shuffle() {
    setDeck(shuffled(cards));
    setCurrent(0);
    setFlipped(false);
  }

  return (
    <main style={mainStyle}>
      <header style={headerStyle}>
        <p style={kickerStyle}>33,000 SERIES · FLASHCARDS</p>
        <h1 style={titleStyle}>5-Minute Commute Review</h1>
        <nav aria-label="Cardiovascular navigation" style={navStyle}>
          <Link href="/cpt/surgery/33,000" style={navLinkStyle}>Cardiovascular home</Link>
          <Link href="/cpt/surgery/33000-series-guidelines-reviewer" style={navLinkStyle}>Reviewer Part 1</Link>
          <Link href="/cpt/surgery/33000-series-guidelines-reviewer-part-2" style={navLinkStyle}>Part 2</Link>
          <Link href="/cpt/surgery/33000-series-guidelines-reviewer-part-3" style={navLinkStyle}>Part 3</Link>
          <Link href="/cpt/surgery/33000-series-discussion-guide" style={navLinkStyle}>Discussion Guide</Link>
        </nav>
      </header>

      <div style={progressStyle}>
        <span>Card {current + 1} of {deck.length}</span>
        <span style={topicChipStyle}>{card.topic}</span>
      </div>

      <div style={cardOuterStyle}>
        {!flipped ? (
          <div style={frontFaceStyle} onClick={() => setFlipped(true)} role="button" tabIndex={0} onKeyDown={(e) => e.key === "Enter" && setFlipped(true)}>
            <p style={cardLabelStyle}>QUESTION</p>
            <p style={cardTextStyle}>{card.front}</p>
            <p style={tapHintStyle}>👆 Tap to reveal the answer</p>
          </div>
        ) : (
          <div style={backFaceStyle} onClick={() => setFlipped(false)} role="button" tabIndex={0} onKeyDown={(e) => e.key === "Enter" && setFlipped(false)}>
            <p style={{ ...cardLabelStyle, color: "#b91c1c" }}>ANSWER</p>
            <p style={cardBackTextStyle}>{card.back}</p>
            <p style={{ ...tapHintStyle, color: "#7a3a3a" }}>👆 Tap to flip back</p>
          </div>
        )}
      </div>

      <div style={controlsRowStyle}>
        <button type="button" style={controlBtnStyle} onClick={prev}>← Prev</button>
        <button type="button" style={controlBtnStyle} onClick={next}>Next →</button>
      </div>

      <div style={bottomRowStyle}>
        <button type="button" style={shuffleBtnStyle} onClick={shuffle}>🔀 Shuffle Deck</button>
      </div>
    </main>
  );
}
