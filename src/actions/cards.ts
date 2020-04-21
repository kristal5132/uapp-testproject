import { Moment } from 'moment';
import { PayloadAction } from './payloadAction';
import { AddDateModel } from '../models/addDateModel';
import { AddDescriptionModel } from '../models/addDescModel';
import { ChangeCardNameModel } from '../models/changeCardNameModel';
import { DroppableModel } from '../models/droppable';

export enum CardActions {
  CHANGE_CARD_NAME = 'CHANGE_CARD_NAME',
  ADD_DATE = 'ADD_DATE',
  ADD_DESCRIPTION = 'ADD_DESCRIPTION',
  DRAG_HAPPENED = 'DRAG_HAPPENED',
}

export interface DragCardHappened
  extends PayloadAction<CardActions.DRAG_HAPPENED, DroppableModel> {
}

export interface AddDate
  extends PayloadAction<CardActions.ADD_DATE, AddDateModel> {
}

export interface AddDescription
  extends PayloadAction<CardActions.ADD_DESCRIPTION, AddDescriptionModel> {
}

export interface ChangeCardName
  extends PayloadAction<CardActions.CHANGE_CARD_NAME, ChangeCardNameModel> {
}

export type UserCardActions =
  | AddDate
  | AddDescription
  | ChangeCardName
  | DragCardHappened

export function changeCardNameInColumn(
  name: string, id: string, columnId: string,
): ChangeCardName {
  return {
    type: CardActions.CHANGE_CARD_NAME,
    payload: {
      name,
      id,
      columnId,
    },
  };
}

export function addDescriptionToCard(
  description: string, id: string, columnId: string,
): AddDescription {
  return {
    type: CardActions.ADD_DESCRIPTION,
    payload: {
      description,
      id,
      columnId,
    },
  };
}

export function addDateToCard(
  date: Moment, id: string, columnId: string,
): AddDate {
  return {
    type: CardActions.ADD_DATE,
    payload: {
      date,
      id,
      columnId,
    },
  };
}

export function sortCards(droppableIdStart: string, droppableIdEnd: string,
  droppableIndexStart: number, droppableIndexEnd: number):
  DragCardHappened {
  return {
    type: CardActions.DRAG_HAPPENED,
    payload: {
      droppableIdStart,
      droppableIdEnd,
      droppableIndexStart,
      droppableIndexEnd,
    },
  };
}
