import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import voletReducer from './rideauSlice';

// Combine your reducers
const rootReducer = combineReducers({
  volet: voletReducer,
});

// Create a persist configuration
const persistConfig = {
  key: 'root', 
  storage,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store with the persisted reducer
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

// Create the persistor for the store
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;