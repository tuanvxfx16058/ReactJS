import React, { Component } from 'react';

import Header from "./Header";
import Footer from "./Footer";
import Nhanvien from "./Nhanvien";
import Chitietnhanvien from "./Chitietnhanvien";
import Phongban from "./Phongban";
import Bangluong from "./Bangluong";

import { STAFFS } from "../staffs";
import { DEPARTMENTS } from '../staffs';
import { Redirect, Route, Switch } from "react-router-dom";



class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS,
      department: DEPARTMENTS,
    };
    this.onAddStaff=this.onAddStaff.bind(this)
  }

  onAddStaff = (newstaff) => {
    console.log(newstaff)
    this.setState({ staffs: [...this.state.staffs, newstaff] });
  };

  render() {
    
    const StaffId =({match})=>{
      console.log(match)
      return(
        <Chitietnhanvien staff={this.state.staffs.filter((value)=>value.id===parseInt(match.params.Id,10))[0]}/>
      )
    }


    return (
      <div>
        <Header />
        <Switch>
          <Route
          exact
            path="/"
            component={() => <Nhanvien staffs={this.state.staffs} onAddStaff={this.onAddStaff} />}
          />
          <Route
          exact
            path="/nhanvien"
            component={() => <Nhanvien staffs={this.state.staffs}/>}
          />

          <Route exact  path='/nhanvien' component={()=><StaffId staff={this.state.staffs}/>}/>

          <Route exact  path='/nhanvien/:Id' component={StaffId}/>
          <Route 
            path="/phongban"
            component={() => <Phongban phongban={this.state.department} />}
          />
          <Route
            path="/bangluong"
            component={() => <Bangluong staffs={this.state.staffs} />}
          />
          <Redirect to="/nhanvien" />
        </Switch>
        <Footer />
      </div>
    );
  }
}
export default Main;