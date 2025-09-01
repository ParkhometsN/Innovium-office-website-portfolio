import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/About";
import Unkai from "./pages/Unkai";
import Tausshh from "./pages/tausshh";
import Rav from "./pages/rav";
import ChairDesign from "./pages/19.12.design";
import Kremen from "./pages/kremen";
import ConstructionBriefForm from "./pages/brifing";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/unkai" element={<Unkai />} />
        <Route path="/tausshh" element={<Tausshh />} />
        <Route path="/rav" element={<Rav />} />
        <Route path="/chairdesign" element={<ChairDesign />} />
        <Route path="/kremen" element={<Kremen />} />
        <Route path="/Brifing" element={<ConstructionBriefForm />} />
      </Routes>
    </Router>
  );
}

export default App;
