"use client";

import Link from "next/link";
import { useState } from "react";

type Question = {
  topic: string;
  question: string;
  options: string[];
  correct: "A" | "B" | "C" | "D";
  explanation: string;
  lookFor: string;
  eliminate: string;
};

const questions: Question[] = [
  {
    topic: "GERD",
    question: "A patient has documented GERD with classic heartburn, and no esophagitis is mentioned anywhere in the chart. What's coded?",
    options: [
      "A. K21.0, GERD with esophagitis",
      "B. K21.9, GERD without esophagitis",
      "C. Query the provider before coding",
      "D. No code without an endoscopy on file",
    ],
    correct: "B",
    explanation: "K21.9 (GERD without esophagitis) is the default when esophagitis isn't documented — GERD symptoms alone don't establish esophagitis.",
    lookFor: "No documented inflammatory finding means K21.9, not K21.0, regardless of symptom severity.",
    eliminate: "A wrongly assumes esophagitis from symptoms alone, without any supporting documentation.",
  },
  {
    topic: "GERD",
    question: "An endoscopy report documents erosive inflammation of the distal esophagus, and the provider's assessment states \"GERD with esophagitis.\" What's coded?",
    options: [
      "A. K21.9, GERD without esophagitis",
      "B. K21.0, GERD with esophagitis",
      "C. A code from K25, gastric ulcer",
      "D. Query the provider, since erosive changes need clarification",
    ],
    correct: "B",
    explanation: "A documented inflammatory finding (erosive changes) plus the provider's own \"with esophagitis\" statement supports K21.0.",
    lookFor: "An actual documented inflammatory finding (not just reflux symptoms) is what upgrades the code to K21.0.",
    eliminate: "A misses the documented esophagitis finding that's explicitly present here.",
  },
  {
    topic: "Peptic Ulcer Disease",
    question: "A patient develops an ulcer specifically at the surgical connection between the stomach and jejunum, following a prior gastric bypass procedure, with no bleeding or perforation. What's coded?",
    options: [
      "A. K25, gastric ulcer",
      "B. K26, duodenal ulcer",
      "C. K27, peptic ulcer, site unspecified",
      "D. K28, gastrojejunal ulcer",
    ],
    correct: "D",
    explanation: "An ulcer at the surgical stomach-to-jejunum connection (a gastrojejunal anastomosis, typical after gastric bypass) is coded from K28 — a distinct site category from gastric, duodenal, or unspecified-site ulcers.",
    lookFor: "\"At the surgical connection\" following a bypass-type procedure is the specific cue for the gastrojejunal (K28) site, not a plain gastric or duodenal ulcer.",
    eliminate: "A and B both apply a site that doesn't match the documented surgical-anastomosis location.",
  },
  {
    topic: "Peptic Ulcer Disease",
    question: "A patient's chart documents \"peptic ulcer\" with bleeding, but the endoscopy report doesn't specify whether the ulcer is in the stomach or the duodenum. What's coded?",
    options: [
      "A. K25, gastric ulcer, with hemorrhage",
      "B. K26, duodenal ulcer, with hemorrhage",
      "C. K27, peptic ulcer, site unspecified, with hemorrhage",
      "D. Query the provider before coding anything",
    ],
    correct: "C",
    explanation: "When the specific site (gastric vs. duodenal) isn't documented, K27 (peptic ulcer, site unspecified) is used, with the hemorrhage complication specified.",
    lookFor: "Missing site documentation is resolved with the unspecified-site category (K27), not by guessing gastric or duodenal.",
    eliminate: "A and B both guess a specific site that isn't actually supported by the documentation.",
  },
  {
    topic: "Peptic Ulcer Disease",
    question: "A patient has a chronic duodenal ulcer that has caused both active bleeding and a perforation. What's coded?",
    options: [
      "A. The K26 subcode for chronic duodenal ulcer with hemorrhage only",
      "B. The K26 subcode for chronic duodenal ulcer with both hemorrhage and perforation",
      "C. The K25 subcode for gastric ulcer with both complications",
      "D. Two separate codes, one for hemorrhage and one for perforation",
    ],
    correct: "B",
    explanation: "A distinct, more specific K26 subcode exists for chronic duodenal ulcer with BOTH hemorrhage and perforation together — not a code for only one complication.",
    lookFor: "\"Both\" complications documented together points to the specific with-both subcode, not a single-complication code or two separate codes.",
    eliminate: "A misses the perforation; C wrongly uses the gastric (K25) category for a duodenal (K26) ulcer.",
  },
  {
    topic: "Acute Appendicitis",
    question: "A patient has acute appendicitis confirmed on imaging, with no perforation and no peritonitis documented. What's coded?",
    options: [
      "A. The K35 subcode for appendicitis with generalized peritonitis",
      "B. The K35 subcode for appendicitis without perforation or peritonitis",
      "C. The K35 subcode for appendicitis with localized peritonitis",
      "D. Query the provider before coding",
    ],
    correct: "B",
    explanation: "Uncomplicated acute appendicitis, with neither perforation nor peritonitis documented, is coded to the straightforward without-complication subcode.",
    lookFor: "No perforation, no peritonitis documented is the simplest, uncomplicated K35 presentation.",
    eliminate: "A and C both wrongly add a peritonitis complication that isn't documented.",
  },
  {
    topic: "Acute Appendicitis",
    question: "A patient's appendix has ruptured, and the surgeon documents localized peritonitis with an abscess, without the infection spreading throughout the abdomen. What's coded?",
    options: [
      "A. The K35 subcode for perforation with generalized peritonitis",
      "B. The K35 subcode for perforation with localized peritonitis (with abscess)",
      "C. The K35 subcode for appendicitis without perforation",
      "D. A code from K65, peritonitis, instead of an appendicitis code",
    ],
    correct: "B",
    explanation: "Contained (localized) peritonitis with an abscess, following perforation, is a distinct subcode from generalized peritonitis, which requires infection spread throughout the abdominal cavity.",
    lookFor: "\"Contained near the appendix\" / \"not spread throughout the abdomen\" is the specific cue for localized (not generalized) peritonitis.",
    eliminate: "A wrongly escalates to generalized peritonitis, which requires abdomen-wide spread that isn't documented here.",
  },
  {
    topic: "Diverticular Disease",
    question: "A colonoscopy finds diverticulosis of the colon (pouches present), with no inflammation and no bleeding documented. What's coded?",
    options: [
      "A. Diverticulitis of the large intestine without complication",
      "B. Diverticulosis of the large intestine without perforation, abscess, or bleeding",
      "C. Diverticulitis of the large intestine with bleeding",
      "D. Query the provider, since diverticulosis always requires further workup",
    ],
    correct: "B",
    explanation: "\"Diverticulosis\" (pouches present, no inflammation) is coded separately from \"diverticulitis\" (active inflammation) — this uncomplicated, no-bleeding presentation matches the diverticulosis code.",
    lookFor: "\"-osis\" (diverticulosis) means pouches only, no inflammation — don't upgrade to \"-itis\" (diverticulitis) without documented inflammation.",
    eliminate: "A and C both wrongly apply the diverticulitis (inflamed) code to a diverticulosis (non-inflamed) finding.",
  },
  {
    topic: "Diverticular Disease",
    question: "A patient has documented diverticulitis of the colon with active gastrointestinal bleeding from the affected diverticula. What's coded?",
    options: [
      "A. Diverticulosis of the large intestine with bleeding",
      "B. Diverticulitis of the large intestine with bleeding",
      "C. Diverticulitis of the large intestine without bleeding",
      "D. A code from K92, gastrointestinal hemorrhage, alone",
    ],
    correct: "B",
    explanation: "Diverticulitis (active inflammation) with documented bleeding is its own specific, more complicated subcode, distinct from diverticulosis or diverticulitis without bleeding.",
    lookFor: "Both the inflammation status (\"-itis\") AND the bleeding status need to be captured together in the subcode.",
    eliminate: "A wrongly uses the non-inflamed diverticulosis term for a case explicitly described as diverticulitis (inflamed).",
  },
  {
    topic: "Diverticular Disease",
    question: "A patient has documented diverticulitis of the colon (active inflammation confirmed on CT), with no gastrointestinal bleeding mentioned anywhere in the chart. What's coded?",
    options: [
      "A. Diverticulosis of the large intestine without bleeding",
      "B. Diverticulitis of the large intestine with bleeding",
      "C. Diverticulitis of the large intestine without bleeding",
      "D. Query the provider before coding",
    ],
    correct: "C",
    explanation: "Confirmed inflammation (diverticulitis) with no documented bleeding is coded to the diverticulitis-without-bleeding subcode — the middle ground between simple diverticulosis and diverticulitis with bleeding.",
    lookFor: "Inflammation confirmed, bleeding absent, is its own distinct subcode — don't default to the with-bleeding version just because diverticulitis is more complicated than diverticulosis.",
    eliminate: "A wrongly drops back to the non-inflamed diverticulosis term despite confirmed inflammation on CT; B wrongly adds bleeding that isn't documented.",
  },
  {
    topic: "IBD — Crohn's vs. Ulcerative Colitis",
    question: "A patient has documented Crohn's disease limited to the small intestine, with no complications noted. What's coded?",
    options: [
      "A. A K51 ulcerative colitis subcode for the small intestine",
      "B. A K50 Crohn's disease subcode for the small intestine, without complications",
      "C. A K50 Crohn's disease subcode for the large intestine",
      "D. A code from K57, diverticular disease",
    ],
    correct: "B",
    explanation: "Crohn's disease affecting the small intestine, without complications, is coded from category K50 at the specific site documented.",
    lookFor: "Confirm the specific disease (Crohn's, not ulcerative colitis) before choosing between K50 and K51 — they are separate categories.",
    eliminate: "A wrongly applies the ulcerative colitis category (K51) to a Crohn's disease diagnosis.",
  },
  {
    topic: "IBD — Crohn's vs. Ulcerative Colitis",
    question: "A patient has documented ulcerative colitis with associated rectal bleeding. What's coded?",
    options: [
      "A. A K50 Crohn's disease subcode with rectal bleeding",
      "B. A K51 ulcerative colitis subcode with rectal bleeding",
      "C. A K51 ulcerative colitis subcode without complications",
      "D. A code from K92, gastrointestinal hemorrhage, alone",
    ],
    correct: "B",
    explanation: "Ulcerative colitis with documented rectal bleeding is coded from category K51 (not K50, which is reserved for Crohn's disease), with the bleeding complication specified.",
    lookFor: "Ulcerative colitis and Crohn's disease are always separate categories (K51 vs. K50) — clinical similarity between the two diseases doesn't change which category applies.",
    eliminate: "A wrongly applies the Crohn's disease category to a documented ulcerative colitis diagnosis.",
  },
  {
    topic: "Gallbladder Disease",
    question: "An ultrasound shows gallstones, with no gallbladder inflammation documented. What's coded?",
    options: [
      "A. K81, cholecystitis without stones",
      "B. K80, cholelithiasis without cholecystitis",
      "C. K80, cholelithiasis with acute cholecystitis",
      "D. Query the provider before coding",
    ],
    correct: "B",
    explanation: "Gallstones without documented inflammation are coded to K80 (cholelithiasis) with the \"without cholecystitis\" specification.",
    lookFor: "Gallstones alone, no inflammation, is the straightforward K80-without-cholecystitis presentation.",
    eliminate: "A wrongly uses the no-stones cholecystitis category for a case where stones are explicitly documented.",
  },
  {
    topic: "Gallbladder Disease",
    question: "A patient has documented acute cholecystitis with gallstones both present, confirmed on imaging. Which category is used, K80 or K81?",
    options: [
      "A. K81, since cholecystitis is the more prominent finding",
      "B. K80, with the cholecystitis specified as part of the subcode",
      "C. Both K80 and K81 together",
      "D. Neither; a different category entirely applies",
    ],
    correct: "B",
    explanation: "When both gallstones and cholecystitis are documented together, the combination is coded from K80 (calculus of the gallbladder with cholecystitis specified) — K81 alone is reserved for cholecystitis without stones.",
    lookFor: "\"Both stones AND cholecystitis together\" still routes to K80 (with cholecystitis specified), not K81 and not both categories stacked.",
    eliminate: "A and C both wrongly bring K81 into a scenario where stones are documented, which K80 already fully captures.",
  },
  {
    topic: "Gallbladder Disease",
    question: "A patient has documented acute cholecystitis (gallbladder inflammation), with imaging specifically ruling out any gallstones. What's coded?",
    options: [
      "A. K80, cholelithiasis with acute cholecystitis",
      "B. K81, cholecystitis without stones",
      "C. K80, cholelithiasis without cholecystitis",
      "D. Query the provider before coding",
    ],
    correct: "B",
    explanation: "Cholecystitis specifically documented WITHOUT stones is coded from K81 — K80 requires stones to be present, which imaging has ruled out here.",
    lookFor: "Inflammation confirmed, stones specifically RULED OUT, is the defined trigger for K81 rather than any K80 subcode.",
    eliminate: "A and C both wrongly bring K80 (which requires gallstones) into a scenario where stones have been explicitly ruled out.",
  },
  {
    topic: "Alcoholic Liver Disease",
    question: "A patient's imaging and labs show early alcoholic fatty liver changes, with no hepatitis, fibrosis, or cirrhosis documented. What's coded?",
    options: [
      "A. K70.3-, alcoholic cirrhosis of liver",
      "B. K70.0, alcoholic fatty liver",
      "C. K70.4-, alcoholic hepatic failure",
      "D. K70.1-, alcoholic hepatitis",
    ],
    correct: "B",
    explanation: "K70.0 (alcoholic fatty liver) is the earliest stage on the K70 severity progression, matching this patient's documented findings.",
    lookFor: "Identify the actual documented stage on the fatty-liver-to-hepatic-failure ladder — don't assume a more advanced stage than what's written.",
    eliminate: "A, C, and D all jump to more advanced stages than what's actually documented here.",
  },
  {
    topic: "Alcoholic Liver Disease",
    question: "A patient has documented alcoholic cirrhosis of the liver with ascites present. What's coded?",
    options: [
      "A. K70.30, alcoholic cirrhosis without ascites",
      "B. K70.31, alcoholic cirrhosis with ascites",
      "C. K70.0, alcoholic fatty liver",
      "D. K70.9, alcoholic liver disease, unspecified",
    ],
    correct: "B",
    explanation: "The documented ascites detail moves this to the more specific \"with ascites\" cirrhosis subcode, rather than the plain \"without ascites\" subcode.",
    lookFor: "Within a given K70 stage (here, cirrhosis), always check for an ascites or coma modifier before finalizing the subcode.",
    eliminate: "A misses the documented ascites detail; C and D both understate the actual documented severity (cirrhosis).",
  },
  {
    topic: "Acute Pancreatitis",
    question: "A patient has documented acute pancreatitis caused by gallstones, with no necrosis present. What's coded?",
    options: [
      "A. K85.0-, idiopathic acute pancreatitis without necrosis",
      "B. K85.1-, biliary acute pancreatitis without necrosis",
      "C. K85.2-, alcohol-induced acute pancreatitis without necrosis",
      "D. K85.3-, drug-induced acute pancreatitis without necrosis",
    ],
    correct: "B",
    explanation: "Gallstone-caused (biliary) acute pancreatitis without necrosis is coded from K85.1-, matching the documented cause.",
    lookFor: "Identify the documented CAUSE first (idiopathic/biliary/alcohol/drug) before layering on the necrosis detail.",
    eliminate: "A wrongly codes this as cause-unknown (idiopathic) when gallstones are explicitly documented as the cause.",
  },
  {
    topic: "Acute Pancreatitis",
    question: "A patient develops acute pancreatitis specifically documented as caused by a medication, with infected necrosis present. What's coded?",
    options: [
      "A. K85.3- alone, with no additional code needed",
      "B. K85.3- (drug-induced acute pancreatitis with infected necrosis) plus an additional adverse-effect code for the causative drug",
      "C. K85.1-, biliary acute pancreatitis with infected necrosis",
      "D. K85.2-, alcohol-induced acute pancreatitis with infected necrosis",
    ],
    correct: "B",
    explanation: "Drug-induced acute pancreatitis with infected necrosis is coded from K85.3-, plus a required additional adverse-effect code identifying the specific causative drug — the base pancreatitis code alone isn't sufficient.",
    lookFor: "Drug-induced causes always require a SECOND code for the causative drug, on top of the base pancreatitis code.",
    eliminate: "A misses the required second code for the causative drug; C and D both misidentify the documented cause as biliary or alcohol instead of drug-induced.",
  },
];

