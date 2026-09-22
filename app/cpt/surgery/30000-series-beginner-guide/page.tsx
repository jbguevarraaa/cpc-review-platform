import Link from "next/link";
import { Highlightable, HighlightToolbar } from "../_digestive/highlighter";

type Scenario = {
  n: number;
  subsection: string;
  range: string;
  scenario: string;
  lookFor: string[];
  walkthrough: string[];
  answer: string;
  watchOut: string;
};

const scenarios: Scenario[] = [
  {
    n: 1,
    subsection: "Nose",
    range: "30000–30999",
    scenario: "A patient comes into the office with a small, single nasal polyp. The provider removes it right there during the visit — no operating room, no special equipment, just a quick in-office procedure.",
    lookFor: [
      "Where did it happen? (\"in the office\")",
      "How big/involved does it sound? (\"small\", \"quick\")",
    ],
    walkthrough: [
      "First, identify the body part and procedure: nasal polyp, excision.",
      "Next, ask: is this simple or extensive? The book splits polyp removal into two codes based on how involved the procedure is — and the setting described (office vs. requiring a hospital operating room) is the biggest clue the exam gives you.",
      "An in-office, straightforward removal points to the simple code, not the extensive one.",
    ],
    answer: "30110 (simple nasal polyp excision) — not 30115.",
    watchOut: "If the same question instead said the patient needed to go to the hospital because the polyp removal was more involved, that single detail flips the answer to 30115 (extensive). Always reread the setting/complexity words before picking your answer.",
  },
  {
    n: 2,
    subsection: "Accessory Sinuses",
    range: "31000–31299",
    scenario: "During one endoscopic session, the surgeon removes a polyp from the sinus and also does a partial ethmoidectomy — all through the same scope, on the same side.",
    lookFor: [
      "How many separate-sounding things were done? (\"removes a polyp\" and \"does an ethmoidectomy\")",
      "Same session, same side, same scope",
    ],
    walkthrough: [
      "Your first instinct as a beginner might be: two things happened, so I need two codes. Resist that instinct here.",
      "This subsection is built so that the more extensive procedure (the ethmoidectomy) already includes the smaller step (the polypectomy) when they're done together on the same side, in the same session.",
      "So instead of stacking codes, look for the single code that already describes the bigger procedure.",
    ],
    answer: "Just the ethmoidectomy code for the extent performed (e.g., partial anterior ethmoidectomy) — the separate polypectomy add-on is not billed on top of it.",
    watchOut: "This 'don't stack it, the bigger code already includes it' pattern is the single most common trap in this whole subsection. Whenever a question lists two or more endoscopic steps on the same side, ask whether one of them is already baked into the other before reaching for two codes.",
  },
  {
    n: 3,
    subsection: "Larynx",
    range: "31300–31599",
    scenario: "A 10-year-old patient has a laryngoplasty for airway narrowing (stenosis), using a cartilage graft. No stent is left in place afterward.",
    lookFor: [
      "Patient's age (\"10-year-old\")",
      "Web vs. stenosis (\"airway narrowing\" = stenosis, not a web)",
      "Was a stent left in or not? (\"no stent is left in place\")",
    ],
    walkthrough: [
      "This family of codes is basically a small decision tree: first figure out if it's a web or stenosis being repaired, then whether a stent stays in, then the patient's age bracket.",
      "Here: stenosis, graft, no stent, age under 12.",
      "Follow that exact combination straight to its matching code.",
    ],
    answer: "31551 (laryngeal stenosis repair with graft, no indwelling stent, younger than 12).",
    watchOut: "Change just one detail and the answer changes completely: same scenario but age 14 → 31552. Same scenario but a stent is left in → 31553 (under 12) or 31554 (12+). Train yourself to check age and stent status every single time you see this family.",
  },
  {
    n: 4,
    subsection: "Trachea & Bronchi",
    range: "31600–31899",
    scenario: "During a bronchoscopy, the physician takes tissue biopsies from two different lobes of the lung.",
    lookFor: [
      "The word \"lobe\" — and how many times it's mentioned",
      "\"Additional\" or a count greater than one",
    ],
    walkthrough: [
      "The base biopsy code for this procedure is billed once per lobe, no matter how many individual biopsy samples were taken within that lobe.",
      "Since a second lobe was also biopsied, that's not a second unit of the base code — it's a separate add-on code specifically for additional lobes.",
      "So you'll end up with the base code once, plus the add-on code once.",
    ],
    answer: "31628 (transbronchial lung biopsy, single lobe) + 31632 (each additional lobe, add-on) — reported together, not 31628 billed twice.",
    watchOut: "Any time a question says \"each additional ___,\" that's the exam telling you an add-on code exists. Don't just repeat the base code — go find its matching add-on.",
  },
];

