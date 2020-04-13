import { combineReducers } from 'redux';
import { columnsReducer } from './columns';

export const rootReducer = combineReducers({
  columns: columnsReducer,
});
