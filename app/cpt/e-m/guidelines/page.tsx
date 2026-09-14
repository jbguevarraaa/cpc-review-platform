import Link from "next/link";

const settings = [
  ["Office or outpatient visits", "Care in clinics, physician offices, or outpatient facilities."],
  ["Hospital observation services", "Care for patients being observed in a hospital setting."],
  ["Hospital inpatient services", "Care for patients formally admitted to the hospital."],
  ["Consultations", "When one physician or qualified health care professional seeks advice from another."],
  ["Emergency department services", "Services for urgent medical situations."],
  ["Nursing facility services", "Care provided in a nursing home or other nursing facility."],
  ["Domiciliary care services", "Home-based care provided outside an inpatient setting."],
  ["Home services", "Medical visits performed at the patient's residence."],
];

const components = [
  ["History", "Gathering information about the patient's medical background, symptoms, and relevant details."],
  ["Examination", "Physically assessing the patient to identify signs and symptoms."],
  ["Medical decision making", "Determining the appropriate course of action based on the patient's condition."],
];

export default function EMGuidelinesPage() {
  return (
    <main style={{ maxWidth: "1180px", margin: "0 auto", padding: "32px 24px 56px", color: "#17212b", background: "#f7faf9", minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
      <header style={{ background: "linear-gradient(135deg, #12343b, #0f766e)", color: "white", padding: "42px 44px", borderRadius: "18px", marginBottom: "28px", boxShadow: "0 12px 28px rgba(15,118,110,0.2)" }}>
        <p style={{ margin: "0 0 10px", color: "#b7f7e8", fontWeight: 700 }}>CODEMED MASTERY · PART 1</p>
        <h1 style={{ fontSize: "clamp(38px, 6vw, 64px)", margin: 0, letterSpacing: "0.02em" }}>E/M GUIDELINES</h1>
        <p style={{ fontSize: "21px", margin: "12px 0 0", maxWidth: "720px" }}>Evaluation and Management codes, settings, components, and patient-status rules.</p>
      </header>

      <section style={{ background: "#fff7df", border: "1px solid #f2d58a", borderLeft: "7px solid #d97706", borderRadius: "12px", padding: "22px 24px", marginBottom: "28px" }}>
        <h2 style={{ margin: "0 0 8px", color: "#92400e" }}>Part 1: Core Orientation</h2>
        <p style={{ margin: 0, lineHeight: 1.65 }}>E/M services describe physician or other qualified health care professional work used to evaluate a patient and determine the best course of care. This reviewer follows the supplied slide content; the transcript is used to explain why each rule matters for CPC study.</p>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "30px", marginBottom: "14px" }}>Know the Code Family</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "14px" }}>
          <div style={statStyle}><span style={labelStyle}>E/M code range</span><strong style={numberStyle}>99202–99499</strong></div>
          <div style={statStyle}><span style={labelStyle}>Why listed first?</span><strong style={{ fontSize: "20px", lineHeight: 1.3 }}>Used across specialties</strong></div>
          <div style={statStyle}><span style={labelStyle}>Coding focus in this lesson</span><strong style={{ fontSize: "20px", lineHeight: 1.3 }}>MDM and time</strong></div>
        </div>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "30px", marginBottom: "14px" }}>Where E/M Services Apply</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(245px, 1fr))", gap: "14px" }}>
          {settings.map(([title, detail]) => <article key={title} style={cardStyle}><h3 style={{ margin: "0 0 8px", color: "#0f766e", fontSize: "19px" }}>{title}</h3><p style={{ margin: 0, lineHeight: 1.55 }}>{detail}</p></article>)}
        </div>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "30px", marginBottom: "14px" }}>Three Essential Components</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "14px" }}>
          {components.map(([title, detail], index) => <article key={title} style={{ ...cardStyle, borderTop: "5px solid #0f766e" }}><span style={{ color: "#b45309", fontWeight: 800 }}>0{index + 1}</span><h3 style={{ margin: "6px 0 8px", fontSize: "21px" }}>{title}</h3><p style={{ margin: 0, lineHeight: 1.55 }}>{detail}</p></article>)}
        </div>
        <div style={{ marginTop: "16px", background: "#e0f2fe", border: "1px solid #7dd3fc", borderRadius: "12px", padding: "18px 22px" }}><strong>Exam checkpoint:</strong> The transcript emphasizes checking <strong>medical decision making (MDM) and time</strong> when selecting the E/M service level for this lesson. History and examination remain essential E/M components, but MDM and time are the highlighted coding decision points.</div>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "30px", marginBottom: "14px" }}>New vs. Established Patient</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "16px" }}>
          <article style={{ ...cardStyle, background: "#eff6ff", borderColor: "#bfdbfe" }}><h3 style={{ marginTop: 0, color: "#1d4ed8" }}>New patient</h3><p style={{ lineHeight: 1.65 }}>A patient who has not received professional services from the physician, or another physician of the same specialty in the same group practice, within the past three years.</p><p style={tipStyle}>Memory aid: no qualifying service in the prior 3 years.</p></article>
          <article style={{ ...cardStyle, background: "#ecfdf5", borderColor: "#a7f3d0" }}><h3 style={{ marginTop: 0, color: "#047857" }}>Established patient</h3><p style={{ lineHeight: 1.65 }}>A patient who has received professional services from the physician, or another physician in the same group and same specialty, within the prior three years.</p><p style={tipStyle}>Memory aid: qualifying service within the prior 3 years.</p></article>
        </div>
        <div style={{ ...cardStyle, marginTop: "16px" }}><h3 style={{ marginTop: 0 }}>Decision-tree method</h3><ol style={{ lineHeight: 1.7, paddingLeft: "22px", marginBottom: 0 }}><li>Ask whether the patient received a professional service from the physician or same-specialty physician in the same group within the past three years.</li><li>If no, classify the patient as new.</li><li>If yes, confirm the exact same specialty. If the specialty does not match, classify the patient as new.</li><li>If the physician, group, and specialty criteria match, classify the patient as established.</li></ol></div>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "30px", marginBottom: "14px" }}>Outpatient vs. Inpatient</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "16px" }}>
          <article style={{ ...cardStyle, borderTop: "5px solid #2563eb" }}><h3 style={{ color: "#1d4ed8", marginTop: 0 }}>Outpatient coding</h3><ul style={{ lineHeight: 1.7, paddingLeft: "21px", marginBottom: 0 }}><li>The patient receives treatment but is not officially admitted.</li><li>Usually a single visit lasting a few hours, generally 24 hours or less.</li><li>Emergency-room care remains outpatient even if the patient spends the night, according to the supplied lesson.</li></ul></article>
          <article style={{ ...cardStyle, borderTop: "5px solid #b45309" }}><h3 style={{ color: "#92400e", marginTop: 0 }}>Inpatient coding</h3><ul style={{ lineHeight: 1.7, paddingLeft: "21px", marginBottom: 0 }}><li>The patient is officially admitted under a physician's order.</li><li>The patient remains inpatient until one day before discharge, as stated in the lesson.</li><li>Examples include acute and long-term care hospitals, skilled nursing facilities, hospices, and home health services.</li></ul></article>
        </div>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "30px", marginBottom: "14px" }}>Part 3: Hospital Transitions, Discharge, and Consultations</h2>
        <div style={{ display: "grid", gap: "16px" }}>
          <article style={{ ...cardStyle, borderLeft: "6px solid #dc2626" }}>
            <h3 style={{ marginTop: 0, color: "#b91c1c" }}>Outpatient to inpatient or observation</h3>
            <p style={{ lineHeight: 1.65 }}>
              When a patient is admitted to inpatient or observation status during an encounter that began in another site of service, such as an office, emergency department, or nursing facility, the initial-site E/M service may be separately reported when it is significant and separately identifiable.
            </p>
            <div style={ruleStyle}>
              <strong>Exam rule:</strong> Report both the qualifying outpatient service and the initial inpatient or observation service. The supplied lesson identifies modifier <strong>25</strong> on the outpatient service. Do not use modifier 51 with E/M codes.
            </div>
            <p style={{ marginBottom: 0, lineHeight: 1.6 }}><strong>Photo example:</strong> Alan's office service and subsequent initial hospital service are reported together as <strong>99204-25, 99222</strong> in the source example.</p>
          </article>

          <article style={{ ...cardStyle, borderLeft: "6px solid #d97706" }}>
            <h3 style={{ marginTop: 0, color: "#92400e" }}>Same-day admission and discharge</h3>
            <p style={{ lineHeight: 1.65 }}>
              The supplied guideline identifies codes <strong>99234–99236</strong> for hospital inpatient or observation care that includes admission and discharge on the same date, based on straightforward or low, moderate, or high MDM.
            </p>
            <div style={codeGridStyle}>
              <span><strong>99234</strong><br />Straightforward or low MDM</span>
              <span><strong>99235</strong><br />Moderate MDM</span>
              <span><strong>99236</strong><br />High MDM</span>
            </div>
            <p style={{ lineHeight: 1.6 }}><strong>Different-day discharge:</strong> 99238 is 30 minutes or less; 99239 is more than 30 minutes, according to the supplied lesson.</p>
            <div style={ruleStyle}><strong>Photo example:</strong> A same-day admission and discharge with moderate MDM is reported with <strong>99235</strong>.</div>
          </article>

          <article style={{ ...cardStyle, borderLeft: "6px solid #2563eb" }}>
            <h3 style={{ marginTop: 0, color: "#1d4ed8" }}>Consultations</h3>
            <p style={{ lineHeight: 1.65 }}>
              A consultation is an E/M service provided at the request of another physician, qualified health care professional, or appropriate source to recommend care for a specific condition or problem. The consultant's opinion and ordered or performed services must be communicated in a written report to the requesting source.
            </p>
            <div style={ruleStyle}>
              <strong>Do not use consultation codes</strong> when the request comes only from the patient or family. The source lists office or outpatient consultation codes <strong>99242–99245</strong> and inpatient consultation codes <strong>99252–99255</strong>.
            </div>
            <p style={{ marginBottom: 0, lineHeight: 1.6 }}><strong>Photo example:</strong> A family physician sends a patient to a urologist for an office consultation with moderate MDM. The source answer is the office consultation option, <strong>99244</strong>; report only the office service in that question.</p>
          </article>
        </div>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "30px", marginBottom: "14px" }}>Part 4: Emergency, Critical Care, and Facility Services</h2>
        <div style={{ display: "grid", gap: "16px" }}>
          <article style={{ ...cardStyle, borderLeft: "6px solid #0f766e" }}>
            <h3 style={{ marginTop: 0, color: "#0f766e" }}>Emergency Department Services</h3>
            <p style={{ lineHeight: 1.65 }}>
              An emergency department is an organized hospital-based facility that provides unscheduled episodic services to patients presenting for immediate medical attention. It must be available 24 hours a day.
            </p>
            <div style={codeGridStyle}>
              <span><strong>99281–99282</strong><br />Straightforward MDM</span>
              <span><strong>99283</strong><br />Low MDM</span>
              <span><strong>99284</strong><br />Moderate MDM</span>
              <span><strong>99285</strong><br />High MDM</span>
            </div>
            <p style={{ marginBottom: 0, lineHeight: 1.6 }}><strong>Key distinction:</strong> The ED code family does not distinguish between new and established patients. The source also identifies <strong>99288</strong> for physician or other qualified health care professional direction of emergency medical services involving advanced life support.</p>
          </article>

          <article style={{ ...cardStyle, borderLeft: "6px solid #dc2626" }}>
            <h3 style={{ marginTop: 0, color: "#b91c1c" }}>Critical Care: Choose the Setting First</h3>
            <p style={{ lineHeight: 1.65 }}>
              Critical care is the direct delivery of medical care to a critically ill or critically injured patient whose condition acutely impairs vital organ systems and creates a high probability of imminent or life-threatening deterioration. It involves high-complexity decision making to support or prevent failure of vital systems.
            </p>
            <div style={codeGridStyle}>
              <span><strong>Outpatient</strong><br />99291 and 99292, based on time</span>
              <span><strong>Inpatient, age-based</strong><br />99468–99476 for neonatal and pediatric critical care</span>
              <span><strong>Older inpatient patients</strong><br />The source directs learners to 99291/99292 when the patient is older than 5</span>
            </div>
            <div style={ruleStyle}><strong>Source examples:</strong> A 3-year-old's initial PICU critical care is marked <strong>99475</strong>. A 20-day-old's initial NICU critical care is marked <strong>99468-25</strong>, with <strong>93303-26</strong> for the physician's echocardiography professional component.</div>
          </article>

          <article style={{ ...cardStyle, borderLeft: "6px solid #d97706" }}>
            <h3 style={{ marginTop: 0, color: "#92400e" }}>Outpatient Critical-Care Time Table</h3>
            <div style={{ display: "grid", gap: "8px", marginTop: "14px" }}>
              <div style={timeRowStyle}><strong>Less than 30 minutes</strong><span>Use the appropriate E/M code.</span></div>
              <div style={timeRowStyle}><strong>30–74 minutes</strong><span>99291 × 1</span></div>
              <div style={timeRowStyle}><strong>75–104 minutes</strong><span>99291 × 1 + 99292 × 1</span></div>
              <div style={timeRowStyle}><strong>105–134 minutes</strong><span>99291 × 1 + 99292 × 2</span></div>
              <div style={timeRowStyle}><strong>135–164 minutes</strong><span>99291 × 1 + 99292 × 3</span></div>
              <div style={timeRowStyle}><strong>165–194 minutes</strong><span>99291 × 1 + 99292 × 4</span></div>
            </div>
          </article>

          <article style={{ ...cardStyle, borderLeft: "6px solid #2563eb" }}>
            <h3 style={{ marginTop: 0, color: "#1d4ed8" }}>Critical-Care Bundling</h3>
            <p style={{ lineHeight: 1.65 }}>The source lists services that are included in critical care when performed during the critical-care period by the physician providing critical care. Examples include interpretation of cardiac output measurements, chest X-rays, pulse oximetry, blood gases, physiologic data collection and interpretation, gastric intubation, temporary transcutaneous pacing, ventilatory management, and vascular access procedures.</p>
            <div style={ruleStyle}><strong>Do not separately code bundled services</strong> when performed during critical care. Services performed before or after critical care are reported separately when supported. Facilities may have separate reporting rules for included services.</div>
            <p style={{ marginBottom: 0, lineHeight: 1.6 }}>The same concept applies to the listed bundled services in inpatient neonatal and pediatric critical care codes 99468–99476. Check the current CPT code-family guidelines before final code assignment.</p>
          </article>

          <article style={{ ...cardStyle, borderLeft: "6px solid #7c3aed" }}>
            <h3 style={{ marginTop: 0, color: "#6d28d9" }}>Nursing Facility and Home Services</h3>
            <p style={{ lineHeight: 1.65 }}>Nursing facility service codes are also used for E/M services provided to patients in psychiatric residential treatment centers and intermediate care facilities for individuals with intellectual disabilities.</p>
            <div style={codeGridStyle}>
              <span><strong>99304–99306</strong><br />Initial nursing facility care</span>
              <span><strong>99307–99310</strong><br />Subsequent nursing facility care</span>
              <span><strong>99315</strong><br />Discharge, 30 minutes or less</span>
              <span><strong>99316</strong><br />Discharge, more than 30 minutes</span>
              <span><strong>99341–99345</strong><br />Home/residence, new patient</span>
              <span><strong>99347–99350</strong><br />Home/residence, established patient</span>
            </div>
            <p style={{ marginBottom: 0, lineHeight: 1.6 }}>Select the applicable level using the documented MDM and/or time rules for the code family.</p>
          </article>
        </div>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "30px", marginBottom: "14px" }}>Part 5: Prolonged, Standby, Preventive, and Newborn Services</h2>
        <div style={{ display: "grid", gap: "16px" }}>
          <article style={{ ...cardStyle, borderLeft: "6px solid #0f766e" }}>
            <h3 style={{ marginTop: 0, color: "#0f766e" }}>Prolonged Service Without Direct Patient Contact</h3>
            <p style={{ lineHeight: 1.65 }}>
              Codes <strong>99358</strong> and <strong>99359</strong> report prolonged E/M work performed without direct patient contact on a date other than the face-to-face E/M service. The source describes 99358 as the first hour and 99359 as each additional 30 minutes.
            </p>
            <div style={timeRowStyle}><strong>Less than 30 minutes</strong><span>Not reported separately</span></div>
            <div style={timeRowStyle}><strong>30–74 minutes</strong><span>99358 × 1</span></div>
            <div style={timeRowStyle}><strong>75–104 minutes</strong><span>99358 × 1 + 99359 × 1</span></div>
            <div style={timeRowStyle}><strong>105 minutes or more</strong><span>99358 × 1 + 99359 × 2 or more</span></div>
          </article>

          <article style={{ ...cardStyle, borderLeft: "6px solid #2563eb" }}>
            <h3 style={{ marginTop: 0, color: "#1d4ed8" }}>Prolonged Service on the E/M Date</h3>
            <p style={{ lineHeight: 1.65 }}>
              <strong>99417</strong> is the outpatient prolonged E/M add-on reported for each additional 15 minutes of total time when the primary outpatient E/M service is selected using total time. <strong>99418</strong> is the corresponding inpatient or observation prolonged-service add-on described in the supplied material.
            </p>
            <div style={ruleStyle}><strong>Do not confuse the families:</strong> 99358–99359 are for prolonged work on a date other than the face-to-face E/M service. 99417 and 99418 are reported with eligible E/M services on the date of the encounter, subject to the current CPT parenthetical instructions and time thresholds.</div>
            <p style={{ marginBottom: 0, lineHeight: 1.6 }}><strong>Photo example:</strong> The 55-minute established-patient scenario is marked <strong>99215 + 99417</strong> in the source question.</p>
          </article>

          <article style={{ ...cardStyle, borderLeft: "6px solid #d97706" }}>
            <h3 style={{ marginTop: 0, color: "#92400e" }}>Standby Services</h3>
            <p style={{ lineHeight: 1.65 }}>
              Code <strong>99360</strong> reports standby service requiring prolonged attendance, in 30-minute units. Standby means the clinician remains available for a possible service, but the patient does not ultimately require that clinician's care in the example.
            </p>
            <div style={codeGridStyle}>
              <span><strong>Less than 30 minutes</strong><br />Do not report 99360</span>
              <span><strong>30–59 minutes</strong><br />99360 × 1</span>
              <span><strong>60–89 minutes</strong><br />99360 × 2</span>
              <span><strong>90–119 minutes</strong><br />99360 × 3</span>
            </div>
            <div style={ruleStyle}><strong>Photo example:</strong> A pediatrician present for 45 minutes during a high-risk delivery, when the healthy newborn does not require the service, is reported with <strong>99360</strong> once.</div>
          </article>

          <article style={{ ...cardStyle, borderLeft: "6px solid #7c3aed" }}>
            <h3 style={{ marginTop: 0, color: "#6d28d9" }}>Preventive Medicine and Newborn Care Code Families</h3>
            <div style={codeGridStyle}>
              <span><strong>99381–99387</strong><br />Preventive medicine, new patient, age-based</span>
              <span><strong>99391–99397</strong><br />Preventive medicine, established patient, age-based</span>
              <span><strong>99401–99404</strong><br />Preventive medicine individual counseling, time-based</span>
              <span><strong>99460–99463</strong><br />Newborn care services described in the source</span>
            </div>
            <p style={{ marginBottom: 0, lineHeight: 1.6 }}>Use the code family and level supported by the patient's age, status, setting, and documented service. Confirm descriptors and current-year code changes in the CPT manual.</p>
          </article>
        </div>
      </section>

      <section style={{ background: "#17212b", color: "white", borderRadius: "14px", padding: "22px 24px", marginBottom: "30px" }}><h2 style={{ margin: "0 0 10px", color: "#fbbf24" }}>Part 1 Quick Review</h2><p style={{ margin: 0, lineHeight: 1.7 }}>E/M means evaluation plus management. Start with the setting, determine new versus established status using the three-year rule, then focus on the documented MDM and time guidance presented in this lesson. Part 2 can build on this foundation with MDM, time, and practice questions.</p></section>

      <Link href="/cpt/e-m" style={{ textDecoration: "none", color: "#0f766e", fontWeight: 700 }}>← Back to E/M Series</Link>
    </main>
  );
}

const cardStyle = { background: "white", border: "1px solid #d7e2df", borderRadius: "12px", padding: "20px", boxShadow: "0 4px 12px rgba(20,60,55,0.06)" };
const statStyle = { ...cardStyle, display: "flex", flexDirection: "column" as const, gap: "8px", minHeight: "100px", justifyContent: "center" };
const labelStyle = { color: "#64748b", fontSize: "14px", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.05em" };
const numberStyle = { color: "#0f766e", fontSize: "28px" };
const tipStyle = { background: "rgba(255,255,255,0.72)", borderRadius: "8px", padding: "10px 12px", marginBottom: 0, fontWeight: 700, lineHeight: 1.45 };
const ruleStyle = { background: "#fff7df", border: "1px solid #f2d58a", borderRadius: "9px", padding: "13px 15px", lineHeight: 1.6, margin: "14px 0" };
const codeGridStyle = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "10px", margin: "16px 0" };
const timeRowStyle = { display: "flex", justifyContent: "space-between", gap: "16px", padding: "11px 13px", border: "1px solid #f2d58a", background: "#fffdf5", lineHeight: 1.45 };
