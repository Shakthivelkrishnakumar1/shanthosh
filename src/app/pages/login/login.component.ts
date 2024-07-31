// login.component.ts
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class LoginComponent {
  @Output() onLoginSuccess = new EventEmitter<void>();

  loading: boolean = false;
  loginError: boolean = false;

  constructor(private msalService: MsalService) {}

  async login() {
    this.loading = true;
    try {
      // Ensure MSAL instance is initialized before calling loginPopup
      const result: AuthenticationResult | undefined = await this.msalService.loginPopup().toPromise();
      if (result) {
        this.msalService.instance.setActiveAccount(result.account);
        console.log('Access Token:', result.accessToken); // Log the access token
        this.loading = false;
        this.loginError = false;
        this.onLoginSuccess.emit();
      } else {
        this.loading = false;
        this.loginError = true;
      }
    } catch (error) {
      this.loading = false;
      this.loginError = true;
      console.error(error);
    }
  }
}
