import { combineReducers } from 'redux';
import undoable from 'redux-undo';
import { columnsReducer } from './columns';

export const rootReducer = combineReducers({
  columns: undoable(columnsReducer, {
    limit: 10,
  }),
});
