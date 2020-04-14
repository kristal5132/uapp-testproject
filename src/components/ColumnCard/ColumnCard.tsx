import React, { useState } from 'react';
import {
  Grid, Card, CardContent, Typography, Theme, Modal,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Draggable } from 'react-beautiful-dnd';
import CardModal from '../CardModal';
import { ColumnCardIndexed } from '../../models/columnCardIndexed';

const useStyles = makeStyles((theme: Theme) => {
  const { palette } = theme;
  return {
    root: {
      width: '90%',
      backgroundColor: palette.secondary.main,
      margin: '7px 0 10px 0',
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
  };
});

const ColumnCard: React.FC <ColumnCardIndexed> = ({
  index, columnId, cardObj,
}) => {
  const [modalHandler, setModalHandler] = useState(false);

  const handleModalClose = () => {
    setModalHandler(false);
  };
  const onCardOpen = () => {
    setModalHandler(true);
  };

  const classes = useStyles();
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
              <Typography>{cardObj.name}</Typography>
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
              />
            </Grid>
          </Modal>
        </Grid>
      )}
    </Draggable>
  );
};

export default ColumnCard;
