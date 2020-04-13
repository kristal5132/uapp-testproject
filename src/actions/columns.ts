import { PayloadAction } from './payloadAction';
import { Column } from '../models/column';
import { IColumnCard } from '../models/columnCardModel';

export enum ColumnsActions {
  ADD_NEW_COLUMN = 'ADD_NEW_COLUMN',
  ADD_NEW_CARD = 'ADD_NEW_CARD',
  CHANGE_COLUMN_NAME = 'CHANGE_COLUMN_NAME',
}

export interface AddNewColumn
  extends PayloadAction<ColumnsActions.ADD_NEW_COLUMN, Column> {
}

export interface AddNewCard
  extends PayloadAction<ColumnsActions.ADD_NEW_CARD, IColumnCard> {
  payloadId: string;
}

export interface ChangeColumnName
  extends PayloadAction<ColumnsActions.CHANGE_COLUMN_NAME, string> {
  payloadId: string;
}

export type UserColumnActions =
  | AddNewColumn
  | AddNewCard
  | ChangeColumnName

export function addNewColumn(column: Column): AddNewColumn {
  return {
    type: ColumnsActions.ADD_NEW_COLUMN,
    payload: column,
  };
}

export function addNewCard(card: IColumnCard, payloadId: string): AddNewCard {
  return {
    type: ColumnsActions.ADD_NEW_CARD,
    payload: card,
    payloadId,
  };
}

export function changeColumnName(name: string, payloadId: string): ChangeColumnName {
  return {
    type: ColumnsActions.CHANGE_COLUMN_NAME,
    payload: name,
    payloadId,
  };
}
