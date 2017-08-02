import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  carousel:any;

  constructor() { 
      this.carousel = ['Software Engineer', 'Web Developer', 'Blogger'];
  }

  ngOnInit() {
  }

  ngAfterViewInit(){

	$(".landingArea, .caseStudies, .cta, .subscribe").viewportChecker({
        classToAdd: "visible",
        classToAddForFullView: "",
        offset: 150,
        invertBottomOffset: 0,
        repeat: false
    });

   


  }   


}
