import Link from "next/link";

const cardStyle = {
  display: "block",
  textDecoration: "none",
  color: "inherit",
  background: "white",
  border: "1px solid #f1e0d3",
  borderRadius: "12px",
  padding: "24px",
  boxShadow: "0 5px 16px rgba(67,20,7,0.06)",
};
const navLinkStyle = { textDecoration: "none", color: "#c2410c", background: "#ffffff", border: "1px solid #f1e0d3", borderRadius: "999px", padding: "10px 15px", fontWeight: 700, fontSize: "14px" };
const labelStyle = { color: "#c2410c", fontWeight: 800 };
const thStyle = { border: "1px solid #f1e0d3", padding: "9px 11px", textAlign: "left" as const, background: "#fff1e6", color: "#7c2d12" };
const tdStyle = { border: "1px solid #f1e0d3", padding: "9px 11px", textAlign: "left" as const, verticalAlign: "top" as const };
const codeStyle = { fontFamily: "Consolas, monospace", fontWeight: 800, color: "#c2410c" };

const rangeMap: [string, string, string, string][] = [
  ["40K", "Lips and vestibule of mouth", "40490–40899", "Not built yet"],
  ["41K", "Floor and front of mouth (tongue, floor of mouth, teeth and gums)", "41000–41599 · 41800–41899", "Not built yet"],
  ["42K", "Top and back of mouth (palate, uvula, salivary glands, pharynx, adenoids, tonsils)", "42000–42599 · 42700–42999", "Not built yet"],
  ["43K", "Esophagus and stomach — includes endoscopy, ERCP (43260–43278), and bariatric surgery", "43020–43999", "Part 1 (endoscopy and ERCP) · Part 3 (bariatric)"],
  ["44K", "Small intestines, Meckel's diverticulum, and appendix", "44005–44979", "Part 1 & 2 (enteroscopy, stoma endoscopy)"],
  ["45K", "Colon and rectum", "45000–45999", "Part 2 (sigmoidoscopy, colonoscopy)"],
  ["46K", "Anus (including hemorrhoids and anoscopy)", "46020–46999", "Part 2 (anoscopy) · Part 3 (hemorrhoids)"],
  ["47K", "Liver and biliary tract", "47000–47999", "ERCP codes are NOT here — they live in 43260–43278 (Part 1). The rest is not built yet"],
  ["48K", "Pancreas", "48000–48999", "ERCP codes are NOT here — they live in 43260–43278 (Part 1). The rest is not built yet"],
  ["49K", "Abdomen, peritoneum, and omentum — includes hernia repair", "49000–49999", "Part 3 (hernia)"],
];

const solved: [string, string, string, string][] = [
  ["Screening colonoscopy, multiple polyps removed with snare", "45385 — once", "/cpt/surgery/40000-series-guidelines-reviewer-part-2#colonoscopy", "Part 2 · Colonoscopy"],
  ["Infant born at 35 weeks, repaired at 20 weeks — PCA?", "PCA 55 wk → 49496 (assuming an initial inguinal hernia, incarcerated)", "/cpt/surgery/40000-series-guidelines-reviewer-part-3#hernia", "Part 3 · Inguinal hernia"],
  ["Baby Jones, born at 28 weeks, repaired 4 weeks later — PCA?", "PCA 32 wk → 49491 (reducible, unilateral)", "/cpt/surgery/40000-series-guidelines-reviewer-part-3#hernia", "Part 3 · Inguinal hernia"],
  ["34-year-old male, reducible inguinal hernia with mesh", "49505", "/cpt/surgery/40000-series-guidelines-reviewer-part-3#hernia", "Part 3 · Inguinal hernia"],
  ["70-year-old female, laparoscopic ventral hernia repair with mesh", "49591 (the deck's old laparoscopic ventral code no longer exists; 3–10 cm would be 49593)", "/cpt/surgery/40000-series-guidelines-reviewer-part-3#hernia-anterior", "Part 3 · Anterior hernia"],
  ["Strangulated inguinal hernia, baby 32 weeks old, born at 35 weeks", "49501 (+44120/54520/58940 only if an organ was excised or repaired)", "/cpt/surgery/40000-series-guidelines-reviewer-part-3#hernia", "Part 3 · Inguinal hernia"],
  ["Postpartum patient, three external hemorrhoids excised", "46250 (once, if 2+ columns)", "/cpt/surgery/40000-series-guidelines-reviewer-part-3#hemorrhoids", "Part 3 · Hemorrhoids"],
];

