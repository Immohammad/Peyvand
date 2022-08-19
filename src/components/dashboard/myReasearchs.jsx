import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Research from "../research";
import ProfileCard from "./profileCard";
import ProfileSidenav from "./profileSidenav";

function MyReasearchs() {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/projects")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProjects(data.filter((dat) => dat.admin === "@asrejadid"));
      });
  }, []);

  return (
    <>
      <ProfileCard />
      <div style={{ display: "flex" }}>
        <ProfileSidenav />
        <div>
        <Link to="/profile/createResearch"><button id="addProject">+</button></Link>
          <div style={{ maxWidth: "80%" }}>{projects && <Research projects={projects} />}</div>
        </div>
      </div>
    </>
  );
}

export default MyReasearchs;
