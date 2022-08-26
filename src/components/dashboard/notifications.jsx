import React, { useEffect, useState } from "react";
import axios from "axios";

axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('token');

function Notifications(props) {
  const [notifs, setNotifs] = useState();
  useEffect(() => {
    axios
      .get(
        `http://rezaklhor-001-site1.etempurl.com/User/GetUserNotifs?userId=${props.user.id}`
      )
      .then(function (response) {
        setNotifs(response.data);
      });
  }, []);
  return (
    <>
      {notifs ? (notifs.map((notif) => (
        <div className="container justify-content-center" id="notif">
          <h4>{notif.notifTittle}</h4>
          <h6>{`از طرف ${notif.senderName}`}</h6>
          <p>{notif.notifText}</p>
          <p>{notif.createTime.substring(0, 10)}</p>
        </div>
      ))) : (<div className="didntFind">اعلانی وجود ندارد</div>)}
    </>
  );
}

export default Notifications;
