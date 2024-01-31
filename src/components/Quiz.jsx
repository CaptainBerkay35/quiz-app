import React, { useState, useEffect } from "react";
import questions from "../Questions";
import Result from "./Result";
import Timer from "./Timer";

export default function Quiz({ username }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const totalQuestions = selectedQuestions.length;

  const getRandomQuestions = () => {
    const randomIndices = [];
    while (randomIndices.length < 10) {
      const randomIndex = Math.floor(Math.random() * questions.length);
      if (!randomIndices.includes(randomIndex)) {
        randomIndices.push(randomIndex);
      }
    }
    const selectedQuestions = randomIndices.map((index) => questions[index]);
    setSelectedQuestions(selectedQuestions);
  };

  useEffect(() => {
    getRandomQuestions();
  }, []);

  const handleOptionSelect = (isCorrect, index) => {
    if (currentQuestion < totalQuestions - 1) {
      if (isCorrect) {
        setScore((prevScore) => prevScore + 1);
        setFeedback("correct");
      } else {
        setFeedback(index);
      }
      setTimeout(() => {
        setCurrentQuestion((prev) => prev + 1);
        setFeedback(null);
      }, 1000);
    } else {
      if (isCorrect) {
        setScore((prevScore) => prevScore + 1);
        setFeedback("correct");
      } else {
        setFeedback(index);
      }
      setTimeout(() => {
        setIsQuizCompleted(true);
      }, 1000);
    }
  };
  const resetTimer = () => {
    setFeedback(null);
    setCurrentQuestion(prev => prev + 1); // Timer sıfırlandıktan sonra yeni soruya geç
};

  const restartGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setIsQuizCompleted(false);
    setFeedback(null);
    getRandomQuestions();
  };

  if (totalQuestions === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-Salmon rounded-xl shadow-2xl w-full max-w-xl flex flex-col justify-center items-center p-4">
      <div className="flex justify-between items-center w-full px-4">
        <h1 className="font-bold text-lg">{username}</h1>
        <Timer resetTimer={resetTimer} />
        <h2 className="text-lg">
          {currentQuestion + 1}/{totalQuestions}
        </h2>
      </div>

      <div className="flex flex-col items-center p-2">
        <h2 className="text-white text-xl m-2 text-center">
          {selectedQuestions[currentQuestion].text}
        </h2>
        {selectedQuestions[currentQuestion].options.map((option, index) => (
          <div className="m-1 w-120 h-18" key={index}>
            <button
              className={`border-4 text-white w-72 h-10 ${
                feedback === "correct" && option.isCorrect
                  ? "border-green-500"
                  : feedback === index && !option.isCorrect
                  ? "border-red-500"
                  : "border-white"
              }`}
              onClick={() => handleOptionSelect(option.isCorrect, index)}
              disabled={feedback !== null}
            >
              {option.text}
            </button>
          </div>
        ))}
      </div>
      {isQuizCompleted && (
        <Result
          finalScore={score}
          questionNumber={totalQuestions}
          restartGame={restartGame}
        ></Result>
      )}
    </div>
  );
}
