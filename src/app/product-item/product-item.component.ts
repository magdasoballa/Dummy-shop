import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  Renderer2,
  ViewChild,
} from "@angular/core";
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
  @ViewChild("popup") popup: ElementRef;

  isAddedToFavourites = false;
  showPopup;

  constructor(private store: Store<fromCartReducer.State>) {}

  changeAddedToFavourites() {
    this.isAddedToFavourites = !this.isAddedToFavourites;
    this.store.dispatch(
      new FavouritesActions.AddItemToFavourites(this.product)
    );
  }

  addToCart() {
    console.log(this.showPopup);
    this.store.dispatch(new CartActions.AddItemToCart(this.product));
    this.showPopup = true;
  }
}
