import React from "react";
import classes from "./Logo.module.css";
import logoImg from "../../assets/Logo/burger-logo.png";

const logo = (props) => {
  return (
    <div className={classes.Logo}>
      <img src={logoImg} alt="Check this Out!" />
    </div>
  );
};

export default logo;
