import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from 'src/product';
@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css'],
})
export class BasketComponent implements OnInit {
  @Input('class')

  totalValue = 0;

  toggle = true;

  toggleBasket() {
    this.toggle = !this.toggle;
    
  }

  basket: Product[] = [];

  removeItem(productId: any) {
    let index = this.basket.findIndex((item) => item.id === productId);
    this.basket.splice(index, 1);
    this.basketTotaler();
  }
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.event.subscribe((item) => {
      this.basket.push(item);
      this.basketTotaler();
    });
    
  }
  basketTotaler() {
    this.totalValue = 0;
    this.basket.map((product) => {
      this.totalValue += product.price;
    });
  }
}
