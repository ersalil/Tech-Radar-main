import React, { Fragment } from "react";
import QuadrantBanner from "../../common/components/QuadrantBanner";
import InternalNavbar from "../../common/components/InternalNavbar";
import BackButtonDiv from "../../common/components/BackButtonDiv";
import Quard from "../../common/components/Quard";
import InternalDrawer from "../../common/components/InternalDrawer";
function Tools() {
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
      <QuadrantBanner title="Tools" url="tools" />
      <InternalNavbar />
      <BackButtonDiv />
      <Quard title="Tools" url="tools" q="q2" />
    </Fragment>
  );
}

export default Tools;
