import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbars from "./components/navbars";
import Projects from "./components/projects";
import AboutUs from "./components/aboutUs";
import News from "./components/news";
import Login from "./components/signLogin";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbars />
        <Routes>
          <Route path="/" exact element={<Projects />} />
          <Route path="/news" element={<News />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
