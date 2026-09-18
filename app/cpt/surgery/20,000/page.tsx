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

        <Link href="/cpt/surgery/20,000-series-cpt-book/page-1" style={{ textDecoration: "none", color: "inherit" }}>
          <div style={{ border: "1px solid #ddd", borderRadius: "12px", padding: "25px", width: "320px", backgroundColor: "white", cursor: "pointer", boxShadow: "0 3px 10px rgba(0,0,0,0.05)" }}>
            <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>📘 CPT Book Guidelines & Codes</h3>
            <p style={{ margin: 0 }}>Reference pages for the musculoskeletal CPT book text, codes, and guidelines.</p>
          </div>
        </Link>

        <Link href="/cpt/surgery/20,000-series-study-tips" style={{ textDecoration: "none", color: "inherit" }}>
          <div style={{ border: "1px solid #ddd", borderRadius: "12px", padding: "25px", width: "320px", backgroundColor: "white", cursor: "pointer", boxShadow: "0 3px 10px rgba(0,0,0,0.05)" }}>
            <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>📚 Study Tips & Hacks</h3>
            <p style={{ margin: 0 }}>Helpful coding tips, strategies, and study hacks for the 20,000 Series.</p>
          </div>
        </Link>

        <Link href="/cpt/surgery/20000-series-guidelines-reviewer" style={{ textDecoration: "none", color: "inherit" }}>
          <div style={{ border: "1px solid #ddd", borderRadius: "12px", padding: "25px", width: "320px", backgroundColor: "white", cursor: "pointer", boxShadow: "0 3px 10px rgba(0,0,0,0.05)" }}>
            <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🪜 Guidelines Reviewer Pt. 1</h3>
            <p style={{ margin: 0 }}>General subsection (20100–20999): fracture/dislocation definitions, tumor excision tiers, wound exploration, biopsy, injections, external fixation, and drug-delivery devices — grouped by category, with a step-by-step coding flow, examples, and traps per topic.</p>
          </div>
        </Link>

        <Link href="/cpt/surgery/20000-series-guidelines-reviewer-part-2" style={{ textDecoration: "none", color: "inherit" }}>
          <div style={{ border: "1px solid #ddd", borderRadius: "12px", padding: "25px", width: "320px", backgroundColor: "white", cursor: "pointer", boxShadow: "0 3px 10px rgba(0,0,0,0.05)" }}>
            <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🪜 Guidelines Reviewer Pt. 2</h3>
            <p style={{ margin: 0 }}>Head, Neck &amp; Thorax, Back &amp; Flank, and Spine (21010–22899): craniofacial reconstruction, facial fractures, and every spine arthrodesis/instrumentation rule — same step-by-step format.</p>
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
