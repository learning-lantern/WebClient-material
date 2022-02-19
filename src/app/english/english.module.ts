import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnglishRoutingModule } from './english-routing.module';
import { EnglishComponent } from './english.component';


@NgModule({
  declarations: [
    EnglishComponent
  ],
  imports: [
    CommonModule,
    EnglishRoutingModule
  ]
})
export class EnglishModule { }
