import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Buttons, Input } from "../component";
import { Link } from "react-router-dom";
export default class CreateUserContainer extends Component {
  render() {
    return (
      <div>
        <Container>
          <Link to="/">
            <Buttons title="Back" variant="primary" className="mb-3" />
          </Link>
          <Input placeholder="Name" />
          <Input placeholder="Address" />
          <Input placeholder="Age" />
          <Input placeholder="Phone" />
          <Buttons title="Save" variant="warning" />
        </Container>
      </div>
    );
  }
}
