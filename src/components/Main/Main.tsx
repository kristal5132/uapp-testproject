import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux';
import DashboardCard from '../DashboardCard';
import NewColumn from '../NewColumn';
import { Column } from '../../models/column';
import { State } from '../../models/dashboardState';


const Main: React.FC = () => {
  const columns = useSelector((state: State) => state.columns);

  useEffect(() => {
    localStorage.setItem('columns', JSON.stringify(columns));
  }, [columns]);

  return (
    <Grid container spacing={2}>
      {columns.length > 0
        && (columns as Column[]).map((obj: Column) => (
          <DashboardCard
            key={obj.id}
            columnObject={obj}
          />
        ))}
      <NewColumn />
    </Grid>
  );
};

export default Main;
