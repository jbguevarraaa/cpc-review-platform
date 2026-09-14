import Link from "next/link";

const cardStyle = {
  display: "block",
  textDecoration: "none",
  color: "inherit",
  background: "white",
  border: "1px solid #d8d0c5",
  borderRadius: "12px",
  padding: "24px",
  boxShadow: "0 5px 16px rgba(82,61,38,0.08)",
};

export default function RadiologySeriesPage() {
  return (
    <main style={{ maxWidth: "1120px", margin: "0 auto", padding: "36px 24px 64px", minHeight: "100vh", background: "#fbfaf7", color: "#2a2926", fontFamily: "Arial, sans-serif" }}>
      <header style={{ background: "linear-gradient(135deg, #3c2f2f, #8b5e3c)", color: "white", padding: "48px 44px", borderRadius: "18px", marginBottom: "28px", boxShadow: "0 12px 28px rgba(82,61,38,0.2)" }}>
        <p style={{ margin: "0 0 10px", color: "#f6d9a8", fontWeight: 800, letterSpacing: "0.08em" }}>CPT RADIOLOGY SECTION</p>
        <h1 style={{ margin: 0, fontSize: "clamp(38px, 7vw, 68px)" }}>70,000 SERIES</h1>
        <p style={{ fontSize: "21px", lineHeight: 1.5, maxWidth: "760px", margin: "12px 0 0" }}>Radiology guidelines, study tips, and coding review in one dedicated workspace.</p>
      </header>

      <nav aria-label="Radiology navigation" style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "30px" }}>
        <Link href="/cpt" style={navLinkStyle}>Back to CPT</Link>
        <Link href="/cpt/radiology/guidelines" style={navLinkStyle}>Guidelines</Link>
        <Link href="/cpt/radiology/study-tips" style={navLinkStyle}>Study tips & hacks</Link>
        <Link href="/cpt/radiology/master-reviewer" style={navLinkStyle}>Master Reviewer Pt. 1</Link>
        <Link href="/cpt/radiology/master-reviewer-part-2" style={navLinkStyle}>Master Reviewer Pt. 2</Link>
      </nav>

      <section style={{ background: "#fff7e8", border: "1px solid #efd39b", borderLeft: "7px solid #b7791f", borderRadius: "12px", padding: "22px 24px", marginBottom: "28px" }}>
        <h2 style={{ margin: "0 0 8px", color: "#805b16" }}>Dedicated 70,000 Series area</h2>
        <p style={{ margin: 0, lineHeight: 1.7 }}>This section is reserved for the radiology guidelines and reviewer notes you will send. Guidelines will stay separate from study tips and hacks so the source material remains easy to find and review.</p>
      </section>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "18px" }}>
        <Link href="/cpt/radiology/guidelines" style={cardStyle}>
          <span style={{ color: "#8b5e3c", fontWeight: 800 }}>REFERENCE SECTION</span>
          <h2 style={{ margin: "10px 0 8px", color: "#6b4226" }}>Radiology Guidelines</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>A dedicated place for the complete radiology guideline text, headers, code families, and coding notes.</p>
        </Link>
        <Link href="/cpt/radiology/study-tips" style={cardStyle}>
          <span style={{ color: "#2563eb", fontWeight: 800 }}>REVIEW SECTION</span>
          <h2 style={{ margin: "10px 0 8px", color: "#1d4ed8" }}>Study Tips & Hacks</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>A separate reviewer-friendly page for memory aids, exam traps, quick rules, and practice-focused summaries.</p>
        </Link>
        <Link href="/cpt/radiology/master-reviewer" style={cardStyle}>
          <span style={{ color: "#16a34a", fontWeight: 800 }}>MASTER REVIEWER · PART 1 OF 2</span>
          <h2 style={{ margin: "10px 0 8px", color: "#166534" }}>Master CPC Reviewer (70010–76499)</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>A full walkthrough of code-family patterns, contrast logic, guidance codes, and CPC traps for Part 1 of the 70,000 series.</p>
        </Link>
        <Link href="/cpt/radiology/master-reviewer-part-2" style={cardStyle}>
          <span style={{ color: "#1d4ed8", fontWeight: 800 }}>MASTER REVIEWER · PART 2 OF 2</span>
          <h2 style={{ margin: "10px 0 8px", color: "#1e3a8a" }}>Master CPC Reviewer (76506–79999)</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>Ultrasound, guidance codes, echocardiography, mammography, bone/joint studies, radiation oncology, and nuclear medicine.</p>
        </Link>
      </div>
    </main>
  );
}

const navLinkStyle = { textDecoration: "none", color: "#6b4226", background: "#ffffff", border: "1px solid #d8d0c5", borderRadius: "999px", padding: "10px 15px", fontWeight: 700 };
