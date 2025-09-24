import { Component, EventEmitter, Output } from "@angular/core";
import { CartService } from "src/app/services/cart.service";
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: "grids",   // <navbar></navbar>
  templateUrl: "./grids.html", // <navbar></navbar>  
  styleUrls: ["./grids.css"], // <navbar></navbar>  
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class gridsComponent {
   
   @Output() addProductToCart = new EventEmitter<string>();

products = [
  {
    name: 'Velvet Matte Lipstick – Long-lasting and hydrating color.',
    price: 120,
    image: 'https://assets.ajio.com/medias/sys_master/root/20230927/hsvu/65146ffdddf77915190b17eb/-473Wx593H-4938604970-230nmacaroon-MODEL.jpg'
  },
  {
    name: 'Hydrating Face Moisturizer – For smooth, glowing skin all day.',
    price: 350,
    image: 'https://thesolvedskin.com/cdn/shop/files/Moisturiser_a3d3e0f5-4f29-4d69-a95c-9a787610730f.jpg?v=1718697353&width=1100'
  },
  {
    name: 'Vitamin C Serum – Brightens complexion & fades dark spots.',
    price: 90,
    image: 'https://www.juhst.com/cdn/shop/files/clipboard-image-1752144847.webp?v=1752144883&width=960'
  },
  {
    name: 'Silk Finish Foundation – Full coverage with natural finish.',
    price: 450,
    image: 'https://sabnatural.com/cdn/shop/files/3525801659068_1_713x.jpg?v=1750247613'
  },
  {
    name: 'Clay Detox Mask – Deep cleansing and pore tightening.',
    price: 180,
    image: 'https://viahbeauty.com/cdn/shop/files/Rectangle614.png?v=1732539515&width=1080'
  },
  {
    name: 'SPF 50+ Sunscreen – Lightweight & water-resistant protection.',
    price: 220,
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQgq7PCq9k9ZieVpIy9BoZRsXSsSaFpr7cI7hVb4rImhKXmQHJOlz82mcPVinCeXI5Ij4BJf4NVKYquqbnKwECQmzT03nmAn4dStAnVvrLNMjHHCVpo_qXpfqM'
  },
  {
    name: 'Floral Eau de Parfum – Elegant scent that lasts all day.',
    price: 799,
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQMhYExAsgsvEMGiAQw8zu4koDQk8rUcle29NTAn5vhFyqj6Khj7Scul6biFKFKnGDW16o_sqGLdI_-gEv91aByAwA68ZD7fwO4uwsfuJntsyHjxDGgnlZE-Jo'
  },
  {
    name: 'Gentle Foaming Cleanser – Removes makeup & impurities gently.',
    price: 199,
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQMhYExAsgsvEMGiAQw8zu4koDQk8rUcle29NTAn5vhFyqj6Khj7Scul6biFKFKnGDW16o_sqGLdI_-gEv91aByAwA68ZD7fwO4uwsfuJntsyHjxDGgnlZE-Jo'
  },
  {
    name: 'Natural Blush – Soft pigment for a radiant flush.',
    price: 160,
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRxzPRk6UYg2zTp8AOmttqGddY1I8RrqN3eq9rhLuCXowhQ1h_3Orbr4byIRkHRPh9nwSuneRBbM4Dx9u-jdxaKvG8KbqiagHgy-H6PWElyB2BRmiJXE7yIn8I'
  },
  {
    name: 'Revitalizing Eye Cream – Reduces puffiness and fine lines.',
    price: 280,
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTIW1U6UdSrg1uhQtk6WXCfXcMvBMczyfTrl0BY9qfSH4OPlNyeEH5YTBrr5psP7XKyIupfrKqPOlTkA_ay7qitUhqnTeOxxLCKzMuB4IL-AKUawmIjMtMU'
  },
  {
    name: 'Micellar Water – Gently removes makeup without rinsing.',
    price: 170,
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS6n-HS6fHnDC5e9tMcPd4m-eLglYyytG4_LJnRcEY63ZzLxreudzczBNBd2H-r2x0bsFQaC80Brpr8Gpq6nw_r7xH0fk_Igo3M66ljJ8pCSmJqBybgvqnvsws'
  },
  {
    name: 'Nourishing Lip Balm – Heals and hydrates dry lips.',
    price: 90,
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS6n-HS6fHnDC5e9tMcPd4m-eLglYyytG4_LJnRcEY63ZzLxreudzczBNBd2H-r2x0bsFQaC80Brpr8Gpq6nw_r7xH0fk_Igo3M66ljJ8pCSmJqBybgvqnvsws'
  }
];

  showToast = false;

  constructor(private cartService: CartService) {}

  sendToCart(productName: string) {
    const product = this.products.find(p => p.name === productName);
    if (product) {
      this.cartService.addToCart(product);
      this.showCelebrationToast();
    }
  }

  showCelebrationToast() {
    this.showToast = true;
    setTimeout(() => {
      this.showToast = false;
    }, 2000); // Hide after 2 seconds
  }
  

}