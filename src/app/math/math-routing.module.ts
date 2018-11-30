import { AdditionComponent } from './addition/addition.component';
import { ZeroComponent } from './zero/zero.component';
import { MathComponent } from './math-home/math.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OrderingComponent} from './ordering/ordering.component';

const routes: Routes = [
  {path: '', component: MathComponent,
  children:[
    {path: 'ordering', component: OrderingComponent},
  {path: 'zero', component: ZeroComponent},
  {path: 'addition', component: AdditionComponent}
]
}  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MathRoutingModule { }
