import Link from "next/link";

const resourceCardStyle = {
  display: "block",
  textDecoration: "none",
  color: "inherit",
  background: "white",
  border: "1px solid #d7e2df",
  borderRadius: "14px",
  padding: "24px",
  boxShadow: "0 5px 16px rgba(20,60,55,0.07)",
};

export default function EMSeriesPage() {
  return (
    <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "40px 24px 60px", background: "#f7faf9", minHeight: "100vh", fontFamily: "Arial, sans-serif", color: "#17212b" }}>
      <header style={{ background: "linear-gradient(135deg, #12343b, #0f766e)", color: "white", padding: "46px 44px", borderRadius: "18px", marginBottom: "34px" }}>
        <p style={{ margin: "0 0 10px", color: "#b7f7e8", fontWeight: 700 }}>CPT REVIEW PLATFORM</p>
        <h1 style={{ fontSize: "clamp(40px, 7vw, 68px)", margin: 0 }}>E/M SERIES</h1>
        <p style={{ fontSize: "21px", margin: "12px 0 0" }}>Choose a study resource to continue.</p>
      </header>

      <h2 style={{ fontSize: "30px", marginBottom: "16px" }}>E/M Series Resources</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "18px" }}>
        <Link href="/cpt/e-m/99,000" style={resourceCardStyle}>
          <span style={{ color: "#0f766e", fontWeight: 800 }}>99,000 SERIES · CPT 2026</span>
          <h3 style={{ fontSize: "25px", color: "#12343b", margin: "10px 0 8px" }}>🩺 99,000 Series Reviewer</h3>
          <p style={{ lineHeight: 1.6, margin: 0 }}>Three-part reviewer with schematics, the three deck case questions solved step by step, a 10-question practice quiz, and flashcards.</p>
        </Link>
        <Link href="/cpt/e-m/guidelines" style={resourceCardStyle}>
          <span style={{ color: "#b45309", fontWeight: 800 }}>CODEMED MASTERY · PART 1</span>
          <h3 style={{ fontSize: "25px", color: "#0f766e", margin: "10px 0 8px" }}>📚 E/M Guidelines Reviewer</h3>
          <p style={{ lineHeight: 1.6, margin: 0 }}>Review the screenshot-based E/M guidelines with transcript-based explanations, rationale, and CPC memory aids.</p>
        </Link>

        <Link href="/cpt/e-m/guidelines-quiz" style={resourceCardStyle}>
          <span style={{ color: "#2563eb", fontWeight: 800 }}>PRACTICE RESOURCE</span>
          <h3 style={{ fontSize: "25px", color: "#1d4ed8", margin: "10px 0 8px" }}>📝 E/M Guidelines Quiz</h3>
          <p style={{ lineHeight: 1.6, margin: 0 }}>A separate E/M quiz area for questions created from future screenshots and transcripts.</p>
        </Link>

        <Link href="/cpt/e-m/google-docs-reviewer" style={resourceCardStyle}>
          <span style={{ color: "#7c3aed", fontWeight: 800 }}>REFERENCE RESOURCE</span>
          <h3 style={{ fontSize: "25px", color: "#6d28d9", margin: "10px 0 8px" }}>Complete E/M Reviewer</h3>
          <p style={{ lineHeight: 1.6, margin: 0 }}>A consolidated reviewer page for the E/M code families, definitions, high-yield rules, and coding checkpoints from the supplied study material.</p>
        </Link>
      </div>

      <div style={{ marginTop: "36px" }}>
        <Link href="/cpt" style={{ textDecoration: "none", color: "#0f766e", fontWeight: 700 }}>← Back to CPT</Link>
      </div>
    </main>
  );
}
