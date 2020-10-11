import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../home/student.model';

import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  constructor(private studentService:StudentServiceService,private activatedRoute:ActivatedRoute,private router:Router) { }
  students:Student;
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('id')){
        this.router.navigate(['home']);
        return;
      }
      const sid = paramMap.get('id');
      this.students=this.studentService.getstudent(sid);
      if(!this.students.id){
        this.router.navigate(['home']);
      }
    })
  }
  editdata(id:string){
    console.log("Id",id);
    
      if(this.students.id == id){
        this.students.name == "Jks";
        
      }
    
  }
}
