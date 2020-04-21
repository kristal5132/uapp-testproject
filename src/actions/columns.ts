import { PayloadAction } from './payloadAction';
import { Column } from '../models/column';
import { IColumnCard } from '../models/columnCardModel';
import { AddNewCardModel } from '../models/addNewCardModel';
import { ChangeColumnNameModel } from '../models/changeColumnNameModel';

export enum ColumnActions {
  ADD_NEW_COLUMN = 'ADD_NEW_COLUMN',
  ADD_NEW_CARD = 'ADD_NEW_CARD',
  CHANGE_COLUMN_NAME = 'CHANGE_COLUMN_NAME',
  DELETE_COLUMN = 'DELETE_COLUMN',
}

export interface DeleteColumn
  extends PayloadAction<ColumnActions.DELETE_COLUMN, string> {
}

export interface AddNewColumn
  extends PayloadAction<ColumnActions.ADD_NEW_COLUMN, Column> {
}

export interface AddNewCard
  extends PayloadAction<ColumnActions.ADD_NEW_CARD, AddNewCardModel> {
}

export interface ChangeColumnName
  extends PayloadAction<ColumnActions.CHANGE_COLUMN_NAME, ChangeColumnNameModel> {
}

export type UserColumnActions =
  | AddNewColumn
  | AddNewCard
  | ChangeColumnName
  | DeleteColumn


export function deleteColumn(id: string): DeleteColumn {
  return {
    type: ColumnActions.DELETE_COLUMN,
    payload: id,
  };
}

export function addNewColumn(column: Column): AddNewColumn {
  return {
    type: ColumnActions.ADD_NEW_COLUMN,
    payload: column,
  };
}

export function addNewCard(card: IColumnCard, columnId: string): AddNewCard {
  return {
    type: ColumnActions.ADD_NEW_CARD,
    payload: {
      card,
      columnId,
    },
  };
}

export function changeColumnName(name: string, columnId: string): ChangeColumnName {
  return {
    type: ColumnActions.CHANGE_COLUMN_NAME,
    payload: {
      name,
      columnId,
    },
  };
}
