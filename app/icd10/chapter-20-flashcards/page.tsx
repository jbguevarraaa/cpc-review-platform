"use client";

import Link from "next/link";
import { useState } from "react";

type Card = { topic: string; front: string; back: string };

const cards: Card[] = [
  { topic: "Sequencing", front: "Can an external cause code be principal or first-listed?", back: "Never. The injury or condition comes first." },
  { topic: "Requirement", front: "Is external cause reporting mandatory?", back: "Not nationally. Voluntary unless a state mandate or payer requires it — but encouraged." },
  { topic: "General Rules", front: "What codes can external cause codes be used with?", back: "A00.0–T88.9 and Z00–Z99 — any health condition due to an external cause, not only injuries (e.g., a heart attack during strenuous activity)." },
  { topic: "General Rules", front: "How many external cause codes should be assigned?", back: "As many as necessary to fully explain each cause. If only one can be recorded, choose the one most related to the principal diagnosis." },
  { topic: "General Rules", front: "When is no Chapter 20 code needed?", back: "When the external cause and intent are already included in a code from another chapter (e.g., T36.0X1-)." },
  { topic: "General Rules", front: "Combination external cause codes?", back: "Some codes cover sequential events (e.g., a fall that results in striking against an object). Use the combination code that matches the sequence of events, regardless of which caused the worst injury." },
  { topic: "7th Characters", front: "7th character on an external cause code?", back: "A, D, or S — it should match the 7th character of the associated injury/condition code for that encounter. A new provider doesn't change it." },
  { topic: "Place (Y92)", front: "Place of occurrence rules?", back: "Secondary code, used once at the initial encounter (an extra one only for a new injury during hospitalization). No 7th character. Never Y92.9 when the place isn't stated." },
  { topic: "Activity (Y93)", front: "Activity code rules?", back: "Once, at the initial encounter; only one Y93 code per record. Not for poisonings, adverse effects, misadventures, or sequela. Never Y93.9 when the activity isn't stated." },
  { topic: "Status (Y99)", front: "External cause status code rules?", back: "Assigned whenever another external cause code is assigned (including an activity code), once at the initial encounter; only one Y99. Not for poisonings, adverse effects, misadventures, or late effects. Never Y99.9 when status isn't stated." },
  { topic: "Status (Y99)", front: "When is Y99 NOT assigned?", back: "When no other external cause code (cause, activity) applies to the encounter." },
  { topic: "Hierarchy", front: "First-listed external cause priority order?", back: "Abuse > terrorism > cataclysmic events > transport accidents." },
  { topic: "Hierarchy", front: "Where do place, activity, and status codes go?", back: "After all the causal external cause codes." },
  { topic: "Hierarchy", front: "Two events cause separate injuries?", back: "Assign an external cause code for each cause. The first-listed corresponds to the cause of the most serious diagnosis, following the hierarchy." },
  { topic: "Limited Formats", front: "Format limits the number of external cause codes?", back: "Report the cause and intent most related to the principal diagnosis." },
  { topic: "Limited Formats", front: "Format has extra room for more codes?", back: "Use it for the cause and intent of additional events (including medical misadventures) — not for place, activity, or status." },
  { topic: "Abuse", front: "How is abuse classified as an external cause?", back: "As assault. Any assault code may indicate the cause of an injury from confirmed abuse; add Y07 when the perpetrator is known." },
  { topic: "Intent", front: "Intent unknown or unspecified?", back: "Code it as accidental. All transport accident categories assume accidental intent." },
  { topic: "Intent", front: "When is undetermined intent used?", back: "Only when the documentation specifies that the intent cannot be determined." },
  { topic: "Sequela", front: "Sequela external cause codes?", back: "7th character S, used with any report of a late effect from a previous injury. Never with a related current injury code." },
  { topic: "Sequela", front: "Follow-up visit (healing check, rehab) with no documented late effect?", back: "No sequela external cause code — only use it when a late effect of the initial injury is being treated." },
  { topic: "Terrorism", front: "FBI-identified terrorism — which code goes first?", back: "A Y38 code as the first-listed external cause code, plus a Y92 place code. More than one Y38 code is allowed for more than one mechanism." },
  { topic: "Terrorism", front: "Suspected terrorism?", back: "No Y38 code. Suspected cases are classified as assault." },
  { topic: "Terrorism", front: "What is Y38.9 for?", back: "Terrorism, secondary effects — conditions that occur AFTER the terrorist event, not conditions due to the initial act. It can accompany another Y38 code when both apply." },
  { topic: "Biggest Trap", front: "The #1 trap in Chapter 20?", back: "Listing an external cause code first, or repeating place/activity/status at follow-up visits. They're secondary codes, and place, activity, and status are generally assigned only once. Y93 and Y99 are never used with poisonings, adverse effects, misadventures, or sequela — Y92 has no such exclusion." },
  { topic: "Abuse", front: "Suspected abuse — is an external cause or perpetrator code reported?", back: "No. For suspected cases, don't report an external cause or perpetrator code. Only CONFIRMED abuse gets an assault code, plus Y07 when the perpetrator is known." },
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

export default function Icd10Chapter20FlashcardsPage() {
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
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 20 · FLASHCARDS</p>
        <h1 style={titleStyle}>5-Minute Commute Review</h1>
        <nav aria-label="ICD-10 navigation" style={navStyle}>
          <Link href="/icd10" style={navLinkStyle}>ICD-10 home</Link>
          <Link href="/icd10/chapter-20-guidelines-reviewer" style={navLinkStyle}>Full Reviewer</Link>
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
