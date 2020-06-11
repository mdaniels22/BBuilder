import React from "react";
import "./Model.css";
import Backdrop from "../Backdrop/Backdrop";
import AuxComponent from "../../../hoc/Auxcomp/auxcomp";

const model = (props) => (
  <AuxComponent>
    <Backdrop show={props.show} clicked={props.modelClosed} />
    <div
      className="Model"
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0",
      }}
    >
      {props.children}
    </div>
  </AuxComponent>
);

export default model;
