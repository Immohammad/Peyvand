import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbars from "./components/navbars";
import Login from "./components/signLogin";
import Timeline from "./components/timeline";

import Dashboard from "./components/dashboard/dashboard";
import Profile from "./components/profile";

import NotFound from "./components/notFound";
import User from "./components/context";
import { useEffect } from "react";
import TaRequests from "./components/taRequests";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    if (localStorage.getItem("userName"))
      setUser(localStorage.getItem("userName"));
  }, []);
  return (
    <div className="App">
      {/* setuser in navbar, profile, login */}
      <User.Provider value={{ USER: user, setUSER: setUser }}>
        <Router>
          <Navbars />
          <Routes>
            <Route path="/dashboard/*" element={<Dashboard />} />
            <Route path="/profile/:id/*" element={<Profile />} />
            <Route path="/login" element={<Login setter={setUser} />} />
            <Route path="/taRequests" element={<TaRequests/>} />
            <Route path="/" exact element={<Timeline />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </User.Provider>
    </div>
  );
}

export default App;
