"use client";

import Link from "next/link";
import { useState } from "react";
import { HighlightToolbar } from "../../cpt/surgery/_digestive/highlighter";

type Card = { topic: string; front: string; back: string };

const cards: Card[] = [
  { topic: "Hypertension + Heart", front: "Hypertension + heart failure (I50.-) or I51.4/I51.89/I51.9 — how many codes?", back: "Two: I11 (hypertensive heart disease) PLUS the additional code for the specific heart condition." },
  { topic: "Hypertension + Heart", front: "Hypertension + I51.5 (myocardial degeneration) or I51.7 (cardiomegaly) — how many codes?", back: "One: I11 alone. No additional heart-condition code needed — these two are fully absorbed." },
  { topic: "Hypertension + Kidney", front: "When does I13.- (hypertensive heart AND chronic kidney disease) apply?", back: "When hypertension, heart disease, AND CKD are all present together. Once I13 applies, never also use I11 or I12." },
  { topic: "Hypertension + Kidney", front: "Hypertensive cerebrovascular disease sequencing?", back: "The cerebrovascular condition (I60-I69) first, then the hypertension code." },
  { topic: "Transient HTN", front: "Default code for transient/elevated BP with no established hypertension diagnosis?", back: "R03.0, Elevated blood pressure reading without diagnosis of hypertension." },
  { topic: "Transient HTN", front: "Transient hypertension of pregnancy, no significant proteinuria — which code family?", back: "O13.- (gestational hypertension), not R03.0. Pregnancy overrides the general default." },
  { topic: "Controlled/Uncontrolled", front: "Is there a special code for \"uncontrolled hypertension\"?", back: "No — controlled and uncontrolled are just documentation descriptors. Code the appropriate I10-I15 category either way." },
  { topic: "Pulmonary HTN", front: "Which code family does pulmonary hypertension belong to?", back: "I27 (other pulmonary heart diseases) — NOT the systemic I10-I16 family, despite the shared name." },
  { topic: "Resistant HTN", front: "I1A.0 (resistant hypertension) — standalone or add-on?", back: "Always an add-on. Code the specific existing hypertension type first, then I1A.0 second." },
  { topic: "CAD + Angina", front: "Atherosclerotic heart disease with angina, no other cause — how many codes?", back: "One: I25.11- (or I25.7 for bypass graft). The combination code already includes the angina." },
  { topic: "CAD + Angina", front: "CAD patient admitted for acute STEMI — sequencing?", back: "The STEMI (I21.-) is sequenced first, ahead of the coronary artery disease code." },
  { topic: "Postprocedural CVA", front: "What's required to code an intraoperative/postprocedural CVA?", back: "Documentation must clearly establish a cause-and-effect relationship between the procedure and the CVA. Timing alone is never enough." },
  { topic: "Sequelae (I69)", front: "Dominant/nondominant defaults when side is documented but dominance isn't?", back: "Ambidextrous → dominant. Left side affected → nondominant. Right side affected → dominant." },
  { topic: "Sequelae (I69)", front: "Can an I69 sequela code be reported with an active I60-I67 code?", back: "Yes — when the patient has both a current cerebrovascular event and deficits from an old one." },
  { topic: "AMI — STEMI/NSTEMI", front: "STEMI converts to NSTEMI after thrombolytic therapy — which code?", back: "Still coded as STEMI. The original presentation wins, not the post-treatment picture." },
  { topic: "AMI — STEMI/NSTEMI", front: "Nontransmural/subendocardial AMI, but a site IS documented — coded how?", back: "Still coded as subendocardial. The site detail doesn't push it into a different category." },
  { topic: "AMI — Subsequent", front: "Category I22 (subsequent MI) — standalone or paired?", back: "Always paired with a category I21 code, never alone. Only for a NEW type 1 or unspecified AMI within 4 weeks of the first." },
  { topic: "AMI — Type 2", front: "Type 2 MI (demand ischemia) — which code?", back: "I21.A1, with the underlying cause coded first if known. Never I24.89, even if documented as STEMI/NSTEMI." },
  { topic: "AMI — Other Types", front: "Types 3, 4a, 4b, 4c, and 5 AMI — which code?", back: "All grouped into I21.A9 (other myocardial infarction type)." },
  { topic: "AMI — Subsequent Type 2", front: "Subsequent type 2 MI — does it ever get a category I22 code?", back: "No — never. A subsequent type 2 MI gets I21.A1 only. Category I22 is reserved for type 1/unspecified only." },
  { topic: "Biggest Trap", front: "What's the #1 trap across this whole chapter?", back: "Assuming hypertension needs explicit provider linkage to heart/kidney disease (it's presumed by default) — and assuming type 2 MI ever uses type 1 codes (I21.0-I21.4) or category I22 (it never does)." },
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

export default function Icd10Chapter9FlashcardsPage() {
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
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 9 · FLASHCARDS</p>
        <h1 style={titleStyle}>5-Minute Commute Review</h1>
        <nav aria-label="ICD-10 navigation" style={navStyle}>
          <Link href="/icd10" style={navLinkStyle}>ICD-10 home</Link>
          <Link href="/icd10/chapter-9-coding-approach" style={navLinkStyle}>How to Approach</Link>
          <Link href="/icd10/chapter-9-guidelines-reviewer" style={navLinkStyle}>Full Reviewer</Link>
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
