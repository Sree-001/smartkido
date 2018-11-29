import { HomeComponent } from './home/home-default/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '',   loadChildren: './home/home.module#HomeModule'},
  {path: 'english', loadChildren: './english/english.module#EnglishModule'},
  {path: 'math', loadChildren: './math/math.module#MathModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
