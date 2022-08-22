import React from "react";

function AboutMe(props) {
  return (
    <div>
      <p>{props.user.bio}</p>
      <p>حوزه‌های پژوهشی : {}</p>
      <p>راه‌های ارتباطی :</p>
      <p>تجارب کاری :</p>
    </div>
  );
}

export default AboutMe;
