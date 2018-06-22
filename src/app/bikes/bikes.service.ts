import { Injectable, EventEmitter} from '@angular/core';
import { Bike } from './bike.model';
import { WishListService } from '../wish-list/wish-list.service';

@Injectable()

export class BikeService {
	bikeChoosen = new EventEmitter<Bike>();
	bikeInterested:string;
	bikes:Bike[] = [ new Bike('Yamaha FZ', 'The Yamaha FZ16, also called Yamaha Byson in indonesia, is a standard motorcycle made by Yamaha since 2008. The FZ16 is modeled after the larger FZ1 with a scaled down engine capacity', 'https://imgd.aeplcdn.com//642x361//n/bw/models/colors/yamaha-fz16-panther-black-1486843236392.jpg',85000 ), new Bike('R15', 'The Yamaha YZF-R15 is a single cylinder sport bike made by Yamaha Motor Company since 2008. In September 2011, the second iteration, called v2.0, was released in India, and in April 2014 it was released in Indonesia.', 'https://imgd.aeplcdn.com/393x221/bw/models/yamaha-yzf-r15-s.jpg', 100000 )];
	constructor(private wishlistService:WishListService){}
	getBikes(){
		return this.bikes.slice();
	}

	addInterestedBike(bikeInterested:string){
		this.bikeInterested = bikeInterested;
		this.wishlistService.addInterestedBike(this.bikeInterested);
	}
}