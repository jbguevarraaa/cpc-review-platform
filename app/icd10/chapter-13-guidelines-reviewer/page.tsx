import Link from "next/link";

type Topic = {
  n: number;
  title: string;
  codes: string;
  summary: string[];
  steps: string[];
  easy: { scenario: string; answer: string };
  hard: { scenario: string; answer: string };
  tips: string[];
};

const topics: Topic[] = [
  {
    n: 1,
    title: "Site and Laterality",
    codes: "M87 (avascular necrosis), M80/M81 (osteoporosis)",
    summary: [
      "Most Chapter 13 codes carry a site AND laterality designation. \"Site\" means the specific bone, joint, or muscle actually involved — figure out which of those three categories the condition affects before picking a code.",
      "Some conditions sit right at the boundary between a bone and a joint — the two named examples are M87 (avascular necrosis of bone) and M80/M81 (osteoporosis with a current pathological fracture). Even though the affected portion is technically part of a joint, the site designation used for both is still the BONE, not the joint.",
      "When a specific site is documented, code to that specific site. Only fall back to a generic \"multiple sites\" code when individual sites genuinely aren't documented.",
    ],
    steps: [
      "Step 1 — Identify which of the three site categories applies: bone, joint, or muscle.",
      "Step 2 — If the condition sits at the boundary between bone and joint (like avascular necrosis or osteoporosis-related fracture), default to the bone site designation.",
      "Step 3 — Is a specific site actually documented? If yes, code to it. If genuinely not documented, use the \"multiple sites\" code instead.",
    ],
    easy: {
      scenario: "Documentation specifies avascular necrosis of the head of the right femur.",
      answer: "Code to the specific bone site (femur) — not a joint code — even though the head of the femur forms part of the hip joint.",
    },
    hard: {
      scenario: "A patient has documented joint pain in several joints, but the provider's note only says \"multiple joints\" without naming individual ones.",
      answer: "Use the \"multiple sites\" code, since individual sites aren't documented — don't guess at specific joints that were never actually named.",
    },
    tips: [
      "Avascular necrosis and osteoporosis-with-fracture are the two classic examples where students instinctively reach for a joint code, but the guideline specifically calls for the bone.",
      "\"Multiple sites\" is a fallback for missing documentation, not a default first choice — always look for a specific named site first.",
    ],
  },
  {
    n: 2,
    title: "Acute Traumatic vs. Chronic or Recurrent Conditions",
    codes: "Chapter 13 (chronic/recurrent) vs. Chapter 19 (acute injury)",
    summary: [
      "A current, acute injury — a fresh traumatic event — is coded to the injury chapter (Chapter 19), not Chapter 13.",
      "A condition resulting from an old, already-healed injury, or one that's recurrent (keeps coming back over time), is coded to Chapter 13 instead.",
      "If the documentation doesn't make it clear whether you're dealing with a fresh acute injury or a chronic/recurrent condition, query the provider rather than guessing.",
    ],
    steps: [
      "Step 1 — Is this a brand-new traumatic event happening right now? → Chapter 19 injury code.",
      "Step 2 — Is this the aftermath of an old, healed injury, or does it keep recurring? → Chapter 13 code.",
      "Step 3 — Genuinely unclear from the documentation which applies? → Query the provider.",
    ],
    easy: {
      scenario: "A patient twists their ankle today and is diagnosed with a fresh sprain.",
      answer: "Code from Chapter 19 — a current, acute injury.",
    },
    hard: {
      scenario: "A patient has recurring knee pain that flares up periodically, tied to an injury from several years ago that has long since healed.",
      answer: "Code from Chapter 13, since this is a chronic/recurrent condition stemming from an already-healed injury, not a fresh traumatic event.",
    },
    tips: [
      "\"Acute\" + \"just happened\" → Chapter 19. \"Healed\" + \"recurrent/chronic\" → Chapter 13. When the wording doesn't clearly fall into either bucket, that's a query trigger, not a guess.",
    ],
  },
  {
    n: 3,
    title: "Coding of Pathologic Fractures (7th Character)",
    codes: "7th characters A, D, and subsequent-encounter characters",
    summary: [
      "7th character A applies for as long as the patient is receiving ACTIVE treatment for the pathologic fracture. This is based on the treatment status, not on whether the current provider is seeing the patient for the first time.",
      "7th character D applies once active treatment has finished and the patient is now in the routine healing/recovery phase.",
      "The other 7th characters listed under each subcategory are for subsequent encounters dealing with complications of the healing process itself — malunion, nonunion, or sequela.",
      "A complication of the SURGICAL treatment itself (not the fracture healing) during the recovery phase gets coded with the appropriate surgical-complication code instead of a fracture 7th character.",
    ],
    steps: [
      "Step 1 — Is the patient still receiving active treatment for the fracture, regardless of whether this is a new provider? → 7th character A.",
      "Step 2 — Has active treatment finished, with the patient now just in routine healing/recovery? → 7th character D.",
      "Step 3 — Is this encounter actually about a healing complication (malunion, nonunion, sequela)? → the matching subsequent-encounter 7th character.",
      "Step 4 — Is this about a complication of the surgical treatment itself? → use a surgical complication code instead.",
    ],
    easy: {
      scenario: "A patient with a pathologic fracture switches to a new orthopedic provider while still undergoing active fracture treatment.",
      answer: "Still 7th character A — a new provider doesn't reset the character to reflect a \"first encounter\"; what matters is the treatment phase, not who's seeing the patient.",
    },
    hard: {
      scenario: "A patient has completed active treatment for a pathologic fracture and returns for a routine follow-up during the healing phase, only to be found to have a nonunion.",
      answer: "The nonunion gets its own specific subsequent-encounter 7th character — not D (which is for routine healing without complication) and not A (since active treatment already ended).",
    },
    tips: [
      "The classic trap: assuming a new provider automatically means \"character A\" restarts. It doesn't — active-treatment status drives character A, not which provider is seeing the patient.",
    ],
  },
  {
    n: 4,
    title: "Osteoporosis (M80 vs. M81)",
    codes: "M80 (with current pathological fracture), M81 (without), Z87.310",
    summary: [
      "Osteoporosis is a SYSTEMIC condition — it affects the whole skeleton, not one site. That's why category M81 (osteoporosis without a current pathological fracture) has no site component at all.",
      "Category M80 (osteoporosis WITH a current pathological fracture) does have site codes — but those sites identify where the FRACTURE is, not where the osteoporosis is, since the osteoporosis itself isn't site-specific.",
      "M81 is for a patient with osteoporosis who does NOT currently have a pathologic fracture — even if they've had one in the past. For a patient with a history of an osteoporosis-related fracture, add Z87.310 (personal history of healed osteoporosis fracture) after the M81 code.",
      "M80 is used any time a patient with known osteoporosis suffers a CURRENT fracture — even from a minor fall or minimal trauma that wouldn't normally break a healthy bone. Use M80, not a traumatic fracture code, in that situation.",
    ],
    steps: [
      "Step 1 — Does the patient currently have osteoporosis but no current fracture from it? → M81 (no site code) — plus Z87.310 if there's a history of a prior osteoporosis fracture.",
      "Step 2 — Does the patient have osteoporosis AND a current fracture caused by it? → M80, coded to the fracture's site.",
      "Step 3 — Did a patient with known osteoporosis suffer a fracture from trauma that wouldn't normally break a healthy bone? → Still M80, not a traumatic fracture code — the underlying osteoporosis is the true cause.",
    ],
    easy: {
      scenario: "A patient with long-standing osteoporosis and no current fracture is seen for routine management.",
      answer: "M81 alone — no site code, since M81 doesn't carry site information at all.",
    },
    hard: {
      scenario: "An elderly patient with known osteoporosis suffers a hip fracture after a minor stumble that wouldn't typically break a healthy bone.",
      answer: "M80, coded to the hip fracture site — not a traumatic fracture code — because the true underlying cause is the osteoporosis, not the trivial trauma.",
    },
    tips: [
      "M81 never carries a site — that's a hard rule, since osteoporosis without a current fracture is systemic, not localized.",
      "M80's site code describes the FRACTURE location, not the disease itself — don't confuse \"site of M80\" with \"site of the osteoporosis.\"",
      "Minor trauma + known osteoporosis + a fracture that shouldn't have happened from trauma that mild = M80 territory, not a traumatic fracture code.",
    ],
  },
];

