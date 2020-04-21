import { IColumnCard } from './columnCardModel';

export interface ColumnCardIndexed {
  columnId: string;
  index: number;
  cardObj: IColumnCard;
}
