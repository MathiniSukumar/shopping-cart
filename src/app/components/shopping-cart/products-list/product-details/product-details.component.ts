import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  productDetails: Product

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.loadProductDetails();
  }

  loadProductDetails() {
    alert("Mathini");
    this.messageService.getMessage().subscribe((product: Product) => {  
      console.log(product);     
      this.productDetails = product;
    });
  }

}
