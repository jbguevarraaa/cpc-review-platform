import Link from "next/link";
export default function SurgeryPage() {
  return (
    <main style={{ padding: "40px" }}>
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

      <div
        style={{
          display: "flex",
          gap: "15px",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
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
      transition: "0.2s",
    }}
  >
    <h3>10,000 Series</h3>
    <p>Integumentary System</p>
  </div>
</Link> 

        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "12px",
            padding: "20px",
            width: "220px",
            backgroundColor: "white",
          }}
        >
          <h3>20,000 Series</h3>
          <p>Musculoskeletal System</p>
        </div>

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
    </main>
  );
}