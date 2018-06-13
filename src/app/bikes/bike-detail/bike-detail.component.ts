import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bike-detail',
  templateUrl: './bike-detail.component.html',
  styleUrls: ['./bike-detail.component.css']
})
export class BikeDetailComponent implements OnInit {
	@Input() childName:string;
  constructor() { }

  ngOnInit() {
  }

}
