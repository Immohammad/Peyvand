import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignLogin = (props) => {
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const [passRepeat, setPassRepeat] = useState("");
  const [position, setPositiont] = useState("");
  const [isLoggedin, setIsLoggedin] = useState(false);
  const navigate = useNavigate();

  const signup = () => {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("signInForm").style.display = "block";
  };
  const login = () => {
    document.getElementById("signInForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
  };
  
  const handleUserName = (Event) => {
    setUserName(Event.target.value);
  };
  const handlePass = (Event) => {
    setPass(Event.target.value);
  };
  const handlePassRepeat = (Event) => {
    setPassRepeat(Event.target.value);
  };
  const handlePosition = (Event) => {
    setPositiont(Event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/news");
  };

  return (
    <div id="containForm">
      <div id="signsContainer">
        <button className="signs" onClick={signup}>
          ثبت نام
        </button>
        <button className="signs" onClick={login}>
          ورود
        </button>
      </div>

      <form onSubmit={handleSubmit} id="signInForm">
        <label>
          نام کاربری
          <br />
          <input
            type="text"
            value={userName}
            onChange={handleUserName}
            size="40"
            required
          ></input>
        </label>

        <label>
          رمز عبور
          <br />
          <input
            type="password"
            value={pass}
            onChange={handlePass}
            size="40"
            placeholder="گذرواژه‌ای برای ورود در آینده انتخاب کنید"
            required
          ></input>
        </label>
        <label>
          تکرار رمز عبور
          <br />
          <input
            type="password"
            value={passRepeat}
            onChange={handlePassRepeat}
            size="40"
            placeholder="گذرواژۀ واردشده در مرحلۀ قبل را دوباره وارد کنید"
            required
          ></input>
        </label>
        <label>
          نقش
          <br />
          <select value={position} onChange={handlePosition} required style={{display: "block"}}>
            <option value="0">دانشجو</option>
            <option value="1">استاد</option>
            <option value="2">شرکت</option>
          </select>
        </label>
        <input type="submit" id="submit" value="ثبت"></input>
      </form>

      <form id="loginForm" style={{ display: "none" }}>
      <label>
          نام کاربری
          <br />
          <input
            type="text"
            value={userName}
            onChange={handleUserName}
            size="40"
            required
          ></input>
        </label>
        <label>
          رمز عبور
          <br />
          <input
            type="password"
            value={pass}
            onChange={handlePass}
            size="40"
            required
          ></input>
        </label>
        <input type="submit" id="submit" value="ثبت"></input>
      </form>
    </div>
  );
};
export default SignLogin;