const mistakes = [
  "\"More steps described = more codes to bill.\" Not true here — CPT often bundles related steps into one comprehensive code, especially in the endoscopy families. Always check whether the bigger code already includes the smaller step before stacking codes.",
  "Skimming past the setting or the patient's age. Words like \"in the office,\" \"required the hospital,\" \"5 years old,\" or \"12 or older\" often decide the entire answer by themselves — read for them on purpose, not by accident.",
  "Missing \"each additional\" language. That phrase is always a signal to look for a specific add-on code, not to repeat the base code a second time.",
  "Assuming two similar-looking codes are interchangeable. When two codes differ only by one detail (which side, with or without a stent, with or without imaging), that one detail is almost always the entire point of the question.",
  "Trying to memorize every code number instead of the pattern behind a family. It's far more reliable to learn the 2–3 questions that distinguish a code family (like age, approach, or contrast) than to memorize numbers in isolation.",
];

const mainStyle = { maxWidth: "1080px", margin: "0 auto", padding: "36px 24px 64px", minHeight: "100vh", background: "#fdfaf5", color: "#241f17", fontFamily: "Arial, sans-serif" };
const heroStyle = { background: "linear-gradient(135deg, #1f2937, #0f766e)", color: "white", padding: "44px 40px", borderRadius: "18px", marginBottom: "26px", boxShadow: "0 12px 28px rgba(15,23,42,0.2)" };
const kickerStyle = { margin: "0 0 10px", color: "#99f6e4", fontWeight: 800, letterSpacing: "0.08em" };
const navStyle = { display: "flex", flexWrap: "wrap" as const, gap: "10px", marginBottom: "26px" };
const navLinkStyle = { textDecoration: "none", color: "#0f766e", background: "#ffffff", border: "1px solid #d7e2df", borderRadius: "999px", padding: "10px 15px", fontWeight: 700, fontSize: "14px" };
const introStyle = { background: "#fff7e8", border: "1px solid #efd39b", borderLeft: "7px solid #b7791f", borderRadius: "12px", padding: "22px 24px", marginBottom: "20px", lineHeight: 1.7 };
const frameworkStyle = { background: "#f0fdfa", border: "1px solid #99f6e4", borderRadius: "12px", padding: "22px 24px", marginBottom: "30px", lineHeight: 1.8 };
const sectionStyle = { background: "#ffffff", border: "1px solid #e5e1d6", borderRadius: "14px", padding: "24px 26px", marginBottom: "20px", boxShadow: "0 5px 16px rgba(15,23,42,0.06)" };
const sectionHeaderStyle = { display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px", flexWrap: "wrap" as const };
const numberBadgeStyle = { background: "#0f766e", color: "#fff", width: "32px", height: "32px", minWidth: "32px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "14px" };
const subTitleStyle = { margin: 0, fontSize: "19px", color: "#111827" };
const rangeChipStyle = { background: "#f0fdfa", border: "1px solid #99f6e4", color: "#0f766e", borderRadius: "999px", padding: "3px 10px", fontWeight: 800, fontSize: "12px", fontFamily: "Consolas, monospace" };
const scenarioBoxStyle = { background: "#f9faf9", border: "1px solid #ece7db", borderRadius: "10px", padding: "14px 16px", marginBottom: "14px", lineHeight: 1.7, fontStyle: "italic" as const };
const labelStyle = { margin: "0 0 6px", fontWeight: 800, fontSize: "13px", letterSpacing: "0.03em", color: "#0f766e" };
const answerBoxStyle = { background: "#f0fdf4", border: "1px solid #bbf7d0", borderLeft: "5px solid #16a34a", borderRadius: "10px", padding: "14px 16px", margin: "14px 0", lineHeight: 1.7 };
const watchOutBoxStyle = { background: "#fef2f2", border: "1px solid #fecaca", borderLeft: "5px solid #dc2626", borderRadius: "10px", padding: "14px 16px", lineHeight: 1.7 };
const pStyle = { lineHeight: 1.75, margin: "0 0 8px" };
const backLinkStyle = { textDecoration: "none", color: "#0f766e", fontWeight: 700 };

export default function ThirtyThousandBeginnerGuidePage() {
  return (
    <main style={mainStyle}>
      <header style={heroStyle}>
        <p style={kickerStyle}>30,000 SERIES · RESPIRATORY SYSTEM</p>
        <h1 style={{ margin: 0, fontSize: "clamp(28px, 5.5vw, 46px)" }}>Beginner-Friendly Exam Scenarios</h1>
        <p style={{ margin: "12px 0 0", fontSize: "18px", lineHeight: 1.5 }}>A slower walkthrough of how to think through a 30,000-series question, step by step — for when you're just starting out.</p>
      </header>

      <nav aria-label="30,000 series navigation" style={navStyle}>
        <Link href="/cpt/surgery/30,000" style={navLinkStyle}>30,000 Series home</Link>
        <Link href="/cpt/surgery/30000-series-guidelines-reviewer" style={navLinkStyle}>Guidelines Reviewer</Link>
        <Link href="/cpt/surgery" style={navLinkStyle}>Surgery home</Link>
      </nav>

      <HighlightToolbar />

      <section style={introStyle}>
        <Highlightable id="intro-1" as="div">
          <strong>Why this page exists:</strong> the main guidelines reviewer is dense and code-heavy on purpose — it's built for fast lookup. This page is the opposite: it's meant to be read slowly, with made-up example scenarios that show the actual thought process a coder walks through, one question at a time.
        </Highlightable>
      </section>

      <section style={frameworkStyle}>
        <p style={{ ...labelStyle, fontSize: "14px", marginBottom: "10px" }}>THE FIVE-QUESTION FRAMEWORK</p>
        <p style={pStyle}><Highlightable id="framework-intro">Before you even think about a code number, ask these five questions about any scenario, in this order:</Highlightable></p>
        <ol style={{ margin: 0, paddingLeft: "22px", display: "grid", gap: "6px" }}>
          <li><Highlightable id="framework-q-1"><strong>What body part and structure?</strong> (nose, sinus, larynx, trachea, a specific lobe...)</Highlightable></li>
          <li><Highlightable id="framework-q-2"><strong>What's actually being done to it?</strong> (removed, repaired, biopsied, scoped...)</Highlightable></li>
          <li><Highlightable id="framework-q-3"><strong>How is it being done?</strong> (in the office vs. the hospital, with or without a scope, open vs. percutaneous...)</Highlightable></li>
          <li><Highlightable id="framework-q-4"><strong>Are there extra details that split a code family?</strong> (age, laterality, with/without a stent or contrast...)</Highlightable></li>
          <li><Highlightable id="framework-q-5"><strong>Is anything already bundled in?</strong> (did the question describe a smaller step that a bigger code already includes?)</Highlightable></li>
        </ol>
        <p style={{ ...pStyle, marginTop: "10px", marginBottom: 0 }}><Highlightable id="framework-outro">Every scenario below walks through exactly this sequence.</Highlightable></p>
      </section>

      {scenarios.map((s) => (
        <section key={s.n} style={sectionStyle}>
          <div style={sectionHeaderStyle}>
            <span style={numberBadgeStyle}>{s.n}</span>
            <h2 style={subTitleStyle}>{s.subsection}</h2>
            <span style={rangeChipStyle}>{s.range}</span>
          </div>

          <p style={labelStyle}>📋 SCENARIO</p>
          <p style={scenarioBoxStyle}><Highlightable id={`${s.n}-scenario`}>&ldquo;{s.scenario}&rdquo;</Highlightable></p>

          <p style={labelStyle}>👀 WHAT TO LOOK FOR</p>
          <ul style={{ margin: "0 0 14px", paddingLeft: "20px", display: "grid", gap: "4px" }}>
            {s.lookFor.map((item, i) => <li key={item}><Highlightable id={`${s.n}-lookfor-${i}`}>{item}</Highlightable></li>)}
          </ul>

          <p style={labelStyle}>🧭 HOW TO THINK THROUGH IT</p>
          <ol style={{ margin: "0 0 4px", paddingLeft: "20px", display: "grid", gap: "6px" }}>
            {s.walkthrough.map((step, i) => <li key={step}><Highlightable id={`${s.n}-walkthrough-${i}`}>{step}</Highlightable></li>)}
          </ol>

          <div style={answerBoxStyle}>
            <Highlightable id={`${s.n}-answer`} as="div"><strong>✅ Answer:</strong> {s.answer}</Highlightable>
          </div>

          <div style={watchOutBoxStyle}>
            <Highlightable id={`${s.n}-watchout`} as="div"><strong>🟥 Watch out:</strong> {s.watchOut}</Highlightable>
          </div>
        </section>
      ))}

      <section style={sectionStyle}>
        <div style={sectionHeaderStyle}>
          <span style={numberBadgeStyle}>✋</span>
          <h2 style={subTitleStyle}>Common Beginner Mistakes</h2>
        </div>
        <ul style={{ margin: 0, paddingLeft: "20px", display: "grid", gap: "10px", lineHeight: 1.7 }}>
          {mistakes.map((m, i) => <li key={m}><Highlightable id={`mistake-${i}`}>{m}</Highlightable></li>)}
        </ul>
      </section>

      <div style={{ marginTop: "30px", display: "flex", flexWrap: "wrap" as const, gap: "16px" }}>
        <Link href="/cpt/surgery/30000-series-guidelines-reviewer" style={backLinkStyle}>→ Go deeper in the full Guidelines Reviewer</Link>
        <Link href="/cpt/surgery/30,000" style={backLinkStyle}>← Back to 30,000 Series</Link>
      </div>
    </main>
  );
}
