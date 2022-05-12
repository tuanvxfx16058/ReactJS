import React, { Component } from "react";

import DetailDish from './DishdetailComponent'
import Menu from "./MenuComponent";
import Header from "./Header";
import Footer from "./Footer";
import Contact from "./ContactComponet";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Home from "./Homecomponent";

const mapStateToProps = state=>{
  return{
    dishes:state.dishes,
    comments:state.comments,
    promotions:state.promotions, 
    leaders:state.leaders

}
}

class Main extends Component {
  constructor(props) {
    super(props);
 
  }


  render() {
    const Homepage = () => {
      return (
        <Home
        leader={this.props.leaders.filter((value) => value.featured)[0]}
          dish={this.props.dishes.filter((value) => value.featured)[0]}
          promotion={this.props.promotions.filter((value) => value.featured)[0]}
        />
      );
    };


    const DishWithId=({match})=>{
      console.log(match)
      return(
      <DetailDish dish={this.props.dishes.filter((value)=>value.id===parseInt(match.params.tuan,10))[0]}
                  comments={this.props.comments.filter((value)=>value.dishId===parseInt(match.params.tuan,10))}  //Sua cho commnet nay
      />
      ) 
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route  path="/home" component={Homepage} />
          <Route exact path="/Menu" component={() => <Menu dishes={this.props.dishes} />}/>
          <Route  path='/menu/:tuan' component={DishWithId}/>
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default withRouter (connect(mapStateToProps)(Main))