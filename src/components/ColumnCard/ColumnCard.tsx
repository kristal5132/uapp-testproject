import React from 'react';
import {
  Grid, Card, CardContent, Typography, Theme,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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

const ColumnCard: React.FC<{ name: string }> = ({ name }) => {
  const classes = useStyles();
  return (
    <Grid justify="center" container item>
      <Card className={classes.root}>
        <CardContent className={classes.cardContent}>
          <Typography>{name}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ColumnCard;
