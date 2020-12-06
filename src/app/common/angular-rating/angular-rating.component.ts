import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-angular-rating',
  template: `
    <ng-container *ngFor="let option of options">
      <span  [ngClass]="{rated: option <= currentRating}" 
      class="rating-wrapper"
      (click)="changeRating(option)"
      >&#9733;</span>
    </ng-container>
    {{currentRating}}`,
  styles: [
    `
    .rated {
      color: orange;
    }

    .rating-wrapper {
      cursor: pointer;
    }
  `,
  ],
})
export class AngularRatingComponent implements OnInit {

  @Input() ratingCount: number = 0
  @Input() currentRating: number = 10

  @Output() ratingChanged = new EventEmitter();

  options: number[] = [];
  constructor() { }

  ngOnInit(): void {
    // create an array with `count` items
    // increse every item by one
    // [1,2,3,4,...]
    this.options = Array.from({ length: this.ratingCount }, (v, k) => ++k);
  }

  public changeRating(rating: number) {
    console.log(rating)
    //this.currentRating = rating;
    this.ratingChanged.emit(rating)
  }

}
