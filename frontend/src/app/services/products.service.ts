import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  uri = "http://localhost:4000/products";

  constructor(private http: HttpClient) { }

  getAllProducts(){
    return this.http.get<Product[]>(`${this.uri}/getAllProducts`);
  }
}
