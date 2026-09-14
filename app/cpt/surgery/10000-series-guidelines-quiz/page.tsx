"use client";

import { useState } from "react";

type GuidelineQuestion = {
  question: string;
  options: string[];
  correct: string;
  explanation: string;
};

const questions: GuidelineQuestion[] = [
  {
    question:
      "A patient has a 3.5 cm wound debrided to subcutaneous tissue on the leg. A second wound on the same leg is debrided to the same depth and measures 2.0 cm. How should the debridement be reported?",
    options: [
      "A. Report only the deeper wound",
      "B. Report the two wounds separately because they are different areas",
      "C. Add the areas together because both wounds are the same depth",
      "D. Report skin-only debridement codes instead",
    ],
    correct: "C",
    explanation:
      "For debridement, areas are combined only when the wounds are debrided to the same depth. If both are subcutaneous tissue at the same depth, add the area together and code according to the total surface area.",
  },
  {
    question:
      "A biopsy specimen is taken with a punch tool and a cylindrical full-thickness sample is collected. Which code family is used?",
    options: [
      "A. 11102-11103",
      "B. 11104-11105",
      "C. 11300-11313",
      "D. 11042-11047",
    ],
    correct: "B",
    explanation:
      "Punch biopsy is reported with 11104-11105. Tangential biopsy uses 11102-11103, and debridement uses 11042-11047. Shave removal of lesions uses 11300-11313.",
  },
  {
    question:
      "A benign lesion is excised with margins. Which statement is correct for code selection?",
    options: [
      "A. Only the lesion diameter is measured",
      "B. The lesion diameter plus the narrowest margins equals the excised diameter",
      "C. Only the width of the excision is counted",
      "D. Margins are never included",
    ],
    correct: "B",
    explanation:
      "For excisions, measure the lesion diameter plus the required margins to determine the excised diameter. This is the key concept for benign and malignant excision coding.",
  },
  {
    question:
      "A physician removes a skin tag lesion and then removes additional tags in the same session. How is this reported?",
    options: [
      "A. 11200 only",
      "B. 11200 for the first 15 and 11201 for each additional 10 or part thereof",
      "C. 11300 for each skin tag",
      "D. 17000 and 17003",
    ],
    correct: "B",
    explanation:
      "Skin tags are reported with 11200 for the first 15 skin tags and 11201 for each additional 10 or part thereof. This is a separate rule from premalignant lesion destruction codes.",
  },
  {
    question:
      "Which statement best describes the difference between FNA and core needle biopsy?",
    options: [
      "A. Both remove a core of tissue",
      "B. FNA obtains cells; core needle biopsy obtains tissue core",
      "C. Core needle biopsy is used for simple skin tags",
      "D. FNA is coded with 11106-11107",
    ],
    correct: "B",
    explanation:
      "FNA obtains cells for cytology, while core needle biopsy obtains a core of tissue for histopathology. This distinction is important for correct coding and interpretation.",
  },
  {
    question:
      "A wound is debrided and the physician performs a simple closure immediately after. What is the correct coding concept?",
    options: [
      "A. Always add a repair code",
      "B. Do not add a repair code if only simple closure is performed",
      "C. Report debridement and repair together regardless of depth",
      "D. Report only the repair code",
    ],
    correct: "B",
    explanation:
      "Simple closure is commonly included with the excision or repair and is not separately reported unless the closure meets intermediate or complex repair criteria.",
  },
  {
    question:
      "The deepest tissue removed in a debridement is bone. Which code family would be used?",
    options: [
      "A. 97597-97598",
      "B. 11042-11045",
      "C. 11044-11047",
      "D. 11102-11107",
    ],
    correct: "C",
    explanation:
      "Bone debridement is reported with 11044-11047. The code family is selected based on deepest tissue removed: skin, subcutaneous tissue, muscle/fascia, or bone.",
  },
  {
    question:
      "A lesion is removed using a shaving technique on the scalp. Which factor determines the code selection?",
    options: [
      "A. Depth of tissue removed only",
      "B. Body location and lesion diameter",
      "C. Number of biopsy punches",
      "D. Type of anesthesia only",
    ],
    correct: "B",
    explanation:
      "Shave removal codes are selected by the lesion location and diameter, not by biopsy technique or anesthesia type.",
  },
  {
    question:
      "Which of the following best describes adjacent tissue transfer?",
    options: [
      "A. It is always reported with a separate excision code",
      "B. It is coded by defect size and includes the excision associated with the transfer",
      "C. It requires two separate lesion excision codes",
      "D. It is only reported for malignant lesions",
    ],
    correct: "B",
    explanation:
      "Adjacent tissue transfer codes include the excision and repair associated with the transfer, and code selection is based on the defect size.",
  },
  {
    question:
      "A premalignant lesion is destroyed. The provider treats a first lesion and then four additional lesions in the same session. How is this reported?",
    options: [
      "A. 17000 only",
      "B. 17000 + 17003 x 3",
      "C. 17000 + 17003 x 4",
      "D. 17000 + 17004",
    ],
    correct: "C",
    explanation:
      "For destruction of premalignant lesions, the first lesion is reported with 17000 and each additional lesion with 17003. For a total of five lesions, report 17000 + 17003 x 4.",
  },
  {
    question:
      "A provider excises a skin lesion. The pathology report later identifies it as malignant. According to CPT guidelines, which measurement determines the lesion size for coding?",
    options: [
      "A. The size after pathology processing",
      "B. The size documented after excision",
      "C. The size documented before excision",
      "D. The size based on pathology diagnosis",
    ],
    correct: "C",
    explanation:
      "CPT bases lesion size on the greatest clinical diameter plus the required margin before excision, regardless of the later pathology result.",
  },
  {
    question:
      "A wound is closed with layered sutures involving subcutaneous tissue and epidermis. No extensive undermining is performed. How should the repair be classified?",
    options: [
      "A. Simple",
      "B. Intermediate",
      "C. Complex",
      "D. Adjacent tissue transfer",
    ],
    correct: "B",
    explanation:
      "Intermediate repair includes layered closure of one or more deeper layers of subcutaneous tissue in addition to skin closure. The described layered closure is therefore intermediate repair.",
  },
  {
    question:
      "A provider excises a lesion and performs a simple repair. How is the repair reported?",
    options: [
      "A. Separately",
      "B. Only if greater than 2.5 cm",
      "C. Only if malignant",
      "D. Not separately",
    ],
    correct: "D",
    explanation:
      "Excision includes simple, non-layered closure when performed. Simple repair is not separately reported, although intermediate or complex repair may be reported separately when supported.",
  },
  {
    question:
      "A provider performs a shave biopsy of a lesion and, after immediate confirmation of malignancy, performs a full excision in the same session. How should this be reported?",
    options: [
      "A. Only the excision",
      "B. Only the biopsy",
      "C. Both biopsy and excision",
      "D. Neither",
    ],
    correct: "C",
    explanation:
      "Both services may be reported when the biopsy is performed for diagnosis and the subsequent excision is definitive treatment. The diagnostic biopsy and therapeutic excision are distinct services in this circumstance.",
  },
  {
    question:
      "A provider removes necrotic tissue from a traumatic wound to prepare it for a future flap procedure. Which guideline applies?",
    options: [
      "A. Debridement is always included",
      "B. Debridement is separately reportable when performed to prepare a wound for reconstruction",
      "C. Debridement is only reportable for burns",
      "D. Debridement is only reportable if performed with anesthesia",
    ],
    correct: "B",
    explanation:
      "Surgical debridement performed to prepare a wound for a definitive reconstructive procedure, such as a flap or graft, is separately reportable. It is not automatically included.",
  },
  {
    question:
      "A provider performs a Z-plasty to close a defect created by trauma. What is included?",
    options: [
      "A. Only the flap",
      "B. Flap plus simple repair",
      "C. Flap plus intermediate repair",
      "D. Flap plus excision/defect creation",
    ],
    correct: "D",
    explanation:
      "A Z-plasty is an adjacent tissue transfer or rearrangement. The transfer code includes the associated excision or creation of the defect, so that work is not separately reported.",
  },
  {
    question:
      "A provider performs an incision and drainage of an abscess and places simple packing. How is packing treated?",
    options: [
      "A. Separately reportable",
      "B. Included",
      "C. Only reportable if greater than 5 cm",
      "D. Only reportable if infected",
    ],
    correct: "B",
    explanation:
      "Simple packing is a routine and integral part of incision and drainage. It helps control drainage, prevent premature closure, and support continued healing, so it is included in the primary procedure.",
  },
  {
    question:
      "How should you code an excision of a lesion when completed with an adjacent tissue transfer or rearrangement?",
    options: [
      "A. The excision is always reported in addition to the adjacent tissue transfer or rearrangement",
      "B. The excision is not separately reported with adjacent tissue transfer or rearrangement codes",
      "C. Code only malignant lesions in addition to the adjacent tissue transfer or rearrangement codes",
      "D. Code the lesion with modifier 51 and report it in addition to the adjacent tissue transfer or rearrangement codes",
    ],
    correct: "B",
    explanation:
      "Adjacent tissue transfer or rearrangement codes include the associated excision or defect creation. The lesion excision is not separately reported with the adjacent tissue transfer code.",
  },
  {
    question:
      "Which modifier would you use if a re-excision procedure is performed during the postoperative period of the primary excision of a malignant lesion?",
    options: ["A. 76", "B. 59", "C. 58", "D. 79"],
    correct: "C",
    explanation:
      "Modifier 58 identifies a staged or related procedure performed by the same physician during the postoperative period. Re-excision of a malignant lesion is planned and related to the original excision.",
  },
  {
    question:
      "Which statement is incorrect regarding the excision of benign lesions?",
    options: [
      "A. Excision is defined as partial-thickness removal of a lesion, including margins",
      "B. The margins refer to the narrowest margin required to adequately excise the lesion based on the physician's judgment",
      "C. Excision includes simple closure when performed",
      "D. Repair by intermediate or complex closure should be reported separately",
    ],
    correct: "A",
    explanation:
      "Option A is incorrect because CPT defines excision as full-thickness removal of a lesion, including margins. Simple closure is included, while intermediate or complex closure may be reported separately.",
  },
];

