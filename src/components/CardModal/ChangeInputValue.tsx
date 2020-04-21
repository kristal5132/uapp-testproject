import React, { useState } from 'react';
import {
  Button, Card, CardActions, IconButton, TextField, CardContent,
} from '@material-ui/core';
import Close from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import { AddNewCard } from '../../models/addCardButton';

const useStyles = makeStyles({
  button: {
    justifyContent: 'flex-start',
    textTransform: 'inherit',
    backgroundColor: '#FFFFFFB3',
    height: 40,
    '&:hover': {
      backgroundColor: '#FFFFFF80',
    },
  },
  cardAction: {
    paddingTop: 0,
  },
  cardAdd: {
    display: 'block',
  },
  textField: {
    width: '90%',
  },
  addButton: {
    textTransform: 'inherit',
    backgroundColor: '#61BD4F',
    color: '#FFF',
    '&:hover': {
      backgroundColor: '#53BD00',
    },
  },
  displayCard: {
    display: 'block',
    padding: 0,
  },
  dontDisplayCard: {
    display: 'none',
  },
});

export const ChangeInputValue: React.FC<AddNewCard> = ({
  inputValue,
  handleChange, addNewItemFunc, placeholder, label, description,
}) => {
  const classes = useStyles();
  const [isActiveAddCard, setIsActiveAddCard] = useState(false);
  const [displayAddCard, setDisplayAddCard] = useState(true);

  const toggleAddCardButton = () => {
    setIsActiveAddCard((prevState: boolean) => !prevState);
    setDisplayAddCard((prevState: boolean) => !prevState);
  };

  const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(event);
  };

  const onDescriptionChange = () => {
    addNewItemFunc();
    toggleAddCardButton();
  };

  return (
    <>
      <CardActions className={displayAddCard ? `${classes.cardAction} ${classes.displayCard}`
        : `${classes.cardAction} ${classes.dontDisplayCard}`}
      >
        <TextField
          multiline
          placeholder={placeholder}
          variant="standard"
          className={classes.textField}
          value={description || inputValue}
          onChange={onHandleChange}
          onClick={toggleAddCardButton}
        />
      </CardActions>
      <Card className={isActiveAddCard ? classes.displayCard : classes.dontDisplayCard}>
        <CardActions className={classes.cardAdd}>
          <CardContent>
            <TextField
              multiline
              placeholder={placeholder}
              variant="outlined"
              className={classes.textField}
              value={inputValue}
              onChange={handleChange}
            />
          </CardContent>
          <Button
            className={classes.addButton}
            onClick={onDescriptionChange}
          >
            {label}
          </Button>
          <IconButton aria-label="close" onClick={toggleAddCardButton}>
            <Close />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
};
