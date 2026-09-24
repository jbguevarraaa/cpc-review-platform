"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import cptCuratedRaw from "./data/cpt_curated.json";
import cptExpandedRaw from "./data/cpt_expanded.json";
import icd10CuratedRaw from "./data/icd10_curated.json";
import cptTocRanges from "./data/cpt_toc_ranges.json";

type CptCurated = {
  code: string;
  description: string;
  section: string;
  href: string;
};

type Icd10Curated = {
  code: string;
  description: string;
  chapter: string;
  href: string;
};

type CptTocRange = {
  name: string;
  range: string;
};

const cptCurated: CptCurated[] = (
  cptCuratedRaw as Array<CptCurated & { file?: string }>
)
  .map(({ code, description, section, href }) => ({
    code,
    description,
    section,
    href,
  }))
  .concat(cptExpandedRaw as CptCurated[]);

const icd10Curated: Icd10Curated[] = (
  icd10CuratedRaw as Array<Icd10Curated & { file?: string }>
).map(({ code, description, chapter, href }) => ({
  code,
  description,
  chapter,
  href,
}));

const tocRanges: CptTocRange[] = cptTocRanges as CptTocRange[];

const MAX_RESULTS = 50;

function matchesCpt(entry: CptCurated, needle: string): boolean {
  return (
    entry.code.toLowerCase().includes(needle) ||
    entry.description.toLowerCase().includes(needle) ||
    entry.section.toLowerCase().includes(needle)
  );
}

function matchesIcd10(entry: Icd10Curated, needle: string): boolean {
  return (
    entry.code.toLowerCase().includes(needle) ||
    entry.description.toLowerCase().includes(needle) ||
    entry.chapter.toLowerCase().includes(needle)
  );
}

function matchesToc(entry: CptTocRange, needle: string): boolean {
  return (
    entry.name.toLowerCase().includes(needle) ||
    entry.range.toLowerCase().includes(needle)
  );
}

