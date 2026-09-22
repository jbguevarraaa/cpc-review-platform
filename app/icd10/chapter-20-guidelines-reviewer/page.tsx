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
    title: "Purpose, Sequencing, and Whether Reporting Is Required",
    codes: "V00–Y99",
    summary: [
      "External cause codes should NEVER be sequenced as the first-listed or principal diagnosis. An external cause code can never be a principal (first-listed) diagnosis.",
      "They exist to provide data for injury research and for evaluating injury prevention strategies. They capture HOW the injury or condition happened (cause), the INTENT (unintentional/accidental, or intentional such as suicide or assault), the PLACE where it occurred, the ACTIVITY of the patient at the time, and the person's STATUS (for example, civilian or military).",
      "There is no national requirement for mandatory external cause reporting. Unless a provider is subject to a state-based mandate, or a particular payer requires the codes, reporting Chapter 20 codes isn't required. Without a mandate, providers are encouraged to report them voluntarily because the data is valuable.",
    ],
    easy: {
      scenario: "A patient is treated for a wrist fracture from a fall, and the coder wants to list the external cause code for the fall first.",
      answer: "Incorrect — an external cause code is never the principal or first-listed diagnosis. The wrist fracture comes first.",
    },
    hard: {
      scenario: "A facility isn't subject to any state or payer external cause reporting mandate. Must it report Chapter 20 codes?",
      answer: "No — there is no national requirement, so reporting is voluntary unless a state mandate or payer requires it. Providers are still encouraged to report them.",
    },
    tips: [
      "External cause codes are never first-listed — the injury or condition always comes first.",
      "Reporting is voluntary unless a state mandate or a payer requires it.",
    ],
  },
  {
    n: 2,
    title: "General Rules — Range, Full Detail, and When No Code Is Needed",
    codes: "V00–Y99 with A00.0–T88.9, Z00–Z99",
    summary: [
      "An external cause code may be used with any code in the range A00.0–T88.9 and Z00–Z99 that represents a health condition due to an external cause. They apply most to injuries, but also to things like infections or diseases due to an external source, and to other health conditions — for example, a heart attack that occurs during strenuous physical activity.",
      "Use the FULL range of external cause codes to completely describe the cause, the intent, the place of occurrence, and, if applicable, the activity and the person's status — for all injuries and other health conditions due to an external cause.",
      "Assign as many external cause codes as necessary to fully explain each cause. If only one external cause code can be recorded, assign the code most related to the principal diagnosis.",
      "The choice of code is guided by the Alphabetic Index of External Causes and by the Inclusion and Exclusion notes in the Tabular List.",
      "Some external cause codes are COMBINATION codes for sequential events that result in an injury — for example, a fall that results in striking against an object. Use the combination code that matches the sequence of events, regardless of which event caused the most serious injury.",
      "No Chapter 20 code is needed when the external cause and intent are already included in a code from another chapter (for example, T36.0X1-, poisoning by penicillins, accidental).",
    ],
    easy: {
      scenario: "A patient has a heart attack that occurs during strenuous physical activity. Can an external cause code be used?",
      answer: "Yes — external cause codes aren't limited to injuries. They can be used with other health conditions due to an external cause, such as a heart attack during strenuous activity.",
    },
    hard: {
      scenario: "A patient has an accidental penicillin poisoning coded T36.0X1-, and the coder adds a Chapter 20 code for accidental poisoning.",
      answer: "Unnecessary — the T36.0X1- code already includes the external cause and intent, so no Chapter 20 code is needed.",
    },
    tips: [
      "External cause codes work with A00.0–T88.9 and Z00–Z99 — not only with injuries.",
      "Use as many codes as needed; if only one fits, choose the one most related to the principal diagnosis.",
      "If the poisoning or other code already includes cause and intent, add nothing from Chapter 20.",
    ],
  },
  {
    n: 3,
    title: "7th Characters — Match the Injury for Each Encounter",
    codes: "V00–Y99 (7th character)",
    summary: [
      "Assign the external cause code, with the appropriate 7th character (initial encounter, subsequent encounter, or sequela), for EACH encounter in which the injury or condition is being treated.",
      "Most Chapter 20 categories have a 7th character requirement with three values: A (initial encounter), D (subsequent encounter), and S (sequela).",
      "A new or different provider doesn't change it: the 7th character on the external cause code should MATCH the 7th character of the code assigned for the associated injury or condition at that encounter.",
    ],
    easy: {
      scenario: "A patient is seen for follow-up of an injury and the injury code carries 7th character D.",
      answer: "The external cause code also carries 7th character D — it matches the associated injury code for the encounter.",
    },
    hard: {
      scenario: "A patient is seen by a new physician mid-treatment, and the injury code stays at 7th character A. A coder assigns 7th character D to the external cause code because the provider is new.",
      answer: "Incorrect — the external cause 7th character matches the injury's 7th character, which is A because active treatment continues.",
    },
    tips: [
      "External cause 7th character = the injury code's 7th character for that encounter.",
      "A new provider never changes the character.",
    ],
  },
  {
    n: 4,
    title: "Place of Occurrence (Y92) — Once, No 7th Character",
    codes: "Y92",
    summary: [
      "Category Y92 (place of occurrence of the external cause) contains SECONDARY codes, used after other external cause codes to identify where the patient was at the time of the injury or other condition.",
      "Generally, a place of occurrence code is assigned ONLY ONCE, at the initial encounter for treatment. In the rare instance that a new injury occurs during hospitalization, an additional place of occurrence code may be assigned.",
      "No 7th characters are used for Y92.",
      "Do NOT use Y92.9 (unspecified place) if the place is not stated or is not applicable.",
    ],
    easy: {
      scenario: "A patient is treated for an injury, and the place of the fall is documented. Two weeks later the patient returns for a follow-up visit.",
      answer: "The place of occurrence code is assigned at the initial encounter only — not again at the follow-up.",
    },
    hard: {
      scenario: "The record never states where an injury occurred. The coder assigns Y92.9 to complete the external cause coding.",
      answer: "Incorrect — Y92.9 isn't used when the place is not stated or not applicable.",
    },
    tips: [
      "Y92 = secondary code, once, at the initial encounter. No 7th character.",
      "A new injury during a hospital stay can get its own place code.",
      "Never fill in Y92.9 when the place isn't stated.",
    ],
  },
  {
    n: 5,
    title: "Activity Codes (Y93) — Once, and Not for Everything",
    codes: "Y93",
    summary: [
      "Assign a code from category Y93 to describe the patient's ACTIVITY when the injury or health condition occurred. An activity code is used ONLY ONCE, at the initial encounter for treatment, and only ONE code from Y93 should be recorded on a medical record.",
      "Activity codes are NOT applicable to poisonings, adverse effects, misadventures, or sequela.",
      "Do NOT assign Y93.9 (unspecified activity) if the activity is not stated.",
      "A Y93 code is appropriate with external cause and intent codes when identifying the activity gives additional information about the event.",
    ],
    easy: {
      scenario: "A patient injured while playing a documented sport is treated at the initial encounter.",
      answer: "One Y93 activity code is assigned at the initial encounter, after the causal external cause code(s).",
    },
    hard: {
      scenario: "A patient is treated for an adverse drug effect, and the coder adds a Y93 activity code for what the patient was doing when it happened.",
      answer: "Not applicable — activity codes aren't used with poisonings, adverse effects, misadventures, or sequela.",
    },
    tips: [
      "Y93: once, one code, initial encounter only.",
      "Not with poisonings, adverse effects, misadventures, or sequela.",
      "Don't use Y93.9 when the activity isn't stated.",
    ],
  },
  {
    n: 6,
    title: "External Cause Status (Y99) — Work Status at the Time of the Event",
    codes: "Y99",
    summary: [
      "Assign a Y99 code whenever any other external cause code is assigned for an encounter — including an activity code — except for the events noted. The status code shows the person's work status at the time of the event: military activity, a non-military person at work, or an individual (including a student or volunteer) involved in a non-work activity.",
      "It should be assigned, when applicable, with other external cause codes such as transport accidents and falls. It is NOT applicable to poisonings, adverse effects, misadventures, or late effects.",
      "Do NOT assign a Y99 code if no other external cause codes (cause, activity) apply to the encounter.",
      "An external cause status code is used ONLY ONCE, at the initial encounter for treatment, and only ONE code from Y99 should be recorded on a medical record.",
      "Do NOT assign Y99.9 (unspecified external cause status) if the status is not stated.",
    ],
    easy: {
      scenario: "A worker falls from a ladder on the job, and cause, place, and activity codes are assigned at the initial encounter.",
      answer: "Add one Y99 status code showing the person was at work — it goes with the other external cause codes, once, at the initial encounter.",
    },
    hard: {
      scenario: "A patient has an accidental poisoning. The coder adds a Y99 status code.",
      answer: "Not applicable — status codes aren't used with poisonings, adverse effects, misadventures, or late effects.",
    },
    tips: [
      "Y99 goes with other external cause codes, once, at the initial encounter.",
      "Never on its own, and never with poisonings, adverse effects, misadventures, or late effects.",
      "Don't use Y99.9 when the status isn't stated.",
    ],
  },
  {
    n: 7,
    title: "Multiple External Cause Codes — The Sequencing Hierarchy",
    codes: "Y07 · Y38 · V00–X58 · Y93 · Y99",
    summary: [
      "More than one external cause code may be needed to fully describe an illness or injury. If two or more events cause separate injuries, assign an external cause code for each cause.",
      "The first-listed external cause code is chosen in this priority order: (1) child and adult abuse codes take priority over all others; (2) terrorism codes take priority over all except abuse; (3) cataclysmic event codes take priority over all except abuse and terrorism; (4) transport accident codes take priority over all except cataclysmic events, abuse, and terrorism.",
      "Activity and external cause status codes are assigned AFTER all the causal (intent) external cause codes.",
      "The first-listed external cause code should correspond to the cause of the most serious diagnosis due to an assault, accident, or self-harm, following that hierarchy.",
    ],
    easy: {
      scenario: "A patient's injuries include one from a transport accident and one from a confirmed assault by a caregiver (abuse).",
      answer: "The abuse external cause code takes priority and is first-listed — abuse outranks transport accidents.",
    },
    hard: {
      scenario: "A patient has a transport accident code, an activity code, and a status code. In what order are they reported?",
      answer: "The transport accident (causal) code first, then the activity code and the status code — activity and status codes follow all causal external cause codes.",
    },
    tips: [
      "Priority: abuse > terrorism > cataclysmic events > transport accidents.",
      "Activity and status codes come after every causal code.",
      "Two separate injuries from two events = an external cause code for each.",
    ],
  },
  {
    n: 8,
    title: "Limits on the Number of Codes — What to Keep",
    codes: "V00–Y99",
    summary: [
      "If the reporting format limits the number of external cause codes, report the code for the cause and intent most related to the principal diagnosis.",
      "If the format permits capturing additional external cause codes, report the cause and intent — including medical misadventures — of the additional events rather than the codes for place, activity, or external status.",
      "Regardless of how many external cause codes are assigned, there should generally be only ONE place of occurrence code, ONE activity code, and ONE external cause status code for an encounter. (In the rare case a new injury occurs during hospitalization, an additional place of occurrence code may be assigned.)",
      "Place of occurrence, activity, and status codes are sequenced after the main external cause code(s).",
    ],
    easy: {
      scenario: "A billing format allows only one external cause code, and the patient's principal diagnosis is a fracture from a fall.",
      answer: "Report the cause and intent code most related to the principal diagnosis — the fall.",
    },
    hard: {
      scenario: "A format has room for two more external cause codes, and the record describes a second event, a medical misadventure, plus a place of occurrence.",
      answer: "Use the extra space for the cause and intent of the additional event (the misadventure), not for the place, activity, or status code.",
    },
    tips: [
      "Limited slots: the cause and intent most related to the principal diagnosis.",
      "Extra slots go to additional causes and intents, not to place, activity, or status.",
    ],
  },
  {
    n: 9,
    title: "Abuse and Unknown or Undetermined Intent",
    codes: "X92–Y09 · Y07",
    summary: [
      "Adult and child abuse, neglect, and maltreatment are classified as ASSAULT. Any of the assault codes may indicate the external cause of an injury resulting from confirmed abuse.",
      "For confirmed abuse, neglect, and maltreatment where the perpetrator is known, a code from Y07 (perpetrator of maltreatment and neglect) should accompany any other assault codes. (See also Chapter 19's adult and child abuse guideline.)",
      "If the intent (accident, self-harm, assault) of the cause of an injury or other condition is unknown or unspecified, code the intent as ACCIDENTAL. All transport accident categories assume accidental intent.",
      "External cause codes for events of UNDETERMINED intent are used ONLY if the documentation specifies that the intent cannot be determined.",
    ],
    easy: {
      scenario: "A patient's injury is documented, but nothing states whether it was accidental, self-inflicted, or an assault.",
      answer: "Code the intent as accidental — unknown or unspecified intent defaults to accidental.",
    },
    hard: {
      scenario: "A record states that the intent of an injury 'cannot be determined.'",
      answer: "Now undetermined intent applies — it is used only when the documentation specifies the intent cannot be determined.",
    },
    tips: [
      "Unknown or unspecified intent = accidental. Undetermined = only when documented as impossible to determine.",
      "Transport accident categories assume accidental intent.",
      "Confirmed abuse: an assault code, plus Y07 when the perpetrator is known. For SUSPECTED abuse, do not report an external cause or perpetrator code.",
    ],
  },
  {
    n: 10,
    title: "Sequela (Late Effect) External Cause Codes",
    codes: "V00–Y99 (7th character S)",
    summary: [
      "Sequela are reported using the external cause code with 7th character S. Use these with any report of a late effect or sequela resulting from a previous injury.",
      "A sequela external cause code should NEVER be used with a related CURRENT injury code.",
      "Use a late effect external cause code for subsequent visits when a late effect of the initial injury is being treated. Do NOT use it for subsequent visits for follow-up care of the injury — for example, to assess healing or receive rehabilitative therapy — when no late effect of the injury has been documented.",
    ],
    easy: {
      scenario: "A patient is seen for a scar that resulted from an old injury, and the scar is documented as a late effect being treated.",
      answer: "Use the external cause code with 7th character S, alongside the sequela coding for the scar.",
    },
    hard: {
      scenario: "A patient returns to have healing checked after an injury, with no late effect documented. The coder adds a sequela external cause code.",
      answer: "Incorrect — sequela external cause codes aren't used for follow-up visits (healing checks, rehabilitation) when no late effect has been documented.",
    },
    tips: [
      "Sequela external cause code (S): only when a late effect is being treated.",
      "Never with a related current injury code.",
      "Healing checks and rehab with no documented late effect = no sequela external cause code.",
    ],
  },
  {
    n: 11,
    title: "Terrorism (Y38) — FBI-Identified vs. Suspected vs. Secondary Effects",
    codes: "Y38 · Y38.9",
    summary: [
      "When the cause of an injury is identified by the Federal Government (FBI) as terrorism, the first-listed external cause code should be from category Y38. The FBI's definition is in the inclusion note at the beginning of Y38. Add a place of occurrence code (Y92.-). More than one Y38 code may be assigned if the injury resulted from more than one mechanism of terrorism.",
      "When the cause of an injury is only SUSPECTED to be terrorism, a Y38 code is NOT assigned. Suspected cases are classified as ASSAULT.",
      "Y38.9 (terrorism, secondary effects) is assigned for conditions that occur AFTER the terrorist event. It isn't assigned for conditions due to the initial terrorist act.",
      "It is acceptable to assign Y38.9 with another Y38 code when there is an injury due to the initial terrorist event and an injury that is a subsequent result of it.",
    ],
    easy: {
      scenario: "The Federal Government (FBI) identifies an explosion that injured a patient as a terrorist act.",
      answer: "The first-listed external cause code is from category Y38, with a Y92 place of occurrence code added.",
    },
    hard: {
      scenario: "A patient's injury is suspected, but not confirmed, to be the result of terrorism.",
      answer: "Do not assign a Y38 code — suspected cases are classified as assault.",
    },
    tips: [
      "Y38 requires the cause to be identified as terrorism by the Federal Government (FBI). Suspected = assault.",
      "Y38.9 is for later (secondary) effects, not for injuries from the initial act.",
      "Y38.9 can accompany another Y38 code when both apply.",
    ],
  },
];

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

