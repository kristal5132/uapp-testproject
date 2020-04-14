import React from 'react';
import {
  Card, CardHeader, CardContent, Typography,
} from '@material-ui/core';
import AddCardPopup from '../AddCardPopup';

const CardModal: React.FC = () => (
  <Card>
    <CardHeader>
      Hello
    </CardHeader>
    <CardContent>
      <Typography>Описание</Typography>
      {/* <AddCardPopup
        displayAddCard={}
        isActiveAddCard={}
        inputValue={}
        handleChange={}
        addNewItemFunc={}
        toggleAddCardButton={}
        label={}
        placeholder={}
      /> */}
    </CardContent>
  </Card>
);

export default CardModal;