const differences: [string, string][] = [
  ["Ventral, incisional, umbilical, epigastric, spigelian hernia codes 49560–49566, 49568 (mesh), 49570–49590, laparoscopic 49652–49657", "Not in CPT 2026. Use 49591–49618 for any approach; mesh is included. Only inguinal hernias keep separate laparoscopic codes (49650, 49651)."],
  ["Enteroscopy range written as '43235 – 43210'", "Looks like a typo. The EGD family is 43235–43259 (with 43233, 43266, and 43270); enteroscopy is 44360–44379."],
  ["Hemorrhoidectomy, internal range written as '46221 to 46946'", "Internal hemorrhoid treatment by ligation is 46221, 46945, 46946, and THD is 46948 — not a continuous range."],
];

const approach = [
  "Where is the problem? The first two digits of the code name the body region (40–49 all start with 4) — see the range map below.",
  "Is it a SCOPE procedure (endoscopy) or an operation? Scopes are picked by the farthest landmark reached; operations are picked by the procedure and approach.",
  "Was anything done beyond looking? A therapeutic scope code already includes the diagnostic look — report only the therapeutic code.",
  "Count what the descriptor counts: lesions '(s)' = once per technique; stents, strictures, and ducts add a repeat with modifier 59 only where the code's own note says so; hemorrhoid columns; hernia defect size.",
  "Check the special rules: incomplete exams (52/53 — EGD and colonoscopy split them differently, see Part 1), age or PCA for infants, mesh included, and the 'Do not report … with …' lines.",
];

