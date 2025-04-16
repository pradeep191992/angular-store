import { Component, OnInit } from '@angular/core';
import { GroceryService } from 'src/app/services/grocery.service';
import { Grocery } from 'src/app/types/types.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  groceryList: Grocery[] = [];
  uniqueTypes: string[] = [];
  selectedType = 'All'
  isDropdownOpen: boolean = false;

  constructor(private groceryService: GroceryService){}

  ngOnInit(): void {
    this.getGroceries();
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  getGroceries() {
    this.groceryService.fetchData().subscribe(res => {
      this.groceryList = res;
  
      this.uniqueTypes = Array.from(new Set(res.map(item => item.type)));
      this.uniqueTypes.unshift('All');
    });
  }
  

  selectDropdownItem(type: string) {
    this.isDropdownOpen = false;
    this.selectedType = type;
    this.groceryService.fetchData().subscribe(res => {
      this.groceryList = type === 'All' ? res : res.filter(item => item.type === type);
    });
  }
  

  addToCart(item: any): void {
    item.quantity = 1;
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
