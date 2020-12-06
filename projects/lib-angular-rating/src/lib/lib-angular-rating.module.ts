import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LibAngularRatingComponent } from './lib-angular-rating.component';



@NgModule({
  declarations: [LibAngularRatingComponent],
  imports: [
    CommonModule
  ],
  exports: [LibAngularRatingComponent]
})
export class LibAngularRatingModule { }
