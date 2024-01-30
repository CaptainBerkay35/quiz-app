import Quiz from "../components/Quiz";
import Tutorial from "../components/Tutorial";
import { useLocation } from "react-router-dom";

export default function QuizPage() {
  const location = useLocation();
  const username = location.state?.username || "";
  return (
    <div className="bg-gradient-to-t from-Salmon to-purple-200 h-screen flex flex-col ">
      <div className="h-screen flex  justify-center items-center ">
        <Quiz username={username}></Quiz>
      </div>
      <div className="flex justify-end pr-8 pb-4">
        <Tutorial></Tutorial>
      </div>
    </div>
  );
}
