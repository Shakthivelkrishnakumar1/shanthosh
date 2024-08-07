import { Injectable } from '@angular/core';
import { PublicClientApplication, AuthenticationResult, SilentRequest, PopupRequest, RedirectRequest } from '@azure/msal-browser';
import { MSALInstanceFactory } from '../msal/msal-instance.factory';

@Injectable({
  providedIn: 'root'
})
export class MsalService {
  private msalInstance = MSALInstanceFactory.createInstance();

  constructor() {}

  loginPopup(request: PopupRequest): Promise<AuthenticationResult> {
    return this.msalInstance.loginPopup(request);
  }

  loginRedirect(request: RedirectRequest): Promise<void> {
    return this.msalInstance.loginRedirect(request);
  }

  handleRedirectCallback(): void {
    this.msalInstance.handleRedirectPromise().then((response: AuthenticationResult | null) => {
      if (response) {
        console.log('Redirect login successful', response);
      }
    }).catch(error => {
      console.error(error);
    });
  }

  logout(): Promise<void> {
    return this.msalInstance.logoutPopup();
  }

  isAuthenticated(): boolean {
    const accounts = this.msalInstance.getAllAccounts();
    return accounts.length > 0;
  }

  getActiveAccount() {
    return this.msalInstance.getActiveAccount();
  }

  setActiveAccount() {
    const accounts = this.msalInstance.getAllAccounts();
    if (accounts.length > 0) {
      this.msalInstance.setActiveAccount(accounts[0]);
    }
  }
}
