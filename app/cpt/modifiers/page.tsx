import Link from "next/link";

type ModEntry = [string, string];

const symbolLegend: [string, string][] = [
  ["● Revised code", "The code's descriptor text was changed in the current edition."],
  ["▲ New code", "The code is brand new to this edition of CPT."],
  ["◄ ► New or revised text", "Guideline or parenthetical text (not the code descriptor itself) was added or changed."],
  ["➲ Reference note", "Points to CPT Assistant, Clinical Examples in Radiology, or CPT Changes: An Insider's View for background on that code."],
  ["✚ Add-on code", "Always reported in addition to a primary procedure code — never billed alone."],
  ["Ⓝ Modifier 51 exempt", "This code is exempt from modifier 51 even when performed with another procedure."],
  ["Ⓕ Product pending FDA approval", "Flags a code tied to a product or vaccine that had not yet received FDA approval at time of publication."],
  ["# Resequenced code", "The code doesn't fall in strict numeric order with its neighbors — it's grouped with related codes elsewhere instead."],
  ["★ Telemedicine", "The service may be reported when furnished via telemedicine."],
  ["📞 Audio-only", "The telemedicine service may be furnished using audio-only technology."],
  ["‡ Duplicate PLA test", "Flags a Proprietary Laboratory Analyses (PLA) code that duplicates an existing test already described elsewhere."],
];

const level1Modifiers: ModEntry[] = [
  ["22", "Increased Procedural Services"],
  ["23", "Unusual Anesthesia"],
  ["24", "Unrelated Evaluation and Management Service by the Same Physician or Other Qualified Health Care Professional During a Postoperative Period"],
  ["25", "Significant, Separately Identifiable Evaluation and Management Service by the Same Physician or Other Qualified Health Care Professional on the Same Day of the Procedure or Other Service"],
  ["26", "Professional Component"],
  ["32", "Mandated Services"],
  ["33", "Preventive Services"],
  ["47", "Anesthesia by Surgeon"],
  ["50", "Bilateral Procedure"],
  ["51", "Multiple Procedures"],
  ["52", "Reduced Services"],
  ["53", "Discontinued Procedure"],
  ["54", "Surgical Care Only"],
  ["55", "Postoperative Management Only"],
  ["56", "Preoperative Management Only"],
  ["57", "Decision for Surgery"],
  ["58", "Staged or Related Procedure or Service by the Same Physician or Other Qualified Health Care Professional During the Postoperative Period"],
  ["59", "Distinct Procedural Service"],
  ["62", "Two Surgeons"],
  ["63", "Procedure Performed on Infants Less Than 4 kg"],
  ["66", "Surgical Team"],
  ["76", "Repeat Procedure or Service by Same Physician or Other Qualified Health Care Professional"],
  ["77", "Repeat Procedure by Another Physician or Other Qualified Health Care Professional"],
  ["78", "Unplanned Return to the Operating/Procedure Room by the Same Physician or Other Qualified Health Care Professional Following Initial Procedure for a Related Procedure During the Postoperative Period"],
  ["79", "Unrelated Procedure or Service by the Same Physician or Other Qualified Health Care Professional During the Postoperative Period"],
  ["80", "Assistant Surgeon"],
  ["81", "Minimum Assistant Surgeon"],
  ["82", "Assistant Surgeon (When Qualified Resident Surgeon Not Available)"],
  ["90", "Reference (Outside) Laboratory"],
  ["91", "Repeat Clinical Diagnostic Laboratory Test"],
  ["92", "Alternative Laboratory Platform Testing"],
  ["93", "Synchronous Telemedicine Service Rendered via Telephone or Other Real-Time Interactive Audio-Only Telecommunications System"],
  ["95", "Synchronous Telemedicine Service Rendered via a Real-Time Interactive Audio and Video Telecommunications System"],
  ["96", "Habilitative Services"],
  ["97", "Rehabilitative Services"],
  ["99", "Multiple Modifiers"],
];

const category2Modifiers: ModEntry[] = [
  ["1P", "Performance Measure Exclusion Modifier Due to Medical Reasons"],
  ["2P", "Performance Measure Exclusion Modifier Due to Patient Reasons"],
  ["3P", "Performance Measure Exclusion Modifier Due to System Reasons"],
  ["8P", "Performance Measure Reporting Modifier — Action Not Performed, Reason Not Otherwise Specified"],
];

const physicalStatusModifiers: ModEntry[] = [
  ["P1", "A normal healthy patient"],
  ["P2", "A patient with mild systemic disease"],
  ["P3", "A patient with severe systemic disease"],
  ["P4", "A patient with severe systemic disease that is a constant threat to life"],
  ["P5", "A moribund patient who is not expected to survive without the operation"],
  ["P6", "A declared brain-dead patient whose organs are being removed for donor purposes"],
];

