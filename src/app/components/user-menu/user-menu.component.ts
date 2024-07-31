import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
})
export class UserMenuComponent {
  showMenu = false;

  constructor(private msalService: MsalService, private router: Router, library: FaIconLibrary) {
    library.addIconPacks(fas);
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  logout() {
    this.msalService.logoutRedirect({
      postLogoutRedirectUri: 'http://localhost:4200' // Redirect URI after logout
    });
  }
}