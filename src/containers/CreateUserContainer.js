import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Buttons, Input } from "../component";

export default class CreateUserContainer extends Component {
  render() {
    return (
      <div>
        <Container>
          <Input placeholder="Name" />
          <Input placeholder="Address" />
          <Input placeholder="Age" />
          <Input placeholder="Phone" />
          <Buttons title="Save" variant="warning" block />
        </Container>
      </div>
    );
  }
}
