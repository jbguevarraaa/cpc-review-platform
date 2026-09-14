import Link from "next/link";

const cardStyle = {
  display: "block",
  textDecoration: "none",
  color: "inherit",
  background: "white",
  border: "1px solid #e5e1d6",
  borderRadius: "12px",
  padding: "24px",
  boxShadow: "0 5px 16px rgba(15,23,42,0.06)",
};

export default function ThirtyThousandSeriesPage() {
  return (
    <main style={{ maxWidth: "1120px", margin: "0 auto", padding: "36px 24px 64px", minHeight: "100vh", background: "#fdfaf5", color: "#241f17", fontFamily: "Arial, sans-serif" }}>
      <header style={{ background: "linear-gradient(135deg, #1f2937, #0f766e)", color: "white", padding: "48px 44px", borderRadius: "18px", marginBottom: "28px", boxShadow: "0 12px 28px rgba(15,23,42,0.2)" }}>
        <p style={{ margin: "0 0 10px", color: "#99f6e4", fontWeight: 800, letterSpacing: "0.08em" }}>CPT SURGERY SECTION</p>
        <h1 style={{ margin: 0, fontSize: "clamp(38px, 7vw, 64px)" }}>30,000 SERIES</h1>
        <p style={{ fontSize: "21px", lineHeight: 1.5, maxWidth: "760px", margin: "12px 0 0" }}>Respiratory System — Nose, Accessory Sinuses, Larynx, Trachea &amp; Bronchi, and Lungs &amp; Pleura.</p>
      </header>

      <nav aria-label="30,000 series navigation" style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "30px" }}>
        <Link href="/cpt/surgery" style={navLinkStyle}>Back to Surgery</Link>
        <Link href="/cpt/surgery/30000-series-guidelines-reviewer" style={navLinkStyle}>Guidelines Reviewer</Link>
        <Link href="/cpt/surgery/30000-series-beginner-guide" style={navLinkStyle}>Beginner Scenarios</Link>
        <Link href="/cpt" style={navLinkStyle}>CPT home</Link>
      </nav>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "18px" }}>
        <Link href="/cpt/surgery/30000-series-guidelines-reviewer" style={cardStyle}>
          <span style={{ color: "#0f766e", fontWeight: 800 }}>GUIDELINES REVIEWER · PART 1</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>Nose, Sinuses, Larynx, Trachea &amp; Bronchi</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>Code ranges, category tables, paraphrased coding rules, memory tips, and a top-traps quick reference for 30000–31899.</p>
        </Link>
        <Link href="/cpt/surgery/30000-series-beginner-guide" style={cardStyle}>
          <span style={{ color: "#0f766e", fontWeight: 800 }}>BEGINNER SCENARIOS</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>Beginner-Friendly Exam Scenarios</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>Slow, step-by-step example scenarios that model the thought process for a 30,000-series question, plus common beginner mistakes.</p>
        </Link>
      </div>
    </main>
  );
}

const navLinkStyle = { textDecoration: "none", color: "#0f766e", background: "#ffffff", border: "1px solid #d7e2df", borderRadius: "999px", padding: "10px 15px", fontWeight: 700 };
