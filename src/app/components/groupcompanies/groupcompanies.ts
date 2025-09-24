import { Component, AfterViewInit } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/product.service';

declare var $: any;

@Component({
  selector: 'groupcompanies',
  templateUrl: './groupcompanies.html',
  styleUrls: ['./groupcompanies.css']
})
export class groupcompanies implements AfterViewInit {
products: Product[] = [];
  showProducts: boolean = false;
 
   constructor(private productService: ProductService ){
   }

  ngAfterViewInit(): void {
    // Delay to ensure DOM is ready
    setTimeout(() => {
      $('.trt-sldr').slick({
        slidesToShow: 5,
        slidesToScroll: 0,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        cssEase:"ease",
        centerMode: true,
        centerPadding: '20px',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
            }
          }
        ]
      });
    }, 0);
  }
 
}
