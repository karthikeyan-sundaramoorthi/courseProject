import { Component, OnInit, Input } from '@angular/core';
import { Bike } from '../bike.model';

@Component({
  selector: 'app-bike-detail',
  templateUrl: './bike-detail.component.html',
  styleUrls: ['./bike-detail.component.css']
})
export class BikeDetailComponent implements OnInit {
	@Input() bikeChild:Bike;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(){
  	console.log('on Change');

  }

}
