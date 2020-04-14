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
    case ColumnsActions.DRAG_HAPPENED: {
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
      } = action.payload;
      const newState = [...state];
      // in the same column
      if (droppableIdStart === droppableIdEnd) {
        const activeColumn = state.find((column: Column) => droppableIdStart === column.id);
        if (activeColumn !== undefined) {
          const card = activeColumn.cards.splice(droppableIndexStart, 1);
          activeColumn.cards.splice(droppableIndexEnd, 0, ...card);
        }
      }
      // to other column
      if (droppableIdStart !== droppableIdEnd) {
        // find column where drag happened
        const columnStart = state.find((column: Column) => droppableIdStart === column.id);
        // pull out the card from this list

        if (columnStart !== undefined) {
          const card = columnStart.cards.splice(droppableIndexStart, 1);
          // find column where drag ended
          const columnEnd = state.find((column: Column) => droppableIdEnd === column.id);
          if (columnEnd !== undefined) {
            columnEnd.cards.splice(droppableIndexEnd, 0, ...card);
          }
        }
      }
      return newState;
    }
    default:
      return state;
  }
};
