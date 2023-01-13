import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataComponent } from './data/data.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DataComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    DataComponent,
  ]
})
export class PipesModule { }
