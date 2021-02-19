import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { JumboTronComponent, NavbarComponent } from "../component/";
import CreateUserContainer from "../containers/CreateUserContainer";
import DetailUserContainer from "../containers/DetailUserContainer";
import EditUserContainer from "../containers/EditUserContainer";
import HomeContainer from "../containers/HomeContainer";
export default class App extends Component {
  state = {
    title: "Learn CRUD React Js",
    users: [
      {
        id: 1,
        name: "Rofi Sudiyono",
        address: "Banyuwangi",
        age: "29",
        phone: "08113500090",
      },
      {
        id: 2,
        name: "Rina Purwita",
        address: "Banyuwangi",
        age: "28",
        phone: "08113500099",
      },
      {
        id: 3,
        name: "Aulian Akbar",
        address: "Banyuwangi",
        age: "2",
        phone: "08113500089",
      },
    ],
  };
  render() {
    return (
      <Router>
        <NavbarComponent />
        <JumboTronComponent title={this.state.title} />
        <Route path="/" exact>
          <HomeContainer />
        </Route>
        <Route path="/create" exact>
          <CreateUserContainer />
        </Route>
        <Route path="/edit/:id" exact>
          <EditUserContainer />
        </Route>
        <Route path="/detail/:id" exact>
          <DetailUserContainer />
        </Route>
      </Router>
    );
  }
}
