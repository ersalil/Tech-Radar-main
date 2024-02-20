import { Tooltip } from "antd";
import React from "react";
import { Link } from "react-router-dom";

function Blip({
  type,
  x,
  y,
  name,
  number,
  onMouseEnter,
  onMouseLeave,
  quadrant,
  hoveredQuadrant,
  hoveredBlipName,
  isHomepage,
}) {
  const isActiveQuadrant = quadrant === hoveredQuadrant;
  const isActiveBlip = name === hoveredBlipName;

  const quadrantToRoute = {
    q1: "techniques",
    q2: "tools",
    q3: "platforms",
    q4: "languagesandframeworks",
  };

  function handleClick() {
    const panel = document.querySelector(`[data-blip-number="${number}"]`);
    if (panel) {
      panel.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }

  return (
    <Link
      to={`/${quadrantToRoute[quadrant]}?blip=${number}`}
      key={number}
      onClick={handleClick}
    >
      <Tooltip
        title={name}
        getPopupContainer={(trigger) => trigger.parentNode}
        placement="top"
        zIndex={500}
        {...(isHomepage ? {} : { open: isActiveBlip })}
      >
        <div
          className={`blip ${type} ${
            isActiveQuadrant ? "active-quadrant-blip" : ""
          } ${isActiveBlip ? "active-accordion-blip" : ""}`}
          style={{ left: x, top: y }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <img
            src={`/images/common/blips/${quadrant}/${type}.svg`}
            alt={name}
          />
          <span className="blip-number">{number}</span>
        </div>
      </Tooltip>
    </Link>
  );
}

export default Blip;
