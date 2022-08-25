import React, { useEffect, useState } from "react";
import Research from "./research";
import Footer from "./footer";
import Filter from "./filter";
import FullResearch from "./fullResearch";

function Timeline() {
  const [projects, setProjects] = useState(null);
  const [selectedResearch, setSelectedResearch] = useState(null);

  useEffect(() => {
    fetch("http://rezaklhor-001-site1.etempurl.com/Project/GetAllProjects")
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
        <Filter setter={setProjects} />
      </div>
      <div id="timelineContainer">
        <div id="timelineResearchs">
          {projects ? (
            projects.map((unit) => (
              <Research project={unit} setter={setSelectedResearch} />
            ))
          ) : (
            <div className="didntFind">پژوهشی یافت نشد</div>
          )}
        </div>
        <div id="ResearchDescription">
          {selectedResearch ? (
            <FullResearch data={selectedResearch} />
          ) : (
            <div className="container justify-content-center" id="fullResearch">
              <p>
                پروژهشی را انتخاب کنید تا شرح کامل آن در اینجا نمایش داده شود.
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Timeline;
