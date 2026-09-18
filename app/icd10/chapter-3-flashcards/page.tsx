"use client";

import Link from "next/link";
import { useState } from "react";

type Card = { topic: string; front: string; back: string };

const cards: Card[] = [
  { topic: "Iron Deficiency", front: "D50.0 vs. D62 — chronic or acute blood loss?", back: "D50.0 = iron deficiency anemia secondary to CHRONIC blood loss. D62 = acute posthemorrhagic anemia (sudden blood loss). Same underlying problem, different timeframe, different code." },
  { topic: "Drug-Induced Anemia", front: "Drug-induced folate deficiency anemia (D52.1) — one code or two?", back: "Two — D52.1 plus an additional adverse-effect code identifying the specific drug (T36-T50 range)." },
  { topic: "Hereditary Hemolytic", front: "G6PD deficiency vs. hereditary spherocytosis — enzyme or structural defect?", back: "G6PD (D55.0) = enzyme defect. Spherocytosis (D58) = structural/membrane defect. Two different hereditary hemolytic anemia mechanisms." },
  { topic: "Sickle-Cell Thalassemia", front: "Sickle-cell thalassemia — coded under D56 (thalassemia) or D57 (sickle-cell)?", back: "D57.4- (sickle-cell). Despite the name, it's specifically excluded from D56 and classified under sickle-cell disorders instead." },
  { topic: "Hereditary vs. Acquired Hemolysis", front: "Autoimmune hemolytic anemia — D55-D58 or D59?", back: "D59 (acquired hemolytic anemia). D55-D58 are all hereditary causes; D59 covers acquired causes like autoimmune and drug-induced." },
  { topic: "Hemophilia Types", front: "Factor VIII, IX, and XI deficiency — which hemophilia letter and code for each?", back: "Factor VIII = Hemophilia A (D66). Factor IX = Hemophilia B (D67, Christmas disease). Factor XI = Hemophilia C (D68.1)." },
  { topic: "Von Willebrand Disease", front: "Does von Willebrand disease type matter for code selection?", back: "Yes — D68.0- is organized by type (1, 2 with subtypes, or 3), plus a separate code for ACQUIRED von Willebrand disease/syndrome." },
  { topic: "DIC", front: "D65 (DIC) — standalone or does it need a second code?", back: "Code the associated underlying condition additionally when applicable (e.g., sepsis, malignancy, obstetric complication) — DIC is almost always secondary to something else." },
  { topic: "Purpura vs. Thrombocytopenia", front: "Qualitative platelet defect (D69.1) vs. thrombocytopenia (D69.6) — what's the fork?", back: "D69.1 = normal platelet COUNT, abnormal FUNCTION (e.g., Bernard-Soulier). D69.6 = low platelet count itself." },
  { topic: "Henoch-Schönlein Purpura", front: "Which D69 subcode covers Henoch-Schönlein purpura?", back: "D69.0 (allergic purpura) — an immune-mediated vasculitis." },
  { topic: "Neutropenia", front: "Drug-induced neutropenia (D70.2) — one code or two?", back: "Two — D70.2 plus an additional adverse-effect code for the specific drug. Same pattern as drug-induced anemias elsewhere in this chapter." },
  { topic: "Spleen", front: "D73 vs. D78 — what's the fork?", back: "D73 = spleen disease in general. D78 = spleen complication specifically FROM a procedure (intraoperative/postprocedural)." },
  { topic: "Immunodeficiency", front: "D80 vs. D81 — what's the fork?", back: "D80 = antibody defects only (e.g., common variable immunodeficiency). D81 = COMBINED immunodeficiency, both antibody AND cell-mediated immunity affected (e.g., SCID)." },
  { topic: "Sarcoidosis", front: "Sarcoidosis with a specific organ manifestation (e.g., joint involvement) — one code or two?", back: "Often two — the D86 sarcoidosis code plus an additional code for the specific manifestation/organ involved." },
  { topic: "Biggest Trap", front: "The #1 recurring pattern across this whole chapter?", back: "Drug-induced blood disorders (anemia, neutropenia, hemolysis) all need TWO codes: the blood disorder itself, plus a separate adverse-effect code identifying the causative drug." },
];

const mainStyle = { maxWidth: "480px", margin: "0 auto", padding: "28px 18px 56px", minHeight: "100vh", background: "#f6f9f9", color: "#141d1c", fontFamily: "Arial, sans-serif", display: "flex", flexDirection: "column" as const };
const headerStyle = { marginBottom: "16px" };
const kickerStyle = { margin: "0 0 6px", color: "#0f766e", fontWeight: 800, letterSpacing: "0.08em", fontSize: "12px" };
const titleStyle = { margin: 0, fontSize: "22px", color: "#111827" };
const navStyle = { display: "flex", flexWrap: "wrap" as const, gap: "8px", marginTop: "12px", marginBottom: "18px" };
const navLinkStyle = { textDecoration: "none", color: "#0f766e", background: "#ffffff", border: "1px solid #dbe3e1", borderRadius: "999px", padding: "7px 12px", fontWeight: 700, fontSize: "12.5px" };
const progressStyle = { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px", fontSize: "13px", color: "#5b6b68", fontWeight: 700 };
const topicChipStyle = { background: "#f0fdfa", border: "1px solid #99f6e4", color: "#0f766e", borderRadius: "999px", padding: "3px 11px", fontWeight: 800, fontSize: "11.5px" };
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
  boxShadow: "0 12px 28px rgba(16,23,25,0.14)",
  userSelect: "none",
};
const frontFaceStyle: React.CSSProperties = { ...cardFaceBaseStyle, background: "linear-gradient(135deg, #101719, #0f766e)", color: "#fff" };
const backFaceStyle: React.CSSProperties = { ...cardFaceBaseStyle, background: "#ffffff", border: "2px solid #0f766e", color: "#111827" };
const cardLabelStyle: React.CSSProperties = { fontSize: "11px", fontWeight: 800, letterSpacing: "0.1em", opacity: 0.75, marginBottom: "14px" };
const cardTextStyle: React.CSSProperties = { fontSize: "20px", lineHeight: 1.5, fontWeight: 700, margin: 0 };
const cardBackTextStyle: React.CSSProperties = { fontSize: "17px", lineHeight: 1.6, margin: 0, color: "#1f2937" };
const tapHintStyle: React.CSSProperties = { marginTop: "18px", fontSize: "12px", opacity: 0.7, fontWeight: 700 };
const controlsRowStyle = { display: "flex", gap: "10px", marginTop: "18px" };
const controlBtnStyle = { flex: 1, padding: "13px", borderRadius: "999px", border: "1px solid #dbe3e1", background: "#fff", color: "#0f766e", fontWeight: 800, cursor: "pointer", fontSize: "14px" };
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

export default function Icd10Chapter3FlashcardsPage() {
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
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 3 · FLASHCARDS</p>
        <h1 style={titleStyle}>5-Minute Commute Review</h1>
        <nav aria-label="ICD-10 navigation" style={navStyle}>
          <Link href="/icd10" style={navLinkStyle}>ICD-10 home</Link>
          <Link href="/icd10/chapter-3-guidelines-reviewer" style={navLinkStyle}>Full Reviewer</Link>
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
