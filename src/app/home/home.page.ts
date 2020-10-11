import { Component } from '@angular/core';
import { StudentServiceService } from '../student-service.service';
import { Student } from './student.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  students:Student[]
  constructor(private studentService:StudentServiceService) {
    this.students=this.studentService.getAllstudent();

  }


}
