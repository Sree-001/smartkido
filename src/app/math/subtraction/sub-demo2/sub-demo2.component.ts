import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-demo2',
  templateUrl: './sub-demo2.component.html',
  styleUrls: ['./sub-demo2.component.css']
})
export class SubDemo2Component implements OnInit {
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
    if(this.secondInp > this.firstInp){
      this.secondInp = this.firstInp;
    }
    this.firstArr = [];
   for ( let i = 0 ; i < this.firstInp; i++) {
        this.firstArr.push(i);
   }
  } else {
    this.secondArr = [];
    if(this.secondInp > this.firstInp){
      this.secondInp = this.firstInp;
    }
    for ( let i = 0 ; i < this.secondInp; i++) {
      this.secondArr.push(i);
 }
  }
}


showResult() {
  this.resultArr = [];
  const totalItems = this.firstInp - this. secondInp ;
  for (let i = 0 ; i < totalItems ; i ++) {
     this.resultArr.push(i);
  }
}

reset() {
  this.resultArr = [];
}


}
