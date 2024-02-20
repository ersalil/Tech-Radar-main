import React, { useEffect, useState, createRef } from "react";
import { Collapse, Tooltip } from "antd";
import { QuestionCircleFilled } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";
import "../stylesheets/Collapse.css";

const { Panel } = Collapse;

function MyAccordion({
  header,
  blips,
  setHoveredBlip,
  activeKey,
  setActiveKey,
}) {
  const panelRefs = blips.map(() => createRef());
  const navigate = useNavigate();
  const location = useLocation();
  const [triggerRender, setTriggerRender] = useState(false);
  const defaultHeaders = ["Adopt", "Trial", "Assess", "Hold"];
  const isValidHeader = defaultHeaders.includes(header);

  const handlePanelChange = (key) => {
    if (activeKey === key) {
      setActiveKey(null);
    } else {
      setActiveKey(key);
      navigate(`${location.pathname}?blip=${key}`);
    }
  };

  useEffect(() => {
    function handleBlipClick() {
      ReactDOM.unstable_batchedUpdates(() => {
        setTriggerRender((prev) => !prev);
      });
    }

    window.addEventListener("blipClicked", handleBlipClick);
    return () => {
      window.removeEventListener("blipClicked", handleBlipClick);
    };
  }, []);

  // Utility function to smoothly scroll the window
  function smoothScrollTo(top) {
    const initialPosition =
      window.scrollY || document.documentElement.scrollTop;
    const distanceToScroll = top - initialPosition;
    let startTime = null;

    function animateScroll(currentTime) {
      if (!startTime) {
        startTime = currentTime;
      }

      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / 300, 1); // Adjust 500 for animation duration

      window.scrollTo(0, initialPosition + progress * distanceToScroll);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    }

    requestAnimationFrame(animateScroll);
  }

  useEffect(() => {
    if (!activeKey) return;

    const blipIndex = blips.findIndex(
      (blip) => blip.number.toString() === activeKey
    );

    const headerElement = panelRefs[blipIndex]?.current;

    if (headerElement) {
      setTimeout(() => {
        const rect = headerElement.getBoundingClientRect();
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        const headerHeight = headerElement.offsetHeight;
        const navHeight = 40;
        const offsetTop = rect.top + scrollTop - headerHeight - navHeight;

        smoothScrollTo(offsetTop);
      }, 300);
    }
  }, [activeKey, triggerRender]); // eslint-disable-line react-hooks/exhaustive-deps

  const tooltipTexts = {
    adopt:
      "Organizations should feel confident in using these technologies for their core applications or processes, as they have shown consistent value and are generally mature and stable.",
    trial:
      "Organizations should consider experimenting with these technologies in specific projects or domains to gauge their effectiveness, while being aware of potential risks or challenges.",
    assess:
      "Organizations should explore these technologies, understand their potential benefits and drawbacks, and keep an eye on their development. Its a stage of early curiosity and analysis, and actual implementation might be limited.",
    hold: "Organizations should be wary of starting new projects or initiatives with these technologies and should consider alternatives. For existing implementations, a strategy for phasing out or transitioning might be considered",
  };

  const getTooltipText = (headerText) =>
    tooltipTexts[headerText.toLowerCase()] || "NA";

  return (
    <div className="accordion-section">
      <h2 className="accordion-header">
        {header}&nbsp;&nbsp;
        <Tooltip
          trigger={"click"}
          placement="top"
          title={getTooltipText(header)}
          zIndex={500}
          
        >
          <QuestionCircleFilled className="info-icon" />
        </Tooltip>
      </h2>
      <Collapse
        ghost
        activeKey={activeKey}
        onChange={handlePanelChange}
        className="custom-collapse"
        accordion
      >
        {isValidHeader &&
          blips.map((blip, index) => (
            <Panel
              data-blip-number={blip.number}
              onMouseEnter={() => setHoveredBlip(blip.name)}
              onMouseLeave={() => setHoveredBlip(null)}
              header={
                <>
                  <div ref={panelRefs[index]}>
                    <span>{blip.number}. </span>
                    <span className="blip-name">{blip.name}</span>
                  </div>
                </>
              }
              key={blip.number}
            >
              {blip.description}
            </Panel>
          ))}
      </Collapse>
    </div>
  );
}

export default MyAccordion;
