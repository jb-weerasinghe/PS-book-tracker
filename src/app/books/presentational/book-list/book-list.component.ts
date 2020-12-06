import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../../../shared/models/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  MAX_RATING = 10;

  @Input() books: Book[] = [];

  @Output() bookChanged = new EventEmitter();

  //options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor() { }//public angularRatingService: AngularRatingService) {}

  ngOnInit() { }

  toggleBookRead(book: Book) {
    book.read = !book.read;
    this.bookChanged.emit(book);
  }

  changeRating(rating: number, book: Book) {
    book.rating = rating;
    this.bookChanged.emit(book);
  }
}