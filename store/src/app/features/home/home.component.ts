import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GroceryService } from 'src/app/services/grocery.service';
import { cartAction } from 'src/app/store/action/cart.action';
import { groceriesAction } from 'src/app/store/action/grocery.action';
import { selectFilteredGroceries } from 'src/app/store/selector/grocery.selectors';
import { Grocery } from 'src/app/types/types.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  uniqueTypes: string[] = [];
  selectedType = 'All'
  isDropdownOpen: boolean = false;
  groceries$: Observable<Grocery[]>;

  constructor(
    private groceryService: GroceryService,
    private store: Store<{groceries: Grocery[]}>
  ){
    this.groceries$ = store.select("groceries");
  }

  ngOnInit(): void {
    this.getGroceries();
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  getGroceries() {
    this.groceryService.fetchData().subscribe(res => {
      this.store.dispatch(groceriesAction({payload: res}))
      this.uniqueTypes = Array.from(new Set(res.map(item => item.type)));
      this.uniqueTypes.unshift('All');
    });
  }
  

  selectDropdownItem(type: string) {
    this.isDropdownOpen = false;
    this.selectedType = type;
    this.groceries$ = this.store.select(selectFilteredGroceries(type))
  }
  

  addToCart(item: any): void {
    // item.quantity = 1;
    this.store.dispatch(cartAction({payload: item}))
  }
  
  increaseQty(item: any): void {
    item.quantity++;
  }
  
  decreaseQty(item: any): void {
    if (item.quantity > 1) {
      item.quantity--;
    } else {
      item.quantity = 0;
    }
  }
  
}
