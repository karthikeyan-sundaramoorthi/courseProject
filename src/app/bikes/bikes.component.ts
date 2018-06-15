import { Component } from '@angular/core';
import { Bike } from './bike.model';
@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent {
	bikeParent:Bike;
  constructor() { }

  /*bikeChoosenParent(bikeSelectedParent: Bike){
  	this.bikeParent = bikeSelectedParent;
  }*/
}
