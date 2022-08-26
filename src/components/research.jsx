import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

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
  return (
    <div className="container justify-content-center" id="eachResearch">
      <h3 onClick={() => props.setter(props.project)} id="researchHeader">
        {props.project.name}
      </h3>
      {fields &&
        fields.map((unit) => (
          <h5 className="fieldInResearch">
            {unit.name}{" "}
          </h5>
        ))}
      <hr />

      <p>{props.project.projectExplain}</p>
      <p>{props.project.createTime.substring(0, 10)}</p>
    </div>
  );
};

export default Research;
