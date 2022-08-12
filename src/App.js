import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbars from "./components/navbars";
import Login from "./components/signLogin";
import Timeline from "./components/timeline";

import Profile from "./components/profile/profile";
import MyReasearchs from "./components/profile/myReasearchs";
import Notifications from "./components/profile/notifications";
import Bookmarks from "./components/profile/bookmarks";
import EditProfile from "./components/profile/editProfile";


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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
