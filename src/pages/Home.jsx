import { useState } from "react";
import logo from "../logo.svg";
import logoPink from "../logo_alt_pink.svg";
import { useNavigate } from "react-router-dom";
import Tutorial from "../components/Tutorial";

export default function Home() {
  const [username, setUsername] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [category, setCategory] = useState("science"); // Default olarak science seçili
  const [isInputFocused, setIsInputFocused] = useState(false);
  const navigate = useNavigate();

  function saveUsername(event) {
    const input = event.target.value;
    if (input.length <= 14) {
      setUsername(input);
    }
  }

  function handleStartClick() {
    if (username.trim() !== "") {
      navigate("/quiz", { state: { username: username, category: category } });
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
          className={`border-2 rounded mb-4 h-8 bg-Misty ${
            isInputFocused ? "border-white text-Font" : "border-White text-Font"
          }`}
          value={username}
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
          onChange={saveUsername}
        />

        <div className="flex flex-col justify-center items-center">
          <div className="mb-4">
            <label
              htmlFor="categories"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select a category
            </label>
            <select
              id="categories"
              className="bg-Sage border  text-center border-gray-300 text-white text-sm rounded-lg focus:ring-white focus:border-white block w-full p-2.5 "
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="science">Science</option>
              <option value="history">History</option>
            </select>
          </div>

          <button
            className="bg-Sage px-12 py-3 w-44 rounded-lg transition ease-in-out delay-100 text-Cream font-bold border-2 border-Cream shadow-xl hover:bg-white hover:text-Font hover:border-Sage"
            onClick={handleStartClick}
          >
            START <p className="uppercase">{category}</p>
          </button>
        </div>

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
