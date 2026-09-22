"use client";

import Link from "next/link";
import { useState } from "react";
import { HighlightToolbar } from "../../cpt/surgery/_digestive/highlighter";

type Card = { topic: string; front: string; back: string };

const cards: Card[] = [
  { topic: "COPD/Asthma Exacerbation", front: "What is an acute exacerbation, in this guideline's own terms?", back: "A worsening or decompensation of the chronic condition itself — NOT the same thing as a separate infection superimposed on the chronic condition." },
  { topic: "COPD/Asthma Exacerbation", front: "An infection TRIGGERS a COPD/asthma flare-up — does that change what's coded?", back: "No — it's still coded as an acute exacerbation of the chronic disease, even though an infection was the trigger." },
  { topic: "Resp. Failure — Principal", front: "When can acute respiratory failure (J96.0/J96.2) be the principal diagnosis?", back: "When it's established after study as chiefly responsible for the admission, AND no chapter-specific sequencing guideline (obstetrics, poisoning, HIV, newborn) overrides it." },
  { topic: "Resp. Failure — Chapter-Specific Override", front: "ARF is chiefly responsible for the admission, but the patient also has a documented obstetric complication with its own sequencing guideline — is ARF still principal?", back: "No — chapter-specific sequencing guidelines (obstetrics, poisoning, HIV, newborn) take precedence over the general ARF-as-principal rule whenever they apply." },
  { topic: "Resp. Failure — Secondary", front: "When is respiratory failure coded as a secondary diagnosis?", back: "When it develops after admission, or is present on admission but doesn't meet the definition of principal diagnosis." },
  { topic: "Resp. Failure — Equal Responsibility", front: "Respiratory failure + another acute condition, unclear if equally responsible for the admission — what's the next step?", back: "Query the provider for clarification — don't guess which condition is principal." },
  { topic: "Influenza — J09", front: "Provider's diagnostic statement confirms \"avian influenza,\" no positive lab test for it yet — which code?", back: "A code from J09 (certain identified influenza viruses) — the provider's own confirmed statement is sufficient; lab testing is not required." },
  { topic: "Influenza — J10", front: "Provider confirms \"H1N1 influenza\" by diagnostic statement, no specific lab test mentioned — which code?", back: "A code from J10 (other identified influenza virus) — a confirmed, specifically named non-avian/non-novel strain." },
  { topic: "Influenza — J11", front: "Provider documents \"possible avian influenza\" — which code?", back: "J11 (unidentified influenza virus) — \"possible\"/\"suspected\"/\"probable\" language rules out J09 even for avian/novel strains." },
  { topic: "VAP", front: "What must be true before J95.851 (VAP) can be assigned?", back: "The PROVIDER must specifically document the ventilator-pneumonia relationship — being on a ventilator with pneumonia is not enough on its own." },
  { topic: "VAP — Query Trigger", front: "A ventilated patient develops pneumonia, but the chart never states the ventilator caused or contributed to it — what do you do?", back: "Query the provider — don't assign J95.851 just because a ventilator and pneumonia coexist; the causal relationship must be documented." },
  { topic: "VAP", front: "What code is paired with J95.851, and what's explicitly NOT paired with it?", back: "Paired with an organism-identifying code (e.g., B96.5 for Pseudomonas). NOT paired with a J12–J18 pneumonia-type code." },
  { topic: "VAP", front: "Patient admitted with pneumonia (J12–J18), later documented with VAP during the same stay — principal diagnosis?", back: "The ADMISSION pneumonia code (J12–J18) stays principal; J95.851 is added as an additional diagnosis for the later-developing VAP." },
  { topic: "Vaping", front: "Lung injury specifically due to vaping — how many codes?", back: "Just one — U07.0 alone, with no additional lung-injury code layered on top." },
  { topic: "Vaping", front: "Vaping-related cough vs. vaping-related diarrhea — coded separately, or not?", back: "Cough (a respiratory symptom) is NOT separately coded once the vaping diagnosis is established. Diarrhea (a GI symptom) IS still separately coded." },
  { topic: "Biggest Trap", front: "The #1 trap across this chapter?", back: "Confirmed vs. unconfirmed documentation language (\"confirmed\" vs. \"suspected/possible/probable\") completely changes the influenza code family — and similarly, provider-documented VAP vs. mere ventilator+pneumonia coexistence completely changes whether J95.851 applies." },
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

export default function Icd10Chapter10FlashcardsPage() {
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
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 10 · FLASHCARDS</p>
        <h1 style={titleStyle}>5-Minute Commute Review</h1>
        <nav aria-label="ICD-10 navigation" style={navStyle}>
          <Link href="/icd10" style={navLinkStyle}>ICD-10 home</Link>
          <Link href="/icd10/chapter-10-guidelines-reviewer" style={navLinkStyle}>Full Reviewer</Link>
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
