import { EDIT_USER, LIST_USER,GET_DATA } from "../actionTypes";

const initialState = {
  loading: true,
  user_data: [],
  search_result: []
};

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA: {
      return { 
        ...state, 
        loading: true 
      };
    }
    case EDIT_USER: {
      const { data } = action.payload;
      const elementsIndex = state.user_data.findIndex(element => Number(element.id) === Number(data.id));
      let updated_data = [...state.user_data];
      updated_data[elementsIndex] = {...updated_data[elementsIndex], title: data.title, body: data.body}
      return {
        ...state,
        user_data: updated_data,
        search_result: []
      };
    }
    case LIST_USER: {
      const { user_data } = action;
      return {
        ...state,
        user_data: user_data,
        loading: false
      };
    }
    
    default:
      return state;
  }
}

export default userReducers;