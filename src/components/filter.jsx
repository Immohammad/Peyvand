import { useEffect, useState } from "react";
import axios from "axios";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

const Filter = (props) => {
  const [need, setNeed] = useState(2);
  const [area, setArea] = useState([]);
  const [manager, setManager] = useState("");
  const [pstate, setPstate] = useState(2);

  const [fieldsMenu, setFieldsMenu] = useState();

  const handleFilter = () => {
    const userFilter = {
      workFieldsId: area,
      projectState: parseInt(pstate),
      managerRole: manager,
      needState: parseInt(need)
    };
    // console.log(filter);
    axios
        .get("http://rezaklhor-001-site1.etempurl.com/Project/GetProjectsByFilter", userFilter)
        .then(function (response) {
          props.setter(response.data)
        })
        .catch(function (error) {
          return NotificationManager.warning("فیلتر با خطا مواجه شد");
        });
  };

  useEffect(() => {
    axios
      .get("http://rezaklhor-001-site1.etempurl.com/WorkField/GetAllWorkFields")
      .then(function (response) {
        setFieldsMenu(response.data);
      })
      .catch(function () {
        NotificationManager.warning("بارگیری حوزه‌های پژوهشی با خطا مواجه شد");
      });

  }, []);

  return (
    <div style={{ backgroundColor: "white", padding: "10px" }}>
      <h5>فیلتر بر اساس :</h5>

      <div style={{ display: "inline" }}>
        <label style={{ display: "inline", fontWeight: "bold" }}>
          نیاز به همکاری{" "}
          <select
            value={need}
            onChange={(event) => setNeed(event.target.value)}
            style={{ display: "inline", width: "60px" }}
          >
            <option value={2}>همه</option>
            <option value={0}>بله</option>
            <option value={1}>خیر</option>
          </select>
        </label>
      </div>
      <div style={{ display: "inline", paddingRight: "30px" }}>
        <label style={{ display: "inline", fontWeight: "bold" }}>
          حوزۀ پژوهش{" "}
          <select
            value={area}
            onChange={(event) => setArea([event.target.value])}
            size="1"
            style={{ display: "inline", width: "120px" }}
          >
            <option value="">همه</option>
            {fieldsMenu &&
              fieldsMenu.map((option, index) => (
                <option key={index} value={option.id}>
                  {option.name}
                </option>
              ))}
          </select>
        </label>
      </div>
      <div style={{ display: "inline", paddingRight: "30px" }}>
        <label style={{ display: "inline", fontWeight: "bold" }}>
          نقش مدیر{" "}
          <select
            value={manager}
            onChange={(event) => setManager(event.target.value)}
            style={{ display: "inline", width: "70px" }}
          >
            <option value="">همه</option>
            <option value="Professor">استاد</option>
            <option value="Student">دانشجو</option>
            <option value="Company">شرکت</option>
          </select>
        </label>
      </div>
      <div style={{ display: "inline", paddingRight: "30px" }}>
        <label style={{ display: "inline", fontWeight: "bold" }}>
          وضعیت پژوهش{" "}
          <select
            value={pstate}
            onChange={(event) => setPstate(event.target.value)}
            style={{ display: "inline", width: "100px" }}
          >
            <option value={2}>همه</option>
            <option value={1}>پایان‌یافته</option>
            <option value={0}>در حال پیشبرد</option>
          </select>
        </label>
      </div>
      <button onClick={handleFilter} style={{ marginRight: "30px" }}>
        اعمال فیلترها
      </button>
      <NotificationContainer />
    </div>
  );
};
export default Filter;
