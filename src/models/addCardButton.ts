import React from 'react';

export interface AddNewCard {
	displayAddCard: boolean;
	isActiveAddCard: boolean;
	inputValue: string;
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	addNewItemFunc: () => void;
	toggleAddCardButton: () => void;
	label: string;
	placeholder: string;
}
