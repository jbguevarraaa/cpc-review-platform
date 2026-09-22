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
    title: "Nutritional Anemias",
    codes: "D50–D53",
    summary: [
      "Iron deficiency anemia (D50) has a specific subcategory for when it's secondary to chronic blood loss (D50.0) — distinct from iron deficiency due to simple inadequate dietary intake (D50.8) or unspecified iron deficiency (D50.9). Acute posthemorrhagic anemia is NOT coded here — it routes to D62 instead.",
      "Vitamin B12 deficiency anemia (D51) splits by cause: due to intrinsic factor deficiency (D51.0, includes pernicious anemia), dietary B12 deficiency (D51.3), and other/unspecified causes.",
      "Folate deficiency anemia (D52) similarly splits by cause: dietary (D52.0), drug-induced (D52.1, which also needs an additional adverse-effect code for the specific drug), and other/unspecified.",
      "D53 (other nutritional anemias) covers protein deficiency anemia, and specifically excludes megaloblastic anemia that's unresponsive to B12 or folate therapy — that particular refractory megaloblastic anemia is included under D53 rather than D51/D52.",
    ],
    easy: {
      scenario: "A patient has chronic iron deficiency anemia clearly documented as secondary to ongoing GI blood loss.",
      answer: "D50.0 (iron deficiency anemia secondary to blood loss, chronic) — not the general unspecified D50.9.",
    },
    hard: {
      scenario: "A patient develops folate deficiency anemia specifically as a documented side effect of a medication they're taking.",
      answer: "D52.1 (drug-induced folate deficiency anemia) PLUS an additional code identifying the specific drug causing the adverse effect (from the T36–T50 range with the appropriate 5th/6th character).",
    },
    tips: [
      "Chronic blood-loss anemia (D50.0) and ACUTE posthemorrhagic anemia (D62) are two entirely different codes — \"chronic\" vs. \"acute\" blood loss is the fork, not just \"bleeding caused it.\"",
      "Drug-induced anemia subtypes (like D52.1) need a second code identifying the specific causative drug — don't stop at the anemia code alone.",
    ],
  },
  {
    n: 2,
    title: "Hemolytic Anemias — Hereditary",
    codes: "D55–D58",
    summary: [
      "D55 (anemia due to enzyme disorders) includes G6PD deficiency anemia (D55.0) and pyruvate kinase deficiency anemia (D55.21) — both enzyme defects in red blood cell metabolism, distinct causes, distinct subcodes.",
      "D56 (thalassemia) specifically excludes sickle-cell thalassemia, which is coded instead under the sickle-cell disorders category (D57.4-) — even though thalassemia is in the name, that particular combination routes elsewhere.",
      "D57 (sickle-cell disorders) is organized by genotype and crisis status — sickle-cell anemia with vs. without crisis, sickle-cell trait, sickle-cell/Hb-C disease, and sickle-cell thalassemia all have their own distinct codes.",
      "D58 (other hereditary hemolytic anemias) includes hereditary spherocytosis and hereditary elliptocytosis — structural red blood cell membrane defects, distinct from the enzyme defects in D55.",
    ],
    easy: {
      scenario: "A patient has documented G6PD deficiency causing hemolytic anemia.",
      answer: "D55.0 (anemia due to G6PD deficiency).",
    },
    hard: {
      scenario: "A patient has sickle-cell thalassemia documented, not simple sickle-cell anemia or simple thalassemia alone.",
      answer: "A code from D57.4- (sickle-cell thalassemia) — not a D56 thalassemia code, since sickle-cell thalassemia is specifically excluded from D56 and classified under the sickle-cell category instead.",
    },
    tips: [
      "\"Sickle-cell thalassemia\" is a naming trap — despite having \"thalassemia\" in the name, it's coded under D57 (sickle-cell), not D56 (thalassemia).",
      "Enzyme defects (D55: G6PD, pyruvate kinase) vs. membrane/structural defects (D58: spherocytosis, elliptocytosis) is the underlying distinction between these two hereditary hemolytic anemia categories.",
    ],
  },
  {
    n: 3,
    title: "Acquired Hemolytic & Aplastic Anemias",
    codes: "D59–D64",
    summary: [
      "D59 (acquired hemolytic anemia) covers autoimmune hemolytic anemia, drug-induced hemolytic anemia (which also needs an additional adverse-effect code for the drug), and hemolytic-uremic syndrome — all ACQUIRED causes, as opposed to the hereditary categories in D55–D58.",
      "D61 (aplastic anemia and other bone marrow failure syndromes) includes both constitutional/hereditary aplastic anemia and acquired aplastic anemia (including drug-induced), so read carefully for which cause is documented before picking a subcode.",
      "D62 (acute posthemorrhagic anemia) is the code for sudden blood loss — this is the code that does NOT apply to chronic blood-loss anemia (which is D50.0 instead).",
      "D64 covers other anemias, including sideroblastic anemias and anemia in chronic diseases classified elsewhere — this category often requires an additional code identifying the underlying chronic disease.",
    ],
    easy: {
      scenario: "A patient has sudden, acute blood loss from a traumatic injury resulting in anemia, with no prior anemia history.",
      answer: "D62 (acute posthemorrhagic anemia) — distinct from D50.0, which is specifically for chronic blood loss.",
    },
    hard: {
      scenario: "A patient develops hemolytic anemia as a documented adverse effect of a specific medication.",
      answer: "The appropriate D59 drug-induced hemolytic anemia subcode, PLUS an additional adverse-effect code identifying the specific drug — same pattern as drug-induced folate deficiency anemia.",
    },
    tips: [
      "D55–D58 = hereditary causes. D59 = acquired causes (autoimmune, drug-induced, HUS). Same clinical picture (hemolysis), but the cause determines which category.",
      "Acute (D62) vs. chronic (D50.0) blood-loss anemia is a recurring exam distinction — the SAME underlying problem (bleeding) but two completely different code families based on timeframe.",
    ],
  },
  {
    n: 4,
    title: "Coagulation Defects — Hemophilias & von Willebrand Disease",
    codes: "D65–D68",
    summary: [
      "D65 (disseminated intravascular coagulation, DIC) is a consumption coagulopathy — and the guideline note instructs coding the associated underlying condition additionally, when applicable, since DIC is almost always secondary to something else (sepsis, malignancy, obstetric complication, etc.).",
      "The three classic hemophilias each have their own dedicated category: D66 (Hemophilia A / hereditary factor VIII deficiency), D67 (Hemophilia B / hereditary factor IX deficiency, also called Christmas disease), and D68.1 (Hemophilia C / hereditary factor XI deficiency).",
      "Von Willebrand disease (D68.0-) is organized by TYPE — type 1, type 2 (with further subtypes based on the specific qualitative defect), and type 3 (near-complete or complete absence of von Willebrand factor) — plus a separate code for ACQUIRED von Willebrand disease/syndrome, distinct from the hereditary types.",
      "D68.2 covers hereditary deficiency of other clotting factors beyond VIII, IX, and XI (like Factor V, Factor VII, or Factor X deficiency).",
    ],
    easy: {
      scenario: "A patient with classic hemophilia has documented hereditary factor VIII deficiency.",
      answer: "D66 (Hemophilia A / hereditary factor VIII deficiency).",
    },
    hard: {
      scenario: "A patient develops DIC as a complication of septic shock.",
      answer: "D65 (DIC) plus an additional code for the septic shock — the guideline note specifically calls for coding the associated underlying condition alongside DIC.",
    },
    tips: [
      "Factor VIII → Hemophilia A (D66). Factor IX → Hemophilia B (D67). Factor XI → Hemophilia C (D68.1). Memorizing the factor number is the fastest way to the correct hemophilia code.",
      "Von Willebrand disease type (1, 2, or 3) matters for code selection — don't default to an unspecified von Willebrand code when a type is actually documented.",
    ],
  },
  {
    n: 5,
    title: "Purpura & Platelet Disorders",
    codes: "D69",
    summary: [
      "D69.0 covers allergic purpura, including Henoch-Schönlein purpura specifically — an immune-mediated vasculitis, distinct from the other purpura subtypes in this category.",
      "D69.1 covers qualitative platelet DEFECTS (platelets present but functioning abnormally) — including Bernard-Soulier syndrome — as opposed to a shortage of platelets (thrombocytopenia), which is a separate concept.",
      "D69.2 is other nonthrombocytopenic purpura (purpura not caused by low platelet counts), distinct from D69.6, which is thrombocytopenia, unspecified (low platelet count itself, cause not further specified).",
      "Immune thrombocytopenic purpura (ITP) has its own dedicated subcode within this category, distinguishing it from the general unspecified thrombocytopenia code.",
    ],
    easy: {
      scenario: "A patient has documented Henoch-Schönlein purpura.",
      answer: "D69.0 (allergic purpura), which specifically includes Henoch-Schönlein purpura.",
    },
    hard: {
      scenario: "A patient has a normal platelet COUNT, but the platelets present are documented as functioning abnormally (Bernard-Soulier syndrome).",
      answer: "D69.1 (qualitative platelet defects) — not a thrombocytopenia code, since the platelet count itself isn't low; it's the platelet FUNCTION that's defective.",
    },
    tips: [
      "\"Purpura\" (bleeding into the skin) and \"thrombocytopenia\" (low platelet count) are related but distinct concepts within D69 — read carefully for which one is actually documented, since they're different subcodes.",
      "Qualitative platelet defect (function abnormal, count normal) vs. thrombocytopenia (count low, function normal) is the key distinguishing question for D69.1 vs. D69.6.",
    ],
  },
  {
    n: 6,
    title: "Other Blood Disorders & Spleen Complications",
    codes: "D70–D78",
    summary: [
      "D70 (neutropenia) includes agranulocytosis and splits by cause: congenital (D70.0), due to infection (D70.3), drug-induced (D70.2, needs an additional adverse-effect code), and secondary neutropenia (D70.4) from other documented causes.",
      "D73 covers diseases of the spleen — including splenomegaly not elsewhere classified, and both acute and chronic splenitis — organized by the specific splenic condition documented.",
      "D78 is specifically for intraoperative and postprocedural complications of the spleen — a distinct category from the general D73 spleen-disease codes, reserved for complications tied directly to a procedure.",
    ],
    easy: {
      scenario: "A patient develops neutropenia as a documented adverse effect of chemotherapy.",
      answer: "D70.2 (drug-induced neutropenia) plus an additional adverse-effect code identifying the specific drug.",
    },
    hard: {
      scenario: "A patient develops a splenic injury as a complication during an unrelated abdominal surgery.",
      answer: "A code from D78 (intraoperative/postprocedural complications of the spleen) — not a general D73 spleen-disease code, since this is specifically a procedural complication.",
    },
    tips: [
      "Drug-induced conditions keep showing up throughout this whole chapter (anemias, neutropenia) with the same pattern: code the blood disorder, then add a separate adverse-effect code for the causative drug.",
      "D73 (spleen disease in general) vs. D78 (spleen complication FROM a procedure) — the deciding factor is whether a procedure caused it.",
    ],
  },
  {
    n: 7,
    title: "Disorders Involving the Immune Mechanism",
    codes: "D80–D89",
    summary: [
      "D80 covers immunodeficiencies with predominantly antibody defects — including hereditary hypogammaglobulinemia and common variable immunodeficiency — distinct from D81, which covers combined immunodeficiencies (affecting both antibody AND cell-mediated immunity, like severe combined immunodeficiency/SCID).",
      "D86 (sarcoidosis) is organized by which organ system is involved — pulmonary sarcoidosis, sarcoidosis of lymph nodes, sarcoidosis of skin, and combinations — and can require an additional code for a specific manifestation (like sarcoid arthropathy, coded D86.86, using the specific joint manifestation as an additional code).",
      "D89 (other disorders involving the immune mechanism) includes cryoglobulinemia (D89.1, which can involve additional organ-specific manifestation coding, like lung involvement) and cryofibrinogenemia (D89.2) — both abnormal protein-related immune conditions distinct from the antibody deficiencies in D80.",
    ],
    easy: {
      scenario: "A patient has documented common variable immunodeficiency, affecting antibody production only.",
      answer: "D80 (immunodeficiency with predominantly antibody defects) — specifically common variable immunodeficiency.",
    },
    hard: {
      scenario: "A patient has sarcoidosis with documented joint involvement (sarcoid arthropathy).",
      answer: "The appropriate D86 sarcoidosis code PLUS an additional code identifying the specific joint manifestation — sarcoidosis with organ-specific manifestations typically needs the combination.",
    },
    tips: [
      "Antibody-only defect = D80. Combined antibody + cell-mediated defect = D81. Reading for which arm(s) of the immune system are affected is the fork between these two categories.",
      "Sarcoidosis (D86) very often needs a second code for the specific manifestation/organ involved — don't stop at the base sarcoidosis code alone when a specific complication is documented.",
    ],
  },
];

