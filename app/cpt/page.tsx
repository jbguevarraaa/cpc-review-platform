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
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "12px",
            padding: "20px",
            width: "220px",
            backgroundColor: "white",
          }}
        >
          <h3>30,000 Series</h3>
          <p>Respiratory System</p>
        </div>

        {/* 40,000 Series */}
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "12px",
            padding: "20px",
            width: "220px",
            backgroundColor: "white",
          }}
        >
          <h3>40,000 Series</h3>
          <p>Digestive System</p>
        </div>

        {/* 50,000 Series */}
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "12px",
            padding: "20px",
            width: "220px",
            backgroundColor: "white",
          }}
        >
          <h3>50,000 Series</h3>
          <p>Urinary & Genital Systems</p>
        </div>

        {/* 60,000 Series */}
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "12px",
            padding: "20px",
            width: "220px",
            backgroundColor: "white",
          }}
        >
          <h3>60,000 Series</h3>
          <p>Nervous System</p>
        </div>
      </div>

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
        </div>
      </section>
    </main>
  );
}