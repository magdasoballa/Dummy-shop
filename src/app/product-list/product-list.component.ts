import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ProductsService } from "src/app/products.service";
import { Product } from "../products.model";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
})
export class ProductListComponent implements OnInit {
  products: Observable<Product[]>;
  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }
}