const outpatientOnlyModifiers: ModEntry[] = [
  ["27", "Multiple Outpatient Hospital E/M Encounters on the Same Date"],
  ["73", "Discontinued Outpatient Procedure Prior to Anesthesia Administration"],
  ["74", "Discontinued Outpatient Procedure After Anesthesia Administration"],
];

const outpatientSharedCodes = ["25", "33", "50", "52", "58", "59", "76", "77", "78", "79", "91"];

const hcpcsDigitModifiers: ModEntry[] = [
  ["E1", "Upper left, eyelid"],
  ["E2", "Lower left, eyelid"],
  ["E3", "Upper right, eyelid"],
  ["E4", "Lower right, eyelid"],
  ["FA", "Left hand, thumb"],
  ["F1", "Left hand, second digit"],
  ["F2", "Left hand, third digit"],
  ["F3", "Left hand, fourth digit"],
  ["F4", "Left hand, fifth digit"],
  ["F5", "Right hand, thumb"],
  ["F6", "Right hand, second digit"],
  ["F7", "Right hand, third digit"],
  ["F8", "Right hand, fourth digit"],
  ["F9", "Right hand, fifth digit"],
  ["TA", "Left foot, great toe"],
  ["T1", "Left foot, second digit"],
  ["T2", "Left foot, third digit"],
  ["T3", "Left foot, fourth digit"],
  ["T4", "Left foot, fifth digit"],
  ["T5", "Right foot, great toe"],
  ["T6", "Right foot, second digit"],
  ["T7", "Right foot, third digit"],
  ["T8", "Right foot, fourth digit"],
  ["T9", "Right foot, fifth digit"],
];

const hcpcsCoronaryModifiers: ModEntry[] = [
  ["LC", "Left circumflex coronary artery"],
  ["LD", "Left anterior descending coronary artery"],
  ["LM", "Left main coronary artery"],
  ["RC", "Right coronary artery"],
  ["RI", "Ramus intermedius coronary artery"],
];

const hcpcsOtherModifiers: ModEntry[] = [
  ["LT", "Left side (used to identify procedures performed on the left side of the body)"],
  ["RT", "Right side (used to identify procedures performed on the right side of the body)"],
  ["QM", "Ambulance service provided under arrangement by a provider of services"],
  ["QN", "Ambulance service furnished directly by a provider of services"],
  ["GG", "Performance and payment of a screening mammogram and diagnostic mammogram on the same patient, same day"],
  ["GH", "Diagnostic mammogram converted from screening mammogram on the same day"],
];

const traps: string[] = [
  "51 vs. 59 — 51 flags that multiple procedures were done in the same session (affects payment); 59 flags that a procedure was genuinely distinct/separate from another one that might otherwise look bundled. Don't reach for 59 just because two codes were billed together — it's specifically for proving they weren't part of the same service.",
  "76 vs. 77 — both mean a procedure was repeated, but 76 is the same physician repeating their own procedure, and 77 is a different physician repeating someone else's procedure.",
  "78 vs. 79 — both apply during a postoperative period, but 78 is an unplanned return to the OR for a complication related to the original surgery, while 79 is for a completely unrelated procedure or service during that same postop window.",
  "58 vs. 78 vs. 79 — 58 is for a staged or planned related procedure (expected from the start), 78 is an unplanned related return to the OR, and 79 is unrelated entirely. All three live in the postoperative period but answer different \"why are we back in the OR\" questions.",
  "50 (bilateral) is a Level I CPT modifier for procedures performed on both sides in the same session — don't confuse it with the HCPCS LT/RT modifiers, which each flag a single side rather than \"both.\"",
  "73 vs. 74 (outpatient hospital only) — both cover a discontinued procedure, but the deciding factor is simple: was anesthesia already given? Before anesthesia → 73. After anesthesia → 74.",
  "80 vs. 81 vs. 82 — all three are assistant-surgeon modifiers, but they scale by how much the assistant actually did: 80 is a full assisting surgeon, 81 is minimum assistance, and 82 is specifically for when a qualified resident surgeon wasn't available to assist instead.",
];

