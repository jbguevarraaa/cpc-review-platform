"use client";

import React, { useState } from "react";

const questions = [
  {
    question:
      "Edith had a dermal lesion on her left foot. Dr. Roger completed a punch biopsy and then removed the lesion by shaving during the same session. The lesion diameter was documented as 3.6 cm. Which code(s) should Dr. Roger use to report these services?",
    options: [
      "11308",
      "11424, 11104-59",
      "11303",
      "11308, 11104-59",
    ],
    correct: "A",
    explanation:
      "When a lesion is biopsied and then completely removed during the same operative session, the biopsy is not separately reported because it is considered part of the definitive procedure. A shave removal of a lesion on the foot measuring 3.1–4.0 cm is reported with 11308.",
  },

  {
    question:
      "Which code describes a cutaneous flap, transposed into a nearby but not immediately adjacent defect, with a pedicle that incorporates an axial vessel into its design?",
    options: [
      "15740",
      "15756",
      "15757",
      "15758",
    ],
    correct: "A",
    explanation:
      "15740 describes an island pedicle flap requiring identification and preservation of a named axial vessel. The flap is transferred to a nearby but not immediately adjacent defect.",
  },

  {
    question:
      "Dr. Tapper completed a percutaneous image-guided biopsy and placement of a localized clip in the right breast under ultrasonic guidance following a diagnostic mammogram. How do you report the doctor's services?",
    options: [
      "19081, 19084-51, 77002-26",
      "19083",
      "19085, 76942-26",
      "19100-51, 77012-26",
    ],
    correct: "B",
    explanation:
      "19083 includes percutaneous breast biopsy, ultrasound guidance, and placement of a localization device (clip). These components are included in the single code.",
  },

  {
    question:
      "Dr. Armstrong, a plastic surgeon, completed a bilateral rhytidectomy of the neck and a suction-assisted lipectomy of the right upper arm. Which code(s) should be reported for Dr. Armstrong's services?",
    options: [
      "15826-59, 15879-RT-59",
      "15826-RT, 15828-50, 15878-RT-59",
      "15828-50, 15879-RT-59",
      "15828-50, 15878-RT-59",
    ],
    correct: "D",
    explanation:
      "15828-50 reports bilateral rhytidectomy of the neck. 15878-RT reports suction-assisted lipectomy of the upper extremity. Modifier 59 identifies the liposuction as a separate procedure from the rhytidectomy.",
  },

  {
    question:
      "A patient has an ulcer on his left ischial tuberosity. After examination, a decision was made to complete debridement. The documented area debrided was 32 sq cm, including muscle and subcutaneous tissue. How should you report this service?",
    options: [
      "11044, 11047-51",
      "11043, 11046",
      "11043, 11046, 97597-59, 97598-51",
      "97597, 97598-51",
    ],
    correct: "B",
    explanation:
      "11043 reports debridement including muscle/fascia for the first 20 sq cm. 11046 reports each additional 20 sq cm or part thereof. For 32 sq cm, report one unit of 11043 and one unit of 11046.",
  },

  {
    question:
      "A surgeon excised a benign 5 cm lesion from the patient's back. Adjacent tissue transfer was performed to repair the 11 sq cm defect resulting from the lesion excision. What are the correct code(s) for these services?",
    options: [
      "14000",
      "11406, 14001-51",
      "14001",
      "11406, 14000-51",
    ],
    correct: "C",
    explanation:
      "Adjacent tissue transfer codes include the excision of the lesion and creation and transfer of the flap. Because the defect measured 11 sq cm, 14001 is reported. The lesion excision is not separately coded.",
  },

  {
    question:
      "A 55-year-old patient had seven toenails debrided. How should you report this service?",
    options: [
      "11720, 11721-51",
      "11000, 11721-59",
      "11000, 11001-51",
      "11721",
    ],
    correct: "D",
    explanation:
      "11721 reports debridement of 6 or more nails. Since seven toenails were debrided, only 11721 is reported.",
  },

  {
    question:
      "A patient presents for excision of an infected 3 cm sebaceous cyst on her right anterior lower leg. The cyst involved the non-muscle fascia. After excision, the doctor closed the non-muscle fascia as well as the skin and subcutaneous tissues. What CPT code(s) should be reported?",
    options: [
      "11403, 12032-51",
      "11403, 12032-59",
      "11423, 12002-51",
      "11404, 12042-51",
    ],
    correct: "A",
    explanation:
      "11403 reports excision of a benign lesion including cyst of the trunk, arms, or legs, measuring 2.1–3.0 cm. 12032 reports intermediate repair of the extremities. The layered closure qualifies as an intermediate repair.",
  },

  {
    question:
      "Dr. Long completed an excision of a malignant lesion from the scalp of a 45-year-old patient. The total excised diameter of lesion and margins was 5.4 cm and closed with layered 3-0 Prolene. How should these services be reported?",
    options: [
      "11626, 12032-51",
      "11422, 12032-51, 96372, J2001",
      "11624, 12032-51, 96372, J2001",
      "11624, 12032-51",
    ],
    correct: "A",
    explanation:
      "11626 reports excision of a malignant lesion of the scalp, neck, hands, feet, or genitalia with an excised diameter over 4.0 cm. 12032 reports the intermediate layered repair. Local anesthetic administration is not separately reportable.",
  },

  {
    question:
      "A patient presents for destruction of premalignant lesions. The patient had five lesions. What are the correct code(s) for these services?",
    options: [
      "17000, 17003 × 4",
      "11200",
      "17000, 17003",
      "17000 × 5",
    ],
    correct: "A",
    explanation:
      "17000 reports the first premalignant lesion. 17003 reports each additional premalignant lesion from 2–14 lesions. For five lesions, report 17000 for the first lesion and 17003 four times for the remaining lesions.",
  },
];

