import React from 'react'
import ProfileCard from "./profileCard";
import ProfileSidenav from "./profileSidenav";

function Notifications() {
  return (
    <>
      <ProfileCard />
      <div style={{ display: "flex" }}>
        <ProfileSidenav />
        <div className="container justify-content-center" id="notif">
          <h2>موضوع نوتیف</h2>
          <p>از طرف کیه</p>
          <p>شرح کوتاه</p>
          <p>تاریخ نوتیف</p>
        </div>
      </div>
    </>
  )
}

export default Notifications