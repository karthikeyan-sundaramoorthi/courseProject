import { Component, OnInit, Input } from '@angular/core';
import { Bike } from '../bike.model';
import { BikeService } from '../bikes.service';  

@Component({
  selector: 'app-bike-detail',
  templateUrl: './bike-detail.component.html',
  styleUrls: ['./bike-detail.component.css']
})
export class BikeDetailComponent implements OnInit {
  bikeChild:Bike;
  constructor(private bikeService: BikeService) { }

  ngOnInit() {
    this.bikeService.bikeChoosen.subscribe((bikeReceived:Bike) => {
      this.bikeChild = bikeReceived;
    });
  }
  ngOnChanges(){
  	console.log('on Change');

  }
  addToWishList(){
    this.bikeService.addInterestedBike(this.bikeChild.name);
  }
}
