"use client";

import { usePathname } from "next/navigation";

const footerStyle: React.CSSProperties = {
  borderTop: "1px solid #e5e1d6",
  background: "#101719",
  color: "#a9b3b2",
  padding: "22px 24px",
  fontFamily: "Arial, Helvetica, sans-serif",
};

const innerStyle: React.CSSProperties = {
  maxWidth: "1320px",
  margin: "0 auto",
  display: "flex",
  flexWrap: "wrap" as const,
  alignItems: "center",
  justifyContent: "space-between",
  gap: "10px",
  fontSize: "12.5px",
  letterSpacing: "0.02em",
};

export default function SiteFooter() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return (
    <footer style={footerStyle}>
      <div style={innerStyle}>
        <span>© CPC Review Platform</span>
        <span>Learn carefully. Code confidently.</span>
      </div>
    </footer>
  );
}
