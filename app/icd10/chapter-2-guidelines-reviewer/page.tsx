import Link from "next/link";
import { HighlightToolbar } from "../../cpt/surgery/_digestive/highlighter";

type Topic = {
  n: number;
  title: string;
  codes: string;
  summary: string[];
  easy: { scenario: string; answer: string };
  hard: { scenario: string; answer: string };
  tips: string[];
};

const topics: Topic[] = [
  {
    n: 1,
    title: "Primary vs. Secondary Site — Which One Leads",
    codes: "C00–C96 (general sequencing)",
    summary: [
      "If the encounter is for treatment of the primary malignancy, the primary site is the principal/first-listed diagnosis, with any metastatic (secondary) sites coded as additional diagnoses.",
      "If the encounter is for treatment directed ONLY at a metastatic (secondary) site — even though the primary malignancy is still present — the secondary site becomes the principal/first-listed diagnosis, and the primary malignancy is coded as an additional diagnosis.",
      "A primary malignant neoplasm that overlaps two or more contiguous (touching) sites is classified to the \".8\" (overlapping lesion) subcategory/code, unless that specific combination is indexed elsewhere. Multiple neoplasms of the same site that are NOT contiguous — like separate tumors in different quadrants of the same breast — each get their own code instead.",
      "A neoplasm of ectopic tissue is coded to the site of ORIGIN, not the site where it's currently found — an ectopic pancreatic malignancy found in the stomach is still coded to pancreas (C25.9), not stomach.",
    ],
    easy: {
      scenario: "A patient is admitted for surgical treatment directed at their primary lung malignancy; no metastasis is documented.",
      answer: "The primary lung malignancy code is the principal/first-listed diagnosis.",
    },
    hard: {
      scenario: "A patient has a primary colon malignancy with liver metastasis, and this admission's treatment is directed exclusively at the liver metastasis.",
      answer: "The liver (secondary site) malignancy code is the principal/first-listed diagnosis; the primary colon malignancy is coded as an additional diagnosis — even though it's still present and untreated this encounter.",
    },
    tips: [
      "Sequencing here is driven entirely by WHERE TREATMENT IS DIRECTED this encounter, not by which site was diagnosed first or is more clinically severe.",
      "Ectopic-tissue neoplasms are a classic \"read carefully\" trap — the anatomic location in the note is not necessarily the code's anatomic site; origin wins.",
    ],
  },
  {
    n: 2,
    title: "Admission/Encounter for Antineoplastic Therapy",
    codes: "Z51.0, Z51.11, Z51.12",
    summary: [
      "If chemotherapy, immunotherapy, or external beam radiation therapy is the chief reason for the admission/encounter, assign Z51.0 (antineoplastic radiation therapy), Z51.11 (antineoplastic chemotherapy), or Z51.12 (antineoplastic immunotherapy) as the first-listed/principal diagnosis — with the malignancy itself coded as a secondary diagnosis.",
      "If the reason for the encounter is more than one type of antineoplastic therapy in the same visit, Z51.0 and a code from Z51.1- may both be assigned together, with one of them as a secondary code.",
      "This Z51 rule is the SINGLE exception carved out of the general \"treatment directed at primary site → code the primary site first\" rule from Topic 1 — chemo/immunotherapy/external radiation administration itself is treated as the reason for the encounter, ranking ahead of the malignancy.",
      "If the admission is instead for insertion or implantation of radioactive elements (e.g., brachytherapy), that exception does NOT apply — the malignancy code is sequenced first as principal/first-listed, and Z51.0 is not assigned at all.",
    ],
    easy: {
      scenario: "A patient is admitted solely for a scheduled cycle of antineoplastic chemotherapy for their known malignancy.",
      answer: "Z51.11 (encounter for antineoplastic chemotherapy) as first-listed, with the malignancy code as a secondary diagnosis.",
    },
    hard: {
      scenario: "A patient is admitted for brachytherapy (insertion of radioactive seed implants) for their malignancy.",
      answer: "The malignancy code is sequenced first/principal — Z51.0 is specifically NOT assigned for radioactive element insertion/implantation, unlike external beam radiation therapy.",
    },
    tips: [
      "\"External beam\" radiation therapy triggers Z51.0; implanted/inserted radioactive elements (brachytherapy) do not — that's a precise wording distinction worth memorizing.",
      "If a patient develops a complication (like nausea or dehydration) during an admission that was for chemo/immunotherapy/external radiation, Z51.0/Z51.11/Z51.12 still leads, followed by the complication code(s).",
    ],
  },
  {
    n: 3,
    title: "Complications — Anemia, Dehydration & Surgical Complications",
    codes: "D63.0, T45.1X5-, Y84.2",
    summary: [
      "Anemia associated with the malignancy itself, where treatment is only for the anemia: the malignancy code is sequenced first/principal, followed by the anemia code (e.g., D63.0, Anemia in neoplastic disease).",
      "Anemia caused by an ADVERSE EFFECT of chemotherapy, immunotherapy, or radiation therapy, where treatment is only for the anemia: this flips the order — the anemia code is sequenced FIRST, followed by the neoplasm code and the appropriate adverse-effect code (e.g., T45.1X5- for chemo/immunotherapy drugs, or Y84.2 for a radiological/radiotherapy procedure).",
      "Dehydration due to the malignancy, treated only with IV rehydration: the dehydration code is sequenced first, followed by the malignancy code(s).",
      "A complication resulting from a SURGICAL PROCEDURE performed to treat the neoplasm: the complication is the principal/first-listed diagnosis when treatment is directed at resolving that complication.",
    ],
    easy: {
      scenario: "A patient with metastatic breast cancer is admitted because they're anemic from the cancer itself; only the anemia is being treated this visit.",
      answer: "The breast cancer code first, then D63.0 (Anemia in neoplastic disease) second.",
    },
    hard: {
      scenario: "A patient develops anemia specifically as an adverse effect of their chemotherapy regimen, and only the anemia is being treated this admission.",
      answer: "The anemia code is sequenced FIRST, followed by the neoplasm code and the appropriate adverse-effect code (T45.1X5-) — this is the opposite sequencing from anemia caused directly by the malignancy itself.",
    },
    tips: [
      "This is the single highest-yield trap in the whole chapter: anemia FROM the malignancy = malignancy first, anemia second. Anemia from chemo/immuno/radiation THERAPY = anemia first, malignancy + adverse-effect code after. Same symptom, opposite sequencing, depending on the cause.",
      "Dehydration-due-to-malignancy follows the \"complication first\" pattern, not the anemia-from-malignancy pattern — don't cross the two rules.",
    ],
  },
  {
    n: 4,
    title: "Admission to Determine Extent & Symptom Codes from Chapter 18",
    codes: "(General sequencing guidance)",
    summary: [
      "When the reason for the admission/encounter is to determine the EXTENT of a malignancy, or for a procedure like paracentesis or thoracentesis, the primary malignancy or the appropriate metastatic site is designated as the principal/first-listed diagnosis — even if chemotherapy or radiotherapy happens to be administered during that same encounter.",
      "Symptom, sign, and ill-defined-condition codes from Chapter 18 that are characteristic of, or associated with, an existing primary or secondary malignancy can NEVER be used to replace the malignancy as the principal/first-listed diagnosis — no matter how many admissions or encounters occur for treatment and care of that neoplasm.",
    ],
    easy: {
      scenario: "A patient is admitted for a diagnostic workup (imaging and biopsy) specifically to determine how far their malignancy has spread.",
      answer: "The primary malignancy (or the relevant metastatic site) is the principal/first-listed diagnosis for this extent-of-disease workup.",
    },
    hard: {
      scenario: "A patient with known metastatic cancer is admitted repeatedly over several months, and each time the documentation only lists a Chapter 18 symptom code (like weight loss or fatigue) alongside the cancer.",
      answer: "The Chapter 18 symptom codes never replace the malignancy as principal/first-listed diagnosis, regardless of how many repeat admissions occur — the malignancy stays the lead diagnosis every time it's the reason for the associated symptom.",
    },
    tips: [
      "\"To determine extent\" admissions are a small but specific exception worth memorizing: the malignancy leads even if treatment (chemo/radiation) happens to also occur.",
    ],
  },
  {
    n: 5,
    title: "Unspecified & Disseminated Malignancy, and Malignancy in Pregnancy",
    codes: "C80.0, C80.1, O9A.1–",
    summary: [
      "C80.0 (Disseminated malignant neoplasm, unspecified) is reserved for advanced metastatic disease where NO known primary or secondary sites are specified at all — it is never used in place of coding the primary site plus all known secondary sites when those are actually documented.",
      "C80.1 (Malignant [primary] neoplasm, unspecified) equates to \"cancer, unspecified\" and is used only when no determination can be made as to the primary site of a malignancy. This code should rarely be used in the inpatient setting, where more diagnostic workup is typically available.",
      "When a pregnant patient has a malignant neoplasm, a code from subcategory O9A.1– (malignant neoplasm complicating pregnancy, childbirth, and the puerperium) is sequenced FIRST, followed by the appropriate Chapter 2 code identifying the specific type of neoplasm.",
    ],
    easy: {
      scenario: "A patient has widely metastatic cancer, but the documentation clearly identifies the primary site (lung) and two secondary sites (liver, bone).",
      answer: "Code the primary lung malignancy plus both secondary sites individually — C80.0 is not used here, since the sites ARE specified.",
    },
    hard: {
      scenario: "A pregnant patient is diagnosed with a malignant neoplasm during her second trimester.",
      answer: "A code from O9A.1– (malignant neoplasm complicating pregnancy) is sequenced first, followed by the specific Chapter 2 neoplasm code — the pregnancy-complication code always leads in this scenario.",
    },
    tips: [
      "C80.0 and C80.1 are near-opposite concepts that are easy to confuse: C80.0 = sites unknown but disease is clearly widespread; C80.1 = the primary site itself simply can't be determined. Read carefully for which piece of information is actually missing.",
    ],
  },
  {
    n: 6,
    title: "Pathologic Fracture Due to a Neoplasm",
    codes: "M84.5–",
    summary: [
      "When the encounter is for a pathological fracture due to a neoplasm, and the FOCUS OF TREATMENT is the fracture itself, a code from subcategory M84.5 (Pathological fracture in neoplastic disease) is sequenced first, followed by the code for the neoplasm.",
      "When the focus of treatment is instead the NEOPLASM, with an associated pathological fracture, the neoplasm code is sequenced first, followed by the M84.5 fracture code.",
    ],
    easy: {
      scenario: "A patient with a known bone metastasis is admitted specifically for orthopedic stabilization of a pathological fracture at that site — the fracture is the focus of care.",
      answer: "M84.5– (pathological fracture in neoplastic disease) first, then the neoplasm code second.",
    },
    hard: {
      scenario: "A patient is admitted primarily for treatment of their bone malignancy itself (e.g., resection), and a pathological fracture at that site is also documented but is not the focus of this admission's treatment.",
      answer: "The neoplasm code is sequenced first, followed by the M84.5 pathological fracture code — the treatment focus flips the sequencing order compared to the fracture-focused scenario.",
    },
    tips: [
      "This whole topic is a single question: what is the actual FOCUS OF TREATMENT, the fracture or the tumor? Whichever one is the focus leads; the other follows.",
    ],
  },
  {
    n: 7,
    title: "Current Malignancy vs. Personal History of Malignancy",
    codes: "Z85.– (Z85.6, Z85.79, Z85.89)",
    summary: [
      "If a primary malignancy has been excised, but further treatment (additional surgery, radiation, or chemotherapy) is still directed at that site, the primary malignancy code is still used — until that treatment is actually completed.",
      "Once a primary malignancy has been excised or eradicated, there's no further treatment directed to that site, AND there's no evidence of any existing primary malignancy there, a code from category Z85 (Personal history of malignant neoplasm) is used to indicate the former site — subcategories Z85.0–Z85.85 apply only to a FORMER primary site, never a secondary site; Z85.89 can be used for the former site of either a primary or a secondary malignancy.",
      "Any mention of extension, invasion, or metastasis to another site after that point is coded as a SECONDARY malignant neoplasm to that new site — which may itself become the principal/first-listed diagnosis, with the Z85 code as a secondary code.",
      "Leukemia and multiple myeloma/malignant plasma cell neoplasm (category C90) codes specifically indicate whether the disease has achieved remission or not — if documentation is unclear about remission status, the provider should be queried rather than defaulting to either a Z85.6 (personal history of leukemia) or Z85.79 (personal history of other malignant neoplasms of lymphoid/hematopoietic tissue) code.",
    ],
    easy: {
      scenario: "A patient's primary breast malignancy was excised 3 years ago, with no further treatment directed at that site since, and no evidence of any existing malignancy there now.",
      answer: "Z85.- (personal history of malignant neoplasm) — specifically the breast-history subcategory — to indicate the former site.",
    },
    hard: {
      scenario: "A patient with a personal history of colon cancer (previously excised, no further treatment) now presents with a new liver lesion found to be a metastasis from that original colon cancer.",
      answer: "Code the liver lesion as a secondary malignant neoplasm of the liver (which may be principal/first-listed), plus the Z85 personal-history code as a secondary code — the new metastasis gets its own current code rather than just updating the history code.",
    },
    tips: [
      "\"Excised, no further treatment planned, no current evidence of disease\" is the precise three-part test for switching to a Z85 history code — missing any one of those three keeps you on the active malignancy code instead.",
      "For leukemia/myeloma, \"unclear if in remission\" is a query trigger, not a coder's judgment call.",
    ],
  },
  {
    n: 8,
    title: "Transplanted Organ Malignancy, BIA-ALCL & Secondary Lymphoid Tissue Neoplasm",
    codes: "C80.2, T86.–, C84.7A/C84.7B, C81–C85 (final character 9)",
    summary: [
      "A malignant neoplasm arising in a TRANSPLANTED organ is coded as a transplant complication: assign the appropriate T86.– code (complications of transplanted organs and tissue) FIRST, followed by C80.2 (malignant neoplasm associated with transplanted organ), and then an additional code for the specific malignancy itself.",
      "Breast implant-associated anaplastic large cell lymphoma (BIA-ALCL) is coded with C84.7A (active) or C84.7B (in remission) — a named exception where a lymphoma code family does distinguish remission status, alongside the leukemia/C90 pattern from Topic 7. A complication code from Chapter 19 is specifically NOT additionally assigned for it, even though it's implant-associated.",
      "When a malignant neoplasm of lymphoid tissue metastasizes BEYOND the lymph nodes into a solid organ, use a code from categories C81–C85 with the final character \"9\" (identifying \"extranodal and solid organ sites\") — rather than coding a separate secondary-neoplasm code for that solid organ.",
    ],
    easy: {
      scenario: "A patient develops a new malignancy specifically within their previously transplanted kidney.",
      answer: "The appropriate T86.- transplant complication code first, then C80.2 (malignant neoplasm associated with transplanted organ), then an additional code identifying the specific malignancy.",
    },
    hard: {
      scenario: "A patient with diffuse large B-cell lymphoma is found to have spread to the lung, brain, and left adrenal gland — all outside the lymph nodes.",
      answer: "A single code from category C83 with the final character \"9\" (extranodal and solid organ sites) — not three separate secondary-neoplasm codes for lung, brain, and adrenal gland.",
    },
    tips: [
      "BIA-ALCL is a specific named exception: no Chapter 19 (device complication) code gets added, even though it's tied to an implant — the lymphoma code alone tells the whole story.",
      "\"Lymphoid tissue spreading beyond the nodes\" is the exact trigger phrase for the \"...9\" extranodal code — it's a completely different logic from how metastasis is normally coded elsewhere in this chapter.",
    ],
  },
];

