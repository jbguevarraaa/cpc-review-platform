import Link from "next/link";

export default function TenThousandSeriesPage() {
  return (
    <main style={{ padding: "40px" }}>
      {/* Header */}
      <div
        style={{
          background: "linear-gradient(135deg, #2563eb, #7c3aed)",
          color: "white",
          padding: "50px",
          borderRadius: "20px",
          marginBottom: "40px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
        }}
      >
        <h1
          style={{
            fontSize: "52px",
            fontWeight: "800",
            marginBottom: "15px",
          }}
        >
          10,000 SERIES
        </h1>

        <p
          style={{
            fontSize: "22px",
            opacity: 0.95,
          }}
        >
          Integumentary System
        </p>

        <p
          style={{
            fontSize: "17px",
            opacity: 0.9,
            marginTop: "10px",
          }}
        >
          Master CPT coding for the 10,000 Series.
        </p>
      </div>

      {/* Resources */}
      <h2
        style={{
          fontSize: "30px",
          fontWeight: "700",
          marginBottom: "20px",
        }}
      >
        10,000 Series Study Resources
      </h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {/* Post-Work Quiz */}
        <Link
          href="/cpt/surgery/10000-series-post-work-quiz"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              padding: "25px",
              width: "320px",
              backgroundColor: "white",
              cursor: "pointer",
              boxShadow: "0 3px 10px rgba(0,0,0,0.05)",
            }}
          >
            <h3
              style={{
                fontSize: "20px",
                marginBottom: "10px",
              }}
            >
              📝 10,000 Series Post-Work Quiz
            </h3>

            <p style={{ margin: 0 }}>
              Practice questions for the CPT Surgery 10,000 Series.
            </p>
          </div>
        </Link>

        {/* Study Tips */}
        <Link
          href="/cpt/surgery/10000-series-study-tips"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              padding: "25px",
              width: "320px",
              backgroundColor: "white",
              cursor: "pointer",
              boxShadow: "0 3px 10px rgba(0,0,0,0.05)",
            }}
          >
            <h3
              style={{
                fontSize: "20px",
                marginBottom: "10px",
              }}
            >
              📚 Study Tips & Hacks
            </h3>

            <p style={{ margin: 0 }}>
              Helpful coding tips, strategies, and study hacks for the 10,000
              Series.
            </p>
          </div>
        </Link>

        {/* Transcript Quiz */}
        <Link
          href="/cpt/surgery/10000-series-transcript-quiz"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              padding: "25px",
              width: "320px",
              backgroundColor: "white",
              cursor: "pointer",
              boxShadow: "0 3px 10px rgba(0,0,0,0.05)",
            }}
          >
            <h3
              style={{
                fontSize: "20px",
                marginBottom: "10px",
              }}
            >
              🧪 Transcript Quiz
            </h3>

            <p style={{ margin: 0 }}>
              Separate question set based on the transcript screenshots with answer
              explanations.
            </p>
          </div>
        </Link>

        {/* Guidelines Question Quiz */}
        <Link
          href="/cpt/surgery/10000-series-guidelines-quiz"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              padding: "25px",
              width: "320px",
              backgroundColor: "white",
              cursor: "pointer",
              boxShadow: "0 3px 10px rgba(0,0,0,0.05)",
            }}
          >
            <h3
              style={{
                fontSize: "20px",
                marginBottom: "10px",
              }}
            >
              📘 Guidelines Question Quiz
            </h3>

            <p style={{ margin: 0 }}>
              Photo-based CPT guideline questions with transcript-based
              explanations.
            </p>
          </div>
        </Link>

        {/* Discussion Guide */}
        <Link
          href="/cpt/surgery/10000-series-discussion-guide"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              padding: "25px",
              width: "320px",
              backgroundColor: "white",
              cursor: "pointer",
              boxShadow: "0 3px 10px rgba(0,0,0,0.05)",
            }}
          >
            <h3
              style={{
                fontSize: "20px",
                marginBottom: "10px",
              }}
            >
              🗂️ Discussion Guide
            </h3>

            <p style={{ margin: 0 }}>
              Answers every question from the training discussion guide, step by step.
            </p>
          </div>
        </Link>
      </div>

      {/* Back Button */}
      <div style={{ marginTop: "35px" }}>
        <Link
          href="/cpt/surgery"
          style={{
            textDecoration: "none",
            color: "#2563eb",
            fontWeight: "600",
          }}
        >
          ← Back to Surgery Series
        </Link>
      </div>
    </main>
  );
}