import React, { useState } from 'react';
import {
  Card, CardContent, TextField, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import MomentUtils from '@date-io/moment';
import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import moment, { Moment } from 'moment';
import { addDateToCard, addDescriptionToCard, changeCardNameInColumn } from '../../actions/columns';
import { ChangeInputValue } from './ChangeInputValue';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
    marginTop: '20px',
  },
  margins: {
    marginBottom: '20px',
  },
}));

interface CardModalModel {
  cardId: string;
  columnId: string;
  name: string;
  description?: string;
  date?: string;
}

const CardModal: React.FC <CardModalModel> = ({
  cardId, columnId, name, description, date,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [descriptionValue, setDescriptionValue] = useState(() => {
    if (description !== undefined) {
      return description;
    } return '';
  });

  const [nameValue, setNameValue] = useState(name);

  const handleCardNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameValue(event.target.value);
    if (event.target.value) {
      dispatch(changeCardNameInColumn(event.target.value, cardId, columnId));
    }
  };

  const [selectedDate, handleDateChange] = useState<Moment | null>(() => {
    if (date !== undefined) {
      return moment(date);
    } return moment();
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescriptionValue(event.target.value);
  };

  const addDescription = () => {
    if (descriptionValue) {
      dispatch(addDescriptionToCard(descriptionValue, cardId, columnId));
    }
  };

  const addEndTime = (newDate: Moment | null) => {
    if (newDate) {
      dispatch(addDateToCard(newDate, cardId, columnId));
      handleDateChange(newDate);
    }
  };

  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <CardContent>
            <TextField multiline variant="standard" value={nameValue} onChange={handleCardNameChange} />
          </CardContent>
          <CardContent>
            <Typography variant="h5" component="h5" className={classes.margins}>Описание</Typography>
            <ChangeInputValue
              inputValue={descriptionValue}
              handleChange={handleChange}
              addNewItemFunc={addDescription}
              label="Добавить"
              placeholder="Добавить более подробное описание"
              description={description}
            />
          </CardContent>
          <CardContent>
            <Typography variant="h5" className={classes.margins}>Изменение даты выполнения</Typography>
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <DateTimePicker value={selectedDate} onChange={(val) => addEndTime(val)} />
            </MuiPickersUtilsProvider>
          </CardContent>
        </CardContent>
      </Card>
    </>
  );
};

export default CardModal;
