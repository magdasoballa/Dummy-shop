import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Store } from "@ngrx/store";
import { Product } from "../products.model";
import * as fromReducer from "../store/cart.reducer";
import * as CartActions from "../store/cart.actions";

@Component({
  selector: "app-product-item",
  templateUrl: "./product-item.component.html",
  styleUrls: ["./product-item.component.scss"],
})
export class ProductItemComponent {
  @Input() product: Product;
  @Output() newProductToCart = new EventEmitter<number>();
  isAddedToFavourites = false;

  constructor(private store: Store<fromReducer.State>) {}

  changeAddedToFavourites() {
    this.isAddedToFavourites = !this.isAddedToFavourites;
  }

  addToCart() {
    this.store.dispatch(new CartActions.AddItemToCart(this.product));
    this.store.subscribe((data) => console.log(data));
  }
}
