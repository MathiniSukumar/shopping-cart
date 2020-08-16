import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './components/shopping-cart/cart/checkout/checkout.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { PaymentComponent } from './components/shopping-cart/cart/payment/payment.component';
import { ProductDetailsComponent } from './components/shopping-cart/products-list/product-details/product-details.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'shoppingCart'},
  { path: 'shoppingCart', component: ShoppingCartComponent},
  { path: 'checkout', component: CheckoutComponent},
  { path: 'payment', component: PaymentComponent},
  { path: 'product-details', component: ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
