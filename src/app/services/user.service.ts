import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
declare var $;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token: string;
  baseUrl = (window.location.hostname === 'localhost') ? 'http://localhost:3977' : 'https://serviacero-api.herokuapp.com';
  constructor(
    private http: HttpClient,
    private router: Router,
    private alertService: ToastrService
  ) {
    this.token = sessionStorage.getItem('token') ? sessionStorage.getItem('token') : '';
   }

  login(user: any): Observable<any> {
    const url = `${this.baseUrl}/api/login/login-user`;

    $('#ProcesoAjax').show();
    return this.http.post(url, user).pipe(
      map(
        (res: any) => {
          $('#ProcesoAjax').hide();
          return res;
        }
      ),
      catchError(
        (error: any) => {
          this.alertService.error(error.error.message);
          $('#ProcesoAjax').hide();
          return error;
        }
      )
    );
  }

  logout(): void {
    // Limpiar sesion
    sessionStorage.clear();
    this.router.navigate(['/login']);
    this.token = null;
  }

  verificarSesion(): boolean {
    return (!this.token) ? false : true;
  }
}
