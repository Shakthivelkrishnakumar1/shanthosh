import { Component } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult, BrowserAuthError } from '@azure/msal-browser';

@Component({
  selector: 'app-msal-auth',
  template: '',
  standalone: true
})
export class MsalAuthComponent {
  constructor(private msalService: MsalService) {}

  async signInWithMicrosoft() {
    try {
      console.log('Clearing cache before login...');
      this.clearCache();

      if (this.isInteractionInProgress()) {
        console.log('Interaction is still in progress, retrying after delay...');
        await this.delay(2000);
      }

      if (this.isInteractionInProgress()) {
        console.error('Interaction in progress, aborting login');
        throw new Error('Interaction in progress');
      }

      const result: AuthenticationResult | undefined = await this.msalService.loginPopup().toPromise();
      if (result) {
        this.msalService.instance.setActiveAccount(result.account);
        return result;
      } else {
        console.log('No result from loginPopup');
        throw new Error('No result from loginPopup');
      }
    } catch (error) {
      if (error instanceof BrowserAuthError && error.errorCode === 'interaction_in_progress') {
        console.error('Interaction in progress error:', error);
      } else {
        console.error('Login error:', error);
      }
      throw error;
    }
  }

  clearCache() {
    console.log('Clearing localStorage and sessionStorage...');
    const msalKeys = Object.keys(localStorage).filter(key => key.includes('msal'));
    msalKeys.forEach(key => localStorage.removeItem(key));

    const sessionMsalKeys = Object.keys(sessionStorage).filter(key => key.includes('msal'));
    sessionMsalKeys.forEach(key => sessionStorage.removeItem(key));

    console.log('Cache cleared');
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  isInteractionInProgress() {
    const keys = [...Object.keys(localStorage), ...Object.keys(sessionStorage)];
    return keys.some(key => key.includes('interaction_status'));
  }
}
