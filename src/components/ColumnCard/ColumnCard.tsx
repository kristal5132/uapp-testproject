import React, { useState } from 'react';
import {
  Grid, Card, CardContent, Typography, Theme, Modal,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Draggable } from 'react-beautiful-dnd';
import QueryBuilder from '@material-ui/icons/QueryBuilder';
import Description from '@material-ui/icons/Description';
import moment, { Moment } from 'moment';
import CardModal from '../CardModal';
import { ColumnCardIndexed } from '../../models/columnCardIndexed';

const useStyles = makeStyles((theme: Theme) => {
  const { palette } = theme;
  return {
    root: {
      width: '90%',
      backgroundColor: palette.secondary.main,
      margin: '7px 0 10px',
      transition: '0.2s',
      '&:hover': {
        backgroundColor: 'rgba(235, 236, 240, 0.5)',
      },
    },
    cardTypography: {
      overflowWrap: 'break-word',
      marginBottom: 10,
    },
    cardContent: {
      '&:last-child': {
        paddingBottom: 8,
      },
      padding: '8px 13px',
    },
    cardModal: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    cardModalWrapper: {
      maxWidth: 500,
      width: '100%',
      height: '50%',
    },
    cardDate: {
      display: 'inline-block',
      maxWidth: 110,
      width: '100%',
      backgroundColor: 'transparent',
      padding: 5,
      marginRight: 10,
    },
    cardDateIcon: {
      marginRight: 5,
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
    if (now.diff(cardDate) < 0) {
      return `${classes.cardDate} ${classes.cardDateWarning}`;
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
          <Card className={classes.root} onClick={onCardOpen}>
            <CardContent className={classes.cardContent}>
              <Typography className={classes.cardTypography}>{cardObj.name}</Typography>
              {cardObj.date && (
              <Card className={cardDateClass}>
                <QueryBuilder className={classes.cardDateIcon} />
                {moment(cardObj.date).format('MMM Do')}
              </Card>
              )}
              {cardObj.description && <Description /> }
            </CardContent>
          </Card>
          <Modal
            open={modalHandler}
            onClose={handleModalClose}
            className={classes.cardModal}
          >
            <Grid className={classes.cardModalWrapper}>
              <CardModal
                {...cardObj}
                columnId={columnId}
              />
            </Grid>
          </Modal>
        </Grid>
      )}
    </Draggable>
  );
};

export default ColumnCard;
