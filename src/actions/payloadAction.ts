import { Action } from 'redux';

export interface PayloadAction<T, M> extends Action<T> {
  payload: M;
}
