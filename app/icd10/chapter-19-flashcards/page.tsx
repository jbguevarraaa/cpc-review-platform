"use client";

import Link from "next/link";
import { useState } from "react";

type Card = { topic: string; front: string; back: string };

const cards: Card[] = [
  { topic: "7th Characters", front: "The three common 7th characters in Chapter 19?", back: "A = initial encounter (active treatment), D = subsequent encounter (routine care in healing/recovery), S = sequela. Fractures have additional values." },
  { topic: "7th Characters", front: "Does a new provider change the 7th character?", back: "No. The 7th character follows whether the patient is in active treatment, not whether the provider is new." },
  { topic: "7th Characters", front: "Aftercare of an injury or poisoning — which code?", back: "The acute injury code with the subsequent-encounter 7th character (D). Aftercare Z codes aren't used for injuries or poisonings." },
  { topic: "Sequela", front: "Sequela coding: how many codes and in what order?", back: "Two — the sequela (e.g., the scar) first, then the injury code with 7th character S. The S goes only on the injury code." },
  { topic: "Injuries", front: "Multiple injuries — how coded and sequenced?", back: "A separate code for each injury unless a combination code exists. The most serious injury (per the provider and the focus of treatment) goes first." },
  { topic: "Injuries", front: "When is T07 used inpatient?", back: "Only when information for a more specific code isn't available." },
  { topic: "Injuries", front: "Traumatic injury codes for a normal healing surgical wound?", back: "No. S00–T14.9 aren't used for normal, healing surgical wounds or their complications." },
  { topic: "Injuries", front: "Superficial injury at the same site as a more severe injury?", back: "Not coded." },
  { topic: "Injuries", front: "Injury caused during a medical intervention?", back: "Not a Chapter 19 injury code — assign the appropriate complication code(s)." },
  { topic: "Injuries", front: "Primary injury with MINOR nerve/vessel damage — sequencing?", back: "Primary injury first, then additional codes for the nerve/spinal cord (e.g., S04) and/or blood vessel (e.g., S15) injury. If the primary injury IS to the nerves or vessels, it goes first." },
  { topic: "Fractures", front: "Fracture doesn't say open or closed / displaced or nondisplaced?", back: "Closed. Displaced." },
  { topic: "Fractures", front: "Multiple fractures — sequencing?", back: "By the severity of the fracture." },
  { topic: "Fractures", front: "Physeal fracture — how many codes?", back: "One — the code identifying the physeal fracture type. No separate bone code." },
  { topic: "Fractures", front: "Open fracture, Gustilo type not stated?", back: "Assign the 7th character for open fracture type I or II (B, E, H, M, Q). Gustilo applies to the forearm, femur, and lower leg (including ankle)." },
  { topic: "Fractures", front: "Which 7th characters go with nonunion and malunion?", back: "Nonunion = K, M, N. Malunion = P, Q, R. Initial-encounter characters (A, B, C) apply at each encounter of active treatment, including delayed presentation." },
  { topic: "Fractures", front: "Known osteoporosis + a fracture — which code?", back: "M80 (not a traumatic fracture code), even after a minor fall. Aftercare Z codes aren't used for traumatic fractures." },
  { topic: "Burns", front: "Burn vs. corrosion?", back: "Burn = thermal (except sunburn), electrical, or radiation. Corrosion = chemical. The guidelines are the same for both." },
  { topic: "Burns", front: "How are current burns (T20–T25) classified? What about T26–T28?", back: "T20–T25: depth (first/second/third degree), extent, and agent. T26–T28 (eye and internal organs): by site, not degree." },
  { topic: "Burns", front: "Multiple burns — which is sequenced first?", back: "The highest degree of burn. For internal + external burns, or burns + smoke inhalation/respiratory failure, the circumstances of admission govern." },
  { topic: "Burns", front: "Same site, same side, different degrees?", back: "One code at the highest degree (e.g., second + third degree right thigh = the third-degree code)." },
  { topic: "Burns", front: "T30 and 'multiple sites' — when?", back: "Rarely. Assign separate codes for each burn site; 'multiple sites' only when the record doesn't specify the sites." },
  { topic: "Burns", front: "Non-healing burn / necrosis of burned skin?", back: "Coded as an acute (non-healed) burn." },
  { topic: "Burns", front: "T31/T32 — when used?", back: "For acute burns when the site isn't specified or extra data is needed (e.g., third-degree burn of 20% or more). Never for sequelae. Rule of nines: head/neck 9, each arm 9, each leg 18, anterior trunk 18, posterior trunk 18, genitalia 1." },
  { topic: "Drug Reactions", front: "Adverse effect vs. poisoning vs. underdosing vs. toxic effect?", back: "Adverse effect = correctly prescribed and administered. Poisoning = improper use. Underdosing = taking less than prescribed. Toxic effect = harmful substance (T51–T65)." },
  { topic: "Drug Reactions", front: "Which 5th/6th characters mark adverse effect and underdosing?", back: "Adverse effect = 5. Underdosing = 6. For poisoning, the character carries intent (accidental, self-harm, assault, undetermined)." },
  { topic: "Drug Reactions", front: "Adverse effect — code order?", back: "The nature of the adverse effect first, then the T36–T50 adverse-effect code (character 5)." },
  { topic: "Drug Reactions", front: "Poisoning — code order?", back: "The poisoning code (T36–T50) first, then ALL manifestations, then abuse/dependence if present." },
  { topic: "Drug Reactions", front: "Poisoning intent unknown?", back: "Accidental. Undetermined only when the record states intent cannot be determined." },
  { topic: "Drug Reactions", front: "Which four situations are classic poisonings?", back: "Prescribing/administration error; intentional overdose; a nonprescribed drug taken with a correctly prescribed one (interaction); drug + alcohol interaction." },
  { topic: "Drug Reactions", front: "Underdosing — can it be first-listed?", back: "Never. Code the condition first; add the underdosing code and a noncompliance code (Z91.12-, Z91.13-, Z91.14-, Z91.A4-) or Y63.6–Y63.9 if known. Stopping a medication on the patient's own initiative counts." },
  { topic: "Drug Reactions", front: "Toxic effect — code order, and is an external cause code needed?", back: "The toxic effect code (T51–T65) first, then manifestations. The intent is built in, so no external cause code is needed." },
  { topic: "Abuse", front: "Abuse sequencing, and confirmed vs. suspected?", back: "T74 (confirmed) or T76 (suspected) first, then mental health/injury codes. Stated abuse = confirmed. Confirmed cases add an assault code (X92–Y09) and Y07 if the perpetrator is known. Suspected cases get neither." },
  { topic: "Abuse", front: "Suspected abuse is ruled out?", back: "Use a Z04 observation code (Z04.71/Z04.72 physical abuse, Z04.41/Z04.42 rape, Z04.81/Z04.82 sexual or labor exploitation) — not T76." },
  { topic: "Complications", front: "Device pain (e.g., painful hip prosthesis)?", back: "The Chapter 19 T code for the device complication, plus a G89 code (G89.18 acute or G89.28 chronic)." },
  { topic: "Complications", front: "Where do intraoperative/postprocedural complication codes usually come from?", back: "The body system chapters — sequenced first, then a code for the specific complication if applicable — unless the complication is specifically indexed to a Chapter 19 T code." },
  { topic: "Transplants", front: "When is a T86 transplant complication code assigned?", back: "Only when the complication affects the FUNCTION of the transplanted organ. Two codes: T86 plus a secondary code identifying the complication." },
  { topic: "Transplants", front: "Kidney transplant patient with CKD — T86.1-?", back: "Not unless a complication such as failure or rejection is documented. If unclear, query the provider." },
  { topic: "Biggest Trap", front: "The #1 trap across Chapter 19?", back: "Using aftercare Z codes for injuries (use the injury code + D), and mixing up the four drug-reaction types — correct use = adverse effect, improper use = poisoning, taking less = underdosing." },
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

export default function Icd10Chapter19FlashcardsPage() {
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
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 19 · FLASHCARDS</p>
        <h1 style={titleStyle}>5-Minute Commute Review</h1>
        <nav aria-label="ICD-10 navigation" style={navStyle}>
          <Link href="/icd10" style={navLinkStyle}>ICD-10 home</Link>
          <Link href="/icd10/chapter-19-guidelines-reviewer" style={navLinkStyle}>Reviewer Part 1</Link>
          <Link href="/icd10/chapter-19-guidelines-reviewer-part-2" style={navLinkStyle}>Part 2</Link>
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
