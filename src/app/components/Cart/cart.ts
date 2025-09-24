import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.html',
  styleUrls: ['./cart.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart() {
    const cart = localStorage.getItem('cart');
    this.cartItems = cart ? JSON.parse(cart) : [];
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }

  removeItem(index: number): void {
    this.cartItems.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
    localStorage.setItem('cartItemCount', this.cartItems.length.toString());
  }

  clearCart(): void {
    this.cartItems = [];
    this.cartService.clearCart();
    localStorage.removeItem('cart');
    localStorage.removeItem('cartItemCount');
  }
}
