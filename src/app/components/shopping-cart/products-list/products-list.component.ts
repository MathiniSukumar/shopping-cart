import { Component, OnInit } from '@angular/core';

import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  productsList: Product[] = []

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void { 
    this.productsService.getProducts().subscribe((products) => {
    this.productsList = products;
    })   
  }
}
