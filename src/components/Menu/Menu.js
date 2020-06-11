import React from "react";
import "./Menu.css";

const menu = (props) => (
  <div onClick={props.clicked} className="DrawerToggle">
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default menu;
