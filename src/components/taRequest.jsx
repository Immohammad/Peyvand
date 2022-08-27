import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("token");

function TaRequest(props) {
  const [teacher, setTeacher] = useState();
  const [reqText, setReqText] = useState();

  const navigate = useNavigate();

  function handleApply(event) {
    event.preventDefault();
    const info = {
      text: reqText,
      resume: "",
      tarequestId: props.request.id,
    };
    axios
      .post(
        "http://rezaklhor-001-site1.etempurl.com/Ta/CreateTaApplication",
        info
      )
      .then(() => {
        NotificationManager.success("درخواست ارسال شد");
      })
      .catch(() => {
        NotificationManager.warning("مشکلی در ارسال درخواست پیش آمد");
      });
  }
  useEffect(() => {
    axios
      .get(
        `http://rezaklhor-001-site1.etempurl.com/User/GetUserById?id=${props.request.professorId}`
      )
      .then(function (response) {
        setTeacher(response.data);
      })
      .catch(function () {
        setTeacher(null);
      });
  }, []);
  return (
    <>
      <div
        className="container justify-content-center"
        id="taReqsContainer"
        style={{ gridTemplateColumns: "2fr 1fr", display: "grid" }}
      >
        <div>
          <h3 id="taReqsHeader">{props.request.tittle}</h3>
          {teacher && (
            <h5
              onClick={() => navigate(`/profile/${props.request.professorId}`)}
              id="reqTeacher"
            >
              استاد {teacher.firstname} {teacher.lastname}
            </h5>
          )}
          <hr />

          <p>{props.request.text}</p>
          <p>{props.request.createTime.substring(0, 10)}</p>
        </div>
        <div>
          <form onSubmit={handleApply}>
            <label>
              <textarea
                type="text"
                disabled={!localStorage.getItem('token')}
                value={reqText}
                onChange={(event) => setReqText(event.target.value)}
                style={{ width: "100%" }}
                placeholder="متن درخواست خود برای استاد درس را اینجا بنویسید. برای این کار لازم است در سامانه ثبت نام کرده باشید. همچنین می‌توانید رزومه‌تان را بارگذاری کنید."
                rows={4}
                required
              ></textarea>
            </label>
            <input
              type="file"
              style={{
                marginBottom: "3pt",
                borderStyle: "dotted",
                fontSize: "14px",
                marginRight: "20pt",
              }}
            />
            <input
              type="submit"
              value="افزودن"
              style={{
                backgroundColor: "white",
                borderRadius: "7px",
                marginRight: "7px",
              }}
            />
          </form>
        </div>
      </div>
      <NotificationContainer />
    </>
  );
}

export default TaRequest;
