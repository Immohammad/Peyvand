import React, { useEffect, useState } from "react";
import Cooperation from "./cooperation";
import { MdDescription, MdPeopleAlt } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";
import { VscGitPullRequestCreate } from "react-icons/vsc";
import { FaNewspaper } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {BsBookmark} from "react-icons/bs"

const FullResearch = (props) => {
  const [fields, setFields] = useState();
  const [managers, setManagers] = useState();
  const [participator, setParticipator] = useState();
  const [needs, setNeeds] = useState();
  const [announcements, setAnnouncements] = useState();

  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(
        `http://rezaklhor-001-site1.etempurl.com/WorkField/GetProjectWorkFields?id=${props.data.id}`
      )
      .then(function (response) {
        setFields(response.data);
      })
      .catch(function () {
        setFields(null);
      });
    axios
      .get(
        `http://rezaklhor-001-site1.etempurl.com/Project/GetProjectManagers?projectId=${props.data.id}`
      )
      .then(function (response) {
        setManagers(response.data);
      })
      .catch(function () {
        setManagers(null);
      });
    axios
      .get(
        `http://rezaklhor-001-site1.etempurl.com/User/GetUsersParticipates?projectId=${props.data.id}`
      )
      .then(function (response) {
        setParticipator(response.data);
      })
      .catch(function () {
        setParticipator(null);
      });
    axios
      .get(
        `http://rezaklhor-001-site1.etempurl.com/Apply/GetAnnouncementsForProjectWithApplications?projectId=${props.data.id}`
      )
      .then(function (response) {
        setNeeds(response.data);
      })
      .catch(function () {
        setNeeds(null);
      });
  }, [props.data]);
  return (
    <div className="container justify-content-center" id="fullResearch">
      <div>
        <h3 style={{ color: "#027EA1", fontWeight: "bold" }}>
          {props.data.name}
        </h3>
        {fields &&
          fields.map((unit) => (
            <h5 className="fieldInResearch">{unit.name} </h5>
          ))}
        <hr />
        <MdDescription style={{ display: "inline" }} />{" "}
        <h5 style={{ display: "inline" }}>شرح پژوهش</h5>
        <p>{props.data.projectExplain}</p>
        <hr />
        <GrUserManager style={{ display: "inline" }} />{" "}
        <h5 style={{ display: "inline" }}>مدیران</h5>
        {managers &&
          managers.map((option, index) => (
            <p key={index} onClick={() => navigate(`/profile/${option.id}`)}>
              {option.username}
            </p>
          ))}
        <hr />
        <MdPeopleAlt style={{ display: "inline" }} />{" "}
        <h5 style={{ display: "inline" }}>شرکت‌کنندگان</h5>
        <hr />
        <VscGitPullRequestCreate style={{ display: "inline" }} />{" "}
        <h5 style={{ display: "inline" }}>نیاز به همکاری</h5>
        <Cooperation />
        <hr />
        <FaNewspaper style={{ display: "inline" }} />{" "}
        <h5 style={{ display: "inline" }}>اطلاعیه‌ها</h5>
        <hr />
        <span>{props.data.createTime.substring(0, 10)}</span>
        <span style={{marginRight: "10px"}}><BsBookmark/></span>
      </div>
    </div>
  );
};

export default FullResearch;
