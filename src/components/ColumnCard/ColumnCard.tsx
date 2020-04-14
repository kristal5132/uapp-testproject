import React, { useState } from 'react';
import {
  Grid, Card, CardContent, Typography, Theme, Modal,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Draggable } from 'react-beautiful-dnd';
import CardModal from '../CardModal';

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
  };
});

// just need to use another index for draggable object,
// so I'm using this typing instead <IColumnCard>
const ColumnCard: React.FC <{name: string; id: string; index: number}> = ({ name, id, index }) => {
  /* const [modalToggler, setModalToggler] = useState(false);

  const handleModalClose = () => {
    setModalToggler(false);
  };
  const onCardOpen = () => {
    setModalToggler(true);
  }; */

  const classes = useStyles();
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <Grid
          justify="center"
          container
          item
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card className={classes.root}>
            <CardContent className={classes.cardContent}>
              <Typography>{name}</Typography>
            </CardContent>
          </Card>
          {/* <Modal
            open={modalToggler}
            onClose={handleModalClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <CardModal/>
          </Modal> */}
        </Grid>
      )}
    </Draggable>
  );
};

export default ColumnCard;
