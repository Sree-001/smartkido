import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demonstration2',
  templateUrl: './demonstration2.component.html',
  styleUrls: ['./demonstration2.component.css']
})
export class Demonstration2Component implements OnInit {

  //Arrays related with the icons
  resultArr = [];
  firstArr = [];
  secondArr = [];
  firstInp;
  secondInp;

  constructor() { }
  ngOnInit() {

  }

  inputChangeHandler(id) {
    console.log(id)
    if ( id === 'firstArr') {
      this.firstArr = [];
     for ( let i = 0 ; i < this.firstInp; i++) {
          this.firstArr.push(i);
     }
    } else {
      this.secondArr = [];
      for ( let i = 0 ; i < this.secondInp; i++) {
        this.secondArr.push(i);
   }
    }
  }


  addItemsToResult() {
    this.resultArr = [];
    const totalItems = this.firstInp + this. secondInp ;
    for (let i = 0 ; i < totalItems ; i ++) {
       this.resultArr.push(i);
    }
  }

  reset() {
    this.resultArr = [];
  }

}
