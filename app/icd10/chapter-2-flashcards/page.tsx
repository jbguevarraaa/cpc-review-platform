"use client";

import Link from "next/link";
import { HighlightToolbar } from "../../cpt/surgery/_digestive/highlighter";
import { useState } from "react";

type Card = { topic: string; front: string; back: string };

const cards: Card[] = [
  { topic: "Primary vs. Secondary", front: "Treatment directed only at a metastatic site — which site leads?", back: "The secondary (metastatic) site is principal/first-listed; the primary malignancy is an additional code." },
  { topic: "Overlapping Sites", front: "Primary malignancy overlapping two contiguous sites — how coded?", back: "The \".8\" (overlapping lesion) subcategory/code, unless that combination is specifically indexed elsewhere." },
  { topic: "Ectopic Tissue", front: "Ectopic pancreatic malignancy found in the stomach — coded to stomach or pancreas?", back: "Pancreas (site of ORIGIN) — C25.9. Ectopic tissue is always coded to origin, not current location." },
  { topic: "Antineoplastic Therapy", front: "Admitted solely for chemotherapy — what leads?", back: "Z51.11 (chemo), Z51.0 (radiation), or Z51.12 (immunotherapy) leads; the malignancy is secondary." },
  { topic: "Antineoplastic Therapy", front: "Exception: brachytherapy (radioactive element insertion) — does Z51.0 apply?", back: "No — Z51.0 is NOT assigned for insertion/implantation of radioactive elements. The malignancy code leads instead." },
  { topic: "Anemia", front: "Anemia FROM the malignancy itself — sequencing?", back: "Malignancy first, then D63.0 (Anemia in neoplastic disease) second." },
  { topic: "Anemia", front: "Anemia as an adverse effect of chemo/immuno/radiation THERAPY — sequencing?", back: "FLIPPED: anemia code first, then the neoplasm code, then the adverse-effect code (T45.1X5- or Y84.2). Same symptom, opposite order from cancer-caused anemia." },
  { topic: "Dehydration", front: "Dehydration due to the malignancy, IV rehydration only — sequencing?", back: "Dehydration code first, then the malignancy code(s)." },
  { topic: "Extent of Disease", front: "Admission to determine extent of malignancy, chemo also given same stay — what leads?", back: "The malignancy leads — this is a specific exception to the Z51.0-leads-for-therapy rule." },
  { topic: "Chapter 18 Symptoms", front: "Can a Chapter 18 symptom code ever replace the malignancy as principal diagnosis?", back: "No — never, regardless of how many admissions/encounters occur for that neoplasm." },
  { topic: "Disseminated/Unspecified", front: "C80.0 vs. C80.1 — what's the difference?", back: "C80.0 = disseminated, no sites specified at all. C80.1 = primary site itself can't be determined (\"cancer, unspecified\"). Rarely used inpatient." },
  { topic: "Pregnancy", front: "Malignant neoplasm in a pregnant patient — sequencing?", back: "O9A.1- (malignant neoplasm complicating pregnancy) first, then the specific Chapter 2 neoplasm code." },
  { topic: "Pathologic Fracture", front: "Focus of treatment is the FRACTURE (not the tumor) — sequencing?", back: "M84.5- (pathological fracture in neoplastic disease) first, then the neoplasm code." },
  { topic: "Pathologic Fracture", front: "Focus of treatment is the NEOPLASM (fracture is secondary) — sequencing?", back: "Neoplasm code first, then M84.5-." },
  { topic: "Personal History", front: "Three-part test for switching to a Z85 personal history code?", back: "(1) Excised/eradicated, (2) no further treatment directed at that site, (3) no evidence of existing disease there. All three must be true." },
  { topic: "Personal History", front: "New metastasis found, originating from a previously-excised primary — coded how?", back: "A fresh, active secondary malignant neoplasm code for the new site, PLUS the Z85 history code as an additional code — never just an update to the history code alone." },
  { topic: "Leukemia/Myeloma", front: "Documentation unclear whether leukemia/myeloma is in remission — what do you do?", back: "Query the provider. Don't guess between the active code and a Z85.6/Z85.79 history code." },
  { topic: "Transplant", front: "Malignancy arising WITHIN a transplanted organ — code sequence?", back: "T86.- (transplant complication) first, then C80.2 (malignant neoplasm associated with transplanted organ), then the specific malignancy code — a fixed 3-code sequence." },
  { topic: "BIA-ALCL", front: "Breast implant-associated anaplastic large cell lymphoma — is a device complication code also added?", back: "No — C84.7A (active) or C84.7B (remission) alone. A Chapter 19 complication code is specifically excluded here." },
  { topic: "Lymphoid Tissue Spread", front: "Lymphoma spreading beyond lymph nodes to multiple solid organs — how many codes?", back: "One — a single code from that lymphoma's category with final character \"9\" (extranodal and solid organ sites), not one code per organ." },
  { topic: "Biggest Trap", front: "The #1 trap in this whole chapter?", back: "Anemia sequencing flips entirely based on CAUSE: from the malignancy itself = malignancy first. From chemo/immuno/radiation therapy = anemia first. Same symptom, opposite answer — always read the stated cause." },
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

export default function Icd10Chapter2FlashcardsPage() {
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
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 2 · FLASHCARDS</p>
        <h1 style={titleStyle}>5-Minute Commute Review</h1>
        <nav aria-label="ICD-10 navigation" style={navStyle}>
          <Link href="/icd10" style={navLinkStyle}>ICD-10 home</Link>
          <Link href="/icd10/chapter-2-guidelines-reviewer" style={navLinkStyle}>Full Reviewer</Link>
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
