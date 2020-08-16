import { Component, OnInit, Input } from '@angular/core';

import { Product } from 'src/app/model/product';
import { MessageService } from 'src/app/services/message.service';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Product
  
  constructor(private messageService: MessageService, 
             private cartService: CartService,
             private router: Router) { 

  }

  ngOnInit(): void {
  }

  addToCart() {
    this.cartService.addProductToCart(this.productItem).subscribe(() => {
      this.messageService.sendMessage(this.productItem)
    })
    
  }

  redirectToViewDetails() {
    this.messageService.sendMessage(this.productItem);
    this.router.navigate(['/product-details']);
  }

}
