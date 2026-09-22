"use client";

import Link from "next/link";
import { useState } from "react";
import { HighlightToolbar } from "../../cpt/surgery/_digestive/highlighter";

type Card = { topic: string; front: string; back: string };

const cards: Card[] = [
  { topic: "Sequencing Priority", front: "Chapter 15 codes — priority over codes from other chapters?", back: "Yes — Chapter 15 codes have sequencing priority; other-chapter codes may be added to further specify, but Chapter 15 leads." },
  { topic: "Incidental Pregnancy", front: "Provider documents a condition as NOT affecting the pregnancy — code?", back: "Z33.1 (Pregnant state, incidental) in place of any Chapter 15 code — but only when the provider explicitly documents this." },
  { topic: "Maternal-Only Rule", front: "Can Chapter 15 codes ever appear on a newborn's own record?", back: "No — Chapter 15 codes are maternal-record-only, never the newborn's." },
  { topic: "Trimester Assignment", front: "Can documented WEEKS of gestation (instead of the word \"trimester\") be used to assign the trimester character?", back: "Yes — provider documentation of trimester OR number of weeks can both be used." },
  { topic: "Multi-Trimester Admission", front: "Admission starts in trimester 2, discharge is in trimester 3 — which trimester is coded for the antepartum complication?", back: "Trimester 2 — based on when the complication DEVELOPED, not the discharge trimester." },
  { topic: "Unspecified Trimester", front: "How often should the \"unspecified trimester\" code be used?", back: "Rarely — only when documentation is genuinely insufficient and clarification isn't obtainable." },
  { topic: "7th Character — Fetus ID", front: "What three situations all get 7th character \"0\"?", back: "(1) Single gestations, (2) documentation insufficient to determine which fetus and clarification not possible, (3) not clinically possible to determine which fetus." },
  { topic: "Completed Weeks", front: "Gestation documented at 39 weeks, 6 days — which week is coded?", back: "39 weeks — \"completed\" means full weeks only; the patient hasn't reached 40 completed weeks yet." },
  { topic: "Routine Prenatal, No Risk", front: "Routine prenatal visit, no complications, no risk factors — first-listed code?", back: "A code from category Z34 — never used together with Chapter 15 codes." },
  { topic: "High-Risk Prenatal Visit", front: "Routine prenatal visit for a documented HIGH-RISK pregnancy — first-listed code?", back: "A code from category O09 (not Z34) — secondary Chapter 15 codes may be added if appropriate." },
  { topic: "High-Risk Labor Complication", front: "High-risk pregnancy patient develops a complication DURING LABOR — coded with O09?", back: "No — O09 is prenatal-period-only. Labor/delivery complications use the applicable Chapter 15 complication code instead." },
  { topic: "No Delivery Occurs", front: "Episode with no delivery, multiple complications treated/monitored — sequencing rule?", back: "Any of the complication codes may be sequenced first." },
  { topic: "Delivery Occurs", front: "Patient admitted and delivers during that admission — what's the principal diagnosis?", back: "The condition that PROMPTED THE ADMISSION (or, if multiple, the one most related to delivery) — delivery complications are additional diagnoses." },
  { topic: "Cesarean Delivery", front: "Patient admitted with a condition that results in a cesarean — principal diagnosis?", back: "That condition itself — UNLESS the admission reason was unrelated to it, in which case the actual admission reason is principal instead." },
  { topic: "Outcome of Delivery", front: "When is a Z37 code required on the maternal record?", back: "On EVERY maternal record when a delivery has occurred — never on subsequent records or the newborn's record." },
  { topic: "Pre-Existing Hypertension", front: "O10 code includes hypertensive heart disease or CKD — is a second code needed?", back: "Yes — a secondary code from the appropriate hypertension category is required to specify the heart failure/CKD detail." },
  { topic: "Fetal Conditions (O35/O36)", front: "Does a fetal condition EXISTING alone justify an O35/O36 code on the mother's record?", back: "No — the fetal condition must actually modify the mother's management (studies, observation, special care, termination) to qualify." },
  { topic: "In Utero Surgery", front: "Fetal surgery performed in utero — coded from Chapter 16 (perinatal) on the mother's record?", back: "No — never. It's coded as an obstetric encounter: an O35 code plus the procedure code, on the MOTHER's record." },
  { topic: "HIV — Symptomatic", front: "Pregnant patient admitted for an active, symptomatic HIV-related illness — code sequence?", back: "O98.7– as principal, followed by the specific HIV-related illness code(s)." },
  { topic: "HIV — Asymptomatic", front: "Pregnant patient with asymptomatic HIV status — codes?", back: "O98.7– PLUS Z21 (asymptomatic HIV infection status), together." },
  { topic: "Pre-Existing Diabetes", front: "Pregnant patient with diabetes diagnosed BEFORE pregnancy — code sequence?", back: "An O24 code first, followed by the appropriate Chapter 4 diabetes code (E08–E13)." },
  { topic: "Gestational Diabetes", front: "New diabetes, diagnosed in the 2nd/3rd trimester, no prior history — code family?", back: "O24.4 — never used together with any other O24 subcode." },
  { topic: "Gestational Diabetes — Treatment", front: "Gestational diabetes treated with BOTH diet and insulin — how many O24.4 codes?", back: "One — only the insulin-controlled subcode; diet-alone isn't also coded, and no Z79.4 add-on either." },
  { topic: "Puerperal Sepsis", front: "Postpartum sepsis, no recent procedure — code combination?", back: "O85 PLUS a secondary code from B95–B96 for the organism — never A40/A41." },
  { topic: "Sepsis After a Procedure", front: "Sepsis specifically following an obstetrical procedure — is this O85?", back: "No — this follows the postprocedural-infection sepsis pathway instead." },
  { topic: "Substance Use in Pregnancy", front: "Alcohol, tobacco, and drug use during pregnancy — what's the common code pattern?", back: "Each substance gets its own O99.3x code PLUS a secondary code from the matching F-category (F10 alcohol, F17 tobacco, F11–F16/F18–F19 drugs)." },
  { topic: "Substance Use — Postpartum", front: "Do the substance-use codes (O99.31/.32/.33) apply during the postpartum period too, or only active pregnancy?", back: "Both — they explicitly apply during pregnancy OR the postpartum period." },
  { topic: "Poisoning in Pregnancy", front: "Poisoning in a pregnant patient — correct 3-code sequence?", back: "O9A.2 FIRST → the poisoning/toxic-effect/adverse-effect/underdosing code SECOND → the resulting condition code THIRD." },
  { topic: "Normal Delivery — O80", front: "Full-term, single healthy infant, complication existed earlier but resolved before THIS admission — is O80 still valid?", back: "Yes — a resolved earlier complication doesn't disqualify O80, as long as nothing is present at the current delivery admission." },
  { topic: "O80 Outcome Code", front: "Which Z37 code pairs with O80?", back: "Z37.0 (single live birth) — the ONLY outcome-of-delivery code appropriate with O80." },
  { topic: "Postpartum vs. Peripartum", front: "Postpartum period length? Peripartum period span?", back: "Postpartum = 6 weeks after delivery. Peripartum = last month of pregnancy through 5 months postpartum (longer, starts earlier)." },
  { topic: "Out-of-Hospital Delivery", front: "Mother delivers outside the hospital, admitted afterward for routine postpartum care, no complications — principal diagnosis?", back: "Z39.0 (encounter for care/examination of mother immediately after delivery)." },
  { topic: "Peripartum Cardiomyopathy", front: "Cardiomyopathy, no pre-existing heart disease, diagnosed 3rd trimester, progresses after delivery — code?", back: "O90.3 — specifically requires NO pre-existing heart disease as a condition of this code." },
  { topic: "Sequela of Pregnancy Complication (O94)", front: "O94 — sequenced before or after the sequela's own code?", back: "AFTER — like all sequela codes, O94 follows the code describing the actual sequela condition." },
  { topic: "Retained Products of Conception", front: "Subsequent encounter for retained products, no complication, prior discharge said \"complete\" abortion — code?", back: "O03A (or O07A for a failed termination) — the prior \"complete\" label does NOT block this code." },
  { topic: "Post-Abortion Hemorrhage", front: "Hemorrhage following an ELECTIVE abortion — O72.1 or O04.6?", back: "O04.6 — O72.1 is explicitly excluded from ever being used for a post-abortion condition." },
  { topic: "Abuse in Pregnancy", front: "Confirmed abuse of a pregnant patient — sequencing?", back: "The O9A.3/.4/.5 abuse code is sequenced FIRST, followed by injury and perpetrator codes." },
  { topic: "COVID-19 — Reason for Admission", front: "COVID-19 IS the reason for admission during pregnancy — sequencing?", back: "O98.5– as principal, followed by U07.1 and manifestation codes." },
  { topic: "COVID-19 — Incidental Finding", front: "COVID-19 found incidentally during an admission for an unrelated obstetric reason — sequencing?", back: "The unrelated obstetric reason stays principal; O98.5– and U07.1 become additional diagnoses." },
  { topic: "Biggest Trap", front: "The #1 recurring theme across this entire chapter?", back: "\"Was this the actual REASON for the encounter, or just incidentally present?\" — this single question governs Z33.1, O09-vs-Z34, cesarean principal diagnosis, and COVID-19 sequencing alike." },
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

export default function Icd10Chapter15FlashcardsPage() {
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
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 15 · FLASHCARDS</p>
        <h1 style={titleStyle}>5-Minute Commute Review</h1>
        <nav aria-label="ICD-10 navigation" style={navStyle}>
          <Link href="/icd10" style={navLinkStyle}>ICD-10 home</Link>
          <Link href="/icd10/chapter-15-guidelines-reviewer" style={navLinkStyle}>Full Reviewer Pt. 1</Link>
          <Link href="/icd10/chapter-15-guidelines-reviewer-part-2" style={navLinkStyle}>Full Reviewer Pt. 2</Link>
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
