import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var jQuery;

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   ngAfterViewInit(){
  	
 
				jQuery(document).ready(function() {
					jQuery('.back-to-top').fadeOut();
				 
					var offset = 250;
					 
					var duration = 700;
					 
					jQuery(window).scroll(function() {
					 
						if (jQuery(this).scrollTop() > offset) {
						 
						jQuery('.back-to-top').fadeIn(duration);
						 
						} else {
						 
						jQuery('.back-to-top').fadeOut(duration);
						 
						}
					 
					});
					 
					 
					 
					jQuery('.back-to-top').click(function(event) {
					 
						event.preventDefault();
						 
						jQuery('html, body').animate({scrollTop: 0}, duration);
						 
						return false;
					 
					})
				 
				});


				

				jQuery(".javascriptPath, .html5Path, .css3Path, .angular2Path, .javaPath").viewportChecker({
			        classToAdd: "animate",
			        classToAddForFullView: "",
			        invertBottomOffset: 0,
			        repeat: false
			    });



			    jQuery(".nodePath").viewportChecker({
			        classToAdd: "dashForNode",
			        classToAddForFullView: "",
			        invertBottomOffset: 0,
			        repeat: false
			    });

			    jQuery(".desc1, .img1, .desc2, .img2").viewportChecker({
			        classToAdd: "visible",
			        classToAddForFullView: "",
			        invertBottomOffset: 0,
			        repeat: false
			    });
	}




}
