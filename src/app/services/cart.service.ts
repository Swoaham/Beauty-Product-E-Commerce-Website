import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];
  private cartItemCount = new BehaviorSubject<number>(0);

  cartCount$ = this.cartItemCount.asObservable(); // components can subscribe to this

  constructor() {
    const storedCart = localStorage.getItem('cart');
    this.cartItems = storedCart ? JSON.parse(storedCart) : [];
    this.cartItemCount.next(this.cartItems.length);
  }

  addToCart(product: any) {
    this.cartItems.push(product);
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
    this.cartItemCount.next(this.cartItems.length);
  }

  getCartItems() {
    return [...this.cartItems]; // return a copy
  }

  clearCart() {
    this.cartItems = [];
    localStorage.removeItem('cart');
    this.cartItemCount.next(0);
  }

  removeFromCart(index: number) {
  this.cartItems.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(this.cartItems));
  this.cartItemCount.next(this.cartItems.length);
}
}
