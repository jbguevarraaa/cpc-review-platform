import Link from "next/link";

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
    title: "Pressure Ulcer Stages — Overview & Multiple Codes",
    codes: "L89.–",
    summary: [
      "Category L89 (Pressure ulcer) codes identify both the SITE and the STAGE of a pressure ulcer. ICD-10-CM classifies pressure ulcer stages by severity: stages 1–4, deep tissue pressure injury, unspecified stage, and unstageable.",
      "Assign as many codes from category L89 as needed to identify ALL the pressure ulcers a patient actually has — a patient with multiple pressure ulcers at different sites (or even different stages) gets one L89 code per ulcer.",
      "Pressure ulcer STAGE specifically may be documented by clinicians OTHER than the patient's treating provider (for example, a wound-care nurse) and still be used for code assignment — this is a named exception to the general rule that only the treating provider's own documentation counts for diagnosis coding.",
    ],
    easy: {
      scenario: "A patient has a single documented stage 2 pressure ulcer on the sacrum.",
      answer: "One L89 code identifying the sacral site and stage 2 — straightforward single-ulcer coding.",
    },
    hard: {
      scenario: "A patient has a stage 2 pressure ulcer on the left heel AND a stage 3 pressure ulcer on the sacrum, both documented at the same encounter.",
      answer: "Two separate L89 codes — one for the left heel at stage 2, and one for the sacrum at stage 3 — since these are two distinct pressure ulcers at different sites and stages.",
    },
    tips: [
      "Never assume one L89 code covers a patient's entire pressure ulcer picture — count the number of distinct pressure ulcers actually documented and assign one code per ulcer.",
      "Pressure ulcer stage is one of the few diagnosis details in ICD-10-CM where a non-provider clinician's documentation (like a nurse's wound assessment) is explicitly usable on its own for code assignment — don't assume a physician has to personally document the stage.",
    ],
  },
  {
    n: 2,
    title: "Unstageable vs. Unspecified Stage",
    codes: "L89.––0, L89.––9",
    summary: [
      "Unstageable pressure ulcer codes (L89.––0) are assigned based on CLINICAL DOCUMENTATION — used specifically when the ulcer's stage CANNOT be clinically determined, for example because it's covered by eschar (dead tissue) or has been treated with a skin or muscle graft.",
      "This is NOT the same as the unspecified stage code (L89.––9), which is used when there simply is NO DOCUMENTATION at all regarding the pressure ulcer's stage — a documentation gap, not a clinical finding.",
      "If, during an encounter, the stage of a previously unstageable ulcer is REVEALED after debridement, assign ONLY the code for the stage revealed following debridement — not the unstageable code anymore, and not both codes together.",
    ],
    easy: {
      scenario: "A pressure ulcer is documented as covered by eschar, making its true stage impossible to determine clinically.",
      answer: "The unstageable pressure ulcer code (L89.––0) — a genuine clinical finding that the stage can't be assessed, not a documentation gap.",
    },
    hard: {
      scenario: "A patient's previously unstageable pressure ulcer (covered by eschar) undergoes debridement during the current encounter, revealing it to actually be a stage 3 ulcer.",
      answer: "Only the stage 3 code — once debridement reveals the actual stage, the unstageable code is no longer used; only the newly revealed stage is coded.",
    },
    tips: [
      "\"Unstageable\" (L89.––0) means a real clinical barrier to staging (eschar, graft) — \"unspecified\" (L89.––9) means the documentation just never addressed the stage at all. Don't use these interchangeably.",
      "Once debridement reveals a stage, drop the unstageable code entirely — code only the revealed stage.",
    ],
  },
  {
    n: 3,
    title: "Documented Pressure Ulcer Stage & When to Query",
    codes: "L89.–",
    summary: [
      "Assignment of the pressure ulcer stage code should be guided by clinical documentation of the stage, OR by documentation using terms found in the Alphabetic Index.",
      "For clinical terms describing a stage that are NOT found in the Alphabetic Index, and there's no other documentation of the stage, the provider should be QUERIED — a coder shouldn't guess a stage from an unfamiliar term.",
      "If it's unclear from documentation whether the patient has a CURRENT (new) pressure ulcer or is being treated for a HEALING pressure ulcer, query the provider as well.",
    ],
    easy: {
      scenario: "A provider's note clearly documents \"stage 2 pressure ulcer,\" a term directly found in the Alphabetic Index.",
      answer: "The stage 2 pressure ulcer code — the documentation directly matches an Index term, so no query is needed.",
    },
    hard: {
      scenario: "A provider uses an unfamiliar clinical term to describe a pressure ulcer's severity, and that specific term isn't found anywhere in the Alphabetic Index, with no other stage documentation available.",
      answer: "Query the provider — an unfamiliar term not found in the Index, without other stage documentation, isn't something a coder should guess at.",
    },
    tips: [
      "Two separate query triggers to remember: (1) an undocumented/non-Index term describing stage, and (2) ambiguity about whether an ulcer is new/current vs. healing.",
    ],
  },
  {
    n: 4,
    title: "Pressure Ulcers Documented as Healed vs. Healing",
    codes: "L89.–",
    summary: [
      "If documentation states a pressure ulcer is COMPLETELY HEALED at the time of admission, NO CODE is assigned for it at all — a fully healed ulcer isn't coded.",
      "Pressure ulcers described as HEALING (in progress, not yet fully healed) SHOULD be assigned the appropriate pressure ulcer stage code, based on the documentation in the medical record.",
      "If documentation about a healing pressure ulcer doesn't specify its stage, assign the code for UNSPECIFIED stage — the same don't-guess principle used elsewhere in this chapter.",
    ],
    easy: {
      scenario: "A patient's chart states a pressure ulcer was present previously but is now completely healed at the time of admission.",
      answer: "No code is assigned for this ulcer — a completely healed pressure ulcer isn't coded at all.",
    },
    hard: {
      scenario: "A patient's chart documents a \"healing stage 2 pressure ulcer\" — still present, but improving, with no further detail on current severity.",
      answer: "The stage 2 pressure ulcer code — a healing (not yet fully healed) ulcer IS coded, using whatever stage the documentation actually specifies.",
    },
    tips: [
      "\"Completely healed\" = no code at all. \"Healing\" (still present, improving) = coded at whatever stage is documented, or unspecified if the stage isn't given. These are two very different outcomes for what sound like similar words.",
    ],
  },
  {
    n: 5,
    title: "Pressure Ulcer Present on Admission but Healed by Discharge",
    codes: "L89.–",
    summary: [
      "For pressure ulcers that were PRESENT ON ADMISSION but have HEALED by the time of discharge, assign the code for the SITE and STAGE of the pressure ulcer AS DOCUMENTED AT THE TIME OF ADMISSION — not \"no code,\" and not a stage reflecting its healed status at discharge.",
    ],
    easy: {
      scenario: "A patient is admitted with a documented stage 2 sacral pressure ulcer, which has fully healed by the time of discharge several days later.",
      answer: "The stage 2 sacral pressure ulcer code, reflecting the admission-time documentation — the ulcer having healed by discharge doesn't erase the code for the stay.",
    },
    hard: {
      scenario: "A coder is tempted to skip coding a pressure ulcer entirely because it healed before discharge, reasoning that the patient left without a pressure ulcer.",
      answer: "Incorrect — the ulcer's presence and stage AT ADMISSION is still coded, since it was present (and presumably required care) during at least part of the stay, even though it resolved before discharge.",
    },
    tips: [
      "This is a different rule from a pressure ulcer that's already \"completely healed at admission\" (Topic 4, no code) — here, the ulcer is PRESENT at admission and heals DURING the stay, which is still coded at its admission stage.",
    ],
  },
  {
    n: 6,
    title: "Pressure Ulcer Progressing to a Higher Stage — TWO Codes",
    codes: "L89.–",
    summary: [
      "If a patient is admitted with a pressure ulcer at one stage, and it PROGRESSES to a higher stage during the admission, assign TWO SEPARATE CODES for that same ulcer: one code for the site and stage on admission, and a second code for the same site at the HIGHEST stage reported during the stay.",
      "This is a distinctive rule worth flagging: unlike some other same-encounter severity-progression rules elsewhere in ICD-10-CM (which use a single code for the highest level reached), pressure ulcer progression specifically uses TWO codes — the admission stage AND the highest stage — not just one.",
    ],
    easy: {
      scenario: "A patient is admitted with a stage 2 sacral pressure ulcer, and during the stay it progresses to stage 3.",
      answer: "Two codes: one for the stage 2 sacral ulcer (the admission finding) and one for the stage 3 sacral ulcer (the highest stage reached) — both codes together, not just one.",
    },
    hard: {
      scenario: "A coder familiar with the single-code \"highest severity reached\" pattern from other ICD-10-CM chapters applies that same logic here, assigning only the stage 3 code for a pressure ulcer that progressed from stage 2 to stage 3 during the stay.",
      answer: "Incorrect for pressure ulcers specifically — this chapter's rule requires BOTH the admission-stage code AND the highest-stage code together, unlike the single-code pattern used for some other progression scenarios elsewhere in ICD-10-CM.",
    },
    tips: [
      "This is the single most important trap in this chapter: pressure ulcer (and non-pressure ulcer) stage progression during a stay is a TWO-CODE rule, not a one-code \"highest level only\" rule. Don't let patterns from other chapters bleed into this one.",
    ],
  },
  {
    n: 7,
    title: "Pressure-Induced Deep Tissue Damage",
    codes: "L89.––6",
    summary: [
      "For pressure-induced deep tissue damage (also called deep tissue pressure injury), assign ONLY the appropriate code for pressure-induced deep tissue damage (the L89.––6 subcategory) — this is its own distinct severity level, not simply an unusually severe stage 4 ulcer.",
    ],
    easy: {
      scenario: "A patient is documented with deep tissue pressure injury at the sacrum, distinct from a staged (1-4) pressure ulcer.",
      answer: "The L89.––6 code for pressure-induced deep tissue damage at that site — its own dedicated code, not one of the numbered stage codes.",
    },
    hard: {
      scenario: "A coder considers coding a documented deep tissue pressure injury as a stage 4 pressure ulcer instead, reasoning that both are severe.",
      answer: "Incorrect — deep tissue pressure injury has its own dedicated code (L89.––6), separate from the numbered stage 1–4 codes, even though both represent severe pressure damage.",
    },
    tips: [
      "Deep tissue pressure injury is a DIFFERENT clinical entity from a staged ulcer, not just \"a really bad stage 4\" — keep its own dedicated code in mind as a distinct option.",
    ],
  },
  {
    n: 8,
    title: "Non-Pressure Chronic Ulcers — The Same Rules, Different Category",
    codes: "L97.–, L98.4–",
    summary: [
      "Non-pressure chronic ulcers (such as venous stasis ulcers or other chronic skin ulcers not caused by pressure) follow a PARALLEL set of rules to pressure ulcers: if documentation states the ulcer is COMPLETELY HEALED at admission, no code is assigned.",
      "Non-pressure ulcers described as HEALING are coded based on the documented severity; if severity isn't documented for a healing ulcer, assign the unspecified-severity code.",
      "If it's unclear whether a non-pressure ulcer is current/new vs. healing, query the provider — the same query trigger as for pressure ulcers.",
      "For non-pressure ulcers present on admission but healed by discharge, code the site and severity AS DOCUMENTED AT ADMISSION.",
      "If a non-pressure ulcer progresses to a HIGHER SEVERITY LEVEL during the admission, assign TWO separate codes — one for the admission severity and one for the highest severity level reported during the stay — the exact same two-code pattern used for pressure ulcers.",
    ],
    easy: {
      scenario: "A patient's chart documents a non-pressure venous stasis ulcer as completely healed at the time of admission.",
      answer: "No code is assigned — identical to the pressure ulcer rule, a completely healed ulcer isn't coded.",
    },
    hard: {
      scenario: "A patient is admitted with a non-pressure ulcer at one documented severity level, which progresses to a higher severity level during the same admission.",
      answer: "Two codes: one for the admission severity level and one for the highest severity level reached during the stay — mirroring the pressure ulcer two-code progression rule exactly.",
    },
    tips: [
      "Non-pressure chronic ulcers essentially mirror EVERY pressure ulcer rule in this chapter (healed = no code, healing = code by documented severity, present-on-admission-but-healed = code the admission finding, progression = two codes) — just applied to a different code category (L97/L98.4 instead of L89).",
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

export default function Icd10Chapter12GuidelinesReviewerPage() {
  return (
    <main style={mainStyle}>
      <header style={heroStyle}>
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 12 · 2026 OFFICIAL GUIDELINES</p>
        <h1 style={{ margin: 0, fontSize: "clamp(26px, 5vw, 44px)" }}>Diseases of the Skin &amp; Subcutaneous Tissue</h1>
        <p style={{ margin: "12px 0 0", fontSize: "18px", lineHeight: 1.5 }}>L00–L99 — pressure ulcer staging, unstageable vs. unspecified, healed vs. healing, the two-code progression rule, deep tissue damage, and the parallel non-pressure chronic ulcer rules.</p>
      </header>

      <nav aria-label="ICD-10 navigation" style={navStyle}>
        <Link href="/icd10" style={navLinkStyle}>ICD-10-CM home</Link>
        <Link href="/icd10/chapter-12-practice-quiz" style={navLinkStyle}>Practice Quiz</Link>
        <Link href="/icd10/chapter-12-worked-examples" style={navLinkStyle}>Worked Examples</Link>
        <Link href="/icd10/chapter-12-flashcards" style={navLinkStyle}>Flashcards</Link>
      </nav>

      <section style={introStyle}>
        <strong>How to use this reviewer:</strong> same format as the other ICD-10 chapters — a plain-language rule summary, an easy and a hard example scenario with reasoning, and a tips/traps box for each topic. Written as an original summary, not a copy of the guideline text. Topic 6 (the two-code progression rule) is the single highest-yield trap in this chapter — it's the OPPOSITE of the one-code "highest stage" pattern used elsewhere in ICD-10-CM (like dementia or glaucoma), so read it carefully.
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
