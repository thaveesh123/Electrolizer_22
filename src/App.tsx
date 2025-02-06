import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Puzzle from "./pages/Puzzle";
import Home from "./pages/Home";
import StudentQRScanner from "./pages/Student";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/puzzle" element={<Puzzle />} />
        <Route path="/student" element={<StudentQRScanner />} />
      </Routes>
    </Router>
  );
}

export default App;
