import Link from "next/link";

const payerParts = [
  ["Part A", "Inpatient hospital care, skilled nursing facilities, hospice, and home healthcare."],
  ["Part B", "Medically necessary physician services, outpatient care, and other covered medical services."],
  ["Part C", "Medicare Advantage plans that combine Part A, Part B, and sometimes Part D benefits."],
  ["Part D", "Prescription drug coverage offered through Medicare-approved private companies."],
];

const rbrvsComponents = [
  ["Physician work", "About 52%", "Time, technical skill, physical effort, mental effort, judgment, and patient risk."],
  ["Practice expense", "About 44%", "Resources required to provide the service, which vary by site of service."],
  ["Professional liability insurance", "About 4%", "Resource-based professional liability insurance expense."],
];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={styles.section}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default function BusinessMedicineReviewerPage() {
  return (
    <main style={styles.main}>
      <header style={styles.header}>
        <p style={styles.eyebrow}>REQUIRED READING · REVIEWER</p>
        <h1>Business of Medicine</h1>
        <p style={styles.subtitle}>CPC foundations for coding, reimbursement, compliance, privacy, and healthcare operations.</p>
      </header>

      <Section title="Coding as a Profession">
        <p>Healthcare records document observations, medical or surgical interventions, diagnostic studies, and treatment outcomes. Coding translates that documentation into numeric and alphanumeric codes.</p>
        <p>Separate code sets describe diagnoses, procedures and services, and supplies. Together, they create a common language for collecting data, evaluating quality of care, and determining costs and reimbursement.</p>
        <h3>Documentation Drives Code Assignment</h3>
        <p>Correct code assignment depends on the medical record and the rules governing the applicable code set. Rules may also vary by payer, including self-pay, commercial insurance, and government programs.</p>
        <p>If documentation is incomplete or inaccurate, the codes will not accurately represent the care provided. Coders must evaluate records for completeness and communicate with physicians and other healthcare professionals when clarification is needed.</p>
      </Section>

      <Section title="Outpatient and Inpatient Coding">
        <div style={styles.grid}>
          <div style={styles.subcard}><h3>Outpatient Coding</h3><p>Focuses on physician professional services and outpatient facility coding. Common code sets include CPT, HCPCS Level II, and ICD-10-CM. Outpatient facility coders may also work with Ambulatory Payment Classifications (APCs).</p></div>
          <div style={styles.subcard}><h3>Hospital Inpatient Coding</h3><p>Uses ICD-10-CM and ICD-10-PCS. Inpatient coders also assign medical severity diagnosis-related groups (MS-DRGs).</p></div>
        </div>
        <p><strong>Continuing education matters:</strong> code updates and insurance payment policies may change as often as quarterly.</p>
      </Section>

      <Section title="The Hierarchy of Providers">
        <p>Healthcare organizations employ physicians and other providers, including physician assistants (PAs) and nurse practitioners (NPs), sometimes called mid-level providers or physician extenders.</p>
        <ul><li>Providers have different education, training, reimbursement, and supervision requirements.</li><li>Mid-level providers may be reimbursed at a lower rate than physicians and may require physician oversight.</li><li>Scope-of-practice rules vary by state. Check the applicable state health board for current requirements.</li></ul>
      </Section>

      <Section title="The Different Types of Payers">
        <p>Patients may pay their own expenses, but most healthcare is covered by private or government insurance.</p>
        <h3>Private Insurance</h3>
        <p>Commercial carriers offer group and individual plans. Contracts may include hospitalization, basic medical, and major medical coverage, with terms that vary by payer.</p>
        <h3>Medicare</h3>
        <p>Medicare is a federal program administered by the Centers for Medicare & Medicaid Services (CMS). It generally serves people age 65 and older, certain blind or disabled individuals, and people with permanent kidney failure or end-stage renal disease.</p>
        <div style={styles.grid}>{payerParts.map(([part, description]) => <div key={part} style={styles.subcard}><h3>{part}</h3><p>{description}</p></div>)}</div>
        <h3>Medicaid and State Programs</h3>
        <p>Medicaid is sponsored by federal and state governments and administered state by state under federal guidelines. State-funded programs may provide coverage for eligible children and individuals with special healthcare needs.</p>
      </Section>

      <Section title="Understanding RBRVS">
        <p>Medicare physician payments are standardized using the resource-based relative value scale (RBRVS). Relative value units are based on physician work, practice expense, and professional liability insurance.</p>
        <div style={{ overflowX: "auto" }}><table style={styles.table}><thead><tr><th style={styles.cell}>Component</th><th style={styles.cell}>Approximate share</th><th style={styles.cell}>What it measures</th></tr></thead><tbody>{rbrvsComponents.map(([component, share, detail]) => <tr key={component}><td style={styles.cell}>{component}</td><td style={styles.cell}>{share}</td><td style={styles.cell}>{detail}</td></tr>)}</tbody></table></div>
        <h3>Geographic and Payment Factors</h3>
        <p>Payment calculations use the geographic practice cost index (GPCI) and a conversion factor (CF), which translates RVUs into a dollar payment amount. The facility and non-facility formulas use the applicable practice-expense RVU.</p>
        <div style={styles.formula}><strong>Non-facility payment:</strong><br />[(Work RVU × Work GPCI) + (Non-facility PE RVU × PE GPCI) + (MP RVU × MP GPCI)] × CF<br /><br /><strong>Facility payment:</strong><br />[(Work RVU × Work GPCI) + (Facility PE RVU × PE GPCI) + (MP RVU × MP GPCI)] × CF</div>
        <p>CMS publishes Physician Fee Schedule information and payment formulas. RVUs and conversion factors can change from year to year and during the year because of legislative changes.</p>
      </Section>

      <Section title="Medical Necessity">
        <p>Medical necessity asks whether a service or procedure is appropriate for the patient&apos;s circumstances. Generally, the medically necessary service is the least radical option that effectively treats the complaint or condition.</p>
        <p>For Medicare beneficiaries, providers should bill only services that meet Medicare&apos;s reasonable-and-necessary standard for diagnosis and treatment.</p>
        <h3>NCDs and LCDs</h3>
        <ul><li><strong>National Coverage Determinations (NCDs):</strong> Explain when Medicare covers an item or service.</li><li><strong>Local Coverage Determinations (LCDs):</strong> MAC interpretations that describe indications, limitations, applicable CPT codes, and supporting ICD-10-CM diagnoses within a region.</li></ul>
        <p>Commercial payers may use their own medical policies and contracts, which may differ from Medicare. If a service does not meet Medicare coverage requirements, an ABN may be needed before billing the patient.</p>
      </Section>

      <Section title="The Advance Beneficiary Notice (ABN)">
        <p>An ABN is a standardized notice explaining why Medicare may deny a proposed service. It protects the provider&apos;s financial interest by documenting that the patient was informed before receiving a potentially noncovered service.</p>
        <ul><li>The provider should give the patient a reasonable cost estimate.</li><li>The revised ABN is CMS-R-131.</li><li>Non-Medicare payers may not recognize an ABN.</li><li>Some private contracts contain hold-harmless provisions that limit billing the patient beyond copayments or deductibles.</li></ul>
      </Section>

      <Section title="Privacy and Security">
        <p>HIPAA provides federal protections for personal health information held by covered entities, including healthcare providers, health plans, and healthcare clearinghouses.</p>
        <div style={styles.tip}><strong>Minimum necessary:</strong> Share only the minimum protected health information (PHI) needed for the particular purpose.</div>
        <p>The minimum-necessary standard generally does not apply to treatment disclosures, disclosures to the individual, authorized disclosures, required HIPAA administrative disclosures, required disclosures to HHS for enforcement, or disclosures required by other law.</p>
        <p>Covered entities must develop policies that protect PHI and limit access to people whose jobs require it.</p>
      </Section>

      <Section title="HITECH and Its Impact on HIPAA">
        <p>The Health Information Technology for Economic and Clinical Health Act (HITECH) strengthened HIPAA privacy and security requirements related to electronic health information.</p>
        <ul><li>Patients may request an audit trail of electronic disclosures of their health information.</li><li>Individuals must be notified about unauthorized disclosures or uses of their health information.</li><li>Organizations must pay close attention to electronic records, security controls, and breach response.</li></ul>
      </Section>

      <Section title="Fraud and Abuse">
        <p>Fraud involves intentionally billing for services not provided or billing for a higher-paying service than the one performed. Under healthcare reform, the definition of fraud was broadened so that knowledge of the violation is not always required for an offense.</p>
        <p>Abuse includes payment for items or services billed in error that should not be paid by Medicare. The government investigates suspected fraud and abuse across healthcare settings.</p>
      </Section>

      <Section title="Compliance Rules and Audits">
        <p>A compliance plan is a written set of procedures for accurate coding and claims submission and for responding when mistakes are found. It is especially important in reimbursement, coding, and billing operations.</p>
        <h3>Benefits</h3><ul><li>More accurate claims payment</li><li>Fewer billing mistakes</li><li>Better documentation and coding</li><li>Lower risk of self-referral and anti-kickback violations</li></ul>
        <h3>Key Actions</h3><ol><li>Write standards and procedures.</li><li>Designate a compliance officer or contact.</li><li>Train staff on standards and procedures.</li><li>Perform periodic internal monitoring and audits.</li><li>Investigate and respond appropriately to detected violations.</li><li>Maintain open communication about compliance concerns.</li><li>Enforce clear disciplinary standards.</li></ol>
      </Section>

      <Section title="The OIG Work Plan">
        <p>The Office of Inspector General (OIG) releases a work plan twice each year describing areas of government healthcare programs that may receive special scrutiny. Coding and billing teams should monitor these priorities and use them to strengthen internal audits and education.</p>
      </Section>

      <Section title="Medicare Payments for Transitional Care Management">
        <p>Transitional Care Management (TCM) supports patients whose moderate- or high-complexity medical or psychosocial needs require a transition from an inpatient hospital, rehabilitation hospital, long-term acute care hospital, partial hospital, hospital observation status, or skilled nursing facility to a community setting.</p>
        <p>Medicare covers TCM under the Physician Fee Schedule. Certain Medicare-covered services, including chronic care management, end-stage renal disease services, and prolonged services without direct patient contact, cannot be billed during the same service period as TCM.</p>
        <div style={styles.tip}><strong>Review point:</strong> Always check the service period and payer rules before reporting TCM with other care-management or prolonged-service codes.</div>
      </Section>

      <Link href="/" style={styles.backLink}>← Back to Home</Link>
    </main>
  );
}

