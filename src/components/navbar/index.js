import React, { useState } from "react";
import "./navbar.css";
import Styles from "./Styles.js";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";

const { Header, Content, Footer } = Layout;

const Navbar = () => {
  const [drop, setDrop] = useState("none");
  const [learndrop, setLearnDrop] = useState("none");

  const featuresStyle = {
    display: drop,
  };

  const learnStyle = {
    display: learndrop,
  };

  const featureDrop = () => {
    setDrop("block");
  };
  const learnDrop = () => {
    setLearnDrop("block");
  };

  return (
    <>
      <div className="mainContainer">
        <div className="Navbar">
          <div className="mainbar">
            <div className="Navitems">
              <div className="navLOgo">
                <h3>DefriBank</h3>
              </div>
              <div className="navContant">
                <Menu
                  theme="dark"
                  mode="horizontal"
                  defaultSelectedKeys={["1"]}
                >
                  <Menu.Item
                    className="features"
                    onMouseOver={featureDrop}
                    onMouseOut={() => setDrop("none")}
                  >
                    <a>Features</a>
                  </Menu.Item>
                  <Menu.Item>
                    <a>Prices</a>
                  </Menu.Item>
                  <Menu.Item
                    onMouseEnter={learnDrop}
                    onMouseOut={() => setLearnDrop("none")}
                  >
                    <a>Learn</a>
                  </Menu.Item>
                  <Menu.Item>
                    <a>Support</a>
                  </Menu.Item>
                  <Menu.Item>
                    <a>Futures</a>
                  </Menu.Item>
                  <Menu.Item>
                    <a>institutions</a>
                  </Menu.Item>
                </Menu>
              </div>
            </div>
            <div className="navButton">
              <div className="btns">
                <button className="btn1">Sign in</button>
                <button className="btn2">Creat Account</button>
              </div>
            </div>
          </div>
          <div className="features-drop" style={featuresStyle}>
            <div className="nav-container">
              <div className="dropdown1">
                <a>Security</a>
                <a>Fee Structure</a>
                <a>Funding Options</a>
                <a>Staking</a>
                <a>24/7 Support</a>
                <a>Liquidity</a>
              </div>
              <div className="dropdown2">
                <a>Margin Trading</a>
                <a>Indices</a>
                <a>Futures</a>
                <a>OTC</a>
                <a>Account Management</a>
                <a>Cryptowatch</a>
              </div>
            </div>
          </div>
          <div className="learn-drop" style={learnStyle}>
            <div className="container2">
              <div className="dropdownleran">
                <a>Crypto Guides</a>
                <a>Videos</a>
                <a>Podcast</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