const mainStyle = { maxWidth: "1160px", margin: "0 auto", padding: "36px 24px 64px", minHeight: "100vh", background: "#f6f9f9", color: "#141d1c", fontFamily: "Arial, sans-serif" };
const heroStyle = { background: "linear-gradient(135deg, #101719, #0f766e)", color: "white", padding: "46px 42px", borderRadius: "18px", marginBottom: "26px", boxShadow: "0 12px 28px rgba(16,23,25,0.22)" };
const kickerStyle = { margin: "0 0 10px", color: "#99f6e4", fontWeight: 800, letterSpacing: "0.08em" };
const navStyle = { display: "flex", flexWrap: "wrap" as const, gap: "10px", marginBottom: "26px" };
const navLinkStyle = { textDecoration: "none", color: "#0f766e", background: "#ffffff", border: "1px solid #dbe3e1", borderRadius: "999px", padding: "10px 15px", fontWeight: 700, fontSize: "14px" };
const introStyle = { background: "#f0fdfa", border: "1px solid #99f6e4", borderLeft: "7px solid #0f766e", borderRadius: "12px", padding: "22px 24px", marginBottom: "24px", lineHeight: 1.7 };
const sectionStyle = { background: "#ffffff", border: "1px solid #e3e7e6", borderRadius: "14px", padding: "24px 26px", marginBottom: "20px", boxShadow: "0 5px 16px rgba(16,23,25,0.05)" };
const sectionHeaderStyle = { display: "flex", alignItems: "center", gap: "12px", marginBottom: "6px", flexWrap: "wrap" as const };
const numberBadgeStyle = { background: "#0f766e", color: "#fff", width: "34px", height: "34px", minWidth: "34px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "14px" };
const sectionTitleStyle = { margin: 0, fontSize: "21px", color: "#111827" };
const codeChipStyle = { background: "#f0fdfa", border: "1px solid #99f6e4", color: "#0f766e", borderRadius: "999px", padding: "4px 12px", fontWeight: 800, fontSize: "12.5px", fontFamily: "Consolas, monospace" };
const pStyle = { lineHeight: 1.75, margin: "0 0 8px", fontSize: "14.5px" };
const labelStyle = { margin: "16px 0 8px", fontWeight: 800, fontSize: "13px", letterSpacing: "0.03em", color: "#0f766e" };
const scenarioGridStyle = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "14px", marginTop: "6px" };
const easyCardStyle = { background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "10px", padding: "14px 16px", lineHeight: 1.65, fontSize: "13.5px" };
const hardCardStyle = { background: "#fff7ed", border: "1px solid #fed7aa", borderRadius: "10px", padding: "14px 16px", lineHeight: 1.65, fontSize: "13.5px" };
const tipsBoxStyle = { background: "#fef2f2", border: "1px solid #fecaca", borderLeft: "5px solid #dc2626", borderRadius: "10px", padding: "14px 16px", marginTop: "14px", lineHeight: 1.65, fontSize: "13.5px" };
const backLinkStyle = { textDecoration: "none", color: "#0f766e", fontWeight: 700 };

