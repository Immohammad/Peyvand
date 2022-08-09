import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignLogin = (props) => {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [pass, setPass] = useState("");
  const [isLoggedin, setIsLoggedin] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    navigate("/news");
    event.preventDefault();
  };

  const handleCode = (Event) => {
    setCode(Event.target.value);
  };

  const handlePass = (Event) => {
    setPass(Event.target.value);
  };

  const handleName = (Event) => {
    setName(Event.target.value);
  };

  const signup = () => {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("signInForm").style.display = "block";
  };

  const SignLogin = () => {
    document.getElementById("signInForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
  };

  return (
    <div id="containForm">
      <div id="signsContainer">
        <button className="signs" onClick={signup}>
          ثبت نام
        </button>
        <button className="signs" onClick={SignLogin}>
          ورود
        </button>
      </div>

      <form onSubmit={handleSubmit} id="signInForm">
        <label>
          نام و نام خانوادگی
          <br />
          <input
            type="text"
            value={name}
            onChange={handleName}
            size="40"
            required
          ></input>
        </label>
        <label>
          شماره پرسنلی
          <br />
          <input
            type="text"
            value={code}
            onChange={handleCode}
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
        <input type="submit" id="submit" value="ثبت"></input>
      </form>

      <form id="loginForm" style={{ display: "none" }}>
        <label>
          شماره پرسنلی
          <br />
          <input
            type="text"
            value={code}
            onChange={handleCode}
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
