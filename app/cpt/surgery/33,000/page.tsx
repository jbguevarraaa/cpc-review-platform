import Link from "next/link";

const cardStyle = {
  display: "block",
  textDecoration: "none",
  color: "inherit",
  background: "white",
  border: "1px solid #f0e2e2",
  borderRadius: "12px",
  padding: "24px",
  boxShadow: "0 5px 16px rgba(69,10,10,0.06)",
};

export default function CardiovascularSeriesPage() {
  return (
    <main style={{ maxWidth: "1120px", margin: "0 auto", padding: "36px 24px 64px", minHeight: "100vh", background: "#fdf6f6", color: "#291a1a", fontFamily: "Arial, sans-serif" }}>
      <header style={{ background: "linear-gradient(135deg, #450a0a, #b91c1c)", color: "white", padding: "48px 44px", borderRadius: "18px", marginBottom: "28px", boxShadow: "0 12px 28px rgba(69,10,10,0.22)" }}>
        <p style={{ margin: "0 0 10px", color: "#fecaca", fontWeight: 800, letterSpacing: "0.08em" }}>CPT SURGERY SECTION</p>
        <h1 style={{ margin: 0, fontSize: "clamp(34px, 6.5vw, 60px)" }}>CARDIOVASCULAR SYSTEM</h1>
        <p style={{ fontSize: "21px", lineHeight: 1.5, maxWidth: "760px", margin: "12px 0 0" }}>Pericardium, cardiac tumors, pacemakers &amp; defibrillators, electrophysiology, grafts, and heart &amp; vascular surgery (33016–37799).</p>
      </header>

      <nav aria-label="Cardiovascular series navigation" style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "30px" }}>
        <Link href="/cpt/surgery" style={navLinkStyle}>Back to Surgery</Link>
        <Link href="/cpt/surgery/33000-series-guidelines-reviewer" style={navLinkStyle}>Guidelines Reviewer Pt. 1</Link>
        <Link href="/cpt/surgery/33000-series-guidelines-reviewer-part-2" style={navLinkStyle}>Guidelines Reviewer Pt. 2</Link>
        <Link href="/cpt" style={navLinkStyle}>CPT home</Link>
      </nav>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "18px" }}>
        <Link href="/cpt/surgery/33000-series-guidelines-reviewer" style={cardStyle}>
          <span style={{ color: "#b91c1c", fontWeight: 800 }}>GUIDELINES REVIEWER · PART 1</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>Pericardium → Electrophysiology</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>Code ranges, category tables, the full pacemaker/ICD scenario lookup table, paraphrased coding rules, and memory tips for 33016–33269.</p>
        </Link>
        <Link href="/cpt/surgery/33000-series-guidelines-reviewer-part-2" style={cardStyle}>
          <span style={{ color: "#b91c1c", fontWeight: 800 }}>GUIDELINES REVIEWER · PART 2</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>Venous/Arterial Access → Thrombectomy</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>Central venous access device table, hemodialysis/AV fistula access, the dialysis-circuit intervention ladder, portal decompression, and transcatheter thrombectomy for 36555–37214.</p>
        </Link>
      </div>
    </main>
  );
}

const navLinkStyle = { textDecoration: "none", color: "#b91c1c", background: "#ffffff", border: "1px solid #f0d7d7", borderRadius: "999px", padding: "10px 15px", fontWeight: 700 };
