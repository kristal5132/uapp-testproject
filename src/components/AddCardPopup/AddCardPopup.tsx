import React, { useState } from 'react';
import {
  Button, Card, CardActions, Grid, IconButton, TextField,
} from '@material-ui/core';
import { Add } from '@material-ui/icons';
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
    alignItems: 'flex-start',
    width: 260,
    paddingTop: '0',
  },
  cardAdd: {
    maxWidth: 275,
    width: '100%',
  },
  textField: {
    width: '90%',
    padding: 10,
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
  },
  dontDisplayCard: {
    display: 'none',
  },
});

const AddCardPopup: React.FC<AddNewCard> = (
  {
    inputValue,
    handleChange, addNewItemFunc, placeholder, label,
  },
) => {
  const [isActiveAddCard, setIsActiveAddCard] = useState(false);
  const [displayAddCard, setDisplayAddCard] = useState(true);

  const toggleAddCardButton = () => {
    setIsActiveAddCard((prevState: boolean) => !prevState);
    setDisplayAddCard((prevState: boolean) => !prevState);
  };
  const classes = useStyles();
  return (
    <Grid item>
      <CardActions className={displayAddCard ? `${classes.cardAction} ${classes.displayCard}`
        : `${classes.cardAction} ${classes.dontDisplayCard}`}
      >
        <Button size="medium" color="primary" fullWidth className={classes.button} onClick={toggleAddCardButton}>
          <Add fontSize="small" />
          {label}
        </Button>
      </CardActions>
      <Card className={isActiveAddCard ? classes.displayCard : classes.dontDisplayCard}>
        <TextField
          placeholder={placeholder}
          variant="outlined"
          className={classes.textField}
          value={inputValue}
          onChange={handleChange}
        />
        <CardActions className={classes.cardAdd}>
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

export default AddCardPopup;
