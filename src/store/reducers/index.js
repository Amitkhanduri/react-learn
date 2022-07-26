import { combineReducers } from 'redux';
import product from './productReducer';

const appReducer = combineReducers({
    product
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = {};
  }
  return appReducer(state, action);
};

export default rootReducer;