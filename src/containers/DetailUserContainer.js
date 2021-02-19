import React, { Component } from "react";
import { Buttons } from "../component";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
export default class DetailUserContainer extends Component {
  render() {
    return (
      <div>
        <Container>
          <Link to="/">
            <Buttons title="Back" />
          </Link>
        </Container>
      </div>
    );
  }
}
