import { combineReducers } from 'redux';
import loaderReducer from './reducers/loaderReducer';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice'; // Example slice
import postsReducer from './postSlice'; // Example slice

const store = configureStore({
  reducer: {
    counter: counterReducer,
    loader: loaderReducer,
    posts: postsReducer,

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;


