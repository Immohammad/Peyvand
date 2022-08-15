import React, { useEffect, useState } from 'react'
import ProfileCard from "./profileCard";
import ProfileSidenav from "./profileSidenav";
import Research from "../research";

function Bookmarks() {
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
        <div style={{ maxWidth: "80%" }}>{projects && <Research projects={projects}/>}</div>
      </div>
    </>
  )
}

export default Bookmarks