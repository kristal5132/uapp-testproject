import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import AddCardPopup from '../AddCardPopup';
import { addNewCard } from '../../actions/columns';

const NewCard: React.FC<{ columnId: string }> = ({ columnId }) => {
  const dispatch = useDispatch();
  const [isActiveAddCard, setIsActiveAddCard] = useState(false);
  const [displayAddCard, setDisplayAddCard] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const toggleAddCardButton = () => {
    setIsActiveAddCard((prevState: boolean) => !prevState);
    setDisplayAddCard((prevState: boolean) => !prevState);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const addNewCardFunc = () => {
    if (inputValue) {
      dispatch(addNewCard({
        id: inputValue + Math.floor(Math.random() * 100),
        name: inputValue,
      }, columnId));
      setInputValue('');
    }
  };
  return (
    <>
      <AddCardPopup
        addNewItemFunc={addNewCardFunc}
        isActiveAddCard={isActiveAddCard}
        displayAddCard={displayAddCard}
        handleChange={handleChange}
        toggleAddCardButton={toggleAddCardButton}
        inputValue={inputValue}
        placeholder="Ввести заголовок карточки"
        label="Добавить карточку"
      />
    </>
  );
};

export default NewCard;
