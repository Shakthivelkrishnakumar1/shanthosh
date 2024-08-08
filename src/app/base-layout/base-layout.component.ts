import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';

import { RouterOutlet } from '@angular/router';
import { BaseLayoutService } from './base-layout.service';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { LoginComponent } from "../pages/login/login.component";

@Component({
  selector: 'app-base-layout',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, LoginComponent],
  providers:[HttpClient,Store],
  templateUrl: './base-layout.component.html',
  styleUrl: './base-layout.component.scss'
})
export class BaseLayoutComponent {
  isUserLoggedIn: boolean = false;
  isLoaded: boolean = false;
  isLoadedObservable: any
  retailerData: any = [];
  profile?: any;
  profilePic?: any;
  switchingProfile: boolean = false;
}
