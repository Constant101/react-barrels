import { combineReducers } from 'redux';
import cards from './cards';
import cart from './cart';
import filters from  './filters';

const rootReducer = combineReducers({
  cards,
  filters,
  cart,
});

export default rootReducer;
