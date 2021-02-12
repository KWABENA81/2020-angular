import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  //selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle = 'Product Detail';
  product: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
