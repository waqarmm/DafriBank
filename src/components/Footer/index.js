import React, { useState } from "react";
import "./footer.css";
import { Row, Col } from "antd";
import img1 from "../../assects/footer/facebook (1).svg";
import img3 from "../../assects/footer/linkedin.svg";
import img2 from "../../assects/footer/twitter.svg";
import "antd/dist/antd.css";
import { Select } from "antd";

const { Option } = Select;

const Footer = () => {
  function handleChange(value) {
    console.log(value);
  }
  return (
    <>
      <div className="mainFooter">
        <div className="container">
          <Row>
            <Col sm={24} md={24} lg={6} xl={6} className="SignUp">
              <h3>
                Take your crypto <br /> to the next level <br /> with Kraken.
              </h3>
              <div className="footer-btns">
                <button className="btn1">Sign up</button>

                <button className="btn2">Sign in</button>
              </div>
            </Col>
            <Col xs={12} sm={6} md={7} lg={6} xl={6} className="Prices">
              <h3>Features</h3>
              <a>24/7 Support </a>
              <a>Account Management</a>
              <a>API</a>
              <a>Bug Bounty</a>
              <a>Fee Schedule </a>
              <a>Funding Options</a>
              <a>Futures </a>
              <a>Indices </a>
              <a>Liquidity</a>
              <a>Margin Trading</a>
              <a>OTC</a>
              <a>PGP Key </a>
              <a>Proof of Reserves </a>
              <a>Security</a>
              <a>Staking</a>
              <a>Support</a>
              <a>WebSockets </a>
            </Col>
            <Col xs={12} sm={4} md={7} lg={6} xl={6} className="Prices">
              <div className="price-lg">
                <h3>Prices</h3>
                <a>Cryptowatch</a>
                <a>Prices Overview </a>
              </div>
              <h3>Learn</h3>
              <a>Blog </a>
              <a>Crypto Guides</a>
              <a>Videos</a>
              <a>Podcast</a>
              <a>Parachain Slot Auctions</a>
              <a>How to Buy Bitcoin</a>
              <a>How to Buy Ripple</a>
              <a>How to Buy Ethereum</a>
              <a>How to Buy Bitcoin Cash</a>
              <a>How to Buy Litecoin</a>
              <a>How to Buy Cardano</a>
              <a>How to Buy Dogecoin</a>
              <a>How to Buy Monero</a>
              <a>How to Buy Polkadot</a>
            </Col>
            <Col
              xs={12}
              sm={6}
              md={7}
              lg={6}
              xl={6}
              className="Prices price-sm"
            >
              <h3>Prices</h3>
              <a>Cryptowatch</a>
              <a>Prices Overview </a>
            </Col>
            <Col xs={12} sm={6} md={7} lg={6} xl={6} className="Prices">
              <h3>About</h3>

              <a> Why Kraken</a>
              <a>Mobile Apps</a>
              <a>Institutions</a>
              <a>Careers</a>
              <a>Contact</a>
              <a>Press</a>
              <a>Affiliates</a>
              <a>Grants</a>
              <a>Kraken Bank</a>
              <a>Status</a>
            </Col>
          </Row>
          <Row className="mediaPart">
            <hr />
            <Col xs={12} sm={6} md={7} lg={6} xl={6} className="footerLogo">
              <h3>DefriBank</h3>
            </Col>
            <Col xs={12} sm={6} md={7} lg={6} xl={6} className="iconsMain">
              <div className="icons">
                {" "}
                <img src={img1} />
              </div>
              <div className="icons">
                {" "}
                <img src={img2} />
              </div>
              <div className="icons">
                {" "}
                <img src={img3} />
              </div>
            </Col>
            <Col xs={12} sm={6} md={7} lg={6} xl={6} className="language1">
              <div>
                <li>© 2011 - 2021 Payward, Inc.</li>
                <a>Privacy Notice</a>
                <a>Terms of Service</a>
              </div>
              <div>
                <a>Cookies Policy</a>
                <a>Disclosures</a>
              </div>
            </Col>

            <Col xs={11} sm={6} md={7} lg={6} xl={6} className="language2">
              <li>Language</li>
              <div>
                <Select
                  labelInValue
                  defaultValue={{ value: "lucy" }}
                  style={{ width: 120 }}
                  onChange={handleChange}
                >
                  <Option value="jack">English US</Option>
                  <Option value="lucy">English UK</Option>
                </Select>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Footer;
