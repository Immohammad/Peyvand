import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { useNavigate } from "react-router-dom";

axios.defaults.headers.common["Authorization"] = ("Bearer " + localStorage.getItem("token"));


function CreateResearch() {
  const [name, setName] = useState();
  const [description, setDescription] = useState();

  const navigate = useNavigate();

  const handleCreate = (event) => {
    event.preventDefault();
    const info = { tittle: name, text: description };
    axios
      .post("https://bsite.net/RezaKlhor/Ta/CreateTaRequest", info)
      .then(function () {
        NotificationManager.success("موقعیت درس‌یار ساخته شد");
        navigate("/dashboard/myResearchs");
      })
      .catch(function () {
        NotificationManager.warning("مشکلی پیش آمد");
      });
  };

  return (
    <>
      <div
        className="container justify-content-center createResearch"
        style={{ borderColor: "#C3B69F" }}
      >
        <form onSubmit={handleCreate}>
          <label>
            عنوان موقعیت
            <br />
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              style={{ width: "100%" }}
              placeholder="مثلا: درس‌یار برای برگزاری حل تمرین درس ریاضی"
              required
            ></input>
          </label>

          <label>
            شرح موقعیت
            <br />
            <textarea
              type="text"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              style={{ width: "100%" }}
              placeholder="شرایط و شرح وظیفه را وارد کنید"
              rows={6}
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
