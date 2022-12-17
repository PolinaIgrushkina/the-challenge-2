import { combineReducers } from 'redux';
import { itemsReducer } from './slice';

export const rootReducer = combineReducers({
  items: itemsReducer,
});
