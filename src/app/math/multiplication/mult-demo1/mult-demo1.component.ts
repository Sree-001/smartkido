import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mult-demo1',
  templateUrl: './mult-demo1.component.html',
  styleUrls: ['./mult-demo1.component.css']
})
export class MultDemo1Component implements OnInit {

  itemsCount: number;
  itemsBunchCount: number;
  itemsBunch = [1];
  items = [] 
  result = 0;
  constructor() { }

  ngOnInit() {
  }
 
  pushItems() {
    this.items = [];
   for(var i = 0; i <  this.itemsCount ; i++){
     this.items.push(i);
   }
  }

  pushItemsBunch(){
    this.itemsBunch = [];
    for(var i = 0 ; i< this.itemsBunchCount ; i++) {
      this.itemsBunch.push(i);
    }
  }
 
  computeResult(){
    this.result = this.itemsCount * this.itemsBunchCount;
  }

}
