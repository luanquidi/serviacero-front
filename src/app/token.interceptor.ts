import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError } from "rxjs/operators";
declare var $;

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  //Interceptor que permite añadir token a todas las peticiones http
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token: string = sessionStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'content-type': 'application/json',
    });

    const reqClone = req.clone({
      headers,
    });

    return next.handle(reqClone).pipe(catchError(this.manejarError));
  }

  manejarError(error: HttpErrorResponse) {
    console.log("Sucedio un error");
    console.warn(error);
    $("#ProcesoAjax").hide();
    return throwError("Error Personalizado");
  }
}
