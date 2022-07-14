import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  productList: any;

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productList = this.productService.getProducts();
  }
  addToBasket(product: any) {
    this.productService.event.emit(product);
  }
}
