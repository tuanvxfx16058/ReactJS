import React, { Component } from "react";
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";

import DetailDish from './DishdetailComponent'
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


    const DishWithId=({match})=>{
      console.log(match)
      return(
      <DetailDish dish={this.state.dishes.filter((value)=>value.id===parseInt(match.params.tuan,10))[0]}
                  comments={this.state.comments.filter((value)=>value.dishId===parseInt(match.params.tuan,10))}  //Sua cho commnet nay
      />
      ) 
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route  path="/home" component={Homepage} />
          <Route exact path="/Menu" component={() => <Menu dishes={this.state.dishes} />}/>
          <Route  path='/menu/:tuan' component={DishWithId}/>
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>

        <Footer />
      </div>
    );
  }
}
