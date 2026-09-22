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
    title: "Otitis Externa — Swimmer's Ear",
    codes: "H60.–",
    summary: [
      "Category H60 (Otitis externa) splits along one major line: INFECTIVE causes (bacterial, the classic \"swimmer's ear\" picture, typically from streptococcus, staphylococcus, or pseudomonas) versus NONINFECTIVE causes.",
      "The noninfective subtypes each have their own dedicated code: H60.5– covers this group, further split into acute noninfective (H60.50), actinic (H60.51, sun/radiation-related), chemical (H60.52), contact (H60.53), eczematoid (H60.54), reactive (H60.55), and other specified (H60.59).",
      "Chronic otitis externa (H60.6–) is its own distinct code family from the acute presentations — read for whether the documentation specifies acute vs. chronic before assigning a code.",
    ],
    easy: {
      scenario: "A patient who swims frequently is diagnosed with acute bacterial infection of the ear canal — classic \"swimmer's ear.\"",
      answer: "A code from the infective otitis externa family within H60 — the bacterial/infective cause is the key documented detail.",
    },
    hard: {
      scenario: "A patient develops ear canal irritation and inflammation specifically documented as a reaction to a new earring's metal, with no infection present.",
      answer: "H60.53 (contact otitis externa) — a noninfective cause tied to a specific contact allergen/irritant, distinct from the infective \"swimmer's ear\" picture.",
    },
    tips: [
      "The first fork in the road for any otitis externa code is infective vs. noninfective — get that right before worrying about the more granular noninfective subtype (actinic/chemical/contact/eczematoid/reactive).",
    ],
  },
  {
    n: 2,
    title: "Otitis Media — Suppurative vs. Nonsuppurative, Acute vs. Chronic",
    codes: "H65.–, H66.–",
    summary: [
      "Otitis media (middle ear infection/inflammation) splits first by whether it's SUPPURATIVE (pus-forming, category H66) or NONSUPPURATIVE (category H65) — a fundamental distinction that determines which category you're even working in.",
      "Within each category, the next fork is ACUTE vs. CHRONIC. Acute otitis media commonly presents with ear pain and, in infants, fever and irritability, often with purulent drainage when suppurative.",
      "After an acute infection resolves, fluid (an effusion) can remain behind the eardrum — this is otitis media WITH EFFUSION, a nonsuppurative finding, distinct from the acute infection itself and distinct from chronic suppurative otitis media (a persistent, pus-forming chronic condition).",
      "H66.2– (chronic atticoantral suppurative otitis media, often associated with cholesteatoma) and H66.1– (chronic tubotympanic suppurative otitis media) are further split by the specific chronic subtype and laterality.",
    ],
    easy: {
      scenario: "An infant presents with acute ear pain, fever, and purulent drainage from the ear — a classic acute middle-ear infection.",
      answer: "A code from the acute suppurative otitis media family (H66) — purulent drainage confirms the suppurative (pus-forming) subtype.",
    },
    hard: {
      scenario: "A child recovers from an acute ear infection, but a follow-up exam a few weeks later finds fluid still trapped behind the eardrum, with no signs of active infection.",
      answer: "A code for otitis media with effusion (H65 nonsuppurative family) — the active infection has resolved, leaving residual fluid, which is a nonsuppurative finding distinct from the original acute suppurative episode.",
    },
    tips: [
      "Suppurative (pus) vs. nonsuppurative (no pus, e.g., effusion) is the FIRST fork — don't jump straight to acute/chronic before confirming which of these two categories applies.",
      "\"Effusion remaining after an acute infection resolves\" is a common exam trap — it's coded as nonsuppurative otitis media, not as ongoing acute suppurative otitis media.",
    ],
  },
  {
    n: 3,
    title: "Cholesteatoma — Location Determines the Subcode",
    codes: "H71.–",
    summary: [
      "Cholesteatoma is an abnormal skin growth in the middle ear, commonly arising as a complication of chronic ear infection (though it can also be congenital) — poor eustachian tube function creates negative pressure that drives its formation, and over time it can erode surrounding delicate bone structures, causing hearing loss.",
      "Category H71 is organized by the specific LOCATION of the cholesteatoma within the ear: H71.0 (attic — the upper middle-ear space), H71.1 (tympanum), H71.2 (mastoid), and H71.3 (diffuse, involving multiple sites).",
      "Cholesteatoma of the EXTERNAL ear canal is coded separately, under H60.4 (part of the otitis externa category) — not under H71, which is reserved for middle-ear cholesteatoma.",
    ],
    easy: {
      scenario: "A patient's cholesteatoma is documented as located in the mastoid portion of the middle ear.",
      answer: "H71.2 (cholesteatoma of mastoid) — the location documented in the mastoid directly determines this specific subcode.",
    },
    hard: {
      scenario: "A patient has a cholesteatoma documented as being in the external ear canal, not the middle ear.",
      answer: "H60.4 (cholesteatoma of external ear) — despite \"cholesteatoma\" being the same term, external-ear-canal cholesteatoma routes to the otitis externa category (H60), not to H71, which is exclusively for middle-ear cholesteatoma.",
    },
    tips: [
      "\"Cholesteatoma\" alone doesn't tell you the code — LOCATION is everything here: external canal → H60.4; middle ear (attic/tympanum/mastoid/diffuse) → the appropriate H71 subcode.",
    ],
  },
  {
    n: 4,
    title: "Otosclerosis",
    codes: "H80.–",
    summary: [
      "Otosclerosis is abnormal bone growth in the middle ear that mainly affects the stapes (one of the tiny auditory ossicles) and can extend into the otic capsule (the bone surrounding the inner ear) — this abnormal bone growth prevents the ear's structures from working properly and causes a sensory-type hearing loss.",
      "Category H80 codes are organized by the specific anatomic site/type of the otosclerotic involvement (for example, involving the oval window vs. the cochlea) — read carefully for which specific site is documented.",
    ],
    easy: {
      scenario: "A patient is diagnosed with otosclerosis causing progressive hearing loss, documented as affecting the stapes and oval window specifically.",
      answer: "The H80 subcode specific to oval-window involvement — otosclerosis coding is organized by the specific anatomic site documented.",
    },
    hard: {
      scenario: "A patient's hearing loss workup identifies otosclerosis as the cause, but the documentation doesn't specify laterality (which ear, or both).",
      answer: "The appropriate H80 subcode with the laterality character reflecting \"unspecified ear\" — don't guess a side that wasn't actually documented.",
    },
    tips: [
      "Otosclerosis is a bone-growth problem primarily involving the stapes — remembering that anatomic fact helps distinguish it from cholesteatoma (a skin-growth problem) and otitis media (an infection/inflammation problem), even though all three can cause hearing-related symptoms.",
    ],
  },
  {
    n: 5,
    title: "Meniere's Disease — Laterality-Driven Codes",
    codes: "H81.0–",
    summary: [
      "Meniere's disease is a disorder of the inner ear causing severe dizziness, a feeling of ear pressure or pain, episodes of vertigo, low-pitched tinnitus, and hearing loss — usually affecting just ONE ear, caused by excess fluid pressure in the inner ear's semicircular canals.",
      "Category H81.0 is organized entirely by LATERALITY: H81.01 (right ear), H81.02 (left ear), H81.03 (bilateral), and H81.09 (unspecified ear) — the clinical diagnosis is the same across all four, but the code depends entirely on which ear(s) are documented as affected.",
    ],
    easy: {
      scenario: "A patient is diagnosed with Meniere's disease affecting only the right ear.",
      answer: "H81.01 (Meniere's disease, right ear).",
    },
    hard: {
      scenario: "A patient has classic Meniere's disease symptoms, confirmed by the treating specialist, but the chart never specifies which ear (or both) is affected.",
      answer: "H81.09 (Meniere's disease, unspecified ear) — the diagnosis itself is confirmed, but without documented laterality, the unspecified-ear code is used rather than guessing a side.",
    },
    tips: [
      "Meniere's disease coding is a pure laterality exercise once the diagnosis itself is established — right, left, bilateral, or unspecified are the only four possible endpoints.",
    ],
  },
  {
    n: 6,
    title: "Vestibular Neuritis & Other Vestibular Disorders",
    codes: "H81.2, H81.4",
    summary: [
      "Vestibular neuritis (H81.2) results from an acute infection of the nerves in the inner ear, disrupting the transmission of sensory information. Its main symptom is vertigo that appears suddenly, often with nausea and vomiting, and can worsen with head movement. Vertigo typically lasts days to weeks (rarely, months) — critically, vestibular neuritis does NOT cause hearing loss.",
      "H81.4 (vertigo of central origin) is a distinct category from vestibular neuritis — used when the vertigo's cause is central (brain-related) rather than a peripheral inner-ear nerve problem, and includes both benign paroxysmal positional vertigo type presentations and other central vertigo.",
    ],
    easy: {
      scenario: "A patient develops sudden-onset vertigo with nausea and vomiting following a viral illness, with no hearing loss, and the episode is expected to resolve over one to a few weeks.",
      answer: "H81.2 (vestibular neuritis) — sudden vertigo without hearing loss, following an acute nerve inflammation, is the classic presentation.",
    },
    hard: {
      scenario: "A patient's vertigo is worked up and specifically attributed to a central (brain-related) cause rather than an inner-ear nerve problem.",
      answer: "A code from H81.4 (vertigo of central origin) — not H81.2, which is specifically for the peripheral inner-ear nerve inflammation of vestibular neuritis.",
    },
    tips: [
      "\"Does this patient have hearing loss?\" is a fast way to help rule vestibular neuritis in or out — vestibular neuritis specifically does NOT cause hearing loss, which distinguishes it from several other ear conditions in this chapter.",
      "Peripheral (inner-ear nerve, vestibular neuritis) vs. central (brain-related, H81.4) is the key fork for vertigo — not just \"vertigo present or not.\"",
    ],
  },
  {
    n: 7,
    title: "Hearing Loss — Conductive vs. Sensorineural vs. Mixed vs. Sudden",
    codes: "H90.–, H91.–",
    summary: [
      "Category H90 splits hearing loss by MECHANISM: conductive hearing loss (H90.0–H90.2, a problem in the outer/middle ear blocking sound transmission), sensorineural hearing loss (H90.3–H90.5, a problem in the inner ear or auditory nerve), and mixed conductive-and-sensorineural hearing loss (H90.6–H90.8) — each mechanism is its own code family, further split by laterality (bilateral, right unilateral, left unilateral, unspecified).",
      "H91.2 (sudden idiopathic hearing loss) is its own distinct code for hearing loss with sudden onset and no identified cause — separate from the gradual, mechanism-based H90 codes.",
      "H91.3 (deafmutism, also called deaf nonspeaking) is used for the specific combined condition of deafness with an inability to speak, whether acquired or congenital — a distinct clinical picture from simple hearing loss alone.",
    ],
    easy: {
      scenario: "A patient has hearing loss confirmed by audiometry to be caused by a problem in the inner ear itself (the cochlea), not the outer or middle ear.",
      answer: "A code from the sensorineural hearing loss family (H90.3–H90.5), with the appropriate laterality character.",
    },
    hard: {
      scenario: "A patient wakes up with hearing loss in one ear that developed suddenly overnight, with no identifiable cause found on workup.",
      answer: "H91.2 (sudden idiopathic hearing loss) — the sudden onset with no identified cause is the specific trigger for this code, rather than one of the mechanism-based H90 codes.",
    },
    tips: [
      "H90 codes require you to know (or have documented) the MECHANISM — conductive, sensorineural, or mixed. H91.2 is the escape hatch specifically for sudden, cause-unknown hearing loss, where mechanism hasn't been established.",
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

export default function Icd10Chapter8GuidelinesReviewerPage() {
  return (
    <main style={mainStyle}>
      <HighlightToolbar />
      <header style={heroStyle}>
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 8 · 2026 CODE STRUCTURE</p>
        <h1 style={{ margin: 0, fontSize: "clamp(26px, 5vw, 44px)" }}>Diseases of the Ear and Mastoid Process</h1>
        <p style={{ margin: "12px 0 0", fontSize: "18px", lineHeight: 1.5 }}>H60–H95 — otitis externa/media, cholesteatoma, otosclerosis, Meniere's disease, vestibular neuritis, and the conductive/sensorineural/mixed/sudden hearing-loss framework.</p>
      </header>

      <nav aria-label="ICD-10 navigation" style={navStyle}>
        <Link href="/icd10" style={navLinkStyle}>ICD-10-CM home</Link>
        <Link href="/icd10/chapter-8-practice-quiz" style={navLinkStyle}>Practice Quiz</Link>
        <Link href="/icd10/chapter-8-flashcards" style={navLinkStyle}>Flashcards</Link>
      </nav>

      <div style={noteStyle}>
        <strong>📌 A note on this chapter:</strong> like Chapter 3, the official ICD-10-CM Official Guidelines explicitly mark Chapter 8&apos;s chapter-specific section as &quot;Reserved for future guideline expansion&quot; — there are no narrative sequencing rules published for this chapter. What follows instead is organized around the actual code CATEGORY structure and the clinical distinctions that decide which subcode applies — which is what this chapter actually tests on the exam.
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
