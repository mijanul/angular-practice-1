import { Component } from '@angular/core';
import { ProductRepresentation } from '../services/api/models/product-representation';
import { Router } from '@angular/router';
import { ProductService } from '../services/api/products/product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss'],
})
export class NewProductComponent {
  constructor(private service: ProductService, private router: Router) {}

  product: ProductRepresentation = {};

  saveProduct() {
    this.service.createProduct(this.product).subscribe({
      next: (result) => {
        this.router.navigate(['products']);
      },
    });
  }
}
