import { STAFFS } from "../staffs";
import * as ActionTypes from './ActionTypes';


export const Staffs = (state = STAFFS, action) => {
  switch(action.type){
    case ActionTypes.ADD_STAFF:
            var staff=action.payload;  
    default:
           return state; 
  }
};
