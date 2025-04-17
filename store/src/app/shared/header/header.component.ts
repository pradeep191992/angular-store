import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartModel } from 'src/app/types/types.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isCartOpen: boolean = false;

  numberOfItems = 0;

  constructor(
    private store: Store<{myCart: CartModel[]}>
  ){
    store.select('myCart').subscribe(res => {
      this.numberOfItems = res.length;
    })
  }

  toggleCart() {
    this.isCartOpen = !this.isCartOpen;
  }
  isCartOverlayClose(event: boolean){
    this.isCartOpen = event;
  }
}
