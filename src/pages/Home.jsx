import { useState } from "react";
import logo from "../logo.svg";
import { useNavigate } from "react-router-dom";
import Tutorial from "../components/Tutorial";

export default function Home() {
  const [username, setUsername] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  function saveUsername(event) {
    setUsername(event.target.value);
  }

  function handleStartClick() {
    if (username.trim() !== "") {
      navigate("/quiz");
    } else {
      setShowAlert(true);
    }
  }

  return (
    <div className="bg-gradient-to-t from-blue-500 to-blue-950 h-screen flex flex-col ">
      <div className="h-screen flex flex-col justify-center items-center ">
      <img className="mb-4 w-20" src={logo} alt="Logo" />
      <h1 className="text-white font-bold text-3xl mb-4">Quizo</h1>
      <p className="text-white w-72 text-center leading-loose mb-4">
        Are you ready to test your knowledge?Before you move on to challange let
        us know your name
      </p>
      <input
        type="text"
        className="border-2 border-blue-900 rounded mb-4 h-8"
        value={username}
        onChange={saveUsername}
      />
      <button
        className="bg-white px-12 py-3 rounded-lg text-blue-600 font-bold border-2 border-blue-900 shadow-xl mb-4"
        onClick={handleStartClick}
      >
        Start
      </button>
      {showAlert && (
        <div
          className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
          role="alert"
        >
          <span className="font-medium">Warning!</span> Please enter a username.
        </div>
      )}
      </div>
      <div className="flex justify-end pr-8 pb-4">
        <Tutorial></Tutorial>
      </div>
    </div>
  );
}
