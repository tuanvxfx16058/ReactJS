import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Nhanvien from "./Nhanvien";
import Chitietnhanvien from "./Chitietnhanvien";
import Phongban from "./Phongban";
import Bangluong from "./Bangluong";

import { STAFFS } from "../staffs";
import { Redirect, Route, Switch } from "react-router-dom";


const ClickNhanvien =({match})=>{
  console.log(match)
  return(
    <Chitietnhanvien staff={STAFFS.filter((value)=>value.id===parseInt(match.params.Id,10))[0]}/>
  )
}


export default function Main() {
  return (
    <div>
      <Header />
      <Switch>
       <Route exact path='/nhanvien' component={Nhanvien}/>
       <Route path='/nhanvien/:Id' component={ClickNhanvien}/>
       <Route exact path='/phongban' component={()=><Phongban staff={STAFFS}/>}/>
       <Route path='/bangluong' component={()=><Bangluong/>}/>
       <Redirect to='/nhanvien' />
      </Switch>
      <Footer />
    </div>
  );
}
