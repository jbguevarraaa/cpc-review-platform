"use client";

import Link from "next/link";
import { useState } from "react";

export type QuizItem = {
  topic: string;
  question: string;
  /** The right answer. The player places it at a rotating position so the answer letters stay balanced. */
  correct: string;
  wrong: [string, string, string];
  explanation: string;
  lookFor: string;
  eliminate: string;
};

export type FlashItem = { topic: string; front: string; back: string };
export type NavItem = { href: string; label: string };

const LETTERS = ["A", "B", "C", "D"] as const;
// Where the correct answer sits for question i (cycles every 8, two of each letter).
const CORRECT_POSITION = [2, 0, 3, 1, 1, 3, 0, 2];

function arrange(q: QuizItem, i: number) {
  const pos = CORRECT_POSITION[i % CORRECT_POSITION.length];
  const options = [...q.wrong];
  options.splice(pos, 0, q.correct);
  return { options, correctLetter: LETTERS[pos] };
}

const mainBase = { margin: "0 auto", minHeight: "100vh", background: "#fff8f3", color: "#2b1a12", fontFamily: "Arial, sans-serif" };
const navLinkStyle = { textDecoration: "none", color: "#c2410c", background: "#ffffff", border: "1px solid #f1e0d3", borderRadius: "999px", fontWeight: 700 };
const chipStyle = { background: "#fff1e6", border: "1px solid #fed7aa", color: "#c2410c", borderRadius: "999px", fontWeight: 800 };

/* ---------------------------------- QUIZ ---------------------------------- */

