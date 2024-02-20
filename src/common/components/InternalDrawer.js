import React, { Fragment, useState } from "react";
import { Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";

function InternalDrawer() {
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
            <a href="/">Search</a>
            <a href="/techniques">Techniques</a>
            <a href="/tools">Tools</a>
            <a href="/platforms">Platforms</a>
            <a href="/languagesandframeworks">Languages And Frameworks</a>
          </div>
        </div>
      </Drawer>
    </Fragment>
  );
}

export default InternalDrawer;
