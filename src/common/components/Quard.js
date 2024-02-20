import React, { useState, useEffect } from "react";
import "../stylesheets/Quard.css";
import Blip from "../../pages/homepage/components/Blip";
import MyAccordion from "./Collapse";
import { useLocation } from "react-router-dom";
import Rings from "./Rings";
import BlipData from "../../content/BlipData.json";

function Quard(props) {
  const [hoveredQuadrant, setHoveredQuadrant] = useState(null);
  const [hoveredBlip, setHoveredBlip] = useState(null);

  const [blips, setBlips] = useState(BlipData);

  const quadrantConfig = {
    q1: {
      ringType: "left",
      order: "after",
    },
    q2: {
      ringType: "right",
      order: "after",
    },
    q3: {
      ringType: "left",
      order: "before",
    },
    q4: {
      ringType: "right",
      order: "before",
    },
  };

  useEffect(() => {
    const filteredBlips = blips.filter((blip) => blip.quadrant === props.q);
    const updatedBlipsCordinate = filteredBlips.map((blip) => {
      let xCordinate = blip.x;
      let yCordinate = blip.y;
      if (props.q === "q3") {
        yCordinate = blip.y - 520;
      } else if (props.q === "q2") {
        xCordinate = blip.x - 540;
      } else if (props.q === "q4") {
        xCordinate = blip.x - 550;
        yCordinate = blip.y - 550;
      }

      return { ...blip, x: xCordinate, y: yCordinate };
    });
    setBlips(updatedBlipsCordinate);
  }, [props.q]); // eslint-disable-line react-hooks/exhaustive-deps

  const pageColors = {
    techniques: "#47A1AD",
    tools: "#6B9E78",
    platforms: "#CC850A",
    languagesandframeworks: "#F2617A",
  };

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const blipNumber = queryParams.get("blip");

  const [activeKey, setActiveKey] = useState(blipNumber);

  useEffect(() => {
    setActiveKey(blipNumber);
  }, [blipNumber]);
  const allRings = ["Adopt", "Trial", "Assess", "Hold"];
  return (
    <div className="custom-ui-container">
      <div className="custom-ui-accordion">
        <h2
          className="techniques-header"
          style={{ color: pageColors[props.url] }}
        >
          {props.title}
        </h2>
        {allRings.map((ring) => {
          const filteredBlipsForRing = blips.filter(
            (blip) => blip.ring === ring
          );
          return (
            <MyAccordion
              setHoveredBlip={setHoveredBlip}
              key={ring}
              header={ring}
              blips={filteredBlipsForRing}
              activeKey={activeKey}
              setActiveKey={setActiveKey}
            />
          );
        })}
      </div>

      <div className="custom-ui-quadrant">
        <div
          className={`internal-radar-container quard ${
            hoveredQuadrant ? "hovered" : ""
          } ${hoveredBlip ? "blip-hovered" : ""}`}
        >
          <div className="radar">
            {quadrantConfig[props.q].order === "before" && (
              <div className="homepage-radar-rings">
                <Rings
                  hoveredQuadrant={hoveredQuadrant}
                  quadrant={props.q}
                  type={quadrantConfig[props.q].ringType}
                />
              </div>
            )}

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
                hoveredBlipName={hoveredBlip}
                onMouseEnter={() => setHoveredBlip(blip.name)}
                onMouseLeave={() => setHoveredBlip(null)}
                isHomepage={false}
              />
            ))}
            <img
              height={512}
              width={512}
              className={`staticClass ${props.q} ${
                hoveredQuadrant === props.q ? "active" : ""
              }`}
              src="/images/homepage/quadrant.svg"
              alt=""
              onMouseEnter={() => setHoveredQuadrant(props.q)}
              onMouseLeave={() => setHoveredQuadrant(null)}
            />

            {quadrantConfig[props.q].order === "after" && (
              <div className="homepage-radar-rings">
                <Rings
                  hoveredQuadrant={hoveredQuadrant}
                  type={quadrantConfig[props.q].ringType}
                />
              </div>
            )}
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
        </div>
      </div>
    </div>
  );
}

export default Quard;
