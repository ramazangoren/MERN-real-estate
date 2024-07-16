// import { configureStore } from "@reduxjs/toolkit";
// import { userReducer } from "./user/userSlice.js";
// // import userReducer from './redux/user/userSlice.js';


// export default configureStore({
//   reducer: { user: userReducer },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }),
// });

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userReducer } from "./user/userSlice.js";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({ user: userReducer });

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

