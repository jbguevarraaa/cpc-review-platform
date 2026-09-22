"use client";

import Link from "next/link";
import { useState } from "react";
import { HighlightToolbar } from "../../cpt/surgery/_digestive/highlighter";

type Card = { topic: string; front: string; back: string };

const cards: Card[] = [
  { topic: "Scope", front: "What triggers a Chapter 17 (Q00–Q99) code?", back: "A malformation, deformation, or chromosomal abnormality that is DOCUMENTED by the provider." },
  { topic: "Scope", front: "Can a Chapter 17 code be first-listed?", back: "Yes. It may be the principal/first-listed diagnosis or a secondary diagnosis — sequencing follows the reason for the encounter." },
  { topic: "Scope", front: "Name the eleven blocks of Chapter 17.", back: "Q00–Q07 nervous system · Q10–Q18 eye, ear, face, neck · Q20–Q28 circulatory · Q30–Q34 respiratory · Q35–Q37 cleft lip and palate · Q38–Q45 other digestive · Q50–Q56 genital · Q60–Q64 urinary · Q65–Q79 musculoskeletal · Q80–Q89 other malformations · Q90–Q99 chromosomal abnormalities NEC." },
  { topic: "Sequencing", front: "Infant admitted for ASD repair, Down syndrome also documented — sequencing?", back: "The septal defect (reason for admission) first-listed; Down syndrome secondary. Both are Chapter 17 codes." },
  { topic: "No Unique Code", front: "The anomaly has no unique code (lands in an 'other specified' or NEC code). What else is coded?", back: "Additional code(s) for any manifestations that are present." },
  { topic: "No Unique Code", front: "Which two general codes are examples of 'no unique code' landing spots?", back: "Q87.89 (other specified congenital malformation syndromes, NEC) and Q89.7 (multiple congenital malformations, NEC)." },
  { topic: "Inherent Manifestations", front: "The code SPECIFICALLY identifies the anomaly — are its manifestations coded?", back: "Manifestations that are an inherent component are NOT coded separately. Manifestations that are not inherent ARE coded additionally." },
  { topic: "Inherent Manifestations", front: "Spina bifida with hydrocephalus — one code or two?", back: "One. Hydrocephalus is built into the combination codes Q05.0–Q05.4, so a separate hydrocephalus code is redundant." },
  { topic: "Inherent Manifestations", front: "Spina bifida with paraplegia — is paraplegia coded?", back: "Yes. The Q05 category says to use an additional code for any associated paraplegia (G82.2-)." },
  { topic: "Inherent Manifestations", front: "Down syndrome plus a septal defect?", back: "Code both. The Down syndrome code doesn't describe a septal defect, so it is a separate malformation." },
  { topic: "Q05 Excludes", front: "Which conditions does Q05 (spina bifida) exclude?", back: "Arnold-Chiari syndrome type II (Q07.0-) and spina bifida occulta (Q76.0)." },
  { topic: "Cleft Lip & Palate", front: "Cleft lip AND cleft palate together?", back: "Q37 (cleft palate with cleft lip). Q35 (cleft palate) and Q36 (cleft lip) each exclude the combination." },
  { topic: "Personal History", front: "A congenital malformation has been CORRECTED — which code?", back: "A personal history code (category Z87.7-) instead of the Q code. The Index lists a corrected heart malformation under Z87.74." },
  { topic: "Personal History", front: "A congenital malformation is still present and uncorrected in an adult?", back: "The Chapter 17 Q code. These codes may be used throughout life; the history code is only for corrected malformations." },
  { topic: "Lifetime Use", front: "Do Chapter 17 codes expire at some age?", back: "No. They may be used throughout the life of the patient." },
  { topic: "Diagnosed Later", front: "A congenital condition is first diagnosed in an adult — code it?", back: "Yes. It may not be identified until later in life; whenever the provider diagnoses it, assign the Chapter 17 code (e.g., bicuspid aortic valve = Q23.81)." },
  { topic: "Birth Admission", front: "Sequencing on the birth admission for a newborn with a congenital anomaly?", back: "The Z38 code (liveborn infants, by place of birth and type of delivery) is principal; the Q00–Q99 anomaly codes follow." },
  { topic: "Birth Admission", front: "Newborn's heart defect is life-threatening — does it go first on the birth record?", back: "No. Z38 stays principal for the birth admission regardless of severity; the Q code follows it." },
  { topic: "Birth Admission", front: "Z38.00 vs. Z38.01?", back: "Z38.00 = single liveborn infant delivered vaginally (born in hospital). Z38.01 = delivered by cesarean." },
  { topic: "Chapter 16 vs. 17", front: "How do Chapter 16 and Chapter 17 relate on a newborn's birth record?", back: "Z38 is principal on the birth admission. Chapter 17 (Q) codes report congenital malformations; Chapter 16 (P) codes report conditions originating in the perinatal period. Both follow Z38." },
  { topic: "Biggest Trap", front: "The #1 trap in Chapter 17?", back: "Coding a Q code for a CORRECTED malformation (use Z87.7- history), or coding an inherent manifestation separately when a specific code already includes it." },
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

export default function Icd10Chapter17FlashcardsPage() {
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
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 17 · FLASHCARDS</p>
        <h1 style={titleStyle}>5-Minute Commute Review</h1>
        <nav aria-label="ICD-10 navigation" style={navStyle}>
          <Link href="/icd10" style={navLinkStyle}>ICD-10 home</Link>
          <Link href="/icd10/chapter-17-guidelines-reviewer" style={navLinkStyle}>Full Reviewer</Link>
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
