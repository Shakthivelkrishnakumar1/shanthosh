import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component'; 
import { Profile } from '../profile.model';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-base-layout',
  standalone: true,
  imports: [HeaderComponent,RouterOutlet],
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
