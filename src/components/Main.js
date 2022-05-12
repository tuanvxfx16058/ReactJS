import React, { Component } from 'react';

import Header from "./Header";
import Footer from "./Footer";
import Nhanvien from "./Nhanvien";
import Chitietnhanvien from "./Chitietnhanvien";
import Phongban from "./Phongban";
import Bangluong from "./Bangluong";

import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    staffs:state.staffs,
  department:state.department,
  }
}

class Main extends Component {
  constructor(props) {
    super(props);
 
    this.onAddStaff=this.onAddStaff.bind(this)
  }

  onAddStaff = (newstaff) => {
    this.setState({ staffs: [...this.props.staffs, newstaff] });
  };

  render() {
    
    const StaffId =({match})=>{
      console.log(match)
      return(
        <Chitietnhanvien staff={this.props.staffs.filter((value)=>value.id===parseInt(match.params.Id,10))[0]}/>
      )
    }


    return (
      <div>
        <Header />
        <Switch>
          <Route
          exact
            path="/"
            component={() => <Nhanvien staffs={this.props.staffs} onAddStaff={this.onAddStaff} />}
          />
          <Route
          exact
            path="/nhanvien"
            component={() => <Nhanvien staffs={this.props.staffs}/>}
          />

          <Route exact  path='/nhanvien' component={()=><StaffId staff={this.props.staffs}/>}/>

          <Route exact  path='/nhanvien/:Id' component={StaffId}/>
          <Route 
            path="/phongban"
            component={() => <Phongban phongban={this.props.department} />}
          />
          <Route
            path="/bangluong"
            component={() => <Bangluong staffs={this.props.staffs} />}
          />
          <Redirect to="/nhanvien" />
        </Switch>
        <Footer />
      </div>
    );
  }
}
export default withRouter(connect(mapStateToProps)(Main));