"use client";

import Link from "next/link";
import { HighlightToolbar } from "../../cpt/surgery/_digestive/highlighter";
import { useState } from "react";

type Card = { topic: string; front: string; back: string };

const cards: Card[] = [
  { topic: "Combination Codes", front: "What three things does every diabetes code bundle together?", back: "Type of diabetes + body system affected + specific complication — all in one combination code." },
  { topic: "Diabetes Type", front: "Type not documented at all — default code?", back: "E11.- (Type 2 diabetes) — the fixed default, regardless of age." },
  { topic: "Diabetes Type", front: "Does patient age determine diabetes type?", back: "No — age is explicitly NOT the sole determining factor, despite type 1's \"juvenile diabetes\" nickname." },
  { topic: "Presymptomatic Type 1", front: "E10.A- — what does it capture?", back: "Early-stage type 1 diabetes that predates the onset of actual symptoms." },
  { topic: "Remission", front: "\"Resolved\" vs. \"in remission\" — same thing?", back: "No — explicitly NOT synonymous. \"Resolved\" documentation requires a provider query before E11.A can be assigned." },
  { topic: "Z79 Codes", front: "Z79.4 vs. Z79.84 vs. Z79.85 — what does each mean?", back: "Z79.4 = long-term insulin. Z79.84 = long-term oral hypoglycemics. Z79.85 = long-term injectable non-insulin antidiabetic drugs." },
  { topic: "Z79 Codes", front: "Three possible Z79 two-drug combinations?", back: "Insulin+oral (Z79.4+Z79.84), insulin+injectable non-insulin (Z79.4+Z79.85), oral+injectable non-insulin (Z79.84+Z79.85)." },
  { topic: "Z79 Codes", front: "Single temporary insulin dose during today's visit only — Z79.4?", back: "No — Z79.4 excludes temporary in-visit insulin dosing. Only for genuine long-term, ongoing use." },
  { topic: "Pump Malfunction", front: "Underdose from pump failure — second code after T85.6-?", back: "T38.3X6- (underdosing of insulin)." },
  { topic: "Pump Malfunction", front: "Overdose from pump failure — second code after T85.6-?", back: "T38.3X1- (poisoning by insulin, accidental) — NOT the same code as underdose." },
  { topic: "Secondary Diabetes", front: "What defines \"secondary\" diabetes?", back: "It's always CAUSED by another condition or event (e.g., cystic fibrosis, pancreatic cancer, pancreatectomy, drug adverse effect, poisoning) — as opposed to type 1/type 2 arising on their own." },
  { topic: "Postpancreatectomy Diabetes", front: "Fixed three-code combination for diabetes after pancreas removal?", back: "E89.1 (postprocedural hypoinsulinemia) + category E13 code (principal/first-listed) + Z90.41 (acquired absence of pancreas)." },
  { topic: "Drug-Induced Diabetes", front: "Diabetes caused by a medication — which category, and what else is needed?", back: "Category E09, coded per the general adverse-effect/poisoning rules — plus the specific adverse-effect code for the causative drug." },
  { topic: "Obesity Codes", front: "E66.1 vs. E66.2 — cause or effect?", back: "E66.1 = drug-induced obesity (a cause). E66.2 = morbid obesity with alveolar hypoventilation (an effect)." },
  { topic: "Obesity Class", front: "Can obesity class (E66.81) be assigned from BMI alone?", back: "No — the provider must actually document the obesity class. A coder cannot infer class purely from a BMI number." },
  { topic: "Obesity Overlap", front: "Both class 3 obesity AND morbid obesity documented for the same condition — how many codes?", back: "One — only the class 3 obesity code, since it's the more specific finding. Not stacked with the morbid obesity code." },
  { topic: "Biggest Trap", front: "The #1 trap across this chapter?", back: "Shared first code, opposite second code based on one fact — pump underdose vs. overdose (T85.6- + X6- vs. X1-) is the clearest example. Always read for the ONE distinguishing detail." },
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

export default function Icd10Chapter4FlashcardsPage() {
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
      <HighlightToolbar />
      <header style={headerStyle}>
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 4 · FLASHCARDS</p>
        <h1 style={titleStyle}>5-Minute Commute Review</h1>
        <nav aria-label="ICD-10 navigation" style={navStyle}>
          <Link href="/icd10" style={navLinkStyle}>ICD-10 home</Link>
          <Link href="/icd10/chapter-4-guidelines-reviewer" style={navLinkStyle}>Full Reviewer</Link>
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
