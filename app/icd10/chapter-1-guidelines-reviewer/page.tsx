import Link from "next/link";

type Topic = {
  n: number;
  title: string;
  codes: string;
  summary: string[];
  steps: string[];
  easy: { scenario: string; answer: string };
  hard: { scenario: string; answer: string };
  tips: string[];
};

const topics: Topic[] = [
  {
    n: 1,
    title: "HIV Infections",
    codes: "B20, Z21, R75, Z11.4, Z71.7, Z29.81, O98.7-, D59.31, Z79.899",
    summary: [
      "Only code HIV when it's confirmed — but \"confirmed\" here just means the provider says so in the documentation; you don't need a positive lab result to code it. This is a specific exception to the usual inpatient rule against coding uncertain diagnoses.",
      "If the patient is admitted for an HIV-related reason, B20 (HIV disease) is the principal diagnosis, followed by codes for every HIV-related condition being treated. Exception: if the actual reason for admission is hemolytic-uremic syndrome associated with HIV disease, D59.31 (Infection-associated hemolytic-uremic syndrome) becomes principal instead, with B20 following as secondary.",
      "If a patient with existing HIV disease is admitted for something unrelated (like a fracture), the unrelated condition is principal — B20 and the related conditions drop down to secondary diagnoses.",
      "Once a patient has ever been diagnosed with an HIV-related illness (B20), that code follows them on every future encounter, forever — even if they're currently asymptomatic. Never downgrade a B20 patient back to Z21 or R75.",
      "Asymptomatic, HIV-positive with no illness → Z21. Inconclusive serology → R75. Testing without symptoms → Z11.4 (screening). Negative follow-up results → Z71.7 (counseling). If symptoms of HIV are actually present at the time of testing, code those symptoms instead of Z11.4 — the screening code is only for patients without any signs or symptoms.",
      "Pregnancy always takes sequencing priority: a code from O98.7- comes first, then B20 (symptomatic) or Z21 (asymptomatic).",
      "Pre-exposure prophylaxis (PrEP) for a patient who doesn't have HIV → Z29.81, plus any documented risk-factor codes.",
      "Antiretroviral management alone doesn't change the underlying logic: a patient with documented HIV disease/illness/AIDS who's on antiretroviral therapy is still B20. A patient who's simply HIV-positive (no documented illness) and on antiretrovirals is still Z21. Either way, Z79.899 (long-term current drug therapy) can be added to flag the ongoing antiretroviral use.",
    ],
    steps: [
      "Step 1 — Is the diagnosis actually confirmed by the provider's own documented statement? If it's only suspected/probable, stop here and code the presenting symptoms instead — don't continue to the steps below.",
      "Step 2 — Check history: has this patient ever qualified for B20 before? If yes, B20 is coded on this encounter too, no matter how they present today.",
      "Step 3 — If this is genuinely the first time and there's no illness yet, decide between Z21 (asymptomatic/positive) and R75 (inconclusive serology).",
      "Step 4 — Identify why this specific encounter is happening — HIV-related treatment, an unrelated condition, pregnancy, antiretroviral management, PrEP, or testing/screening — and apply that scenario's sequencing rule.",
    ],
    easy: {
      scenario: "A patient is admitted with PCP pneumonia and the provider documents \"AIDS.\"",
      answer: "B20 (HIV disease) as principal diagnosis, followed by the pneumonia code as a secondary diagnosis.",
    },
    hard: {
      scenario: "A patient with a long-standing history of HIV-related illness (previously coded B20) is admitted after a car accident for a broken leg. No HIV symptoms are currently active.",
      answer: "The fracture code is principal (that's the actual reason for this admission). B20 is still reported as a secondary diagnosis — because once a patient has ever qualified for B20, it's coded on every future encounter, regardless of current symptoms.",
    },
    tips: [
      "\"Newly diagnosed vs. previously diagnosed\" never changes the sequencing logic — only whether the current admission reason is HIV-related or not matters.",
      "The classic trap: seeing \"asymptomatic\" in a chart and jumping to Z21 without checking whether this patient has ever had a B20-qualifying illness before. If they have, it's always B20.",
      "HUS is the one HIV-related-admission exception worth memorizing on its own: normally B20 leads, but if HUS associated with HIV disease is the actual reason for the visit, D59.31 jumps ahead of B20 instead.",
      "Being on antiretrovirals doesn't upgrade a Z21 patient to B20 by itself — the drug therapy only tells you they're being managed, not that an HIV-related illness has actually developed. Look for an actual documented illness before making that jump.",
    ],
  },
  {
    n: 2,
    title: "Infectious Agents as the Cause of Diseases Classified Elsewhere",
    codes: "B95, B96, B97",
    summary: [
      "Some infection codes outside Chapter 1 (like a lot of pneumonia or UTI codes) don't specify which organism caused them. When that's the case, add a second code to identify the organism: B95 (strep/staph/enterococcus), B96 (other bacteria), or B97 (viral agents).",
      "This only applies when there's an instructional note at the original infection code telling you an additional organism code is needed — it's not automatic for every infection.",
    ],
    steps: [
      "Step 1 — Does the primary condition code already name the organism? If yes, you're done — nothing more to add.",
      "Step 2 — If not, check for an instructional note at that code requiring an additional organism code.",
      "Step 3 — If one's required, identify the organism family and pick the matching code: strep/staph/enterococcus → B95, other bacteria → B96, viral → B97.",
    ],
    easy: {
      scenario: "A patient has cellulitis documented as due to Staphylococcus aureus (not MRSA).",
      answer: "The cellulitis code, plus an additional code from B95 identifying staph as the cause.",
    },
    hard: {
      scenario: "A patient has a urinary tract infection documented as due to E. coli, and the UTI code itself doesn't specify an organism.",
      answer: "The UTI code, plus a B96 code identifying E. coli as the cause — two codes working together to tell the complete story.",
    },
    tips: [
      "Think of B95/B96/B97 as \"the organism's ID badge\" — they only get added when the main condition code doesn't already name the organism itself.",
      "If the main code already bakes the organism into its own description (like a combination code), don't add a B95–B97 code on top — that's double-reporting the same information.",
    ],
  },
  {
    n: 3,
    title: "Infections Resistant to Antibiotics",
    codes: "Z16",
    summary: [
      "When documentation says an infection is resistant to a specific antibiotic (or antibiotic class), add a code from Z16 (Resistance to antimicrobial drugs) — but only if the infection code itself doesn't already capture that resistance.",
    ],
    steps: [
      "Step 1 — Does the infection code (or organism combination code) already identify drug resistance on its own? If yes, stop — no Z16 needed.",
      "Step 2 — If not, and resistance is actually documented, add the matching Z16 code after the infection/organism code(s).",
    ],
    easy: {
      scenario: "A UTI due to E. coli is documented as resistant to a specific antibiotic, and neither the UTI code nor the organism code mentions resistance.",
      answer: "UTI code + organism code (B96) + the matching Z16 resistance code.",
    },
    hard: {
      scenario: "A patient has pneumonia due to MRSA, using the specific combination code that already names both the pneumonia and the MRSA organism.",
      answer: "Just the combination pneumonia-due-to-MRSA code — do not add a Z16 penicillin-resistance code on top, since the combination code already communicates that resistance.",
    },
    tips: [
      "This rule is the direct sibling of the MRSA guideline below — whenever a combination code already names a resistant organism, adding Z16 on top is a duplicate, not an enhancement.",
    ],
  },
  {
    n: 4,
    title: "Sepsis, Severe Sepsis & Septic Shock",
    codes: "A41.9, R65.2-, R65.21, T81.12-, T81.4-, T81.44, D59.31",
    summary: [
      "Plain sepsis: code the underlying systemic infection. If no organism is specified, use A41.9 (Sepsis, unspecified organism).",
      "Severe sepsis always needs at least two codes: the infection code first, then a code from R65.2- (Severe sepsis) — plus a code for every associated acute organ dysfunction. R65.2- is never used unless severe sepsis or an organ dysfunction is actually documented, and it can never be a principal diagnosis by itself.",
      "The organ dysfunction has to actually be tied to the sepsis to justify R65.2-. If documentation says the organ dysfunction is due to a different condition entirely, don't add R65.2- for it — and if it's genuinely unclear which condition caused the dysfunction, query the provider rather than guessing.",
      "Septic shock: infection code first, then R65.21 (severe sepsis with septic shock) — the septic shock code itself can never be a principal diagnosis.",
      "If severe sepsis is present on admission and qualifies as the principal diagnosis, the infection is principal and R65.2- follows it. If severe sepsis develops later during the stay, both codes become secondary diagnoses instead.",
      "Sepsis plus a localized infection (like pneumonia): the systemic infection is coded first, the localized infection second — unless the localized infection was the reason for admission and sepsis only developed afterward, in which case the order flips.",
      "Postprocedural sepsis: code the specific postprocedural infection site first (from the T81.4- family, or the obstetric-wound-infection equivalent), then the postprocedural sepsis code, then the organism, then severe sepsis codes if applicable. If that postprocedural infection actually progresses to postprocedural septic shock, use T81.12- for the shock — not R65.21, which is reserved for shock tied to sepsis outside the postprocedural context.",
      "Sepsis from a noninfectious trigger (like a burn): if the noninfectious condition qualifies as principal diagnosis, it's sequenced first, followed by the resulting infection. Only one code from the R65 category is ever used per encounter. (If the infection itself is what actually qualifies as principal diagnosis instead, it can be sequenced first — either the noninfectious condition or the infection may lead when both genuinely qualify.)",
      "Hemolytic-uremic syndrome associated with sepsis follows the same pattern as the HIV version: if HUS is the actual reason for admission, D59.31 becomes the principal diagnosis, with the underlying infection (and severe sepsis, if present) coded as secondary.",
      "\"Urosepsis\" is a vague, non-specific term with no default code — always query the provider rather than guessing it means sepsis.",
    ],
    steps: [
      "Step 1 — Is a specific organism documented? If not, default to A41.9.",
      "Step 2 — Is severe sepsis or an acute organ dysfunction actually documented (and clearly tied to the sepsis, not another condition)? If no, stop here — plain sepsis code only.",
      "Step 3 — If yes, add R65.2- after the infection code, plus a separate code for each organ dysfunction. If it's shock, that's R65.21 (or T81.12- specifically for a postprocedural case).",
      "Step 4 — Check timing: present on admission and qualifies as principal → infection is principal, R65.2- follows. Developed during the stay → both become secondary.",
      "Step 5 — Check for a special context that changes the pattern: a localized infection, a postprocedural source, a noninfectious trigger, or HUS — each has its own specific sequencing rule layered on top of the base pattern above.",
    ],
    easy: {
      scenario: "A patient is admitted with fever and documented sepsis. No organism is identified, and there's no mention of organ dysfunction.",
      answer: "A41.9 (Sepsis, unspecified organism) alone — no R65.2- code, because no severe sepsis or organ dysfunction was documented.",
    },
    hard: {
      scenario: "A patient is admitted for pneumonia. Several days into the stay, they develop sepsis with acute kidney injury that wasn't present on admission.",
      answer: "Pneumonia is principal (it was the actual reason for admission). Sepsis and R65.20 (severe sepsis without septic shock) are secondary diagnoses, since they developed after admission, plus a separate code for the acute kidney injury.",
    },
    tips: [
      "R65.2- can never stand alone as a principal diagnosis — it always rides along after the infection code.",
      "\"Present on admission\" vs. \"developed during the stay\" is the single biggest lever for sepsis sequencing questions — always check which one the scenario describes before picking principal vs. secondary.",
      "Negative or inconclusive blood cultures don't rule out a sepsis diagnosis on their own — but they're also a signal to consider querying the provider.",
      "Postprocedural septic shock is a naming trap: it uses T81.12-, not R65.21, even though both describe the same clinical idea (shock layered on top of sepsis) — the postprocedural context changes the code family entirely.",
      "Don't assume every organ dysfunction in a septic patient's chart automatically justifies R65.2- — it has to actually be caused by the sepsis. An unrelated organ dysfunction, or an unclear one, is a query trigger, not an automatic code.",
    ],
  },
  {
    n: 5,
    title: "MRSA (Methicillin-Resistant Staph aureus)",
    codes: "B95.62, Z22.322, Z22.321",
    summary: [
      "If a combination code exists that already names both the condition and MRSA as the cause (for example, sepsis due to MRSA, or pneumonia due to MRSA), use just that one combination code — don't add B95.62 or a Z16 resistance code on top of it.",
      "If no combination code exists for that particular condition (like a simple wound infection or UTI due to MRSA), code the condition itself plus B95.62 as an additional code to identify MRSA as the cause.",
      "MRSA colonization (carrying the organism without being sick from it) is a completely different concept from infection, and uses its own code: Z22.322. MSSA colonization uses Z22.321.",
      "A patient can have both MRSA colonization and an active MRSA infection documented and coded at the same time.",
    ],
    steps: [
      "Step 1 — Is this colonization (carrier/screen-positive, no illness) or an active infection? Colonization goes to Z22.322 (MRSA) or Z22.321 (MSSA) — different path entirely from the steps below.",
      "Step 2 — For an active infection, check whether a combination code already exists naming both the condition and MRSA. If yes, that's your only code.",
      "Step 3 — If no combination code exists, code the condition itself plus B95.62 as an additional code.",
    ],
    easy: {
      scenario: "A routine admission screening swab comes back \"MRSA positive,\" and the patient has no signs of active infection.",
      answer: "Z22.322 (Carrier or suspected carrier of MRSA) — colonization, not infection.",
    },
    hard: {
      scenario: "A patient is admitted with sepsis, and the documentation specifies it's due to MRSA, using the specific combination code for sepsis due to MRSA.",
      answer: "Just the one combination code — do not additionally report B95.62, since the combination code already fully identifies both the condition and the causal organism.",
    },
    tips: [
      "Ask first: \"does a combination code already exist for this exact condition + MRSA?\" If yes, that's your only code. If no, that's when B95.62 gets added separately.",
      "Colonization is not automatically the cause of whatever illness the patient has — only code it as a contributing cause if the provider actually documents that connection.",
    ],
  },
  {
    n: 6,
    title: "Zika Virus Infections",
    codes: "A92.5, Z20.821",
    summary: [
      "Code A92.5 (Zika virus disease) only for a confirmed diagnosis, based on the provider's own documented statement — no specific lab test needs to be documented for it to count as \"confirmed.\" This is another exception to the general uncertain-diagnosis rule.",
      "If the documentation says \"suspected,\" \"possible,\" or \"probable\" Zika, do not use A92.5 at all — instead, code the presenting signs/symptoms, or use Z20.821 (contact with and suspected exposure to Zika virus) if that's the actual clinical picture.",
    ],
    steps: [
      "Step 1 — Is it confirmed by the provider's own documented statement? If yes, code A92.5 — no specific test result is required.",
      "Step 2 — If it's only suspected/possible/probable, don't use A92.5 at all. Code the presenting symptoms, and add Z20.821 if exposure is specifically what's being tracked.",
    ],
    easy: {
      scenario: "A returning traveler has a rash, and the provider documents \"confirmed Zika virus infection.\"",
      answer: "A92.5 (Zika virus disease).",
    },
    hard: {
      scenario: "A patient recently traveled to a Zika-endemic area and has joint pain and fever. The provider documents \"possible Zika, pending results.\"",
      answer: "Do not assign A92.5. Instead, code the presenting symptoms (joint pain, fever), and consider Z20.821 if exposure is specifically being tracked.",
    },
    tips: [
      "Zika and COVID-19 share the exact same \"confirmed by provider statement alone\" logic — but both also share the same hard stop: \"suspected/possible/probable\" language blocks the disease-specific code every time, no exceptions.",
    ],
  },
  {
    n: 7,
    title: "COVID-19 (SARS-CoV-2 Infection)",
    codes: "U07.1, U09.9, Z20.822, Z11.52, M35.81, Z86.16, Z01.84, J12.82, J20.8, J40, J22, J98.8, J80, J96.0-",
    summary: [
      "Code U07.1 only for a confirmed diagnosis — either the provider's own documented statement, or a positive test result. \"Suspected/possible/probable/inconclusive\" documentation blocks U07.1 — code the presenting signs/symptoms instead.",
      "When COVID-19 is the reason for admission, U07.1 is sequenced first, followed by codes for the specific manifestations (respiratory or non-respiratory) — unless another guideline (like obstetrics, sepsis, or transplant complications) overrides that sequencing.",
      "Common respiratory manifestations each have their own matching code to pair with U07.1: pneumonia → J12.82; acute bronchitis → J20.8 (or J40 if it's bronchitis with no acute/chronic specification); an unspecified lower respiratory infection → J22 (or J98.8 for a respiratory infection described even less specifically); ARDS → J80; acute respiratory failure → J96.0-.",
      "Exposure without confirmed infection → Z20.822. Screening (including preoperative) → Z11.52. Symptoms present but no definitive diagnosis yet → code the symptoms only (e.g., cough, shortness of breath, fever), adding Z20.822 if exposure is also documented.",
      "An asymptomatic positive test result alone, without the provider actually documenting a COVID-19 diagnosis, is not enough to code U07.1 — query the provider first, since false positives happen.",
      "Personal history of resolved COVID-19 → Z86.16. A negative follow-up visit after resolution → Z09 plus Z86.16. Antibody testing that isn't confirming a current infection or following up a past one → Z01.84.",
      "Multisystem Inflammatory Syndrome (MIS): with an active current COVID-19 infection → U07.1 + M35.81. With a history of COVID-19 (no current infection) → M35.81 + U09.9. With only known/suspected exposure (no infection ever confirmed) → M35.81 + Z20.822.",
      "Post COVID-19 condition (lingering symptoms after the infection has resolved) → code the specific lingering symptom(s), plus U09.9. U09.9 is never used to describe manifestations of a current, active infection — though it can be reported alongside a brand-new active U07.1 infection if the patient also still has lingering effects from an earlier bout.",
    ],
    steps: [
      "Step 1 — Is it confirmed (provider statement or positive test)? If not, stop here — code the presenting symptoms only, plus Z20.822 if exposure applies.",
      "Step 2 — If confirmed and it's the reason for this encounter, sequence U07.1 first (unless OB, sepsis, or transplant guidelines override that).",
      "Step 3 — Add the manifestation code(s) — pick the matching respiratory code (pneumonia/bronchitis/lower respiratory infection/ARDS/respiratory failure) or the appropriate non-respiratory manifestation code.",
      "Step 4 — Check for a special context instead of the standard active-infection pattern: exposure only, screening, an unconfirmed asymptomatic positive (query first), personal history, a resolved-infection follow-up, antibody testing, MIS, or post-COVID condition — each has its own dedicated code set.",
    ],
    easy: {
      scenario: "A patient is admitted with a positive COVID-19 test and pneumonia documented as due to COVID-19.",
      answer: "U07.1 (COVID-19) as principal diagnosis, plus the specific COVID-19 pneumonia code as a secondary diagnosis.",
    },
    hard: {
      scenario: "A patient who had COVID-19 two months ago now presents with persistent shortness of breath and fatigue. Their current COVID-19 test is negative.",
      answer: "Code the specific lingering symptom(s) (like shortness of breath), plus U09.9 (Post COVID-19 condition) — not U07.1, since there's no active, current infection this time.",
    },
    tips: [
      "U07.1 and U09.9 are never about the same episode of illness: U07.1 = active, current, confirmed infection. U09.9 = lingering effects after the infection is already gone. Mixing the two up on the same active episode is the single most common COVID-19 coding trap.",
      "\"Suspected/possible/probable/inconclusive\" always blocks U07.1 — the confirmation exception only forgives the lack of a specific test, it doesn't forgive genuine diagnostic uncertainty.",
      "A positive test alone, sitting in the chart with zero provider diagnosis statement, is a query trigger — not an automatic green light to code U07.1.",
      "The five respiratory manifestation codes aren't interchangeable — match the exact wording documented: \"pneumonia\" → J12.82, \"acute bronchitis\" → J20.8, plain \"bronchitis\" with no acute/chronic mention → J40, an unspecified lower respiratory infection → J22, ARDS → J80, acute respiratory failure → J96.0-.",
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
const stepsBoxStyle = { background: "#eff6ff", border: "1px solid #bfdbfe", borderLeft: "5px solid #2563eb", borderRadius: "10px", padding: "14px 16px", marginTop: "6px", marginBottom: "16px", lineHeight: 1.65, fontSize: "13.5px" };
const backLinkStyle = { textDecoration: "none", color: "#0f766e", fontWeight: 700 };

export default function Icd10Chapter1GuidelinesReviewerPage() {
  return (
    <main style={mainStyle}>
      <header style={heroStyle}>
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 1 · 2026 OFFICIAL GUIDELINES</p>
        <h1 style={{ margin: 0, fontSize: "clamp(28px, 5.5vw, 48px)" }}>Certain Infectious &amp; Parasitic Diseases</h1>
        <p style={{ margin: "12px 0 0", fontSize: "18px", lineHeight: 1.5 }}>HIV, sepsis, MRSA, Zika, and COVID-19 coding guidelines — summarized, with an easy and a hard example scenario for each.</p>
      </header>

      <nav aria-label="ICD-10 navigation" style={navStyle}>
        <Link href="/icd10" style={navLinkStyle}>ICD-10-CM home</Link>
        <Link href="/icd10/chapter-1-practice-quiz" style={navLinkStyle}>Practice Quiz</Link>
        <Link href="/cpt" style={navLinkStyle}>CPT home</Link>
      </nav>

      <section style={introStyle}>
        <strong>How to use this reviewer:</strong> each topic below has a plain-language rule summary, a step-by-step &quot;how to code this&quot; walkthrough, one easy example and one harder/trickier example (with the reasoning spelled out), and a tips-and-traps box. This is a summary written in original wording — not a copy of the official guideline text — built specifically for fast review.
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

          <p style={labelStyle}>🪜 STEP BY STEP — HOW TO CODE THIS</p>
          <div style={stepsBoxStyle}>
            <ol style={{ margin: 0, paddingLeft: "20px", display: "grid", gap: "8px" }}>
              {t.steps.map((step) => <li key={step}>{step}</li>)}
            </ol>
          </div>

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
