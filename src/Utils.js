export const saveScoreToLocalStorage = (username, finalScore) => {
    const existingScores = JSON.parse(localStorage.getItem("quizScores")) || [];
    const newScore = { username, finalScore, date: new Date().toISOString() };
    const updatedScores = [...existingScores, newScore];
    localStorage.setItem("quizScores", JSON.stringify(updatedScores));
  };