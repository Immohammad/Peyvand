import React, { useState } from "react";
import ProfileCard from "./profileCard";
import ProfileSidenav from "./profileSidenav";
import axios from 'axios';

function CreateResearch() {
  const [name, setName] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [area, setArea] = useState("");
  const [fullDescription, setFullDescription] = useState("");

  const handleName = (Event) => {
    setName(Event.target.value);
  };
  const handleShortDescription = (Event) => {
    setShortDescription(Event.target.value);
  };
  const handleArea = (Event) => {
    setArea(Event.target.value);
  };
  const handleFullDescription = (Event) => {
    setFullDescription(Event.target.value);
  };

  const handleCreate = (event) => {
    event.preventDefault();
    // axios
    //   .post("http://localhost:8000/projects", {
    //     name: name,
    //     area: area,
    //     shortDescription: shortDescription,
    //     fullDescription: fullDescription,
    //   })
    //   .then((response) => {
    //     if (response.status === 200) {
    //         console.log("لوگو با موفقیت تغییر کرد.");
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    axios.post('http://localhost:8000/projects',{
            name: name,
            area: area,
            shortDescription: shortDescription,
            fullDescription: fullDescription,
          }).then(res => {console.log(res.data)})
  };

  return (
    <>
      <ProfileCard />
      <div style={{ display: "flex" }}>
        <ProfileSidenav />

        <div className="container justify-content-center" id="createResearch">
          <form onSubmit={handleCreate}>
            <label>
              عنوان پژوهش
              <br />
              <input
                type="text"
                value={name}
                onChange={handleName}
                size="40"
                placeholder="عنوان پژوهش باید یکتا باشد"
                required
              ></input>
            </label>

            <label>
              حوزۀ پژوهش
              <br />
              <input
                type="text"
                value={area}
                onChange={handleArea}
                size="40"
                placeholder="گذرواژه‌ای برای ورود در آینده انتخاب کنید"
                required
              ></input>
            </label>
            <label>
              توضیح کوتاه
              <br />
              <textarea
                type="text"
                value={shortDescription}
                onChange={handleShortDescription}
                style={{ width: "100%" }}
                placeholder="گذرواژه‌ای برای ورود در آینده انتخاب کنید"
                required
              ></textarea>
            </label>
            <label>
              شرح کامل
              <br />
              <textarea
                type="text"
                value={fullDescription}
                onChange={handleFullDescription}
                style={{ width: "100%" }}
                placeholder="نام کاربری یکتایی وارد کنید"
                rows={4}
                required
              ></textarea>
            </label>
            <input
              type="submit"
              className="loginButtons"
              value="افزودن"
              style={{ width: "50%" }}
            ></input>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateResearch;
