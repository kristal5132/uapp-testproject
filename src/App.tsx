import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import Header from './components/Header';
import Main from './components/Main';
import { sortCards } from './actions/cards';


const useStyles = makeStyles({
  root: {
    backgroundColor: '#81AAFE',
    height: '100vh',
    padding: '20px 30px 0',
  },
  headerWrapper: {
    height: '70px',
    alignItems: 'center',
    color: '#FFF',
  },
  mainWrapper: {
    paddingTop: '20px',
  },
});

const App: React.FC = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;
    if (destination) {
      dispatch(sortCards(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
      ));
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Grid container direction="column" className={classes.root}>
        <Grid container className={classes.headerWrapper}>
          <Header projectName="Study trello" />
        </Grid>
        <Grid container className={classes.mainWrapper}>
          <Main />
        </Grid>
      </Grid>
    </DragDropContext>
  );
};

export default App;
