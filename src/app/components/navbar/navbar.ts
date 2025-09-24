import { Component, HostListener, ElementRef, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent implements OnInit {
  companyname = 'GlowAura';
  name = '';
  value = '';
  isNavbarHidden = false;
  cartItemCount: number = 0;

  private lastScrollTop = 0;
  private scrollTimeout: any;

  constructor(
    private elRef: ElementRef,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    // Subscribe to cart count observable
    this.cartService.cartCount$.subscribe(count => {
      this.cartItemCount = count;
      this.animateCartIcon();
    });
  }

  clearName() {
    this.name = '';
  }

  clearValue() {
    this.value = '';
  }

  animateCartIcon() {
    const icon = this.elRef.nativeElement.querySelector('#cart-icon');
    if (icon) {
      icon.classList.add('cart-bounce');
      setTimeout(() => {
        icon.classList.remove('cart-bounce');
      }, 500);
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Hide/show navbar on scroll
    this.isNavbarHidden = scrollTop > this.lastScrollTop;

    // Reset hide timeout
    clearTimeout(this.scrollTimeout);
    this.scrollTimeout = setTimeout(() => {
      this.isNavbarHidden = false;
    }, 200);

    // Add/remove "scrolled" class for navbar glow
    const navElement = this.elRef.nativeElement.querySelector('.nav-tit-a');
    if (navElement) {
      if (scrollTop > 10) {
        navElement.classList.add('scrolled');
      } else {
        navElement.classList.remove('scrolled');
      }
    }

    this.lastScrollTop = Math.max(scrollTop, 0);
  }
}
