"use client";

import Link from "next/link";
import { useState } from "react";

type Card = { topic: string; front: string; back: string };

const cards: Card[] = [
  { topic: "Record Rules", front: "Chapter 16 codes on the maternal record — ever allowed?", back: "Never — mirrors the rule that Chapter 15 codes are never allowed on the newborn's record." },
  { topic: "Lifetime Use", front: "Do Chapter 16 codes expire after the 28-day perinatal period?", back: "No — they may be used throughout the patient's life as long as the condition is still present." },
  { topic: "Perinatal Period Definition", front: "How is the perinatal period defined for coding purposes?", back: "Before birth through the 28th day following birth." },
  { topic: "Birth Record — Z38", front: "How many times is a Z38 code assigned per newborn, and where?", back: "Once — at the time of birth, at the birth institution only. Never reassigned at a later transfer." },
  { topic: "Z38 — Maternal Record", front: "Is Z38 ever used on the mother's record?", back: "No — newborn record only." },
  { topic: "Sequencing", front: "Reason for the encounter IS the perinatal condition — sequencing?", back: "The Chapter 16 code is sequenced first, with any more-specific other-chapter code added after." },
  { topic: "Signs/Symptoms", front: "No definitive diagnosis established yet — what's coded?", back: "The signs/symptoms themselves." },
  { topic: "Birth-Process Default", front: "Condition could be birth-process OR community-acquired, source undocumented — default?", back: "Birth process — a Chapter 16 code is used." },
  { topic: "Community-Acquired — Excluded", front: "Condition specifically documented as community-acquired — Chapter 16 code?", back: "No — Chapter 16 codes should not be assigned once community-acquired is specifically documented." },
  { topic: "Clinically Significant — 6 Criteria", front: "Name the six criteria that make a newborn finding \"clinically significant.\"", back: "Clinical evaluation, therapeutic treatment, diagnostic procedures, extended hospital stay, increased nursing care/monitoring, OR implications for future health care needs — any ONE is sufficient." },
  { topic: "Future Health Needs — Newborn Only", front: "Can the \"future health care needs\" criterion be used for an adult patient?", back: "No — this specific criterion is explicitly for newborns/perinatal patients, not adults." },
  { topic: "Z05 — Nothing Found", front: "Healthy newborn evaluated for a suspected condition, nothing found after study — code?", back: "Z05 (observation/evaluation of newborn for suspected condition, ruled out)." },
  { topic: "Z05 — Findings Present", front: "Newborn has actual documented signs/symptoms of the suspected condition — is Z05 used?", back: "No — code the actual signs/symptoms instead. Z05 requires nothing being found." },
  { topic: "Z05 on Birth Record", front: "Z05 sequencing on the birth record specifically?", back: "Secondary code, following Z38 (which stays principal)." },
  { topic: "Z05 After Z38 No Longer Applies", front: "Can Z05 be principal on a LATER readmission/encounter?", back: "Yes — once the Z38 code no longer applies, Z05 may be principal for a healthy newborn/infant with no condition found." },
  { topic: "Prematurity Documentation", front: "Can a coder assign a prematurity code based on their own clinical impression?", back: "No — prematurity must be actually documented by the provider; a coder's impression isn't sufficient." },
  { topic: "P07 Sequencing", front: "Birth weight AND gestational age both documented — which P07 code comes first?", back: "Birth weight code first, then gestational age code." },
  { topic: "P07 Beyond Newborn Period", front: "Can P07 (low birth weight/prematurity) be used on a child or adult's chart?", back: "Yes — when that history is documented as still affecting the patient's CURRENT health status, not just background history." },
  { topic: "Bacterial Sepsis — Congenital Default", front: "Newborn sepsis, congenital vs. community-acquired not specified — default?", back: "Congenital — a P36 code is assigned." },
  { topic: "Bacterial Sepsis — Organism Coding", front: "P36 subcode does NOT include the organism — what's added?", back: "An additional code from category B96 (or B95 for Strep/Staph/Enterococcus) for the specific organism." },
  { topic: "Bacterial Sepsis — Organism Already Included", front: "P36 subcode already specifies the organism — add a separate B95/B96 code too?", back: "No — that would be redundant; only add the organism code when the P36 subcode doesn't already include it." },
  { topic: "Bacterial Sepsis — Severe", front: "Severe sepsis in a newborn — additional codes needed?", back: "R65.2- for severe sepsis, plus codes for any associated acute organ dysfunction, if applicable." },
  { topic: "Stillbirth — P95", front: "P95 (stillbirth) — used at every facility, or only some?", back: "Only institutions that maintain SEPARATE stillbirth records. No other code is used with P95, and never on the mother's record." },
  { topic: "COVID-19 — No Transmission Documented", front: "Newborn COVID-19 positive, transmission type not documented — codes?", back: "U07.1 plus codes for associated manifestations — no P35.8 without documented transmission route." },
  { topic: "COVID-19 — In-Utero/Birth-Process Transmission", front: "Newborn COVID-19, provider documents in-utero or birth-process transmission — codes?", back: "Both P35.8 (other congenital viral diseases) AND U07.1 together." },
  { topic: "COVID-19 — Birth Episode", front: "Newborn COVID-19 positive during the birth admission — does Z38 still apply as principal?", back: "Yes — the appropriate Z38 code is still assigned as principal diagnosis for the birth episode, regardless of COVID-19 status." },
  { topic: "Biggest Trap", front: "The #1 trap across this chapter?", back: "Chapter 15 (maternal) and Chapter 16 (newborn) codes NEVER cross onto each other's record — this mirror-image rule, plus the newborn-specific defaults (congenital sepsis, birth-process origin) that run OPPOSITE to typical adult assumptions, are the chapter's core traps." },
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

export default function Icd10Chapter16FlashcardsPage() {
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
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 16 · FLASHCARDS</p>
        <h1 style={titleStyle}>5-Minute Commute Review</h1>
        <nav aria-label="ICD-10 navigation" style={navStyle}>
          <Link href="/icd10" style={navLinkStyle}>ICD-10 home</Link>
          <Link href="/icd10/chapter-16-guidelines-reviewer" style={navLinkStyle}>Full Reviewer</Link>
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
