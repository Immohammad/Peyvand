import React from "react";
import { useState } from "react";
import Apply from "./apply";

function Cooperation(props) {
  const [reqToggle, setReqToggle] = useState("none");

  return (
    <div className="container justify-content-center" id="cooperation">
      <p style={{ fontWeight: "bold", margin: 0 }}>{props.need.tittle}</p>
      <p style={{ margin: 0 }}>{props.need.text} </p>
      <button
        disabled={!localStorage.getItem("token")}
        style={{
          fontSize: "15px",
          margin: 0,
          backgroundColor: "white",
          borderRadius: "7px",
        }}
        onClick={() => setReqToggle("block")}
      >
        مشارکت :
      </button>
      <div style={{ display: (localStorage.getItem("token")) ? reqToggle : "none" }}>
        <Apply need={props.need} closer={setReqToggle} />
      </div>
    </div>
  );
}

export default Cooperation;
