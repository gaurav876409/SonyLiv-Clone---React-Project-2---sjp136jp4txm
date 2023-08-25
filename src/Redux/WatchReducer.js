import {
  ADD_WATCHLIST_SUCCESS,
  ADD_WATCHLIST_FAILURE,
} from "./Action";

const initialState = {
  watchlist: [],
  watchlistError: null,
}
const WatchReducer = (state = initialState, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
}

export default WatchReducer;