export function QuizPlayer({ kicker, title, blurb, nav, items }: { kicker: string; title: string; blurb: string; nav: NavItem[]; items: QuizItem[] }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState<boolean[]>(new Array(items.length).fill(false));
  const [finished, setFinished] = useState(false);

  const q = items[current];
  const { options, correctLetter } = arrange(q, current);

  function checkAnswer() {
    if (!selected) return;
    setShowAnswer(true);
    if (!answered[current]) {
      const nextAnswered = [...answered];
      nextAnswered[current] = true;
      setAnswered(nextAnswered);
      if (selected === correctLetter) setScore((s) => s + 1);
    }
  }
  function next() {
    if (current < items.length - 1) {
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
    setAnswered(new Array(items.length).fill(false));
    setFinished(false);
  }

  const primaryBtn = { padding: "11px 22px", borderRadius: "999px", border: "none", background: "#c2410c", color: "#fff", fontWeight: 800, cursor: "pointer", fontSize: "14px" };
  const secondaryBtn = { padding: "11px 22px", borderRadius: "999px", border: "1px solid #f1e0d3", background: "#fff", color: "#c2410c", fontWeight: 800, cursor: "pointer", fontSize: "14px" };
  const box = { borderRadius: "10px", padding: "14px 16px", lineHeight: 1.65, fontSize: "14px" };

  return (
    <main style={{ ...mainBase, maxWidth: "900px", padding: "36px clamp(12px, 4vw, 24px) 64px" }}>
      <header style={{ background: "linear-gradient(135deg, #431407, #c2410c)", color: "white", padding: "40px clamp(20px, 4vw, 36px)", borderRadius: "18px", marginBottom: "24px", boxShadow: "0 12px 28px rgba(67,20,7,0.22)" }}>
        <p style={{ margin: "0 0 10px", color: "#fed7aa", fontWeight: 800, letterSpacing: "0.08em", fontSize: "13px" }}>{kicker}</p>
        <h1 style={{ margin: 0, fontSize: "clamp(24px, 5vw, 38px)" }}>{title}</h1>
        <p style={{ margin: "10px 0 0", fontSize: "15.5px", lineHeight: 1.5 }}>{blurb}</p>
      </header>

      <nav aria-label="Digestive quiz navigation" style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "22px" }}>
        {nav.map((n) => <Link key={n.href} href={n.href} style={{ ...navLinkStyle, padding: "9px 14px", fontSize: "13.5px" }}>{n.label}</Link>)}
      </nav>

      <div style={{ background: "#ffffff", border: "1px solid #f1e0d3", borderRadius: "14px", padding: "clamp(18px, 4vw, 28px)", boxShadow: "0 5px 16px rgba(67,20,7,0.06)" }}>
        {finished ? (
          <div style={{ textAlign: "center", padding: "40px 20px" }}>
            <h2 style={{ margin: "0 0 10px" }}>Quiz Complete</h2>
            <p style={{ fontSize: "40px", fontWeight: 800, color: "#c2410c", margin: "0 0 10px" }}>{score} / {items.length}</p>
            <p style={{ color: "#7c3a1a", marginBottom: "22px" }}>
              {score === items.length ? "Perfect score — this series is solid." : score / items.length >= 0.7 ? "Good run — review the ones you missed, then try again." : "Worth another pass — revisit the Guidelines Reviewer for the topics you missed."}
            </p>
            <button type="button" style={primaryBtn} onClick={restart}>Restart Quiz</button>
          </div>
        ) : (
          <>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px", flexWrap: "wrap", marginBottom: "10px", fontSize: "13px", color: "#7c3a1a", fontWeight: 700 }}>
              <span>Question {current + 1} of {items.length}</span>
              <span style={{ ...chipStyle, padding: "4px 12px", fontSize: "12px" }}>{q.topic}</span>
            </div>

            <p style={{ fontSize: "17px", lineHeight: 1.6, margin: "14px 0 18px", color: "#111827" }}>{q.question}</p>

            <div style={{ display: "grid", gap: "10px" }}>
              {options.map((opt, i) => {
                const letter = LETTERS[i];
                const isSelected = selected === letter;
                const isCorrect = letter === correctLetter;
                let style: React.CSSProperties = { textAlign: "left", padding: "13px 16px", borderRadius: "10px", border: "1px solid #f1e0d3", background: "#fff", cursor: "pointer", fontSize: "14.5px", lineHeight: 1.5 };
                if (showAnswer) {
                  if (isCorrect) style = { ...style, background: "#f0fdf4", borderColor: "#16a34a", fontWeight: 700 };
                  else if (isSelected) style = { ...style, background: "#fef2f2", borderColor: "#dc2626" };
                } else if (isSelected) {
                  style = { ...style, borderColor: "#c2410c", background: "#fff1e6" };
                }
                return (
                  <button key={letter} type="button" style={style} onClick={() => !showAnswer && setSelected(letter)}>
                    {letter}. {opt}
                  </button>
                );
              })}
            </div>

            <div style={{ display: "flex", gap: "12px", marginTop: "20px", flexWrap: "wrap" }}>
              {!showAnswer ? (
                <button type="button" style={{ ...primaryBtn, opacity: selected ? 1 : 0.5 }} onClick={checkAnswer} disabled={!selected}>Check Answer</button>
              ) : (
                <button type="button" style={primaryBtn} onClick={next}>{current < items.length - 1 ? "Next Question →" : "See Final Score"}</button>
              )}
              <button type="button" style={secondaryBtn} onClick={restart}>Restart</button>
            </div>

            {showAnswer && (
              <div style={{ marginTop: "22px", display: "grid", gap: "12px" }}>
                <div style={{ ...box, background: "#f0fdf4", border: "1px solid #bbf7d0", borderLeft: "5px solid #16a34a" }}>
                  <strong>✅ Correct answer: {correctLetter}</strong>
                  <p style={{ margin: "8px 0 0" }}>{q.explanation}</p>
                </div>
                <div style={{ ...box, background: "#eff6ff", border: "1px solid #bfdbfe", borderLeft: "5px solid #2563eb" }}>
                  <strong>🔎 What to look for</strong>
                  <p style={{ margin: "8px 0 0" }}>{q.lookFor}</p>
                </div>
                <div style={{ ...box, background: "#fef2f2", border: "1px solid #fecaca", borderLeft: "5px solid #dc2626" }}>
                  <strong>❌ How to eliminate wrong answers</strong>
                  <p style={{ margin: "8px 0 0" }}>{q.eliminate}</p>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      <div style={{ marginTop: "24px" }}>
        <Link href="/cpt/surgery/40,000" style={{ textDecoration: "none", color: "#c2410c", fontWeight: 700 }}>← Back to Digestive System</Link>
      </div>
    </main>
  );
}

/* ------------------------------- FLASHCARDS ------------------------------- */

function shuffled<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function FlashcardPlayer({ kicker, title, nav, cards }: { kicker: string; title: string; nav: NavItem[]; cards: FlashItem[] }) {
  const [deck, setDeck] = useState<FlashItem[]>(cards);
  const [current, setCurrent] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const card = deck[current];

  const face: React.CSSProperties = { width: "100%", minHeight: "300px", borderRadius: "20px", padding: "28px 24px", display: "flex", flexDirection: "column", justifyContent: "center", cursor: "pointer", boxShadow: "0 12px 28px rgba(67,20,7,0.16)", userSelect: "none" };
  const label: React.CSSProperties = { fontSize: "11px", fontWeight: 800, letterSpacing: "0.1em", opacity: 0.75, marginBottom: "14px" };
  const hint: React.CSSProperties = { marginTop: "18px", fontSize: "12px", opacity: 0.7, fontWeight: 700 };
  const ctrl: React.CSSProperties = { flex: 1, padding: "13px", borderRadius: "999px", border: "1px solid #f1e0d3", background: "#fff", color: "#c2410c", fontWeight: 800, cursor: "pointer", fontSize: "14px" };

  function go(delta: number) {
    setFlipped(false);
    setCurrent((c) => (c + delta + deck.length) % deck.length);
  }
  function shuffle() {
    setDeck(shuffled(cards));
    setCurrent(0);
    setFlipped(false);
  }

  return (
    <main style={{ ...mainBase, maxWidth: "480px", padding: "28px 18px 56px", display: "flex", flexDirection: "column" }}>
      <header style={{ marginBottom: "16px" }}>
        <p style={{ margin: "0 0 6px", color: "#c2410c", fontWeight: 800, letterSpacing: "0.08em", fontSize: "12px" }}>{kicker}</p>
        <h1 style={{ margin: 0, fontSize: "22px", color: "#111827" }}>{title}</h1>
        <nav aria-label="Digestive navigation" style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "12px", marginBottom: "18px" }}>
          {nav.map((n) => <Link key={n.href} href={n.href} style={{ ...navLinkStyle, padding: "7px 12px", fontSize: "12.5px" }}>{n.label}</Link>)}
        </nav>
      </header>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px", fontSize: "13px", color: "#7c3a1a", fontWeight: 700 }}>
        <span>Card {current + 1} of {deck.length}</span>
        <span style={{ ...chipStyle, padding: "3px 11px", fontSize: "11.5px" }}>{card.topic}</span>
      </div>

      <div style={{ flex: 1, display: "flex", alignItems: "stretch" }}>
        {!flipped ? (
          <div style={{ ...face, background: "linear-gradient(135deg, #431407, #c2410c)", color: "#fff" }} onClick={() => setFlipped(true)} role="button" tabIndex={0} onKeyDown={(e) => e.key === "Enter" && setFlipped(true)}>
            <p style={label}>QUESTION</p>
            <p style={{ fontSize: "20px", lineHeight: 1.5, fontWeight: 700, margin: 0 }}>{card.front}</p>
            <p style={hint}>👆 Tap to reveal the answer</p>
          </div>
        ) : (
          <div style={{ ...face, background: "#ffffff", border: "2px solid #c2410c", color: "#111827" }} onClick={() => setFlipped(false)} role="button" tabIndex={0} onKeyDown={(e) => e.key === "Enter" && setFlipped(false)}>
            <p style={{ ...label, color: "#c2410c" }}>ANSWER</p>
            <p style={{ fontSize: "17px", lineHeight: 1.6, margin: 0, color: "#1f2937" }}>{card.back}</p>
            <p style={{ ...hint, color: "#7c3a1a" }}>👆 Tap to flip back</p>
          </div>
        )}
      </div>

      <div style={{ display: "flex", gap: "10px", marginTop: "18px" }}>
        <button type="button" style={ctrl} onClick={() => go(-1)}>← Prev</button>
        <button type="button" style={ctrl} onClick={() => go(1)}>Next →</button>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "12px" }}>
        <button type="button" style={{ padding: "13px 18px", borderRadius: "999px", border: "none", background: "#c2410c", color: "#fff", fontWeight: 800, cursor: "pointer", fontSize: "14px" }} onClick={shuffle}>🔀 Shuffle Deck</button>
      </div>
    </main>
  );
}
