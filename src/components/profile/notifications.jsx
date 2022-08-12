import React from 'react'
import ProfileCard from "./profileCard";
import ProfileSidenav from "./profileSidenav";

function Notifications() {
  return (
    <>
      <ProfileCard />
      <div style={{ display: "flex" }}>
        <ProfileSidenav />
        <div>Notifications</div>
      </div>
    </>
  )
}

export default Notifications