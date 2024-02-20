import React from "react";
import "../stylesheets/Banner.css";

function Banner() {
  return (
    <div className="homepage-banner">
      <a href="/" className="banner-logo-link">
        <img className="banner-logo" src="/uprevollogo.png" alt="Sentioza" />
      </a>
      <p>Volume 1</p>
      <h1>SRE | Technology Radar</h1>
      <p>A Guide to Our Cutting-Edge Tech Stack</p>
    </div>
  );
}

export default Banner;
