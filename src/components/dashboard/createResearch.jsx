import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { useNavigate } from "react-router-dom";

axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('token');

function CreateResearch() {
  const [name, setName] = useState("");
  const [fullDescription, setFullDescription] = useState("");
  const [pstate, setPstate] = useState(0);
  const [area, setArea] = useState(1);
  const [secondArea, setSecondArea] = useState(1);
  const [thirdArea, setThirdArea] = useState(1);

  const [fieldsMenu, setFieldsMenu] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://rezaklhor-001-site1.etempurl.com/WorkField/GetAllWorkFields")
      .then(function (response) {
        setFieldsMenu(response.data);
      })
      .catch(function () {
        NotificationManager.warning("بارگیری حوزه‌های پژوهشی با خطا مواجه شد");
      });
  }, []);

  const handleCreate = (event) => {
    event.preventDefault();
    axios
      .post("http://rezaklhor-001-site1.etempurl.com/project/ProjectCreate", {
        name: name,
        projectExplain: fullDescription,
        projectState: pstate,
      })
      .then((response) => {
        if (area != 1)
          axios.post(
            `http://rezaklhor-001-site1.etempurl.com/WorkField/AddWorkFieldToProject?projectId=${response.data.id}&workId=${area}`
          );
        // else return;
        if (secondArea != 1)
          axios.post(
            `http://rezaklhor-001-site1.etempurl.com/WorkField/AddWorkFieldToProject?projectId=${response.data.id}&workId=${secondArea}`
          );
        // else return;
        if (thirdArea != 1)
          axios.post(
            `http://rezaklhor-001-site1.etempurl.com/WorkField/AddWorkFieldToProject?projectId=${response.data.id}&workId=${thirdArea}`
          );
        // else return;
        navigate("/dashboard/myResearchs");
        return NotificationManager.success("پژوهش ساخته شد");
      })
      .catch(() => {
        return NotificationManager.warning("ساخت پژوهش با خطا مواجه شد");
      });
  };

  return (
    <>
      <div className="container justify-content-center createResearch">
        <form onSubmit={handleCreate}>
          <label>
            عنوان پژوهش
            <br />
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              style={{ width: "100%" }}
              placeholder="عنوان پژوهش باید یکتا باشد"
              required
            ></input>
          </label>

          <label>
            شرح کامل
            <br />
            <textarea
              type="text"
              value={fullDescription}
              onChange={(event) => setFullDescription(event.target.value)}
              style={{ width: "100%" }}
              placeholder="نام کاربری یکتایی وارد کنید"
              rows={4}
              required
            ></textarea>
          </label>

          <label>
            وضعیت پژوهش{" "}
            <select
              value={pstate}
              required
              onChange={(event) => setPstate(event.target.value)}
            >
              <option value={0}>در حال پیشبرد</option>
              <option value={1}>پایان‌یافته</option>
            </select>
          </label>
          <hr />
          <p
            style={{
              fontSize: "11pt",
              fontWeight: "bold",
              paddingRight: "5px",
            }}
          >
            هر پژوهش می‌تواند حداکثر 3 حوزۀ پژوهشی داشته باشد. انتخاب از بین
            گزینه‌های ازپیش‌موجود موجب می‌شود پژوهش در صفحۀ پژوهش‌ها بیشتر دیده
            شود.
          </p>
          <label>
            <span>حوزۀ اصلی پژوهش</span>{" "}
            <select
              value={area}
              onChange={(event) => {
                setArea(event.target.value);
                if (event.target.value == 1) {
                  setSecondArea(1);
                  setThirdArea(1);
                }
              }}
              style={{ display: "inline", width: "120px" }}
            >
              <option value={1}>---</option>
              {fieldsMenu &&
                fieldsMenu.map((option, index) => (
                  <option key={index} value={option.id}>
                    {option.name}
                  </option>
                ))}
            </select>
          </label>
          <label>
            <span style={{ paddingLeft: "4px" }}>حوزۀ پژوهشی دوم</span>{" "}
            <select
              disabled={area == 1 ? true : false}
              value={secondArea}
              onChange={(event) => {
                setSecondArea(event.target.value);
                if (event.target.value == 1) {
                  setThirdArea(1);
                }
              }}
              style={{ display: "inline", width: "120px" }}
            >
              <option value={1}>---</option>
              {fieldsMenu &&
                fieldsMenu.map((option, index) => (
                  <option key={index} value={option.id}>
                    {option.name}
                  </option>
                ))}
            </select>
          </label>
          <label>
            <span>حوزۀ پژوهشی سوم</span>{" "}
            <select
              disabled={secondArea == 1 ? true : false}
              value={thirdArea}
              onChange={(event) => setThirdArea(event.target.value)}
              style={{ display: "inline", width: "120px" }}
            >
              <option value={1}>---</option>
              {fieldsMenu &&
                fieldsMenu.map((option, index) => (
                  <option key={index} value={option.id}>
                    {option.name}
                  </option>
                ))}
            </select>
          </label>
          <input
            type="submit"
            className="loginButtons"
            value="افزودن"
            style={{ width: "50%" }}
          ></input>
        </form>
      </div>
      <NotificationContainer />
    </>
  );
}

export default CreateResearch;
