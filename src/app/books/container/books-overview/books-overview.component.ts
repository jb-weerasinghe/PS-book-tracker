import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../core/services/book.service';
import { Book } from '../../../shared/models/book';

@Component({
  selector: 'app-books-overview',
  templateUrl: './books-overview.component.html',
  styleUrls: ['./books-overview.component.scss']
})
export class BooksOverviewComponent implements OnInit {
  public allReadbooks: Book[] = [];
  public allUnreadbooks: Book[] = [];

  public activeTabIndex = 0;

  constructor(
    private readonly bookService: BookService,
    // private readonly loggingService: AngularConsoleLoggerService
  ) { }

  ngOnInit() {
    this.getBooks(false);
  }

  bookChanged(book: Book) {
    this.bookService.update(book).subscribe(() => {
      this.getBooks(this.currentTabIsReadTab());
      // this.loggingService.info('Somebody was changing a book');
    });
  }

  loadBooks() {
    this.getBooks(this.currentTabIsReadTab());
  }

  private getBooks(readAlready: boolean) {
    if (readAlready) {
      this.bookService
        .getAllReadBooks()
        .subscribe((books: Book[]) => (this.allReadbooks = books));
    } else {
      this.bookService
        .getAllUnreadBooks()
        .subscribe((books: Book[]) => (this.allUnreadbooks = books));
    }
  }

  private currentTabIsReadTab() {
    return this.activeTabIndex === 1;
  }
}
