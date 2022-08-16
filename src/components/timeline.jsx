import React, { useEffect, useState } from "react";
import Research from "./research";
import Footer from "./footer";
import Filter from "./filter";
import FullResearch from "./fullResearch";

function Timeline() {
  const [projects, setProjects] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState(null);
  const [selectedResearch, setSelectedResearch] = useState(null);

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
      <div>
        {projects && <Filter data={projects} setter={setFilteredProjects} />}
      </div>
      <div id="timelineContainer">
        <div id="timelineResearchs">
          {filteredProjects && (
            <Research
              projects={filteredProjects}
              setter={setSelectedResearch}
            />
          )}
        </div>
        <div id="ResearchDescription">
        <FullResearch data={selectedResearch} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Timeline;
