import React, { useState } from "react";
import "antd/dist/antd.css";
import "./sec1.css";
import {
  Layout,
  Menu,
  Row,
  Col,
  Carousel,
  Modal,
  Button,
  Form,
  Input,
} from "antd";

const sec1 = (props) => {
  return (
    <>
      <section
        className="cryptocurrencies-sec"
        style={{ background: props.sec1bg }}
      >
        <div className="container">
          <Row className="cryptocurrencies-content">
            <Col sm={24} md={20} lg={12} xl={12}>
              <img src={props.img} width="100%" className="lg-img" />
            </Col>
            <Col sm={24} md={20} lg={12} xl={12}>
              <div className="cryptocurrencies-text">
                <h2>{props.sec1Heading}</h2>
                <p>{props.sec1P1}</p>
              </div>

              <img src={props.img} width="100%" className="sm-img" />

              <div className="cryptocurrencies-text-content">
                <h2>{props.sec1H2}</h2>

                <p>{props.sec1P2}</p>
                <p>{props.sec1P3}</p>
              </div>

              <button
                className="cryptocurrencies-btn"
                style={{ background: props.sec1Btnbg, color: props.sec1color }}
              >
                {props.sec1Btn}
              </button>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default sec1;
