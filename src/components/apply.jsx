import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  NotificationManager,
} from "react-notifications";
import { useNavigate } from "react-router-dom";

axios.defaults.headers.common["Authorization"] ="Bearer " + localStorage.getItem("token");

function Apply(props) {
  const [description, setDescription] = useState();

  const navigate = useNavigate();

  const handleApply = (event) => {
    event.preventDefault();
    const info = { text: description, cv: "" , coAnnouncementId: props.need.id};
    axios
      .post("http://rezaklhor-001-site1.etempurl.com/Apply/Apply", info)
      .then(function () {
        NotificationManager.success("آمادگی مشارکت ارسال شد.");
        props.closer("none")
      })
      .catch(function () {
        NotificationManager.warning("مشکلی پیش آمد");
      });
  };

  return (
    <>
      <div
        className="container justify-content-center createResearch"
        style={{ borderColor: "#C3B69F" , maxWidth:"95%"}}
      >
        <form onSubmit={handleApply}>
            <p>فرم ثبت درخواست مشارکت در پژوهش</p>

          <label>
            متن درخواست
            <br />
            <textarea
              type="text"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              style={{ width: "100%" }}
              placeholder="خود را معرفی کنید و توانایی‌هایتان را بیان کنید. در صورت تمایل می‌توانید رزومه‌ای هم بارگذاری کنید"
              rows={5}
              required
            ></textarea>
          </label>
          <input type="file" style={{width: "100%", borderStyle: "dotted" }} />

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
    </>
  );
}

export default Apply;
