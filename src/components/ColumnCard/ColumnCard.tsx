import React, { useState } from 'react';
import {
  Grid, Card, CardContent, Typography, Theme, Modal,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Draggable } from 'react-beautiful-dnd';
import QueryBuilder from '@material-ui/icons/QueryBuilder';
import moment, { Moment } from 'moment';
import CardModal from '../CardModal';
import { ColumnCardIndexed } from '../../models/columnCardIndexed';

const useStyles = makeStyles((theme: Theme) => {
  const { palette } = theme;
  return {
    root: {
      width: '90%',
      backgroundColor: palette.secondary.main,
      margin: '7px 0 10px 0',
      transition: '0.2s',
      '&:hover': {
        backgroundColor: 'rgba(235, 236, 240, 0.5)',
      },
    },
    cardTypography: {
      overflowWrap: 'break-word',
    },
    cardContent: {
      '&:last-child': {
        paddingBottom: '8px',
      },
      padding: '8px 13px 8px 13px',
    },
    cardModal: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    cardModalWrapper: {
      maxWidth: '500px',
      width: '100%',
      height: '50%',
    },
    cardDate: {
      display: 'flex',
      maxWidth: '110px',
      width: '100%',
      backgroundColor: 'transparent',
      padding: '5px',
      marginTop: '10px',
      boxShadow: 'none',
    },
    cardDateIcon: {
      marginRight: '5px',
    },
    cardDateWarning: {
      backgroundColor: '#F2D600',
    },
    cardDateOver: {
      backgroundColor: '#EC9488',
    },
  };
});

const ColumnCard: React.FC <ColumnCardIndexed> = ({
  index, columnId, cardObj,
}) => {
  const [modalHandler, setModalHandler] = useState(false);
  const classes = useStyles();
  const handleModalClose = () => {
    setModalHandler(false);
  };
  const onCardOpen = () => {
    setModalHandler(true);
  };

  const checkDateClose = (cardDate: Moment) => {
    const now = moment();
    if (now.diff(cardDate, 'days') < 0) {
      return classes.cardDate;
    }
    if (now.diff(cardDate, 'days') === 0) {
      if (now.diff(cardDate) < 0) {
        return `${classes.cardDate} ${classes.cardDateWarning}`;
      }
    } return `${classes.cardDate} ${classes.cardDateOver}`;
  };
  const cardDateClass = checkDateClose(moment(cardObj.date));

  return (
    <Draggable draggableId={cardObj.id} index={index}>
      {(provided) => (
        <Grid
          justify="center"
          container
          item
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card className={classes.root} onClick={() => onCardOpen()}>
            <CardContent className={classes.cardContent}>
              <Typography className={classes.cardTypography}>{cardObj.name}</Typography>
              {cardObj.date && (
              <Card className={cardDateClass}>
                <QueryBuilder className={classes.cardDateIcon} />
                {moment(cardObj.date).format('MMM Do')}
              </Card>
              )}
            </CardContent>
          </Card>
          <Modal
            open={modalHandler}
            onClose={handleModalClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            className={classes.cardModal}
          >
            <Grid className={classes.cardModalWrapper}>
              <CardModal
                cardId={cardObj.id}
                columnId={columnId}
                name={cardObj.name}
                description={cardObj.description}
                date={cardObj.date}
              />
            </Grid>
          </Modal>
        </Grid>
      )}
    </Draggable>
  );
};

export default ColumnCard;