const mainStyle = { maxWidth: "1160px", margin: "0 auto", padding: "36px 24px 64px", minHeight: "100vh", background: "#f6f9f9", color: "#141d1c", fontFamily: "Arial, sans-serif" };
const heroStyle = { background: "linear-gradient(135deg, #101719, #0f766e)", color: "white", padding: "46px 42px", borderRadius: "18px", marginBottom: "26px", boxShadow: "0 12px 28px rgba(16,23,25,0.22)" };
const kickerStyle = { margin: "0 0 10px", color: "#99f6e4", fontWeight: 800, letterSpacing: "0.08em" };
const navStyle = { display: "flex", flexWrap: "wrap" as const, gap: "10px", marginBottom: "26px" };
const navLinkStyle = { textDecoration: "none", color: "#0f766e", background: "#ffffff", border: "1px solid #dbe3e1", borderRadius: "999px", padding: "10px 15px", fontWeight: 700, fontSize: "14px" };
const introStyle = { background: "#f0fdfa", border: "1px solid #99f6e4", borderLeft: "7px solid #0f766e", borderRadius: "12px", padding: "22px 24px", marginBottom: "24px", lineHeight: 1.7 };
const noteStyle = { background: "#f9faf9", border: "1px solid #ece7db", borderRadius: "10px", padding: "14px 16px", marginBottom: "24px", lineHeight: 1.65, fontSize: "13.5px", color: "#5b6b68" };
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

