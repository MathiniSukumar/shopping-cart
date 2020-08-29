import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  providers: [ProductsService]
})
export class ProductDetailsComponent implements OnInit {

  id: number;
  products: Product[];
  private sub: any;

  prodIdSnapshot: number;

  constructor(private productService: ProductsService, private route: ActivatedRoute) {
     productService.getProducts().subscribe((products) => {
          this.products = products;
      });
  }

  ngOnInit() {
      
      this.sub = this.route.params.subscribe(params => {
          this.id = +params['id'];
      });
  }

  ngOnDestroy() {
      this.sub.unsubscribe();
  }

}
