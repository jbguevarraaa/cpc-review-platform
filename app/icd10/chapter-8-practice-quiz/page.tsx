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
    topic: "Otitis Externa",
    question: "A patient develops acute ear canal inflammation specifically documented as caused by a reaction to a new metal earring, with no bacterial infection present. What's coded?",
    options: [
      "A. A code from the infective otitis externa family",
      "B. H60.53, contact otitis externa",
      "C. H60.6, chronic otitis externa",
      "D. H71.0, cholesteatoma of attic",
    ],
    correct: "B",
    explanation: "H60.53 (contact otitis externa) is the noninfective subtype specifically for a contact allergen/irritant reaction — distinct from the infective (bacterial) \"swimmer's ear\" picture.",
    lookFor: "\"Reaction to a specific contact material, no infection\" is the cue for the contact (H60.53) noninfective subtype.",
    eliminate: "A wrongly applies the infective family to a case with no documented infection; D confuses this with an unrelated middle-ear condition.",
  },
  {
    topic: "Otitis Media",
    question: "A child recovers from an acute ear infection, and a follow-up exam weeks later finds fluid still trapped behind the eardrum with no signs of active infection. What's coded?",
    options: [
      "A. A code from the chronic suppurative otitis media family (H66)",
      "B. A code for otitis media with effusion (H65, nonsuppurative)",
      "C. A code from the acute suppurative otitis media family (H66)",
      "D. H71.1, cholesteatoma of tympanum",
    ],
    correct: "B",
    explanation: "Residual fluid after an acute infection resolves, with no active infection, is otitis media with effusion — a nonsuppurative (no pus) finding, coded under H65, not H66.",
    lookFor: "\"Fluid remains, infection resolved\" is the classic trap pointing to nonsuppurative otitis media with effusion, not ongoing suppurative disease.",
    eliminate: "A and C both wrongly use the suppurative (pus-forming) family for a case where the active infection has already resolved.",
  },
  {
    topic: "Otitis Media",
    question: "A patient has documented persistent, pus-draining middle ear infection that has continued for months, associated with cholesteatoma formation in the atticoantral region. What's coded?",
    options: [
      "A. A code for otitis media with effusion (H65, nonsuppurative)",
      "B. A code from the acute suppurative otitis media family (H66)",
      "C. H66.2-, chronic atticoantral suppurative otitis media",
      "D. H60.53, contact otitis externa",
    ],
    correct: "C",
    explanation: "Persistent, pus-forming middle ear disease associated with the atticoantral region is chronic atticoantral suppurative otitis media (H66.2-), distinct from both the acute suppurative presentation and the nonsuppurative effusion picture.",
    lookFor: "\"Persistent/months-long\" plus \"pus-draining\" plus a named chronic subtype (atticoantral) together point to the chronic suppurative family, not the acute or nonsuppurative codes.",
    eliminate: "A wrongly applies the nonsuppurative (no pus) code to a case explicitly described as pus-draining; B misses the \"months-long/persistent\" detail that shifts this from acute to chronic.",
  },
  {
    topic: "Cholesteatoma",
    question: "A patient's cholesteatoma is documented as located in the external ear canal, not the middle ear. What's coded?",
    options: [
      "A. H71.0, cholesteatoma of attic",
      "B. H71.3, diffuse cholesteatoma",
      "C. H60.4, cholesteatoma of external ear",
      "D. H80, otosclerosis",
    ],
    correct: "C",
    explanation: "Cholesteatoma of the external ear canal is coded under H60.4 (part of the otitis externa category), not under H71, which is reserved for middle-ear cholesteatoma.",
    lookFor: "\"Cholesteatoma\" alone doesn't determine the code — LOCATION (external canal vs. middle ear) is what decides between H60.4 and the H71 family.",
    eliminate: "A and B both wrongly apply middle-ear cholesteatoma codes to an external-ear-canal finding.",
  },
  {
    topic: "Cholesteatoma",
    question: "A patient's cholesteatoma is documented as located specifically in the mastoid portion of the middle ear. What's coded?",
    options: [
      "A. H71.0, cholesteatoma of attic",
      "B. H71.1, cholesteatoma of tympanum",
      "C. H71.2, cholesteatoma of mastoid",
      "D. H60.4, cholesteatoma of external ear",
    ],
    correct: "C",
    explanation: "H71.2 (cholesteatoma of mastoid) directly matches the documented location within the middle ear.",
    lookFor: "Middle-ear cholesteatoma codes (H71) are organized purely by specific location — attic, tympanum, mastoid, or diffuse.",
    eliminate: "A and B apply the wrong specific middle-ear location to this mastoid finding.",
  },
  {
    topic: "Cholesteatoma",
    question: "A patient's cholesteatoma is documented as located specifically in the tympanum, with no involvement of the attic, mastoid, or a diffuse spread. What's coded?",
    options: [
      "A. H71.0, cholesteatoma of attic",
      "B. H71.1, cholesteatoma of tympanum",
      "C. H71.2, cholesteatoma of mastoid",
      "D. H71.3, diffuse cholesteatoma",
    ],
    correct: "B",
    explanation: "H71.1 (cholesteatoma of tympanum) matches the documented tympanum-specific location — a distinct middle-ear subcode from attic, mastoid, or diffuse involvement.",
    lookFor: "Each middle-ear cholesteatoma location (attic, tympanum, mastoid, diffuse) has its own dedicated subcode — match the code to the exact location documented, not a nearby one.",
    eliminate: "A and C both apply a different specific middle-ear location than the tympanum documented here.",
  },
  {
    topic: "Otosclerosis",
    question: "A patient's hearing loss workup identifies otosclerosis as the cause, but the documentation doesn't specify which ear (or both) is affected. What's coded?",
    options: [
      "A. The H80 subcode with the laterality character for \"unspecified ear\"",
      "B. No code can be assigned without laterality",
      "C. A code from H90, sensorineural hearing loss, instead",
      "D. A code assuming bilateral involvement",
    ],
    correct: "A",
    explanation: "When laterality isn't documented, the H80 subcode with the unspecified-ear character is used — a coder never guesses a side that wasn't actually documented.",
    lookFor: "Missing laterality documentation is resolved with the \"unspecified\" character, not by guessing bilateral or a specific side.",
    eliminate: "D wrongly assumes bilateral involvement that was never actually documented.",
  },
  {
    topic: "Meniere's Disease",
    question: "A patient has classic Meniere's disease symptoms, confirmed by the treating specialist, but the chart never specifies which ear (or both) is affected. What's coded?",
    options: [
      "A. H81.01, Meniere's disease, right ear",
      "B. H81.03, Meniere's disease, bilateral",
      "C. H81.09, Meniere's disease, unspecified ear",
      "D. No code can be assigned without laterality",
    ],
    correct: "C",
    explanation: "H81.0 is organized entirely by laterality (right/left/bilateral/unspecified) — when laterality isn't documented, the unspecified-ear code (H81.09) is used.",
    lookFor: "Meniere's disease coding is a pure laterality exercise once the diagnosis is confirmed — missing laterality always routes to the unspecified code, never a guessed side.",
    eliminate: "A and B both assume laterality information that isn't actually documented here.",
  },
  {
    topic: "Vestibular Neuritis",
    question: "A patient develops sudden-onset vertigo with nausea and vomiting following a viral illness, with no hearing loss, expected to resolve over one to a few weeks. What's coded?",
    options: [
      "A. H81.4, vertigo of central origin",
      "B. H81.2, vestibular neuritis",
      "C. H90.3, sensorineural hearing loss, bilateral",
      "D. H81.0, Meniere's disease",
    ],
    correct: "B",
    explanation: "Sudden vertigo without hearing loss, following acute inner-ear nerve inflammation, is the classic presentation of vestibular neuritis (H81.2).",
    lookFor: "\"No hearing loss\" is a key distinguishing detail for vestibular neuritis — it specifically does not cause hearing loss, unlike several other conditions in this chapter.",
    eliminate: "C wrongly codes a hearing-loss diagnosis when no hearing loss is documented; D applies Meniere's disease, which does typically involve hearing loss and pressure sensation.",
  },
  {
    topic: "Vestibular Disorders",
    question: "A patient's vertigo is worked up and specifically attributed to a central (brain-related) cause rather than an inner-ear nerve problem. What's coded?",
    options: [
      "A. H81.2, vestibular neuritis",
      "B. A code from H81.4, vertigo of central origin",
      "C. H81.0, Meniere's disease",
      "D. H91.2, sudden idiopathic hearing loss",
    ],
    correct: "B",
    explanation: "H81.4 (vertigo of central origin) applies when the vertigo's cause is central/brain-related, distinct from H81.2, which is specifically for peripheral inner-ear nerve inflammation.",
    lookFor: "\"Central cause\" documented explicitly rules out the peripheral vestibular neuritis code and points to H81.4 instead.",
    eliminate: "A wrongly applies the peripheral-cause code to a documented central-cause vertigo.",
  },
  {
    topic: "Hearing Loss",
    question: "A patient has hearing loss confirmed by audiometry to be caused by a problem in the inner ear (cochlea) itself, not the outer or middle ear. What code family applies?",
    options: [
      "A. Conductive hearing loss (H90.0–H90.2)",
      "B. Sensorineural hearing loss (H90.3–H90.5)",
      "C. Mixed conductive and sensorineural hearing loss (H90.6–H90.8)",
      "D. H91.2, sudden idiopathic hearing loss",
    ],
    correct: "B",
    explanation: "A problem in the inner ear or auditory nerve is classified as sensorineural hearing loss (H90.3–H90.5) — distinct from conductive (outer/middle ear) and mixed causes.",
    lookFor: "The location of the underlying problem (inner ear/nerve vs. outer/middle ear) is what determines the H90 mechanism-based code family.",
    eliminate: "A wrongly applies the conductive (outer/middle ear) mechanism to an inner-ear finding.",
  },
  {
    topic: "Hearing Loss",
    question: "A patient's hearing loss is confirmed to be caused by otosclerosis blocking normal sound transmission through the middle ear, with the inner ear and auditory nerve functioning normally. What code family applies?",
    options: [
      "A. Conductive hearing loss (H90.0–H90.2)",
      "B. Sensorineural hearing loss (H90.3–H90.5)",
      "C. Mixed conductive and sensorineural hearing loss (H90.6–H90.8)",
      "D. H91.3, deafmutism",
    ],
    correct: "A",
    explanation: "A documented problem blocking sound transmission in the outer/middle ear, with the inner ear and nerve intact, is conductive hearing loss (H90.0–H90.2).",
    lookFor: "\"Blocks sound transmission\" with the inner ear/nerve confirmed normal is the classic conductive-mechanism picture, distinct from sensorineural or mixed.",
    eliminate: "B wrongly applies the inner-ear/nerve mechanism to a case where those structures are explicitly functioning normally.",
  },
  {
    topic: "Hearing Loss",
    question: "A patient's audiology workup confirms hearing loss caused by BOTH a middle-ear conduction problem AND a separate, coexisting inner-ear/nerve problem at the same time. What code family applies?",
    options: [
      "A. Conductive hearing loss (H90.0–H90.2) alone",
      "B. Sensorineural hearing loss (H90.3–H90.5) alone",
      "C. Mixed conductive and sensorineural hearing loss (H90.6–H90.8)",
      "D. Two separate codes, one from each mechanism family",
    ],
    correct: "C",
    explanation: "When both a conductive and a sensorineural component are documented together, the mixed conductive-and-sensorineural code family (H90.6–H90.8) applies as its own distinct mechanism category, rather than coding each mechanism separately.",
    lookFor: "\"Both mechanisms documented together\" is the specific trigger for the mixed code family, not a combination of the two single-mechanism code families.",
    eliminate: "D wrongly stacks two separate single-mechanism codes when a dedicated mixed-mechanism code family exists for exactly this combination.",
  },
  {
    topic: "Hearing Loss",
    question: "A patient wakes up with sudden hearing loss in one ear overnight, with no identifiable cause found on workup. What's coded?",
    options: [
      "A. A code from H90.3-H90.5, sensorineural hearing loss",
      "B. H91.2, sudden idiopathic hearing loss",
      "C. A code from H90.0-H90.2, conductive hearing loss",
      "D. H91.3, deafmutism",
    ],
    correct: "B",
    explanation: "H91.2 is the specific code for hearing loss with sudden onset and no identified cause — separate from the gradual, mechanism-based H90 codes, which require a known mechanism.",
    lookFor: "\"Sudden onset\" plus \"no identified cause\" together are the specific trigger for H91.2, rather than guessing a mechanism that wasn't established.",
    eliminate: "A and C both assume a specific mechanism (sensorineural or conductive) that the workup didn't actually establish.",
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

export default function Icd10Chapter8PracticeQuizPage() {
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
        <p style={kickerStyle}>ICD-10-CM · CHAPTER 8 · PRACTICE QUIZ</p>
        <h1 style={{ margin: 0, fontSize: "clamp(24px, 5vw, 38px)" }}>Chapter 8 Practice Quiz</h1>
        <p style={{ margin: "10px 0 0", fontSize: "15.5px", lineHeight: 1.5 }}>13 original scenario questions with elimination tricks, covering otitis externa/media, cholesteatoma, otosclerosis, Meniere's disease, vestibular disorders, and hearing loss.</p>
      </header>

      <nav aria-label="ICD-10 quiz navigation" style={navStyle}>
        <Link href="/icd10" style={navLinkStyle}>ICD-10-CM home</Link>
        <Link href="/icd10/chapter-8-guidelines-reviewer" style={navLinkStyle}>Guidelines Reviewer</Link>
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
