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
import { AdditionComponent } from './addition/addition.component';
import { Demonstration1Component } from './addition/demonstration1/demonstration1.component';
import { Demonstration2Component } from './addition/demonstration2/demonstration2.component';
import { PractiseComponent } from './addition/practise/practise.component';
import { SubtractionComponent } from './subtraction/subtraction.component';
import { SubDemo1Component } from './subtraction/sub-demo1/sub-demo1.component';
import { SubDemo2Component } from './subtraction/sub-demo2/sub-demo2.component';
import { SubPractComponent } from './subtraction/sub-pract/sub-pract.component';
import { MultiplicationComponent } from './multiplication/multiplication.component';
import { MultDemo1Component } from './multiplication/mult-demo1/mult-demo1.component';
import { MultDemo2Component } from './multiplication/mult-demo2/mult-demo2.component';
import { MultPractComponent } from './multiplication/mult-pract/mult-pract.component';
import { DivisionComponent } from './division/division.component';
import { DiviDemo1Component } from './Division/divi-demo1/divi-demo1.component';
import { DiviDemo2Component } from './Division/divi-demo2/divi-demo2.component';
import { DiviPractComponent } from './Division/divi-pract/divi-pract.component';
// import{SharedModuleModule}
@NgModule({
  declarations: [MathComponent, OrderingComponent, AscendingComponent, DescendingComponent, ZeroComponent, AdditionComponent, Demonstration1Component, Demonstration2Component, PractiseComponent, SubtractionComponent, SubDemo1Component, SubDemo2Component, SubPractComponent, MultiplicationComponent, MultDemo1Component, MultDemo2Component, MultPractComponent, DivisionComponent, DiviDemo1Component, DiviDemo2Component, DiviPractComponent],
  imports: [
    CommonModule,
    MathRoutingModule,
    SharedModuleModule
    // BrowserAnimationsModule 
  ],
  entryComponents:[OrderingComponent,AscendingComponent, DescendingComponent]
})
export class MathModule { }
