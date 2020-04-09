import { Component, OnInit } from '@angular/core';
import { user } from '../model/user';
import { Authservice } from 'src/service/Auth-service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
  


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logUser = <any>{};

  constructor(private auth:Authservice,private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    this.auth.loginUser(this.logUser)
      .subscribe(
        res=>{   this.router.navigateByUrl('/special')
        console.log(res)
        localStorage.setItem('token',res.token)
      },
        err=>{   Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Incorrect Username/Password!'
        }) 
        // this.logUser.Name=''
        // this.logUser.password=''

        console.log(err)
      }
      )
  }

}
