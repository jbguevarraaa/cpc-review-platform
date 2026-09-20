import Link from "next/link";

const cardStyle = {
  display: "block",
  textDecoration: "none",
  color: "inherit",
  background: "white",
  border: "1px solid #dcdff5",
  borderRadius: "12px",
  padding: "24px",
  boxShadow: "0 5px 16px rgba(30,27,75,0.06)",
};
const navLinkStyle = { textDecoration: "none", color: "#4338ca", background: "#ffffff", border: "1px solid #dcdff5", borderRadius: "999px", padding: "10px 15px", fontWeight: 700, fontSize: "14px" };
const labelStyle = { color: "#4338ca", fontWeight: 800 };
const thStyle = { border: "1px solid #dcdff5", padding: "9px 11px", textAlign: "left" as const, background: "#eef0ff", color: "#1e1b4b" };
const tdStyle = { border: "1px solid #dcdff5", padding: "9px 11px", textAlign: "left" as const, verticalAlign: "top" as const };
const codeStyle = { fontFamily: "Consolas, monospace", fontWeight: 800, color: "#4338ca" };

const rangeMap: [string, string, string, string][] = [
  ["50K", "Kidney and ureter", "50010–50980", "Part 1 (renal and ureteral endoscopy 50551–50580, 50951–50980) · the rest is not built yet"],
  ["51K–52K", "Bladder — includes cystoscopy and the transurethral bladder neck and prostate codes", "51020–52700", "Part 1 (cystourethroscopy 52000–52356) · Part 2 (bladder neck and prostate 52441–52649)"],
  ["53K", "Urethra", "53000–53899", "Part 2 (transurethral destruction of prostate 53850–53854) · the rest is not built yet"],
  ["54K", "Penis, testis, and epididymis", "54000–54901", "Not built yet"],
  ["55K", "The rest of the male system — tunica vaginalis, scrotum, vas deferens, spermatic cord, seminal vesicles, and the prostate", "55000–55899", "Part 2 (prostate 55801–55873) · the rest is not built yet"],
  ["56K", "External female genitalia — vulva, perineum, and introitus", "56405–56821", "Part 1 (colposcopy of the vulva 56820–56821) · the rest is not built yet"],
  ["57K", "Vagina and cervix", "57000–57800", "Part 1 (colposcopy of the vagina and cervix 57420–57461) · the rest is not built yet"],
  ["58K", "Uterus, fallopian tubes, and ovaries — includes hysterectomy", "58100–58999", "Part 1 (hysteroscopy and tube/ovary laparoscopy) · Part 2 (hysterectomy and myomectomy)"],
  ["59K", "Maternal care and delivery", "59000–59899", "Part 3 (the delivery codes 59400–59622) · the other maternity services are not built yet"],
];

const solved: [string, string, string, string][] = [
  ["Cystourethroscopy with fulguration and resection of two 5-cm bladder tumors", "52240 — once (5 + 5 = 10 cm, so LARGE)", "/cpt/surgery/50000-series-guidelines-reviewer#cystourethroscopy", "Part 1 · Cystourethroscopy"],
  ["Vaginal hysterectomy with removal of the fallopian tubes, uterus 255 g", "58291", "/cpt/surgery/50000-series-guidelines-reviewer-part-2#hysterectomy", "Part 2 · Hysterectomy"],
  ["Martha: prior cesarean, vaginal attempt fails, Dr. Rose does a cesarean and gave all the care", "59618", "/cpt/surgery/50000-series-guidelines-reviewer-part-3#delivery-codes", "Part 3 · Delivery codes"],
];

const differences: [string, string][] = [
  ["Cystoscopy, urethroscopy, and cystourethroscopy shown as '52000 to 52010'", "Those are only the diagnostic and catheter codes at the start of the family. The treatment codes run 52204–52356, and the bladder neck and prostate codes run 52400–52700."],
  ["Transurethral prostate procedures shown as '52601 to 52649'", "52647 (laser coagulation) is deleted in CPT 2026, and waterjet ablation now uses the new 52597. Use the codes in Part 2."],
  ["Retropubic prostatectomy shown as '55840 to 55845'", "Those are the radical retropubic codes. The subtotal retropubic prostatectomy is 55831."],
  ["Cesarean codes shown as '59510, 59515, or 59525'", "59514 (cesarean delivery only) is also a cesarean code, and 59525 is an add-on for a hysterectomy after cesarean — it is not a delivery code by itself."],
];

const approach = [
  "Where is the problem? The first digits of the code point to the body region: 50 kidney and ureter, 51–52 bladder, 53 urethra, 54–55 male, 56–58 female, 59 maternity. The range map below shows it.",
  "Is it a SCOPE procedure (endoscopy) or an operation? Scopes are picked by the organ and how far the tip went; operations are picked by the procedure and approach.",
  "Was anything done beyond looking? A therapeutic scope code already includes the diagnostic look — report only the therapeutic code.",
  "Count what the descriptor counts: tumor size for the bladder, uterine weight and tube/ovary removal for a hysterectomy, stages for a TURP (a prostate resection done through the urethra), and how much of the care your doctor gave for a delivery.",
  "Check the special rules: modifiers 58 and 78, 'separate procedure', and the 'Do not report … with …' lines.",
];

