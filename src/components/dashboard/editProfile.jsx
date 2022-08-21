import React from 'react'
import ProfileCard from "./profileCard";
import ProfileSidenav from "./dashboardSidenav";

function EditProfile() {
  return (
    <>
      <ProfileCard />
      <div style={{ display: "flex" }}>
        <ProfileSidenav />
        <div>EditProfile</div>
      </div>
    </>
  )
}

export default EditProfile