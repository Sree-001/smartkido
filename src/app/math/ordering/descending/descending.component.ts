import { PopupComponent } from './../../../shared-module/popup/popup.component';
import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-descending',
  templateUrl: './descending.component.html',
  styleUrls: ['./descending.component.css']
})
export class DescendingComponent implements OnInit {

  numberList = [];
  oldNumberList: number[];
  score = 0 ;
  viewGrade = false ;
  stars;
  gradeStatement = '';

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '250px',
      data: {statement: this.gradeStatement, stars: this.stars}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
   this.changeDifficultyLevel('easy'); 
  }

  // Handling the drop event 
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.numberList, event.previousIndex, event.currentIndex);
    var slideAudio = new Audio('../../../../assets/sounds/sound-2.mp3');
    slideAudio.play();
  }


  // Verifying for Ascending Order 
  checkDescendingOrder() {
    var slideAudio = new Audio('../../../../assets/sounds/sound-3.mp3');
    slideAudio.play();
    this.score = 0;
    const listLength  =  this.numberList.length ;
    this.numberList.forEach((item, index) => {
      const numberId = `asc-${item}-${index}`;
      if (( item < this.numberList[ index + 1] || item > this.numberList[index - 1 ] )) {
         document.getElementById(numberId).style.backgroundColor = '#C70039 ';
      } else {
        document.getElementById(numberId).style.backgroundColor = '#64DD17';
        this.score ++ ;
      }
  
    } );


    this.viewGrade = true;
    this.computeGrade();
  }

  resetTheOrder() {
    this.score = 0 ;
    this.viewGrade = false;
    this.numberList.forEach((item, index) => {
      const numberId = `asc-${item}-${index}`;
      this.numberList = this.oldNumberList.slice(0);
  document.getElementById(numberId).style.backgroundColor = '#FFD600' ;
    } );

  }

// Switching the Difficulty Level

  changeDifficultyLevel(levelKey) {
    if (levelKey === 'easy' ) {
         let numbers = [] ;
         for (let i = 0; i < 4 ; i++) {
             numbers.push(this.generateRandomNo(20));
         }
    this.numberList = numbers.slice(0);
    this.oldNumberList = this.numberList.slice(0);

  } else if (levelKey === 'medium') {
      let numbers = [] ;
      for (let i = 0; i < 6 ; i++) {
          numbers.push(this.generateRandomNo(50));
      }
 this.numberList = numbers.slice(0);
 this.oldNumberList = this.numberList.slice(0);

    } else {
      let numbers = [] ;
      for (let i = 0; i < 8 ; i++) {
          numbers.push(this.generateRandomNo(50));
      }
     this.numberList = numbers.slice(0);
     this.oldNumberList = this.numberList.slice(0);
    }
  }

  // Generating Random Number
  generateRandomNo(range) {
   let randomNo ;
   randomNo = Math.floor(Math.random() * range);
    return randomNo;
  }

 // Computing the Grade based on the obtained Score 
  computeGrade() {
    // alert(this.score)
    const listLength = this.numberList.length;
    
    // easy level evaluation
    if(listLength === 4) {
      if(this.score == 4){
        this.gradeStatement = " Excellent "
       this.stars = [1, 1 , 1];
      }else if(this.score == 3){
        this.gradeStatement = " Very good "
        this.stars = [1,1];
       
      }else if(this.score == 2){
        this.gradeStatement = " Good "
        this.stars = [1];
      }else{
        this.stars = [];
        this.gradeStatement = " Try once more  "

      }
    }
 //medium level evaluation
      if(listLength === 6) {
        if(this.score == 6){
          this.gradeStatement = " Excellent "
         this.stars = [1, 1 , 1];
        }else if(this.score > 4){
          this.gradeStatement = " Very good "
          this.stars = [1,1];
         
        }else if(this.score > 3){
          this.gradeStatement = " Good ";
          this.stars = [1];
        }else{
          this.stars = [];
          this.gradeStatement = " Try once more  ";
        } 
      }
        //hard level evaluation
      if(listLength == 8) {
        if(this.score == 8){
          this.gradeStatement = " Excellent "
         this.stars = [1, 1 , 1];
        }else if(this.score > 6){
          this.gradeStatement = " Very good "
          this.stars = [1,1];
         
        }else if(this.score > 4){
          this.gradeStatement = " Good ";
          this.stars = [1];
        }else{
          this.stars = [];
          this.gradeStatement = " Try once more  ";
        } 
      }
    this.openDialog();
    }

}
