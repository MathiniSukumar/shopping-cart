import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/model/cart-item'
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  checkOutItems = []
  cartTotal = 0

  constructor(private cartService: CartService,
              private router: Router) { }
              

  ngOnInit(): void {    
    this.loadCheckoutItems();  
  }

  loadCheckoutItems() {
    this.cartService.getCartItems().subscribe((items: CartItem[]) => {
       console.log(items);   
       this.checkOutItems = items;
       this.calculateCartTotal();
    })
  }

  calculateCartTotal() {
    this.cartTotal = 0
    this.checkOutItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }

  redirectToPayment() {
    this.router.navigate(['/payment']);
  }


}
