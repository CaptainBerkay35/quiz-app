import Quiz from "../components/Quiz";
import Tutorial from "../components/Tutorial";
import { useLocation } from "react-router-dom";
import logoPink from "../logo_alt_pink.svg";

export default function QuizPage() {
  const location = useLocation();
  const username = location.state?.username || "";
  const category = location.state?.category || "";
  return (
    <div className="bg-gradient-to-t from-Nude to-Sage h-screen flex flex-col ">
      <div className="h-screen flex  justify-center items-center ">
        <Quiz username={username} category={category}></Quiz>
      </div>
      <div className="flex justify-end pr-8 ">
        <Tutorial></Tutorial>
      </div>
    </div>
  );
}
