"use client";

import { useState } from "react";

type TranscriptQuestion = {
  question: string;
  options: string[];
  correct: string;
  explanation: string;
};

const questions: TranscriptQuestion[] = [
  {
    question:
      "An 82-year-old female currently has basal cell carcinoma on her anterior left shoulder. The physician excised the lesion with an excised diameter of 5 cm and hemostasis was achieved using the Bovie cautery. Then a 10 cm rhomboid flap was made and rotated into the defect and donor site. The CPT® code(s) for this procedure is:",
    options: [
      "A. 14020, 11606-51",
      "B. 14020",
      "C. 14021, 11606-51",
      "D. 14021",
    ],
    correct: "D",
    explanation:
      "A rhomboid flap to repair a 10 cm defect on the shoulder is an adjacent tissue transfer/rearrangement. The code is 14021 because the defect is 10.1–30.0 sq cm. The lesion excision is not separately reported when the adjacent tissue transfer code includes the excision and repair; the malignant lesion excision is not reported separately.",
  },
  {
    question:
      "A patient has a 4.3 cm x 2 cm lesion on the left thigh that was excised. Due to the size and location of the lesion, the decision was made to harvest a full-thickness skin graft from his left lower leg. An excision of 5 cm x 5 cm full-thickness graft was obtained and grafted onto the defect and sewn. The pathology finding confirmed that the lesion was basal cell carcinoma. The CPT® code(s) to report is (are):",
    options: [
      "A. 14021",
      "B. 11406, 15000-51",
      "C. 11606, 15220-51, 15221",
      "D. 11606, 15150-51",
    ],
    correct: "C",
    explanation:
      "This is a malignant lesion excision plus a full-thickness skin graft. The excision is reported with 11606 for the malignant lesion. The graft is 25 sq cm total, so code 15220 for the first 20 sq cm and 15221 for the additional 5 sq cm (or part thereof) with modifier 51 because more than one procedure is reported. The lesion excision is not separately coded with a flap or graft code when the graft is part of the closure plan.",
  },
  {
    question:
      "A patient who suffered severe burns to her abdomen during an apartment fire developed a thick, constrictive layer of eschar while recovering in the burn unit of the hospital. The physician evaluated the thick, coagulated crust covering the burned area and performed five incisions to prevent edema and possible ischemia. The CPT® procedure codes are:",
    options: [
      "A. 16030, 16035",
      "B. 16035, 16036 x 4",
      "C. 16035, 16036",
      "D. 16030",
    ],
    correct: "B",
    explanation:
      "Escharotomy codes are 16035 for the initial incision and 16036 for each additional incision. With five total incisions, report 16035 + 16036 x 4. 16030 is for burn dressings or debridement, not escharotomy.",
  },
  {
    question:
      "Which modifier would you use if a re-excision procedure is performed during the postoperative period of the primary excision of a malignant lesion?",
    options: ["A. 76", "B. 59", "C. 58", "D. 79"],
    correct: "C",
    explanation:
      "Modifier 58 is used for staged or related procedures or services by the same physician during the postoperative period. This is the correct modifier for a re-excision of a malignant lesion after the original excision.",
  },
  {
    question:
      "How should you code an excision of a lesion when completed with an adjacent tissue transfer or rearrangement?",
    options: [
      "A. The excision is always reported in addition to the adjacent tissue transfer or rearrangement.",
      "B. The excision is not separately reported with adjacent tissue transfer or rearrangement codes.",
      "C. Code only malignant lesions in addition to the adjacent tissue transfer or rearrangement codes.",
      "D. Code the lesion with modifier -51 and code in addition to the adjacent tissue transfer or rearrangement codes.",
    ],
    correct: "B",
    explanation:
      "Adjacent tissue transfer/rearrangement codes include the excision and repair of the lesion in the transfer code. The lesion excision is not separately reportable in addition to ATT/adjacent tissue transfer.",
  },
  {
    question:
      "30-year-old female is having debridement performed on an infected ulcer with eschar on the right foot. Using sharp dissection, the ulcer and eschar infection was debrided all the way down to the bone of the foot. The bone had to be minimally trimmed because of a sharp point at the end of the metatarsal. After debridement the area had minimal bleeding because of very poor circulation of the foot. It seems that the toes next to the ulcer may have some involvement and cultures were taken. The area was dressed with sterile saline and dressings and then wrapped. What CPT code should be reported?",
    options: ["A. 11000", "B. 11011", "C. 11044", "D. 15004"],
    correct: "C",
    explanation:
      "This is bone debridement because the ulcer and eschar were debrided down to bone, and the bone required minimal trimming. Code 11044 represents debridement that includes bone. 11011 is for debridement of tissue including muscle/fascia, and 15004 is for wound preparation/recipient site creation, not debridement of bone.",
  },
  {
    question:
      "Mohs surgery will be performed on a 56-year-old that has basal cell carcinoma on the neck. The gross tumor was completely excised. Tissue was divided into two tissue blocks which were mapped and color coded at their margins; frozen sectioning was performed. A full thickness graft was used to harvest skin from the patient’s left axillae for an area of 5 sq cm. The appropriate CPT® codes are:",
    options: [
      "A. 26115, 15260",
      "B. 11600, 15240",
      "C. 17311, 15240",
      "D. 17313, 15260",
    ],
    correct: "C",
    explanation:
      "This is Mohs micrographic surgery on the neck, reported as 17311, and a full-thickness graft from the axilla of 5 sq cm is reported with 15240. 11600 and 15260 do not match the location and/or type of grafting described.",
  },
  {
    question:
      "An 11-year-old female slammed the van door on her left fourth and fifth finger. Her mother brought her to the physician’s office where the physician drained the blood from under the fingernail of her fourth finger. Her fifth finger had a laceration to the nail bed. The physician removed the damaged nail and sutured the nail bed. The correct CPT® codes for the procedures are:",
    options: [
      "A. 11760-F4, 11740-F3",
      "B. 11762-F9, 11730-F8",
      "C. 11750, 11740-59",
      "D. 11760, 11730-F9, 11760-F3",
    ],
    correct: "A",
    explanation:
      "The fourth finger had subungual hematoma drainage, which is represented by the nail procedure code 11760, and the fifth finger had a laceration to the nail bed requiring repair of the nail bed, which is 11740. The F4/F3 modifiers designate the specific digits treated.",
  },
  {
    question:
      "A patient is coming into the office for a mass located right above her buttocks close to the tailbone. After an examination the provider determines the mass is a pilonidal cyst. A 1.5 cm incision is made over the fullest portion of the mass. Five mL of yellow pus was drained and a swab was sent for Gram stain and culture. The wound was packed and dressed with dry sterile dressing. The CPT® code for this procedure is:",
    options: ["A. 11770", "B. 10081", "C. 10061", "D. 10080"],
    correct: "D",
    explanation:
      "This is a simple pilonidal cyst incision and drainage: 10080. It is not a complicated cyst, and it is not an abscess I&D or a simple drainage of non-pilonidal tissue. The simple pilonidal cyst I&D code is 10080.",
  },
  {
    question:
      "A physician performed intradermal injections of an insoluble opaque pigment to resolve the discoloration experienced by a 23-year-old patient who nearly two years ago suffered a burn to the left side of his face, neck, and left shoulder that occurred at a work site. Seventy-five sq cm were injected during the extensive treatment. The correct CPT® code(s) for this procedure is (are):",
    options: [
      "A. 11920, 11921 x 3",
      "B. 11921 x 4",
      "C. 11921, 11922 x 3",
      "D. 11922 x 3",
    ],
    correct: "C",
    explanation:
      "Tattooing of insoluble opaque pigment is reported with 11921 for the first 20 sq cm or part thereof, then 11922 for each additional 20 sq cm or part thereof. For 75 sq cm, report 11921 plus 11922 x 3. The add-on code is never reported alone.",
  },
  {
    question:
      "A 32-year-old female is having an excision of a mass in her left breast. The physician makes a curved incision along the inferior and medial aspect of the left areola. A breast nodule, which measured approximately 1 cm in diameter, was identified. It appeared to be benign. It was firm, gray, and discrete. It was completely excised. There was no gross evidence of malignancy. The bleeding was controlled with electrocautery. The skin edges were approximated with a continuous subcuticular 4-0 Vicryl suture. Indermil tissue adhesive was applied to the skin as well as a dry gauze dressing. The correct CPT® code and diagnosis are:",
    options: [
      "A. 19120, 611.72",
      "B. 19125, 174.9",
      "C. 19301, 611.72",
      "D. 19370, 217",
    ],
    correct: "A",
    explanation:
      "This is a benign breast lesion excision from the left breast, reported with 19120. The lesion was a benign breast nodule measuring about 1 cm and was completely excised, consistent with a benign breast mass; diagnosis code 611.72 is used in this transcript example. 19301 is a partial mastectomy, not an excision of a 1 cm benign lesion, and 19370 is a breast implant revision code.",
  },
  {
    question:
      "A patient has a 1.5 cm incision over a pilonidal cyst and drains yellow pus. The wound is packed and dressed. Which code is reported?",
    options: ["A. 11770", "B. 10081", "C. 10061", "D. 10080"],
    correct: "D",
    explanation:
      "This is the simple incision and drainage of a pilonidal cyst. The correct code is 10080. 10081 is complicated pilonidal cyst I&D, and 10061 is incision and drainage of an abscess. This scenario is a simple pilonidal cyst, not other abscess or complicated drainage.",
  },
  {
    question:
      "Dr. Alexis completed Mohs surgery on Ralph’s left arm. She reported routine stains on all slides, mapping, and color coding of specimens. The procedure was accomplished in three stages with a total of seven blocks in the second stage. How would you report Dr. Alexis’ services?",
    options: [
      "A. 17313, 17314-58, 17315-59, 88314-59",
      "B. 17311, 17312 x 7",
      "C. 17313, 17314 x 2, 17315 x 2",
      "D. 17311, 88302, 17314 x 3, 17312 x 7",
    ],
    correct: "C",
    explanation:
      "Mohs micrographic surgery on the arm is reported with 17313 for the first stage. Additional stages are reported with 17314, and additional blocks beyond the first five are reported with 17315. With three stages and seven blocks, the correct reporting is 17313 + 17314 x 2 + 17315 x 2.",
  },
  {
    question:
      "An 85-year-old gentleman had a large squamous cell carcinoma of the left upper lip that involved the nostril floor of the medial portion of the columella and left nasal base. A month ago he underwent wide excision with reconstruction using a large superiorly based nasal labial cheek flap. He is here for a second stage, a division and inset of his cheek flap to left upper lip and nose. The pathology report showed the margins were clear though relatively close. The bridge of tissue between the base of the flap and the upper lip was incised. The base of the flap was excised and all the redundant tissue sharpened the edges and inset the base of the flap back into the cheek with interrupted 4-0 Monocryl and running 6-0 plain catgut. Similarly, I debulked the most lateral portion of the flap and the lateral portion of the defect was recreated and then inset the flap with interrupted 4-0 Monocryl running 6-0 plain catgut. The CPT® code for this procedure is:",
    options: [
      "A. 15630",
      "B. 15630-58",
      "C. 15758",
      "D. 15758-58",
    ],
    correct: "B",
    explanation:
      "This is a staged second-stage division and inset of a cheek flap, which is reported with 15630. Because it is a related procedure performed during the postoperative period of the original reconstructive service, append modifier 58. The second-stage flap division/inset is not a free flap or microvascular flap.",
  },
  {
    question:
      "A 37-year-old has been diagnosed with cancer in the left breast and is having a lumpectomy performed. The breast tumor is in a lateral position, so the surgeon goes through a previous incision all the way into the axilla and a full dissection of the axillary lymph nodes is performed. An injection for sentinel node localization was also performed. The CPT® codes for these procedures are:",
    options: [
      "A. 19302, 38525-51, 38792-51",
      "B. 19302, 38792-51",
      "C. 19305, 38792-51",
      "D. 19301, 38525-51, 38792-51",
    ],
    correct: "B",
    explanation:
      "The lumpectomy is reported with 19302. Sentinel node localization is reported with 38792. In this case, the exam notes emphasize the injection/localization for a sentinel node, not a separate axillary dissection code, so 38525 is not separately reported here.",
  },
  {
    question:
      "Tina fell from a step ladder while clearing drain gutters at her home. She suffered contusions and multiple lacerations. At the emergency room she received sutures for lacerations to her arm, hand, and foot. The doctor completed the following repairs: superficial repair to the arm of 12.8 cm, a single-layered closure of 7.9 cm that required extensive cleaning and removal of glass from the hand, and a simple repair to the foot of 9.6 cm. How would you report the wound repairs?",
    options: [
      "A. 12034, 12036, 12046, 12007",
      "B. 12006, 12034-59",
      "C. 12044, 12006-51",
      "D. 12005, 12004 x 2",
    ],
    correct: "C",
    explanation:
      "The arm simple repair is 12.8 cm, reported with 12006 (simple repair, 12.6–20.0 cm). The hand repair is intermediate because the single-layer closure required extensive cleaning with a foreign-body removal, reported with 12044 (intermediate repair of the hand, 7.6–12.5 cm). The foot repair is simple and included in the 12006-51 reporting when combined with the hand repair. The correct combination is 12044 + 12006-51.",
  },
  {
    question:
      "The patient is coming in for removal of fatty tissue of the posterior iliac crest, abdomen, and the medial lateral thighs. Suction-assisted lipectomy was then undertaken in the left posterior iliac crest area and this was continued on the right and then the lateral trochanteric and posterior aspect of the medial thighs. The medial thighs were suctioned followed by the abdomen. The total amount infused was 2300 cc and the total amount removed was 2400 cc. The incisions were closed and a compression garment was applied. The CPT® codes for this procedure are:",
    options: [
      "A. 15830, 15832-59",
      "B. 15877, 15879-59",
      "C. 15830, 15839-59, 15847",
      "D. 15877, 15878-59",
    ],
    correct: "B",
    explanation:
      "This is suction-assisted lipectomy involving the trunk and lower extremities. Report 15877 for the trunk area and 15879 for the lower extremity. Modifier 59 may be used to indicate distinct services because the areas are separate anatomic regions.",
  },
  {
    question:
      "A 46 year old female had a previous biopsy that indicated positive margins anteriorly on the right side of her neck. A 0.5 cm margin was drawn out and a 15 blade scalpel was used for full excision of an 8 cm lesion. Light undermining of all margins was performed along with layered closure. The specimen was sent for permanent histopathologic examination. What are the code(s) for this procedure?",
    options: [
      "A. 11426",
      "B. 11626",
      "C. 11626, 12044-51",
      "D. 11426, 13132, 13133",
    ],
    correct: "C",
    explanation:
      "The lesion is a malignant lesion excision (11626) because it is on the neck and the excised diameter is over 4 cm. The layered closure qualifies as intermediate repair, reported as 12044 for the neck region. This is the correct combination for a malignant excision with layered closure.",
  },
];

