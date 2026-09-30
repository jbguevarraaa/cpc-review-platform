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
const tipStyle = { background: "#eff6ff", border: "1px solid #bfdbfe", borderLeft: "5px solid #2563eb", borderRadius: "10px", padding: "14px 16px", margin: "14px 0", lineHeight: 1.65 };
const codeListStyle = { listStyle: "none", padding: 0, margin: "12px 0", display: "grid", gap: "8px" };
const codeItemStyle = { display: "flex", gap: "12px", alignItems: "baseline", background: "#faf7f2", border: "1px solid #ece1d1", borderRadius: "8px", padding: "9px 14px" };
const codeChipStyle = { fontWeight: 800, color: "#8b5e3c", minWidth: "84px", fontFamily: "Consolas, monospace" };
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

function Tip({ children }: { children: React.ReactNode }) {
  return <div style={tipStyle}><strong>💡 CPC tip:</strong> {children}</div>;
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

export default function RadiologyMasterReviewerPart2Page() {
  return (
    <main style={mainStyle}>
      <header style={heroStyle}>
        <p style={kickerStyle}>70,000 SERIES · MASTER CPC REVIEWER</p>
        <h1 style={{ margin: 0, fontSize: "clamp(32px, 6vw, 56px)" }}>CPT Radiology Master Reviewer</h1>
        <p style={{ margin: "12px 0 0", fontSize: "20px", lineHeight: 1.5 }}>Part 2 of 2 — Codes 76506–79999</p>
        <p style={{ margin: "6px 0 0", fontSize: "16px", opacity: 0.9 }}>Ultrasound · Guidance · Mammography · Bone/Joint Studies · Radiation Oncology · Nuclear Medicine</p>
      </header>

      <div style={pagerStyle}>
        <Link href="/cpt/radiology/master-reviewer" style={pagerLinkStyle}>← Part 1 (70010–76499)</Link>
        <span style={pagerActiveStyle}>Part 2 (76506–79999)</span>
      </div>

      <nav aria-label="Radiology navigation" style={navStyle}>
        <Link href="/cpt/radiology" style={navLinkStyle}>70,000 Series home</Link>
        <Link href="/cpt/radiology/guidelines" style={navLinkStyle}>Guidelines</Link>
        <Link href="/cpt/radiology/discussion-guide" style={navLinkStyle}>Discussion Guide</Link>
        <Link href="/cpt/radiology/study-tips" style={navLinkStyle}>Study tips &amp; hacks</Link>
        <Link href="/cpt" style={navLinkStyle}>CPT home</Link>
      </nav>

      <section style={introStyle}>
        <strong>How to use this reviewer:</strong> Part 2 covers ultrasound, guidance codes, echocardiography, mammography, bone/joint studies, radiation oncology, and nuclear medicine. Same approach as Part 1 — learn the pattern behind each family instead of memorizing isolated numbers.
      </section>

      <Section n={1} title="Diagnostic Ultrasound — The Most Important Concept">
        <p style={pStyle}>Before looking at the code, ask what type of ultrasound it is: head/neck, chest, abdomen, pelvis, extremity, vascular, obstetrical, or echocardiography. Then ask whether it&apos;s complete, limited, follow-up, Doppler, or guidance. This distinction drives most ultrasound questions.</p>
      </Section>

      <Section n={2} title="Complete vs Limited Ultrasound">
        <p style={pStyle}>Many ultrasound families split into a complete code and a limited code:</p>
        <CodeList items={[
          ["76700 / 76705", "Abdomen — complete vs. limited"],
          ["76856 / 76857", "Pelvis — complete vs. limited"],
          ["76641 / 76642", "Breast — complete vs. limited"],
        ]} />
        <Hack>Complete = all required structures documented. Limited = one organ, one quadrant, one issue, or a focused assessment.</Hack>
        <Trap>&quot;Ultrasound of the gallbladder only&quot; is not a complete abdominal exam — gallbladder-only ≠ complete abdomen, so this is usually <strong>76705</strong> (limited), not 76700.</Trap>
      </Section>

      <Section n={3} title="Abdominal Ultrasound">
        <CodeList items={[
          ["76700", "Complete abdominal ultrasound — evaluates the required abdominal organs"],
          ["76705", "Limited abdominal ultrasound — focused examination"],
        ]} />
        <Tip>Documentation reading &quot;RUQ ultrasound,&quot; &quot;gallbladder ultrasound,&quot; or &quot;liver ultrasound only&quot; points to <strong>limited</strong>, not complete.</Tip>
      </Section>

      <Section n={4} title="Retroperitoneal Ultrasound">
        <CodeList items={[
          ["76770", "Complete retroperitoneal ultrasound"],
          ["76775", "Limited retroperitoneal ultrasound"],
        ]} />
        <p style={pStyle}>Common structures assessed: kidneys, aorta, IVC, bladder.</p>
        <Hack>Retroperitoneal = kidneys + aorta territory.</Hack>
      </Section>

      <Section n={5} title="Breast Ultrasound">
        <CodeList items={[
          ["76641", "Complete breast ultrasound"],
          ["76642", "Limited breast ultrasound"],
        ]} />
        <Trap>Don&apos;t default to &quot;complete&quot; just because the breast was scanned — the documentation must actually support a complete evaluation.</Trap>
      </Section>

      <Section n={6} title="Pelvic Ultrasound">
        <CodeList items={[
          ["76856", "Complete pelvic ultrasound"],
          ["76857", "Limited pelvic ultrasound"],
          ["76830", "Transvaginal ultrasound"],
        ]} />
        <Tip>High-yield distinction: transabdominal vs. transvaginal are different procedures — read the approach carefully, not just &quot;pelvic ultrasound.&quot;</Tip>
      </Section>

      <Section n={7} title="Obstetrical Ultrasound">
        <p style={pStyle}>One of the most testable ultrasound areas.</p>
        <CodeList items={[
          ["76801", "First trimester — first gestation"],
          ["76802", "First trimester — each additional gestation (add-on)"],
          ["76805", "Second/third trimester — complete fetal/anatomic evaluation"],
          ["76810", "Second/third trimester — each additional fetus (add-on)"],
          ["76816", "Follow-up examination"],
          ["76817", "Transvaginal OB ultrasound"],
        ]} />
        <Hack>Initial OB = 76801. Complete anatomy scan = 76805. Follow-up growth scan = 76816.</Hack>
        <Trap>&quot;Patient returns for interval fetal growth evaluation&quot; is a classic trap toward 76805 — but 76805 is the complete anatomic study. A growth follow-up is usually <strong>76816</strong>.</Trap>
      </Section>

      <Section n={8} title="Fetal Biophysical Profile">
        <CodeList items={[
          ["76818", "Biophysical profile without NST"],
          ["76819", "Biophysical profile with NST"],
        ]} />
        <Hack>NST present → 76819. No NST → 76818.</Hack>
      </Section>

      <Section n={9} title="Fetal Doppler">
        <CodeList items={[
          ["76820", "Umbilical artery Doppler"],
          ["76821", "Middle cerebral artery Doppler"],
          ["76825–76828", "Fetal echocardiography family"],
        ]} />
        <Tip>Recognize that Doppler studies are distinct from ordinary ultrasound — they measure flow, not just anatomy.</Tip>
      </Section>

      <Section n={10} title="Ultrasound Guidance">
        <CodeList items={[
          ["76942", "Ultrasound guidance for needle placement, biopsy, aspiration, or injection — includes imaging supervision and interpretation"],
        ]} />
        <Hack>&quot;Ultrasound-guided injection&quot; → think 76942, then check whether it&apos;s separately reportable.</Hack>
        <Trap>Don&apos;t automatically code 76942 — many procedures already include guidance. Always check the inclusion/exclusion notes for the primary procedure first.</Trap>
      </Section>

      <Section n={11} title="Vascular Access Guidance">
        <CodeList items={[
          ["76937", "Ultrasound guidance for vascular access"],
        ]} />
        <p style={pStyle}>Requires evaluation of the access site, documentation, and real-time visualization.</p>
        <Tip>Documentation matters here — simply mentioning that ultrasound was used is not enough to support 76937.</Tip>
      </Section>

      <Section n={12} title="Echocardiography">
        <p style={pStyle}>One of the most heavily tested ultrasound categories.</p>
        <CodeList items={[
          ["93306", "Transthoracic echo, complete, with spectral Doppler and color flow"],
          ["93307", "Transthoracic echo, complete, without the Doppler package"],
          ["93308", "Transthoracic echo, limited"],
        ]} />
        <Hack>93306 is the most common &quot;complete&quot; echo code.</Hack>
        <Trap>If color flow and Doppler are documented, don&apos;t downcode to 93307 — that code is specifically for a complete echo without the Doppler package.</Trap>
      </Section>

      <Section n={13} title="Stress Echocardiography">
        <CodeList items={[
          ["93350", "Stress echocardiography"],
          ["93351", "Stress echocardiography with supervision and interpretation"],
        ]} />
      </Section>

      <Section n={14} title="Transesophageal Echo (TEE)">
        <CodeList items={[
          ["93312", "TEE with image acquisition"],
          ["93314", "TEE interpretation only"],
          ["93315–93318", "Specialized TEE services"],
        ]} />
        <Tip>Know the difference between a complete service and an interpretation-only service — it&apos;s a frequent exam distinction.</Tip>
      </Section>

      <Section n={15} title="Doppler Studies">
        <CodeList items={[
          ["93320", "Spectral Doppler (add-on)"],
          ["93321", "Limited Doppler (add-on)"],
          ["93325", "Color flow Doppler mapping (add-on)"],
        ]} />
        <Hack>&quot;Color flow&quot; in the documentation → think 93325.</Hack>
      </Section>

      <Section n={16} title="Mammography">
        <p style={pStyle}>Extremely testable.</p>
        <CodeList items={[
          ["77067", "Screening mammography, bilateral"],
          ["77065", "Diagnostic mammography, unilateral"],
          ["77066", "Diagnostic mammography, bilateral"],
        ]} />
        <Hack>Screening = the highest of these three numbers (77067).</Hack>
        <Trap>When a screening mammogram discovers an abnormality, the correct code depends on the specific encounter circumstances — read the scenario carefully rather than defaulting to one code.</Trap>
      </Section>

      <Section n={17} title="Breast MRI">
        <CodeList items={[
          ["77046", "Breast MRI, without contrast"],
          ["77047", "Breast MRI, with contrast"],
          ["77048", "Breast MRI, without then with contrast"],
        ]} />
        <p style={pStyle}>Same without / with / without-then-with pattern seen throughout the MRI codes in Part 1.</p>
      </Section>

      <Section n={18} title="Bone & Joint Studies">
        <p style={pStyle}>Often overlooked by students.</p>
        <CodeList items={[
          ["77071", "Manual stress radiography"],
          ["77072", "Bone age studies"],
          ["77073", "Bone length studies"],
          ["77074", "Skeletal survey"],
          ["77075", "Metastatic survey"],
          ["77076", "Radiologic examination for localization of a foreign body"],
        ]} />
        <Tip>Bone age studies (77072) are a recurring favorite in CPC practice questions.</Tip>
      </Section>

      <Section n={19} title="DXA Scans">
        <CodeList items={[
          ["77080", "Axial skeleton DXA"],
          ["77081", "Peripheral DXA"],
        ]} />
        <Hack>77080 is the most common osteoporosis screening code.</Hack>
        <Trap>Axial vs. peripheral matters — don&apos;t assume 77080 just because it&apos;s a DXA scan.</Trap>
      </Section>

      <Section n={20} title="Vertebral Fracture Assessment">
        <CodeList items={[
          ["77085", "DXA plus vertebral fracture assessment"],
        ]} />
        <Tip>This is not the same as an ordinary DXA study — it specifically bundles in the vertebral fracture assessment.</Tip>
      </Section>

      <Section n={21} title="Fluoroscopic Guidance">
        <CodeList items={[
          ["77002", "Fluoroscopic guidance for needle placement"],
          ["77003", "Fluoroscopic guidance for spinal/paraspinal injections"],
        ]} />
        <p style={pStyle}>This is the same guidance-code family introduced in Part 1 — worth memorizing as a single table:</p>
        <CodeList items={[
          ["76942", "Ultrasound guidance"],
          ["77002", "Fluoroscopic guidance"],
          ["77012", "CT guidance"],
          ["77021", "MRI guidance"],
        ]} />
      </Section>

      <Section n={22} title="CT Guidance">
        <CodeList items={[
          ["77012", "CT guidance for needle placement — includes supervision and interpretation"],
        ]} />
      </Section>

      <Section n={23} title="MRI Guidance">
        <CodeList items={[
          ["77021", "MRI guidance for needle placement — includes supervision and interpretation"],
        ]} />
      </Section>

      <Section n={24} title="Radiation Oncology">
        <p style={pStyle}>Many CPC candidates struggle here — don&apos;t try to memorize everything. Understand the workflow instead:</p>
        <ol style={{ lineHeight: 1.9, paddingLeft: "22px" }}>
          <li>Consultation</li>
          <li>Simulation</li>
          <li>Treatment planning</li>
          <li>Dosimetry</li>
          <li>Treatment delivery</li>
          <li>Management</li>
        </ol>
      </Section>

      <Section n={25} title="Clinical Treatment Planning">
        <CodeList items={[
          ["77261", "Simple"],
          ["77262", "Intermediate"],
          ["77263", "Complex"],
        ]} />
        <Hack>Complexity increases in order: 77261 → 77263.</Hack>
      </Section>

      <Section n={26} title="Simulation">
        <CodeList items={[
          ["77280", "Simple simulation"],
          ["77285", "Intermediate simulation"],
          ["77290", "Complex simulation"],
        ]} />
        <Tip>Questions often test which complexity level the documentation supports.</Tip>
      </Section>

      <Section n={27} title="Dosimetry">
        <CodeList items={[
          ["77300", "Basic dosimetry calculation"],
          ["77334", "Treatment devices"],
          ["77336", "Continuing medical physics consultation"],
          ["77370", "Special medical radiation physics consultation"],
        ]} />
        <Tip>77336 is a very common exam code — expect it to show up.</Tip>
      </Section>

      <Section n={28} title="IMRT (Intensity Modulated Radiation Therapy)">
        <CodeList items={[
          ["77301", "IMRT planning"],
          ["77418", "IMRT treatment delivery (older CPC materials may reference this frequently)"],
        ]} />
        <Hack>Planning → 77301. Delivery → the treatment code family (e.g., 77418).</Hack>
      </Section>

      <Section n={29} title="Stereotactic Radiosurgery">
        <CodeList items={[
          ["77371", "Gamma Knife"],
          ["77372", "Linear accelerator"],
          ["77373", "Fractionated treatment"],
        ]} />
        <Tip>Know that all three are radiosurgery codes distinguished by delivery method.</Tip>
      </Section>

      <Section n={30} title="Radiation Treatment Management">
        <CodeList items={[
          ["77427", "Radiation treatment management, typically weekly"],
        ]} />
        <Tip>A CPC favorite — this appears frequently in practice exams.</Tip>
      </Section>

      <Section n={31} title="Brachytherapy">
        <p style={pStyle}>Internal radiation treatment, covered broadly by 77750–77799. Rather than memorizing every code, focus on the concept: source application, loading, and management.</p>
      </Section>

      <Section n={32} title="Nuclear Medicine">
        <p style={pStyle}>A very testable section. Core concept: a radioactive material is administered, and then imaging occurs.</p>
      </Section>

      <Section n={33} title="Thyroid Uptake">
        <CodeList items={[
          ["78012", "Thyroid uptake, single determination"],
          ["78013", "Thyroid uptake, multiple determinations"],
        ]} />
        <Tip>Thyroid questions appear commonly on the exam.</Tip>
      </Section>

      <Section n={34} title="Thyroid Imaging">
        <CodeList items={[
          ["78014", "Thyroid imaging with uptake measurements"],
        ]} />
      </Section>

      <Section n={35} title="Brain Imaging">
        <CodeList items={[
          ["78607", "Brain imaging with SPECT"],
        ]} />
        <p style={pStyle}>A common board-review topic.</p>
      </Section>

      <Section n={36} title="Bone Scans">
        <CodeList items={[
          ["78306", "Whole-body bone scan"],
        ]} />
        <Hack>Bone metastasis evaluation often uses 78306.</Hack>
      </Section>

      <Section n={37} title="Cardiac Nuclear Studies">
        <CodeList items={[
          ["78451–78454", "Myocardial perfusion studies"],
          ["78452", "Very commonly tested"],
        ]} />
        <Tip>When nuclear cardiology appears in a question, look for the keywords stress, rest, and perfusion.</Tip>
      </Section>

      <Section n={38} title="Gastric Emptying Studies">
        <CodeList items={[
          ["78264", "Solid meal gastric emptying study"],
        ]} />
        <Tip>Not all nuclear medicine questions are cardiac — recognize the study purpose from the scenario.</Tip>
      </Section>

      <Section n={39} title="Hepatobiliary Studies">
        <CodeList items={[
          ["78226", "Hepatobiliary system imaging, with pharmacologic intervention"],
        ]} />
        <Tip>Often used in gallbladder evaluation.</Tip>
      </Section>

      <Section n={40} title="PET Scans">
        <p style={pStyle}>Extremely important.</p>
        <CodeList items={[
          ["78811–78816", "PET imaging — different body regions"],
          ["78830–78832", "Limited PET studies"],
        ]} />
        <Hack>PET codes fall in the 788xx range.</Hack>
        <Trap>Always determine the scope of the study: whole body, skull base to mid-thigh, or a limited region — the wrong scope assumption is an easy point to lose.</Trap>
      </Section>

      <Section n={41} title="PET/CT">
        <p style={pStyle}>Many PET services now include a CT component as part of the same code. Read the descriptor carefully, and don&apos;t automatically report a separate CT code on top of a combined PET/CT code.</p>
      </Section>

      <Section n={42} title="Ultrasound — Required Elements for a &ldquo;Complete&rdquo; Exam">
        <p style={pStyle}>For every body area that has both a &ldquo;complete&rdquo; and a &ldquo;limited&rdquo; ultrasound code, the same rule applies: ALL of the elements comprising a complete exam must be described in the report, OR the report must state why an element couldn&apos;t be visualized. If FEWER than the required elements are documented, the encounter is coded as the limited exam instead — even if the sonographer intended a complete study.</p>
        <p style={pStyle}>The body areas with a complete/limited split are: Breast, Abdomen, Retroperitoneum, Pelvic (Obstetrical and Non-Obstetrical), and Extremities. Their required elements:</p>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "12px" }}>
            <thead>
              <tr>
                <th style={{ border: "1px solid #e2d9c8", padding: "10px 12px", textAlign: "left" as const, fontSize: "14px", background: "#faf3e8", color: "#6b4226" }}>Exam type</th>
                <th style={{ border: "1px solid #e2d9c8", padding: "10px 12px", textAlign: "left" as const, fontSize: "14px", background: "#faf3e8", color: "#6b4226" }}>Required elements for &ldquo;complete&rdquo;</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Breast (76641)", "All four quadrants of the breast, retroareolar region, and axilla (if performed)"],
                ["Abdomen (76700)", "Liver, gallbladder, common bile duct, pancreas, spleen, kidneys, upper abdominal aorta, IVC, and any abnormality"],
                ["Retroperitoneum (76770)", "Kidneys, abdominal aorta, common iliac artery origins, IVC, and any abnormality — OR kidneys, urinary bladder, and any urinary tract pathology"],
                ["OB, 1st trimester (76801)", "Number of gestational sacs and fetuses; gestational sac/fetal measurements; survey of visible fetal and placental anatomic structure; qualitative amniotic fluid volume/gestational sac shape assessment; exam of maternal uterus and adnexa"],
                ["OB, 2nd/3rd trimester (76805)", "Number of fetuses and amniotic/chorionic sacs; measurements appropriate for gestational age; survey of intracranial/spinal/abdominal anatomy; survey of the 4-chambered heart; survey of umbilical cord insertion site; survey of placenta location; amniotic fluid assessment; exam of maternal adnexa (when visible)"],
                ["OB, detailed (76811)", "All 8 elements of 76805/76810 PLUS: fetal brain/ventricles evaluation, face evaluation, heart/outflow tract evaluation, chest anatomy, abdominal organ-specific anatomy, limbs evaluation, umbilical cord and placenta evaluation, and other fetal anatomy as indicated"],
                ["Female, non-OB (76856)", "Description and measurement of the uterus and adnexal structures, measurement of the endometrium, measurement of the bladder (when applicable), and description of any pelvic pathology"],
                ["Male, non-OB (76856)", "Evaluation and measurement of the urinary bladder (when applicable), evaluation of the prostate and seminal vesicles, and description of any pelvic pathology"],
                ["Extremity (76881)", "Evaluation of muscles, tendons, joints, other soft tissue structures, and any identifiable abnormality"],
              ].map(([exam, elements]) => (
                <tr key={exam}>
                  <td style={{ border: "1px solid #e2d9c8", padding: "10px 12px", fontSize: "14px", fontWeight: 800, color: "#6b4226" }}>{exam}</td>
                  <td style={{ border: "1px solid #e2d9c8", padding: "10px 12px", fontSize: "14px" }}>{elements}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Hack>The detailed OB exam (76811) is never a stand-alone concept to memorize separately — it&apos;s simply &ldquo;76805&apos;s 8 elements, PLUS 8 more.&rdquo; If a question lists all 16, that&apos;s your signal for 76811, not 76805.</Hack>
        <Trap>A chest ultrasound and a complete male ultrasound both hinge on documentation completeness the same way every other complete/limited pair does — if a required element is missing from the note (and no reason is given for why it couldn&apos;t be seen), drop down to the limited code even if the sonographer calls it &ldquo;complete&rdquo; in the header.</Trap>
      </Section>

      <Section n={43} title="Ultrasound Guidance Requirements &amp; Intra-Articular Injection Reporting">
        <p style={pStyle}>Ultrasound guidance procedures (76942 and similar) require two things: permanently recorded images of the site being localized, AND a documented description of the localization process. If an ultrasound is performed without a thorough evaluation of the organ/anatomic region, without image documentation, or without a final written report, the service is NOT separately reportable.</p>
        <p style={pStyle}><strong>Intra-articular injections combined with imaging:</strong></p>
        <CodeList items={[
          ["Joint injection + radiographic arthrography", "Report the joint injection code AND the appropriate arthrography S&amp;I (supervision and interpretation) code — the arthrography S&amp;I code already includes any fluoroscopy used"],
          ["Joint injection + CT or MR arthrography", "Report the joint injection code, the appropriate CT or MR code, AND the appropriate imaging guidance code — three codes, not two, since CT/MR arthrography guidance isn't bundled into the CT/MR code itself the way fluoroscopy is bundled into arthrography S&amp;I"],
        ]} />
        <Trap>Don&apos;t treat these two intra-articular scenarios as identical — radiographic arthrography folds guidance into one S&amp;I code, but CT/MR arthrography needs its own separate third code for guidance.</Trap>
      </Section>

      <Section n={44} title="Radiation Treatment Management — Professional, Global, or Technical?">
        <p style={pStyle}>Every radiation oncology service on the &ldquo;Radiation Management and Treatment Table&rdquo; falls into one of three billing categories, and this classification is a direct exam favorite:</p>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "12px" }}>
            <thead>
              <tr>
                <th style={{ border: "1px solid #e2d9c8", padding: "10px 12px", textAlign: "left" as const, fontSize: "14px", background: "#faf3e8", color: "#6b4226" }}>Category</th>
                <th style={{ border: "1px solid #e2d9c8", padding: "10px 12px", textAlign: "left" as const, fontSize: "14px", background: "#faf3e8", color: "#6b4226" }}>Code type</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Clinical Treatment Planning (77261–77263)", "Professional only"],
                ["Simulation (77280–77290)", "Global (append modifier 26 or TC as required)"],
                ["Medical Radiation Physics, Dosimetry, Treatment Devices &amp; Special Services (77300–77370)", "Global (append modifier 26 or TC as required)"],
                ["Treatment Delivery Services (77401–77525)", "Technical only"],
                ["Radiation Treatment Management (77427–77499)", "Professional only"],
              ].map(([cat, type]) => (
                <tr key={cat}>
                  <td style={{ border: "1px solid #e2d9c8", padding: "10px 12px", fontSize: "14px" }}>{cat}</td>
                  <td style={{ border: "1px solid #e2d9c8", padding: "10px 12px", fontSize: "14px", fontWeight: 800, color: "#6b4226" }}>{type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Hack>Only two categories are &ldquo;Professional&rdquo; only, and they bookend the whole workflow: Clinical Treatment Planning (the start) and Radiation Treatment Management (the ongoing oversight). Everything in between — simulation, physics/dosimetry, and delivery — has a technical component, since it involves equipment/staff time, not just physician judgment.</Hack>
      </Section>

      <Section n={45} title="Radiation Treatment Management — Counting Fractions &amp; What's Packaged">
        <p style={pStyle}>Per the CPT guideline: &ldquo;Radiation treatment management is reported in units of five fractions or treatment sessions, regardless of the actual time period in which the services are furnished.&rdquo; The fractions do NOT need to be furnished on consecutive days.</p>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "12px" }}>
            <thead>
              <tr>
                <th style={{ border: "1px solid #e2d9c8", padding: "10px 12px", textAlign: "left" as const, fontSize: "14px", background: "#faf3e8", color: "#6b4226" }}>Fractions/treatments</th>
                <th style={{ border: "1px solid #e2d9c8", padding: "10px 12px", textAlign: "left" as const, fontSize: "14px", background: "#faf3e8", color: "#6b4226" }}>Code reported</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1–2 fractions", "77431 (not separately reported as 77427)"],
                ["3–4 fractions", "77427 × 1"],
                ["5 fractions", "77427 × 1"],
                ["6–7 fractions", "77427 × 1"],
                ["8–9 fractions", "77427 × 2"],
                ["10 fractions", "77427 × 2"],
              ].map(([count, code]) => (
                <tr key={count}>
                  <td style={{ border: "1px solid #e2d9c8", padding: "10px 12px", fontSize: "14px" }}>{count}</td>
                  <td style={{ border: "1px solid #e2d9c8", padding: "10px 12px", fontSize: "14px", fontFamily: "Consolas, monospace", fontWeight: 800, color: "#6b4226" }}>{code}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Trap>3–4 fractions beyond a completed multiple of five still round UP to another full unit of 77427 — but only 1–2 fractions beyond a multiple of five are dropped and not separately reported. This asymmetry (round up at 3, not at 1–2) is a classic exam trap.</Trap>
        <p style={pStyle}><strong>What's packaged into radiation treatment management</strong> (never billed as a separate E/M visit): the physician&apos;s medical evaluation and management furnished for each RTM reporting period is included in the RTM code itself. This typically covers: assessment of the patient&apos;s response to treatment; coordination of care; review of imaging and/or lab test results; review of port images; review of dosimetry, dose delivery, and treatment parameters; and review of patient treatment set-up.</p>
        <p style={pStyle}><strong>What's packaged into 77469</strong> (intraoperative radiation treatment management): code 77469 represents ONLY the intraoperative session management — it does not include medical evaluation and management outside of that specific intraoperative session. Any additional management furnished outside the intraoperative session is reported separately.</p>
      </Section>

      <Section n={46} title="Nuclear Medicine — Grouping &amp; What's Separately Reportable">
        <p style={pStyle}>Nuclear Medicine services are grouped into two major categories by code range:</p>
        <CodeList items={[
          ["78012–78999", "Diagnostic nuclear medicine"],
          ["79005–79999", "Therapeutic nuclear medicine"],
        ]} />
        <p style={pStyle}>Nuclear medicine service codes may be reported independently, or together with diagnostic work-up and/or follow-up care service codes.</p>
        <p style={pStyle}><strong>NOT packaged — reported separately:</strong></p>
        <CodeList items={[
          ["HCPCS supply code", "Supply of the radiopharmaceutical or drug is explicitly excluded from the listed nuclear medicine procedures — always reported separately with the appropriate supply code, in addition to the procedure code"],
        ]} />
        <p style={pStyle}><strong>NOT packaged specifically to CV System Nuclear Medicine:</strong></p>
        <CodeList items={[
          ["93015–93018", "When myocardial perfusion or cardiac blood pool imaging studies are performed during exercise and/or pharmacologic stress, the appropriate stress testing code from this series is reported IN ADDITION to the imaging code — it is never bundled into the nuclear cardiology code"],
        ]} />
        <Hack>Two different &ldquo;packaging&rdquo; questions live in this chapter — don&apos;t conflate them. General Nuclear Medicine packaging is about the radiopharmaceutical SUPPLY (always separate). CV-specific packaging is about the STRESS TEST (always separate when stress was used to obtain the images).</Hack>
      </Section>

      <Section n="✓" title="Part 2 — CPC “Must Know” List">
        <p style={pStyle}>If you had to memorize this list first before the CPC exam:</p>
        <MustKnowGroup title="Ultrasound" items={[
          "76700 vs 76705",
          "76770 vs 76775",
          "76641 vs 76642",
          "76801",
          "76805 vs 76811 (8 elements vs. those 8 plus 8 more)",
          "76816",
          "76818 vs 76819",
          "Required elements per body area — complete only counts if fully documented",
        ]} />
        <MustKnowGroup title="Radiation Treatment Management specifics" items={[
          "Clinical Treatment Planning & RTM = Professional only; Delivery = Technical only",
          "5 fractions = 1 unit of 77427; 3–4 over a multiple of 5 rounds up; 1–2 over does not",
          "77469 = intraoperative session only, nothing outside that session",
        ]} />
        <MustKnowGroup title="Nuclear Medicine packaging" items={[
          "Radiopharmaceutical/drug supply is never bundled — always its own HCPCS code",
          "93015–93018 stress testing is never bundled into CV nuclear medicine codes",
        ]} />
        <MustKnowGroup title="Guidance" items={[
          "76937",
          "76942",
          "77002",
          "77012",
          "77021",
        ]} />
        <MustKnowGroup title="Echo" items={[
          "93306",
          "93307",
          "93308",
          "93320",
          "93325",
        ]} />
        <MustKnowGroup title="Mammography" items={[
          "77065",
          "77066",
          "77067",
        ]} />
        <MustKnowGroup title="DXA" items={[
          "77080",
          "77081",
          "77085",
        ]} />
        <MustKnowGroup title="Radiation Oncology" items={[
          "77261–77263",
          "77280–77290",
          "77300",
          "77336",
          "77370",
          "77427",
        ]} />
        <MustKnowGroup title="Nuclear Medicine" items={[
          "78012",
          "78013",
          "78306",
          "78452",
          "78607",
          "78811–78816",
        ]} />
      </Section>

      <Section n="🧭" title="Final CPC Exam Strategy for the Entire 70K Series">
        <p style={pStyle}>Never start with the code. Work through this sequence instead:</p>
        <ol style={{ lineHeight: 1.9, paddingLeft: "22px" }}>
          <li>What body part?</li>
          <li>What modality? (X-ray, CT, MRI, MRA, ultrasound, nuclear medicine)</li>
          <li>Contrast? (without, with, without → with)</li>
          <li>Complete or limited?</li>
          <li>Guidance? (US, fluoro, CT, MRI)</li>
          <li>Is something already included?</li>
          <li>Is there a &quot;do not report&quot; note?</li>
        </ol>
        <p style={pStyle}>Follow that sequence and you&apos;ll answer most 70,000-series CPC questions correctly, even without recalling the exact code number.</p>
      </Section>

      <div style={{ marginTop: "34px", display: "flex", flexWrap: "wrap" as const, gap: "16px" }}>
        <Link href="/cpt/radiology/master-reviewer" style={backLinkStyle}>← Back to Part 1</Link>
        <Link href="/cpt/radiology" style={backLinkStyle}>← Back to Radiology (70,000 Series)</Link>
      </div>
    </main>
  );
}