const styles = {
  main: { maxWidth: "1100px", margin: "0 auto", padding: "40px", background: "linear-gradient(135deg, #f8fafc 0%, #eef2ff 100%)", minHeight: "100vh", lineHeight: 1.6 },
  header: { background: "linear-gradient(135deg, #2563eb, #7c3aed)", color: "white", padding: "48px", borderRadius: "20px", marginBottom: "30px", boxShadow: "0 10px 30px rgba(0,0,0,0.15)" },
  eyebrow: { letterSpacing: "2px", fontSize: "12px", fontWeight: "700", margin: 0, opacity: 0.85 },
  subtitle: { fontSize: "19px", maxWidth: "760px", marginBottom: 0, opacity: 0.92 },
  section: { background: "white", border: "1px solid #e5e7eb", borderRadius: "14px", padding: "28px", marginBottom: "24px", boxShadow: "0 4px 14px rgba(15,23,42,0.06)" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "16px" },
  subcard: { background: "#f8fafc", border: "1px solid #e2e8f0", borderTop: "4px solid #2563eb", borderRadius: "10px", padding: "18px" },
  tip: { background: "#eff6ff", borderLeft: "5px solid #2563eb", borderRadius: "6px", padding: "16px", margin: "18px 0" },
  formula: { background: "#111827", color: "#f8fafc", borderRadius: "10px", padding: "18px", overflowX: "auto" as const },
  table: { width: "100%", borderCollapse: "collapse" as const, minWidth: "620px" },
  cell: { border: "1px solid #cbd5e1", padding: "12px", textAlign: "left" as const },
  backLink: { color: "#2563eb", fontWeight: "700", textDecoration: "none" },
};
