import React, { useEffect, useState } from "react";
import "../style/report.css";
import avatar from "../images/image-jeremy.png";

function Report({ getValue }) {
  const [value, setValue] = useState("weekly");
  useEffect(() => {
    getValue(value);
  }, [getValue, value]);
  return (
    <div className="container__report">
      <div className="info__report">
        <img src={avatar} alt="" />
        <div>
          <span>Report for</span>
          <h1>Jeremy Robson</h1>
        </div>
      </div>
      <div className="frequency">
        <span onClick={(e) => setValue(e.target.textContent)}>Daily</span>
        <span onClick={(e) => setValue(e.target.textContent)}>Weekly</span>
        <span onClick={(e) => setValue(e.target.textContent)}>Monthly</span>
      </div>
    </div>
  );
}

export default Report;