export default function Icd10Chapter20GuidelinesReviewerPage() {
  return (
    <main style={mainStyle}>
      <HighlightToolbar />
      <header style={heroStyle}>
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 20 · 2026 OFFICIAL GUIDELINES</p>
        <h1 style={{ margin: 0, fontSize: "clamp(26px, 5vw, 44px)" }}>External Causes of Morbidity</h1>
        <p style={{ margin: "12px 0 0", fontSize: "18px", lineHeight: 1.5 }}>V00–Y99 — never first-listed, general rules, 7th characters, place of occurrence (Y92), activity (Y93), external cause status (Y99), the sequencing hierarchy, unknown intent, sequela, and terrorism (Y38).</p>
      </header>

      <nav aria-label="ICD-10 navigation" style={navStyle}>
        <Link href="/icd10" style={navLinkStyle}>ICD-10-CM home</Link>
        <Link href="/icd10/chapter-20-practice-quiz" style={navLinkStyle}>Practice Quiz</Link>
        <Link href="/icd10/chapter-20-worked-examples" style={navLinkStyle}>Worked Examples</Link>
        <Link href="/icd10/chapter-20-flashcards" style={navLinkStyle}>Flashcards</Link>
      </nav>

      <section style={introStyle}>
        <strong>How to use this reviewer:</strong> same format as the other ICD-10 chapters — a plain-language rule summary, an easy and a hard example scenario with reasoning, and a tips/traps box for each topic. Written as an original summary, not a copy of the guideline text. Chapter 20 codes describe HOW an injury or condition happened — they are always secondary, and most of the rules here are about which codes to add once, which to skip, and what order to put them in.
      </section>

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
