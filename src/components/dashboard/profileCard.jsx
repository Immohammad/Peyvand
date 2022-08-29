import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import EmptyProfile from "../stuffs/blank-profile-drawing.png";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

axios.defaults.headers.common["Authorization"] = ("Bearer " + localStorage.getItem("token"));

const ProfileCard = (props) => {
  const [statistics, setStatistics] = useState(null);
  useEffect(() => {
    axios
      .get(
        `http://rezaklhor-001-site1.etempurl.com/User/GetUserStatistics?userId=${props.user.id}`
      )
      .then(function (response) {
        setStatistics(response.data);
      });
  }, []);

  function handleFollow() {
    axios
      .get(
        `http://rezaklhor-001-site1.etempurl.com/User/Follow?userId=${props.user.id}`
      )
      .then(() => {
        NotificationManager.success("شما از این پس این کاربر را دنبال می‌کنید");
      })
      .catch(() => {
        NotificationManager.warning("مشکلی پیش آمد");
      });
  }

  return (
    <div className="container mt-5 justify-content-center" id="profileCard">
      <div className="card">
        <div className="d-flex align-items-center">
          <div className="image">
            <img src={EmptyProfile} id="profileCardImage" width="155" />
          </div>
          <div className="ml-3 w-100" style={{ padding: "15px" }}>
            <h2 className="mb-0 mt-0">{props.user.username}</h2>
            <h3>
              {props.user.firstname} {props.user.lastname}
            </h3>
            <div className="p-2 mt-2 d-flex justify-content-between rounded text-white stats">
              <div className="d-flex flex-column">
                <h5 className="articles" style={{ color: "#a1aab9" }}>
                  پژوهش
                </h5>
                <h5 className="number1">
                  {statistics && statistics.totalProjects}
                </h5>
              </div>
              <div className="d-flex flex-column">
                <h5 className="followers" style={{ color: "#a1aab9" }}>
                  دنبال‌کننده
                </h5>
                <h5 className="number2">
                  {statistics && statistics.totalFollowers}
                </h5>
              </div>
              <div className="d-flex flex-column">
                <h5 className="rating" style={{ color: "#a1aab9" }}>
                  دنبال‌کردن
                </h5>
                <h5 className="number3">
                  {statistics && statistics.totalFollowings}
                </h5>
              </div>
            </div>
            <div className="button mt-2 flex-row align-items-center">
              <button
                className="btn btn-sm btn-primary"
                id="cardFollow"
                onClick={handleFollow}
                disabled={
                  !localStorage.getItem("token") ||
                  localStorage.getItem("userName") == props.user.username
                }
              >
                دنبال‌کردن
              </button>
            </div>
          </div>
          <div className="ml-3 w-100" id="cardAbout">
            <h5 style={{ color: "#027EA1" }}>{props.user.role}</h5>
            <h5 style={{ color: "#027EA1" }}>
              {props.user.faculty && `${props.user.faculty}`}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
