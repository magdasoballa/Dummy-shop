import { Product } from "../products.model";
import * as FavouritesActions from "./favourites.actions";

export interface State {
  itemsAddedToFavourites: Product[];
}

const initialState: State = {
  itemsAddedToFavourites: [],
};

export function favouritesReducer(
  state: State = initialState,
  action: FavouritesActions.FavouritesActions
) {
  switch (action.type) {
    case FavouritesActions.ADD_ITEM:
      return {
        ...state,
        itemsAddedToFavourites: [
          ...state.itemsAddedToFavourites,
          action.payload,
        ],
      };
    default:
      return state;
  }
}
