import Link from "next/link";
export default function CPTPage() {
  return (
    <main style={{ padding: "40px" }}>
      <div
  style={{
    background: "linear-gradient(135deg, #2563eb, #7c3aed)",
    color: "white",
    padding: "40px",
    borderRadius: "20px",
    marginBottom: "30px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
  }}
>
  <h1
    style={{
      fontSize: "42px",
      fontWeight: "800",
      marginBottom: "10px",
    }}
  >
    CPT REVIEW
  </h1>

  <p
    style={{
      fontSize: "18px",
      opacity: 0.9,
    }}
  >
    Master Evaluation & Management, Surgery,
    Radiology, Pathology and Medicine Coding.
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
  <div
    style={{
      border: "1px solid #ddd",
      borderRadius: "12px",
      padding: "20px",
      width: "220px",
      backgroundColor: "white",
    }}
  >
    <h3>E/M</h3>
    <p>Evaluation & Management</p>
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
    <h3>Anesthesia</h3>
    <p>00100-01999</p>
  </div>

  <Link
  href="/cpt/surgery"
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
    <h3>Surgery</h3>
    <p>10021-69990</p>
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
    <h3>Radiology</h3>
    <p>70010-79999</p>
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
    <h3>Pathology</h3>
    <p>80047-89398</p>
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
    <h3>Medicine</h3>
    <p>90281-99607</p>
  </div>
</div>
    </main>
  );
}