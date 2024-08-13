import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { PublicClientApplication, InteractionType } from '@azure/msal-browser';
import { MsalService, MsalGuard, MsalInterceptor, MSAL_INSTANCE, MSAL_GUARD_CONFIG, MSAL_INTERCEPTOR_CONFIG, MsalBroadcastService } from '@azure/msal-angular';
import { routes } from './app/app.routes';
import { LoginBlueprint } from './blueprints/login/login.blueprint';

function MSALInstanceFactory() {
  return new PublicClientApplication({
    auth: {
      clientId: '8ffa51ed-7c44-4aec-99b9-767009a2565a',
      authority: 'https://login.microsoftonline.com/6ebbe8c1-b195-4a1b-a6e6-7797203a8aa1',
      redirectUri: 'http://localhost:4200',
    }
  });
}

function MSALGuardConfigFactory() {
  const authMethod = LoginBlueprint.getLoginBlueprintData().metadata.authMethod;

  return {
    interactionType: authMethod === 'redirect' ? InteractionType.Redirect : InteractionType.Popup,
    authRequest: {
      scopes: ['user.read']
    }
  };
}

function MSALInterceptorConfigFactory() {
  const authMethod = LoginBlueprint.getLoginBlueprintData().metadata.authMethod;
  return {
    interactionType: authMethod === 'redirect' ? InteractionType.Redirect : InteractionType.Popup,
    protectedResourceMap: new Map([
      ['https://graph.microsoft.com/v1.0/me', ['user.read']]
    ])
  };
}

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(routes),
    { provide: MSAL_INSTANCE, useFactory: MSALInstanceFactory },
    { provide: MSAL_GUARD_CONFIG, useFactory: MSALGuardConfigFactory },
    { provide: MSAL_INTERCEPTOR_CONFIG, useFactory: MSALInterceptorConfigFactory },
    MsalService,
    MsalGuard,
    MsalBroadcastService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
    }
  ]
}).catch(err => console.error(err));
