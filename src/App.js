import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useState } from "react";

import Navbars from "./components/navbars";
import Login from "./components/signLogin";
import Timeline from "./components/timeline";

import Dashboard from "./components/dashboard/dashboard";
import MyReasearchs from "./components/dashboard/myReasearchs";
import Notifications from "./components/dashboard/notifications";
import Bookmarks from "./components/dashboard/bookmarks";
import EditProfile from "./components/dashboard/editProfile";
import CreateResearch from "./components/dashboard/createResearch";
import Profile from "./components/dashboard/profile";

import NotFound from "./components/notFound";
import User from "./components/context";


function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      {/* setuser in navbar, profile, login */}
      <User.Provider value={{ USER: user, setUSER: setUser }}>
        <Router>
          <Navbars />
          <Routes>
            <Route path="/dashboard/myReasearchs" element={<MyReasearchs />} />
            <Route path="/dashboard/notifications" element={<Notifications />} />
            <Route path="/dashboard/bookmarks" element={<Bookmarks />} />
            <Route path="/dashboard/edit" element={<EditProfile />} />
            <Route
              path="/dashboard/createResearch"
              element={<CreateResearch />}
            />
            <Route path="/dashboard" exact element={<Dashboard />} />
            <Route path="/profile/myReasearchs" exact element={<MyReasearchs />} />
            <Route path="/profile" exact element={<Profile />} />
            <Route path="/login" element={<Login setter={setUser} />} />
            <Route path="/" exact element={<Timeline />} />
            <Route path="*" element={ <NotFound /> } />
          </Routes>
        </Router>
      </User.Provider>
    </div>
  );
}

export default App;
