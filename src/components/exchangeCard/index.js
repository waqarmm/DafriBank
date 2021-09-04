import React, { useState } from "react";
import "antd/dist/antd.css";
import Styles from "./style.js";
import "./exchangeCard.css";

const exchangeCard = (props) => {
  return (
    <>
      <a class="exchange-card" style={{ background: props.bg }}>
        <p class="title">{props.exchangeCardTitle}</p>
      </a>
    </>
  );
};

export default exchangeCard;
