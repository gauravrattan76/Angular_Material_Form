import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  employeeForm:FormGroup;

  constructor(private fb: FormBuilder){

  }
  
ngOnInit(){
  this.employeeForm = this.fb.group({
    fullName: ['Gaurav'],
    email: ['gauravrattan76@gmail.com'],
    date: [''],
    skills: this.fb.group({
      skillName: ['Dot net'],
      experienceInYears: ['5'],
      proficiency: ['beginner']
    })
  });
}

onSubmit(){
  console.log(this.employeeForm.value);
}
  
}


