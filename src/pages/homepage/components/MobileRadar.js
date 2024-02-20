import React from "react";
import "../stylesheets/MobileRadar.css";

function MobileRadar() {
  return (
    <div className="mobile-radar-main">
      <div className="mobile-radar-grid">
        <a href="/techniques" className="mr-grid-item">
          <div style={{ backgroundImage: "url(/images/radar/techniques.svg)" }}>
            Techniques
          </div>
        </a>
        <a href="/tools" className="mr-grid-item">
          <div style={{ backgroundImage: "url(/images/radar/tools.svg)" }}>
            Tools
          </div>
        </a>
        <a href="/platforms" className="mr-grid-item">
          <div style={{ backgroundImage: "url(/images/radar/platforms.svg)" }}>
            Platforms
          </div>
        </a>
        <a href="/languagesandframeworks" className="mr-grid-item">
          <div
            style={{
              backgroundImage: "url(/images/radar/languagesandframeworks.svg)",
            }}
          >
            Languages And Frameworks
          </div>
        </a>
      </div>
    </div>
  );
}

export default MobileRadar;
