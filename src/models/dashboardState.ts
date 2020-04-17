import { Columns } from './columns';

export interface State {
  columns: {
    past: DashboardState;
    present: DashboardState;
    future: DashboardState;
  };
}

export type DashboardState =
  Columns | []
