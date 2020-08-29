import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/model/product';
@Pipe({
  name: 'selectedProducts'
})
export class SelectedProductsPipe implements PipeTransform {

  transform(allProducts: Product[], productId: number): any {
    return allProducts.filter(p => p.id === productId);
}

}
