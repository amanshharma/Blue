import { Component, AfterViewInit } from '@angular/core';
import {SayhelloComponent} from './sayhello/sayhello.component';
import {SharedService} from './shared.service';
import {Subject} from 'rxjs/Subject';

declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  val = 0;
  constructor(private sharedService: SharedService){
  	this.sharedService.val = 1;

  }

  
  
  /*toggle(){
  	console.log("inside toggle!");
  if(this.sharedService.val == 1){
      this.sharedService.val = 0;
      console.log("aaa")
  }else{
      this.sharedService.val = 1;
      console.log("bbb")

   }   
}*/
	subject = new Subject();
 	id=0;
 	submitted = false;

 	toggle() {
  	 this.subject.next({submitted:false});
 	}

}

