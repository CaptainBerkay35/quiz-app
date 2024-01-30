import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import QuizPage from './pages/QuizPage'; // QuizPage bileşenini projeye dahil ediyoruz

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<QuizPage />} /> {/* QuizPage bileşeni için yol belirtiyoruz */}
      </Routes>
    </Router>
  );
}

export default App;
