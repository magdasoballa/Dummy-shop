import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";

import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductItemComponent } from "./product-item/product-item.component";
import { HeaderComponent } from "./header/header.component";
import { StoreModule } from "@ngrx/store";
import { cartReducer } from "./store/cart.reducer";

@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    ProductListComponent,
    ProductItemComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ cart: cartReducer }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
