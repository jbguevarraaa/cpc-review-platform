"use client";

import Link from "next/link";
import { useState } from "react";
import { HighlightToolbar } from "../../cpt/surgery/_digestive/highlighter";

type Card = { topic: string; front: string; back: string };

const cards: Card[] = [
  { topic: "HIV", front: "When can you code HIV as confirmed?", back: "When the provider's own diagnostic statement says the patient is HIV positive or has an HIV-related illness — no positive lab test result is required." },
  { topic: "HIV", front: "Patient admitted for an HIV-related reason — sequencing?", back: "B20 is principal, followed by codes for every HIV-related condition. Exception: HUS associated with HIV → D59.31 becomes principal instead, with B20 secondary." },
  { topic: "HIV", front: "Patient has ever had a B20-qualifying illness before — what now?", back: "B20 is coded on every future encounter, forever — even if the patient is currently asymptomatic. Never downgrade back to Z21 or R75." },
  { topic: "HIV", front: "HIV-positive, on antiretrovirals, but no documented illness — which code?", back: "Still Z21, not B20. Being on antiretroviral therapy doesn't by itself mean an illness has developed. Z79.899 can be added for the long-term drug therapy." },
  { topic: "Infectious Agents Elsewhere", front: "An infection code outside Chapter 1 doesn't name the organism — what do you do?", back: "Add B95 (strep/staph/enterococcus), B96 (other bacteria), or B97 (viral) — but only when an instructional note at that code actually calls for it." },
  { topic: "Antibiotic Resistance", front: "When do you add a Z16 resistance code?", back: "Only if the infection or organism code doesn't already capture the resistance itself — otherwise it's a duplicate." },
  { topic: "Sepsis", front: "Sepsis diagnosis, no organism specified — code?", back: "A41.9, Sepsis, unspecified organism." },
  { topic: "Sepsis", front: "When can you add R65.2– (severe sepsis)?", back: "Only when severe sepsis or an organ dysfunction actually tied to the sepsis is documented. It can never stand alone as a principal diagnosis." },
  { topic: "Sepsis", front: "Postprocedural infection progresses to septic shock — which code?", back: "T81.12– (postprocedural septic shock), not R65.21 — the postprocedural context changes the code family." },
  { topic: "Sepsis", front: "Severe sepsis: present on admission vs. developed during the stay?", back: "Present on admission + qualifies as principal diagnosis → infection is principal, R65.2– follows. Develops later → both become secondary diagnoses." },
  { topic: "MRSA", front: "A combination code already names the condition + MRSA — now what?", back: "Use just that one code. Don't add B95.62 or a Z16.11 resistance code on top — the combination code already says it all." },
  { topic: "MRSA", front: "MRSA colonization vs. active infection?", back: "Colonization (carrier, no illness) = Z22.322. It's a different concept from infection, and both can be coded together if the patient genuinely has both documented." },
  { topic: "Zika", front: "Provider documents \"possible Zika\" — which code?", back: "Not A92.5. Code the presenting symptoms instead, and add Z20.821 if exposure is specifically being tracked." },
  { topic: "COVID-19", front: "U07.1 vs. U09.9 — what's the difference?", back: "U07.1 = an active, current, confirmed infection. U09.9 = lingering effects after that infection has already resolved. Never use them for the same active episode." },
  { topic: "COVID-19", front: "Confirmed COVID-19 with pneumonia — codes?", back: "U07.1 first, then J12.82 (pneumonia due to COVID-19) as the manifestation code." },
  { topic: "COVID-19", front: "Asymptomatic positive COVID test, no provider diagnosis documented — what do you do?", back: "Query the provider before coding anything — false positives happen, and confirming the diagnosis is the provider's call, not the coder's." },
  { topic: "Biggest Trap", front: "What's the #1 trap across this whole chapter?", back: "Confusing \"suspected / probable / possible\" with \"confirmed.\" HIV, Zika, and COVID-19 all share the exact same rule: confirmed by the provider's statement alone is enough — but any uncertainty language blocks the disease-specific code entirely." },
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

export default function Icd10Chapter1FlashcardsPage() {
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
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 1 · FLASHCARDS</p>
        <h1 style={titleStyle}>5-Minute Commute Review</h1>
        <nav aria-label="ICD-10 navigation" style={navStyle}>
          <Link href="/icd10" style={navLinkStyle}>ICD-10 home</Link>
          <Link href="/icd10/chapter-1-guidelines-reviewer" style={navLinkStyle}>Full Reviewer</Link>
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
