import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle = "El titulo de la pagina home";

  @Input() ninja;

  alertMe(val){
  	alert(val);
  }

  constructor() { }

  ngOnInit() {
  }

}
