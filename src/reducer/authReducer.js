import {AUTH_ACTION_TYPES} from "../helper/constants";


const { SET_LOGGED_IN_STATUS, SET_USER } = AUTH_ACTION_TYPES;

const authReducer = (state, action) => {
  switch (action.type) {
    case SET_LOGGED_IN_STATUS:
      return { ...state, isUserLoggedIn: action.payload };
      
    case SET_USER:
      return { ...state, user: action.payload };
      

    default:
      return state;
  }
};


export { authReducer};