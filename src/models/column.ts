import { IColumnCard } from './columnCardModel';

export interface Column {
	id: string;
	name: string;
	cards: [] | IColumnCard[];
}
