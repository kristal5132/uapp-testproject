import React from 'react';
import { Typography, IconButton, Grid } from '@material-ui/core';
import Undo from '@material-ui/icons/Undo';
import Redo from '@material-ui/icons/Redo';
import { ActionCreators as UndoActionCreators } from 'redux-undo';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../models/dashboardState';

interface DashboardName {
    projectName: string;
}

const Header: React.FC<DashboardName> = ({ projectName }) => {
  const canUndo = useSelector((state: State) => state.columns.past.length > 0);
  const canRedo = useSelector((state: State) => state.columns.future.length > 0);
  const dispatch = useDispatch();

  return (
    <Grid container alignContent="center" spacing={6}>
      <Grid item>
        <Typography variant="h3">{projectName}</Typography>
      </Grid>
      <Grid item>
        <IconButton onClick={() => dispatch(UndoActionCreators.undo())} disabled={!canUndo}>
          <Undo />
        </IconButton>
        <IconButton onClick={() => dispatch(UndoActionCreators.redo())} disabled={!canRedo}>
          <Redo />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default Header;
