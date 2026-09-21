import Link from "next/link";

const cardStyle = {
  display: "block",
  textDecoration: "none",
  color: "inherit",
  background: "white",
  border: "1px solid #e6def7",
  borderRadius: "12px",
  padding: "24px",
  boxShadow: "0 5px 16px rgba(46,16,101,0.06)",
};
const navLinkStyle = { textDecoration: "none", color: "#6d28d9", background: "#ffffff", border: "1px solid #e6def7", borderRadius: "999px", padding: "10px 15px", fontWeight: 700, fontSize: "14px" };
const labelStyle = { color: "#6d28d9", fontWeight: 800 };
const thStyle = { border: "1px solid #e6def7", padding: "9px 11px", textAlign: "left" as const, background: "#f5f0ff", color: "#2e1065" };
const tdStyle = { border: "1px solid #e6def7", padding: "9px 11px", textAlign: "left" as const, verticalAlign: "top" as const };
const codeStyle = { fontFamily: "Consolas, monospace", fontWeight: 800, color: "#6d28d9" };

const rangeMap: [string, string, string, string][] = [
  ["60K", "Endocrine system — thyroid, parathyroid, thymus, adrenal, and the carotid body", "60000–60699", "Part 3 (built)"],
  ["61K–63K", "Central nervous system — skull, meninges, brain, spine, and spinal cord", "61000–63746", "Part 1 (skull base, endovascular) · Part 2 (radiosurgery, neurostimulators) · Part 3 (spine decompression). NOT covered yet: craniotomy block 61304–61576, aneurysm and AVM surgery 61680–61711, stereotactic computer-assisted 61781–61783, epidural and intrathecal injections 62320–62327, pumps 62350–62370, shunts, and intraspinal excisions 63250 and up"],
  ["64K", "Peripheral nervous system — extracranial nerves, peripheral nerves, and the autonomic system", "64400–64999", "Not built yet"],
  ["65K–66K", "Eyeball and anterior segment (in front of the lens)", "65091–66999", "Not built yet"],
  ["67K", "Posterior segment (behind the lens) and the ocular adnexa: eye muscles, orbit, eyelids", "67005–67999", "Not built yet"],
  ["68K", "Conjunctiva", "68020–68899", "Not built yet"],
  ["69K", "Ears — external ear (in front of the eardrum), middle and inner ear (the eardrum and behind it)", "69000–69990", "Not built yet"],
];

const solved: [string, string, string, string][] = [
  ["Transcochlear approach with excision of an intradural posterior fossa lesion, one surgeon", "61616, 61596-51", "/cpt/surgery/60000-series-guidelines-reviewer#skull-base", "Part 1 · Skull base"],
  ["Acute stroke: left MCA clot removed with a stentriever; right ICA also imaged", "61645, 36224-59", "/cpt/surgery/60000-series-guidelines-reviewer#endovascular", "Part 1 · Endovascular"],
  ["Vasospasm after a brain bleed: papaverine, 12 minutes, one territory", "61650", "/cpt/surgery/60000-series-guidelines-reviewer#endovascular", "Part 1 · Endovascular"],
  ["Two lung metastases (2.5 cm and 1.5 cm), particle beam", "61796, +61797", "/cpt/surgery/60000-series-guidelines-reviewer-part-2#radiosurgery", "Part 2 · Radiosurgery"],
  ["Two lesions (1.5 cm and 4.0 cm), gamma ray, headframe", "61798, +61797, +61800 (the walkthrough said +61799)", "/cpt/surgery/60000-series-guidelines-reviewer-part-2#radiosurgery", "Part 2 · Radiosurgery"],
  ["Anterior discectomy at four cervical interspaces", "63075, +63076 × 3", "/cpt/surgery/60000-series-guidelines-reviewer-part-3#spine-anterior", "Part 3 · Spine"],
];

