import { GET_DATA, EDIT_USER } from "./actionTypes";

export const editUser = data => ({
  type: EDIT_USER,
  payload: {
    data
  }
});

export const getData = () => ({
  type: GET_DATA
});