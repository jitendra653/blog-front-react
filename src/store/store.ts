import { createStore, combineReducers } from 'redux';
import loaderReducer from './loaderReducer';
// import loaderReducer from './reducers/loaderReducer'; // Import your loader reducer

const rootReducer = combineReducers({
  loader: loaderReducer, // Add your loader reducer
  // other reducers...
});

const store = createStore(rootReducer);

export default store;
