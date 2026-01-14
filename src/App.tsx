import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import AuditoriumDetail from "@/pages/AuditoriumDetail";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auditorium/:id" element={<AuditoriumDetail />} />
      </Routes>
    </Router>
  );
}
