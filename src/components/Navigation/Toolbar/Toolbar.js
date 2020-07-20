import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";

const toolbar = () => (
  <header className={classes.Toolbar}>
    <div>Menu</div>
    <Logo>Logo</Logo>
    <nav>...</nav>
  </header>
);

export default toolbar;
