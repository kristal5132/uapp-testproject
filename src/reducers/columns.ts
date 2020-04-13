import { ColumnsActions, UserColumnActions } from '../actions/columns';
import { DashboardState } from '../models/dashboardState';
import { Column } from '../models/column';
import { loadState } from '../localStorage';
import { Columns } from '../models/columns';

const loadedState = loadState();
const initialState: DashboardState = loadedState !== undefined ? loadedState : [];

export const columnsReducer = (state = initialState, action: UserColumnActions) => {
  switch (action.type) {
    case ColumnsActions.ADD_NEW_COLUMN:
      return [...state, action.payload];
    case ColumnsActions.ADD_NEW_CARD:
      return (
        (state as Columns).map((obj: Column) => {
          if (obj.id === action.payloadId) {
            return {
              ...obj,
              cards: [...obj.cards, action.payload],
            };
          }
          return obj;
        })
      );
    case ColumnsActions.CHANGE_COLUMN_NAME:
      return (
        (state as Columns).map((obj: Column) => {
          if (obj.id === action.payloadId) {
            return {
              ...obj,
              name: action.payload,
            };
          }
          return obj;
        })
      );
    default:
      return state;
  }
};
