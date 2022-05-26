import { configureStore,combineReducers } from "@reduxjs/toolkit";
import cartReducer from './cartRedux'
import userReducer from './userRedux'
import productReducer from './productRedux'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'

  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }

  const rootRedcer=combineReducers({user:userReducer,cart:cartReducer,product:productReducer})
  const persistedReducer = persistReducer(persistConfig, rootRedcer)
  
  
export const store=configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store)
