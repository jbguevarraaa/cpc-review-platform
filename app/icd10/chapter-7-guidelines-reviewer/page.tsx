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
    title: "Assigning Glaucoma Codes — Type, Eye & Stage",
    codes: "H40.–",
    summary: [
      "Every H40 (Glaucoma) code bundles three pieces of clinical information at once: which TYPE of glaucoma is present, which EYE (or both) is affected, and what STAGE the disease has reached — and a coder should use however many H40 codes it takes to capture everything actually documented, not just one out of habit.",
      "This is the foundation for every other glaucoma rule in this chapter: before applying any bilateral/progression/indeterminate-stage rule, first confirm you've captured type, eye, and stage from the documentation.",
    ],
    easy: {
      scenario: "A patient is documented with primary open-angle glaucoma of the right eye, mild stage.",
      answer: "The H40 code specific to primary open-angle glaucoma, right eye, with the seventh character for mild stage — one code capturing all three pieces (type, eye, stage).",
    },
    hard: {
      scenario: "A patient has two different documented glaucoma diagnoses affecting different structures of the same eye.",
      answer: "Assign as many H40 codes as needed to capture both distinct glaucoma diagnoses — the \"as many codes as needed\" instruction means multiple H40 codes can and should be used together when more than one glaucoma type is actually present.",
    },
    tips: [
      "Don't stop at one H40 code out of habit — if documentation supports multiple glaucoma types or findings, assign multiple codes.",
    ],
  },
  {
    n: 2,
    title: "Bilateral Glaucoma — Same Type & Stage",
    codes: "H40.10–, H40.20–",
    summary: [
      "When a patient has bilateral glaucoma, BOTH eyes are the same type and stage, AND a specific code for bilateral glaucoma of that type exists, report only that ONE bilateral code with the seventh character for the stage.",
      "When a patient has bilateral glaucoma, both eyes are the same type and stage, but the classification does NOT provide a bilateral code for that specific type (the guideline names subcategories H40.10 and H40.20 as examples of this situation), report only ONE code for that type of glaucoma with the appropriate seventh character for the stage — still just one code, even without a dedicated \"bilateral\" code exising.",
    ],
    easy: {
      scenario: "A patient has bilateral glaucoma, both eyes documented as the same type and same stage, and a bilateral code exists for that specific type.",
      answer: "One code — the bilateral-specific code for that glaucoma type, with the seventh character for the shared stage.",
    },
    hard: {
      scenario: "A patient has bilateral glaucoma, both eyes the same type and stage, but that specific glaucoma type falls under subcategory H40.10 or H40.20, which has no dedicated bilateral code.",
      answer: "Still just ONE code — a single code for that glaucoma type with the seventh character for the shared stage, even though no bilateral-specific code exists for this particular type.",
    },
    tips: [
      "The key insight: \"same type and stage in both eyes\" always resolves to ONE code, whether or not a dedicated bilateral code happens to exist for that type — the underlying logic (one code, not two) doesn't change.",
    ],
  },
  {
    n: 3,
    title: "Bilateral Glaucoma — Different Type or Stage",
    codes: "H40.10–, H40.20–",
    summary: [
      "When each eye has a DIFFERENT type or stage of glaucoma, AND the classification distinguishes laterality for that type, assign the appropriate code for EACH eye separately — not the bilateral code.",
      "When each eye has a different TYPE, and the classification does NOT distinguish laterality (again, subcategories H40.10 and H40.20 are named examples), assign one code for each type of glaucoma, each with its own appropriate seventh character for stage — two codes, one per type.",
      "When each eye has the SAME type but a DIFFERENT stage, and the classification doesn't distinguish laterality, assign a code for that type of glaucoma for EACH eye, each with the seventh character matching that specific eye's stage — again two codes, this time differing only in their stage character.",
    ],
    easy: {
      scenario: "A patient's right eye has primary angle-closure glaucoma and the left eye has primary open-angle glaucoma — two genuinely different types, and the classification distinguishes laterality for these types.",
      answer: "Two separate codes — one for each eye's specific glaucoma type — rather than a single bilateral code, since the two eyes have genuinely different types.",
    },
    hard: {
      scenario: "A patient has the SAME glaucoma type in both eyes, but the right eye is at moderate stage while the left eye is at severe stage, and that type falls under subcategory H40.10.",
      answer: "Two codes for that same glaucoma type — one for each eye — but with DIFFERENT seventh characters: moderate stage for the right eye's code, severe stage for the left eye's code.",
    },
    tips: [
      "Any time the two eyes differ in EITHER type OR stage, you're looking at two codes, not one — the \"one code\" rule from Topic 2 only applies when both type AND stage genuinely match in both eyes.",
    ],
  },
  {
    n: 4,
    title: "Glaucoma Stage Progression During an Admission",
    codes: "H40.– (7th character)",
    summary: [
      "If a patient is admitted with glaucoma at one documented stage, and that stage PROGRESSES during the same admission, assign the code for the HIGHEST stage documented during that admission — not the stage present at admission.",
      "This mirrors the same-encounter severity-progression logic used elsewhere in ICD-10-CM (for example, dementia severity in Chapter 5) — one code, for the worst point reached during the stay.",
    ],
    easy: {
      scenario: "A patient is admitted with mild-stage glaucoma, and by discharge, documentation shows it has progressed to moderate stage.",
      answer: "The glaucoma code with the seventh character for MODERATE stage — the highest stage documented during the admission, not the admission-day mild stage.",
    },
    hard: {
      scenario: "A patient's glaucoma is documented as moderate on admission, briefly appears to improve mid-stay per one progress note, then is documented as severe just before discharge.",
      answer: "The seventh character for SEVERE stage — the highest stage documented at ANY point during the admission is what's coded, regardless of any documented fluctuation in between.",
    },
    tips: [
      "One code, highest stage reached — don't average or default to the admission-day stage if a higher stage was documented later in the same stay.",
    ],
  },
  {
    n: 5,
    title: "Indeterminate Stage vs. Unspecified Stage",
    codes: "H40.– (7th character 4 vs. 0)",
    summary: [
      "The seventh character \"4\" (indeterminate stage) is used specifically when the glaucoma's stage CANNOT be clinically determined — this is a real clinical finding, not a placeholder for missing documentation.",
      "The seventh character \"0\" (unspecified) is used instead when there simply is NO documentation at all regarding the glaucoma's stage — a documentation gap, not a clinical finding.",
      "These two seventh characters look similar in function but mean opposite things: \"4\" means the provider tried to determine the stage and clinically couldn't; \"0\" means the stage was never addressed in the documentation at all.",
    ],
    easy: {
      scenario: "A provider's note never mentions the glaucoma's stage at all, anywhere in the documentation.",
      answer: "Seventh character \"0\" (unspecified) — a pure documentation gap, not a clinical indeterminate finding.",
    },
    hard: {
      scenario: "A provider specifically documents that the glaucoma's stage cannot be clinically determined at this time, given the available exam findings.",
      answer: "Seventh character \"4\" (indeterminate stage) — this is a genuine clinical assessment that the stage is not determinable, which is a fundamentally different situation from the stage simply not being documented.",
    },
    tips: [
      "Don't confuse \"4\" and \"0\" — \"4\" requires the provider to have actively assessed and concluded the stage isn't determinable; \"0\" is simply the default when staging was never addressed at all.",
    ],
  },
  {
    n: 6,
    title: "Blindness & Low Vision Coding",
    codes: "H54.3, H54.6–, H54.7",
    summary: [
      "If \"blindness\" or \"low vision\" of BOTH eyes is documented, but the specific visual impairment CATEGORY isn't documented, assign H54.3 (Unqualified visual loss, both eyes).",
      "If \"blindness\" or \"low vision\" in ONE eye is documented, but the visual impairment category isn't documented, assign a code from H54.6– (Unqualified visual loss, one eye).",
      "If \"blindness\" or \"visual loss\" is documented WITHOUT any information about whether one or both eyes are affected, assign H54.7 (Unspecified visual loss).",
    ],
    easy: {
      scenario: "A patient's chart documents \"low vision, both eyes,\" with no specific visual impairment category stated.",
      answer: "H54.3 (Unqualified visual loss, both eyes).",
    },
    hard: {
      scenario: "Two different patients: Patient A's chart documents \"low vision, left eye,\" with no impairment category stated. Patient B's chart simply states \"visual loss,\" with no mention of which eye(s) are affected and no impairment category documented.",
      answer: "Patient A → a code from H54.6– (Unqualified visual loss, one eye) — one eye is known, category isn't. Patient B → H54.7 (Unspecified visual loss) — here it's unclear whether one or both eyes are even involved, which is a different missing piece than Patient A's scenario.",
    },
    tips: [
      "Three-way fork based on what's missing: category not documented but BOTH eyes known → H54.3. Category not documented but ONE eye known → H54.6–. Not even the number of eyes affected is documented → H54.7.",
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

export default function Icd10Chapter7GuidelinesReviewerPage() {
  return (
    <main style={mainStyle}>
      <header style={heroStyle}>
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 7 · 2026 OFFICIAL GUIDELINES</p>
        <h1 style={{ margin: 0, fontSize: "clamp(26px, 5vw, 44px)" }}>Diseases of the Eye and Adnexa</h1>
        <p style={{ margin: "12px 0 0", fontSize: "18px", lineHeight: 1.5 }}>H00–H59 — the full glaucoma coding framework (type/eye/stage, bilateral rules, stage progression, indeterminate vs. unspecified stage) plus blindness and low-vision coding.</p>
      </header>

      <nav aria-label="ICD-10 navigation" style={navStyle}>
        <Link href="/icd10" style={navLinkStyle}>ICD-10-CM home</Link>
        <Link href="/icd10/chapter-7-practice-quiz" style={navLinkStyle}>Practice Quiz</Link>
        <Link href="/icd10/chapter-7-worked-examples" style={navLinkStyle}>Worked Examples</Link>
        <Link href="/icd10/chapter-7-flashcards" style={navLinkStyle}>Flashcards</Link>
      </nav>

      <section style={introStyle}>
        <strong>How to use this reviewer:</strong> same format as the other ICD-10 chapters — a plain-language rule summary, an easy and a hard example scenario with reasoning, and a tips/traps box for each topic. Written as an original summary, not a copy of the guideline text. Glaucoma (Topics 1–5) is the dominant subject of this chapter's official guidelines — the bilateral same-vs-different type/stage rules (Topics 2–3) are the densest part and worth extra attention.
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
