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
    title: "GERD — With vs. Without Esophagitis",
    codes: "K21.–",
    summary: [
      "Category K21 (Gastro-esophageal reflux disease, GERD) splits along one main line: K21.0 (GERD WITH esophagitis, meaning the reflux has actually caused documented inflammation/irritation of the esophageal lining) versus K21.9 (GERD WITHOUT esophagitis, the more common, uncomplicated presentation).",
      "The presence or absence of documented esophagitis is what decides between these two codes — GERD symptoms alone (heartburn, regurgitation) don't automatically mean esophagitis is present; that requires its own supporting documentation (typically from endoscopy findings).",
    ],
    easy: {
      scenario: "A patient has documented GERD with classic heartburn symptoms, and no esophagitis is mentioned anywhere in the chart.",
      answer: "K21.9 (GERD without esophagitis) — the default when esophagitis isn't documented.",
    },
    hard: {
      scenario: "A patient's endoscopy report documents erosive changes in the distal esophagus consistent with reflux-related inflammation, and the provider's assessment lists \"GERD with esophagitis.\"",
      answer: "K21.0 (GERD with esophagitis) — the documented inflammatory finding, not just reflux symptoms alone, is what supports this specific code.",
    },
    tips: [
      "Don't assume esophagitis just because GERD symptoms are severe — look for an actual documented inflammatory finding (often from endoscopy) before assigning K21.0 instead of K21.9.",
    ],
  },
  {
    n: 2,
    title: "Peptic Ulcer Disease — Site, Acuity & Complications",
    codes: "K25–K28",
    summary: [
      "Peptic ulcer codes are organized FIRST by SITE: K25 (gastric ulcer, in the stomach), K26 (duodenal ulcer), K27 (peptic ulcer, site unspecified), and K28 (gastrojejunal ulcer, typically at a prior surgical anastomosis site).",
      "Within each site category, ulcers are further split by ACUITY (acute vs. chronic) and by COMPLICATION — with hemorrhage, with perforation, with both hemorrhage and perforation, or without either complication.",
      "Getting the code right requires layering all three facts together: which SITE, ACUTE or CHRONIC, and which COMPLICATION (if any) — missing any one of the three usually means the wrong specific code.",
    ],
    easy: {
      scenario: "A patient has a newly diagnosed acute gastric ulcer with no bleeding or perforation.",
      answer: "The K25 subcode for acute gastric ulcer without hemorrhage or perforation — site (gastric), acuity (acute), and complication (none) are all captured.",
    },
    hard: {
      scenario: "A patient has a chronic duodenal ulcer that has caused both active bleeding and a perforation.",
      answer: "The K26 subcode for chronic duodenal ulcer WITH BOTH hemorrhage and perforation — a distinct, more specific subcode from the ones covering only one complication or neither.",
    },
    tips: [
      "Think of peptic ulcer coding as a three-question checklist every time: (1) which site? (2) acute or chronic? (3) which complication, if any (hemorrhage/perforation/both/neither)? All three facts are needed for the correct subcode.",
    ],
  },
  {
    n: 3,
    title: "Acute Appendicitis — Perforation & Peritonitis",
    codes: "K35.–",
    summary: [
      "Category K35 (acute appendicitis) is organized around whether the appendix has PERFORATED or RUPTURED, and if so, what kind of peritonitis (inflammation of the abdominal lining) resulted.",
      "Acute appendicitis WITHOUT perforation and WITHOUT localized/generalized peritonitis is the more straightforward, uncomplicated presentation.",
      "Acute appendicitis WITH perforation is further split by the resulting peritonitis pattern: LOCALIZED peritonitis (contained near the appendix, sometimes with an abscess) versus GENERALIZED peritonitis (spread throughout the abdominal cavity) — generalized peritonitis is the more severe, higher-acuity finding.",
    ],
    easy: {
      scenario: "A patient has acute appendicitis confirmed on imaging, with no perforation and no peritonitis documented.",
      answer: "The K35 subcode for acute appendicitis without perforation or peritonitis — the uncomplicated presentation.",
    },
    hard: {
      scenario: "A patient's appendix has ruptured, and the surgeon documents localized peritonitis with an associated abscess, but the infection has not spread throughout the abdomen.",
      answer: "The K35 subcode for acute appendicitis with perforation and localized peritonitis (with abscess) — distinct from the code for perforation with GENERALIZED peritonitis, which is reserved for infection that has spread throughout the abdominal cavity.",
    },
    tips: [
      "Perforated appendicitis isn't just one code — the LOCALIZED-vs-GENERALIZED peritonitis distinction (and whether an abscess is present) determines the specific subcode, so read the operative/imaging report carefully for exactly how contained or widespread the infection is.",
    ],
  },
  {
    n: 4,
    title: "Diverticular Disease — Bleeding & Location",
    codes: "K57.–",
    summary: [
      "Category K57 (diverticular disease) first splits by LOCATION: the small intestine, the large intestine (colon), or both simultaneously — each has its own dedicated subcategory.",
      "Within each location, codes further split by whether the diverticular disease is documented as DIVERTICULOSIS (the diverticula/pouches are simply present, without inflammation) or DIVERTICULITIS (the diverticula are actively inflamed/infected) — and by whether BLEEDING is also documented.",
      "\"Diverticulosis\" and \"diverticulitis\" are NOT interchangeable terms for coding purposes — diverticulitis specifically implies inflammation/infection, while diverticulosis is the simple presence of the pouches alone.",
    ],
    easy: {
      scenario: "A patient's colonoscopy finds diverticulosis of the colon (pouches present) with no inflammation and no bleeding documented.",
      answer: "The K57 subcode for diverticulosis of the large intestine without perforation, abscess, or bleeding — the simple, uncomplicated finding.",
    },
    hard: {
      scenario: "A patient has documented diverticulitis of the colon with active gastrointestinal bleeding from the affected diverticula.",
      answer: "The K57 subcode specific to diverticulitis of the large intestine WITH bleeding — a distinct, more complicated subcode from simple diverticulosis or diverticulitis without bleeding.",
    },
    tips: [
      "\"-osis\" (diverticulosis) = pouches present, no inflammation. \"-itis\" (diverticulitis) = active inflammation/infection. This suffix distinction is the first fork before you even get to location or bleeding status.",
    ],
  },
  {
    n: 5,
    title: "Inflammatory Bowel Disease — Crohn's vs. Ulcerative Colitis, by Site",
    codes: "K50.–, K51.–",
    summary: [
      "Crohn's disease (K50) and ulcerative colitis (K51) are two DIFFERENT diseases with two different code categories — they are not interchangeable, even though both are chronic inflammatory bowel conditions with overlapping symptoms.",
      "Crohn's disease codes (K50) are organized by the specific SITE affected: small intestine, large intestine, both small and large intestine, or unspecified site — reflecting that Crohn's can affect any part of the GI tract from mouth to anus.",
      "Ulcerative colitis codes (K51) are also organized by site/extent (e.g., ulcerative pancolitis vs. left-sided colitis vs. proctitis), reflecting that ulcerative colitis characteristically involves a continuous segment of the colon, typically starting from the rectum.",
      "Both categories further specify COMPLICATIONS when documented — such as with rectal bleeding, with fistula, with obstruction, or with abscess.",
    ],
    easy: {
      scenario: "A patient has documented Crohn's disease limited to the small intestine, with no complications noted.",
      answer: "The K50 subcode for Crohn's disease of the small intestine, without complications.",
    },
    hard: {
      scenario: "A patient has documented ulcerative colitis with associated rectal bleeding.",
      answer: "The K51 subcode for ulcerative colitis (at the documented site/extent) WITH rectal bleeding — not a Crohn's disease code, since ulcerative colitis and Crohn's disease are coded from entirely separate categories.",
    },
    tips: [
      "Crohn's (K50) and ulcerative colitis (K51) are a classic exam trap precisely because they're clinically similar (both IBD) but coded from completely separate categories — always confirm which specific disease is documented before picking a category.",
    ],
  },
  {
    n: 6,
    title: "Gallbladder Disease — Cholelithiasis vs. Cholecystitis",
    codes: "K80.–, K81.–",
    summary: [
      "Cholelithiasis (K80, gallstones) and cholecystitis (K81, inflammation of the gallbladder) are related but DISTINCT findings — a patient can have gallstones without inflammation, inflammation without stones, or both together.",
      "K80 (cholelithiasis) further specifies whether cholecystitis is ALSO present alongside the gallstones — the code changes depending on whether both findings coexist.",
      "K81 (cholecystitis) is used specifically when there is inflammation WITHOUT stones documented — a distinct clinical picture from the calculus-related codes in K80.",
    ],
    easy: {
      scenario: "A patient's ultrasound shows gallstones, with no gallbladder inflammation documented.",
      answer: "The K80 subcode for cholelithiasis (gallstones) without cholecystitis.",
    },
    hard: {
      scenario: "A patient has documented acute cholecystitis with gallstones both present, confirmed on imaging.",
      answer: "The K80 subcode specific to calculus of the gallbladder WITH acute cholecystitis — both findings (stones and inflammation) are captured together within category K80, not split across K80 and K81 separately.",
    },
    tips: [
      "When BOTH gallstones and cholecystitis are documented together, the combination is still coded from K80 (with the cholecystitis specified), not from K81 — K81 alone is reserved for cholecystitis WITHOUT stones.",
    ],
  },
  {
    n: 7,
    title: "Alcoholic Liver Disease — A Severity Progression",
    codes: "K70.–",
    summary: [
      "Category K70 (alcoholic liver disease) is organized as a PROGRESSION of increasing severity: K70.0 (alcoholic fatty liver, the earliest/mildest stage) → K70.1– (alcoholic hepatitis) → K70.2 (alcoholic fibrosis and sclerosis of liver) → K70.3– (alcoholic cirrhosis of liver) → K70.4– (alcoholic hepatic failure, the most severe stage).",
      "Several of these stages (hepatitis, cirrhosis, hepatic failure) are further split by whether ASCITES (fluid accumulation in the abdomen) or COMA is also documented — reflecting increasing decompensation within that stage.",
      "Because this is a progression, a patient's documentation should be read carefully for the MOST ADVANCED stage actually described — a patient can have findings suggestive of multiple stages, but the code should reflect where they currently are on this severity spectrum.",
    ],
    easy: {
      scenario: "A patient's imaging and labs show early alcoholic fatty liver changes, with no hepatitis, fibrosis, or cirrhosis documented.",
      answer: "K70.0 (alcoholic fatty liver) — the earliest stage on this severity progression.",
    },
    hard: {
      scenario: "A patient has documented alcoholic cirrhosis of the liver with ascites present.",
      answer: "The K70.3– subcode specific to alcoholic cirrhosis WITH ascites — the ascites detail moves this to a more specific subcode within the cirrhosis stage, rather than the plain \"without ascites\" subcode.",
    },
    tips: [
      "Treat K70 as a five-stage ladder (fatty liver → hepatitis → fibrosis/sclerosis → cirrhosis → hepatic failure) — identify which rung the documentation actually supports, then check for the ascites/coma modifier within that rung.",
    ],
  },
  {
    n: 8,
    title: "Acute Pancreatitis — Organized by Cause",
    codes: "K85.–",
    summary: [
      "Category K85 (acute pancreatitis) is organized FIRST by the underlying CAUSE: K85.0– (idiopathic, no identified cause), K85.1– (biliary, caused by gallstones), K85.2– (alcohol-induced), and K85.3– (drug-induced, which also needs an additional adverse-effect code identifying the specific causative drug).",
      "Within each cause, codes are further split by whether NECROSIS is present, and if so, whether it's infected or uninfected — reflecting increasing severity within that cause category.",
    ],
    easy: {
      scenario: "A patient has documented acute pancreatitis caused by gallstones, with no necrosis present.",
      answer: "The K85.1– subcode for biliary acute pancreatitis without necrosis.",
    },
    hard: {
      scenario: "A patient develops acute pancreatitis specifically documented as caused by a medication, with infected necrosis present.",
      answer: "The K85.3– subcode for drug-induced acute pancreatitis with infected necrosis, PLUS an additional adverse-effect code identifying the specific causative drug — the cause (drug-induced) determines the base category, and a second code is still needed for the drug itself.",
    },
    tips: [
      "Cause comes first (idiopathic/biliary/alcohol/drug) — only after identifying the cause should you layer on the necrosis/infection detail. Drug-induced pancreatitis specifically also needs a second code for the causative drug, similar to other drug-induced conditions elsewhere in ICD-10-CM.",
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

export default function Icd10Chapter11GuidelinesReviewerPage() {
  return (
    <main style={mainStyle}>
      <HighlightToolbar />
      <header style={heroStyle}>
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 11 · 2026 CODE STRUCTURE</p>
        <h1 style={{ margin: 0, fontSize: "clamp(26px, 5vw, 44px)" }}>Diseases of the Digestive System</h1>
        <p style={{ margin: "12px 0 0", fontSize: "18px", lineHeight: 1.5 }}>K00–K95 — GERD, peptic ulcer disease, appendicitis, diverticular disease, IBD, gallbladder disease, alcoholic liver disease, and acute pancreatitis.</p>
      </header>

      <nav aria-label="ICD-10 navigation" style={navStyle}>
        <Link href="/icd10" style={navLinkStyle}>ICD-10-CM home</Link>
        <Link href="/icd10/chapter-11-practice-quiz" style={navLinkStyle}>Practice Quiz</Link>
        <Link href="/icd10/chapter-11-flashcards" style={navLinkStyle}>Flashcards</Link>
      </nav>

      <div style={noteStyle}>
        <strong>📌 A note on this chapter:</strong> like Chapters 3 and 8, the official ICD-10-CM Official Guidelines explicitly mark Chapter 11&apos;s chapter-specific section as &quot;Reserved for future guideline expansion&quot; — there are no narrative sequencing rules published for this chapter. What follows instead is organized around the actual code CATEGORY structure and the clinical distinctions that decide which subcode applies — which is what this chapter actually tests on the exam.
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
