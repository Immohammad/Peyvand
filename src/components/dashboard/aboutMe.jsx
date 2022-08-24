import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function AboutMe(props) {
  const [workfields, setWorkfields] = useState(null);
  const [contactInfo, setContactInfo] = useState(null);
  const [education, setEducation] = useState(null);

  useEffect(() => {
    axios
      .get(
        `http://rezaklhor-001-site1.etempurl.com/WorkField/GetUserWorkFields?id=${props.user.id}`
      )
      .then(function (response) {
        setWorkfields(response.data);
      });
    axios
      .get(
        `http://rezaklhor-001-site1.etempurl.com/User/GetPublicContactInfo?userId=${props.user.id}`
      )
      .then(function (response) {
        setContactInfo(response.data);
      });
    axios
      .get(
        `http://rezaklhor-001-site1.etempurl.com/User/GetUsersEducationRecords?userId=${props.user.id}`
      )
      .then(function (response) {
        setEducation(response.data);
      });
  }, []);
  return (
    <div id="firstAbout" style={{ maxWidth: "80%" }}>
      <p>{props.user.bio}</p>
      <h5>حوزه‌های پژوهشی : {workfields}</h5>
      <h5>راه‌های ارتباطی :</h5>
      {contactInfo &&
              contactInfo.map((paragraph, index) => (
                <p key={index}>
                  {`${paragraph.name} ${paragraph.contactNumber}`}
                </p>
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
