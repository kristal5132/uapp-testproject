import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import AddCardPopup from '../AddCardPopup';
import { addNewColumn } from '../../actions/columns';

const NewColumn: React.FC = () => {
  const dispatch = useDispatch();

  const [isActiveAddColumn, setIsActiveAddColumn] = useState(false);
  const [displayAddColumn, setDisplayAddColumn] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const toggleAddCardButton = () => {
    setIsActiveAddColumn((prevState: boolean) => !prevState);
    setDisplayAddColumn((prevState: boolean) => !prevState);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const addNewColumnFunc = () => {
    if (inputValue) {
      dispatch(addNewColumn({
        id: inputValue + Math.floor(Math.random() * 100),
        name: inputValue,
        cards: [],
      }));
      setInputValue('');
    }
  };
  return (
    <AddCardPopup
      addNewItemFunc={addNewColumnFunc}
      isActiveAddCard={isActiveAddColumn}
      displayAddCard={displayAddColumn}
      handleChange={handleChange}
      toggleAddCardButton={toggleAddCardButton}
      inputValue={inputValue}
      placeholder="Ввести заголовок списка"
      label="Добавить список"
    />
  );
};

export default NewColumn;
