import React from 'react'
import ProfileCard from "./profileCard";
import ProfileSidenav from "./profileSidenav";

function MyReasearchs() {
  return (
<>
      <ProfileCard />
      <div style={{ display: "flex" }}>
        <ProfileSidenav />
        <div>MyReasearchs</div>
      </div>
    </>  )
}

export default MyReasearchs