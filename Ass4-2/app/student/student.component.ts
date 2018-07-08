import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {


  public student=[];

  constructor(private _studentservice: StudentService) { } // DI Here...

  ngOnInit() {
    
  }

  getData()
  {
    this._studentservice.GetStudentDetails()
    .subscribe(data=>this.student=data);
  }


}
