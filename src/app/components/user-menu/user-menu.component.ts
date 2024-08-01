import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { MsalService } from '@azure/msal-angular';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

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

  signOut() {
    console.log('Initiating logout...');
    this.msalService.logoutPopup({
      postLogoutRedirectUri: 'http://localhost:4200'
    }).pipe(
      catchError(error => {
        console.error('Logout error:', error);
        return of();
      })
    ).subscribe({
      next: () => {
        console.log('Logged out successfully, redirecting...');
        setTimeout(() => {
          console.log('Redirecting to landing page...');
          this.router.navigate(['/']);
        }, 100);
      },
      error: (error) => {
        console.error('Logout error:', error);
      }
    });
  }
  
}
