import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';
import { BaseComponent } from './layout/base/base.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: BaseComponent, children: [
    { path: '', component: HomeComponent }
  ]},
  { path: '**', redirectTo: '' }
];
