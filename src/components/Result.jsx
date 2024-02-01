import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Result({
  finalScore,
  questionNumber,
  restartGame,
  username,
  category,
}) {
  const navigate = useNavigate();
  const [openScoreboard, setOpenScoreboard] = useState(false);
  const scores = JSON.parse(localStorage.getItem("quizScores")) || [];

  scores.sort((a, b) => b.finalScore - a.finalScore);

  const navigateToMainMenu = () => {
    navigate("/");
  };

  const handleScoreboard = () => {
    setOpenScoreboard(true);
  };

  const handleClose = () => {
    setOpenScoreboard(false);
  };

  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  return (
    <div className="bg-Salmon border-t-4 border-Cream flex flex-col justify-center items-center mt-2">
      <div className="flex flex-col items-center mb-4">
        <h1 className="text-xl font-bold text-Cream mt-2">Final Results</h1>
        <p className="text-xl text-Cream">
          Score : {finalScore}/{questionNumber}
        </p>
      </div>
      <div className="flex">
        <button
          className="border-2  rounded-md border-white text-white  w-52  px-12 py-2 m-1 hover:bg-white hover:text-Font hover:border-Sage"
          onClick={navigateToMainMenu}
        >
          Main Menu
        </button>
        <button
          className="border-2 rounded-md border-white text-white w-52 px-12 py-2 m-1 hover:bg-white hover:text-Font hover:border-Sage"
          onClick={restartGame}
        >
          Restart Game
        </button>
      </div>
      <div>
        <button
          className=" text-white w-52 px-12 py-1 m-1 hover:bg-white hover:text-Font hover:border-Sage"
          onClick={handleScoreboard}
        >
          Scoreboard
        </button>
      </div>
      {openScoreboard && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-96 h-96 bg-Nude border-4 border-Sage rounded-2xl p-4 shadow-2xl overflow-y-auto">
            <div className="flex justify-end">
              <button onClick={handleClose}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </button>
            </div>
            <div className="text-white">
              <h2 className="mb-4 text-xl font-bold">Scoreboard</h2>
              <ul>
                {scores.map((score, index) => (
                  <li
                    className="border-b-2 border-white"
                    key={index}
                  >
                    <p>
                      {score.username}'s Score : {score.finalScore}
                    </p>
                    <p>Category: {score.category}</p>
                    <p>Date: {formatDate(score.date)}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
