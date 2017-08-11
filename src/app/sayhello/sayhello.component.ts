import { Component, OnInit, Input, OnChanges, ChangeDetectorRef, ApplicationRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
//import { AngularFire, FirebaseListObservable } from 'angularfire2';
//import { AngularFire } from 'angularfire2';
import {ActivatedRoute} from '@angular/router';
import { User } from './user.interface';
import {AppComponent} from '../app.component';
import {SharedService} from '../shared.service';
import {Subscription} from 'rxjs';





@Component({
  selector: 'app-sayhello',
  templateUrl: './sayhello.component.html',
  styleUrls: ['./sayhello.component.css'],
  inputs: ['title']
})
export class SayhelloComponent implements OnInit {
@Input() title;
  public myForm: FormGroup;
  public submitted: boolean = false ;
  public events: any[] = [];
  public notSub: boolean = true;
  value: any;
  subscription: Subscription;
  sub: any;
  error: any;
  fform:any;
  

    constructor(private _fb: FormBuilder,  private app: AppComponent) { 
        
        this.value = app.subject.asObservable();
        
        this.subscription = this.value.subscribe(
              item => this.submitted = item.submitted,
              err => this.error = err
          );
     }

     ngOnChanges(){
       
     }

    ngOnInit() {
        this.myForm = this._fb.group({
            name: ['', [<any>Validators.required]],
            email: ['', [<any>Validators.required, <any>Validators.pattern("[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[a-zA-Z]{2,3}$")]],
            message: ['', [<any>Validators.required]]
        });
    }

    
    save(model, isValid: boolean) {
     
        var date = new Date();
        model["date"] = date.toString();
       console.log(this.fform);

       
        if(isValid){
              this.submitted = true;
              console.log(model);
              //this.af.database.list("https://amandeep-72851.firebaseio.com/form").push(model);
              this.myForm.reset()
        }
       
        
    }

}
