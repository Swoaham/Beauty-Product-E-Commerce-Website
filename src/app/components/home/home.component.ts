import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/product.service';
import { Router, ActivatedRoute , NavigationEnd } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  showProducts: boolean = false;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

 ngOnInit(): void {
  this.router.events.subscribe(event => {
    if (event instanceof NavigationEnd) {
      const fragment = this.route.snapshot.fragment;
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
  }

  getProducts() {
    console.log("get pro");
    this.products = this.productService.getProducts();
    this.showProducts = true;
  }

  HideProducts() {
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
