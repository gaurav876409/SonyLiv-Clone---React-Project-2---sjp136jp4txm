// store.js

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './Root';

const store = configureStore({ reducer: rootReducer })

export default store;

