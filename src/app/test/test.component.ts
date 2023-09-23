import { Component } from '@angular/core';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  Message:string="";

  constructor(private service:AppServiceService) {
   this.service.getMessageUpdate.subscribe(msg=>this.Message = msg);
  }

  updateMessage(){
    this.service.setMessage("This is updated test message");
  }


}
