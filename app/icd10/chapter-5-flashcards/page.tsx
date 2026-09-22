"use client";

import Link from "next/link";
import { useState } from "react";
import { HighlightToolbar } from "../../cpt/surgery/_digestive/highlighter";

type Card = { topic: string; front: string; back: string };

const cards: Card[] = [
  { topic: "Psychological Pain", front: "Pain exclusively from psychological factors — code, and paired with G89 or not?", back: "F45.41, NOT paired with a G89 code — an Excludes1 note under G89 blocks that pairing." },
  { topic: "Psychological Pain", front: "Physical pain PLUS a documented psychological component — which F45 code, and paired with G89 or not?", back: "F45.42, paired WITH a code from category G89 — the opposite pairing rule from F45.41." },
  { topic: "Remission", front: "Mild substance use disorder, in remission — which code family?", back: "The ABUSE-in-remission codes (mild severity maps to abuse-in-remission, not dependence-in-remission)." },
  { topic: "Remission", front: "Moderate or severe substance use disorder, in remission — which code family?", back: "The DEPENDENCE-in-remission codes." },
  { topic: "Remission", front: "Can a coder assign an \"in remission\" code just because there's no recent use documented?", back: "No — remission status requires the provider's own clinical judgment and documentation, not a coder's inference." },
  { topic: "Use/Abuse/Dependence", front: "Same substance, both use AND abuse documented — code which one?", back: "Abuse only." },
  { topic: "Use/Abuse/Dependence", front: "Same substance, both abuse AND dependence documented — code which one?", back: "Dependence only." },
  { topic: "Use/Abuse/Dependence", front: "Same substance, use AND abuse AND dependence all documented together — code which one?", back: "Dependence only — the strongest term always wins, no matter how many weaker terms are also present." },
  { topic: "Use/Abuse/Dependence", front: "Same substance, use AND dependence documented (abuse never mentioned) — code which one?", back: "Dependence only — abuse doesn't need to be mentioned for dependence to still outrank use." },
  { topic: "Unspecified Use", front: "When can an F1x.9- unspecified-use code be assigned?", back: "Only when based on provider documentation AND the use is linked to a documented chapter 5 disorder or medical condition (or otherwise meets the reportable-diagnosis definition) — not for a bare mention in a social history." },
  { topic: "Medical Conditions", front: "Alcoholic pancreatitis with alcohol dependence — correct code combination?", back: "K85.2 (alcohol-induced acute pancreatitis) PLUS a code from F10.2- — NOT a single F10.288 combination code." },
  { topic: "Blood Alcohol Level", front: "What two things does a Y90 code require?", back: "(1) The provider must document a qualifying F10 condition. (2) The blood alcohol level must be documented somewhere in the record — but NOT necessarily by the provider personally." },
  { topic: "Factitious Disorder", front: "Munchausen's syndrome (self-imposed) — which code?", back: "F68.1-, Factitious disorder imposed on self." },
  { topic: "Factitious Disorder", front: "Munchausen syndrome by proxy (MSBP) — which code, and on whose chart?", back: "F68.A, Factitious disorder imposed on another — assigned on the PERPETRATOR's chart, never the victim's." },
  { topic: "Factitious Disorder", front: "MSBP victim — which code, on whose chart?", back: "A code from category T74 (confirmed) or T76 (suspected) abuse/maltreatment — on the VICTIM's own chart, never F68.A." },
  { topic: "Dementia Severity", front: "Dementia severity not documented anywhere — default?", back: "Unspecified severity — never guess a severity level that wasn't actually documented." },
  { topic: "Dementia Severity", front: "Dementia progresses from mild to severe during the SAME inpatient stay — how many codes, at what level?", back: "One code, for the HIGHEST severity level reported at any point during that stay (severe) — not the admission level, and not two separate codes." },
  { topic: "Biggest Trap", front: "The #1 trap across this chapter?", back: "\"Which chart am I coding?\" — the factitious disorder self-vs-other split (F68.1- vs. F68.A + T74/T76) is the clearest example: two different people, two completely different codes for the same event." },
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

export default function Icd10Chapter5FlashcardsPage() {
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
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 5 · FLASHCARDS</p>
        <h1 style={titleStyle}>5-Minute Commute Review</h1>
        <nav aria-label="ICD-10 navigation" style={navStyle}>
          <Link href="/icd10" style={navLinkStyle}>ICD-10 home</Link>
          <Link href="/icd10/chapter-5-guidelines-reviewer" style={navLinkStyle}>Full Reviewer</Link>
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
