import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {

  //products$ is observable
  products$: Observable<Product[]>;

  //A Subject is both a source of observable values and an Observable itself. 
  // You can subscribe to a Subject as you would any Observable.
  private searchTerms = new Subject<string>();

  constructor(private productService: ProductService) { }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.products$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      // switchMap() preserves the original request order while returning 
      // only the observable from the most recent HTTP method call. Results 
      // from prior calls are canceled and discarded.
      switchMap((term: string) => this.productService.searchProducts(term)),
    );

  }


}