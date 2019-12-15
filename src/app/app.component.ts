import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { FormBuilder,FormGroup } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {PopUpComponent} from '../app/pop-up/pop-up.component';

export interface DialogData {
  animal: string;
  name: string;
}

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  employeeForm:FormGroup;
  animal: string;
  name: string;


  constructor(private fb: FormBuilder,public dialog: MatDialog){

  }
  
ngOnInit(){
  this.employeeForm = this.fb.group({
    fullName: ['Gaurav'],
    email: ['gauravrattan76@gmail.com'],
    date: [''],
    gender: [''],
    skills: this.fb.group({
      skillName: ['Dot net'],
      experienceInYears: ['5'],
      proficiency: ['beginner']
    })
  });
}

foods: Food[] = [
  {value: 'steak-0', viewValue: 'Steak'},
  {value: 'pizza-1', viewValue: 'Pizza'},
  {value: 'tacos-2', viewValue: 'Tacos'}
];

onSubmit(){
  console.log(this.employeeForm.value);
}
openDialog(): void {
  const dialogRef = this.dialog.open(PopUpComponent, {
    width: '1000px',
    data: {name: "Gaurav", animal: "Rattan"}
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    this.animal = result;
  });
}
  
}