export default function Icd10Chapter2GuidelinesReviewerPage() {
  return (
    <main style={mainStyle}>
      <HighlightToolbar />
      <header style={heroStyle}>
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 2 · 2026 OFFICIAL GUIDELINES</p>
        <h1 style={{ margin: 0, fontSize: "clamp(26px, 5vw, 44px)" }}>Neoplasms</h1>
        <p style={{ margin: "12px 0 0", fontSize: "18px", lineHeight: 1.5 }}>C00–D49 — primary/secondary site sequencing, antineoplastic therapy encounters, anemia/dehydration complication rules, pathologic fracture, and personal history of malignancy.</p>
      </header>

      <nav aria-label="ICD-10 navigation" style={navStyle}>
        <Link href="/icd10" style={navLinkStyle}>ICD-10-CM home</Link>
        <Link href="/icd10/chapter-2-practice-quiz" style={navLinkStyle}>Practice Quiz</Link>
        <Link href="/icd10/chapter-2-worked-examples" style={navLinkStyle}>Worked Examples</Link>
        <Link href="/icd10/chapter-2-flashcards" style={navLinkStyle}>Flashcards</Link>
      </nav>

      <section style={introStyle}>
        <strong>How to use this reviewer:</strong> same format as the other ICD-10 chapters — a plain-language rule summary, an easy and a hard example scenario with reasoning, and a tips/traps box for each topic. Written as an original summary, not a copy of the guideline text. This chapter is dense on sequencing rules — the anemia-from-malignancy vs. anemia-from-therapy distinction (Topic 3) is the single highest-yield trap here.
      </section>

      {topics.map((t) => (
        <section key={t.n} style={sectionStyle}>
          <div style={sectionHeaderStyle}>
            <span style={numberBadgeStyle}>{t.n}</span>
            <h2 style={sectionTitleStyle}>{t.title}</h2>
            <span style={codeChipStyle}>{t.codes}</span>
          </div>

          <p style={labelStyle}>📋 RULE SUMMARY</p>
          {t.summary.map((s) => <p key={s} style={pStyle}>{s}</p>)}

          <p style={labelStyle}>🎯 TWO EXAMPLE SCENARIOS</p>
          <div style={scenarioGridStyle}>
            <div style={easyCardStyle}>
              <strong>🟢 Easy:</strong> {t.easy.scenario}
              <p style={{ margin: "8px 0 0" }}><strong>Answer:</strong> {t.easy.answer}</p>
            </div>
            <div style={hardCardStyle}>
              <strong>🟠 Hard:</strong> {t.hard.scenario}
              <p style={{ margin: "8px 0 0" }}><strong>Answer:</strong> {t.hard.answer}</p>
            </div>
          </div>

          <div style={tipsBoxStyle}>
            <strong>🟥 Tips &amp; Traps</strong>
            <ul style={{ margin: "8px 0 0", paddingLeft: "20px", display: "grid", gap: "6px" }}>
              {t.tips.map((tip) => <li key={tip}>{tip}</li>)}
            </ul>
          </div>
        </section>
      ))}

      <div style={{ marginTop: "10px" }}>
        <Link href="/icd10" style={backLinkStyle}>← Back to ICD-10-CM</Link>
      </div>
    </main>
  );
}
