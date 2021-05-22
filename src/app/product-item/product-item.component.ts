import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Store } from "@ngrx/store";
import { Product } from "../products.model";
import * as fromCartReducer from "../store/cart.reducer";
import * as CartActions from "../store/cart.actions";
import * as FavouritesActions from "../store/favourites.actions";

@Component({
  selector: "app-product-item",
  templateUrl: "./product-item.component.html",
  styleUrls: ["./product-item.component.scss"],
})
export class ProductItemComponent {
  @Input() product: Product;
  @Output() newProductToCart = new EventEmitter<number>();
  isAddedToFavourites = false;
  showPopup = false;

  constructor(private store: Store<fromCartReducer.State>) {}

  changeAddedToFavourites() {
    this.isAddedToFavourites = !this.isAddedToFavourites;
    this.store.dispatch(
      new FavouritesActions.AddItemToFavourites(this.product)
    );
  }

  addToCart() {
    this.store.dispatch(new CartActions.AddItemToCart(this.product));
    this.showPopup = true;
  }
}
