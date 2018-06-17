import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-service-child2',
  templateUrl: './service-child2.component.html',
  styleUrls: ['./service-child2.component.css']
})
export class ServiceChild2Component implements OnInit {
	result: string;
	@ViewChild('fName') fName:ElementRef;
	@ViewChild('lName') lName:ElementRef;
  constructor() { }

  ngOnInit() {
  }
	getName(){
		this.result = this.fName.nativeElement.value +' '+ this.lName.nativeElement.value;
	}
}
