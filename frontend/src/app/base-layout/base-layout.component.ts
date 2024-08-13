import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';
import { BaseLayoutService } from './base-layout.service';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { LoginComponent } from './login/login.component';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-base-layout',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, LoginComponent],
  providers:[HttpClient, Store],
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent {
  isUserLoggedIn: boolean = false;
  isLoaded: boolean = false;

  constructor(private msalService: MsalService) {
    this.isUserLoggedIn = !!this.msalService.instance.getActiveAccount();
  }
}
