import Link from "next/link";

export default function FinalExams() {
  return (
    <main
      style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          background:
            "linear-gradient(135deg, #2563eb, #7c3aed)",
          color: "white",
          padding: "50px",
          borderRadius: "20px",
          marginBottom: "40px",
        }}
      >
        <h1
          style={{
            fontSize: "56px",
            fontWeight: "800",
            marginBottom: "10px",
          }}
        >
          🎓 CPC FINAL EXAMS
        </h1>

        <p
          style={{
            fontSize: "20px",
          }}
        >
          Full 100 Question CPC Practice Exams
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        <Link href="/final-exams/exam1">
          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "16px",
              borderTop: "5px solid #2563eb",
              boxShadow:
                "0 4px 12px rgba(0,0,0,0.08)",
              cursor: "pointer",
            }}
          >
            <h2>Exam 1</h2>
            <p>100 Questions</p>
          </div>
        </Link>

        <Link href="/final-exams/exam2">
          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "16px",
              borderTop: "5px solid #7c3aed",
              boxShadow:
                "0 4px 12px rgba(0,0,0,0.08)",
              cursor: "pointer",
            }}
          >
            <h2>Exam 2</h2>
            <p>100 Questions</p>
          </div>
        </Link>

        <Link href="/final-exams/exam3">
          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "16px",
              borderTop: "5px solid #22c55e",
              boxShadow:
                "0 4px 12px rgba(0,0,0,0.08)",
              cursor: "pointer",
            }}
          >
            <h2>Exam 3</h2>
            <p>100 Questions</p>
          </div>
        </Link>
      </div>
    </main>
  );
}