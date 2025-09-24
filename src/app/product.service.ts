 
import { Injectable } from '@angular/core';
import {Product} from './product'
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService{

    apiUrl = "https://687ce469918b642243305fb8.mockapi.io/products";

    constructor(private http: HttpClient){}
 

    public  getProducts() {
        console.log("test");
        
        this.http.get(this.apiUrl).subscribe({
            next: (data) => {
                console.log(data);
            }
        })
 

        let products:Product[];
 
        products=[
            new Product(1,'lipstick',500),
            new Product(2,'Eyeliner',750),
            new Product(3,'Foundation',100)
        ]
 
        return products;               
    }
}