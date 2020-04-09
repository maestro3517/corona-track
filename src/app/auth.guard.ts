import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Authservice } from 'src/service/Auth-service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: Authservice, private router: Router) { }

  canActivate():boolean{
    if(this.auth.loggedIn()){
      return true
    }
    else{
      this.router.navigateByUrl('/login')
      return false
    }
  }

}
