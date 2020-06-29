import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/shared/services/data.service';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  productDetails: Product;
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.getDetails();
  }

  getDetails() {
    this.route.params.subscribe((params) => {
      console.log(params);
      this.getProductById(parseInt(params.id));
    });
  }

  getProductById(id) {
    this.dataService.getProductById(id).subscribe((product) => {
      this.productDetails = product;
      console.log(this.productDetails);
    });
  }
}
