import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-rating',
  template: `<span *ngFor="let option of options">&#9733;</span>`,
})
export class AngularRatingComponent implements OnInit {

  @Input() ratingCount: number = 0

  options: number[] = [];
  constructor() { }

  ngOnInit(): void {
    // create an array with `count` items
    // increse every item by one
    // [1,2,3,4,...]
    this.options = Array.from({ length: this.ratingCount }, (v, k) => ++k);
  }

}
