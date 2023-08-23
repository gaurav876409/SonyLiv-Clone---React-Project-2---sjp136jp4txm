
import {
  FETCH_SHOW_DETAILS_SUCCESS,
  FETCH_SHOW_DETAILS_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAILURE,
  LOGOUT,
  ADD_WATCHLIST_SUCCESS,
  ADD_WATCHLIST_FAILURE,
  REMOVE_WATCHLIST_SUCCESS,
  REMOVE_WATCHLIST_FAILURE
} from "./Action";

const initialState = {
  showDetails: null,
  user: null,
  error: null,
  watchlist: [],
};

const showDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SHOW_DETAILS_SUCCESS:
      return {
        ...state,
        showDetails: action.payload,
        error: null,
      };
    case FETCH_SHOW_DETAILS_FAILURE:
      return {
        ...state,
        showDetails: null,
        error: action.payload,
      };
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
      case ADD_WATCHLIST_SUCCESS:
      return {
        ...state,
        watchlist: [...state.watchlist, action.payload],
        watchlistError: null,
      };
      case ADD_WATCHLIST_FAILURE:
      return {
        ...state,
        watchlistError: action.payload,
      };
      case REMOVE_WATCHLIST_SUCCESS:
      return {
        ...state,
        watchlist: state.watchlist.filter((id) => id !== action.payload),
      };
      case REMOVE_WATCHLIST_FAILURE:
      return {
        ...state,
        // Handle the failure condition if needed
      };
    default:
      return state;
  }
};

export default showDetailsReducer;
