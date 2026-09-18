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
    title: "Pain Disorders Related to Psychological Factors",
    codes: "F45.41, F45.42, G89.–",
    summary: [
      "F45.41 (Pain disorder exclusively related to psychological factors) is assigned when pain is caused entirely by psychological factors, with no significant physical contribution. Because of an Excludes1 note under category G89 (Pain, not elsewhere classified), a code from G89 should NOT be assigned alongside F45.41 — the two are mutually exclusive.",
      "F45.42 (Pain disorder with related psychological factors) is different: it's used WITH a code from category G89 whenever there's documentation of a psychological component in a patient who also has acute or chronic pain from a physical cause.",
      "The dividing line is whether pain is PURELY psychological (F45.41, no G89 pairing) versus a MIX of physical pain plus a documented psychological component (F45.42, paired with G89).",
    ],
    easy: {
      scenario: "A patient is diagnosed with chronic pain that is exclusively caused by psychological factors, with no identified physical cause.",
      answer: "F45.41 alone — no G89 code is added, since the Excludes1 note under G89 blocks pairing it with F45.41.",
    },
    hard: {
      scenario: "A patient has documented chronic low back pain (a physical condition) plus a clearly documented psychological component contributing to the pain experience.",
      answer: "F45.42 (pain disorder with related psychological factors) PLUS a code from category G89 for the chronic pain — this is the one scenario where the psychological pain code and a G89 code are used together.",
    },
    tips: [
      "F45.41 = psychological factors ONLY, never paired with G89. F45.42 = psychological factors PLUS a physical pain source, always paired with G89. Mixing these two pairings up is the exact trap this topic tests.",
    ],
  },
  {
    n: 2,
    title: "Substance Use Disorders — Selecting \"In Remission\"",
    codes: "F10–F19 (–.11, –.21, –.91)",
    summary: [
      "Codes describing substance use disorders as \"in remission\" (the –.11, –.21, and –.91 5th/6th characters within categories F10–F19) require the PROVIDER'S clinical judgment and are assigned only based on provider documentation — a coder cannot infer remission status from lab results or the absence of recent use alone.",
      "Mild substance use disorders documented as in early or sustained remission are classified using the codes for substance ABUSE in remission.",
      "Moderate or severe substance use disorders documented as in early or sustained remission are classified using the codes for substance DEPENDENCE in remission — a different code family than the mild/abuse remission codes.",
    ],
    easy: {
      scenario: "A provider documents \"severe alcohol use disorder, in sustained remission.\"",
      answer: "A code from the alcohol DEPENDENCE-in-remission family — because the documented severity is severe (moderate/severe maps to the dependence-in-remission codes, not the abuse-in-remission codes).",
    },
    hard: {
      scenario: "A provider documents \"mild cannabis use disorder, in early remission.\"",
      answer: "A code from the cannabis ABUSE-in-remission family — mild severity specifically maps to the abuse-in-remission codes, distinct from the dependence-in-remission codes used for moderate/severe.",
    },
    tips: [
      "Severity is the fork in the road: MILD → abuse-in-remission codes. MODERATE or SEVERE → dependence-in-remission codes. The remission status alone doesn't tell you which family — you also need the documented severity.",
      "Never assign an \"in remission\" code purely from your own inference (e.g., \"no use noted in 6 months\") — it must be the provider's own documented clinical judgment.",
    ],
  },
  {
    n: 3,
    title: "Use, Abuse & Dependence of the Same Substance — Pick One",
    codes: "F10–F19",
    summary: [
      "When documentation for the SAME substance (alcohol, opioid, cannabis, etc.) mentions more than one of use, abuse, and dependence, only ONE code is assigned to describe the pattern — never more than one code for the same substance's use pattern.",
      "The selection follows a fixed hierarchy: if both use and abuse are documented, code only ABUSE. If both abuse and dependence are documented, code only DEPENDENCE. If use, abuse, AND dependence are all documented together, code only DEPENDENCE. If both use and dependence are documented (without abuse mentioned), code only DEPENDENCE.",
      "In short: dependence always wins if it's documented at all; abuse beats use; use alone is the fallback only when nothing stronger is documented.",
    ],
    easy: {
      scenario: "A chart documents both \"alcohol use\" and \"alcohol abuse\" for the same patient, same substance.",
      answer: "Code only alcohol ABUSE — when use and abuse are both documented for the same substance, abuse is the one that's coded.",
    },
    hard: {
      scenario: "A chart documents \"opioid use, opioid abuse, and opioid dependence\" all in the same note, referring to the same substance.",
      answer: "Code only opioid DEPENDENCE — when all three terms appear together for the same substance, dependence is always the single code assigned, regardless of how many weaker terms also appear.",
    },
    tips: [
      "Think of it as a strength ladder: use < abuse < dependence. Whatever the STRONGEST documented term is for that substance is the only one coded — the weaker terms are absorbed into it, not coded separately.",
      "This hierarchy only applies within the SAME substance. Two different substances (e.g., alcohol dependence AND cannabis use) each get their own code independently.",
    ],
  },
  {
    n: 4,
    title: "Psychoactive Substance Use, Unspecified",
    codes: "F10.9–, F11.9–, F12.9–, F13.9–, F14.9–, F15.9–, F16.9–, F18.9–, F19.9–",
    summary: [
      "The \"unspecified use\" codes (the .9– subcategories across F10–F19, except F17 for nicotine which has its own structure) follow the same rule as any other unspecified diagnosis: they're assigned only when based on provider documentation and only when the use meets the definition of a reportable diagnosis.",
      "These unspecified-use codes are used ONLY when the substance use is documented as associated with a chapter 5 disorder (such as a substance-related sexual dysfunction, sleep disorder, or other mental/behavioral disorder) OR with a medical condition — and the provider has documented that relationship.",
      "If substance use is mentioned but there's no documented associated disorder or condition, and it doesn't otherwise meet the reportable-diagnosis definition, it isn't coded just because it's mentioned in passing.",
    ],
    easy: {
      scenario: "A provider documents \"unspecified alcohol use\" as directly associated with a documented alcohol-induced sleep disorder.",
      answer: "F10.9– (unspecified alcohol use) with the appropriate 5th character for the associated sleep disorder — the documented link to a chapter 5 disorder is what justifies assigning the unspecified-use code.",
    },
    hard: {
      scenario: "A social history note mentions \"occasional cannabis use\" with no documented associated disorder or medical condition, and no other indication it meets the reportable-diagnosis criteria.",
      answer: "Not coded — mere mention of substance use in a social history, without a documented associated disorder/condition or a met reportable-diagnosis threshold, doesn't trigger an F12.9– code.",
    },
    tips: [
      "\"Unspecified use\" codes are not a catch-all for any mention of substance use anywhere in the chart — they require an actual documented link to a chapter 5 disorder or medical condition, same as any other reportable diagnosis.",
    ],
  },
  {
    n: 5,
    title: "Medical Conditions Due to Substance Use, Abuse & Dependence",
    codes: "(condition-specific) + F10–F19",
    summary: [
      "Medical conditions caused by substance use, abuse, or dependence are NOT classified as \"substance-induced disorders\" in ICD-10-CM — instead, assign the diagnosis code for the medical condition itself (as directed by the Alphabetic Index), plus the appropriate F10–F19 code identifying the use/abuse/dependence pattern.",
      "Example given directly in the guideline: for alcoholic pancreatitis due to alcohol dependence, assign the pancreatitis code from subcategory K85.2 (alcohol-induced acute pancreatitis) PLUS the appropriate F10.2– code (alcohol dependence). It is explicitly called out as incorrect to instead assign a combination code like F10.288 (alcohol dependence with other alcohol-induced disorder) in place of that pairing.",
    ],
    easy: {
      scenario: "A patient has documented alcoholic pancreatitis, with alcohol dependence also documented.",
      answer: "K85.2 (alcohol-induced acute pancreatitis) PLUS a code from F10.2– (alcohol dependence) — two separate codes, not a single combination code.",
    },
    hard: {
      scenario: "A coder is tempted to assign F10.288 (alcohol dependence with other alcohol-induced disorder) alone to capture alcoholic pancreatitis with alcohol dependence.",
      answer: "Incorrect — the guideline specifically says this is NOT appropriate. The correct approach is the two-code pairing (the K85.2 pancreatitis code plus the F10.2– dependence code), not a single F1x.288-style combination code.",
    },
    tips: [
      "This is a direct, named trap in the guideline text itself: don't reach for an \"other alcohol-induced disorder\" combination code when a specific medical-condition code plus a separate F10–F19 code is the actual correct pairing.",
    ],
  },
  {
    n: 6,
    title: "Blood Alcohol Level",
    codes: "Y90.–",
    summary: [
      "A code from category Y90 (Evidence of alcohol involvement determined by blood alcohol level) may be assigned when this information is documented AND the patient's provider has documented a condition classifiable to category F10 (alcohol-related disorders).",
      "The blood alcohol level itself does NOT need to be documented by the patient's own provider in order to be coded — it can come from another source (e.g., a lab value), as long as the provider has documented the qualifying F10 condition.",
    ],
    easy: {
      scenario: "A patient's provider documents alcohol intoxication (an F10 category condition), and the lab-reported blood alcohol level is available in the chart.",
      answer: "The appropriate F10 code for the intoxication PLUS a Y90 code reflecting the specific blood alcohol level.",
    },
    hard: {
      scenario: "A blood alcohol level is documented by the lab, but the treating provider never documents any condition classifiable to category F10.",
      answer: "No Y90 code is assigned — Y90 requires the provider to have documented a qualifying F10 condition; the blood alcohol level alone, without that provider-documented condition, isn't sufficient.",
    },
    tips: [
      "Two separate documentation requirements, easy to conflate: the F10 CONDITION must be provider-documented, but the blood alcohol LEVEL itself does not need to come from the provider — it just needs to be documented somewhere in the record.",
    ],
  },
  {
    n: 7,
    title: "Factitious Disorder — Imposed on Self vs. on Another (Munchausen's / MSBP)",
    codes: "F68.1–, F68.A, T74–, T76–",
    summary: [
      "Factitious disorder imposed on self (also called Munchausen's syndrome) is when a person falsely reports or actually causes their own physical or psychological signs/symptoms. For a documented case, assign the appropriate code from subcategory F68.1– (Factitious disorder imposed on self).",
      "Munchausen syndrome by proxy (MSBP), also called factitious disorder imposed on another, is different: a caregiver (the perpetrator) falsely reports or causes an illness or injury in someone under their care (the victim) — such as a child, an elderly adult, or a person with a disability.",
      "For MSBP, the PERPETRATOR — not the victim — receives the F68.A (Factitious disorder imposed on another) diagnosis code on their own record.",
      "For the VICTIM of an MSBP perpetrator, assign the appropriate code from category T74 (Adult and child abuse, neglect and other maltreatment, confirmed) or T76 (…suspected) instead — never F68.A, which belongs on the perpetrator's chart only.",
    ],
    easy: {
      scenario: "A patient is documented as falsely reporting and inducing their own symptoms for secondary gain (classic Munchausen's syndrome, self-imposed).",
      answer: "A code from F68.1– (Factitious disorder imposed on self).",
    },
    hard: {
      scenario: "A mother is documented as fabricating and inducing illness symptoms in her child (Munchausen syndrome by proxy). Coding is needed for BOTH the mother's chart and the child's chart.",
      answer: "Mother's (perpetrator's) chart: F68.A (Factitious disorder imposed on another). Child's (victim's) chart: the appropriate T74 (confirmed) or T76 (suspected) child-abuse/maltreatment code — never F68.A on the victim's own record.",
    },
    tips: [
      "F68.A always belongs on the PERPETRATOR's chart, never the victim's — the victim instead gets a T74/T76 maltreatment code. Mixing up whose chart gets which code is the exact trap here.",
      "\"Imposed on self\" (F68.1–) vs. \"imposed on another\" (F68.A) sound almost identical in name but describe two completely different clinical scenarios with different code families and different patients being coded.",
    ],
  },
  {
    n: 8,
    title: "Dementia — Coding by Severity",
    codes: "F01, F02, F03",
    summary: [
      "ICD-10-CM classifies dementia (categories F01, F02, and F03) based on both its etiology (cause) AND its severity: unspecified, mild, moderate, or severe.",
      "Selecting the appropriate severity level requires the PROVIDER'S clinical judgment, and codes should be assigned only based on provider documentation, the same principle as substance-use severity and remission coding elsewhere in this chapter.",
      "If documentation doesn't specify a severity level for the dementia, assign the code for UNSPECIFIED severity — don't guess a severity level that wasn't actually documented.",
      "If a patient is admitted to an inpatient acute care hospital (or another inpatient facility setting) with dementia at one severity level, and the dementia PROGRESSES to a higher severity level during that same stay, assign only ONE code — for the HIGHEST severity level reported at any point during the stay.",
    ],
    easy: {
      scenario: "A patient's vascular dementia is documented without any mention of severity anywhere in the chart.",
      answer: "The vascular dementia code (F01 category) with the unspecified-severity character — never guess a severity level that isn't actually documented.",
    },
    hard: {
      scenario: "A patient is admitted with mild dementia, and partway through the same inpatient stay, the documentation shows the dementia has progressed to severe.",
      answer: "One single code, for the SEVERE severity level — the highest level reported at any point during that stay is what gets coded, not the mild level documented at admission, and not two separate codes for the two severity levels.",
    },
    tips: [
      "Same-encounter severity progression is a one-code rule: code the HIGHEST level reached during the stay, not the admission level and not multiple codes for each level along the way.",
      "\"No severity documented\" defaults to unspecified severity — this mirrors the same don't-guess principle used for substance-use severity and remission status.",
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

export default function Icd10Chapter5GuidelinesReviewerPage() {
  return (
    <main style={mainStyle}>
      <header style={heroStyle}>
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 5 · 2026 OFFICIAL GUIDELINES</p>
        <h1 style={{ margin: 0, fontSize: "clamp(26px, 5vw, 44px)" }}>Mental, Behavioral &amp; Neurodevelopmental Disorders</h1>
        <p style={{ margin: "12px 0 0", fontSize: "18px", lineHeight: 1.5 }}>F01–F99 — psychological pain, substance use/abuse/dependence hierarchy, remission, blood alcohol level, factitious disorder, and dementia severity.</p>
      </header>

      <nav aria-label="ICD-10 navigation" style={navStyle}>
        <Link href="/icd10" style={navLinkStyle}>ICD-10-CM home</Link>
        <Link href="/icd10/chapter-5-practice-quiz" style={navLinkStyle}>Practice Quiz</Link>
        <Link href="/icd10/chapter-5-worked-examples" style={navLinkStyle}>Worked Examples</Link>
        <Link href="/icd10/chapter-5-flashcards" style={navLinkStyle}>Flashcards</Link>
      </nav>

      <section style={introStyle}>
        <strong>How to use this reviewer:</strong> same format as the other ICD-10 chapters — a plain-language rule summary, an easy and a hard example scenario with reasoning, and a tips/traps box for each topic. Written as an original summary, not a copy of the guideline text. The substance use/abuse/dependence hierarchy (Topics 2–5) and the factitious disorder self-vs-other distinction (Topic 7) are the most commonly tested traps in this chapter.
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
