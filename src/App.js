import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Hobbies from "./pages/Hobbies";
import Hydration from "./pages/Hydration";
import Gedanken from "./pages/Gedanken";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/hydration" element={<Hydration />} />
          <Route path="/gedanken" element={<Gedanken />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
