"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/icd10", label: "ICD-10-CM" },
  { href: "/cpt", label: "CPT" },
  { href: "/hcpcs", label: "HCPCS" },
  { href: "/business-medicine", label: "Business of Medicine" },
  { href: "/final-exams", label: "Final Exams" },
  { href: "/reference", label: "🔍 Code Lookup" },
];

const barStyle: React.CSSProperties = {
  position: "sticky",
  top: 0,
  zIndex: 50,
  background: "rgba(16, 23, 25, 0.92)",
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
  borderBottom: "1px solid rgba(247, 244, 236, 0.1)",
};

const innerStyle: React.CSSProperties = {
  maxWidth: "1320px",
  margin: "0 auto",
  padding: "14px 24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "16px",
  fontFamily: "Arial, Helvetica, sans-serif",
};

const brandStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  textDecoration: "none",
  color: "#f7f4ec",
  fontSize: "17px",
  fontWeight: 850,
  letterSpacing: "0.1em",
  flexShrink: 0,
};

const navRowStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "6px",
};

const toggleStyle: React.CSSProperties = {
  display: "none",
  background: "transparent",
  border: "1px solid rgba(247, 244, 236, 0.25)",
  borderRadius: "8px",
  color: "#f7f4ec",
  padding: "7px 11px",
  fontSize: "13px",
  fontWeight: 700,
  cursor: "pointer",
};

const mobilePanelStyle: React.CSSProperties = {
  borderTop: "1px solid rgba(247, 244, 236, 0.1)",
  background: "#101719",
  padding: "8px 24px 16px",
  display: "grid",
  gap: "4px",
};

function linkStyle(active: boolean): React.CSSProperties {
  return {
    textDecoration: "none",
    color: active ? "#0b1412" : "#c8d0cf",
    background: active ? "#2dd4bf" : "transparent",
    fontWeight: active ? 800 : 600,
    fontSize: "13.5px",
    padding: "8px 14px",
    borderRadius: "999px",
    transition: "background 0.15s ease, color 0.15s ease",
    whiteSpace: "nowrap" as const,
  };
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  if (pathname === "/") return null;

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <div style={barStyle}>
        <div style={innerStyle}>
          <Link href="/" style={brandStyle}>
            CPC<span style={{ color: "#2dd4bf" }}>•</span>
          </Link>

          <nav
            aria-label="Primary"
            className="site-nav-links"
            style={navRowStyle}
          >
            {links.map((link) => (
              <Link key={link.href} href={link.href} style={linkStyle(isActive(link.href))}>
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            className="site-nav-toggle"
            style={toggleStyle}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <nav aria-label="Primary mobile" style={mobilePanelStyle} className="site-nav-mobile">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{ ...linkStyle(isActive(link.href)), display: "block", textAlign: "left" as const }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}

      <style>{`
        @media (max-width: 760px) {
          .site-nav-links { display: none !important; }
          .site-nav-toggle { display: inline-flex !important; }
        }
        @media (min-width: 761px) {
          .site-nav-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}
