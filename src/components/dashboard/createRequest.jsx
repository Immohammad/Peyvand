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
  const [description, setDescription] = useState("");
  
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
