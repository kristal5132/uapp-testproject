import { Columns } from './columns';

export interface State {
  columns: DashboardState;
}

export type DashboardState =
  Columns | []
