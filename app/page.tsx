import Link from "next/link";

const studyLinks = [
  {
    href: "/icd10",
    number: "01",
    title: "ICD-10-CM",
    subtitle: "Diagnosis coding",
    detail: "22 chapters and guideline references",
    accent: "#2dd4bf",
  },
  {
    href: "/cpt",
    number: "02",
    title: "CPT",
    subtitle: "Procedure coding",
    detail: "Surgery, E/M, radiology, and more",
    accent: "#fbbf24",
  },
  {
    href: "/hcpcs",
    number: "03",
    title: "HCPCS",
    subtitle: "Supplies and services",
    detail: "Level II codes and modifiers",
    accent: "#fb7185",
  },
  {
    href: "/business-medicine",
    number: "04",
    title: "Business of Medicine",
    subtitle: "Healthcare fundamentals",
    detail: "Reimbursement, compliance, and privacy",
    accent: "#a78bfa",
  },
];

const railStats = [
  ["22+", "ICD-10 chapters"],
  ["10+", "CPT sections"],
  ["1000+", "Practice questions"],
];

export default function Home() {
  return (
    <main className="premium-home">
      <aside className="premium-rail">
        <div>
          <div className="brand-mark">CPC<span>•</span></div>
          <p className="rail-kicker">A focused coding studio</p>
        </div>

        <div className="rail-message">
          <span className="rail-label">Your next credential</span>
          <h2>Study with intention.</h2>
          <p>Build the judgment, speed, and confidence behind every correct code.</p>
        </div>

        <div className="rail-stats">
          {railStats.map(([value, label]) => (
            <div key={label} className="rail-stat">
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>

        <div className="rail-footer">
          <span>JBG</span>
          <span>Created by JB Guevarra</span>
        </div>
      </aside>

      <section className="premium-canvas">
        <nav className="premium-nav" aria-label="Primary navigation">
          <span className="nav-current">CPC REVIEW PLATFORM</span>
          <span className="nav-status"><span className="status-dot" /> Study workspace</span>
        </nav>

        <header className="premium-hero">
          <div className="hero-copy">
            <p className="eyebrow">AAPC CPC EXAM PREPARATION</p>
            <h1>Make the code<br /><em>make sense.</em></h1>
            <p className="hero-description">A clear, practical workspace for mastering ICD-10-CM, CPT, HCPCS, and the reasoning behind the guidelines.</p>
            <div className="hero-actions">
              <Link href="/cpt" className="primary-action">Enter the library <span>↗</span></Link>
              <Link href="/final-exams" className="text-action">Take a mock exam <span>→</span></Link>
            </div>
          </div>
          <div className="hero-orbit" aria-hidden="true">
            <div className="orbit-ring orbit-ring-one" />
            <div className="orbit-ring orbit-ring-two" />
            <div className="orbit-core"><span>01</span><small>READY<br />WHEN<br />YOU ARE</small></div>
          </div>
        </header>

        <section className="workspace-intro">
          <div>
            <p className="eyebrow">THE LIBRARY</p>
            <h2>Choose your study lane.</h2>
          </div>
          <p>Move from reference to repetition, then test your readiness when the concepts feel solid.</p>
        </section>

        <section className="study-grid" aria-label="Study sections">
          {studyLinks.map((item) => (
            <Link href={item.href} key={item.href} className="study-card" style={{ "--card-accent": item.accent } as React.CSSProperties}>
              <div className="study-card-top"><span>{item.number}</span><span className="card-arrow">↗</span></div>
              <h3>{item.title}</h3>
              <p className="card-subtitle">{item.subtitle}</p>
              <p className="card-detail">{item.detail}</p>
            </Link>
          ))}
        </section>

        <section className="practice-band">
          <div className="practice-heading">
            <p className="eyebrow">PRACTICE ROOM</p>
            <h2>Turn knowledge<br />into recall.</h2>
          </div>
          <div className="practice-options">
            <div className="practice-option"><span>⌁</span><div><strong>Daily goal</strong><small>20 questions today</small></div></div>
            <div className="practice-option"><span>◷</span><div><strong>Timed exam</strong><small>Simulate the real thing</small></div></div>
            <Link href="/final-exams" className="practice-option practice-link"><span>↗</span><div><strong>Final exams</strong><small>Full CPC mock exams</small></div></Link>
          </div>
        </section>

        <footer className="premium-footer">
          <span>© CPC Review Platform</span>
          <span>Learn carefully. Code confidently.</span>
        </footer>
      </section>
    </main>
  );
}
