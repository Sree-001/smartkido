import { Component, OnInit } from '@angular/core';
import { PopUpBlankComponent } from 'src/app/shared-module/pop-up-blank/pop-up-blank.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-sub-pract',
  templateUrl: './sub-pract.component.html',
  styleUrls: ['./sub-pract.component.css']
})
export class SubPractComponent implements OnInit {
  selectedLevel;
  numberOne;
  numberTwo;
  oldNumberOne;
  oldNumberTwo;
  result;
  score ;
  message;

  // constructor() { }

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(PopUpBlankComponent, {
      width: '250px',
      data: {score: this.score, message: this.message}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }










  ngOnInit() {
    this.levelProcessor('easy');
  }

 reset(){
  this.numberOne = this.oldNumberOne;
  this.numberTwo = this.oldNumberTwo;
  this.result = null;
 }


  generateRandomNo( range) {
   return Math.ceil(Math.random() * range);
  }
  
  levelProcessor(levelKey){
    this.numberOne = null;
    this.numberTwo  = null;
    this.result = null;
  if(levelKey === 'easy'){
   this.numberOne = this.generateRandomNo(20);
   this.numberTwo = this.generateRandomNo(this.numberOne);
   this.oldNumberOne = this.numberOne;
   this.oldNumberTwo = this.numberTwo;
  }else if(levelKey === 'medium'){
    this.numberOne = this.generateRandomNo(100);
    this.numberTwo = this.generateRandomNo(this.numberOne);
    this.oldNumberOne = this.numberOne;
    this.oldNumberTwo = this.numberTwo;

  }else{
    this.numberOne = this.generateRandomNo(1000);
    this.numberTwo = this.generateRandomNo(this.numberOne);
    this.oldNumberOne = this.numberOne;
    this.oldNumberTwo = this.numberTwo;
  }


  }
  
  answerValidator(){
  let answer = this.numberOne - this.numberTwo;
  if(this.result){
    ;
  if(this.result === answer){
   this.score = 100;
   this.message = "Excellent";
    this.openDialog();
  } else{
    this.score = 0;
    this.message = "Try Once More"; 
   this.openDialog();
  } 
}

  }



}




