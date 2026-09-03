"use client";

import { useState } from "react";

type Question = {
  question: string;
  options: string[];
  correct: string;
  explanation: string;
};

const questions: Question[] = [
  {
    question:
      "Christina is a 52-year-old patient who underwent a subcutaneous excision of an 8-cm spongy tumor on her upper abdominal wall. How should you report this procedure?",
    options: ["22903", "22905", "22902", "22900"],
    correct: "A",
    explanation:
      "Code 22900 is for a subfascial tumor and 22905 is for radical resection. Codes 22902-22903 report excision of subcutaneous tumors. Because the tumor is 8 cm, 22903 is the appropriate code.",
  },
  {
    question:
      "Reese suffered a dislocation to his right fourth carpometacarpal. Dr. Lewis completed a closed manipulation under anesthesia and repaired Reese's injury. Which code should Dr. Lewis report?",
    options: ["26675", "26605", "26670", "26641"],
    correct: "A",
    explanation:
      "Codes 26670-26675 describe closed treatment of a carpometacarpal dislocation other than the thumb. Code 26675 is used when manipulation requires anesthesia, which matches this case.",
  },
  {
    question:
      "The physician performed an arthroscopy of the TMJ with biopsy of soft tissue. What is the appropriate CPT code?",
    options: ["21010", "29800", "21073", "29804"],
    correct: "D",
    explanation:
      "Code 29804 describes surgical arthroscopy of the temporomandibular joint. Code 29800 is for diagnostic arthroscopy with or without synovial biopsy, while 21010 describes an open procedure.",
  },
  {
    question:
      "A patient was stabbed in the right arm. The stab wound was enlarged and cleaned, foreign materials were removed and inspected, and coagulation of minor blood vessels was completed. Which code should you report?",
    options: ["20103, 24200", "24000, 20103-59", "20103", "24200, 24000-59"],
    correct: "C",
    explanation:
      "Codes 20100-20103 describe exploration of wounds resulting from penetrating trauma. Wound exploration includes removal of foreign material as part of the surgical package, so 20103 is reported alone.",
  },
  {
    question:
      "Dr. Hewes completed an anterior arthrodesis fusion, with a structural allograft and minimal discectomy at L1-2, L3-4, and L4-5. Anterior instrumentation was inserted for stabilization of the entire lumbar region. What code set should be reported?",
    options: [
      "22558, 22585 x 2, 20931, 22846",
      "63075, 22558, 22614 x 2, 20931-51, 22846-62",
      "22558, 22585 x 2, 20931-51, 22846-62",
      "22612, 22614 x 2, 20931, 22846",
    ],
    correct: "A",
    explanation:
      "The anterior or anterolateral arthrodesis codes range from 22548-22586. Code 22612 uses a posterior approach, and 63075 is for nerve decompression. Code 20931 is an add-on code and is not appended with modifier 51. The correct set is 22558, 22585 x 2, 20931, and 22846.",
  },
  {
    question:
      "A week after the initial consultation, a 62-year-old female patient came to Dr. Stegman for a surgical right hip arthroscopy, including a femoroplasty to repair the cam lesion. How should today's services be reported?",
    options: ["29914-RT", "29860-RT, 73525-26, 73701-26", "29914-RT, 73525, 73701", "27130-RT"],
    correct: "A",
    explanation:
      "Code 29914 describes surgical hip arthroscopy with femoroplasty for treatment of a cam lesion. No imaging was documented as required, so no radiology code is reported.",
  },
  {
    question:
      "A physician excised the head of the humeral bone and replaced it with the appropriate implant. What is the correct code for this procedure?",
    options: ["23195", "23195, 23470", "23470", "23472"],
    correct: "C",
    explanation:
      "Code 23470 describes glenohumeral joint arthroplasty with hemiarthroplasty. The note under 23195 directs replacement of the humeral head with an implant to 23470 only.",
  },
  {
    question:
      "Jack's fracture is not healing as expected and the implant needs to be replaced. Today, Dr. Gene completed open treatment with internal fixation of the radial neck, including replacement of the prosthetic radial head. What code should be reported?",
    options: ["24366-LT", "25607-LT", "24666-LT", "24587-LT"],
    correct: "C",
    explanation:
      "Code 24666-LT describes open treatment of a radial head or neck fracture, including internal fixation or radial head excision when performed, with radial head prosthetic replacement.",
  },
  {
    question:
      "A patient, under general anesthesia performed by the surgeon, underwent a primary repair to the left ankle for a disrupted ligament. During the same procedure, the patient required a percutaneous tenotomy to lengthen the Achilles tendon. Which codes should be reported?",
    options: ["27695-LT, 27606-59-LT", "27698-LT, 27685-59-LT, 01472-47", "27698-LT, 27605-59-LT, 01472-47", "27695-LT, 27685-59-LT"],
    correct: "D",
    explanation:
      "Code 27695 reports primary repair of a disrupted ankle ligament. Code 27685 reports the separate tendon-lengthening procedure. The anesthesia was performed by the surgeon and is not separately reported here.",
  },
  {
    question:
      "A patient underwent a mini-open repair of the acute rupture of her right rotator cuff. How should you report this procedure?",
    options: ["23410-RT, 29827-RT-59", "29827-RT", "23412-RT", "23410-RT"],
    correct: "D",
    explanation:
      "Code 23410 reports open or mini-open repair of an acute rotator cuff rupture. Code 23412 is for chronic ruptures, and 29827 is the arthroscopic code.",
  },
];

