import { createStore, combineReducers } from 'redux';
import loaderReducer from './reducers/loaderReducer';

const rootReducer = combineReducers({
  loader: loaderReducer,
});

const store = createStore(rootReducer);

export default store;
