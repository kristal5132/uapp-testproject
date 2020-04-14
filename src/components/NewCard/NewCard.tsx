import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import AddCardPopup from '../AddCardPopup';
import { addNewCard } from '../../actions/columns';

const NewCard: React.FC<{ columnId: string }> = ({ columnId }) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const addNewCardFunc = () => {
    if (inputValue) {
      dispatch(addNewCard({
        id: inputValue + Date.now(),
        name: inputValue,
      }, columnId));
      setInputValue('');
    }
  };
  return (
    <>
      <AddCardPopup
        addNewItemFunc={addNewCardFunc}
        handleChange={handleChange}
        inputValue={inputValue}
        placeholder="Ввести заголовок карточки"
        label="Добавить карточку"
      />
    </>
  );
};

export default NewCard;
