import React, { useContext } from "react";
import ProfileCard from "./profileCard";
import DashboardSidenav from "./dashboardSidenav";
import User from "../context";
import axios from "axios";
import AboutMe from "./aboutMe";

const Dashboard = () => {
  axios.defaults.headers.common["token"] = localStorage.getItem("token");
  const userNameContext = useContext(User);
  const user= axios.get(`http://rezaklhor-001-site1.etempurl.com/User/GetUserByUsername?username=${userNameContext.USER}`);
  return (
    <>
      <ProfileCard user={user}/>
      <div style={{ display: "flex" }}>
        <DashboardSidenav />
        <div className="container justify-content-center">
          <div id="firstAbout" style={{ maxWidth: "80%" }}>
            <AboutMe user={user}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
