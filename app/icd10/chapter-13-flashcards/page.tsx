"use client";

import Link from "next/link";
import { useState } from "react";
import { HighlightToolbar } from "../../cpt/surgery/_digestive/highlighter";

type Card = { topic: string; front: string; back: string };

const cards: Card[] = [
  { topic: "Site", front: "What does 'site' mean in Chapter 13 codes?", back: "The bone, joint, or muscle involved. Most codes also carry laterality." },
  { topic: "Site", front: "Avascular necrosis or osteoporosis at the end of a bone near a joint — bone or joint site?", back: "The BONE, not the joint, even though the affected portion may be at the joint." },
  { topic: "Site", front: "When are 'multiple sites' codes used?", back: "Only when the specific sites aren't documented. Specified sites are coded individually." },
  { topic: "Acute vs. Chronic", front: "Which chapter for a current, acute injury?", back: "Chapter 19 (the appropriate injury code)." },
  { topic: "Acute vs. Chronic", front: "Which chapter for conditions resulting from a healed injury, or recurrent conditions?", back: "Usually Chapter 13. Chronic or recurrent conditions should generally be coded from Chapter 13." },
  { topic: "Acute vs. Chronic", front: "Can't tell whether it's acute or chronic from the record?", back: "Query the provider." },
  { topic: "Pathologic Fracture", front: "Pathologic fracture 7th character A?", back: "For as long as the patient is in ACTIVE treatment — regardless of whether the provider is new." },
  { topic: "Pathologic Fracture", front: "Pathologic fracture 7th character D?", back: "After active treatment is complete, for routine care during the healing or recovery phase." },
  { topic: "Pathologic Fracture", front: "Malunion, nonunion, or sequela of a pathologic fracture?", back: "The other subsequent-encounter 7th characters listed under the subcategory in the Tabular List." },
  { topic: "Pathologic Fracture", front: "Complication of SURGICAL treatment of a fracture during healing?", back: "The appropriate complication code — not a fracture 7th character." },
  { topic: "Osteoporosis", front: "Osteoporosis is systemic — what does that mean for site?", back: "Site isn't a component of M81 codes. The M80 site codes identify the site of the fracture, not the osteoporosis." },
  { topic: "Osteoporosis", front: "M81 vs. M80?", back: "M81 = osteoporosis without a current pathological fracture (even with a past fracture). M80 = a current pathological fracture, with codes identifying the fracture site." },
  { topic: "Osteoporosis", front: "History of a healed osteoporosis fracture?", back: "Z87.310 (personal history of healed osteoporosis fracture) follows the M81 code." },
  { topic: "Osteoporosis", front: "Known osteoporosis + a fracture after a minor fall?", back: "M80 — not a traumatic fracture code — if the fall or trauma wouldn't usually break a normal, healthy bone." },
  { topic: "Biggest Trap", front: "The #1 trap in Chapter 13?", back: "Letting a new provider change the pathologic fracture 7th character, or using a traumatic fracture code for a known-osteoporosis patient's fracture." },
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

export default function Icd10Chapter13FlashcardsPage() {
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
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 13 · FLASHCARDS</p>
        <h1 style={titleStyle}>5-Minute Commute Review</h1>
        <nav aria-label="ICD-10 navigation" style={navStyle}>
          <Link href="/icd10" style={navLinkStyle}>ICD-10 home</Link>
          <Link href="/icd10/chapter-13-guidelines-reviewer" style={navLinkStyle}>Full Reviewer</Link>
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
