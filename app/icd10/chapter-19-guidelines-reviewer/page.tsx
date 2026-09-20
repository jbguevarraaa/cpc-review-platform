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
    title: "7th Characters — A and D Follow ACTIVE TREATMENT, Not the Provider",
    codes: "S00–T88 (7th character)",
    summary: [
      "Most Chapter 19 categories need a 7th character on every applicable code. Most have three values — A (initial encounter), D (subsequent encounter), and S (sequela). Traumatic fractures have additional values.",
      "The 7th character follows whether the patient is in ACTIVE TREATMENT — not whether the provider is new. A patient seen by a different provider partway through treatment keeps the same 7th character.",
      "'A' is used at every encounter where the patient is receiving active treatment for the condition. 'D' is used after active treatment is finished, when the patient is receiving routine care during the healing or recovery phase.",
      "For complication codes, active treatment means treatment for the condition the code describes, even if it stems from an earlier problem. For example, T84.50XA (infection due to an unspecified internal joint prosthesis, initial encounter) is used when the infection itself is being actively treated.",
      "Aftercare Z codes are NOT used for aftercare of injuries or poisonings. For aftercare of an injury, assign the acute injury code with 7th character D.",
    ],
    easy: {
      scenario: "A patient's wound is sutured in the emergency department, and two days later the same wound is being actively treated again for infection.",
      answer: "7th character A applies at each encounter with active treatment — not only the first one.",
    },
    hard: {
      scenario: "A patient whose injury treatment is complete sees a different provider for routine follow-up during healing. The coder considers reporting an aftercare Z code, or the injury code with 7th character A because the provider is new.",
      answer: "Neither — a new provider doesn't reset the 7th character to A, and aftercare Z codes aren't used for injuries. Report the acute injury code with 7th character D (routine care during healing).",
    },
    tips: [
      "A = still in active treatment (every such encounter). D = routine care in the healing/recovery phase.",
      "A new or different provider never changes the 7th character by itself.",
      "Never use an aftercare Z code for an injury or poisoning — use the injury code with D.",
    ],
  },
  {
    n: 2,
    title: "Sequela (7th Character S) — Two Codes, in Order",
    codes: "S00–T88 (7th character S)",
    summary: [
      "7th character S (sequela) is for complications or conditions that arise as a direct result of an injury — for example, scar formation after a burn.",
      "Two codes are needed: the specific type of sequela (the scar) is sequenced FIRST, followed by the injury code that precipitated it.",
      "The 7th character S is added ONLY to the injury code — never to the sequela code.",
    ],
    easy: {
      scenario: "A patient is seen for a scar that formed after a burn healed.",
      answer: "Report the scar code first, then the burn code with 7th character S. The S goes only on the burn code.",
    },
    hard: {
      scenario: "A coder puts 7th character S on both the scar code and the burn code.",
      answer: "Incorrect — the S is added only to the injury code that caused the sequela. The sequela (scar) code doesn't take it.",
    },
    tips: [
      "Sequela first, injury code with S second.",
      "The S identifies the injury responsible for the sequela; it does not go on the sequela code.",
    ],
  },
  {
    n: 3,
    title: "Coding Injuries — Separate Codes, Most Serious First",
    codes: "S00–T14.9 · T07",
    summary: [
      "Assign a separate code for EACH injury unless a combination code is provided — in which case the combination code is used.",
      "T07 (unspecified multiple injuries) should not be assigned in the inpatient setting unless information for a more specific code isn't available.",
      "Traumatic injury codes (S00–T14.9) are NOT used for normal, healing surgical wounds or to identify complications of surgical wounds.",
      "The most serious injury — as determined by the provider and the focus of treatment — is sequenced first.",
    ],
    easy: {
      scenario: "A patient arrives with a fractured wrist and a facial laceration. The provider states the fracture is the most serious injury and the focus of treatment.",
      answer: "Code each injury separately and sequence the fracture first.",
    },
    hard: {
      scenario: "A patient has a normal, healing surgical incision, and the coder considers a traumatic wound code for it.",
      answer: "Incorrect — traumatic injury codes aren't used for normal, healing surgical wounds or for complications of surgical wounds.",
    },
    tips: [
      "'Most serious' is the provider's determination and the focus of treatment — not the coder's opinion.",
      "T07 is a last resort in the inpatient setting.",
    ],
  },
  {
    n: 4,
    title: "Superficial Injuries, Nerve/Vessel Damage, and Iatrogenic Injuries",
    codes: "S00–T14.9 · S04 · S15",
    summary: [
      "Superficial injuries such as abrasions or contusions are NOT coded when they are associated with a more severe injury of the same site.",
      "When a primary injury causes MINOR damage to peripheral nerves or blood vessels, the primary injury is sequenced first, with additional code(s) for the nerve and spinal cord injury (such as category S04) and/or the blood vessel injury (such as category S15).",
      "When the PRIMARY injury is to the blood vessels or nerves, that injury is sequenced first.",
      "Injury codes from Chapter 19 are NOT assigned for injuries that occur during or as a result of a medical intervention. Assign the appropriate complication code(s) instead.",
    ],
    easy: {
      scenario: "A patient has a bruise over the same area as a fractured forearm bone.",
      answer: "Only the fracture is coded — the contusion is a superficial injury at the same site as a more severe injury.",
    },
    hard: {
      scenario: "During a surgical procedure, a nerve is accidentally injured. The coder considers a Chapter 19 nerve injury code.",
      answer: "Incorrect — an injury occurring during or as a result of a medical intervention is coded with complication codes, not Chapter 19 injury codes.",
    },
    tips: [
      "Same site plus a more severe injury = skip the superficial one.",
      "Caused by treatment (iatrogenic) = complication codes, not injury codes.",
    ],
  },
  {
    n: 5,
    title: "Traumatic Fractures — Defaults, Multiple Fractures, Physeal, and Gustilo",
    codes: "S02–S92 (fractures)",
    summary: [
      "Fractures of specified sites are coded individually by site, following the provisions within the fracture categories and the level of detail in the record.",
      "A fracture NOT indicated as open or closed is coded as CLOSED. A fracture NOT indicated as displaced or nondisplaced is coded as DISPLACED.",
      "Multiple fractures are sequenced in accordance with the SEVERITY of the fracture.",
      "For physeal fractures (fractures through a growing bone's growth plate), assign only the code identifying the TYPE of physeal fracture. Do not add a separate code for the specific bone that is fractured.",
      "The open-fracture 7th characters for fractures of the forearm, femur, and lower leg (including the ankle) are based on the Gustilo classification (a severity grading for open fractures). If the Gustilo type isn't specified for an open fracture, assign the 7th character for open fracture type I or II (B, E, H, M, Q).",
    ],
    easy: {
      scenario: "A record says 'fractured tibia' with no mention of open, closed, displaced, or nondisplaced.",
      answer: "Code it as a closed, displaced fracture — the defaults apply when the record is silent.",
    },
    hard: {
      scenario: "A provider documents an open fracture of the lower leg without stating a Gustilo type.",
      answer: "Assign the 7th character for open fracture type I or II (B, E, H, M, or Q as appropriate to the encounter).",
    },
    tips: [
      "Silence defaults to closed AND displaced.",
      "A physeal fracture gets one code for the physeal type — no separate bone code.",
      "Gustilo applies to the forearm, femur, and lower leg (including ankle) — and an unspecified type defaults to I or II.",
    ],
  },
  {
    n: 6,
    title: "Fractures — 7th Characters, Complications, Osteoporosis, and Aftercare",
    codes: "S-fractures · M80",
    summary: [
      "Traumatic fractures use the initial-encounter 7th characters (A, B, C) at EACH encounter where the patient is receiving active treatment — and also for a patient who delayed seeking treatment for the fracture or for nonunion.",
      "Subsequent-care 7th characters apply after active treatment is completed and the patient is receiving routine care during the healing or recovery phase.",
      "Complications of fractures are reported with the 7th character for subsequent care with nonunion (the fracture fails to heal — K, M, N) or with malunion (it heals in a poor position — P, Q, R).",
      "Care for complications of SURGICAL treatment of a fracture during healing or recovery is coded with the appropriate complication codes.",
      "A code from category M80 — NOT a traumatic fracture code — is used for any patient with known osteoporosis who suffers a fracture, even after a minor fall or trauma that wouldn't usually break a normal, healthy bone.",
      "Aftercare Z codes are NOT used for aftercare of traumatic fractures. Assign the acute fracture code with the appropriate 7th character.",
    ],
    easy: {
      scenario: "A patient with known osteoporosis fractures a vertebra after a minor fall.",
      answer: "Use a code from category M80 (osteoporotic fracture), not a traumatic fracture code.",
    },
    hard: {
      scenario: "A patient is attending routine follow-up for a healing tibial fracture with no complications; the coder considers an aftercare Z code.",
      answer: "Incorrect — assign the acute fracture code with a subsequent-care 7th character. Aftercare Z codes aren't used for traumatic fractures.",
    },
    tips: [
      "Osteoporosis + fracture = M80, even after a minor fall.",
      "Nonunion uses K/M/N; malunion uses P/Q/R.",
      "Delayed presentation still gets the initial-encounter 7th characters.",
    ],
  },
  {
    n: 7,
    title: "Burns & Corrosions — Classification and Sequencing",
    codes: "T20–T28",
    summary: [
      "ICD-10-CM separates burns from corrosions. Burn codes are for thermal burns (except sunburn) from a heat source such as fire or a hot appliance, and for burns from electricity and radiation. Corrosions are burns from chemicals. The guidelines are the same for both.",
      "Current burns (T20–T25) are classified by depth, extent, and agent (an X external cause code). Depth is first degree (erythema), second degree (blistering), or third degree (full-thickness involvement). Burns of the eye and internal organs (T26–T28) are classified by site, not by degree.",
      "When more than one burn is present, sequence first the code for the highest degree of burn.",
      "When a patient has both internal and external burns, the circumstances of admission govern the principal/first-listed diagnosis. The same is true when a patient is admitted for burns plus related conditions such as smoke inhalation or respiratory failure.",
    ],
    easy: {
      scenario: "A patient is admitted for treatment of first-degree burns of the arm and third-degree burns of the leg.",
      answer: "Sequence the third-degree burn code first — the highest degree of burn.",
    },
    hard: {
      scenario: "A patient with external burns and smoke inhalation is admitted mainly for respiratory failure.",
      answer: "The circumstances of admission govern. Admitted mainly for respiratory failure, the respiratory failure can be first-listed; admitted mainly for burn treatment, the burn is first-listed. There is no automatic 'burn first' rule.",
    },
    tips: [
      "Highest degree first when treating multiple burns.",
      "Eye and internal organ burns (T26–T28) have no degree — they're classified by site.",
      "Internal + external burns, or burns + smoke inhalation: the circumstances of admission decide.",
    ],
  },
  {
    n: 8,
    title: "Burn Site Rules — Same Site, Separate Sites, T30, and Multiple Sites",
    codes: "T20–T25 · T30",
    summary: [
      "Burns of the same anatomic site and the same side but of different degrees are classified to the subcategory identifying the highest degree recorded. For example, second- and third-degree burns of the right thigh → only the third-degree code (T24.311-).",
      "Assign separate codes for each burn site.",
      "Category T30 (burn and corrosion, body region unspecified) is extremely vague and should rarely be used. Codes for burns of 'multiple sites' are assigned only when the record doesn't specify the individual sites.",
      "An external cause code should be used with burns and corrosions to identify the source and intent of the burn and the place where it occurred.",
    ],
    easy: {
      scenario: "The record documents second- and third-degree burns of the right thigh.",
      answer: "Assign only the third-degree code for the right thigh (T24.311-) — same site, same side, highest degree.",
    },
    hard: {
      scenario: "A record says 'burns of multiple sites' but lists the burned sites individually.",
      answer: "Code each documented site separately. The 'multiple sites' code is only for records that don't specify the individual sites.",
    },
    tips: [
      "Same site + same side + different degrees = one code at the highest degree.",
      "Different sites = separate codes. T30 and 'multiple sites' are last resorts.",
      "Add an external cause code for the source, intent, and place of the burn.",
    ],
  },
  {
    n: 9,
    title: "Burn Special Situations — Non-Healing, Infected, Extent, and Sequelae",
    codes: "T20–T25 · T31 · T32",
    summary: [
      "Non-healing burns are coded as acute burns. Necrosis of burned skin is coded as a non-healed burn.",
      "For any documented infected burn site, use an additional code for the infection.",
      "Categories T31 (burns classified by extent of body surface involved) and T32 (corrosions classified by extent) are used for acute burns when the site isn't specified or when additional data is needed — for example, burn-unit mortality data. It is advisable to add T31 as an additional code whenever a third-degree burn covers 20 percent or more of the body surface. They are NOT used for sequelae. The rule of nines: head and neck 9%, each arm 9%, each leg 18%, anterior trunk 18%, posterior trunk 18%, genitalia 1% — providers may adjust these percentages for infants and children (proportionately larger heads) and for patients with large buttocks, thighs, or abdomen.",
      "Encounters for late effects of burns or corrosions (scars, joint contractures) are coded with a burn or corrosion code with 7th character S. A current burn (A or D) and a sequela (S) code can both be assigned on the same record when a healing wound and a healed-burn sequela exist together.",
    ],
    easy: {
      scenario: "A burn wound isn't healing, and necrosis of the burned skin is documented.",
      answer: "Code it as an acute burn — non-healing burns are coded as acute, and necrosis of burned skin is a non-healed burn.",
    },
    hard: {
      scenario: "A patient has a healed burn with a scar contracture and a separate burn that is still healing.",
      answer: "Both may be reported on the same record — the current burn with 7th character A or D, and the healed burn with 7th character S for the sequela.",
    },
    tips: [
      "Non-healing or necrotic = acute burn.",
      "Infected burn = add a code for the infection.",
      "T31/T32 are for extent-of-body-surface data — never for sequelae.",
    ],
  },
];

