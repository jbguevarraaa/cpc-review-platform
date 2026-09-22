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
    title: "Dominant vs. Nondominant Side Defaults",
    codes: "G81, G83.1, G83.2, G83.3",
    summary: [
      "Codes from category G81 (Hemiplegia and hemiparesis) and subcategories G83.1 (Monoplegia of lower limb), G83.2 (Monoplegia of upper limb), and G83.3 (Monoplegia, unspecified) all identify whether the DOMINANT or NONDOMINANT side is affected.",
      "If the affected side is documented, but the chart never specifies whether it's the dominant or nondominant side, and the classification itself doesn't indicate a default, use these fixed default rules: for an ambidextrous patient, default to dominant. If the LEFT side is affected, default to NONdominant. If the RIGHT side is affected, default to DOMINANT.",
      "These defaults only apply when handedness truly isn't documented anywhere — if the chart says which hand is dominant, use the documented fact instead of the default.",
    ],
    easy: {
      scenario: "A patient's chart documents right-sided hemiplegia, with no mention anywhere of the patient's handedness.",
      answer: "Code the dominant-side version of the G81 hemiplegia code — right side defaults to dominant when handedness isn't documented.",
    },
    hard: {
      scenario: "An ambidextrous patient (explicitly documented as such) has left-sided monoplegia of the upper limb, and no other handedness information is available.",
      answer: "Code the DOMINANT-side version of G83.2 — the ambidextrous-patient default is dominant, which overrides the general \"left side defaults to nondominant\" rule since that rule is for patients whose handedness just isn't known, not for patients confirmed to be ambidextrous.",
    },
    tips: [
      "Memorize the pairing as a simple left/right split: LEFT → nondominant default, RIGHT → dominant default. Ambidextrous patients get their own separate default (dominant), regardless of which side is affected.",
      "These defaults are a last resort — always check first whether the chart documents actual handedness before falling back to the default rule.",
    ],
  },
  {
    n: 2,
    title: "Pain (Category G89) — When It Can and Cannot Be Used",
    codes: "G89.–",
    summary: [
      "Category G89 (Pain, not elsewhere classified) codes can be used together with codes from other categories/chapters to add detail about acute or chronic pain and neoplasm-related pain — but only when the pain fits specific criteria described below.",
      "If pain is NOT specified as acute, chronic, post-thoracotomy, postprocedural, or neoplasm-related, do NOT assign a G89 code at all — vague, unspecified pain documentation doesn't qualify.",
      "A G89 code should NOT be assigned if the underlying (definitive) diagnosis causing the pain is already known — UNLESS the reason for the encounter is specifically pain control/management rather than treatment of the underlying condition itself.",
      "When an admission/encounter is for a procedure aimed at treating the underlying condition itself (e.g., spinal fusion for a vertebral fracture, kyphoplasty for spinal stenosis), code the underlying condition as the principal diagnosis — no G89 code is assigned in that case.",
      "G89 codes ARE acceptable as the principal or first-listed diagnosis specifically when pain control/pain management IS the stated reason for the admission/encounter (e.g., a patient with a known intervertebral disc problem presents solely for a steroid injection into the spinal canal for pain relief) — the underlying cause is then reported as an additional diagnosis, if known.",
      "Similarly, if a patient is admitted for insertion of a neurostimulator purely for pain control, the pain code is the principal diagnosis. But if the neurostimulator is inserted during the SAME encounter as a procedure aimed at the underlying condition, the underlying condition becomes principal, and the pain code becomes a secondary diagnosis instead.",
    ],
    easy: {
      scenario: "A patient with a known displaced intervertebral disc and nerve impingement presents solely for a steroid injection into the spinal canal for pain relief; no procedure is done on the disc itself.",
      answer: "The appropriate G89 pain code as the principal/first-listed diagnosis, with the underlying disc/impingement condition reported as an additional diagnosis.",
    },
    hard: {
      scenario: "A patient is admitted for spinal fusion surgery to treat a diagnosed vertebral fracture. During that same admission, a neurostimulator is also inserted for pain control.",
      answer: "The vertebral fracture code is the principal diagnosis (since the admission is for a procedure treating the underlying condition), and the appropriate pain code is a SECONDARY diagnosis — the pain code does not become principal just because a neurostimulator was also placed during the same stay.",
    },
    tips: [
      "The core question for every G89 scenario is: \"is this encounter FOR pain control itself, or for treating the underlying cause?\" That single distinction decides whether G89 can be principal, secondary, or not used at all.",
      "Vague, non-specific pain documentation (not described as acute/chronic/post-thoracotomy/postprocedural/neoplasm-related) never gets a G89 code, no matter the clinical context.",
    ],
  },
  {
    n: 3,
    title: "G89 Combined with Site-Specific Pain Codes",
    codes: "G89.– + site-specific pain codes (incl. Chapter 18)",
    summary: [
      "A G89 code may be used together with a code identifying the specific SITE of pain (including Chapter 18 codes) when the G89 code adds information the site code doesn't capture on its own — for example, if the site code doesn't indicate whether the pain is acute or chronic, both codes are assigned together.",
      "Sequencing between the two depends on why the encounter is happening: if the encounter is FOR pain control/management, the G89 code is sequenced FIRST, followed by the site-specific code. The guideline's own example: pain management for acute neck pain from trauma is coded G89.11 (acute pain due to trauma) followed by M54.2 (cervicalgia) for the site.",
    ],
    easy: {
      scenario: "A patient presents specifically for pain management of acute post-traumatic neck pain.",
      answer: "G89.11 (acute pain due to trauma) sequenced FIRST, followed by the site-specific cervicalgia code (M54.2) — exactly the guideline's own illustrating example.",
    },
    hard: {
      scenario: "A site-specific pain code already fully describes the pain's location, but says nothing about whether it's acute or chronic, and the G89 code would add exactly that missing detail.",
      answer: "Assign BOTH codes together — the G89 code is added specifically because it supplies information (acute-vs-chronic status) the site-specific code doesn't include on its own.",
    },
    tips: [
      "The trigger for combining a G89 code with a site code isn't \"is there pain\" — it's \"does the G89 code add information the site code is missing,\" like acute/chronic status.",
      "When the encounter reason is pain control/management specifically, G89 leads (comes first); the site-specific code follows.",
    ],
  },
  {
    n: 4,
    title: "Postoperative Pain — Routine vs. With Complication",
    codes: "G89.18, G89.28, Chapter 19 codes",
    summary: [
      "Routine or expected postoperative pain occurring immediately after surgery should NOT be coded at all — this is a key exclusion, not just a minor detail.",
      "For postoperative pain not specified as acute or chronic, the DEFAULT is the ACUTE form of the code (this applies to post-thoracotomy pain and other postoperative pain alike).",
      "Postoperative pain that is NOT associated with any specific postoperative complication is coded directly to the appropriate postoperative pain code within category G89.",
      "Postoperative pain that IS associated with a specific postoperative complication (the guideline's own example: painful wire sutures) is instead coded to the appropriate Chapter 19 code (Injury, poisoning, and certain other consequences of external causes) for that complication — with an additional G89.18 (acute postprocedural pain) or G89.28 (chronic postprocedural pain) code added, if appropriate, to further identify the pain as acute or chronic.",
    ],
    easy: {
      scenario: "A patient has ordinary, expected pain in the immediate hours after routine surgery, with no documented complication.",
      answer: "Not coded at all — routine/expected postoperative pain right after surgery is specifically excluded from coding.",
    },
    hard: {
      scenario: "A patient has documented chronic pain specifically caused by painful wire sutures left in place after a prior surgery.",
      answer: "The appropriate Chapter 19 code for the wire-suture complication itself, PLUS G89.28 (chronic postprocedural pain) as an additional code to identify the pain as chronic — not a G89 code alone, since this pain is tied to a specific identified complication.",
    },
    tips: [
      "\"Routine/expected, right after surgery\" = don't code it at all. That's a distinct rule from the acute/chronic postoperative pain coding that applies once pain is actually being addressed as its own issue.",
      "A named complication (like painful wire sutures) shifts the LEADING code to Chapter 19 — the G89.18/G89.28 code becomes a secondary add-on, not the primary code.",
    ],
  },
  {
    n: 5,
    title: "Chronic Pain (No Fixed Time Frame)",
    codes: "G89.2",
    summary: [
      "Chronic pain is classified to subcategory G89.2. Importantly, there is NO fixed time frame in the guideline that defines exactly when pain becomes \"chronic\" — no specific number of weeks or months is given.",
      "Instead, the PROVIDER's own documentation should be used to guide whether a code from G89.2 applies — a coder does not calculate chronicity from a duration on their own.",
    ],
    easy: {
      scenario: "A provider documents a patient's back pain as \"chronic\" in today's note, without stating how long the pain has been present.",
      answer: "A code from G89.2 (chronic pain) — the provider's own documentation of \"chronic\" is what's used, not a coder-calculated duration.",
    },
    hard: {
      scenario: "A patient has had pain for eight months per the chart timeline, but the provider's note never actually uses the word \"chronic\" anywhere.",
      answer: "Do not assume chronic pain coding based on duration alone — since there's no fixed time-frame rule, the provider's own documented characterization (not a coder's math on elapsed time) is what determines whether G89.2 applies.",
    },
    tips: [
      "This is a direct trap: unlike some other chronic-vs-acute distinctions elsewhere in ICD-10-CM that use a specific day/week cutoff, chronic pain has NO such cutoff — provider documentation is the only source of truth here.",
    ],
  },
  {
    n: 6,
    title: "Neoplasm-Related Pain",
    codes: "G89.3",
    summary: [
      "G89.3 is assigned for pain documented as being related to, associated with, or due to cancer — whether a primary malignancy, secondary malignancy, or a tumor. This code applies regardless of whether the pain is acute or chronic.",
      "G89.3 may be assigned as the PRINCIPAL or first-listed code when the stated reason for the admission/encounter is pain control/pain management — with the underlying neoplasm reported as an additional diagnosis.",
      "If the reason for the admission/encounter is instead management of the neoplasm itself, and neoplasm-related pain is also documented, G89.3 may be assigned as an ADDITIONAL diagnosis (not principal) — and in that situation, it is NOT necessary to also assign a separate code for the site of the pain.",
      "For any other stated reason for the admission/encounter (aside from pain control/management), sequencing of the neoplasm codes follows the general neoplasm sequencing guideline instead (Section I.C.2).",
    ],
    easy: {
      scenario: "A cancer patient's stated reason for today's admission is specifically pain control for cancer-related pain.",
      answer: "G89.3 as the principal/first-listed diagnosis, with the underlying neoplasm reported as an additional diagnosis.",
    },
    hard: {
      scenario: "A cancer patient is admitted for chemotherapy management, and cancer-related pain is also documented during the same stay, but pain control isn't the reason for the admission.",
      answer: "G89.3 may be assigned as an ADDITIONAL diagnosis (not principal, since the admission reason is neoplasm management, not pain control) — and no separate site-of-pain code is needed alongside it.",
    },
    tips: [
      "G89.3 is unique among the G89 pain codes in this chapter for explicitly not requiring a separate site-of-pain code when used as an additional diagnosis for neoplasm-related pain during neoplasm management — don't add one out of habit.",
      "The fork is the same as elsewhere in this chapter: pain control as the actual REASON for the encounter → G89.3 can be principal. Any other reason → G89.3 is, at most, an additional code.",
    ],
  },
  {
    n: 7,
    title: "Chronic Pain Syndrome vs. Central Pain Syndrome vs. \"Chronic Pain\"",
    codes: "G89.0, G89.4",
    summary: [
      "Central pain syndrome (G89.0) and chronic pain syndrome (G89.4) are NOT the same thing as the general term \"chronic pain\" (G89.2) — they are distinct, specifically named clinical conditions.",
      "Because of that distinction, codes G89.0 and G89.4 should ONLY be used when the provider has specifically documented that exact named condition — not simply because a patient has pain that has lasted a long time.",
    ],
    easy: {
      scenario: "A provider documents a patient's long-standing pain simply as \"chronic pain,\" without using the terms \"chronic pain syndrome\" or \"central pain syndrome.\"",
      answer: "Code G89.2 (chronic pain) — G89.4 (chronic pain syndrome) requires that exact term to be specifically documented, which it wasn't here.",
    },
    hard: {
      scenario: "Two different patients: Patient A's provider documents \"central pain syndrome\" following a stroke (thalamic pain). Patient B's provider documents \"chronic pain syndrome\" for a diffuse, multifactorial pain presentation.",
      answer: "Patient A → G89.0 (central pain syndrome). Patient B → G89.4 (chronic pain syndrome). Two different specifically-named conditions, two different codes — neither is interchangeable with the other, and neither is interchangeable with plain G89.2.",
    },
    tips: [
      "Three lookalike terms, three different codes: plain \"chronic pain\" → G89.2. \"Chronic pain syndrome\" (the specific named condition) → G89.4. \"Central pain syndrome\" (a different specific named condition, classically post-stroke thalamic pain) → G89.0. Match the code to the EXACT term documented, not a paraphrase.",
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

export default function Icd10Chapter6GuidelinesReviewerPage() {
  return (
    <main style={mainStyle}>
      <HighlightToolbar />
      <header style={heroStyle}>
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 6 · 2026 OFFICIAL GUIDELINES</p>
        <h1 style={{ margin: 0, fontSize: "clamp(26px, 5vw, 44px)" }}>Diseases of the Nervous System</h1>
        <p style={{ margin: "12px 0 0", fontSize: "18px", lineHeight: 1.5 }}>G00–G99 — dominant/nondominant side defaults, and the full category G89 pain rules: when it's used, sequencing, postoperative pain, chronic pain, neoplasm-related pain, and pain syndromes.</p>
      </header>

      <nav aria-label="ICD-10 navigation" style={navStyle}>
        <Link href="/icd10" style={navLinkStyle}>ICD-10-CM home</Link>
        <Link href="/icd10/chapter-6-practice-quiz" style={navLinkStyle}>Practice Quiz</Link>
        <Link href="/icd10/chapter-6-worked-examples" style={navLinkStyle}>Worked Examples</Link>
        <Link href="/icd10/chapter-6-flashcards" style={navLinkStyle}>Flashcards</Link>
      </nav>

      <section style={introStyle}>
        <strong>How to use this reviewer:</strong> same format as the other ICD-10 chapters — a plain-language rule summary, an easy and a hard example scenario with reasoning, and a tips/traps box for each topic. Written as an original summary, not a copy of the guideline text. Category G89 (pain) is the dominant topic in this chapter (Topics 2–7) — its "is this encounter FOR pain control, or for the underlying condition?" question is worth mastering above everything else here.
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
