import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { Product } from 'src/app/shared/models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  productsList: Product;
  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.dataService.getProducts().subscribe(
      (products) => {
        console.log(products);
        this.productsList = products;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  productDetails(productId) {
    this.router.navigate(['/product/', productId]);
  }
}
