import React, { useEffect, useState } from "react";
import Research from "./research";

function Timeline() {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/projects")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProjects(data);
      });
  }, []);
  return (
    <div>
      <div>filters</div>
      <div id="timelineContainer">
        <div id="timelineResearchs">{projects && <Research projects={projects} />}</div>
        <div id="ResearchDescription">Research discreption</div>
      </div>
    </div>
  );
}

export default Timeline;
