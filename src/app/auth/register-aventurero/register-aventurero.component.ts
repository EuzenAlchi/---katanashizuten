import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { interval, Observer } from 'rxjs';
import { DataRegister } from 'src/app/interfaces/auth.interfaces';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-aventurero',
  templateUrl: './register-aventurero.component.html',
  styleUrls: ['./register-aventurero.component.css']
})
export class RegisterAventureroComponent implements OnInit {
  public errorRegistro: boolean = false;
  public msgError!: string;
  private __observer: Observer<DataRegister> = {
    next: (resp) => {
      console.log(resp);
    },
    error: (err) => {
      this.errorRegistro = true;
      this.msgError = err.error.msg;
      setTimeout(() => {
        this.errorRegistro = false;
      }, 7000);
    },
    complete: () => {},
  };

  public registerForm: FormGroup = this.fb.group({
    email: [, [Validators.required, Validators.email]],
    password: [, Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  mostrarRegister() {
    const registerButton = document.querySelector('#register-button');
    const registerContainer = document.querySelector('#register-container');
    console.log('mostrando register');
    registerButton?.classList.add('animate_fadeOut');
    registerContainer?.classList.add('animate_fadeInDown');
    setTimeout(() => {
      registerContainer?.classList.remove('ocultar');
    }, 1000);
  }

  register() {
    this.auth.register(this.registerForm.value).subscribe(this.__observer);
  }

  getError(campo: string): boolean {
    // TODO: Buscar la manera de validar el error que esta apareciendo para tener mensajes dinamicos
    // if (this.registerForm.get(campo)?.errors) {
    //   const errores = this.registerForm.get(campo)?.errors;
    //   console.log(errores);
    // }
    return this.registerForm.get(campo)?.invalid &&
      this.registerForm.get(campo)?.touched
      ? true
      : false;
  }

  pathLogin() {
    console.log('redirigiendo');
    this.router.navigateByUrl('ingreso/auth/login');
  }

}
