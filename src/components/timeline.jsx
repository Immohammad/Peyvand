import React, { useEffect, useState } from "react";
import Research from "./research";
import Footer from "./footer";
import Filter from "./filter";
import FullResearch from "./fullResearch";
import axios from "axios";

function Timeline() {
  const [projects, setProjects] = useState(null);
  const [selectedResearch, setSelectedResearch] = useState(null);

  useEffect(() => {
    axios.get("http://rezaklhor-001-site1.etempurl.com/Project/GetAllProjects")
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
       if(error.response.status == 404)
       setProjects(null)
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
