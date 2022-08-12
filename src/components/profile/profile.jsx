import React from "react";
import ProfileCard from "./profileCard";
import ProfileSidenav from "./profileSidenav";


const Profile = () => {
  return (
    <>
    <ProfileCard/>
    <div style={{ display: "flex" }}>
        <ProfileSidenav/>

        <div></div>
      </div>
    
    </>   
    
  );
};

export default Profile;
