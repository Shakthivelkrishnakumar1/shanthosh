import { Routes } from '@angular/router';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { HomeComponent } from './base-layout/home/home.component';
import { MsalGuard } from '@azure/msal-angular';
import { LoginComponent } from './base-layout/login/login.component';

export const routes: Routes = [
  { path: '', component: BaseLayoutComponent, canActivate: [MsalGuard] },
  { path: 'home', component: HomeComponent, canActivate: [MsalGuard] },
  { path: 'login', component: LoginComponent }
];
