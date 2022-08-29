import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { BsBookmark } from "react-icons/bs";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

axios.defaults.headers.common["Authorization"] = ("Bearer " + localStorage.getItem("token"));

const Research = (props) => {
  const [fields, setFields] = useState();

  useEffect(() => {
    axios
      .get(
        `http://rezaklhor-001-site1.etempurl.com/WorkField/GetProjectWorkFields?id=${props.project.id}`
      )
      .then(function (response) {
        setFields(response.data);
      })
      .catch(function () {
        setFields(null);
      });
  }, []);
  const handleBookmark = () => {
    axios
      .post(
        `http://rezaklhor-001-site1.etempurl.com/project/PutProjectInSavebox?projectId=${props.project.id}`
      )
      .then(function () {
        NotificationManager.success("پژوهش ذخیره شد");
      })
      .catch(function () {
        NotificationManager.warning("مشکلی در ذخیرۀ پژوهش پیش آمد");
      });
  };

  return (
    <div className="container justify-content-center" id="eachResearch">
      <h3 onClick={() => props.setter(props.project)} id="researchHeader">
        {props.project.name}
      </h3>
      {fields &&
        fields.map((unit) => <h5 className="fieldInResearch">{unit.name} </h5>)}
      <hr />

      <p>{props.project.projectExplain}</p>
      <span>{props.project.createTime.substring(0, 10)}</span>
      <button onClick={handleBookmark} style={{ margin: "7px" , backgroundColor:"white", border: "solid 1px", borderRadius:"7px"}} disabled={!localStorage.getItem("token")}>
        <BsBookmark/>
      </button>
    </div>
  );
};

export default Research;
