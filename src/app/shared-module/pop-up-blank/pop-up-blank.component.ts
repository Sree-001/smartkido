import {Component,  OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-pop-up-blank',
  templateUrl: './pop-up-blank.component.html',
  styleUrls: ['./pop-up-blank.component.css']
})
export class PopUpBlankComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PopUpBlankComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {}

  
    ngOnInit() {
    }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
