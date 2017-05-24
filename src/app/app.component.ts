import { Component } from '@angular/core';
import { ROUTER_CONFIGURATION } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'app works!';
  name = 'ninja';
  ninja = {
  	name: 'Ryu',
  	belt: "Red"
  };
  
  yell(e){
    alert('i am yelling');
    console.log(e);
  }


}
