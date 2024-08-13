import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private msalService: MsalService, private router: Router) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    const isLoggedIn = !!this.msalService.instance.getActiveAccount();
    if (!isLoggedIn) {
      this.router.navigate(['/login']); 
      return false;
    }
    return true;
  }
}
