import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-zero',
  templateUrl: './zero.component.html',
  styleUrls: ['./zero.component.css']
})
export class ZeroComponent implements OnInit {

   targetBox: number ;
  
   box1 = [4,5,7];

   box2 = [1,2];

   box1Right=false;
   box1Wrong=false;
   box2Right=false;
   box2Wrong=false;
  
   
  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home'
  ];

  done = [
    'Get up',
    'Brush teeth',
  ];

   
  constructor() { }

  ngOnInit() {
    this.targetBox = Math.ceil(Math.random() * 2 );
   // alert(this.targetBox)
  }

  drop(event: CdkDragDrop<string[]>) {
    var slideAudio = new Audio('../../../../assets/sounds/sound-2.mp3');
    slideAudio.play();
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  randomize() {
    this.targetBox = Math.ceil(Math.random() * 2 );
    // alert(this.targetBox)
    this.box1Right=false;
    this.box1Wrong=false;
    this.box2Right=false;
    this.box2Wrong=false;
  }

  checkResult() {
    var slideAudio = new Audio('../../../../assets/sounds/sound-3.mp3');
    slideAudio.play();
    if(this.targetBox === 1){
     if(this.box1.length == 0){
       this.box1Right = true;
       this.box1Wrong = false;
       
     }else{
       this.box1Wrong = true;
       this.box1Right = false;

      }

   }else{
    if(this.box2.length == 0){
      this.box2Right = true;
      this.box2Wrong = false;

    }else{
      this.box2Wrong = true;
      this.box2Right = false;

    }
   
   }
  }

}
