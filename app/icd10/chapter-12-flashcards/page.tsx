"use client";

import Link from "next/link";
import { useState } from "react";
import { HighlightToolbar } from "../../cpt/surgery/_digestive/highlighter";

type Card = { topic: string; front: string; back: string };

const cards: Card[] = [
  { topic: "Multiple Ulcers", front: "Patient has 3 distinct pressure ulcers at 3 different sites — how many L89 codes?", back: "Three — as many L89 codes as needed to identify every pressure ulcer the patient has." },
  { topic: "Stage Classification", front: "What are the 6 ways ICD-10-CM classifies pressure ulcer severity?", back: "Stages 1–4, deep tissue pressure injury, unspecified stage, and unstageable." },
  { topic: "Non-Provider Documentation", front: "Can a wound-care nurse's documentation of pressure ulcer STAGE be used for coding, without physician confirmation?", back: "Yes — pressure ulcer stage is a named exception allowing non-provider clinician documentation to be used directly." },
  { topic: "Unstageable", front: "When is L89.––0 (unstageable) used?", back: "When the stage genuinely CANNOT be clinically determined — e.g., covered by eschar, or treated with a skin/muscle graft. A real clinical finding." },
  { topic: "Unspecified", front: "When is L89.––9 (unspecified stage) used?", back: "When there is simply NO DOCUMENTATION at all about the stage — a documentation gap, not a clinical finding." },
  { topic: "Unstageable vs. Unspecified", front: "What's the key difference between unstageable and unspecified?", back: "Unstageable = a real clinical barrier to staging exists. Unspecified = the stage was just never documented. Never confuse the two." },
  { topic: "Revealed After Debridement", front: "A previously unstageable ulcer is debrided this encounter, revealing stage 3 — what's coded?", back: "Only the stage 3 code — the unstageable code is dropped entirely once the true stage is revealed." },
  { topic: "Query Trigger #1", front: "Provider uses a stage-describing term not found in the Alphabetic Index, with no other stage documentation — what do you do?", back: "Query the provider — don't guess at an unfamiliar term." },
  { topic: "Query Trigger #2", front: "Unclear whether a pressure ulcer is current/new vs. being treated as healing — what do you do?", back: "Query the provider — this is a separate, distinct query trigger from the unfamiliar-term one." },
  { topic: "Completely Healed", front: "Documentation states a pressure ulcer is completely healed at admission — code?", back: "No code is assigned at all for that ulcer." },
  { topic: "Healing", front: "Documentation describes a pressure ulcer as \"healing\" with a stage given — code?", back: "The specific stage code given — a healing (not yet fully healed) ulcer IS coded." },
  { topic: "Healing, No Stage", front: "A healing pressure ulcer's stage isn't documented anywhere — code?", back: "The unspecified stage code — still coded, just not at a specific numbered stage." },
  { topic: "Present on Admission, Healed by Discharge", front: "Stage 2 ulcer present at admission, fully healed by discharge — code?", back: "The stage 2 code, AS DOCUMENTED AT ADMISSION — healing during the stay doesn't erase the code." },
  { topic: "Two-Code Progression", front: "Pressure ulcer admitted at stage 2, progresses to stage 3 during the stay — how many codes?", back: "TWO codes: one for stage 2 (admission) and one for stage 3 (highest stage reached) — NOT the single \"highest only\" pattern used elsewhere in ICD-10-CM." },
  { topic: "Deep Tissue Damage", front: "Pressure-induced deep tissue damage — which code, and is it a severe stage 4?", back: "L89.––6, its own dedicated code — a distinct clinical entity, NOT simply a severe stage 4 ulcer." },
  { topic: "Non-Pressure Ulcers", front: "Do non-pressure chronic ulcers (L97/L98.4) follow the same healed/healing/progression rules as pressure ulcers?", back: "Yes — the rules mirror each other point for point: healed = no code, healing = code by severity, present-on-admission-but-healed = code the admission finding, progression = two codes." },
  { topic: "Non-Pressure Progression", front: "Non-pressure ulcer progresses to a higher severity level during the stay — how many codes?", back: "Two — same two-code progression rule as pressure ulcers, just for L97/L98.4 instead of L89." },
  { topic: "Non-Pressure Query Trigger", front: "Unclear whether a non-pressure ulcer is current/new vs. being treated as healing — what do you do?", back: "Query the provider — the identical query trigger used for pressure ulcers, just applied to a non-pressure ulcer." },
  { topic: "Biggest Trap", front: "The #1 trap across this chapter?", back: "Pressure/non-pressure ulcer stage or severity PROGRESSION during a single stay uses TWO codes (admission level + highest level) — the OPPOSITE of the one-code \"highest level only\" pattern used elsewhere in ICD-10-CM (like dementia or glaucoma)." },
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

export default function Icd10Chapter12FlashcardsPage() {
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
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 12 · FLASHCARDS</p>
        <h1 style={titleStyle}>5-Minute Commute Review</h1>
        <nav aria-label="ICD-10 navigation" style={navStyle}>
          <Link href="/icd10" style={navLinkStyle}>ICD-10 home</Link>
          <Link href="/icd10/chapter-12-guidelines-reviewer" style={navLinkStyle}>Full Reviewer</Link>
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
