import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";





export const trangthaibandau = {
    dishes: DISHES,
      leaders: LEADERS,
      comments: COMMENTS,
      promotions: PROMOTIONS,
}

export const Reducer= (trangthai=trangthaibandau, hanhdong)=>{
    return trangthai;
}