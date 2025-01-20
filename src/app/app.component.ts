import { Component } from '@angular/core';
import { PopupComponent } from './popup/popup.component';

@Component({
  selector: 'app-root',
  imports: [PopupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isPopupVisible = false;
  isLoginFormVisible = true;

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
}