export default function GenitourinarySeriesPage() {
  return (
    <main style={{ maxWidth: "1120px", margin: "0 auto", padding: "36px clamp(12px, 4vw, 24px) 64px", minHeight: "100vh", background: "#f6f7ff", color: "#1c1b33", fontFamily: "Arial, sans-serif" }}>
      <header style={{ background: "linear-gradient(135deg, #1e1b4b, #4338ca)", color: "white", padding: "48px clamp(20px, 4vw, 44px)", borderRadius: "18px", marginBottom: "28px", boxShadow: "0 12px 28px rgba(30,27,75,0.22)" }}>
        <p style={{ margin: "0 0 10px", color: "#c7d2fe", fontWeight: 800, letterSpacing: "0.08em" }}>CPT SURGERY SECTION</p>
        <h1 style={{ margin: 0, fontSize: "clamp(34px, 6.5vw, 60px)" }}>GENITOURINARY SYSTEM</h1>
        <p style={{ fontSize: "21px", lineHeight: 1.5, maxWidth: "780px", margin: "12px 0 0" }}>50010–59899 — urinary and male genital endoscopy, female genital endoscopy, hysterectomy, the prostate, and maternal care and delivery, with schematics and the slide questions solved step by step.</p>
      </header>

      <nav aria-label="Genitourinary series navigation" style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "30px" }}>
        <Link href="/cpt/surgery" style={navLinkStyle}>Back to Surgery</Link>
        <Link href="/cpt/surgery/50000-series-guidelines-reviewer" style={navLinkStyle}>Reviewer Pt. 1</Link>
        <Link href="/cpt/surgery/50000-series-guidelines-reviewer-part-2" style={navLinkStyle}>Reviewer Pt. 2</Link>
        <Link href="/cpt/surgery/50000-series-guidelines-reviewer-part-3" style={navLinkStyle}>Reviewer Pt. 3</Link>
        <Link href="/cpt/surgery/50000-series-practice-quiz" style={navLinkStyle}>Practice Quiz</Link>
        <Link href="/cpt/surgery/50000-series-flashcards" style={navLinkStyle}>Flashcards</Link>
        <Link href="/cpt" style={navLinkStyle}>CPT home</Link>
      </nav>

      <section style={{ background: "#eef0ff", border: "1px solid #c7d2fe", borderLeft: "7px solid #4338ca", borderRadius: "12px", padding: "22px 24px", marginBottom: "26px", lineHeight: 1.7 }}>
        <strong>The 5-question approach for any 50,000-series code</strong>
        <ol style={{ margin: "10px 0 0", paddingLeft: "22px", display: "grid", gap: "6px" }}>
          {approach.map((t) => <li key={t}>{t}</li>)}
        </ol>
      </section>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "18px", marginBottom: "30px" }}>
        <Link href="/cpt/surgery/50000-series-guidelines-reviewer" style={cardStyle}>
          <span style={labelStyle}>GUIDELINES REVIEWER · PART 1</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>Endoscopy — Urinary, Male & Female</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>Endoscopy rules, renal and ureteral scopes, cystourethroscopy and bladder tumors, colposcopy, hysteroscopy, and tube/ovary laparoscopy — with a urinary-tract schematic and the bladder tumor question solved.</p>
        </Link>
        <Link href="/cpt/surgery/50000-series-guidelines-reviewer-part-2" style={cardStyle}>
          <span style={labelStyle}>GUIDELINES REVIEWER · PART 2</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>Hysterectomy & the Prostate</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>The hysterectomy grid (approach, 250 g, tubes and ovaries), myomectomy, TURP in stages, regrowth, and open prostatectomy — with the vaginal hysterectomy question solved.</p>
        </Link>
        <Link href="/cpt/surgery/50000-series-guidelines-reviewer-part-3" style={cardStyle}>
          <span style={labelStyle}>GUIDELINES REVIEWER · PART 3</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>Maternal Care & Delivery</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>The obstetric global package, vaginal, cesarean, and VBAC codes, and the separate services — with a delivery-package grid and Martha's case solved.</p>
        </Link>
        <Link href="/cpt/surgery/50000-series-practice-quiz" style={cardStyle}>
          <span style={labelStyle}>PRACTICE QUIZ</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>10 Scenario Questions</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>Ten scenarios across the whole series. Each answer shows what to look for and how to eliminate the wrong choices.</p>
        </Link>
        <Link href="/cpt/surgery/50000-series-flashcards" style={cardStyle}>
          <span style={labelStyle}>FLASHCARDS</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>5-Minute Commute Review</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>Tap-to-flip cards, one rule per card — modifiers 58 and 78, the 250 g hysterectomy line, bladder tumor sizes, and the delivery-code pattern.</p>
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
              <tr key={q}><td style={tdStyle}>{q}</td><td style={{ ...tdStyle, ...codeStyle }}>{a}</td><td style={tdStyle}><Link href={href} style={{ color: "#4338ca", fontWeight: 700 }}>{label}</Link></td></tr>
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

      <Link href="/cpt/surgery" style={{ textDecoration: "none", color: "#4338ca", fontWeight: 700 }}>← Back to Surgery</Link>
    </main>
  );
}
