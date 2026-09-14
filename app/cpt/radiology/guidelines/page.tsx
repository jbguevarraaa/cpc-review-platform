import Link from "next/link";

export default function RadiologyGuidelinesPage() {
  return (
    <main style={{ maxWidth: "1120px", margin: "0 auto", padding: "36px 24px 64px", minHeight: "100vh", background: "#fbfaf7", color: "#2a2926", fontFamily: "Arial, sans-serif" }}>
      <header style={headerStyle}>
        <p style={kickerStyle}>70,000 SERIES | REFERENCE</p>
        <h1 style={{ margin: 0, fontSize: "clamp(34px, 6vw, 58px)" }}>Radiology Guidelines</h1>
        <p style={{ margin: "12px 0 0", fontSize: "20px", lineHeight: 1.5 }}>Complete source material, code headers, and coding guidance will be organized here.</p>
      </header>
      <nav aria-label="Radiology navigation" style={navStyle}>
        <Link href="/cpt/radiology" style={navLinkStyle}>70,000 Series home</Link>
        <Link href="/cpt/radiology/study-tips" style={navLinkStyle}>Study tips & hacks</Link>
        <Link href="/cpt/radiology/master-reviewer" style={navLinkStyle}>Master Reviewer Pt. 1</Link>
        <Link href="/cpt/radiology/master-reviewer-part-2" style={navLinkStyle}>Master Reviewer Pt. 2</Link>
        <Link href="/cpt" style={navLinkStyle}>CPT home</Link>
      </nav>
      <section style={noticeStyle}>
        <h2 style={{ margin: "0 0 10px", color: "#805b16" }}>Ready for your guidelines</h2>
        <p style={{ margin: 0, lineHeight: 1.7 }}>Send the Google Docs text, screenshots, or PDF pages for the 70,000 Series. I will place the complete wording here with the correct headers, code groupings, and reviewer-friendly coding notes. This page is intentionally kept separate from study tips and hacks.</p>
      </section>
      <section style={{ ...cardStyle, borderTop: "5px solid #8b5e3c" }}>
        <h2 style={{ marginTop: 0, color: "#6b4226" }}>Planned guideline layout</h2>
        <ol style={{ lineHeight: 1.8, paddingLeft: "24px", marginBottom: 0 }}>
          <li>Radiology section overview and general instructions</li>
          <li>Modality and procedure code-family headers</li>
          <li>Complete copied guideline wording</li>
          <li>Coding tips, parenthetical notes, and reviewer checkpoints</li>
          <li>Quick reference index for the 70,000 Series</li>
        </ol>
      </section>
    </main>
  );
}

const headerStyle = { background: "linear-gradient(135deg, #3c2f2f, #8b5e3c)", color: "white", padding: "44px", borderRadius: "18px", marginBottom: "26px", boxShadow: "0 12px 28px rgba(82,61,38,0.18)" };
const kickerStyle = { margin: "0 0 10px", color: "#f6d9a8", fontWeight: 800, letterSpacing: "0.08em" };
const navStyle = { display: "flex", flexWrap: "wrap" as const, gap: "10px", marginBottom: "28px" };
const navLinkStyle = { textDecoration: "none", color: "#6b4226", background: "#ffffff", border: "1px solid #d8d0c5", borderRadius: "999px", padding: "10px 15px", fontWeight: 700 };
const noticeStyle = { background: "#fff7e8", border: "1px solid #efd39b", borderLeft: "7px solid #b7791f", borderRadius: "12px", padding: "22px 24px", marginBottom: "28px" };
const cardStyle = { background: "#ffffff", border: "1px solid #d8d0c5", borderRadius: "12px", padding: "24px", boxShadow: "0 5px 16px rgba(82,61,38,0.08)" };
