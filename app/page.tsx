
import Link from "next/link";


export default function Home() {
  const sectionTitle = {
  fontSize: "30px",
  marginBottom: "20px",
  color: "#111827",
  fontWeight: "700",
};
  return (
    <main
  className="homepage"
  style={{
    maxWidth: "1400px", 
    margin: "0 auto",
    padding: "40px",
    fontFamily: "Arial",
    background:
  "linear-gradient(to bottom, #f8fafc 0%, #eef2ff 100%)",
    minHeight: "100vh",
  }}
>
        <div
      className="homepage-hero"
  style={{
    background: "linear-gradient(135deg, #2563eb, #7c3aed)",
    color: "white",
    padding: "50px",
    borderRadius: "20px",
    textAlign: "center",
    marginBottom: "40px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
  }}
>
  
  <h1
    style={{
      fontSize: "64px",
      fontWeight: "800",
      marginBottom: "20px",
    }}
  >
    CPC REVIEW PLATFORM
  </h1>

  <p
    style={{
      fontSize: "24px",
      marginBottom: "15px",
      opacity: 0.95,
    }}
  >
    Master ICD-10-CM, CPT & HCPCS Coding
  </p>

  <p
    style={{
      fontSize: "18px",
      opacity: 0.85,
      marginBottom: "25px",
    }}
  >
    Complete AAPC CPC Exam Preparation Platform
  </p>

  <p
    style={{
      fontStyle: "italic",
      opacity: 0.8,
    }}
  >
    Created by JB Guevarra
  </p>


  
</div>
<div
  style={{
    display: "flex",
    justifyContent: "space-between",
    gap: "15px",
    marginBottom: "40px",
    flexWrap: "wrap",
  }}
>
  <div
  className="homepage-stats"
    style={{
      flex: 1,
      minWidth: "180px",
      backgroundColor: "white",
      borderRadius: "16px",
      padding: "20px",
      textAlign: "center",
      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    }}
  >
    <h2>22+</h2>
    <p>ICD-10 Chapters</p>
  </div>

  <div
  className="homepage-welcome"
    style={{
      flex: 1,
      backgroundColor: "white",
      borderRadius: "16px",
      padding: "20px",
      textAlign: "center",
      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    }}
  >
    <h2>10+</h2>
    <p>CPT Sections</p>
  </div>

  <div
    style={{
      flex: 1,
      minWidth: "180px",
      backgroundColor: "white",
      borderRadius: "16px",
      padding: "20px",
      textAlign: "center",
      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    }}
  >
    <h2>1000+</h2>
    <p>Practice Questions</p>
  </div>

  <div
    style={{
      flex: 1,
      minWidth: "180px",
      backgroundColor: "white",
      borderRadius: "16px",
      padding: "20px",
      textAlign: "center",
      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    }}
  >
    <h2>50+</h2>
    <p>Mock Exams</p>
  </div>
</div>
<div
  style={{
    background: "white",
    padding: "30px",
    borderRadius: "20px",
    marginBottom: "30px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
    borderLeft: "6px solid #2563eb",
  }}
>
  <h2
    style={{
      marginBottom: "10px",
      color: "#111827",
    }}
  >
    Welcome Back 👋
  </h2>

  <p
    style={{
      color: "#6b7280",
      lineHeight: "1.8",
      fontSize: "16px",
    }}
  >
    Continue your CPC preparation by reviewing ICD-10-CM,
    CPT, HCPCS coding systems, completing practice exams,
    and tracking your certification readiness.
  </p>
</div>
        <div
      className="homepage-learning"
  style={{
    display: "flex",
    gap: "15px",
    marginBottom: "35px",
    flexWrap: "wrap",
  }}
>
  <div
  className="homepage-study-grid"
    style={{
      background: "#2563eb",
      color: "white",
      padding: "20px",
      borderRadius: "16px",
      flex: 1,
      minWidth: "220px",
    }}
  >
    <h3>📖 Continue Learning</h3>
    <p>Resume your latest study session.</p>
  </div>

  <div
    style={{
      background: "#7c3aed",
      color: "white",
      padding: "20px",
      borderRadius: "16px",
      flex: 1,
      minWidth: "220px",
    }}
  >
    <h3>🎯 Daily Goal</h3>
    <p>Complete 20 questions today.</p>
  </div>

  <div
    style={{
      background: "#0f172a",
      color: "white",
      padding: "20px",
      borderRadius: "16px",
      flex: 1,
      minWidth: "220px",
    }}
  >
    <h3>🏆 CPC Readiness</h3>
    <p>Exam readiness: 0%</p>
  </div>
</div>
<h2 style={sectionTitle}>
  📚 Study Sections
</h2>

      <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
    marginBottom: "40px",
  }}
