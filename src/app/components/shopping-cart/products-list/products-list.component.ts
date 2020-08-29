import { Component, OnInit } from '@angular/core';

import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/model/product';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  productsList: Product[] = []
  wishlist: number[] = []

  constructor(private productsService: ProductsService,
              private wishlistService: WishlistService) { }

  ngOnInit(): void { 
     this.loadProducts();
     this.loadWishlist();
  }

  loadProducts() {
    this.productsService.getProducts().subscribe((products) => {
      this.productsList = products;
      }) 
  }

  loadWishlist() {
    this.wishlistService.getWishlist().subscribe(productId => this.wishlist = productId)
  }
}
