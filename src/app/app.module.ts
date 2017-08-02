import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';
//import { TypingCarouselDirective } from 'ng2-typing-carousel';
import { SharedModule } from './shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import {MdInputModule} from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { SayhelloComponent } from './sayhello/sayhello.component';
import { ResumeComponent } from './resume/resume.component';
import { ErrorComponent } from './error/error.component';
import { BlogComponent } from './blog/blog.component';

import {SharedService} from './shared.service';




export const firebaseConfig = {
  apiKey: 'AIzaSyCU08c3nIKEV31SEFJhP1fo3CdFbxAqP3k',
  authDomain: 'amandeep-72851.firebaseapp.com',
  databaseURL: 'https://amandeep-72851.firebaseio.com/',
  storageBucket: 'gs://amandeep-72851.appspot.com',
  messagingSenderId: '<your-messaging-sender-id>'
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SayhelloComponent,
    ResumeComponent,
    ErrorComponent,
   //TypingCarouselDirective,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      
            {
            path: '',
            redirectTo: '/home',
            pathMatch: 'full'
            },
            {
              path: 'home',
              component: HomeComponent
            },
            {
              path: 'sayhello',
              component: SayhelloComponent
            },
            {
              path: 'resume',
              component: ResumeComponent
            },
            {
              path: 'error',
              component: ErrorComponent
            },
            {
              path: 'blog',
              component: BlogComponent
            },
            {
              path: '**',
              component: ErrorComponent
            }

    ]),

    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    SharedModule,
    MdInputModule
  
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
