export const saveScoreToLocalStorage = (username, finalScore, category) => {
    const existingScores = JSON.parse(localStorage.getItem("quizScores")) || [];
    const newScore = { username, finalScore, category, date: new Date().toISOString() }; 
    const updatedScores = [...existingScores, newScore];
    localStorage.setItem("quizScores", JSON.stringify(updatedScores));
  };
  