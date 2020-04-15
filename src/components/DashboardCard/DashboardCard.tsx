import React, { useState } from 'react';
import {
  TextField, Grid, Theme, Card, CardContent, IconButton,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { Droppable } from 'react-beautiful-dnd';
import Delete from '@material-ui/icons/Delete';
import NewCard from '../NewCard';
import ColumnCard from '../ColumnCard';
import { IColumnCard } from '../../models/columnCardModel';
import { Column } from '../../models/column';
import {changeColumnName, deleteColumn} from '../../actions/columns';
import { Cards } from '../../models/cards';
import DeleteDialog from '../Dialog';

const useStyles = makeStyles((theme: Theme) => {
  const { palette } = theme;
  return {
    root: {
      width: '275px',
      maxHeight: '100%',
    },
    button: {
      justifyContent: 'flex-start',
      textTransform: 'inherit',
      color: palette.primary.main,
    },
    cardContent: {
      padding: '8px 16px 8px 16px',
      display: 'flex',
      alignItems: 'center',
    },
    textField: {
      height: '35px',
      flexDirection: 'row',
    },
  };
});


const DashboardCard: React.FC<{ columnObject: Column }> = ({ columnObject }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(columnObject.name);
  const [deleteDialog, setDeleteDialog] = useState(false);

  const handleDeleteDialogOpen = () => {
    setDeleteDialog(true);
  };
  const handleDeleteDialogClose = () => {
    setDeleteDialog(false);
  };

  const handleDeleteDialogSuccess = () => {
    setDeleteDialog(false);
    dispatch(deleteColumn(columnObject.id));
  };

  const handleColumnNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    if (event.target.value) {
      dispatch(changeColumnName(event.target.value, columnObject.id));
    }
  };


  return (
    <Droppable droppableId={String(columnObject.id)}>
      {(provided) => (
        <Grid item {...provided.droppableProps} ref={provided.innerRef}>
          <Card className={classes.root}>
            <CardContent className={classes.cardContent}>
              <TextField variant="outlined" value={inputValue} onChange={handleColumnNameChange} className={classes.textField} />
              <IconButton onClick={handleDeleteDialogOpen}>
                <Delete />
              </IconButton>
              <DeleteDialog
                open={deleteDialog}
                handleDialogClose={handleDeleteDialogClose}
                handleDialogSuccess={handleDeleteDialogSuccess}
              />
            </CardContent>
            {columnObject.cards.length > 0
              ? (columnObject.cards as Cards).map((obj: IColumnCard, index) => (
                <ColumnCard
                  cardObj={obj}
                  columnId={columnObject.id}
                  key={obj.id}
                  index={index}
                />
              ))
              : null}
            {provided.placeholder}
            <NewCard columnId={columnObject.id} />
          </Card>
        </Grid>
      )}
    </Droppable>
  );
};

export default DashboardCard;
