import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbars from "./components/navbars";
import Login from "./components/signLogin";
import Timeline from "./components/timeline";

import Profile from "./components/dashboard/dashboard";
import MyReasearchs from "./components/dashboard/myReasearchs";
import Notifications from "./components/dashboard/notifications";
import Bookmarks from "./components/dashboard/bookmarks";
import EditProfile from "./components/dashboard/editProfile";
import CreateResearch from "./components/dashboard/createResearch"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbars />
        <Routes>
          <Route path="/" exact element={<Timeline />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" exact element={<Profile />} />
          <Route path="/profile/myReasearchs" element={<MyReasearchs />} />
          <Route path="/profile/notifications" element={<Notifications />} />
          <Route path="/profile/bookmarks" element={<Bookmarks />} />
          <Route path="/profile/edit" element={<EditProfile />} />
          <Route path="/profile/createResearch" element={<CreateResearch />} />
</Routes>
      </Router>
    </div>
  );
}

export default App;
