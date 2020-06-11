import React, { Component } from "react";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Sidebar from "../../components/Navigation/Sidebar/Sidebar";
//import Menu from "../../components/Menu/Menu";

import Auxcomponent from "../Auxcomp/auxcomp";
import "./Layout.css";

//Moved Layout to hoc because Layout is being used to wrap other components
class Layout extends Component {
  state = {
    showSidebar: true,
  };

  sidebarCloseHandler = () => {
    this.setState({ showSidebar: false });
  };

  sidebarToggleHandler = () => {
    this.setState((prevState) => {
      return { showSidebar: !prevState.showSidebar };
    });
  };

  render() {
    return (
      <Auxcomponent>
        <Sidebar
          open={this.state.showSidebar}
          closed={this.sidebarCloseHandler}
        />
        <Toolbar menuClicked={this.sidebarToggleHandler} />
        <main className="Content">{this.props.children}</main>
      </Auxcomponent>
    );
  }
}

export default Layout;
