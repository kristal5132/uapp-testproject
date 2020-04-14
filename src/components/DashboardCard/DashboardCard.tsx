import React, { useState } from 'react';
import {
  TextField, Grid, Theme, Card, CardContent,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { Droppable } from 'react-beautiful-dnd';
import NewCard from '../NewCard';
import ColumnCard from '../ColumnCard';
import { IColumnCard } from '../../models/columnCardModel';
import { Column } from '../../models/column';
import { changeColumnName } from '../../actions/columns';
import { Cards } from '../../models/cards';

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

  const handleColumnNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    dispatch(changeColumnName(event.target.value, columnObject.id));
  };

  return (
    <Droppable droppableId={String(columnObject.id)}>
      {(provided) => (
        <Grid item {...provided.droppableProps} ref={provided.innerRef}>
          <Card className={classes.root}>
            <CardContent className={classes.cardContent}>
              <TextField variant="outlined" value={inputValue} onChange={handleColumnNameChange} className={classes.textField} />
            </CardContent>
            {columnObject.cards.length > 0
              ? (columnObject.cards as Cards).map((obj: IColumnCard, index) => (
                <ColumnCard
                  key={obj.id}
                  name={obj.name}
                  id={obj.id}
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
