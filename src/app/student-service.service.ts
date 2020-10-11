import { Injectable } from '@angular/core';
import { Student } from './home/student.model';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor(public http:HttpClient) { }
  private student:Student[] = [
    {
    id:"201606100110078",
    name:"Fenil",
    m1:90,
    m2:99,
    m3:99
  },
  {
    id:"201606100110059",
    name:"xyz",
    m1:90,
    m2:85,
    m3:99
  },
  {
    id:"201606100110045",
    name:"pqr",
    m1:90,
    m2:65,
    m3:78
  },
  
];
getAllstudent(){
  
  return [...this.student];
}
getstudent(studentId){
  return {
    ...this.student.find(student => {
      return student.id === studentId;
    }),
  };
}
getTododata(){
  var url="https://reqres.in/api/users";
  return this.http.get(url);
}
}