export default function DigestiveSeriesPage() {
  return (
    <main style={{ maxWidth: "1120px", margin: "0 auto", padding: "36px clamp(12px, 4vw, 24px) 64px", minHeight: "100vh", background: "#fff8f3", color: "#2b1a12", fontFamily: "Arial, sans-serif" }}>
      <header style={{ background: "linear-gradient(135deg, #431407, #c2410c)", color: "white", padding: "48px clamp(20px, 4vw, 44px)", borderRadius: "18px", marginBottom: "28px", boxShadow: "0 12px 28px rgba(67,20,7,0.22)" }}>
        <p style={{ margin: "0 0 10px", color: "#fed7aa", fontWeight: 800, letterSpacing: "0.08em" }}>CPT SURGERY SECTION</p>
        <h1 style={{ margin: 0, fontSize: "clamp(34px, 6.5vw, 60px)" }}>DIGESTIVE SYSTEM</h1>
        <p style={{ fontSize: "21px", lineHeight: 1.5, maxWidth: "780px", margin: "12px 0 0" }}>40490–49999 — endoscopy (upper and lower GI, ERCP), bariatric surgery, hernia repair, and hemorrhoid treatment, with schematics and the slide questions solved step by step.</p>
      </header>

      <nav aria-label="Digestive series navigation" style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "30px" }}>
        <Link href="/cpt/surgery" style={navLinkStyle}>Back to Surgery</Link>
        <Link href="/cpt/surgery/40000-series-guidelines-reviewer" style={navLinkStyle}>Reviewer Pt. 1</Link>
        <Link href="/cpt/surgery/40000-series-guidelines-reviewer-part-2" style={navLinkStyle}>Reviewer Pt. 2</Link>
        <Link href="/cpt/surgery/40000-series-guidelines-reviewer-part-3" style={navLinkStyle}>Reviewer Pt. 3</Link>
        <Link href="/cpt/surgery/40000-series-practice-quiz" style={navLinkStyle}>Practice Quiz</Link>
        <Link href="/cpt/surgery/40000-series-flashcards" style={navLinkStyle}>Flashcards</Link>
        <Link href="/cpt" style={navLinkStyle}>CPT home</Link>
      </nav>

      <section style={{ background: "#fff1e6", border: "1px solid #fed7aa", borderLeft: "7px solid #c2410c", borderRadius: "12px", padding: "22px 24px", marginBottom: "26px", lineHeight: 1.7 }}>
        <strong>The 5-question approach for any 40,000-series code</strong>
        <ol style={{ margin: "10px 0 0", paddingLeft: "22px", display: "grid", gap: "6px" }}>
          {approach.map((t) => <li key={t}>{t}</li>)}
        </ol>
      </section>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "18px", marginBottom: "30px" }}>
        <Link href="/cpt/surgery/40000-series-guidelines-reviewer" style={cardStyle}>
          <span style={labelStyle}>GUIDELINES REVIEWER · PART 1</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>Upper GI Endoscopy & ERCP</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>Endoscopy rules that apply everywhere, esophagoscopy, EGD, enteroscopy, and ERCP with the stent, dilation, and modifier-59 rules — plus a scope-reach schematic and an ERCP duct diagram.</p>
        </Link>
        <Link href="/cpt/surgery/40000-series-guidelines-reviewer-part-2" style={cardStyle}>
          <span style={labelStyle}>GUIDELINES REVIEWER · PART 2</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>Lower GI Endoscopy</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>Anoscopy, proctosigmoidoscopy, sigmoidoscopy, colonoscopy (rectum and stoma), incomplete-exam modifiers — with the polypectomy slide question solved.</p>
        </Link>
        <Link href="/cpt/surgery/40000-series-guidelines-reviewer-part-3" style={cardStyle}>
          <span style={labelStyle}>GUIDELINES REVIEWER · PART 3</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>Bariatric, Hernia & Hemorrhoids</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>Sleeve, bypass, and band codes; the age/PCA and defect-size hernia grids (2026 codes); the hemorrhoid treatment map — with the hernia and hemorrhoid slide questions solved.</p>
        </Link>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "18px", marginBottom: "30px" }}>
        <Link href="/cpt/surgery/40000-series-practice-quiz" style={cardStyle}>
          <span style={labelStyle}>PRACTICE QUIZ</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>56 Scenario Questions</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>Endoscopy, ERCP, colonoscopy, bariatric, hernia, and hemorrhoid scenarios. Each answer shows what to look for and how to eliminate the wrong choices.</p>
        </Link>
        <Link href="/cpt/surgery/40000-series-flashcards" style={cardStyle}>
          <span style={labelStyle}>FLASHCARDS</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>5-Minute Commute Review</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>Tap-to-flip cards, one rule per card, covering the whole Digestive series — modifiers, once-per-session codes, PCA tiers, and hernia and hemorrhoid splits.</p>
        </Link>
      </div>

      <h2 style={{ color: "#111827" }}>Code range map (Topic 1)</h2>
      <div style={{ overflowX: "auto", marginBottom: "30px" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px", background: "#fff" }}>
          <thead><tr><th style={thStyle}>Range</th><th style={thStyle}>Body region</th><th style={thStyle}>Codes</th><th style={thStyle}>In this series</th></tr></thead>
          <tbody>
            {rangeMap.map(([k, region, codes, where]) => (
              <tr key={k}><td style={{ ...tdStyle, ...codeStyle }}>{k}</td><td style={tdStyle}>{region}</td><td style={{ ...tdStyle, fontFamily: "Consolas, monospace" }}>{codes}</td><td style={tdStyle}>{where}</td></tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 style={{ color: "#111827" }}>Slide questions — answers at a glance</h2>
      <div style={{ overflowX: "auto", marginBottom: "30px" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px", background: "#fff" }}>
          <thead><tr><th style={thStyle}>Slide question</th><th style={thStyle}>Answer</th><th style={thStyle}>Full solution</th></tr></thead>
          <tbody>
            {solved.map(([q, a, href, label]) => (
              <tr key={q}><td style={tdStyle}>{q}</td><td style={{ ...tdStyle, ...codeStyle }}>{a}</td><td style={tdStyle}><Link href={href} style={{ color: "#c2410c", fontWeight: 700 }}>{label}</Link></td></tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 style={{ color: "#111827" }}>Where the training deck differs from CPT 2026</h2>
      <div style={{ overflowX: "auto", marginBottom: "30px" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px", background: "#fff" }}>
          <thead><tr><th style={thStyle}>In the deck</th><th style={thStyle}>In the 2026 codebook (what this reviewer uses)</th></tr></thead>
          <tbody>
            {differences.map(([a, b]) => (
              <tr key={a}><td style={tdStyle}>{a}</td><td style={tdStyle}>{b}</td></tr>
            ))}
          </tbody>
        </table>
      </div>

      <Link href="/cpt/surgery" style={{ textDecoration: "none", color: "#c2410c", fontWeight: 700 }}>← Back to Surgery</Link>
    </main>
  );
}
