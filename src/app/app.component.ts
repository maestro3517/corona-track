import { Component } from '@angular/core';
import { Authservice } from 'src/service/Auth-service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'corona';
  constructor(public authService:Authservice,private router:Router){}

  logOut(){
    localStorage.removeItem('token')
    this.router.navigate(['/events'])
  }
}
