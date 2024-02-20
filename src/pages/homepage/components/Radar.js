import React, { useState } from "react";
import "../stylesheets/Radar.css";
import { RightOutlined } from "@ant-design/icons";
import Blip from "./Blip";
import BlipData from "../../../content/BlipData.json";

function Radar() {
  const [hoveredQuadrant, setHoveredQuadrant] = useState(null);
  const [hoveredBlip, setHoveredBlip] = useState(null);
  const [blips] = useState(BlipData);

  return (
    <div
      className={`homepage-radar-container ${
        hoveredQuadrant ? "hovered" : ""
      } ${hoveredBlip ? "blip-hovered" : ""}`}
    >
      <div className="homepage-radar">
        {blips.map((blip) => (
          <Blip
            key={blip.quadrant + blip.x + blip.y + blip.quadrant}
            type={blip.type}
            x={blip.x}
            y={blip.y}
            name={blip.name}
            number={blip.number}
            quadrant={blip.quadrant}
            hoveredQuadrant={hoveredQuadrant}
            onMouseEnter={() => setHoveredBlip(blip.name)}
            onMouseLeave={() => setHoveredBlip(null)}
            isHomepage={true}
          />
        ))}
        <a href="/techniques" className="margin">
          <img
            height={512}
            width={512}
            className={`q1 ${hoveredQuadrant === "q1" ? "active" : ""}`}
            src="/images/homepage/quadrant.svg"
            alt=""
            onMouseEnter={() => setHoveredQuadrant("q1")}
            onMouseLeave={() => setHoveredQuadrant(null)}
          />
          <h3
            className={`quadrant-title-1 ${
              hoveredQuadrant === "q1" ? "active" : ""
            }`}
            onMouseEnter={() => setHoveredQuadrant("q1")}
            onMouseLeave={() => setHoveredQuadrant(null)}
          >
            Techniques <RightOutlined className="category-arrow" />
          </h3>
        </a>
        <a href="/tools">
          <img
            height={512}
            width={512}
            className={`q2 ${hoveredQuadrant === "q2" ? "active" : ""}`}
            src="/images/homepage/quadrant.svg"
            alt=""
            onMouseEnter={() => setHoveredQuadrant("q2")}
            onMouseLeave={() => setHoveredQuadrant(null)}
          />
          <h3
            className={`quadrant-title-2 ${
              hoveredQuadrant === "q2" ? "active" : ""
            }`}
            onMouseEnter={() => setHoveredQuadrant("q2")}
            onMouseLeave={() => setHoveredQuadrant(null)}
          >
            Tools <RightOutlined className="category-arrow" />
          </h3>
        </a>
        <div className="homepage-radar-rings">
          <div
            className={`left-rings ${
              hoveredQuadrant === "q1" || hoveredQuadrant === "q3"
                ? "active"
                : ""
            }`}
          >
            <p className="lrt1">Hold</p>
            <p className="lrt2">Assess</p>
            <p className="lrt3">Trial</p>
            <p className="lrt4">Adopt</p>
          </div>
          <div
            className={`right-rings ${
              hoveredQuadrant === "q2" || hoveredQuadrant === "q4"
                ? "active"
                : ""
            }`}
          >
            <p className="rrt1">Adopt</p>
            <p className="rrt2">Trial</p>
            <p className="rrt3">Assess</p>
            <p className="rrt4">Hold</p>
          </div>
        </div>
        <a href="/platforms" className="margin">
          <img
            height={512}
            width={512}
            className={`q3 ${hoveredQuadrant === "q3" ? "active" : ""}`}
            src="/images/homepage/quadrant.svg"
            alt=""
            onMouseEnter={() => setHoveredQuadrant("q3")}
            onMouseLeave={() => setHoveredQuadrant(null)}
          />
          <h3
            className={`quadrant-title-3 ${
              hoveredQuadrant === "q3" ? "active" : ""
            }`}
            onMouseEnter={() => setHoveredQuadrant("q3")}
            onMouseLeave={() => setHoveredQuadrant(null)}
          >
            Platforms <RightOutlined className="category-arrow" />
          </h3>
        </a>
        <a href="/languagesandframeworks">
          <img
            height={512}
            width={512}
            className={`q4 ${hoveredQuadrant === "q4" ? "active" : ""}`}
            src="/images/homepage/quadrant.svg"
            alt=""
            onMouseEnter={() => setHoveredQuadrant("q4")}
            onMouseLeave={() => setHoveredQuadrant(null)}
          />
          <h3
            className={`quadrant-title-4 ${
              hoveredQuadrant === "q4" ? "active" : ""
            }`}
            onMouseEnter={() => setHoveredQuadrant("q4")}
            onMouseLeave={() => setHoveredQuadrant(null)}
          >
            Languages & Frameworks <RightOutlined className="category-arrow" />
          </h3>
        </a>
      </div>
      <div className="blips-info-container">
        <div className="blip-box">
          <img src="/images/common/blips/new.svg" alt="" />
          <p className="blip-title">New</p>
        </div>
        <div className="blip-box">
          <img src="/images/common/blips/moved.svg" alt="" />
          <p className="blip-title">Moved in/out</p>
        </div>
        <div className="blip-box">
          <img src="/images/common/blips/no-change.svg" alt="" />
          <p className="blip-title">No Change</p>
        </div>
      </div>
      <p className="blips-description">
        Blips can be new to the volume or move between rings from a previous
        volume.
      </p>
    </div>
  );
}

export default Radar;
