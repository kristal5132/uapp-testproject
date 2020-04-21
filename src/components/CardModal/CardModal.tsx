import React, { useState } from 'react';
import {
  Card, CardContent, TextField, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import MomentUtils from '@date-io/moment';
import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import moment, { Moment } from 'moment';
import { addDateToCard, addDescriptionToCard, changeCardNameInColumn } from '../../actions/cards';
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
    marginTop: 20,
  },
  margins: {
    marginBottom: 20,
  },
}));

interface CardModalModel {
  id: string;
  columnId: string;
  name: string;
  description?: string;
  date?: string;
}

const CardModal: React.FC <CardModalModel> = ({
  id, columnId, name, description, date,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [descriptionValue, setDescriptionValue] = useState(description || '');

  const [nameValue, setNameValue] = useState(name);

  const handleCardNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setNameValue(value);
    if (value) {
      dispatch(changeCardNameInColumn(value, id, columnId));
    }
  };

  const [selectedDate, handleDateChange] = useState<Moment | null>(() => {
    if (date) {
      return moment(date);
    } return moment();
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescriptionValue(event.target.value);
  };

  const addDescription = () => {
    dispatch(addDescriptionToCard(descriptionValue, id, columnId));
  };

  const addEndTime = (newDate: Moment | null) => {
    if (newDate) {
      dispatch(addDateToCard(newDate, id, columnId));
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
              label="Сохранить"
              placeholder="Добавить более подробное описание"
              description={description}
            />
          </CardContent>
          <CardContent>
            <Typography variant="h5" className={classes.margins}>Изменение даты выполнения</Typography>
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <DateTimePicker value={selectedDate} onChange={addEndTime} />
            </MuiPickersUtilsProvider>
          </CardContent>
        </CardContent>
      </Card>
    </>
  );
};

export default CardModal;
