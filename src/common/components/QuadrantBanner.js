import React, { useState, useEffect } from "react";
import "../stylesheets/QuadrantBanner.css";

function QuadrantBanner(props) {
  const backgroundImageUrl = `/images/banners/${props.url}.jpg`;

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="quadrant-banner"
      style={{
        backgroundImage: isMobile
          ? `url(${backgroundImageUrl})`
          : `linear-gradient(90deg, #ffffff00 40%, #ffffff 80%),url(${backgroundImageUrl})`,
      }}
    >
      <a href="/" className="banner-logo-link">
        // <img className="banner-logo" src="/uprevollogo.png" alt="Sentioza" />
      </a>
      <h1>{props.title}</h1>
    </div>
  );
}

export default QuadrantBanner;
