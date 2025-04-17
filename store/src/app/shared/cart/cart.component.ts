import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartModel, Grocery } from 'src/app/types/types.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartItems: any;
  totalPrice = 0;

  constructor(
    private router: Router,
    private store: Store<{myCart: CartModel[]}>
  ){
    store.select('myCart').subscribe(res => {
      this.cartItems = res;
      this.cartItems.forEach((item: CartModel) => {
        // item.price = item.price * item.quantity
        this.totalPrice += item.price
      });
    })
  }


  increaseQty(item: any) {
    item.quantity++;
    this.updateSubtotal();
  }
  
  decreaseQty(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
      this.updateSubtotal();
    }
  }
  
  removeItem(item: any) {
    this.cartItems = this.cartItems.filter((i:any) => i.filename !== item.filename);
    this.updateSubtotal();
  }
  
  updateSubtotal() {
    // this.totalPrice = this.cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
  }
  

}
