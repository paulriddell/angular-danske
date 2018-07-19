import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
 //Input property passed from parent component, Requires "Input" from @angular/core
  // Input decorator make the product property available for binding by the external ProductsComponent
  @Input() product: Product;

  constructor(private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location) {

  }

  ngOnInit() {
    this.getProduct();
  }

  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id)
      .subscribe(product => this.product = product);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.productService.updateProduct(this.product)
      .subscribe(() => this.goBack());
  }

}
