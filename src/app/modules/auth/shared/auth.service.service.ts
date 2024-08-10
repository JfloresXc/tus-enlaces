import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@/environments/environment';
import { LoginPayload } from '../interfaces/log-in-payload.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private API_URL: string = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) { }

  public login({ user, password }: LoginPayload) {
    let url = `${this.API_URL}/Usuarios/login`;
    return this.http.post(url, { user, password });
  }

  public logout() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('username')
    this.router.navigateByUrl('/login');
  }
}
