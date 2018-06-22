import { Component, OnInit } from '@angular/core';
import { WishListService } from './wish-list.service';
@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
	bikesInterested: string[];
  constructor(private wishlistService:WishListService ) { }

  ngOnInit() {
  	this.bikesInterested = this.wishlistService.getInterestedBikes();
  	this.wishlistService.interestAdded.subscribe((bikesReceived:string[]) => {
  		this.bikesInterested = bikesReceived;
  	});
  }

}
