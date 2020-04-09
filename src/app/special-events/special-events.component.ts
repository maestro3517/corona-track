import { Component, OnInit } from '@angular/core';
import { EventServiceService } from 'src/service/event-service.service';
import { HttpErrorResponse, } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {

  eventsData=[]

  constructor(private events:EventServiceService,private router:Router) { }

  ngOnInit(): void {
    this.events.getSpecialEvents()
    .subscribe(
      res => {this.eventsData = res
      console.log(this.eventsData)
      }
      ,
      err=>{
        console.log(err)
        if(err instanceof HttpErrorResponse){
          if(err.status==401){
            this.router.navigateByUrl('/login')
          }
          if(err.status==500){
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Please Login as a Verified User'
            })
            this.router.navigate(['/login'])
          }
        }
        // if(err instanceof ServerResponse){
         
        // }
      }
    )
}
  }


