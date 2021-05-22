import { Action } from "@ngrx/store";
import { Product } from "../products.model";

export const ADD_ITEM = "[Cart] Add Item";
export const UPDATE_ITEM = "[Cart] Update Item";
export const DELETE_ITEM = "[Cart] Delete Item";

export class AddItemToCart implements Action {
  readonly type = ADD_ITEM;

  constructor(public payload: Product) {}
}

export class UpdateItemInCart implements Action {
  readonly type = UPDATE_ITEM;

  constructor(public payload: Product) {}
}

export class DeleteItem implements Action {
  readonly type = DELETE_ITEM;
}

export type CartActions = AddItemToCart | UpdateItemInCart | DeleteItem;