export default function TranscriptQuizPage() {
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
            background: "linear-gradient(135deg,#1d4ed8,#7c3aed)",
            color: "white",
            padding: "32px",
            borderRadius: "20px",
            marginBottom: "28px",
            boxShadow: "0 8px 20px rgba(29,78,216,0.15)",
          }}
        >
          <h1 style={{ margin: 0 }}>🧠 Transcript Review Quiz Complete</h1>
          <h2 style={{ marginBottom: 0 }}>
            Score: {score} / {questions.length} ({percentage}%)
          </h2>
          <p style={{ marginTop: "10px", marginBottom: 0 }}>
            {percentage >= 70 ? "✅ Strong performance" : "📘 Review the explanations below and retake the quiz."}
          </p>
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
            <h3 style={{ marginTop: 0, marginBottom: "12px" }}>
              Question {index + 1}
            </h3>
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
            background: "#2563eb",
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
          background: "linear-gradient(135deg, #eff6ff, #f5f3ff)",
          border: "1px solid #c7d2fe",
          borderRadius: "18px",
          padding: "26px",
          marginBottom: "28px",
        }}
      >
        <h1 style={{ marginTop: 0, marginBottom: "10px" }}>
          🧪 10,000 Series Transcript Quiz
        </h1>
        <p style={{ margin: 0, fontSize: "18px" }}>
          Separate quiz based on the transcript screenshots and explanation notes.
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
                  selectedAnswer === letters[index] ? "#dbeafe" : "#f8fafc",
                border:
                  selectedAnswer === letters[index]
                    ? "2px solid #3b82f6"
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
              background: selectedAnswer ? "#2563eb" : "#cbd5e1",
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
