import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import showDetailsReducer from './Reducer';
import UserReducer from './UserReducer';
import WatchReducer from './WatchReducer';

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  showDetails: showDetailsReducer,
  user: UserReducer,
  watchlist: WatchReducer,
  // other reducers...
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({ reducer: persistedReducer })

export default store;

