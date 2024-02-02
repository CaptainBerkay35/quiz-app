import React, { useState, useEffect } from "react";
import questions from "../QuestionsScience";
import questionsHistory from "../QuestionsHistory";
import Result from "./Result";
import Timer from "./Timer";
import Hint from "./Hint";
import { saveScoreToLocalStorage } from "../Utils";

export default function Quiz({ username ,category}) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [usedHint, setUsedHint] = useState(false);
  const totalQuestions = selectedQuestions.length;
  

  const getRandomQuestions = (category) => {
    let selectedQuestionsData;
    if (category === "science") {
      selectedQuestionsData = questions;
    } else if (category === "history") {
      selectedQuestionsData = questionsHistory;
    } else {
      selectedQuestionsData = questions; 
    }
  
    const randomIndices = [];
    while (randomIndices.length < 10) {
      const randomIndex = Math.floor(Math.random() * selectedQuestionsData.length);
      if (!randomIndices.includes(randomIndex)) {
        randomIndices.push(randomIndex);
      }
    }
    const selectedQuestions = randomIndices.map((index) => ({
      ...selectedQuestionsData[index],
      options: [...selectedQuestionsData[index].options], 
    }));
    setSelectedQuestions(selectedQuestions);
  };

  useEffect(() => {
    getRandomQuestions(category);
  }, [category]);


  useEffect(() => {
    if (isQuizCompleted) {
      saveScoreToLocalStorage(username, score, category); 
    }
  }, [isQuizCompleted]);

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
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("quizData"));
    if (storedData && storedData.category === category) {
      setCurrentQuestion(storedData.currentQuestion);
      setScore(storedData.score);
      setIsQuizCompleted(storedData.isQuizCompleted);
      setFeedback(storedData.feedback);
      setUsedHint(storedData.usedHint);
      setSelectedQuestions(storedData.selectedQuestions);
    } else {
      getRandomQuestions(category);
    }
  }, [category]);

  useEffect(() => {
    const dataToStore = {
      currentQuestion,
      score,
      isQuizCompleted,
      feedback,
      usedHint,
      selectedQuestions,
      category
    };
    localStorage.setItem("quizData", JSON.stringify(dataToStore));
  }, [currentQuestion, score, isQuizCompleted, feedback, usedHint, selectedQuestions, category]);


  const resetTimer = () => {
    setFeedback(null);
    setCurrentQuestion((prev) => prev + 1);
  };

  const useHint = () => {
    if (!usedHint && !isQuizCompleted) {
      const currentQuestionObj = selectedQuestions[currentQuestion];
      const wrongIndexes = currentQuestionObj.options
        .map((option, index) => (option.isCorrect ? -1 : index))
        .filter((index) => index !== -1);

      currentQuestionObj.options.splice(wrongIndexes[0], 1);
      currentQuestionObj.options.splice(wrongIndexes[1] - 1, 1);

      setUsedHint(true);
      setSelectedQuestions([...selectedQuestions]);
    }
  };

  const restartGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setIsQuizCompleted(false);
    setFeedback(null);
    setUsedHint(false);
    getRandomQuestions(category);
  };

  if (totalQuestions === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className={`bg-Sage rounded-xl shadow-2xl  w-full max-w-xl flex flex-col justify-center items-center p-4 ${
        feedback === "correct"
          ? "shadow-green-500"
          : feedback !== null &&
            !selectedQuestions[currentQuestion].options[feedback].isCorrect
          ? "shadow-red-500"
          : "shadow-white"
      }`}
    >
      <div className="flex justify-between items-center w-full px-4 ">
        <div className="w-36  py-1 flex items-center justify-center overflow-x-hidden ">
          <h1 className=" font-bold text-lg text-Cream">{username}</h1>
        </div>
        {!isQuizCompleted && <Timer resetTimer={resetTimer}/>}
        <div className="w-36  py-1 flex items-center justify-center">
          <h2 className="font-bold text-lg text-Cream">
            {currentQuestion + 1}/{totalQuestions}
          </h2>
        </div>
      </div>

      <div className="flex flex-col items-center p-2">
        <h2 className="text-white text-xl  text-center min-h-14 my-2">
          {selectedQuestions[currentQuestion].text}
        </h2>

        {selectedQuestions[currentQuestion].options.map((option, index) => (
          <div className="m-1 w-120 h-18" key={index}>
            <button
              className={`border-4 text-white w-80 h-10 rounded-lg transition ease-in-out  hover:bg-opacity-20 hover:bg-Font ${
                feedback === "correct" && option.isCorrect
                  ? "border-green-500"
                  : feedback === index && !option.isCorrect
                  ? "border-red-500 "
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
      <div >
        <Hint useHint={useHint} disabled={usedHint} isQuizCompleted={isQuizCompleted} />
      </div>
      {isQuizCompleted && (
        <Result
          finalScore={score}
          questionNumber={totalQuestions}
          restartGame={restartGame}
          username={username}
          category={category}
        ></Result>
      )}
    </div>
  );
}