const differences: [string, string][] = [
  ["Walkthrough answer for the 1.5-cm + 4.0-cm lesions: '61798, 61799, 61800'", "61799 is only for an additional COMPLEX lesion. The additional 1.5-cm lesion is simple, so it is +61797. The base is 61798 because one lesion is complex."],
  ["Walkthrough lists 61870 for neurostimulator electrodes in the cerebellar cortex", "61870 is not in CPT 2026. Use 61850, 61860, 61863, 61867 and the add-ons. The 2026 book also has skull-mounted generator codes 61889, 61891, and 61892."],
  ["Deck slide says electronic analysis of a neurostimulator is 'part of the package and not reported', while the walkthrough says it is reported separately", "Both are partly right. Test stimulation and 95970 at implantation are included. Other analysis and programming is reported with the Medicine codes: 95976, 95977, 95983, 95984 (brain and cranial nerve devices) and 95971, 95972 (spinal cord devices)."],
  ["Walkthrough gives spinal electrode insertion as '63615 and 63655' and sacral posterior laminectomy as '63048'", "The codes are 63650 (percutaneous array) and 63655 (plate or paddle). Sacral laminectomy is 63011, and +63048 is the add-on for each additional segment of 63045–63047."],
  ["Deck lists percutaneous spine codes as '62287, 0274T, 0275T'", "The 2026 book lists 62287, 62330, and +62331 for percutaneous decompression, and 62380 for endoscopic. The Category III 0274T is referenced in notes."],
  ["Deck's spine table shows lumbar laminotomy re-exploration '63042, +63044' and cervical '63040, +63043'", "Correct. Note that the first-time add-on +63035 serves BOTH cervical and lumbar laminotomy (63020 and 63030)."],
];

const approach = [
  "Where is the problem? 60K endocrine, 61K–63K brain and spine, 64K peripheral nerves, 65K–68K eye, 69K ear. The range map below shows it.",
  "What layer of the operation is it? Skull base has approach, definitive, and repair layers. Spine codes name the operation, the region, and how the levels are counted.",
  "Count what the descriptor counts: vessels, vascular territories, lesions (simple or complex), interspaces, segments, or array numbers.",
  "Check the packaged work: catheters and angiograms in the treated territory, planning in radiosurgery, microelectrode recording, and routine closure are all included.",
  "Look for the add-on (+) codes and the 'Do not report … with …' lines before you stack anything.",
];

