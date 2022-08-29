import React, { useEffect, useState } from "react";
import Cooperation from "./cooperation";
import { MdDescription, MdPeopleAlt } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";
import { VscGitPullRequestCreate } from "react-icons/vsc";
import { FaNewspaper } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BsBookmark } from "react-icons/bs";

const FullResearch = (props) => {
  const [fields, setFields] = useState();
  const [managers, setManagers] = useState();
  const [participators, setParticipators] = useState();
  const [needs, setNeeds] = useState();
  const [announcementText, setAnnouncementText] = useState();
  const [announcementTitle, setAnnouncementTitle] = useState();

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
        setParticipators(response.data);
      })
      .catch(function () {
        setParticipators(null);
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

function handleAnnounceCreate() {
  
}

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
            <p
              key={index}
              onClick={() => navigate(`/profile/${option.id}`)}
              style={{ cursor: "pointer" }}
            >
              {option.username}
            </p>
          ))}
        <hr />
        <MdPeopleAlt style={{ display: "inline" }} />{" "}
        <h5 style={{ display: "inline" }}>شرکت‌کنندگان</h5>
        {participators &&
          participators.map((option, index) => (
            <p
              key={index}
              onClick={() => navigate(`/profile/${option.id}`)}
              style={{ cursor: "pointer" }}
            >
              {option.username}
            </p>
          ))}
        <hr />
        <VscGitPullRequestCreate style={{ display: "inline" }} />{" "}
        <h5 style={{ display: "inline" }}>نیاز به همکاری</h5>
        <button
          style={{
            marginRight:"10px",
            backgroundColor: "white",
            width: "25pt",
            color: "green",
            border: "solid 2px green",
            borderRadius: "100%",
            display:((props.announce) ? "block" : "none")
          }}
        >
          +
        </button>
        <div
        className="container justify-content-center createResearch"
        style={{ borderColor: "#C3B69F" , maxWidth:"95%"}}
      >
        <form onSubmit={handleAnnounceCreate}>
            <p>فرم درخواست مشارکت در پژوهش</p>

          <label>
            عنوان درخواست
            <br />
            <input
              type="text"
              value={announcementTitle}
              onChange={(event) => setAnnouncementTitle(event.target.value)}
              style={{ width: "100%" }}
              required
            ></input>
          </label>
          <label>
            شرح مشارکت
            <br />
            <textarea
              type="text"
              value={announcementText}
              onChange={(event) => setAnnouncementText(event.target.value)}
              style={{ width: "100%" }}
              required
            ></textarea>
          </label>

          <input
            type="submit"
            className="loginButtons"
            value="افزودن"
            style={{ width: "50%" , marginTop:"5px"}}
          ></input>
          <button onClick={() => props.closer("none")} style={{
          marginRight: "10px",
          backgroundColor: "white",
          borderRadius: "7px",
        }}>انصراف</button>
        </form>
      </div>
        {needs &&
          needs.map((option, index) => (
            <Cooperation key={index} need={option} />
          ))}
        <hr />
        <FaNewspaper style={{ display: "inline" }} />{" "}
        <h5 style={{ display: "inline" }}>اطلاعیه‌ها</h5>
        <hr />
        <span>{props.data.createTime.substring(0, 10)}</span>
        <span style={{ marginRight: "10px" }}>
          <BsBookmark />
        </span>
      </div>
    </div>
  );
};

export default FullResearch;
