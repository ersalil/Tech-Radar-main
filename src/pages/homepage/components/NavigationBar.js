import React, { useState, useEffect, Fragment } from "react";
import "../stylesheets/NavigationBar.css";
import HomepageDrawer from "./HomepageDrawer";

function NavigationBar() {
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
            Download
          </a>
          <a href="/" className="navbar-link">
            Search
          </a>
          <a href="/" className="navbar-link">
            FAQs & More
          </a>
          <a href="/" className="navbar-link">
            Archive
          </a>
        </div>
        <div className="mobile-navbar">
          <a href="/">
            <img src="/uprevollogotext.png" height={30} alt="Sentioza" />
          </a>
          <HomepageDrawer />
        </div>
      </div>
      <div
        className="navbar-placeholder"
        style={{ height: placeholderHeight }}
      ></div>
    </Fragment>
  );
}

export default NavigationBar;
