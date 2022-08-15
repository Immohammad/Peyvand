import { useEffect, useState } from "react";

const Filter = (props) => {
  const [need, setNeed] = useState(0);
  const [area, setArea] = useState("");

  const filterByNeed = (filteredData) => {
    // Avoid filter for empty string
    if (need==0) {
      return filteredData;
    }

    const filteredResearchs = filteredData.filter(
      (research) => research.need == need
    );
    return filteredResearchs;
  };

  const filterByArea = (filteredData) => {
    // Avoid filter for null value
    if (area=="") {
      return filteredData;
    }
    const filteredResearchs = filteredData.filter(
        (research) => research.area === area
        );
    return filteredResearchs;
  };

  const handleNeedChange = (event) => {
    setNeed(event.target.value);
  };

  const handleAreaChange = (event) => {
    setArea(event.target.value);
  };

  useEffect(() => {
    var filteredData = filterByNeed(props.data);
    var filteredData = filterByArea(filteredData);
    props.setter(filteredData);
  }, [need, area]);

  return (
    <div style={{backgroundColor:"white", paddingBottom:"10px"}}>
      <h5>فیلتر بر اساس :</h5>
      <div style={{ display: "inline" }} onChange={handleNeedChange}>
        <p style={{ display: "inline" }}>نیاز به همکاری</p>
         {" "}
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
        
        <input
          type="radio"
          id="no"
          name="needFilter"
          value={2}
        />
        <label for="no" style={{ display: "inline" }}>
          خیر
        </label>
      </div>
      <div style={{ display: "inline" ,paddingRight: "30px"}}>
      <label style={{ display: "inline" }}>
          حوزۀ پژوهش
          {" "}
          <select
            value={area}
            onChange={handleAreaChange}
            required
            style={{ display: "inline" , width:"130px"}}
          >
            <option value="">همه</option>
            <option value="هوش مصنوعی">هوش</option>
            <option value="سیاست">سیاست</option>
            <option value="مدیریت">مدیریت</option>
          </select>
        </label>
      </div>
    </div>
  );
};
export default Filter;
