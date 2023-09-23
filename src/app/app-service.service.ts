import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor() { }

  private message = new BehaviorSubject("This is initial message");
  getMessageUpdate = this.message.asObservable();

  setMessage(msg:string){
    this.message.next(msg);
  }
}
