import React, { useState } from "react";
import "./header.css";
import { Row, Col } from "antd";
import mobImg from "../../assects/header/mob.PNG";
import Apple from "../../assects/header/apple-logo.svg";
import Play from "../../assects/header/play-store.svg";
import "antd/dist/antd.css";

const Header = () => {
  return (
    <>
      <div className="heroSection">
        <div className="container">
          <Row className="heroContent">
            <Col>
              <div className="headding">
                <h3>
                  Buy Bitcoin <br /> & Crypto
                </h3>
                <p>
                  Sign up today and{" "}
                  <span>
                    buy 50+ <br />
                    cryptocurrencies
                  </span>{" "}
                  in minutes. <br /> Get started with as little as{" "}
                  <span>$10</span>.
                </p>
                <button>Get Started</button>
              </div>
            </Col>
            <Col>
              <div>
                <img src={mobImg} />
                <div className="btnMain">
                  <div className="button">
                    <a>
                      <img src={Apple} /> App Store
                    </a>
                  </div>
                  <div className="button">
                    <a>
                      <img src={Play} /> Google Play
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Header;
