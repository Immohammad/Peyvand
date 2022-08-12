import React from 'react'
import ProfileCard from "./profileCard";
import ProfileSidenav from "./profileSidenav";

function Bookmarks() {
  return (
    <>
      <ProfileCard />
      <div style={{ display: "flex" }}>
        <ProfileSidenav />
        <div>Bookmarks</div>
      </div>
    </>
  )
}

export default Bookmarks