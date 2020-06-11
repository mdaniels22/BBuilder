import React from "react";
import "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Menu from "../../Menu/Menu";

const toolbar = (props) => (
  <header className="Toolbar">
    <Menu clicked={props.menuClicked} />

    <Logo height="80%" />

    <nav className="DesktopOnly" /*Not working bc cssModules not used*/>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
