import { Component } from '@angular/core';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  message:string="";
   constructor(private service:AppServiceService) {
     this.service.getMessageUpdate.subscribe(msg=>this.message = msg);
   }
}
