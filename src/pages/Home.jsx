import { useState } from "react";
import logo from "../logo.svg";
import logoPink from "../logo_alt_pink.svg";
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
      navigate("/quiz", { state: { username: username } });
    } else {
      setShowAlert(true);
    }
  }

  return (
    <div className="bg-gradient-to-t from-Nude to-Sage h-screen flex flex-col ">
      <div className="h-screen flex flex-col justify-center items-center ">
        <img className="mb-4 w-20 text-red-500" src={logoPink} alt="Logo" />
        <h1 className="text-white font-bold text-3xl mb-4">Quizo</h1>
        <p className="text-white w-72 text-center leading-loose mb-4">
          Are you ready to test your knowledge?Before you move on to challange
          let us know your name
        </p>
        <input
          type="text"
          className="border-2 border-White rounded mb-4 h-8 bg-Misty"
          value={username}
          onChange={saveUsername}
        />
        <button
          className="bg-Sage px-12 py-3 rounded-lg text-Cream font-bold border-2 border-Cream shadow-xl mb-4 hover:bg-white hover:text-Font hover:border-Sage"
          onClick={handleStartClick}
        >
          START
        </button>
        {showAlert && (
          <div
            className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            <span className="font-medium">Warning!</span> Please enter a
            username.
          </div>
        )}
      </div>
      <div className="flex justify-end pr-8 pb-4">
        <Tutorial></Tutorial>
      </div>
    </div>
  );
}
