import React, { useState, useEffect } from "react";
import questions from "../Questions";

export default function Quiz({ username }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const totalQuestions = selectedQuestions.length;

  useEffect(() => {
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

    getRandomQuestions();
  }, []);

  const handleOptionSelect = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  if (totalQuestions === 0) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="bg-Salmon rounded-xl shadow-2xl w-full max-w-xl flex flex-col justify-center items-center p-4">
      <div className="flex">
        <h1 className="font-bold mb-4">{username}</h1>
        <h2>{currentQuestion + 1}/{totalQuestions}</h2>
      </div>
      <div className="mb-4 flex flex-col items-center">
        <h2 className="text-white text-xl mb-4">{selectedQuestions[currentQuestion].text}</h2>
        {selectedQuestions[currentQuestion].options.map((option, index) => (
          <div className="mb-2" key={index}>
            <button className="border-4 border-white text-white px-36 py-2 " onClick={handleOptionSelect}>
              {option.text}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
