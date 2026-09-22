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
    title: "Hypertension with Heart and/or Kidney Disease",
    codes: "I11.–, I12.–, I13.–",
    summary: [
      "ICD-10-CM presumes hypertension is causally linked to heart disease and to kidney disease — the Alphabetic Index connects them with the word \"with.\" Code them as related even without an explicit statement from the provider, unless documentation clearly says they're unrelated.",
      "That presumed link is specific to relational terms like \"with,\" \"due to,\" or \"associated with\" as used in the classification itself. For anything else, the provider actually has to document the connection before you can code it as related.",
      "Hypertension with I50 (heart failure), I51.4, I51.89, or I51.9 → I11 (hypertensive heart disease), PLUS an additional code identifying the specific heart condition.",
      "Hypertension with I51.5 (myocardial degeneration) or I51.7 (cardiomegaly) → I11 alone, with no additional heart-condition code needed — those two are fully absorbed into I11.",
      "If those same heart conditions are documented as unrelated to the hypertension, code them separately instead — I10 (or a secondary hypertension code) plus the heart condition's own code.",
      "Hypertensive chronic kidney disease (I12.–) applies when hypertension and CKD are both present; add an N18 code to show the CKD stage.",
      "I13.– (hypertensive heart AND chronic kidney disease) is the triple-combination code for when hypertension, heart disease, and CKD are all present together. Once I13 applies, you never also use I11 or I12.",
      "Hypertensive cerebrovascular disease: code the cerebrovascular condition (I60–I69) first, then the hypertension code.",
    ],
    easy: {
      scenario: "A patient has documented hypertension and heart failure (I50.–), with no statement from the provider about whether they're related.",
      answer: "Code them as related — I11.0 (hypertensive heart disease with heart failure) plus the I50.– code — since ICD-10-CM presumes the causal link unless documentation says otherwise.",
    },
    hard: {
      scenario: "A patient has hypertension, heart failure, and stage 4 chronic kidney disease (N18.4), all documented together.",
      answer: "I13.– (hypertensive heart and chronic kidney disease), the specific I50 heart failure code, and N18.4 — not I11 or I12 separately, since I13 is the dedicated triple-combination code once all three conditions are present.",
    },
    tips: [
      "\"With\" in the Alphabetic Index is doing a lot of work here — it creates a presumed causal link for hypertension+heart and hypertension+kidney disease that you don't need explicit provider documentation to code, unlike most other conditions.",
      "I51.5/I51.7 with hypertension → I11 alone, no additional code. I50.–/I51.4/I51.89/I51.9 with hypertension → I11 plus the additional code. Mixing up these two rules is the most common trap in this topic.",
    ],
  },
  {
    n: 2,
    title: "Hypertension — Secondary, Transient, Controlled & Uncontrolled",
    codes: "I15.–, R03.0, O13.–/O14.–",
    summary: [
      "Secondary hypertension (I15.–) is caused by an identifiable underlying condition. It always takes two codes: one for the underlying cause, and one from I15 for the hypertension itself — sequencing depends on the reason for the encounter.",
      "\"Transient hypertension\" defaults to R03.0 (elevated blood pressure reading without diagnosis of hypertension) — UNLESS the patient already has an established hypertension diagnosis, in which case it isn't really \"transient\" and gets coded as their existing hypertension instead.",
      "For transient hypertension specifically of pregnancy, use O13.– (gestational hypertension without significant proteinuria) or O14.– (pre-eclampsia) instead of R03.0.",
      "\"Controlled hypertension\" just means existing hypertension being managed by therapy — code it with whichever I10–I15 category already fits, nothing special.",
      "\"Uncontrolled hypertension\" can mean either untreated hypertension OR hypertension not responding to current therapy. Either way, it's still just the appropriate I10–I15 code — neither \"controlled\" nor \"uncontrolled\" creates a different code family.",
    ],
    easy: {
      scenario: "A patient has an elevated blood pressure reading during a routine visit, with no prior diagnosis of hypertension and no other symptoms.",
      answer: "R03.0 (elevated blood pressure reading without diagnosis of hypertension).",
    },
    hard: {
      scenario: "A pregnant patient develops transient hypertension without significant proteinuria during her second trimester.",
      answer: "O13.– (gestational hypertension without significant proteinuria), not R03.0 — pregnancy-related transient hypertension has its own dedicated code family.",
    },
    tips: [
      "\"Transient\" hypertension is a trap word — it sounds like it should always be R03.0, but an established hypertension diagnosis or a pregnancy context both override that default.",
      "\"Controlled\" and \"uncontrolled\" are documentation descriptors, not separate code categories — don't go looking for a special \"uncontrolled hypertension\" code that doesn't exist.",
    ],
  },
  {
    n: 3,
    title: "Hypertensive Crisis, Pulmonary Hypertension & Resistant Hypertension",
    codes: "I16.–, I27.2–, I1A.0",
    summary: [
      "Hypertensive crisis (I16.–) covers documented hypertensive urgency (I16.0), hypertensive emergency (I16.1), or unspecified hypertensive crisis (I16.9) — and you also always code whichever hypertensive disease (I10–I15) is identified, sequenced by the reason for the encounter.",
      "Pulmonary hypertension is classified to I27 (other pulmonary heart diseases), NOT to the I10–I16 systemic hypertension family — it's a completely different code category despite sharing the word \"hypertension.\"",
      "For SECONDARY pulmonary hypertension (I27.1, I27.2–), also code any associated conditions or adverse drug/toxin effects causing it. Sequencing follows the reason for the encounter, except adverse drug effects follow their own separate sequencing rule.",
      "Resistant hypertension — blood pressure that stays above goal despite antihypertensive medication — gets its own additional code, I1A.0, whenever the provider documents \"apparent treatment resistant,\" \"treatment resistant,\" or \"true resistant\" hypertension. Sequence the specific type of existing hypertension first (if known), then I1A.0 second.",
    ],
    easy: {
      scenario: "A patient is documented with hypertensive urgency and essential hypertension.",
      answer: "I16.0 (hypertensive urgency) plus I10 (essential hypertension), sequenced by reason for the encounter.",
    },
    hard: {
      scenario: "A patient with essential hypertension is documented as having \"true resistant hypertension\" despite being on three antihypertensive medications.",
      answer: "I10 first (the specific type of existing hypertension), then I1A.0 (resistant hypertension) as an additional code.",
    },
    tips: [
      "Pulmonary hypertension (I27) and systemic hypertension (I10–I16) are unrelated code families that just happen to share a name — don't reach for an I10–I16 code when \"pulmonary\" is in the documentation.",
      "I1A.0 is always an ADD-ON to the specific hypertension type code, never a replacement for it.",
    ],
  },
  {
    n: 4,
    title: "Atherosclerotic Coronary Artery Disease and Angina",
    codes: "I25.11–, I25.7",
    summary: [
      "ICD-10-CM has dedicated combination codes for atherosclerotic heart disease WITH angina pectoris: I25.11– (atherosclerotic heart disease of native coronary artery with angina pectoris) and I25.7 (atherosclerosis of coronary artery bypass graft(s)/transplanted heart with angina pectoris).",
      "When you use one of these combination codes, you do NOT also add a separate angina pectoris code — a causal relationship between the atherosclerosis and the angina is assumed automatically, unless documentation says the angina is due to something else.",
      "If a patient with coronary artery disease is admitted for an acute MI, the AMI is sequenced BEFORE the coronary artery disease code — not the other way around.",
    ],
    easy: {
      scenario: "A patient has atherosclerotic heart disease of a native coronary artery with documented angina pectoris, no other cause identified for the angina.",
      answer: "I25.11– alone — the combination code already captures the angina; no separate angina code is needed.",
    },
    hard: {
      scenario: "A patient with known coronary artery disease is admitted for an acute anterior wall STEMI.",
      answer: "The AMI code (I21.0) is sequenced first, ahead of the coronary artery disease code — even though the CAD is arguably the \"underlying\" condition.",
    },
    tips: [
      "\"A causal relationship can be assumed\" is your cue to stop looking for a second code — these combination codes already do the work of two.",
    ],
  },
  {
    n: 5,
    title: "Intraoperative and Postprocedural Cerebrovascular Accident",
    codes: "I97.–, I60–I69",
    summary: [
      "To code an intraoperative or postprocedural cerebrovascular accident, medical record documentation must clearly and specifically establish a cause-and-effect relationship between the medical intervention and the CVA — it isn't assumed automatically just from timing.",
      "Correct code assignment depends on two separate questions: was it an infarction or a hemorrhage, and did it happen intraoperatively or postoperatively?",
      "If it was a cerebral hemorrhage, the exact code assignment further depends on which type of procedure was being performed at the time.",
    ],
    easy: {
      scenario: "A patient develops a postoperative cerebral infarction after cardiac surgery, and the surgeon's note clearly documents the infarction as a direct result of the procedure.",
      answer: "Code it as a postprocedural cerebrovascular accident, since the cause-and-effect relationship is explicitly documented.",
    },
    hard: {
      scenario: "A patient has a stroke discovered two days after an unrelated orthopedic surgery, but the documentation never states a cause-and-effect relationship between the surgery and the stroke.",
      answer: "Do not code it as an intraoperative/postprocedural CVA — without documentation clearly linking the two, code the stroke on its own merits instead (e.g., an I63.– code).",
    },
    tips: [
      "This whole topic lives or dies on documentation. No explicit cause-and-effect statement means no intraoperative/postprocedural CVA code, no matter how suspicious the timing looks.",
    ],
  },
  {
    n: 6,
    title: "Sequelae of Cerebrovascular Disease",
    codes: "I69.–",
    summary: [
      "Category I69 (sequelae of cerebrovascular disease) is used for neurologic deficits caused by a condition originally classified to I60–I67 — these are \"late effects\" that can be present from the very onset of the original condition, or can show up any time afterward.",
      "I69 codes for hemiplegia, hemiparesis, and monoplegia specify WHICH side is affected — dominant or nondominant.",
      "If the affected side is documented but dominance isn't specified, and the classification doesn't otherwise indicate a default, use this rule: ambidextrous patients default to dominant; left side affected defaults to non-dominant; right side affected defaults to dominant.",
      "I69 codes may be reported alongside active I60–I67 codes when a patient has both a current cerebrovascular event AND deficits left over from an old one.",
      "Don't assign an I69 code if the patient doesn't actually have any neurologic deficits — a resolved stroke with no lasting deficit doesn't get a sequela code just because it happened in the past (see the personal history code Z86.73 instead).",
    ],
    easy: {
      scenario: "A patient's chart documents right-sided hemiparesis as a lasting deficit from a stroke that occurred 8 months ago, with no mention of hand dominance.",
      answer: "Apply the default rule — right side affected defaults to dominant — and code the dominant-side hemiparesis I69 code.",
    },
    hard: {
      scenario: "A patient with a past stroke and known residual deficits is admitted today for a brand-new acute cerebral infarction.",
      answer: "Code both: the new acute infarction (I63.–) and the I69 sequela code for the old deficits — they can be reported together since one reflects the current event and the other reflects lasting effects from the earlier one.",
    },
    tips: [
      "The dominant/nondominant default rule (ambidextrous → dominant, left → nondominant, right → dominant) is a memorize-it fact that shows up as a direct trap question — there's no way to reason your way to it, you just have to know it.",
    ],
  },
  {
    n: 7,
    title: "Acute MI — STEMI, NSTEMI, Unspecified & Subsequent MI",
    codes: "I21.0–I21.4, I21.9, I22.–",
    summary: [
      "Type 1 AMI codes identify the site (e.g., anterior wall, true posterior wall) — I21.0–I21.2 and I21.3 are used for STEMI, and I21.4 covers both NSTEMI and nontransmural MI.",
      "If a type 1 NSTEMI evolves into a STEMI, code it as the STEMI. If a STEMI converts to NSTEMI because of thrombolytic therapy, it's STILL coded as a STEMI — the original presentation wins, not the post-treatment picture.",
      "I21.9 (AMI, unspecified) is the default when the type isn't documented. If only \"STEMI\" or \"transmural MI\" is documented without a site, use I21.3 instead.",
      "If an AMI is documented as nontransmural or subendocardial but a specific site IS provided, it's still coded as subendocardial — the site detail doesn't push it into a different category.",
      "Codes from category I21 may continue to be used for up to 4 weeks from onset (including transfers to another facility), as long as the MI still meets the definition of a reportable \"other diagnosis.\" Past 4 weeks with ongoing related care, use an aftercare code instead; for an old, fully healed MI needing no more care, use I25.2.",
      "Category I22 (subsequent MI) applies only when a patient with a type 1 or unspecified AMI has a NEW AMI within that same 4-week window — and I22 is always reported together with an I21 code, never alone. I22 is never used for a subsequent type 2, 4, or 5 MI.",
    ],
    easy: {
      scenario: "A patient is diagnosed with a type 1 ST elevation MI of the anterior wall, first event, no prior MI history.",
      answer: "I21.0 (STEMI, anterior wall).",
    },
    hard: {
      scenario: "A patient with a type 1 STEMI five days ago is now admitted with a new type 1 MI in a different location, within the same 4-week window.",
      answer: "Both an I22 code (subsequent MI) AND the appropriate I21 code — I22 is never reported without an accompanying I21, and sequencing depends on the circumstances of this encounter.",
    },
    tips: [
      "A STEMI that later \"converts\" to NSTEMI from treatment is still coded as STEMI — code the myocardial infarction as it actually presented, not as it later evolved because of therapy.",
    ],
  },
  {
    n: 8,
    title: "Acute MI — Type 2, Other Types & Coronary Microvascular Dysfunction",
    codes: "I21.A1, I21.A9, I21.B",
    summary: [
      "Type 2 MI (myocardial infarction due to demand ischemia or ischemic imbalance) is coded I21.A1, with the underlying cause coded first if it's known. Don't use I24.89 (other acute ischemic heart disease) for demand ischemia — I21.A1 is the specific code for it.",
      "Even if a type 2 AMI is documented as NSTEMI or STEMI, still assign only I21.A1 — codes I21.0 through I21.4 are reserved exclusively for type 1 AMI.",
      "Types 3, 4a, 4b, 4c, and 5 acute MI are all grouped into a single code, I21.A9 (other myocardial infarction type).",
      "I21.B (myocardial infarction with coronary microvascular dysfunction) covers MI with coronary microvascular disease/dysfunction, and MI with non-obstructive coronary arteries (MINOCA) tied to microvascular disease.",
      "For subsequent MI: a subsequent type 2 MI gets only I21.A1 (never a category I22 code); a subsequent type 4 or type 5 MI gets only I21.A9. Category I22 is reserved for subsequent type 1 or unspecified MI only.",
    ],
    easy: {
      scenario: "A patient has a documented type 2 myocardial infarction due to demand ischemia from severe anemia, anemia identified as the cause.",
      answer: "The anemia code first, then I21.A1 (myocardial infarction type 2).",
    },
    hard: {
      scenario: "A patient with a known type 2 MI two weeks ago now has a new type 2 MI.",
      answer: "I21.A1 only — a subsequent type 2 MI is never coded with a category I22 code, regardless of how much time has passed within the window.",
    },
    tips: [
      "Types 1 (I21.0–I21.4/I21.9) and 2 (I21.A1) look similar on paper but are entirely separate code paths — a type 2 MI never gets an I21.0–I21.4 code, no matter how it's clinically described as STEMI/NSTEMI.",
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

export default function Icd10Chapter9GuidelinesReviewerPage() {
  return (
    <main style={mainStyle}>
      <HighlightToolbar />
      <header style={heroStyle}>
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 9 · 2026 OFFICIAL GUIDELINES</p>
        <h1 style={{ margin: 0, fontSize: "clamp(26px, 5vw, 44px)" }}>Diseases of the Circulatory System</h1>
        <p style={{ margin: "12px 0 0", fontSize: "18px", lineHeight: 1.5 }}>I00–I99 — hypertension combination codes, atherosclerotic CAD with angina, cerebrovascular sequelae, and the full acute MI (type 1/2/other) framework.</p>
      </header>

      <nav aria-label="ICD-10 navigation" style={navStyle}>
        <Link href="/icd10" style={navLinkStyle}>ICD-10-CM home</Link>
        <Link href="/icd10/chapter-9-coding-approach" style={navLinkStyle}>How to Approach This Chapter</Link>
        <Link href="/icd10/chapter-9-practice-quiz" style={navLinkStyle}>Practice Quiz</Link>
        <Link href="/icd10/chapter-9-worked-examples" style={navLinkStyle}>Worked Examples</Link>
        <Link href="/icd10/chapter-9-flashcards" style={navLinkStyle}>Flashcards</Link>
      </nav>

      <section style={introStyle}>
        <strong>How to use this reviewer:</strong> same format as Chapters 1 and 18 — a plain-language rule summary, an easy and a hard example scenario with reasoning, and a tips/traps box for each topic. Written as an original summary, not a copy of the guideline text. This chapter is dense — hypertension alone has a dozen sub-rules — so it's split into 8 focused topics instead of one long wall of text.
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
