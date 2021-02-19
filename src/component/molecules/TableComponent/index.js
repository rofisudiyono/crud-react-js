import React from "react";
import { Table, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const TableComponent = ({ users }) => {
  console.log(users);
  return (
    <Container>
      <Link to={"create/"}>
        <Button className="mb-4">Create User</Button>
      </Link>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Address</th>
            <th>Age</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(function (item, i) {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.address}</td>
                <td>{item.age}</td>
                <td>{item.phone}</td>
                <td>
                  <Link to={"detail/" + item.id}>
                    <Button variant="primary" className="mx-1">
                      Detail
                    </Button>
                  </Link>
                  <Link to={"edit/" + item.id}>
                    <Button variant="warning" className="mx-1">
                      Edit
                    </Button>
                  </Link>
                  <Button variant="danger" className="mx-1">
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default TableComponent;
