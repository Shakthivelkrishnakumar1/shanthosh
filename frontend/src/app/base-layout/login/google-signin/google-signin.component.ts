import { Component, EventEmitter, Output } from '@angular/core';

declare global {
  interface Window {
    google: any;
  }
}

@Component({
  standalone:true,
  selector: 'app-google-signin',
  templateUrl: './google-signin.component.html',
  styleUrls: ['./google-signin.component.scss'],
})
export class GoogleSigninComponent {
  @Output() loginWithGoogle: EventEmitter<any> = new EventEmitter<any>();

  createFakeGoogleWrapper = () => {
    const googleLoginWrapper = document.createElement('div');
    googleLoginWrapper.style.display = 'none';
    googleLoginWrapper.classList.add('custom-google-button');
    document.body.appendChild(googleLoginWrapper);
    
    window.google.accounts.id.renderButton(googleLoginWrapper, {
      type: 'icon',
      width: '200',
    });
  
    window.google.accounts.id.initialize({
      client_id: '772900034161-arv763khkvh0tgcg2ev4lk5jl897vr01.apps.googleusercontent.com', // Replace with your Google client ID
      callback: (response: any) => {
        this.handleGoogleSignInResponse(response);
      },
    });
  
    const googleLoginWrapperButton = googleLoginWrapper.querySelector(
      'div[role=button]'
    ) as HTMLElement;
  
    return {
      click: () => {
        googleLoginWrapperButton?.click();
      },
    };
  };

  handleGoogleSignInResponse(response: any) {
    if (response.credential) {
      // Sign-in was successful
      // You can access the Google ID token or profile information here
      const idToken = response.credential;
      console.log('Sign-In Successful! Token:', idToken);
      console.log('it is successful');
  
      // Emit the result to parent components or services
      this.loginWithGoogle.emit({
        success: true,
        token: idToken,
        // Include additional user info if needed
      });
    } else {
      // Sign-in was not successful
      console.error('Sign-In Failed or No Credential Received');
      this.loginWithGoogle.emit({
        success: false,
        error: 'Sign-In Failed',
      });
    }
  }
  

  handleGoogleLogin() {
    this.loginWithGoogle.emit(this.createFakeGoogleWrapper());
  }
}