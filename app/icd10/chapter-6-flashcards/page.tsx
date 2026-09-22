"use client";

import Link from "next/link";
import { useState } from "react";
import { HighlightToolbar } from "../../cpt/surgery/_digestive/highlighter";

type Card = { topic: string; front: string; back: string };

const cards: Card[] = [
  { topic: "Dominant/Nondominant", front: "Handedness not documented, RIGHT side affected — default?", back: "Dominant." },
  { topic: "Dominant/Nondominant", front: "Handedness not documented, LEFT side affected — default?", back: "Nondominant." },
  { topic: "Dominant/Nondominant", front: "Ambidextrous patient — default, regardless of side affected?", back: "Dominant — this overrides the general left/right defaults." },
  { topic: "G89 — When It Applies", front: "Admission is for a procedure treating the underlying condition (e.g., spinal fusion) — is a G89 code assigned?", back: "No — the underlying condition is coded as principal; no G89 code is assigned." },
  { topic: "G89 — When It Applies", front: "Pain control/management IS the stated reason for the encounter — can G89 be principal?", back: "Yes — G89 is acceptable as principal/first-listed when pain control itself is the reason for the encounter, with the underlying cause as an additional diagnosis." },
  { topic: "G89 + Neurostimulator", front: "Neurostimulator inserted for pain control DURING an admission that's otherwise for treating the underlying condition — which code is principal?", back: "The underlying condition — the pain code becomes secondary, not principal, just because a neurostimulator was also placed." },
  { topic: "G89 Sequencing", front: "Encounter is FOR pain management — which code comes first, G89 or the site-specific code?", back: "G89 first, then the site-specific code (e.g., G89.11 then M54.2 for cervicalgia)." },
  { topic: "Postoperative Pain", front: "Routine, expected pain right after surgery, no complication — coded?", back: "Not coded at all." },
  { topic: "Postoperative Pain", front: "Postoperative pain tied to a specific complication (e.g., painful wire sutures) — which code leads?", back: "The appropriate Chapter 19 complication code leads, with G89.18 (acute) or G89.28 (chronic) added as an additional code if appropriate." },
  { topic: "Postoperative Pain", front: "Postoperative pain not specified as acute or chronic — default?", back: "The ACUTE form." },
  { topic: "Chronic Pain", front: "Is there a fixed time frame (e.g., 3 months) that defines when pain becomes \"chronic\"?", back: "No — there is no fixed time frame; the provider's own documentation of \"chronic\" is what guides the code." },
  { topic: "Neoplasm-Related Pain", front: "G89.3 as principal diagnosis — what must be true about the reason for the encounter?", back: "Pain control/pain management must be the STATED reason for the admission/encounter." },
  { topic: "Neoplasm-Related Pain", front: "Encounter is for neoplasm MANAGEMENT (not pain control), and neoplasm-related pain is also documented — how is G89.3 used, and is a separate site code needed?", back: "G89.3 as an ADDITIONAL diagnosis (not principal); no separate site-of-pain code is necessary." },
  { topic: "Pain Syndromes", front: "Plain \"chronic pain\" — which code?", back: "G89.2." },
  { topic: "Pain Syndromes", front: "Specifically documented \"chronic pain syndrome\" — which code?", back: "G89.4 — a distinct, specifically named condition, only coded when that exact term is documented." },
  { topic: "Pain Syndromes", front: "Specifically documented \"central pain syndrome\" — which code?", back: "G89.0 — also only coded when that exact named condition is documented, not for generic long-lasting pain." },
  { topic: "Biggest Trap", front: "The #1 trap across this chapter?", back: "\"Is this encounter FOR pain control, or FOR the underlying condition?\" — that single question decides whether G89 is used, is principal or secondary, and how it's sequenced, across nearly every topic in this chapter." },
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

export default function Icd10Chapter6FlashcardsPage() {
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
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 6 · FLASHCARDS</p>
        <h1 style={titleStyle}>5-Minute Commute Review</h1>
        <nav aria-label="ICD-10 navigation" style={navStyle}>
          <Link href="/icd10" style={navLinkStyle}>ICD-10 home</Link>
          <Link href="/icd10/chapter-6-guidelines-reviewer" style={navLinkStyle}>Full Reviewer</Link>
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
