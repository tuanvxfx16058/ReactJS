import { createStore, combineReducers } from "redux";
import { Staffs } from "./reducer_staffs";
import {  Departments } from "./reducer_department";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      staffs:Staffs,
      departments:Departments
    })
    );
  return store;
};
