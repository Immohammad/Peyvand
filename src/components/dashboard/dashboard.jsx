import React, { useEffect, useState } from "react";
import ProfileCard from "./profileCard";
import DashboardSidenav from "./dashboardSidenav";
import axios from "axios";
import AboutMe from "./aboutMe";
import { Routes, Route } from "react-router-dom";
import MyResearchs from "./myResearchs";
import Notifications from "./notifications";
import Bookmarks from "./bookmarks";
import EditProfile from "./editProfile";
import CreateResearch from "./createResearch";

axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('token');

const Dashboard = () => {
  const [current, setCurrent] = useState();
  useEffect(() => {
    axios
      .get(
        `http://rezaklhor-001-site1.etempurl.com/User/GetUserByUsername?username=${localStorage.getItem(
          "userName"
        )}`
      )
      .then(function (response) {
        setCurrent(response.data);
      });
  }, []);
  return (
    <>
      {current && <ProfileCard user={current} />}
      <div style={{ display: "flex" }}>
        <DashboardSidenav />
        <div className="container justify-content-center"  style={{ maxWidth: "80%" }}>
          <Routes>
            <Route path="" element={current && <AboutMe user={current} />} />
            <Route path="myResearchs" element={current && <MyResearchs user={current}/>} />
            <Route
              path="notifications"
              element={current && <Notifications user={current} />}
            />
            <Route path="bookmarks" element={<Bookmarks />} />
            <Route path="edit" element={current && <EditProfile user={current}/>} />
            <Route path="createResearch" element={<CreateResearch />} />
            <Route path="createRequest" element={<CreateRequest />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
