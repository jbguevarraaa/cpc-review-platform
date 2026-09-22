import Link from "next/link";

const cardStyle = {
  display: "block",
  textDecoration: "none",
  color: "inherit",
  background: "white",
  border: "1px solid #d7e2df",
  borderRadius: "12px",
  padding: "24px",
  boxShadow: "0 5px 16px rgba(18,52,59,0.07)",
};
const navLinkStyle = { textDecoration: "none", color: "#0f766e", background: "#ffffff", border: "1px solid #d7e2df", borderRadius: "999px", padding: "10px 15px", fontWeight: 700, fontSize: "14px" };
const labelStyle = { color: "#0f766e", fontWeight: 800 };
const thStyle = { border: "1px solid #d7e2df", padding: "9px 11px", textAlign: "left" as const, background: "#ecf8f6", color: "#12343b" };
const tdStyle = { border: "1px solid #d7e2df", padding: "9px 11px", textAlign: "left" as const, verticalAlign: "top" as const };
const codeStyle = { fontFamily: "Consolas, monospace", fontWeight: 800, color: "#0f766e" };

const rangeMap: [string, string, string][] = [
  ["98000–98016", "Telemedicine — synchronous audio-video and audio-only visits", "Part 1"],
  ["99202–99215", "Office or other outpatient — new patient (99202–99205) and established patient (99211–99215)", "Parts 1 and 2"],
  ["99221–99239", "Hospital inpatient or observation — initial, subsequent, same-date admit and discharge, and discharge day", "Part 2"],
  ["99242–99255", "Consultations — office or outpatient, and inpatient or observation", "Parts 1 and 2"],
  ["99281–99285", "Emergency department — no new or established split", "Part 1"],
  ["99291–99292", "Critical care — first 30–74 minutes, each additional 30 minutes", "Part 3"],
  ["99304–99316 · 99341–99350", "Nursing facility services · home or residence services", "Part 1 (layout only)"],
  ["99366–99380 · 99466–99480", "Case management and care plan oversight · neonatal and pediatric critical and intensive care", "Layout only"],
  ["99358–99360 · 99415–99418", "Prolonged services · standby", "Part 3"],
  ["99381–99429 · 99499", "Preventive medicine and counseling · unlisted E/M service", "Layout only"],
];

const solved: [string, string, string, string][] = [
  ["A physician sees a critical care patient for 74 minutes, then returns for 30 more minutes the same day", "99291 × 1, 99292 × 1", "/cpt/e-m/99000-series-guidelines-reviewer-part-3#critical-care", "Part 3 · Critical care"],
  ["Established patient with newly diagnosed type 1 diabetes: 75-minute visit, over 50 minutes of counseling", "99215, 99417 × 2", "/cpt/e-m/99000-series-guidelines-reviewer-part-3#prolonged", "Part 3 · Prolonged services"],
  ["New adolescent with anxiety seen twice in one day: 45 minutes, then 45 more minutes", "99205, 99417 × 2", "/cpt/e-m/99000-series-guidelines-reviewer-part-3#prolonged", "Part 3 · Prolonged services"],
];