const mainStyle = { maxWidth: "1160px", margin: "0 auto", padding: "36px 24px 64px", minHeight: "100vh", background: "#f6f9f9", color: "#141d1c", fontFamily: "Arial, sans-serif" };
const heroStyle = { background: "linear-gradient(135deg, #101719, #0f766e)", color: "white", padding: "46px 42px", borderRadius: "18px", marginBottom: "26px", boxShadow: "0 12px 28px rgba(16,23,25,0.22)" };
const kickerStyle = { margin: "0 0 10px", color: "#99f6e4", fontWeight: 800, letterSpacing: "0.08em" };
const navStyle = { display: "flex", flexWrap: "wrap" as const, gap: "10px", marginBottom: "26px" };
const navLinkStyle = { textDecoration: "none", color: "#0f766e", background: "#ffffff", border: "1px solid #dbe3e1", borderRadius: "999px", padding: "10px 15px", fontWeight: 700, fontSize: "14px" };
const pagerStyle = { display: "flex", flexWrap: "wrap" as const, gap: "10px", marginBottom: "26px" };
const pagerLinkStyle = { textDecoration: "none", color: "#0f766e", background: "#f0fdfa", border: "1px solid #99f6e4", borderRadius: "999px", padding: "8px 16px", fontWeight: 700, fontSize: "14px" };
const pagerActiveStyle = { ...pagerLinkStyle, background: "#0f766e", color: "#fff", border: "1px solid #0f766e" };
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

