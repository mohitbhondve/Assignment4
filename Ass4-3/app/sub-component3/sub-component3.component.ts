import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-sub-component3',
  templateUrl: './sub-component3.component.html',
  styleUrls: ['./sub-component3.component.css']
})
export class SubComponent3Component implements OnInit {

  public books = [];

  constructor( private _bookservices : BooksService) { }

  ngOnInit() {
    this.books = this._bookservices.getBooks();
  }

}
