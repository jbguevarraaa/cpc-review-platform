import Link from "next/link";
import { HighlightToolbar } from "../../cpt/surgery/_digestive/highlighter";

type Topic = {
  n: number;
  title: string;
  codes: string;
  summary: string[];
  easy: { scenario: string; answer: string };
  hard: { scenario: string; answer: string };
  tips: string[];
};

const topics: Topic[] = [
  {
    n: 1,
    title: "Use of Symptom Codes",
    codes: "R00–R99 (general rule)",
    summary: [
      "Symptom and sign codes are perfectly acceptable on their own whenever a related definitive diagnosis hasn't actually been confirmed by the provider yet.",
      "Once a definitive diagnosis is established, you can still add a symptom code alongside it — but only if that symptom isn't a routine/expected part of that diagnosis (like an unusual symptom of a complex syndrome). The definitive diagnosis is always sequenced first, the symptom second.",
      "Symptoms that are typically/routinely associated with a diagnosis are not separately coded unless the classification specifically instructs you to.",
      "Some ICD-10-CM codes are combination codes that already bundle a diagnosis and its common symptom into a single code — when you use one of those, don't also add a separate symptom code on top of it.",
    ],
    easy: {
      scenario: "A patient presents with chest pain, and no definitive diagnosis has been reached by the time of discharge.",
      answer: "Code the chest pain symptom on its own — there's no definitive diagnosis yet to sequence ahead of it.",
    },
    hard: {
      scenario: "A patient is diagnosed with a specific syndrome, and the record also documents an unusual symptom that isn't typically seen with that syndrome.",
      answer: "Code the definitive diagnosis first, then the symptom code second — because that particular symptom isn't routinely associated with the diagnosis, it earns its own separate code.",
    },
    tips: [
      "Ask: is this symptom expected/routine for the diagnosis, or unusual for it? Routine symptoms don't get their own code; unusual ones do (sequenced after the diagnosis).",
      "Always check first whether a combination code already exists that bundles the diagnosis and the symptom together — if it does, that's your only code.",
    ],
  },
  {
    n: 2,
    title: "Repeated Falls",
    codes: "R29.6, Z91.81",
    summary: [
      "R29.6 (Repeated falls) is for an encounter where the patient has recently fallen and the reason for that fall is actively being investigated.",
      "Z91.81 (History of falling) is for a patient who has fallen in the past and is considered at risk for falling again in the future.",
      "These describe two different things — a current fall being worked up, versus a standing risk factor — so both codes may be assigned together when appropriate.",
    ],
    easy: {
      scenario: "A patient comes to the ED after falling today, and the care team is still working to determine why it happened.",
      answer: "R29.6 (Repeated falls) — the current fall is actively being investigated.",
    },
    hard: {
      scenario: "The same patient from above also has a documented pattern of falling multiple times over the past year and is considered an ongoing fall risk.",
      answer: "R29.6 for today's fall being investigated, plus Z91.81 for the documented history/ongoing risk — both together, since they capture different information.",
    },
    tips: [
      "Don't treat these as interchangeable — R29.6 is about the fall happening now, Z91.81 is about risk going forward. A patient can absolutely have both at once.",
    ],
  },
  {
    n: 3,
    title: "Coma & Coma Scale",
    codes: "R40.20, R40.21–R40.24, R40.2A",
    summary: [
      "R40.20 (Unspecified coma) is used when the cause of the coma isn't known, or when the cause is a traumatic brain injury but no coma scale score was documented.",
      "Never use unspecified coma, or any individual/total Glasgow coma scale code, for a patient in a medically induced coma or who is sedated — those situations are excluded from this whole code family.",
      "The coma scale codes (R40.21– through R40.24–) pair with traumatic brain injury codes, and cannot be used together with R40.2A (nontraumatic coma due to an underlying condition).",
      "Completing the scale takes one code from each of the three subcategories, and all three need matching 7th characters showing when the scale was recorded. At minimum, report the initial score documented on presentation (even if it came from EMS or the ED) — a facility may optionally capture more scores after that.",
      "If only a total score is documented (not the individual eye/verbal/motor components), use R40.24– (Glasgow coma scale, total score) instead of the individual component codes.",
      "If multiple scores are captured within the first 24 hours of admission, only the score at the time of admission is coded — ICD-10-CM doesn't have a way to separately classify a later score still within that same 24-hour window.",
      "Coma scale codes are always sequenced after the diagnosis code(s), never before.",
    ],
    easy: {
      scenario: "A patient with a documented traumatic brain injury has only a Glasgow coma scale total score recorded in the ED, not the individual eye/verbal/motor components.",
      answer: "R40.24– (Glasgow coma scale, total score) — used specifically when only the total, not the individual components, was documented.",
    },
    hard: {
      scenario: "A patient is in a medically induced coma in the ICU for airway/ventilator management.",
      answer: "Do not assign R40.20 or any Glasgow coma scale code at all — medically induced and sedated states are excluded from this entire code family, regardless of how deep the sedation is.",
    },
    tips: [
      "Sedated or medically induced = an automatic stop sign for the whole R40.2x family. This is one of the most common traps in this section.",
      "Traumatic cause + scale documented → use the individual/total scale codes. Traumatic cause + scale NOT documented, or cause unknown → R40.20. Nontraumatic cause with a known underlying condition → R40.2A (and never combine R40.2A with scale codes).",
    ],
  },
  {
    n: 4,
    title: "SIRS Due to a Non-Infectious Process",
    codes: "R65.10, R65.11",
    summary: [
      "Systemic inflammatory response syndrome (SIRS) can also be triggered by something that isn't an infection at all — trauma, a malignant neoplasm, or pancreatitis are common examples.",
      "When SIRS is documented alongside a noninfectious condition, and no infection is ever documented, code the underlying condition (like the injury) first, then R65.10 (SIRS of non-infectious origin, without acute organ dysfunction) or R65.11 (with acute organ dysfunction).",
      "If R65.11 applies, also add the specific code(s) for whichever organ dysfunction(s) are documented.",
      "If organ dysfunction is present but it's unclear whether it's tied to the SIRS or to something else entirely (like being a direct effect of the trauma itself), query the provider rather than guessing.",
    ],
    easy: {
      scenario: "A patient with severe pancreatitis develops SIRS, with no infection documented anywhere.",
      answer: "The pancreatitis code first, then R65.10 (SIRS, non-infectious origin, no organ dysfunction documented).",
    },
    hard: {
      scenario: "A trauma patient develops SIRS and also has acute kidney injury, but it's unclear from the documentation whether the kidney injury is related to the SIRS or is a direct result of the trauma itself.",
      answer: "Query the provider before assigning R65.11 — the acute organ dysfunction code can only be added once it's clear the dysfunction is actually tied to the SIRS.",
    },
    tips: [
      "This is the mirror image of the sepsis SIRS rule from Chapter 1: R65.1x is exclusively for a noninfectious trigger. The moment an actual infection enters the picture, you're out of this code family entirely and into the sepsis codes (R65.2x) instead.",
    ],
  },
  {
    n: 5,
    title: "Death NOS",
    codes: "R99",
    summary: [
      "R99 (Ill-defined and unknown cause of mortality) has an extremely narrow, specific use: a patient who is already dead when they're brought into an emergency department or other healthcare facility, and is pronounced dead on arrival.",
      "It does not represent a general \"discharge disposition of death\" — it's not a code you reach for just because a patient died during their stay.",
    ],
    easy: {
      scenario: "A patient is brought to the ED already deceased and is pronounced dead on arrival, with no known cause.",
      answer: "R99 (Ill-defined and unknown cause of mortality) — this is exactly the narrow scenario it exists for.",
    },
    hard: {
      scenario: "A hospitalized patient dies during their inpatient stay, and the cause hasn't been fully determined at the time of documentation.",
      answer: "R99 is not appropriate here — it's reserved specifically for the dead-on-arrival scenario, not for routine inpatient deaths. The underlying condition being treated should be coded instead.",
    },
    tips: [
      "The trap here is treating R99 as a generic \"patient died\" code. It isn't — it's for one very specific circumstance (DOA, unknown cause), and using it for an ordinary inpatient death is a coding error.",
    ],
  },
  {
    n: 6,
    title: "NIHSS Stroke Scale",
    codes: "R29.7–",
    summary: [
      "The NIH Stroke Scale (NIHSS) codes are used together with acute stroke codes (I60–I63) to document the patient's neurological status and how severe the stroke is.",
      "NIHSS codes are always sequenced after the acute stroke diagnosis code(s), never before.",
      "At minimum, report the initial documented score; a facility may optionally choose to capture and report multiple scores over time.",
    ],
    easy: {
      scenario: "A patient is admitted with an acute ischemic stroke, and an initial NIHSS score is documented in the ED.",
      answer: "The acute stroke code first, then the matching R29.7– code for the initial score.",
    },
    hard: {
      scenario: "A patient's NIHSS score is recorded multiple times over the admission as their condition improves, and the facility has chosen to capture that trend.",
      answer: "Multiple R29.7– codes may be reported if the facility captures them, but the stroke diagnosis code always comes first, and at minimum the initial score must be reported.",
    },
    tips: [
      "Same pattern as the coma scale above: any severity/scale code in this chapter is a secondary add-on, never the lead code — the actual diagnosis always comes first.",
    ],
  },
];

