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
  signupUser: null,
  signinUser: null,
  error: null,
}


const UserReducer = (state = initialState, action) => {
    switch(action.type){
      case SIGNUP_SUCCESS:
        return {
            ...state,
            signupUser: action.payload,
            error: null,
        };
    case SIGNUP_FAILURE:
        return {
            ...state,
            signupUser: null,
            error: action.payload,
        };
    case LOGIN_SUCCESS:
        return {
            ...state,
            signinUser: action.payload,
            error: null,
        };
    case LOGIN_FAILURE:
        return {
            ...state,
            signinUser: null,
            error: action.payload,
        };
    case UPDATE_PASSWORD_SUCCESS:
        return {
            ...state,
            error: null,
        };
    case UPDATE_PASSWORD_FAILURE:
        return {
            ...state,
            error: action.payload,
        };
    case LOGOUT:
        localStorage.removeItem('sign_up_user');
        localStorage.removeItem('sign_in_user');
        return {
            ...state,
            signupUser: null,
            signinUser: null,
            error: null,
        };
    default:
        return state;
    }
}

export default UserReducer;
