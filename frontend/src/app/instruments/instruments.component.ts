import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { ProductsService } from '../services/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-instruments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './instruments.component.html',
  styleUrl: './instruments.component.css'
})
export class InstrumentsComponent implements OnInit {
  products: Product[] = [];
  message = "";

  constructor( private productService: ProductsService) {}

  /*ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: (data: Product[]) => {
        this.products = data;

        this.products.sort((a, b) => b.id - a.id);
      },
      error: (err) => {
        console.error("Greška pri učitavanju instrumenata: ", err);
        this.message = "Greška pri učitavanju instrumenata!";
      }
    });
  }*/

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((data) => {
      this.products = data;
    });
  }

}
