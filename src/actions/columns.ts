import { PayloadAction } from './payloadAction';
import { Column } from '../models/column';
import { IColumnCard } from '../models/columnCardModel';
import { DroppableModel } from '../models/droppable';
import { AddNewCardModel } from '../models/addNewCardModel';
import { ChangeColumnNameModel } from '../models/changeColumnNameModel';
import { AddDescriptionModel } from '../models/addDescModel';
import {AddDateModel} from '../models/addDateModel';

export enum ColumnsActions {
  ADD_NEW_COLUMN = 'ADD_NEW_COLUMN',
  ADD_NEW_CARD = 'ADD_NEW_CARD',
  CHANGE_COLUMN_NAME = 'CHANGE_COLUMN_NAME',
  DRAG_HAPPENED = 'DRAG_HAPPENED',
  ADD_DESCRIPTION = 'ADD_DESCRIPTION',
  ADD_DATE = 'ADD_DATE',
}

export interface AddDescription
  extends PayloadAction<ColumnsActions.ADD_DESCRIPTION, AddDescriptionModel> {
}

export interface AddDate
  extends PayloadAction<ColumnsActions.ADD_DATE, AddDateModel> {
}

export interface AddNewColumn
  extends PayloadAction<ColumnsActions.ADD_NEW_COLUMN, Column> {
}

export interface DragCardHappened
  extends PayloadAction<ColumnsActions.DRAG_HAPPENED, DroppableModel> {}

export interface AddNewCard
  extends PayloadAction<ColumnsActions.ADD_NEW_CARD, AddNewCardModel> {
}

export interface ChangeColumnName
  extends PayloadAction<ColumnsActions.CHANGE_COLUMN_NAME, ChangeColumnNameModel> {
}

export type UserColumnActions =
  | AddNewColumn
  | AddNewCard
  | ChangeColumnName
  | DragCardHappened
  | AddDescription
  | AddDate

export function addDescriptionToCard(
  description: string, id: string, columnId: string,
): AddDescription {
  return {
    type: ColumnsActions.ADD_DESCRIPTION,
    payload: {
      description,
      id,
      columnId,
    },
  };
}

export function addDateToCard(
  date: string, id: string, columnId: string,
): AddDate {
  return {
    type: ColumnsActions.ADD_DATE,
    payload: {
      date,
      id,
      columnId,
    },
  };
}

export function addNewColumn(column: Column): AddNewColumn {
  return {
    type: ColumnsActions.ADD_NEW_COLUMN,
    payload: column,
  };
}

export function addNewCard(card: IColumnCard, columnId: string): AddNewCard {
  return {
    type: ColumnsActions.ADD_NEW_CARD,
    payload: {
      card,
      columnId,
    },
  };
}

export function changeColumnName(name: string, columnId: string): ChangeColumnName {
  return {
    type: ColumnsActions.CHANGE_COLUMN_NAME,
    payload: {
      name,
      columnId,
    },
  };
}

export function sortCards(droppableIdStart: string, droppableIdEnd: string,
  droppableIndexStart: number, droppableIndexEnd: number):
  DragCardHappened {
  return {
    type: ColumnsActions.DRAG_HAPPENED,
    payload: {
      droppableIdStart,
      droppableIdEnd,
      droppableIndexStart,
      droppableIndexEnd,
    },
  };
}
