import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Pricelist from "./Pricelist";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricelist" element={<Pricelist />} />
      </Routes>
    </Router>
  );
}

export default App;
