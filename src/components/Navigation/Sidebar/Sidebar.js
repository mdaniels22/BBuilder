import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import "./Sidebar.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Auxcomponent from "../../../hoc/Auxcomp/auxcomp";

const sidebar = (props) => {
  let showBar = "Close";
  if (props.open) {
    showBar = "Open";
  }

  return (
    <Auxcomponent>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={`Sidebar ${showBar}`}>
        <Logo />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Auxcomponent>
  );
};

export default sidebar;
