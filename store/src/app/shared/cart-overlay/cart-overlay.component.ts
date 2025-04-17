import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-overlay',
  templateUrl: './cart-overlay.component.html',
  styleUrls: ['./cart-overlay.component.scss']
})
export class CartOverlayComponent {

  @Input() isCartOpen!: boolean;
  @Output() isCartOverlayCloseEvent = new EventEmitter<boolean>();
  

  constructor(
    private router: Router
  ){}




  isCartOverlayClose(event: boolean){
    this.isCartOverlayCloseEvent.emit(event);
  }



  closeOverlay(){
    this.isCartOpen = false;
    this.isCartOverlayCloseEvent.emit(this.isCartOpen)
  }

  goToCheckout() {
    this.closeOverlay()
    this.router.navigate(['/checkout']);
  }

  goToHome() {
    this.closeOverlay()
    this.router.navigate(['/']);
  }
}
