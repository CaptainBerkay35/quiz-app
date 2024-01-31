import { useState } from "react";

export default function Tutorial() {
  const [showInfo, setShowInfo] = useState(false);

  function handleClick() {
    setShowInfo(!showInfo);
    console.log("button clicked");
  }

  function handleClose() {
    setShowInfo(false);
  }
  return (
    <div>
      <button onClick={handleClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#2f7049"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
          />
        </svg>
      </button>
      <div
        className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  ${
          showInfo ? "block" : "hidden"
        }`}
      >
        <div className="w-96 h-96 bg-Nude border-4 border-Sage rounded-2xl p-4 shadow-2xl">
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
          <div className="flex flex-col justify-center items-center">
            <div>
              <p className="text-lg mb-4">
                Welcome to <span className="font-bold">Quizo</span> player
              </p>
              <p className="text-lg mb-4">
                While challenging yourself there are things that you should care
                about.Time is not your friend as always.There is nothing you can
                do to stop time.
              </p>
            </div>
            <div className="flex  items-center justify-center">
              <p className="text-lg">
                Dont think that we are so cruel.You have 1 Joker to use.With
                this joker you can delete 2 wrong answer for a question.But you
                can only this one time.
              </p>
              <div
                className={
                  "bg-Font border-2 border-Misty rounded-full h-12 w-12 p-0.5 flex items-center justify-center "
                }
              >
                <h1 className="font-bold text-xl text-Cream">50%</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
