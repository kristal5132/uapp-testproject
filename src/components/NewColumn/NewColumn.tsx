import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import AddCardPopup from '../AddCardPopup';
import { addNewColumn } from '../../actions/columns';

const NewColumn: React.FC = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const addNewColumnFunc = () => {
    if (inputValue) {
      const column = {
        id: inputValue + Date.now(),
        name: inputValue,
        cards: [],
      };
      dispatch(addNewColumn(column));
      setInputValue('');
    }
  };
  return (
    <AddCardPopup
      addNewItemFunc={addNewColumnFunc}
      handleChange={handleChange}
      inputValue={inputValue}
      placeholder="Ввести заголовок списка"
      label="Добавить список"
    />
  );
};

export default NewColumn;
