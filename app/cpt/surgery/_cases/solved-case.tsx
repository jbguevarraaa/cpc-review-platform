import { Highlightable } from "../_digestive/highlighter";

export type SolvedCase = {
  title: string;
  scenario: string;
  steps: string[];
  answer: string;
  /** Where the case came from, shown as a small line under the title. */
  source?: string;
};

/** Teal "solved case" box shared by the cardiovascular (33,000) and respiratory (30,000) reviewers. */
export function SolvedCaseBox({ c }: { c: SolvedCase }) {
  return (
    <div style={{ background: "#f0fdfa", border: "1px solid #99f6e4", borderLeft: "5px solid #0f766e", borderRadius: "10px", padding: "16px 18px", margin: "14px 0 0", lineHeight: 1.7 }}>
      <p style={{ margin: "0 0 4px", color: "#115e59", fontWeight: 800, fontSize: "14px", letterSpacing: "0.03em" }}>🧩 SOLVED CASE — {c.title}</p>
      {c.source && <p style={{ margin: "0 0 8px", fontSize: "12.5px", color: "#0f766e", fontWeight: 700 }}>{c.source}</p>}
      <Highlightable id={`${c.title}-scenario`} as="div" style={{ margin: "0 0 10px", fontStyle: "italic" }}>{c.scenario}</Highlightable>
      <p style={{ margin: "0 0 4px", fontWeight: 800 }}>How to solve it</p>
      <ol style={{ margin: "0 0 10px", paddingLeft: "22px", display: "grid", gap: "6px" }}>
        {c.steps.map((t, i) => (
          <li key={t}>
            <Highlightable id={`${c.title}-step-${i}`} as="span">{t}</Highlightable>
          </li>
        ))}
      </ol>
      <Highlightable id={`${c.title}-answer`} as="div" style={{ margin: 0, background: "#ccfbf1", borderRadius: "8px", padding: "10px 12px", fontWeight: 800 }}>Answer: {c.answer}</Highlightable>
    </div>
  );
}
