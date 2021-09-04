import React, { useState } from "react";
import "antd/dist/antd.css";
import Styles from "./style.js";
import "./Home.css";
import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";
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
import { ArrowRightOutlined, BarsOutlined } from "@ant-design/icons";
import Card from "../../components/exchangeCard/index.js";
import Sec1 from "../../components/sec-1/index.js";
import Sec2 from "../../components/sec-2/index.js";

import Cryptocurrencies from "../../assects/cryptocurrencies.JPG";
import everything from "../../assects/everything.JPG";
import trad from "../../assects/trad.JPG";
import help from "../../assects/help.JPG";

import Navbar from "../../components/navbar/index.js";
import Header from "../../components/Header/index.js";
import Footer from "../../components/Footer/index.js";

const Home = () => {
  return (
    <>
      <Navbar />

      <Header />
      <section className="exchange-sec">
        <div className="container">
          <div className="exchange-content">
            <div class="exchange-header">
              <h2>Kraken is a crypto exchange for everyone.</h2>
              <p>How can we help you get started?</p>
            </div>

            <div class="exchange-cards">
              <Row style={{ justifyContent: "space-between" }}>
                <Col sm={24} md={20} lg={11} xl={5}>
                  <Card
                    exchangeCardTitle={
                      "I'm new to crypto. I need someone to explain how it all  works."
                    }
                    bg="#5741d9"
                  />
                </Col>
                <Col sm={24} md={20} lg={11} xl={5}>
                  <Card
                    exchangeCardTitle={
                      "I'm trying to take my crypto investments to the next level."
                    }
                    bg="#43196f"
                  />
                </Col>
                <Col sm={24} md={20} lg={11} xl={5}>
                  <Card
                    exchangeCardTitle={
                      "I'm looking for something my current crypto exchange doesn't offer."
                    }
                    bg="#0385e6"
                  />
                </Col>
                <Col sm={24} md={20} lg={11} xl={5}>
                  <Card
                    exchangeCardTitle={
                      "My firm is looking for a crypto solution."
                    }
                    bg="#dca3c8"
                  />
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </section>

      <Sec1
        img={Cryptocurrencies}
        sec1bg={"rgb(13, 12, 82)"}
        sec1Heading={"New to Bitcoin and cryptocurrencies? No problem."}
        sec1P1={"Crypto may seem confusing, but we're here to help."}
        sec1H2={"Our crypto guides will help get you up to speed."}
        sec1P2={
          "While the concept is simple, we know that aspects of cryptocurrency can seem a bit complex."
        }
        sec1P3={
          "Our resource center will help guide you through the basics of trading crypto and how it's changing the way the world thinks about money and finance."
        }
        sec1Btn={"Learn more about cryptocurrency"}
      />

      <Sec2
        img={everything}
        sec1bg={"#ff8b8b"}
        sec1Heading={"Kraken has everything you need"}
        sec1P1={"to buy, sell, and trade crypto."}
        sec1H2={"An intuitive experience from the start."}
        sec1P2={
          "From day one, we designed and built a streamlined bitcoin exchange for newcomers and experts alike."
        }
        sec1P3={
          "Make easy deposits and withdrawals, measure your portfolio's performance and keep track of all of your crypto in one convenient place."
        }
        sec1Btn={"Check out all of our features"}
        sec1Btnbg={"rgb(13, 12, 82)"}
        sec1color={"white"}
      />

      <Sec1
        img={trad}
        sec1bg={"#5409c8"}
        sec1Heading={"Trade with confidence."}
        sec1P1={"Kraken believes in security above everything."}
        // sec1H2={"Our crypto guides will help get you up to speed."}
        sec1P2={
          "Earning the trust of our clients has always been our highest priority. We earn that trust through the best security in the business — most of our crypto is held safely in cold wallets so bad actors can't reach it."
        }
        sec1P3={
          "Our platform provides world class financial stability by maintaining full reserves, healthy banking relationships and the highest standards of legal compliance."
        }
        sec1Btn={"Learn more about security"}
        sec1Btnbg={"white"}
        sec1color={"#5747d3"}
      />

      <Sec2
        img={help}
        sec1bg={"#feb58d"}
        sec1Heading={"Get help from a 24/7"}
        sec1P1={"global support team."}
        sec1H2={"Global 24/7/365 support."}
        sec1P2={
          "We pair our global 24/7/365 live chat with an extensive Support Center to help ensure your questions are answered and your needs are met around the clock -- no matter who or where you are."
        }
        sec1Btn={"Explore our Support Center"}
      />
      <section className="exchange-sec">
        <div className="container">
          <div className="exchange-content">
            <div class="exchange-header lastCards">
              <h2>Keep sailing the high seas of success!</h2>
              <p>What’s next?</p>
            </div>

            <div class="exchange-cards">
              <Row style={{ justifyContent: "space-between" }}>
                <Col sm={24} md={20} lg={11} xl={5}>
                  <Card
                    exchangeCardTitle={
                      "I'd like to learn more about why I should choose Kraken."
                    }
                    bg="#5741d9"
                    toggleId={1}
                  />
                </Col>
                <Col sm={24} md={20} lg={11} xl={5}>
                  <Card
                    exchangeCardTitle={
                      "I'm curious how much it will cost me to buy and sell cryptocurrency."
                    }
                    bg="#43196f"
                    toggleId={2}
                  />
                </Col>
                <Col sm={24} md={20} lg={11} xl={5}>
                  <Card
                    exchangeCardTitle={
                      "Show me live crypto prices and how the market's moving right now."
                    }
                    bg="#0385e6"
                    toggleId={3}
                  />
                </Col>
                <Col sm={24} md={20} lg={11} xl={5}>
                  <Card
                    exchangeCardTitle={
                      "I'm ready to try it out - Let's create my account."
                    }
                    bg="#dca3c8"
                    toggleId={4}
                  />
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
