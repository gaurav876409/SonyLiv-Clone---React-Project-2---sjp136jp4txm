import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import showDetailsReducer from './Reducer';

const persistConfig = {
    key: 'root',
    storage,
  }

  const reducer = combineReducers({
    showDetails: showDetailsReducer,
    user: showDetailsReducer,
    watchlist: showDetailsReducer
    // other reducers...
  });

  const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({ reducer: persistedReducer })

export default store;

