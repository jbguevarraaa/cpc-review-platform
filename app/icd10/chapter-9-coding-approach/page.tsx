import Link from "next/link";
import { HighlightToolbar } from "../../cpt/surgery/_digestive/highlighter";

type ChecklistItem = {
  n: number;
  question: string;
  why: string;
  example: string;
};

const checklist: ChecklistItem[] = [
  {
    n: 1,
    question: "Does the Alphabetic Index link two conditions with the word \"with\"?",
    why: "This is the first and most important question in this chapter. ICD-10-CM presumes certain circulatory conditions are causally related purely because the Index connects them with \"with\" — you do NOT need the provider to spell out the connection for those specific pairings. Missing this is the single most common reason a coder under-codes hypertension.",
    example: "Hypertension + heart disease (I50, I51.4, I51.89, I51.9, I51.5, I51.7) and hypertension + chronic kidney disease are both presumed related by the classification itself, unless documentation specifically says they're unrelated.",
  },
  {
    n: 2,
    question: "Does a COMBINATION code already exist for this exact pairing?",
    why: "A large share of this chapter's codes are combination codes that already fold two diagnoses into one — reaching for a second code on top of one of these is a common over-coding error, not a safety net.",
    example: "I11 (hypertensive heart disease), I13 (hypertensive heart AND kidney disease), I25.11– and I25.7 (atherosclerotic heart disease with angina pectoris) are all combination codes. Once the combination code applies, the individual condition it absorbs isn't coded separately.",
  },
  {
    n: 3,
    question: "What is the TIMING or ACUITY WINDOW?",
    why: "Circulatory system coding is full of clock-based rules — the same clinical picture can be coded completely differently depending on how much time has passed, or whether an event is active vs. historical.",
    example: "Acute MI (myocardial infarction, a.k.a. heart attack) codes (I21) apply for up to 4 weeks from onset; past that with ongoing care, switch to an aftercare code, or I25.2 if fully healed with no more care needed. A stroke sequela (I69) requires the deficit to still be present; a resolved stroke with nothing left over isn't a sequela at all.",
  },
  {
    n: 4,
    question: "Is there a REQUIRED sequencing order?",
    why: "Several topics in this chapter specify exactly which code must be listed first — getting the code right but the order wrong is still a coding error.",
    example: "An acute MI is always sequenced before a chronic coronary artery disease code, even though the CAD is arguably the \"underlying\" condition. Hypertensive cerebrovascular disease sequences the cerebrovascular condition (I60–I69) before the hypertension code. A type 2 MI's underlying cause is coded first, before I21.A1.",
  },
  {
    n: 5,
    question: "Does this specific relationship require EXPLICIT documentation, or is it presumed?",
    why: "This chapter contains both kinds of relationship, and mixing them up in either direction is a direct trap: presuming a link where none is allowed, or demanding documentation where none is required.",
    example: "Hypertension+heart/kidney disease is presumed related from the word \"with\" alone (question 1). By contrast, an intraoperative or postprocedural cerebrovascular accident (I97) requires the record to CLEARLY AND SPECIFICALLY document a cause-and-effect relationship — timing alone, no matter how suspicious, is never enough.",
  },
  {
    n: 6,
    question: "Is there a default rule for missing information?",
    why: "When a specific detail isn't documented, this chapter often has a fixed default rather than an open invitation to guess — know the default before you query or guess.",
    example: "\"Transient hypertension\" defaults to R03.0 — unless the patient already has an established hypertension diagnosis, or it's pregnancy-related (which routes to O13/O14 instead). Missing laterality/dominance for an I69 sequela defaults to: ambidextrous → dominant, left → nondominant, right → dominant.",
  },
  {
    n: 7,
    question: "Does an ADDITIONAL code need to be layered on top?",
    why: "Several codes in this chapter are intentionally incomplete on their own — they exist specifically to be paired with a second, more specific code, and skipping that second code is a common completeness error.",
    example: "I12 (hypertensive CKD) needs an added N18 stage code. I1A.0 (resistant hypertension) is always an add-on to the specific hypertension type code, never a replacement for it. I22 (subsequent MI) is never reported alone — it always accompanies an I21 code.",
  },
  {
    n: 8,
    question: "Is this a look-alike TYPE distinction that's actually a separate code family?",
    why: "Several pairs of terms in this chapter sound like they should be coded the same way, or from the same family, but are actually completely separate — this is where careless reading costs the most points.",
    example: "Pulmonary hypertension (I27) and systemic hypertension (I10–I16) share a name but are unrelated categories. A type 1 and a type 2 myocardial infarction can both be clinically described as \"STEMI\" (ST-elevation myocardial infarction) or \"NSTEMI\" (non-ST-elevation myocardial infarction), but type 2 is coded I21.A1 — never from the I21.0–I21.4 range, no matter how the ECG/lab picture reads.",
  },
];

