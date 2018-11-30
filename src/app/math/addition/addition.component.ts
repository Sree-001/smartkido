import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent implements OnInit {

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
