import { EventEmitter } from '@angular/core';
export class WishListService {
	bikesInterested: string[] = ['Honda'];
	interestAdded = new EventEmitter<string[]>();
	getInterestedBikes(){
		return this.bikesInterested.slice();
	}
	addInterestedBike( bikeInterested: string){
		this.bikesInterested.push(bikeInterested);
		this.interestAdded.emit(this.bikesInterested);
	}
}