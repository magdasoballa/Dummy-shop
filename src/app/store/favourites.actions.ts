import { Action } from "@ngrx/store";
import { Product } from "../products.model";

export const ADD_ITEM = "[Favourites] Add Item";
export const UPDATE_ITEM = "[Favourites] Update Item";
export const DELETE_ITEM = "[Favourites] Delete Item";

export class AddItemToFavourites implements Action {
  readonly type = ADD_ITEM;

  constructor(public payload: Product) {}
}

export class UpdateItemInFavourites implements Action {
  readonly type = UPDATE_ITEM;

  constructor(public payload: Product) {}
}

export class DeleteItem implements Action {
  readonly type = DELETE_ITEM;
}

export type FavouritesActions =
  | AddItemToFavourites
  | UpdateItemInFavourites
  | DeleteItem;
