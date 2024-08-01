import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  standalone: true,
  imports: [LoginComponent, CommonModule]
})
export class LandingComponent {
  showWelcome: boolean = true;
  showLogin: boolean = false;
  popupOpen: boolean = false;

  constructor(private router: Router) {}

  toggleLogin(show: boolean) {
    this.showWelcome = !show;
    this.showLogin = show;
  }

  backgroundClick(event: MouseEvent) {
    if (this.showLogin && !this.popupOpen) {
      this.toggleLogin(false);
    }
  }

  contentClick(event: MouseEvent) {
    event.stopPropagation();
  }

  onLoginPopupOpened() {
    this.popupOpen = true;
  }

  onLoginSuccess() {
    console.log('Login successful, navigating to /home');
    this.router.navigate(['/home']);
  }
}
