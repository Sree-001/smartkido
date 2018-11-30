import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demonstration1',
  templateUrl: './demonstration1.component.html',
  styleUrls: ['./demonstration1.component.css']
})
export class Demonstration1Component implements OnInit {

  projectorArr ;
  inputField;

  constructor() { }

  ngOnInit() {
    this.projectorArr = [];
  }

  pushItem(count) {
    for (let i = 0 ; i < count; i++) {
         this.projectorArr.push(i);
    }
    this.inputField = null;
  }

  emptyItems () {
    this.projectorArr = [] ;
  }
}
