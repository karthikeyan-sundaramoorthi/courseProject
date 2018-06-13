import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'karthi';
  showComponent:string;
  getName(event:string){
  	this.showComponent = event;
  }
}
