import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'smartkido';
  timePeriods = [
    36,23,45,56,12,67
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);
  //  this.checkforAscOrder(); 
  }
checkforAscOrder(){
  this.timePeriods.forEach((item,index)=>{
    
       if(item > this.timePeriods[index + 1] || item < this.timePeriods[index - 1]){
      document.getElementById(item.toString()).style.backgroundColor = "#F44336";
    }else{
      document.getElementById(item.toString()).style.backgroundColor = "#43A047";
    }
    if(index === this.timePeriods.length - 1){
        // this.openSnackBar("You Evaluation ","complete");
    }
  })
  
}

}
