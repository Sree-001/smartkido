import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //  clueFlag = false;
  constructor() { }

  ngOnInit() {
  }

  // toggleClueHandler(evt) {
  //   evt.preventDefault();
  //   console.log(evt.type);
  //   this.clueFlag = !this.clueFlag ;
  // }
}
