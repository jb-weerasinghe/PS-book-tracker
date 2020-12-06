import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularRatingComponent } from './angular-rating.component';

@NgModule({
  declarations: [AngularRatingComponent],
  imports: [
    CommonModule
  ],
  exports:[AngularRatingComponent]
})
export class AngularRatingModule { }
