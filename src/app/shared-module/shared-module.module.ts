import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTreeModule} from '@angular/material/tree';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {CdkTreeModule} from '@angular/cdk/tree';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import { PopupComponent } from './popup/popup.component';
@NgModule({
  declarations: [PopupComponent],
  imports: [
    CommonModule,
    FormsModule,
    // BrowserAnimationsModule,
    MatIconModule,
    MatDialogModule,
    MatTabsModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatCardModule,
    MatStepperModule,
    DragDropModule,
    CdkTreeModule,
    MatMenuModule,
    MatTreeModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    // BrowserAnimationsModule,
    MatIconModule,
    MatDialogModule,
    MatTabsModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatCardModule,
    MatStepperModule,
    DragDropModule,
    CdkTreeModule,
    MatMenuModule,
    MatTreeModule
  ],
  entryComponents:[PopupComponent]
})
export class SharedModuleModule { }
