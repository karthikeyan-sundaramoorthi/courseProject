import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	@Output() throwName = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  	this.throwName.emit('home');
  }
  menuSelected(title){
  	this.throwName.emit(title);
  }

}
