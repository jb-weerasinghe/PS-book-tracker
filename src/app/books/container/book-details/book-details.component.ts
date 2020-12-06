import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../../core/services/book.service';
import { Book } from '../../../shared/models/book';
//import { AngularConsoleLoggerService } from 'angular-console-logger';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  book$: Observable<Book> =this.activatedRoute.params.pipe(
    map(p => +p.id),
    switchMap(id => this.bookService.getSingle(id))
  );

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly bookService: BookService,
    //private readonly loggingService: AngularConsoleLoggerService
  ) {}

  ngOnInit() {
 
  }

  deleteBook(book: Book) {
    if (!confirm('really delete')) {
      return;
    }

    this.bookService
      .delete(book.id)
      //.pipe(tap(() => this.loggingService.info('Somebody was deleting a book')))
      .subscribe(() => {
        this.router.navigate(['/books/overview/']);
      });
  }
}
