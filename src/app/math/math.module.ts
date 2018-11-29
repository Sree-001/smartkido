import { SharedModuleModule } from './../shared-module/shared-module.module';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MathRoutingModule } from './math-routing.module';
import { MathComponent } from './math-home/math.component';
import { OrderingComponent } from './ordering/ordering.component';
import { AscendingComponent } from './ordering/ascending/ascending.component';
import { DescendingComponent } from './ordering/descending/descending.component';
import { ZeroComponent } from './zero/zero.component';
// import{SharedModuleModule}
@NgModule({
  declarations: [MathComponent, OrderingComponent, AscendingComponent, DescendingComponent, ZeroComponent],
  imports: [
    CommonModule,
    MathRoutingModule,
    SharedModuleModule
    // BrowserAnimationsModule 
  ],
  entryComponents:[OrderingComponent,AscendingComponent, DescendingComponent]
})
export class MathModule { }
