import { Component } from '@angular/core';
import { PopupComponent } from './popup/popup.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [PopupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isPopupVisible = false;
  isLoginFormVisible = true;

  constructor(private http: HttpClient) {}  // Inject HttpClient

  // Method to show the popup and the login form
  showLoginPopup() {
    this.isPopupVisible = true;
    this.isLoginFormVisible = true;
  }

  // Method to close the popup
  closePopup() {
    this.isPopupVisible = false;
  }

  // Method to switch to the Register form
  switchToRegisterForm() {
    this.isLoginFormVisible = false;
  }

  // Method to switch to the Login form
  switchToLoginForm() {
    this.isLoginFormVisible = true;
  }

   // Handle form submission with actual API login logic
   handleLoginSubmit(event: Event) {
    event.preventDefault(); // Prevent form from submitting to the server

    const email = (document.querySelector('input[type="email"]') as HTMLInputElement).value;
    const password = (document.querySelector('input[type="password"]') as HTMLInputElement).value;

    // Prepare the request payload
    const payload = {
      email: email,
      password: password
    };
// Make the HTTP request to the login API
this.http.post('http://127.0.0.1:8000/login', payload)
.subscribe(
  (response: any) => {
    // Handle successful login
    if (response && response.token) {  // Assuming the response contains a token
      alert('Login successful!');
      this.closePopup(); // Close the popup after successful login
    } else {
      alert('Invalid email or password. Please try again.');
    }
  },
  (error) => {
    // Handle error response
    console.error('Login failed', error);
    alert('An error occurred. Please try again.');
  }
);
}
}
