import React from "react";

import Logo from "../../assests/images/logo192.png";
import classes from "./Logo.module.css";

const logo = (props) => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <img src={Logo} alt="MyLogo" />
  </div>
);

export default logo;
