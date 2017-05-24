import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle = "El titulo de la pagina home";

  @Input() ninja;
  @Output() onYell = new EventEmitter();


  alertMe(val){
  	alert(val);
  }

  fireYellEvent(e){
    this.onYell.emit(e);

  }

  constructor() { }

  ngOnInit() {
  }

}
