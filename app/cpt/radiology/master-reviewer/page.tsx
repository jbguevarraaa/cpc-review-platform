import Link from "next/link";

const mainStyle = { maxWidth: "1120px", margin: "0 auto", padding: "36px 24px 64px", minHeight: "100vh", background: "#fbfaf7", color: "#2a2926", fontFamily: "Arial, sans-serif" };
const heroStyle = { background: "linear-gradient(135deg, #3c2f2f, #8b5e3c)", color: "white", padding: "48px 44px", borderRadius: "18px", marginBottom: "26px", boxShadow: "0 12px 28px rgba(82,61,38,0.2)" };
const kickerStyle = { margin: "0 0 10px", color: "#f6d9a8", fontWeight: 800, letterSpacing: "0.08em" };
const navStyle = { display: "flex", flexWrap: "wrap" as const, gap: "10px", marginBottom: "26px" };
const navLinkStyle = { textDecoration: "none", color: "#6b4226", background: "#ffffff", border: "1px solid #d8d0c5", borderRadius: "999px", padding: "10px 15px", fontWeight: 700, fontSize: "14px" };
const pagerStyle = { display: "flex", flexWrap: "wrap" as const, gap: "10px", marginBottom: "26px" };
const pagerLinkStyle = { textDecoration: "none", color: "#6b4226", background: "#fff7e8", border: "1px solid #efd39b", borderRadius: "999px", padding: "8px 16px", fontWeight: 700, fontSize: "14px" };
const pagerActiveStyle = { ...pagerLinkStyle, background: "#8b5e3c", color: "#fff", border: "1px solid #8b5e3c" };
const introStyle = { background: "#fff7e8", border: "1px solid #efd39b", borderLeft: "7px solid #b7791f", borderRadius: "12px", padding: "22px 24px", marginBottom: "30px", lineHeight: 1.7 };
const sectionStyle = { background: "#ffffff", border: "1px solid #e8ddce", borderRadius: "14px", padding: "26px 28px", marginBottom: "20px", boxShadow: "0 5px 16px rgba(82,61,38,0.07)" };
const sectionHeaderStyle = { display: "flex", alignItems: "center", gap: "14px", marginBottom: "14px" };
const sectionNumberStyle = { background: "#8b5e3c", color: "#fff", width: "36px", height: "36px", minWidth: "36px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "15px" };
const sectionTitleStyle = { margin: 0, fontSize: "21px", color: "#3c2f2f", lineHeight: 1.3 };
const pStyle = { lineHeight: 1.75, margin: "0 0 10px" };
const hackStyle = { background: "#f0fdf4", border: "1px solid #bbf7d0", borderLeft: "5px solid #16a34a", borderRadius: "10px", padding: "14px 16px", margin: "14px 0", lineHeight: 1.65 };
const trapStyle = { background: "#fef2f2", border: "1px solid #fecaca", borderLeft: "5px solid #dc2626", borderRadius: "10px", padding: "14px 16px", margin: "14px 0", lineHeight: 1.65 };
const codeListStyle = { listStyle: "none", padding: 0, margin: "12px 0", display: "grid", gap: "8px" };
const codeItemStyle = { display: "flex", gap: "12px", alignItems: "baseline", background: "#faf7f2", border: "1px solid #ece1d1", borderRadius: "8px", padding: "9px 14px" };
const codeChipStyle = { fontWeight: 800, color: "#8b5e3c", minWidth: "72px", fontFamily: "Consolas, monospace" };
const tableStyle = { width: "100%", borderCollapse: "collapse" as const, marginTop: "12px" };
const thStyle = { border: "1px solid #e2d9c8", padding: "10px 12px", textAlign: "left" as const, fontSize: "14px", background: "#faf3e8", color: "#6b4226" };
const tdStyle = { border: "1px solid #e2d9c8", padding: "10px 12px", textAlign: "left" as const, fontSize: "14px" };
const mustKnowGroupStyle = { marginBottom: "16px" };
const mustKnowTitleStyle = { margin: "0 0 8px", color: "#6b4226", fontSize: "16px", fontWeight: 800 };
const backLinkStyle = { textDecoration: "none", color: "#6b4226", fontWeight: 700 };

function Section({ n, title, children }: { n: string | number; title: string; children: React.ReactNode }) {
  return (
    <section style={sectionStyle}>
      <div style={sectionHeaderStyle}>
        <span style={sectionNumberStyle}>{n}</span>
        <h2 style={sectionTitleStyle}>{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Hack({ children }: { children: React.ReactNode }) {
  return <div style={hackStyle}><strong>🧠 Memory hack:</strong> {children}</div>;
}

function Trap({ children }: { children: React.ReactNode }) {
  return <div style={trapStyle}><strong>🟥 CPC trap:</strong> {children}</div>;
}

function CodeList({ items }: { items: [string, string][] }) {
  return (
    <ul style={codeListStyle}>
      {items.map(([code, desc]) => (
        <li key={code} style={codeItemStyle}>
          <code style={codeChipStyle}>{code}</code>
          <span>{desc}</span>
        </li>
      ))}
    </ul>
  );
}

function PatternTable({ rows }: { rows: [string, string, string, string][] }) {
  return (
    <div style={{ overflowX: "auto" }}>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Body site / family</th>
            <th style={thStyle}>Without contrast</th>
            <th style={thStyle}>With contrast</th>
            <th style={thStyle}>Without → with</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]}>
              {row.map((cell, i) => (
                <td key={i} style={tdStyle}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function MustKnowGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div style={mustKnowGroupStyle}>
      <h3 style={mustKnowTitleStyle}>{title}</h3>
      <ul style={{ margin: 0, paddingLeft: "22px", lineHeight: 1.8 }}>
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}

export default function RadiologyMasterReviewerPart1Page() {
  return (
    <main style={mainStyle}>
      <header style={heroStyle}>
        <p style={kickerStyle}>70,000 SERIES · MASTER CPC REVIEWER</p>
        <h1 style={{ margin: 0, fontSize: "clamp(32px, 6vw, 56px)" }}>CPT Radiology Master Reviewer</h1>
        <p style={{ margin: "12px 0 0", fontSize: "20px", lineHeight: 1.5 }}>Part 1 of 2 — Codes 70010–76499</p>
      </header>

      <div style={pagerStyle}>
        <span style={pagerActiveStyle}>Part 1 (70010–76499)</span>
        <Link href="/cpt/radiology/master-reviewer-part-2" style={pagerLinkStyle}>Part 2 (76506–79999) →</Link>
      </div>

      <nav aria-label="Radiology navigation" style={navStyle}>
        <Link href="/cpt/radiology" style={navLinkStyle}>70,000 Series home</Link>
        <Link href="/cpt/radiology/guidelines" style={navLinkStyle}>Guidelines</Link>
        <Link href="/cpt/radiology/study-tips" style={navLinkStyle}>Study tips &amp; hacks</Link>
        <Link href="/cpt" style={navLinkStyle}>CPT home</Link>
      </nav>

      <section style={introStyle}>
        <strong>How to use this reviewer:</strong> the 70,000 series is too large to memorize code-by-code. This reviewer teaches the underlying patterns — contrast logic, modality families, guidance codes, and bundling rules — so you can reason your way to the right code on exam day instead of recalling it from a list.
      </section>

      <Section n={1} title="First: Understand the Radiology Section">
        <p style={pStyle}>Don&apos;t try to memorize thousands of individual codes. Instead, recognize the broad pattern the section follows:</p>
        <CodeList items={[
          ["70010–76499", "Diagnostic Radiology — X-ray → CT → MRI/MRA → GI studies → urinary studies → vascular imaging → guidance → special radiology"],
          ["76506–76999", "Ultrasound"],
          ["77001–77022", "Radiologic Guidance"],
          ["77046–77067", "Mammography / Breast Imaging"],
          ["77071–77078+", "Bone/Joint Studies"],
          ["77261–77799", "Radiation Oncology"],
          ["78012–79999", "Nuclear Medicine"],
        ]} />
        <p style={pStyle}>Knowing this map is one of the biggest advantages you can bring into the exam.</p>
      </Section>

      <Section n={2} title="The Most Important Radiology Concept">
        <p style={pStyle}>Every radiology code question can be answered by working through five questions in order:</p>
        <ol style={{ lineHeight: 1.9, paddingLeft: "22px" }}>
          <li><strong>What body part?</strong> Head, chest, spine, abdomen, pelvis, extremity?</li>
          <li><strong>What modality?</strong> X-ray, CT, MRI, MRA, CTA, ultrasound, fluoroscopy, nuclear medicine.</li>
          <li><strong>What technique?</strong> Especially for CT/MRI: without contrast, with contrast, or without contrast followed by contrast.</li>
          <li><strong>Is there a guidance code?</strong> e.g., 76942 (ultrasound needle guidance), 77002 (fluoroscopic needle guidance), 77012 (CT needle guidance), 77021 (MRI needle guidance).</li>
          <li><strong>Is the guidance already included?</strong> This is a major CPC trap — see the bundling rules throughout this reviewer.</li>
        </ol>
      </Section>

      <Section n={3} title="CT Contrast Pattern — Memorize This">
        <p style={pStyle}>This 3-code pattern repeats across most CT body-site families: without contrast, with contrast, and without-then-with contrast.</p>
        <PatternTable rows={[
          ["Head/Brain CT", "70450", "70460", "70470 (without, then with + further sections)"],
          ["Thorax CT", "71250", "71260", "71270"],
          ["Abdomen CT", "74150", "74160", "74170"],
          ["Pelvis CT", "72192", "72193", "72194"],
          ["Upper extremity CT", "73200", "73201", "73202"],
          ["Lower extremity CT", "73700", "73701", "73702"],
        ]} />
        <Hack>The last digit pattern is 0 = no contrast, 1 = with contrast, 2 = both. It doesn&apos;t hold for every radiology family, but it&apos;s reliable within these CT families.</Hack>
      </Section>

      <Section n={4} title="MRI Pattern">
        <p style={pStyle}>MRI generally follows the same without / with / without-then-with logic, though the exact code endings vary by body site.</p>
        <PatternTable rows={[
          ["Brain MRI", "70551", "70552", "70553 (+ further sequences)"],
          ["Orbit/Face/Neck MRI", "70540", "70542", "70543"],
          ["Chest MRI", "71550", "71551", "71552"],
          ["Upper extremity MRI", "73218", "73219", "73220"],
          ["Lower extremity MRI", "73718", "73719", "73720"],
        ]} />
      </Section>

      <Section n={5} title="MRI vs MRA vs CTA">
        <p style={pStyle}>Stop trying to memorize numbers here — identify the purpose of the study instead.</p>
        <p style={pStyle}><strong>MRI</strong> — magnetic resonance imaging; generally evaluates anatomy/soft tissue.</p>
        <p style={pStyle}><strong>MRA</strong> — magnetic resonance angiography (&quot;A&quot; = angiography = vessels).</p>
        <CodeList items={[
          ["70544–70546", "Head MRA"],
          ["70547–70549", "Neck MRA"],
          ["72159", "Spinal canal MRA"],
          ["72198", "Pelvic MRA"],
          ["73225", "Upper-extremity MRA"],
          ["73725", "Lower-extremity MRA"],
        ]} />
        <p style={pStyle}>Head/neck MRA routes to its own dedicated code range (70544–70549) rather than the regular MRI codes.</p>
        <p style={pStyle}><strong>CTA</strong> — CT + angiography.</p>
        <CodeList items={[
          ["70496", "Head CTA"],
          ["70498", "Neck CTA"],
          ["71275", "Chest CTA"],
          ["72191", "Pelvis CTA"],
          ["74175", "Abdomen CTA"],
          ["74174", "Abdomen + pelvis CTA"],
          ["73206", "Upper extremity CTA"],
          ["73706", "Lower extremity CTA"],
        ]} />
      </Section>

      <Section n={6} title="CTA Has a Very Important Rule">
        <p style={pStyle}>CTA descriptors frequently already include noncontrast images and postprocessing as part of the single code — you don&apos;t add a separate CT code just because noncontrast images were also obtained (e.g., 70496 already covers this for head CTA). The same concept applies across many CTA codes.</p>
        <Trap>CTA performed with noncontrast images first, followed by contrast imaging — should you code the noncontrast CT separately? Usually <strong>no</strong>, when the CTA descriptor already includes the noncontrast images. Watch for wording like &quot;including noncontrast images, if performed&quot; — that&apos;s your clue.</Trap>
      </Section>

      <Section n={7} title="Head and Neck X-rays — View Count Matters">
        <CodeList items={[
          ["70100 / 70110", "Mandible: partial (<4 views) vs. complete (minimum 4 views)"],
          ["70140 / 70150", "Facial bones: <3 views vs. complete (minimum 3 views)"],
          ["70210 / 70220", "Sinuses: <3 views vs. complete (minimum 3 views)"],
          ["70250 / 70260", "Skull: <4 views vs. complete (minimum 4 views)"],
          ["70200", "Orbits: complete, minimum 4 views"],
        ]} />
        <Hack>For plain radiographs, more views = a different code. Don&apos;t pick a code just because the body part matches — always check the documented view count first.</Hack>
      </Section>

      <Section n={8} title="TMJ">
        <CodeList items={[
          ["70328", "TMJ, open and closed mouth — unilateral"],
          ["70330", "TMJ, open and closed mouth — bilateral"],
          ["70332", "TMJ arthrography, radiological supervision and interpretation"],
        ]} />
        <Trap>Do not report 70332 with 77002 — the arthrography code already accounts for the radiological supervision and interpretation.</Trap>
      </Section>

      <Section n={9} title="3D Rendering">
        <CodeList items={[
          ["76376", "3D rendering with interpretation/reporting, under concurrent supervision, not requiring an independent workstation"],
          ["76377", "Same concept, but requires image postprocessing on an independent workstation"],
        ]} />
        <Hack>76376 = not an independent workstation. 76377 = independent workstation.</Hack>
        <Trap>Don&apos;t automatically report 76376/76377 whenever you see &quot;3D rendering.&quot; Many imaging codes explicitly prohibit reporting them together. Ask: does the primary imaging code already include 3D rendering, or specifically exclude 76376/76377?</Trap>
      </Section>

      <Section n={10} title="Functional MRI">
        <CodeList items={[
          ["70554", "Functional MRI when neurofunctional tests are administered by a technologist, other nonphysician, or nonpsychologist"],
          ["70555", "Functional MRI when the entire neurofunctional testing is administered by a physician, qualified health care professional, or psychologist"],
        ]} />
        <p style={pStyle}>Do not report 70554 with 96020. Do not report 70555 unless 96020 is performed. Do not report 70554/70555 with 70551–70553 unless a separate diagnostic MRI is performed.</p>
        <Hack>70554 = nonphysician testing. 70555 = physician/psychologist + 96020.</Hack>
      </Section>

      <Section n={11} title="Chest X-ray">
        <CodeList items={[
          ["71045", "1 view"],
          ["71046", "2 views"],
          ["71047", "3 views"],
          ["71048", "4+ views"],
        ]} />
        <Trap>If the scenario describes a complete acute abdomen series (2+ abdominal views plus a single-view chest), use <strong>74022</strong> — not a separate 71045 plus an abdominal X-ray code.</Trap>
      </Section>

      <Section n={12} title="Chest CT">
        <CodeList items={[
          ["71250", "CT thorax, without contrast"],
          ["71260", "CT thorax, with contrast"],
          ["71270", "CT thorax, without contrast followed by with contrast"],
          ["71271", "Low-dose CT for lung cancer screening, without contrast"],
          ["71275", "Noncoronary chest CTA"],
        ]} />
        <p style={pStyle}>71270 cannot be reported with 71250, 71260, or 71271. None of 71250/71260/71270/71271 apply to breast CT. Cardiac CT is reported separately, at 75571–75574.</p>
      </Section>

      <Section n={13} title="Spine X-rays">
        <CodeList items={[
          ["72040 / 72050 / 72052", "Cervical: 2–3 views / 4–5 views / 6+ views"],
          ["72070 / 72072 / 72074", "Thoracic: 2 views / 3 views / 4+ views"],
          ["72100 / 72110 / 72114", "Lumbosacral: 2–3 views / minimum 4 views / complete incl. bending, minimum 6 views"],
          ["72120", "Lumbosacral, bending views only: 2–3 views"],
          ["72081 / 72082 / 72083 / 72084", "Entire thoracic + lumbar spine: 1 view / 2–3 views / 4–5 views / 6+ views"],
        ]} />
      </Section>

      <Section n={14} title="Spine CT — Intrathecal vs IV Contrast">
        <p style={pStyle}>Contrast for a spine CT is administered either intrathecally or intravenously, and the two are treated very differently for coding.</p>
        <p style={pStyle}><strong>Intrathecal:</strong> report an additional injection code, such as 61055 or 62284.</p>
        <p style={pStyle}><strong>IV contrast:</strong> the IV injection is already part of the CT procedure — don&apos;t separately code the IV contrast injection just because contrast was used.</p>
      </Section>

      <Section n={15} title="Spine MRI">
        <PatternTable rows={[
          ["Cervical spine MRI", "72141", "72142", "72156"],
          ["Thoracic spine MRI", "72146", "72147", "72157"],
          ["Lumbar spine MRI", "72148", "72149", "72158"],
        ]} />
      </Section>

      <Section n={16} title="Pelvis CT/MRI">
        <PatternTable rows={[
          ["Pelvis CT", "72192", "72193", "72194"],
          ["Pelvis MRI", "72195", "72196", "72197"],
        ]} />
        <Trap>Do not report 72195, 72196, or 72197 in conjunction with 74712/74713 — those are the dedicated fetal MRI codes.</Trap>
      </Section>

      <Section n={17} title="Abdomen + Pelvis CT — Very High Yield">
        <p style={pStyle}>This is one of the highest-risk trap areas in the whole series.</p>
        <PatternTable rows={[
          ["Abdomen CT (standalone)", "74150", "74160", "74170"],
          ["Pelvis CT (standalone)", "72192", "72193", "72194"],
          ["Abdomen + pelvis CT (combined exam)", "74176", "74177", "74178"],
        ]} />
        <Trap>When the documentation represents a <strong>combined</strong> CT abdomen/pelvis exam, don&apos;t report 74150 + 72192 — use the appropriate 74176–74178 code instead. Do not report 74176–74178 with 72192–72194 or 74150–74170, and report only one of 74176/74177/74178 per exam.</Trap>
      </Section>

      <Section n={18} title="CTA Abdomen/Pelvis">
        <CodeList items={[
          ["74175", "CTA abdomen"],
          ["72191", "CTA pelvis"],
          ["74174", "CTA abdomen + pelvis"],
          ["75635", "CTA abdominal aorta + bilateral iliofemoral lower-extremity runoff"],
        ]} />
        <Hack>75635 = &quot;aorta → iliofemoral → legs → runoff.&quot; Whenever a question mentions abdominal aorta plus bilateral iliofemoral lower-extremity runoff, go straight to 75635. It cannot be combined with several of the abdomen/pelvis CTA codes above.</Hack>
      </Section>

      <Section n={19} title="GI Radiology — Contrast Studies">
        <CodeList items={[
          ["74220", "Esophagus, single contrast"],
          ["74221", "Esophagus, double contrast"],
        ]} />
        <Trap>Do not report 74220 with 74221, 74240, or 74246.</Trap>
      </Section>

      <Section n={20} title="Upper GI">
        <CodeList items={[
          ["74240", "Upper GI, single contrast"],
          ["74246", "Upper GI, double contrast"],
          ["74248", "Small intestine follow-through (add-on code, used with 74240 or 74246)"],
        ]} />
      </Section>

      <Section n={21} title="Small Intestine">
        <CodeList items={[
          ["74250", "Small intestine, single contrast"],
          ["74251", "Small intestine, double contrast / enteroclysis"],
          ["74248", "Small intestine follow-through"],
        ]} />
        <Trap>Do not report 74248 with 74250 or 74251.</Trap>
      </Section>

      <Section n={22} title="CT Colonography">
        <CodeList items={[
          ["74261", "Diagnostic CT colonography, without contrast"],
          ["74262", "Diagnostic CT colonography, with contrast"],
          ["74263", "Screening CT colonography"],
        ]} />
        <p style={pStyle}>These should not be reported with the ordinary abdomen/pelvis CT codes, or with each other.</p>
        <Hack>61 = diagnostic without, 62 = diagnostic with, 63 = screening.</Hack>
      </Section>

      <Section n={23} title="Barium Enema / Colon">
        <CodeList items={[
          ["74270", "Colon, single contrast"],
          ["74280", "Colon, double contrast"],
        ]} />
        <p style={pStyle}>These two are mutually exclusive.</p>
      </Section>

      <Section n={24} title="Urinary Tract">
        <CodeList items={[
          ["74400", "Intravenous urography / pyelography"],
          ["74420", "Retrograde urography"],
          ["74425", "Antegrade urography"],
          ["74430", "Cystography"],
          ["74450", "Retrograde urethrocystography"],
          ["74455", "Voiding urethrocystography"],
          ["74485", "Dilation of ureter(s) or urethra with radiological supervision and interpretation"],
        ]} />
      </Section>

      <Section n={25} title="Fetal MRI">
        <CodeList items={[
          ["74712", "Fetal MRI, single or first gestation"],
          ["74713", "Fetal MRI, each additional gestation (add-on, used with 74712)"],
        ]} />
        <p style={pStyle}>Do not report 74712/74713 with 72195–72197. If only the placenta or maternal pelvis is imaged without fetal imaging, use the appropriate pelvic MRI code instead.</p>
      </Section>

      <Section n={26} title="Cardiac MRI">
        <CodeList items={[
          ["75557", "Morphology and function, without contrast"],
          ["75559", "With stress imaging"],
          ["75561", "Without contrast → with contrast"],
          ["75563", "Without/with contrast, with stress imaging"],
          ["75565", "Velocity flow mapping"],
        ]} />
        <p style={pStyle}>Only one procedure from the 75557–75563 series is appropriately reported per session.</p>
      </Section>

      <Section n={27} title="Cardiac CT">
        <CodeList items={[
          ["75571", "CT heart, without contrast, plus quantitative coronary calcium"],
          ["75572", "CT heart with contrast, cardiac structure/morphology"],
          ["75573", "CT heart with contrast, congenital heart disease"],
          ["75574", "CTA heart, coronary arteries and bypass grafts"],
        ]} />
        <p style={pStyle}>Report only one cardiac CT service per encounter — 75571, 75572, 75573, or 75574.</p>
      </Section>

      <Section n={28} title="FFR (Fractional Flow Reserve)">
        <CodeList items={[
          ["75580", "Noninvasive estimate of coronary fractional flow reserve, derived from software analysis of coronary CTA data"],
        ]} />
        <p style={pStyle}>Use 75580 only once per coronary CTA. When performed the same day as coronary CTA, report 75580 together with 75574.</p>
      </Section>

      <Section n={29} title="Vascular Radiology — The Big Concept">
        <p style={pStyle}>Selective vascular catheterization includes the introduction and all lesser-order selective catheterizations used to reach the target vessel. If a third-order artery is selected, you don&apos;t separately code every lesser-order catheterization along the approach.</p>
      </Section>

      <Section n={30} title="Diagnostic Angiography With Intervention">
        <p style={pStyle}>Very high-yield concept: diagnostic angiography is generally <strong>not</strong> separately reportable when it&apos;s simply part of an intervention. The intervention already captures contrast injections, angiography, roadmapping, fluoroscopic guidance, vessel measurement, and post-treatment angiography.</p>
        <p style={pStyle}><strong>When it CAN be separately reported:</strong></p>
        <ul style={{ lineHeight: 1.8, paddingLeft: "22px" }}>
          <li>No prior catheter-based angiographic study exists, a full diagnostic study is performed, and the decision to intervene is based on that study; <strong>or</strong></li>
          <li>A prior study exists, but documentation shows the patient&apos;s condition changed, visualization of anatomy/pathology was inadequate, or a clinical change during the procedure required new evaluation outside the target area.</li>
        </ul>
        <Hack>New information = potentially separately reportable. Ask: was the diagnostic study actually necessary to make or reconsider the intervention decision? If it was merely routine guidance for the intervention, don&apos;t separately report it.</Hack>
      </Section>

      <Section n={31} title="Modifier 59">
        <p style={pStyle}>When qualifying diagnostic angiography is performed in the same session as an intervention, append modifier 59 to the diagnostic radiological supervision and interpretation code(s).</p>
      </Section>

      <Section n={32} title="75774 — Additional Vessel">
        <CodeList items={[
          ["75774", "Each additional vessel studied after the basic examination (add-on code, used with the appropriate initial vessel code)"],
        ]} />
        <p style={pStyle}>Specific limitations apply — for example, it is not used as part of diagnostic angiography of extracranial/intracranial cervicocerebral vessels.</p>
      </Section>

      <Section n={33} title="Diagnostic Venography">
        <p style={pStyle}>The same broad concept as angiography applies to venography: contrast injection, venography, roadmapping, fluoroscopic guidance, vessel measurement, and post-angioplasty/stent venography are not separately reported when they are part of the intervention. Diagnostic venography may be separately reported when the same qualifying circumstances from Section 30 exist (no prior study, prior study inadequate, condition changed, or new evaluation required outside the target area).</p>
      </Section>

      <Section n={34} title="Transcatheter Procedures">
        <p style={pStyle}>Therapeutic transcatheter radiological supervision and interpretation includes contrast injections, angiography/venography, roadmapping, fluoroscopic guidance, vessel measurement, and completion angiography/venography — unless specifically stated otherwise.</p>
      </Section>

      <Section n={35} title="75894">
        <CodeList items={[
          ["75894", "Transcatheter therapy — embolization, with radiological supervision and interpretation"],
        ]} />
        <p style={pStyle}>Multiple procedures are specifically excluded from being reported alongside 75894 — check the exclusion list before combining codes.</p>
      </Section>

      <Section n={36} title="75898 — Follow-up Angiography">
        <CodeList items={[
          ["75898", "Angiography through an existing catheter, for follow-up after transcatheter therapy/embolization/infusion"],
        ]} />
        <Hack>75894 = therapy/embolization. 75898 = follow-up through an existing catheter.</Hack>
      </Section>

      <Section n={37} title="Percutaneous Drainage">
        <CodeList items={[
          ["75989", "Radiological guidance (fluoroscopy, ultrasound, or CT) for percutaneous drainage with catheter placement, including radiological supervision and interpretation"],
        ]} />
        <p style={pStyle}>Numerous procedures should not be reported together with 75989 — check the exclusion list.</p>
      </Section>

      <Section n={38} title="MR Safety — Newer Material">
        <p style={pStyle}>The MR safety section addresses implanted devices and foreign bodies that may create risks in the MR environment.</p>
        <CodeList items={[
          ["76014", "MR safety implant/foreign body assessment by trained clinical staff — initial 15 minutes"],
          ["76015", "Each additional 30 minutes (add-on, used with 76014; do not report more than 3 times per encounter)"],
          ["76016", "MR safety determination by a physician or other qualified health care professional — includes risk/benefit assessment, determination of equipment/expertise required, with written report"],
        ]} />
      </Section>

      <Section n={39} title="MR Safety — Day of Exam">
        <CodeList items={[
          ["76017", "Medical physics examination customization/planning/performance monitoring"],
          ["76018", "Implant electronics preparation"],
          ["76019", "Implant positioning and/or immobilization"],
        ]} />
        <Hack>76014 = staff assessment. 76015 = extra time. 76016 = physician safety determination. 76017 = physics/planning. 76018 = electronics. 76019 = positioning.</Hack>
      </Section>

      <Section n={40} title="76000 — Fluoroscopy">
        <CodeList items={[
          ["76000", "Fluoroscopy (separate procedure), up to 1 hour physician/QHP time"],
        ]} />
        <Trap>The descriptor itself says &quot;separate procedure,&quot; and many procedures already include fluoroscopy. Don&apos;t automatically code 76000 every time fluoroscopy is mentioned.</Trap>
      </Section>

      <Section n={41} title="76140">
        <CodeList items={[
          ["76140", "Consultation on an X-ray examination performed elsewhere, with written report"],
        ]} />
        <p style={pStyle}>This is not simply an ordinary interpretation of your own imaging — it&apos;s a consultation on someone else&apos;s study.</p>
      </Section>

      <Section n={42} title="76380">
        <CodeList items={[
          ["76380", "CT, limited or localized follow-up study"],
        ]} />
        <p style={pStyle}>Keep this mentally separate from the standard diagnostic CT families above.</p>
      </Section>

      <Section n={43} title="76390">
        <CodeList items={[
          ["76390", "Magnetic resonance spectroscopy"],
        ]} />
        <p style={pStyle}>Use the appropriate MRI body-site code for the MRI itself; spectroscopy is a distinct add to ordinary MRI, not a replacement for it.</p>
      </Section>

      <Section n={44} title="Unlisted Radiology Codes">
        <CodeList items={[
          ["76496", "Unlisted fluoroscopic procedure"],
          ["76497", "Unlisted CT procedure"],
          ["76498", "Unlisted MRI procedure"],
          ["76499", "Unlisted diagnostic radiographic procedure"],
        ]} />
      </Section>

      <Section n="✓" title="Part 1 — CPC “Must Know” List">
        <p style={pStyle}>If you&apos;re short on study time, prioritize these:</p>
        <MustKnowGroup title="CT/MRI patterns (without vs with vs without→with)" items={[
          "70450 / 70460 / 70470",
          "71250 / 71260 / 71270",
          "74150 / 74160 / 74170",
          "72192 / 72193 / 72194",
          "74176 / 74177 / 74178",
          "70551 / 70552 / 70553",
        ]} />
        <MustKnowGroup title="CTA / MRA" items={[
          "CTA vs regular CT",
          "MRA vs MRI",
          "74174 vs 74175 vs 72191",
          "75635 runoff",
          "75574 coronary CTA",
        ]} />
        <MustKnowGroup title="Guidance codes" items={[
          "76942 = ultrasound needle guidance",
          "77002 = fluoroscopic needle guidance",
          "77012 = CT needle guidance",
          "77021 = MRI needle guidance",
        ]} />
        <MustKnowGroup title="Don't double-code" items={[
          "Arthrography + 77002",
          "Imaging + 3D rendering when prohibited",
          "Diagnostic angiography that is merely part of an intervention",
          "Fluoroscopy when already included",
          "Combined abdomen/pelvis CT with separate abdomen/pelvis CT codes",
        ]} />
        <MustKnowGroup title="High-yield special codes" items={[
          "70554 vs 70555",
          "75571–75574",
          "75580",
          "76014–76019",
          "76376 vs 76377",
          "74261–74263",
          "74712 / 74713",
        ]} />
      </Section>

      <Section n="🧭" title="The Biggest CPC Strategy for 70K">
        <p style={pStyle}>When you see a radiology question, don&apos;t start by searching your memory for the code number. Run this algorithm instead:</p>
        <p style={{ ...pStyle, fontWeight: 800, textAlign: "center", fontSize: "18px", color: "#6b4226" }}>
          BODY PART → MODALITY → CONTRAST → VIEWS/TECHNIQUE → GUIDANCE → INCLUSION/EXCLUSION
        </p>
        <p style={pStyle}><strong>Example:</strong> &quot;CT abdomen and pelvis performed without contrast.&quot;</p>
        <p style={pStyle}>Don&apos;t think: &quot;What was that abdomen code?&quot; Think instead: Body = abdomen + pelvis → Modality = CT → Contrast = without → Combined examination = yes → Code = <strong>74176</strong>.</p>
        <p style={pStyle}>That approach is far more reliable on exam day than trying to recall isolated numbers.</p>
      </Section>

      <div style={{ marginTop: "34px", display: "flex", flexWrap: "wrap" as const, gap: "16px" }}>
        <Link href="/cpt/radiology/master-reviewer-part-2" style={backLinkStyle}>Continue to Part 2 →</Link>
        <Link href="/cpt/radiology" style={backLinkStyle}>← Back to Radiology (70,000 Series)</Link>
      </div>
    </main>
  );
}
