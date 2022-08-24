import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import axios from "axios";
import User from "./context";

const SignLogin = () => {
  const userFromContext = useContext(User);

  // states that have signup data
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const [passRepeat, setPassRepeat] = useState("");
  const [role, setRole] = useState(0);

  //expanded forms data
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [code, setCode] = useState("");
  const [gender, setGender] = useState(0);
  const [studentId, setStudentId] = useState("");

  const [teacherId, setTeacherId] = useState("");

  const [companyName, setCompanyName] = useState("");
  const [companyCode, setCompanyCode] = useState("");

  //other states
  const [sending, setSending] = useState(false);
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
  const handleRole = (Event) => {
    setRole(Event.target.value);
  };

  const handleName = (Event) => {
    setName(Event.target.value);
  };
  const handleLastName = (Event) => {
    setLastName(Event.target.value);
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
    if (pass != passRepeat)
      return NotificationManager.warning("تکرار رمز عبور اشتباه است");
    document.getElementById("signupForm").style.display = "none";
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("buttonsContainer").style.display = "none";
    if (role == 0) {
      document.getElementById("signupContinueStudent").style.display = "block";
    } else if (role == 1) {
      document.getElementById("signupContinueTeacher").style.display = "block";
    } else if (role == 2) {
      document.getElementById("signupContinueCompany").style.display = "block";
    }
  };

  function doPost(url, user, event) {
    setSending(true);
    axios
      .post(url, user)
      .then(function (response) {
        NotificationManager.success("ثبت نام با موفقیت انجام شد");
        setTimeout(() => {
          handleLogin(event);
        }, 1000);
      })
      .catch(function (error) {
        setSending(false);
        return NotificationManager.warning("ثبت نام با خطا مواجه شد");
      });
  }
  const handleStudentSignup = (event) => {
    event.preventDefault();
    const newUser = {
      username: userName,
      password: pass,
      firstname: name,
      lastname: lastName,
      nationalIdNum: code,
      gender: gender,
      studentID: studentId,
    };
    doPost(
      "http://rezaklhor-001-site1.etempurl.com/Register/StudentRegister",
      newUser,
      event
    );
  };
  const handleTeacherSignup = (event) => {
    event.preventDefault();
    const newUser = {
      username: userName,
      password: pass,
      firstname: name,
      lastname: lastName,
      nationalIdNum: code,
      gender: gender,
      personnelID: teacherId,
    };
    doPost(
      "http://rezaklhor-001-site1.etempurl.com/Register/ProfessorRegister",
      newUser,
      event
    );
  };
  const handleCompanySignup = async (event) => {
    event.preventDefault();
    const newUser = {
      username: userName,
      password: pass,
      companyName: companyName,
      companyIDnumber: companyCode,
    };
    doPost(
      "http://rezaklhor-001-site1.etempurl.com/Register/CompanyRegister",
      newUser,
      event
    );
  };

  const handleLogin = (event) => {
    event.preventDefault();
    setSending(true);
    const currentUser = {
      username: userName,
      password: pass,
    };
    axios
      .post("http://rezaklhor-001-site1.etempurl.com/Login", currentUser)
      .then(function (response) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userName", userName);
        userFromContext.setUSER(userName);
        setSending(false);
        navigate("/");
      })
      .catch(function (error) {
        setSending(false);
        return NotificationManager.warning("نام کاربری یا رمز عبور نادرست است");
      });
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
            minlength="8"
            placeholder="رمز عبور باید حداقل 8 کاراکتر باشد"
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
            placeholder="رمز عبور را دوباره وارد کنید"
            required
          ></input>
        </label>

        <label style={{ display: "block" }}>
          نقش
          <br />
          <select
            value={role}
            onChange={handleRole}
            required
            style={{ display: "block", width: "100%" }}
          >
            <option value={0}>دانشجو</option>
            <option value={1}>استاد</option>
            <option value={2}>شرکت</option>
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
        <input
          disabled={sending}
          type="submit"
          className="loginButtons"
          value="ورود"
        ></input>
      </form>
      {/* //////////////////////////////////////////////////// finish login*/}

      {/* //////////////////////////////////////////////////// student*/}
      <form
        id="signupContinueStudent"
        onSubmit={handleStudentSignup}
        style={{ display: "none" }}
      >
        <label>
          نام
          <br />
          <input
            type="text"
            value={name}
            onChange={handleName}
            maxLength="20"
            size="40"
            required
          ></input>
        </label>
        <label>
          نام خانوادگی
          <br />
          <input
            type="text"
            value={lastName}
            onChange={handleLastName}
            maxLength="20"
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
            placeholder="ده رقم کد ملی را بدون خط فاصله وارد کنید"
            size="40"
            required
            style={{ width: "100" }}
            onWheelCapture={(e) => {
              e.target.blur();
            }}
          ></input>
        </label>
        <label>
          جنسیت
          <br />
          <select value={gender} onChange={handleGender} required>
            <option value={0}>مرد</option>
            <option value={1}>زن</option>
          </select>
        </label>
        <label>
          شماره دانشجویی
          <br />
          <input
            type="number"
            value={studentId}
            onChange={handleStudentId}
            minLength="8"
            maxLength="9"
            size="40"
            required
            onWheelCapture={(e) => {
              e.target.blur();
            }}
          ></input>
        </label>
        <input disabled={sending} type="submit" className="loginButtons" value="ثبت"></input>
      </form>
      {/* //////////////////////////////////////////////////// finish student*/}

      {/* //////////////////////////////////////////////////// teacher*/}
      <form
        id="signupContinueTeacher"
        onSubmit={handleTeacherSignup}
        style={{ display: "none" }}
      >
        <label>
          نام
          <br />
          <input
            type="text"
            value={name}
            onChange={handleName}
            maxLength="20"
            size="40"
            required
          ></input>
        </label>
        <label>
          نام خانوادگی
          <br />
          <input
            type="text"
            value={lastName}
            onChange={handleLastName}
            maxLength="20"
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
            placeholder="ده رقم کد ملی را بدون خط فاصله وارد کنید"
            size="40"
            required
            style={{ width: "100" }}
            onWheelCapture={(e) => {
              e.target.blur();
            }}
          ></input>
        </label>
        <label>
          جنسیت
          <br />
          <select value={gender} onChange={handleGender} required>
            <option value={0}>مرد</option>
            <option value={1}>زن</option>
          </select>
        </label>
        <label>
          شماره پرسنلی
          <br />
          <input
            type="number"
            value={teacherId}
            onChange={handleTeacherId}
            minLength="8"
            maxLength="8"
            size="40"
            required
            onWheelCapture={(e) => {
              e.target.blur();
            }}
          ></input>
        </label>
        <input disabled={sending} type="submit" className="loginButtons" value="ثبت"></input>
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
            placeholder="کد اقتصادی ده رقمی را وارد کنید"
            onChange={handleCompanyCode}
            minLength="10"
            maxLength="10"
            size="40"
            required
            style={{ width: "100" }}
            onWheelCapture={(e) => {
              e.target.blur();
            }}
          ></input>
        </label>

        <input disabled={sending} type="submit" className="loginButtons" value="ثبت"></input>
      </form>
      {/* //////////////////////////////////////////////////// finish company*/}
      <NotificationContainer />
    </div>
  );
};
export default SignLogin;
