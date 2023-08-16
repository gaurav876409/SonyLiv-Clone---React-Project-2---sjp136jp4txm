// rootReducer.js
import { combineReducers } from 'redux';
import showDetailsReducer from './reducer';

const rootReducer = combineReducers({
  showDetails: showDetailsReducer,
  // other reducers...
});

export default rootReducer;
