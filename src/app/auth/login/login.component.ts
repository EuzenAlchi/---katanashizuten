import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  mostrarLogin() {
    const loginButton = document.querySelector('#login-button');
    const loginContainer = document.querySelector('#login-container');
    console.log('mostrando login');
    loginButton?.classList.add('animate__fadeOut');
    loginContainer?.classList.add('animate__fadeInDown');
    setTimeout(() => {
      loginContainer?.classList.remove('ocultar');
    }, 1000);
  }
}