export default function Icd10Chapter19GuidelinesReviewerPage() {
  return (
    <main style={mainStyle}>
      <header style={heroStyle}>
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 19 · 2026 OFFICIAL GUIDELINES</p>
        <h1 style={{ margin: 0, fontSize: "clamp(26px, 5vw, 44px)" }}>Injury, Poisoning &amp; Certain Other Consequences of External Causes</h1>
        <p style={{ margin: "12px 0 0", fontSize: "18px", lineHeight: 1.5 }}>Part 1 — 7th characters (A, D, S), coding injuries, traumatic fractures, and burns and corrosions. S00–T88.</p>
      </header>

      <div style={pagerStyle}>
        <span style={pagerActiveStyle}>Part 1 — Injuries, Fractures & Burns</span>
        <Link href="/icd10/chapter-19-guidelines-reviewer-part-2" style={pagerLinkStyle}>Part 2 — Drug Reactions, Abuse & Complications →</Link>
      </div>

      <nav aria-label="ICD-10 navigation" style={navStyle}>
        <Link href="/icd10" style={navLinkStyle}>ICD-10-CM home</Link>
        <Link href="/icd10/chapter-19-practice-quiz" style={navLinkStyle}>Practice Quiz</Link>
        <Link href="/icd10/chapter-19-worked-examples" style={navLinkStyle}>Worked Examples</Link>
        <Link href="/icd10/chapter-19-flashcards" style={navLinkStyle}>Flashcards</Link>
      </nav>

      <section style={introStyle}>
        <strong>How to use this reviewer:</strong> same format as the other ICD-10 chapters — a plain-language rule summary, an easy and a hard example scenario with reasoning, and a tips/traps box for each topic. Written as an original summary, not a copy of the guideline text. Chapter 19 is one of the densest guideline chapters, so it is split in two: this Part 1 covers 7th characters, injuries, fractures, and burns; Part 2 covers drug reactions (adverse effects, poisoning, underdosing, toxic effects), abuse, and complications of care.
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

      <div style={{ marginTop: "10px", display: "flex", flexWrap: "wrap" as const, gap: "16px" }}>
        <Link href="/icd10/chapter-19-guidelines-reviewer-part-2" style={backLinkStyle}>Continue to Part 2 →</Link>
        <Link href="/icd10" style={backLinkStyle}>← Back to ICD-10-CM</Link>
      </div>
    </main>
  );
}
