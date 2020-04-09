import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { Authservice } from './Auth-service';



@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector:Injector) { }

  intercept(req,next){
    let authService=this.injector.get(Authservice)
    let token=authService.getToken()
    let tokenizedReq = req.clone( {
      headers: req.headers.set('Authorization', 'bearer ' + token)
    })
    return next.handle(tokenizedReq)
  }
}
