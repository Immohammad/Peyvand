import React from "react";

const ProfileCard = () => {
  return (
    <div className="container mt-5 justify-content-center"  id="profileCard">
      <div className="card">
        <div className="d-flex align-items-center">
          <div className="image">
            <img
              src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
              id="profileCardImage"
              width="155"
            />
          </div>
          <div className="ml-3 w-100" style={{padding: "15px"}}>
            <h2 className="mb-0 mt-0">Captain</h2>
            <h3>رضا بلک</h3>
            <div className="p-2 mt-2 d-flex justify-content-between rounded text-white stats">
              <div className="d-flex flex-column">
                <h4 className="articles">پژوهش</h4>
                <h5 className="number1">38</h5>
              </div>
              <div className="d-flex flex-column">
                <h4 className="followers">دنبال‌کننده</h4>
                <h5 className="number2">980</h5>
              </div>
              <div className="d-flex flex-column">
                <h4 className="rating">دنبال‌کردن</h4>
                <h5 className="number3">8.9</h5>
              </div>
            </div>
            <div className="button mt-2 flex-row align-items-center">
              <button className="btn btn-sm btn-primary" id="cardFollow">
                دنبال‌کردن
              </button>
            </div>
          </div>
          <div className="ml-3 w-100" id="cardAbout">
            <h5>- مهندسی کامپیوتر، دانشکده دریوزگان تاریخ</h5>
            <h5>- همکار جواد آذری جهرمی در مگفا</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
