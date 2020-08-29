import { Injectable } from '@angular/core';
import { wishlistUrl } from 'src/app/config/api';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private httpclient: HttpClient) { }

  getWishlist() {
    return this.httpclient.get(wishlistUrl).pipe(
      map((result: any[]) => {
        let productId = []
        result.forEach(item => productId.push(item.id))
        return productId;
      })
    )
  }

  addToWishlist(productId) {
    return this.httpclient.post(wishlistUrl, {id: productId})

  }

  removeFromWishlist(productId) {
    return this.httpclient.delete(wishlistUrl + '/' + productId);
  }
}
