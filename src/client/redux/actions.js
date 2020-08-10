import { GET_DATA, EDIT_USER, SET_FILTER } from "./actionTypes";

export const editUser = data => ({
  type: EDIT_USER,
  payload: {
    data
  }
});

export const getData = () => ({
  type: GET_DATA
});

export const setFilter = (search) => ({ 
  type: SET_FILTER, 
  payload: { search } 
});