type PathologyEntry = { name: string; blurb: string; site: string };

const pathologies: PathologyEntry[] = [
  { name: "Osteoarthritis", blurb: "A noninflammatory, degenerative joint condition — cartilage breaks down, bone edges thicken, and the joint stiffens and can lock up. May affect several joints at once, but symptoms are often noticeable in just one or two.", site: "Any joint; commonly weight-bearing and hand joints" },
  { name: "Rheumatoid Arthritis", blurb: "A chronic autoimmune disease causing pain, swelling, and inflammation in joints and surrounding tissue, and sometimes other organs. Progressive and potentially disabling.", site: "Commonly wrist and fingers, but can affect any joint" },
  { name: "Frozen Shoulder (Adhesive Capsulitis)", blurb: "Progressive pain and stiffness from an inflamed, tightened joint capsule that severely restricts shoulder motion over time.", site: "Shoulder" },
  { name: "Rotator Cuff Tendinitis (Impingement Syndrome)", blurb: "Tendon irritation from repeated rubbing against nearby bone, often with inflammation of the overlying bursa. A very common non-traumatic cause of shoulder pain.", site: "Shoulder (subacromial region)" },
  { name: "De Quervain's Tenosynovitis", blurb: "Painful swelling of the tendons on the thumb side of the wrist, worsened by gripping or twisting motions.", site: "Thumb-side wrist tendons" },
  { name: "Carpal Tunnel Syndrome", blurb: "Compression of the median nerve as it passes through the wrist, causing numbness/tingling in the thumb, index, middle, and part of the ring finger.", site: "Wrist (median nerve)" },
  { name: "Dupuytren's Contracture", blurb: "Thickening and tightening of the connective tissue under the skin of the palm, gradually pulling one or more fingers into a bent position.", site: "Palm/fingers (most often the ring finger)" },
  { name: "Septic Arthritis", blurb: "A joint infection, usually from bacteria reaching the joint through the bloodstream from an infection elsewhere in the body.", site: "Any joint" },
  { name: "Meralgia Paresthetica", blurb: "Tingling, numbness, and burning pain on the outer thigh from entrapment of a sensory nerve near the front of the hip.", site: "Outer thigh (lateral femoral cutaneous nerve)" },
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
const stepsBoxStyle = { background: "#eff6ff", border: "1px solid #bfdbfe", borderLeft: "5px solid #2563eb", borderRadius: "10px", padding: "14px 16px", marginTop: "6px", marginBottom: "16px", lineHeight: 1.65, fontSize: "13.5px" };
const crossRefStyle = { background: "#f9faf9", border: "1px solid #ece7db", borderRadius: "10px", padding: "14px 16px", marginBottom: "24px", lineHeight: 1.65, fontSize: "13.5px", color: "#5b6b68" };
const anatomyGroupStyle = { marginBottom: "16px" };
const anatomyTitleStyle = { margin: "0 0 6px", color: "#0f766e", fontWeight: 800, fontSize: "14px" };
const anatomyBodyStyle = { margin: 0, lineHeight: 1.7, fontSize: "13.5px" };
const pathologyGridStyle = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "12px" };
const pathologyCardStyle = { background: "#f9faf9", border: "1px solid #ece7db", borderRadius: "10px", padding: "14px 16px" };
const pathologyNameStyle = { margin: "0 0 6px", fontWeight: 800, color: "#111827", fontSize: "14px" };
const pathologySiteStyle = { margin: "6px 0 0", fontSize: "12px", color: "#0f766e", fontWeight: 700 };
const backLinkStyle = { textDecoration: "none", color: "#0f766e", fontWeight: 700 };

