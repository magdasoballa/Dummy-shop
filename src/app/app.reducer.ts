import { ActionReducerMap } from "@ngrx/store";

import * as cartReducer from "./store/cart.reducer";
import * as favouritesReducer from "./store/favourites.reducer";

export interface AppState {
  cart: cartReducer.State;
  favourites: favouritesReducer.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  cart: cartReducer.cartReducer,
  favourites: favouritesReducer.favouritesReducer,
};