type FamilyCard = {
  n: number;
  family: string;
  codes: string;
  lookFor: string[];
  distinction: string;
  tip: string;
};

const families: FamilyCard[] = [
  {
    n: 1,
    family: "Hypertension with Heart and/or Kidney Disease",
    codes: "I11.–, I12.–, I13.–",
    lookFor: [
      "First: is heart disease and/or chronic kidney disease (CKD) documented alongside hypertension, with no statement that they're unrelated?",
      "Then, if heart disease (no CKD): which specific condition — I50/I51.4/I51.89/I51.9 (needs an additional code on top of I11) or I51.5/I51.7 (fully absorbed into I11, no additional code)?",
      "Then, if CKD is present WITHOUT heart disease: use I12.– (not I11) plus the N18 code for the specific CKD stage.",
      "If hypertension, heart disease, AND CKD are all present together: use I13 alone — never I11 and I12 side by side.",
    ],
    distinction: "The presumed \"with\" relationship (Topic 1 of the universal checklist above) is what makes this whole family work — you code the combination even without the provider explicitly linking the conditions, as long as nothing in the documentation says they're unrelated.",
    tip: "Memorize the fork exactly: I50/.4/.89/.9 → I11 PLUS the heart condition code. I51.5/I51.7 → I11 ALONE. Mixing these two up is the single most common error in this topic.",
  },
  {
    n: 2,
    family: "Hypertension — Secondary, Transient, Crisis, Pulmonary & Resistant",
    codes: "I15.–, R03.0, I16.–, I27.–, I1A.0",
    lookFor: [
      "First: is there an identifiable underlying CAUSE for the hypertension? → secondary hypertension (I15), always two codes: the cause, plus the I15 code itself.",
      "Then: is this a one-off elevated reading with no established hypertension history? → R03.0 by default — UNLESS the patient already has a hypertension diagnosis, or this is pregnancy-related (routes to O13/O14 instead).",
      "Then: is crisis language documented — \"urgency\" or \"emergency\"? → add an I16 code on top of whichever hypertension type (I10–I15) is identified.",
      "Then: does \"pulmonary\" appear anywhere in the hypertension documentation? → stop — this is I27, a completely different category, not I10–I16.",
      "Then: is \"resistant,\" \"treatment resistant,\" or \"true resistant\" documented? → add I1A.0 on top of the specific hypertension type code.",
    ],
    distinction: "Pulmonary hypertension and systemic hypertension share a name but nothing else — reflexively reaching for I10–I16 whenever you see the word \"hypertension\" is the single biggest trap in this family.",
    tip: "\"Controlled\" and \"uncontrolled\" are documentation descriptors only — there is no separate code for either one. Don't go hunting for a code that doesn't exist.",
  },
  {
    n: 3,
    family: "Atherosclerotic Coronary Artery Disease & Angina",
    codes: "I25.11–, I25.7",
    lookFor: [
      "First: native coronary artery, or bypass graft(s)/transplanted heart?",
      "Then: is angina pectoris documented alongside the atherosclerosis, with no other stated cause for the angina? → the combination code (I25.11– or I25.7) already includes it — no separate angina code needed.",
      "Then: is there a competing ACUTE event, such as an acute MI, at the same encounter? → the acute MI is sequenced first, ahead of the chronic CAD code.",
    ],
    distinction: "Once a combination code applies, the causal relationship between the atherosclerosis and the angina is assumed automatically — adding a separate angina code on top is redundant, not extra-thorough.",
    tip: "Sequencing beats intuition here: even though the CAD might feel like the more \"fundamental\" diagnosis, the acute MI always leads when both are present.",
  },
  {
    n: 4,
    family: "Cerebrovascular Disease — Acute, Intraoperative/Postprocedural & Sequelae",
    codes: "I60–I69, I97.–",
    lookFor: [
      "First: is this a brand-new, currently active cerebrovascular event? → code it directly from I60–I67.",
      "Then: did it happen during or after a procedure? → check specifically for EXPLICIT documentation of a cause-and-effect relationship between the procedure and the event before using an I97 code — timing alone is never enough.",
      "Then, if I97 applies: was it an infarction or a hemorrhage, and did it happen intraoperatively or postoperatively? (For a hemorrhage, the exact code also depends on which type of procedure was being performed.)",
      "Then: is this a LASTING DEFICIT from an old event, with no new active event today? → an I69 sequela code, but only if an actual neurologic deficit is still present.",
      "If laterality is documented but dominance isn't specified: apply the default — ambidextrous → dominant, left → nondominant, right → dominant.",
    ],
    distinction: "I97 is the opposite of the hypertension-with-heart-disease presumption (Topic 1) — it requires the record to CLEARLY AND SPECIFICALLY state the cause-and-effect relationship. A stroke discovered two days after unrelated surgery, with no such statement, is coded on its own merits instead.",
    tip: "An active new event and a lingering deficit from an old one are not mutually exclusive — both an I60–I67 code and an I69 code can be reported together in the same encounter when both are genuinely present.",
  },
  {
    n: 5,
    family: "Acute MI — Type 1 Framework",
    codes: "I21.0–I21.4, I21.9, I22.–",
    lookFor: [
      "First: STEMI or NSTEMI, and is a specific site documented?",
      "Then: did the presentation CHANGE during treatment? A type 1 NSTEMI that evolves into a STEMI → code it as the STEMI (the evolved presentation). A STEMI that converts to looking like an NSTEMI specifically because of thrombolytic therapy → still code it as the STEMI (the original presentation, ignoring the drug-altered picture). Either direction, once STEMI applies at any point, that's the code that sticks.",
      "Then: how much time has passed since onset? Within 4 weeks (including transfers) → still I21, as long as it still meets the definition of a reportable diagnosis. Past 4 weeks with ongoing related care → an aftercare code. Fully healed, no more care needed → I25.2.",
      "Then: is there a NEW type 1 or unspecified AMI within that same 4-week window? → add a category I22 code, always paired with the I21 code, never reported alone.",
    ],
    distinction: "STEMI and NSTEMI aren't treated symmetrically here: an NSTEMI that evolves into a STEMI is coded as the STEMI it became, but a STEMI that's later made to look like an NSTEMI by thrombolytic therapy is still coded as the STEMI it originally was. Both rules point the same direction (toward STEMI) but for opposite reasons — don't collapse them into one \"always code the original\" shortcut.",
    tip: "I22 is exclusively for a subsequent type 1 or unspecified MI — never for a subsequent type 2, 4, or 5 MI. That restriction is the connecting thread to the next family below.",
  },
  {
    n: 6,
    family: "Acute MI — Type 2, Other Types & Microvascular Dysfunction",
    codes: "I21.A1, I21.A9, I21.B",
    lookFor: [
      "First: was this MI caused by demand ischemia or a supply-demand mismatch (type 2)? → I21.A1, with the underlying cause coded first if it's known.",
      "Then: even if the chart documents it as \"STEMI\" or \"NSTEMI,\" is the underlying mechanism actually type 2? → still I21.A1 — the I21.0–I21.4 range is reserved exclusively for type 1.",
      "Then: is this specifically type 3, 4a, 4b, 4c, or 5? → I21.A9 (all five grouped into this one code).",
      "Then: is coronary microvascular dysfunction documented, or MI with non-obstructive coronary arteries (MINOCA) tied to microvascular disease? → I21.B.",
      "For a SUBSEQUENT event: what type was it? A subsequent type 2 MI gets I21.A1 alone (never I22). A subsequent type 4 or 5 MI gets I21.A9 alone (never I22).",
    ],
    distinction: "Type 1 and type 2 MI can look identical on the chart — both described as \"STEMI\" or \"NSTEMI\" — but the underlying MECHANISM (a blocked artery vs. a supply-demand imbalance), not the ECG/lab picture, is what actually decides the code family.",
    tip: "Category I22 (subsequent MI) never appears with a type 2, 4, or 5 MI, in either direction — that restriction is worth memorizing as its own fact, separate from the type 1 subsequent-MI rule.",
  },
];

