import { SharedModuleModule } from './../shared-module/shared-module.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnglishRoutingModule } from './english-routing.module';
import { EnglishComponent } from './english-home/english.component';

@NgModule({
  declarations: [EnglishComponent],
  imports: [
    CommonModule,
    EnglishRoutingModule,
    SharedModuleModule
  ]
})
export class EnglishModule { }
