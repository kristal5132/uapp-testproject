import { ColumnsActions, UserColumnActions } from '../actions/columns';
import { DashboardState } from '../models/dashboardState';
import { Column } from '../models/column';
import { loadState } from '../localStorage';
import { Columns } from '../models/columns';
import { IColumnCard } from '../models/columnCardModel';
import { Cards } from '../models/cards';
import { AddDescriptionModel } from '../models/addDescModel';
import { AddDateModel } from '../models/addDateModel';
import { ChangeCardNameModel } from '../models/changeCardNameModel';

const loadedState = loadState();
const initialState: DashboardState = loadedState !== undefined ? loadedState : [];

type PayloadType =
  AddDescriptionModel
  | AddDateModel
  | ChangeCardNameModel

const editCard = (state: Columns, keyName: string, payload: PayloadType): Columns => (
  (state as Columns).map((obj: Column) => {
    if (obj.id === payload.columnId) {
      return {
        ...obj,
        cards: (obj.cards as Cards).map((card: IColumnCard) => {
          if (card.id === payload.id) {
            return {
              ...card,
              [keyName]: payload[keyName as keyof PayloadType],
            };
          } return card;
        }),
      };
    } return obj;
  })
);

export const columnsReducer = (state = initialState, action: UserColumnActions) => {
  switch (action.type) {
    case ColumnsActions.ADD_NEW_COLUMN:
      return [...state, action.payload];

    case ColumnsActions.DELETE_COLUMN:
      return (state as Columns).filter((obj: Column) => obj.id !== action.payload);

    case ColumnsActions.ADD_DESCRIPTION:
      return editCard(state, 'description', action.payload);

    case ColumnsActions.CHANGE_CARD_NAME:
      return editCard(state, 'name', action.payload);

    case ColumnsActions.ADD_DATE:
      return editCard(state, 'date', action.payload);

    case ColumnsActions.ADD_NEW_CARD:
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

    case ColumnsActions.CHANGE_COLUMN_NAME:
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
