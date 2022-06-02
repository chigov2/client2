import { Injectable } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {TokenStorageService} from "../service/token-storage.service";
import {Observable} from "rxjs";


const TOKEN_HEADER_KEY = 'Authorization';

// сервис, которій будет каждій раз подставлять токен
@Injectable({
  providedIn: 'root'
})
//для подставления токена имплементируем
export class AuthInterceptorService implements HttpInterceptor{

  //инжекция сервиса
  constructor(private tokenService: TokenStorageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authRequest = req;
    const token = this.tokenService.getToken();
    if (token != null) {
      //при каждом запросе подставляется в header
      authRequest = req.clone({headers: req.headers.set(TOKEN_HEADER_KEY, token)});
    }
    return next.handle(authRequest);
  }
}

export const authInterceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}
];
