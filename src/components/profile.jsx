import React from "react";
import { useParams } from "react-router-dom";
import AboutMe from "./dashboard/aboutMe";
import ProfileCard from "./dashboard/profileCard";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import axios from "axios";
import { useEffect, useState } from "react";
import Research from "./research";

function Profile(props) {
  const { id } = useParams();
  const [current, setCurrent] = useState();
  const [projectsManaging, setProjectsManaging] = useState();
  const [projectsParticipating, setProjectsParticipating] = useState();

  useEffect(() => {
    axios
      .get(`http://rezaklhor-001-site1.etempurl.com/User/GetUserById?id=${id}`)
      .then(function (response) {
        setCurrent(response.data);
      })
      .catch(function () {
        NotificationManager.warning("کاربر یافت نشد");
      });
    axios
      .get(
        `http://rezaklhor-001-site1.etempurl.com/project/GetProjectsByManager?id=${id}`
      )
      .then(function (response) {
        setProjectsManaging(response.data);
      })
      .catch(function () {
        setProjectsManaging(null);
      });
    axios
      .get(
        `http://rezaklhor-001-site1.etempurl.com/project/GetProjectsByParticipator?participatorId=${id}`
      )
      .then(function (response) {
        setProjectsParticipating(response.data);
      })
      .catch(function () {
        setProjectsParticipating(null);
      });
  }, []);
  return (
    <>
      {current && <ProfileCard user={current} />}
      <div
        className="container justify-content-center"
        style={{ maxWidth: "80%" }}
      >
        {current && <AboutMe user={current} />}

        {projectsManaging ? (
          projectsManaging.map((unit) => <Research project={unit} />)
        ) : (
          <div className="didntFind">
            پژوهشی که کاربر مدیر آن باشد وجود ندارد
          </div>
        )}
        <hr />
        {projectsParticipating ? (
          projectsParticipating.map((unit) => <Research project={unit} />)
        ) : (
          <div className="didntFind">
            پژوهشی که کاربر شرکت‌کنندۀ آن باشد وجود ندارد
          </div>
        )}
      </div>
      <NotificationContainer />
    </>
  );
}

export default Profile;
