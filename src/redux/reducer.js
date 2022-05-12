import { STAFFS, DEPARTMENTS } from "../staffs";


export const initialState = {
  staffs: STAFFS,
  department: DEPARTMENTS,
};

export const Reducer = (state = initialState, action) => {
  return state;
};
