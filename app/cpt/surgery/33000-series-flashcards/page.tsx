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
  { topic: "ECMO", front: "The ECMO code grid — two axes?", back: "Veno-venous vs. veno-arterial, crossed with initiation (33946/33947) vs. daily management (33948/33949) vs. cannula insertion/repositioning." },
  { topic: "ECMO Timing", front: "Can daily management (33948/33949) be billed the same day as initiation (33946/33947)?", back: "No — never, even if performed by a different physician that same day." },
  { topic: "IABP", front: "How are intra-aortic balloon pump insertion/removal codes organized?", back: "By approach: percutaneous (33967/33968), open femoral (33970/33971), or ascending aorta (33973/33974) — each approach has its own paired insertion and removal code." },
  { topic: "Hemodialysis Access", front: "36818/36819/36820/36821 — what's the fork?", back: "Direct AV anastomosis, picked by which vein is transposed: 36818 = upper-arm cephalic, 36819 = upper-arm basilic, 36820 = forearm vein, 36821 = direct, any site (Cimino type). Mutually exclusive on a unilateral procedure." },
  { topic: "Central Venous Access", front: "3-question build for PICC/central line codes?", back: "(1) Central or peripheral (PICC)? (2) Tunneled or non-tunneled? (3) Plain catheter, port, or pump?" },
  { topic: "Central Venous Access", front: "Complete PICC replacement without any imaging guidance — which code?", back: "None of the standard codes — there's no 'without imaging' complete-PICC-replacement code. It falls to the unlisted code 37799." },
  { topic: "Dialysis Circuit", front: "The two parallel 3-step ladders for percutaneous dialysis circuit work?", back: "No thrombus: diagnostic (36901) → +angioplasty (36902) → +stent (36903). Thrombus present: thrombectomy (36904) → +angioplasty (36905) → +stent (36906). Only ONE code per session, from ONE ladder." },
  { topic: "Thrombectomy", front: "Primary (37184/37185) vs. secondary (37186) mechanical thrombectomy?", back: "Primary = thrombus already known, thrombectomy was the planned procedure. Secondary = incidental short-segment retrieval during another planned intervention. Never billed together." },
  { topic: "Biggest Trap", front: "What's the #1 cross-cutting trap in this whole series?", back: "Assuming a procedure done alongside another open-heart operation gets a standalone code — check for the matching ADD-ON code first (maze, LAA exclusion, hemiarch, bypass-support cannulation, and TAVR bypass support all have separate standalone vs. add-on versions)." },
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
          <Link href="/cpt/surgery/33000-series-guidelines-reviewer" style={navLinkStyle}>Full Reviewer</Link>
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
