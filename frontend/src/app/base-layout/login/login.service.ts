import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private authService: MsalService, private rotuer: Router) { }

  getPbiAccessToken = async() => {
    const tokenRequest: any = {
      account: this.authService.instance.getActiveAccount()
    };
    let accessTokenResponse: any = null;
    try{
      accessTokenResponse = await this.authService.acquireTokenSilent(tokenRequest).toPromise();
    }
    catch{
      this.rotuer.navigate(['/'])
    }
    return accessTokenResponse.accessToken;
  }

  getWebAccessToken = async() => {
    const tokenRequest: any = {
      account: this.authService.instance.getActiveAccount()
    };
    let accessTokenResponse: any = null;
    try{
      accessTokenResponse = await this.authService.acquireTokenSilent(tokenRequest).toPromise();
    }
    catch{
      this.rotuer.navigate(['/'])
    }    return accessTokenResponse.accessToken;
  }

  logout() {
    //this.authService.loginRedirect({ postLogoutRedirectUri: 'localhost:4200' });
  }
}
