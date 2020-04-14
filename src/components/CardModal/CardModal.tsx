import React, { useState } from 'react';
import {
  Card, CardContent, Typography, TextField,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { addDescriptionToCard } from '../../actions/columns';
import { ChangeDescription } from './ChangeDescription';

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
  description: {
    marginBottom: '20px',
  },
}));

interface CardModalModel {
  cardId: string;
  columnId: string;
  name: string;
  description?: string;
}

const CardModal: React.FC <CardModalModel> = ({
  cardId, columnId, name, description,
}) => {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState(() => {
    if (description !== undefined) {
      return description;
    } return '';
  });

  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const addDescription = () => {
    if (inputValue) {
      dispatch(addDescriptionToCard(inputValue, cardId, columnId));
    }
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <CardContent>
          <Typography variant="h5">{name}</Typography>
        </CardContent>
        <CardContent>
          <Typography variant="h5" component="h5" className={classes.description}>Описание</Typography>
          <ChangeDescription
            inputValue={inputValue}
            handleChange={handleChange}
            addNewItemFunc={addDescription}
            label="Добавить"
            placeholder="Добавить более подробное описание"
            description={description}
          />
        </CardContent>
        <CardContent>
          <Typography variant="h5">Изменение даты выполнения</Typography>
          <form className={classes.container} noValidate>
            <TextField
              id="datetime-local"
              label="Next appointment"
              type="datetime-local"
              defaultValue="2017-05-24T10:30"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
        </CardContent>
      </CardContent>
    </Card>
  );
};

export default CardModal;