const differences: [string, string][] = [
  ["Deck picks the level from history, exam, and MDM: '3 of 3 key components' for new and initial visits, '2 of 3' for established and subsequent", "In CPT 2026 a level-based code is chosen by the level of MDM (2 of 3 MDM elements) OR by total time on the date. The extent of history and exam is not used to pick the level."],
  ["Deck says counseling or coordination of care for more than 50% of the visit makes TIME the key factor", "Total provider time on the date can be used for the office, hospital, and consultation levels (not the ED, which is MDM only). There is no 50% test, and counseling simply counts toward the time."],
  ["Deck's code layout: 99201 to 99292, then 99304 to 99350, then 99354 to 99499", "The 2026 section is 98000–98016 and 99202–99499. 99201 was deleted, and the consultation, ED, and other categories sit inside that range as shown in the range map."],
  ["Deck teaches face-to-face time, unit/floor time, and total time as three time measures", "Level-based codes use TOTAL time on the date (face-to-face and not). Critical care and prolonged services have their own time rules."],
  ["Deck lists prolonged service WITH direct patient contact as 99354–99357 (and 99355 and 99357 as add-ons)", "Those codes are no longer in the 2026 code set. For prolonged time on the date of an office visit use 99417, and for inpatient use 99418."],
  ["Deck says prolonged codes need more than 50% counseling, and 'additional 30-minute codes report 15 to 30 minutes past the first hour'", "99417 and 99418 are used only when the visit was leveled by TIME, and each unit is a full 15 minutes past the highest primary code's time (75 minutes new, 55 minutes established for the office)."],
  ["Deck's packaged critical care services for the professional include 93561, 93562 (cardiac output)", "The 2026 book lists cardiac output interpretation as 93598. Chest x-ray, pulse oximetry, blood gases, gastric intubation, pacing, ventilatory management, and vascular access stay packaged."],
  ["Deck teaches the seven components (HPI, ROS, PFSH, exam areas, counseling, coordination of care, nature of the problem)", "Kept in Part 2 as translation vocabulary only. The 2026 codebook uses MDM (problems, data, risk) and time."],
  ["Deck defines concurrent care and transfer of care as separate headings", "Transfer of care and consultation rules are printed in 2026. Concurrent care is described in older material. Each provider simply reports their own codes."],
];

const approach = [
  "Where was the patient seen, and by whom? The place and type of service name the E/M category — not where the patient lives.",
  "New or established, initial or subsequent? Look back 3 years for the same specialty and subspecialty in the same group. The ED has no new/established split.",
  "Is it a level-based visit or a time-only service? Critical care and prolonged codes are time-only.",
  "For level-based visits, pick the higher supported route: MDM (2 of 3 elements) or total time on the date.",
  "Check the extras: a 99417 or 99418 unit, a modifier 25 for a same-day procedure, and the 'do not report with' lines.",
];

