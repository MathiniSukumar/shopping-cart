import { Component, OnInit, IterableDiffers } from '@angular/core';
import { MessageService } from 'src/app/services/message.service'
import { Product } from 'src/app/model/product'
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/model/cart-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems = []
  cartTotal = 0

  constructor(private messageService: MessageService, 
              private cartService: CartService,
              private router: Router) { }

  ngOnInit(): void {
     this.handleSubscription();
     this.loadCartItems(); 
    }

  handleSubscription() {
    this.messageService.getMessage().subscribe((product: Product) => {      
      this.loadCartItems();               
    })
  }

  loadCartItems() {
    this.cartService.getCartItems().subscribe((items: CartItem[]) => {     
       this.cartItems = items;
       this.calculateCartTotal();
    })
  }

  calculateCartTotal() {
    this.cartTotal = 0
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }

  redirectToCheckout() {
    this.router.navigate(['/checkout']);
  }

}
