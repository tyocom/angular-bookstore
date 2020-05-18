import { Component, OnInit } from '@angular/core';
import { Book } from '../../common/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[];

  constructor(private _bookService: BookService) { }

  listBooks() {
    this._bookService.getBooks().subscribe (
       data => {
        this.books = data;
       }
    )
  }
  
  ngOnInit(): void {
      this.listBooks();
  }

}