export default function ReferencePage() {
  const [query, setQuery] = useState("");

  const trimmedQuery = query.trim().toLowerCase();

  const cptResults = useMemo(() => {
    if (!trimmedQuery) return [];
    return cptCurated.filter((entry) => matchesCpt(entry, trimmedQuery));
  }, [trimmedQuery]);

  const icd10Results = useMemo(() => {
    if (!trimmedQuery) return [];
    return icd10Curated.filter((entry) => matchesIcd10(entry, trimmedQuery));
  }, [trimmedQuery]);

  const tocResults = useMemo(() => {
    if (!trimmedQuery) return [];
    return tocRanges.filter((entry) => matchesToc(entry, trimmedQuery));
  }, [trimmedQuery]);

  const hasAnyResults =
    cptResults.length > 0 || icd10Results.length > 0 || tocResults.length > 0;

  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: "linear-gradient(135deg, #2563eb, #7c3aed)",
          color: "white",
          padding: "50px",
          borderRadius: "20px",
          marginBottom: "40px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "800",
            marginBottom: "16px",
          }}
        >
          📖 CODE REFERENCE
        </h1>

        <p
          style={{
            fontSize: "20px",
            opacity: 0.95,
            marginBottom: "16px",
          }}
        >
          Quick lookup for CPT and ICD-10-CM codes while you work through
          quizzes and exams.
        </p>

        <p
          style={{
            fontSize: "15px",
            opacity: 0.85,
            lineHeight: 1.6,
            maxWidth: "820px",
          }}
        >
          This covers roughly 2,000 CPT codes and 334 ICD-10-CM codes,
          each individually checked against the CPT 2026 text rather than
          bulk-parsed &mdash; some already taught across this site&apos;s
          own reviewer pages (those link straight to the reviewer), the
          rest spanning Anesthesia, Radiology, Pathology &amp; Lab,
          Medicine, and the Surgery sections not yet built into full
          reviewers (Vascular, Nervous System, Eye, Auditory) &mdash;
          plus a CPT section/range browser sourced from the codebook&apos;s
          table of contents. It is <strong>not</strong> a complete
          code-by-code CPT/ICD-10 database &mdash; a full mechanical parse
          of the entire raw codebook produced too many misaligned or wrong
          entries to trust, so exhaustive per-code coverage of every single
          CPT/ICD-10 code was left out of scope.
        </p>
      </div>

      {/* Search box */}
      <div
        style={{
          background: "white",
          borderRadius: "16px",
          padding: "24px 30px",
          marginBottom: "30px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        }}
      >
        <label
          htmlFor="reference-search"
          style={{
            display: "block",
            fontSize: "14px",
            fontWeight: "700",
            color: "#555",
            marginBottom: "10px",
            textTransform: "uppercase",
            letterSpacing: "0.03em",
          }}
        >
          Search by code or keyword
        </label>

        <input
          id="reference-search"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="e.g. 15271, B20, hidradenitis, skin replacement..."
          style={{
            width: "100%",
            padding: "16px 20px",
            fontSize: "18px",
            border: "2px solid #ddd",
            borderRadius: "12px",
            boxSizing: "border-box",
            outline: "none",
            fontFamily: "Arial",
          }}
        />
      </div>

      {/* Results */}
      {!trimmedQuery && (
        <div
          style={{
            background: "white",
            borderRadius: "16px",
            padding: "50px 30px",
            textAlign: "center",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            color: "#666",
          }}
        >
          <p style={{ fontSize: "18px", marginBottom: "8px" }}>
            Start typing above to search.
          </p>
          <p style={{ fontSize: "15px", color: "#999" }}>
            Try a CPT code like <strong>99213</strong>, an ICD-10-CM code
            like <strong>B20</strong>, or a keyword like{" "}
            <strong>hidradenitis</strong> or <strong>skin replacement</strong>
            .
          </p>
        </div>
      )}

      {trimmedQuery && !hasAnyResults && (
        <div
          style={{
            background: "white",
            borderRadius: "16px",
            padding: "50px 30px",
            textAlign: "center",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            color: "#666",
          }}
        >
          <p style={{ fontSize: "18px" }}>
            No matches for &ldquo;{query}&rdquo;.
          </p>
          <p style={{ fontSize: "15px", color: "#999" }}>
            Remember this reference doesn&apos;t include every CPT/ICD-10
            code &mdash; only codes covered on the site&apos;s reviewer
            pages, plus CPT section ranges.
          </p>
        </div>
      )}

      {trimmedQuery && cptResults.length > 0 && (
        <ResultSection
          title="CPT Codes (site-verified)"
          accent="#2563eb"
          count={cptResults.length}
        >
          {cptResults.slice(0, MAX_RESULTS).map((entry, i) => (
            <Link
              key={`cpt-${entry.code}-${entry.href}-${i}`}
              href={entry.href}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div
                style={{
                  border: "1px solid #ddd",
                  borderLeft: "4px solid #2563eb",
                  borderRadius: "10px",
                  padding: "16px 20px",
                  marginBottom: "10px",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    gap: "12px",
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      fontWeight: "800",
                      fontSize: "17px",
                      color: "#1d4ed8",
                    }}
                  >
                    {entry.code}
                  </span>
                  <span style={{ fontSize: "13px", color: "#888" }}>
                    {entry.section}
                  </span>
                </div>
                <p style={{ margin: "6px 0 0 0", color: "#333" }}>
                  {entry.description}
                </p>
              </div>
            </Link>
          ))}
          {cptResults.length > MAX_RESULTS && (
            <TruncationNote count={cptResults.length - MAX_RESULTS} />
          )}
        </ResultSection>
      )}

      {trimmedQuery && icd10Results.length > 0 && (
        <ResultSection
          title="ICD-10-CM Codes (site-verified)"
          accent="#22c55e"
          count={icd10Results.length}
        >
          {icd10Results.slice(0, MAX_RESULTS).map((entry, i) => (
            <Link
              key={`icd10-${entry.code}-${entry.href}-${i}`}
              href={entry.href}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div
                style={{
                  border: "1px solid #ddd",
                  borderLeft: "4px solid #22c55e",
                  borderRadius: "10px",
                  padding: "16px 20px",
                  marginBottom: "10px",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    gap: "12px",
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      fontWeight: "800",
                      fontSize: "17px",
                      color: "#15803d",
                    }}
                  >
                    {entry.code}
                  </span>
                  <span style={{ fontSize: "13px", color: "#888" }}>
                    {entry.chapter}
                  </span>
                </div>
                <p style={{ margin: "6px 0 0 0", color: "#333" }}>
                  {entry.description}
                </p>
              </div>
            </Link>
          ))}
          {icd10Results.length > MAX_RESULTS && (
            <TruncationNote count={icd10Results.length - MAX_RESULTS} />
          )}
        </ResultSection>
      )}

      {trimmedQuery && tocResults.length > 0 && (
        <ResultSection
          title="CPT Section Index (code ranges)"
          accent="#7c3aed"
          count={tocResults.length}
        >
          {tocResults.slice(0, MAX_RESULTS).map((entry, i) => (
            <div
              key={`toc-${entry.range}-${i}`}
              style={{
                border: "1px solid #ddd",
                borderLeft: "4px solid #7c3aed",
                borderRadius: "10px",
                padding: "16px 20px",
                marginBottom: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <span
                  style={{
                    fontWeight: "800",
                    fontSize: "17px",
                    color: "#6d28d9",
                  }}
                >
                  {entry.range}
                </span>
              </div>
              <p style={{ margin: "6px 0 0 0", color: "#333" }}>
                {entry.name}
              </p>
            </div>
          ))}
          {tocResults.length > MAX_RESULTS && (
            <TruncationNote count={tocResults.length - MAX_RESULTS} />
          )}
        </ResultSection>
      )}
    </main>
  );
}

function ResultSection({
  title,
  accent,
  count,
  children,
}: {
  title: string;
  accent: string;
  count: number;
  children: React.ReactNode;
}) {
  return (
    <section style={{ marginBottom: "30px" }}>
      <h2
        style={{
          fontSize: "20px",
          fontWeight: "700",
          marginBottom: "14px",
          color: accent,
        }}
      >
        {title}{" "}
        <span style={{ fontSize: "15px", fontWeight: "400", color: "#888" }}>
          ({count} match{count === 1 ? "" : "es"})
        </span>
      </h2>
      <div
        style={{
          background: "white",
          borderRadius: "16px",
          padding: "20px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        }}
      >
        {children}
      </div>
    </section>
  );
}

function TruncationNote({ count }: { count: number }) {
  return (
    <p
      style={{
        margin: "10px 0 0 0",
        fontSize: "14px",
        color: "#888",
        fontStyle: "italic",
      }}
    >
      {count} more match{count === 1 ? "" : "es"} &mdash; refine your search.
    </p>
  );
}
