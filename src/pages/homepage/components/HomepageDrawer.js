import React, { Fragment, useState } from "react";
import { Drawer } from "antd";
import "../stylesheets/HomepageDrawer.css";
import { MenuOutlined } from "@ant-design/icons";

function HomepageDrawer() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const currentYear = new Date().getFullYear();

  return (
    <Fragment>
      <div onClick={showDrawer}>
        <MenuOutlined className="drawer-icon" />
      </div>
      <Drawer
        placement="right"
        onClose={onClose}
        open={open}
        footer={
          <div className="footer">
            © {currentYear} Sentioza LLC. All rights reserved.
          </div>
        }
        footerStyle={{ padding: 0 }}
      >
        <div className="mobile-drawer">
          <img
            height={150}
            className="drawer-logo"
            src="/sentiozalogo.png"
            alt="Sentioza"
          />
          <div className="drawer-links">
            <a href="/">Download</a>
            <a href="/">Search</a>
            <a href="/">FAQs and More</a>
            <a href="/">Archive</a>
          </div>
        </div>
      </Drawer>
    </Fragment>
  );
}

export default HomepageDrawer;
