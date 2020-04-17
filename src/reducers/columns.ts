import { Reducer } from 'redux';
import { ColumnActions } from '../actions/columns';
import { DashboardState } from '../models/dashboardState';
import { Column } from '../models/column';
import { loadState } from '../localStorage';
import { Columns } from '../models/columns';
import { UserActions } from '../models/userActions';
import { CardActions } from '../actions/cards';
import editCard from '../utils/editCard';

const loadedState = loadState();
const initialState: DashboardState = loadedState !== undefined ? loadedState : [];


export const columnsReducer: Reducer<DashboardState, UserActions> = (
  state = initialState, action,
) => {
  switch (action.type) {
    case ColumnActions.ADD_NEW_COLUMN:
      return [...state, action.payload];

    case ColumnActions.DELETE_COLUMN:
      return (state as Columns).filter((obj: Column) => obj.id !== action.payload);

    case CardActions.ADD_DESCRIPTION:
      return editCard(state, 'description', action.payload);

    case CardActions.CHANGE_CARD_NAME:
      return editCard(state, 'name', action.payload);

    case CardActions.ADD_DATE:
      return editCard(state, 'date', action.payload);

    case ColumnActions.ADD_NEW_CARD:
      return (
        (state as Columns).map((obj: Column) => {
          if (obj.id === action.payload.columnId) {
            return {
              ...obj,
              cards: [...obj.cards, action.payload.card],
            };
          }
          return obj;
        })
      );

    case ColumnActions.CHANGE_COLUMN_NAME:
      return (
        (state as Columns).map((obj: Column) => {
          if (obj.id === action.payload.columnId) {
            return {
              ...obj,
              name: action.payload.name,
            };
          }
          return obj;
        })
      );

    case CardActions.DRAG_HAPPENED: {
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
