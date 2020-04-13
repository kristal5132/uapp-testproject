import React from 'react';
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
    backgroundColor: 'rgba(255,255,255,0.7)',
    height: '40px',
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.5)',
    },
  },
  cardAction: {
    alignItems: 'flex-start',
    width: '275px',
    paddingTop: '0',
  },
  cardAdd: {
    width: '275px',
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

const AddCardPopup: React.FC<AddNewCard> = (
  {
    displayAddCard, isActiveAddCard, inputValue,
    handleChange, addNewItemFunc, toggleAddCardButton, placeholder, label,
  },
) => {
  const classes = useStyles();
  return (
    <Grid item>
      <CardActions className={displayAddCard ? `${classes.cardAction} ${classes.displayCard}`
        : `${classes.cardAction} ${classes.dontDisplayCard}`}
      >
        <Button size="medium" color="primary" fullWidth className={classes.button} onClick={toggleAddCardButton}>
          <Add fontSize="small" />
          Добавить колонку
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
