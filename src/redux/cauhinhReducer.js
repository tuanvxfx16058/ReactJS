import { createStore } from "redux";
import { Reducer, trangthaibandau } from "./reducer";




export const khocauhinh=()=>{
    const khochua=createStore(
        Reducer,
        trangthaibandau,
);
return khochua;
}