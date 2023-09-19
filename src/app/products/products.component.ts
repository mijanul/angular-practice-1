import { Component, OnInit } from '@angular/core';
import { ProductRepresentation } from '../services/api/models/product-representation';
import { ProductService } from '../services/api/products/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(private service: ProductService) {}

  products: Array<ProductRepresentation> = [];
  ngOnInit(): void {
    this.service.getAllProductsWithLimit().subscribe({
      next: (result: Array<ProductRepresentation>) => {
        this.products = result;
      },
    });
  }
}
