import Link from "next/link";

const cardStyle = {
  display: "block",
  textDecoration: "none",
  color: "inherit",
  background: "white",
  border: "1px solid #e3e7e6",
  borderRadius: "12px",
  padding: "24px",
  boxShadow: "0 5px 16px rgba(16,23,25,0.05)",
};

export default function ICD10Page() {
  return (
    <main style={{ maxWidth: "1120px", margin: "0 auto", padding: "36px 24px 64px", minHeight: "100vh", background: "#f6f9f9", color: "#141d1c", fontFamily: "Arial, sans-serif" }}>
      <header style={{ background: "linear-gradient(135deg, #101719, #0f766e)", color: "white", padding: "48px 44px", borderRadius: "18px", marginBottom: "28px", boxShadow: "0 12px 28px rgba(16,23,25,0.22)" }}>
        <p style={{ margin: "0 0 10px", color: "#99f6e4", fontWeight: 800, letterSpacing: "0.08em" }}>DIAGNOSIS CODING</p>
        <h1 style={{ margin: 0, fontSize: "clamp(38px, 7vw, 64px)" }}>ICD-10-CM</h1>
        <p style={{ fontSize: "21px", lineHeight: 1.5, maxWidth: "760px", margin: "12px 0 0" }}>Official Guidelines for Coding and Reporting, chapter by chapter — summarized with plain-language examples.</p>
      </header>

      <nav aria-label="ICD-10 navigation" style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "30px" }}>
        <Link href="/icd10/chapter-1-guidelines-reviewer" style={navLinkStyle}>Chapter 1 Reviewer</Link>
        <Link href="/icd10/chapter-1-practice-quiz" style={navLinkStyle}>Chapter 1 Quiz</Link>
        <Link href="/icd10/chapter-18-guidelines-reviewer" style={navLinkStyle}>Chapter 18 Reviewer</Link>
        <Link href="/icd10/chapter-18-practice-quiz" style={navLinkStyle}>Chapter 18 Quiz</Link>
        <Link href="/icd10/chapter-18-worked-examples" style={navLinkStyle}>Chapter 18 Worked Examples</Link>
        <Link href="/cpt" style={navLinkStyle}>CPT home</Link>
      </nav>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "18px" }}>
        <Link href="/icd10/chapter-1-guidelines-reviewer" style={cardStyle}>
          <span style={{ color: "#0f766e", fontWeight: 800 }}>CHAPTER 1 · A00–B99, U07.1, U09.9</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>Certain Infectious &amp; Parasitic Diseases</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>HIV, antibiotic resistance, sepsis/severe sepsis/septic shock, MRSA, Zika, and COVID-19 — rule summaries plus easy and hard example scenarios.</p>
        </Link>

        <Link href="/icd10/chapter-1-practice-quiz" style={cardStyle}>
          <span style={{ color: "#0f766e", fontWeight: 800 }}>CHAPTER 1 · PRACTICE QUIZ</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>14-Question Scenario Quiz</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>Interactive practice questions with a &quot;what to look for&quot; clue and an elimination-strategy tip for every answer.</p>
        </Link>

        <Link href="/icd10/chapter-18-guidelines-reviewer" style={cardStyle}>
          <span style={{ color: "#0f766e", fontWeight: 800 }}>CHAPTER 18 · R00–R99</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>Symptoms, Signs &amp; Abnormal Findings</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>Symptom-code rules, repeated falls, coma &amp; coma scale, SIRS (non-infectious), death NOS, and the NIHSS stroke scale.</p>
        </Link>

        <Link href="/icd10/chapter-18-practice-quiz" style={cardStyle}>
          <span style={{ color: "#0f766e", fontWeight: 800 }}>CHAPTER 18 · PRACTICE QUIZ</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>12-Question Scenario Quiz</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>Same format — a &quot;what to look for&quot; clue and an elimination-strategy tip for every answer.</p>
        </Link>

        <Link href="/icd10/chapter-18-worked-examples" style={cardStyle}>
          <span style={{ color: "#0f766e", fontWeight: 800 }}>CHAPTER 18 · WORKED EXAMPLES</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>10 Scenarios, Jump to Any Question</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>Full reasoning per scenario, with a number-jump bar so you can check the correct answer for any specific question directly.</p>
        </Link>

        <div style={{ ...cardStyle, opacity: 0.65, cursor: "default" }}>
          <span style={{ color: "#94a3a8", fontWeight: 800 }}>COMING SOON</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>Remaining Chapters</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>Neoplasms, endocrine/metabolic, mental/behavioral, nervous system, and the rest of the ICD-10-CM chapters will be added here as guidelines are sent over.</p>
        </div>
      </div>
    </main>
  );
}

const navLinkStyle = { textDecoration: "none", color: "#0f766e", background: "#ffffff", border: "1px solid #dbe3e1", borderRadius: "999px", padding: "10px 15px", fontWeight: 700 };
