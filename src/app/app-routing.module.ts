import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { aboutusComponent } from './components/aboutus/aboutus';
import { CartComponent } from './components/Cart/cart';
import { HomeComponent } from './components/home/home.component';
import { registerformComponent } from './components/Registerform/registerform';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: aboutusComponent },
  { path: 'registerform', component: registerformComponent},
  { path: 'cart', component: CartComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },    // default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