const mainStyle = { maxWidth: "900px", margin: "0 auto", padding: "36px 24px 64px", minHeight: "100vh", background: "#f6f9f9", color: "#141d1c", fontFamily: "Arial, sans-serif" };
const heroStyle = { background: "linear-gradient(135deg, #101719, #0f766e)", color: "white", padding: "40px 36px", borderRadius: "18px", marginBottom: "24px", boxShadow: "0 12px 28px rgba(16,23,25,0.22)" };
const kickerStyle = { margin: "0 0 10px", color: "#99f6e4", fontWeight: 800, letterSpacing: "0.08em", fontSize: "13px" };
const navStyle = { display: "flex", flexWrap: "wrap" as const, gap: "10px", marginBottom: "22px" };
const navLinkStyle = { textDecoration: "none", color: "#0f766e", background: "#ffffff", border: "1px solid #dbe3e1", borderRadius: "999px", padding: "9px 14px", fontWeight: 700, fontSize: "13.5px" };
const cardStyle = { background: "#ffffff", border: "1px solid #e3e7e6", borderRadius: "14px", padding: "26px 28px", boxShadow: "0 5px 16px rgba(16,23,25,0.06)" };
const progressStyle = { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px", fontSize: "13px", color: "#5b6b68", fontWeight: 700 };
const topicChipStyle = { background: "#f0fdfa", border: "1px solid #99f6e4", color: "#0f766e", borderRadius: "999px", padding: "4px 12px", fontWeight: 800, fontSize: "12px" };
const questionStyle = { fontSize: "17px", lineHeight: 1.6, margin: "14px 0 18px", color: "#111827" };
const optionsWrapStyle = { display: "grid", gap: "10px" };
const buttonBaseStyle: React.CSSProperties = { textAlign: "left", padding: "13px 16px", borderRadius: "10px", border: "1px solid #dbe3e1", background: "#fff", cursor: "pointer", fontSize: "14.5px", lineHeight: 1.5 };
const actionsRowStyle = { display: "flex", gap: "12px", marginTop: "20px", flexWrap: "wrap" as const };
const primaryBtnStyle = { padding: "11px 22px", borderRadius: "999px", border: "none", background: "#0f766e", color: "#fff", fontWeight: 800, cursor: "pointer", fontSize: "14px" };
const secondaryBtnStyle = { padding: "11px 22px", borderRadius: "999px", border: "1px solid #dbe3e1", background: "#fff", color: "#0f766e", fontWeight: 800, cursor: "pointer", fontSize: "14px" };
const answerBoxStyle = { marginTop: "22px", display: "grid", gap: "12px" };
const explanationBoxStyle = { background: "#f0fdf4", border: "1px solid #bbf7d0", borderLeft: "5px solid #16a34a", borderRadius: "10px", padding: "14px 16px", lineHeight: 1.65, fontSize: "14px" };
const lookForBoxStyle = { background: "#eff6ff", border: "1px solid #bfdbfe", borderLeft: "5px solid #2563eb", borderRadius: "10px", padding: "14px 16px", lineHeight: 1.65, fontSize: "14px" };
const eliminateBoxStyle = { background: "#fef2f2", border: "1px solid #fecaca", borderLeft: "5px solid #dc2626", borderRadius: "10px", padding: "14px 16px", lineHeight: 1.65, fontSize: "14px" };
const scoreStyle = { textAlign: "center" as const, padding: "40px 20px" };

export default function Icd10Chapter11PracticeQuizPage() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState<boolean[]>(new Array(questions.length).fill(false));
  const [finished, setFinished] = useState(false);

  const q = questions[current];
  const letters: Array<"A" | "B" | "C" | "D"> = ["A", "B", "C", "D"];

  function checkAnswer() {
    if (!selected) return;
    setShowAnswer(true);
    if (!answered[current]) {
      const nextAnswered = [...answered];
      nextAnswered[current] = true;
      setAnswered(nextAnswered);
      if (selected === q.correct) setScore((s) => s + 1);
    }
  }

  function next() {
    if (current < questions.length - 1) {
      setCurrent((c) => c + 1);
      setSelected(null);
      setShowAnswer(false);
    } else {
      setFinished(true);
    }
  }

  function restart() {
    setCurrent(0);
    setSelected(null);
    setShowAnswer(false);
    setScore(0);
    setAnswered(new Array(questions.length).fill(false));
    setFinished(false);
  }

  return (
    <main style={mainStyle}>
      <header style={heroStyle}>
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 11 · PRACTICE QUIZ</p>
        <h1 style={{ margin: 0, fontSize: "clamp(24px, 5vw, 38px)" }}>Chapter 11 Practice Quiz</h1>
        <p style={{ margin: "10px 0 0", fontSize: "15.5px", lineHeight: 1.5 }}>19 original scenario questions with elimination tricks, covering GERD, peptic ulcer disease, appendicitis, diverticular disease, IBD, gallbladder disease, alcoholic liver disease, and pancreatitis.</p>
      </header>

      <nav aria-label="ICD-10 quiz navigation" style={navStyle}>
        <Link href="/icd10" style={navLinkStyle}>ICD-10-CM home</Link>
        <Link href="/icd10/chapter-11-guidelines-reviewer" style={navLinkStyle}>Guidelines Reviewer</Link>
      </nav>

      <div style={cardStyle}>
        {finished ? (
          <div style={scoreStyle}>
            <h2 style={{ margin: "0 0 10px" }}>Quiz Complete</h2>
            <p style={{ fontSize: "40px", fontWeight: 800, color: "#0f766e", margin: "0 0 10px" }}>{score} / {questions.length}</p>
            <p style={{ color: "#5b6b68", marginBottom: "22px" }}>
              {score === questions.length ? "Perfect score — this chapter is solid." : score / questions.length >= 0.7 ? "Good run — review the ones you missed, then try again." : "Worth another pass — revisit the Guidelines Reviewer for the topics you missed."}
            </p>
            <button type="button" style={primaryBtnStyle} onClick={restart}>Restart Quiz</button>
          </div>
        ) : (
          <>
            <div style={progressStyle}>
              <span>Question {current + 1} of {questions.length}</span>
              <span style={topicChipStyle}>{q.topic}</span>
            </div>

            <p style={questionStyle}>{q.question}</p>

            <div style={optionsWrapStyle}>
              {q.options.map((opt, i) => {
                const letter = letters[i];
                const isSelected = selected === letter;
                const isCorrect = letter === q.correct;
                let style = { ...buttonBaseStyle };
                if (showAnswer) {
                  if (isCorrect) style = { ...style, background: "#f0fdf4", borderColor: "#16a34a", fontWeight: 700 };
                  else if (isSelected) style = { ...style, background: "#fef2f2", borderColor: "#dc2626" };
                } else if (isSelected) {
                  style = { ...style, borderColor: "#0f766e", background: "#f0fdfa" };
                }
                return (
                  <button key={letter} type="button" style={style} onClick={() => !showAnswer && setSelected(letter)}>
                    {opt}
                  </button>
                );
              })}
            </div>

            <div style={actionsRowStyle}>
              {!showAnswer ? (
                <button type="button" style={primaryBtnStyle} onClick={checkAnswer} disabled={!selected}>Check Answer</button>
              ) : (
                <button type="button" style={primaryBtnStyle} onClick={next}>{current < questions.length - 1 ? "Next Question →" : "See Final Score"}</button>
              )}
              <button type="button" style={secondaryBtnStyle} onClick={restart}>Restart</button>
            </div>

            {showAnswer && (
              <div style={answerBoxStyle}>
                <div style={explanationBoxStyle}>
                  <strong>✅ Correct answer: {q.correct}</strong>
                  <p style={{ margin: "8px 0 0" }}>{q.explanation}</p>
                </div>
                <div style={lookForBoxStyle}>
                  <strong>🔎 What to look for</strong>
                  <p style={{ margin: "8px 0 0" }}>{q.lookFor}</p>
                </div>
                <div style={eliminateBoxStyle}>
                  <strong>❌ How to eliminate wrong answers</strong>
                  <p style={{ margin: "8px 0 0" }}>{q.eliminate}</p>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      <div style={{ marginTop: "24px" }}>
        <Link href="/icd10" style={{ textDecoration: "none", color: "#0f766e", fontWeight: 700 }}>← Back to ICD-10-CM</Link>
      </div>
    </main>
  );
}