const mainStyle = { maxWidth: "1160px", margin: "0 auto", padding: "36px 24px 64px", minHeight: "100vh", background: "#f7f8f8", color: "#1a2321", fontFamily: "Arial, sans-serif" };
const heroStyle = { background: "linear-gradient(135deg, #101719, #0f766e)", color: "white", padding: "46px 42px", borderRadius: "18px", marginBottom: "26px", boxShadow: "0 12px 28px rgba(16,23,25,0.22)" };
const kickerStyle = { margin: "0 0 10px", color: "#99f6e4", fontWeight: 800, letterSpacing: "0.08em" };
const navStyle = { display: "flex", flexWrap: "wrap" as const, gap: "10px", marginBottom: "26px" };
const navLinkStyle = { textDecoration: "none", color: "#0f766e", background: "#ffffff", border: "1px solid #dbe3e1", borderRadius: "999px", padding: "10px 15px", fontWeight: 700, fontSize: "14px" };
const introStyle = { background: "#f0fdfa", border: "1px solid #99f6e4", borderLeft: "7px solid #0f766e", borderRadius: "12px", padding: "22px 24px", marginBottom: "24px", lineHeight: 1.7 };
const sectionStyle = { background: "#ffffff", border: "1px solid #e3e7e6", borderRadius: "14px", padding: "24px 26px", marginBottom: "20px", boxShadow: "0 5px 16px rgba(16,23,25,0.05)" };
const sectionHeaderStyle = { display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px", flexWrap: "wrap" as const };
const badgeStyle = { background: "#0f766e", color: "#fff", borderRadius: "999px", padding: "4px 13px", fontWeight: 800, fontSize: "12px", letterSpacing: "0.04em" };
const sectionTitleStyle = { margin: 0, fontSize: "21px", color: "#111827" };
const pStyle = { lineHeight: 1.7, margin: "0 0 10px", fontSize: "14.5px" };
const tableWrapStyle = { overflowX: "auto" as const };
const tableStyle = { width: "100%", borderCollapse: "collapse" as const, fontSize: "14px" };
const thStyle = { border: "1px solid #e3e7e6", padding: "9px 12px", textAlign: "left" as const, background: "#f0fdfa", color: "#0f766e", fontSize: "12.5px", letterSpacing: "0.02em" };
const tdCodeStyle = { border: "1px solid #e3e7e6", padding: "9px 12px", fontWeight: 800, color: "#0f766e", fontFamily: "Consolas, monospace", width: "70px" };
const tdStyle = { border: "1px solid #e3e7e6", padding: "9px 12px" };
const legendGridStyle = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "10px" };
const legendItemStyle = { background: "#f9faf9", border: "1px solid #ece7db", borderRadius: "8px", padding: "10px 13px", fontSize: "13.5px", lineHeight: 1.55 };
const trapBoxStyle = { background: "#fef2f2", border: "1px solid #fecaca", borderLeft: "5px solid #dc2626", borderRadius: "10px", padding: "14px 16px", marginBottom: "10px", lineHeight: 1.65, fontSize: "14px" };
const chipRowStyle = { display: "flex", flexWrap: "wrap" as const, gap: "8px", marginTop: "6px" };
const chipStyle = { background: "#f0fdfa", border: "1px solid #99f6e4", color: "#0f766e", borderRadius: "999px", padding: "4px 11px", fontWeight: 800, fontSize: "12.5px", fontFamily: "Consolas, monospace" };
const backLinkStyle = { textDecoration: "none", color: "#0f766e", fontWeight: 700 };

