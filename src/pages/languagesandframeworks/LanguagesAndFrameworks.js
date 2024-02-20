import React, { Fragment } from "react";
import QuadrantBanner from "../../common/components/QuadrantBanner";
import InternalNavbar from "../../common/components/InternalNavbar";
import BackButtonDiv from "../../common/components/BackButtonDiv";
import Quard from "../../common/components/Quard";
import InternalDrawer from "../../common/components/InternalDrawer";

function LanguagesAndFrameworks() {
  return (
    <Fragment>
      <div className="navbar-mobile-main">
        <div className="navbar-mobile-wrapper">
          <a href="/">
            <img src="/uprevollogotext.png" height={30} alt="Sentioza" />
          </a>
          <InternalDrawer />
        </div>
      </div>
      <QuadrantBanner
        title="Languages & Frameworks"
        url="languagesandframeworks"
      />
      <InternalNavbar />
      <BackButtonDiv />
      <Quard
        title="Languages & Frameworks"
        url="languagesandframeworks"
        q="q4"
      />
    </Fragment>
  );
}

export default LanguagesAndFrameworks;
