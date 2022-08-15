import React, { useState } from "react";
// import './styling.css';
import { useNavigate } from "react-router-dom";

const SignLogin = () => {
  // states that have signup data
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const [passRepeat, setPassRepeat] = useState("");
  const [position, setPositiont] = useState("0");

  //expanded forms data
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [gender, setGender] = useState("");
  const [studentId, setStudentId] = useState("");

  const [teacherId, setTeacherId] = useState("");

  const [companyName, setCompanyName] = useState("");
  const [companyCode, setCompanyCode] = useState("");

  //other states
  const [isLoggedin, setIsLoggedin] = useState(false);
  const navigate = useNavigate();

  //handlers
  const signup = () => {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("signupForm").style.display = "block";
  };
  const login = () => {
    document.getElementById("signupForm").style.display = "none";
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

  const handleName = (Event) => {
    setName(Event.target.value);
  };
  const handleCode = (Event) => {
    setCode(Event.target.value);
  };
  const handleGender = (Event) => {
    setGender(Event.target.value);
  };
  const handleStudentId = (Event) => {
    setStudentId(Event.target.value);
  };
  const handleTeacherId = (Event) => {
    setTeacherId(Event.target.value);
  };
  const handleCompanyName = (Event) => {
    setCompanyName(Event.target.value);
  };
  const handleCompanyCode = (Event) => {
    setCompanyCode(Event.target.value);
  };

  //submits
  const handleButtonToNext = (event) => {
    event.preventDefault();
    document.getElementById("signupForm").style.display = "none";
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("buttonsContainer").style.display = "none";
    if (position === "0") {
      document.getElementById("signupContinueStudent").style.display = "block";
    } else if (position === "1") {
      document.getElementById("signupContinueTeacher").style.display = "block";
    } else if (position === "2") {
      document.getElementById("signupContinueCompany").style.display = "block";
    }
  };

  const handleLogin = (event) => {
    event.preventDefault();
    ///////////////////////////////
    navigate("/");
  };
  const handleStudentSignup = (event) => {
    event.preventDefault();
    ///////////////////////////////
    navigate("/");
  };
  const handleTeacherSignup = (event) => {
    event.preventDefault();
    ///////////////////////////////
    navigate("/");
  };
  const handleCompanySignup = (event) => {
    event.preventDefault();
    ///////////////////////////////
    navigate("/");
  };

  return (
    <div id="containForm">
      <div id="buttonsContainer">
        <button className="signs" onClick={signup}>
          ثبت نام
        </button>
        <button className="signs" onClick={login}>
          ورود
        </button>
      </div>

      {/* ////////////////////////////////////////////////////asli */}
      <form
        onSubmit={handleButtonToNext}
        id="signupForm"
        style={{ display: "block" }}
      >
        <label>
          نام کاربری
          <br />
          <input
            type="text"
            value={userName}
            onChange={handleUserName}
            size="40"
            placeholder="نام کاربری یکتایی وارد کنید"
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

        <label style={{ display: "block" }}>
          نقش
          <br />
          <select
            value={position}
            onChange={handlePosition}
            required
            style={{ display: "block" , width:"100%"}}
          >
            <option value="0">دانشجو</option>
            <option value="1">استاد</option>
            <option value="2">شرکت</option>
          </select>
        </label>
        <input type="submit" className="loginButtons" value="مرحلۀ بعد"></input>
      </form>
      {/* //////////////////////////////////////////////////// asli finish*/}

      {/* //////////////////////////////////////////////////// login*/}
      <form id="loginForm" onSubmit={handleLogin} style={{ display: "none" }}>
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
        <input type="submit" className="loginButtons" value="ورود"></input>
      </form>
      {/* //////////////////////////////////////////////////// finish login*/}

      {/* //////////////////////////////////////////////////// student*/}
      <form
        id="signupContinueStudent"
        onSubmit={handleStudentSignup}
        style={{ display: "none" }}
      >
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
          کد ملی
          <br />
          <input
            type="number"
            value={code}
            onChange={handleCode}
            size="40"
            required
            // onWheelCapture={(e) => {
            //   e.target.blur();
            // }}
          ></input>
        </label>
        <label>
          جنسیت
          <br />
          <select value={gender} onChange={handleGender} required>
            <option value="0">مرد</option>
            <option value="1">زن</option>
          </select>
        </label>
        <label>
          شماره دانشجویی
          <br />
          <input
            type="number"
            value={studentId}
            onChange={handleStudentId}
            size="40"
            required
            // onWheelCapture={(e) => {
            //   e.target.blur();
            // }}
          ></input>
        </label>
        <input type="submit" className="loginButtons" value="ثبت"></input>
      </form>
      {/* //////////////////////////////////////////////////// finish student*/}

      {/* //////////////////////////////////////////////////// teacher*/}
      <form
        id="signupContinueTeacher"
        onSubmit={handleTeacherSignup}
        style={{ display: "none" }}
      >
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
          کد ملی
          <br />
          <input
            type="number"
            value={code}
            onChange={handleCode}
            size="40"
            required
            onWheelCapture={(e) => {
              e.target.blur();
            }}
          ></input>
        </label>
        <label>
          جنسیت
          <br />
          <select value={gender} onChange={handleGender} required>
            <option value="0">مرد</option>
            <option value="1">زن</option>
          </select>
        </label>
        <label>
          شماره پرسنلی
          <br />
          <input
            type="number"
            value={teacherId}
            onChange={handleTeacherId}
            size="40"
            required
            onWheelCapture={(e) => {
              e.target.blur();
            }}
          ></input>
        </label>
        <input type="submit" className="loginButtons" value="ثبت"></input>
      </form>
      {/* //////////////////////////////////////////////////// finish teacher*/}

      {/* //////////////////////////////////////////////////// company*/}
      <form
        id="signupContinueCompany"
        onSubmit={handleCompanySignup}
        style={{ display: "none" }}
      >
        <label>
          نام شرکت
          <br />
          <input
            type="text"
            value={companyName}
            onChange={handleCompanyName}
            size="40"
            required
          ></input>
        </label>
        <label>
          کد اقتصادی
          <br />
          <input
            type="number"
            value={companyCode}
            onChange={handleCompanyCode}
            size="40"
            required
            onWheelCapture={(e) => {
              e.target.blur();
            }}
          ></input>
        </label>

        <input type="submit" className="loginButtons" value="ثبت"></input>
      </form>
      {/* //////////////////////////////////////////////////// finish company*/}
    </div>
  );
};
export default SignLogin;
