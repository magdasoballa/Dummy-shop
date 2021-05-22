import { Product } from "../products.model";
import * as CartActions from "./cart.actions";

export interface State {
  itemsAddedToCart: Product[];
}

const initialState: State = {
  itemsAddedToCart: [],
};

export function cartReducer(
  state: State = initialState,
  action: CartActions.CartActions
) {
  switch (action.type) {
    case CartActions.ADD_ITEM:
      return {
        ...state,
        itemsAddedToCart: [...state.itemsAddedToCart, action.payload],
      };
    default:
      return state;
  }
}
