import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { delay, interval, Observer } from 'rxjs';
import { DataLogin } from 'src/app/interfaces/auth.interfaces';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public errorIngreso: boolean = false;
  public msgError!: string;
  private _observer: Observer<DataLogin> = {
    next: (resp) => {
      this.router.navigateByUrl('home/inicio/init');
    },
    error: (err) => {
      this.errorIngreso = true;
      this.msgError = err.error.msg;
      setTimeout(() => {
        this.errorIngreso = false;
      }, 7000);
    },
    complete: () => {},
  };

  public loginForm: FormGroup = this.fb.group({
    email: [, [Validators.required, Validators.email]],
    password: [, Validators.required],
  });
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}

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

  login() {
    this.auth
      .login(this.loginForm.value)
      .pipe(delay(300))
      .subscribe(this._observer);
  }

  getError(campo: string): boolean {
    // TODO: Buscar la manera de validar el error que esta apareciendo para tener mensajes dinamicos
    // if (this.loginForm.get(campo)?.errors) {
    //   const errores = this.loginForm.get(campo)?.errors;
    //   console.log(errores);
    // }
    // console.log(this.loginForm.validator());
    return this.loginForm.get(campo)?.invalid &&
      this.loginForm.get(campo)?.touched
      ? true
      : false;
  }

  pathRegistro() {
    console.log('redirigiendo');
    this.router.navigateByUrl('ingreso/auth/registerAventure');
  }
}
