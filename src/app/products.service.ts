import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "./products.model";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  productsUrl = "https://fakestoreapi.com/products";

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<Product[]>(this.productsUrl);
  }
}
