import { Component, OnInit } from '@angular/core';
import BaseLa

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
