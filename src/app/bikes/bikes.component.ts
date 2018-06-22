import { Component } from '@angular/core';
import { Bike } from './bike.model';
import { BikeService } from './bikes.service';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css'],
  providers: [BikeService]
})
export class BikesComponent {
  constructor() { }

  
}
