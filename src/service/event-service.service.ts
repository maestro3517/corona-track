import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {

  private eventsurl='http://localhost:3000/api/events'
  private specialEventsurl='http://localhost:3000/api/special'


  constructor(private http:HttpClient) { }

  getEvents():Observable<any>{
    return this.http.get(this.eventsurl)
  }

  getSpecialEvents():Observable<any>{
    return this.http.get(this.specialEventsurl)
  }

}
