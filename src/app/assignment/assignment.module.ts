import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignmentComponent } from './assignment.component';



@NgModule({
  declarations: [
    AssignmentComponent
  ],
  imports: [
    CommonModule,
  ],
  exports : [AssignmentComponent]
})
export class AssignmentModule { }
