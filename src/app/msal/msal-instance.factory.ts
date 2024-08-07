import { PublicClientApplication, Configuration } from '@azure/msal-browser';

export class MSALInstanceFactory {
  private static instance: PublicClientApplication;

  static createInstance(): PublicClientApplication {
    if (!this.instance) {
      const config: Configuration = {
        auth: {
          clientId: '8ffa51ed-7c44-4aec-99b9-767009a2565a',
          authority: 'https://login.microsoftonline.com/6ebbe8c1-b195-4a1b-a6e6-7797203a8aa1',
          redirectUri: 'http://localhost:4200'
        }
      };
      this.instance = new PublicClientApplication(config);
    }
    return this.instance;
  }
}
