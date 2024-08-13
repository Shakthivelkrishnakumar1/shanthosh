import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MsalService, MsalBroadcastService } from '@azure/msal-angular';
import { AuthenticationResult, InteractionStatus } from '@azure/msal-browser';
import { BaseLayoutService } from '../../base-layout/base-layout.service';
import { HeaderComponent } from "../../base-layout/header/header.component";
import { LoginBlueprint } from '../../../blueprints/login/login.blueprint';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, HeaderComponent, HomeComponent]
})
export class LoginComponent implements OnInit {
  loginBlueprint: any;
  usePopup: boolean; 

  constructor(
    private msalService: MsalService,
    private msalBroadcastService: MsalBroadcastService,
    private baseLayoutService: BaseLayoutService,
    private router: Router
  ) {
    this.loginBlueprint = LoginBlueprint.getLoginBlueprintData();
    this.usePopup = this.loginBlueprint.metadata.authMethod === 'popup';
  }

  ngOnInit(): void {
    this.baseLayoutService.setPageLevelMetadata(this.loginBlueprint.pageCode);

    // Check if user is already authenticated
    this.msalBroadcastService.inProgress$.subscribe((status: InteractionStatus) => {
      if (status === InteractionStatus.None) {
        const activeAccount = this.msalService.instance.getActiveAccount();
        if (activeAccount) {
          this.router.navigate(['/home']);
        }
      }
    });
  }

  login(): void {
    if (this.usePopup) {
      this.msalService.loginPopup({
        scopes: ['user.read']
      }).subscribe({
        next: (result: AuthenticationResult) => {
          console.log('Authentication result (popup):', result);
          this.baseLayoutService.setLoaded(true);
          this.router.navigate(['/home']);
        },
        error: (error) => {
          console.error('Authentication error (popup):', error);
        }
      });
    } else {
      this.msalService.loginRedirect({
        scopes: ['user.read']
      });

      this.msalService.instance.handleRedirectPromise().then((result: AuthenticationResult | null) => {
        if (result) {
          console.log('Authentication result (redirect):', result);
          this.baseLayoutService.setLoaded(true);
          this.router.navigate(['/home']);
        }
      }).catch(error => {
        console.error('Authentication error (redirect):', error);
      });
    }
  }
}
