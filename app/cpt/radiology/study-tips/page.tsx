import Link from "next/link";

export default function RadiologyStudyTipsPage() {
  return (
    <main style={{ maxWidth: "1120px", margin: "0 auto", padding: "36px 24px 64px", minHeight: "100vh", background: "#f7fafc", color: "#17212b", fontFamily: "Arial, sans-serif" }}>
      <header style={headerStyle}>
        <p style={kickerStyle}>70,000 SERIES | REVIEW</p>
        <h1 style={{ margin: 0, fontSize: "clamp(34px, 6vw, 58px)" }}>Radiology Study Tips & Hacks</h1>
        <p style={{ margin: "12px 0 0", fontSize: "20px", lineHeight: 1.5 }}>A separate space for memory aids, exam traps, and fast reviewer notes.</p>
      </header>
      <nav aria-label="Radiology navigation" style={navStyle}>
        <Link href="/cpt/radiology" style={navLinkStyle}>70,000 Series home</Link>
        <Link href="/cpt/radiology/guidelines" style={navLinkStyle}>Guidelines</Link>
        <Link href="/cpt/radiology/master-reviewer" style={navLinkStyle}>Master Reviewer Pt. 1</Link>
        <Link href="/cpt/radiology/master-reviewer-part-2" style={navLinkStyle}>Master Reviewer Pt. 2</Link>
        <Link href="/cpt" style={navLinkStyle}>CPT home</Link>
      </nav>
      <section style={noticeStyle}>
        <h2 style={{ margin: "0 0 10px", color: "#1d4ed8" }}>Ready for your study material</h2>
        <p style={{ margin: 0, lineHeight: 1.7 }}>Send the radiology transcript, screenshots, or notes and I will turn them into reviewer-friendly tips without mixing them into the source guideline page.</p>
      </section>
      <section style={cardStyle}>
        <h2 style={{ marginTop: 0, color: "#0f766e" }}>Planned study-tip layout</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "14px" }}>
          {[
            ["01", "Fast recall rules", "Short, memorable rules for code selection."],
            ["02", "Exam traps", "Common errors and distinctions to watch for."],
            ["03", "Modality memory aids", "Visual and procedural cues for radiology coding."],
            ["04", "Practice checkpoints", "Questions to ask before final code assignment."],
          ].map(([number, title, detail]) => <article key={number} style={tipCardStyle}><span style={{ color: "#b45309", fontWeight: 800 }}>{number}</span><h3 style={{ margin: "8px 0", color: "#0f766e" }}>{title}</h3><p style={{ margin: 0, lineHeight: 1.6 }}>{detail}</p></article>)}
        </div>
      </section>
    </main>
  );
}

const headerStyle = { background: "linear-gradient(135deg, #12343b, #2563eb)", color: "white", padding: "44px", borderRadius: "18px", marginBottom: "26px", boxShadow: "0 12px 28px rgba(37,99,235,0.18)" };
const kickerStyle = { margin: "0 0 10px", color: "#bfdbfe", fontWeight: 800, letterSpacing: "0.08em" };
const navStyle = { display: "flex", flexWrap: "wrap" as const, gap: "10px", marginBottom: "28px" };
const navLinkStyle = { textDecoration: "none", color: "#1d4ed8", background: "#ffffff", border: "1px solid #bfdbfe", borderRadius: "999px", padding: "10px 15px", fontWeight: 700 };
const noticeStyle = { background: "#eff6ff", border: "1px solid #bfdbfe", borderLeft: "7px solid #2563eb", borderRadius: "12px", padding: "22px 24px", marginBottom: "28px" };
const cardStyle = { background: "#ffffff", border: "1px solid #d7e2df", borderRadius: "12px", padding: "24px", boxShadow: "0 5px 16px rgba(20,60,55,0.07)" };
const tipCardStyle = { background: "#f8fafc", border: "1px solid #dbeafe", borderRadius: "10px", padding: "18px" };