const letters = ["A", "B", "C", "D"];

export default function TwentyThousandPostWorkQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleNext = () => {
    if (!selectedAnswer) return;

    const updatedAnswers = [...answers, selectedAnswer];
    setAnswers(updatedAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setAnswers([]);
    setShowResults(false);
  };

  const score = answers.filter(
    (answer, index) => answer === questions[index]?.correct,
  ).length;

  if (showResults) {
    const percentage = Math.round((score / questions.length) * 100);

    return (
      <main style={styles.main}>
        <header style={styles.header}>
          <h1>20,000 Series Post-Work Quiz Complete</h1>
          <h2>Score: {score} / {questions.length}</h2>
          <h2>{percentage}%</h2>
          <h2>{percentage >= 70 ? "PASS" : "FAIL"}</h2>
        </header>

        {questions.map((question, index) => (
          <section key={question.question} style={styles.resultCard}>
            <h3>Question {index + 1}</h3>
            <p>{question.question}</p>
            <p><strong>Your Answer:</strong> {answers[index] || "No answer"}</p>
            <p><strong>Correct Answer:</strong> {question.correct}</p>
            <p style={{ fontWeight: "bold" }}>
              {answers[index] === question.correct ? "Correct" : "Incorrect"}
            </p>
            <div style={styles.explanation}>
              <strong>Why:</strong>
              <p>{question.explanation}</p>
            </div>
          </section>
        ))}

        <button onClick={resetQuiz} style={styles.primaryButton}>
          Retake Quiz
        </button>
      </main>
    );
  }

  const question = questions[currentQuestion];

  return (
    <main style={styles.main}>
      <header style={styles.header}>
        <h1>20,000 Series Post-Work Quiz</h1>
        <p>Musculoskeletal System</p>
        <p>Question {currentQuestion + 1} of {questions.length}</p>
      </header>

      <section style={styles.questionCard}>
        <h2>Question {currentQuestion + 1}</h2>
        <p style={styles.questionText}>{question.question}</p>

        <div style={{ marginTop: "25px" }}>
          {question.options.map((option, index) => (
            <label
              key={option}
              style={{
                ...styles.option,
                ...(selectedAnswer === letters[index] ? styles.selectedOption : {}),
              }}
            >
              <input
                type="radio"
                name="answer"
                value={letters[index]}
                checked={selectedAnswer === letters[index]}
                onChange={() => setSelectedAnswer(letters[index])}
                style={{ marginRight: "10px" }}
              />
              <strong>{letters[index]}.</strong> {option}
            </label>
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={!selectedAnswer}
          style={{
            ...styles.primaryButton,
            ...(selectedAnswer ? {} : styles.disabledButton),
          }}
        >
          {currentQuestion === questions.length - 1 ? "Submit Quiz" : "Next Question"}
        </button>
      </section>
    </main>
  );
}

const styles = {
  main: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "40px",
    fontFamily: "Arial, sans-serif",
    background: "#f5f7fb",
    minHeight: "100vh",
  },
  header: {
    background: "linear-gradient(135deg, #2563eb, #7c3aed)",
    color: "white",
    padding: "40px",
    borderRadius: "20px",
    marginBottom: "30px",
  },
  questionCard: {
    background: "white",
    padding: "30px",
    borderRadius: "16px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  },
  resultCard: {
    background: "white",
    padding: "25px",
    marginBottom: "20px",
    borderRadius: "16px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  },
  explanation: {
    marginTop: "15px",
    background: "#f8fafc",
    padding: "15px",
    borderRadius: "10px",
  },
  questionText: {
    fontSize: "17px",
    lineHeight: "1.6",
  },
  option: {
    display: "block",
    marginBottom: "15px",
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    cursor: "pointer",
    background: "white",
  },
  selectedOption: {
    border: "2px solid #2563eb",
    background: "#eff6ff",
  },
  primaryButton: {
    marginTop: "20px",
    padding: "12px 24px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "16px",
  },
  disabledButton: {
    background: "#94a3b8",
    cursor: "not-allowed",
  },
};
