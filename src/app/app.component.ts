import { Component ,OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'beautyproduct';
  
  constructor(private router: Router) {}

  ngOnInit(): void {
    const redirectPath = sessionStorage.getItem('redirect');
    if (redirectPath) {
      sessionStorage.removeItem('redirect');
      // navigate using Angular router
      this.router.navigateByUrl(redirectPath);
    }
  }
  
}
