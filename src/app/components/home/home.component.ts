import { Component } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/product.service';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
products: Product[] = [];
  showProducts: boolean = false;
 
   constructor(private productService: ProductService ){
   }

  //   ngOnInit(): void {
  //   // Optionally load on page load
  //   this.getProducts();
  // }
 
   getProducts() {
     console.log("get pro");
     
     this.products=this.productService.getProducts();
     this.showProducts = true;
   }

   HideProducts(){

    this.showProducts = false;
   }

   addToCart(productName: string) {
  let cart = JSON.parse(localStorage.getItem('cart') || '[]');
  cart.push({ name: productName });
  localStorage.setItem('cart', JSON.stringify(cart));

  // Update cart item count
  localStorage.setItem('cartItemCount', cart.length.toString());

  // Optionally trigger bounce animation or update UI
  console.log(`${productName} added to cart`);
}

}
