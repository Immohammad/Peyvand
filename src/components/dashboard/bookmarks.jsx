import React, { useEffect, useState } from "react";
import axios from "axios";
import Research from "../research";

axios.defaults.headers.common["token"] = localStorage.getItem("token");

function Bookmarks() {
  const [bookmarks, setBookmarks] = useState(null);

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
    <div>
      {bookmarks ? (
        bookmarks.map((unit) => <Research project={unit} />)
      ) : (
        <div className="didntFind">پژوهش ذخیره‌شده‌ای وجود ندارد.</div>
      )}
    </div>
  );
}

export default Bookmarks;
