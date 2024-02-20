import { LeftOutlined } from "@ant-design/icons";
import "../stylesheets/BackButtonDiv.css";
import React from "react";

function BackButtonDiv() {
  return (
    <div className="quadrant-back">
      <a href="/" className="quadrant-back-btn">
        <LeftOutlined className="back-btn-arrow" />
        <p>Back</p>
      </a>
    </div>
  );
}

export default BackButtonDiv;
