import React, { useEffect, useState } from "react";
import axios from "axios";
import Research from "../research";
import FullResearch from "../fullResearch";

axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("token");

function Bookmarks() {
  const [bookmarks, setBookmarks] = useState(null);
  const [selectedResearch, setSelectedResearch] = useState(null);

  useEffect(() => {
    axios
      .get(
        "http://rezaklhor-001-site1.etempurl.com/project/GetProjectsInSavebox"
      )
      .then(function (response) {
        setBookmarks(response.data);
      });
  }, []);
  return (
    <div id="timelineContainer">
      <div id="timelineResearchs">
        {bookmarks ? (
          bookmarks.map((unit) => <Research project={unit} setter={setSelectedResearch}/>)
        ) : (
          <div className="didntFind">پژوهش ذخیره‌شده‌ای وجود ندارد.</div>
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
  );
}

export default Bookmarks;