const historicalNoteStyle = { background: "#f9faf9", border: "1px solid #ece7db", borderRadius: "10px", padding: "14px 16px", marginBottom: "24px", lineHeight: 1.65, fontSize: "13.5px", color: "#5b6b68" };

const mainStyle = { maxWidth: "1160px", margin: "0 auto", padding: "36px 24px 64px", minHeight: "100vh", background: "#f6f9f9", color: "#141d1c", fontFamily: "Arial, sans-serif" };
const heroStyle = { background: "linear-gradient(135deg, #101719, #0f766e)", color: "white", padding: "46px 42px", borderRadius: "18px", marginBottom: "26px", boxShadow: "0 12px 28px rgba(16,23,25,0.22)" };
const kickerStyle = { margin: "0 0 10px", color: "#99f6e4", fontWeight: 800, letterSpacing: "0.08em" };
const navStyle = { display: "flex", flexWrap: "wrap" as const, gap: "10px", marginBottom: "26px" };
const navLinkStyle = { textDecoration: "none", color: "#0f766e", background: "#ffffff", border: "1px solid #dbe3e1", borderRadius: "999px", padding: "10px 15px", fontWeight: 700, fontSize: "14px" };
const introStyle = { background: "#f0fdfa", border: "1px solid #99f6e4", borderLeft: "7px solid #0f766e", borderRadius: "12px", padding: "22px 24px", marginBottom: "24px", lineHeight: 1.7 };
const sectionStyle = { background: "#ffffff", border: "1px solid #e3e7e6", borderRadius: "14px", padding: "24px 26px", marginBottom: "20px", boxShadow: "0 5px 16px rgba(16,23,25,0.05)" };
const sectionHeaderStyle = { display: "flex", alignItems: "center", gap: "12px", marginBottom: "6px", flexWrap: "wrap" as const };
const numberBadgeStyle = { background: "#0f766e", color: "#fff", width: "34px", height: "34px", minWidth: "34px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "14px" };
const sectionTitleStyle = { margin: 0, fontSize: "21px", color: "#111827" };
const codeChipStyle = { background: "#f0fdfa", border: "1px solid #99f6e4", color: "#0f766e", borderRadius: "999px", padding: "4px 12px", fontWeight: 800, fontSize: "12.5px", fontFamily: "Consolas, monospace" };
const pStyle = { lineHeight: 1.75, margin: "0 0 8px", fontSize: "14.5px" };
const labelStyle = { margin: "16px 0 8px", fontWeight: 800, fontSize: "13px", letterSpacing: "0.03em", color: "#0f766e" };
const scenarioGridStyle = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "14px", marginTop: "6px" };
const easyCardStyle = { background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "10px", padding: "14px 16px", lineHeight: 1.65, fontSize: "13.5px" };
const hardCardStyle = { background: "#fff7ed", border: "1px solid #fed7aa", borderRadius: "10px", padding: "14px 16px", lineHeight: 1.65, fontSize: "13.5px" };
const tipsBoxStyle = { background: "#fef2f2", border: "1px solid #fecaca", borderLeft: "5px solid #dc2626", borderRadius: "10px", padding: "14px 16px", marginTop: "14px", lineHeight: 1.65, fontSize: "13.5px" };
const backLinkStyle = { textDecoration: "none", color: "#0f766e", fontWeight: 700 };

