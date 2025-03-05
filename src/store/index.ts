// store.ts
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import rideauReducer from './rideauSlice'; // adjust the path as needed

// Combine your reducers (note: we use the key "rideau" for your rideau slice)
const rootReducer = combineReducers({
  rideau: rideauReducer,
});

// Create a persist configuration
const persistConfig = {
  key: 'root', 
  storage,
};

// Create a persisted reducer using the persist configuration and the combined reducers
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store with the persisted reducer and customized middleware settings
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // These actions are related to Redux Persist and should be ignored
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

// Create the persistor which will be used in your app's entry point to persist the store
export const persistor = persistStore(store);

// Export typed versions of RootState and AppDispatch for use with TypeScript throughout your app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Export the store as the default export
export default store;
