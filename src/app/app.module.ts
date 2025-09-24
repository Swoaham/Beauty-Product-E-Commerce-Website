import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar';
import { carouselComponent } from './components/carousel/carousel'; 
import { groupcompanies } from './components/groupcompanies/groupcompanies';
import { cardsComponent } from './components/crads/cards'; 
import { FooterComponent } from './components/Ffooter/Foot';
import { AppRoutingModule } from './app-routing.module';
import { aboutusComponent } from './components/aboutus/aboutus';
import { HomeComponent } from './components/home/home.component';
import { registerformComponent } from './components/Registerform/registerform';
import { gridsComponent } from './components/grids/grids';
import { ZSectionsComponent } from './components/z-sections/z-sections.component';
import { CartComponent } from './components/Cart/cart';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    carouselComponent,
    cardsComponent,
    FooterComponent,
    aboutusComponent,
    HomeComponent,
    registerformComponent,
    gridsComponent,
    ZSectionsComponent,
    groupcompanies,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
