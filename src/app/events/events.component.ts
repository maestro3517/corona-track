import { Component, OnInit } from '@angular/core';
import { EventServiceService } from 'src/service/event-service.service';
import { events } from '../model/events';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  eventsData = []

  constructor(private events: EventServiceService) { }

  ngOnInit() {
    this.events.getEvents()
      .subscribe(
        res => {this.eventsData = res
        console.log(this.eventsData)
        }
        ,
        err=>console.log(err)
      )
  }

}
