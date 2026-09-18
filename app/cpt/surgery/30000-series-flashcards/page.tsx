"use client";

import Link from "next/link";
import { useState } from "react";

type Card = { topic: string; front: string; back: string };

const cards: Card[] = [
  { topic: "Nose", front: "Nasal valve repair codes (30465/30468/30469) — mutually exclusive?", back: "Yes, per side — pick one technique per side. All are bilateral by default; use modifier 52 for a unilateral repair." },
  { topic: "Nose", front: "Epistaxis control coding — two axes?", back: "Anterior vs. posterior, and simple vs. complex (30901–30906)." },
  { topic: "Accessory Sinuses", front: "31242/31243 (posterior nasal nerve ablation) — bilateral or unilateral by default?", back: "Bilateral by default (report once, no modifier 50). Use modifier 52 for a unilateral procedure. Not reported together with 31231 or 92511." },
  { topic: "Larynx", front: "Laryngoscopy performed with an operating microscope, using the microscope-inclusive code (e.g., 31531) — is 69990 also billed?", back: "No — once the microscope-inclusive code is used, add-on 69990 is not separately reported for that same microscope use." },
  { topic: "Trachea & Bronchi", front: "31600/31601 vs. 31603/31605 — what's the fork?", back: "31600/31601 = planned tracheostomy (standard vs. under age 2). 31603/31605 = emergency tracheostomy (transtracheal vs. cricothyroid membrane)." },
  { topic: "Lung & Pleural Biopsy", front: "32408 with multiple imaging modalities used — how many guidance codes billed?", back: "Zero. 32408 already bundles ALL imaging guidance, no matter how many modalities were used." },
  { topic: "Thoracotomy", front: "32035/32036 — what specific indication?", back: "Empyema thoracostomy specifically — not a generic thoracotomy or chest tube code." },
  { topic: "Lung Resection", front: "Pneumonectomy vs. lobectomy vs. wedge resection — the fork?", back: "Pneumonectomy (32440) = entire lung. Lobectomy (32480–32488) = one lobe. Wedge resection (32505–32507) = a small segment." },
  { topic: "Pleural Drainage", front: "32550 vs. 32551 — what's the difference?", back: "32550 = tunneled indwelling pleural catheter (longer-term). 32551 = simple tube thoracostomy (standard chest tube)." },
  { topic: "Thoracoscopy (VATS)", front: "Diagnostic scope immediately before therapeutic scope, same session — separately billed?", back: "No — the diagnostic scope is bundled into the more extensive therapeutic/surgical scope. Same pattern as open and other endoscopic procedures throughout CPT." },
  { topic: "Lung Transplant", front: "Three components of lung transplant coding?", back: "Donor pneumonectomy, backbench preparation, and recipient implantation — may be separately reported depending on which team/physician performs each part." },
  { topic: "Ablation", front: "Is imaging guidance separately billed with percutaneous lung tumor ablation?", back: "No — typically bundled into the ablation code itself, same pattern as percutaneous biopsy elsewhere in this series." },
  { topic: "Biggest Trap", front: "The #1 recurring pattern across the whole 30,000 series?", back: "Imaging/visualization guidance (fluoroscopy, CT, microscope, scope) is very often already bundled into the base procedure code — always check the specific code's own descriptor before adding a separate guidance code." },
];

const mainStyle = { maxWidth: "480px", margin: "0 auto", padding: "28px 18px 56px", minHeight: "100vh", background: "#f5f7fa", color: "#161c26", fontFamily: "Arial, sans-serif", display: "flex", flexDirection: "column" as const };
const headerStyle = { marginBottom: "16px" };
const kickerStyle = { margin: "0 0 6px", color: "#0f766e", fontWeight: 800, letterSpacing: "0.08em", fontSize: "12px" };
const titleStyle = { margin: 0, fontSize: "22px", color: "#111827" };
const navStyle = { display: "flex", flexWrap: "wrap" as const, gap: "8px", marginTop: "12px", marginBottom: "18px" };
const navLinkStyle = { textDecoration: "none", color: "#0f766e", background: "#ffffff", border: "1px solid #efd39b", borderRadius: "999px", padding: "7px 12px", fontWeight: 700, fontSize: "12.5px" };
const progressStyle = { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px", fontSize: "13px", color: "#5b6b68", fontWeight: 700 };
const topicChipStyle = { background: "#fff7e8", border: "1px solid #efd39b", color: "#0f766e", borderRadius: "999px", padding: "3px 11px", fontWeight: 800, fontSize: "11.5px" };
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
  boxShadow: "0 12px 28px rgba(15,23,42,0.14)",
  userSelect: "none",
};
const frontFaceStyle: React.CSSProperties = { ...cardFaceBaseStyle, background: "linear-gradient(135deg, #1f2937, #0f766e)", color: "#fff" };
const backFaceStyle: React.CSSProperties = { ...cardFaceBaseStyle, background: "#ffffff", border: "2px solid #0f766e", color: "#111827" };
const cardLabelStyle: React.CSSProperties = { fontSize: "11px", fontWeight: 800, letterSpacing: "0.1em", opacity: 0.75, marginBottom: "14px" };
const cardTextStyle: React.CSSProperties = { fontSize: "20px", lineHeight: 1.5, fontWeight: 700, margin: 0 };
const cardBackTextStyle: React.CSSProperties = { fontSize: "17px", lineHeight: 1.6, margin: 0, color: "#1f2937" };
const tapHintStyle: React.CSSProperties = { marginTop: "18px", fontSize: "12px", opacity: 0.7, fontWeight: 700 };
const controlsRowStyle = { display: "flex", gap: "10px", marginTop: "18px" };
const controlBtnStyle = { flex: 1, padding: "13px", borderRadius: "999px", border: "1px solid #efd39b", background: "#fff", color: "#0f766e", fontWeight: 800, cursor: "pointer", fontSize: "14px" };
const shuffleBtnStyle = { padding: "13px 18px", borderRadius: "999px", border: "none", background: "#0f766e", color: "#fff", fontWeight: 800, cursor: "pointer", fontSize: "14px" };
const bottomRowStyle = { display: "flex", justifyContent: "center", marginTop: "12px" };

function shuffled(arr: Card[]): Card[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default function SurgeryThirtyThousandFlashcardsPage() {
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
        <p style={kickerStyle}>30,000 SERIES · FLASHCARDS</p>
        <h1 style={titleStyle}>5-Minute Commute Review</h1>
        <nav aria-label="Respiratory navigation" style={navStyle}>
          <Link href="/cpt/surgery/30,000" style={navLinkStyle}>Respiratory home</Link>
          <Link href="/cpt/surgery/30000-series-guidelines-reviewer" style={navLinkStyle}>Full Reviewer</Link>
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
            <p style={{ ...cardLabelStyle, color: "#0f766e" }}>ANSWER</p>
            <p style={cardBackTextStyle}>{card.back}</p>
            <p style={{ ...tapHintStyle, color: "#5b6b68" }}>👆 Tap to flip back</p>
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