const mainStyle = { maxWidth: "1160px", margin: "0 auto", padding: "36px 24px 64px", minHeight: "100vh", background: "#f6f9f9", color: "#141d1c", fontFamily: "Arial, sans-serif" };
const heroStyle = { background: "linear-gradient(135deg, #101719, #0f766e)", color: "white", padding: "46px 42px", borderRadius: "18px", marginBottom: "26px", boxShadow: "0 12px 28px rgba(16,23,25,0.22)" };
const kickerStyle = { margin: "0 0 10px", color: "#99f6e4", fontWeight: 800, letterSpacing: "0.08em" };
const navStyle = { display: "flex", flexWrap: "wrap" as const, gap: "10px", marginBottom: "26px" };
const navLinkStyle = { textDecoration: "none", color: "#0f766e", background: "#ffffff", border: "1px solid #dbe3e1", borderRadius: "999px", padding: "10px 15px", fontWeight: 700, fontSize: "14px" };
const introStyle = { background: "#f0fdfa", border: "1px solid #99f6e4", borderLeft: "7px solid #0f766e", borderRadius: "12px", padding: "22px 24px", marginBottom: "24px", lineHeight: 1.7 };
const sectionStyle = { background: "#ffffff", border: "1px solid #e3e7e6", borderRadius: "14px", padding: "24px 26px", marginBottom: "20px", boxShadow: "0 5px 16px rgba(16,23,25,0.05)" };
const sectionHeaderStyle = { display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px", flexWrap: "wrap" as const };
const numberBadgeStyle = { background: "#0f766e", color: "#fff", width: "34px", height: "34px", minWidth: "34px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "14px" };
const sectionTitleStyle = { margin: 0, fontSize: "20px", color: "#111827" };
const pStyle = { lineHeight: 1.75, margin: "0 0 8px", fontSize: "14.5px" };
const labelStyle = { margin: "14px 0 6px", fontWeight: 800, fontSize: "12.5px", letterSpacing: "0.03em", color: "#0f766e" };
const exampleBoxStyle = { background: "#f9fafa", border: "1px solid #e3e7e6", borderRadius: "10px", padding: "12px 14px", lineHeight: 1.65, fontSize: "13.5px", marginTop: "8px" };
const codeChipStyle = { background: "#f0fdfa", border: "1px solid #99f6e4", color: "#0f766e", borderRadius: "999px", padding: "4px 12px", fontWeight: 800, fontSize: "12.5px", fontFamily: "Consolas, monospace" };
const distinctionBoxStyle = { background: "#fef2f2", border: "1px solid #fecaca", borderLeft: "5px solid #dc2626", borderRadius: "10px", padding: "14px 16px", marginTop: "14px", lineHeight: 1.7, fontSize: "13.5px" };
const tipBoxStyle = { background: "#f0fdf4", border: "1px solid #bbf7d0", borderLeft: "5px solid #16a34a", borderRadius: "10px", padding: "14px 16px", marginTop: "10px", lineHeight: 1.7, fontSize: "13.5px" };
const backLinkStyle = { textDecoration: "none", color: "#0f766e", fontWeight: 700 };

export default function Icd10Chapter9CodingApproachPage() {
  return (
    <main style={mainStyle}>
      <HighlightToolbar />
      <header style={heroStyle}>
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 9 · CIRCULATORY SYSTEM</p>
        <h1 style={{ margin: 0, fontSize: "clamp(28px, 5.5vw, 48px)" }}>How to Approach Circulatory System Coding</h1>
        <p style={{ margin: "12px 0 0", fontSize: "18px", lineHeight: 1.5 }}>The decision hierarchy behind every code in this chapter — what to check first, second, and third, before you ever pick a specific code.</p>
      </header>

      <nav aria-label="ICD-10 navigation" style={navStyle}>
        <Link href="/icd10" style={navLinkStyle}>ICD-10-CM home</Link>
        <Link href="/icd10/chapter-9-guidelines-reviewer" style={navLinkStyle}>Guidelines Reviewer</Link>
        <Link href="/icd10/chapter-9-practice-quiz" style={navLinkStyle}>Practice Quiz</Link>
        <Link href="/icd10/chapter-9-worked-examples" style={navLinkStyle}>Worked Examples</Link>
        <Link href="/icd10/chapter-9-flashcards" style={navLinkStyle}>Flashcards</Link>
      </nav>

      <section style={introStyle}>
        <strong>Why this page exists:</strong> the Guidelines Reviewer is organized by topic, for fast lookup once you already know roughly where you're headed. This page is the opposite — it's the general reasoning process to run through BEFORE that, so you land in the right topic in the first place. Learn the eight-question hierarchy once, and it applies across hypertension, atherosclerosis, cerebrovascular disease, and acute MI alike — the same handful of traps (presumed vs. explicit relationships, timing windows, sequencing, look-alike names) repeat throughout this entire chapter.
      </section>

      <section style={sectionStyle}>
        <div style={sectionHeaderStyle}>
          <span style={numberBadgeStyle}>★</span>
          <h2 style={sectionTitleStyle}>The Universal Circulatory System Coding Hierarchy</h2>
        </div>
        <p style={pStyle}>Before opening the reviewer to a specific topic, work through these eight questions IN ORDER. This chapter rewards a fixed thought process far more than it rewards memorizing individual codes.</p>
        {checklist.map((c) => (
          <div key={c.n} style={{ marginTop: "18px" }}>
            <p style={{ margin: "0 0 4px", fontWeight: 800, fontSize: "15px", color: "#111827" }}>{c.n}. {c.question}</p>
            <p style={{ ...pStyle, margin: "0 0 6px" }}>{c.why}</p>
            <div style={exampleBoxStyle}><strong>For example:</strong> {c.example}</div>
          </div>
        ))}
      </section>

      <section style={sectionStyle}>
        <div style={sectionHeaderStyle}>
          <span style={numberBadgeStyle}>≡</span>
          <h2 style={sectionTitleStyle}>Topic-by-Topic Priority Checklist</h2>
        </div>
        <p style={pStyle}>Here's the same eight-question hierarchy applied to each of the six major topic groups in this chapter, condensed into the specific questions that actually matter for that topic — in the order to ask them.</p>
      </section>

      {families.map((f) => (
        <section key={f.n} style={sectionStyle}>
          <div style={sectionHeaderStyle}>
            <span style={numberBadgeStyle}>{f.n}</span>
            <h2 style={sectionTitleStyle}>{f.family}</h2>
            <span style={codeChipStyle}>{f.codes}</span>
          </div>

          <p style={labelStyle}>👀 LOOK FOR, IN THIS ORDER</p>
          <ol style={{ margin: "0 0 4px", paddingLeft: "20px", display: "grid", gap: "6px", fontSize: "14.5px", lineHeight: 1.65 }}>
            {f.lookFor.map((item) => <li key={item}>{item}</li>)}
          </ol>

          <div style={distinctionBoxStyle}>
            <strong>🟥 The distinction that matters most:</strong> {f.distinction}
          </div>

          <div style={tipBoxStyle}>
            <strong>🧠 Priority tip:</strong> {f.tip}
          </div>
        </section>
      ))}

      <div style={{ marginTop: "10px", display: "flex", flexWrap: "wrap" as const, gap: "16px" }}>
        <Link href="/icd10/chapter-9-guidelines-reviewer" style={backLinkStyle}>→ Go deeper in the full Guidelines Reviewer</Link>
        <Link href="/icd10" style={backLinkStyle}>← Back to ICD-10-CM</Link>
      </div>
    </main>
  );
}
