"use client";

import { useState } from "react";

type Question = {
  question: string;
  options: string[];
  correct: string;
  explanation: string;
};

export default function QuizPage({
  title,
  questions,
}: {
  title: string;
  questions: Question[];
}) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const q = questions[current];

  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "20px",
      }}
    >
      <h1>{title}</h1>

      <h2>
        Question {current + 1} of {questions.length}
      </h2>

      <p>{q.question}</p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        {q.options.map((option, index) => {
          const letter = ["A", "B", "C", "D"][index];

          return (
            <button
              key={index}
              onClick={() => setSelected(letter)}
              style={{
                padding: "12px",
                textAlign: "left",
                borderRadius: "8px",
                border: "1px solid #ddd",
                cursor: "pointer",
              }}
            >
              {letter}. {option}
            </button>
          );
        })}
      </div>

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => setShowAnswer(true)}
          style={{
            padding: "10px 20px",
            marginRight: "10px",
          }}
        >
          Check Answer
        </button>

        {current < questions.length - 1 && (
          <button
            onClick={() => {
              setCurrent(current + 1);
              setSelected(null);
              setShowAnswer(false);
            }}
            style={{
              padding: "10px 20px",
            }}
          >
            Next
          </button>
        )}
      </div>

      {showAnswer && (
        <div
          style={{
            marginTop: "30px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "10px",
          }}
        >
          <h3>Correct Answer: {q.correct}</h3>

          <p>{q.explanation}</p>

          {selected && (
            <p>
              Your Answer: <strong>{selected}</strong>
            </p>
          )}
        </div>
      )}
    </main>
  );
}