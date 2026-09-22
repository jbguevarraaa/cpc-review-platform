"use client";

import Link from "next/link";
import { useState } from "react";
import { HighlightToolbar } from "../../cpt/surgery/_digestive/highlighter";

type Card = { topic: string; front: string; back: string };

const cards: Card[] = [
  { topic: "GERD", front: "GERD symptoms alone, no documented esophagitis — code?", back: "K21.9, GERD without esophagitis." },
  { topic: "GERD", front: "GERD plus a documented inflammatory finding (e.g., erosive changes on endoscopy) — code?", back: "K21.0, GERD with esophagitis." },
  { topic: "Peptic Ulcer Disease", front: "What three facts determine a peptic ulcer subcode?", back: "Site (gastric K25 / duodenal K26 / unspecified K27 / gastrojejunal K28), acuity (acute vs. chronic), and complication (hemorrhage/perforation/both/neither)." },
  { topic: "Peptic Ulcer Disease", front: "Chronic duodenal ulcer with BOTH hemorrhage and perforation — one code or two?", back: "One code — a distinct K26 subcode exists specifically for both complications together." },
  { topic: "Acute Appendicitis", front: "Perforated appendix with peritonitis CONTAINED near the appendix (with abscess) — localized or generalized?", back: "Localized peritonitis — distinct from generalized, which requires infection spread throughout the abdomen." },
  { topic: "Acute Appendicitis", front: "Perforated appendix with infection spread throughout the entire abdominal cavity — localized or generalized?", back: "Generalized peritonitis — the more severe, higher-acuity finding." },
  { topic: "Diverticular Disease", front: "\"Diverticulosis\" vs. \"diverticulitis\" — what's the difference?", back: "Diverticulosis = pouches present, no inflammation. Diverticulitis = pouches actively inflamed/infected. Not interchangeable terms." },
  { topic: "Diverticular Disease", front: "Diverticulitis of the colon WITH active bleeding — does the code capture both facts?", back: "Yes — a specific subcode exists for diverticulitis (inflamed) WITH bleeding, distinct from diverticulosis or diverticulitis without bleeding." },
  { topic: "IBD", front: "Crohn's disease vs. ulcerative colitis — same category or different?", back: "Different — Crohn's is K50, ulcerative colitis is K51. Clinically similar (both IBD) but never interchangeable categories." },
  { topic: "IBD", front: "Crohn's disease codes (K50) are organized by what factor?", back: "Site — small intestine, large intestine, both, or unspecified, since Crohn's can affect any part of the GI tract." },
  { topic: "Gallbladder Disease", front: "Gallstones with NO inflammation documented — K80 or K81?", back: "K80 (cholelithiasis) without cholecystitis." },
  { topic: "Gallbladder Disease", front: "Gallstones AND cholecystitis documented together — K80, K81, or both?", back: "K80 alone, with the cholecystitis specified — K81 is reserved for cholecystitis WITHOUT stones, not used alongside K80." },
  { topic: "Gallbladder Disease", front: "Cholecystitis documented with imaging specifically ruling OUT gallstones — K80 or K81?", back: "K81, cholecystitis without stones — K80 requires stones to be present." },
  { topic: "Alcoholic Liver Disease", front: "K70's five-stage severity ladder, in order?", back: "Fatty liver (K70.0) → hepatitis (K70.1-) → fibrosis/sclerosis (K70.2) → cirrhosis (K70.3-) → hepatic failure (K70.4-)." },
  { topic: "Alcoholic Liver Disease", front: "Alcoholic cirrhosis WITH ascites — does the ascites detail change the subcode?", back: "Yes — it moves to the more specific \"with ascites\" subcode (K70.31), rather than the plain \"without ascites\" subcode (K70.30)." },
  { topic: "Acute Pancreatitis", front: "K85 acute pancreatitis is organized FIRST by what factor?", back: "Cause — idiopathic (K85.0-), biliary/gallstones (K85.1-), alcohol-induced (K85.2-), or drug-induced (K85.3-)." },
  { topic: "Acute Pancreatitis", front: "Drug-induced acute pancreatitis — does the base K85.3- code stand alone?", back: "No — it requires an additional adverse-effect code identifying the specific causative drug, same pattern as other drug-induced conditions." },
  { topic: "Biggest Trap", front: "The #1 trap across this chapter?", back: "Assuming one clinical finding always maps to one code family — GERD, PUD, appendicitis, diverticular disease, IBD, gallbladder disease, liver disease, and pancreatitis all require reading for ONE specific distinguishing detail (esophagitis, complication, peritonitis spread, inflammation, exact disease, stones-vs-inflammation, ascites, or cause) before the subcode is settled." },
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

export default function Icd10Chapter11FlashcardsPage() {
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
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 11 · FLASHCARDS</p>
        <h1 style={titleStyle}>5-Minute Commute Review</h1>
        <nav aria-label="ICD-10 navigation" style={navStyle}>
          <Link href="/icd10" style={navLinkStyle}>ICD-10 home</Link>
          <Link href="/icd10/chapter-11-guidelines-reviewer" style={navLinkStyle}>Full Reviewer</Link>
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