>
        <Link
  href="/icd10"
  style={{
    display: "block",
    padding: "30px",
    border: "1px solid #ddd",
        borderTop: "5px solid #2563eb",
    borderRadius: "18px",
    textDecoration: "none",
    color: "black",
    backgroundColor: "white",
    minHeight: "180px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
    transition: "all 0.3s ease",
    cursor: "pointer",
  }}
>
  <h3
    style={{
      fontSize: "24px",
      marginBottom: "12px",
    }}
  >
    📘 ICD-10-CM
  </h3>

  <p
    style={{
      color: "#6b7280",
      marginBottom: "12px",
    }}
  >
    Diagnosis Coding
  </p>

  <small
    style={{
      color: "#9ca3af",
    }}
  >
    22 Chapters & Guidelines
  </small>
</Link>

        <Link
  href="/cpt"
  style={{
    display: "inline-block",
    padding: "30px",
    border: "1px solid #ddd",
    borderRadius: "12px",
        borderTop: "5px solid #7c3aed",
    textDecoration: "none",
    color: "black",
    backgroundColor: "white",
minHeight: "120px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    marginRight: "15px",
    cursor: "pointer",
      transition: "0.2s",
  }}
>
  <h3
  style={{
    fontSize: "24px",
    marginBottom: "12px",
  }}
>
  📘 CPT
</h3>

<p
  style={{
    color: "#6b7280",
    marginBottom: "12px",
  }}
>
  Procedure Coding
</p>

<small
  style={{
    color: "#9ca3af",
  }}
>
  Surgery • E/M • Radiology
</small>
</Link>

        <Link
  href="/hcpcs"
  style={{
    display: "inline-block",
    padding: "30px",
    border: "1px solid #ddd",
    borderRadius: "12px",
        borderTop: "5px solid #22c55e",
    textDecoration: "none",
    color: "black",
    backgroundColor: "white",
minHeight: "120px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    cursor: "pointer",
      transition: "0.2s",
  }}
>
  <h3
  style={{
    fontSize: "24px",
    marginBottom: "12px",
  }}
>
  📗 HCPCS
</h3>

<p
  style={{
    color: "#6b7280",
    marginBottom: "12px",
  }}
>
  Supplies & Services
</p>

<small
  style={{
    color: "#9ca3af",
  }}
>
  Level II Codes & Modifiers
</small>
</Link>

        <Link
  href="/business-medicine"
  style={{
    display: "inline-block",
    padding: "30px",
    border: "1px solid #ddd",
    borderRadius: "12px",
    borderTop: "5px solid #f97316",
    textDecoration: "none",
    color: "black",
    backgroundColor: "white",
    minHeight: "120px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    cursor: "pointer",
    transition: "0.2s",
  }}
>
  <h3
  style={{
    fontSize: "24px",
    marginBottom: "12px",
  }}
>
  📋 Business of Medicine
</h3>

<p
  style={{
    color: "#6b7280",
    marginBottom: "12px",
  }}
>
  Healthcare business fundamentals
</p>

<small
  style={{
    color: "#9ca3af",
  }}
>
  Reimbursement • Compliance • Privacy
</small>
</Link>
      </div>

      <br />

      <h2
  style={{
    fontSize: "30px",
    marginBottom: "20px",
    color: "#111827",
    fontWeight: "700",
  }}
>
  📝 Practice
</h2>

      <div className="homepage-practice" style={{ display: "flex", gap: "10px" }}>
        <div
  style={{
    border: "1px solid #ddd",
    borderRadius: "12px",
    padding: "20px",
    backgroundColor: "white",
    minHeight: "120px",
    width: "180px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
  }}
>
  <h3>⏱ Timed Exam</h3>
  <p>Simulate the CPC exam</p>
</div>

<div
  style={{
    border: "1px solid #ddd",
    borderRadius: "12px",
    padding: "20px",
    backgroundColor: "white",
    minHeight: "120px",
    width: "180px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
  }}
>
  <h3>🎲 Random Quiz</h3>
  <p>Practice mixed questions</p>
</div>
     <Link
  href="/final-exams"
  style={{
    textDecoration: "none",
    color: "inherit",
  }}
>
  <div
    style={{
      border: "1px solid #ddd",
      borderRadius: "12px",
      padding: "20px",
      backgroundColor: "white",
      minHeight: "120px",
      width: "180px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
      cursor: "pointer",
      transition: "all 0.3s ease",
    }}
  >
    <h3>🎓 Final Exam</h3>
    <p>Take full CPC mock exams</p>
  </div>
</Link>

</div>
    </main>
  );
}