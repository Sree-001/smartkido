import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-demo1',
  templateUrl: './sub-demo1.component.html',
  styleUrls: ['./sub-demo1.component.css']
})
export class SubDemo1Component implements OnInit {
 
   resultArr = [];
   randomNo ;
  userInp;
  constructor() {}

  ngOnInit() {
    this.generateRandom();
  }
 
  generateRandom() {
    this.randomNo =  Math.ceil(Math.random() * 20);
    this.pushItems();
    this.userInp = null;   
  }

  pushItems() {
    this.resultArr = [];
  for ( let i = 0 ; i < this.randomNo ; i++) {
    this.resultArr.push(i);
  }
  }

  popItems() {
  
    for (let i = 0 ; i < this.userInp ; i++) {
      this.resultArr.pop();
    }
    this.userInp = null;
    // this.verifyUserInp();
  }

  verifyUserInp(){
    if(this.userInp > this.resultArr.length){
      this.userInp = this.resultArr.length;
    }else if(this.userInp < 0 ){
      this.userInp = 0 ;
    }else{
    }
  }


  }

