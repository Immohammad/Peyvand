import { useEffect, useState } from "react";
import axios from "axios";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

const Filter = (props) => {
  const [need, setNeed] = useState(0);
  const [area, setArea] = useState("");

  const filterByNeed = (filteredData) => {
    // Avoid filter for empty string
    if (need == 0) {
      return filteredData;
    } else if (need == 1) {
      axios
        .get(
          `http://rezaklhor-001-site1.etempurl.com/project/GetProjectsByProjectState?projectState=پایان یافته`
        )
        .then(function (response) {
          return response;
        })
        .catch(function () {
          NotificationManager.warning("با خطا مواجه شد");
        });
    }
  };

  const filterByArea = (filteredData) => {
    // Avoid filter for null value
    if (area == "") {
      return filteredData;
    }
    const filteredResearchs = filteredData.filter(
      (research) => research.area === area
    );
    return filteredResearchs;
  };

  useEffect(() => {
    var filteredData = filterByNeed(props.data);
    var filteredData = filterByArea(filteredData);
    props.setter(filteredData);
  }, [need, area]);

  return (
    <div style={{ backgroundColor: "white", padding: "10px" }}>
      <h5>فیلتر بر اساس :</h5>
      <div
        style={{ display: "inline" }}
        onChange={(event) => setNeed(event.target.value)}
      >
        <p style={{ display: "inline", fontWeight: "bold" }}>نیاز به همکاری</p> {" "}
        <input
          type="radio"
          id="all"
          name="needFilter"
          value={0}
          defaultChecked
        />
        <label for="all" style={{ display: "inline" }}>
          همه
        </label>
        <input type="radio" id="yes" name="needFilter" value={1} />
        <label for="yes" style={{ display: "inline" }}>
          بله
        </label>
        <input type="radio" id="no" name="needFilter" value={2} />
        <label for="no" style={{ display: "inline" }}>
          خیر
        </label>
      </div>
      <div style={{ display: "inline", paddingRight: "30px" }}>
        <label style={{ display: "inline", fontWeight: "bold" }}>
          حوزۀ پژوهش{" "}
          <select
            value={area}
            onChange={(event) => setArea(event.target.value)}
            required
            style={{ display: "inline", width: "130px" }}
          >
            <option value="">همه</option>
            <option value="هوش مصنوعی">هوش</option>
            <option value="سیاست">سیاست</option>
            <option value="مدیریت">مدیریت</option>
          </select>
        </label>
      </div>
      <NotificationContainer />
    </div>
  );
};
export default Filter;
