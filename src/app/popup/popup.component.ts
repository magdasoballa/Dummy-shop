import { EventEmitter } from "@angular/core";
import { Component, ElementRef, Input, Output, ViewChild } from "@angular/core";
import { Store } from "@ngrx/store";
import * as fromCartReducer from "../app.reducer";

@Component({
  selector: "app-popup",
  templateUrl: "./popup.component.html",
  styleUrls: ["./popup.component.scss"],
})
export class PopupComponent {
  @Input() showPopup: boolean;
  @Output() toggle = new EventEmitter<boolean>();
  itemsInCart$;

  constructor(private store: Store<fromCartReducer.AppState>) {}

  ngOnInit() {
    this.itemsInCart$ = this.store.select("cart");
  }

  closeModal() {
    this.showPopup = false;
    this.toggle.emit(this.showPopup);
  }

  hasDuplicate(arr) {
    arr.some((val, i) => arr.indexOf(val) !== i);
  }
}
