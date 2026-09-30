import Link from "next/link";

const cardStyle = {
  display: "block",
  textDecoration: "none",
  color: "inherit",
  background: "white",
  border: "1px solid #cbeaf1",
  borderRadius: "12px",
  padding: "24px",
  boxShadow: "0 5px 16px rgba(14,116,144,0.08)",
};

export default function AnesthesiaSeriesPage() {
  return (
    <main style={{ maxWidth: "1120px", margin: "0 auto", padding: "36px 24px 64px", minHeight: "100vh", background: "#f6f8fb", color: "#1b2233", fontFamily: "Arial, sans-serif" }}>
      <header style={{ background: "linear-gradient(135deg, #0f172a, #0e7490)", color: "white", padding: "48px 44px", borderRadius: "18px", marginBottom: "28px", boxShadow: "0 12px 28px rgba(14,116,144,0.25)" }}>
        <p style={{ margin: "0 0 10px", color: "#a5f3fc", fontWeight: 800, letterSpacing: "0.08em" }}>CPT ANESTHESIA SECTION</p>
        <h1 style={{ margin: 0, fontSize: "clamp(38px, 7vw, 64px)" }}>ANESTHESIA SERIES</h1>
        <p style={{ fontSize: "21px", lineHeight: 1.5, maxWidth: "760px", margin: "12px 0 0" }}>Codes 00100–01999 — the package, time, modifiers, and direction/supervision rules that make this chapter conceptually dense despite its small code count.</p>
      </header>

      <nav aria-label="Anesthesia navigation" style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "30px" }}>
        <Link href="/cpt" style={navLinkStyle}>Back to CPT</Link>
        <Link href="/cpt/anesthesia/guidelines-reviewer" style={navLinkStyle}>Guidelines Reviewer</Link>
        <Link href="/cpt/anesthesia/discussion-guide" style={navLinkStyle}>Discussion Guide</Link>
        <Link href="/cpt/anesthesia/schematic" style={navLinkStyle}>Schematic (visual map)</Link>
      </nav>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "18px" }}>
        <Link href="/cpt/anesthesia/guidelines-reviewer" style={cardStyle}>
          <span style={{ color: "#0e7490", fontWeight: 800 }}>GUIDELINES REVIEWER</span>
          <h2 style={{ margin: "10px 0 8px", color: "#0f172a" }}>CPT Anesthesia Reviewer</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>Chapter organization, the anesthesia package (bundled vs. billable), types of anesthesia, moderate sedation vs. MAC, time reporting and payment formulas, physical status modifiers, qualifying circumstances, CPT and HCPCS Level II modifiers, direction/supervision rules, and a 10-step coding walkthrough — with a strategic wrap-up at the end.</p>
        </Link>
        <Link href="/cpt/anesthesia/discussion-guide" style={cardStyle}>
          <span style={{ color: "#0e7490", fontWeight: 800 }}>DISCUSSION GUIDE</span>
          <h2 style={{ margin: "10px 0 8px", color: "#0f172a" }}>Every Training Question, Answered</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>All 6 questions from the training discussion guide, answered and cross-checked against CPT 2026.</p>
        </Link>
        <Link href="/cpt/anesthesia/schematic" style={cardStyle}>
          <span style={{ color: "#0e7490", fontWeight: 800 }}>STRATEGIC SCHEMATIC</span>
          <h2 style={{ margin: "10px 0 8px", color: "#0f172a" }}>Anesthesia at a Glance</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>A one-page visual roadmap of the whole series — ten stops from chapter map to strategy, for a fast visual refresher.</p>
        </Link>
      </div>
    </main>
  );
}

const navLinkStyle = { textDecoration: "none", color: "#0e7490", background: "#ffffff", border: "1px solid #cbeaf1", borderRadius: "999px", padding: "10px 15px", fontWeight: 700 };
