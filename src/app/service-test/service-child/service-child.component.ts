import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-service-child',
  templateUrl: './service-child.component.html',
  styleUrls: ['./service-child.component.css']
})
export class ServiceChildComponent implements OnInit {
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