export default function NeuroEndocrineSeriesPage() {
  return (
    <main style={{ maxWidth: "1120px", margin: "0 auto", padding: "36px clamp(12px, 4vw, 24px) 64px", minHeight: "100vh", background: "#faf8ff", color: "#231a36", fontFamily: "Arial, sans-serif" }}>
      <header style={{ background: "linear-gradient(135deg, #2e1065, #6d28d9)", color: "white", padding: "48px clamp(20px, 4vw, 44px)", borderRadius: "18px", marginBottom: "28px", boxShadow: "0 12px 28px rgba(46,16,101,0.22)" }}>
        <p style={{ margin: "0 0 10px", color: "#ddd6fe", fontWeight: 800, letterSpacing: "0.08em" }}>CPT SURGERY SECTION</p>
        <h1 style={{ margin: 0, fontSize: "clamp(34px, 6.5vw, 60px)" }}>NEURO-ENDOCRINE SYSTEM</h1>
        <p style={{ fontSize: "21px", lineHeight: 1.5, maxWidth: "780px", margin: "12px 0 0" }}>60000–69990 — skull base and brain surgery, intracranial endovascular therapy, radiosurgery, neurostimulators, spine decompression, and the endocrine glands, with schematics and the slide questions solved step by step.</p>
      </header>

      <nav aria-label="Neuro-endocrine series navigation" style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "30px" }}>
        <Link href="/cpt/surgery" style={navLinkStyle}>Back to Surgery</Link>
        <Link href="/cpt/surgery/60000-series-guidelines-reviewer" style={navLinkStyle}>Reviewer Pt. 1</Link>
        <Link href="/cpt/surgery/60000-series-guidelines-reviewer-part-2" style={navLinkStyle}>Reviewer Pt. 2</Link>
        <Link href="/cpt/surgery/60000-series-guidelines-reviewer-part-3" style={navLinkStyle}>Reviewer Pt. 3</Link>
        <Link href="/cpt/surgery/60000-series-practice-quiz" style={navLinkStyle}>Practice Quiz</Link>
        <Link href="/cpt/surgery/60000-series-flashcards" style={navLinkStyle}>Flashcards</Link>
        <Link href="/cpt" style={navLinkStyle}>CPT home</Link>
      </nav>

      <section style={{ background: "#f5f0ff", border: "1px solid #ddd6fe", borderLeft: "7px solid #6d28d9", borderRadius: "12px", padding: "22px 24px", marginBottom: "26px", lineHeight: 1.7 }}>
        <strong>The 5-question approach for any 60,000-series code</strong>
        <ol style={{ margin: "10px 0 0", paddingLeft: "22px", display: "grid", gap: "6px" }}>
          {approach.map((t) => <li key={t}>{t}</li>)}
        </ol>
      </section>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "18px", marginBottom: "30px" }}>
        <Link href="/cpt/surgery/60000-series-guidelines-reviewer" style={cardStyle}>
          <span style={labelStyle}>GUIDELINES REVIEWER · PART 1</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>Skull Base & Endovascular Therapy</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>Twist drill, burr hole, and craniotomy definitions; the approach, definitive, and repair layers of skull base surgery; intracranial thrombectomy, angioplasty, and infusion — with two schematics and three slide questions solved.</p>
        </Link>
        <Link href="/cpt/surgery/60000-series-guidelines-reviewer-part-2" style={cardStyle}>
          <span style={labelStyle}>GUIDELINES REVIEWER · PART 2</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>Radiosurgery & Neurostimulators</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>Simple versus complex lesions, the brain and spine radiosurgery code sets, and brain and spinal cord stimulators — with both radiosurgery slide questions solved.</p>
        </Link>
        <Link href="/cpt/surgery/60000-series-guidelines-reviewer-part-3" style={cardStyle}>
          <span style={labelStyle}>GUIDELINES REVIEWER · PART 3</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>Spine & the Endocrine Glands</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>Laminectomy, laminotomy, discectomy, and corpectomy with a level-counting grid, plus the thyroid, parathyroid, thymus, adrenal, and carotid body codes — with the cervical discectomy question solved.</p>
        </Link>
        <Link href="/cpt/surgery/60000-series-practice-quiz" style={cardStyle}>
          <span style={labelStyle}>PRACTICE QUIZ</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>10 Scenario Questions</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>Ten scenarios across the whole series. Each answer shows what to look for and how to eliminate the wrong choices.</p>
        </Link>
        <Link href="/cpt/surgery/60000-series-flashcards" style={cardStyle}>
          <span style={labelStyle}>FLASHCARDS</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>5-Minute Commute Review</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>Tap-to-flip cards, one rule per card — the three vascular territories, simple versus complex lesions, spine level counting, and the endocrine gland codes.</p>
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
              <tr key={q}><td style={tdStyle}>{q}</td><td style={{ ...tdStyle, ...codeStyle }}>{a}</td><td style={tdStyle}><Link href={href} style={{ color: "#6d28d9", fontWeight: 700 }}>{label}</Link></td></tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 style={{ color: "#111827" }}>Where the training deck and walkthrough differ from CPT 2026</h2>
      <div style={{ overflowX: "auto", marginBottom: "30px" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px", background: "#fff" }}>
          <thead><tr><th style={thStyle}>In the deck or walkthrough</th><th style={thStyle}>In the 2026 codebook (what this reviewer uses)</th></tr></thead>
          <tbody>
            {differences.map(([a, b]) => (
              <tr key={a}><td style={tdStyle}>{a}</td><td style={tdStyle}>{b}</td></tr>
            ))}
          </tbody>
        </table>
      </div>

      <Link href="/cpt/surgery" style={{ textDecoration: "none", color: "#6d28d9", fontWeight: 700 }}>← Back to Surgery</Link>
    </main>
  );
}
