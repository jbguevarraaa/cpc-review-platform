"use client";

import Link from "next/link";
import { useState } from "react";

type Card = { topic: string; front: string; back: string };

const cards: Card[] = [
  { topic: "General", front: "Can Z codes be first-listed?", back: "Yes, in any healthcare setting — as first-listed (principal inpatient) or secondary depending on the encounter. Certain Z codes may ONLY be first-listed/principal." },
  { topic: "General", front: "Are Z codes procedure codes?", back: "No. A corresponding procedure code must accompany a Z code to describe any procedure performed." },
  { topic: "Contact/Exposure", front: "Z20 vs. Z77?", back: "Z20 = contact with and suspected exposure to communicable diseases. Z77 = other contact with and (suspected) exposures hazardous to health. Either can be first-listed for testing, but are more often secondary." },
  { topic: "Inoculations", front: "Z23 — when secondary?", back: "When the inoculation is a routine part of preventive care (e.g., a well-baby visit). Procedure codes identify the administration and vaccine type." },
  { topic: "Status", front: "Status code vs. history code?", back: "Status = ongoing state (carrier, device, sequelae/residual). History = the patient no longer has the condition." },
  { topic: "Status", front: "When is a status code NOT used with a diagnosis?", back: "When the diagnosis code already includes the information (e.g., no Z94.1 with a T86.2- heart transplant complication)." },
  { topic: "Status", front: "Ventilator weaning encounter?", back: "A J96.1- chronic respiratory failure code, followed by Z99.11 (dependence on respirator status)." },
  { topic: "Status", front: "Z89–Z90 and Z93–Z99 — when used?", back: "Only when there are no complications or malfunctions of the organ or tissue replaced, the amputation site, or the equipment." },
  { topic: "Status", front: "Z79 long-term drug therapy — what qualifies and what doesn't?", back: "Qualifies: continuous prescribed use for long-term treatment or prophylaxis. Doesn't: a brief course for an acute illness, or addiction/detox/maintenance programs (e.g., methadone) — code the drug use, abuse, or dependence instead." },
  { topic: "Status", front: "BMI (Z68) rules?", back: "Only with an associated reportable diagnosis (obesity, anorexia) documented by the provider. Never in pregnancy. Fluctuating values = the most severe." },
  { topic: "Status", front: "DNR and physical restraint status?", back: "Z66 DNR: when the provider documents it at any time during the stay. Z78.1 restraints: documented during the encounter — not for temporary restraint during a procedure." },
  { topic: "Status", front: "Z16 antimicrobial resistance sequencing?", back: "The infection code first, then Z16." },
  { topic: "Status", front: "Z15 genetic susceptibility — sequencing?", back: "Generally not first-listed. Current condition first if it's the reason for the visit; follow-up code first, then history and Z15, if treatment is complete. Genetic counseling for procreative management: Z31.5 first, then Z15." },
  { topic: "Status", front: "Z33.1 incidental pregnancy?", back: "Secondary code only, when the pregnancy is in no way complicating the reason for the visit. Otherwise use an obstetric chapter code." },
  { topic: "Status", front: "Z92.82 (tPA at another facility)?", back: "Secondary diagnosis on the RECEIVING facility's record only, when tPA was given in the last 24 hours (even if still receiving it). The condition tPA was given for is first." },
  { topic: "Status", front: "Z98.85 transplanted organ removal status?", back: "For encounters after the organ was removed — not the encounter where it's removed (code the complication that necessitated removal)." },
  { topic: "History", front: "Personal vs. family history?", back: "Personal = a past condition that no longer exists and isn't treated but may recur. Family = a relative had a disease that raises the patient's risk. Acceptable on any record." },
  { topic: "History", front: "Sequencing history codes?", back: "The reason for the encounter (e.g., screening, counseling) is first; personal/family history codes are additional. Follow-up code first, then history." },
  { topic: "Screening", front: "Screening vs. diagnostic exam?", back: "Screening = testing well people for early disease. A test prompted by a sign or symptom is diagnostic — code the sign or symptom." },
  { topic: "Screening", front: "Screening code — first-listed or additional? Anything not needed?", back: "First-listed if the visit is specifically the screening; additional if done during a visit for other problems. Not needed when inherent to a routine exam (e.g., pap smear during a pelvic exam). A procedure code confirms it was performed." },
  { topic: "Observation", front: "Observation codes (Z03, Z04, Z05) — when?", back: "For suspected conditions that are RULED OUT, with no related signs or symptoms. Primarily first-listed; Z03 and Z05 can be secondary if unrelated to the principal diagnosis, but Z04 is on the first-listed-only list." },
  { topic: "Observation", front: "Newborn observation sequencing?", back: "Z05 is sequenced after Z38 on the birth record." },
  { topic: "Observation", front: "Suspected fetal condition — inconclusive?", back: "Assign the appropriate code from O35, O36, O40, or O41. Z03.7- is for suspected maternal/fetal conditions ruled out." },
  { topic: "Aftercare", front: "Aftercare Z codes — what are they NOT used for?", back: "Not for a current, acute disease (use the diagnosis) and not for injuries (use the acute injury code with 7th character D)." },
  { topic: "Aftercare", front: "Aftercare code — first-listed or additional?", back: "Generally first-listed. Additional when a specific type of aftercare (e.g., closure of a colostomy) is given in addition to the reason for the encounter and no diagnosis code applies." },
  { topic: "Aftercare", front: "Status codes with aftercare?", back: "Allowed to show the nature of the aftercare (Z95.1 with Z48.812) — but not when the aftercare code already indicates the status (Z43.0 with Z93.0)." },
  { topic: "Follow-Up", front: "Follow-up codes Z08 and Z09?", back: "Surveillance after completed treatment; the condition no longer exists. Z08 = malignant neoplasm; Z09 = other conditions. Follow-up code first, then history code. If the condition recurred, code the condition instead." },
  { topic: "Donors", front: "Z52 donors?", back: "Living donors of blood or tissue, for others or self-donation. Not for cadaveric donations." },
  { topic: "Counseling", front: "Z71.85 and Z71.87?", back: "Z71.85 = counseling about vaccine SAFETY (not routine risk/side-effect information at vaccination). Z71.87 = pediatric-to-adult transition counseling — sole reason or in addition to other services; with a medical condition, report both, sequenced by circumstances." },
  { topic: "Obstetric", front: "Z34 rules?", back: "Supervision of normal pregnancy — always first-listed and never used with any other OB-chapter code." },
  { topic: "Obstetric", front: "Z3A weeks of gestation — when NOT used?", back: "Not for abortive outcomes (O00–O08), elective termination (Z33.2), or postpartum conditions. For inpatient stays spanning weeks, use the date of admission." },
  { topic: "Obstetric", front: "Z37 outcome of delivery?", back: "On ALL maternal delivery records, always secondary, never on the newborn record." },
  { topic: "Exams", front: "Routine and administrative exams?", back: "Z00–Z02 and Z32.0-: not for diagnosing a suspected condition or for treatment. A condition found is an additional code. 'With/without abnormal findings' depends on what's known when coded." },
  { topic: "Miscellaneous", front: "Prophylactic organ removal?", back: "First-listed Z40.0 (cancer risk) or Z40.8 — plus the risk-factor code. If the patient has cancer at another site, also code the malignancy. Not Z40.0 when the removal treats a malignancy." },
  { topic: "Nonspecific", front: "Nonspecific Z codes?", back: "Z02.9, Z04.9, Z13.9, Z41.9, Z52.9, Z86.59, Z88.9, Z92.0 — little justification inpatient; outpatient only when no further documentation allows something more precise." },
  { topic: "First-Listed Only", front: "Which Z codes are first-listed only?", back: "Z00 (except Z00.6), Z01, Z02, Z04, Z33.2, Z31.81/.83/.84, Z34, Z38, Z39, Z40, Z42, Z51.0, Z51.1-, Z52 (except Z52.9), Z76.1, Z76.2, Z99.12 — except multiple same-day encounters with combined records." },
  { topic: "SDOH", front: "SDOH code rules?", back: "Assign as many as needed for everything documented. Documentation must show a problem, risk, or unmet need (living alone by itself doesn't support Z60.2). Non-provider clinicians (social workers, case managers, CHWs, nurses) and signed-off patient self-report can supply it." },
  { topic: "Biggest Trap", front: "The #1 trap in Chapter 21?", back: "Using aftercare Z codes for injuries, using a status code the diagnosis already includes, and coding a screening when a sign or symptom prompted the test." },
  { topic: "Status", front: "Z14 vs. Z15?", back: "Z14 = genetic carrier: carries a gene tied to a disease that may be passed on, but doesn't have the disease and isn't at risk of developing it. Z15 = genetic susceptibility: carries a gene that raises the risk of developing the disease." },
  { topic: "Status", front: "Z21 asymptomatic HIV vs. Z22 carrier?", back: "Z21 = tested positive for HIV with no signs or symptoms. Z22 = carrier of an infectious disease: harbors the organisms without symptoms and can transmit the infection." },
  { topic: "Follow-Up", front: "Which follow-up categories are on the guideline's list?", back: "Z08 (after completed treatment for malignant neoplasm), Z09 (other conditions), and Z39 (maternal postpartum care and examination)." },
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

export default function Icd10Chapter21FlashcardsPage() {
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
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 21 · FLASHCARDS</p>
        <h1 style={titleStyle}>5-Minute Commute Review</h1>
        <nav aria-label="ICD-10 navigation" style={navStyle}>
          <Link href="/icd10" style={navLinkStyle}>ICD-10 home</Link>
          <Link href="/icd10/chapter-21-guidelines-reviewer" style={navLinkStyle}>Reviewer Part 1</Link>
          <Link href="/icd10/chapter-21-guidelines-reviewer-part-2" style={navLinkStyle}>Part 2</Link>
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
