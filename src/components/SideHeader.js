import React, { useState, useContext } from "react";
import { Layout, Drawer, Row, Col, Menu } from "antd";
import menuWhite from "../assets/icons/menu.png";
import logo from "../assets/Koompi-Black.png";
import data from "../data/sidebar.json";
import { ThemeContext } from "../contexts/ThemeContext";

import { Link } from "react-router-dom";
import { SidebarContext } from "../contexts/SidebarContext";

const routes = [
  { name: "Explore", route: "/" },
  { name: "Blocks", route: "/blocks" },
  { name: "Account", route: "/accounts" },
  { name: "Transfers", route: "/transfers" },
  { name: "Extrinsics", route: "/extrinsics" },
  { name: "Events", route: "/events" },
];

function SideHeader() {
  //   const [visible, setVisible] = useState(false);
  const { toggled, setToggled } = useContext(SidebarContext);

  const showDrawer = () => {
    setToggled(true);
  };
  const onClose = () => {
    setToggled(false);
  };
  return (
    <div className="">
      <div className="top-menu">
        <Drawer
          width="200"
          placement="left"
          closable={false}
          onClose={onClose}
          visible={toggled}
          bodyStyle={{
            background: "white",
          }}
        >
          <div style={{ padding: "20px" }}>
            <img src={logo} alt="koompi-logo" width="80%" />
          </div>
          <Row
            className="header-container"
            justify="space-between"
            align="middle"
          >
            <Col span={24}>
              <Menu
                theme="dark"
                mode="inline"
                items={data.main_list.map((x) => {
                  return {
                    key: x.id,
                    label: x.disp_name,
                    icon: (
                      <Link
                        onClick={() => {
                          localStorage.setItem("category", x.disp_name);
                          onClose();
                        }}
                        to={
                          !x.card_link
                            ? `/resource/category/${x.disp_name}`
                            : x.card_link
                        }
                      >
                        <img src={x.img_src} width="20" height="20" />
                      </Link>
                    ),
                  };
                })}
              />
              {/* <div className="spacing"></div>
              <Menu
                theme="dark"
                mode="inline"
                items={data.secondary_list.map((x) => {
                  return {
                    key: x.id,
                    label: x.disp_name,
                    icon: <img src={x.img_src} width="20" height="20" />,
                  };
                })}
              /> */}
            </Col>
          </Row>
        </Drawer>
      </div>
    </div>
  );
}

export default SideHeader;
