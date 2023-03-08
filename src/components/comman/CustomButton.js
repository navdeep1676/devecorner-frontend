import { Button } from "antd";
import React from "react";
export const CustomButton = (props) => {
  const { type, className, title, disabled, onClick, icon, style } = props;
  return (
    <Button
      type={type}
      disabled={disabled}
      className={`btn ${className ? className : ""}`}
      style={style}
      onClick={onClick}
    >
      {icon ? <img src={icon} alt="icon" className="me-2"/> : ""}
      {title}
    </Button>
  );
};
