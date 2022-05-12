import React, { Component } from "react";
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";

import Menu from "./MenuComponent";
import Header from "./Header";
import Footer from "./Footer";
import Contact from "./ContactComponet";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Homecomponent";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      leaders: LEADERS,
      comments: COMMENTS,
      promotions: PROMOTIONS,
    };
  }

  render() {
    const Homepage = () => {
      return (
        <Home
          dish={this.state.dishes.filter((value) => value.featured)[0]}
          leader={this.state.leaders.filter((value) => value.featured)[0]}
          promotion={this.state.promotions.filter((value) => value.featured)[0]}
        />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/home" component={Homepage} />
          <Route
            path="/Menu"
            component={() => <Menu dishes={this.state.dishes} />}
          />
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>

        <Footer />
      </div>
    );
  }
}
