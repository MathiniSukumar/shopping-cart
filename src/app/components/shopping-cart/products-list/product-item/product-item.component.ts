import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from 'src/app/model/product';
import { MessageService } from 'src/app/services/message.service';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Product;

  @Input() isAddedToWishlist: boolean;
  
  constructor(private messageService: MessageService, 
             private cartService: CartService,
             private router: Router,
             private wishlistService: WishlistService) { 

  }

  ngOnInit(): void {
  }

  addToCart() {    
    this.cartService.addProductToCart(this.productItem).subscribe(() => {
      console.log(this.productItem);
      this.messageService.sendMessage(this.productItem)
    })
    
  }

  deleteFromCart() {
    this.cartService.deleteProductFromCart(this.productItem).subscribe(() => {
      this.messageService.sendMessage(this.productItem)
    })     
  }

  handleAddToWishlist() {
     this.wishlistService.addToWishlist(this.productItem.id).subscribe(() => {
      this.isAddedToWishlist = true;
     })     
  }

  handleDeleteFromWishlist() {
    this.wishlistService.removeFromWishlist(this.productItem.id).subscribe(() => {
      this.isAddedToWishlist = false;
    })
    
  }

}
