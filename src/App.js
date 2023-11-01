import "./App.css";
import Aboutus from "./Components/Aboutus";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import Solutions from "./Components/Solutions";
import Contact from "./Components/Contact";

function App() {
  return (
    <div>
      <Home />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
