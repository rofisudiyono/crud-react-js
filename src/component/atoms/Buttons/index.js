import React from "react";
import { Button } from "react-bootstrap";
const Buttons = ({ title, ...res }) => {
  return <Button {...res}>{title}</Button>;
};

export default Buttons;
