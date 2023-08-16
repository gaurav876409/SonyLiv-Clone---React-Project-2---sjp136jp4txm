
import { FETCH_SHOW_DETAILS_SUCCESS, FETCH_SHOW_DETAILS_FAILURE } from "./action";
  
  const initialState = {
    showDetails: null,
    error: null,
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
      default:
        return state;
    }
  };
  
  export default showDetailsReducer;
  