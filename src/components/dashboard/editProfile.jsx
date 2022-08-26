import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { useState, useEffect } from "react";

axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("token");

function EditProfile(props) {
  const [name, setName] = useState(props.user.username);
  const [firstName, setFirstName] = useState(props.user.firstname);
  const [lastName, setLastName] = useState(props.user.lastname);
  const [bio, setBio] = useState(props.user.bio);
  const [gender, setGender] = useState(props.user.gender);
  const [personnel, setPersonnel] = useState(props.user.personnelID);
  const [studentNumber, setStudentNumber] = useState(props.user.studentID);
  const [national, setNational] = useState(props.user.nationalIdNum);
  const [birth, setBirth] = useState("");
  const [companyID, setCompanyID] = useState(props.user.companyIDnumber);
  const [companyName, setCompanyName] = useState(props.user.companyName);
  const [faculty, setFaculty] = useState(props.user.facultyId);

  const [facultyMenu, setFacultyMenu] = useState();

  const [fieldsMenu, setFieldsMenu] = useState();
  const [area, setArea] = useState(1);
  const [secondArea, setSecondArea] = useState(1);
  const [thirdArea, setThirdArea] = useState(1);

  const [contact1, setContact1] = useState();
  const [contact1Number, setContact1Number] = useState();
  const [contact2, setContact2] = useState();
  const [contact2Number, setContact2Number] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://rezaklhor-001-site1.etempurl.com/User/GetAllFaculties")
      .then(function (response) {
        setFacultyMenu(response.data);
      })
      .catch(function () {
        NotificationManager.warning("بارگیری دانشکده‌ها با خطا مواجه شد");
      });
    axios
      .get("http://rezaklhor-001-site1.etempurl.com/WorkField/GetAllWorkFields")
      .then(function (response) {
        setFieldsMenu(response.data);
      })
      .catch(function () {
        NotificationManager.warning("بارگیری حوزه‌های پژوهشی با خطا مواجه شد");
      });
  }, []);

  const handleUpdate = (event) => {
    event.preventDefault();
    const data = {
      username: name,
      avatar: "",
      firstname: firstName ? firstName : "",
      lastname: lastName ? lastName : "",
      bio: bio ? bio : "",
      gender: gender === 0 || gender === 1 ? gender : "",
      personnelID: personnel ? personnel : "",
      studentID: studentNumber ? studentNumber : "",
      nationalIdNum: national ? national : "",
      birthDate: "",
      companyIDnumber: companyID ? companyID : "",
      companyName: companyName ? companyName : "",
      facultyId: faculty ? faculty : "",
    };
    // console.log(data)
    axios
      .put(
        `http://rezaklhor-001-site1.etempurl.com/User/${props.user.id}`,
        data
      )
      .then(() => {
        NotificationManager.success("ویرایش انجام شد");
        navigate("/dashboard");
      })
      .catch(() => {
        return NotificationManager.warning("ویرایش با خطا مواجه شد");
      });
  };
  const handleUpdateWorkfield = (event) => {
    event.preventDefault();
    if (area != 1) {
      axios
        .post(
          `http://rezaklhor-001-site1.etempurl.com/WorkField/AddWorkFieldToPerson?id=${area}`
        )
        .then(() => {
          NotificationManager.success("ویرایش انجام شد");
          navigate("/dashboard");
        })
        .catch(() => {
          return NotificationManager.warning("ویرایش با خطا مواجه شد");
        });
    } else return;
    if (secondArea != 1) {
      axios
        .post(
          `http://rezaklhor-001-site1.etempurl.com/WorkField/AddWorkFieldToPerson?id=${secondArea}`
        )
        .then(() => {
          NotificationManager.success("ویرایش انجام شد");
          navigate("/dashboard");
        })
        .catch(() => {
          return NotificationManager.warning("ویرایش با خطا مواجه شد");
        });
    } else return;
    if (thirdArea != 1) {
      axios
        .post(
          `http://rezaklhor-001-site1.etempurl.com/WorkField/AddWorkFieldToPerson?id=${thirdArea}`
        )
        .then(() => {
          NotificationManager.success("ویرایش انجام شد");
          navigate("/dashboard");
        })
        .catch(() => {
          return NotificationManager.warning("ویرایش با خطا مواجه شد");
        });
    } else return;
  };
  const handleAddContactInfo = (event) => {
    event.preventDefault();
    if (contact1 && contact1Number) {
      const info = {
        name: contact1,
        contactNumber: contact1Number,
        contactLink: "",
        entityState: 0,
      };
      axios
        .post(
          `http://rezaklhor-001-site1.etempurl.com/User/CreateContactInfo`,
          info
        )
        .catch(() => {
          return NotificationManager.warning("ویرایش با خطا مواجه شد");
        });
    }
    if (contact2 && contact2Number) {
      const info = {
        name: contact2,
        contactNumber: contact2Number,
        contactLink: "",
        entityState: 0,
      };
      axios
        .post(
          `http://rezaklhor-001-site1.etempurl.com/User/CreateContactInfo`,
          info
        )
        .then(() => {
          NotificationManager.success("ویرایش انجام شد");
        })
        .catch(() => {
          return NotificationManager.warning("ویرایش با خطا مواجه شد");
        });
    }
  };
  return (
    <>
      <div className="container justify-content-center createResearch">
        <form onSubmit={handleUpdate}>
          <label>
            <span style={{ marginLeft: "40px" }}> نام کاربری</span>{" "}
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            ></input>
          </label>

          <label>
            بیو
            <br />
            <textarea
              type="text"
              value={bio}
              onChange={(event) => setBio(event.target.value)}
              style={{ width: "100%" }}
              rows={3}
            ></textarea>
          </label>
          <label>
            <span style={{ marginLeft: "51px" }}>دانشکده</span>{" "}
            <select
              value={faculty}
              onChange={(event) => setFaculty(event.target.value)}
              style={{ display: "inline", width: "120px" }}
            >
              <option value={""}> </option>
              {facultyMenu &&
                facultyMenu.map((option, index) => (
                  <option key={index} value={option.id}>
                    {option.name}
                  </option>
                ))}
            </select>
          </label>

          {props.user.role !== "Company" && (
            <>
              <label>
                <span style={{ marginLeft: "81px" }}>نام</span>{" "}
                <input
                  type="text"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  required
                ></input>
              </label>

              <label>
                <span style={{ marginLeft: "28px" }}> نام خانوادگی</span>{" "}
                <input
                  type="text"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                  required
                ></input>
              </label>

              <label>
                <span style={{ marginLeft: "53px" }}>جنسیت</span>{" "}
                <select
                  value={gender}
                  onChange={(event) => setGender(event.target.value)}
                  style={{ width: "80px" }}
                >
                  <option value={0}>آقا</option>
                  <option value={1}>خانم</option>
                </select>
              </label>
              <label>
                <span style={{ marginLeft: "62px" }}>کد ملی</span>
                <input
                  type="number"
                  value={national}
                  onChange={(event) => setNational(event.target.value)}
                  required
                  onWheelCapture={(e) => {
                    e.target.blur();
                  }}
                ></input>
              </label>
            </>
          )}

          {props.user.role === "Student" && (
            <label>
              <span style={{ marginLeft: "4px" }}> شمارۀ دانشجویی</span>{" "}
              <input
                type="number"
                value={studentNumber}
                onChange={(event) => setStudentNumber(event.target.value)}
                required
                onWheelCapture={(e) => {
                  e.target.blur();
                }}
              ></input>
            </label>
          )}
          {props.user.role === "Professor" && (
            <label>
              <span style={{ marginLeft: "6px" }}> شمارۀ پرسنلی</span>{" "}
              <input
                type="number"
                value={personnel}
                onChange={(event) => setPersonnel(event.target.value)}
                required
                onWheelCapture={(e) => {
                  e.target.blur();
                }}
              ></input>
            </label>
          )}
          {props.user.role === "Company" && (
            <>
              <label>
                <span style={{ marginLeft: "12px" }}>کد اقتصادی</span>
                <input
                  type="text"
                  value={companyID}
                  onChange={(event) => setCompanyID(event.target.value)}
                  required
                  onWheelCapture={(e) => {
                    e.target.blur();
                  }}
                ></input>
              </label>
              <label>
                <span style={{ marginLeft: "45px" }}>نام شرکت</span>{" "}
                <input
                  type="text"
                  value={companyName}
                  onChange={(event) => setCompanyName(event.target.value)}
                ></input>
              </label>
            </>
          )}

          <input
            type="submit"
            className="loginButtons"
            value="ویرایش"
            style={{
              width: "50%",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          ></input>
        </form>
      </div>
      <div className="container justify-content-center createResearch">
        <form onSubmit={handleUpdateWorkfield}>
          <label>
            <span>حوزۀ پژوهشی</span>{" "}
            <select
              value={area}
              onChange={(event) => {
                setArea(event.target.value);
                if (event.target.value == 1) {
                  setSecondArea(1);
                  setThirdArea(1);
                }
              }}
              style={{ display: "inline", width: "120px" }}
            >
              <option value={1}>---</option>
              {fieldsMenu &&
                fieldsMenu.map((option, index) => (
                  <option key={index} value={option.id}>
                    {option.name}
                  </option>
                ))}
            </select>
          </label>
          <label>
            <span style={{ paddingLeft: "4px" }}>حوزۀ پژوهشی دوم</span>{" "}
            <select
              disabled={area == 1 ? true : false}
              value={secondArea}
              onChange={(event) => {
                setSecondArea(event.target.value);
                if (event.target.value == 1) {
                  setThirdArea(1);
                }
              }}
              style={{ display: "inline", width: "120px" }}
            >
              <option value={1}>---</option>
              {fieldsMenu &&
                fieldsMenu.map((option, index) => (
                  <option key={index} value={option.id}>
                    {option.name}
                  </option>
                ))}
            </select>
          </label>
          <label>
            <span>حوزۀ پژوهشی سوم</span>{" "}
            <select
              disabled={secondArea == 1 ? true : false}
              value={thirdArea}
              onChange={(event) => setThirdArea(event.target.value)}
              style={{ display: "inline", width: "120px" }}
            >
              <option value={1}>---</option>
              {fieldsMenu &&
                fieldsMenu.map((option, index) => (
                  <option key={index} value={option.id}>
                    {option.name}
                  </option>
                ))}
            </select>
          </label>
          <input
            type="submit"
            className="loginButtons"
            value="ویرایش"
            style={{
              width: "50%",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          ></input>
        </form>
      </div>
      <div className="container justify-content-center createResearch">
        <form onSubmit={handleAddContactInfo}>
          <label>
            <input
              type="text"
              placeholder="نام راه ارتباطی اول را وارد کنید. مثلا 'ایمیل'"
              style={{ width: "100%" }}
              value={contact1}
              onChange={(event) => setContact1(event.target.value)}
            ></input>
          </label>
          <label>
            <input
              type="text"
              disabled={!contact1}
              placeholder="راه ارتباطی اول را وارد کنید. مثلا 'ex@gmail.com'"
              style={{ width: "100%" }}
              value={contact1Number}
              onChange={(event) => setContact1Number(event.target.value)}
            ></input>
          </label>
          <hr />
          <label>
            <input
              type="text"
              disabled={!contact1Number}
              placeholder="نام راه ارتباطی دوم را وارد کنید. مثلا 'موبایل'"
              style={{ width: "100%" }}
              value={contact2}
              onChange={(event) => setContact2(event.target.value)}
            ></input>
          </label>
          <label>
            <input
              type="text"
              disabled={!contact2}
              placeholder="راه ارتباطی اول را وارد کنید. مثلا '09111111111'"
              style={{ width: "100%" }}
              value={contact2Number}
              onChange={(event) => setContact2Number(event.target.value)}
            ></input>
          </label>
          <input
            type="submit"
            className="loginButtons"
            value="ویرایش"
            style={{
              width: "50%",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          ></input>
        </form>
      </div>
      <NotificationContainer />
    </>
  );
}

export default EditProfile;
