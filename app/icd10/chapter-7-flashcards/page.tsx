"use client";

import Link from "next/link";
import { useState } from "react";

type Card = { topic: string; front: string; back: string };

const cards: Card[] = [
  { topic: "Glaucoma Codes", front: "How many H40 codes should be assigned for a patient with multiple distinct glaucoma findings?", back: "As many as needed — one for each distinct type/eye/stage combination actually documented." },
  { topic: "Bilateral — Same Type/Stage", front: "Same type and stage, both eyes, bilateral code EXISTS for that type — how many codes?", back: "One — the bilateral-specific code with the stage's seventh character." },
  { topic: "Bilateral — Same Type/Stage", front: "Same type and stage, both eyes, NO bilateral code exists (e.g., H40.10/H40.20) — how many codes?", back: "Still one — the type code with the seventh character for the shared stage." },
  { topic: "Bilateral — Different Type", front: "Each eye has a genuinely DIFFERENT glaucoma type, laterality distinguished — how many codes?", back: "Two — a separate code for each eye's own type." },
  { topic: "Bilateral — Same Type, Different Stage", front: "Same type, but a DIFFERENT stage in each eye, no laterality distinction — how many codes, and how do they differ?", back: "Two codes, same type, but each with its OWN eye's stage as the seventh character." },
  { topic: "Stage Progression", front: "Glaucoma stage progresses during a single admission — which stage is coded?", back: "The HIGHEST stage documented at any point during that admission — one code, not the admission-day stage." },
  { topic: "7th Character 4 vs 0", front: "Seventh character \"4\" (indeterminate) — when is it used?", back: "When the provider actively documents that the stage CANNOT be clinically determined — a real clinical finding." },
  { topic: "7th Character 4 vs 0", front: "Seventh character \"0\" (unspecified) — when is it used?", back: "When there is simply NO documentation at all about the stage — a documentation gap, not a clinical finding." },
  { topic: "Blindness Coding", front: "\"Blindness\"/\"low vision,\" BOTH eyes, no impairment category documented — code?", back: "H54.3, Unqualified visual loss, both eyes." },
  { topic: "Blindness Coding", front: "\"Blindness\"/\"low vision,\" ONE eye, no impairment category documented — code?", back: "A code from H54.6-, Unqualified visual loss, one eye." },
  { topic: "Blindness Coding", front: "\"Blindness\"/\"visual loss\" documented with NO information about how many eyes are affected — code?", back: "H54.7, Unspecified visual loss." },
  { topic: "Biggest Trap", front: "The #1 trap across this chapter?", back: "Confusing \"same type and stage → one code\" with needing a bilateral-specific code to exist — the one-code outcome holds either way, as long as type AND stage genuinely match in both eyes." },
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

export default function Icd10Chapter7FlashcardsPage() {
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
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 7 · FLASHCARDS</p>
        <h1 style={titleStyle}>5-Minute Commute Review</h1>
        <nav aria-label="ICD-10 navigation" style={navStyle}>
          <Link href="/icd10" style={navLinkStyle}>ICD-10 home</Link>
          <Link href="/icd10/chapter-7-guidelines-reviewer" style={navLinkStyle}>Full Reviewer</Link>
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