export default function GuidelinesQuizPage() {
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
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "40px 24px",
          fontFamily: "Arial, sans-serif",
          background: "#f8fafc",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            background: "linear-gradient(135deg,#0f766e,#2563eb)",
            color: "white",
            padding: "32px",
            borderRadius: "20px",
            marginBottom: "28px",
          }}
        >
          <h1 style={{ margin: 0 }}>📘 Guidelines Question Quiz Complete</h1>
          <h2 style={{ marginBottom: 0 }}>
            Score: {score} / {questions.length} ({percentage}%)
          </h2>
        </div>

        {questions.map((q, index) => (
          <section
            key={index}
            style={{
              background: "white",
              borderRadius: "14px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
              padding: "22px",
              marginBottom: "18px",
            }}
          >
            <h3 style={{ marginTop: 0, marginBottom: "12px" }}>Question {index + 1}</h3>
            <p style={{ fontSize: "17px", lineHeight: 1.6 }}>{q.question}</p>
            <p>
              <strong>Your answer:</strong> {answers[index] || "No answer selected"}
            </p>
            <p>
              <strong>Correct answer:</strong> {q.correct}
            </p>
            <p>
              <strong>Justification:</strong> {q.explanation}
            </p>
          </section>
        ))}

        <button
          onClick={() => {
            setCurrentQuestion(0);
            setSelectedAnswer("");
            setAnswers([]);
            setShowResults(false);
          }}
          style={{
            background: "#0f766e",
            color: "white",
            border: "none",
            borderRadius: "12px",
            padding: "14px 24px",
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          Retake Quiz
        </button>
      </main>
    );
  }

  const current = questions[currentQuestion];

  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "40px auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        lineHeight: 1.7,
      }}
    >
      <div
        style={{
          background: "linear-gradient(135deg, #ecfeff, #ecfdf5)",
          border: "1px solid #a7f3d0",
          borderRadius: "18px",
          padding: "26px",
          marginBottom: "28px",
        }}
      >
        <h1 style={{ marginTop: 0, marginBottom: "10px" }}>
          📘 10,000 Series Guidelines Question Quiz
        </h1>
        <p style={{ margin: 0, fontSize: "18px" }}>
          A separate quiz based on core CPT integumentary coding guidelines.
        </p>
      </div>

      <section
        style={{
          background: "white",
          borderRadius: "18px",
          padding: "28px",
          boxShadow: "0 6px 16px rgba(0,0,0,0.06)",
        }}
      >
        <p style={{ fontSize: "18px", marginTop: 0, marginBottom: "20px" }}>
          Question {currentQuestion + 1} of {questions.length}
        </p>

        <h2 style={{ fontSize: "28px", marginTop: 0, marginBottom: "18px" }}>
          {current.question}
        </h2>

        <div style={{ display: "grid", gap: "12px" }}>
          {current.options.map((option, index) => (
            <button
              key={option}
              onClick={() => setSelectedAnswer(letters[index])}
              style={{
                textAlign: "left",
                background:
                  selectedAnswer === letters[index] ? "#dcfce7" : "#f8fafc",
                border:
                  selectedAnswer === letters[index]
                    ? "2px solid #16a34a"
                    : "1px solid #dbe3f0",
                borderRadius: "12px",
                padding: "16px 18px",
                fontSize: "18px",
                cursor: "pointer",
                color: "#0f172a",
              }}
            >
              {option}
            </button>
          ))}
        </div>

        <div style={{ marginTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontWeight: 700, color: "#334155" }}>
            Selected answer: {selectedAnswer || "None"}
          </div>

          <button
            onClick={handleNext}
            disabled={!selectedAnswer}
            style={{
              background: selectedAnswer ? "#0f766e" : "#cbd5e1",
              color: "white",
              border: "none",
              borderRadius: "12px",
              padding: "14px 24px",
              fontWeight: 700,
              cursor: selectedAnswer ? "pointer" : "not-allowed",
            }}
          >
            {currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next Question"}
          </button>
        </div>
      </section>
    </main>
  );
}