export default function PostWorkQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const letters = ["A", "B", "C", "D"];

  const handleNext = () => {
    if (!selectedAnswer) return;

    const updatedAnswers = [...answers, selectedAnswer];

    if (currentQuestion < questions.length - 1) {
      setAnswers(updatedAnswers);
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
    } else {
      setAnswers(updatedAnswers);
      setShowResults(true);
    }
  };

  const score = answers.filter(
    (answer, index) => answer === questions[index].correct
  ).length;

  if (showResults) {
    const percentage = Math.round((score / questions.length) * 100);

    return (
      <main
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "40px",
          fontFamily: "Arial",
          background: "#f5f7fb",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            background: "linear-gradient(135deg,#2563eb,#7c3aed)",
            color: "white",
            padding: "40px",
            borderRadius: "20px",
            marginBottom: "30px",
          }}
        >
          <h1>📝 Post-Work Quiz Complete</h1>

          <h2>
            Score: {score} / {questions.length}
          </h2>

          <h2>{percentage}%</h2>

          <h2>
            {percentage >= 70 ? "✅ PASS" : "❌ FAIL"}
          </h2>
        </div>

        {questions.map((q, index) => (
          <div
            key={index}
            style={{
              background: "white",
              padding: "25px",
              marginBottom: "20px",
              borderRadius: "16px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            }}
          >
            <h3>Question {index + 1}</h3>

            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.6",
              }}
            >
              {q.question}
            </p>

            <p>
              <strong>Your Answer:</strong>{" "}
              {answers[index] || "No answer"}
            </p>

            <p>
              <strong>Correct Answer:</strong> {q.correct}
            </p>

            <p
              style={{
                fontWeight: "bold",
              }}
            >
              {answers[index] === q.correct
                ? "✅ Correct"
                : "❌ Incorrect"}
            </p>

            <div
              style={{
                marginTop: "15px",
                background: "#f8fafc",
                padding: "15px",
                borderRadius: "10px",
              }}
            >
              <strong>📖 Why:</strong>

              <p
                style={{
                  lineHeight: "1.6",
                }}
              >
                {q.explanation}
              </p>
            </div>
          </div>
        ))}

        <button
          onClick={() => {
            setCurrentQuestion(0);
            setSelectedAnswer("");
            setAnswers([]);
            setShowResults(false);
          }}
          style={{
            padding: "12px 24px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Retake Quiz
        </button>
      </main>
    );
  }

  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "40px",
        fontFamily: "Arial",
        background: "#f5f7fb",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          background:
            "linear-gradient(135deg,#2563eb,#7c3aed)",
          color: "white",
          padding: "40px",
          borderRadius: "20px",
          marginBottom: "30px",
        }}
      >
        <h1>📝 10,000 Series Post-Work Quiz</h1>

        <p
          style={{
            fontSize: "18px",
          }}
        >
          Question {currentQuestion + 1} of{" "}
          {questions.length}
        </p>
      </div>

      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "16px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        }}
      >
        <h2>
          Question {currentQuestion + 1}
        </h2>

        <p
          style={{
            fontSize: "17px",
            lineHeight: "1.6",
          }}
        >
          {questions[currentQuestion].question}
        </p>

        <div
          style={{
            marginTop: "25px",
          }}
        >
          {questions[currentQuestion].options.map(
            (option, index) => (
              <label
                key={index}
                style={{
                  display: "block",
                  marginBottom: "15px",
                  padding: "15px",
                  border:
                    selectedAnswer === letters[index]
                      ? "2px solid #2563eb"
                      : "1px solid #ddd",
                  borderRadius: "10px",
                  cursor: "pointer",
                  background:
                    selectedAnswer === letters[index]
                      ? "#eff6ff"
                      : "white",
                  transition: "0.2s",
                }}
              >
                <input
                  type="radio"
                  name="answer"
                  value={letters[index]}
                  checked={
                    selectedAnswer === letters[index]
                  }
                  onChange={() =>
                    setSelectedAnswer(letters[index])
                  }
                  style={{
                    marginRight: "10px",
                  }}
                />

                <strong>
                  {letters[index]}.
                </strong>{" "}
                {option}
              </label>
            )
          )}
        </div>

        <button
          onClick={handleNext}
          disabled={!selectedAnswer}
          style={{
            marginTop: "20px",
            padding: "12px 24px",
            background: selectedAnswer
              ? "#2563eb"
              : "#94a3b8",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: selectedAnswer
              ? "pointer"
              : "not-allowed",
            fontSize: "16px",
          }}
        >
          {currentQuestion === questions.length - 1
            ? "Submit Quiz"
            : "Next Question →"}
        </button>
      </div>
    </main>
  );
}