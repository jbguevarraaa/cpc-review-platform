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
        <Link href="/icd10/chapter-1-flashcards" style={navLinkStyle}>Chapter 1 Flashcards</Link>
        <Link href="/icd10/chapter-18-guidelines-reviewer" style={navLinkStyle}>Chapter 18 Reviewer</Link>
        <Link href="/icd10/chapter-18-practice-quiz" style={navLinkStyle}>Chapter 18 Quiz</Link>
        <Link href="/icd10/chapter-18-worked-examples" style={navLinkStyle}>Chapter 18 Worked Examples</Link>
        <Link href="/icd10/chapter-18-flashcards" style={navLinkStyle}>Chapter 18 Flashcards</Link>
        <Link href="/icd10/chapter-13-guidelines-reviewer" style={navLinkStyle}>Chapter 13 Reviewer</Link>
        <Link href="/icd10/chapter-9-guidelines-reviewer" style={navLinkStyle}>Chapter 9 Reviewer</Link>
        <Link href="/icd10/chapter-9-coding-approach" style={navLinkStyle}>Chapter 9 How to Approach</Link>
        <Link href="/icd10/chapter-9-practice-quiz" style={navLinkStyle}>Chapter 9 Quiz</Link>
        <Link href="/icd10/chapter-9-worked-examples" style={navLinkStyle}>Chapter 9 Worked Examples</Link>
        <Link href="/icd10/chapter-9-flashcards" style={navLinkStyle}>Chapter 9 Flashcards</Link>
        <Link href="/icd10/chapter-2-guidelines-reviewer" style={navLinkStyle}>Chapter 2 Reviewer</Link>
        <Link href="/icd10/chapter-2-practice-quiz" style={navLinkStyle}>Chapter 2 Quiz</Link>
        <Link href="/icd10/chapter-2-worked-examples" style={navLinkStyle}>Chapter 2 Worked Examples</Link>
        <Link href="/icd10/chapter-2-flashcards" style={navLinkStyle}>Chapter 2 Flashcards</Link>
        <Link href="/icd10/chapter-3-guidelines-reviewer" style={navLinkStyle}>Chapter 3 Reviewer</Link>
        <Link href="/icd10/chapter-3-practice-quiz" style={navLinkStyle}>Chapter 3 Quiz</Link>
        <Link href="/icd10/chapter-3-flashcards" style={navLinkStyle}>Chapter 3 Flashcards</Link>
        <Link href="/icd10/chapter-4-guidelines-reviewer" style={navLinkStyle}>Chapter 4 Reviewer</Link>
        <Link href="/icd10/chapter-4-practice-quiz" style={navLinkStyle}>Chapter 4 Quiz</Link>
        <Link href="/icd10/chapter-4-worked-examples" style={navLinkStyle}>Chapter 4 Worked Examples</Link>
        <Link href="/icd10/chapter-4-flashcards" style={navLinkStyle}>Chapter 4 Flashcards</Link>
        <Link href="/icd10/chapter-5-guidelines-reviewer" style={navLinkStyle}>Chapter 5 Reviewer</Link>
        <Link href="/icd10/chapter-5-practice-quiz" style={navLinkStyle}>Chapter 5 Quiz</Link>
        <Link href="/icd10/chapter-5-worked-examples" style={navLinkStyle}>Chapter 5 Worked Examples</Link>
        <Link href="/icd10/chapter-5-flashcards" style={navLinkStyle}>Chapter 5 Flashcards</Link>
        <Link href="/icd10/chapter-6-guidelines-reviewer" style={navLinkStyle}>Chapter 6 Reviewer</Link>
        <Link href="/icd10/chapter-6-practice-quiz" style={navLinkStyle}>Chapter 6 Quiz</Link>
        <Link href="/icd10/chapter-6-worked-examples" style={navLinkStyle}>Chapter 6 Worked Examples</Link>
        <Link href="/icd10/chapter-6-flashcards" style={navLinkStyle}>Chapter 6 Flashcards</Link>
        <Link href="/icd10/chapter-7-guidelines-reviewer" style={navLinkStyle}>Chapter 7 Reviewer</Link>
        <Link href="/icd10/chapter-7-practice-quiz" style={navLinkStyle}>Chapter 7 Quiz</Link>
        <Link href="/icd10/chapter-7-worked-examples" style={navLinkStyle}>Chapter 7 Worked Examples</Link>
        <Link href="/icd10/chapter-7-flashcards" style={navLinkStyle}>Chapter 7 Flashcards</Link>
        <Link href="/icd10/chapter-8-guidelines-reviewer" style={navLinkStyle}>Chapter 8 Reviewer</Link>
        <Link href="/icd10/chapter-8-practice-quiz" style={navLinkStyle}>Chapter 8 Quiz</Link>
        <Link href="/icd10/chapter-8-flashcards" style={navLinkStyle}>Chapter 8 Flashcards</Link>
        <Link href="/icd10/chapter-10-guidelines-reviewer" style={navLinkStyle}>Chapter 10 Reviewer</Link>
        <Link href="/icd10/chapter-10-practice-quiz" style={navLinkStyle}>Chapter 10 Quiz</Link>
        <Link href="/icd10/chapter-10-worked-examples" style={navLinkStyle}>Chapter 10 Worked Examples</Link>
        <Link href="/icd10/chapter-10-flashcards" style={navLinkStyle}>Chapter 10 Flashcards</Link>
        <Link href="/icd10/chapter-11-guidelines-reviewer" style={navLinkStyle}>Chapter 11 Reviewer</Link>
        <Link href="/icd10/chapter-11-practice-quiz" style={navLinkStyle}>Chapter 11 Quiz</Link>
        <Link href="/icd10/chapter-11-flashcards" style={navLinkStyle}>Chapter 11 Flashcards</Link>
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

        <Link href="/icd10/chapter-1-flashcards" style={cardStyle}>
          <span style={{ color: "#0f766e", fontWeight: 800 }}>CHAPTER 1 · FLASHCARDS</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>5-Minute Commute Review</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>17 tap-to-flip flashcards, one rule per card — same quick-skim format as the Chapter 18 deck.</p>
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

        <Link href="/icd10/chapter-18-flashcards" style={cardStyle}>
          <span style={{ color: "#0f766e", fontWeight: 800 }}>CHAPTER 18 · FLASHCARDS</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>5-Minute Commute Review</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>14 tap-to-flip flashcards, one rule per card — built for a quick phone skim, not a deep-dive read.</p>
        </Link>

        <Link href="/icd10/chapter-13-guidelines-reviewer" style={cardStyle}>
          <span style={{ color: "#0f766e", fontWeight: 800 }}>CHAPTER 13 · M00–M99</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>Musculoskeletal System &amp; Connective Tissue</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>Site/laterality, acute vs. chronic conditions, pathologic fractures, and osteoporosis (M80 vs. M81) — plus a quick anatomy and common-pathology reference.</p>
        </Link>

        <Link href="/icd10/chapter-9-guidelines-reviewer" style={cardStyle}>
          <span style={{ color: "#0f766e", fontWeight: 800 }}>CHAPTER 9 · I00–I99</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>Diseases of the Circulatory System</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>Hypertension combination codes (heart/kidney/crisis/pulmonary/resistant), atherosclerotic CAD with angina, cerebrovascular sequelae, and the full acute MI (type 1/2/other) framework.</p>
        </Link>

        <Link href="/icd10/chapter-9-coding-approach" style={cardStyle}>
          <span style={{ color: "#0f766e", fontWeight: 800 }}>CHAPTER 9 · HOW TO APPROACH</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>The Coding Decision Hierarchy</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>Start here if you're not sure where to begin: the eight-question universal checklist (presumed vs. explicit relationships, combination codes, timing windows, sequencing, defaults, add-on codes, look-alike names), plus a topic-by-topic priority checklist for every major rule in this chapter.</p>
        </Link>

        <Link href="/icd10/chapter-9-practice-quiz" style={cardStyle}>
          <span style={{ color: "#0f766e", fontWeight: 800 }}>CHAPTER 9 · PRACTICE QUIZ</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>15-Question Scenario Quiz</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>Same format — a &quot;what to look for&quot; clue and an elimination-strategy tip for every answer.</p>
        </Link>

        <Link href="/icd10/chapter-9-worked-examples" style={cardStyle}>
          <span style={{ color: "#0f766e", fontWeight: 800 }}>CHAPTER 9 · WORKED EXAMPLES</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>9 Scenarios, Jump to Any Question</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>Full reasoning per scenario, with a number-jump bar so you can check the correct answer for any specific question directly.</p>
        </Link>

        <Link href="/icd10/chapter-9-flashcards" style={cardStyle}>
          <span style={{ color: "#0f766e", fontWeight: 800 }}>CHAPTER 9 · FLASHCARDS</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>5-Minute Commute Review</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>21 tap-to-flip flashcards, one rule per card — same quick-skim format as the other chapter decks.</p>
        </Link>

        <Link href="/icd10/chapter-2-guidelines-reviewer" style={cardStyle}>
          <span style={{ color: "#0f766e", fontWeight: 800 }}>CHAPTER 2 · C00–D49</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>Neoplasms</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>Primary/secondary site sequencing, antineoplastic therapy encounters, the anemia-from-cancer vs. anemia-from-therapy trap, pathologic fracture, and personal history of malignancy.</p>
        </Link>

        <Link href="/icd10/chapter-2-practice-quiz" style={cardStyle}>
          <span style={{ color: "#0f766e", fontWeight: 800 }}>CHAPTER 2 · PRACTICE QUIZ</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>14-Question Scenario Quiz</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>Same format — a &quot;what to look for&quot; clue and an elimination-strategy tip for every answer.</p>
        </Link>

        <Link href="/icd10/chapter-2-worked-examples" style={cardStyle}>
          <span style={{ color: "#0f766e", fontWeight: 800 }}>CHAPTER 2 · WORKED EXAMPLES</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>9 Scenarios, Jump to Any Question</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>Full reasoning per scenario, with a number-jump bar so you can check the correct answer for any specific question directly.</p>
        </Link>

        <Link href="/icd10/chapter-2-flashcards" style={cardStyle}>
          <span style={{ color: "#0f766e", fontWeight: 800 }}>CHAPTER 2 · FLASHCARDS</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>5-Minute Commute Review</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>21 tap-to-flip flashcards, one rule per card — same quick-skim format as the other chapter decks.</p>
        </Link>

        <Link href="/icd10/chapter-3-guidelines-reviewer" style={cardStyle}>
          <span style={{ color: "#0f766e", fontWeight: 800 }}>CHAPTER 3 · D50–D89</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>Diseases of the Blood &amp; Blood-Forming Organs</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>Nutritional and hemolytic anemias, hemophilias/von Willebrand disease, purpura/platelet disorders, and immune mechanism disorders — code-structure focused, since this chapter has no official narrative guidelines.</p>
        </Link>

        <Link href="/icd10/chapter-3-practice-quiz" style={cardStyle}>
          <span style={{ color: "#0f766e", fontWeight: 800 }}>CHAPTER 3 · PRACTICE QUIZ</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>10-Question Scenario Quiz</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>Same format — a &quot;what to look for&quot; clue and an elimination-strategy tip for every answer.</p>
        </Link>

        <Link href="/icd10/chapter-3-flashcards" style={cardStyle}>
          <span style={{ color: "#0f766e", fontWeight: 800 }}>CHAPTER 3 · FLASHCARDS</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>5-Minute Commute Review</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>15 tap-to-flip flashcards, one rule per card.</p>
        </Link>

        <Link href="/icd10/chapter-4-guidelines-reviewer" style={cardStyle}>
          <span style={{ color: "#0f766e", fontWeight: 800 }}>CHAPTER 4 · E00–E89</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>Endocrine, Nutritional &amp; Metabolic Diseases</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>Diabetes mellitus type/remission/drug-use/pump-malfunction/secondary-cause rules, plus obesity coding — one of the most consistently tested ICD-10 topics on the CPC exam.</p>
        </Link>

        <Link href="/icd10/chapter-4-practice-quiz" style={cardStyle}>
          <span style={{ color: "#0f766e", fontWeight: 800 }}>CHAPTER 4 · PRACTICE QUIZ</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>10-Question Scenario Quiz</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>Same format — a &quot;what to look for&quot; clue and an elimination-strategy tip for every answer.</p>
        </Link>

        <Link href="/icd10/chapter-4-worked-examples" style={cardStyle}>
          <span style={{ color: "#0f766e", fontWeight: 800 }}>CHAPTER 4 · WORKED EXAMPLES</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>9 Scenarios, Jump to Any Question</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>Full reasoning per scenario, with a number-jump bar so you can check the correct answer for any specific question directly.</p>
        </Link>

        <Link href="/icd10/chapter-4-flashcards" style={cardStyle}>
          <span style={{ color: "#0f766e", fontWeight: 800 }}>CHAPTER 4 · FLASHCARDS</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>5-Minute Commute Review</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>17 tap-to-flip flashcards, one rule per card.</p>
        </Link>

        <Link href="/icd10/chapter-5-guidelines-reviewer" style={cardStyle}>
          <span style={{ color: "#0f766e", fontWeight: 800 }}>CHAPTER 5 · F01–F99</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>Mental, Behavioral &amp; Neurodevelopmental Disorders</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>Psychological pain (F45.41/.42), the substance use/abuse/dependence hierarchy, remission by severity, blood alcohol level, factitious disorder self-vs-other, and dementia severity.</p>
        </Link>

        <Link href="/icd10/chapter-5-practice-quiz" style={cardStyle}>
          <span style={{ color: "#0f766e", fontWeight: 800 }}>CHAPTER 5 · PRACTICE QUIZ</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>10-Question Scenario Quiz</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>Same format — a &quot;what to look for&quot; clue and an elimination-strategy tip for every answer.</p>
        </Link>

        <Link href="/icd10/chapter-5-worked-examples" style={cardStyle}>
          <span style={{ color: "#0f766e", fontWeight: 800 }}>CHAPTER 5 · WORKED EXAMPLES</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>9 Scenarios, Jump to Any Question</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>Full reasoning per scenario, with a number-jump bar so you can check the correct answer for any specific question directly.</p>
        </Link>

        <Link href="/icd10/chapter-5-flashcards" style={cardStyle}>
          <span style={{ color: "#0f766e", fontWeight: 800 }}>CHAPTER 5 · FLASHCARDS</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>5-Minute Commute Review</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>18 tap-to-flip flashcards, one rule per card.</p>
        </Link>

        <Link href="/icd10/chapter-6-guidelines-reviewer" style={cardStyle}>
          <span style={{ color: "#0f766e", fontWeight: 800 }}>CHAPTER 6 · G00–G99</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>Diseases of the Nervous System</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>Dominant/nondominant side defaults, plus the full category G89 pain framework: when it's used, sequencing with site codes, postoperative pain, chronic pain, neoplasm-related pain, and pain syndromes.</p>
        </Link>

        <Link href="/icd10/chapter-6-practice-quiz" style={cardStyle}>
          <span style={{ color: "#0f766e", fontWeight: 800 }}>CHAPTER 6 · PRACTICE QUIZ</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>10-Question Scenario Quiz</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>Same format — a &quot;what to look for&quot; clue and an elimination-strategy tip for every answer.</p>
        </Link>

        <Link href="/icd10/chapter-6-worked-examples" style={cardStyle}>
          <span style={{ color: "#0f766e", fontWeight: 800 }}>CHAPTER 6 · WORKED EXAMPLES</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>10 Scenarios, Jump to Any Question</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>Full reasoning per scenario, with a number-jump bar so you can check the correct answer for any specific question directly.</p>
        </Link>

        <Link href="/icd10/chapter-6-flashcards" style={cardStyle}>
          <span style={{ color: "#0f766e", fontWeight: 800 }}>CHAPTER 6 · FLASHCARDS</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>5-Minute Commute Review</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>17 tap-to-flip flashcards, one rule per card.</p>
        </Link>

        <Link href="/icd10/chapter-7-guidelines-reviewer" style={cardStyle}>
          <span style={{ color: "#0f766e", fontWeight: 800 }}>CHAPTER 7 · H00–H59</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>Diseases of the Eye and Adnexa</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>The full glaucoma coding framework (type/eye/stage, bilateral same-vs-different rules, stage progression, indeterminate vs. unspecified stage) plus blindness and low-vision coding.</p>
        </Link>

        <Link href="/icd10/chapter-7-practice-quiz" style={cardStyle}>
          <span style={{ color: "#0f766e", fontWeight: 800 }}>CHAPTER 7 · PRACTICE QUIZ</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>9-Question Scenario Quiz</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>Same format — a &quot;what to look for&quot; clue and an elimination-strategy tip for every answer.</p>
        </Link>

        <Link href="/icd10/chapter-7-worked-examples" style={cardStyle}>
          <span style={{ color: "#0f766e", fontWeight: 800 }}>CHAPTER 7 · WORKED EXAMPLES</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>10 Scenarios, Jump to Any Question</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>Full reasoning per scenario, with a number-jump bar so you can check the correct answer for any specific question directly.</p>
        </Link>

        <Link href="/icd10/chapter-7-flashcards" style={cardStyle}>
          <span style={{ color: "#0f766e", fontWeight: 800 }}>CHAPTER 7 · FLASHCARDS</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>5-Minute Commute Review</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>12 tap-to-flip flashcards, one rule per card.</p>
        </Link>

        <Link href="/icd10/chapter-8-guidelines-reviewer" style={cardStyle}>
          <span style={{ color: "#0f766e", fontWeight: 800 }}>CHAPTER 8 · H60–H95</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>Diseases of the Ear and Mastoid Process</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>Otitis externa/media, cholesteatoma, otosclerosis, Meniere's disease, vestibular neuritis, and the conductive/sensorineural/mixed/sudden hearing-loss framework — code-structure focused, since this chapter has no official narrative guidelines.</p>
        </Link>

        <Link href="/icd10/chapter-8-practice-quiz" style={cardStyle}>
          <span style={{ color: "#0f766e", fontWeight: 800 }}>CHAPTER 8 · PRACTICE QUIZ</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>10-Question Scenario Quiz</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>Same format — a &quot;what to look for&quot; clue and an elimination-strategy tip for every answer.</p>
        </Link>

        <Link href="/icd10/chapter-8-flashcards" style={cardStyle}>
          <span style={{ color: "#0f766e", fontWeight: 800 }}>CHAPTER 8 · FLASHCARDS</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>5-Minute Commute Review</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>14 tap-to-flip flashcards, one rule per card.</p>
        </Link>

        <Link href="/icd10/chapter-10-guidelines-reviewer" style={cardStyle}>
          <span style={{ color: "#0f766e", fontWeight: 800 }}>CHAPTER 10 · J00–J99, U07.0</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>Diseases of the Respiratory System</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>COPD/asthma exacerbation, acute respiratory failure sequencing, confirmed-vs-unconfirmed influenza, ventilator-associated pneumonia, and vaping-related disorders.</p>
        </Link>

        <Link href="/icd10/chapter-10-practice-quiz" style={cardStyle}>
          <span style={{ color: "#0f766e", fontWeight: 800 }}>CHAPTER 10 · PRACTICE QUIZ</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>14-Question Scenario Quiz</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>Same format — a &quot;what to look for&quot; clue and an elimination-strategy tip for every answer.</p>
        </Link>

        <Link href="/icd10/chapter-10-worked-examples" style={cardStyle}>
          <span style={{ color: "#0f766e", fontWeight: 800 }}>CHAPTER 10 · WORKED EXAMPLES</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>14 Scenarios, Jump to Any Question</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>Full reasoning per scenario, with a number-jump bar so you can check the correct answer for any specific question directly.</p>
        </Link>

        <Link href="/icd10/chapter-10-flashcards" style={cardStyle}>
          <span style={{ color: "#0f766e", fontWeight: 800 }}>CHAPTER 10 · FLASHCARDS</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>5-Minute Commute Review</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>14 tap-to-flip flashcards, one rule per card.</p>
        </Link>

        <Link href="/icd10/chapter-11-guidelines-reviewer" style={cardStyle}>
          <span style={{ color: "#0f766e", fontWeight: 800 }}>CHAPTER 11 · K00–K95</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>Diseases of the Digestive System</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>GERD, peptic ulcer disease, appendicitis, diverticular disease, IBD (Crohn's vs. ulcerative colitis), gallbladder disease, alcoholic liver disease, and pancreatitis — code-structure focused, since this chapter has no official narrative guidelines.</p>
        </Link>

        <Link href="/icd10/chapter-11-practice-quiz" style={cardStyle}>
          <span style={{ color: "#0f766e", fontWeight: 800 }}>CHAPTER 11 · PRACTICE QUIZ</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>19-Question Scenario Quiz</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>Same format — a &quot;what to look for&quot; clue and an elimination-strategy tip for every answer.</p>
        </Link>

        <Link href="/icd10/chapter-11-flashcards" style={cardStyle}>
          <span style={{ color: "#0f766e", fontWeight: 800 }}>CHAPTER 11 · FLASHCARDS</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>5-Minute Commute Review</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>18 tap-to-flip flashcards, one rule per card.</p>
        </Link>

        <div style={{ ...cardStyle, opacity: 0.65, cursor: "default" }}>
          <span style={{ color: "#94a3a8", fontWeight: 800 }}>COMING SOON</span>
          <h2 style={{ margin: "10px 0 8px", color: "#111827" }}>Remaining Chapters</h2>
          <p style={{ margin: 0, lineHeight: 1.65 }}>The rest of the ICD-10-CM chapters will be added here as guidelines are built out.</p>
        </div>
      </div>
    </main>
  );
}

const navLinkStyle = { textDecoration: "none", color: "#0f766e", background: "#ffffff", border: "1px solid #dbe3e1", borderRadius: "999px", padding: "10px 15px", fontWeight: 700 };
