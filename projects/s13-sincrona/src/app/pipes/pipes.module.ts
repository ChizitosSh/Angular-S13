import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataComponent } from './data/data.component';
import { FormsModule } from '@angular/forms';
import { TablaComponent } from './tabla/tabla.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DataComponent,
    TablaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    DataComponent,
    TablaComponent
  ]
})
export class PipesModule { }
