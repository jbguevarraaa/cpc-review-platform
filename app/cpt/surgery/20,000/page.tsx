import Link from "next/link";

export default function TwentyThousandSeriesPage() {
  return (
    <main style={{ padding: "40px" }}>
      <header
        style={{
          background: "linear-gradient(135deg, #2563eb, #7c3aed)",
          color: "white",
          padding: "50px",
          borderRadius: "20px",
          marginBottom: "40px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
        }}
      >
        <h1 style={{ fontSize: "52px", fontWeight: "800", marginBottom: "15px" }}>
          20,000 SERIES
        </h1>
        <p style={{ fontSize: "22px", opacity: 0.95 }}>Musculoskeletal System</p>
        <p style={{ fontSize: "17px", opacity: 0.9, marginTop: "10px" }}>
          Master CPT coding for the 20,000 Series.
        </p>
      </header>

      <h2 style={{ fontSize: "30px", fontWeight: "700", marginBottom: "20px" }}>
        20,000 Series Study Resources
      </h2>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <Link href="/cpt/surgery/20000-series-post-work-quiz" style={{ textDecoration: "none", color: "inherit" }}>
          <div style={{ border: "1px solid #ddd", borderRadius: "12px", padding: "25px", width: "320px", backgroundColor: "white", cursor: "pointer", boxShadow: "0 3px 10px rgba(0,0,0,0.05)" }}>
            <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>📝 20,000 Series Post-Work Quiz</h3>
            <p style={{ margin: 0 }}>Practice questions for the CPT Surgery 20,000 Series.</p>
          </div>
        </Link>

        <Link href="/cpt/surgery/20,000-series-study-tips" style={{ textDecoration: "none", color: "inherit" }}>
          <div style={{ border: "1px solid #ddd", borderRadius: "12px", padding: "25px", width: "320px", backgroundColor: "white", cursor: "pointer", boxShadow: "0 3px 10px rgba(0,0,0,0.05)" }}>
            <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>📚 Study Tips & Hacks</h3>
            <p style={{ margin: 0 }}>Helpful coding tips, strategies, and study hacks for the 20,000 Series.</p>
          </div>
        </Link>
      </div>

      <div style={{ marginTop: "35px" }}>
        <Link href="/cpt/surgery" style={{ textDecoration: "none", color: "#2563eb", fontWeight: "600" }}>
          ← Back to Surgery Series
        </Link>
      </div>
    </main>
  );
}
