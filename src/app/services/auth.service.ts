import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

import { DataLogin, Login, userData } from '../interfaces/auth.interfaces';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _urlBase: string = environment.urlBase;
  public user!: User;

  constructor(private http: HttpClient) {}

  get getToken() {
    return localStorage.getItem('toke') || '';
  }
  get getHeaders() {
    const headers = new HttpHeaders({
      'x-token': this.getToken,
    });
    return headers;
  }
  get getUser() {
    return this.user;
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  login(data: Login): Observable<DataLogin> {
    return this.http.post<DataLogin>(`${this._urlBase}/login`, data).pipe(
      tap(({ token }) => {
        this.setToken(token);
      }),
      catchError((err) => throwError(() => err))
    );
  }

  validarToken(): Observable<userData> {
    return this.http
      .get<userData>(`${this._urlBase}/renovarToken`, {
        headers: this.getHeaders,
      })
      .pipe(
        tap(({ token, user }) => {
          this.setToken(token);
          this.user = new User(
            user.email,
            user.roel,
            user.id,
            '',
            user.nick,
            user.name,
            user.img || ''
          );
        })
      );
  }
}
