import { Component, ElementRef, ViewChild } from "@angular/core";
import { Store } from "@ngrx/store";
import * as fromCartReducer from "../app.reducer";

@Component({
  selector: "app-popup",
  templateUrl: "./popup.component.html",
  styleUrls: ["./popup.component.scss"],
})
export class PopupComponent {
  @ViewChild("popup", { static: false }) popup: ElementRef;
  isPopupVisible = true;
  itemsInCart$;

  constructor(private store: Store<fromCartReducer.AppState>) {}

  ngOnInit() {
    this.itemsInCart$ = this.store.select("cart");
    console.log(this.itemsInCart$);
  }

  closeModal() {
    this.isPopupVisible = false;
  }
}
