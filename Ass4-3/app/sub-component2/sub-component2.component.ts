import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-sub-component2',
  templateUrl: './sub-component2.component.html',
  styleUrls: ['./sub-component2.component.css']
})
export class SubComponent2Component implements OnInit {

  public books = [];
  constructor(private _bookservice:BooksService) { }

  ngOnInit() {
    this.books = this._bookservice.getBooks();
  }

}
