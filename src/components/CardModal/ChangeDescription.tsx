import React, { useState } from 'react';
import {
  Button, Card, CardActions, Grid, IconButton, TextField,
} from '@material-ui/core';
import Close from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import { AddNewCard } from '../../models/addCardButton';

const useStyles = makeStyles({
  button: {
    justifyContent: 'flex-start',
    textTransform: 'inherit',
    backgroundColor: 'rgba(255,255,255,0.7)',
    height: '40px',
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.5)',
    },
  },
  cardAction: {
    paddingTop: '0',
  },
  cardAdd: {
    display: 'block',
  },
  textField: {
    width: '90%',
    padding: '10px',
  },
  addButton: {
    textTransform: 'inherit',
    backgroundColor: '#61BD4F',
    color: '#FFFFFF',
    '&:hover': {
      backgroundColor: '#53BD00',
    },
  },
  displayCard: {
    display: 'block',
  },
  dontDisplayCard: {
    display: 'none',
  },
});

export const ChangeDescription: React.FC<AddNewCard> = ({
  inputValue,
  handleChange, addNewItemFunc, placeholder, label, description,
}) => {
  const [isActiveAddCard, setIsActiveAddCard] = useState(false);
  const [displayAddCard, setDisplayAddCard] = useState(true);

  const toggleAddCardButton = () => {
    setIsActiveAddCard((prevState: boolean) => !prevState);
    setDisplayAddCard((prevState: boolean) => !prevState);
  };

  const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(event);
    toggleAddCardButton();
  };
  const classes = useStyles();
  return (
    <Grid item>
      <CardActions className={displayAddCard ? `${classes.cardAction} ${classes.displayCard}`
        : `${classes.cardAction} ${classes.dontDisplayCard}`}
      >
        <TextField
          placeholder={placeholder}
          variant="outlined"
          className={classes.textField}
          value={description !== undefined ? description : inputValue}
          onChange={onHandleChange}
          onClick={toggleAddCardButton}
        />
      </CardActions>
      <Card className={isActiveAddCard ? classes.displayCard : classes.dontDisplayCard}>
        <CardActions className={classes.cardAdd}>
          <TextField
            placeholder={placeholder}
            variant="outlined"
            className={classes.textField}
            value={inputValue}
            onChange={handleChange}
          />
          <Button className={classes.addButton} onClick={addNewItemFunc}>
            {label}
          </Button>
          <IconButton aria-label="close" onClick={toggleAddCardButton}>
            <Close />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};
