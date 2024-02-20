import React, { Fragment } from "react";
import QuadrantBanner from "../../common/components/QuadrantBanner";
import InternalNavbar from "../../common/components/InternalNavbar";
import BackButtonDiv from "../../common/components/BackButtonDiv";
import Quard from "../../common/components/Quard";
import InternalDrawer from "../../common/components/InternalDrawer";

function Platforms() {
  return (
    <Fragment>
      <div className="navbar-mobile-main">
        <div className="navbar-mobile-wrapper">
          <a href="/">
            <img src="/sentiozalogotext.png" height={30} alt="Sentioza" />
          </a>
          <InternalDrawer />
        </div>
      </div>
      <QuadrantBanner title="Platforms" url="platforms" />
      <InternalNavbar />
      <BackButtonDiv />
      <Quard title="Platforms" url="platforms" q="q3" />
    </Fragment>
  );
}

export default Platforms;
