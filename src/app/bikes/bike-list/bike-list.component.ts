import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Bike } from '../bike.model';
import { BikeService } from '../bikes.service';  
  

@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.css']
})
export class BikeListComponent implements OnInit {
  bikes:Bike[] = [];
	
  constructor(private bikeService: BikeService) { }

  ngOnInit() {
    this.bikes = this.bikeService.getBikes();
  }
  selectBike(bikeSelected:Bike){
    this.bikeService.bikeChoosen.emit(bikeSelected);
  }

}
