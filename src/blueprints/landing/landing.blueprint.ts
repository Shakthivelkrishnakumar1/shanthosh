export interface LandingConfig {
    showWelcome: boolean;
    showLogin: boolean;
    backgroundImage: string;
    logos: string[];
    welcomeText: string;
    loginButtonText: string;
  }
  
  export const defaultLandingConfig: LandingConfig = {
    showWelcome: true,
    showLogin: false,
    backgroundImage: 'https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZW1wdHklMjBvZmZlfGVufDB8fDB8fHx8fDA%3D',
    logos: [
      'https://media.licdn.com/dms/image/C4E0BAQHezipI1sPADg/company-logo_200_200/0/1674655694728/thorogood_logo?e=2147483647&v=beta&t=2BtqYWl2oj6_y4gdaCGsa9mhsJN8YQZbnFemnb3cGbk',
      'https://miro.medium.com/v2/resize:fit:1200/1*4sz5Fh2lrvlt68kVoj6PQQ.png'
    ],
    welcomeText: 'Text line 1 placeholder',
    loginButtonText: 'Login/Signup'
  };
  
  