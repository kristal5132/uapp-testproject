import { UserColumnActions } from '../actions/columns';
import { UserCardActions } from '../actions/cards';

export type UserActions =
  | UserColumnActions
  | UserCardActions
