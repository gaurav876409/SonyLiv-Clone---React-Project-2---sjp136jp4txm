import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    UPDATE_PASSWORD_SUCCESS,
    UPDATE_PASSWORD_FAILURE,
    LOGOUT
} from './Action'

const initialState = {
    user: null,
    error: null,
}


const UserReducer = (state = initialState, action) => {
    switch(action.type){
        case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
    case UPDATE_PASSWORD_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: null,
      };
    case SIGNUP_FAILURE:
    case LOGIN_FAILURE:
    case UPDATE_PASSWORD_FAILURE:
      return {
        ...state,
        user: null,
        error: action.payload,
      };
    case LOGOUT:
      localStorage.removeItem('user');
      return {
        ...state,
        user: null,
      };
      default:
      return state;
    }
}

export default UserReducer;
