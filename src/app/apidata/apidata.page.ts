import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-apidata',
  templateUrl: './apidata.page.html',
  styleUrls: ['./apidata.page.scss'],
})
export class ApidataPage implements OnInit {
  studentapi:any;
  constructor(private studentService:StudentServiceService) { }

  ngOnInit() {
    this.studentService.getTododata().subscribe((getdata)=>{
      var anydata=<any>getdata;
      this.studentapi=anydata.data;
      console.log(this.studentapi);
    })
  }

}
