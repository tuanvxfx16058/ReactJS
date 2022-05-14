import { createStore, combineReducers } from "redux";
import { Dishes } from "./Dishes";
import { Comments } from "./Comments";
import { Leaders } from "./Leaders";
import { Promotions } from "./Promotions";




export const ConfigureStore=()=>{
   const store = createStore(
      combineReducers({
         Dishes:Dishes,
         Leaders:Leaders,
         Comments:Comments,
         Promotions:Promotions
      })
   )
return store;
}