export default function Icd10Chapter3GuidelinesReviewerPage() {
  return (
    <main style={mainStyle}>
      <HighlightToolbar />
      <header style={heroStyle}>
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 3 · 2026 CODE STRUCTURE</p>
        <h1 style={{ margin: 0, fontSize: "clamp(26px, 5vw, 44px)" }}>Diseases of the Blood &amp; Blood-Forming Organs</h1>
        <p style={{ margin: "12px 0 0", fontSize: "18px", lineHeight: 1.5 }}>D50–D89 — nutritional and hemolytic anemias, hemophilias and von Willebrand disease, purpura/platelet disorders, and immune mechanism disorders.</p>
      </header>

      <nav aria-label="ICD-10 navigation" style={navStyle}>
        <Link href="/icd10" style={navLinkStyle}>ICD-10-CM home</Link>
        <Link href="/icd10/chapter-3-practice-quiz" style={navLinkStyle}>Practice Quiz</Link>
        <Link href="/icd10/chapter-3-flashcards" style={navLinkStyle}>Flashcards</Link>
      </nav>

      <div style={noteStyle}>
        <strong>📌 A note on this chapter:</strong> unlike Chapters 1, 2, 9, 13, and 18, the official ICD-10-CM Official Guidelines explicitly mark Chapter 3&apos;s chapter-specific section as &quot;Reserved for future guideline expansion&quot; — there are no narrative sequencing rules published for this chapter. What follows instead is organized around the actual code CATEGORY structure and the clinical distinctions that decide which subcode applies — which is what this chapter actually tests on the exam.
      </div>

      <section style={introStyle}>
        <strong>How to use this reviewer:</strong> same format as the other ICD-10 chapters — a plain-language summary, an easy and a hard example scenario with reasoning, and a tips/traps box for each topic. Written as an original summary, not a copy of the code descriptors.
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