export default function EmSeriesHubPage() {
  return (
    <main style={{ maxWidth: "1120px", margin: "0 auto", padding: "36px clamp(12px, 4vw, 24px) 64px", minHeight: "100vh", background: "#f7faf9", color: "#17212b", fontFamily: "Arial, sans-serif" }}>
      <header style={{ background: "linear-gradient(135deg, #12343b, #0f766e)", color: "white", padding: "48px clamp(20px, 4vw, 44px)", borderRadius: "18px", marginBottom: "28px", boxShadow: "0 12px 28px rgba(18,52,59,0.22)" }}>
        <p style={{ margin: "0 0 10px", color: "#b7f7e8", fontWeight: 800, letterSpacing: "0.08em" }}>CPT E/M SECTION</p>
        <h1 style={{ margin: 0, fontSize: "clamp(34px, 6.5vw, 60px)" }}>99,000 SERIES</h1>
        <p style={{ fontSize: "21px", lineHeight: 1.5, maxWidth: "780px", margin: "12px 0 0" }}>Evaluation and management, 98000–99499 — the E/M layout, rules common to every visit, picking a level by MDM or time, critical care, and prolonged services. Checked against the CPT 2026 codebook.</p>
      </header>

      <nav aria-label="99,000 series navigation" style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "30px" }}>
        <Link href="/cpt/e-m" style={navLinkStyle}>Back to E/M</Link>
        <Link href="/cpt/e-m/99000-series-guidelines-reviewer" style={navLinkStyle}>Reviewer Pt. 1</Link>
        <Link href="/cpt/e-m/99000-series-guidelines-reviewer-part-2" style={navLinkStyle}>Reviewer Pt. 2</Link>
        <Link href="/cpt/e-m/99000-series-guidelines-reviewer-part-3" style={navLinkStyle}>Reviewer Pt. 3</Link>
        <Link href="/cpt/e-m/99000-series-practice-quiz" style={navLinkStyle}>Practice Quiz</Link>
        <Link href="/cpt/e-m/99000-series-flashcards" style={navLinkStyle}>Flashcards</Link>
        <Link href="/cpt/e-m/99000-series-discussion-guide" style={navLinkStyle}>Discussion Guide</Link>
        <Link href="/cpt" style={navLinkStyle}>CPT home</Link>
      </nav>

      <section style={{ background: "#ecf8f6", border: "1px solid #b7f7e8", borderLeft: "7px solid #0f766e", borderRadius: "12px", padding: "22px 24px", marginBottom: "26px", lineHeight: 1.7 }}>
        <strong>The 5-question approach for any E/M code</strong>
        <ol style={{ margin: "10px 0 0", paddingLeft: "22px", display: "grid", gap: "6px" }}>
          {approach.map((t) => <li key={t}>{t}</li>)}
        </ol>
      </section>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "18px", marginBottom: "30px" }}>
        <Link href="/cpt/e-m/99000-series-guidelines-reviewer" style={cardStyle}>
          <span style={labelStyle}>GUIDELINES REVIEWER · PART 1</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>How E/M Is Built & Common Rules</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>The code map, categories and levels, new versus established patients, locum tenens, the emergency department, what counts as time, and transfer of care — with four hard scenarios (including modifier 25, same-day readmission, and split/shared visits).</p>
        </Link>
        <Link href="/cpt/e-m/99000-series-guidelines-reviewer-part-2" style={cardStyle}>
          <span style={labelStyle}>GUIDELINES REVIEWER · PART 2</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>Picking the Level</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>MDM or total time, the MDM grid, office and hospital time thresholds, and a translation table from the deck&apos;s older history-and-exam system to the 2026 rules.</p>
        </Link>
        <Link href="/cpt/e-m/99000-series-guidelines-reviewer-part-3" style={cardStyle}>
          <span style={labelStyle}>GUIDELINES REVIEWER · PART 3</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>Critical Care & Prolonged Services</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>The critical care time ladder, packaged services, and 99417, 99418, 99358, 99415, and 99360 — with all three deck case questions solved step by step.</p>
        </Link>
        <Link href="/cpt/e-m/99000-series-practice-quiz" style={cardStyle}>
          <span style={labelStyle}>PRACTICE QUIZ</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>10 Scenario Questions</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>Ten scenarios across the whole series. Each answer shows what to look for and how to eliminate the wrong choices.</p>
        </Link>
        <Link href="/cpt/e-m/99000-series-discussion-guide" style={cardStyle}>
          <span style={labelStyle}>DISCUSSION GUIDE</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>Every Discussion-Guide Question, Answered</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>All 8 questions from the training discussion guide, answered step by step with a \"how to approach\" note for each, checked against CPT 2026.</p>
        </Link>
        <Link href="/cpt/e-m/99000-series-flashcards" style={cardStyle}>
          <span style={labelStyle}>FLASHCARDS</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>5-Minute Commute Review</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>Tap-to-flip cards, one rule per card — time thresholds, MDM data levels, the critical care ladder, and where 99417 starts.</p>
        </Link>
      </div>

      <h2 style={{ color: "#111827" }}>Code range map</h2>
      <div style={{ overflowX: "auto", marginBottom: "30px" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px", background: "#fff" }}>
          <thead><tr><th style={thStyle}>Codes</th><th style={thStyle}>Category</th><th style={thStyle}>In this series</th></tr></thead>
          <tbody>
            {rangeMap.map(([k, region, where]) => (
              <tr key={k}><td style={{ ...tdStyle, ...codeStyle }}>{k}</td><td style={tdStyle}>{region}</td><td style={tdStyle}>{where}</td></tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 style={{ color: "#111827" }}>Slide case questions — answers at a glance</h2>
      <div style={{ overflowX: "auto", marginBottom: "30px" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px", background: "#fff" }}>
          <thead><tr><th style={thStyle}>Slide question</th><th style={thStyle}>Answer</th><th style={thStyle}>Full solution</th></tr></thead>
          <tbody>
            {solved.map(([q, a, href, label]) => (
              <tr key={q}><td style={tdStyle}>{q}</td><td style={{ ...tdStyle, ...codeStyle }}>{a}</td><td style={tdStyle}><Link href={href} style={{ color: "#0f766e", fontWeight: 700 }}>{label}</Link></td></tr>
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

      <Link href="/cpt/e-m" style={{ textDecoration: "none", color: "#0f766e", fontWeight: 700 }}>← Back to E/M</Link>
    </main>
  );
}
