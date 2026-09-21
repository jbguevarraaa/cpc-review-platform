import Link from "next/link";

export default function SurgeryPage() {
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
            fontSize: "60px",
            fontWeight: "800",
            marginBottom: "20px",
          }}
        >
          SURGERY SERIES
        </h1>

        <p
          style={{
            fontSize: "22px",
            opacity: 0.95,
          }}
        >
          Master CPT Surgery Coding (10021–69990)
        </p>
      </div>

      {/* Surgery Series */}
      <div
        style={{
          display: "flex",
          gap: "15px",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        {/* 10,000 Series */}
        <Link
          href="/cpt/surgery/10000"
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
              width: "220px",
              backgroundColor: "white",
              cursor: "pointer",
            }}
          >
            <h3>10,000 Series</h3>
            <p>Integumentary System</p>
          </div>
        </Link>

        {/* 20,000 Series */}
        <Link
          href="/cpt/surgery/20,000"
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
              width: "220px",
              backgroundColor: "white",
              cursor: "pointer",
            }}
          >
            <h3>20,000 Series</h3>
            <p>Musculoskeletal System</p>
          </div>
        </Link>

        {/* 30,000 Series */}
        <Link
          href="/cpt/surgery/30,000"
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
              width: "220px",
              backgroundColor: "white",
              cursor: "pointer",
            }}
          >
            <h3>30,000 Series</h3>
            <p>Respiratory System</p>
          </div>
        </Link>

        {/* Cardiovascular System (33,000s) */}
        <Link
          href="/cpt/surgery/33,000"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <div
            style={{
              border: "1px solid #f0d7d7",
              borderRadius: "12px",
              padding: "20px",
              width: "220px",
              backgroundColor: "#fff8f8",
              cursor: "pointer",
            }}
          >
            <h3>Cardiovascular</h3>
            <p>Heart System (33,000s)</p>
          </div>
        </Link>

        {/* 40,000 Series */}
        <Link
          href="/cpt/surgery/40,000"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <div
            style={{
              border: "1px solid #fed7aa",
              borderRadius: "12px",
              padding: "20px",
              width: "220px",
              backgroundColor: "#fff8f3",
              cursor: "pointer",
            }}
          >
            <h3>40,000 Series</h3>
            <p>Digestive System</p>
          </div>
        </Link>

        {/* 50,000 Series */}
        <Link
          href="/cpt/surgery/50,000"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <div
            style={{
              border: "1px solid #c7d2fe",
              borderRadius: "12px",
              padding: "20px",
              width: "220px",
              backgroundColor: "#f6f7ff",
              cursor: "pointer",
            }}
          >
            <h3>50,000 Series</h3>
            <p>Urinary & Genital Systems</p>
          </div>
        </Link>

        {/* 60,000 Series */}
        <Link
          href="/cpt/surgery/60,000"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <div
            style={{
              border: "1px solid #ddd6fe",
              borderRadius: "12px",
              padding: "20px",
              width: "220px",
              backgroundColor: "#faf8ff",
              cursor: "pointer",
            }}
          >
            <h3>60,000 Series</h3>
            <p>Neuro-Endocrine System</p>
          </div>
        </Link>

        {/* 70,000 Series / Radiology */}
        <Link
          href="/cpt/radiology"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <div
            style={{
              border: "1px solid #d8d0c5",
              borderRadius: "12px",
              padding: "20px",
              width: "220px",
              backgroundColor: "#fffaf4",
              cursor: "pointer",
            }}
          >
            <h3>70,000 Series</h3>
            <p>Radiology</p>
          </div>
        </Link>
      </div>

      {/* E/M Series */}
      <section style={{ marginTop: "40px" }}>
        <h2
          style={{
            fontSize: "28px",
            fontWeight: "700",
            marginBottom: "20px",
          }}
        >
          E/M Series
        </h2>

        <Link
          href="/cpt/e-m"
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
              width: "300px",
              backgroundColor: "white",
              cursor: "pointer",
            }}
          >
            <h3 style={{ margin: "0 0 8px 0" }}>🩺 E/M Series</h3>
            <p style={{ margin: 0 }}>
              Evaluation and Management reviewer materials and guidelines.
            </p>
          </div>
        </Link>
      </section>

      {/* CPT Modifiers Reference */}
      <section style={{ marginTop: "40px" }}>
        <h2
          style={{
            fontSize: "28px",
            fontWeight: "700",
            marginBottom: "20px",
          }}
        >
          Modifiers Reference
        </h2>

        <Link
          href="/cpt/modifiers"
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
              width: "300px",
              backgroundColor: "white",
              cursor: "pointer",
            }}
          >
            <h3 style={{ margin: "0 0 8px 0" }}>🏷️ CPT Modifiers</h3>
            <p style={{ margin: 0 }}>
              Level I, Category II, Physical Status, hospital-outpatient, and HCPCS modifiers, plus common modifier traps.
            </p>
          </div>
        </Link>
      </section>

      {/* CPT Practice Exams */}
      <section style={{ marginTop: "40px" }}>
        <h2
          style={{
            fontSize: "28px",
            fontWeight: "700",
            marginBottom: "20px",
          }}
        >
          Practice Exams
        </h2>

        <Link
          href="/cpt/module-4-practice-exam"
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
              width: "300px",
              backgroundColor: "white",
              cursor: "pointer",
            }}
          >
            <h3 style={{ margin: "0 0 8px 0" }}>📝 Module 4 Practice Exam</h3>
            <p style={{ margin: 0 }}>
              30 scenario questions across Integumentary, Musculoskeletal, Respiratory, Cardiovascular/Lymphatic, and Breast — with a coding tip and elimination trick per question.
            </p>
          </div>
        </Link>
      </section>

      {/* 10,000 Series Resources */}
      <section
        style={{
          marginTop: "40px",
        }}
      >
        <h2
          style={{
            fontSize: "28px",
            fontWeight: "700",
            marginBottom: "20px",
          }}
        >
          10,000 Series Resources
        </h2>

        <div
          style={{
            display: "flex",
            gap: "15px",
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
                padding: "20px",
                width: "300px",
                backgroundColor: "white",
                cursor: "pointer",
              }}
            >
              <h3
                style={{
                  margin: "0 0 8px 0",
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
                padding: "20px",
                width: "300px",
                backgroundColor: "white",
                cursor: "pointer",
              }}
            >
              <h3
                style={{
                  margin: "0 0 8px 0",
                }}
              >
                📚 Study Tips & Hacks
              </h3>

              <p style={{ margin: 0 }}>
                Helpful coding tips, strategies, and study hacks for the
                10,000 Series.
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
                padding: "20px",
                width: "300px",
                backgroundColor: "white",
                cursor: "pointer",
              }}
            >
              <h3
                style={{
                  margin: "0 0 8px 0",
                }}
              >
                🧪 Transcript Quiz
              </h3>

              <p style={{ margin: 0 }}>
                Separate question set based on the transcript screenshots with
                answer explanations.
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
                padding: "20px",
                width: "300px",
                backgroundColor: "white",
                cursor: "pointer",
              }}
            >
              <h3
                style={{
                  margin: "0 0 8px 0",
                }}
              >
                📘 Guidelines Question Quiz
              </h3>

              <p style={{ margin: 0 }}>
                Separate photo-based CPT guideline questions with transcript-
                based explanations.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}