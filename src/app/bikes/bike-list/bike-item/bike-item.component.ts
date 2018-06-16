import { Component, OnInit , Input} from '@angular/core';
import { Bike } from '../../bike.model';

@Component({
  selector: 'app-bike-item',
  templateUrl: './bike-item.component.html',
  styleUrls: ['./bike-item.component.css']
})
export class BikeItemComponent implements OnInit {
	@Input() bike:Bike;
  constructor() { }

  ngOnInit() {
  	console.log('Init');
  }

  ngOnChanges(){
  	console.log('on Change');
}
  ngDoCheck(){
  	console.log('ngDoCheck');
}
ngAfterContentInit(){
  	console.log('ngAfterContentInit');
}

}