function ModTable({ rows }: { rows: ModEntry[] }) {
  return (
    <div style={tableWrapStyle}>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Modifier</th>
            <th style={thStyle}>Name</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([code, name]) => (
            <tr key={code}>
              <td style={tdCodeStyle}>{code}</td>
              <td style={tdStyle}>{name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function CptModifiersPage() {
  return (
    <main style={mainStyle}>
      <header style={heroStyle}>
        <p style={kickerStyle}>CPT REFERENCE · APPLIES ACROSS ALL SECTIONS</p>
        <h1 style={{ margin: 0, fontSize: "clamp(30px, 6vw, 52px)" }}>CPT Modifiers Reviewer</h1>
        <p style={{ margin: "12px 0 0", fontSize: "19px", lineHeight: 1.5 }}>Symbol legend, Level I (CPT), Category II, Physical Status, hospital-outpatient, and Level II (HCPCS) modifiers — all in one place.</p>
      </header>

      <nav aria-label="CPT modifiers navigation" style={navStyle}>
        <Link href="/cpt" style={navLinkStyle}>CPT home</Link>
        <Link href="/cpt/surgery" style={navLinkStyle}>Surgery</Link>
        <Link href="/cpt/e-m" style={navLinkStyle}>E/M</Link>
        <Link href="/cpt/radiology" style={navLinkStyle}>Radiology</Link>
      </nav>

      <section style={introStyle}>
        <strong>How to use this page:</strong> modifiers apply across every CPT section, not just one series, so this is a standalone reference rather than tied to a single code range. Skim the &quot;Common Modifier Traps&quot; section near the bottom first — those pairs (51 vs. 59, 76 vs. 77, 78 vs. 79, etc.) are the highest-yield exam material here.
      </section>

      <section style={sectionStyle}>
        <div style={sectionHeaderStyle}>
          <span style={badgeStyle}>LEGEND</span>
          <h2 style={sectionTitleStyle}>Symbol Legend</h2>
        </div>
        <p style={pStyle}>Every CPT code can carry one or more of these small symbols in front of it — knowing what they mean at a glance saves time on the exam.</p>
        <div style={legendGridStyle}>
          {symbolLegend.map(([symbol, meaning]) => (
            <div key={symbol} style={legendItemStyle}>
              <strong>{symbol}</strong> — {meaning}
            </div>
          ))}
        </div>
      </section>

      <section style={sectionStyle}>
        <div style={sectionHeaderStyle}>
          <span style={badgeStyle}>LEVEL I</span>
          <h2 style={sectionTitleStyle}>CPT Modifiers</h2>
        </div>
        <p style={pStyle}>The core modifier set defined in CPT Appendix A — usable with any CPT procedure code unless a specific code says otherwise.</p>
        <ModTable rows={level1Modifiers} />
      </section>

      <section style={sectionStyle}>
        <div style={sectionHeaderStyle}>
          <span style={badgeStyle}>CATEGORY II</span>
          <h2 style={sectionTitleStyle}>Category II Modifiers</h2>
        </div>
        <p style={pStyle}>Used with Category II performance-measurement codes to explain why a measure wasn't met or an action wasn't performed.</p>
        <ModTable rows={category2Modifiers} />
      </section>

      <section style={sectionStyle}>
        <div style={sectionHeaderStyle}>
          <span style={badgeStyle}>ANESTHESIA</span>
          <h2 style={sectionTitleStyle}>Physical Status Modifiers</h2>
        </div>
        <p style={pStyle}>Appended to anesthesia codes to describe how sick the patient was at the time of the procedure — higher numbers mean a sicker patient, which is a common way exam questions test whether you understand the scale rather than just memorizing it.</p>
        <ModTable rows={physicalStatusModifiers} />
      </section>

      <section style={sectionStyle}>
        <div style={sectionHeaderStyle}>
          <span style={badgeStyle}>OUTPATIENT</span>
          <h2 style={sectionTitleStyle}>Modifiers Approved for Hospital Outpatient Use</h2>
        </div>
        <p style={pStyle}>A subset of Level I modifiers are specifically approved for the hospital outpatient (facility) setting. Most of them are the same modifiers already listed above — the two below are unique to this list and don&apos;t appear as general Level I modifiers.</p>
        <ModTable rows={outpatientOnlyModifiers} />
        <p style={{ ...pStyle, marginTop: "14px", marginBottom: "4px" }}><strong>Also approved for outpatient hospital use</strong> (already defined in the Level I table above):</p>
        <div style={chipRowStyle}>
          {outpatientSharedCodes.map((c) => <span key={c} style={chipStyle}>{c}</span>)}
        </div>
      </section>

      <section style={sectionStyle}>
        <div style={sectionHeaderStyle}>
          <span style={badgeStyle}>LEVEL II</span>
          <h2 style={sectionTitleStyle}>HCPCS Modifiers</h2>
        </div>
        <p style={pStyle}>National (Level II) modifiers, most commonly seen as anatomical location markers for fingers, toes, eyelids, and coronary arteries.</p>

        <h3 style={{ margin: "16px 0 8px", fontSize: "15px", color: "#0f766e", fontWeight: 800 }}>Digit &amp; Eyelid Modifiers</h3>
        <ModTable rows={hcpcsDigitModifiers} />

        <h3 style={{ margin: "18px 0 8px", fontSize: "15px", color: "#0f766e", fontWeight: 800 }}>Coronary Artery Modifiers</h3>
        <ModTable rows={hcpcsCoronaryModifiers} />

        <h3 style={{ margin: "18px 0 8px", fontSize: "15px", color: "#0f766e", fontWeight: 800 }}>Laterality, Ambulance &amp; Mammography</h3>
        <ModTable rows={hcpcsOtherModifiers} />
      </section>

      <section style={sectionStyle}>
        <div style={sectionHeaderStyle}>
          <span style={badgeStyle}>🟥 HIGH-YIELD</span>
          <h2 style={sectionTitleStyle}>Common Modifier Traps</h2>
        </div>
        {traps.map((t) => (
          <div key={t} style={trapBoxStyle}>{t}</div>
        ))}
      </section>

      <div style={{ marginTop: "10px", display: "flex", flexWrap: "wrap" as const, gap: "16px" }}>
        <Link href="/cpt" style={backLinkStyle}>← Back to CPT</Link>
      </div>
    </main>
  );
}
