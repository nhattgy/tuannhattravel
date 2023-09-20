import React from "react";
import "./Button.scss";

const ButtonCustom = ({ children, onClick }) => {
  return (
    <button className="custom-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonCustom;
