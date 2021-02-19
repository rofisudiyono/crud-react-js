import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
const Input = ({ ...res }) => {
  return (
    <InputGroup className="mb-3">
      <FormControl
        aria-label="Username"
        aria-describedby="basic-addon1"
        {...res}
      />
    </InputGroup>
  );
};

export default Input;
