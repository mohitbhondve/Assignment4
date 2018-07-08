import { Injectable } from '@angular/core';
import { IStudent } from "./istudent";
import { HttpClient} from "@angular/common/http";
import { Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http : HttpClient) { }


  private _url = "/assets/Data/Student.json";

  GetStudentDetails():Observable<IStudent[]>
  {
    return this.http.get<IStudent[]>(this._url);
  }
}
 