export default function Icd10Chapter13GuidelinesReviewerPage() {
  return (
    <main style={mainStyle}>
      <header style={heroStyle}>
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 13 · 2026 OFFICIAL GUIDELINES</p>
        <h1 style={{ margin: 0, fontSize: "clamp(26px, 5vw, 44px)" }}>Musculoskeletal System &amp; Connective Tissue</h1>
        <p style={{ margin: "12px 0 0", fontSize: "18px", lineHeight: 1.5 }}>M00–M99 — site/laterality, acute vs. chronic conditions, pathologic fractures, and osteoporosis, plus a quick anatomy and common-pathology reference.</p>
      </header>

      <nav aria-label="ICD-10 navigation" style={navStyle}>
        <Link href="/icd10" style={navLinkStyle}>ICD-10-CM home</Link>
        <Link href="/icd10/chapter-1-guidelines-reviewer" style={navLinkStyle}>Chapter 1</Link>
        <Link href="/icd10/chapter-18-guidelines-reviewer" style={navLinkStyle}>Chapter 18</Link>
        <Link href="/cpt" style={navLinkStyle}>CPT home</Link>
      </nav>

      <section style={introStyle}>
        <strong>How to use this reviewer:</strong> same format as Chapters 1 and 18 — a plain-language rule summary, a step-by-step &quot;how to code this&quot; walkthrough, an easy and a hard example, and common traps, for each of the 4 official coding guidelines. A condensed anatomy and pathology reference follows for exam context. Written as an original summary, not a copy of the guideline or textbook text.
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

          <p style={labelStyle}>🪜 STEP BY STEP — HOW TO CODE THIS</p>
          <div style={stepsBoxStyle}>
            <ol style={{ margin: 0, paddingLeft: "20px", display: "grid", gap: "8px" }}>
              {t.steps.map((step) => <li key={step}>{step}</li>)}
            </ol>
          </div>

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
            <strong>🟥 Common Traps</strong>
            <ul style={{ margin: "8px 0 0", paddingLeft: "20px", display: "grid", gap: "6px" }}>
              {t.tips.map((tip) => <li key={tip}>{tip}</li>)}
            </ul>
          </div>
        </section>
      ))}

      <div style={crossRefStyle}>
        <strong>📌 Cross-reference:</strong> Chapter 13 doesn&apos;t have its own guideline for Multisystem Inflammatory Syndrome (MIS) — it simply points to the COVID-19 guideline in Chapter 1 (active infection vs. history vs. exposure-only) for the actual coding logic. See the Chapter 1 reviewer for that.
      </div>

      <section style={sectionStyle}>
        <div style={sectionHeaderStyle}>
          <span style={numberBadgeStyle}>🦴</span>
          <h2 style={sectionTitleStyle}>Quick Anatomy Reference</h2>
        </div>
        <p style={pStyle}>A condensed, grouped version of the anatomy background — useful for recognizing terms in exam scenarios, not for memorizing every individual bone or muscle.</p>

        <div style={anatomyGroupStyle}>
          <p style={anatomyTitleStyle}>Axial Skeleton (the trunk)</p>
          <p style={anatomyBodyStyle}>Skull, hyoid bone, ribs &amp; sternum, and the vertebral column. The vertebral column runs cervical (C1–C7) → thoracic (T1–T12) → lumbar (L1–L5) → sacral (fused) → coccygeal (fused). Cervical, thoracic, and lumbar vertebrae are &quot;true&quot; vertebrae — still mobile via intervertebral discs. Sacral and coccygeal vertebrae are &quot;false&quot; vertebrae — fused together, essentially immobile.</p>
        </div>

        <div style={anatomyGroupStyle}>
          <p style={anatomyTitleStyle}>Appendicular Skeleton — Upper Extremity</p>
          <p style={anatomyBodyStyle}>Clavicle and scapula (shoulder girdle), humerus (upper arm), radius and ulna (forearm), and the hand: 8 carpal bones, 5 metacarpals, 14 phalanges.</p>
        </div>

        <div style={anatomyGroupStyle}>
          <p style={anatomyTitleStyle}>Appendicular Skeleton — Lower Extremity</p>
          <p style={anatomyBodyStyle}>The hip bone (ilium, ischium, pubis fused together), femur (thigh), patella (kneecap), tibia and fibula (lower leg), and the foot: 7 tarsal bones, metatarsals, and phalanges.</p>
        </div>

        <div style={anatomyGroupStyle}>
          <p style={anatomyTitleStyle}>Joint Types</p>
          <p style={anatomyBodyStyle}><strong>Synarthroses</strong> — immovable joints. <strong>Amphiarthroses</strong> — slightly movable (e.g., between vertebral bodies, the pubic symphysis, the sacroiliac joint). <strong>Diarthroses</strong> — freely movable/synovial joints, further split into ball-and-socket (hip, shoulder), hinge (elbow, knee, ankle), and gliding (carpal/tarsal) types.</p>
        </div>

        <div style={anatomyGroupStyle}>
          <p style={anatomyTitleStyle}>Muscle Types</p>
          <p style={anatomyBodyStyle}><strong>Striated (skeletal)</strong> — voluntary, makes up the skeletal muscular system. <strong>Non-striated (smooth)</strong> — involuntary, found in vessel walls and hollow organs. <strong>Cardiac</strong> — involuntary, found only in the heart.</p>
        </div>
      </section>

      <section style={sectionStyle}>
        <div style={sectionHeaderStyle}>
          <span style={numberBadgeStyle}>🩺</span>
          <h2 style={sectionTitleStyle}>Common Pathologies at a Glance</h2>
        </div>
        <p style={pStyle}>Quick-recognition summaries — enough to identify the condition from an exam scenario, in original wording.</p>
        <div style={pathologyGridStyle}>
          {pathologies.map((p) => (
            <div key={p.name} style={pathologyCardStyle}>
              <p style={pathologyNameStyle}>{p.name}</p>
              <p style={{ margin: 0, lineHeight: 1.6, fontSize: "13px" }}>{p.blurb}</p>
              <p style={pathologySiteStyle}>📍 {p.site}</p>
            </div>
          ))}
        </div>
      </section>

      <div style={{ marginTop: "10px" }}>
        <Link href="/icd10" style={backLinkStyle}>← Back to ICD-10-CM</Link>
      </div>
    </main>
  );
}
