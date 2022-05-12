import React, { Component } from "react";
import { DISHES } from "../shared/dishes";
import Menu from "./MenuComponent";
import DetailDish from "./DishdetailComponent";
import Header from "./Header";
import Footer from "./Footer";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from './Homecomponent'

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      dishselected: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(value) {
    this.setState({ dishselected: value });
  }

  render() {
    const Homepage   = () => {
      return <Home />;
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/Home" component={Home} />
          <Route
            path="/Menu"
            component={() => <Menu dishes={this.state.dishes} />}
          />
          <Redirect to="/home" />
        </Switch>

        {/* <Menu dishes={this.state.dishes} setState={(value)=>this.handleClick(value)} />
        <DetailDish dish={this.state.dishselected}  /> */}
        <Footer />
      </div>
    );
  }
}