export default function Icd10Chapter18GuidelinesReviewerPage() {
  return (
    <main style={mainStyle}>
      <HighlightToolbar />
      <header style={heroStyle}>
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 18 · 2026 OFFICIAL GUIDELINES</p>
        <h1 style={{ margin: 0, fontSize: "clamp(26px, 5vw, 44px)" }}>Symptoms, Signs &amp; Abnormal Findings</h1>
        <p style={{ margin: "12px 0 0", fontSize: "18px", lineHeight: 1.5 }}>R00–R99 — symptom-code rules, falls, coma, SIRS, death NOS, and the NIHSS stroke scale.</p>
      </header>

      <nav aria-label="ICD-10 navigation" style={navStyle}>
        <Link href="/icd10" style={navLinkStyle}>ICD-10-CM home</Link>
        <Link href="/icd10/chapter-18-practice-quiz" style={navLinkStyle}>Practice Quiz</Link>
        <Link href="/cpt" style={navLinkStyle}>CPT home</Link>
      </nav>

      <section style={introStyle}>
        <strong>How to use this reviewer:</strong> same format as Chapter 1 — a plain-language rule summary, an easy and a hard example scenario with reasoning, and a tips/traps box for each topic. Written as an original summary, not a copy of the guideline text.
      </section>

      <div style={historicalNoteStyle}>
        <strong>📌 Historical note:</strong> the old "Functional quadriplegia" guideline that used to live in this chapter was deleted effective October 1, 2017. If you see it referenced in an older study source, it no longer applies — don't expect it to show up on a 2026 exam.
      </div>

      {topics.map((t) => (
        <section key={t.n} style={sectionStyle}>
          <div style={sectionHeaderStyle}>
            <span style={numberBadgeStyle}>{t.n}</span>
            <h2 style={sectionTitleStyle}>{t.title}</h2>
            <span style={codeChipStyle}>{t.codes}</span>
          </div>

          <p style={labelStyle}>📋 RULE SUMMARY</p>
          {t.summary.map((s) => <p key={s} style={pStyle}>{s}</p>)}

          <p style={labelStyle}>🎯 TWO EXAMPLE SCENARIOS</p>
          <div style={scenarioGridStyle}>
            <div style={easyCardStyle}>
              <strong>🟢 Easy:</strong> {t.easy.scenario}
              <p style={{ margin: "8px 0 0" }}><strong>Answer:</strong> {t.easy.answer}</p>
            </div>
            <div style={hardCardStyle}>
              <strong>🟠 Hard:</strong> {t.hard.scenario}
              <p style={{ margin: "8px 0 0" }}><strong>Answer:</strong> {t.hard.answer}</p>
            </div>
          </div>

          <div style={tipsBoxStyle}>
            <strong>🟥 Tips &amp; Traps</strong>
            <ul style={{ margin: "8px 0 0", paddingLeft: "20px", display: "grid", gap: "6px" }}>
              {t.tips.map((tip) => <li key={tip}>{tip}</li>)}
            </ul>
          </div>
        </section>
      ))}

      <div style={{ marginTop: "10px" }}>
        <Link href="/icd10" style={backLinkStyle}>← Back to ICD-10-CM</Link>
      </div>
    </main>
  );
}
