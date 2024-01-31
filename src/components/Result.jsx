import { useNavigate } from "react-router-dom";
export default function Result({ finalScore, questionNumber, restartGame }) {
  const navigate = useNavigate();
  function navigateToMainMenu() {
    navigate("/");
  }
  return (
    <div className="bg-Salmon rounded-xl flex flex-col justify-center items-center">
      <div className="flex flex-col items-center mb-4">
        <h1 className="text-xl font-bold text-black">Final Results</h1>
        <p className="text-xl ">
          Score : {finalScore}/{questionNumber}
        </p>
      </div>
      <div className="flex">
        <button
          className="border-2  rounded-md border-white text-white  w-52  px-12 py-2 m-1"
          onClick={navigateToMainMenu}
        >
          Main Menu
        </button>
        <button
          className="border-2 rounded-md border-white text-white w-52 px-12 py-2 m-1"
          onClick={restartGame}
        >
          Restart Game
        </button>
      </div>
    </div>
  );
}
