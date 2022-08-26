import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Research from "../research";
import axios from "axios";

axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('token');

function MyReasearchs(props) {
  const [projects, setProjects] = useState(null);

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
      <div style={{ maxWidth: "80%" }}>
        {projects ? (
          projects.map((unit) => <Research project={unit} />)
        ) : (
          <div className="didntFind">تا کنون پژوهشی ساخته نشده</div>
        )}
      </div>
    </div>
  );
}

export default MyReasearchs;
