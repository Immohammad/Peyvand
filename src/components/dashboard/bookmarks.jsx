import React, { useEffect, useState } from "react";
import ProfileCard from "./profileCard";
import ProfileSidenav from "./profileSidenav";
import Research from "../research";
import Filter from "../filter";

function Bookmarks() {
  const [projects, setProjects] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState(null);

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
        <div style={{ maxWidth: "80%" }}>
        <div id="filterInBookmark">{projects && <Filter data={projects} setter={setFilteredProjects}/>}</div>
          {filteredProjects && <Research projects={filteredProjects} />}        </div>
      </div>
    </>
  );
}

export default Bookmarks;
