import React, { Fragment } from "react";
import "./HomePage.css";
import Banner from "./components/Banner";
import NavigationBar from "./components/NavigationBar";
import Radar from "./components/Radar";
import MobileRadar from "./components/MobileRadar";
import HomepageDrawer from "./components/HomepageDrawer";

function HomePage() {
  return (
    <Fragment>
      <div className="navbar-mobile-main">
        <div className="navbar-mobile-wrapper">
          <a href="/">
            <img src="/uprevollogotext.png" height={30} alt="Sentioza" />
          </a>
          <HomepageDrawer />
        </div>
      </div>
      <Banner />
      <NavigationBar />
      <Radar />
      <MobileRadar />
    </Fragment>
  );
}

export default HomePage;
