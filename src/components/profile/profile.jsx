import React from "react";
import ProfileCard from "./profileCard";
import ProfileSidenav from "./profileSidenav";


const Profile = () => {
  return (
    <>
    <ProfileCard/>
    <div style={{ display: "flex"}}>
        <ProfileSidenav />
        <div className="container justify-content-center">
          <div id="firstAbout" style={{ maxWidth: "80%" }}>
            <p></p> {/*دربارش*/}
            <p>رشته :</p>
            <p>مقطع :</p>
            <p>حوزه‌های پژوهشی :</p>
          <p>راه‌های ارتباطی :</p>
            <p>تجارب کاری :</p>
          </div>
      
        </div>
      </div>
    </>   
    
  );
};

export default Profile;
