import { Columns } from '../models/columns';
import { Column } from '../models/column';
import { Cards } from '../models/cards';
import { IColumnCard } from '../models/columnCardModel';
import { AddDescriptionModel } from '../models/addDescModel';
import { AddDateModel } from '../models/addDateModel';
import { ChangeCardNameModel } from '../models/changeCardNameModel';

type PayloadType =
  | AddDescriptionModel
  | AddDateModel
  | ChangeCardNameModel

const editCard = (state: Columns, keyName: string, payload: PayloadType): Columns => (
  (state as Columns).map((obj: Column) => {
    if (obj.id === payload.columnId) {
      return {
        ...obj,
        cards: (obj.cards as Cards).map((card: IColumnCard) => {
          if (card.id === payload.id) {
            return {
              ...card,
              [keyName]: payload[keyName as keyof PayloadType],
            };
          } return card;
        }),
      };
    } return obj;
  })
);

export default editCard;
