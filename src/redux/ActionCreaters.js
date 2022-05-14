import * as ActionTypes from './ActionTypes';

export const addstaff=(newstaff)=({
    type:ActionTypes.ADD_STAFF,
    payload: {
        newstaff
    }
})