import React, { useState, useEffect, Fragment } from "react";
import InternalDrawer from "./InternalDrawer";

function InternalNavbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const placeholderHeight = isSticky ? "50px" : "0";

  return (
    <Fragment>
      <div
        className={` ${
          isSticky ? "homepage-navbar-sticky" : "homepage-navbar"
        }`}
      >
        <div className="navbar-link-container">
          <a href="/" className="navbar-link">
            Search
          </a>
          <a href="/techniques" className="navbar-link">
            Techniques
          </a>
          <a href="/tools" className="navbar-link">
            Tools
          </a>
          <a href="platforms" className="navbar-link">
            Platforms
          </a>
          <a href="/languagesandframeworks" className="navbar-link">
            Languages & Frameworks
          </a>
        </div>
        <div className="mobile-navbar">
          <a href="/">
            <img src="/uprevollogotext.png" height={30} alt="Sentioza" />
          </a>
          <InternalDrawer />
        </div>
      </div>
      <div
        className="navbar-placeholder"
        style={{ height: placeholderHeight }}
      ></div>
    </Fragment>
  );
}

export default InternalNavbar;
