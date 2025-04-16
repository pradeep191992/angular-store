import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Grocery } from '../types/types.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroceryService {

  url = '/assets/data.json'

  constructor(private http: HttpClient) { }
  fetchData() {
   return this.http.get<Grocery[]>(this.url);
  }
}
