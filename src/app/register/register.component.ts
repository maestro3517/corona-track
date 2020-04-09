import { Component, OnInit } from '@angular/core';
import { Authservice } from 'src/service/Auth-service';
import { user } from '../model/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  regUserData=<any>{}

  constructor(private auth: Authservice,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.auth.registerUser(this.regUserData)
      .subscribe(
        res =>{
          console.log(res)
          localStorage.setItem('token',res.token)
          this.router.navigateByUrl('/special')
        } ,
        err => console.log(err)
      )

    console.log(this.regUserData)
  }

}
