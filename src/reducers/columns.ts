import {ColumnsActions, UserColumnActions} from '../actions/columns';
import {DashboardState} from '../models/dashboardState';
import {Column} from '../models/column';
import {loadState} from '../localStorage';

const loadedState = loadState();
const initialState: DashboardState = {
  columns: loadedState !== undefined ? loadedState : [],
};

export const columnsReducer = (state = initialState, action: UserColumnActions) => {
  switch (action.type) {
    case ColumnsActions.ADD_NEW_COLUMN:
      return {
        ...state,
        columns: [...state.columns, action.payload],
      };
    case ColumnsActions.ADD_NEW_CARD:
      return {
        ...state,
        columns: (state.columns as Column[]).map((obj: Column) => {
          if (obj.id === action.payloadId) {
            return {
              ...obj,
              cards: [...obj.cards, action.payload],
            };
          }
          return obj;
        }),
      };
    case ColumnsActions.CHANGE_COLUMN_NAME:
      return {
        ...state,
        columns: (state.columns as Column[]).map((obj: Column) => {
          if (obj.id === action.payloadId) {
            return {
              ...obj,
              name: action.payload,
            };
          }
          return obj;
        }),
      };
    default:
      return state;
  }
};
