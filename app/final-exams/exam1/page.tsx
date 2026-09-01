"use client";
import React from "react";
export default function Exam1() {
  const questions = [
  {
    question:
      "A patient presents with acute bronchitis. Which ICD-10-CM code is appropriate?",
    options: [
      "A. J20.9",
      "B. J45.909",
      "C. J18.9",
      "D. J06.9",
    ],
    correct: "A",
  },
  {
    question:
      "Which CPT code represents an office visit for an established patient?",
    options: [
      "A. 99201",
      "B. 99213",
      "C. 99385",
      "D. 99499",
    ],
    correct: "B",
  },
];

const [currentQuestion, setCurrentQuestion] =
  React.useState(0);

const [selectedAnswer, setSelectedAnswer] =

  React.useState("");
  const [score, setScore] = React.useState(0);

const question = questions[currentQuestion];
  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          background:
            "linear-gradient(135deg, #2563eb, #7c3aed)",
          color: "white",
          padding: "40px",
          borderRadius: "20px",
          marginBottom: "30px",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            marginBottom: "10px",
          }}
        >
          🎓 CPC Final Exam 1
        </h1>

        <p>
          100 Questions • Timed Exam • Auto Scoring
        </p>
      </div>

      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "16px",
          boxShadow:
            "0 4px 12px rgba(0,0,0,0.08)",
        }}
      >
        <h2>
  Question {currentQuestion + 1}
</h2>

        <p>{question.question}</p>

        <div style={{ marginTop: "20px" }}>
          {question.options.map((option, index) => (
  <div key={index}>
    <button
      onClick={() =>
        setSelectedAnswer(
          option.charAt(0)
        )
      }
    >
      {option}
    </button>

    <br />
    <br />
  </div>
))}

<p
  style={{
    marginTop: "20px",
    fontWeight: "bold",
  }}
>
  Selected Answer: {selectedAnswer}
  <p
  style={{
    fontWeight: "bold",
    marginTop: "10px",
  }}
>
  Score: {score}
</p>
</p>
<button
  style={{
    marginTop: "20px",
    padding: "10px 20px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  }}
 onClick={() => {
  if (
    selectedAnswer ===
    question.correct
  ) {
    setScore(score + 1);
  }

  if (
    currentQuestion <
    questions.length - 1
  ) {
    setCurrentQuestion(
      currentQuestion + 1
    );
    setSelectedAnswer("");
  }
}}
>
  Next Question →
</button>
        </div>
      </div>
    </main>
  );
}