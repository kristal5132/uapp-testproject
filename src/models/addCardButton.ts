import React from 'react';

export interface AddNewCard {
	inputValue: string;
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	addNewItemFunc: () => void;
	label: string;
	placeholder: string;
	description?: string
}
