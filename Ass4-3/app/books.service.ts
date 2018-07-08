import { Injectable } from '@angular/core';
import { IBooks } from './ibooks';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

 public books = [
   {"name" : "C" , "price" : 255 , "author" : "denis" , "pages" : 300},
   {"name" : "C++" , "price" : 300 , "author" : "brian" , "pages" : 2000},
   {"name" : "Java", "price" : 201, "author" : "Jems" , "pages" : 3000} 
 ]


  constructor() { }

  getBooks()
  {
    return this.books;
  }
}
