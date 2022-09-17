import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

axios.defaults.headers.common["Authorization"] = ("Bearer " + localStorage.getItem("token"));


function AboutMe(props) {
  const [workfields, setWorkfields] = useState(null);
  const [contactInfo, setContactInfo] = useState(null);
  const [education, setEducation] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://bsite.net/RezaKlhor/WorkField/GetUserWorkFields?id=${props.user.id}`
      )
      .then(function (response) {
        setWorkfields(response.data);
      });
    axios
      .get(
        `https://bsite.net/RezaKlhor/User/GetPublicContactInfo?userId=${props.user.id}`
      )
      .then(function (response) {
        setContactInfo(response.data);
      });
    axios
      .get(
        `https://bsite.net/RezaKlhor/User/GetUsersEducationRecords?userId=${props.user.id}`
      )
      .then(function (response) {
        setEducation(response.data);
      });
  }, []);
  return (
    <div id="firstAbout" style={{ maxWidth: "80%" }}>
      <p>{props.user.bio}</p>
      <h5>حوزه‌های پژوهشی : </h5>
      {workfields &&
        workfields.map((paragraph, index) => (
          <p key={index}>{`${paragraph.name} `}</p>
        ))}
      <h5>راه‌های ارتباطی :</h5>
      {contactInfo &&
        contactInfo.map((paragraph, index) => (
          <p key={index}>{`${paragraph.name} ${paragraph.contactNumber}`}</p>
        ))}
      <h5>مهارت‌ها :</h5>
      <h5>تحصیلات :</h5>
      {education &&
        education.map((paragraph, index) => (
          <p key={index}>
            {`${paragraph.degree} ${paragraph.educationInstituteName}`}
          </p>
        ))}
    </div>
  );
}

export default AboutMe;
