import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Research from "../research";
import axios from "axios";
import FullResearch from "../fullResearch";

axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("token");

function MyReasearchs(props) {
  const [projects, setProjects] = useState(null);
  const [selectedResearch, setSelectedResearch] = useState(null);

  useEffect(() => {
    axios
      .get(
        `http://rezaklhor-001-site1.etempurl.com/Project/GetProjectsByManager?managerId=${props.user.id}`
      )
      .then(function (response) {
        setProjects(response.data);
      });
  }, []);

  return (
    <div>
      <Link to="/dashboard/createResearch">
        <button id="addProject">+</button>
      </Link>
      {(props.user.role=="Professor") && <Link to="/dashboard/createRequest">
        <button id="addRequest">ایجاد موقعیت درس‌یار</button>
      </Link>}
      <div id="timelineContainer">
        <div  id="timelineResearchs">
          {projects ? (
            projects.map((unit) => <Research project={unit} setter={setSelectedResearch}/>)
          ) : (
            <div className="didntFind">تا کنون پژوهشی ساخته نشده</div>
          )}
        </div>
        <div id="ResearchDescription">
        {selectedResearch ? (
            <FullResearch data={selectedResearch} announce={true}/>
          ) : (
            <div className="container justify-content-center" id="fullResearch">
              <p>
                پروژهشی را انتخاب کنید تا شرح کامل آن در اینجا نمایش داده شود.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyReasearchs;
