"use client";

import Link from "next/link";
import { useState } from "react";
import { HighlightToolbar } from "../../cpt/surgery/_digestive/highlighter";

type Card = { topic: string; front: string; back: string };

const cards: Card[] = [
  { topic: "Otitis Externa", front: "Infective vs. noninfective otitis externa — what's the first fork?", back: "Infective (bacterial, classic \"swimmer's ear\") vs. noninfective (actinic, chemical, contact, eczematoid, reactive) — determine this before picking a specific subtype." },
  { topic: "Otitis Externa", front: "Ear canal reaction to a specific contact allergen/irritant, no infection — code?", back: "H60.53, contact otitis externa." },
  { topic: "Otitis Media", front: "Suppurative vs. nonsuppurative otitis media — what's the difference?", back: "Suppurative (H66) = pus-forming. Nonsuppurative (H65) = no pus, e.g., effusion." },
  { topic: "Otitis Media", front: "Fluid remains behind the eardrum AFTER an acute infection resolves — coded as ongoing infection, or something else?", back: "Otitis media WITH EFFUSION (nonsuppurative, H65) — not ongoing acute suppurative otitis media." },
  { topic: "Otitis Media", front: "Persistent, pus-draining middle ear infection lasting months, in the atticoantral region — which code family?", back: "H66.2-, chronic atticoantral suppurative otitis media — the \"persistent/months-long\" detail shifts this from acute to chronic." },
  { topic: "Cholesteatoma", front: "Cholesteatoma of the EXTERNAL ear canal — which category, H60 or H71?", back: "H60 (specifically H60.4) — H71 is reserved exclusively for middle-ear cholesteatoma." },
  { topic: "Cholesteatoma", front: "H71 subcategories are organized by what single factor?", back: "Location within the middle ear: attic (H71.0), tympanum (H71.1), mastoid (H71.2), or diffuse (H71.3)." },
  { topic: "Cholesteatoma", front: "Cholesteatoma documented in the tympanum specifically (not attic, mastoid, or diffuse) — code?", back: "H71.1, cholesteatoma of tympanum." },
  { topic: "Otosclerosis", front: "Otosclerosis mainly affects which tiny bone in the middle ear?", back: "The stapes — abnormal bone growth there (and extending to the otic capsule) causes a sensory-type hearing loss." },
  { topic: "Meniere's Disease", front: "H81.0 subcategory is organized entirely by what factor?", back: "Laterality — right ear (.01), left ear (.02), bilateral (.03), or unspecified ear (.09)." },
  { topic: "Vestibular Neuritis", front: "Does vestibular neuritis cause hearing loss?", back: "No — this is a key distinguishing fact; vestibular neuritis specifically does NOT cause hearing loss, unlike several other ear conditions." },
  { topic: "Vestibular Disorders", front: "Peripheral vertigo (vestibular neuritis, H81.2) vs. central vertigo (H81.4) — what's the distinguishing factor?", back: "Whether the cause is a peripheral inner-ear nerve problem (H81.2) or a central, brain-related cause (H81.4)." },
  { topic: "Hearing Loss", front: "H90 hearing loss codes are split by what factor?", back: "Mechanism — conductive (outer/middle ear problem), sensorineural (inner ear/nerve problem), or mixed — each further split by laterality." },
  { topic: "Hearing Loss", front: "Hearing loss from otosclerosis blocking sound transmission, inner ear/nerve intact — which mechanism family?", back: "Conductive hearing loss (H90.0–H90.2)." },
  { topic: "Hearing Loss", front: "Hearing loss from BOTH a middle-ear conduction problem AND a coexisting inner-ear/nerve problem at once — which mechanism family?", back: "Mixed conductive and sensorineural hearing loss (H90.6–H90.8) — its own distinct mechanism category, not two separate codes." },
  { topic: "Hearing Loss", front: "Sudden hearing loss with no identified cause — which code?", back: "H91.2, sudden idiopathic hearing loss — distinct from the mechanism-based H90 codes, which require a known cause." },
  { topic: "Hearing Loss", front: "H91.3, deafmutism (deaf nonspeaking) — what does it describe?", back: "The combined condition of deafness with an inability to speak, whether acquired or congenital — distinct from simple hearing loss alone." },
  { topic: "Biggest Trap", front: "The #1 trap across this chapter?", back: "Assuming a term like \"cholesteatoma\" always maps to one category — location (external canal vs. middle ear) and clinical detail (mechanism, cause, laterality) are what actually decide the code family in nearly every topic here." },
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

export default function Icd10Chapter8FlashcardsPage() {
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
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 8 · FLASHCARDS</p>
        <h1 style={titleStyle}>5-Minute Commute Review</h1>
        <nav aria-label="ICD-10 navigation" style={navStyle}>
          <Link href="/icd10" style={navLinkStyle}>ICD-10 home</Link>
          <Link href="/icd10/chapter-8-guidelines-reviewer" style={navLinkStyle}>Full Reviewer</Link>
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
